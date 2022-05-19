import{h as t}from"./p-3aa6a5c3.js";function n(t,n,r){return t(r={path:n,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var r=n((function(t){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var a=typeof i;if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&t.push(o)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var u in i)n.call(i,u)&&i[u]&&t.push(u);else t.push(i.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()})),e=n((function(t){t.exports=function(){
/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
var t=function(t){return null!=t&&"object"==typeof t&&!1===Array.isArray(t)};function n(n){return!0===t(n)&&"[object Object]"===Object.prototype.toString.call(n)}var r={}.toString,e=Array.isArray||function(t){return"[object Array]"==r.call(t)},i=function(t,n){if(null==t)return!1;if("boolean"==typeof t)return!0;if("number"==typeof t)return 0!==t||!0!==n;if(void 0!==t.length)return 0!==t.length;for(var r in t)if(t.hasOwnProperty(r))return!0;return!1};function a(t){return t?Array.isArray(t)?t.join("."):t:""}var o=function(t,n,r){return null!=(o=t)&&"object"==typeof o&&!1===e(o)?i(function(t,n,r,e,i){if(null===(o=t)||"object"!=typeof o&&"function"!=typeof o||!n)return t;var o;if(n=a(n),r&&(n+="."+a(r)),e&&(n+="."+a(e)),i&&(n+="."+a(i)),n in t)return t[n];for(var u=n.split("."),f=u.length,c=-1;t&&++c<f;){for(var s=u[c];"\\"===s[s.length-1];)s=s.slice(0,-1)+"."+u[++c];t=t[s]}return t}(t,n),r):i(t,n);var o},u=function(n,r){if(!t(n))throw new TypeError("expected an object.");if(n.hasOwnProperty(r))return delete n[r],!0;if(o(n,r)){for(var e=r.split("."),i=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)i=e.pop().slice(0,-1)+"."+i;for(;e.length;)n=n[r=e.shift()];return delete n[i]}return!0},f=function t(r,e){if(void 0===r)return{};if(Array.isArray(r)){for(var i=0;i<r.length;i++)r[i]=t(r[i],e);return r}if(!1===n(a=r)||"function"!=typeof(o=a.constructor)||!1===n(f=o.prototype)||!1===f.hasOwnProperty("isPrototypeOf"))return r;var a,o,f;if("string"==typeof e&&(e=[e]),!Array.isArray(e))return r;for(var c=0;c<e.length;c++)u(r,e[c]);for(var s in r)r.hasOwnProperty(s)&&(r[s]=t(r[s],e));return r},c=function(t){return null!=t&&(s(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&s(t.slice(0,0))}(t)||!!t._isBuffer)};function s(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var l=Object.prototype.toString,b=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if(!0===t||!1===t||t instanceof Boolean)return"boolean";if("string"==typeof t||t instanceof String)return"string";if("number"==typeof t||t instanceof Number)return"number";if("function"==typeof t||t instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(t))return"array";if(t instanceof RegExp)return"regexp";if(t instanceof Date)return"date";var n=l.call(t);return"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":c(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object"};function v(t,n){return t(n={exports:{}},n.exports),n.exports}var d=v((function(t){!function(){function n(t,n){if("function"!=typeof n)return t;var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[n(e,t[e])||e]=t[e]);return r}t.exports?t.exports=n:window.rename=n}()})),y=function t(n,r){var e=b(n);if("object"!==e&&"array"!==e)throw new Error("expected an object");var i=[];for(var a in"object"===e&&(n=d(n,r),i={}),n)if(n.hasOwnProperty(a)){var o=n[a];i[a]="object"===b(o)||"array"===b(o)?t(o,r):o}return i},h=v((function(t){var n=Object.prototype.hasOwnProperty,r="~";function e(){}function i(t,n,r){this.fn=t,this.context=n,this.once=r||!1}function a(){this._events=new e,this._eventsCount=0}Object.create&&(e.prototype=Object.create(null),(new e).__proto__||(r=!1)),a.prototype.eventNames=function(){var t,e,i=[];if(0===this._eventsCount)return i;for(e in t=this._events)n.call(t,e)&&i.push(r?e.slice(1):e);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},a.prototype.listeners=function(t,n){var e=this._events[r?r+t:t];if(n)return!!e;if(!e)return[];if(e.fn)return[e.fn];for(var i=0,a=e.length,o=new Array(a);i<a;i++)o[i]=e[i].fn;return o},a.prototype.emit=function(t,n,e,i,a,o){var u=r?r+t:t;if(!this._events[u])return!1;var f,c,s=this._events[u],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(t,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,n),!0;case 3:return s.fn.call(s.context,n,e),!0;case 4:return s.fn.call(s.context,n,e,i),!0;case 5:return s.fn.call(s.context,n,e,i,a),!0;case 6:return s.fn.call(s.context,n,e,i,a,o),!0}for(c=1,f=new Array(l-1);c<l;c++)f[c-1]=arguments[c];s.fn.apply(s.context,f)}else{var b,v=s.length;for(c=0;c<v;c++)switch(s[c].once&&this.removeListener(t,s[c].fn,void 0,!0),l){case 1:s[c].fn.call(s[c].context);break;case 2:s[c].fn.call(s[c].context,n);break;case 3:s[c].fn.call(s[c].context,n,e);break;case 4:s[c].fn.call(s[c].context,n,e,i);break;default:if(!f)for(b=1,f=new Array(l-1);b<l;b++)f[b-1]=arguments[b];s[c].fn.apply(s[c].context,f)}}return!0},a.prototype.on=function(t,n,e){var a=new i(n,e||this),o=r?r+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],a]:this._events[o].push(a):(this._events[o]=a,this._eventsCount++),this},a.prototype.once=function(t,n,e){var a=new i(n,e||this,!0),o=r?r+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],a]:this._events[o].push(a):(this._events[o]=a,this._eventsCount++),this},a.prototype.removeListener=function(t,n,i,a){var o=r?r+t:t;if(!this._events[o])return this;if(!n)return 0==--this._eventsCount?this._events=new e:delete this._events[o],this;var u=this._events[o];if(u.fn)u.fn!==n||a&&!u.once||i&&u.context!==i||(0==--this._eventsCount?this._events=new e:delete this._events[o]);else{for(var f=0,c=[],s=u.length;f<s;f++)(u[f].fn!==n||a&&!u[f].once||i&&u[f].context!==i)&&c.push(u[f]);c.length?this._events[o]=1===c.length?c[0]:c:0==--this._eventsCount?this._events=new e:delete this._events[o]}return this},a.prototype.removeAllListeners=function(t){var n;return t?this._events[n=r?r+t:t]&&(0==--this._eventsCount?this._events=new e:delete this._events[n]):(this._events=new e,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prototype.setMaxListeners=function(){return this},a.prefixed=r,a.EventEmitter=a,t.exports=a}));function p(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var g=function(){},m={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},j={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},w={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},A={" ":j.space,"\t":j.space,"\n":j.space,"\r":j.space,"<":j.lt,">":j.gt,'"':j.quote,"'":j.quote,"=":j.equal,"/":j.slash},x=function(t){var n,r,e,i,a,o,u,f,c,s;t=Object.assign({debug:!1},t);var l=new h,b=m.data,v="",d="",y="",x="",O="",k="",N=function(n,r){if("?"!==d[0]&&"!"!==d[0]){var e={type:n,value:r};t.debug&&console.log("emit:",e),l.emit("data",e)}};l.stateMachine=(p(s={},m.data,(p(n={},j.lt,(function(){v.trim()&&N(w.text,v),d="",O=!1,b=m.tagBegin})),p(n,j.char,(function(t){v+=t})),n)),p(s,m.cdata,p({},j.char,(function(t){"]]>"===(v+=t).substr(-3)&&(N(w.text,v.slice(0,-3)),v="",b=m.data)}))),p(s,m.tagBegin,(p(r={},j.space,g),p(r,j.char,(function(t){d=t,b=m.tagName})),p(r,j.slash,(function(){d="",O=!0})),r)),p(s,m.tagName,(p(e={},j.space,(function(){O?b=m.tagEnd:(b=m.attributeNameStart,N(w.openTag,d))})),p(e,j.gt,(function(){N(O?w.closeTag:w.openTag,d),v="",b=m.data})),p(e,j.slash,(function(){b=m.tagEnd,N(w.openTag,d)})),p(e,j.char,(function(t){"![CDATA["===(d+=t)&&(b=m.cdata,v="",d="")})),e)),p(s,m.tagEnd,(p(i={},j.gt,(function(){N(w.closeTag,d),v="",b=m.data})),p(i,j.char,g),i)),p(s,m.attributeNameStart,(p(a={},j.char,(function(t){y=t,b=m.attributeName})),p(a,j.gt,(function(){v="",b=m.data})),p(a,j.space,g),p(a,j.slash,(function(){O=!0,b=m.tagEnd})),a)),p(s,m.attributeName,(p(o={},j.space,(function(){b=m.attributeNameEnd})),p(o,j.equal,(function(){N(w.attributeName,y),b=m.attributeValueBegin})),p(o,j.gt,(function(){x="",N(w.attributeName,y),N(w.attributeValue,x),v="",b=m.data})),p(o,j.slash,(function(){O=!0,x="",N(w.attributeName,y),N(w.attributeValue,x),b=m.tagEnd})),p(o,j.char,(function(t){y+=t})),o)),p(s,m.attributeNameEnd,(p(u={},j.space,g),p(u,j.equal,(function(){N(w.attributeName,y),b=m.attributeValueBegin})),p(u,j.gt,(function(){x="",N(w.attributeName,y),N(w.attributeValue,x),v="",b=m.data})),p(u,j.char,(function(t){x="",N(w.attributeName,y),N(w.attributeValue,x),y=t,b=m.attributeName})),u)),p(s,m.attributeValueBegin,(p(f={},j.space,g),p(f,j.quote,(function(t){k=t,x="",b=m.attributeValue})),p(f,j.gt,(function(){N(w.attributeValue,x=""),v="",b=m.data})),p(f,j.char,(function(t){k="",x=t,b=m.attributeValue})),f)),p(s,m.attributeValue,(p(c={},j.space,(function(t){k?x+=t:(N(w.attributeValue,x),b=m.attributeNameStart)})),p(c,j.quote,(function(t){k===t?(N(w.attributeValue,x),b=m.attributeNameStart):x+=t})),p(c,j.gt,(function(t){k?x+=t:(N(w.attributeValue,x),v="",b=m.data)})),p(c,j.slash,(function(t){k?x+=t:(N(w.attributeValue,x),O=!0,b=m.tagEnd)})),p(c,j.char,(function(t){x+=t})),c)),s);var E=function(n){t.debug&&console.log(b,n);var r=l.stateMachine[b];(r[function(t){return A[t]||j.char}(n)]||r[j.error]||r[j.char])(n)};return l.write=function(t){for(var n=t.length,r=0;r<n;r++)E(t[r])},l},O=w,k="element",N="text",E=function(t){return Object.assign({name:"",type:k,value:"",parent:null,attributes:{},children:[]},t)},T=function(t,n){var r=function(t){t=Object.assign({stream:!1,parentNodes:!0,doneEvent:"done",tagPrefix:"tag:",emitTopLevelOnly:!1,debug:!1},t);var n=void 0,r=void 0,e=void 0,i=void 0,a=new h,o=function(o){switch(o.type){case O.openTag:if(null===e)(e=r).name=o.value;else{var u=E({name:o.value,parent:e});e.children.push(u),e=u}break;case O.closeTag:var f=e.parent;if(t.parentNodes||(e.parent=null),e.name!==o.value)break;t.stream&&f===r&&(r.children=[],e.parent=null),t.emitTopLevelOnly&&f!==r||(a.emit(t.tagPrefix+e.name,e),a.emit("tag",e.name,e)),e===r&&(n.removeAllListeners("data"),a.emit(t.doneEvent,e),r=null),e=f;break;case O.text:e&&e.children.push(E({type:N,value:o.value,parent:t.parentNodes?e:null}));break;case O.attributeName:e.attributes[i=o.value]="";break;case O.attributeValue:e.attributes[i]=o.value}};return a.reset=function(){(n=x({debug:t.debug})).on("data",o),r=E(),e=null,i="",a.parse=n.write},a.reset(),a}(n=Object.assign({},n,{stream:!1,tagPrefix:":"})),e=void 0;return r.on("done",(function(t){e=t})),r.parse(t),e},$=function(t){var n=T("<root>".concat(t,"</root>"),{parentNodes:!1});if(n.children&&n.children.length>0&&n.children.every((function(t){return"svg"===t.name})))return 1===n.children.length?n.children[0]:n.children;throw Error("nothing to parse")},S=function(t){return f(t,["parent"])},q=function(t){return y(t,(function(t){return D(t)?t:C(t)}))},C=function(t){return t.replace(/[-|:]([a-z])/gi,(function(t,n){return n.toUpperCase()}))},D=function(t){return/^(data|aria)(-\w+)/.test(t)},B=function(t){if(t){var n=String(t);return/[&<>]/.test(n)?"<![CDATA[".concat(n.replace(/]]>/,"]]]]><![CDATA[>"),"]]>"):n}return""},I=function(t){return String(t).replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},P=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.transformNode,e=void 0===r?function(t){return t}:r,i=n.camelcase,a=void 0!==i&&i;return function(t){var n;return n=S(t),n=e(n),a&&(n=q(n)),n}($(t))};return Object.assign({},{parse:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise((function(t,r){try{t(P.apply(void 0,n))}catch(t){r(t)}}))},parseSync:P,stringify:function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.transformAttr,i=void 0===e?function(t,n,r){return"".concat(t,'="').concat(r(n),'"')}:e,a=r.transformNode,o=void 0===a?function(t){return t}:a,u=r.selfClose,f=void 0===u||u;if(Array.isArray(n))return n.map((function(n){return t(n,{transformAttr:i,selfClose:f,transformNode:o})})).join("");var c=o(n);if("text"===c.type)return B(c.value);var s="";for(var l in c.attributes){var b=i(l,c.attributes[l],I,c.name);s+=b?" ".concat(b):""}return c.children&&c.children.length>0||!f?"<".concat(c.name).concat(s,">").concat(t(c.children,{transformAttr:i,transformNode:o,selfClose:f}),"</").concat(c.name,">"):"<".concat(c.name).concat(s,"/>")}})}()}));const i="semi",a=n=>{const{svg:a,spin:o=!1,rotate:u,style:f,className:c,prefixCls:s=i,type:l,size:b="default"}=n,v=r(`${s}-icon`,{[`${s}-icon-extra-small`]:"extra-small"===b,[`${s}-icon-small`]:"small"===b,[`${s}-icon-default`]:"default"===b,[`${s}-icon-large`]:"large"===b,[`${s}-icon-extra-large`]:"extra-large"===b,[`${s}-icon-spinning`]:!0===o,[`${s}-icon-${l}`]:Boolean(l)},c),d={};return Number.isSafeInteger(u)&&(d.transform=`rotate(${u}deg)`),Object.assign(d,f),t("span",{style:d,class:v,role:"img","aria-label":l,innerHTML:e.stringify(a)})};export{a as I,r as c}