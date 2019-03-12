---
title: "Fetching Upstream changes"
date: 2014-07-23 11:39:49-07:00
---

I found this very useful in merging changes for Octopress, granted I ended up having to wipe the entire project out anyways.

    git remote add upstream https://github.com/imathis/octopress.git

This way I'm able to fetch anything that happens to the master of octopress by simply running

    git fetch upstream

If I want to go ahead and merge:

    git merge upstream/master

I can't tell if there's a difference between using https:// or git://, so I'm sticking to what github uses as an example.
