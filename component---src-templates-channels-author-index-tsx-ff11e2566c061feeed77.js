(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"53F/":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=n("orZN"),r=function(t){return{title:t.entry.title,description:t.entry.description||"",body:t.entry.body||""}},i=function(t){var e=function(t){return t.title};return{title:t.title||"",slug:t.slug||"",description:t.description||"",video:t.embedVideo||"",img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:Object(a.a)(t.typeHandle),socialImpacts:t.socialImpactsTags&&t.socialImpactsTags.length?t.socialImpactsTags.map(e):[],populationGroups:t.populationGroupTags&&t.populationGroupTags.length?t.populationGroupTags.map(e):[],industries:t.industriesTags&&t.industriesTags.length?t.industriesTags.map(e):[],locations:t.locationsTags&&t.locationsTags.length?t.locationsTags.map(e):[],insightsFor:t.insightsForTags&&t.insightsForTags.length?t.insightsForTags.map(e):[]}}},gmV2:function(t,e,n){"use strict";var a=n("txSG"),r=n("zbVx"),i=n("R3Jx"),l=n("lpnl"),c=n("zDcZ"),o=n("Wbzz"),s=n("KOep"),u=n("orZN"),p=n("q1tI"),b=n.n(p),g=function(){return b.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("path",{d:"M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M10 2H14V6",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M6.66699 9.33333L14.0003 2",stroke:"#20222B","stroke-width":"1.33333"}))},f=function(){return b.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("path",{d:"M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M4.66699 6.66666L8.00033 10L11.3337 6.66666",stroke:"#20222B","stroke-width":"1.33333"}),b.a.createElement("path",{d:"M8 10V2",stroke:"#20222B","stroke-width":"1.33333"}))},h=n("J+Ro"),O=n.n(h),j=n("VXBa"),d=n("zpQe"),m=n("vrFN");e.a=function(t){var e=t.pageType,n=void 0===e?"resource":e,p=t.entry,b=t.location,h=p.title,y=p.description,v=p.type,x=p.links,w=p.attachments,T=p.tags,k=p.authors,C=p.organisations,S=p.related,E=p.video,G=p.img,B=!!(x&&x.length||w&&w.length),F="resource"!==n?"Links":"Resources",I="resource"===n,V="organisation"===n,z="resource"===n?"Related research":"Research by "+h,L="resource"===n;return Object(a.f)(j.a,null,Object(a.f)(m.a,{metadata:{metaTitle:h,metaDescription:y},location:b}),Object(a.f)("div",null,Object(a.f)("div",{sx:{bg:"csiLightGrey",pt:[Object(c.c)(25),null,Object(c.c)(70)],pb:[Object(c.c)(35),null,Object(c.c)(50)]}},Object(a.f)(r.a,null,Object(a.f)("div",{sx:{backgroundImage:"url("+O.a+")",backgroundRepeat:"no-repeat",backgroundPositionX:"right",backgroundPositionY:"top"}},Object(a.f)(d.a,null)))),Object(a.f)("div",{sx:{pt:[Object(c.c)(40),null,Object(c.c)(80)]}},Object(a.f)(r.a,null,Object(a.f)("div",{sx:{display:"flex",flexDirection:["column",null,"row"],justifyContent:"space-between"}},Object(a.f)("div",{sx:{width:["100%",null,Object(c.c)(545)]}},Object(a.f)(s.a,{type:Object(u.a)(v).toLowerCase()}),Object(a.f)("h1",{sx:{mt:Object(c.c)(10),fontSize:[Object(c.c)(30),null,Object(c.c)(45)]}},h),G&&Object(a.f)("div",null,Object(a.f)("img",{src:G.src,alt:G.alt,sx:{width:"100%"}})),E&&Object(a.f)("div",null,Object(a.f)("iframe",{sx:{width:"100%",height:[Object(c.c)(200),null,Object(c.c)(300)],mb:[Object(c.c)(30),null,Object(c.c)(40)]},src:E,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),y&&Object(a.f)("p",{sx:{my:0,fontSize:[Object(c.c)(16),null,Object(c.c)(18)],lineHeight:1.35,whiteSpace:"pre-line"}},y," "),L&&Object(a.f)("section",null,Object(a.f)("h2",{sx:{mt:[Object(c.c)(40),null,Object(c.c)(70)],fontSize:[Object(c.c)(18),null,Object(c.c)(24)]}},"Related tags"),T&&T.length?Object(a.f)("ul",{sx:{display:"flex",flexWrap:"wrap",mt:[Object(c.c)(20),null,Object(c.c)(30)],mb:Object(c.c)(20)}},T.map((function(t){var e=t.title,n=t.groupHandle,r=t.slug;return Object(a.f)(l.a,{link:"explore/"+Object(u.b)(n)+"/"+r,label:e,size:"xs"})}))):null)),Object(a.f)("div",{sx:{width:["100%",null,Object(c.c)(308)],pt:Object(c.c)(40)}},B?Object(a.f)("section",{sx:{pb:Object(c.c)(15)}},Object(a.f)("h2",{sx:{variant:["typography.headingXL"],mt:0}},F),Object(a.f)("ul",{sx:{li:{fontSize:[Object(c.c)(14),Object(c.c)(16)],fontWeight:600,mb:Object(c.c)(20),mt:[Object(c.c)(10),null,Object(c.c)(20)],lineHeight:1.4,wordBreak:"break-word"},span:{display:"inline-block",marginRight:Object(c.c)(8),transform:"translateY(2px)"}}},w?w.map((function(t){var e=t.filename,n=t.url;return Object(a.f)("li",null,Object(a.f)("a",{className:"link-hover",href:n,target:"_blank",sx:{display:"flex"}},Object(a.f)("span",null,Object(a.f)(f,null)),e))})):null,x?x.map((function(t){var e=t.linkURL,n=t.label;return Object(a.f)("li",null,Object(a.f)("a",{className:"link-hover",href:e,target:"_blank",sx:{display:"flex"}},Object(a.f)("span",null,Object(a.f)(g,null)),n||e))})):null)):null,I&&k&&k.length?Object(a.f)("section",null,Object(a.f)("h2",{sx:{variant:["typography.headingXL"],mb:Object(c.c)(10),mt:Object(c.c)(10)}},"Authors"),Object(a.f)("ul",{sx:{display:"flex",flexWrap:"wrap",span:{mr:Object(c.c)(2),mt:[Object(c.c)(6),null,Object(c.c)(6)],variant:"typgoraphy.paragraphXS",a:{textDecoration:"underline"}}}},k.map((function(t,e){var n=t.title,r=t.uri;return Object(a.f)("span",null,Object(a.f)(o.a,{to:r,className:"link-hover-invert"},n),e!==k.length-1&&",")})))):null,V&&C&&C.length?Object(a.f)("section",null,Object(a.f)("h2",{sx:{variant:["typography.headingXL"],mb:Object(c.c)(5),mt:Object(c.c)(50)}},"Organisations"),Object(a.f)("ul",{sx:{display:"flex",flexWrap:"wrap",span:{mr:Object(c.c)(2),mt:[Object(c.c)(6),null,Object(c.c)(6)],variant:"typgoraphy.paragraphXS",a:{textDecoration:"underline"}}}},C.map((function(t,e){var n=t.title,r=t.uri;return Object(a.f)("span",null,Object(a.f)(o.a,{to:r,className:"link-hover-invert"},n),e!==C.length-1&&",")})))):null)),S&&S.length?Object(a.f)("section",{sx:{mt:[Object(c.c)(80),null,Object(c.c)(100)],mb:[Object(c.c)(60),null,Object(c.c)(100)]}},Object(a.f)("h2",{sx:{fontSize:[Object(c.c)(18),null,Object(c.c)(24)],mb:[Object(c.c)(30),null,null]}},z),Object(a.f)("section",{sx:{display:"grid",gridTemplateColumns:["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"],gridColumnGap:["0.85rem",null,"3.00rem"],gridRowGap:["0.85rem",null,"3.00rem"],"> div":{gridColumn:"initial"}}},S.map((function(t){return Object(a.f)(i.a,{hit:t,static:!0})})))):null))))}},tgSs:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return s}));var a=n("txSG"),r=(n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("53F/"));function i(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var c=function(t,e){var n=[];return t.populationGroupTags&&t.populationGroupTags.length&&n.push.apply(n,i(t.populationGroupTags)),t.industriesTags&&t.industriesTags.length&&n.push.apply(n,i(t.industriesTags)),t.locationsTags&&t.locationsTags.length&&n.push.apply(n,i(t.locationsTags)),t.socialImpactsTags&&t.socialImpactsTags.length&&n.push.apply(n,i(t.socialImpactsTags)),t.insightsForTags&&t.insightsForTags.length&&n.push.apply(n,i(t.insightsForTags)),{title:t.title,description:t.description,img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:t.typeHandle,video:t.embedVideo||"",attachments:t.attachments,links:t.externalLinks,authors:t.authors||[],organisations:t.organisations,related:e&&e.length?e.map(r.b):[],tags:n}},o=n("gmV2"),s=(e.default=function(t){var e=function(t){return{entry:c(t.author,t.allEntries.filter((function(t){var e=t.__typename;return"Craft_author_authors_Entry"!==e&&"Craft_organisation_organisations_Entry"!==e})).filter((function(e){var n=e.authors;return!(!n||!n.filter((function(e){return e.id==t.author.id})).length)})))}}(t.data.craft).entry;return Object(a.f)(o.a,{entry:e,pageType:"author",location:t.location})},"1968136014")}}]);
//# sourceMappingURL=component---src-templates-channels-author-index-tsx-ff11e2566c061feeed77.js.map