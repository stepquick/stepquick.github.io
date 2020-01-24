---
title: "Confirming unsaved changes on html forms using JS"
date: 2020-01-24 13:00:00-00:00
---

For a recently project I thought it would be a good idea to implement a check to confirm if there were any unsaved changes for a page, since most of the pages are forms. JS to the rescue; with browsers nowadays, it's really easy to access forms input fields. So this JS will target newer browsers, but I will include jQuery equivalent that works with older browsers.

 ### JS: FormData
I chose to use [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData), since it will return a collection of all inputs for the form. FormData includes the [getAll](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll) function that will allow you to inspect all the inputs. I also chose to use a string comparison because it's simple and I don't have a lot of fields (5-10) to compare. 

In addition to FormData, I also [URLSearchParams().toString()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/toString) can take FormData and create the string for me. 

    let initialData = new URLSearchParams(new FormData(document.forms[0]));	
    document.addEventListener("beforeunload", () => {
        if (initialData.toString() !== new URLSearchParams(document.forms[0]).toString()) {
            const unsaved_changes_warning = "Changes you made may not be saved.";
            evt.returnValue = unsaved_changes_warning;
            return unsaved_changes_warning;
        }
    });

**Note:** This doesn't work for older browsers. Please check browser support, but this should work all the way to at least newer edge (EdgeHTML, not Chromium). Chrome, Firefox, and the newer browsers should handle this no problem.

### jQuery: $(form).serialize();
[Serialize](https://api.jquery.com/serialize/) is similar output as above JS, it will return a delimited string of all inputs found on form element passed to jQuery. It's super easy to compare using an initial stored value and the changes too. It's a little simpler to do it this way.

    let initialData = $(formId).serialize();	
    $(document).on("beforeunload", () => {
        if (initialData !== $(form).serialize()) {
            const unsaved_changes_warning = "Changes you made may not be saved.";
            evt.returnValue = unsaved_changes_warning;
            return unsaved_changes_warning;
        }
    });


**Note:** This should work with any newer browser, including EdgeHTML based edge, and ie9-11, this function has been around in jQuery for a while.

### Aside: What are edge cases where does this not work?

This will trigger on form submission too. This will interrupt any navigation away from the page, including form submissions. It will likely always be called before beforeunload events. So I have more JS examples to resolve this, albeit a hack.
	
**JS:**

    const form = document.forms[0];
    form.addEventListener("submit", () => {
        initialData = new URLSearchParams(new FormData(form)).toString());
    });

**jQuery:**

    const form = $(formId);
    form.on("submit", () => {
        initialData = form.serialize();
    });

If it feels a little hacky, that's because it is. I personally don't see a problem with allowing the the page to post though. Overwriting initialData on submit should not introduced bugs since the page will end up redirecting back if there's a validation error, allowing the js to run again. However this does introduce an issue.
	   

How are you to deal with the form after there's a failed request or failed validation? 
    
**In this example, I'll be using a c# code behind page as an example.** With the way this JS is structured, if you submit the form, the c# code could possibly redirect back to the page to have you correct it, or failing validation. Since the page is reloaded, the initial data would be repopulated with the data from the previous request. That means if you click cancel or try to leave the page, you will lose your work, because the when the beforeunload event is ran, it will compare what is essentially the same data and allow it to pass. 

Nothing was changed, however at this point it's kinda an assumption that if you went back to this page, you might need to enter something to clear validation. That would then make the current form data different than initialData, and that would allow the check to work. It might also be unacceptable for this, and in that case I would recommend trying to possibly modify it more. I was thinking maybe find a way to persist the initial form data, ie the blank form the page started with. That too should allow the form to pass, but it couldn't be just an empty string. It would need to be the current form with all inputs, but with no values. That way when you compare with the current form, the current form would show the persisted data, making the check fail and cause the alert.

	   let initialData = Array.from(new FormData(document.forms[0]), (e => e[0]+"=")).join("&");

This returns an string of all inputs with no initial value, which sounds good to me. But there also things to consider with this too. 

What about hidden inputs, like an antiforgery token that are prepopulated? I wouldn't include this field because it's supposed to be filled already when the page is loaded.

       let filters = new Set(["__RequestVerificationToken"]);
       let arrayWithoutToken = (formdatastring) => formdatastring.split("&").filter(e => !filters.has(e.split("=")[0])).join("&");

This can be done other ways, but with how few fields my form uses, I didn't think the hit splitting the string back into an array will be that negligible. 

**Note:**  You could also use the filters directly on the array when you're making it but I had issues with it returning the second field of the arrays too, with this additional, and possibly extra, step it ensures I only get back the modifies data I need. I will likely continue adjusting this to make it work better for me, but for now it suites my needs.

### All together

    export default function Confirm() {
        let filters = new Set(["__RequestVerificationToken"]);
        let filteredArrayString = (array) => array.split("&").filter(e => !filters.has(e.split("=")[0])).join("&");
	    function init() {
		    let initialData = Array.from(new FormData(document.forms[0]), (e => e[0]+"=")).join("&");	
		    document.addEventListener("beforeunload", () => {
		        if (filteredArrayString(initialData) !== filteredArrayString(new URLSearchParams(document.forms[0]).toString())){
		            const unsaved_changes_warning = "Changes you made may not be saved.";
		            evt.returnValue = unsaved_changes_warning;
		            return unsaved_changes_warning;
		        }
                 });
                 document.forms[0].addEventListener("submit", () => {
	                 initialData = new URLSearchParams(new FormData(form)).toString());
	             });
	     }
	     init();
	     return {init}
    }

### Usage
    <script type="module">
	    import Confirm from "./Confirm.js";
	    
	    Confirm();
    </script>


### Summary

This works for most of my uses cases, and allows for some flexibility. If you need more filters, you can adjust the function to include arguments to pass the filters rather than include just the verification token. It's possible not all your forms will include them, but they probably should. I plan on doing another post shortly about how I use similar functionality when closing modals.