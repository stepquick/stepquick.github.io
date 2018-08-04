---
layout: post
title: "Use different branch as master with Git"
date: 2015-03-24 14:26:33-07:00
---

I came across this as I found it to be important. Currently [Degree Search](http://degreesearch.arizona.edu) is split into three branches:

* Master: Current live version
* 3.0: Different version, stopped work once laravel 5 was released
* 5.0: Most recent version implemented in laravel 5.

At this point I no longer wanted the current version to be what I work on anymore, so I decided to change branches. However there doesn't appear to be very straightforward, especially since the 5.0 branch doesn't have a shared history from master, I pushed it remotely from my local dev environment.

###Note: please make a backup branch of master before doing this, it's easier this way

Following this [Stack Overflow](http://stackoverflow.com/a/2763118/1612852) I was able to find something that not only merged the master history, but also replaced the files with my current dev branch. While on the master branch I ran these commands:

    git checkout yourbranchname
    git merge --strategy=ours master
    git checkout master
    git merge yourbranchname

The writer of the answer also suggests more detailed messaging in the commit, so you could instead do this:

    git checkout yourbranchname
    git merge --strategy=ours --no-commit master
    git commit # add information to the template merge message
    git checkout master
    git merge yourbranchname

This solved my issues of having to deal with the master branch, considering it's being migrated to a newer version. All that was left after this was to switch to the backup older branch for the live site and test the new master branch. Other than a few things that got wiped away in the branch switch, everything merged correctly.
