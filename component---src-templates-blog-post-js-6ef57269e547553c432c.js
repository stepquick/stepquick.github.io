(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a(11);var r=a(0),i=a.n(r),n=a(81),s=a(222),o=a(213),l=a(214),d=a(46);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(s.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},r}(i.a.Component);t.default=c;var u="2761936148"},221:function(e,t,a){"use strict";a(223)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},222:function(e,t,a){"use strict";a(221);var r=a(224),i=a(0),n=a.n(i),s=a(81),o=a(225),l=a.n(o),d=a(46);var c="3655516406";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,t),", a software developer based in Houston, Texas.",n.a.createElement("br",null),n.a.createElement("a",{href:"/resume"},"Resume.")))},data:r})}},223:function(e,t,a){var r=a(1),i=a(8),n=a(40),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},224:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEJUlEQVQ4y4WU+VOVZRTH+S+aWAIELouQLLmMMyZDOWmBAzaO2QLjZbEby4ULCWksKTppmIbs2wUuAiEoSLGDbJfLVtIvOjWT4zjVxKChoCyGfTrvy2BglD88M+/zzHs+z/ec7zmPletQAs8ut8F4XMaT0Azo8TW+z86MIAKS32Db6WDcOqNxvn5E/cfV/O9Yq3Vh33+MT0ME+4J8CfdxIsrLkShPByJkvfO6J1uz9+Ms/7gpMeb/AboNCExu9zGFsfdlew64WKPdqiHG35O4AC90r25Et0WD1sMO/6O71YvVOPM6QEWZksqmhnCC/Rwpi95PVUooUTs8edd3A6GbnQmTdWibK3G7/Djg+AK7Yv1x+W4ZuqLUamWjGUlk07c69mx35kLYWzBew1/mSn5v+or+80l0nYnHkpvCT1Unud9ewJXjh/lAY0vAJ7vRjCauBarqJpLZkRFImOtL/Pj1af7sL2ems5DFPiMMmcBSxdKAUc6NLPSWwmg157SBhHja4n31MJqxJBX6FKjU7pW8A2h9XLjdcFYFzQrwYVfR8uou5l5bNjMd+TzoKFDVN6ZGstfXXs1sWWX8KqAUeHNlGCEaG3olRcZqeCJBSwMVzF8rYa6nhNnuAtmXq+eM11IYFUKQlMhDzHS1GFbXMB6N9J23tMqbHraYs5O5XfcFTemR3KzMVBUqaf7Rmsd4wTEuH9Nyq+4MFR++zWv7vHFVjFlTQ9m4jCXiVx+JNsCbXy9/yURJKu0no6n/NJx7Lbk87isTQzLFHD29ZxO4Kd+Dp+LwP7gZjQDdRNRToLsA7UYS0OdE0pmuY1pqhMXEUE4KxoSDMHyR6ZYcFnsKMRre43pxmlqSG6ZMciOC2XM1FofRZWEq0EOWzbCehIpYpmqzeCTpKTVTUp1uy2e+t4xZMWO2PV/U5okxivtl3G3Lo/NEDIFNcdivBioKN4wY2Nkcww9FaWJCKY96lo1YEJhSP+VsQcxZlL1yPqcY1VFEU3YSG7ti0Awb/gGq0CEDdkN6Es+Fs9RezCMlQCDTLRekuc+rzfxLQ5aaugJclJ6crMkiNPcQDmMGVdTa0VNUijHb66KYasxmQVJSgErL/HblHBOl6fxc+znzAlPU019B98UM7FqjcB9Nemb0VqDDiTh1fYT50ik1YFpqNvnNBYFlYBaDbkgLTTZn86C7CHqMZNYkYW3RiweG9V8bxRxrSxxptdLYPeVMiRF3pWVuySiO5R7hTn0Wd2SKZgR4vzkH/0YdjiP/8dqspK0Rc9zbdPRXHxeVJub6JXXV9WLmpQyPZVLoLCPTZMB2MBYPi+E5D6wsJ4F6yXyaKo/ypFXS6xPIgIxbXwUPWwv47FIyDtei1RI998VeUeo8asCmW4fWJNNSnUpv7Qlq5YKgZj0vDsUJzMB6sX8DvcoT3e+5wTEAAAAASUVORK5CYII=","width":50,"height":50,"src":"/static/394a5a3ed87990790d3bb36a3628dd1e/352e5/profile-pic.png","srcSet":"/static/394a5a3ed87990790d3bb36a3628dd1e/352e5/profile-pic.png 1x,\\n/static/394a5a3ed87990790d3bb36a3628dd1e/aae31/profile-pic.png 1.5x,\\n/static/394a5a3ed87990790d3bb36a3628dd1e/47c2b/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":"Stephen Quick"}}}}')},225:function(e,t,a){"use strict";a(13),a(14),a(9),a(104),a(145),a(221);var r=a(22);t.__esModule=!0,t.default=void 0;var i,n=r(a(82)),s=r(a(80)),o=r(a(146)),l=r(a(147)),d=r(a(0)),c=r(a(48)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(x,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},x=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,O=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,l.default)({opacity:A?1:0,transition:C?"opacity "+b+"ms":"none"},o),z="boolean"==typeof h?"lightgray":h,I={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&I,{},o,{},f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(g){var N=g,j=N[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&I)}),j.base64&&d.default.createElement(V,{src:j.base64,spreadProps:W,imageVariants:N,generateSources:w}),j.tracedSVG&&d.default.createElement(V,{src:j.tracedSVG,spreadProps:W,imageVariants:N,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(x,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},j,{imageVariants:N}))}}))}if(m){var k=m,q=k[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},C&&I)}),q.base64&&d.default.createElement(V,{src:q.base64,spreadProps:W,imageVariants:k,generateSources:w}),q.tracedSVG&&d.default.createElement(V,{src:q.tracedSVG,spreadProps:W,imageVariants:k,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(k),d.default.createElement(x,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},q,{imageVariants:k}))}}))}return null},t}(d.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:C,sizes:M,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([M,c.default.arrayOf(M)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=A;t.default=z}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6ef57269e547553c432c.js.map