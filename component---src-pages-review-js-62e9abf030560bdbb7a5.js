(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return r}),n.d(t,"pageQuery",function(){return i});n(0);var a=n(243);function r(t){return e.createElement(a.a,t)}var i="1452602757"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(233),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},r=a.colors;t.b=a},233:function(e,t,n){var a;e.exports=(a=n(239))&&a.default||a},234:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return w});n(17);var a=n(229),r=n(0),i=n(241),o=(n(244),n(245),n(246),n(230)),c=n(232),l=n(237),s=n(235),u=n(242),m=n(238),f=n.n(m),d=n(240),p=n.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=Object(a.default)(o.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),g=Object(a.default)(o.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function y(t){var n=t.children,m=t.location,d=t.data,y=Object(r.useState)(!1),b=y[0],_=y[1],v=Object(r.useState)(!1),E=v[0],j=v[1],O=Object(l.a)().gte768,S=p()(d,"site.siteMetadata.title");return e.createElement(a.ThemeProvider,{theme:c.b},e.createElement(o.Box,null,e.createElement(f.a,{htmlAttributes:{lang:"ko"},title:S},e.createElement("meta",{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}),e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(u.a,{onClick:function(){return _(!1)}},e.createElement(i.a,h({},t,{showMenu:b,onClickMenu:function(){_(!b),j(!0)}}))),e.createElement(o.Box,{mt:"50px"},!O&&e.createElement(x,{width:"100%",bg:"white",onTransitionEnd:function(){return j(!1)},_css:E||b?"1px solid "+c.a.lightGrey01:"none",_css2:b?"400px":"0px"},e.createElement(o.Box,{m:"10px"},w.map(function(t){return e.createElement(o.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:m.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(g,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var w=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},235:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var a=n(229),r=(n(0),n(231)),i=n(236),o=n(230),c=n(232);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=Object(a.default)(r.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],i.a);function u(t){var n=t.pathname,a=t.menuPathname,r=t.menuName,i=t.isVertical,u=n===a,m=void 0!==i&&i?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:a},e.createElement(o.Text,l({},m,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),r))}}).call(this,n(133))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={boxShadow:"none",textDecoration:"none",color:"inherit"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0);function r(){var e=Object(a.useState)(i()),t=e[0],n=e[1];return Object(a.useEffect)(function(){function e(){n(i)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function i(){return"undefined"!=typeof window&&window.innerWidth>=768}},239:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},241:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var a=n(229),r=(n(0),n(231)),i=n(235),o=n(236),c=n(230),l=n(237),s=n(234),u=n(232),m=Object(a.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),f=Object(a.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10},transition:"all 0.5s","&:hover":{filter:"blur(2px)"}}),d=Object(a.default)(r.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],o.a),p=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,a=t.showMenu,r=t.onClickMenu,o=Object(l.a)().gte768,c=n.pathname;return e.createElement(m,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(f,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(d,{to:"/"},"bono's blog")),o&&s.a.map(function(t){return e.createElement(i.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!o&&e.createElement(p,{p:"5px",width:"30px",onClick:r},e.createElement(h,{width:a?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:a?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:a,_css3:a?"scale(0)":"scale(1)"}),e.createElement(g,{width:a?"24px":"20px",pt:"2px",bg:"grey01",show:a,_css4:a?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var a=n(0),r=n(230);function i(t){var n=t.onClick,i=t.children;return Object(a.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(r.Box,{onClick:function(e){e.stopPropagation()}},i)}}).call(this,n(133))},243:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return d});var a=n(229),r=(n(0),n(231)),i=n(234),o=n(230),c=n(240),l=n.n(c),s=n(238),u=n.n(s),m=Object(a.default)(r.a).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),f=Object(a.default)(o.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function d(t){var n=t.data,a=t.location,r=t.isTagPage,c=t.pageContext,s=l()(n,"allMarkdownRemark.edges"),d=l()(n,"allMarkdownRemark.totalCount"),p=l()(n,"site.siteMetadata.description");return e.createElement(i.b,{location:a,data:n},e.createElement(u.a,{meta:[{name:"description",content:p}]}),r&&e.createElement(o.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},e.createElement(o.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},c.tag),e.createElement(o.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",d,")")),s.map(function(t){var n=t.node,a=l()(n,"frontmatter.title")||n.fields.slug;return e.createElement(o.Box,{mb:"50px",key:n.fields.slug},e.createElement(o.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},e.createElement(m,{to:n.fields.slug},a)),e.createElement(o.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(f,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},n.frontmatter.date))}))}}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-pages-review-js-62e9abf030560bdbb7a5.js.map