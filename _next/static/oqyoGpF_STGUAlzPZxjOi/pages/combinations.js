(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{12:function(t,e){var r=Array.isArray;t.exports=r},122:function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},123:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(59))},124:function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},125:function(t,e,r){var n=r(39)(r(25),"Map");t.exports=n},126:function(t,e,r){(function(t){var n=r(25),o=r(238),c="object"==typeof e&&e&&!e.nodeType&&e,i=c&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===c?n.Buffer:void 0,u=(a?a.isBuffer:void 0)||o;t.exports=u}).call(this,r(73)(t))},127:function(t,e,r){var n=r(239),o=r(99),c=r(240),i=c&&c.isTypedArray,a=i?o(i):n;t.exports=a},151:function(t,e,r){var n=r(122),o=r(227),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))c.call(t,r)&&"constructor"!=r&&e.push(r);return e}},152:function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},153:function(t,e,r){var n=r(228),o=r(125),c=r(235),i=r(154),a=r(236),u=r(40),l=r(124),f=l(n),p=l(o),s=l(c),b=l(i),y=l(a),j=u;(n&&"[object DataView]"!=j(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=j(new o)||c&&"[object Promise]"!=j(c.resolve())||i&&"[object Set]"!=j(new i)||a&&"[object WeakMap]"!=j(new a))&&(j=function(t){var e=u(t),r="[object Object]"==e?t.constructor:void 0,n=r?l(r):"";if(n)switch(n){case f:return"[object DataView]";case p:return"[object Map]";case s:return"[object Promise]";case b:return"[object Set]";case y:return"[object WeakMap]"}return e}),t.exports=j},154:function(t,e,r){var n=r(39)(r(25),"Set");t.exports=n},225:function(t,e,r){"use strict";r.r(e),function(t,n,o){var c=r(0),i=r.n(c),a=r(14),u=r.n(a);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}e.default=function(e){var r=e.currentCombination,c=e.borderWidth,a=e.boxPadding,p=f(e,["currentCombination","borderWidth","boxPadding"]),s=u()(r.bg).contrast(u()(r.color)).toFixed(2);return i.a.createElement(t,l({borderColor:r.borderColor,border:"".concat(c,"px solid"),p:a,color:r.color,bg:r.bg,textAlign:"left"},p),i.a.createElement(t,null,"Color: ",r.color,i.a.createElement("br",null),"Background: ",r.bg),i.a.createElement(n,{my:0},i.a.createElement(o,{fontSize:2,fontWeight:600},"Contrast"),i.a.createElement(o,{fontSize:[5,6,7],fontWeight:800,display:"block",mb:3},s),i.a.createElement(o,{fontWeight:800,fontSize:[4,5,6],style:{letterSpacing:"-.075em"}},"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"),i.a.createElement(o,{fontWeight:600,fontSize:[4,5],display:"block",lineHeight:1.5,style:{letterSpacing:"-.1em"}},"a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ()"),i.a.createElement(o,{lineHeight:1.5,display:"block",mt:3},"Every perception of color is an illusion.. ..we do not see colors as they really are. In our perception they alter one another. ",i.a.createElement(o,{display:["none","inline"]},"In order to use color effectively it is necessary to recognize that color deceives continually. In visual perception a color is almost never seen as it really is — as it physically is. This fact makes color the most relative medium in art."))))}}.call(this,r(19).default,r(226).default,r(31).default)},226:function(t,e,r){"use strict";r.r(e);var n=r(5),o=r(2),c=Object(o.y)({prop:"textShadow",cssTextroperty:"textShadow",key:"textShadow",scale:["1px 1px 2px pink ","#f30 1px 0 10px","red 2px 5px"]}),i=Object(n.a)("p",{target:"eb2ugqd0"})(o.x,o.B,o.h,o.r,o.m,o.n,o.z,c,o.q,o.g,o.e,o.c,o.d,{boxSizing:"border-box",transition:"all .1s ease-in"});i.defaultTextrops={fontWeight:400,lineHeight:1.5,fontSize:3,maxWidth:"34em",display:"block",mb:5},e.default=i},227:function(t,e,r){var n=r(152)(Object.keys,Object);t.exports=n},228:function(t,e,r){var n=r(39)(r(25),"DataView");t.exports=n},229:function(t,e,r){var n=r(8),o=r(232),c=r(27),i=r(124),a=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,f=u.toString,p=l.hasOwnProperty,s=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(n(t)?s:a).test(i(t))}},230:function(t,e,r){var n=r(74),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=c.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[a]=r:delete t[a]),o}},231:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},232:function(t,e,r){var n,o=r(233),c=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!c&&c in t}},233:function(t,e,r){var n=r(25)["__core-js_shared__"];t.exports=n},234:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},235:function(t,e,r){var n=r(39)(r(25),"Promise");t.exports=n},236:function(t,e,r){var n=r(39)(r(25),"WeakMap");t.exports=n},237:function(t,e,r){var n=r(40),o=r(41),c="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==c}},238:function(t,e){t.exports=function(){return!1}},239:function(t,e,r){var n=r(40),o=r(98),c=r(41),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&o(t.length)&&!!i[n(t)]}},240:function(t,e,r){(function(t){var n=r(123),o="object"==typeof e&&e&&!e.nodeType&&e,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=c&&c.exports===o&&n.process,a=function(){try{var t=c&&c.require&&c.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}).call(this,r(73)(t))},25:function(t,e,r){var n=r(123),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();t.exports=c},27:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},39:function(t,e,r){var n=r(229),o=r(234);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},40:function(t,e,r){var n=r(74),o=r(230),c=r(231),i="[object Null]",a="[object Undefined]",u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:i:u&&u in Object(t)?o(t):c(t)}},41:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},503:function(t,e,r){__NEXT_REGISTER_PAGE("/combinations",function(){return t.exports=r(504),{page:t.exports.default}})},504:function(t,e,r){"use strict";r.r(e),function(t,n,o){var c=r(0),i=r.n(c),a=r(104),u=r(91),l=r.n(u);e.default=Object(a.connect)("pageData")(function(e){var r=e.pageData;return l()(r)?null:i.a.createElement(t,null,r.combinations.map(function(t,e){var r={bg:t[0],color:t[1],borderColor:t[1]};return i.a.createElement(n,{key:e},i.a.createElement(o,{key:e,boxPadding:64,currentCombination:r}))}))})}.call(this,r(505).default,r(19).default,r(225).default)},505:function(t,e,r){"use strict";r.r(e),function(t){var n=r(0),o=r.n(n),c=r(42);function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var a=function(e){var r=e.innerBg,n=e.innerWidth,c=i(e,["innerBg","innerWidth"]);return o.a.createElement(t,c,o.a.createElement(t,{mx:"auto",maxWidth:n,bg:r},c.children))};a.defaultProps={innerWidth:c.a.containerWidth,innerBg:"transparent"},e.default=a}.call(this,r(19).default)},63:function(t,e,r){var n=r(8),o=r(98);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},74:function(t,e,r){var n=r(25).Symbol;t.exports=n},8:function(t,e,r){var n=r(40),o=r(27),c="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==i||e==a||e==c||e==u}},91:function(t,e,r){var n=r(151),o=r(153),c=r(97),i=r(12),a=r(63),u=r(126),l=r(122),f=r(127),p="[object Map]",s="[object Set]",b=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(a(t)&&(i(t)||"string"==typeof t||"function"==typeof t.splice||u(t)||f(t)||c(t)))return!t.length;var e=o(t);if(e==p||e==s)return!t.size;if(l(t))return!n(t).length;for(var r in t)if(b.call(t,r))return!1;return!0}},97:function(t,e,r){var n=r(237),o=r(41),c=Object.prototype,i=c.hasOwnProperty,a=c.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},98:function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},99:function(t,e){t.exports=function(t){return function(e){return t(e)}}}},[[503,0,1]]]);