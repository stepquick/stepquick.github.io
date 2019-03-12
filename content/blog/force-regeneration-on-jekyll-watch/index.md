---
title: "Force regeneration on jekyll watch"
date: 2014-08-15 10:22:52-07:00
---

I noticed that after migrating dev work to my new Vagrant vm, jekyll doesn't seem to want to regenerate posts whenever I make a change and try to preview it. The simple change I found from a [stackoverflow](http://stackoverflow.com/questions/19822319/jekyll-regeneration-doesnt-work-inside-vagrant) post is instead of calling just jeykll build --watch, use jekyll build --watch --force_polling.

I replace the this line in the rakefile:

    jekyllPid = Process.spawn({"OCTOPRESS_ENV"=>"preview"}, "jekyll build --watch")

with:

    jekyllPid = Process.spawn({"OCTOPRESS_ENV"=>"preview"}, "jekyll build --watch --force_polling")


Both generate rake watch and rake preview use this line, so make sure to replace both. This seems to have solved my issue with rake preview/watch. The question also has an answer suggesting that vagrant uses a special driver for the file syncing between guest and host machines, making the regeneration not work properly, so that's something to keep in mind.
