---
title: "Using bootstrap modals with .NET Core"
date: 2020-08-31 13:12:00-00:00
---

This is part-two of a series of js related stuff I was working on for a project at work. For this project our client wanted to access forms/additional information from one page without having to open another page. I won't go into the positives/negatives of using modals, this is more documenting the path we went with it. At time of this blog, the version of bootstrap used is 4.3.6, and jQuery is 3.3.1. Since bootstrap at this version number required jQuery this blog includes some jQuery and mostly vanilla js. This setup also uses razor pages, since they were easy to setup. I will comment 

## Setup
1. Add bootstrap js/css files to layout: Easy step, just add these to your netcore project layout file under `pages/shared/_layout.cshtml` or however you're using this.
2. Add jquery to layout: Add to same file as step 1.
3. Add modal functionality to js file: Create a new file under `wwwroot/js`. Mine is just called modalloader.js.
4. Reference modal library on page: Call the function


## Code

```
function ModalLoader() {
    'use strict'

    const container = document.getElementById("activityContainer");
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


I mentioned in the previous entry in my js related stuff that I added functionality for confirming cancel on modals based on if there was existing input. It's super easy to add a confirm step with the modal functionality from bootstrap. I added this step as a part of the loadModal function:

1. Initialize the saved form data variable
2. When loading a new modal, save that serialized form inputs in a string
3. Bind the cancel function, which will compared current modal form, versus what was stored on load.

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