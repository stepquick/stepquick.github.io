---
title: "Switch between PHP and HHVM in Terminal"
date: 2015-02-20 15:46:49-07:00
---

This is something I'm trying to remember, and it's something that's been answered before [here](http://stackoverflow.com/questions/22830662/reverting-back-to-php-from-hhvm).

I've beginning to experiment with HHVM as an alternative to using PHP, so I figured this would be useful to try out. Switching out the language that's called when using PHP on the terminal is as simple as using this command:

    sudo /usr/bin/update-alternatives --install /usr/bin/php php /usr/bin/hhvm 60

This will do it without any input, and you should be able to check by running. ``php -v``. If you get hhvm version stuff, you should be good.

My next important question was how to switch back to using PHP. Again, simple:

    sudo /usr/bin/update-alternatives --config php

It will then ask you to select from a list of options. My options were:

    There are 2 choices for the alternative php (providing /usr/bin/php).

      Selection    Path            Priority   Status
    ------------------------------------------------------------
      0            /usr/bin/hhvm    60        auto mode
      1            /usr/bin/hhvm    60        manual mode
    * 2            /usr/bin/php5    50        manual mode

    Press enter to keep the current choice[*], or type selection number:
