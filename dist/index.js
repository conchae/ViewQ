require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({3:[function(require,module,exports) {
"use strict";function e(){}Object.defineProperty(exports,"__esModule",{value:!0});var t={},n=[],o=[];function r(r,i){var l,a,p,s,c=o;for(s=arguments.length;s-- >2;)n.push(arguments[s]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(s=a.length;s--;)n.push(a[s]);else"boolean"==typeof a&&(a=null),(p="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(p=!1)),p&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=p;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&A(e)}function f(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&d(e,t.nodeName):n||e._componentConstructor===t.nodeName}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function v(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)b(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function b(e,t,n){try{e[t]=n}catch(e){}}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var x=[],C=0,g=!1,N=!1;function k(){for(var e;e=x.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){C++||(g=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var l=S(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--C||(N=!1,i||k()),l}function S(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!d(e,a))&&(i=v(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0)}var p=i.firstChild,s=i.__preactattr_,c=t.children;if(null==s){s=i.__preactattr_={};for(var u=i.attributes,f=u.length;f--;)s[u[f].name]=u[f].value}return!N&&c&&1===c.length&&"string"==typeof c[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=c[0]&&(p.nodeValue=c[0]):(c&&c.length||null!=p)&&U(i,c,n,o,N||null!=s.dangerouslySetInnerHTML),P(i,t.attributes,s),g=l,i}function U(e,t,n,o,r){var i,l,a,p,s,c=e.childNodes,u=[],d={},_=0,v=0,h=c.length,b=0,y=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var C=c[x],g=C.__preactattr_;null!=(N=y&&g?C._component?C._component.__key:g.key:null)?(_++,d[N]=C):(g||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(u[b++]=C)}if(0!==y)for(x=0;x<y;x++){var N;if(s=null,null!=(N=(p=t[x]).key))_&&void 0!==d[N]&&(s=d[N],d[N]=void 0,_--);else if(!s&&v<b)for(i=v;i<b;i++)if(void 0!==u[i]&&f(l=u[i],p,r)){s=l,u[i]=void 0,i===b-1&&b--,i===v&&v++;break}s=S(s,p,n,o),a=c[x],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?m(a):e.insertBefore(s,a))}if(_)for(var x in d)void 0!==d[x]&&L(d[x],!1);for(;v<=b;)void 0!==(s=u[b--])&&L(s,!1)}function L(e,t){var n=e._component;n?H(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),M(e))}function M(e){for(e=e.lastChild;e;){var t=e.previousSibling;L(e,!0),e=t}}function P(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var T={};function B(e){var t=e.constructor.name;(T[t]||(T[t]=[])).push(e)}function E(e,t,n){var o,r=T[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):((o=new j(t,n)).constructor=e,o.render=W),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function W(e,t,n){return this.constructor(e,n)}function V(e,n,o,r,i){e._disable||(e._disable=!0,(e.__ref=n.ref)&&delete n.ref,(e.__key=n.key)&&delete n.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):A(e,1,i)),e.__ref&&e.__ref(e))}function A(e,n,o,r){if(!e._disable){var l,a,p,s=e.props,c=e.state,u=e.context,f=e.prevProps||s,d=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,b=m||h,y=e._component,g=!1;if(m&&(e.props=f,e.state=d,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){l=e.render(s,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var N,S,U=l&&l.nodeName;if("function"==typeof U){var M=_(l);(a=y)&&a.constructor===U&&M.key==a.__key?V(a,M,1,u,!1):(N=a,e._component=a=E(U,M,u),a.nextBase=a.nextBase||h,a._parentComponent=e,V(a,M,0,u,!1),A(a,1,o,!0)),S=a.base}else p=b,(N=y)&&(p=e._component=null),(b||1===n)&&(p&&(p._component=null),S=w(p,l,u,o||!m,b&&b.parentNode,!0));if(b&&S!==b&&a!==y){var P=b.parentNode;P&&S!==P&&(P.replaceChild(S,b),N||(b._component=null,L(b,!1)))}if(N&&H(N),e.base=S,S&&!r){for(var T=e,B=e;B=B._parentComponent;)(T=B).base=S;S._component=T,S._componentConstructor=T.constructor}}if(!m||o?x.unshift(e):g||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),t.afterUpdate&&t.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||r||k()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,p=a,s=_(t);r&&!p&&(r=r._parentComponent);)p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(V(r,s,3,n,o),e=r.base):(i&&!a&&(H(i),e=l=null),r=E(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,l=null),V(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,L(l,!1))),e}function H(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?H(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),B(e),M(n)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function z(e,t,n){return w(n,e,{},!1,t,!1)}i(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),A(this,2)},render:function(){}});var R={h:r,createElement:r,cloneElement:a,Component:j,render:z,rerender:u,options:t};exports.h=r,exports.createElement=r,exports.cloneElement=a,exports.Component=j,exports.render=z,exports.rerender=u,exports.options=t,exports.default=R;
},{}],4:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this");!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("preact")):"function"==typeof define&&define.amd?define(["preact"],n):n(e.preact)}(this,function(e){"use strict";var n="__preactattr_";function o(e){return{type:e.constructor,key:e.key,ref:null,props:e.props}}var t="function"==typeof Map&&new Map;function r(e){var p,c,d,u,i,a,m,f=e instanceof Node?(a=(i=e).nodeType===Node.ELEMENT_NODE?Array.from(i.childNodes):[],{_currentElement:(m=i.nodeType===Node.TEXT_NODE)?i.textContent:{type:i.nodeName.toLowerCase(),props:i[n]},_renderedChildren:a.map(function(e){return e._component?r(e._component):r(e)}),_stringText:m?i.textContent:null,_inDevTools:!1,node:i}):(c=o(p=e),d=p.base,(u={getName:function(){return"function"==typeof(e=c).type?e.type.displayName||e.type.name:e.type;var e},_currentElement:o(p),props:p.props,state:p.state,forceUpdate:p.forceUpdate&&p.forceUpdate.bind(p),setState:p.setState&&p.setState.bind(p),node:d})._instance=p,p._component?u._renderedComponent=r(p._component):u._renderedComponent=r(d),u);if(t.has(e)){var _=t.get(e);return Object.assign(_,f),_}return t.set(e,f),f}function p(e){return"."+Object.keys(e).length}function c(){var e={getNodeFromInstance:function(e){return e.node},getClosestInstanceFromNode:function(e){for(;e&&!e._component;)e=e.parentNode;return e?r(e._component):null}},o={};!function e(n,o){Array.from(n.childNodes).forEach(function(n){n._component?o[p(o)]=r(n._component):e(n,o)})}(document.body,o);var c={_instancesByReactRootID:o,_renderNewRootComponent:function(){}},u={mountComponent:function(){},performUpdateIfNecessary:function(){},receiveComponent:function(){},unmountComponent:function(){}};return{componentAdded:function(e){var t=r(e);i=e,!(i._parentComponent||i.__u||i.base.parentElement&&i.base.parentElement[n])&&(t._rootID=p(o),o[t._rootID]=t,c._renderNewRootComponent(t)),d(t,function(e){e._inDevTools=!0,u.mountComponent(e)}),u.mountComponent(t);var i},componentUpdated:function(e){var n=[];d(t.get(e),function(e){n.push(e)});var o=r(e);u.receiveComponent(o),d(o,function(e){e._inDevTools?u.receiveComponent(e):(e._inDevTools=!0,u.mountComponent(e))}),n.forEach(function(e){document.body.contains(e.node)||(t.delete(e.node),u.unmountComponent(e))})},componentRemoved:function(e){var n=r(e);d(function(e){t.delete(e.node),u.unmountComponent(e)}),u.unmountComponent(n),t.delete(e),n._rootID&&delete o[n._rootID]},ComponentTree:e,Mount:c,Reconciler:u}}function d(e,n){e._renderedComponent?e._renderedComponent._component||(n(e._renderedComponent),d(e._renderedComponent,n)):e._renderedChildren&&e._renderedChildren.forEach(function(e){n(e),e._component||d(e,n)})}!function(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var n=c(),o=e.options.afterMount;e.options.afterMount=function(e){n.componentAdded(e),o&&o(e)};var t=e.options.afterUpdate;e.options.afterUpdate=function(e){n.componentUpdated(e),t&&t(e)};var r=e.options.beforeUnmount;e.options.beforeUnmount=function(e){n.componentRemoved(e),r&&r(e)},__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(n)}}()});
},{"preact":3}],10:[function(require,module,exports) {

},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=exports.Route=exports.Router=exports.route=exports.getCurrentUrl=exports.subscribers=void 0;var t=require("preact"),e={};function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t,n,r){var o,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),p={};if(a&&a[1])for(var s=a[1].split("&"),c=0;c<s.length;c++){var l=s[c].split("=");p[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=u(t.replace(i,"")),n=u(n||"");for(var f=Math.max(t.length,n.length),h=0;h<f;h++)if(n[h]&&":"===n[h].charAt(0)){var d=n[h].replace(/(^\:|[+*?]+$)/g,""),g=(n[h].match(/[+*?]+$/)||e)[0]||"",v=~g.indexOf("+"),m=~g.indexOf("*"),y=t[h]||"";if(!y&&!m&&(g.indexOf("?")<0||v)){o=!1;break}if(p[d]=decodeURIComponent(y),v||m){p[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(n[h]!==t[h]){o=!1;break}return(!0===r.default||!1!==o)&&p}function o(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function i(t,e){return t.index=e,t.rank=s(t),t.attributes}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function p(t){return u(t).map(a).join("")}function s(t){return t.attributes.default?0:p(t.attributes.path)}var c=null,l=[],f=[],h={};function d(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function g(t,e){void 0===e&&(e="push"),c&&c[e]?c[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function v(){var t;return""+((t=c&&c.location?c.location:c&&c.getCurrentLocation?c.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),y(t)&&g(t,e?"replace":"push"),b(t)}function y(t){for(var e=l.length;e--;)if(l[e].canRoute(t))return!0;return!1}function b(t){for(var e=!1,n=0;n<l.length;n++)!0===l[n].routeTo(t)&&(e=!0);for(var r=f.length;r--;)f[r](t);return e}function x(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function C(t){if(0==t.button)return x(t.currentTarget||t.target||this),R(t)}function R(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function U(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&d(e)){if(e.hasAttribute("native"))return;if(x(e))return R(t)}}while(e=e.parentNode)}}var k=!1;function _(){k||("function"==typeof addEventListener&&(c||addEventListener("popstate",function(){b(v())}),addEventListener("click",U)),k=!0)}var A=function(e){function u(t){e.call(this,t),t.history&&(c=t.history),this.state={url:t.url||v()},_()}return e&&(u.__proto__=e),u.prototype=Object.create(e&&e.prototype),u.prototype.constructor=u,u.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},u.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},u.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},u.prototype.componentWillMount=function(){l.push(this),this.updating=!0},u.prototype.componentDidMount=function(){var t=this;c&&(this.unlisten=c.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},u.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),l.splice(l.indexOf(this),1)},u.prototype.componentWillUpdate=function(){this.updating=!0},u.prototype.componentDidUpdate=function(){this.updating=!1},u.prototype.getMatchingChildren=function(e,u,a){return e.filter(i).sort(o).map(function(e){var o=r(u,e.attributes.path,e.attributes);if(o){if(!1!==a){var i={url:u,matches:o};return n(i,o),delete i.ref,delete i.key,(0,t.cloneElement)(e,i)}return e}}).filter(Boolean)},u.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},u}(t.Component),L=function(e){return(0,t.h)("a",n({onClick:C},e))},M=function(e){return(0,t.h)(e.component,e)};A.subscribers=f,A.getCurrentUrl=v,A.route=m,A.Router=A,A.Route=M,A.Link=L,exports.subscribers=f,exports.getCurrentUrl=v,exports.route=m,exports.Router=A,exports.Route=M,exports.Link=L,exports.default=A;
},{"preact":3}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),r=require("preact-router");class t extends e.Component{componentWillMount(){(0,r.route)(this.props.to,!0)}render(){return null}}exports.default=t;
},{"preact":3,"preact-router":13}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact");class r extends e.Component{render(r,l){return(0,e.h)("div",null,(0,e.h)("h1",null,"ViewCh"),(0,e.h)("h1",null,(0,e.h)("a",{href:"/4"},"4")),(0,e.h)("br",null),(0,e.h)("h1",null,(0,e.h)("a",{href:"/8"},"8")))}}exports.default=r;
},{"preact":3}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact");class r extends e.Component{render({matches:r},t){return(0,e.h)("div",null,(0,e.h)("h1",null,r.site))}}exports.default=r;
},{"preact":3}],11:[function(require,module,exports) {
"use strict";function t(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});const e=(()=>{var e=t(function*(t){return(yield fetch(`https://cors-anywhere.herokuapp.com/${t}`)).json()});return function(t){return e.apply(this,arguments)}})(),n=(t,e,n)=>{const r={author:{name:t.name,trip:t.trip},title:t.sub,body:t.com||"",files:[],time:{created:new Date(1e3*t.time),modified:new Date(1e3*t.last_modified)},mentions:[],replies:[],no:t.no,id:t.id},i=[...new Set(r.body.match(/&gt;&gt;\d+/gi))];let o;return i&&(r.mentions=i.map(t=>parseInt(t.match(/\d+/)[0]))),"4"===e?o=`https://i.4cdn.org/${n}/`:"8"===e&&(o="https://media.8ch.net/file_store/"),t.tim&&(r.files.push({link:`${o}${t.tim}${t.ext}`,name:`${t.filename}${t.ext}`,ext:t.ext}),t.extra_files&&t.extra_files.forEach(t=>{r.files.push({link:`${o}${t.tim}${t.ext}`,name:`${t.filename}${t.ext}`,ext:t.ext})})),r},r=exports.getCatalog=(()=>{var r=t(function*(t,r){let i;"4"===t?i=yield e(`a.4cdn.org/${r}/catalog.json`):"8"===t&&(i=yield e(`8ch.net/${r}/catalog.json`));const o=i.map(function(t){return t.threads});return[].concat(...o).map(function(e){return n(e,t,r)})});return function(t,e){return r.apply(this,arguments)}})(),i=exports.getThread=(()=>{var r=t(function*(t,r,i){let o;"4"===t?o=(yield e(`a.4cdn.org/${r}/thread/${i}.json`)).posts:"8"===t&&(o=(yield e(`8ch.net/${r}/res/${i}.json`)).posts);const a=o.map(function(e){return n(e,t,r)}),s={};return a.forEach(function(t){return s[t.no]=t}),a.forEach(function(t,e){let n=!1;t.mentions.forEach(function(e){e in s&&(s[e].replies.push(t),n=!0)}),n&&delete a[e]}),a.filter(function(t){return void 0!==t})});return function(t,e,n){return r.apply(this,arguments)}})();
},{}],14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact");class s extends e.Component{render({file:s}){switch(s.ext.toLowerCase()){case".webm":case".mp4":return(0,e.h)("video",{class:"file",src:s.link,alt:s.name,controls:"true"});case".mp3":return(0,e.h)("audio",{class:"file",src:s.link,alt:s.name,controls:"true"});case".png":case".jpg":case".jpeg":case".gif":const t=new URL(s.link);return(0,e.h)("img",{class:"file",src:`https://i.scaley.io/https/${t.host}${t.pathname}`,alt:s.name});default:return(0,e.h)("a",{class:"file",href:s.link},s.name)}}}exports.default=s;
},{"preact":3}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),s=require("./file"),t=i(s);function i(e){return e&&e.__esModule?e:{default:e}}class l extends e.Component{constructor(e){super(e),this.toggleReplies=(()=>{this.setState((e,s)=>({visibile:!e.visibile}))})}componentDidMount(){this.setState({visibile:!1})}render({post:s,matches:i,preview:a},{visibile:r}){let o={__html:s.title};a&&!s.title&&(o={__html:"View Thread"});let n="";s.id&&(n=`background-color:#${s.id};color:#${s.id.match(/../g).map(e=>(255-parseInt(e,16)).toString(16)).join("")}`);const h={__html:s.body};let p=`${s.replies.length} Replies`;return s.replies.length?1===s.replies.length&&(p="1 Reply"):p="No Replies",(0,e.h)("div",{class:"post"},(0,e.h)("div",{class:"head"},(0,e.h)("h1",{class:"title"},(0,e.h)("a",{href:"/"+i.site+"/"+i.board+"/"+s.no,dangerouslySetInnerHTML:o})),(0,e.h)("div",{class:"author"},(0,e.h)("span",{class:"name"},s.author.name),(0,e.h)("span",{class:"trip"},s.author.trip||""," "),(0,e.h)("span",{class:"id",style:n},"id:",s.id||"")),(0,e.h)("div",{class:"meta"},(0,e.h)("span",{class:"number"},"Post #",s.no," "),(0,e.h)("span",{class:"time"},"Created on ",s.time.created.toString()))),(0,e.h)("div",{class:"files"},s.files.map(s=>(0,e.h)(t.default,{file:s}))),(0,e.h)("div",{class:"body",dangerouslySetInnerHTML:h}),(0,e.h)("a",{class:"replies-toggle",onClick:this.toggleReplies},p),(0,e.h)("div",{class:"replies",style:`display:${r?"block":"none"}`},s.replies.map(s=>(0,e.h)(l,{post:s,matches:i}))))}}exports.default=l;
},{"preact":3,"./file":14}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),t=require("../api"),r=require("./post"),o=n(r);function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function o(n,i){try{var s=t[n](i),l=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}("next")})}}class s extends e.Component{constructor(e){super(e),this.scrollListener=(()=>{innerHeight+scrollY>=document.body.offsetHeight&&this.setState((e,t)=>({loadLimit:e.loadLimit+10}))})}componentDidMount(){var e=this;return i(function*(){if("4"===e.props.site||"8"===e.props.site){const r=yield(0,t.getCatalog)(e.props.site,e.props.board);e.setState({catalog:r,loadLimit:10}),addEventListener("scroll",e.scrollListener)}})()}componentWillUnmount(){removeEventListener("scroll",this.scrollListener)}render({site:t,board:r,matches:n},{catalog:i=[],loadLimit:s}){return"4"!==t&&"8"!==t?(0,e.h)("h1",null,'Site "',t,'" is not supported'):(0,e.h)("div",{class:"catalog"},(0,e.h)("h1",{class:"title"},t,"/",r),i.slice(0,s).map(t=>(0,e.h)(o.default,{post:t,matches:n,preview:!0})))}}exports.default=s;
},{"preact":3,"../api":11,"./post":12}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),t=require("../api"),r=require("./post"),n=o(r);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,s){try{var i=t[o](s),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}class i extends e.Component{constructor(e){super(e),this.scrollListener=(()=>{innerHeight+scrollY>=document.body.offsetHeight&&this.setState((e,t)=>({loadLimit:e.loadLimit+10}))})}componentDidMount(){var e=this;return s(function*(){if("4"===e.props.site||"8"===e.props.site){const r=yield(0,t.getThread)(e.props.site,e.props.board,e.props.number);e.setState({thread:r,loadLimit:10}),addEventListener("scroll",e.scrollListener)}})()}componentWillUnmount(){removeEventListener("scroll",this.scrollListener)}render({site:t,matches:r},{thread:o=[],loadLimit:s}){return"4"!==t&&"8"!==t?(0,e.h)("h1",null,'Site "',t,'" is not supported'):(0,e.h)("div",{class:"thread"},o.slice(0,s).map(t=>(0,e.h)(n.default,{post:t,matches:r})))}}exports.default=i;
},{"preact":3,"../api":11,"./post":12}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./style");var e=require("preact"),r=require("preact-router"),t=h(r),u=require("./components/redirect"),o=h(u),a=require("./components/home"),n=h(a),s=require("./components/site"),d=h(s),i=require("./components/catalog"),l=h(i),p=require("./components/thread"),c=h(p);function h(e){return e&&e.__esModule?e:{default:e}}class f extends e.Component{render(r,u){return(0,e.h)(t.default,null,(0,e.h)(n.default,{path:"/"}),(0,e.h)(d.default,{path:"/:site"}),(0,e.h)(l.default,{path:"/:site/:board"}),(0,e.h)(c.default,{path:"/:site/:board/:number"}))}}exports.default=f;
},{"./style":10,"preact":3,"preact-router":13,"./components/redirect":5,"./components/home":6,"./components/site":7,"./components/catalog":8,"./components/thread":9}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact");require("preact/devtools");var r=require("./App"),t=o(r);function o(e){return e&&e.__esModule?e:{default:e}}exports.default=t.default,"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("/service-worker.js")),"undefined"!=typeof window&&(0,e.render)((0,e.h)(t.default,null),document.querySelector("#app"));
},{"preact":3,"preact/devtools":4,"./App":2}]},{},[1])