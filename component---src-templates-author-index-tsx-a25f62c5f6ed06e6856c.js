(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4W3r":function(t,e,n){"use strict";var i=n("q1tI"),a=n.n(i);e.a=function(){return a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333",stroke:"#20222B","stroke-width":"1.33333"}),a.a.createElement("path",{d:"M10 2H14V6",stroke:"#20222B","stroke-width":"1.33333"}),a.a.createElement("path",{d:"M6.66699 9.33333L14.0003 2",stroke:"#20222B","stroke-width":"1.33333"}))}},"J+Ro":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg1IiBoZWlnaHQ9IjE1NSIgdmlld0JveD0iMCAwIDE4NSAxNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xODQuMjkzIDc3LjVMMTA3LjU3IDAuNzA3NDI3TDk0LjA3MDggMTQuMjE4OUwxNDYuODk1IDY3LjA5MDhMMTQ3Ljc0OCA2Ny45NDQySDE0Ni41NDFIMC40OTk5ODVWODcuMDU1OEgxNDYuNTQxSDE0Ny43NDhMMTQ2Ljg5NSA4Ny45MDkyTDk0LjA3MDggMTQwLjc4MUwxMDcuNTcgMTU0LjI5M0wxODQuMjkzIDc3LjVaIiBzdHJva2U9IiNDRUQzREQiLz4KPC9zdmc+Cg=="},Ozfc:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return d}));var i=n("txSG"),a=n("q1tI"),r=n.n(a),o=n("zbVx"),c=n("R3Jx"),s=n("zDcZ");n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf");function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var g=function(t){var e=function(t){return t.title};return{title:t.title||"",slug:t.slug||"",description:t.description||"",video:t.embedVideo||"",img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:t.typeHandle,socialImpacts:t.socialImpactsTags&&t.socialImpactsTags.length?t.socialImpactsTags.map(e):[],populationGroups:t.populationGroupTags&&t.populationGroupTags.length?t.populationGroupTags.map(e):[],industries:t.industriesTags&&t.industriesTags.length?t.industriesTags.map(e):[],locations:t.locationsTags&&t.locationsTags.length?t.locationsTags.map(e):[],insightsFor:t.insightsForTags&&t.insightsForTags.length?t.insightsForTags.map(e):[]}},p=function(t,e){console.log(e);var n=[];return t.populationGroupTags&&t.populationGroupTags.length&&n.push.apply(n,l(t.populationGroupTags)),t.industriesTags&&t.industriesTags.length&&n.push.apply(n,l(t.industriesTags)),t.locationsTags&&t.locationsTags.length&&n.push.apply(n,l(t.locationsTags)),t.socialImpactsTags&&t.socialImpactsTags.length&&n.push.apply(n,l(t.socialImpactsTags)),t.insightsForTags&&t.insightsForTags.length&&n.push.apply(n,l(t.insightsForTags)),{title:t.title,description:t.description,img:t.img&&t.img.length?{src:t.img[0].url,alt:t.img[0].title}:null,type:t.typeHandle,video:t.embedVideo||"",attachments:t.attachments,links:t.externalLinks,authors:t.authors,organisations:t.organisations,related:e&&e.length?e.map(g):[],tags:n}},b=n("Wbzz"),f=n("KOep"),h=n("4W3r"),j=n("RIwO"),m=n("J+Ro"),O=n.n(m),d=(e.default=function(t){var e,n=(e=t.data.craft,{entry:p(e.author,e.allEntries.filter((function(t){var e=t.__typename;return"Craft_author_authors_Entry"!==e&&"Craft_organisation_organisations_Entry"!==e})).filter((function(t){return t.authors.filter((function(t){return t.id==e.author.id})).length?(console.log(!0),!0):(console.log(!1),!1)})))}).entry,a=n.title,l=n.description,u=n.type,g=n.links,m=n.attachments,d=(n.tags,n.authors,n.organisations),y=(n.video,n.related);return Object(i.f)("div",null,Object(i.f)("div",{sx:{bg:"csiLightGrey",pt:Object(s.c)(10)}},Object(i.f)(o.a,null,Object(i.f)("div",{sx:{backgroundImage:"url("+O.a+")",backgroundRepeat:"no-repeat",backgroundPositionX:"right",backgroundPositionY:"top",py:Object(s.c)(40)}},Object(i.f)("button",{onClick:function(){window.history.go(-1)},sx:{fontSize:Object(s.c)(18),fontWeight:600,svg:{transform:"rotate(180deg) translateY(-5px)",marginRight:Object(s.c)(3)}}},Object(i.f)(j.a,null),"Back")))),Object(i.f)("div",{sx:{py:Object(s.c)(20)}},Object(i.f)(o.a,null,Object(i.f)("div",{sx:{display:"flex",flexDirection:["column",null,"row"],justifyContent:"space-between"}},Object(i.f)("div",{sx:{width:["100%",null,Object(s.c)(523)]}},Object(i.f)(f.a,{type:u}),Object(i.f)("h1",{sx:{fontSize:[Object(s.c)(34),null,Object(s.c)(54)],mt:Object(s.c)(10),mb:[Object(s.c)(20),null,Object(s.c)(40)],lineHeight:1.15}},a),l&&Object(i.f)("p",{sx:{my:0,fontSize:[Object(s.c)(14),null,Object(s.c)(16)],lineHeight:1.35,whiteSpace:"pre-line"}},l," ")),Object(i.f)("div",{sx:{width:["100%",null,Object(s.c)(308)],pt:Object(s.c)(40)}},g&&g.length||m&&m.length?Object(i.f)("section",null,Object(i.f)("h2",{sx:{fontSize:[Object(s.c)(18),null,Object(s.c)(24)],mb:Object(s.c)(5),mt:0}},"Links"),Object(i.f)("ul",{sx:{li:{fontSize:[Object(s.c)(14),Object(s.c)(16)],fontWeight:600,mb:Object(s.c)(20),lineHeight:1.4},span:{display:"inline-block",marginRight:Object(s.c)(8),transform:"translateY(2px)"}}},g.map((function(t){t.linkURL;var e=t.label;return Object(i.f)("li",null,Object(i.f)("span",null,Object(i.f)(h.a,null)),e)})))):null,d&&d.length?Object(i.f)("section",null,Object(i.f)("h2",{sx:{fontSize:[Object(s.c)(18),null,Object(s.c)(24)],mb:Object(s.c)(5),mt:Object(s.c)(40)}},"Organisations"),Object(i.f)("ul",{sx:{display:"flex",fontSize:[Object(s.c)(14),Object(s.c)(16)]}},d.map((function(t,e){var n=t.title,a=t.uri;return Object(i.f)(r.a.Fragment,null,Object(i.f)(b.a,{to:a},n),e!==d.length-1&&",")})))):null)),y&&y.length?Object(i.f)("section",{sx:{mt:[Object(s.c)(80),null,Object(s.c)(100)]}},Object(i.f)("h2",{sx:{fontSize:[Object(s.c)(18),null,Object(s.c)(24)]}},"Research by ",a),Object(i.f)("section",{sx:{display:"grid",gridTemplateColumns:["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"],gridColumnGap:["0.85rem",null,"3.00rem"],gridRowGap:["0.85rem",null,"3.00rem"],"> div":{gridColumn:"initial"}}},y.map((function(t){return Object(i.f)(c.a,{hit:t,static:!0})})))):null)))},"1968136014")}}]);
//# sourceMappingURL=component---src-templates-author-index-tsx-a25f62c5f6ed06e6856c.js.map