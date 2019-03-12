---
title: "Use Varnish with Nginx and Ubuntu"
date: 2015-01-27 03:42:55-07:00
---
Feels like I haven't updated this blog in a while, so I'll add a tutorial that I learned about a bit ago when trying to address speeds with Drupal.

For starters this was done on an Ubuntu VM. From this [website](https://www.varnish-cache.org/installation/ubuntu), follow the tutorial to install Varnish:

    apt-get install apt-transport-https
    curl https://repo.varnish-cache.org/ubuntu/GPG-key.txt | apt-key add -
    echo "deb https://repo.varnish-cache.org/ubuntu/ precise varnish-4.0" >> /etc/apt/sources.list.d/varnish-cache.list
    apt-get update
    apt-get install varnish

Edit this file:  ``/etc/default/varnish``, under Alternative 2, configure the beginning port ``:6082`` to be ``:80`` like below:


    DAEMON_OPTS="-a :80 \
             -T localhost:6082 \
             -f /etc/varnish/default.vcl \
             -S /etc/varnish/secret \
             -s malloc,256m"


Next edit the file located at ``/etc/varnish/default.vcl``. Change to port to from ``80`` to ``8080`` like below:


    backend default {
        .host = "127.0.0.1";
        .port = "8080";
        .connect_timeout = 60s;
        .first_byte_timeout = 60s;
        .between_bytes_timeout = 60s;
        .max_connections = 800;
    }

Now the next step would be to edit the port used by nginx. Each server(it you have it configured that way) would need to be switched from ``80`` to ``8080``. The location of my config files are ``/etc/nginx/sites-available``.

###Notes:

If you're using this on a vagrant and have ports forwarded, for example I use homestead for laravel, you will need to change the forwarded port from 8000 to 8080, otherwise it won't work properly, and nginx will likely not show your sites.

###Finished, now test:

To test, you can run ``varnishstat``, and that should give you data live as you access the domain affected by varnish.
