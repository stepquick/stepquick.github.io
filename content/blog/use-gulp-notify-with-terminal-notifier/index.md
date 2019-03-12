---
title: "Notifications Using Gulp-Notify on Vagrant with Terminal-Notifier"
date: 2014-09-08 11:52:52-07:00
---

> ##Update: 3/3/2015:
> I can confirm that this does in fact work with homestead and elixir. However, I notice that the server hangs at provisioning on terminal. It doesn't freeze, it continues to load, but it is one little weirdness that I've found.

I've been looking using grunt/gulp for automation of my different tasks, such as css/js minification, and image manipulations so when I found out about automating tests for phpunit, I decided to give a try.

Note: I haven't really seen anything relating to this other than [this](http://jpbetley.com/vagrant-gulp-notifications/), but I couldn't quite get it to work using his bash script, so I ended up a making a few adjustments to his.

I develop using a Vagrant VM, so while installing most of this stuff on the host machine will work fine, I want it to be mostly kept to the VM. The tests are also running against the VM's databases, not the local machine, so it makes more sense to keep dev separate from the Host Mac OSX.

####1. Install terminal-notifier

I used homebrew, so I just ran update and installed terminal-notifier:

    brew update && brew install terminal-notifier

This added terminal-notifier to my applications folder, it also linked the app to my $PATH, which allows me to call it from the terminal.

####2. Install Vagrant-Notify

I will be using terminal-notifier for this, since it's the stock notification app for Mac. This piece was a bit weird when initially installing. It worked best for me when I installed the plugin with the Vagrant vm off, it will give me an error about ruby running if the machine was already running. Killing the rogue ruby task with activity monitor would fix this as well.

From inside the folder with your Vagrant:

    vagrant plugin install vagrant-notify

This piece will require another file called ```notify-send```, preferably saved in ```usr\local\bin```

    terminal-notifier -appIcon "$2" -title "$4" -message "$5"

Make sure this file has no extension and is executable:

    sudo chmod +x /usr/local/bin/notify-send

This is the part where I couldn't quite get it to work like in the tutorial I included, so I ended up moving around the numbers that were being submitted to the script from gulp. These are the numbers that worked for me, YMMV. I believe the gulp-notify sends more by default now.

####3. Install Gulp, and dependencies

Used NPM for this on my Vagrant VM, since this is where gulp will be called:

  npm install gulp --save-dev
  npm install gulp-notify --save-dev
  npm install gulp-phpunit --save-dev

####4. Create Gulp File

I gathered this from a couple of different gulp.js files.

Note: Can be edited from host or guest machine, since in my case the gulp file will be at the base of my project folder.

> 07/16/2018: I lost the link to this gist, so it's removed.

####5. Check that it works

You can run ```gulp```, or you can use ```gulp test```

Which should return a notification of some sort. This will likely not be the best way to address phpunit tests, especially since currently there are only 3 tests. That's not a lot, but if the project was much bigger, say 30-40 tests, I can see this being a dumb idea. I'll likely not use this for larger projects, or at least implement a count that only runs the tests every so often.

##Troubleshooting

The difficult part about this was getting the script to return the proper notifications. It initially wouldn't give the message, and instead was using the default img that is included with the script. I ended up moving the numbers around and that seemed to address the issue.
