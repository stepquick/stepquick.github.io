---
title: "Using bootstrap modals with .NET Core"
date: 2020-08-31 13:12:00-00:00
---

This is part-two of a series of js related stuff I was working on for a project at work. For this project our client wanted to access forms/additional information from one page without having to open another page. I won't go into the positives/negatives of using modals, this is more documenting how I chose to deal with modals on this project. At time of this blog, the version of bootstrap used is 4.3.6, and jQuery is 3.3.1. Since bootstrap at this version number required jQuery this blog includes some jQuery and mostly vanilla js. This setup also uses .netcore razor pages, because my job is .netcore and c#.

This took a bit longer to write out than I was expecting, since the first part was posted in January. I suck at writing.

## Setup
Here are the general steps I used to flesh this out. We decided on using bootstrap/jquery since it's simple and easy to use. 
1. Add bootstrap js/css files to layout: Easy step, just add these to your netcore project layout file under `pages/shared/_layout.cshtml`. This part is pretty straightforward, and I believe we ended up going with a cdn hosted version since they're available 99.9% of the time. This app is hosted on an intranet so it doesn't need outside access to public.
2. Add jquery to layout file: Add to same file as step 1. This is required for this version of bootstrap. TWBS now no longer requires jquery as a dependency, so it might be good for me to come back in the future and redo this tutorial. 
3. Added modal functionality to a separate js file: Create a new file under `wwwroot/js`. Mine is just called modalloader.js. It works better on a separate file because when using a cshtml file it's slower waiting for visual studio to recompile the code. A js file doesn't require the recompile. Also cleaner to keep the js separate.
4. Reference modal library on page you want to use a modal. I tend to either use module style of js files, but for this example I will use an iife, since they scope the function within that closure, to keep the namespace cleaner.

## Code (modalloader.js)

```
function ModalLoader() {
    'use strict'

    const modalContainer = $("#modal-container");

    let isModalLoading = false;
    let isModalSaving = false;

    let initialFormData;

    function init() {
        loadModalButtons()
    }

    init();

    function loadModalButtons(){
        let buttons = document.querySelectorAll("[data-toggle='ajax-modal']");
        buttons.forEach(function (button) {
            button.addEventListener("click", async function (e) {
                e.preventDefault();
                if (!isModalLoading) {
                    await loadModal(this.dataset.url);
                }
            });
        });
    }

    function loadModal(url){
        isModalLoading = true;
        await fetch(url).then(response => response).then(async response => {
            await response.text().then(data => {
                //this version of bootstrap uses jQuery
                modalContainer.html(data).find(".modal").modal("show");
                overrideSave();
            }).finally(() => {
                isModalLoading = false;
            });
        });
    }

    function overrideSave(parentId = "") {
        var modalSaveBtn = document.querySelectorAll("button[data-save='modal']");
        if (modalSaveBtn.length) {
            modalSaveBtn.forEach(async function overrideModalSaveButton(btn) {
                btn.addEventListener("click", async function (e) {
                    e.preventDefault();
                    if (!isModalSaving) {
                        await saveModal(parentId);
                    }
                });
            });
        }

    }

    async function saveModal() {
        let saveForm = document.getElementById("saveForm");
        isModalSaving = true;
        await fetch(saveForm.action, {
            method: "POST",
            body: new FormData(saveForm)
        }).then(async response => {
            await response.text().then(async data => {
                const newElement = $(data);
                let success = newElement.find(".alert-success");
                if (success.length > 0) {
                    modalContainer.find('.modal').empty().modal("hide");
                } else {
                    modalContainer.find('.modal-body').replaceWith(newElement.find(".modal-body"));
                    modalContainer.find('.modal-header').replaceWith(newElement.find(".modal-header"));
                    overrideSave();
                }
            }).finally(() => {
                isModalSaving = false;
            });
        });
    }
}
```

Here's a sample of the code I ended up coming up with. The function is somewhat easy to discern, but could do better with comments. I find the div by id called `#modal-container`. Next I run an init function which finds all elements with a `data-toggle` attribute or `ajax-modal` and add a click event listener to run a function called loadModal, passing a `data-url` attribute from the element. 

These elements are intended to be anchor tags `<a></a>`, and I wanted to ensure that if js wasn't being used I also had an href set with similar href from the data-url that would allow the link to go to a separate page.

eg:
```
<a data-toggle="ajax-modal" data-url="/incident/2/victim/create?handler=createPartial" href="/incident/2/victim/create">Create Modal</a>
```

This function will fetch the url in data-url, which for my setup I used aspnet razor page code behinds for returning partial view results, which explains the `handler=createPartial` being on the end of the url. 

I posted a bit of pseudo code to explain how I structured my classes to work with this js.

