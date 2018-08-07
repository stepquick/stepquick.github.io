webpackJsonp([28662708381989],{335:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Stephen Quick",author:"Stephen Quick"}},markdownRemark:{id:"c:/Users/stephen/Documents/Git/stepquick.github.io/src/pages/homebrew-and-php-5-dot-5-11/index.md absPath of file >>> MarkdownRemark",html:'<h2>Upgrading Notes</h2>\n<p>I updated from 5.5.8 to 5.5.11 today. After the upgrade, I noticed that anything using fpm/php had stopped working with nginx, I was getting a Bad Gateway Error. Checking my console I noticed fpm had spewed out a few errors since the update time, indicating that it wasn’t working. I tried running php-fpm from the command line, and it started right up with no problems, all my php sites worked after that. This gave me the impression that something with my plist file, the file for starting php automatically, wasn’t working correctly. That’s when I decided to make a note of this in an article.</p>\n<h4>In other words:</h4>\n<p>If you are upgrading from 5.5.8 to 5.5.11 using the command <code class="language-text">brew upgrade</code> be aware that the .plist file used in .11 might be spelled differently than what’s in .8. This, depending on how your environment is setup could break your php-fpm, and possibly php. Make sure to swap out the file names by running these commands first:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">launchctl unload ~/Library/LaunchAgents/homebrew-php.josegonzalez.php55.plist &amp;&amp; rm ~/Library/LaunchAgents/homebrew-php.josegonzalez.php55.plist\nln -sfv /usr/local/opt/php55/*.plist ~/Library/LaunchAgents &amp;&amp; launchctl load homebrew.mxcl.php55.plist</code></pre>\n      </div>\n<h4>Additional Notes:</h4>\n<ul>\n<li>\n<p>This affects you if you symlink the .plist files to ~/Library/LaunchAgents, or if you cp them as well, since the file is a different name.</p>\n</li>\n<li>\n<p>My plist prior to 5.5.11 was always a variant of this: <code class="language-text">homebrew-php.josegonzalez.php5x.plist</code>. After the upgrade it’s now named <code class="language-text">homebrew.mxcl.php55.plist</code>.</p>\n</li>\n</ul>',frontmatter:{title:"Homebrew and PHP 5.5.11 snag",date:"April 14, 2014"}}},pathContext:{slug:"/homebrew-and-php-5-dot-5-11/",previous:{fields:{slug:"/gist-test/"},frontmatter:{title:"gist test"}},next:{fields:{slug:"/start-nginx-at-launch-on-mavericks/"},frontmatter:{title:"Start nginx at launch on Mavericks Mac OS"}}}}}});
//# sourceMappingURL=path---homebrew-and-php-5-dot-5-11-166ebfbe81f11d87646b.js.map