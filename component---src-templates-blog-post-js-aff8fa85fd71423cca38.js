(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),u=n(156),c=n.n(u),l=n(150),s=n(157),m=n.n(s),p=n(154),d=n(151),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=m()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(p.a,{location:this.props.location},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component);t.default=h;var f="3804820323"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(149),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(152),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var p=n(39);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(158),r=new(n.n(a).a)({baseFontSize:"15px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var i=r.rhythm,o=r.scale},152:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},153:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(53),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),u=n(150),c=n(151),l=(n(38),{boxShadow:"none",textDecoration:"none",color:"inherit"}),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pathname,n=e.menuPathname,a=e.menuName;return o.a.createElement("span",{style:Object.assign({},m,{fontWeight:t===n?800:300})},o.a.createElement(u.Link,{style:l,to:n},a))},t}(o.a.Component),m={fontSize:13,flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},p=s,d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location;e.children,t.pathname;return o.a.createElement("div",{style:{height:"50px",widht:"100%",borderBottom:"1px solid #eee",padding:10}},o.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(c.a)(1.5)}},o.a.createElement("span",{style:Object.assign({},Object(c.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},o.a.createElement(u.Link,{style:l,to:"/"},"bono's blog")),o.a.createElement(p,{pathname:t.pathname,menuPathname:"/programming",menuName:"개발"}),o.a.createElement(p,{pathname:t.pathname,menuPathname:"/essay",menuName:"일기"}),o.a.createElement(p,{pathname:t.pathname,menuPathname:"/review",menuName:"책리뷰"}),o.a.createElement(p,{pathname:t.pathname,menuPathname:"/",menuName:"태그"})))},t}(o.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(d,this.props),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e))},t}(o.a.Component);t.a=h}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aff8fa85fd71423cca38.js.map