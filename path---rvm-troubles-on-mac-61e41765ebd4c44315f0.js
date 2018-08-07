webpackJsonp([0xbbc6eae9d794],{344:function(e,s){e.exports={data:{site:{siteMetadata:{title:"Stephen Quick",author:"Stephen Quick"}},markdownRemark:{id:"c:/Users/stephen/Documents/Git/stepquick.github.io/src/pages/rvm-troubles-on-mac/index.md absPath of file >>> MarkdownRemark",html:'<p>Turns out that I messed something installing dotfiles, which is the only thing I can think of at the moment that would cause this. What happened was the Mac I’m using didn’t notice that I had ruby and rvm installed in my home folder, so it started using the version of ruby installed in Homebrew. That meant something had altered my .bash_profile so I decided to check it out.</p>\n<p>I checked my bash_profile, which originally that’s where the link for rvm was installed.</p>\n<p>The three locations are either ~.bashrc, ~.bash_profile, or ~.profile, either of these three would need to be checked.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[[ -s &quot;$HOME/.rvm/scripts/rvm&quot; ]] &amp;&amp; source &quot;$HOME/.rvm/scripts/rvm&quot;</code></pre>\n      </div>\n<p>This appeared to solve my issue and I was able to get back to using ruby.</p>\n<p>Update: I was having another issue where rvm kept using the system installed ruby version. I set the new version 2.1.1 to be default, which seems to have resolved my issue. It was pretty annoying.</p>\n<p>I tried setting it again using this command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">rvm get stable --auto-dotfiles</code></pre>\n      </div>\n<p>It temporarily works, closing the terminal appears to reset it back to the original issue. So I tried setting a default with RVM using:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">rvm use 2.1.1 default</code></pre>\n      </div>\n<p>This solved my issue, and instead of using the local copy, it uses the .rvm version. However here is what’s shown if I echo <code class="language-text">$PATH</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">/Users/QuickMirror/Dropbox/dotfiles:/Users/QuickMirror/.rvm/gems/ruby-2.1.1/bin:/Users/QuickMirror/.rvm/gems/ruby-2.1.1@global/bin:/Users/QuickMirror/.rvm/rubies/ruby-2.1.1/bin:/Users/QuickMirror/bin:$HOME/Dropbox/dotfiles:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/QuickMirror/.rvm/bin</code></pre>\n      </div>\n<p>As you can see dotfiles still shows up in from which actually made me realize, I was using <code class="language-text">.path</code> as an older alternative to try and get dotfiles to work, so I ended up removing that piece which solved my <code class="language-text">$PATH</code> issue. Echoing <code class="language-text">$PATH</code> now shows the proper order:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">/Users/QuickMirror/.rvm/gems/ruby-2.1.1/bin:/Users/QuickMirror/.rvm/gems/ruby-2.1.1@global/bin:/Users/QuickMirror/.rvm/rubies/ruby-2.1.1/bin:/Users/QuickMirror/bin:$HOME/Dropbox/dotfiles:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/QuickMirror/.rvm/bin</code></pre>\n      </div>',frontmatter:{title:"RVM missing on Mac",date:"February 26, 2014"}}},pathContext:{slug:"/rvm-troubles-on-mac/",previous:{fields:{slug:"/how-to-remove-mysql-installation-on-mac/"},frontmatter:{title:"How to remove MySQL installation on Mac"}},next:{fields:{slug:"/gist-test/"},frontmatter:{title:"gist test"}}}}}});
//# sourceMappingURL=path---rvm-troubles-on-mac-61e41765ebd4c44315f0.js.map