---
title: "Migration from Dreamhost to Namecheap and Github"
date: 2015-01-28 16:56:33-07:00
---

I recently decided that I no longer needed to use DreamHost for hosting my website now that I've been using Octopress.

The initial setup for this appears to be quite straightforward, but it is advised that you follow the exact directions otherwise you will have issues. I had some initially, and I ended up having to destroy my repository and start over again.


Instructions can be found [here](http://octopress.org/docs/deploying/github/)

###Side effects:

It appears my ability to use rake preview is broken, but that might really be related to my VM not appearing to forward the 4000 port, which I can't tell if that's an issue with the machine or not. I may just replace the VM.

I also noticed that this process doesn't really seem to enjoy posting from more than one computer. I found out the hard way and I ended up having to blast the repository completely and start from scratch. I found that once you run ``rake setup_github_pages`` and tried to generate and deploy the site it would say something along the lines of being out of sync.

###Solution:

After running ``rake setup_github_pages``, don't run generate or deploy, but instead go into the new ``_deploy`` folder and run ``git pull origin master``. It should merge your current master branch into the folder. There will be an index merge conflict, which is easy to delete the old one. Doing this should allow you to run ``rake deploy`` successfully to commit the blog.

If you don't plan on maintaining this blog with more than one computer, then this probably isn't the biggest problem for you.
