(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});n(38);var o=n(8),r=n.n(o),i=n(0),a=n.n(i),s=n(158),u=n.n(s),c=n(151),l=n(159),d=n.n(l),p=n(156),f=n(150),m=n(226),h=n.n(m),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.pageContext,o=e.location,r=n.previous,i=n.next,s=o.href,l=t.markdownRemark,m=l.frontmatter,y=m.title,w=m.date,v=d()(this.props,"data.site.siteMetadata.title"),E=l.excerpt;if(!s)return null;var _={url:s,identifier:l.id,title:y};return a.a.createElement(p.a,{location:o},a.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:E}],title:y+" | "+v,script:[b,g]}),a.a.createElement("h3",{style:{lineHeight:Object(f.a)(1.1)}},y),a.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(3),marginTop:Object(f.a)(-1),color:"#bbb"})},w),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}}),a.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,margin:0,marginBottom:30,fontSize:Object(f.a)(.5)}},a.a.createElement("li",{style:{maxWidth:280}},r&&a.a.createElement(c.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),a.a.createElement("li",{style:{maxWidth:280}},i&&a.a.createElement(c.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))),a.a.createElement(h.a.DiscussionEmbed,{shortname:"bonogithub",config:_}))},t}(a.a.Component),b={async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},g={innerHTML:'(adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: "ca-pub-4588610260101909",\n    enable_page_level_ads: true\n  });'},w="3804820323";t.default=y},150:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a});var o=n(160),r=new(n.n(o).a)({baseFontSize:"17px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var i=r.rhythm,a=r.scale},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var o=n(0),r=n.n(o),i=n(4),a=n.n(i),s=n(149),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(27);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(152),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var p=n(39);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},152:function(e,t,n){var o;e.exports=(o=n(153))&&o.default||o},153:function(e,t,n){"use strict";n.r(t);n(38);var o=n(0),r=n.n(o),i=n(4),a=n.n(i),s=n(53),u=n(1),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,n){},156:function(e,t,n){"use strict";var o=n(8),r=n.n(o),i=n(0),a=n.n(i),s=n(150),u=(n(52),n(38),n(151)),c={boxShadow:"none",textDecoration:"none",color:"inherit"},l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pathname,n=e.menuPathname,o=e.menuName;return a.a.createElement("span",{style:Object.assign({},d,{fontWeight:t===n?800:300})},a.a.createElement(u.Link,{style:c,to:n},o))},t}(a.a.Component),d={fontSize:Object(s.a)(.5),flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},p=l,f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location.pathname;return a.a.createElement("div",{style:{height:Object(s.a)(1.7),widht:"100%",borderBottom:"1px solid #eee",padding:10}},a.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(s.a)(1.5)}},a.a.createElement("span",{style:Object.assign({},Object(s.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},a.a.createElement(u.Link,{style:c,to:"/"},"bono's blog")),m.map(function(t){return a.a.createElement(p,{key:t.pathname,pathname:e,menuPathname:t.pathname,menuName:t.title})})))},t}(a.a.Component),m=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/",title:"태그"}],h=f,y=(n(161),n(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return a.a.createElement("div",null,a.a.createElement(h,this.props),a.a.createElement("div",{className:"contents",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(26),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e))},t}(a.a.Component));t.a=y},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,i)},t),a&&e.apply(r,i)}}},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(227),r=n(228),i=n(229);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},s=n(174);var u=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},s=n(174);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-df940d7ebe00cad3ae71.js.map