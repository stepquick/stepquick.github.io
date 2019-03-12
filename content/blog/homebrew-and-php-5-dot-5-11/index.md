---
title: "Homebrew and PHP 5.5.11 snag"
date: 2014-04-14 15:52:02-07:00
---
##Upgrading Notes

I updated from 5.5.8 to 5.5.11 today. After the upgrade, I noticed that anything using fpm/php had stopped working with nginx, I was getting a Bad Gateway Error. Checking my console I noticed fpm had spewed out a few errors since the update time, indicating that it wasn't working. I tried running php-fpm from the command line, and it started right up with no problems, all my php sites worked after that. This gave me the impression that something with my plist file, the file for starting php automatically, wasn't working correctly. That's when I decided to make a note of this in an article.

####In other words:

If you are upgrading from 5.5.8 to 5.5.11 using the command `brew upgrade` be aware that the .plist file used in .11 might be spelled differently than what's in .8. This, depending on how your environment is setup could break your php-fpm, and possibly php. Make sure to swap out the file names by running these commands first:

    launchctl unload ~/Library/LaunchAgents/homebrew-php.josegonzalez.php55.plist && rm ~/Library/LaunchAgents/homebrew-php.josegonzalez.php55.plist
    ln -sfv /usr/local/opt/php55/*.plist ~/Library/LaunchAgents && launchctl load homebrew.mxcl.php55.plist

####Additional Notes:

* This affects you if you symlink the .plist files to ~/Library/LaunchAgents, or if you cp them as well, since the file is a different name.

* My plist prior to 5.5.11 was always a variant of this: `homebrew-php.josegonzalez.php5x.plist`. After the upgrade it's now named `homebrew.mxcl.php55.plist`.
