(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{221:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return y}),n.d(t,"pageQuery",function(){return w});var a=n(229),o=(n(0),n(252)),r=n.n(o),i=n(231),c=n(253),l=n.n(c),s=n(237),u=n(317),d=n(318),m=n.n(d),p=n(230),f=Object(a.default)(p.Box).withConfig({displayName:"blog-post___StyledBox",componentId:"sc-13kot0y-0"})({lineHeight:"30px"}),h=Object(a.default)(p.Flex).withConfig({displayName:"blog-post___StyledFlex",componentId:"sc-13kot0y-1"})({borderTop:"1px solid #eee"}),x=Object(a.default)(p.Text).withConfig({displayName:"blog-post___StyledText",componentId:"sc-13kot0y-2"})({maxWidth:280}),g=Object(a.default)(p.Text).withConfig({displayName:"blog-post___StyledText2",componentId:"sc-13kot0y-3"})({maxWidth:280});function y(t){var n=t.data,a=t.pageContext,o=t.location,c=a.previous,d=a.next,y=o.href,w=n.markdownRemark,_=w.frontmatter,v=_.title,E=_.date,j=l()(n,"site.siteMetadata.title"),O=w.excerpt;if(!y)return null;var C={url:y,identifier:w.id,title:v};return e.createElement(s.b,{location:o},e.createElement(r.a,{htmlAttributes:{lang:"ko"},meta:[{name:"description",content:O}],title:v+" | "+j,script:[b]}),e.createElement(p.Text,{fontSize:"24px",lineHeight:"1.1"},v),e.createElement(p.Text,{mb:"90px",mt:"7px",color:"#bbb"},E),e.createElement(p.Box,{mb:"40px"},e.createElement(u.a,{slot:"1331884154"})),e.createElement(f,{color:"text",dangerouslySetInnerHTML:{__html:w.html}}),e.createElement(p.Box,{mb:"30px"}),e.createElement(h,{flexWrap:"wrap",justifyContent:"space-between",mb:"30px",pt:"30px",fontSize:"15px"},c&&e.createElement(x,{lineHeight:"1.8"},e.createElement(i.a,{to:c.fields.slug,rel:"prev"},c.frontmatter.title)),d&&e.createElement(g,{lineHeight:"1.8"},e.createElement(i.a,{to:d.fields.slug,rel:"next"},d.frontmatter.title))),e.createElement(p.Box,{mb:"40px"},e.createElement(u.a,{slot:"5306007932"})),e.createElement(m.a.DiscussionEmbed,{shortname:"bonogithub",config:C}))}var b={async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},w="3804820323"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var a=n(0),o=n.n(a),r=n(12),i=n.n(r),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(236),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},o=a.colors;t.b=a},236:function(e,t,n){var a;e.exports=(a=n(242))&&a.default||a},237:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return f}),n.d(t,"a",function(){return h});n(17);var a=n(229),o=n(0),r=n(248),i=(n(290),n(291),n(292),n(230)),c=n(232),l=n(240),s=n(238),u=n(249);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=Object(a.default)(i.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),p=Object(a.default)(i.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function f(t){var n=t.children,f=t.location,x=Object(o.useState)(!1),g=x[0],y=x[1],b=Object(o.useState)(!1),w=b[0],_=b[1],v=Object(l.a)().gte768;return e.createElement(a.ThemeProvider,{theme:c.b},e.createElement(i.Box,null,e.createElement(u.a,{onClick:function(){return y(!1)}},e.createElement(r.a,d({},t,{showMenu:g,onClickMenu:function(){y(!g),_(!0)}}))),e.createElement(i.Box,{mt:"50px"},!v&&e.createElement(m,{width:"100%",bg:"white",onTransitionEnd:function(){return _(!1)},_css:w||g?"1px solid "+c.a.lightGrey01:"none",_css2:g?"400px":"0px"},e.createElement(i.Box,{m:"10px"},h.map(function(t){return e.createElement(i.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:f.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(p,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var h=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},238:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var a=n(229),o=(n(0),n(231)),r=n(239),i=n(230),c=n(232);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=Object(a.default)(o.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],r.a);function u(t){var n=t.pathname,a=t.menuPathname,o=t.menuName,r=t.isVertical,u=n===a,d=void 0!==r&&r?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:a},e.createElement(i.Text,l({},d,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),o))}}).call(this,n(133))},239:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={boxShadow:"none",textDecoration:"none",color:"inherit"}},240:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0);function o(){var e=Object(a.useState)(r()),t=e[0],n=e[1];return Object(a.useEffect)(function(){function e(){n(r)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function r(){return"undefined"!=typeof window&&window.innerWidth>=768}},242:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),c=n(92),l=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},248:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var a=n(229),o=(n(0),n(231)),r=n(238),i=n(239),c=n(230),l=n(240),s=n(237),u=n(232),d=Object(a.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),m=Object(a.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10}}),p=Object(a.default)(o.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],i.a),f=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,a=t.showMenu,o=t.onClickMenu,i=Object(l.a)().gte768,c=n.pathname;return e.createElement(d,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(m,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(p,{to:"/"},"bono's blog")),i&&s.a.map(function(t){return e.createElement(r.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!i&&e.createElement(f,{p:"5px",width:"30px",onClick:o},e.createElement(h,{width:a?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:a?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:a,_css3:a?"scale(0)":"scale(1)"}),e.createElement(g,{width:a?"24px":"20px",pt:"2px",bg:"grey01",show:a,_css4:a?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},249:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});var a=n(0),o=n(230);function r(t){var n=t.onClick,r=t.children;return Object(a.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(o.Box,{onClick:function(e){e.stopPropagation()}},r)}}).call(this,n(133))},317:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var a=n(0);function o(t){var n=t.slot;return Object(a.useEffect)(function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},[]),e.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4588610260101909","data-ad-slot":n,"data-ad-format":"auto","data-full-width-responsive":"true"})}}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-589bd384c09c432c654b.js.map