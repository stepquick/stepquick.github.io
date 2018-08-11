webpackJsonp([0xdf71eb7c709d],{430:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Stephen Quick",author:"Stephen Quick"}},markdownRemark:{id:"/Users/stepquick/Git/stepquick.github.io/src/pages/use-different-branch-as-master-with-git/index.md absPath of file >>> MarkdownRemark",html:'<p>I came across this as I found it to be important. Currently <a href="http://degreesearch.arizona.edu">Degree Search</a> is split into three branches:</p>\n<ul>\n<li>Master: Current live version</li>\n<li>3.0: Different version, stopped work once laravel 5 was released</li>\n<li>5.0: Most recent version implemented in laravel 5.</li>\n</ul>\n<p>At this point I no longer wanted the current version to be what I work on anymore, so I decided to change branches. However there doesn’t appear to be very straightforward, especially since the 5.0 branch doesn’t have a shared history from master, I pushed it remotely from my local dev environment.</p>\n<h3>Note: please make a backup branch of master before doing this, it’s easier this way</h3>\n<p>Following this <a href="http://stackoverflow.com/a/2763118/1612852">Stack Overflow</a> I was able to find something that not only merged the master history, but also replaced the files with my current dev branch. While on the master branch I ran these commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">git checkout yourbranchname\ngit merge --strategy=ours master\ngit checkout master\ngit merge yourbranchname</code></pre>\n      </div>\n<p>The writer of the answer also suggests more detailed messaging in the commit, so you could instead do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">git checkout yourbranchname\ngit merge --strategy=ours --no-commit master\ngit commit # add information to the template merge message\ngit checkout master\ngit merge yourbranchname</code></pre>\n      </div>\n<p>This solved my issues of having to deal with the master branch, considering it’s being migrated to a newer version. All that was left after this was to switch to the backup older branch for the live site and test the new master branch. Other than a few things that got wiped away in the branch switch, everything merged correctly.</p>',frontmatter:{title:"Use different branch as master with Git",date:"March 24, 2015"}}},pathContext:{slug:"/use-different-branch-as-master-with-git/",previous:{fields:{slug:"/switch-between-php-and-hhvm/"},frontmatter:{title:"Switch between PHP and HHVM in Terminal"}},next:{fields:{slug:"/installing-homestead-on-ubuntu/"},frontmatter:{title:"Installing Homestead on Ubuntu"}}}}}});
//# sourceMappingURL=path---use-different-branch-as-master-with-git-0c465932e92b3a9c3706.js.map