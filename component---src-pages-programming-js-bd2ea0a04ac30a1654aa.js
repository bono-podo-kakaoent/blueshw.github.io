(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{VAyv:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"pageQuery",(function(){return l}));var o=n("q1tI"),r=n.n(o),a=n("fTFr");function i(e){return r.a.createElement(a.a,e)}var l="3852323940"},fTFr:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),i=n("Bl7J"),l=n("QKO/"),c=n("mwIZ"),s=n.n(c),u=n("TJpk"),d=n.n(u),f=n("vOnD"),p=Object(f.default)(a.Link).withConfig({displayName:"list___StyledLink",componentId:"sc-1g51t40-0"})({boxShadow:"none"}),m=Object(f.default)(l.Text).withConfig({displayName:"list___StyledText",componentId:"sc-1g51t40-1"})({opacity:.8});function x(e){var t=e.data,n=e.location,a=e.isTagPage,c=e.pageContext,u=Object(o.useState)(w),f=u[0],x=u[1],y=s()(t,"allMarkdownRemark.edges"),h=s()(t,"allMarkdownRemark.totalCount"),E=s()(t,"site.siteMetadata.description");Object(o.useEffect)((function(){x(w)}),[y]),Object(o.useEffect)((function(){function e(){document.querySelectorAll(".up-on-scroll").forEach((function(e){!function(e,t){return e.getBoundingClientRect().top>window.innerHeight+(t||0)}(e,20)?(e.style.opacity="1",e.style.transform="translateY(0px)"):(e.style.opacity="0",e.style.transform="translateY(70px)")}))}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var S=Object(o.useMemo)((function(){return y.filter((function(e,t){return t<f}))}),[f,y]);return r.a.createElement(i.b,{location:n,data:t},r.a.createElement(d.a,{meta:[{name:"description",content:E}]}),a&&r.a.createElement(l.Flex,{m:"20px auto 60px",flexDirection:"column","justify-content":"center","align-items":"center"},r.a.createElement(l.Text,{fontSize:"25px",lineHeight:"1.6",textAlign:"center"},c.tag),r.a.createElement(l.Text,{fontSize:"15px",color:"#888",textAlign:"center"},"(",h,")")),r.a.createElement(l.Box,{as:"section"},S.map((function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.fields.slug;return r.a.createElement(b,{as:"article",mb:"50px",key:t.fields.slug,className:"up-on-scroll"},r.a.createElement(l.Text,{mb:"15px",fontSize:"22px",lineHeight:"1.7"},r.a.createElement(p,{to:t.fields.slug},n)),r.a.createElement(l.Text,{fontSize:"15px",lineHeight:"1.8",color:"#999",mb:"6px",dangerouslySetInnerHTML:{__html:t.excerpt}}),r.a.createElement(m,{fontSize:"14px",mb:"5px",color:"#888",width:"100%",textAlign:"right"},t.frontmatter.date))}))),f<=y.length&&r.a.createElement(l.Flex,{mt:"70px",width:"100%",justifyContent:"center"},r.a.createElement(g,{fontSize:"18px",fontWeight:"400",color:"#999",p:"5px 10px",bg:"transparent",onClick:function(){return x(f+25)}},"show more")))}var g=Object(f.default)(l.Button).withConfig({displayName:"list__StyledShowMoreButton",componentId:"sc-1g51t40-2"})(["border-radius:4px;border:1px solid #dedede;cursor:pointer;transition:all 0.7s;outline:none;&:hover{background-color:#bbb;color:#fff;border:1px solid transparent;}"]),b=Object(f.default)(l.Box).withConfig({displayName:"list__StyledPost",componentId:"sc-1g51t40-3"})(["transition:transform 0.7s,opacity 0.7s;"]),w=25}}]);
//# sourceMappingURL=component---src-pages-programming-js-bd2ea0a04ac30a1654aa.js.map