```
CreatePage : Page {
    public CreatePage(...di here){
        ...di here
    }

    //return full page with form.
    public async PageResult OnGet() {
        await loadCommonData();
        return Page();
    }

    //redirect back to index after creation, otherwise show the onget page with failed validation messages
    public async PageResult OnPost() {
        ...do code validation here

        ..return page from onGet if failed.
        ...run loadCommonData to reload data

        ...redirect back to index
    }

    //return form partial wrapped by modal instead of full page.
    public async PartialViewResult OnGetCreatePartial() {
        await loadCommonData();
        return PartialViewResult(///form partial returned);
    }

    //return success modal, otherwise show the ongetcreatepartial with failed validation messages
    public async PartialViewresult OnPostCreatePartial() {
        ...do code validation here

        ...return partial view result from onGetCreatePartial if failed.
        ...run loadCommonData to reload data

        ...return template saying all success
    }

    private async Task loadCommondata {
        ...await some service that was di'd. REPO
    }
}
```

This is the basic outline of how my razor page code behinds looked when using the modal setup. This site has at least 15 different but similar modal uses, so I chose to do these two pairs of get/posts, one for the page view, and one for returning a modal wrapping a form. That way it works with or without js.

```
<form method="post" id="saveForm">
    <input type="text" name="Word" />
    <select name="test">
        <option value="test">Test</option>
    </select>
    <button type="submit"></button>
</form>
```

Here's a sample of code layout for the form that is used between both page and the partial. It contains an id of `saveForm` which I use to tie the form into the js. With .netcore, I just need to set the form action to post and it will post to the OnPost version of the get handler, which makes it easy to understand. For the page/modal I do some validation of the dto, which depends on the page/modal, submit to a repo service, and then I return a success modal I use for verifying what to do with the modal. 

The .netcore OnPost function can be used to return a validated model, so I can have it return the html for the filled out modal, validation errors and all, and use that to swap out html in the open modal making it look seemless. That's what I'm doing when I check for `success.length`, it's looking for the success message template I return on successful submission. If it failed, I overwrite the open modal with html from the OnPost return, and then rebind the buttons since the original event listeners are destroyed in the process of updating the modal.

I close the modal after this. However at the end of this I tended to have another module of js to reload the page or in the case of the page, I redirected back to the parent page (incident). I may end up making another 

##Confirm Unsaved Changes

Our client wanted to prevent accidentally closing the modal/page with unsaved changes.

Fortunately this module can also work well with my <a href="/confirming-unsaved-changes-on-html-forms-using-js/" target="_blank">previous</a> entry with making a confirm js library for closing modals. 

I just needed to add an additional variable, initialFormdata, and add this bindConfirmCancel functionality to loadModal.

```
let initialFormData;

function loadModal(url){
    isModalLoading = true;
    await fetch(url).then(response => response).then(async response => {
        await response.text().then(data => {
            //this version of bootstrap uses jQuery
            modalContainer.html(data).find(".modal").modal("show");
            overrideSave();
            initialFormData = modalContainer.find("form").serialize();
            bindConfirmCancel();
        }).finally(() => {
            isModalLoading = false;
        });
    });
}

function bindConfirmCancel() {
    let modal = modalContainer.find(".modal");
    let filters = new Set(["__RequestVerificationToken"]);
    let arrayWithoutToken = (array) => array.split("&").filter(e => !filters.has(e.split("=")[0])).join("&");
    modal.on('hide.bs.modal', function (e) {
        var form = modal.find("form");
        if (form.length > 0 && arrayWithoutToken(initialFormData) !== arrayWithoutToken(form.serialize())) {
            if (!confirm("You have unsaved changes, are you sure you want to close this?")) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    });
}
```

What I do is on load of the modal, I save the formdata as a serialized string. You can do this with either `$(formelement).serialize()`, or `new URLStringParams(new FormData(formelement)).toString()`. I chose to just use serialize, since I have to use jQuery anyways. The bindConfirmCancel function will use the on hide modal function to compare the initialFormData with the current modal forms inputs. I also included a list of filters to remove from the serialized form input, because I'm using csrf validation that .netcore encourages you use. Since this is different between page requests, including the same page, it makes sense to strip it from the form string, otherwise it will the confirm message.

##Use

```
<script src="~/modalLoader.js"></script>
<script>
    (function() {
        let modalLoader = ModalLoader();
        modalLoader.init();
    })();
</script>
```

###Notes

* Loading the modal html could be faster; it requires waiting for iis/nginx to serve the html and then waiting for js to parse that and return to them dom. In some cases, depending on the data returning, it can get noticeably slower. 
* The modal should also have a loading indication to show the user it's working.
* It's good to make sure you can't have more than one modal at a time loading, I use an if statement to check `isModalLoading` and set it to true at the start of the load; I set it to false on finally in case the modal fails to load, since fetch returns a promise, and js promises are awesome.
* It also doesn't take into account loading animations to indication action. I ended up using additional js functionality to show modal loading/saving.
* I work with developers that don't like js, and come from most .net backgrounds. I'm basically responsible for understanding the js and keeping it working, which I'm ok with, js is awesome, like promises.
* This relies on an element existing, the div, otherwise it fails. The fetch functionality doesn't do well with http error codes, so you will need to make your own [function](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/) for dealing with this.
* This doesn't allow you to load more than one modal at a time. It could be adjusted to, but would need more work.
* Are modals good to use anymore? I don't really like this system anymore, it could be good to consider other ways to deal with this.