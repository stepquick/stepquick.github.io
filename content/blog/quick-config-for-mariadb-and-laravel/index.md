---
layout: post
title: Configuration for using MariaDB with Laravel and El Capitan
date: 2016-08-28T17:12:38-07:00
---

I wanted to play around with [Laravel](http://www.laravel.com) on my mac without having to use a VM, like [homestead](http://www.laravel.com/docs/homestead). I decided to try out [Laravel Valet](http://laravel.com/docs/valet), which doesn't need a VM for setup, just [brew](http://brew.sh/). This however doesn't include a db by default. I decided to use [MariaDB](https://mariadb.com/) due to its ease of use.


## Installation

Since I have brew installed it's super easy to configure:

~~~~
brew install mariadb
unset TMPDIR
brew services start mariadb
mysql_install_db
~~~~

Caveats:

I initially had trouble getting this to work properly, and determined it might've been related to not starting the service before attempting to install a db, so make sure you start the service before attempting to connect to the mariadb server.

`mysql -uroot` should work out without a password, if you want to secure this just run `mysql_secure_installation`, however in my case I don't really need a password setup since I'm only doing work on my local machine.

## Create User/Database

After I had it setup and logged in, I ran a few commands to create a database and user to access it. Since laravel includes a default config for a homestead db and user, I decided to just stick with those.

First login to the server `mysql -uroot`, then run these commands:

~~~~
  create database homestead;
  create user 'homestead'@'localhost' identified by 'secret';
  GRANT ALL PRIVILEGES ON homestead.* to 'homestead'@'localhost' WITH GRANT OPTION;
~~~~

This gives the proper permissions I need to run laravel locally.
