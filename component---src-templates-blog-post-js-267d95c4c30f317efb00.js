(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{221:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return g}),n.d(t,"pageQuery",function(){return x});var o=n(229),r=(n(0),n(238)),i=n.n(r),a=n(231),c=n(240),s=n.n(c),u=n(234),l=n(317),d=n(318),f=n.n(d),p=n(230),m=Object(o.default)(p.Box).withConfig({displayName:"blog-post___StyledBox",componentId:"sc-13kot0y-0"})({lineHeight:"30px"}),h=Object(o.default)(p.Flex).withConfig({displayName:"blog-post___StyledFlex",componentId:"sc-13kot0y-1"})({borderTop:"1px solid #eee"}),b=Object(o.default)(p.Text).withConfig({displayName:"blog-post___StyledText",componentId:"sc-13kot0y-2"})({maxWidth:280}),y=Object(o.default)(p.Text).withConfig({displayName:"blog-post___StyledText2",componentId:"sc-13kot0y-3"})({maxWidth:280});function g(t){var n=t.data,o=t.pageContext,r=t.location,c=o.previous,d=o.next,g=r.href,x=n.markdownRemark,_=x.frontmatter,E=_.title,C=_.date,I=s()(n,"site.siteMetadata.title"),S=x.excerpt;if(!g)return null;var O={url:g,identifier:x.id,title:E};return e.createElement(u.b,{location:r,data:n},e.createElement(i.a,{htmlAttributes:{lang:"ko"},meta:[{name:"description",content:S},{property:"og:url",content:g},{property:"og:title",content:E},{property:"og:description",content:S}],title:E+" | "+I,script:[w,v]}),e.createElement(p.Text,{fontSize:"24px",lineHeight:"1.1"},E),e.createElement(p.Text,{mb:"90px",mt:"7px",color:"#bbb"},C),e.createElement(p.Box,{mb:"40px"},e.createElement(l.a,{slot:"1331884154"})),e.createElement(m,{color:"text",dangerouslySetInnerHTML:{__html:x.html}}),e.createElement(p.Box,{mb:"30px"}),e.createElement(h,{flexWrap:"wrap",justifyContent:"space-between",mb:"30px",pt:"30px",fontSize:"15px"},c&&e.createElement(b,{lineHeight:"1.8"},e.createElement(a.a,{to:c.fields.slug,rel:"prev"},c.frontmatter.title)),d&&e.createElement(y,{lineHeight:"1.8"},e.createElement(a.a,{to:d.fields.slug,rel:"next"},d.frontmatter.title))),e.createElement(p.Box,{mb:"40px"},e.createElement(l.a,{slot:"5306007932"})),e.createElement(f.a.DiscussionEmbed,{shortname:"bonogithub",config:O}))}var w={async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},v={async:!0,src:"https://static.codepen.io/assets/embed/ei.js"},x="3804820323"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var o=n(0),r=n.n(o),i=n(11),a=n.n(i),c=n(63),s=n.n(c);n.d(t,"a",function(){return s.a}),n.d(t,"b",function(){return c.navigate});n(233),r.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},r=o.colors;t.b=o},233:function(e,t,n){var o;e.exports=(o=n(239))&&o.default||o},234:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return g}),n.d(t,"a",function(){return w});n(17);var o=n(229),r=n(0),i=n(241),a=(n(244),n(245),n(246),n(230)),c=n(232),s=n(237),u=n(235),l=n(242),d=n(238),f=n.n(d),p=n(240),m=n.n(p);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var b=Object(o.default)(a.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),y=Object(o.default)(a.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function g(t){var n=t.children,d=t.location,p=t.data,g=Object(r.useState)(!1),v=g[0],x=g[1],_=Object(r.useState)(!1),E=_[0],C=_[1],I=Object(s.a)().gte768,S=m()(p,"site.siteMetadata.title");return e.createElement(o.ThemeProvider,{theme:c.b},e.createElement(a.Box,null,e.createElement(f.a,{htmlAttributes:{lang:"ko"},title:S},e.createElement("meta",{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}),e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(l.a,{onClick:function(){return x(!1)}},e.createElement(i.a,h({},t,{showMenu:v,onClickMenu:function(){x(!v),C(!0)}}))),e.createElement(a.Box,{mt:"50px"},!I&&e.createElement(b,{width:"100%",bg:"white",onTransitionEnd:function(){return C(!1)},_css:E||v?"1px solid "+c.a.lightGrey01:"none",_css2:v?"400px":"0px"},e.createElement(a.Box,{m:"10px"},w.map(function(t){return e.createElement(a.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(u.a,{pathname:d.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(y,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var w=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},235:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return l});n(17);var o=n(229),r=(n(0),n(231)),i=n(236),a=n(230),c=n(232);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=Object(o.default)(r.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],i.a);function l(t){var n=t.pathname,o=t.menuPathname,r=t.menuName,i=t.isVertical,l=n===o,d=void 0!==i&&i?{my:"15px",width:"100vw",textAlign:"center",fontSize:l?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(u,{to:o},e.createElement(a.Text,s({},d,{fontWeight:l?700:400,color:l?c.a.text:c.a.grey01}),r))}}).call(this,n(133))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={boxShadow:"none",textDecoration:"none",color:"inherit"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(0);function r(){var e=Object(o.useState)(i()),t=e[0],n=e[1];return Object(o.useEffect)(function(){function e(){n(i)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function i(){return"undefined"!=typeof window&&window.innerWidth>=768}},239:function(e,t,n){"use strict";n.r(t);n(17);var o=n(0),r=n.n(o),i=n(11),a=n.n(i),c=n(91),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},241:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var o=n(229),r=(n(0),n(231)),i=n(235),a=n(236),c=n(230),s=n(237),u=n(234),l=n(232),d=Object(o.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),f=Object(o.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10},transition:"all 0.5s","&:hover":{filter:"blur(2px)"}}),p=Object(o.default)(r.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],a.a),m=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),b=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),y=Object(o.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function g(t){var n=t.location,o=t.showMenu,r=t.onClickMenu,a=Object(s.a)().gte768,c=n.pathname;return e.createElement(d,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+l.a.lightGrey01},e.createElement(f,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(p,{to:"/"},"bono's blog")),a&&u.a.map(function(t){return e.createElement(i.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!a&&e.createElement(m,{p:"5px",width:"30px",onClick:r},e.createElement(h,{width:o?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:o?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(b,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:o,_css3:o?"scale(0)":"scale(1)"}),e.createElement(y,{width:o?"24px":"20px",pt:"2px",bg:"grey01",show:o,_css4:o?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var o=n(0),r=n(230);function i(t){var n=t.onClick,i=t.children;return Object(o.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(r.Box,{onClick:function(e){e.stopPropagation()}},i)}}).call(this,n(133))},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,i)},t),a&&e.apply(r,i)}}},317:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});var o=n(0);function r(t){var n=t.slot;return Object(o.useEffect)(function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},[]),e.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4588610260101909","data-ad-slot":n,"data-ad-format":"auto","data-full-width-responsive":"true"})}}).call(this,n(133))},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(319),r=n(320),i=n(324);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},319:function(e,t,n){"use strict";n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},c=n(260);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},320:function(e,t,n){"use strict";n(321),n(64),n(7),n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},321:function(e,t,n){"use strict";var o=n(4),r=n(22),i=n(35),a=n(135),c=n(65),s=n(9),u=n(92).f,l=n(93).f,d=n(16).f,f=n(322).trim,p=o.Number,m=p,h=p.prototype,b="Number"==i(n(66)(h)),y="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,i=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var a,s=t.slice(2),u=0,l=s.length;u<l;u++)if((a=s.charCodeAt(u))<48||a>r)return NaN;return parseInt(s,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(b?s(function(){h.valueOf.call(n)}):"Number"!=i(n))?a(new m(g(t)),n,p):g(t)};for(var w,v=n(13)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;v.length>x;x++)r(m,w=v[x])&&!r(p,w)&&d(p,w,l(m,w));p.prototype=h,h.constructor=p,n(18)(o,"Number",p)}},322:function(e,t,n){var o=n(5),r=n(34),i=n(9),a=n(323),c="["+a+"]",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),l=function(e,t,n){var r={},c=i(function(){return!!a[e]()||"​"!="​"[e]()}),s=r[e]=c?t(d):a[e];n&&(r[n]=s),o(o.P+o.F*c,"String",r)},d=l.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=l},323:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},324:function(e,t,n){"use strict";n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},c=n(260);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-267d95c4c30f317efb00.js.map