---
layout: post
title: "Start nginx at launch on Mavericks Mac OS"
date: 2014-04-28 09:38:24-07:00
---

For the longest time I couldn't get the piece to work, but I finally figured it out using launchctl as a somewhat basis for troubleshooting. I used homebrew to install nginx which is easier and works for the most part. First the instructions on how to install nginx using homebrew:

    brew update && brew install nginx
    
Next what you want to do is have launchctl start nginx automatically for you. You can do this in several ways, but I'll cover two:

##Option 1 - Symbolic link

For this option you will symbolic link the .plist file included with nginx to have launchctl launch nginx using the proper permissions. Then use launchctl to list the resulting loaded file
    
    sudo ln -sfv /usr/local/opt/nginx/*.plist /Library/LaunchDaemons

Homebrew places a symbolic link of the nginx folder inside opt making it easier for symbolic links, at least in my opinion anyways. The reasoning to remember for this is:

##Option 2 - Just copy it to the folder

    sudo cp /usr/local/opt/nginx/*.plist /Library/LaunchDaemons

####Bonus - Ensure proper file permissions:

    sudo chown root:wheel /Library/LaunchDaemons/homebrew.mxcl.nginx.plist - Credit to <a href="http://localhost:4000/blog/2014/04/28/start-nginx-at-launch-on-mavericks/#comment-1767708094">Burak</a>

The reasoning behind this:

1. `/Library` is the system Library folder, rather than the user `~/Library` folder. It's used because it needs system access, and it's easier for all users to access it.
2. Sudo is used because nginx needs root permissions. Especially if you opt to change the default port from 8080 to 80.

Next what you want to do is have launchctl load the file for you automatically:

    sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist

1. You need sudo for this since it's in the system Library.
2. You need to use the `-w` option, otherwise it won't load.

To troubleshoot the file loading use this:

    sudo launchctl list | grep 'homebrew'

You should get a list that shows homebrew.mxcl.nginx

##Option 3 - Just load it when you need it

If you don't care about automatic use the normal commands for it:

    sudo nginx -s stop
    sudo nginx
    sudo nginx -s reload

This actually took me a bit to figure out, so I decided to make a post for future reference.
