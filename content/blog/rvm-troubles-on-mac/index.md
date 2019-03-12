---
title: "RVM missing on Mac"
date: 2014-02-26 12:47:13-07:00
---

Turns out that I messed something installing dotfiles, which is the only thing I can think of at the moment that would cause this. What happened was the Mac I'm using didn't notice that I had ruby and rvm installed in my home folder, so it started using the version of ruby installed in Homebrew. That meant something had altered my .bash_profile so I decided to check it out.

I checked my bash_profile, which originally that's where the link for rvm was installed.


The three locations are either ~.bashrc, ~.bash_profile, or ~.profile, either of these three would need to be checked.


    [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"


This appeared to solve my issue and I was able to get back to using ruby.

Update: I was having another issue where rvm kept using the system installed ruby version. I set the new version 2.1.1 to be default, which seems to have resolved my issue. It was pretty annoying.

I tried setting it again using this command:

    rvm get stable --auto-dotfiles

It temporarily works, closing the terminal appears to reset it back to the original issue. So I tried setting a default with RVM using:

    rvm use 2.1.1 default

This solved my issue, and instead of using the local copy, it uses the .rvm version. However here is what's shown if I echo `$PATH`:


    /Users/QuickMirror/Dropbox/dotfiles:/Users/QuickMirror/.rvm/gems/ruby-2.1.1/bin:/Users/QuickMirror/.rvm/gems/ruby-2.1.1@global/bin:/Users/QuickMirror/.rvm/rubies/ruby-2.1.1/bin:/Users/QuickMirror/bin:$HOME/Dropbox/dotfiles:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/QuickMirror/.rvm/bin


As you can see dotfiles still shows up in from which actually made me realize, I was using `.path` as an older alternative to try and get dotfiles to work, so I ended up removing that piece which solved my `$PATH` issue. Echoing `$PATH` now shows the proper order:


    /Users/QuickMirror/.rvm/gems/ruby-2.1.1/bin:/Users/QuickMirror/.rvm/gems/ruby-2.1.1@global/bin:/Users/QuickMirror/.rvm/rubies/ruby-2.1.1/bin:/Users/QuickMirror/bin:$HOME/Dropbox/dotfiles:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/QuickMirror/.rvm/bin
