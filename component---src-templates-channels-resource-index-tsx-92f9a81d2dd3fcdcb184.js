(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"53F/":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return l}));var n=a("orZN"),c=function(t){return{title:t.entry.title,description:t.entry.description||"",body:t.entry.body||""}},l=function(t){var e=function(t){return t.title};return{title:t.title||"",slug:t.slug||"",description:t.description||"",video:t.embedVideo||"",img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:Object(n.a)(t.typeHandle),socialImpacts:t.socialImpactsTags&&t.socialImpactsTags.length?t.socialImpactsTags.map(e):[],populationGroups:t.populationGroupTags&&t.populationGroupTags.length?t.populationGroupTags.map(e):[],industries:t.industriesTags&&t.industriesTags.length?t.industriesTags.map(e):[],locations:t.locationsTags&&t.locationsTags.length?t.locationsTags.map(e):[],insightsFor:t.insightsForTags&&t.insightsForTags.length?t.insightsForTags.map(e):[]}}},"WG+J":function(t,e,a){"use strict";a.r(e);var n=a("txSG"),c=a("t8Zj"),l=a("53F/"),i=function(t){var e=[];return t.populationGroupTags&&t.populationGroupTags.length&&e.push.apply(e,Object(c.a)(t.populationGroupTags)),t.industriesTags&&t.industriesTags.length&&e.push.apply(e,Object(c.a)(t.industriesTags)),t.locationsTags&&t.locationsTags.length&&e.push.apply(e,Object(c.a)(t.locationsTags)),t.socialImpactsTags&&t.socialImpactsTags.length&&e.push.apply(e,Object(c.a)(t.socialImpactsTags)),t.insightsForTags&&t.insightsForTags.length&&e.push.apply(e,Object(c.a)(t.insightsForTags)),{title:t.title,description:t.description,img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:t.typeHandle,video:t.embedVideo||"",attachments:t.attachments,links:t.externalLinks,authors:t.authors||[],organisations:t.organisations||[],related:t.related&&t.related.length?t.related.map(l.b):[],tags:e}},r=a("gmV2");e.default=function(t){var e=function(t){return{entry:i(t.entry)}}(t.data.craft).entry;return Object(n.f)(r.a,{entry:e,pageType:"resource",location:t.location})}},gmV2:function(t,e,a){"use strict";var n=a("txSG"),c=a("zbVx"),l=a("R3Jx"),i=a("lpnl"),r=a("zDcZ"),s=a("Wbzz"),o=a("KOep"),u=a("orZN"),p=a("q1tI"),b=a.n(p),g=function(){return b.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("path",{d:"M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M10 2H14V6",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M6.66699 9.33333L14.0003 2",stroke:"#20222B","stroke-width":"1.33333"}))},j=function(){return b.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("path",{d:"M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M4.66699 6.66666L8.00033 10L11.3337 6.66666",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M8 10V2",stroke:"#20222B","stroke-width":"1.33333"}))},O=a("J+Ro"),f=a.n(O),h=a("VXBa"),d=a("zpQe"),m=a("vrFN");e.a=function(t){var e=t.pageType,a=void 0===e?"resource":e,p=t.entry,b=t.location,O=p.title,y=p.description,x=p.type,v=p.links,w=p.attachments,k=p.tags,T=p.authors,C=p.organisations,G=p.related,V=p.video,z=p.img,B=!!(v&&v.length||w&&w.length),F="resource"!==a?"Links":"Resources",L="resource"===a,S="organisation"===a,R="resource"===a?"Related research":"Research by "+O,H="resource"===a;return Object(n.f)(h.a,null,Object(n.f)(m.a,{metadata:{metaTitle:O,metaDescription:y},location:b}),Object(n.f)("div",null,Object(n.f)("div",{sx:{bg:"csiLightGrey",pt:[Object(r.c)(25),null,Object(r.c)(70)],pb:[Object(r.c)(35),null,Object(r.c)(50)]}},Object(n.f)(c.a,null,Object(n.f)("div",{sx:{backgroundImage:"url("+f.a+")",backgroundRepeat:"no-repeat",backgroundPositionX:"right",backgroundPositionY:"top"}},Object(n.f)(d.a,null)))),Object(n.f)("div",{sx:{pt:[Object(r.c)(40),null,Object(r.c)(80)]}},Object(n.f)(c.a,null,Object(n.f)("div",{sx:{display:"flex",flexDirection:["column",null,"row"],justifyContent:"space-between"}},Object(n.f)("div",{sx:{width:["100%",null,Object(r.c)(545)]}},Object(n.f)(o.a,{type:Object(u.a)(x).toLowerCase()}),Object(n.f)("h1",{sx:{mt:Object(r.c)(10),fontSize:[Object(r.c)(30),null,Object(r.c)(45)]}},O),z&&Object(n.f)("div",null,Object(n.f)("img",{src:z.src,alt:z.alt,sx:{width:"100%"}})),V&&Object(n.f)("div",null,Object(n.f)("iframe",{sx:{width:"100%",height:[Object(r.c)(200),null,Object(r.c)(300)],mb:[Object(r.c)(30),null,Object(r.c)(40)]},src:V,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),y&&Object(n.f)("p",{sx:{my:0,fontSize:[Object(r.c)(16),null,Object(r.c)(18)],lineHeight:1.35,whiteSpace:"pre-line"}},y," "),H&&Object(n.f)("section",null,Object(n.f)("h2",{sx:{mt:[Object(r.c)(40),null,Object(r.c)(70)],fontSize:[Object(r.c)(18),null,Object(r.c)(24)]}},"Related tags"),k&&k.length?Object(n.f)("ul",{sx:{display:"flex",flexWrap:"wrap",mt:[Object(r.c)(20),null,Object(r.c)(30)],mb:Object(r.c)(20)}},k.map((function(t){var e=t.title,a=t.groupHandle,c=t.slug;return Object(n.f)(i.a,{link:"explore/"+Object(u.b)(a)+"/"+c,label:e,size:"xs",key:c})}))):null)),Object(n.f)("div",{sx:{width:["100%",null,Object(r.c)(308)],pt:Object(r.c)(40)}},B?Object(n.f)("section",{sx:{pb:Object(r.c)(15)}},Object(n.f)("h2",{sx:{variant:["typography.headingXL"],mt:0}},F),Object(n.f)("ul",{sx:{li:{fontSize:[Object(r.c)(14),Object(r.c)(16)],fontWeight:600,mb:Object(r.c)(20),mt:[Object(r.c)(10),null,Object(r.c)(20)],lineHeight:1.4,wordBreak:"break-word"},span:{display:"inline-block",marginRight:Object(r.c)(8),transform:"translateY(2px)"}}},w?w.map((function(t){var e=t.filename,a=t.url;return Object(n.f)("li",{key:a},Object(n.f)("a",{className:"link-hover",href:a,target:"_blank",sx:{display:"flex"}},Object(n.f)("span",null,Object(n.f)(j,null)),e))})):null,v?v.map((function(t){var e=t.linkURL,a=t.label;return Object(n.f)("li",{key:a},Object(n.f)("a",{className:"link-hover",href:e,target:"_blank",sx:{display:"flex"}},Object(n.f)("span",null,Object(n.f)(g,null)),a||e))})):null)):null,L&&T&&T.length?Object(n.f)("section",null,Object(n.f)("h2",{sx:{variant:["typography.headingXL"],mb:Object(r.c)(10),mt:Object(r.c)(10)}},"Authors"),Object(n.f)("ul",{sx:{display:"flex",flexWrap:"wrap",span:{mr:Object(r.c)(2),mt:[Object(r.c)(6),null,Object(r.c)(6)],variant:"typgoraphy.paragraphXS",a:{textDecoration:"underline"}}}},T.map((function(t,e){var a=t.title,c=t.uri;return Object(n.f)("span",{key:c},Object(n.f)(s.a,{to:c,className:"link-hover-invert"},a),e!==T.length-1&&",")})))):null,S&&C&&C.length?Object(n.f)("section",null,Object(n.f)("h2",{sx:{variant:["typography.headingXL"],mb:Object(r.c)(5),mt:Object(r.c)(50)}},"Organisations"),Object(n.f)("ul",{sx:{display:"flex",flexWrap:"wrap",span:{mr:Object(r.c)(2),mt:[Object(r.c)(6),null,Object(r.c)(6)],variant:"typgoraphy.paragraphXS",a:{textDecoration:"underline"}}}},C.map((function(t,e){var a=t.title,c=t.uri;return Object(n.f)("span",{key:c},Object(n.f)(s.a,{to:c,className:"link-hover-invert"},a),e!==C.length-1&&",")})))):null)),G&&G.length?Object(n.f)("section",{sx:{mt:[Object(r.c)(80),null,Object(r.c)(100)],mb:[Object(r.c)(60),null,Object(r.c)(100)]}},Object(n.f)("h2",{sx:{fontSize:[Object(r.c)(18),null,Object(r.c)(24)],mb:[Object(r.c)(30),null,null]}},R),Object(n.f)("section",{sx:{display:"grid",gridTemplateColumns:["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"],gridColumnGap:["0.85rem",null,"3.00rem"],gridRowGap:["0.85rem",null,"3.00rem"],"> div":{gridColumn:"initial"}}},G.map((function(t){return Object(n.f)(l.a,{hit:t,static:!0,key:t.title})})))):null))))}}}]);
//# sourceMappingURL=component---src-templates-channels-resource-index-tsx-92f9a81d2dd3fcdcb184.js.map