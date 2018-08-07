webpackJsonp([0xb071bd9adf42],{431:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Stephen Quick",author:"Stephen Quick"}},markdownRemark:{id:"c:/Users/stephen/Documents/Git/gatsby-blog/stepquick.github.io/src/pages/use-varnish-with-nginx-and-ubuntu/index.md absPath of file >>> MarkdownRemark",html:'<p>Feels like I haven’t updated this blog in a while, so I’ll add a tutorial that I learned about a bit ago when trying to address speeds with Drupal.</p>\n<p>For starters this was done on an Ubuntu VM. From this <a href="https://www.varnish-cache.org/installation/ubuntu">website</a>, follow the tutorial to install Varnish:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">apt-get install apt-transport-https\ncurl https://repo.varnish-cache.org/ubuntu/GPG-key.txt | apt-key add -\necho &quot;deb https://repo.varnish-cache.org/ubuntu/ precise varnish-4.0&quot; &gt;&gt; /etc/apt/sources.list.d/varnish-cache.list\napt-get update\napt-get install varnish</code></pre>\n      </div>\n<p>Edit this file:  <code class="language-text">/etc/default/varnish</code>, under Alternative 2, configure the beginning port <code class="language-text">:6082</code> to be <code class="language-text">:80</code> like below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">DAEMON_OPTS=&quot;-a :80 \\\n         -T localhost:6082 \\\n         -f /etc/varnish/default.vcl \\\n         -S /etc/varnish/secret \\\n         -s malloc,256m&quot;</code></pre>\n      </div>\n<p>Next edit the file located at <code class="language-text">/etc/varnish/default.vcl</code>. Change to port to from <code class="language-text">80</code> to <code class="language-text">8080</code> like below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">backend default {\n    .host = &quot;127.0.0.1&quot;;\n    .port = &quot;8080&quot;;\n    .connect_timeout = 60s;\n    .first_byte_timeout = 60s;\n    .between_bytes_timeout = 60s;\n    .max_connections = 800;\n}</code></pre>\n      </div>\n<p>Now the next step would be to edit the port used by nginx. Each server(it you have it configured that way) would need to be switched from <code class="language-text">80</code> to <code class="language-text">8080</code>. The location of my config files are <code class="language-text">/etc/nginx/sites-available</code>.</p>\n<h3>Notes:</h3>\n<p>If you’re using this on a vagrant and have ports forwarded, for example I use homestead for laravel, you will need to change the forwarded port from 8000 to 8080, otherwise it won’t work properly, and nginx will likely not show your sites.</p>\n<h3>Finished, now test:</h3>\n<p>To test, you can run <code class="language-text">varnishstat</code>, and that should give you data live as you access the domain affected by varnish.</p>',frontmatter:{title:"Use Varnish with Nginx and Ubuntu",date:"January 27, 2015"}}},pathContext:{slug:"/use-varnish-with-nginx-and-ubuntu/",previous:{fields:{slug:"/use-gulp-notify-with-terminal-notifier/"},frontmatter:{title:"Notifications Using Gulp-Notify on Vagrant with Terminal-Notifier"}},next:{fields:{slug:"/migration-from-dreamhost-to-namecheap-and-github/"},frontmatter:{title:"Migration from Dreamhost to Namecheap and Github"}}}}}});
//# sourceMappingURL=path---use-varnish-with-nginx-and-ubuntu-3f73b069e49f443b0d8b.js.map