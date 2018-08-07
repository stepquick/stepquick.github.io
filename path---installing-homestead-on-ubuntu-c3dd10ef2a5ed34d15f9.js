webpackJsonp([82066678069717],{338:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Stephen Quick",author:"Stephen Quick"}},markdownRemark:{id:"c:/Users/stephen/Documents/Git/stepquick.github.io/src/pages/installing-homestead-on-ubuntu/index.md absPath of file >>> MarkdownRemark",html:'<p>This is a piece I’m writing more of as a reminder. I really like the use I get out of <a href="http://www.laravel.com/docs/5.1/homestead">homestead</a>. I tend to use it for more than just laravel, but some ruby projects as well, since it provides a really flexible starting point for not just php but Ruby projects as well.</p>\n<h4>Step 1 - Install Vagrant/Virtualbox</h4>\n<p>Homestead is built with portability in mind, so your options are either <a href="https://www.virtualbox.org/">Virtualbox</a> or <a href="http://www.vmware.com/products/desktop-virtualization/">VMWare</a> I’m going with virtualbox because it’s readily available and I’ve lost track of whether or not VMWare has a linux product. You’ll also need <a href="http://vagrantup.com">Vagrant</a>.</p>\n<p>To install both, you could use Software Center included with Ubuntu, but if you’re more of a terminal person.</p>\n<p><code class="language-text">$ sudo apt-get install virtualbox vagrant virtualbox-dkms</code></p>\n<p>This will install virtualbox, drivers for it, as well as vagrant.</p>\n<h4>Step 2 - Ensure php is installed/install composer</h4>\n<p><code class="language-text">$ php -v</code></p>\n<p>I think php is included with all newest versions of Ubuntu, but it doesn’t hurt to check.</p>\n<p>After this you’ll want to install <a href="https://getcomposer.org/">composer</a>, a dependency management tool for php.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ curl -sS https://getcomposer.org/installer | php &amp;&amp; sudo mv composer.phar /usr/local/bin/composer</code></pre>\n      </div>\n<p>This will download composer, and move it to your local bin, so you can call it from command line.</p>\n<h4>Step 3 - Install Homestead/Add composer to $path</h4>\n<p>Homestead can be installed locally or can be installed in composers global bin allowing it to be access throughout the terminal without having to be in the vagrant directory. I use the global require which is easier than remembering the directory the vagrant file is located in.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ composer global require &quot;laravel/homestead=~2.0&quot;</code></pre>\n      </div>\n<p>This will install correctly, however if you don’t have composer set in the $PATH file, you may not be able to run the commands.</p>\n<p>Run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ echo &#39;export PATH=&quot;$PATH:~/.composer/vendor/bin&quot;&#39; &gt;&gt; ~/.bashrc &amp;&amp; source ~/.bashrc</code></pre>\n      </div>\n<p>This will export the directory for composer to the front of the Homestead. Commands for homestead should start working, if not, restart terminal.</p>\n<h4>Step 4 - Setup homestead</h4>\n<p>Homestead will require a few things to get started. First you need to run:</p>\n<p><code class="language-text">$ homestead init</code></p>\n<p>This will set up the necessary structure to allow homestead to run correctly.</p>\n<h5>A. Setup code directory</h5>\n<p>Homestead symlinks from your host computer any folders you would like. By default it starts with <code class="language-text">~/Code</code>. I personally use <code class="language-text">~/Git</code> but everyone has preferences. Just make sure this folder exists before starting the machine or it will error out.</p>\n<h4>B. (Optional) Set app names/ databases</h4>\n<p>Homestead also allows you to give a list of app names and databases, that each application will resolve to on your host machine. Once you run <code class="language-text">homestead up</code> Homestead will generate nginx configuration files and databases for each of these sites.</p>\n<h4>C. Set up SSH on host machine</h4>\n<p>Next you’ll want to generate an ssh key for the Virtual Machine to communicate with your host machine.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ mkdir ~/.ssh &amp;&amp; chmod 700 $_ &amp;&amp; ssh-keygen -t rsa</code></pre>\n      </div>\n<p>This will ask if you want a passphrase for more protection, which is optional.</p>\n<h4>(Optional) - Upgrade Ruby on Ubuntu</h4>\n<p>I don’t quite remember if this is optional or not, but <a href="https://www.ruby-lang.org/en/">Ruby</a> may need to be upgraded to use homestead mainly because it uses Ruby in some of it’s configuration and the version included with Ubuntu may be out of date. I use <a href="http://rvm.io">rvm</a> to manage Ruby.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3\n$ \\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.2.3</code></pre>\n      </div>\n<p>It has an install flag to install ruby as well, and at the time it’s 2.2.3. After the install remember to run source on the local home directory file to get it ruby updated, otherwise reopen your terminal.</p>\n<h4>Step 5 - Run Homestead finally.</h4>\n<p>Now that this is all set up, you should be able to start it running</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ homestead up</code></pre>\n      </div>\n<p>This will import the base vagrant image and set up the provisioning homestead has too. Once the terminal is idle, you can test it works by running:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ homestead ssh</code></pre>\n      </div>\n<p>This is an alias to ssh without having to remember all the login information. The ssh key set up earlier makes it much easier too.</p>\n<p>Also be sure to add this to your hosts file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">127.0.0.1 homestead.app</code></pre>\n      </div>\n<p>Test by going in your browser to <a href="http://homestead.app:8000">http://homestead.app:8000</a>. Homestead forwards port 80 to 8000 to avoid port collisions.</p>\n<h3>Conclusion</h3>\n<p>I think this is a good starting point. I’ll add on as I see fit.</p>',frontmatter:{title:"Installing Homestead on Ubuntu",date:"September 16, 2015"}}},pathContext:{slug:"/installing-homestead-on-ubuntu/",previous:{fields:{slug:"/use-different-branch-as-master-with-git/"},frontmatter:{title:"Use different branch as master with Git"}},next:{fields:{slug:"/upgraded-to-octopress-3/"},frontmatter:{title:"Upgraded to Octopress 3"}}}}}});
//# sourceMappingURL=path---installing-homestead-on-ubuntu-c3dd10ef2a5ed34d15f9.js.map