(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4IfK":function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.useIsomorphicLayoutEffect=void 0;var c=n("q1tI"),o="undefined"!=typeof window?c.useLayoutEffect:c.useEffect;e.useIsomorphicLayoutEffect=o},OTAv:function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.useScrollPosition=r;var c=n("q1tI"),o=n("4IfK"),i="undefined"!=typeof window;function l(t){var e=t.element,n=t.useWindow;if(!i)return{x:0,y:0};var c=(e?e.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:c.left,y:c.top}}function r(t,e,n,r,s){var u=(0,c.useRef)(l({useWindow:r})),a=null,f=function(){var e=l({element:n,useWindow:r});t({prevPos:u.current,currPos:e}),u.current=e,a=null};(0,o.useIsomorphicLayoutEffect)((function(){if(i){var t=function(){s?null===a&&(a=setTimeout(f,s)):f()};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}}),e)}r.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},VXBa:function(t,e,n){"use strict";var c=n("txSG"),o=n("zbVx"),i=n("lTFH"),l=n("q1tI"),r=n("Wbzz"),s=n("zDcZ"),u=n("RIwO"),a=function(){return Object(c.f)("div",{sx:{display:"flex",justifyContent:"space-between"}},Object(c.f)("h1",{sx:{color:"white",my:0,transform:"translateY(8px)",fontSize:[Object(s.c)(24),null,Object(s.c)(32)]}},"SEES"),Object(c.f)("div",null,Object(c.f)(r.a,{to:"/",sx:{height:"100%",display:"inline-flex",alignItems:"center",px:Object(s.c)(25),textDecoration:"none",fontWeight:600,fontSize:[Object(s.c)(14),null,Object(s.c)(20)]},activeStyle:{background:"#F4F7FB"},partiallyActive:!0},"Explore"),Object(c.f)(r.a,{to:"/about",sx:{height:"100%",display:"inline-flex",alignItems:"center",px:Object(s.c)(25),textDecoration:"none",fontWeight:600,color:"white",fontSize:[Object(s.c)(14),null,Object(s.c)(20)]},partiallyActive:!1},"About"),Object(c.f)("div",{sx:{display:"inline-block",py:Object(s.c)(20)}},Object(c.f)(r.a,{to:"/submit",sx:{bg:"csiYellow",px:Object(s.c)(14),py:Object(s.c)(10),textDecoration:"none",fontWeight:600,fontSize:[Object(s.c)(14),null,Object(s.c)(20)],"&:hover":{bg:"csiYellow",color:"initial"}}},"Submit research"))))},f=function(t){var e=t.title;return Object(c.f)("div",{sx:{display:"flex",justifyContent:"space-between",color:"white",alignItems:"center",py:Object(s.c)(16)}},Object(c.f)("button",{onClick:function(){window.history.go(-1)},sx:{transform:"translateY(-4px)",color:"white",fontSize:[Object(s.c)(14),null,Object(s.c)(18)],fontWeight:600,svg:{transform:"rotate(180deg) translateY(-5px)",marginRight:Object(s.c)(3)}}},Object(c.f)(u.a,null),"Back"),Object(c.f)("h1",{sx:{fontSize:Object(s.c)(24),my:0,display:["none",null,"block"]}},e),Object(c.f)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},sx:{transform:"translateY(-4px)",color:"white",fontSize:[Object(s.c)(14),null,Object(s.c)(18)],fontWeight:600,svg:{transform:"rotate(270deg) translateY(-5px) translateX(-6px)",marginRight:Object(s.c)(3)}}},Object(c.f)(u.a,null),"Top"))},b=function(){return Object(c.f)("div",{sx:{bg:"csiDarkGrey"}},Object(c.f)(o.a,null,Object(c.f)(a,null)))},O=function(t){var e=t.title,n=Object(l.useState)(!1),r=n[0],s=n[1];return Object(i.useScrollPosition)((function(t){t.currPos.y>=80?s(!0):s(!1)}),[],null,!0,80),Object(c.f)("div",{sx:{position:r?"fixed":"static",bg:"csiDarkGrey",width:"100%"}},Object(c.f)(o.a,null,r?Object(c.f)(f,{title:e}):Object(c.f)(a,null)))},d=function(t){var e=t.title;return t.stickyMode?Object(c.f)(O,{title:e}):Object(c.f)(b,null)};e.a=function(t){var e=t.children,n=t.sticky,o=t.title;return Object(c.f)("div",null,Object(c.f)(d,{stickyMode:n,title:o}),Object(c.f)("div",null,e))}},XXAq:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return r}));n("91GP");var c=n("txSG"),o=n("q1tI"),i=n("e1nC"),l=n("VXBa"),r=(e.default=function(t){var e={category:t.data.craft.category}.category.title;Object(o.useEffect)((function(){e&&(console.log(e),s(Object.assign(Object.assign({},r),{},{socialImpacts:[e]})))}),[]);var n=Object(o.useState)({type:[],socialImpacts:[]}),r=n[0],s=n[1];return Object(c.f)(l.a,{sticky:!0,title:e},Object(c.f)(i.a,{refinementType:"socialImpacts",defaultRefinement:r.socialImpacts,isSearch:!1,heading:e}))},"365482591")},lTFH:function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useScrollPosition",{enumerable:!0,get:function(){return c.useScrollPosition}});var c=n("OTAv")}}]);
//# sourceMappingURL=component---src-templates-impacts-listing-index-tsx-db6c4aad217f5214c998.js.map