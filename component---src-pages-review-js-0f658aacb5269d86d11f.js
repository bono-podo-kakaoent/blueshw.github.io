(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return r}),n.d(t,"pageQuery",function(){return o});n(0);var a=n(243);function r(t){return e.createElement(a.a,t)}var o="1452602757"}.call(this,n(133))},231:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(63),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return c.navigate});n(233),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func}).call(this,n(133))},232:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a={colors:{text:"#333333",grey00:"#555555",grey01:"#888888",grey02:"#aaaaaa",grey03:"#cccccc",lightGrey01:"#e8e8e8",lightGrey02:"#f3f3f3",lightGrey03:"#f9f9f9"}},r=a.colors;t.b=a},233:function(e,t,n){var a;e.exports=(a=n(239))&&a.default||a},234:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return y}),n.d(t,"a",function(){return w});n(17);var a=n(229),r=n(0),o=n(241),i=(n(244),n(245),n(246),n(230)),c=n(232),l=n(237),s=n(235),u=n(242),f=n(238),m=n.n(f),d=n(240),p=n.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=Object(a.default)(i.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-3234dv-0"})(function(e){return{borderBottom:e._css,position:"fixed",left:0,top:"50px",zIndex:100,opacity:.9,maxHeight:e._css2,transition:"max-height 0.5s ease",overflow:"hidden"}}),g=Object(a.default)(i.Box).withConfig({displayName:"layout___StyledBox2",componentId:"sc-3234dv-1"})({maxWidth:"800px"});function y(t){var n=t.children,f=t.location,d=t.data,y=Object(r.useState)(!1),b=y[0],_=y[1],v=Object(r.useState)(!1),E=v[0],j=v[1],O=Object(l.a)().gte768,S=p()(d,"site.siteMetadata.title");return e.createElement(a.ThemeProvider,{theme:c.b},e.createElement(i.Box,null,e.createElement(m.a,{htmlAttributes:{lang:"ko"},title:S},e.createElement("meta",{name:"google-site-verification",content:"R3ZeY1PmaJUY9j_cgNABjesJFgHWVCJpb4TsdfXntMA"}),e.createElement("meta",{name:"naver-site-verification",content:"23eddf7267bb527337927baff11fc26157637f30"})),e.createElement(u.a,{onClick:function(){return _(!1)}},e.createElement(o.a,h({},t,{showMenu:b,onClickMenu:function(){_(!b),j(!0)}}))),e.createElement(i.Box,{mt:"50px"},!O&&e.createElement(x,{width:"100%",bg:"white",onTransitionEnd:function(){return j(!1)},_css:E||b?"1px solid "+c.a.lightGrey01:"none",_css2:b?"400px":"0px"},e.createElement(i.Box,{m:"10px"},w.map(function(t){return e.createElement(i.Flex,{key:t.pathname,justifyContent:"center",alignItems:"center"},e.createElement(s.a,{pathname:f.pathname,menuPathname:t.pathname,menuName:t.title,isVertical:!0},t.title))})))),e.createElement(g,{className:"contents",mx:"auto",p:"45px 20px"},n)))}var w=[{pathname:"/programming",title:"개발"},{pathname:"/essay",title:"일기"},{pathname:"/review",title:"책리뷰"},{pathname:"/tags",title:"태그"}]}).call(this,n(133))},235:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(17);var a=n(229),r=(n(0),n(231)),o=n(236),i=n(230),c=n(232);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=Object(a.default)(r.a).withConfig({displayName:"menu___StyledLink",componentId:"h1woa4-0"})(["",""],o.a);function u(t){var n=t.pathname,a=t.menuPathname,r=t.menuName,o=t.isVertical,u=n===a,f=void 0!==o&&o?{my:"15px",width:"100vw",textAlign:"center",fontSize:u?"23px":"16px"}:{mr:"15px",mt:"3px",fontSize:"15px"};return e.createElement(s,{to:a},e.createElement(i.Text,l({},f,{fontWeight:u?700:400,color:u?c.a.text:c.a.grey01}),r))}}).call(this,n(133))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={boxShadow:"none",textDecoration:"none",color:"inherit"}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0);function r(){var e=Object(a.useState)(o()),t=e[0],n=e[1];return Object(a.useEffect)(function(){function e(){n(o)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),{gte768:t}}function o(){return"undefined"!=typeof window&&window.innerWidth>=768}},239:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},241:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var a=n(229),r=(n(0),n(231)),o=n(235),i=n(236),c=n(230),l=n(237),s=n(234),u=n(232),f=Object(a.default)(c.Flex).withConfig({displayName:"header___StyledFlex",componentId:"sc-1h24lom-0"})(function(e){return{position:"fixed",left:0,top:0,height:"50px",borderBottom:e._css,zIndex:200}}),m=Object(a.default)(c.Text).withConfig({displayName:"header___StyledText",componentId:"sc-1h24lom-1"})({cursor:"pointer","@media (max-width: 600px)":{marginLeft:10}}),d=Object(a.default)(r.a).withConfig({displayName:"header___StyledLink",componentId:"sc-1h24lom-2"})(["",""],i.a),p=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox",componentId:"sc-1h24lom-3"})({height:"28px",cursor:"pointer",overflow:"hidden"}),h=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox2",componentId:"sc-1h24lom-4"})(function(e){return{transition:"all 0.4s",transform:e._css2,transformOrigin:"100% 0"}}),x=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox3",componentId:"sc-1h24lom-5"})(function(e){return{transition:"transform 0.5s",transform:e._css3,transformOrigin:"100% 50%"}}),g=Object(a.default)(c.Box).withConfig({displayName:"header___StyledBox4",componentId:"sc-1h24lom-6"})(function(e){return{transition:"all 0.4s",transform:e._css4,transformOrigin:"100% 100%"}});function y(t){var n=t.location,a=t.showMenu,r=t.onClickMenu,i=Object(l.a)().gte768,c=n.pathname;return e.createElement(f,{width:"100%",p:"10px",alignItems:"center",bg:"white",_css:"1px solid "+u.a.lightGrey01},e.createElement(m,{flex:"0 0 auto",mr:"auto",ml:"20px",mt:"3px",color:"grey01",fontSize:"22px"},e.createElement(d,{to:"/"},"bono's blog")),i&&s.a.map(function(t){return e.createElement(o.a,{key:t.pathname,pathname:c,menuPathname:t.pathname,menuName:t.title})}),!i&&e.createElement(p,{p:"5px",width:"30px",onClick:r},e.createElement(h,{width:a?"24px":"20px",pt:"2px",mb:"6px",bg:"grey01",_css2:a?"rotateZ(-45deg)":"rotateZ(0)"}),e.createElement(x,{width:"20px",pt:"2px",mb:"6px",bg:"grey01",show:a,_css3:a?"scale(0)":"scale(1)"}),e.createElement(g,{width:a?"24px":"20px",pt:"2px",bg:"grey01",show:a,_css4:a?"rotateZ(45deg)":"rotateZ(0)"})))}}).call(this,n(133))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var a=n(0),r=n(230);function o(t){var n=t.onClick,o=t.children;return Object(a.useEffect)(function(){function e(){n()}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}},[]),e.createElement(r.Box,{onClick:function(e){e.stopPropagation()}},o)}}).call(this,n(133))},243:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return p});var a=n(229),r=n(0),o=n(231),i=n(234),c=n(230),l=n(240),s=n.n(l),u=n(238),f=n.n(u),m=Object(a.default)(o.a).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),d=Object(a.default)(c.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function p(t){var n=t.data,a=t.location,o=t.isTagPage,l=t.pageContext,u=Object(r.useState)(h),p=u[0],x=u[1],g=s()(n,"allMarkdownRemark.edges"),y=s()(n,"allMarkdownRemark.totalCount"),w=s()(n,"site.siteMetadata.description");Object(r.useEffect)(function(){x(h)},[g]);var b=Object(r.useMemo)(function(){return g.filter(function(e,t){return t<p})},[p,g]);return e.createElement(i.b,{location:a,data:n},e.createElement(f.a,{meta:[{name:"description",content:w}]}),o&&e.createElement(c.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},e.createElement(c.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},l.tag),e.createElement(c.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",y,")")),b.map(function(t){var n=t.node,a=s()(n,"frontmatter.title")||n.fields.slug;return e.createElement(c.Box,{mb:"50px",key:n.fields.slug},e.createElement(c.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},e.createElement(m,{to:n.fields.slug},a)),e.createElement(c.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(d,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},n.frontmatter.date))}),p<=g.length&&e.createElement(c.Flex,{mt:"70px",width:"100%",justifyContent:"center"},e.createElement(c.Text,{fontSize:"20px",color:"#888",onClick:function(){return x(p+25)},style:{cursor:"pointer",textDecoration:"underline"}},"show more")))}var h=25}).call(this,n(133))}}]);
//# sourceMappingURL=component---src-pages-review-js-0f658aacb5269d86d11f.js.map