---
title: Disable GPG for Octopress Deploy
date: 2016-08-04T21:47:13-07:00
---

I've noticed that Octopress Deploy doesn't appear to allow deployment using Git if GPG is enabled. What I had to do to get around it is temporarily disable GPG.

    git config --global commit.gpgsign false

After disabling it I can run `octopress deploy` to commit my new changes to the live site. Doesn't appear to be any issues listed for it, so if you come across this that's what I ended up having to do to get deploy to work.
