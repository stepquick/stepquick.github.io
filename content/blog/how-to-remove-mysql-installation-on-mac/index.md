---
title: How to remove MySQL installation on Mac
date: 2014-02-17 15:22:00-07:00
---
Note: Original article from 2012, I don't use MAMP anymore, I use a vagrant/local mysql installation via homebrew.

I don't know if this is important anymore, the original article I linked to is broken, but here's the original commands:
```
    sudo rm /usr/local/share/mysql
    sudo rm -rf /usr/local/share/mysql*
    sudo rm -rf /Library/StartupItems/MySQLCOM
    sudo rm -rf /Library/PreferencePanes/My*
    edit /etc/hostconfig and remove the line MYSQLCOM=-YES-
    sudo rm -rf /Library/Receipts/mysql*
    sudo rm -rf /var/db/receipts/com.mysql.*
    sudo rm -rf /Library/Receipts/MySQL*
```
This is for when MAMP is used for your web server purposes. It might work for overall mysql installations(mysql is under the share folder after all), but it's been a while since I've used MAMP. I'm going to make it a point to actually update my articles in the future.


Tip:
Use this command to find everything related to mysql.

    `sudo find / | grep -i mysql`
