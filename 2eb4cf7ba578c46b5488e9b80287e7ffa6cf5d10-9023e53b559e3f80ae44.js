(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2W6z":function(e,t,n){"use strict";n("pIFo");var r=function(){};e.exports=r},"4IfK":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var r=n("q1tI"),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.useIsomorphicLayoutEffect=i},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var i=n("q1tI"),o=r(i),c=r(n("Gytx"));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),M.canUseDOM?t(l):n&&(l=n(l))}var M=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=i.prototype;return a.shouldComponentUpdate=function(e){return!c(e,this.props)},a.componentWillMount=function(){s.push(this),T()},a.componentDidUpdate=function(){T()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},a.render=function(){return o.createElement(r,this.props)},i}(i.Component);return a(M,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(M,"canUseDOM",u),M}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),c=Object.keys(t);if(o.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!a(l))return!1;var s=e[l],T=t[l];if(!1===(i=n?n.call(r,s,T,l):void 0)||void 0===i&&s!==T)return!1}return!0}},"J+Ro":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDM1MCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcxLjc3NCAxNTYuNEwxNzYuMDU1IDYwLjU5NEwyMDEuNjI2IDM1TDM0MSAxNzQuNUwyMDEuNjI2IDMxNEwxNzYuMDU1IDI4OC40MDZMMjcxLjc3NCAxOTIuNkg4VjE1Ni40SDI3MS43NzRaTTEwIDE1OC40SDI3Ni42TDE3OC44ODIgNjAuNTk0TDIwMS42MjYgMzcuODI5N0wzMzguMTczIDE3NC41TDIwMS42MjYgMzExLjE3TDE3OC44ODIgMjg4LjQwNkwyNzYuNiAxOTAuNkgxMFYxNTguNFoiIGZpbGw9IiNDRUQzREQiLz4KPC9zdmc+Cg=="},"L8V+":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gippslandia","description":"Gippslandia is a quarterly newspaper for the Gippsland and beyond. We aim to present your stories with the attention they deserve.","hostname":"https://seespace.com.au"}}}}')},MTtx:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA1IiBoZWlnaHQ9IjgxIiB2aWV3Qm94PSIwIDAgMjA1IDgxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi43MDgzIDU1LjU4MzRDMzEuOTExOCA1NS41ODM0IDIxLjU1NzUgNTkuODcyMyAxMy45MjMyIDY3LjUwNjZDNi4yODg5IDc1LjE0MDkgMiA4NS40OTUyIDIgOTYuMjkxN1YxMTEuMzc1SDE1LjA4MzNWOTYuMjkxN0MxNS4wODMzIDg4Ljk2NTEgMTcuOTkzOCA4MS45Mzg2IDIzLjE3NDUgNzYuNzU3OUMyOC4zNTUyIDcxLjU3NzIgMzUuMzgxNyA2OC42NjY3IDQyLjcwODMgNjguNjY2N0gxMTEuMDQyQzExOC4zNjggNjguNjY2NyAxMjUuMzk1IDcxLjU3NzIgMTMwLjU3NiA3Ni43NTc5QzEzNS43NTYgODEuOTM4NiAxMzguNjY3IDg4Ljk2NTEgMTM4LjY2NyA5Ni4yOTE3VjExMS4zNzVIMTUxLjc1Vjk2LjI5MTdDMTUxLjc1IDg1LjQ5NTIgMTQ3LjQ2MSA3NS4xNDA5IDEzOS44MjcgNjcuNTA2NkMxMzIuMTkzIDU5Ljg3MjMgMTIxLjgzOCA1NS41ODM0IDExMS4wNDIgNTUuNTgzNEg0Mi43MDgzWk0xNTMuNzUgOTYuMjkxN0MxNTMuNzUgODQuOTY0OCAxNDkuMjUgNzQuMTAxNyAxNDEuMjQxIDY2LjA5MjRDMTMzLjIzMiA1OC4wODMgMTIyLjM2OSA1My41ODM0IDExMS4wNDIgNTMuNTgzNEg0Mi43MDgzQzMxLjM4MTQgNTMuNTgzNCAyMC41MTgzIDU4LjA4MyAxMi41MDkgNjYuMDkyNEM0LjQ5OTYyIDc0LjEwMTcgMCA4NC45NjQ4IDAgOTYuMjkxN1YxMTMuMzc1SDE3LjA4MzNWOTYuMjkxN0MxNy4wODMzIDg5LjQ5NTUgMTkuNzgzMSA4Mi45Nzc3IDI0LjU4ODcgNzguMTcyMUMyOS4zOTQzIDczLjM2NjUgMzUuOTEyMiA3MC42NjY3IDQyLjcwODMgNzAuNjY2N0gxMTEuMDQyQzExNy44MzggNzAuNjY2NyAxMjQuMzU2IDczLjM2NjUgMTI5LjE2MSA3OC4xNzIxQzEzMy45NjcgODIuOTc3NyAxMzYuNjY3IDg5LjQ5NTUgMTM2LjY2NyA5Ni4yOTE3VjExMy4zNzVIMTUzLjc1Vjk2LjI5MTdaIiBmaWxsPSIjNjE2MTYxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDkuMjUgLTYuMjA4MjlDNDkuMjUgLTIxLjQ2NTIgNjEuNjE4MiAtMzMuODMzMyA3Ni44NzUgLTMzLjgzMzNDOTIuMTMxOSAtMzMuODMzMyAxMDQuNSAtMjEuNDY1MiAxMDQuNSAtNi4yMDgyOUMxMDQuNSA5LjA0ODU4IDkyLjEzMTkgMjEuNDE2NyA3Ni44NzUgMjEuNDE2N0M2MS42MTgyIDIxLjQxNjcgNDkuMjUgOS4wNDg1OCA0OS4yNSAtNi4yMDgyOVpNNzYuODc1IC00Ni45MTY2QzU0LjM5MjQgLTQ2LjkxNjYgMzYuMTY2NyAtMjguNjkwOSAzNi4xNjY3IC02LjIwODI5QzM2LjE2NjcgMTYuMjc0MyA1NC4zOTI0IDM0LjUgNzYuODc1IDM0LjVDOTkuMzU3NiAzNC41IDExNy41ODMgMTYuMjc0MyAxMTcuNTgzIC02LjIwODI5QzExNy41ODMgLTI4LjY5MDkgOTkuMzU3NiAtNDYuOTE2NiA3Ni44NzUgLTQ2LjkxNjZaTTUxLjI1IC02LjIwODI5QzUxLjI1IC0yMC4zNjA2IDYyLjcyMjcgLTMxLjgzMzMgNzYuODc1IC0zMS44MzMzQzkxLjAyNzMgLTMxLjgzMzMgMTAyLjUgLTIwLjM2MDYgMTAyLjUgLTYuMjA4MjlDMTAyLjUgNy45NDQwMSA5MS4wMjczIDE5LjQxNjcgNzYuODc1IDE5LjQxNjdDNjIuNzIyNyAxOS40MTY3IDUxLjI1IDcuOTQ0MDEgNTEuMjUgLTYuMjA4MjlaTTc2Ljg3NSAtNDguOTE2NkM1My4yODc5IC00OC45MTY2IDM0LjE2NjcgLTI5Ljc5NTUgMzQuMTY2NyAtNi4yMDgyOUMzNC4xNjY3IDE3LjM3ODkgNTMuMjg3OSAzNi41IDc2Ljg3NSAzNi41QzEwMC40NjIgMzYuNSAxMTkuNTgzIDE3LjM3ODkgMTE5LjU4MyAtNi4yMDgyOUMxMTkuNTgzIC0yOS43OTU1IDEwMC40NjIgLTQ4LjkxNjYgNzYuODc1IC00OC45MTY2WiIgZmlsbD0iIzYxNjE2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwNSA5Ni4yODU0QzIwNC45OTMgODYuODIyNiAyMDEuODQzIDc3LjYzMDEgMTk2LjA0NiA3MC4xNTEzQzE5MC42NTggNjMuMjAwNSAxODMuMjY2IDU4LjA5NTggMTc0Ljg5MyA1NS41MTA0QzE3NC4yNTcgNTUuMzE0IDE3My42MTYgNTUuMTMyMSAxNzIuOTY5IDU0Ljk2NTFMMTY4LjY5OCA3MS41MDZDMTc0LjE5NSA3Mi45MjU0IDE3OS4wNjYgNzYuMTMwNCAxODIuNTQ0IDgwLjYxNzdDMTg2LjAyMiA4NS4xMDQzIDE4Ny45MTIgOTAuNjE4OSAxODcuOTE3IDk2LjI5NTdWMTEzLjM3NUgyMDVMMjA1IDk2LjI5MThMMjA1IDk2LjI4NTRaTTIwMyA5Ni4yOTE4TDIwMyA5Ni4yODc4QzIwMi45OTMgODcuMjY4MSAxOTkuOTkxIDc4LjUwNTIgMTk0LjQ2NSA3MS4zNzY2QzE4OS4zNDggNjQuNzc2MSAxODIuMzM2IDU5LjkyMjEgMTc0LjM5MyA1Ny40NDkyTDE3MS4xMTYgNzAuMTM5NkMxNzYuMjU0IDcxLjg3MTYgMTgwLjc4NSA3NS4wODM2IDE4NC4xMjUgNzkuMzkyM0MxODcuODc0IDg0LjIyOTIgMTg5LjkxMSA5MC4xNzQyIDE4OS45MTcgOTYuMjk0MVYxMTEuMzc1SDIwM0wyMDMgOTYuMjkxOFoiIGZpbGw9IiM2MTYxNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzYuOTY0IC0zMi4zNjFDMTQyLjExNyAtMzAuNjM1MyAxNDYuNjYzIC0yNy40MjE0IDE1MC4wMTQgLTIzLjEwNDVDMTUzLjc3NSAtMTguMjU5IDE1NS44MTcgLTEyLjI5OTUgMTU1LjgxNyAtNi4xNjU2MUMxNTUuODE3IC0wLjAzMTY4ODcgMTUzLjc3NSA1LjkyNzc4IDE1MC4wMTQgMTAuNzczM0MxNDYuNjYzIDE1LjA5MDIgMTQyLjExNyAxOC4zMDQxIDEzNi45NjQgMjAuMDI5OEwxNDAuMjE1IDMyLjcyNjlDMTQ4LjE4MSAzMC4yNjQ0IDE1NS4yMTcgMjUuNDA4MSAxNjAuMzQ5IDE4Ljc5NTZDMTY1Ljg5MiAxMS42NTUzIDE2OC45IDIuODczMzcgMTY4LjkgLTYuMTY1NjFDMTY4LjkgLTE1LjIwNDYgMTY1Ljg5MiAtMjMuOTg2NSAxNjAuMzQ5IC0zMS4xMjY4QzE1NS4yMTcgLTM3LjczOTMgMTQ4LjE4MSAtNDIuNTk1NiAxNDAuMjE1IC00NS4wNTgxTDEzNi45NjQgLTMyLjM2MVpNMTM0LjU0OCAtMzAuOTg5OEwxMzguNzg1IC00Ny41MzkzQzEzOS40MzMgLTQ3LjM3MzYgMTQwLjA3NSAtNDcuMTkzIDE0MC43MTEgLTQ2Ljk5NzlDMTQ5LjEwOCAtNDQuNDIzNiAxNTYuNTI0IC0zOS4zMTY1IDE2MS45MjkgLTMyLjM1MzJDMTY3Ljc0NCAtMjQuODYyIDE3MC45IC0xNS42NDg3IDE3MC45IC02LjE2NTYxQzE3MC45IDMuMzE3NDYgMTY3Ljc0NCAxMi41MzA4IDE2MS45MjkgMjAuMDIyQzE1Ni41MjQgMjYuOTg1MyAxNDkuMTA4IDMyLjA5MjMgMTQwLjcxMSAzNC42NjY2QzE0MC4wNzUgMzQuODYxOCAxMzkuNDMzIDM1LjA0MjQgMTM4Ljc4NSAzNS4yMDgxTDEzNC41NDggMTguNjU4NkMxNDAuMDYgMTcuMjQ3MyAxNDQuOTQ2IDE0LjA0MTYgMTQ4LjQzNCA5LjU0NjkzQzE1MS45MjMgNS4wNTIyNCAxNTMuODE3IC0wLjQ3NTc3NyAxNTMuODE3IC02LjE2NTYxQzE1My44MTcgLTExLjg1NTQgMTUxLjkyMyAtMTcuMzgzNSAxNDguNDM0IC0yMS44NzgyQzE0NC45NDYgLTI2LjM3MjggMTQwLjA2IC0yOS41Nzg1IDEzNC41NDggLTMwLjk4OThaIiBmaWxsPSIjNjE2MTYxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMjA1IiBoZWlnaHQ9IjgxIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},NP09:function(e,t,n){},OTAv:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=a;var r=n("q1tI"),i=n("4IfK"),o="undefined"!=typeof window;function c(e){var t=e.element,n=e.useWindow;if(!o)return{x:0,y:0};var r=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function a(e,t,n,a,u){var l=(0,r.useRef)(c({useWindow:a})),s=null,T=function(){var t=c({element:n,useWindow:a});e({prevPos:l.current,currPos:t}),l.current=t,s=null};(0,i.useIsomorphicLayoutEffect)((function(){if(o){var e=function(){u?null===s&&(s=setTimeout(T,u)):T()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}a.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},RIwO:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r);t.a=function(){return i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M5 12H19",stroke:"currentColor","stroke-width":"2"}),i.a.createElement("path",{d:"M12 19L19 12L12 5",stroke:"currentColor","stroke-width":"2"}))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),c=T(n("17x9")),a=T(n("8+s/")),u=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function M(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,j,N,E=(0,a.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),g=(d=E,N=j=function(e){function t(){return f(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,c=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,c))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,c=e.newChildProps,a=e.nestedChildren;switch(i.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=a,t.titleAttributes=r({},c),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},c)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},c)})}return r({},o,((n={})[i.type]=r({},c),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,c=M(i,["children"]),a=(0,l.convertReactPropstoHtmlAttributes)(c);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=M(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(d,i)},i(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),j.propTypes={base:c.default.object,bodyAttributes:c.default.object,children:c.default.oneOfType([c.default.arrayOf(c.default.node),c.default.node]),defaultTitle:c.default.string,defer:c.default.bool,encodeSpecialCharacters:c.default.bool,htmlAttributes:c.default.object,link:c.default.arrayOf(c.default.object),meta:c.default.arrayOf(c.default.object),noscript:c.default.arrayOf(c.default.object),onChangeClientState:c.default.func,script:c.default.arrayOf(c.default.object),style:c.default.arrayOf(c.default.object),title:c.default.string,titleAttributes:c.default.object,titleTemplate:c.default.string},j.defaultProps={defer:!0,encodeSpecialCharacters:!0},j.peek=d.peek,j.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},N);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},VXBa:function(e,t,n){"use strict";var r=n("txSG"),i=n("zbVx"),o=n("lTFH"),c=n("q1tI"),a=n.n(c),u=n("Wbzz"),l=n("zDcZ"),s=n("YwZP"),T=n("zpQe"),M=n("RIwO"),f=function(){return Object(r.f)(s.Location,null,(function(e){var t=e.location;return Object(r.f)("div",{sx:{display:"flex",justifyContent:"space-between"}},Object(r.f)("div",{sx:{display:"flex",alignItems:"center"}},Object(r.f)(u.a,{to:"/"},Object(r.f)("h1",{sx:{color:"white",my:0,fontSize:[Object(l.c)(24),null,Object(l.c)(32)]}},"SEES"))),Object(r.f)("div",null,Object(r.f)(u.a,{to:"/explore",className:"link-hover",sx:{height:"100%",display:"inline-flex",alignItems:"center",px:[Object(l.c)(10),null,Object(l.c)(25)],fontWeight:600,fontSize:[Object(l.c)(14),null,Object(l.c)(20)],color:"/"===t.pathname?"csiDarkGrey":"white",background:"/"===t.pathname?"#F4F7FB":"initial"},activeStyle:{background:"#F4F7FB",color:"#20222B"},partiallyActive:!0},"Explore"),Object(r.f)(u.a,{to:"/about",className:"link-hover",sx:{height:"100%",display:"inline-flex",alignItems:"center",px:[Object(l.c)(10),null,Object(l.c)(25)],fontWeight:600,color:"white",fontSize:[Object(l.c)(14),null,Object(l.c)(20)]},activeStyle:{background:"#F4F7FB",color:"#20222B"}},"About"),Object(r.f)("div",{sx:{display:"inline-block",py:Object(l.c)(20),ml:Object(l.c)(20)}},Object(r.f)(u.a,{to:"/submit-research",className:"link-hover",sx:{bg:"csiYellow",px:Object(l.c)(14),py:Object(l.c)(10),fontWeight:600,fontSize:[Object(l.c)(14),null,Object(l.c)(20)],"&:hover":{bg:"#e7d67a",color:"initial"}}},"Submit",Object(r.f)("span",{sx:{display:["none","inline",null]}}," ","research")))))}))},p=function(e){var t=e.title;return Object(r.f)("div",{sx:{display:"flex",justifyContent:"space-between",color:"white",alignItems:"center",py:[Object(l.c)(15),Object(l.c)(15),Object(l.c)(17.4)]}},Object(r.f)("div",{sx:{button:{color:"white",transform:"translateY(-5px)",fontSize:[Object(l.c)(14),null,Object(l.c)(18)],svg:{transform:["rotate(180deg) translateY(-7px)",null,"rotate(180deg) translateY(-5px)"]}}}},Object(r.f)(T.a,null)),Object(r.f)("div",null,Object(r.f)("h1",{sx:{fontSize:Object(l.c)(24),my:0,display:["none","block",null],letterSpacing:"-0.5px"}},t)),Object(r.f)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},sx:{transform:"translateY(-5px)",color:"white",fontSize:[Object(l.c)(14),null,Object(l.c)(18)],fontWeight:600,svg:{transform:"rotate(270deg) translateY(2px) translateX(-6px)",marginRight:Object(l.c)(3)}}},"Top",Object(r.f)(M.a,null)))},d=function(){return Object(r.f)("div",{sx:{bg:"csiDarkGrey"}},Object(r.f)(i.a,{customStyles:{width:["95%",null,"90%"]}},Object(r.f)(f,null)))},j=function(e){var t=e.title,n=Object(c.useState)(!1),a=n[0],u=n[1];return Object(o.useScrollPosition)((function(e){e.currPos.y>=80?u(!0):u(!1)}),[],null,!0,80),Object(r.f)("div",null,Object(r.f)("div",{sx:{position:"static",bg:"csiDarkGrey",width:"100%"}},Object(r.f)(i.a,{customStyles:{width:["95%",null,"90%"]}},Object(r.f)(f,null))),Object(r.f)("div",{sx:{visibility:a?"visible":"hidden",opacity:a?1:0,position:"fixed",bg:"csiDarkGrey",width:"100%",zIndex:1e3,top:0,transition:"visibility 0.3s linear, opacity 0.3s linear"}},Object(r.f)(i.a,{customStyles:{width:["95%",null,"90%"]}},Object(r.f)(p,{title:t}))))},N=function(e){var t=e.title;return e.stickyMode?Object(r.f)(j,{title:t}):Object(r.f)(d,null)},E=(n("91GP"),function(){return a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",{"clip-path":"url(#clip0)"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.86192 8.19526L14.1953 0.861923L15.1381 1.80473L7.80473 9.13807L6.86192 8.19526Z",fill:"#20222B"}),a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.7533 0.246689L10.0737 16.4741L6.82827 9.17174L-0.474045 5.92627L15.7533 0.246689ZM3.14072 6.07374L7.83841 8.1616L9.92627 12.8593L13.58 2.41998L3.14072 6.07374Z",fill:"#20222B"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))}),g=function(){return Object(r.f)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(r.f)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.666672 1.33334H5.33334C6.21739 1.33334 7.06524 1.68453 7.69036 2.30965C8.31548 2.93477 8.66667 3.78261 8.66667 4.66667V14H7.33334C7.33334 13.6464 7.19286 13.3072 6.94281 13.0572C6.69277 12.8071 6.35363 12.6667 6 12.6667H0.666672V1.33334ZM7.33334 11.6906V4.66667C7.33334 4.13624 7.12262 3.62753 6.74755 3.25246C6.37248 2.87738 5.86377 2.66667 5.33334 2.66667H2.00001V11.3333H6C6.47216 11.3333 6.9314 11.4586 7.33334 11.6906Z",fill:"#20222B"}),Object(r.f)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.30964 2.30965C8.93476 1.68453 9.78261 1.33334 10.6667 1.33334H15.3333V12.6667H9.99999C9.64637 12.6667 9.30723 12.8071 9.05719 13.0572C8.80714 13.3072 8.66666 13.6464 8.66666 14H7.33333V4.66667C7.33333 3.78261 7.68452 2.93477 8.30964 2.30965ZM8.66666 11.6906C9.0686 11.4586 9.52784 11.3333 9.99999 11.3333H14V2.66667H10.6667C10.1362 2.66667 9.62752 2.87738 9.25245 3.25246C8.87738 3.62753 8.66666 4.13624 8.66666 4.66667V11.6906Z",fill:"#20222B"}))},A=n("MTtx"),y=n.n(A);var O={display:"flex",height:[Object(l.c)(100),null,Object(l.c)(277)],bg:"csiLightGrey",justifyContent:"center",alignItems:"center",width:["100%",null,"50%"],span:{variant:"typography.headingXL"},svg:{mr:"5px",width:["initial",null,Object(l.c)(20)],height:["initial",null,Object(l.c)(20)],transform:[null,null,"translateY(2px)"]}},I=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),Object(r.f)("footer",{sx:{width:"100%"}},Object(r.f)("div",{sx:{width:"100%",display:"flex",flexDirection:["column",null,"row"]}},Object(r.f)(u.a,{to:"/about",sx:O,className:"link-hover bg-hover"},Object(r.f)(g,null),Object(r.f)("span",null,"What is SEES?")),Object(r.f)(u.a,{className:"link-hover",to:"/submit-research",sx:Object.assign(Object.assign({},O),{},{bg:"csiYellow","&:hover":{bg:"#e7d67a"}})},Object(r.f)(E,null),Object(r.f)("span",null,"Submit research"))),Object(r.f)("div",{sx:{bg:"csiDarkGrey",color:"white",py:[Object(l.c)(25),null,Object(l.c)(20)],backgroundImage:"url("+y.a+")",backgroundRepeat:"no-repeat",backgroundPositionX:["100%",null,"56%"],backgroundPositionY:["top",null,"center"],backgroundSize:["contain",null,"contain"]}},Object(r.f)(i.a,{customStyles:{display:"flex",justifyContent:"space-between",alignItems:["flex-start",null,"center"],flexDirection:["column",null,"row"]}},Object(r.f)("div",{sx:{mb:[Object(l.c)(20),null,0]}},Object(r.f)("ul",{sx:{display:"flex",variant:"typography.paragraphM",fontWeight:600}},Object(r.f)("li",{sx:{mr:Object(l.c)(20)}},Object(r.f)(u.a,{to:"/terms-and-conditions",className:"link-hover"},"Terms and conditions")),Object(r.f)("li",null,Object(r.f)(u.a,{to:"/privacy-policy",className:"link-hover"},"Privacy policy")))),Object(r.f)("div",null,"© Social Innovation Evidence Portal 2020"))))},b=(n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("pIFo"),n("0l/t"),n("a1Th"),n("h7Nl"),n("2W6z"),h()?a.a.useLayoutEffect:a.a.useEffect,S);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function h(){return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement}function S(){}function x(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var L=function(e){var t=e.children,n=void 0===t?"Skip to content":t,r=e.contentId,i=x(e,["children","contentId"]),o=r||"reach-skip-nav";return Object(c.useEffect)((function(){return b("skip-nav")}),[]),a.a.createElement("a",Object.assign({},i,{href:"#"+o,"data-reach-skip-link":"","data-reach-skip-nav-link":""}),n)};var D=function(e){var t=e.id,n=x(e,["id"]),r=t||"reach-skip-nav";return a.a.createElement("div",Object.assign({},n,{id:r,"data-reach-skip-nav-content":""}))};n("NP09"),n("aT6C");var m=n("tjUo");t.a=function(e){var t=e.children,n=e.sticky,i=e.title;return Object(r.f)("div",{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"}},Object(r.f)(L,null),Object(r.f)(m.a,null),Object(r.f)(N,{stickyMode:n,title:i}),Object(r.f)(D,null),Object(r.f)("main",{id:"content",sx:{width:"100%",flex:"1 1 auto",mx:"auto"}},Object(r.f)("div",{sx:{width:"100%",pb:Object(l.c)(40)}},t)),Object(r.f)(I,null))}},Wbzz:function(e,t,n){"use strict";n("xfY5");var r=n("q1tI"),i=n.n(r),o=n("+ZDr"),c=n.n(o);n.d(t,"a",(function(){return c.a})),n.d(t,"b",(function(){return o.navigate}));n("lw3w"),n("emEt").default.enqueue,i.a.createContext({})},aT6C:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,c="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,l,s=r(t),T=r(n);if(s&&T){if((u=t.length)!=n.length)return!1;for(a=u;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(s!=T)return!1;var M=t instanceof Date,f=n instanceof Date;if(M!=f)return!1;if(M&&f)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var j=i(t);if((u=j.length)!==i(n).length)return!1;for(a=u;0!=a--;)if(!o.call(n,j[a]))return!1;if(c&&t instanceof Element&&n instanceof Element)return t===n;for(a=u;0!=a--;)if(!("_owner"===(l=j[a])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lTFH:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return r.useScrollPosition}});var r=n("OTAv")},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),i=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),c=u(n("MgzW")),a=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=j(e,a.TAG_NAMES.TITLE),n=j(e,a.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=j(e,a.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},M=function(e){return j(e,a.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[a.TAG_NAMES.BASE]})).map((function(e){return e[a.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),c=0;c<o.length;c++){var u=o[c],l=u.toLowerCase();-1===t.indexOf(l)||n===a.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===a.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==a.TAG_PROPERTIES.INNER_HTML&&u!==a.TAG_PROPERTIES.CSS_TEXT&&u!==a.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var l=o[u],s=(0,c.default)({},i[l],r[l]);i[l]=s}return e}),[]).reverse()},j=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},N=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){N(e)}),0)}),E=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||N:e.requestAnimationFrame||N,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,I=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,c=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,M=e.title,f=e.titleAttributes;S(a.TAG_NAMES.BODY,r),S(a.TAG_NAMES.HTML,i),h(M,f);var p={baseTag:x(a.TAG_NAMES.BASE,n),linkTags:x(a.TAG_NAMES.LINK,o),metaTags:x(a.TAG_NAMES.META,c),noscriptTags:x(a.TAG_NAMES.NOSCRIPT,u),scriptTags:x(a.TAG_NAMES.SCRIPT,s),styleTags:x(a.TAG_NAMES.STYLE,T)},d={},j={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(j[e]=p[e].oldTags)})),t&&t(),l(e,d,j)},b=function(e){return Array.isArray(e)?e.join(""):e},h=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),S(a.TAG_NAMES.TITLE,t)},S=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(a.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),c=Object.keys(t),u=0;u<c.length;u++){var l=c[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var T=o.indexOf(l);-1!==T&&o.splice(T,1)}for(var M=o.length-1;M>=0;M--)n.removeAttribute(o[M]);i.length===o.length?n.removeAttribute(a.HELMET_ATTRIBUTE):n.getAttribute(a.HELMET_ATTRIBUTE)!==c.join(",")&&n.setAttribute(a.HELMET_ATTRIBUTE,c.join(","))}},x=function(e,t){var n=document.head||document.querySelector(a.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+a.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===a.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===a.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(a.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return c=t,n.isEqualNode(e)}))?i.splice(c,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},L=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[a.REACT_TAG_MAP[n]||n]=e[n],t}),t)},m=function(e,t,n){switch(e){case a.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[a.HELMET_ATTRIBUTE]=!0,i=D(n,r),[o.default.createElement(a.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=L(n),o=b(t);return i?"<"+e+" "+a.HELMET_ATTRIBUTE+'="true" '+i+">"+s(o,r)+"</"+e+">":"<"+e+" "+a.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case a.ATTRIBUTE_NAMES.BODY:case a.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return D(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[a.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=a.REACT_TAG_MAP[e]||e;if(n===a.TAG_PROPERTIES.INNER_HTML||n===a.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===a.TAG_PROPERTIES.INNER_HTML||e===a.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",c=-1===a.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+a.HELMET_ATTRIBUTE+'="true" '+i+(c?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[a.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){O&&A(O),e.defer?O=g((function(){I(e,(function(){O=null}))})):(I(e),O=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,c=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,M=void 0===T?"":T,f=e.titleAttributes;return{base:m(a.TAG_NAMES.BASE,t,r),bodyAttributes:m(a.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:m(a.ATTRIBUTE_NAMES.HTML,i,r),link:m(a.TAG_NAMES.LINK,o,r),meta:m(a.TAG_NAMES.META,c,r),noscript:m(a.TAG_NAMES.NOSCRIPT,u,r),script:m(a.TAG_NAMES.SCRIPT,l,r),style:m(a.TAG_NAMES.STYLE,s,r),title:m(a.TAG_NAMES.TITLE,{title:M,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:p([a.TAG_PROPERTIES.HREF],e),bodyAttributes:f(a.ATTRIBUTE_NAMES.BODY,e),defer:j(e,a.HELMET_PROPS.DEFER),encode:j(e,a.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(a.ATTRIBUTE_NAMES.HTML,e),linkTags:d(a.TAG_NAMES.LINK,[a.TAG_PROPERTIES.REL,a.TAG_PROPERTIES.HREF],e),metaTags:d(a.TAG_NAMES.META,[a.TAG_PROPERTIES.NAME,a.TAG_PROPERTIES.CHARSET,a.TAG_PROPERTIES.HTTPEQUIV,a.TAG_PROPERTIES.PROPERTY,a.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(a.TAG_NAMES.NOSCRIPT,[a.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:M(e),scriptTags:d(a.TAG_NAMES.SCRIPT,[a.TAG_PROPERTIES.SRC,a.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(a.TAG_NAMES.STYLE,[a.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:f(a.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=y}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";n("rvZc");var r=n("L8V+"),i=n("q1tI"),o=n.n(i),c=n("TJpk"),a=n.n(c);function u(e){var t=e.location,n=e.lang,i=e.defaultTitle,c=e.type,u=e.metadata,l=r.data.site,s=t.pathname||"/";s.endsWith("/")&&(s=s.substring(0,s.length-1));var T=""+l.siteMetadata.hostname+s+"/",M=u?u.metaDescription:l.siteMetadata.description,f=u?u.socialImage:"",p=u?(u.metaTitle||i)+" | SEES":""+l.siteMetadata.title,d=[{name:"description",content:M},{property:"og:title",content:p},{property:"og:description",content:M},{property:"og:type",content:c||"website"},{property:"og:url",content:T},{property:"og:image",content:f},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:p},{name:"twitter:description",content:M},{property:"twitter:image",content:f}];return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:p,meta:d,link:[{rel:"canonical",key:T,href:T},{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"192x192",href:"/icons/apple-icon-180x180.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/icons/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/icons/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"96x96",href:"/icons/favicon-96x96.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"},{rel:"manifest",href:"/icons/manifest.json"}]})}u.defaultProps={lang:"en-AU"},t.a=u},zbVx:function(e,t,n){"use strict";n("91GP");var r=n("txSG"),i=n("zDcZ");t.a=function(e){var t=e.children,n=e.customClass,o=e.customStyles;return Object(r.f)("div",{className:""+n,sx:Object.assign({maxWidth:Object(i.c)(1060),width:["90%"],mx:"auto"},o)},t)}},zpQe:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("txSG"),i=n("zDcZ"),o=n("RIwO"),c=n("Wbzz"),a=n("YwZP");var u="undefined"!=typeof window&&window;t.a=function(){return Object(r.f)(a.Location,null,(function(e){e.location,function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n])}(e,["location"]);return Object(r.f)("button",{onClick:function(){return window.history.state?window.history.go(-1):Object(c.b)("/")},sx:l},Object(r.f)(o.a,null),u?window.history.state?"Back":"Home":"Back")}))};var l={fontSize:Object(i.c)(18),fontWeight:600,svg:{transform:"rotate(180deg) translateY(-5px)",marginRight:Object(i.c)(3)}}}}]);
//# sourceMappingURL=2eb4cf7ba578c46b5488e9b80287e7ffa6cf5d10-9023e53b559e3f80ae44.js.map