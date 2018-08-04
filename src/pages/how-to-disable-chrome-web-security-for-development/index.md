---
layout: post
title: How to disable Chrome Web Security for development
date: 2016-07-26T14:45:01-07:00
---

Recently I've been developing an AngularJS application that requires access to an api from another sub domain. Since the API is another sub domain, Chrome complains that it is a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) violation, automatically disallowing the request. This causes the application to hang forever because the route is dependent on calling this api first. What I decided to do was look up how to circumvent CORS in Google Chrome to test that it works correctly. I only need to do this locally, since I already authorized the live production version to work correctly.

The command I found was from a [Stack Overflow](http://stackoverflow.com/q/3102819/1612852) request.

On Mac: `open -a Google\ Chrome --args --disable-web-security --user-data-dir`.

On Linux: `google-chrome --args --disable-web-security --user-data-dir`

On Windows: `chrome.exe --args --disable-web-security --user-data-dir`

The later versions of Chrome say `--disable-web-security` has been depreciated, but it still works. The flag `--use-data-dir` appears to be required for CORS to be disabled.


### Downside
Currently working on learning more about how to disable in Firefox, Safari, and ie11/edge. I may just commit to using Chrome locally, and checking the production version from the rest of the browsers.
