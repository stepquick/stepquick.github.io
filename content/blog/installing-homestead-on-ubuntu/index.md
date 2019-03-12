---
title: Installing Homestead on Ubuntu
date: 2015-09-15T20:25:22-07:00
---

This is a piece I'm writing more of as a reminder. I really like the use I get out of [homestead](http://www.laravel.com/docs/5.1/homestead). I tend to use it for more than just laravel, but some ruby projects as well, since it provides a really flexible starting point for not just php but Ruby projects as well.

####Step 1 - Install Vagrant/Virtualbox

Homestead is built with portability in mind, so your options are either [Virtualbox](https://www.virtualbox.org/) or [VMWare](http://www.vmware.com/products/desktop-virtualization/) I'm going with virtualbox because it's readily available and I've lost track of whether or not VMWare has a linux product. You'll also need [Vagrant](http://vagrantup.com).

To install both, you could use Software Center included with Ubuntu, but if you're more of a terminal person.

```$ sudo apt-get install virtualbox vagrant virtualbox-dkms```

This will install virtualbox, drivers for it, as well as vagrant.

####Step 2 - Ensure php is installed/install composer

```$ php -v```

I think php is included with all newest versions of Ubuntu, but it doesn't hurt to check.

After this you'll want to install [composer](https://getcomposer.org/), a dependency management tool for php.

```
$ curl -sS https://getcomposer.org/installer | php && sudo mv composer.phar /usr/local/bin/composer
```

This will download composer, and move it to your local bin, so you can call it from command line.

####Step 3 - Install Homestead/Add composer to $path

Homestead can be installed locally or can be installed in composers global bin allowing it to be access throughout the terminal without having to be in the vagrant directory. I use the global require which is easier than remembering the directory the vagrant file is located in.

```
$ composer global require "laravel/homestead=~2.0"
```

This will install correctly, however if you don't have composer set in the $PATH file, you may not be able to run the commands.

Run:

```
$ echo 'export PATH="$PATH:~/.composer/vendor/bin"' >> ~/.bashrc && source ~/.bashrc
```

This will export the directory for composer to the front of the Homestead. Commands for homestead should start working, if not, restart terminal.

####Step 4 - Setup homestead

Homestead will require a few things to get started. First you need to run:

```$ homestead init```

This will set up the necessary structure to allow homestead to run correctly.

#####A. Setup code directory

Homestead symlinks from your host computer any folders you would like. By default it starts with ```~/Code```. I personally use ```~/Git``` but everyone has preferences. Just make sure this folder exists before starting the machine or it will error out.

####B. (Optional) Set app names/ databases

Homestead also allows you to give a list of app names and databases, that each application will resolve to on your host machine. Once you run ```homestead up``` Homestead will generate nginx configuration files and databases for each of these sites.

####C. Set up SSH on host machine

Next you'll want to generate an ssh key for the Virtual Machine to communicate with your host machine.

```
$ mkdir ~/.ssh && chmod 700 $_ && ssh-keygen -t rsa
```

This will ask if you want a passphrase for more protection, which is optional.

####(Optional) - Upgrade Ruby on Ubuntu

I don't quite remember if this is optional or not, but [Ruby](https://www.ruby-lang.org/en/) may need to be upgraded to use homestead mainly because it uses Ruby in some of it's configuration and the version included with Ubuntu may be out of date. I use [rvm](http://rvm.io) to manage Ruby.

    $ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    $ \curl -sSL https://get.rvm.io | bash -s stable --ruby=2.2.3

It has an install flag to install ruby as well, and at the time it's 2.2.3. After the install remember to run source on the local home directory file to get it ruby updated, otherwise reopen your terminal.

####Step 5 - Run Homestead finally.

Now that this is all set up, you should be able to start it running

```
$ homestead up
```

This will import the base vagrant image and set up the provisioning homestead has too. Once the terminal is idle, you can test it works by running:

```
$ homestead ssh
```

This is an alias to ssh without having to remember all the login information. The ssh key set up earlier makes it much easier too.

Also be sure to add this to your hosts file:

```
127.0.0.1 homestead.app
```
Test by going in your browser to http://homestead.app:8000. Homestead forwards port 80 to 8000 to avoid port collisions.

###Conclusion

I think this is a good starting point. I'll add on as I see fit.
