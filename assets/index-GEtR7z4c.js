function lE(e,n){for(var r=0;r<n.length;r++){const i=n[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Vi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cE={exports:{}},Tl={},dE={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),JS=Symbol.for("react.portal"),eN=Symbol.for("react.fragment"),tN=Symbol.for("react.strict_mode"),nN=Symbol.for("react.profiler"),rN=Symbol.for("react.provider"),iN=Symbol.for("react.context"),sN=Symbol.for("react.forward_ref"),aN=Symbol.for("react.suspense"),oN=Symbol.for("react.memo"),lN=Symbol.for("react.lazy"),Wg=Symbol.iterator;function cN(e){return e===null||typeof e!="object"?null:(e=Wg&&e[Wg]||e["@@iterator"],typeof e=="function"?e:null)}var uE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hE=Object.assign,pE={};function Wi(e,n,r){this.props=e,this.context=n,this.refs=pE,this.updater=r||uE}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mE(){}mE.prototype=Wi.prototype;function ku(e,n,r){this.props=e,this.context=n,this.refs=pE,this.updater=r||uE}var Ou=ku.prototype=new mE;Ou.constructor=ku;hE(Ou,Wi.prototype);Ou.isPureReactComponent=!0;var qg=Array.isArray,fE=Object.prototype.hasOwnProperty,Lu={current:null},gE={key:!0,ref:!0,__self:!0,__source:!0};function bE(e,n,r){var i,s={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)fE.call(n,i)&&!gE.hasOwnProperty(i)&&(s[i]=n[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:xa,type:e,key:a,ref:o,props:s,_owner:Lu.current}}function dN(e,n){return{$$typeof:xa,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===xa}function uN(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Kg=/\/+/g;function Tc(e,n){return typeof e=="object"&&e!==null&&e.key!=null?uN(""+e.key):n.toString(36)}function No(e,n,r,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xa:case JS:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+Tc(o,0):i,qg(s)?(r="",e!=null&&(r=e.replace(Kg,"$&/")+"/"),No(s,n,r,"",function(d){return d})):s!=null&&(Du(s)&&(s=dN(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Kg,"$&/")+"/")+e)),n.push(s)),1;if(o=0,i=i===""?".":i+":",qg(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+Tc(a,l);o+=No(a,n,r,c,s)}else if(c=cN(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+Tc(a,l++),o+=No(a,n,r,c,s);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(e,n,r){if(e==null)return e;var i=[],s=0;return No(e,i,"","",function(a){return n.call(r,a,s++)}),i}function hN(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},_o={transition:null},pN={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Lu};ce.Children={map:Ba,forEach:function(e,n,r){Ba(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Ba(e,function(){n++}),n},toArray:function(e){return Ba(e,function(n){return n})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=Wi;ce.Fragment=eN;ce.Profiler=nN;ce.PureComponent=ku;ce.StrictMode=tN;ce.Suspense=aN;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pN;ce.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=hE({},e.props),s=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Lu.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)fE.call(n,c)&&!gE.hasOwnProperty(c)&&(i[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:xa,type:e.type,key:s,ref:a,props:i,_owner:o}};ce.createContext=function(e){return e={$$typeof:iN,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rN,_context:e},e.Consumer=e};ce.createElement=bE;ce.createFactory=function(e){var n=bE.bind(null,e);return n.type=e,n};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:sN,render:e}};ce.isValidElement=Du;ce.lazy=function(e){return{$$typeof:lN,_payload:{_status:-1,_result:e},_init:hN}};ce.memo=function(e,n){return{$$typeof:oN,type:e,compare:n===void 0?null:n}};ce.startTransition=function(e){var n=_o.transition;_o.transition={};try{e()}finally{_o.transition=n}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(e,n){return gt.current.useCallback(e,n)};ce.useContext=function(e){return gt.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ce.useEffect=function(e,n){return gt.current.useEffect(e,n)};ce.useId=function(){return gt.current.useId()};ce.useImperativeHandle=function(e,n,r){return gt.current.useImperativeHandle(e,n,r)};ce.useInsertionEffect=function(e,n){return gt.current.useInsertionEffect(e,n)};ce.useLayoutEffect=function(e,n){return gt.current.useLayoutEffect(e,n)};ce.useMemo=function(e,n){return gt.current.useMemo(e,n)};ce.useReducer=function(e,n,r){return gt.current.useReducer(e,n,r)};ce.useRef=function(e){return gt.current.useRef(e)};ce.useState=function(e){return gt.current.useState(e)};ce.useSyncExternalStore=function(e,n,r){return gt.current.useSyncExternalStore(e,n,r)};ce.useTransition=function(){return gt.current.useTransition()};ce.version="18.2.0";dE.exports=ce;var D=dE.exports;const Mu=Vi(D),mN=lE({__proto__:null,default:Mu},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fN=D,gN=Symbol.for("react.element"),bN=Symbol.for("react.fragment"),xN=Object.prototype.hasOwnProperty,EN=fN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TN={key:!0,ref:!0,__self:!0,__source:!0};function xE(e,n,r){var i,s={},a=null,o=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)xN.call(n,i)&&!TN.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)s[i]===void 0&&(s[i]=n[i]);return{$$typeof:gN,type:e,key:a,ref:o,props:s,_owner:EN.current}}Tl.Fragment=bN;Tl.jsx=xE;Tl.jsxs=xE;cE.exports=Tl;var t=cE.exports,Nd={},EE={exports:{}},Ot={},TE={exports:{}},yE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(G,q){var K=G.length;G.push(q);e:for(;0<K;){var ue=K-1>>>1,fe=G[ue];if(0<s(fe,q))G[ue]=q,G[K]=fe,K=ue;else break e}}function r(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var q=G[0],K=G.pop();if(K!==q){G[0]=K;e:for(var ue=0,fe=G.length,xt=fe>>>1;ue<xt;){var ht=2*(ue+1)-1,Sr=G[ht],yn=ht+1,ri=G[yn];if(0>s(Sr,K))yn<fe&&0>s(ri,Sr)?(G[ue]=ri,G[yn]=K,ue=yn):(G[ue]=Sr,G[ht]=K,ue=ht);else if(yn<fe&&0>s(ri,K))G[ue]=ri,G[yn]=K,ue=yn;else break e}}return q}function s(G,q){var K=G.sortIndex-q.sortIndex;return K!==0?K:G.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],h=1,b=null,f=3,_=!1,y=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(G){for(var q=r(d);q!==null;){if(q.callback===null)i(d);else if(q.startTime<=G)i(d),q.sortIndex=q.expirationTime,n(c,q);else break;q=r(d)}}function x(G){if(T=!1,E(G),!y)if(r(c)!==null)y=!0,Ze(v);else{var q=r(d);q!==null&&Ce(x,q.startTime-G)}}function v(G,q){y=!1,T&&(T=!1,m(C),C=-1),_=!0;var K=f;try{for(E(q),b=r(c);b!==null&&(!(b.expirationTime>q)||G&&!Q());){var ue=b.callback;if(typeof ue=="function"){b.callback=null,f=b.priorityLevel;var fe=ue(b.expirationTime<=q);q=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===r(c)&&i(c),E(q)}else i(c);b=r(c)}if(b!==null)var xt=!0;else{var ht=r(d);ht!==null&&Ce(x,ht.startTime-q),xt=!1}return xt}finally{b=null,f=K,_=!1}}var R=!1,j=null,C=-1,M=5,B=-1;function Q(){return!(e.unstable_now()-B<M)}function Y(){if(j!==null){var G=e.unstable_now();B=G;var q=!0;try{q=j(!0,G)}finally{q?ie():(R=!1,j=null)}}else R=!1}var ie;if(typeof g=="function")ie=function(){g(Y)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,de=De.port2;De.port1.onmessage=Y,ie=function(){de.postMessage(null)}}else ie=function(){A(Y,0)};function Ze(G){j=G,R||(R=!0,ie())}function Ce(G,q){C=A(function(){G(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){y||_||(y=!0,Ze(v))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(G){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var K=f;f=q;try{return G()}finally{f=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var K=f;f=G;try{return q()}finally{f=K}},e.unstable_scheduleCallback=function(G,q,K){var ue=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ue+K:ue):K=ue,G){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=K+fe,G={id:h++,callback:q,priorityLevel:G,startTime:K,expirationTime:fe,sortIndex:-1},K>ue?(G.sortIndex=K,n(d,G),r(c)===null&&G===r(d)&&(T?(m(C),C=-1):T=!0,Ce(x,K-ue))):(G.sortIndex=fe,n(c,G),y||_||(y=!0,Ze(v))),G},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(G){var q=f;return function(){var K=f;f=q;try{return G.apply(this,arguments)}finally{f=K}}}})(yE);TE.exports=yE;var yN=TE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=D,kt=yN;function F(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var NE=new Set,Qs={};function Wr(e,n){Fi(e,n),Fi(e+"Capture",n)}function Fi(e,n){for(Qs[e]=n,e=0;e<n.length;e++)NE.add(n[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,SN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},Xg={};function NN(e){return _d.call(Xg,e)?!0:_d.call(Yg,e)?!1:SN.test(e)?Xg[e]=!0:(Yg[e]=!0,!1)}function _N(e,n,r,i){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function AN(e,n,r,i){if(n===null||typeof n>"u"||_N(e,n,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function bt(e,n,r,i,s,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];rt[n]=new bt(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fu,Pu);rt[n]=new bt(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fu,Pu);rt[n]=new bt(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fu,Pu);rt[n]=new bt(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,n,r,i){var s=rt.hasOwnProperty(n)?rt[n]:null;(s!==null?s.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(AN(n,r,s,i)&&(r=null),i||s===null?NN(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(n=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(n):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,n,r):e.setAttribute(n,r))))}var Un=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),mi=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),AE=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),jE=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function ls(e){return e===null||typeof e!="object"?null:(e=Zg&&e[Zg]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,yc;function Rs(e){if(yc===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);yc=n&&n[1]||""}return`
`+yc+e}var Sc=!1;function Nc(e,n){if(!e||Sc)return"";Sc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var i=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){i=d}e.call(n.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Sc=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Rs(e):""}function jN(e){switch(e.tag){case 5:return Rs(e.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return e=Nc(e.type,!1),e;case 11:return e=Nc(e.type.render,!1),e;case 1:return e=Nc(e.type,!0),e;default:return""}}function wd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fi:return"Fragment";case mi:return"Portal";case Ad:return"Profiler";case Bu:return"StrictMode";case jd:return"Suspense";case vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case AE:return(e.displayName||"Context")+".Consumer";case _E:return(e._context.displayName||"Context")+".Provider";case Hu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gu:return n=e.displayName||null,n!==null?n:wd(e.type)||"Memo";case Jn:n=e._payload,e=e._init;try{return wd(e(n))}catch{}}return null}function vN(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(n);case 8:return n===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vE(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wN(e){var n=vE(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ga(e){e._valueTracker||(e._valueTracker=wN(e))}function wE(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=vE(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rd(e,n){var r=n.checked;return Ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Qg(e,n){var r=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;r=mr(n.value!=null?n.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function RE(e,n){n=n.checked,n!=null&&Uu(e,"checked",n,!1)}function Id(e,n){RE(e,n);var r=mr(n.value),i=n.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Cd(e,n.type,r):n.hasOwnProperty("defaultValue")&&Cd(e,n.type,mr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Jg(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Cd(e,n,r){(n!=="number"||Ho(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Is=Array.isArray;function wi(e,n,r,i){if(e=e.options,n){n={};for(var s=0;s<r.length;s++)n["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=n.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+mr(r),n=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function kd(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eb(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(F(92));if(Is(r)){if(1<r.length)throw Error(F(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:mr(r)}}function IE(e,n){var r=mr(n.value),i=mr(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function tb(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function CE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?CE(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $a,kE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(n,r,i,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Js(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RN=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(e){RN.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ls[n]=Ls[e]})});function OE(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Ls.hasOwnProperty(e)&&Ls[e]?(""+n).trim():n+"px"}function LE(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=OE(r,n[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var IN=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(e,n){if(n){if(IN[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(F(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(F(61))}if(n.style!=null&&typeof n.style!="object")throw Error(F(62))}}function Dd(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fd=null,Ri=null,Ii=null;function nb(e){if(e=ya(e)){if(typeof Fd!="function")throw Error(F(280));var n=e.stateNode;n&&(n=Al(n),Fd(e.stateNode,e.type,n))}}function DE(e){Ri?Ii?Ii.push(e):Ii=[e]:Ri=e}function ME(){if(Ri){var e=Ri,n=Ii;if(Ii=Ri=null,nb(e),n)for(e=0;e<n.length;e++)nb(n[e])}}function FE(e,n){return e(n)}function PE(){}var _c=!1;function UE(e,n,r){if(_c)return e(n,r);_c=!0;try{return FE(e,n,r)}finally{_c=!1,(Ri!==null||Ii!==null)&&(PE(),ME())}}function ea(e,n){var r=e.stateNode;if(r===null)return null;var i=Al(r);if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,n,typeof r));return r}var Pd=!1;if(Ln)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Pd=!1}function CN(e,n,r,i,s,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(h){this.onError(h)}}var Ds=!1,Go=null,$o=!1,Ud=null,kN={onError:function(e){Ds=!0,Go=e}};function ON(e,n,r,i,s,a,o,l,c){Ds=!1,Go=null,CN.apply(kN,arguments)}function LN(e,n,r,i,s,a,o,l,c){if(ON.apply(this,arguments),Ds){if(Ds){var d=Go;Ds=!1,Go=null}else throw Error(F(198));$o||($o=!0,Ud=d)}}function qr(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function BE(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rb(e){if(qr(e)!==e)throw Error(F(188))}function DN(e){var n=e.alternate;if(!n){if(n=qr(e),n===null)throw Error(F(188));return n!==e?null:e}for(var r=e,i=n;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return rb(s),e;if(a===i)return rb(s),n;a=a.sibling}throw Error(F(188))}if(r.return!==i.return)r=s,i=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,i=a;break}if(l===i){o=!0,i=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,i=s;break}if(l===i){o=!0,i=a,r=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(r.alternate!==i)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:n}function HE(e){return e=DN(e),e!==null?GE(e):null}function GE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=GE(e);if(n!==null)return n;e=e.sibling}return null}var $E=kt.unstable_scheduleCallback,ib=kt.unstable_cancelCallback,MN=kt.unstable_shouldYield,FN=kt.unstable_requestPaint,Pe=kt.unstable_now,PN=kt.unstable_getCurrentPriorityLevel,zu=kt.unstable_ImmediatePriority,zE=kt.unstable_UserBlockingPriority,zo=kt.unstable_NormalPriority,UN=kt.unstable_LowPriority,VE=kt.unstable_IdlePriority,yl=null,xn=null;function BN(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:$N,HN=Math.log,GN=Math.LN2;function $N(e){return e>>>=0,e===0?32:31-(HN(e)/GN|0)|0}var za=64,Va=4194304;function Cs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?i=Cs(l):(a&=o,a!==0&&(i=Cs(a)))}else o=r&~s,o!==0?i=Cs(o):a!==0&&(i=Cs(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&s)&&(s=i&-i,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if(i&4&&(i|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)r=31-sn(n),s=1<<r,i|=e[r],n&=~s;return i}function zN(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VN(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-sn(a),l=1<<o,c=s[o];c===-1?(!(l&r)||l&i)&&(s[o]=zN(l,n)):c<=n&&(e.expiredLanes|=l),a&=~l}}function Bd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function WE(){var e=za;return za<<=1,!(za&4194240)&&(za=64),e}function Ac(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ea(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-sn(n),e[n]=r}function WN(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-sn(r),a=1<<s;n[s]=0,i[s]=-1,e[s]=-1,r&=~a}}function Vu(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-sn(r),s=1<<i;s&n|e[i]&n&&(e[i]|=n),r&=~s}}var ge=0;function qE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var KE,Wu,YE,XE,ZE,Hd=!1,Wa=[],ar=null,or=null,lr=null,ta=new Map,na=new Map,nr=[],qN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sb(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ta.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(n.pointerId)}}function ds(e,n,r,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},n!==null&&(n=ya(n),n!==null&&Wu(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function KN(e,n,r,i,s){switch(n){case"focusin":return ar=ds(ar,e,n,r,i,s),!0;case"dragenter":return or=ds(or,e,n,r,i,s),!0;case"mouseover":return lr=ds(lr,e,n,r,i,s),!0;case"pointerover":var a=s.pointerId;return ta.set(a,ds(ta.get(a)||null,e,n,r,i,s)),!0;case"gotpointercapture":return a=s.pointerId,na.set(a,ds(na.get(a)||null,e,n,r,i,s)),!0}return!1}function QE(e){var n=kr(e.target);if(n!==null){var r=qr(n);if(r!==null){if(n=r.tag,n===13){if(n=BE(r),n!==null){e.blockedOn=n,ZE(e.priority,function(){YE(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Gd(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Md=i,r.target.dispatchEvent(i),Md=null}else return n=ya(r),n!==null&&Wu(n),e.blockedOn=r,!1;n.shift()}return!0}function ab(e,n,r){Ao(e)&&r.delete(n)}function YN(){Hd=!1,ar!==null&&Ao(ar)&&(ar=null),or!==null&&Ao(or)&&(or=null),lr!==null&&Ao(lr)&&(lr=null),ta.forEach(ab),na.forEach(ab)}function us(e,n){e.blockedOn===n&&(e.blockedOn=null,Hd||(Hd=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,YN)))}function ra(e){function n(s){return us(s,e)}if(0<Wa.length){us(Wa[0],e);for(var r=1;r<Wa.length;r++){var i=Wa[r];i.blockedOn===e&&(i.blockedOn=null)}}for(ar!==null&&us(ar,e),or!==null&&us(or,e),lr!==null&&us(lr,e),ta.forEach(n),na.forEach(n),r=0;r<nr.length;r++)i=nr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)QE(r),r.blockedOn===null&&nr.shift()}var Ci=Un.ReactCurrentBatchConfig,Wo=!0;function XN(e,n,r,i){var s=ge,a=Ci.transition;Ci.transition=null;try{ge=1,qu(e,n,r,i)}finally{ge=s,Ci.transition=a}}function ZN(e,n,r,i){var s=ge,a=Ci.transition;Ci.transition=null;try{ge=4,qu(e,n,r,i)}finally{ge=s,Ci.transition=a}}function qu(e,n,r,i){if(Wo){var s=Gd(e,n,r,i);if(s===null)Dc(e,n,i,qo,r),sb(e,i);else if(KN(s,e,n,r,i))i.stopPropagation();else if(sb(e,i),n&4&&-1<qN.indexOf(e)){for(;s!==null;){var a=ya(s);if(a!==null&&KE(a),a=Gd(e,n,r,i),a===null&&Dc(e,n,i,qo,r),a===s)break;s=a}s!==null&&i.stopPropagation()}else Dc(e,n,i,null,r)}}var qo=null;function Gd(e,n,r,i){if(qo=null,e=$u(i),e=kr(e),e!==null)if(n=qr(e),n===null)e=null;else if(r=n.tag,r===13){if(e=BE(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return qo=e,null}function JE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PN()){case zu:return 1;case zE:return 4;case zo:case UN:return 16;case VE:return 536870912;default:return 16}default:return 16}}var ir=null,Ku=null,jo=null;function eT(){if(jo)return jo;var e,n=Ku,r=n.length,i,s="value"in ir?ir.value:ir.textContent,a=s.length;for(e=0;e<r&&n[e]===s[e];e++);var o=r-e;for(i=1;i<=o&&n[r-i]===s[a-i];i++);return jo=s.slice(e,1<i?1-i:void 0)}function vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function ob(){return!1}function Lt(e){function n(r,i,s,a,o){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qa:ob,this.isPropagationStopped=ob,this}return Ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),n}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=Lt(qi),Ta=Ie({},qi,{view:0,detail:0}),QN=Lt(Ta),jc,vc,hs,Sl=Ie({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hs&&(hs&&e.type==="mousemove"?(jc=e.screenX-hs.screenX,vc=e.screenY-hs.screenY):vc=jc=0,hs=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),lb=Lt(Sl),JN=Ie({},Sl,{dataTransfer:0}),e2=Lt(JN),t2=Ie({},Ta,{relatedTarget:0}),wc=Lt(t2),n2=Ie({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),r2=Lt(n2),i2=Ie({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s2=Lt(i2),a2=Ie({},qi,{data:0}),cb=Lt(a2),o2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=c2[e])?!!n[e]:!1}function Xu(){return d2}var u2=Ie({},Ta,{key:function(e){if(e.key){var n=o2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h2=Lt(u2),p2=Ie({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),db=Lt(p2),m2=Ie({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),f2=Lt(m2),g2=Ie({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),b2=Lt(g2),x2=Ie({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E2=Lt(x2),T2=[9,13,27,32],Zu=Ln&&"CompositionEvent"in window,Ms=null;Ln&&"documentMode"in document&&(Ms=document.documentMode);var y2=Ln&&"TextEvent"in window&&!Ms,tT=Ln&&(!Zu||Ms&&8<Ms&&11>=Ms),ub=" ",hb=!1;function nT(e,n){switch(e){case"keyup":return T2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gi=!1;function S2(e,n){switch(e){case"compositionend":return rT(n);case"keypress":return n.which!==32?null:(hb=!0,ub);case"textInput":return e=n.data,e===ub&&hb?null:e;default:return null}}function N2(e,n){if(gi)return e==="compositionend"||!Zu&&nT(e,n)?(e=eT(),jo=Ku=ir=null,gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tT&&n.locale!=="ko"?null:n.data;default:return null}}var _2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pb(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_2[e.type]:n==="textarea"}function iT(e,n,r,i){DE(i),n=Ko(n,"onChange"),0<n.length&&(r=new Yu("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var Fs=null,ia=null;function A2(e){fT(e,0)}function Nl(e){var n=Ei(e);if(wE(n))return e}function j2(e,n){if(e==="change")return n}var sT=!1;if(Ln){var Rc;if(Ln){var Ic="oninput"in document;if(!Ic){var mb=document.createElement("div");mb.setAttribute("oninput","return;"),Ic=typeof mb.oninput=="function"}Rc=Ic}else Rc=!1;sT=Rc&&(!document.documentMode||9<document.documentMode)}function fb(){Fs&&(Fs.detachEvent("onpropertychange",aT),ia=Fs=null)}function aT(e){if(e.propertyName==="value"&&Nl(ia)){var n=[];iT(n,ia,e,$u(e)),UE(A2,n)}}function v2(e,n,r){e==="focusin"?(fb(),Fs=n,ia=r,Fs.attachEvent("onpropertychange",aT)):e==="focusout"&&fb()}function w2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(ia)}function R2(e,n){if(e==="click")return Nl(n)}function I2(e,n){if(e==="input"||e==="change")return Nl(n)}function C2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:C2;function sa(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!_d.call(n,s)||!on(e[s],n[s]))return!1}return!0}function gb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bb(e,n){var r=gb(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gb(r)}}function oT(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?oT(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lT(){for(var e=window,n=Ho();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ho(e.document)}return n}function Qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function k2(e){var n=lT(),r=e.focusedElem,i=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&oT(r.ownerDocument.documentElement,r)){if(i!==null&&Qu(r)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=bb(r,a);var o=bb(r,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O2=Ln&&"documentMode"in document&&11>=document.documentMode,bi=null,$d=null,Ps=null,zd=!1;function xb(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zd||bi==null||bi!==Ho(i)||(i=bi,"selectionStart"in i&&Qu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ps&&sa(Ps,i)||(Ps=i,i=Ko($d,"onSelect"),0<i.length&&(n=new Yu("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=bi)))}function Ka(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var xi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},Cc={},cT={};Ln&&(cT=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function _l(e){if(Cc[e])return Cc[e];if(!xi[e])return e;var n=xi[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in cT)return Cc[e]=n[r];return e}var dT=_l("animationend"),uT=_l("animationiteration"),hT=_l("animationstart"),pT=_l("transitionend"),mT=new Map,Eb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,n){mT.set(e,n),Wr(n,[e])}for(var kc=0;kc<Eb.length;kc++){var Oc=Eb[kc],L2=Oc.toLowerCase(),D2=Oc[0].toUpperCase()+Oc.slice(1);br(L2,"on"+D2)}br(dT,"onAnimationEnd");br(uT,"onAnimationIteration");br(hT,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(pT,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function Tb(e,n,r){var i=e.type||"unknown-event";e.currentTarget=r,LN(i,n,void 0,e),e.currentTarget=null}function fT(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Tb(s,l,d),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Tb(s,l,d),a=c}}}if($o)throw e=Ud,$o=!1,Ud=null,e}function _e(e,n){var r=n[Yd];r===void 0&&(r=n[Yd]=new Set);var i=e+"__bubble";r.has(i)||(gT(n,e,2,!1),r.add(i))}function Lc(e,n,r){var i=0;n&&(i|=4),gT(r,e,i,n)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function aa(e){if(!e[Ya]){e[Ya]=!0,NE.forEach(function(r){r!=="selectionchange"&&(M2.has(r)||Lc(r,!1,e),Lc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ya]||(n[Ya]=!0,Lc("selectionchange",!1,n))}}function gT(e,n,r,i){switch(JE(n)){case 1:var s=XN;break;case 4:s=ZN;break;default:s=qu}r=s.bind(null,n,r,e),s=void 0,!Pd||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,r,{capture:!0,passive:s}):e.addEventListener(n,r,!0):s!==void 0?e.addEventListener(n,r,{passive:s}):e.addEventListener(n,r,!1)}function Dc(e,n,r,i,s){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=kr(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}UE(function(){var d=a,h=$u(r),b=[];e:{var f=mT.get(e);if(f!==void 0){var _=Yu,y=e;switch(e){case"keypress":if(vo(r)===0)break e;case"keydown":case"keyup":_=h2;break;case"focusin":y="focus",_=wc;break;case"focusout":y="blur",_=wc;break;case"beforeblur":case"afterblur":_=wc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=lb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=e2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=f2;break;case dT:case uT:case hT:_=r2;break;case pT:_=b2;break;case"scroll":_=QN;break;case"wheel":_=E2;break;case"copy":case"cut":case"paste":_=s2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=db}var T=(n&4)!==0,A=!T&&e==="scroll",m=T?f!==null?f+"Capture":null:f;T=[];for(var g=d,E;g!==null;){E=g;var x=E.stateNode;if(E.tag===5&&x!==null&&(E=x,m!==null&&(x=ea(g,m),x!=null&&T.push(oa(g,x,E)))),A)break;g=g.return}0<T.length&&(f=new _(f,y,null,r,h),b.push({event:f,listeners:T}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",f&&r!==Md&&(y=r.relatedTarget||r.fromElement)&&(kr(y)||y[Dn]))break e;if((_||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,_?(y=r.relatedTarget||r.toElement,_=d,y=y?kr(y):null,y!==null&&(A=qr(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=d),_!==y)){if(T=lb,x="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(T=db,x="onPointerLeave",m="onPointerEnter",g="pointer"),A=_==null?f:Ei(_),E=y==null?f:Ei(y),f=new T(x,g+"leave",_,r,h),f.target=A,f.relatedTarget=E,x=null,kr(h)===d&&(T=new T(m,g+"enter",y,r,h),T.target=E,T.relatedTarget=A,x=T),A=x,_&&y)t:{for(T=_,m=y,g=0,E=T;E;E=ai(E))g++;for(E=0,x=m;x;x=ai(x))E++;for(;0<g-E;)T=ai(T),g--;for(;0<E-g;)m=ai(m),E--;for(;g--;){if(T===m||m!==null&&T===m.alternate)break t;T=ai(T),m=ai(m)}T=null}else T=null;_!==null&&yb(b,f,_,T,!1),y!==null&&A!==null&&yb(b,A,y,T,!0)}}e:{if(f=d?Ei(d):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var v=j2;else if(pb(f))if(sT)v=I2;else{v=w2;var R=v2}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(v=R2);if(v&&(v=v(e,d))){iT(b,v,r,h);break e}R&&R(e,f,d),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Cd(f,"number",f.value)}switch(R=d?Ei(d):window,e){case"focusin":(pb(R)||R.contentEditable==="true")&&(bi=R,$d=d,Ps=null);break;case"focusout":Ps=$d=bi=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,xb(b,r,h);break;case"selectionchange":if(O2)break;case"keydown":case"keyup":xb(b,r,h)}var j;if(Zu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else gi?nT(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(tT&&r.locale!=="ko"&&(gi||C!=="onCompositionStart"?C==="onCompositionEnd"&&gi&&(j=eT()):(ir=h,Ku="value"in ir?ir.value:ir.textContent,gi=!0)),R=Ko(d,C),0<R.length&&(C=new cb(C,e,null,r,h),b.push({event:C,listeners:R}),j?C.data=j:(j=rT(r),j!==null&&(C.data=j)))),(j=y2?S2(e,r):N2(e,r))&&(d=Ko(d,"onBeforeInput"),0<d.length&&(h=new cb("onBeforeInput","beforeinput",null,r,h),b.push({event:h,listeners:d}),h.data=j))}fT(b,n)})}function oa(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ko(e,n){for(var r=n+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=ea(e,r),a!=null&&i.unshift(oa(e,a,s)),a=ea(e,n),a!=null&&i.push(oa(e,a,s))),e=e.return}return i}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yb(e,n,r,i,s){for(var a=n._reactName,o=[];r!==null&&r!==i;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,s?(c=ea(r,a),c!=null&&o.unshift(oa(r,c,l))):s||(c=ea(r,a),c!=null&&o.push(oa(r,c,l)))),r=r.return}o.length!==0&&e.push({event:n,listeners:o})}var F2=/\r\n?/g,P2=/\u0000|\uFFFD/g;function Sb(e){return(typeof e=="string"?e:""+e).replace(F2,`
`).replace(P2,"")}function Xa(e,n,r){if(n=Sb(n),Sb(e)!==n&&r)throw Error(F(425))}function Yo(){}var Vd=null,Wd=null;function qd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,U2=typeof clearTimeout=="function"?clearTimeout:void 0,Nb=typeof Promise=="function"?Promise:void 0,B2=typeof queueMicrotask=="function"?queueMicrotask:typeof Nb<"u"?function(e){return Nb.resolve(null).then(e).catch(H2)}:Kd;function H2(e){setTimeout(function(){throw e})}function Mc(e,n){var r=n,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),ra(n);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);ra(n)}function cr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _b(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ki,la="__reactProps$"+Ki,Dn="__reactContainer$"+Ki,Yd="__reactEvents$"+Ki,G2="__reactListeners$"+Ki,$2="__reactHandles$"+Ki;function kr(e){var n=e[gn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Dn]||r[gn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=_b(e);e!==null;){if(r=e[gn])return r;e=_b(e)}return n}e=r,r=e.parentNode}return null}function ya(e){return e=e[gn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Al(e){return e[la]||null}var Xd=[],Ti=-1;function xr(e){return{current:e}}function Ae(e){0>Ti||(e.current=Xd[Ti],Xd[Ti]=null,Ti--)}function Se(e,n){Ti++,Xd[Ti]=e.current,e.current=n}var fr={},ut=xr(fr),Nt=xr(!1),Ur=fr;function Pi(e,n){var r=e.type.contextTypes;if(!r)return fr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function _t(e){return e=e.childContextTypes,e!=null}function Xo(){Ae(Nt),Ae(ut)}function Ab(e,n,r){if(ut.current!==fr)throw Error(F(168));Se(ut,n),Se(Nt,r)}function bT(e,n,r){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in n))throw Error(F(108,vN(e)||"Unknown",s));return Ie({},r,i)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Ur=ut.current,Se(ut,e),Se(Nt,Nt.current),!0}function jb(e,n,r){var i=e.stateNode;if(!i)throw Error(F(169));r?(e=bT(e,n,Ur),i.__reactInternalMemoizedMergedChildContext=e,Ae(Nt),Ae(ut),Se(ut,e)):Ae(Nt),Se(Nt,r)}var Rn=null,jl=!1,Fc=!1;function xT(e){Rn===null?Rn=[e]:Rn.push(e)}function z2(e){jl=!0,xT(e)}function Er(){if(!Fc&&Rn!==null){Fc=!0;var e=0,n=ge;try{var r=Rn;for(ge=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Rn=null,jl=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(e+1)),$E(zu,Er),s}finally{ge=n,Fc=!1}}return null}var yi=[],Si=0,Qo=null,Jo=0,Ut=[],Bt=0,Br=null,In=1,Cn="";function wr(e,n){yi[Si++]=Jo,yi[Si++]=Qo,Qo=e,Jo=n}function ET(e,n,r){Ut[Bt++]=In,Ut[Bt++]=Cn,Ut[Bt++]=Br,Br=e;var i=In;e=Cn;var s=32-sn(i)-1;i&=~(1<<s),r+=1;var a=32-sn(n)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,In=1<<32-sn(n)+s|r<<s|i,Cn=a+e}else In=1<<a|r<<s|i,Cn=e}function Ju(e){e.return!==null&&(wr(e,1),ET(e,1,0))}function e1(e){for(;e===Qo;)Qo=yi[--Si],yi[Si]=null,Jo=yi[--Si],yi[Si]=null;for(;e===Br;)Br=Ut[--Bt],Ut[Bt]=null,Cn=Ut[--Bt],Ut[Bt]=null,In=Ut[--Bt],Ut[Bt]=null}var Ct=null,It=null,je=!1,rn=null;function TT(e,n){var r=Ht(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function vb(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ct=e,It=cr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ct=e,It=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Br!==null?{id:In,overflow:Cn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Ht(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ct=e,It=null,!0):!1;default:return!1}}function Zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qd(e){if(je){var n=It;if(n){var r=n;if(!vb(e,n)){if(Zd(e))throw Error(F(418));n=cr(r.nextSibling);var i=Ct;n&&vb(e,n)?TT(i,r):(e.flags=e.flags&-4097|2,je=!1,Ct=e)}}else{if(Zd(e))throw Error(F(418));e.flags=e.flags&-4097|2,je=!1,Ct=e}}}function wb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Za(e){if(e!==Ct)return!1;if(!je)return wb(e),je=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!qd(e.type,e.memoizedProps)),n&&(n=It)){if(Zd(e))throw yT(),Error(F(418));for(;n;)TT(e,n),n=cr(n.nextSibling)}if(wb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){It=cr(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}It=null}}else It=Ct?cr(e.stateNode.nextSibling):null;return!0}function yT(){for(var e=It;e;)e=cr(e.nextSibling)}function Ui(){It=Ct=null,je=!1}function t1(e){rn===null?rn=[e]:rn.push(e)}var V2=Un.ReactCurrentBatchConfig;function en(e,n){if(e&&e.defaultProps){n=Ie({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}var el=xr(null),tl=null,Ni=null,n1=null;function r1(){n1=Ni=tl=null}function i1(e){var n=el.current;Ae(el),e._currentValue=n}function Jd(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function ki(e,n){tl=e,n1=Ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(St=!0),e.firstContext=null)}function zt(e){var n=e._currentValue;if(n1!==e)if(e={context:e,memoizedValue:n,next:null},Ni===null){if(tl===null)throw Error(F(308));Ni=e,tl.dependencies={lanes:0,firstContext:e}}else Ni=Ni.next=e;return n}var Or=null;function s1(e){Or===null?Or=[e]:Or.push(e)}function ST(e,n,r,i){var s=n.interleaved;return s===null?(r.next=r,s1(n)):(r.next=s.next,s.next=r),n.interleaved=r,Mn(e,i)}function Mn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var er=!1;function a1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NT(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dr(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,me&2){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,Mn(e,r)}return s=i.interleaved,s===null?(n.next=n,s1(i)):(n.next=s.next,s.next=n),i.interleaved=n,Mn(e,r)}function wo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Vu(e,r)}}function Rb(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=n:a=a.next=n}else s=a=n;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function nl(e,n,r,i){var s=e.updateQueue;er=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(a!==null){var b=s.baseState;o=0,h=d=c=null,l=a;do{var f=l.lane,_=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,T=l;switch(f=n,_=r,T.tag){case 1:if(y=T.payload,typeof y=="function"){b=y.call(_,b,f);break e}b=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=T.payload,f=typeof y=="function"?y.call(_,b,f):y,f==null)break e;b=Ie({},b,f);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=_,c=b):h=h.next=_,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(c=b),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,n=s.shared.interleaved,n!==null){s=n;do o|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);Gr|=o,e.lanes=o,e.memoizedState=b}}function Ib(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(F(191,s));s.call(i)}}}var _T=new SE.Component().refs;function eu(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:Ie({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vl={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var i=ft(),s=hr(e),a=kn(i,s);a.payload=n,r!=null&&(a.callback=r),n=dr(e,a,s),n!==null&&(an(n,e,s,i),wo(n,e,s))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=ft(),s=hr(e),a=kn(i,s);a.tag=1,a.payload=n,r!=null&&(a.callback=r),n=dr(e,a,s),n!==null&&(an(n,e,s,i),wo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ft(),i=hr(e),s=kn(r,i);s.tag=2,n!=null&&(s.callback=n),n=dr(e,s,i),n!==null&&(an(n,e,i,r),wo(n,e,i))}};function Cb(e,n,r,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!sa(r,i)||!sa(s,a):!0}function AT(e,n,r){var i=!1,s=fr,a=n.contextType;return typeof a=="object"&&a!==null?a=zt(a):(s=_t(n)?Ur:ut.current,i=n.contextTypes,a=(i=i!=null)?Pi(e,s):fr),n=new n(r,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vl,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function kb(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&vl.enqueueReplaceState(n,n.state,null)}function tu(e,n,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs=_T,a1(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=zt(a):(a=_t(n)?Ur:ut.current,s.context=Pi(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(eu(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&vl.enqueueReplaceState(s,s.state,null),nl(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var i=r.stateNode}if(!i)throw Error(F(147,e));var s=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=s.refs;l===_T&&(l=s.refs={}),o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Qa(e,n){throw e=Object.prototype.toString.call(n),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ob(e){var n=e._init;return n(e._payload)}function jT(e){function n(m,g){if(e){var E=m.deletions;E===null?(m.deletions=[g],m.flags|=16):E.push(g)}}function r(m,g){if(!e)return null;for(;g!==null;)n(m,g),g=g.sibling;return null}function i(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function s(m,g){return m=pr(m,g),m.index=0,m.sibling=null,m}function a(m,g,E){return m.index=E,e?(E=m.alternate,E!==null?(E=E.index,E<g?(m.flags|=2,g):E):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,g,E,x){return g===null||g.tag!==6?(g=zc(E,m.mode,x),g.return=m,g):(g=s(g,E),g.return=m,g)}function c(m,g,E,x){var v=E.type;return v===fi?h(m,g,E.props.children,x,E.key):g!==null&&(g.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Jn&&Ob(v)===g.type)?(x=s(g,E.props),x.ref=ps(m,g,E),x.return=m,x):(x=Lo(E.type,E.key,E.props,null,m.mode,x),x.ref=ps(m,g,E),x.return=m,x)}function d(m,g,E,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Vc(E,m.mode,x),g.return=m,g):(g=s(g,E.children||[]),g.return=m,g)}function h(m,g,E,x,v){return g===null||g.tag!==7?(g=Pr(E,m.mode,x,v),g.return=m,g):(g=s(g,E),g.return=m,g)}function b(m,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zc(""+g,m.mode,E),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:return E=Lo(g.type,g.key,g.props,null,m.mode,E),E.ref=ps(m,null,g),E.return=m,E;case mi:return g=Vc(g,m.mode,E),g.return=m,g;case Jn:var x=g._init;return b(m,x(g._payload),E)}if(Is(g)||ls(g))return g=Pr(g,m.mode,E,null),g.return=m,g;Qa(m,g)}return null}function f(m,g,E,x){var v=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return v!==null?null:l(m,g,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ha:return E.key===v?c(m,g,E,x):null;case mi:return E.key===v?d(m,g,E,x):null;case Jn:return v=E._init,f(m,g,v(E._payload),x)}if(Is(E)||ls(E))return v!==null?null:h(m,g,E,x,null);Qa(m,E)}return null}function _(m,g,E,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(E)||null,l(g,m,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return m=m.get(x.key===null?E:x.key)||null,c(g,m,x,v);case mi:return m=m.get(x.key===null?E:x.key)||null,d(g,m,x,v);case Jn:var R=x._init;return _(m,g,E,R(x._payload),v)}if(Is(x)||ls(x))return m=m.get(E)||null,h(g,m,x,v,null);Qa(g,x)}return null}function y(m,g,E,x){for(var v=null,R=null,j=g,C=g=0,M=null;j!==null&&C<E.length;C++){j.index>C?(M=j,j=null):M=j.sibling;var B=f(m,j,E[C],x);if(B===null){j===null&&(j=M);break}e&&j&&B.alternate===null&&n(m,j),g=a(B,g,C),R===null?v=B:R.sibling=B,R=B,j=M}if(C===E.length)return r(m,j),je&&wr(m,C),v;if(j===null){for(;C<E.length;C++)j=b(m,E[C],x),j!==null&&(g=a(j,g,C),R===null?v=j:R.sibling=j,R=j);return je&&wr(m,C),v}for(j=i(m,j);C<E.length;C++)M=_(j,m,C,E[C],x),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?C:M.key),g=a(M,g,C),R===null?v=M:R.sibling=M,R=M);return e&&j.forEach(function(Q){return n(m,Q)}),je&&wr(m,C),v}function T(m,g,E,x){var v=ls(E);if(typeof v!="function")throw Error(F(150));if(E=v.call(E),E==null)throw Error(F(151));for(var R=v=null,j=g,C=g=0,M=null,B=E.next();j!==null&&!B.done;C++,B=E.next()){j.index>C?(M=j,j=null):M=j.sibling;var Q=f(m,j,B.value,x);if(Q===null){j===null&&(j=M);break}e&&j&&Q.alternate===null&&n(m,j),g=a(Q,g,C),R===null?v=Q:R.sibling=Q,R=Q,j=M}if(B.done)return r(m,j),je&&wr(m,C),v;if(j===null){for(;!B.done;C++,B=E.next())B=b(m,B.value,x),B!==null&&(g=a(B,g,C),R===null?v=B:R.sibling=B,R=B);return je&&wr(m,C),v}for(j=i(m,j);!B.done;C++,B=E.next())B=_(j,m,C,B.value,x),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?C:B.key),g=a(B,g,C),R===null?v=B:R.sibling=B,R=B);return e&&j.forEach(function(Y){return n(m,Y)}),je&&wr(m,C),v}function A(m,g,E,x){if(typeof E=="object"&&E!==null&&E.type===fi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ha:e:{for(var v=E.key,R=g;R!==null;){if(R.key===v){if(v=E.type,v===fi){if(R.tag===7){r(m,R.sibling),g=s(R,E.props.children),g.return=m,m=g;break e}}else if(R.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Jn&&Ob(v)===R.type){r(m,R.sibling),g=s(R,E.props),g.ref=ps(m,R,E),g.return=m,m=g;break e}r(m,R);break}else n(m,R);R=R.sibling}E.type===fi?(g=Pr(E.props.children,m.mode,x,E.key),g.return=m,m=g):(x=Lo(E.type,E.key,E.props,null,m.mode,x),x.ref=ps(m,g,E),x.return=m,m=x)}return o(m);case mi:e:{for(R=E.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){r(m,g.sibling),g=s(g,E.children||[]),g.return=m,m=g;break e}else{r(m,g);break}else n(m,g);g=g.sibling}g=Vc(E,m.mode,x),g.return=m,m=g}return o(m);case Jn:return R=E._init,A(m,g,R(E._payload),x)}if(Is(E))return y(m,g,E,x);if(ls(E))return T(m,g,E,x);Qa(m,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(r(m,g.sibling),g=s(g,E),g.return=m,m=g):(r(m,g),g=zc(E,m.mode,x),g.return=m,m=g),o(m)):r(m,g)}return A}var Bi=jT(!0),vT=jT(!1),Sa={},En=xr(Sa),ca=xr(Sa),da=xr(Sa);function Lr(e){if(e===Sa)throw Error(F(174));return e}function o1(e,n){switch(Se(da,n),Se(ca,e),Se(En,Sa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Od(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Od(n,e)}Ae(En),Se(En,n)}function Hi(){Ae(En),Ae(ca),Ae(da)}function wT(e){Lr(da.current);var n=Lr(En.current),r=Od(n,e.type);n!==r&&(Se(ca,e),Se(En,r))}function l1(e){ca.current===e&&(Ae(En),Ae(ca))}var we=xr(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pc=[];function c1(){for(var e=0;e<Pc.length;e++)Pc[e]._workInProgressVersionPrimary=null;Pc.length=0}var Ro=Un.ReactCurrentDispatcher,Uc=Un.ReactCurrentBatchConfig,Hr=0,Re=null,ze=null,qe=null,il=!1,Us=!1,ua=0,W2=0;function ot(){throw Error(F(321))}function d1(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!on(e[r],n[r]))return!1;return!0}function u1(e,n,r,i,s,a){if(Hr=a,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ro.current=e===null||e.memoizedState===null?X2:Z2,e=r(i,s),Us){a=0;do{if(Us=!1,ua=0,25<=a)throw Error(F(301));a+=1,qe=ze=null,n.updateQueue=null,Ro.current=Q2,e=r(i,s)}while(Us)}if(Ro.current=sl,n=ze!==null&&ze.next!==null,Hr=0,qe=ze=Re=null,il=!1,n)throw Error(F(300));return e}function h1(){var e=ua!==0;return ua=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=e:qe=qe.next=e,qe}function Vt(){if(ze===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=qe===null?Re.memoizedState:qe.next;if(n!==null)qe=n,ze=e;else{if(e===null)throw Error(F(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?Re.memoizedState=qe=e:qe=qe.next=e}return qe}function ha(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=Vt(),r=n.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var i=ze,s=i.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,i=i.baseState;var l=o=null,c=null,d=a;do{var h=d.lane;if((Hr&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var b={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=b,o=i):c=c.next=b,Re.lanes|=h,Gr|=h}d=d.next}while(d!==null&&d!==a);c===null?o=i:c.next=l,on(i,n.memoizedState)||(St=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=c,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do a=s.lane,Re.lanes|=a,Gr|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Hc(e){var n=Vt(),r=n.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,a=n.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);on(a,n.memoizedState)||(St=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),r.lastRenderedState=a}return[a,i]}function RT(){}function IT(e,n){var r=Re,i=Vt(),s=n(),a=!on(i.memoizedState,s);if(a&&(i.memoizedState=s,St=!0),i=i.queue,p1(OT.bind(null,r,i,e),[e]),i.getSnapshot!==n||a||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,pa(9,kT.bind(null,r,i,s,n),void 0,null),Ye===null)throw Error(F(349));Hr&30||CT(r,n,s)}return s}function CT(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Re.updateQueue,n===null?(n={lastEffect:null,stores:null},Re.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function kT(e,n,r,i){n.value=r,n.getSnapshot=i,LT(n)&&DT(e)}function OT(e,n,r){return r(function(){LT(n)&&DT(e)})}function LT(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!on(e,r)}catch{return!0}}function DT(e){var n=Mn(e,1);n!==null&&an(n,e,1,-1)}function Lb(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n.queue=e,e=e.dispatch=Y2.bind(null,Re,e),[n.memoizedState,e]}function pa(e,n,r,i){return e={tag:e,create:n,destroy:r,deps:i,next:null},n=Re.updateQueue,n===null?(n={lastEffect:null,stores:null},Re.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e)),e}function MT(){return Vt().memoizedState}function Io(e,n,r,i){var s=mn();Re.flags|=e,s.memoizedState=pa(1|n,r,void 0,i===void 0?null:i)}function wl(e,n,r,i){var s=Vt();i=i===void 0?null:i;var a=void 0;if(ze!==null){var o=ze.memoizedState;if(a=o.destroy,i!==null&&d1(i,o.deps)){s.memoizedState=pa(n,r,a,i);return}}Re.flags|=e,s.memoizedState=pa(1|n,r,a,i)}function Db(e,n){return Io(8390656,8,e,n)}function p1(e,n){return wl(2048,8,e,n)}function FT(e,n){return wl(4,2,e,n)}function PT(e,n){return wl(4,4,e,n)}function UT(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function BT(e,n,r){return r=r!=null?r.concat([e]):null,wl(4,4,UT.bind(null,n,e),r)}function m1(){}function HT(e,n){var r=Vt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&d1(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function GT(e,n){var r=Vt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&d1(n,i[1])?i[0]:(e=e(),r.memoizedState=[e,n],e)}function $T(e,n,r){return Hr&21?(on(r,n)||(r=WE(),Re.lanes|=r,Gr|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=r)}function q2(e,n){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var i=Uc.transition;Uc.transition={};try{e(!1),n()}finally{ge=r,Uc.transition=i}}function zT(){return Vt().memoizedState}function K2(e,n,r){var i=hr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},VT(e))WT(n,r);else if(r=ST(e,n,r,i),r!==null){var s=ft();an(r,e,i,s),qT(r,n,i)}}function Y2(e,n,r){var i=hr(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(VT(e))WT(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,on(l,o)){var c=n.interleaved;c===null?(s.next=s,s1(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}r=ST(e,n,s,i),r!==null&&(s=ft(),an(r,e,i,s),qT(r,n,i))}}function VT(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function WT(e,n){Us=il=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function qT(e,n,r){if(r&4194240){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Vu(e,r)}}var sl={readContext:zt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},X2={readContext:zt,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:zt,useEffect:Db,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Io(4194308,4,UT.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Io(4194308,4,e,n)},useInsertionEffect:function(e,n){return Io(4,2,e,n)},useMemo:function(e,n){var r=mn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var i=mn();return n=r!==void 0?r(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=K2.bind(null,Re,e),[i.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Lb,useDebugValue:m1,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Lb(!1),n=e[0];return e=q2.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var i=Re,s=mn();if(je){if(r===void 0)throw Error(F(407));r=r()}else{if(r=n(),Ye===null)throw Error(F(349));Hr&30||CT(i,n,r)}s.memoizedState=r;var a={value:r,getSnapshot:n};return s.queue=a,Db(OT.bind(null,i,a,e),[e]),i.flags|=2048,pa(9,kT.bind(null,i,a,r,n),void 0,null),r},useId:function(){var e=mn(),n=Ye.identifierPrefix;if(je){var r=Cn,i=In;r=(i&~(1<<32-sn(i)-1)).toString(32)+r,n=":"+n+"R"+r,r=ua++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=W2++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Z2={readContext:zt,useCallback:HT,useContext:zt,useEffect:p1,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:PT,useMemo:GT,useReducer:Bc,useRef:MT,useState:function(){return Bc(ha)},useDebugValue:m1,useDeferredValue:function(e){var n=Vt();return $T(n,ze.memoizedState,e)},useTransition:function(){var e=Bc(ha)[0],n=Vt().memoizedState;return[e,n]},useMutableSource:RT,useSyncExternalStore:IT,useId:zT,unstable_isNewReconciler:!1},Q2={readContext:zt,useCallback:HT,useContext:zt,useEffect:p1,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:PT,useMemo:GT,useReducer:Hc,useRef:MT,useState:function(){return Hc(ha)},useDebugValue:m1,useDeferredValue:function(e){var n=Vt();return ze===null?n.memoizedState=e:$T(n,ze.memoizedState,e)},useTransition:function(){var e=Hc(ha)[0],n=Vt().memoizedState;return[e,n]},useMutableSource:RT,useSyncExternalStore:IT,useId:zT,unstable_isNewReconciler:!1};function Gi(e,n){try{var r="",i=n;do r+=jN(i),i=i.return;while(i);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function Gc(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function nu(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var J2=typeof WeakMap=="function"?WeakMap:Map;function KT(e,n,r){r=kn(-1,r),r.tag=3,r.payload={element:null};var i=n.value;return r.callback=function(){ol||(ol=!0,hu=i),nu(e,n)},r}function YT(e,n,r){r=kn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;r.payload=function(){return i(s)},r.callback=function(){nu(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){nu(e,n),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),r}function Mb(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new J2;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(r)||(s.add(r),e=p_.bind(null,e,n,r),n.then(e,e))}function Fb(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pb(e,n,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=kn(-1,1),n.tag=2,dr(r,n,1))),r.lanes|=1),e)}var e_=Un.ReactCurrentOwner,St=!1;function mt(e,n,r,i){n.child=e===null?vT(n,null,r,i):Bi(n,e.child,r,i)}function Ub(e,n,r,i,s){r=r.render;var a=n.ref;return ki(n,s),i=u1(e,n,r,i,a,s),r=h1(),e!==null&&!St?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Fn(e,n,s)):(je&&r&&Ju(n),n.flags|=1,mt(e,n,i,s),n.child)}function Bb(e,n,r,i,s){if(e===null){var a=r.type;return typeof a=="function"&&!S1(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=a,XT(e,n,a,i,s)):(e=Lo(r.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:sa,r(o,i)&&e.ref===n.ref)return Fn(e,n,s)}return n.flags|=1,e=pr(a,i),e.ref=n.ref,e.return=n,n.child=e}function XT(e,n,r,i,s){if(e!==null){var a=e.memoizedProps;if(sa(a,i)&&e.ref===n.ref)if(St=!1,n.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(St=!0);else return n.lanes=e.lanes,Fn(e,n,s)}return ru(e,n,r,i,s)}function ZT(e,n,r){var i=n.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Ai,Rt),Rt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Se(Ai,Rt),Rt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,Se(Ai,Rt),Rt|=i}else a!==null?(i=a.baseLanes|r,n.memoizedState=null):i=r,Se(Ai,Rt),Rt|=i;return mt(e,n,s,r),n.child}function QT(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function ru(e,n,r,i,s){var a=_t(r)?Ur:ut.current;return a=Pi(n,a),ki(n,s),r=u1(e,n,r,i,a,s),i=h1(),e!==null&&!St?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Fn(e,n,s)):(je&&i&&Ju(n),n.flags|=1,mt(e,n,r,s),n.child)}function Hb(e,n,r,i,s){if(_t(r)){var a=!0;Zo(n)}else a=!1;if(ki(n,s),n.stateNode===null)Co(e,n),AT(n,r,i),tu(n,r,i,s),i=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=zt(d):(d=_t(r)?Ur:ut.current,d=Pi(n,d));var h=r.getDerivedStateFromProps,b=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";b||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&kb(n,o,i,d),er=!1;var f=n.memoizedState;o.state=f,nl(n,i,o,s),c=n.memoizedState,l!==i||f!==c||Nt.current||er?(typeof h=="function"&&(eu(n,r,h,i),c=n.memoizedState),(l=er||Cb(n,r,l,i,f,c,d))?(b||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,NT(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:en(n.type,l),o.props=d,b=n.pendingProps,f=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=zt(c):(c=_t(r)?Ur:ut.current,c=Pi(n,c));var _=r.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==b||f!==c)&&kb(n,o,i,c),er=!1,f=n.memoizedState,o.state=f,nl(n,i,o,s);var y=n.memoizedState;l!==b||f!==y||Nt.current||er?(typeof _=="function"&&(eu(n,r,_,i),y=n.memoizedState),(d=er||Cb(n,r,d,i,f,y,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=y),o.props=i,o.state=y,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),i=!1)}return iu(e,n,r,i,a,s)}function iu(e,n,r,i,s,a){QT(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return s&&jb(n,r,!1),Fn(e,n,a);i=n.stateNode,e_.current=n;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=Bi(n,e.child,null,a),n.child=Bi(n,null,l,a)):mt(e,n,l,a),n.memoizedState=i.state,s&&jb(n,r,!0),n.child}function JT(e){var n=e.stateNode;n.pendingContext?Ab(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ab(e,n.context,!1),o1(e,n.containerInfo)}function Gb(e,n,r,i,s){return Ui(),t1(s),n.flags|=256,mt(e,n,r,i),n.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(e){return{baseLanes:e,cachePool:null,transitions:null}}function ey(e,n,r){var i=n.pendingProps,s=we.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Se(we,s&1),e===null)return Qd(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Cl(o,i,0,null),e=Pr(e,i,r,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=au(r),n.memoizedState=su,e):f1(n,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return t_(e,n,o,i,l,s,r);if(a){a=i.fallback,o=n.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&n.child!==s?(i=n.child,i.childLanes=0,i.pendingProps=c,n.deletions=null):(i=pr(s,c),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=pr(l,a):(a=Pr(a,o,r,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?au(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,n.memoizedState=su,i}return a=e.child,e=a.sibling,i=pr(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=r),i.return=n,i.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=i,n.memoizedState=null,i}function f1(e,n){return n=Cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ja(e,n,r,i){return i!==null&&t1(i),Bi(n,e.child,null,r),e=f1(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t_(e,n,r,i,s,a,o){if(r)return n.flags&256?(n.flags&=-257,i=Gc(Error(F(422))),Ja(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,s=n.mode,i=Cl({mode:"visible",children:i.children},s,0,null),a=Pr(a,s,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&Bi(n,e.child,null,o),n.child.memoizedState=au(o),n.memoizedState=su,a);if(!(n.mode&1))return Ja(e,n,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(F(419)),i=Gc(a,i,void 0),Ja(e,n,o,i)}if(l=(o&e.childLanes)!==0,St||l){if(i=Ye,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Mn(e,s),an(i,e,s,-1))}return y1(),i=Gc(Error(F(421))),Ja(e,n,o,i)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=m_.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,It=cr(s.nextSibling),Ct=n,je=!0,rn=null,e!==null&&(Ut[Bt++]=In,Ut[Bt++]=Cn,Ut[Bt++]=Br,In=e.id,Cn=e.overflow,Br=n),n=f1(n,i.children),n.flags|=4096,n)}function $b(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Jd(e.return,n,r)}function $c(e,n,r,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=s)}function ty(e,n,r){var i=n.pendingProps,s=i.revealOrder,a=i.tail;if(mt(e,n,i.children,r),i=we.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$b(e,r,n);else if(e.tag===19)$b(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Se(we,i),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(r=n.child,s=null;r!==null;)e=r.alternate,e!==null&&rl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=n.child,n.child=null):(s=r.sibling,r.sibling=null),$c(n,!1,s,r,a);break;case"backwards":for(r=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&rl(e)===null){n.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}$c(n,!0,r,null,a);break;case"together":$c(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Co(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Gr|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(F(153));if(n.child!==null){for(e=n.child,r=pr(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=pr(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function n_(e,n,r){switch(n.tag){case 3:JT(n),Ui();break;case 5:wT(n);break;case 1:_t(n.type)&&Zo(n);break;case 4:o1(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,s=n.memoizedProps.value;Se(el,i._currentValue),i._currentValue=s;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(Se(we,we.current&1),n.flags|=128,null):r&n.child.childLanes?ey(e,n,r):(Se(we,we.current&1),e=Fn(e,n,r),e!==null?e.sibling:null);Se(we,we.current&1);break;case 19:if(i=(r&n.childLanes)!==0,e.flags&128){if(i)return ty(e,n,r);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(we,we.current),i)break;return null;case 22:case 23:return n.lanes=0,ZT(e,n,r)}return Fn(e,n,r)}var ny,ou,ry,iy;ny=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ou=function(){};ry=function(e,n,r,i){var s=e.memoizedProps;if(s!==i){e=n.stateNode,Lr(En.current);var a=null;switch(r){case"input":s=Rd(e,s),i=Rd(e,i),a=[];break;case"select":s=Ie({},s,{value:void 0}),i=Ie({},i,{value:void 0}),a=[];break;case"textarea":s=kd(e,s),i=kd(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Yo)}Ld(r,i);var o;r=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qs.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var c=i[d];if(l=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&_e("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(n.updateQueue=d)&&(n.flags|=4)}};iy=function(e,n,r,i){r!==i&&(n.flags|=4)};function ms(e,n){if(!je)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function lt(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function r_(e,n,r){var i=n.pendingProps;switch(e1(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return _t(n.type)&&Xo(),lt(n),null;case 3:return i=n.stateNode,Hi(),Ae(Nt),Ae(ut),c1(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Za(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,rn!==null&&(fu(rn),rn=null))),ou(e,n),lt(n),null;case 5:l1(n);var s=Lr(da.current);if(r=n.type,e!==null&&n.stateNode!=null)ry(e,n,r,i,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(F(166));return lt(n),null}if(e=Lr(En.current),Za(n)){i=n.stateNode,r=n.type;var a=n.memoizedProps;switch(i[gn]=n,i[la]=a,e=(n.mode&1)!==0,r){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(s=0;s<ks.length;s++)_e(ks[s],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":Qg(i,a),_e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},_e("invalid",i);break;case"textarea":eb(i,a),_e("invalid",i)}Ld(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Xa(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Xa(i.textContent,l,e),s=["children",""+l]):Qs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",i)}switch(r){case"input":Ga(i),Jg(i,a,!0);break;case"textarea":Ga(i),tb(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Yo)}i=s,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=CE(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[gn]=n,e[la]=i,ny(e,n,!1,!1),n.stateNode=e;e:{switch(o=Dd(r,i),r){case"dialog":_e("cancel",e),_e("close",e),s=i;break;case"iframe":case"object":case"embed":_e("load",e),s=i;break;case"video":case"audio":for(s=0;s<ks.length;s++)_e(ks[s],e);s=i;break;case"source":_e("error",e),s=i;break;case"img":case"image":case"link":_e("error",e),_e("load",e),s=i;break;case"details":_e("toggle",e),s=i;break;case"input":Qg(e,i),s=Rd(e,i),_e("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=Ie({},i,{value:void 0}),_e("invalid",e);break;case"textarea":eb(e,i),s=kd(e,i),_e("invalid",e);break;default:s=i}Ld(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?LE(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kE(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Js(e,c):typeof c=="number"&&Js(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qs.hasOwnProperty(a)?c!=null&&a==="onScroll"&&_e("scroll",e):c!=null&&Uu(e,a,c,o))}switch(r){case"input":Ga(e),Jg(e,i,!1);break;case"textarea":Ga(e),tb(e);break;case"option":i.value!=null&&e.setAttribute("value",""+mr(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?wi(e,!!i.multiple,a,!1):i.defaultValue!=null&&wi(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Yo)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return lt(n),null;case 6:if(e&&n.stateNode!=null)iy(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(F(166));if(r=Lr(da.current),Lr(En.current),Za(n)){if(i=n.stateNode,r=n.memoizedProps,i[gn]=n,(a=i.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:Xa(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,r,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[gn]=n,n.stateNode=i}return lt(n),null;case 13:if(Ae(we),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&It!==null&&n.mode&1&&!(n.flags&128))yT(),Ui(),n.flags|=98560,a=!1;else if(a=Za(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[gn]=n}else Ui(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;lt(n),a=!1}else rn!==null&&(fu(rn),rn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||we.current&1?Ve===0&&(Ve=3):y1())),n.updateQueue!==null&&(n.flags|=4),lt(n),null);case 4:return Hi(),ou(e,n),e===null&&aa(n.stateNode.containerInfo),lt(n),null;case 10:return i1(n.type._context),lt(n),null;case 17:return _t(n.type)&&Xo(),lt(n),null;case 19:if(Ae(we),a=n.memoizedState,a===null)return lt(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)ms(a,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=rl(e),o!==null){for(n.flags|=128,ms(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=r,r=n.child;r!==null;)a=r,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Se(we,we.current&1|2),n.child}e=e.sibling}a.tail!==null&&Pe()>$i&&(n.flags|=128,i=!0,ms(a,!1),n.lanes=4194304)}else{if(!i)if(e=rl(o),e!==null){if(n.flags|=128,i=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),ms(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!je)return lt(n),null}else 2*Pe()-a.renderingStartTime>$i&&r!==1073741824&&(n.flags|=128,i=!0,ms(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(r=a.last,r!==null?r.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Pe(),n.sibling=null,r=we.current,Se(we,i?r&1|2:r&1),n):(lt(n),null);case 22:case 23:return T1(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?Rt&1073741824&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),null;case 24:return null;case 25:return null}throw Error(F(156,n.tag))}function i_(e,n){switch(e1(n),n.tag){case 1:return _t(n.type)&&Xo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(),Ae(Nt),Ae(ut),c1(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return l1(n),null;case 13:if(Ae(we),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(F(340));Ui()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ae(we),null;case 4:return Hi(),null;case 10:return i1(n.type._context),null;case 22:case 23:return T1(),null;case 24:return null;default:return null}}var eo=!1,ct=!1,s_=typeof WeakSet=="function"?WeakSet:Set,z=null;function _i(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Oe(e,n,i)}else r.current=null}function lu(e,n,r){try{r()}catch(i){Oe(e,n,i)}}var zb=!1;function a_(e,n){if(Vd=Wo,e=lT(),Qu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,d=0,h=0,b=e,f=null;t:for(;;){for(var _;b!==r||s!==0&&b.nodeType!==3||(l=o+s),b!==a||i!==0&&b.nodeType!==3||(c=o+i),b.nodeType===3&&(o+=b.nodeValue.length),(_=b.firstChild)!==null;)f=b,b=_;for(;;){if(b===e)break t;if(f===r&&++d===s&&(l=o),f===a&&++h===i&&(c=o),(_=b.nextSibling)!==null)break;b=f,f=b.parentNode}b=_}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wd={focusedElem:e,selectionRange:r},Wo=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var T=y.memoizedProps,A=y.memoizedState,m=n.stateNode,g=m.getSnapshotBeforeUpdate(n.elementType===n.type?T:en(n.type,T),A);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=n.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(x){Oe(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return y=zb,zb=!1,y}function Bs(e,n,r){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&lu(n,r,a)}s=s.next}while(s!==i)}}function Rl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==n)}}function cu(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function sy(e){var n=e.alternate;n!==null&&(e.alternate=null,sy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[la],delete n[Yd],delete n[G2],delete n[$2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ay(e){return e.tag===5||e.tag===3||e.tag===4}function Vb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Yo));else if(i!==4&&(e=e.child,e!==null))for(du(e,n,r),e=e.sibling;e!==null;)du(e,n,r),e=e.sibling}function uu(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(uu(e,n,r),e=e.sibling;e!==null;)uu(e,n,r),e=e.sibling}var Je=null,tn=!1;function Vn(e,n,r){for(r=r.child;r!==null;)oy(e,n,r),r=r.sibling}function oy(e,n,r){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(yl,r)}catch{}switch(r.tag){case 5:ct||_i(r,n);case 6:var i=Je,s=tn;Je=null,Vn(e,n,r),Je=i,tn=s,Je!==null&&(tn?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(tn?(e=Je,r=r.stateNode,e.nodeType===8?Mc(e.parentNode,r):e.nodeType===1&&Mc(e,r),ra(e)):Mc(Je,r.stateNode));break;case 4:i=Je,s=tn,Je=r.stateNode.containerInfo,tn=!0,Vn(e,n,r),Je=i,tn=s;break;case 0:case 11:case 14:case 15:if(!ct&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&lu(r,n,o),s=s.next}while(s!==i)}Vn(e,n,r);break;case 1:if(!ct&&(_i(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){Oe(r,n,l)}Vn(e,n,r);break;case 21:Vn(e,n,r);break;case 22:r.mode&1?(ct=(i=ct)||r.memoizedState!==null,Vn(e,n,r),ct=i):Vn(e,n,r);break;default:Vn(e,n,r)}}function Wb(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new s_),n.forEach(function(i){var s=f_.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Xt(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,tn=!1;break e;case 3:Je=l.stateNode.containerInfo,tn=!0;break e;case 4:Je=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Je===null)throw Error(F(160));oy(a,o,s),Je=null,tn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Oe(s,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ly(n,e),n=n.sibling}function ly(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(n,e),hn(e),i&4){try{Bs(3,e,e.return),Rl(3,e)}catch(T){Oe(e,e.return,T)}try{Bs(5,e,e.return)}catch(T){Oe(e,e.return,T)}}break;case 1:Xt(n,e),hn(e),i&512&&r!==null&&_i(r,r.return);break;case 5:if(Xt(n,e),hn(e),i&512&&r!==null&&_i(r,r.return),e.flags&32){var s=e.stateNode;try{Js(s,"")}catch(T){Oe(e,e.return,T)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&RE(s,a),Dd(l,o);var d=Dd(l,a);for(o=0;o<c.length;o+=2){var h=c[o],b=c[o+1];h==="style"?LE(s,b):h==="dangerouslySetInnerHTML"?kE(s,b):h==="children"?Js(s,b):Uu(s,h,b,d)}switch(l){case"input":Id(s,a);break;case"textarea":IE(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var _=a.value;_!=null?wi(s,!!a.multiple,_,!1):f!==!!a.multiple&&(a.defaultValue!=null?wi(s,!!a.multiple,a.defaultValue,!0):wi(s,!!a.multiple,a.multiple?[]:"",!1))}s[la]=a}catch(T){Oe(e,e.return,T)}}break;case 6:if(Xt(n,e),hn(e),i&4){if(e.stateNode===null)throw Error(F(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(T){Oe(e,e.return,T)}}break;case 3:if(Xt(n,e),hn(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ra(n.containerInfo)}catch(T){Oe(e,e.return,T)}break;case 4:Xt(n,e),hn(e);break;case 13:Xt(n,e),hn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(x1=Pe())),i&4&&Wb(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ct=(d=ct)||h,Xt(n,e),ct=d):Xt(n,e),hn(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(b=z=h;z!==null;){switch(f=z,_=f.child,f.tag){case 0:case 11:case 14:case 15:Bs(4,f,f.return);break;case 1:_i(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,r=f.return;try{n=i,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(T){Oe(i,r,T)}}break;case 5:_i(f,f.return);break;case 22:if(f.memoizedState!==null){Kb(b);continue}}_!==null?(_.return=f,z=_):Kb(b)}h=h.sibling}e:for(h=null,b=e;;){if(b.tag===5){if(h===null){h=b;try{s=b.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=b.stateNode,c=b.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=OE("display",o))}catch(T){Oe(e,e.return,T)}}}else if(b.tag===6){if(h===null)try{b.stateNode.nodeValue=d?"":b.memoizedProps}catch(T){Oe(e,e.return,T)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;h===b&&(h=null),b=b.return}h===b&&(h=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Xt(n,e),hn(e),i&4&&Wb(e);break;case 21:break;default:Xt(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(ay(r)){var i=r;break e}r=r.return}throw Error(F(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Js(s,""),i.flags&=-33);var a=Vb(e);uu(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Vb(e);du(e,l,o);break;default:throw Error(F(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function o_(e,n,r){z=e,cy(e)}function cy(e,n,r){for(var i=(e.mode&1)!==0;z!==null;){var s=z,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||eo;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ct;l=eo;var d=ct;if(eo=o,(ct=c)&&!d)for(z=s;z!==null;)o=z,c=o.child,o.tag===22&&o.memoizedState!==null?Yb(s):c!==null?(c.return=o,z=c):Yb(s);for(;a!==null;)z=a,cy(a),a=a.sibling;z=s,eo=l,ct=d}qb(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,z=a):qb(e)}}function qb(e){for(;z!==null;){var n=z;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ct||Rl(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!ct)if(r===null)i.componentDidMount();else{var s=n.elementType===n.type?r.memoizedProps:en(n.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Ib(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Ib(n,o,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var b=h.dehydrated;b!==null&&ra(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ct||n.flags&512&&cu(n)}catch(f){Oe(n,n.return,f)}}if(n===e){z=null;break}if(r=n.sibling,r!==null){r.return=n.return,z=r;break}z=n.return}}function Kb(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var r=n.sibling;if(r!==null){r.return=n.return,z=r;break}z=n.return}}function Yb(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Rl(4,n)}catch(c){Oe(n,r,c)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var s=n.return;try{i.componentDidMount()}catch(c){Oe(n,s,c)}}var a=n.return;try{cu(n)}catch(c){Oe(n,a,c)}break;case 5:var o=n.return;try{cu(n)}catch(c){Oe(n,o,c)}}}catch(c){Oe(n,n.return,c)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var l_=Math.ceil,al=Un.ReactCurrentDispatcher,g1=Un.ReactCurrentOwner,Gt=Un.ReactCurrentBatchConfig,me=0,Ye=null,He=null,tt=0,Rt=0,Ai=xr(0),Ve=0,ma=null,Gr=0,Il=0,b1=0,Hs=null,yt=null,x1=0,$i=1/0,wn=null,ol=!1,hu=null,ur=null,to=!1,sr=null,ll=0,Gs=0,pu=null,ko=-1,Oo=0;function ft(){return me&6?Pe():ko!==-1?ko:ko=Pe()}function hr(e){return e.mode&1?me&2&&tt!==0?tt&-tt:V2.transition!==null?(Oo===0&&(Oo=WE()),Oo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:JE(e.type)),e):1}function an(e,n,r,i){if(50<Gs)throw Gs=0,pu=null,Error(F(185));Ea(e,r,i),(!(me&2)||e!==Ye)&&(e===Ye&&(!(me&2)&&(Il|=r),Ve===4&&rr(e,tt)),At(e,i),r===1&&me===0&&!(n.mode&1)&&($i=Pe()+500,jl&&Er()))}function At(e,n){var r=e.callbackNode;VN(e,n);var i=Vo(e,e===Ye?tt:0);if(i===0)r!==null&&ib(r),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(r!=null&&ib(r),n===1)e.tag===0?z2(Xb.bind(null,e)):xT(Xb.bind(null,e)),B2(function(){!(me&6)&&Er()}),r=null;else{switch(qE(i)){case 1:r=zu;break;case 4:r=zE;break;case 16:r=zo;break;case 536870912:r=VE;break;default:r=zo}r=by(r,dy.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function dy(e,n){if(ko=-1,Oo=0,me&6)throw Error(F(327));var r=e.callbackNode;if(Oi()&&e.callbackNode!==r)return null;var i=Vo(e,e===Ye?tt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=cl(e,i);else{n=i;var s=me;me|=2;var a=hy();(Ye!==e||tt!==n)&&(wn=null,$i=Pe()+500,Fr(e,n));do try{u_();break}catch(l){uy(e,l)}while(!0);r1(),al.current=a,me=s,He!==null?n=0:(Ye=null,tt=0,n=Ve)}if(n!==0){if(n===2&&(s=Bd(e),s!==0&&(i=s,n=mu(e,s))),n===1)throw r=ma,Fr(e,0),rr(e,i),At(e,Pe()),r;if(n===6)rr(e,i);else{if(s=e.current.alternate,!(i&30)&&!c_(s)&&(n=cl(e,i),n===2&&(a=Bd(e),a!==0&&(i=a,n=mu(e,a))),n===1))throw r=ma,Fr(e,0),rr(e,i),At(e,Pe()),r;switch(e.finishedWork=s,e.finishedLanes=i,n){case 0:case 1:throw Error(F(345));case 2:Rr(e,yt,wn);break;case 3:if(rr(e,i),(i&130023424)===i&&(n=x1+500-Pe(),10<n)){if(Vo(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){ft(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Kd(Rr.bind(null,e,yt,wn),n);break}Rr(e,yt,wn);break;case 4:if(rr(e,i),(i&4194240)===i)break;for(n=e.eventTimes,s=-1;0<i;){var o=31-sn(i);a=1<<o,o=n[o],o>s&&(s=o),i&=~a}if(i=s,i=Pe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*l_(i/1960))-i,10<i){e.timeoutHandle=Kd(Rr.bind(null,e,yt,wn),i);break}Rr(e,yt,wn);break;case 5:Rr(e,yt,wn);break;default:throw Error(F(329))}}}return At(e,Pe()),e.callbackNode===r?dy.bind(null,e):null}function mu(e,n){var r=Hs;return e.current.memoizedState.isDehydrated&&(Fr(e,n).flags|=256),e=cl(e,n),e!==2&&(n=yt,yt=r,n!==null&&fu(n)),e}function fu(e){yt===null?yt=e:yt.push.apply(yt,e)}function c_(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],a=s.getSnapshot;s=s.value;try{if(!on(a(),s))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(e,n){for(n&=~b1,n&=~Il,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-sn(n),i=1<<r;e[r]=-1,n&=~i}}function Xb(e){if(me&6)throw Error(F(327));Oi();var n=Vo(e,0);if(!(n&1))return At(e,Pe()),null;var r=cl(e,n);if(e.tag!==0&&r===2){var i=Bd(e);i!==0&&(n=i,r=mu(e,i))}if(r===1)throw r=ma,Fr(e,0),rr(e,n),At(e,Pe()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rr(e,yt,wn),At(e,Pe()),null}function E1(e,n){var r=me;me|=1;try{return e(n)}finally{me=r,me===0&&($i=Pe()+500,jl&&Er())}}function $r(e){sr!==null&&sr.tag===0&&!(me&6)&&Oi();var n=me;me|=1;var r=Gt.transition,i=ge;try{if(Gt.transition=null,ge=1,e)return e()}finally{ge=i,Gt.transition=r,me=n,!(me&6)&&Er()}}function T1(){Rt=Ai.current,Ae(Ai)}function Fr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,U2(r)),He!==null)for(r=He.return;r!==null;){var i=r;switch(e1(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xo();break;case 3:Hi(),Ae(Nt),Ae(ut),c1();break;case 5:l1(i);break;case 4:Hi();break;case 13:Ae(we);break;case 19:Ae(we);break;case 10:i1(i.type._context);break;case 22:case 23:T1()}r=r.return}if(Ye=e,He=e=pr(e.current,null),tt=Rt=n,Ve=0,ma=null,b1=Il=Gr=0,yt=Hs=null,Or!==null){for(n=0;n<Or.length;n++)if(r=Or[n],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}r.pending=i}Or=null}return e}function uy(e,n){do{var r=He;try{if(r1(),Ro.current=sl,il){for(var i=Re.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}il=!1}if(Hr=0,qe=ze=Re=null,Us=!1,ua=0,g1.current=null,r===null||r.return===null){Ve=1,ma=n,He=null;break}e:{var a=e,o=r.return,l=r,c=n;if(n=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,b=h.tag;if(!(h.mode&1)&&(b===0||b===11||b===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Fb(o);if(_!==null){_.flags&=-257,Pb(_,o,l,a,n),_.mode&1&&Mb(a,d,n),n=_,c=d;var y=n.updateQueue;if(y===null){var T=new Set;T.add(c),n.updateQueue=T}else y.add(c);break e}else{if(!(n&1)){Mb(a,d,n),y1();break e}c=Error(F(426))}}else if(je&&l.mode&1){var A=Fb(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Pb(A,o,l,a,n),t1(Gi(c,l));break e}}a=c=Gi(c,l),Ve!==4&&(Ve=2),Hs===null?Hs=[a]:Hs.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=KT(a,c,n);Rb(a,m);break e;case 1:l=c;var g=a.type,E=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ur===null||!ur.has(E)))){a.flags|=65536,n&=-n,a.lanes|=n;var x=YT(a,l,n);Rb(a,x);break e}}a=a.return}while(a!==null)}my(r)}catch(v){n=v,He===r&&r!==null&&(He=r=r.return);continue}break}while(!0)}function hy(){var e=al.current;return al.current=sl,e===null?sl:e}function y1(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ye===null||!(Gr&268435455)&&!(Il&268435455)||rr(Ye,tt)}function cl(e,n){var r=me;me|=2;var i=hy();(Ye!==e||tt!==n)&&(wn=null,Fr(e,n));do try{d_();break}catch(s){uy(e,s)}while(!0);if(r1(),me=r,al.current=i,He!==null)throw Error(F(261));return Ye=null,tt=0,Ve}function d_(){for(;He!==null;)py(He)}function u_(){for(;He!==null&&!MN();)py(He)}function py(e){var n=gy(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,n===null?my(e):He=n,g1.current=null}function my(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=i_(r,n),r!==null){r.flags&=32767,He=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,He=null;return}}else if(r=r_(r,n,Rt),r!==null){He=r;return}if(n=n.sibling,n!==null){He=n;return}He=n=e}while(n!==null);Ve===0&&(Ve=5)}function Rr(e,n,r){var i=ge,s=Gt.transition;try{Gt.transition=null,ge=1,h_(e,n,r,i)}finally{Gt.transition=s,ge=i}return null}function h_(e,n,r,i){do Oi();while(sr!==null);if(me&6)throw Error(F(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(WN(e,a),e===Ye&&(He=Ye=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||to||(to=!0,by(zo,function(){return Oi(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Gt.transition,Gt.transition=null;var o=ge;ge=1;var l=me;me|=4,g1.current=null,a_(e,r),ly(r,e),k2(Wd),Wo=!!Vd,Wd=Vd=null,e.current=r,o_(r),FN(),me=l,ge=o,Gt.transition=a}else e.current=r;if(to&&(to=!1,sr=e,ll=s),a=e.pendingLanes,a===0&&(ur=null),BN(r.stateNode),At(e,Pe()),n!==null)for(i=e.onRecoverableError,r=0;r<n.length;r++)s=n[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(ol)throw ol=!1,e=hu,hu=null,e;return ll&1&&e.tag!==0&&Oi(),a=e.pendingLanes,a&1?e===pu?Gs++:(Gs=0,pu=e):Gs=0,Er(),null}function Oi(){if(sr!==null){var e=qE(ll),n=Gt.transition,r=ge;try{if(Gt.transition=null,ge=16>e?16:e,sr===null)var i=!1;else{if(e=sr,sr=null,ll=0,me&6)throw Error(F(331));var s=me;for(me|=4,z=e.current;z!==null;){var a=z,o=a.child;if(z.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(z=d;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:Bs(8,h,a)}var b=h.child;if(b!==null)b.return=h,z=b;else for(;z!==null;){h=z;var f=h.sibling,_=h.return;if(sy(h),h===d){z=null;break}if(f!==null){f.return=_,z=f;break}z=_}}}var y=a.alternate;if(y!==null){var T=y.child;if(T!==null){y.child=null;do{var A=T.sibling;T.sibling=null,T=A}while(T!==null)}}z=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,z=o;else e:for(;z!==null;){if(a=z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Bs(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,z=m;break e}z=a.return}}var g=e.current;for(z=g;z!==null;){o=z;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,z=E;else e:for(o=g;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(v){Oe(l,l.return,v)}if(l===o){z=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,z=x;break e}z=l.return}}if(me=s,Er(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(yl,e)}catch{}i=!0}return i}finally{ge=r,Gt.transition=n}}return!1}function Zb(e,n,r){n=Gi(r,n),n=KT(e,n,1),e=dr(e,n,1),n=ft(),e!==null&&(Ea(e,1,n),At(e,n))}function Oe(e,n,r){if(e.tag===3)Zb(e,e,r);else for(;n!==null;){if(n.tag===3){Zb(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){e=Gi(r,e),e=YT(n,e,1),n=dr(n,e,1),e=ft(),n!==null&&(Ea(n,1,e),At(n,e));break}}n=n.return}}function p_(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),n=ft(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(tt&r)===r&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>Pe()-x1?Fr(e,0):b1|=r),At(e,n)}function fy(e,n){n===0&&(e.mode&1?(n=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):n=1);var r=ft();e=Mn(e,n),e!==null&&(Ea(e,n,r),At(e,r))}function m_(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),fy(e,r)}function f_(e,n){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(F(314))}i!==null&&i.delete(n),fy(e,r)}var gy;gy=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Nt.current)St=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return St=!1,n_(e,n,r);St=!!(e.flags&131072)}else St=!1,je&&n.flags&1048576&&ET(n,Jo,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Co(e,n),e=n.pendingProps;var s=Pi(n,ut.current);ki(n,r),s=u1(null,n,i,e,s,r);var a=h1();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_t(i)?(a=!0,Zo(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,a1(n),s.updater=vl,n.stateNode=s,s._reactInternals=n,tu(n,i,e,r),n=iu(null,n,i,!0,a,r)):(n.tag=0,je&&a&&Ju(n),mt(null,n,s,r),n=n.child),n;case 16:i=n.elementType;e:{switch(Co(e,n),e=n.pendingProps,s=i._init,i=s(i._payload),n.type=i,s=n.tag=b_(i),e=en(i,e),s){case 0:n=ru(null,n,i,e,r);break e;case 1:n=Hb(null,n,i,e,r);break e;case 11:n=Ub(null,n,i,e,r);break e;case 14:n=Bb(null,n,i,en(i.type,e),r);break e}throw Error(F(306,i,""))}return n;case 0:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:en(i,s),ru(e,n,i,s,r);case 1:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:en(i,s),Hb(e,n,i,s,r);case 3:e:{if(JT(n),e===null)throw Error(F(387));i=n.pendingProps,a=n.memoizedState,s=a.element,NT(e,n),nl(n,i,null,r);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=Gi(Error(F(423)),n),n=Gb(e,n,i,r,s);break e}else if(i!==s){s=Gi(Error(F(424)),n),n=Gb(e,n,i,r,s);break e}else for(It=cr(n.stateNode.containerInfo.firstChild),Ct=n,je=!0,rn=null,r=vT(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ui(),i===s){n=Fn(e,n,r);break e}mt(e,n,i,r)}n=n.child}return n;case 5:return wT(n),e===null&&Qd(n),i=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,qd(i,s)?o=null:a!==null&&qd(i,a)&&(n.flags|=32),QT(e,n),mt(e,n,o,r),n.child;case 6:return e===null&&Qd(n),null;case 13:return ey(e,n,r);case 4:return o1(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Bi(n,null,i,r):mt(e,n,i,r),n.child;case 11:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:en(i,s),Ub(e,n,i,s,r);case 7:return mt(e,n,n.pendingProps,r),n.child;case 8:return mt(e,n,n.pendingProps.children,r),n.child;case 12:return mt(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(i=n.type._context,s=n.pendingProps,a=n.memoizedProps,o=s.value,Se(el,i._currentValue),i._currentValue=o,a!==null)if(on(a.value,o)){if(a.children===s.children&&!Nt.current){n=Fn(e,n,r);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=kn(-1,r&-r),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Jd(a.return,r,n),l.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Jd(o,r,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}mt(e,n,s.children,r),n=n.child}return n;case 9:return s=n.type,i=n.pendingProps.children,ki(n,r),s=zt(s),i=i(s),n.flags|=1,mt(e,n,i,r),n.child;case 14:return i=n.type,s=en(i,n.pendingProps),s=en(i.type,s),Bb(e,n,i,s,r);case 15:return XT(e,n,n.type,n.pendingProps,r);case 17:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:en(i,s),Co(e,n),n.tag=1,_t(i)?(e=!0,Zo(n)):e=!1,ki(n,r),AT(n,i,s),tu(n,i,s,r),iu(null,n,i,!0,e,r);case 19:return ty(e,n,r);case 22:return ZT(e,n,r)}throw Error(F(156,n.tag))};function by(e,n){return $E(e,n)}function g_(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,n,r,i){return new g_(e,n,r,i)}function S1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b_(e){if(typeof e=="function")return S1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Gu)return 14}return 2}function pr(e,n){var r=e.alternate;return r===null?(r=Ht(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Lo(e,n,r,i,s,a){var o=2;if(i=e,typeof e=="function")S1(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fi:return Pr(r.children,s,a,n);case Bu:o=8,s|=8;break;case Ad:return e=Ht(12,r,n,s|2),e.elementType=Ad,e.lanes=a,e;case jd:return e=Ht(13,r,n,s),e.elementType=jd,e.lanes=a,e;case vd:return e=Ht(19,r,n,s),e.elementType=vd,e.lanes=a,e;case jE:return Cl(r,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _E:o=10;break e;case AE:o=9;break e;case Hu:o=11;break e;case Gu:o=14;break e;case Jn:o=16,i=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return n=Ht(o,r,n,s),n.elementType=e,n.type=i,n.lanes=a,n}function Pr(e,n,r,i){return e=Ht(7,e,i,n),e.lanes=r,e}function Cl(e,n,r,i){return e=Ht(22,e,i,n),e.elementType=jE,e.lanes=r,e.stateNode={isHidden:!1},e}function zc(e,n,r){return e=Ht(6,e,null,n),e.lanes=r,e}function Vc(e,n,r){return n=Ht(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function x_(e,n,r,i,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function N1(e,n,r,i,s,a,o,l,c){return e=new x_(e,n,r,l,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ht(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},a1(a),e}function E_(e,n,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:i==null?null:""+i,children:e,containerInfo:n,implementation:r}}function xy(e){if(!e)return fr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(F(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_t(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(_t(r))return bT(e,r,n)}return n}function Ey(e,n,r,i,s,a,o,l,c){return e=N1(r,i,!0,e,s,a,o,l,c),e.context=xy(null),r=e.current,i=ft(),s=hr(r),a=kn(i,s),a.callback=n??null,dr(r,a,s),e.current.lanes=s,Ea(e,s,i),At(e,i),e}function kl(e,n,r,i){var s=n.current,a=ft(),o=hr(s);return r=xy(r),n.context===null?n.context=r:n.pendingContext=r,n=kn(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=dr(s,n,o),e!==null&&(an(e,s,o,a),wo(e,s,o)),o}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function _1(e,n){Qb(e,n),(e=e.alternate)&&Qb(e,n)}function T_(){return null}var Ty=typeof reportError=="function"?reportError:function(e){console.error(e)};function A1(e){this._internalRoot=e}Ol.prototype.render=A1.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(F(409));kl(e,n,null,null)};Ol.prototype.unmount=A1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$r(function(){kl(null,e,null,null)}),n[Dn]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var n=XE();e={blockedOn:null,target:e,priority:n};for(var r=0;r<nr.length&&n!==0&&n<nr[r].priority;r++);nr.splice(r,0,e),r===0&&QE(e)}};function j1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jb(){}function y_(e,n,r,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var d=dl(o);a.call(d)}}var o=Ey(n,i,e,0,null,!1,!1,"",Jb);return e._reactRootContainer=o,e[Dn]=o.current,aa(e.nodeType===8?e.parentNode:e),$r(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var d=dl(c);l.call(d)}}var c=N1(e,0,!1,null,null,!1,!1,"",Jb);return e._reactRootContainer=c,e[Dn]=c.current,aa(e.nodeType===8?e.parentNode:e),$r(function(){kl(n,c,r,i)}),c}function Dl(e,n,r,i,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=dl(o);l.call(c)}}kl(n,o,e,s)}else o=y_(r,n,e,s,i);return dl(o)}KE=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Cs(n.pendingLanes);r!==0&&(Vu(n,r|1),At(n,Pe()),!(me&6)&&($i=Pe()+500,Er()))}break;case 13:$r(function(){var i=Mn(e,1);if(i!==null){var s=ft();an(i,e,1,s)}}),_1(e,1)}};Wu=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var r=ft();an(n,e,134217728,r)}_1(e,134217728)}};YE=function(e){if(e.tag===13){var n=hr(e),r=Mn(e,n);if(r!==null){var i=ft();an(r,e,n,i)}_1(e,n)}};XE=function(){return ge};ZE=function(e,n){var r=ge;try{return ge=e,n()}finally{ge=r}};Fd=function(e,n,r){switch(n){case"input":if(Id(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var s=Al(i);if(!s)throw Error(F(90));wE(i),Id(i,s)}}}break;case"textarea":IE(e,r);break;case"select":n=r.value,n!=null&&wi(e,!!r.multiple,n,!1)}};FE=E1;PE=$r;var S_={usingClientEntryPoint:!1,Events:[ya,Ei,Al,DE,ME,E1]},fs={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N_={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=HE(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{yl=no.inject(N_),xn=no}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S_;Ot.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j1(n))throw Error(F(200));return E_(e,n,null,r)};Ot.createRoot=function(e,n){if(!j1(e))throw Error(F(299));var r=!1,i="",s=Ty;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=N1(e,1,!1,null,null,r,!1,i,s),e[Dn]=n.current,aa(e.nodeType===8?e.parentNode:e),new A1(n)};Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=HE(n),e=e===null?null:e.stateNode,e};Ot.flushSync=function(e){return $r(e)};Ot.hydrate=function(e,n,r){if(!Ll(n))throw Error(F(200));return Dl(null,e,n,!0,r)};Ot.hydrateRoot=function(e,n,r){if(!j1(e))throw Error(F(405));var i=r!=null&&r.hydratedSources||null,s=!1,a="",o=Ty;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),n=Ey(n,null,e,1,r??null,s,!1,a,o),e[Dn]=n.current,aa(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,s]:n.mutableSourceEagerHydrationData.push(r,s);return new Ol(n)};Ot.render=function(e,n,r){if(!Ll(n))throw Error(F(200));return Dl(null,e,n,!1,r)};Ot.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(F(40));return e._reactRootContainer?($r(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};Ot.unstable_batchedUpdates=E1;Ot.unstable_renderSubtreeIntoContainer=function(e,n,r,i){if(!Ll(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Dl(e,n,r,!1,i)};Ot.version="18.2.0-next-9e3b772b8-20220608";function yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)}catch(e){console.error(e)}}yy(),EE.exports=Ot;var v1=EE.exports;const __=Vi(v1),A_=lE({__proto__:null,default:__},[v1]);var ex=v1;Nd.createRoot=ex.createRoot,Nd.hydrateRoot=ex.hydrateRoot;/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Le.apply(this,arguments)}var Me;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Me||(Me={}));const tx="popstate";function j_(e){e===void 0&&(e={});function n(i,s){let{pathname:a,search:o,hash:l}=i.location;return fa("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Vr(s)}return w_(n,r,null,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function zr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function v_(){return Math.random().toString(36).substr(2,8)}function nx(e,n){return{usr:e.state,key:e.key,idx:n}}function fa(e,n,r,i){return r===void 0&&(r=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Bn(n):n,{state:r,key:n&&n.key||i||v_()})}function Vr(e){let{pathname:n="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Bn(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function w_(e,n,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,l=Me.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(Le({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function b(){l=Me.Pop;let A=h(),m=A==null?null:A-d;d=A,c&&c({action:l,location:T.location,delta:m})}function f(A,m){l=Me.Push;let g=fa(T.location,A,m);r&&r(g,A),d=h()+1;let E=nx(g,d),x=T.createHref(g);try{o.pushState(E,"",x)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;s.location.assign(x)}a&&c&&c({action:l,location:T.location,delta:1})}function _(A,m){l=Me.Replace;let g=fa(T.location,A,m);r&&r(g,A),d=h();let E=nx(g,d),x=T.createHref(g);o.replaceState(E,"",x),a&&c&&c({action:l,location:T.location,delta:0})}function y(A){let m=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof A=="string"?A:Vr(A);return ne(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let T={get action(){return l},get location(){return e(s,o)},listen(A){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(tx,b),c=A,()=>{s.removeEventListener(tx,b),c=null}},createHref(A){return n(s,A)},createURL:y,encodeLocation(A){let m=y(A);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(A){return o.go(A)}};return T}var Fe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fe||(Fe={}));const R_=new Set(["lazy","caseSensitive","path","id","index","children"]);function I_(e){return e.index===!0}function gu(e,n,r,i){return r===void 0&&(r=[]),i===void 0&&(i={}),e.map((s,a)=>{let o=[...r,a],l=typeof s.id=="string"?s.id:o.join("-");if(ne(s.index!==!0||!s.children,"Cannot specify children on an index route"),ne(!i[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),I_(s)){let c=Le({},s,n(s),{id:l});return i[l]=c,c}else{let c=Le({},s,n(s),{id:l,children:void 0});return i[l]=c,s.children&&(c.children=gu(s.children,n,o,i)),c}})}function ji(e,n,r){r===void 0&&(r="/");let i=typeof n=="string"?Bn(n):n,s=gr(i.pathname||"/",r);if(s==null)return null;let a=Sy(e);k_(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=H_(a[l],$_(s));return o}function C_(e,n){let{route:r,pathname:i,params:s}=e;return{id:r.id,pathname:i,params:s,data:n[r.id],handle:r.handle}}function Sy(e,n,r,i){n===void 0&&(n=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(ne(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=On([i,c.relativePath]),h=r.concat(c);a.children&&a.children.length>0&&(ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Sy(a.children,n,h,d)),!(a.path==null&&!a.index)&&n.push({path:d,score:U_(d,a.index),routesMeta:h})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of Ny(a.path))s(a,o,c)}),n}function Ny(e){let n=e.split("/");if(n.length===0)return[];let[r,...i]=n,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=Ny(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function k_(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:B_(n.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const O_=/^:\w+$/,L_=3,D_=2,M_=1,F_=10,P_=-2,rx=e=>e==="*";function U_(e,n){let r=e.split("/"),i=r.length;return r.some(rx)&&(i+=P_),n&&(i+=D_),r.filter(s=>!rx(s)).reduce((s,a)=>s+(O_.test(a)?L_:a===""?M_:F_),i)}function B_(e,n){return e.length===n.length&&e.slice(0,-1).every((i,s)=>i===n[s])?e[e.length-1]-n[n.length-1]:0}function H_(e,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],c=o===r.length-1,d=s==="/"?n:n.slice(s.length)||"/",h=ul({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d);if(!h)return null;Object.assign(i,h.params);let b=l.route;a.push({params:i,pathname:On([s,h.pathname]),pathnameBase:q_(On([s,h.pathnameBase])),route:b}),h.pathnameBase!=="/"&&(s=On([s,h.pathnameBase]))}return a}function ul(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=G_(e.path,e.caseSensitive,e.end),s=n.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((d,h,b)=>{let{paramName:f,isOptional:_}=h;if(f==="*"){let T=l[b]||"";o=a.slice(0,a.length-T.length).replace(/(.)\/+$/,"$1")}const y=l[b];return _&&!y?d[f]=void 0:d[f]=z_(y||"",f),d},{}),pathname:a,pathnameBase:o,pattern:e}}function G_(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function $_(e){try{return decodeURI(e)}catch(n){return zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function z_(e,n){try{return decodeURIComponent(e)}catch(r){return zr(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function gr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function V_(e,n){n===void 0&&(n="/");let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?Bn(e):e;return{pathname:r?r.startsWith("/")?r:W_(r,n):n,search:K_(i),hash:Y_(s)}}function W_(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Wc(e,n,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ml(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function w1(e,n,r,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Bn(e):(s=Le({},e),ne(!s.pathname||!s.pathname.includes("?"),Wc("?","pathname","search",s)),ne(!s.pathname||!s.pathname.includes("#"),Wc("#","pathname","hash",s)),ne(!s.search||!s.search.includes("#"),Wc("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else if(i){let b=n[n.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),b.pop();s.pathname=f.join("/")}l="/"+b.join("/")}else{let b=n.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),b-=1;s.pathname=f.join("/")}l=b>=0?n[b]:"/"}let c=V_(s,l),d=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const On=e=>e.join("/").replace(/\/\/+/g,"/"),q_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class R1{constructor(n,r,i,s){s===void 0&&(s=!1),this.status=n,this.statusText=r||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function _y(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ay=["post","put","patch","delete"],X_=new Set(Ay),Z_=["get",...Ay],Q_=new Set(Z_),J_=new Set([301,302,303,307,308]),eA=new Set([307,308]),qc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),vy="remix-router-transitions";function rA(e){const n=e.window?e.window:typeof window<"u"?window:void 0,r=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",i=!r;ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;s=I=>({hasErrorBoundary:w(I)})}else s=nA;let a={},o=gu(e.routes,s,void 0,a),l,c=e.basename||"/",d=Le({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),h=null,b=new Set,f=null,_=null,y=null,T=e.hydrationData!=null,A=ji(o,e.history.location,c),m=null;if(A==null){let w=Ft(404,{pathname:e.history.location.pathname}),{matches:I,route:O}=ux(o);A=I,m={[O.id]:w}}let g=!A.some(w=>w.route.lazy)&&(!A.some(w=>w.route.loader)||e.hydrationData!=null),E,x={historyAction:e.history.action,location:e.history.location,matches:A,initialized:g,navigation:qc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},v=Me.Pop,R=!1,j,C=!1,M=new Map,B=null,Q=!1,Y=!1,ie=[],De=[],de=new Map,Ze=0,Ce=-1,G=new Map,q=new Set,K=new Map,ue=new Map,fe=new Set,xt=new Map,ht=new Map,Sr=!1;function yn(){if(h=e.history.listen(w=>{let{action:I,location:O,delta:$}=w;if(Sr){Sr=!1;return}zr(ht.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Gg({currentLocation:x.location,nextLocation:O,historyAction:I});if(W&&$!=null){Sr=!0,e.history.go($*-1),Pa(W,{state:"blocked",location:O,proceed(){Pa(W,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go($)},reset(){let re=new Map(x.blockers);re.set(W,gs),vt({blockers:re})}});return}return Nr(I,O)}),r){mA(n,M);let w=()=>fA(n,M);n.addEventListener("pagehide",w),B=()=>n.removeEventListener("pagehide",w)}return x.initialized||Nr(Me.Pop,x.location),E}function ri(){h&&h(),B&&B(),b.clear(),j&&j.abort(),x.fetchers.forEach((w,I)=>Fa(I)),x.blockers.forEach((w,I)=>Hg(I))}function BS(w){return b.add(w),()=>b.delete(w)}function vt(w,I){I===void 0&&(I={}),x=Le({},x,w);let O=[],$=[];d.v7_fetcherPersist&&x.fetchers.forEach((W,re)=>{W.state==="idle"&&(fe.has(re)?$.push(re):O.push(re))}),[...b].forEach(W=>W(x,{deletedFetchers:$,unstable_viewTransitionOpts:I.viewTransitionOpts,unstable_flushSync:I.flushSync===!0})),d.v7_fetcherPersist&&(O.forEach(W=>x.fetchers.delete(W)),$.forEach(W=>Fa(W)))}function is(w,I,O){var $,W;let{flushSync:re}=O===void 0?{}:O,ee=x.actionData!=null&&x.navigation.formMethod!=null&&nn(x.navigation.formMethod)&&x.navigation.state==="loading"&&(($=w.state)==null?void 0:$._isRedirect)!==!0,J;I.actionData?Object.keys(I.actionData).length>0?J=I.actionData:J=null:ee?J=x.actionData:J=null;let X=I.loaderData?dx(x.loaderData,I.loaderData,I.matches||[],I.errors):x.loaderData,he=x.blockers;he.size>0&&(he=new Map(he),he.forEach((Ee,ve)=>he.set(ve,gs)));let Qe=R===!0||x.navigation.formMethod!=null&&nn(x.navigation.formMethod)&&((W=w.state)==null?void 0:W._isRedirect)!==!0;l&&(o=l,l=void 0),Q||v===Me.Pop||(v===Me.Push?e.history.push(w,w.state):v===Me.Replace&&e.history.replace(w,w.state));let se;if(v===Me.Pop){let Ee=M.get(x.location.pathname);Ee&&Ee.has(w.pathname)?se={currentLocation:x.location,nextLocation:w}:M.has(w.pathname)&&(se={currentLocation:w,nextLocation:x.location})}else if(C){let Ee=M.get(x.location.pathname);Ee?Ee.add(w.pathname):(Ee=new Set([w.pathname]),M.set(x.location.pathname,Ee)),se={currentLocation:x.location,nextLocation:w}}vt(Le({},I,{actionData:J,loaderData:X,historyAction:v,location:w,initialized:!0,navigation:qc,revalidation:"idle",restoreScrollPosition:zg(w,I.matches||x.matches),preventScrollReset:Qe,blockers:he}),{viewTransitionOpts:se,flushSync:re===!0}),v=Me.Pop,R=!1,C=!1,Q=!1,Y=!1,ie=[],De=[]}async function Dg(w,I){if(typeof w=="number"){e.history.go(w);return}let O=bu(x.location,x.matches,c,d.v7_prependBasename,w,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:$,submission:W,error:re}=ix(d.v7_normalizeFormMethod,!1,O,I),ee=x.location,J=fa(x.location,$,I&&I.state);J=Le({},J,e.history.encodeLocation(J));let X=I&&I.replace!=null?I.replace:void 0,he=Me.Push;X===!0?he=Me.Replace:X===!1||W!=null&&nn(W.formMethod)&&W.formAction===x.location.pathname+x.location.search&&(he=Me.Replace);let Qe=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,se=(I&&I.unstable_flushSync)===!0,Ee=Gg({currentLocation:ee,nextLocation:J,historyAction:he});if(Ee){Pa(Ee,{state:"blocked",location:J,proceed(){Pa(Ee,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),Dg(w,I)},reset(){let ve=new Map(x.blockers);ve.set(Ee,gs),vt({blockers:ve})}});return}return await Nr(he,J,{submission:W,pendingError:re,preventScrollReset:Qe,replace:I&&I.replace,enableViewTransition:I&&I.unstable_viewTransition,flushSync:se})}function HS(){if(mc(),vt({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Nr(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Nr(v||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Nr(w,I,O){j&&j.abort(),j=null,v=w,Q=(O&&O.startUninterruptedRevalidation)===!0,XS(x.location,x.matches),R=(O&&O.preventScrollReset)===!0,C=(O&&O.enableViewTransition)===!0;let $=l||o,W=O&&O.overrideNavigation,re=ji($,I,c),ee=(O&&O.flushSync)===!0;if(!re){let ve=Ft(404,{pathname:I.pathname}),{matches:pt,route:un}=ux($);fc(),is(I,{matches:pt,loaderData:{},errors:{[un.id]:ve}},{flushSync:ee});return}if(x.initialized&&!Y&&lA(x.location,I)&&!(O&&O.submission&&nn(O.submission.formMethod))){is(I,{matches:re},{flushSync:ee});return}j=new AbortController;let J=xs(e.history,I,j.signal,O&&O.submission),X,he;if(O&&O.pendingError)he={[$s(re).route.id]:O.pendingError};else if(O&&O.submission&&nn(O.submission.formMethod)){let ve=await GS(J,I,O.submission,re,{replace:O.replace,flushSync:ee});if(ve.shortCircuited)return;X=ve.pendingActionData,he=ve.pendingActionError,W=Kc(I,O.submission),ee=!1,J=new Request(J.url,{signal:J.signal})}let{shortCircuited:Qe,loaderData:se,errors:Ee}=await $S(J,I,re,W,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,ee,X,he);Qe||(j=null,is(I,Le({matches:re},X?{actionData:X}:{},{loaderData:se,errors:Ee})))}async function GS(w,I,O,$,W){W===void 0&&(W={}),mc();let re=hA(I,O);vt({navigation:re},{flushSync:W.flushSync===!0});let ee,J=Eu($,I);if(!J.route.action&&!J.route.lazy)ee={type:Fe.error,error:Ft(405,{method:w.method,pathname:I.pathname,routeId:J.route.id})};else if(ee=await bs("action",w,J,$,a,s,c),w.signal.aborted)return{shortCircuited:!0};if(Li(ee)){let X;return W&&W.replace!=null?X=W.replace:X=ee.location===x.location.pathname+x.location.search,await ss(x,ee,{submission:O,replace:X}),{shortCircuited:!0}}if(zs(ee)){let X=$s($,J.route.id);return(W&&W.replace)!==!0&&(v=Me.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:ee.error}}}if(Dr(ee))throw Ft(400,{type:"defer-action"});return{pendingActionData:{[J.route.id]:ee.data}}}async function $S(w,I,O,$,W,re,ee,J,X,he){let Qe=$||Kc(I,W),se=W||re||mx(Qe),Ee=l||o,[ve,pt]=sx(e.history,x,O,se,I,Y,ie,De,K,q,Ee,c,X,he);if(fc(Te=>!(O&&O.some(Dt=>Dt.route.id===Te))||ve&&ve.some(Dt=>Dt.route.id===Te)),Ce=++Ze,ve.length===0&&pt.length===0){let Te=Ug();return is(I,Le({matches:O,loaderData:{},errors:he||null},X?{actionData:X}:{},Te?{fetchers:new Map(x.fetchers)}:{}),{flushSync:J}),{shortCircuited:!0}}if(!Q){pt.forEach(Dt=>{let Ue=x.fetchers.get(Dt.key),_r=Es(void 0,Ue?Ue.data:void 0);x.fetchers.set(Dt.key,_r)});let Te=X||x.actionData;vt(Le({navigation:Qe},Te?Object.keys(Te).length===0?{actionData:null}:{actionData:Te}:{},pt.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:J})}pt.forEach(Te=>{de.has(Te.key)&&zn(Te.key),Te.controller&&de.set(Te.key,Te.controller)});let un=()=>pt.forEach(Te=>zn(Te.key));j&&j.signal.addEventListener("abort",un);let{results:os,loaderResults:gc,fetcherResults:ii}=await Mg(x.matches,O,ve,pt,w);if(w.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",un),pt.forEach(Te=>de.delete(Te.key));let Yt=hx(os);if(Yt){if(Yt.idx>=ve.length){let Te=pt[Yt.idx-ve.length].key;q.add(Te)}return await ss(x,Yt.result,{replace:ee}),{shortCircuited:!0}}let{loaderData:Ua,errors:bc}=cx(x,O,ve,gc,he,pt,ii,xt);xt.forEach((Te,Dt)=>{Te.subscribe(Ue=>{(Ue||Te.done)&&xt.delete(Dt)})});let xc=Ug(),Ec=Bg(Ce),si=xc||Ec||pt.length>0;return Le({loaderData:Ua,errors:bc},si?{fetchers:new Map(x.fetchers)}:{})}function zS(w,I,O,$){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(w)&&zn(w);let W=($&&$.unstable_flushSync)===!0,re=l||o,ee=bu(x.location,x.matches,c,d.v7_prependBasename,O,I,$==null?void 0:$.relative),J=ji(re,ee,c);if(!J){as(w,I,Ft(404,{pathname:ee}),{flushSync:W});return}let{path:X,submission:he,error:Qe}=ix(d.v7_normalizeFormMethod,!0,ee,$);if(Qe){as(w,I,Qe,{flushSync:W});return}let se=Eu(J,X);if(R=($&&$.preventScrollReset)===!0,he&&nn(he.formMethod)){VS(w,I,X,se,J,W,he);return}K.set(w,{routeId:I,path:X}),WS(w,I,X,se,J,W,he)}async function VS(w,I,O,$,W,re,ee){if(mc(),K.delete(w),!$.route.action&&!$.route.lazy){let Ue=Ft(405,{method:ee.formMethod,pathname:O,routeId:I});as(w,I,Ue,{flushSync:re});return}let J=x.fetchers.get(w);$n(w,pA(ee,J),{flushSync:re});let X=new AbortController,he=xs(e.history,O,X.signal,ee);de.set(w,X);let Qe=Ze,se=await bs("action",he,$,W,a,s,c);if(he.signal.aborted){de.get(w)===X&&de.delete(w);return}if(fe.has(w)){$n(w,Xn(void 0));return}if(Li(se))if(de.delete(w),Ce>Qe){$n(w,Xn(void 0));return}else return q.add(w),$n(w,Es(ee)),ss(x,se,{fetcherSubmission:ee});if(zs(se)){as(w,I,se.error);return}if(Dr(se))throw Ft(400,{type:"defer-action"});let Ee=x.navigation.location||x.location,ve=xs(e.history,Ee,X.signal),pt=l||o,un=x.navigation.state!=="idle"?ji(pt,x.navigation.location,c):x.matches;ne(un,"Didn't find any matches after fetcher action");let os=++Ze;G.set(w,os);let gc=Es(ee,se.data);x.fetchers.set(w,gc);let[ii,Yt]=sx(e.history,x,un,ee,Ee,Y,ie,De,K,q,pt,c,{[$.route.id]:se.data},void 0);Yt.filter(Ue=>Ue.key!==w).forEach(Ue=>{let _r=Ue.key,Vg=x.fetchers.get(_r),QS=Es(void 0,Vg?Vg.data:void 0);x.fetchers.set(_r,QS),de.has(_r)&&zn(_r),Ue.controller&&de.set(_r,Ue.controller)}),vt({fetchers:new Map(x.fetchers)});let Ua=()=>Yt.forEach(Ue=>zn(Ue.key));X.signal.addEventListener("abort",Ua);let{results:bc,loaderResults:xc,fetcherResults:Ec}=await Mg(x.matches,un,ii,Yt,ve);if(X.signal.aborted)return;X.signal.removeEventListener("abort",Ua),G.delete(w),de.delete(w),Yt.forEach(Ue=>de.delete(Ue.key));let si=hx(bc);if(si){if(si.idx>=ii.length){let Ue=Yt[si.idx-ii.length].key;q.add(Ue)}return ss(x,si.result)}let{loaderData:Te,errors:Dt}=cx(x,x.matches,ii,xc,void 0,Yt,Ec,xt);if(x.fetchers.has(w)){let Ue=Xn(se.data);x.fetchers.set(w,Ue)}Bg(os),x.navigation.state==="loading"&&os>Ce?(ne(v,"Expected pending action"),j&&j.abort(),is(x.navigation.location,{matches:un,loaderData:Te,errors:Dt,fetchers:new Map(x.fetchers)})):(vt({errors:Dt,loaderData:dx(x.loaderData,Te,un,Dt),fetchers:new Map(x.fetchers)}),Y=!1)}async function WS(w,I,O,$,W,re,ee){let J=x.fetchers.get(w);$n(w,Es(ee,J?J.data:void 0),{flushSync:re});let X=new AbortController,he=xs(e.history,O,X.signal);de.set(w,X);let Qe=Ze,se=await bs("loader",he,$,W,a,s,c);if(Dr(se)&&(se=await Iy(se,he.signal,!0)||se),de.get(w)===X&&de.delete(w),!he.signal.aborted){if(fe.has(w)){$n(w,Xn(void 0));return}if(Li(se))if(Ce>Qe){$n(w,Xn(void 0));return}else{q.add(w),await ss(x,se);return}if(zs(se)){as(w,I,se.error);return}ne(!Dr(se),"Unhandled fetcher deferred data"),$n(w,Xn(se.data))}}async function ss(w,I,O){let{submission:$,fetcherSubmission:W,replace:re}=O===void 0?{}:O;I.revalidate&&(Y=!0);let ee=fa(w.location,I.location,{_isRedirect:!0});if(ne(ee,"Expected a location on the redirect navigation"),r){let Ee=!1;if(I.reloadDocument)Ee=!0;else if(jy.test(I.location)){const ve=e.history.createURL(I.location);Ee=ve.origin!==n.location.origin||gr(ve.pathname,c)==null}if(Ee){re?n.location.replace(I.location):n.location.assign(I.location);return}}j=null;let J=re===!0?Me.Replace:Me.Push,{formMethod:X,formAction:he,formEncType:Qe}=w.navigation;!$&&!W&&X&&he&&Qe&&($=mx(w.navigation));let se=$||W;if(eA.has(I.status)&&se&&nn(se.formMethod))await Nr(J,ee,{submission:Le({},se,{formAction:I.location}),preventScrollReset:R});else{let Ee=Kc(ee,$);await Nr(J,ee,{overrideNavigation:Ee,fetcherSubmission:W,preventScrollReset:R})}}async function Mg(w,I,O,$,W){let re=await Promise.all([...O.map(X=>bs("loader",W,X,I,a,s,c)),...$.map(X=>X.matches&&X.match&&X.controller?bs("loader",xs(e.history,X.path,X.controller.signal),X.match,X.matches,a,s,c):{type:Fe.error,error:Ft(404,{pathname:X.path})})]),ee=re.slice(0,O.length),J=re.slice(O.length);return await Promise.all([px(w,O,ee,ee.map(()=>W.signal),!1,x.loaderData),px(w,$.map(X=>X.match),J,$.map(X=>X.controller?X.controller.signal:null),!0)]),{results:re,loaderResults:ee,fetcherResults:J}}function mc(){Y=!0,ie.push(...fc()),K.forEach((w,I)=>{de.has(I)&&(De.push(I),zn(I))})}function $n(w,I,O){O===void 0&&(O={}),x.fetchers.set(w,I),vt({fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function as(w,I,O,$){$===void 0&&($={});let W=$s(x.matches,I);Fa(w),vt({errors:{[W.route.id]:O},fetchers:new Map(x.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Fg(w){return d.v7_fetcherPersist&&(ue.set(w,(ue.get(w)||0)+1),fe.has(w)&&fe.delete(w)),x.fetchers.get(w)||tA}function Fa(w){let I=x.fetchers.get(w);de.has(w)&&!(I&&I.state==="loading"&&G.has(w))&&zn(w),K.delete(w),G.delete(w),q.delete(w),fe.delete(w),x.fetchers.delete(w)}function qS(w){if(d.v7_fetcherPersist){let I=(ue.get(w)||0)-1;I<=0?(ue.delete(w),fe.add(w)):ue.set(w,I)}else Fa(w);vt({fetchers:new Map(x.fetchers)})}function zn(w){let I=de.get(w);ne(I,"Expected fetch controller: "+w),I.abort(),de.delete(w)}function Pg(w){for(let I of w){let O=Fg(I),$=Xn(O.data);x.fetchers.set(I,$)}}function Ug(){let w=[],I=!1;for(let O of q){let $=x.fetchers.get(O);ne($,"Expected fetcher: "+O),$.state==="loading"&&(q.delete(O),w.push(O),I=!0)}return Pg(w),I}function Bg(w){let I=[];for(let[O,$]of G)if($<w){let W=x.fetchers.get(O);ne(W,"Expected fetcher: "+O),W.state==="loading"&&(zn(O),G.delete(O),I.push(O))}return Pg(I),I.length>0}function KS(w,I){let O=x.blockers.get(w)||gs;return ht.get(w)!==I&&ht.set(w,I),O}function Hg(w){x.blockers.delete(w),ht.delete(w)}function Pa(w,I){let O=x.blockers.get(w)||gs;ne(O.state==="unblocked"&&I.state==="blocked"||O.state==="blocked"&&I.state==="blocked"||O.state==="blocked"&&I.state==="proceeding"||O.state==="blocked"&&I.state==="unblocked"||O.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+I.state);let $=new Map(x.blockers);$.set(w,I),vt({blockers:$})}function Gg(w){let{currentLocation:I,nextLocation:O,historyAction:$}=w;if(ht.size===0)return;ht.size>1&&zr(!1,"A router only supports one blocker at a time");let W=Array.from(ht.entries()),[re,ee]=W[W.length-1],J=x.blockers.get(re);if(!(J&&J.state==="proceeding")&&ee({currentLocation:I,nextLocation:O,historyAction:$}))return re}function fc(w){let I=[];return xt.forEach((O,$)=>{(!w||w($))&&(O.cancel(),I.push($),xt.delete($))}),I}function YS(w,I,O){if(f=w,y=I,_=O||null,!T&&x.navigation===qc){T=!0;let $=zg(x.location,x.matches);$!=null&&vt({restoreScrollPosition:$})}return()=>{f=null,y=null,_=null}}function $g(w,I){return _&&_(w,I.map($=>C_($,x.loaderData)))||w.key}function XS(w,I){if(f&&y){let O=$g(w,I);f[O]=y()}}function zg(w,I){if(f){let O=$g(w,I),$=f[O];if(typeof $=="number")return $}return null}function ZS(w){a={},l=gu(w,s,void 0,a)}return E={get basename(){return c},get state(){return x},get routes(){return o},get window(){return n},initialize:yn,subscribe:BS,enableScrollRestoration:YS,navigate:Dg,fetch:zS,revalidate:HS,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Fg,deleteFetcher:qS,dispose:ri,getBlocker:KS,deleteBlocker:Hg,_internalFetchControllers:de,_internalActiveDeferreds:xt,_internalSetRoutes:ZS},E}function iA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function bu(e,n,r,i,s,a,o){let l,c;if(a){l=[];for(let h of n)if(l.push(h),h.route.id===a){c=h;break}}else l=n,c=n[n.length-1];let d=w1(s||".",Ml(l).map(h=>h.pathnameBase),gr(e.pathname,r)||e.pathname,o==="path");return s==null&&(d.search=e.search,d.hash=e.hash),(s==null||s===""||s===".")&&c&&c.route.index&&!I1(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i&&r!=="/"&&(d.pathname=d.pathname==="/"?r:On([r,d.pathname])),Vr(d)}function ix(e,n,r,i){if(!i||!iA(i))return{path:r};if(i.formMethod&&!uA(i.formMethod))return{path:r,error:Ft(405,{method:i.formMethod})};let s=()=>({path:r,error:Ft(400,{type:"invalid-body"})}),a=i.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),l=Ry(r);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!nn(o))return s();let f=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((_,y)=>{let[T,A]=y;return""+_+T+"="+A+`
`},""):String(i.body);return{path:r,submission:{formMethod:o,formAction:l,formEncType:i.formEncType,formData:void 0,json:void 0,text:f}}}else if(i.formEncType==="application/json"){if(!nn(o))return s();try{let f=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:r,submission:{formMethod:o,formAction:l,formEncType:i.formEncType,formData:void 0,json:f,text:void 0}}}catch{return s()}}}ne(typeof FormData=="function","FormData is not available in this environment");let c,d;if(i.formData)c=xu(i.formData),d=i.formData;else if(i.body instanceof FormData)c=xu(i.body),d=i.body;else if(i.body instanceof URLSearchParams)c=i.body,d=lx(c);else if(i.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(i.body),d=lx(c)}catch{return s()}let h={formMethod:o,formAction:l,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(nn(h.formMethod))return{path:r,submission:h};let b=Bn(r);return n&&b.search&&I1(b.search)&&c.append("index",""),b.search="?"+c,{path:Vr(b),submission:h}}function sA(e,n){let r=e;if(n){let i=e.findIndex(s=>s.route.id===n);i>=0&&(r=e.slice(0,i))}return r}function sx(e,n,r,i,s,a,o,l,c,d,h,b,f,_){let y=_?Object.values(_)[0]:f?Object.values(f)[0]:void 0,T=e.createURL(n.location),A=e.createURL(s),m=_?Object.keys(_)[0]:void 0,E=sA(r,m).filter((v,R)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(aA(n.loaderData,n.matches[R],v)||o.some(M=>M===v.route.id))return!0;let j=n.matches[R],C=v;return ax(v,Le({currentUrl:T,currentParams:j.params,nextUrl:A,nextParams:C.params},i,{actionResult:y,defaultShouldRevalidate:a||T.pathname+T.search===A.pathname+A.search||T.search!==A.search||wy(j,C)}))}),x=[];return c.forEach((v,R)=>{if(!r.some(Q=>Q.route.id===v.routeId))return;let j=ji(h,v.path,b);if(!j){x.push({key:R,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let C=n.fetchers.get(R),M=Eu(j,v.path),B=!1;d.has(R)?B=!1:l.includes(R)?B=!0:C&&C.state!=="idle"&&C.data===void 0?B=a:B=ax(M,Le({currentUrl:T,currentParams:n.matches[n.matches.length-1].params,nextUrl:A,nextParams:r[r.length-1].params},i,{actionResult:y,defaultShouldRevalidate:a})),B&&x.push({key:R,routeId:v.routeId,path:v.path,matches:j,match:M,controller:new AbortController})}),[E,x]}function aA(e,n,r){let i=!n||r.route.id!==n.route.id,s=e[r.route.id]===void 0;return i||s}function wy(e,n){let r=e.route.path;return e.pathname!==n.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==n.params["*"]}function ax(e,n){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(n);if(typeof r=="boolean")return r}return n.defaultShouldRevalidate}async function ox(e,n,r){if(!e.lazy)return;let i=await e.lazy();if(!e.lazy)return;let s=r[e.id];ne(s,"No route found in manifest");let a={};for(let o in i){let c=s[o]!==void 0&&o!=="hasErrorBoundary";zr(!c,'Route "'+s.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!c&&!R_.has(o)&&(a[o]=i[o])}Object.assign(s,a),Object.assign(s,Le({},n(s),{lazy:void 0}))}async function bs(e,n,r,i,s,a,o,l){l===void 0&&(l={});let c,d,h,b=y=>{let T,A=new Promise((m,g)=>T=g);return h=()=>T(),n.signal.addEventListener("abort",h),Promise.race([y({request:n,params:r.params,context:l.requestContext}),A])};try{let y=r.route[e];if(r.route.lazy)if(y){let T,A=await Promise.all([b(y).catch(m=>{T=m}),ox(r.route,a,s)]);if(T)throw T;d=A[0]}else if(await ox(r.route,a,s),y=r.route[e],y)d=await b(y);else if(e==="action"){let T=new URL(n.url),A=T.pathname+T.search;throw Ft(405,{method:n.method,pathname:A,routeId:r.route.id})}else return{type:Fe.data,data:void 0};else if(y)d=await b(y);else{let T=new URL(n.url),A=T.pathname+T.search;throw Ft(404,{pathname:A})}ne(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){c=Fe.error,d=y}finally{h&&n.signal.removeEventListener("abort",h)}if(dA(d)){let y=d.status;if(J_.has(y)){let m=d.headers.get("Location");if(ne(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!jy.test(m))m=bu(new URL(n.url),i.slice(0,i.indexOf(r)+1),o,!0,m);else if(!l.isStaticRequest){let g=new URL(n.url),E=m.startsWith("//")?new URL(g.protocol+m):new URL(m),x=gr(E.pathname,o)!=null;E.origin===g.origin&&x&&(m=E.pathname+E.search+E.hash)}if(l.isStaticRequest)throw d.headers.set("Location",m),d;return{type:Fe.redirect,status:y,location:m,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:c===Fe.error?Fe.error:Fe.data,response:d};let T,A=d.headers.get("Content-Type");return A&&/\bapplication\/json\b/.test(A)?T=await d.json():T=await d.text(),c===Fe.error?{type:c,error:new R1(y,d.statusText,T),headers:d.headers}:{type:Fe.data,data:T,statusCode:d.status,headers:d.headers}}if(c===Fe.error)return{type:c,error:d};if(cA(d)){var f,_;return{type:Fe.deferred,deferredData:d,statusCode:(f=d.init)==null?void 0:f.status,headers:((_=d.init)==null?void 0:_.headers)&&new Headers(d.init.headers)}}return{type:Fe.data,data:d}}function xs(e,n,r,i){let s=e.createURL(Ry(n)).toString(),a={signal:r};if(i&&nn(i.formMethod)){let{formMethod:o,formEncType:l}=i;a.method=o.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(i.json)):l==="text/plain"?a.body=i.text:l==="application/x-www-form-urlencoded"&&i.formData?a.body=xu(i.formData):a.body=i.formData}return new Request(s,a)}function xu(e){let n=new URLSearchParams;for(let[r,i]of e.entries())n.append(r,typeof i=="string"?i:i.name);return n}function lx(e){let n=new FormData;for(let[r,i]of e.entries())n.append(r,i);return n}function oA(e,n,r,i,s){let a={},o=null,l,c=!1,d={};return r.forEach((h,b)=>{let f=n[b].route.id;if(ne(!Li(h),"Cannot handle redirect results in processLoaderData"),zs(h)){let _=$s(e,f),y=h.error;i&&(y=Object.values(i)[0],i=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=y),a[f]=void 0,c||(c=!0,l=_y(h.error)?h.error.status:500),h.headers&&(d[f]=h.headers)}else Dr(h)?(s.set(f,h.deferredData),a[f]=h.deferredData.data):a[f]=h.data,h.statusCode!=null&&h.statusCode!==200&&!c&&(l=h.statusCode),h.headers&&(d[f]=h.headers)}),i&&(o=i,a[Object.keys(i)[0]]=void 0),{loaderData:a,errors:o,statusCode:l||200,loaderHeaders:d}}function cx(e,n,r,i,s,a,o,l){let{loaderData:c,errors:d}=oA(n,r,i,s,l);for(let h=0;h<a.length;h++){let{key:b,match:f,controller:_}=a[h];ne(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let y=o[h];if(!(_&&_.signal.aborted))if(zs(y)){let T=$s(e.matches,f==null?void 0:f.route.id);d&&d[T.route.id]||(d=Le({},d,{[T.route.id]:y.error})),e.fetchers.delete(b)}else if(Li(y))ne(!1,"Unhandled fetcher revalidation redirect");else if(Dr(y))ne(!1,"Unhandled fetcher deferred data");else{let T=Xn(y.data);e.fetchers.set(b,T)}}return{loaderData:c,errors:d}}function dx(e,n,r,i){let s=Le({},n);for(let a of r){let o=a.route.id;if(n.hasOwnProperty(o)?n[o]!==void 0&&(s[o]=n[o]):e[o]!==void 0&&a.route.loader&&(s[o]=e[o]),i&&i.hasOwnProperty(o))break}return s}function $s(e,n){return(n?e.slice(0,e.findIndex(i=>i.route.id===n)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function ux(e){let n=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Ft(e,n){let{pathname:r,routeId:i,method:s,type:a}=n===void 0?{}:n,o="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(o="Bad Request",s&&r&&i?l="You made a "+s+' request to "'+r+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":a==="defer-action"?l="defer() is not supported in actions":a==="invalid-body"&&(l="Unable to encode submission body")):e===403?(o="Forbidden",l='Route "'+i+'" does not match URL "'+r+'"'):e===404?(o="Not Found",l='No route matches URL "'+r+'"'):e===405&&(o="Method Not Allowed",s&&r&&i?l="You made a "+s.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":s&&(l='Invalid request method "'+s.toUpperCase()+'"')),new R1(e||500,o,new Error(l),!0)}function hx(e){for(let n=e.length-1;n>=0;n--){let r=e[n];if(Li(r))return{result:r,idx:n}}}function Ry(e){let n=typeof e=="string"?Bn(e):e;return Vr(Le({},n,{hash:""}))}function lA(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function Dr(e){return e.type===Fe.deferred}function zs(e){return e.type===Fe.error}function Li(e){return(e&&e.type)===Fe.redirect}function cA(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function dA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function uA(e){return Q_.has(e.toLowerCase())}function nn(e){return X_.has(e.toLowerCase())}async function px(e,n,r,i,s,a){for(let o=0;o<r.length;o++){let l=r[o],c=n[o];if(!c)continue;let d=e.find(b=>b.route.id===c.route.id),h=d!=null&&!wy(d,c)&&(a&&a[c.route.id])!==void 0;if(Dr(l)&&(s||h)){let b=i[o];ne(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await Iy(l,b,s).then(f=>{f&&(r[o]=f||r[o])})}}}async function Iy(e,n,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(n)){if(r)try{return{type:Fe.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Fe.error,error:s}}return{type:Fe.data,data:e.deferredData.data}}}function I1(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Eu(e,n){let r=typeof n=="string"?Bn(n).search:n.search;if(e[e.length-1].route.index&&I1(r||""))return e[e.length-1];let i=Ml(e);return i[i.length-1]}function mx(e){let{formMethod:n,formAction:r,formEncType:i,text:s,formData:a,json:o}=e;if(!(!n||!r||!i)){if(s!=null)return{formMethod:n,formAction:r,formEncType:i,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:n,formAction:r,formEncType:i,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:n,formAction:r,formEncType:i,formData:void 0,json:o,text:void 0}}}function Kc(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hA(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Es(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function pA(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function Xn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function mA(e,n){try{let r=e.sessionStorage.getItem(vy);if(r){let i=JSON.parse(r);for(let[s,a]of Object.entries(i||{}))a&&Array.isArray(a)&&n.set(s,new Set(a||[]))}}catch{}}function fA(e,n){if(n.size>0){let r={};for(let[i,s]of n)r[i]=[...s];try{e.sessionStorage.setItem(vy,JSON.stringify(r))}catch(i){zr(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},hl.apply(this,arguments)}const Na=D.createContext(null),C1=D.createContext(null),Kr=D.createContext(null),Fl=D.createContext(null),Hn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Cy=D.createContext(null);function gA(e,n){let{relative:r}=n===void 0?{}:n;Yi()||ne(!1);let{basename:i,navigator:s}=D.useContext(Kr),{hash:a,pathname:o,search:l}=Pl(e,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:On([i,o])),s.createHref({pathname:c,search:l,hash:a})}function Yi(){return D.useContext(Fl)!=null}function Xi(){return Yi()||ne(!1),D.useContext(Fl).location}function Tu(e){Yi()||ne(!1);let{pathname:n}=Xi();return D.useMemo(()=>ul(e,n),[n,e])}function ky(e){D.useContext(Kr).static||D.useLayoutEffect(e)}function bA(){let{isDataRoute:e}=D.useContext(Hn);return e?CA():xA()}function xA(){Yi()||ne(!1);let e=D.useContext(Na),{basename:n,navigator:r}=D.useContext(Kr),{matches:i}=D.useContext(Hn),{pathname:s}=Xi(),a=JSON.stringify(Ml(i).map(c=>c.pathnameBase)),o=D.useRef(!1);return ky(()=>{o.current=!0}),D.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let h=w1(c,JSON.parse(a),s,d.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:On([n,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[n,r,a,s,e])}const EA=D.createContext(null);function TA(e){let n=D.useContext(Hn).outlet;return n&&D.createElement(EA.Provider,{value:e},n)}function k1(){let{matches:e}=D.useContext(Hn),n=e[e.length-1];return n?n.params:{}}function Pl(e,n){let{relative:r}=n===void 0?{}:n,{matches:i}=D.useContext(Hn),{pathname:s}=Xi(),a=JSON.stringify(Ml(i).map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase));return D.useMemo(()=>w1(e,JSON.parse(a),s,r==="path"),[e,a,s,r])}function yA(e,n,r){Yi()||ne(!1);let{navigator:i}=D.useContext(Kr),{matches:s}=D.useContext(Hn),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Xi(),d;if(n){var h;let T=typeof n=="string"?Bn(n):n;l==="/"||(h=T.pathname)!=null&&h.startsWith(l)||ne(!1),d=T}else d=c;let b=d.pathname||"/",f=l==="/"?b:b.slice(l.length)||"/",_=ji(e,{pathname:f}),y=jA(_&&_.map(T=>Object.assign({},T,{params:Object.assign({},o,T.params),pathname:On([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:On([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,r);return n&&y?D.createElement(Fl.Provider,{value:{location:hl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Me.Pop}},y):y}function SA(){let e=IA(),n=_y(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},n),r?D.createElement("pre",{style:s},r):null,a)}const NA=D.createElement(SA,null);class _A extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error?D.createElement(Hn.Provider,{value:this.props.routeContext},D.createElement(Cy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AA(e){let{routeContext:n,match:r,children:i}=e,s=D.useContext(Na);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(Hn.Provider,{value:n},i)}function jA(e,n,r){var i;if(n===void 0&&(n=[]),r===void 0&&(r=null),e==null){var s;if((s=r)!=null&&s.errors)e=r.matches;else return null}let a=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let l=a.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));l>=0||ne(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,c,d)=>{let h=c.route.id?o==null?void 0:o[c.route.id]:null,b=null;r&&(b=c.route.errorElement||NA);let f=n.concat(a.slice(0,d+1)),_=()=>{let y;return h?y=b:c.route.Component?y=D.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=l,D.createElement(AA,{match:c,routeContext:{outlet:l,matches:f,isDataRoute:r!=null},children:y})};return r&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?D.createElement(_A,{location:r.location,revalidation:r.revalidation,component:b,error:h,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var Oy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Oy||{}),pl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pl||{});function vA(e){let n=D.useContext(Na);return n||ne(!1),n}function wA(e){let n=D.useContext(C1);return n||ne(!1),n}function RA(e){let n=D.useContext(Hn);return n||ne(!1),n}function Ly(e){let n=RA(),r=n.matches[n.matches.length-1];return r.route.id||ne(!1),r.route.id}function IA(){var e;let n=D.useContext(Cy),r=wA(pl.UseRouteError),i=Ly(pl.UseRouteError);return n||((e=r.errors)==null?void 0:e[i])}function CA(){let{router:e}=vA(Oy.UseNavigateStable),n=Ly(pl.UseNavigateStable),r=D.useRef(!1);return ky(()=>{r.current=!0}),D.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,hl({fromRouteId:n},a)))},[e,n])}function kA(e){return TA(e.context)}function OA(e){let{basename:n="/",children:r=null,location:i,navigationType:s=Me.Pop,navigator:a,static:o=!1}=e;Yi()&&ne(!1);let l=n.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof i=="string"&&(i=Bn(i));let{pathname:d="/",search:h="",hash:b="",state:f=null,key:_="default"}=i,y=D.useMemo(()=>{let T=gr(d,l);return T==null?null:{location:{pathname:T,search:h,hash:b,state:f,key:_},navigationType:s}},[l,d,h,b,f,_,s]);return y==null?null:D.createElement(Kr.Provider,{value:c},D.createElement(Fl.Provider,{children:r,value:y}))}new Promise(()=>{});function LA(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:D.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:D.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},zi.apply(this,arguments)}function Dy(e,n){if(e==null)return{};var r={},i=Object.keys(e),s,a;for(a=0;a<i.length;a++)s=i[a],!(n.indexOf(s)>=0)&&(r[s]=e[s]);return r}function DA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function MA(e,n){return e.button===0&&(!n||n==="_self")&&!DA(e)}const FA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],PA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function UA(e,n){return rA({basename:n==null?void 0:n.basename,future:zi({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:j_({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||BA(),routes:e,mapRouteProperties:LA,window:n==null?void 0:n.window}).initialize()}function BA(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=zi({},n,{errors:HA(n.errors)})),n}function HA(e){if(!e)return null;let n=Object.entries(e),r={};for(let[i,s]of n)if(s&&s.__type==="RouteErrorResponse")r[i]=new R1(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let o=new a(s.message);o.stack="",r[i]=o}catch{}}if(r[i]==null){let a=new Error(s.message);a.stack="",r[i]=a}}else r[i]=s;return r}const My=D.createContext({isTransitioning:!1}),GA=D.createContext(new Map),$A="startTransition",fx=mN[$A],zA="flushSync",gx=A_[zA];function VA(e){fx?fx(e):e()}function Ts(e){gx?gx(e):e()}class WA{constructor(){this.status="pending",this.promise=new Promise((n,r)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",n(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",r(i))}})}}function qA(e){let{fallbackElement:n,router:r,future:i}=e,[s,a]=D.useState(r.state),[o,l]=D.useState(),[c,d]=D.useState({isTransitioning:!1}),[h,b]=D.useState(),[f,_]=D.useState(),[y,T]=D.useState(),A=D.useRef(new Map),{v7_startTransition:m}=i||{},g=D.useCallback(j=>{m?VA(j):j()},[m]),E=D.useCallback((j,C)=>{let{deletedFetchers:M,unstable_flushSync:B,unstable_viewTransitionOpts:Q}=C;M.forEach(ie=>A.current.delete(ie)),j.fetchers.forEach((ie,De)=>{ie.data!==void 0&&A.current.set(De,ie.data)});let Y=r.window==null||typeof r.window.document.startViewTransition!="function";if(!Q||Y){B?Ts(()=>a(j)):g(()=>a(j));return}if(B){Ts(()=>{f&&(h&&h.resolve(),f.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})});let ie=r.window.document.startViewTransition(()=>{Ts(()=>a(j))});ie.finished.finally(()=>{Ts(()=>{b(void 0),_(void 0),l(void 0),d({isTransitioning:!1})})}),Ts(()=>_(ie));return}f?(h&&h.resolve(),f.skipTransition(),T({state:j,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})):(l(j),d({isTransitioning:!0,flushSync:!1,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}))},[r.window,f,h,A,g]);D.useLayoutEffect(()=>r.subscribe(E),[r,E]),D.useEffect(()=>{c.isTransitioning&&!c.flushSync&&b(new WA)},[c]),D.useEffect(()=>{if(h&&o&&r.window){let j=o,C=h.promise,M=r.window.document.startViewTransition(async()=>{g(()=>a(j)),await C});M.finished.finally(()=>{b(void 0),_(void 0),l(void 0),d({isTransitioning:!1})}),_(M)}},[g,o,h,r.window]),D.useEffect(()=>{h&&o&&s.location.key===o.location.key&&h.resolve()},[h,f,s.location,o]),D.useEffect(()=>{!c.isTransitioning&&y&&(l(y.state),d({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),T(void 0))},[c.isTransitioning,y]);let x=D.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:j=>r.navigate(j),push:(j,C,M)=>r.navigate(j,{state:C,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(j,C,M)=>r.navigate(j,{replace:!0,state:C,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[r]),v=r.basename||"/",R=D.useMemo(()=>({router:r,navigator:x,static:!1,basename:v}),[r,x,v]);return D.createElement(D.Fragment,null,D.createElement(Na.Provider,{value:R},D.createElement(C1.Provider,{value:s},D.createElement(GA.Provider,{value:A.current},D.createElement(My.Provider,{value:c},D.createElement(OA,{basename:v,location:s.location,navigationType:s.historyAction,navigator:x},s.initialized?D.createElement(KA,{routes:r.routes,state:s}):n))))),null)}function KA(e){let{routes:n,state:r}=e;return yA(n,void 0,r)}const YA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=D.forwardRef(function(n,r){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:h,unstable_viewTransition:b}=n,f=Dy(n,FA),{basename:_}=D.useContext(Kr),y,T=!1;if(typeof d=="string"&&XA.test(d)&&(y=d,YA))try{let E=new URL(window.location.href),x=d.startsWith("//")?new URL(E.protocol+d):new URL(d),v=gr(x.pathname,_);x.origin===E.origin&&v!=null?d=v+x.search+x.hash:T=!0}catch{}let A=gA(d,{relative:s}),m=JA(d,{replace:o,state:l,target:c,preventScrollReset:h,relative:s,unstable_viewTransition:b});function g(E){i&&i(E),E.defaultPrevented||m(E)}return D.createElement("a",zi({},f,{href:y||A,onClick:T||a?i:g,ref:r,target:c}))}),ZA=D.forwardRef(function(n,r){let{"aria-current":i="page",caseSensitive:s=!1,className:a="",end:o=!1,style:l,to:c,unstable_viewTransition:d,children:h}=n,b=Dy(n,PA),f=Pl(c,{relative:b.relative}),_=Xi(),y=D.useContext(C1),{navigator:T}=D.useContext(Kr),A=y!=null&&e9(f)&&d===!0,m=T.encodeLocation?T.encodeLocation(f).pathname:f.pathname,g=_.pathname,E=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(g=g.toLowerCase(),E=E?E.toLowerCase():null,m=m.toLowerCase());const x=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let v=g===m||!o&&g.startsWith(m)&&g.charAt(x)==="/",R=E!=null&&(E===m||!o&&E.startsWith(m)&&E.charAt(m.length)==="/"),j={isActive:v,isPending:R,isTransitioning:A},C=v?i:void 0,M;typeof a=="function"?M=a(j):M=[a,v?"active":null,R?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(j):l;return D.createElement(it,zi({},b,{"aria-current":C,className:M,ref:r,style:B,to:c,unstable_viewTransition:d}),typeof h=="function"?h(j):h)});var yu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yu||(yu={}));var bx;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bx||(bx={}));function QA(e){let n=D.useContext(Na);return n||ne(!1),n}function JA(e,n){let{target:r,replace:i,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:l}=n===void 0?{}:n,c=bA(),d=Xi(),h=Pl(e,{relative:o});return D.useCallback(b=>{if(MA(b,r)){b.preventDefault();let f=i!==void 0?i:Vr(d)===Vr(h);c(e,{replace:f,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:l})}},[d,c,h,i,s,r,e,a,o,l])}function e9(e,n){n===void 0&&(n={});let r=D.useContext(My);r==null&&ne(!1);let{basename:i}=QA(yu.useViewTransitionState),s=Pl(e,{relative:n.relative});if(!r.isTransitioning)return!1;let a=gr(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=gr(r.nextLocation.pathname,i)||r.nextLocation.pathname;return ul(s.pathname,o)!=null||ul(s.pathname,a)!=null}function t9(){return t.jsxs("main",{className:"container mx-auto px-2 py-4",children:[t.jsx("h1",{className:"font-bold text-red-900",children:"Такой страницы нет!"}),t.jsx(it,{to:"/",className:"focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500",children:"Перейти на главную"})]})}function n9(){return t.jsxs("ul",{className:"list-disc",children:[t.jsx("li",{children:t.jsx(it,{to:"subjects",className:"focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500",children:"Список тем"})}),t.jsx("li",{children:t.jsx(it,{to:"tasks",className:"focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500",children:"Список задач"})})]})}function ml({type:e}){switch(e){case"easy":return t.jsx("span",{className:"bg-green-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-green-600/20 rounded-md text-xs text-green-700",children:"Easy"});case"medium":return t.jsx("span",{className:"bg-yellow-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-yellow-600/20 rounded-md text-xs text-yellow-800",children:"Medium"});case"hard":return t.jsx("span",{className:"bg-red-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-red-600/10 rounded-md text-xs text-red-700",children:"Hard"});default:return t.jsx("span",{className:"bg-white font-medium inline-flex items-center mr-1 px-2 py-1 ring-1 ring-gray-500/10 ring-inset rounded-md text-gray-600 text-xs",children:e})}}const Ul={arrays:"Массивы",objects:"Объекты","hash-implementation":"Реализация хеша","prefix-sums":"Префиксные суммы",stack:"Стек","two-pointers":"Метод двух указателей","sliding-window":"Метод скользящего окна","binary-search":"Бинарный поиск","linked-lists":"Связные списки","doubly-linked-lists":"Двусвязные списки",queues:"Очереди","fast-and-slow-pointers":"Быстрые и медленные указатели","one-branch-recursion":"Рекурсия (одна ветвь)","two-branch-recursion":"Рекурсия (две ветви)","insertion-sort":"Сортировка вставками","merge-sort":"Сортировка слиянием","quick-sort":"Быстрая сортировка","bucket-sort":"Блочная сортировка","binary-tree":"Бинарное дерево","binary-search-tree":"Бинарное дерево поиска","bst-insert-and-remove":"BST вставка и удаление","depth-first-search":"Поиск в глубину","iterative-depth-first-search":"Итеративный поиск в глубину","breadth-first-search":"Поиск в ширину",backtracking:"Поиск с возвратом (бэктрекинг)",subsets:"Подмножества",combinations:"Сочетания",permutations:"Перестановки","intro-to-graphs":"Введение в графы","matrix-depth-first-search":"Поиск в глубину в графе, представленным матрицей","matrix-breadth-first-search":"Поиск в ширину в графе, представленным матрицей","adjacency-list":"Список смежности","heap-properties":"Свойства кучи","heap-push-and-pop":"Куча: добавление и удаление",heapify:"Преобразование массива в кучу (Heapify)","one-dimension-dp":"Одномерное динамическое программирование",palindromes:"Палиндромы","topological-sort":"Топологическая сортировка",intervals:"Интервалы",trie:"Префиксное дерево","kadanes-algorithm":"Алгоритм Кэдейна",greedy:"Жадные алгоритмы","two-dimension-dp":"Двумерное динамическое программирование","0-1-knapsack":"Рюкзак 0-1"};var Fy=(e=>(e.ARRAY="Array",e.BACKTRACKING="Backtracking",e.BINARY_SEARCH="Binary Search",e.BINARY_SEARCH_TREE="Binary Search Tree",e.BINARY_TREE="Binary Tree",e.BIT_MANIPULATION="Bit Manipulation",e.BREADTH_FIRST_SEARCH="Breadth-First Search",e.BUCKET_SORT="Bucket Sort",e.COUNTING="Counting",e.COUNTING_SORT="Counting Sort",e.DATA_STREAM="Data Stream",e.DEPTH_FIRST_SEARCH="Depth-First Search",e.DESIGN="Design",e.DIVIDE_AND_CONQUER="Divide and Conquer",e.DOUBLY_LINKED_LIST="Doubly-Linked List",e.DYNAMIC_PROGRAMMING="Dynamic Programming",e.GRAPH="Graph",e.GREEDY="Greedy",e.HASH_FUNCTION="Hash Function",e.HASH_TABLE="Hash Table",e.HEAP="Heap (Priority Queue)",e.INTERACTIVE="Interactive",e.ITERATOR="Iterator",e.LINKED_LIST="Linked List",e.MATH="Math",e.MATRIX="Matrix",e.MEMOIZATION="Memoization",e.MERGE_SORT="Merge Sort",e.MONOTONIC_QUEUE="Monotonic Queue",e.MONOTONIC_STACK="Monotonic Stack",e.PREFIX_SUM="Prefix Sum",e.QUEUE="Queue",e.QUICKSELECT="Quickselect",e.RADIX_SORT="Radix Sort",e.RECURSION="Recursion",e.SIMULATION="Simulation",e.SLIDING_WINDOW="Sliding Window",e.SORTING="Sorting",e.STACK="Stack",e.STRING="String",e.STRING_MATCHING="String Matching",e.TOPOLOGICAL_SORT="Topological sort",e.TREE="Tree",e.TRIE="Trie",e.TWO_POINTERS="Two Pointers",e.UNION_FIND="Union Find",e))(Fy||{});const ga=[{code:`const removeElement = (nums, val) => {
  let index = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[index++] = num;
    }
  }

  return index;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5`,difficulty:"easy",id:"remove-element",link:"https://leetcode.com/problems/remove-element/",name:"Remove Element",subject:"arrays",tags:["Array","Two Pointers"]},{code:`const removeDuplicates = (nums) => {
  let currentUniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[currentUniqueIndex]) {
      nums[++currentUniqueIndex] = nums[i];
    }
  }

  return currentUniqueIndex + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5`,difficulty:"easy",id:"remove-duplicates-from-sorted-array",link:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",name:"Remove Duplicates from Sorted Array",subject:"arrays",tags:["Array","Two Pointers"]},{code:`const getConcatenation = (nums) => {
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
      ans[i] = nums[i];
      ans[i + nums.length] = nums[i];
    }
    
    return ans;
};
  
console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
console.log(getConcatenation([1, 3, 2, 1])); // [1, 3, 2, 1, 1, 3, 2, 1]`,difficulty:"easy",id:"concatenation-of-array",link:"https://leetcode.com/problems/concatenation-of-array/",name:"Concatenation of Array",subject:"arrays",tags:["Array"]},{code:`const containsDuplicate = (nums) => {
  const hashset = new Set();

  for (const num of nums) {
    if (hashset.has(num)) {
      return true;
    }
    
    hashset.add(num);
  }
  
  return false;
};
  
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false`,difficulty:"easy",id:"contains-duplicate",link:"https://leetcode.com/problems/contains-duplicate/",name:"Contains Duplicate",subject:"objects",tags:["Array","Hash Table","Sorting"]},{code:`const twoSum = (nums, target) => {
  const prevMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    
    prevMap.set(nums[i], i);
  }
};
  
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]`,difficulty:"easy",id:"two-sum",link:"https://leetcode.com/problems/two-sum/",name:"Two Sum",subject:"objects",tags:["Array","Hash Table"]},{code:`function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
}

LRUCache.prototype.remove = function(node) {
  const { prev, next } = node;  
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.insert = function(node) {
  const prev = this.right.prev;
  const next = this.right;

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
  }
  
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  
  const node = new Node(key, value);
  this.cache.set(key, node);
  this.insert(node);
  
  if (this.cache.size > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4`,difficulty:"medium",id:"lru-cache",link:"https://leetcode.com/problems/lru-cache/",name:"LRU Cache",subject:"objects",tags:["Hash Table","Linked List","Design","Doubly-Linked List"]},{code:`class ListNode {
  next = null;

  constructor(key) {
    this.key = key;
  }
}

class MyHashSet {
  set = Array.from({ length: 10 ** 4 }, () => new ListNode(0));

  #getNodeByKey(key) {
    return this.set[key % this.set.length];
  }

  add(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(key);
  }
  
  remove(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next = currentNode.next.next;

        return;
      }

      currentNode = currentNode.next;
    }
  }

  contains(key) {
    let currentNode = this.#getNodeByKey(key);
    
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        return true;
      }
      
      currentNode = currentNode.next;
    }
    
    return false;
  }
}

const myHashSet = new MyHashSet();
myHashSet.add(1);
myHashSet.add(2);
console.log(myHashSet.contains(1)); // true
console.log(myHashSet.contains(3)); // false
myHashSet.add(2);
console.log(myHashSet.contains(2)); // true
myHashSet.remove(2);
console.log(myHashSet.contains(2)); // false`,difficulty:"easy",id:"design-hashset",link:"https://leetcode.com/problems/design-hashset/",name:"Design HashSet",subject:"hash-implementation",tags:["Array","Hash Table","Linked List","Design","Hash Function"]},{code:`class ListNode {
  next = null;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MyHashMap {
  map = Array.from({ length: 10 ** 4 }, () => new ListNode(-1, -1));

  #getNodeByKey(key) {
    return this.map[key % this.map.length];
  }

  put(key, value) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;

        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(key, value);
  }

  get(key) {
    let currentNode = this.#getNodeByKey(key).next;

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }
  
  remove(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next = currentNode.next.next;

        return;
      }

      currentNode = currentNode.next;
    }
  }
}

const myHasMap = new MyHashMap();
myHasMap.put(1, 1);
myHasMap.put(2, 2);
console.log(myHasMap.get(1)); // 1
console.log(myHasMap.get(3)); // -1
myHasMap.put(2, 1);
console.log(myHasMap.get(2)); // 1
myHasMap.remove(2);
console.log(myHasMap.get(2)); // -1`,difficulty:"easy",id:"design-hashmap",link:"https://leetcode.com/problems/design-hashmap/",name:"Design HashMap",subject:"hash-implementation",tags:["Array","Hash Table","Linked List","Design","Hash Function"]},{code:`class NumArray {
  prefix = [];

  constructor(nums) {
    let total = 0;
    
    for (const num of nums) {
      total += num;
      this.prefix.push(total);
    }
  }
  
  sumRange(left, right) {
    const rightSum = this.prefix[right];
    const leftSum = left > 0 ? this.prefix[left - 1] : 0;
    
    return rightSum - leftSum;
  }
}

const myNumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(myNumArray.sumRange(0, 2)); // 1
console.log(myNumArray.sumRange(2, 5)); // -1
console.log(myNumArray.sumRange(0, 5)); // -3`,difficulty:"easy",id:"range-sum-query-immutable",link:"https://leetcode.com/problems/range-sum-query-immutable/",name:"Range Sum Query - Immutable",subject:"prefix-sums",tags:["Array","Design","Prefix Sum"]},{code:`class NumMatrix {
  constructor(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;
    
    this.sumMatrix = Array.from({ length: rowsCount + 1 }, () => Array(columnsCount + 1).fill(0));
    
    for (let rowIdx = 0; rowIdx < rowsCount; rowIdx++) {
      let prefix = 0;
      
      for (let columnIdx = 0; columnIdx < columnsCount; columnIdx++) {
        prefix += matrix[rowIdx][columnIdx];
        
        const above = this.sumMatrix[rowIdx][columnIdx + 1];
        
        this.sumMatrix[rowIdx + 1][columnIdx + 1] = prefix + above;
      }
    }
  }
  
  sumRegion(row1, col1, row2, col2) {
    const r1 = row1 + 1;
    const c1 = col1 + 1;
    const r2 = row2 + 1;
    const c2 = col2 + 1;
    
    const bottomRight = this.sumMatrix[r2][c2];
    const above = this.sumMatrix[r1 - 1][c2];
    const left = this.sumMatrix[r2][c1 - 1];
    const topLeft = this.sumMatrix[r1 - 1][c1 - 1];
    
    return bottomRight - above - left + topLeft;
  }
}

const myNumMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
console.log(myNumMatrix.sumRegion(2, 1, 4, 3)); // 8
console.log(myNumMatrix.sumRegion(1, 1, 2, 2)); // 11
console.log(myNumMatrix.sumRegion(1, 2, 2, 4)); // 12`,difficulty:"medium",id:"range-sum-query-2d-immutable",link:"https://leetcode.com/problems/range-sum-query-2d-immutable/",name:"Range Sum Query 2D - Immutable",subject:"prefix-sums",tags:["Array","Design","Matrix","Prefix Sum"]},{code:`const pivotIndex = (nums) => {
  const total = nums.reduce((result, num) => result + num);
  
  let leftSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum;
    
    if (leftSum === rightSum) {
      return i;
    }
    
    leftSum += nums[i];
  }
  
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0`,difficulty:"easy",id:"find-pivot-index",link:"https://leetcode.com/problems/find-pivot-index/",name:"Find Pivot Index",subject:"prefix-sums",tags:["Array","Prefix Sum"]},{code:`const productExceptSelf = (nums) => {
  const result = Array(nums.length);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]`,difficulty:"medium",id:"product-of-array-except-self",link:"https://leetcode.com/problems/product-of-array-except-self/",name:"Product of Array Except Self",subject:"prefix-sums",tags:["Array","Prefix Sum"]},{code:`const subarraySum = (nums, k) => {
  const prefixSum = new Map([[0, 1]]);

  let result = 0;
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;    

    const diff = currentSum - k;

    result += prefixSum.get(diff) ?? 0;
    prefixSum.set(currentSum, 1 + (prefixSum.get(currentSum) ?? 0));
  }

  return result;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2`,difficulty:"medium",id:"subarray-sum-equals-k",link:"https://leetcode.com/problems/subarray-sum-equals-k/",name:"Subarray Sum Equals K",subject:"prefix-sums",tags:["Array","Hash Table","Prefix Sum"]},{code:`const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCount = {};
  const tCharCount = {};

  for (let i = 0; i < s.length; i++) {
    sCharCount[s[i]] = 1 + (sCharCount[s[i]] ?? 0);
    tCharCount[t[i]] = 1 + (tCharCount[t[i]] ?? 0);
  }

  for (char of Object.keys(sCharCount)) {
    if (sCharCount[char] !== tCharCount[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false`,difficulty:"easy",id:"valid-anagram",link:"https://leetcode.com/problems/valid-anagram/",name:"Valid Anagram",subject:"objects",tags:["Hash Table","String","Sorting"]},{code:`const groupAnagrams = (strs) => {
  const result = {};

  for (const str of strs) {
    const count = Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    const commaSeparatedCount = count.join(',');

    if (result[commaSeparatedCount]) {
      result[commaSeparatedCount].push(str);
    } else {
      result[commaSeparatedCount] = [str];
    }
  }

  return Object.values(result);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams([''])); // [['']]
console.log(groupAnagrams(['a'])); // [['a']]`,difficulty:"medium",id:"group-anagrams",link:"https://leetcode.com/problems/group-anagrams/",name:"Group Anagrams",subject:"objects",tags:["Array","Hash Table","String","Sorting"]},{code:`const topKFrequent = (nums, k) => {
  const result = [];
  const count = new Map();
  const frequencies = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    count.set(num, 1 + (count.get(num) ?? 0));
  }

  for (const [num, frequency] of count) {
    frequencies[frequency].push(num);
  }

  for (let i = frequencies.length - 1; i > 0; i--) {
    for (const n of frequencies[i]) {
      result.push(n);

      if (result.length === k) {
        return result;
      }
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]`,difficulty:"medium",id:"top-k-frequent-elements",link:"https://leetcode.com/problems/top-k-frequent-elements/",name:"Top K Frequent Elements",subject:"objects",tags:["Array","Hash Table","Divide and Conquer","Sorting","Heap (Priority Queue)","Bucket Sort","Counting","Quickselect"]},{code:`const isValidSudoku = (board) => {
  const rows = Array.from({ length: board.length }, () => new Set());
  const columns = Array.from({ length: board.length }, () => new Set());
  const squares = Array.from({ length: board.length }, () => new Set());

  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows.length; col++) {
      if (board[row][col] === '.') {
        continue;
      }

      const squaresIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (rows[row].has(board[row][col])
        || columns[col].has(board[row][col])
        || squares[squaresIndex].has(board[row][col])) {
          return false;
      }

      rows[row].add(board[row][col]);
      columns[col].add(board[row][col]);
      squares[squaresIndex].add(board[row][col]);
    }
  }

  return true;
};

console.log(isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // true
console.log(isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // false`,difficulty:"medium",id:"valid-sudoku",link:"https://leetcode.com/problems/valid-sudoku/",name:"Valid Sudoku",subject:"objects",tags:["Array","Hash Table","Matrix"]},{code:`const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length++;
      }

      longest = Math.max(length, longest);
    }
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9`,difficulty:"medium",id:"longest-consecutive-sequence",link:"https://leetcode.com/problems/longest-consecutive-sequence/",name:"Longest Consecutive Sequence",subject:"objects",tags:["Array","Hash Table","Union Find"]},{code:`const calPoints = (operations) => {
  const record = [];
  
  for (const operation of operations) {
    switch (operation) {
      case '+': {
        record.push(record.at(-1) + record.at(-2));
        break;
      }
      case 'D': {
        record.push(record.at(-1) * 2);
        break;
      }
      case 'C': {
        record.pop();
        break;
      }
      default: {
        record.push(Number(operation));
      }
    }
  }

  return record.reduce((result, cur) => result + cur, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
console.log(calPoints(['1', 'C'])); // 0`,difficulty:"easy",id:"baseball-game",link:"https://leetcode.com/problems/baseball-game/",name:"Baseball Game",subject:"stack",tags:["Array","Stack","Simulation"]},{code:`const CloseToOpenBracket = {
  ')' : '(',
  ']' : '[',
  '}' : '{'
};

const isValid = (s) => {
  if (s.length % 2) {
    return false;
  }

  const stack = [];

  for (const char of s) {
    if (CloseToOpenBracket[char]) {
      if (stack.length && stack.at(-1) === CloseToOpenBracket[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false`,difficulty:"easy",id:"valid-parentheses",link:"https://leetcode.com/problems/valid-parentheses/",name:"Valid Parentheses",subject:"stack",tags:["String","Stack"]},{code:`class MinStack {
  stack = [];
  minStack = [];

  push(value) {
    this.stack.push(value);

    const minValue = Math.min(value, this.minStack.at(-1) ?? value);

    this.minStack.push(minValue);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2`,difficulty:"medium",id:"min-stack",link:"https://leetcode.com/problems/min-stack/",name:"Min Stack",subject:"stack",tags:["Stack","Design"]},{code:`const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
     if (['+', '-', '*', '/'].includes(token)) {
      const lastValue = stack.pop();
      const penultimateValue = stack.pop();

      switch (token) {
        case '+': {
          stack.push(penultimateValue + lastValue);
          break;
        }
        case '-': {
          stack.push(penultimateValue - lastValue);
          break;
        }
        case '*': {
          stack.push(penultimateValue * lastValue);
          break;
        }
        case '/': {
          stack.push(Math.trunc(penultimateValue / lastValue));
          break;
        }
        default: {
          break;
        }
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22`,difficulty:"medium",id:"evaluate-reverse-polish-notation",link:"https://leetcode.com/problems/evaluate-reverse-polish-notation/",name:"Evaluate Reverse Polish Notation",subject:"stack",tags:["Array","Math","Stack"]},{code:`const dailyTemperatures = (temperatures) => {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const colderDayIndex = stack.pop();

      answer[colderDayIndex] = i - colderDayIndex;
    }

    stack.push(i);
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]`,difficulty:"medium",id:"daily-temperatures",link:"https://leetcode.com/problems/daily-temperatures/",name:"Daily Temperatures",subject:"stack",tags:["Array","Stack","Monotonic Stack"]},{code:`const carFleet = (target, position, speed) => {
  const pairs = Array.from({ length: position.length }, (_, i) => [position[i], speed[i]]).sort(([p1], [p2]) => p2 - p1);
  const stack = [];

  for (const [p, s] of pairs) {
    stack.push((target - p) / s);

    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(10, [3], [3])); // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 1`,difficulty:"medium",id:"car-fleet",link:"https://leetcode.com/problems/car-fleet/",name:"Car Fleet",subject:"stack",tags:["Array","Stack","Sorting","Monotonic Stack"]},{code:`const isAlphaNum = (char) =>
  (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
  (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
  (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0));

const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) {
      l++;
    }

    while (r > l && !isAlphaNum(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true`,difficulty:"easy",id:"valid-palindrome",link:"https://leetcode.com/problems/valid-palindrome/",name:"Valid Palindrome",subject:"two-pointers",tags:["Two Pointers","String"]},{code:`const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]`,difficulty:"medium",id:"two-sum-ii-input-array-is-sorted",link:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",name:"Two Sum II - Input Array Is Sorted",subject:"two-pointers",tags:["Array","Two Pointers","Binary Search"]},{code:`const removeDuplicates = (nums) => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    let count = 1;

    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      r++;
      count++;
    }

    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }

    r++;
  }

  return l;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7`,difficulty:"medium",id:"remove-duplicates-from-sorted-array-ii",link:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",name:"Remove Duplicates from Sorted Array II",subject:"two-pointers",tags:["Array","Two Pointers"]},{code:`const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {     
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [0, 0, 0]`,difficulty:"medium",id:"3sum",link:"https://leetcode.com/problems/3sum/",name:"3Sum",subject:"two-pointers",tags:["Array","Two Pointers","Sorting"]},{code:`const maxArea = (height) => {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1`,difficulty:"medium",id:"container-with-most-water",link:"https://leetcode.com/problems/container-with-most-water/",name:"Container With Most Water",subject:"two-pointers",tags:["Array","Two Pointers","Greedy"]},{code:`const containsNearbyDuplicate = (nums, k) => {
  const numsWindow = new Set();
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      numsWindow.delete(nums[l]);
      l++;
    }

    if (numsWindow.has(nums[r])) {
      return true;
    }

    numsWindow.add(nums[r]);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false`,difficulty:"easy",id:"contains-duplicate-ii",link:"https://leetcode.com/problems/contains-duplicate-ii/",name:"Contains Duplicate II",subject:"sliding-window",tags:["Array","Hash Table","Sliding Window"]},{code:`const numOfSubarrays = (arr, k, threshold) => {
  let l = 0;
  let sum = 0;
  let result = 0;

  for (let r = 0; r < arr.length; r++) {
    if (r - l === k) {
      sum -= arr[l];
      l++;
    }

    sum += arr[r];

    if (r + 1 >= k && sum / k >= threshold) {
      result++;
    }
  }

  return result;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6`,difficulty:"medium",id:"number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",link:"https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",name:"Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",subject:"sliding-window",tags:["Array","Sliding Window"]},{code:`const minSubArrayLen = (target, nums) => {
  let currentSum = 0;
  let l = 0;
  let result = Infinity;

  for (let r = 0; r < nums.length; r++) {
    currentSum += nums[r];

    while (currentSum >= target) {
      result = Math.min(r - l + 1, result);
      currentSum -= nums[l];
      l++;
    }
  }

  if (result === Infinity) {
    return 0;
  }

  return result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0`,difficulty:"medium",id:"minimum-size-subarray-sum",link:"https://leetcode.com/problems/minimum-size-subarray-sum/",name:"Minimum Size Subarray Sum",subject:"sliding-window",tags:["Array","Binary Search","Sliding Window","Prefix Sum"]},{code:`const lengthOfLongestSubstring = (s) => {
  const charSet = new Set();
  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }

    charSet.add(s[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3`,difficulty:"medium",id:"longest-substring-without-repeating-characters",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",name:"Longest Substring Without Repeating Characters",subject:"sliding-window",tags:["Hash Table","String","Sliding Window"]},{code:`const maxProfit = (prices) => {
  let l = 0;
  let maxProfit = 0;

  for (let r = 1; r < prices.length; r++) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0`,difficulty:"easy",id:"best-time-to-buy-and-sell-stock",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",name:"Best Time to Buy and Sell Stock",subject:"sliding-window",tags:["Array","Dynamic Programming"]},{code:`const characterReplacement = (s, k) => {
  const count = {};
  let result = 0;
  let left = 0;
  let maxFrequency = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = 1 + (count[s[right]] ?? 0);
    maxFrequency = Math.max(maxFrequency, count[s[right]]);

    while (right - left + 1 - maxFrequency > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};

console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4`,difficulty:"medium",id:"longest-repeating-character-replacement",link:"https://leetcode.com/problems/longest-repeating-character-replacement/",name:"Longest Repeating Character Replacement",subject:"sliding-window",tags:["Hash Table","String","Sliding Window"]},{code:`const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    s2Count[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  let matches = 0;

  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  let left = 0;

  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) {
      return true;
    }

    let index = s2[right].charCodeAt() - 'a'.charCodeAt();
    s2Count[index]++;

    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    index = s2[left].charCodeAt() - 'a'.charCodeAt();
    s2Count[index]--;

    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }

    left++;
  }

  return matches === 26;
};

console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false`,difficulty:"medium",id:"permutation-in-string",link:"https://leetcode.com/problems/permutation-in-string/",name:"Permutation in String",subject:"sliding-window",tags:["Hash Table","Two Pointers","String","Sliding Window"]},{code:`const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1`,difficulty:"easy",id:"binary-search",link:"https://leetcode.com/problems/binary-search/",name:"Binary Search",subject:"binary-search",tags:["Array","Binary Search"]},{code:`const searchMatrix = (matrix, target) => {
  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;

  let top = 0;
  let bottom = rowsCount - 1;
  let row;

  while (top <= bottom) {
    row = Math.floor((top + bottom) / 2);

    if (target > matrix[row].at(-1)) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return false;
  }
  
  let l = 0;
  let r = columnsCount - 1;
  
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
  
    if (target > matrix[row][mid]) {
      l = mid + 1;
    } else if (target < matrix[row][mid]) {
      r = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false`,difficulty:"medium",id:"search-a-2d-matrix",link:"https://leetcode.com/problems/search-a-2d-matrix/",name:"Search a 2D Matrix",subject:"binary-search",tags:["Array","Binary Search","Matrix"]},{code:`const guessNumber = (n) => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const num = Math.floor((top + bottom) / 2);
    const result = guess(num);

    if (result > 0) {
      low = num + 1;
    } else if (result < 0) {
      high = num - 1;
    } else {
      return num;
    }
  }
};

console.log(guessNumber(10)); // 6
console.log(guessNumber(1)); // 1
console.log(guessNumber(2)); // 1`,difficulty:"easy",id:"guess-number-higher-or-lower",link:"https://leetcode.com/problems/guess-number-higher-or-lower/",name:"Guess Number Higher or Lower",subject:"binary-search",tags:["Binary Search","Interactive"]},{code:`const solution = (isBadVersion) => (n) => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (isBadVersion(mid)) {
      if (isBadVersion(mid - 1)) {
        high = mid - 1;
      } else {
        return mid;
      }
    } else {
      if (isBadVersion(mid + 1)) {
        return mid + 1;
      } else {
        low = mid + 1;
      }
    }
  }
};

console.log(solution(isBadVersion)(5)); // 4
console.log(solution(isBadVersion)(1)); // 1`,difficulty:"easy",id:"first-bad-version",link:"https://leetcode.com/problems/first-bad-version/",name:"First Bad Version",subject:"binary-search",tags:["Binary Search","Interactive"]},{code:`const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    const k = Math.floor((left + right) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }

    if (hours <= h) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23`,difficulty:"medium",id:"koko-eating-bananas",link:"https://leetcode.com/problems/koko-eating-bananas/",name:"Koko Eating Bananas",subject:"binary-search",tags:["Array","Binary Search"]},{code:`const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11`,difficulty:"medium",id:"find-minimum-in-rotated-sorted-array",link:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",name:"Find Minimum in Rotated Sorted Array",subject:"binary-search",tags:["Array","Binary Search"]},{code:`const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1`,difficulty:"medium",id:"search-in-rotated-sorted-array",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/",name:"Search in Rotated Sorted Array",subject:"binary-search",tags:["Array","Binary Search"]},{code:`class TimeMap {
  store = {};

  set(key, value, timestamp) {
    if (!this.store[key]) {
      this.store[key] = [];
    }

    this.store[key].push([value, timestamp]);
  };

  get(key, timestamp) {
    let result = '';
    const values = this.store[key] ?? [];
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (values[middle][1] <= timestamp) {
        result = values[middle][0];
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return result;
  };
};

const timeMap = new TimeMap();
timeMap.set('foo', 'bar', 1);
console.log(timeMap.get('foo', 1)); // 'bar'
console.log(timeMap.get('foo', 3)); // 'bar'
timeMap.set('foo', 'bar2', 4);
console.log(timeMap.get('foo', 4)); // 'bar2'
console.log(timeMap.get('foo', 5)); // 'bar2'`,difficulty:"medium",id:"time-based-key-value-store",link:"https://leetcode.com/problems/time-based-key-value-store/",name:"Time Based Key-Value Store",subject:"binary-search",tags:["Hash Table","String","Binary Search","Design"]},{code:`const reverseList = (head) => {
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

console.log(reverseList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }));
// result: { val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }
console.log(reverseList({ val: 1, next: { val: 2, next: null } })); // { val: 2, next: { val: 1, next: null } }
console.log(reverseList(null)); // null`,difficulty:"easy",id:"reverse-linked-list",link:"https://leetcode.com/problems/reverse-linked-list/",name:"Reverse Linked List",subject:"linked-lists",tags:["Linked List","Recursion"]},{code:`const mergeTwoLists = (list1, list2) => {
  const dummyNode = new ListNode();
  let tail = dummyNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    
    tail = tail.next;
  }
  
  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return dummyNode.next;
};

console.log(mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4, next: null } } }, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));
// result: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null } } } } } }
console.log(mergeTwoLists(null, null)); // null
console.log(mergeTwoLists(null, { val: 0, next: null })); // { val: 0, next: null }`,difficulty:"easy",id:"merge-two-sorted-lists",link:"https://leetcode.com/problems/merge-two-sorted-lists/",name:"Merge Two Sorted Lists",subject:"linked-lists",tags:["Linked List","Recursion"]},{code:`class ListNode {
  prev = null;
  next = null;

  constructor(val) {
    this.val = val;
  }    
}

class MyLinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && currentNode !== this.tail && index === 0) {
      return currentNode.val;
    }

    return -1;
  }

  addAtHead(val) {
    const node = new ListNode(val);
    const next = this.head.next;
    const prev = this.head;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtTail(val) {
    const node = new ListNode(val);
    const next = this.tail;
    const prev = this.tail.prev;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtIndex(index, val) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && index === 0) {
      const node = new ListNode(val);
      const next = currentNode;
      const prev = currentNode.prev;
  
      prev.next = node;
      next.prev = node;
      node.next = next;
      node.prev = prev;
    }
  }

  deleteAtIndex(index, val) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && currentNode !== this.tail && index === 0) {
      const next = currentNode.next;
      const prev = currentNode.prev;
  
      next.prev = prev;
      prev.next = next;
    }
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1)); // 2
myLinkedList.deleteAtIndex(1);
console.log(myLinkedList.get(1)); // 3`,difficulty:"medium",id:"design-linked-list",link:"https://leetcode.com/problems/design-linked-list/",name:"Design Linked List",subject:"doubly-linked-lists",tags:["Linked List","Design"]},{code:`class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }    
}

class BrowserHistory {
  constructor(homepage) {
    this.currentPage = new ListNode(homepage);
  }

  visit(url) {
    this.currentPage.next = new ListNode(url, this.currentPage);
    this.currentPage = this.currentPage.next;
  }

  back(steps) {
    while (this.currentPage.prev && steps > 0) {
      this.currentPage = this.currentPage.prev;
      steps--;
    }

    return this.currentPage.val;
  }

  forward(steps) {
    while (this.currentPage.next && steps > 0) {
      this.currentPage = this.currentPage.next;
      steps--;
    }

    return this.currentPage.val;
  }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');
browserHistory.visit('facebook.com');
browserHistory.visit('youtube.com');
console.log(browserHistory.back(1)); // 'facebook.com'
console.log(browserHistory.back(1)); // 'google.com'
console.log(browserHistory.forward(1)); // 'facebook.com'
browserHistory.visit('linkedin.com');
console.log(browserHistory.forward(2)); // 'linkedin.com'
console.log(browserHistory.back(2)); // 'google.com'
console.log(browserHistory.back(7)); // 'leetcode.com'`,difficulty:"medium",id:"design-browser-history",link:"https://leetcode.com/problems/design-browser-history/",name:"Design Browser History",subject:"doubly-linked-lists",tags:["Array","Linked List","Stack","Design","Doubly-Linked List","Data Stream"]},{code:`class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.head.next.value;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

class MyStack {
  queue = new MyQueue();

  push(x) {
    this.queue.enqueue(x);

    for (let i = 0; i < this.queue.size - 1; i++) {
      this.queue.enqueue(this.queue.dequeue());
    }
  };

  pop() {
    return this.queue.dequeue();
  };

  top() {
    return this.queue.peek();
  };

  empty() {
    return this.queue.isEmpty();
  };
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.empty()); // false`,difficulty:"easy",id:"implement-stack-using-queues",link:"https://leetcode.com/problems/implement-stack-using-queues/",name:"Implement Stack using Queues",subject:"queues",tags:["Stack","Design","Queue"]},{code:`const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null} } } } })); // { val: 3 }
console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } })); // { val: 4 }`,difficulty:"easy",id:"middle-of-the-linked-list",link:"https://leetcode.com/problems/middle-of-the-linked-list/",name:"Middle of the Linked List",subject:"fast-and-slow-pointers",tags:["Linked List","Two Pointers"]},{code:`const pairSum = (head) => {
  let slow = head;
  let fast = head;
  let prev = null;
  let result = 0;

  while (fast?.next) {
    fast = fast.next.next;
    [slow.next, prev, slow] = [prev, slow, slow.next];
  }

  while (slow) {
    result = Math.max(result, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }

  return result;
};

console.log(pairSum({ val: 5, next: { val: 4, next: { val: 2, next: { val: 1, next: null } } } })); // 6
console.log(pairSum({ val: 4, next: { val: 2, next: { val: 2, next: { val: 3, next: null } } } })); // 7
console.log(pairSum({ val: 1, next: { val: 100000, next: null } })); // 100001`,difficulty:"medium",id:"maximum-twin-sum-of-a-linked-list",link:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/",name:"Maximum Twin Sum of a Linked List",subject:"fast-and-slow-pointers",tags:["Linked List","Two Pointers","Stack"]},{code:`const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

const cycleHead1 = { val: 2, next: null }; 
const cycledList1 = { val: 3, next: null };
const cycledList1Tail = { val: 0, next: { val: -4, next: cycleHead1 } };
cycleHead1.next = cycledList1Tail;
cycledList1.next = cycleHead1;

console.log(hasCycle(cycledList1)); // true

const cycledList2 = { val: 1, next: null };
const cycledList2Tail = { val: 2, next: cycledList2 };
cycledList2.next = cycledList2Tail;

console.log(hasCycle(cycledList2)); // true
console.log(hasCycle({ val: 1, next: null })) // false`,difficulty:"easy",id:"linked-list-cycle",link:"https://leetcode.com/problems/linked-list-cycle/",name:"Linked List Cycle",subject:"fast-and-slow-pointers",tags:["Hash Table","Linked List","Two Pointers"]},{code:`const detectCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (!fast?.next) {
    return null;
  }

  let slow2 = head;

  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
};

const cycleHead1 = { val: 2, next: null }; 
const cycledList1 = { val: 3, next: null };
const cycledList1Tail = { val: 0, next: { val: -4, next: cycleHead1 } };
cycleHead1.next = cycledList1Tail;
cycledList1.next = cycleHead1;

console.log(detectCycle(cycledList1)); // { val: 2 }

const cycledList2 = { val: 1, next: null };
const cycledList2Tail = { val: 2, next: cycledList2 };
cycledList2.next = cycledList2Tail;

console.log(detectCycle(cycledList2)); // { val: 1 }
console.log(detectCycle({ val: 1, next: null })); // null`,difficulty:"medium",id:"linked-list-cycle-ii",link:"https://leetcode.com/problems/linked-list-cycle-ii/",name:"Linked List Cycle II",subject:"fast-and-slow-pointers",tags:["Hash Table","Linked List","Two Pointers"]},{code:`const findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3`,difficulty:"medium",id:"find-the-duplicate-number",link:"https://leetcode.com/problems/find-the-duplicate-number/",name:"Find the Duplicate Number",subject:"fast-and-slow-pointers",tags:["Array","Two Pointers","Binary Search","Bit Manipulation"]},{code:`const addTwoNumbers = (l1, l2) => {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;

    let val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    currentNode.next = new ListNode(val);

    currentNode = currentNode.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummyNode.next;
};

console.log(addTwoNumbers(
  { val: 2, next: { val: 4, next: { val: 3, next: null } } },
  { val: 5, next: { val: 6, next: { val: 4, next: null } } }  
)); // { val: 7, next: { val: 0, next: { val: 8, next: null } } }
console.log(addTwoNumbers({ val: 0, next: null }, { val: 0, next: null })); // { val: 0, next: null }
console.log(addTwoNumbers(
  { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } } } } },
  { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } }  
));
// { val: 8, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } }`,difficulty:"medium",id:"add-two-numbers",link:"https://leetcode.com/problems/add-two-numbers/",name:"Add Two Numbers",subject:"linked-lists",tags:["Linked List","Math","Recursion"]},{code:`const reorderList = (head) => {
  let slow = head;
  let fast = head.next;
  
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = null;
  slow.next = null;

  while (second) {
    [second.next, prev, second] = [prev, second, second.next];
  }

  let first = head;
  second = prev;

  while (second) {
    [first.next, second.next, first, second] = [second, first.next, first.next, second.next];
  }
};

const list1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
reorderList(list1);
console.log(list1); // { val: 1, next: { val: 4, next: { val: 2, next: { val: 3, next: null } } } }

const list2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
reorderList(list2);
console.log(list2); // { val: 1, next: { val: 5, next: { val: 2, next: { val: 4, next: { val: 3, next: null } } } } }`,difficulty:"medium",id:"reorder-list",link:"https://leetcode.com/problems/reorder-list/",name:"Reorder List",subject:"fast-and-slow-pointers",tags:["Linked List","Two Pointers","Stack","Recursion"]},{code:`const removeNthFromEnd = (head, n) => {
  const dummyNode = new ListNode(null, head);
  let left = dummyNode;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummyNode.next;
};

console.log(removeNthFromEnd({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}, 2)); // { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: null } } } }
console.log(removeNthFromEnd({ val: 1, next: null }, 1)); // null
console.log(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1)); // { val: 1, next: null }`,difficulty:"medium",id:"remove-nth-node-from-end-of-list",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",name:"Remove Nth Node From End of List",subject:"linked-lists",tags:["Linked List","Two Pointers"]},{code:`const copyRandomList = (head) => {
  const OldToCopy = new Map([[null, null]]);

  let cur = head;

  while (cur) {
    const copy = new Node(cur.val);
    OldToCopy.set(cur, copy);
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const copy = OldToCopy.get(cur);
    copy.next = OldToCopy.get(cur.next);
    copy.random = OldToCopy.get(cur.random);
    cur = cur.next;
  }

  return OldToCopy.get(head);
};

const node1list1 = { val: 7, next: null, random: null };
const node2list1 = { val: 13, next: null, random: node1list1 };
const node3list1 = { val: 11, next: null, random: null };
const node4list1 = { val: 10, next: null, random: node3list1 };
const node5list1 = { val: 7, next: null, random: node1list1 };
node3list1.random = node5list1;
node1list1.next = node2list1;
node2list1.next = node3list1;
node3list1.next = node4list1;
node4list1.next = node5list1;

console.log(copyRandomList(node1list1));

const node1list2 = { val: 1, next: null, random: null };
const node2list2 = { val: 2, next: null, random: null };
node1list2.next = node2list2;
node1list2.random = node2list2;
node2list2.random = node2list2;

console.log(copyRandomList(node1list2));

const node1list3 = { val: 3, next: null, random: null };
const node2list3 = { val: 3, next: null, random: node1list3 };
const node3list3 = { val: 3, next: null, random: null };
node1list3.next = node2list3;
node2list3.next = node3list3;

console.log(copyRandomList(node1list3));`,difficulty:"medium",id:"copy-list-with-random-pointer",link:"https://leetcode.com/problems/copy-list-with-random-pointer/",name:"Copy List with Random Pointer",subject:"linked-lists",tags:["Hash Table","Linked List"]},{code:`const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3`,difficulty:"easy",id:"fibonacci-number",link:"https://leetcode.com/problems/fibonacci-number/",name:"Fibonacci Number",subject:"two-branch-recursion",tags:["Math","Dynamic Programming","Recursion","Memoization"]},{code:`const sortArray = (nums) => {
  const quickSort = (nums, start, end) => {
    if (end - start + 1 <= 1) {
      return nums;
    }

    const pivot = nums[Math.round(Math.random() * (end - start) + start)];

    let left = start;
    let right = end;

    while (left <= right) {
      while (nums[left] < pivot) {
        left++;
      }

      while (nums[right] > pivot) {
        right--;
      }

      if (left <= right) {
        [nums[right], nums[left]] = [nums[left], nums[right]];
        left++;
        right--;
      }
    }

    quickSort(nums, start, right);
    quickSort(nums, left, end);

    return nums;
  };

  return quickSort(nums, 0, nums.length - 1);
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]`,difficulty:"medium",id:"sort-an-array",link:"https://leetcode.com/problems/sort-an-array/",name:"Sort an Array",subject:"quick-sort",tags:["Array","Divide and Conquer","Sorting","Heap (Priority Queue)","Merge Sort","Bucket Sort","Radix Sort","Counting Sort"]},{code:`const sortColors = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }

    i++;
  }
};

const array1 = [2, 0, 2, 1, 1, 0];
sortColors(array1);
console.log(array1); // [0, 0, 1, 1, 2, 2]

const array2 = [2, 0, 1];
sortColors(array2);
console.log(array2); // [0, 1, 2]`,difficulty:"medium",id:"sort-colors",link:"https://leetcode.com/problems/sort-colors/",name:"Sort Colors",subject:"bucket-sort",tags:["Array","Two Pointers","Sorting"]},{code:`const searchBST = (root, val) => {
  if (!root) {
    return null;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }
  
  if (root.val < val) {
    return searchBST(root.right, val);
  }

  return root;
};

console.log(searchBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 2)); // { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }
console.log(searchBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 5)); // null`,difficulty:"easy",id:"search-in-a-binary-search-tree",link:"https://leetcode.com/problems/search-in-a-binary-search-tree/",name:"Search in a Binary Search Tree",subject:"binary-search-tree",tags:["Tree","Binary Search Tree","Binary Tree"]},{code:`const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};

console.log(insertIntoBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 5)); // { val: 4, left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 7, left: { val: 5, left: null, right: null }, right: null } }
console.log(insertIntoBST({
  val: 40,
  left: {
    val: 20,
    left: {
      val: 10,
      left: null,
      right: null
    },
    right: {
      val: 30,
      left: null,
      right: null
    }
  },
  right: {
    val: 60,
    left: {
      val: 50,
      left: null,
      right: null
    },
    right: {
      val: 70,
      left: null,
      right: null
    }
  }
}, 25)); // { val: 40, left: { val: 20, left: { val: 10, left: null, right: null }, right: { val: 30, left: { val: 25, left: null, right: null }, right: null } }, right: { val: 60, left: { val: 50, left: null, right: null }, right: { val: 70, left: null, right: null } } }`,difficulty:"medium",id:"insert-into-a-binary-search-tree",link:"https://leetcode.com/problems/insert-into-a-binary-search-tree/",name:"Insert into a Binary Search Tree",subject:"bst-insert-and-remove",tags:["Tree","Binary Search Tree","Binary Tree"]},{code:`const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    let cur = root.right;

    while (cur && cur.left) {
      cur = cur.left;
    }

    root.val = cur.val;
    root.right = deleteNode(root.right, root.val);
  }

  return root;
};

console.log(deleteNode({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}, 3)); // { val: 5, left: { val: 4, left: { val: 2, left: null, right: null }, right: null }, right: { val: 6, left: null, right: { val: 7, left: null, right: null } } }
console.log(deleteNode({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}, 0)); // { val: 5, left: { val: 3, left: { val: 2, left: null, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 6, left: null, right: { val: 7, left: null, right: null } } }`,difficulty:"medium",id:"delete-node-in-a-bst",link:"https://leetcode.com/problems/delete-node-in-a-bst/",name:"Delete Node in a BST",subject:"bst-insert-and-remove",tags:["Tree","Binary Search Tree","Binary Tree"]},{code:`const inorderTraversal = (root) => {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
};

console.log(inorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [1, 3, 2]
console.log(inorderTraversal(null)); // []
console.log(inorderTraversal({ val: 1, left: null, right: null })); // [1]`,difficulty:"easy",id:"binary-tree-inorder-traversal",link:"https://leetcode.com/problems/binary-tree-inorder-traversal/",name:"Binary Tree Inorder Traversal",subject:"depth-first-search",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},{code:`const kthSmallest = (root, k) => {
  const stack = [];
  let n = 0;
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    n++;
    
    if (n === k) {
      return cur.val;
    }

    cur = cur.right;
  }
};

console.log(kthSmallest({
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}, 1)); // 1
console.log(kthSmallest({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: null
  }
}, 3)); // 3`,difficulty:"medium",id:"kth-smallest-element-in-a-bst",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",name:"Kth Smallest Element in a BST",subject:"depth-first-search",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},{code:`const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
/*
{
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
*/
console.log(buildTree([-1], [-1])); // { val: -1, left: null, right: null }`,difficulty:"medium",id:"construct-binary-tree-from-preorder-and-inorder-traversal",link:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",name:"Construct Binary Tree from Preorder and Inorder Traversal",subject:"depth-first-search",tags:["Array","Hash Table","Divide and Conquer","Tree","Binary Tree"]},{code:`class BSTIterator {
  constructor(root) {
    this.stack = [];

    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next() {
    const node = this.stack.pop();
    let cur = node.right;

    while (cur) {
      this.stack.push(cur);
      cur = cur.left;
    }

    return node.val;
  };

  hasNext() {
    return this.stack.length > 0;
  };
};

const bSTIterator = new BSTIterator({
  val: 7,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
});

console.log(bSTIterator.next()); // 3
console.log(bSTIterator.next()); // 7
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 9
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 15
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 20
console.log(bSTIterator.hasNext()); // false`,difficulty:"medium",id:"binary-search-tree-iterator",link:"https://leetcode.com/problems/binary-search-tree-iterator/",name:"Binary Search Tree Iterator",subject:"depth-first-search",tags:["Stack","Tree","Design","Binary Search Tree","Binary Tree","Iterator"]},{code:`const preorderTraversal = (root) => {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length) {
    if (cur) {
      result.push(cur.val);
      stack.push(cur.right);
      cur = cur.left;
    } else {
      cur = stack.pop();
    }
  }

  return result;
};

console.log(preorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [1, 2, 3]
console.log(preorderTraversal(null)); // []
console.log(preorderTraversal({ val: 1, left: null, right: null })); // [1]`,difficulty:"easy",id:"binary-tree-preorder-traversal",link:"https://leetcode.com/problems/binary-tree-preorder-traversal/",name:"Binary Tree Preorder Traversal",subject:"iterative-depth-first-search",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},{code:`const postorderTraversal = (root) => {
  const result = [];
  const stack = [{ node: root, visited: false }];

  while (stack.length) {
    const { node, visited } = stack.pop();
  
    if (node) {
      if (visited) {
        result.push(node.val);
      } else {
        stack.push({ node: node, visited: true });
        stack.push({ node: node.right, visited: false });
        stack.push({ node: node.left, visited: false });
      }
    }
  }

  return result;
};

console.log(postorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [3, 2, 1]
console.log(postorderTraversal(null)); // []
console.log(postorderTraversal({ val: 1, left: null, right: null })); // [1]`,difficulty:"easy",id:"binary-tree-postorder-traversal",link:"https://leetcode.com/problems/binary-tree-postorder-traversal/",name:"Binary Tree Postorder Traversal",subject:"iterative-depth-first-search",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},{code:`class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

const levelOrder = (root) => {
  const result = [];

  const queue = new MyQueue();
  queue.enqueue(root);

  while (queue.size) {
    const queueLength = queue.size;
    const level = [];

    for (let i = 0; i < queueLength; i++) {
      const node = queue.dequeue();
      
      if (node) {
        level.push(node.val);
        queue.enqueue(node.left);
        queue.enqueue(node.right);        
      }
    }
    
    if (level.length) {
      result.push(level);
    }
  }

  return result;
};

console.log(levelOrder({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})); // [[3], [9, 20], [15, 7]]
console.log(levelOrder({ val: 1, left: null, right: null })); // [[1]]
console.log(levelOrder(null)); // []`,difficulty:"medium",id:"binary-tree-level-order-traversal",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/",name:"Binary Tree Level Order Traversal",subject:"breadth-first-search",tags:["Tree","Breadth-First Search","Binary Tree"]},{code:`class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

const rightSideView = (root) => {
  const result = [];

  const queue = new MyQueue();
  queue.enqueue(root);

  while (queue.size) {
    let rightSide = null;
    const queueLength = queue.size;

    for (let i = 0; i < queueLength; i++) {
      const node = queue.dequeue();
      
      if (node) {
        rightSide = node;
        queue.enqueue(node.left);
        queue.enqueue(node.right);        
      }
    }
    
    if (rightSide) {
      result.push(rightSide.val);
    }
  }

  return result;
};

console.log(rightSideView({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
})); // [1, 3, 4]
console.log(rightSideView({ val: 1, left: null, right: { val: 3, left: null, right: null } })); // [1, 3]
console.log(rightSideView(null)); // []`,difficulty:"medium",id:"binary-tree-right-side-view",link:"https://leetcode.com/problems/binary-tree-right-side-view/",name:"Binary Tree Right Side View",subject:"breadth-first-search",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const invertTree = (root) => {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

console.log(invertTree({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
})); // { val: 4, left: { val: 7, left: { val: 9, left: null, right: null }, right: { val: 6, left: null, right: null } }, right: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } } }
console.log(invertTree({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } }
console.log(invertTree(null)); // null`,difficulty:"easy",id:"invert-binary-tree",link:"https://leetcode.com/problems/invert-binary-tree/",name:"Invert Binary Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})); // 3
console.log(maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: null } })); // 2`,difficulty:"easy",id:"maximum-depth-of-binary-tree",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",name:"Maximum Depth of Binary Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const diameterOfBinaryTree = (root) => {
  let result = 0;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);

  return result;
};

console.log(diameterOfBinaryTree({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // 3
console.log(diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: null })); // 1`,difficulty:"easy",id:"diameter-of-binary-tree",link:"https://leetcode.com/problems/diameter-of-binary-tree/",name:"Diameter of Binary Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Binary Tree"]},{code:`const isBalanced = (root) => {
  let result = true;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (Math.abs(left - right) > 1) {
      result = false;
    }

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return result;
};

console.log(isBalanced({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val:7,
      left: null,
      right: null
    }
  }
})); // true
console.log(isBalanced({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false
console.log(isBalanced(null)); // true`,difficulty:"easy",id:"balanced-binary-tree",link:"https://leetcode.com/problems/balanced-binary-tree/",name:"Balanced Binary Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Binary Tree"]},{code:`const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}, {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // true
console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
}, {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false
console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 1,
    left: null,
    right: null
  }
}, {
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false`,difficulty:"easy",id:"same-tree",link:"https://leetcode.com/problems/same-tree/",name:"Same Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const isSameTree = (root, root2) => {
  if (!root && !root2) {
    return true;
  }

  if (root && root2 && root.val === root2.val) {
    return isSameTree(root.left, root2.left) && isSameTree(root.right, root2.right);
  }

  return false;
};

const isSubtree = (root, subRoot) => {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

console.log(isSubtree({
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}, {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // true
console.log(isSubtree({
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 0,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}, {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false`,difficulty:"easy",id:"subtree-of-another-tree",link:"https://leetcode.com/problems/subtree-of-another-tree/",name:"Subtree of Another Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","String Matching","Binary Tree","Hash Function"]},{code:`const lowestCommonAncestor = (root, p, q) => {
  let cur = root;

  while (cur) {
    if (p > cur.val && q > cur.val) {
      cur = cur.right;
    } else if (p < cur.val && q < cur.val) {
      cur = cur.left;
    } else {    
      return cur;
    }
  }
};

console.log(lowestCommonAncestor({
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}, 2, 8)); // 6
console.log(lowestCommonAncestor({
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}, 2, 4)); // 2
console.log(lowestCommonAncestor({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}, 2, 1)); // 2`,difficulty:"medium",id:"lowest-common-ancestor-of-a-binary-search-tree",link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",name:"Lowest Common Ancestor of a Binary Search Tree",subject:"binary-search-tree",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},{code:`const goodNodes = (root) => {
  const dfs = (node, maxVal) => {
    if (!node) {
      return 0;
    }

    let result = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, node.val);
    result += dfs(node.left, maxVal);
    result += dfs(node.right, maxVal);
    return result;
  };

  return dfs(root, root.val);
};

console.log(goodNodes({
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
})); // 4
console.log(goodNodes({
  val: 3,
  left: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: null
})); // 3
console.log(goodNodes({
  val: 1,
  left: null,
  right: null
})); // 1`,difficulty:"medium",id:"count-good-nodes-in-binary-tree",link:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/",name:"Count Good Nodes in Binary Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const isValidBST = (root) => {
  const valid = (node, left, right) => {
    if (!node) {
      return true;
    }

    if (!(node.val < right && node.val > left)) {
      return false;
    }

    return valid(node.left, left, node.val) && valid(node.right, node.val, right);
  }

  return valid(root, -Infinity, Infinity);
};

console.log(isValidBST({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // true
console.log(isValidBST({
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
})); // false`,difficulty:"medium",id:"validate-binary-search-tree",link:"https://leetcode.com/problems/validate-binary-search-tree/",name:"Validate Binary Search Tree",subject:"depth-first-search",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},{code:`const hasPathSum = (root, targetSum) => {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

console.log(hasPathSum({
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}, 22)); // true
console.log(hasPathSum({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }, 0)); // false
console.log(hasPathSum(null, 0)); // false`,difficulty:"easy",id:"path-sum",link:"https://leetcode.com/problems/path-sum/",name:"Path Sum",subject:"backtracking",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},{code:`const generateParenthesis = (n) => {
  const result = [];

  const backtrack = (openN, closedN, path) => {
    if (openN === closedN && openN === n) {
      result.push(path);
      return;
    }

    if (openN < n) {
      backtrack(openN + 1, closedN, path + '(');
    }

    if (closedN < openN) {
      backtrack(openN, closedN + 1, path + ')');
    }
  };

  backtrack(0, 0, '');

  return result;
};

console.log(generateParenthesis(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
console.log(generateParenthesis(1)); // ['()']`,difficulty:"medium",id:"generate-parentheses",link:"https://leetcode.com/problems/generate-parentheses/",name:"Generate Parentheses",subject:"backtracking",tags:["String","Dynamic Programming","Backtracking"]},{code:`const subsets = (nums) => {
  const result = [];
  const subset = [];

  const backtracking = (i) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtracking(i + 1);

    subset.pop();
    backtracking(i + 1);
  };

  backtracking(0);

  return result;
};

console.log(subsets([1, 2, 3])); // [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]
console.log(subsets([0])); // [[0], []]`,difficulty:"medium",id:"subsets",link:"https://leetcode.com/problems/subsets/",name:"Subsets",subject:"subsets",tags:["Array","Backtracking","Bit Manipulation"]},{code:`const subsetsWithDup = (nums) => {
  nums.sort();

  const result = [];

  const backtracking = (i, subset) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtracking(i + 1, subset);
    subset.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    backtracking(i + 1, subset);
  };

  backtracking(0, []);

  return result;
};

console.log(subsetsWithDup([1, 2, 2])); // [[1, 2, 2], [1, 2], [1], [2, 2], [2], []]
console.log(subsetsWithDup([0])); // [[0], []]`,difficulty:"medium",id:"subsets-ii",link:"https://leetcode.com/problems/subsets-ii/",name:"Subsets II",subject:"subsets",tags:["Array","Backtracking","Bit Manipulation"]},{code:`const combine = (n, k) => {
  const result = [];

  const backtrack = (start, combination) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      backtrack(i + 1, combination);
      combination.pop();
    }
  };

  backtrack(1, []);

  return result;
};

console.log(combine(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log(combine(1, 1)); // [[1]]`,difficulty:"medium",id:"combinations",link:"https://leetcode.com/problems/combinations/",name:"Combinations",subject:"combinations",tags:["Backtracking"]},{code:`const combinationSum = (candidates, target) => {
  const result = [];

  const backtrack = (i, cur, total) => {
    if (total === target) {
      result.push([...cur]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    backtrack(i, cur, total + candidates[i]);
    cur.pop();
    backtrack(i + 1, cur, total);
  };

  backtrack(0, [], 0);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // []`,difficulty:"medium",id:"combination-sum",link:"https://leetcode.com/problems/combination-sum/",name:"Combination Sum",subject:"combinations",tags:["Array","Backtracking"]},{code:`const DigitToChar = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

const letterCombinations = (digits) => {
  const result = [];

  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      result.push(curStr);
      return;
    }

    for (let char of DigitToChar[digits[i]]) {
      backtrack(i + 1, curStr + char);
    }
  };

  if (digits) {
    backtrack(0, '');
  }

  return result;
};

console.log(letterCombinations('23')); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ['a', 'b', 'c']`,difficulty:"medium",id:"letter-combinations-of-a-phone-number",link:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",name:"Letter Combinations of a Phone Number",subject:"combinations",tags:["Hash Table","String","Backtracking"]},{code:`const permute = (nums) => {
  const result = [];

  const backtrack = (i) => {
    if (i >= nums.length) {
      result.push([...nums]);
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  backtrack(0);

  return result;
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
console.log(permute([1])); // [[1]]`,difficulty:"medium",id:"permutations",link:"https://leetcode.com/problems/permutations/",name:"Permutations",subject:"permutations",tags:["Array","Backtracking"]},{code:`const permuteUnique = (nums) => {
  const result = [];
  const permutation = [];
  const count = {};

  nums.forEach((num) => {
    count[num] = 1 + (count[num] ?? 0);
  });

  const backtrack = () => {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }

    Object.keys(count).forEach((num) => {
      if (count[num] > 0) {
        permutation.push(num);
        count[num]--;

        backtrack();

        permutation.pop();
        count[num]++;
      }
    });
  }

  backtrack(0);

  return result;
};

console.log(permuteUnique([1, 1, 2])); // [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
console.log(permuteUnique([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`,difficulty:"medium",id:"permutations-ii",link:"https://leetcode.com/problems/permutations-ii/",name:"Permutations II",subject:"permutations",tags:["Array","Backtracking"]},{code:`const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b);

  const result = [];

  const backtrack = (cur, position, target) => {
    if (target === 0) {
      result.push([...cur]);
    }

    if (target <= 0) {
      return;
    }

    let prev = -1;

    for (let i = position; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      cur.push(candidates[i]);
      backtrack(cur, i + 1, target - candidates[i]);
      cur.pop();
      prev = candidates[i];
    }
  };

  backtrack([], 0, target);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1, 2, 2], [5]]`,difficulty:"medium",id:"combination-sum-ii",link:"https://leetcode.com/problems/combination-sum-ii/",name:"Combination Sum II",subject:"combinations",tags:["Array","Backtracking"]},{code:`const exist = (board, word) => {
  const rowsCount = board.length;
  const columnsCount = board[0].length;

  const backtrack = (row, col, i) => {
    if (i === word.length) {
      return true;
    }

    if (row < 0
      || col < 0
      || row >= rowsCount
      || col >= columnsCount
      || word[i] !== board[row][col]
    ) {
      return false;
    }

    board[row][col] = '.';

    const result = backtrack(row + 1, col, i + 1)
      || backtrack(row - 1, col, i + 1)
      || backtrack(row, col + 1, i + 1)
      || backtrack(row, col - 1, i + 1);

    board[row][col] = word[i];

    return result;
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (backtrack(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')); // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE')); // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB')); // false`,difficulty:"medium",id:"word-search",link:"https://leetcode.com/problems/word-search/",name:"Word Search",subject:"backtracking",tags:["Array","Backtracking","Matrix"]},{code:`const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const partition = (s) => {
  const result = [];
  const part = [];

  const backtrack = (i) => {
    if (i >= s.length) {
      result.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        part.push(s.slice(i, j + 1));
        backtrack(j + 1);
        part.pop();
      }
    }
  };

  backtrack(0);

  return result;
};

console.log(partition('aab', [['a', 'a', 'b'], ['aa', 'b']])); // true
console.log(partition('a', [['a']])); // false`,difficulty:"medium",id:"palindrome-partitioning",link:"https://leetcode.com/problems/palindrome-partitioning/",name:"Palindrome Partitioning",subject:"backtracking",tags:["String","Dynamic Programming","Backtracking"]},{code:`const numIslands = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  let result = 0;

  const dfs = (row, col) => {
    if (row < 0
      || row >= rowsCount
      || col < 0
      || col >= columnsCount
      || grid[row][col] === '0'
    ) {
      return;
    }

    grid[row][col] = '0';

    dfs(row + 1, col);    
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (grid[row][col] === '1') {
        result++;
        dfs(row, col);
      }
    }
  }

  return result;
};

console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
])); // 1
console.log(numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
])); // 3`,difficulty:"medium",id:"number-of-islands",link:"https://leetcode.com/problems/number-of-islands/",name:"Number of Islands",subject:"matrix-depth-first-search",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},{code:`const maxAreaOfIsland = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  const visited = new Set();
  let result = 0;

  const dfs = (row, col) => {
    if (row < 0
      || row >= rowsCount
      || col < 0
      || col >= columnsCount
      || grid[row][col] === 0
      || visited.has(\`\${row}-\${col}\`)
    ) {
      return 0;
    }

    visited.add(\`\${row}-\${col}\`);

    return 1
      + dfs(row + 1, col)
      + dfs(row - 1, col)
      + dfs(row, col + 1)
      + dfs(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      result = Math.max(result, dfs(row, col));
    }
  }

  return result;
};

console.log(maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
])); // 6
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])); // 0`,difficulty:"medium",id:"max-area-of-island",link:"https://leetcode.com/problems/max-area-of-island/",name:"Max Area of Island",subject:"matrix-depth-first-search",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},{code:`const pacificAtlantic = (heights) => {
  const rowsCount = heights.length;
  const columnsCount = heights[0].length;
  const pacific = new Set();
  const atlantic = new Set();
  const result = [];

  const dfs = (row, col, ocean, prevHeight) => {
    if (ocean.has(\`\${row},\${col}\`)
      || Math.min(row, col) < 0
      || row >= rowsCount
      || col >= columnsCount
      || heights[row][col] < prevHeight
    ) {
      return;
    }

    ocean.add(\`\${row},\${col}\`);

    dfs(row + 1, col, ocean, heights[row][col]);
    dfs(row - 1, col, ocean, heights[row][col]);
    dfs(row, col + 1, ocean, heights[row][col]);
    dfs(row, col - 1, ocean, heights[row][col]);
  };

  for (let col = 0; col < columnsCount; col++) {
    dfs(0, col, pacific, 0);
    dfs(rowsCount - 1, col, atlantic, 0);
  }

  for (let row = 0; row < rowsCount; row++) {
    dfs(row, 0, pacific, 0);
    dfs(row, columnsCount - 1, atlantic, 0);
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (pacific.has(\`\${row},\${col}\`) && atlantic.has(\`\${row},\${col}\`)) {
        result.push([row, col]);
      }
    }
  }

  return result;
};

console.log(pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4 ,5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
])); // [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
console.log(pacificAtlantic([[1]])); // [[0, 0]]`,difficulty:"medium",id:"pacific-atlantic-water-flow",link:"https://leetcode.com/problems/pacific-atlantic-water-flow/",name:"Pacific Atlantic Water Flow",subject:"matrix-depth-first-search",tags:["Array","Depth-First Search","Breadth-First Search","Matrix"]},{code:`const solve = (board) => {
  const rowsCount = board.length;
  const columnsCount = board[0].length;

  const capture = (row, col) => {
    if (Math.min(row, col) < 0
      || row >= rowsCount
      || col >= columnsCount
      || board[row][col] !== 'O'
    ) {
      return;
    }

    board[row][col] = 'T';

    capture(row + 1, col);
    capture(row - 1, col);
    capture(row, col + 1);
    capture(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (board[row][col] === 'O'
        && ([0, rowsCount - 1].includes(row) || [0, columnsCount - 1].includes(col))) {
          capture(row, col);
        }
    }
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X';
      }

      if (board[row][col] === 'T') {
        board[row][col] = 'O';
      }
    }
  }
};

const board1 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
];
solve(board1);
console.log(board1);
/*
  [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X']
  ]
*/

const board2 = [['X']];
solve(board2);
console.log(board2); // [['X']]`,difficulty:"medium",id:"surrounded-regions",link:"https://leetcode.com/problems/surrounded-regions/",name:"Surrounded Regions",subject:"matrix-depth-first-search",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},{code:`const DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

class MyListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  length = 0;

  constructor() {
    this.head = new MyListNode(null);
    this.tail = new MyListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new MyListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.length++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.length--;

    return value;
  }
}

const shortestPathBinaryMatrix = (grid) => {
  const n = grid.length;
  const queue = new MyQueue();
  const visited = new Set(\`\${0},\${0}\`);
  queue.enqueue([0, 0, 1]);

  while (queue.length) {
    const [row, col, length] = queue.dequeue();
    
    if (Math.min(row, col) < 0
      || Math.max(row, col) >= n
      || grid[row][col]
    ) {
      continue;
    }

    if (row === n - 1 && col === n - 1) {
      return length;
    }
    
    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (!visited.has(\`\${newRow},\${newCol}\`)) {
        queue.enqueue([newRow, newCol, length + 1]);
        visited.add(\`\${newRow},\${newCol}\`);
      }
    }
  }

  return -1;
};

console.log(shortestPathBinaryMatrix([
  [0, 1],
  [1, 0]
])); // 2
console.log(shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
])); // 4`,difficulty:"medium",id:"shortest-path-in-binary-matrix",link:"https://leetcode.com/problems/shortest-path-in-binary-matrix/",name:"Shortest Path in Binary Matrix",subject:"matrix-breadth-first-search",tags:["Array","Breadth-First Search","Matrix"]},{code:`const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

class MyListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  length = 0;

  constructor() {
    this.head = new MyListNode(null);
    this.tail = new MyListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new MyListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.length++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.length--;

    return value;
  }
}

const orangesRotting = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  const queue = new MyQueue();
  let time = 0;
  let freshCount = 0;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (grid[row][col] === 1) {
        freshCount++;
      }
      
      if (grid[row][col] === 2) {
        queue.enqueue([row, col]);
      }
    }
  }

  while (queue.length && freshCount) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const [row, col] = queue.dequeue();

      for (const [dr, dc] of DIRECTIONS) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (Math.min(newRow, newCol) < 0
          || newRow >= rowsCount
          || newCol >= columnsCount
          || grid[newRow][newCol] !== 1
        ) {
          continue;
        }

        grid[newRow][newCol] = 2;
        queue.enqueue([newRow, newCol]);
        freshCount--;
      }
    }

    time++;
  }

  return freshCount ? -1 : time;
};

console.log(orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
])); // 4
console.log(orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
])); // -1
console.log(orangesRotting([
  [0, 2]
])); // 0`,difficulty:"medium",id:"rotting-oranges",link:"https://leetcode.com/problems/rotting-oranges/",name:"Rotting Oranges",subject:"matrix-breadth-first-search",tags:["Array","Breadth-First Search","Matrix"]},{code:`const cloneGraph = (node) => {
  const OldToNew = new Map();

  const dfs = (node) => {
    if (OldToNew.has(node)) {
      return OldToNew.get(node);
    }

    const copy = new Node(node.val);
    OldToNew.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return node ? dfs(node) : node;
};

const node1 = { val: 1, neighbors: [] };
const node2 = { val: 2, neighbors: [] };
const node3 = { val: 3, neighbors: [] };
const node4 = { val: 4, neighbors: [] };

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

console.log(cloneGraph(node1));
console.log(cloneGraph({ val: 1, neighbors: [] })); // { val: 1, neighbors: [] }
console.log(cloneGraph(null)); // null`,difficulty:"medium",id:"clone-graph",link:"https://leetcode.com/problems/clone-graph/",name:"Clone Graph",subject:"adjacency-list",tags:["Hash Table","Depth-First Search","Breadth-First Search","Graph"]},{code:`const canFinish = (numCourses, prerequisites) => {
  const preMap = new Map();

  for (let course = 0; course < numCourses; course++) {
    preMap.set(course, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    preMap.get(course).push(prerequisite);
  }

  const visited = new Set();

  const dfs = (course) => {
    if (visited.has(course)) {
      return false;
    }

    if (preMap.get(course).length === 0) {
      return true;
    }

    visited.add(course);

    for (const prerequisite of preMap.get(course)) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }

    visited.delete(course);
    preMap.set(course, []);

    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false`,difficulty:"medium",id:"course-schedule",link:"https://leetcode.com/problems/course-schedule/",name:"Course Schedule",subject:"adjacency-list",tags:["Depth-First Search","Breadth-First Search","Graph","Topological sort"]},{code:`const findOrder = (numCourses, prerequisites) => {
  const preMap = new Map();

  for (let course = 0; course < numCourses; course++) {
    preMap.set(course, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    preMap.get(course).push(prerequisite);
  }

  const visited = new Set();
  const cycle = new Set();
  const result = [];

  const dfs = (course) => {
    if (cycle.has(course)) {
      return false;
    }

    if (visited.has(course)) {
      return true;
    }

    cycle.add(course);

    for (const prerequisite of preMap.get(course)) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }

    cycle.delete(course);
    visited.add(course);
    result.push(course);

    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return [];
    }
  }

  return result;
};

console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 1, 2, 3]
console.log(findOrder(1, [])); // [0]`,difficulty:"medium",id:"course-schedule-ii",link:"https://leetcode.com/problems/course-schedule-ii/",name:"Course Schedule II",subject:"adjacency-list",tags:["Depth-First Search","Breadth-First Search","Graph","Topological sort"]},{code:`const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    [rob1, rob2] = [rob2, Math.max(rob1 + num, rob2)];
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12`,difficulty:"medium",id:"house-robber",link:"https://leetcode.com/problems/house-robber/",name:"House Robber",subject:"one-dimension-dp",tags:["Array","Dynamic Programming"]},{code:`const rob = (nums) => {
  const helper = (start, end) => {
    let rob1 = 0;
    let rob2 = 0;

    for (let i = start; i < end; i++) {      
      [rob1, rob2] = [rob2, Math.max(rob1 + nums[i], rob2)];
    }

    return rob2;
  };

  return Math.max(nums[0], helper(0, nums.length - 1), helper(1, nums.length));
};

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 2, 3])); // 3`,difficulty:"medium",id:"house-robber-ii",link:"https://leetcode.com/problems/house-robber-ii/",name:"House Robber II",subject:"one-dimension-dp",tags:["Array","Dynamic Programming"]},{code:`const longestPalindrome = (s) => {
  let result = '';
  let substr = '';

  for (let i = 0; i < s.length; i++) {
    substr = '';
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {      
      substr = substr ? \`\${s[left]}\${substr}\${s[right]}\` : s[i];

      if (result.length < substr.length) {
        result = substr;
      }

      left--;
      right++;
    }

    substr = '';
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      substr = \`\${s[left]}\${substr}\${s[right]}\`;

      if (result.length < substr.length) {
        result = substr;
      }

      left--;
      right++;
    }
  }

  return result;
};

console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'`,difficulty:"medium",id:"longest-palindromic-substring",link:"https://leetcode.com/problems/longest-palindromic-substring/",name:"Longest Palindromic Substring",subject:"palindromes",tags:["String","Dynamic Programming"]},{code:`const countSubstrings = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++;
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++;
      left--;
      right++;
    }
  }

  return result;
};

console.log(countSubstrings('abc')); // 3
console.log(countSubstrings('aaa')); // 6`,difficulty:"medium",id:"palindromic-substrings",link:"https://leetcode.com/problems/palindromic-substrings/",name:"Palindromic Substrings",subject:"palindromes",tags:["String","Dynamic Programming"]},{code:`const insert = (intervals, newInterval) => {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
    }
  }

  result.push(newInterval);
  return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1, 2], [3, 10], [12, 16]]`,difficulty:"medium",id:"insert-interval",link:"https://leetcode.com/problems/insert-interval/",name:"Insert Interval",subject:"intervals",tags:["Array"]},{code:`const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (i = 1; i < intervals.length; i++) {
    const lastEnd = result.at(-1)[1];

    if (lastEnd < intervals[i][0]) {
      result.push(intervals[i]);
    } else {
      result.at(-1)[1] = Math.max(lastEnd, intervals[i][1]);
    }
  }

  return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // [[1, 5]]`,difficulty:"medium",id:"merge-intervals",link:"https://leetcode.com/problems/merge-intervals/",name:"Merge Intervals",subject:"intervals",tags:["Array","Sorting"]},{code:`const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      result++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    }
  }

  return result;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0`,difficulty:"medium",id:"non-overlapping-intervals",link:"https://leetcode.com/problems/non-overlapping-intervals/",name:"Non-overlapping Intervals",subject:"intervals",tags:["Array","Dynamic Programming","Greedy","Sorting"]},{code:`class TrieNode {
  isEndOfWord = false;
  children = new Map();
}

class Trie {
  root = new TrieNode();

  insert(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new TrieNode());
      }

      cur = cur.children.get(char);
    }

    cur.isEndOfWord = true;
  };

  search(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        return false;
      }

      cur = cur.children.get(char);
    }

    return cur.isEndOfWord;
  };

  startsWith(prefix) {
    let cur = this.root;

    for (const char of prefix) {
      if (!cur.children.has(char)) {
        return false;
      }

      cur = cur.children.get(char);
    }

    return true;
  };
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true`,difficulty:"medium",id:"implement-trie-prefix-tree",link:"https://leetcode.com/problems/implement-trie-prefix-tree/",name:"Implement Trie (Prefix Tree)",subject:"trie",tags:["Hash Table","String","Design","Trie"]},{code:`class TrieNode {
  isEndOfWord = false;
  children = new Map();
}

class WordDictionary {
  root = new TrieNode();

  addWord(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new TrieNode());
      }

      cur = cur.children.get(char);
    }

    cur.isEndOfWord = true;
  };

  search(word) {
    return this.#dfs(word, 0, this.root);
  };

  #dfs(word, index, root) {
    let cur = root;

    for (let i = index; i < word.length; i++) {
      if (word[i] === '.') {
        for (const child of cur.children.values()) {
          if (this.#dfs(word, i + 1, child)) {
            return true;
          }
        }

        return false;
      }

      if (!cur.children.has(word[i])) {
        return false;
      }

      cur = cur.children.get(word[i]);
    }

    return cur.isEndOfWord;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad')); // false
console.log(wordDictionary.search('bad')); // true
console.log(wordDictionary.search('.ad')); // true
console.log(wordDictionary.search('b..')); // true`,difficulty:"medium",id:"design-add-and-search-words-data-structure",link:"https://leetcode.com/problems/design-add-and-search-words-data-structure/",name:"Design Add and Search Words Data Structure",subject:"trie",tags:["String","Depth-First Search","Design","Trie"]},{code:`const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (const num of nums) {
    currentSum = Math.max(currentSum, 0) + num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23`,difficulty:"medium",id:"maximum-subarray",link:"https://leetcode.com/problems/maximum-subarray/",name:"Maximum Subarray",subject:"kadanes-algorithm",tags:["Array","Divide and Conquer","Dynamic Programming"]},{code:`const maxSubarraySumCircular = (nums) => {
  let maxSum = -Infinity;
  let minSum = Infinity;
  let currentMaxSum = 0;
  let currentMinSum = 0;
  let total = 0;

  for (const num of nums) {
    currentMaxSum = Math.max(currentMaxSum + num, num);
    currentMinSum = Math.min(currentMinSum + num, num);
    total += num;
    maxSum = Math.max(maxSum, currentMaxSum);
    minSum = Math.min(minSum, currentMinSum);
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
console.log(maxSubarraySumCircular([5, -3, 5])); // 10
console.log(maxSubarraySumCircular([-3, -2, -3])); // -2`,difficulty:"medium",id:"maximum-sum-circular-subarray",link:"https://leetcode.com/problems/maximum-sum-circular-subarray/",name:"Maximum Sum Circular Subarray",subject:"kadanes-algorithm",tags:["Array","Divide and Conquer","Dynamic Programming","Queue","Monotonic Queue"]},{code:`const canJump = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false`,difficulty:"medium",id:"jump-game",link:"https://leetcode.com/problems/jump-game/",name:"Jump Game",subject:"greedy",tags:["Array","Dynamic Programming","Greedy"]},{code:`const jump = (nums) => {
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let farthest = 0;

    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    left = right + 1;
    right = farthest;
    result++;
  }

  return result;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2`,difficulty:"medium",id:"jump-game-ii",link:"https://leetcode.com/problems/jump-game-ii/",name:"Jump Game II",subject:"greedy",tags:["Array","Dynamic Programming","Greedy"]},{code:`const partitionLabels = (s) => {
  const CharToLastIndex = {};

  for (let i = 0; i < s.length; i++) {
    CharToLastIndex[s[i]] = i;
  }

  const result = [];
  let size = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    size++;
    end = Math.max(end, CharToLastIndex[s[i]]);

    if (i === end) {
      result.push(size);
      size = 0;
    }
  }

  return result;
};

console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
console.log(partitionLabels('eccbbbbdec')); // [10]`,difficulty:"medium",id:"partition-labels",link:"https://leetcode.com/problems/partition-labels/",name:"Partition Labels",subject:"greedy",tags:["Hash Table","Two Pointers","String","Greedy"]}];function Py(e){return!!Ul[e]}function r9({subjectId:e,subjectsMatch:n,taskId:r,tasksMatch:i}){const s=[{title:"Главная",to:"/"}];if((n||e)&&s.push({title:"Список тем",to:"/subjects"}),Py(e)&&s.push({title:Ul[e],to:`/subjects/${e}`}),(i||r)&&s.push({title:"Список задач",to:"/tasks"}),r){const a=ga.find(o=>o.id===r);a!=null&&a.name&&s.push({title:a.name,to:`/tasks/${r}`})}return s}function i9(){const{taskId:e,subjectId:n}=k1(),r=Tu("/subjects"),i=Tu("/tasks");return t.jsx("nav",{children:t.jsx("ul",{className:"flex flex-wrap gap-x-2",children:r9({subjectId:n,subjectsMatch:r,taskId:e,tasksMatch:i}).map(({title:s,to:a},o,l)=>t.jsxs(D.Fragment,{children:[t.jsx("li",{children:t.jsx(ZA,{className:({isActive:c})=>c?"focus-visible:outline-0 pointer-events-none":"focus-visible:outline-0 focus-visible:underline hover:underline",end:!0,to:a,children:s})}),o<l.length-1&&t.jsx("li",{children:t.jsx("span",{children:">"})})]},s))})})}function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Cr.apply(this,arguments)}function s9(e,n){if(e==null)return{};var r={},i=Object.keys(e),s,a;for(a=0;a<i.length;a++)s=i[a],!(n.indexOf(s)>=0)&&(r[s]=e[s]);return r}function xx(e){if(e)throw e}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var a9=function(n){return n!=null&&n.constructor!=null&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)};const Uy=Vi(a9);var Do=Object.prototype.hasOwnProperty,By=Object.prototype.toString,Ex=Object.defineProperty,Tx=Object.getOwnPropertyDescriptor,yx=function(n){return typeof Array.isArray=="function"?Array.isArray(n):By.call(n)==="[object Array]"},Sx=function(n){if(!n||By.call(n)!=="[object Object]")return!1;var r=Do.call(n,"constructor"),i=n.constructor&&n.constructor.prototype&&Do.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!r&&!i)return!1;var s;for(s in n);return typeof s>"u"||Do.call(n,s)},Nx=function(n,r){Ex&&r.name==="__proto__"?Ex(n,r.name,{enumerable:!0,configurable:!0,value:r.newValue,writable:!0}):n[r.name]=r.newValue},_x=function(n,r){if(r==="__proto__")if(Do.call(n,r)){if(Tx)return Tx(n,r).value}else return;return n[r]},o9=function e(){var n,r,i,s,a,o,l=arguments[0],c=1,d=arguments.length,h=!1;for(typeof l=="boolean"&&(h=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<d;++c)if(n=arguments[c],n!=null)for(r in n)i=_x(l,r),s=_x(n,r),l!==s&&(h&&s&&(Sx(s)||(a=yx(s)))?(a?(a=!1,o=i&&yx(i)?i:[]):o=i&&Sx(i)?i:{},Nx(l,{name:r,newValue:e(h,o,s)})):typeof s<"u"&&Nx(l,{name:r,newValue:s}));return l};const Ax=Vi(o9);function Su(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function l9(){const e=[],n={run:r,use:i};return n;function r(...s){let a=-1;const o=s.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...s);function l(c,...d){const h=e[++a];let b=-1;if(c){o(c);return}for(;++b<s.length;)(d[b]===null||d[b]===void 0)&&(d[b]=s[b]);s=d,h?c9(h,l)(...d):o(null,...d)}}function i(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),n}}function c9(e,n){let r;return i;function i(...o){const l=e.length>o.length;let c;l&&o.push(s);try{c=e.apply(this,o)}catch(d){const h=d;if(l&&r)throw h;return s(h)}l||(c instanceof Promise?c.then(a,s):c instanceof Error?s(c):a(c))}function s(o,...l){r||(r=!0,n(o,...l))}function a(o){s(null,o)}}function d9(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?jx(e.position):"start"in e||"end"in e?jx(e):"line"in e||"column"in e?Nu(e):""}function Nu(e){return vx(e&&e.line)+":"+vx(e&&e.column)}function jx(e){return Nu(e&&e.start)+"-"+Nu(e&&e.end)}function vx(e){return e&&typeof e=="number"?e:1}class Wt extends Error{constructor(n,r,i){const s=[null,null];let a={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof r=="string"&&(i=r,r=void 0),typeof i=="string"){const o=i.indexOf(":");o===-1?s[1]=i:(s[0]=i.slice(0,o),s[1]=i.slice(o+1))}r&&("type"in r||"position"in r?r.position&&(a=r.position):"start"in r||"end"in r?a=r:("line"in r||"column"in r)&&(a.start=r)),this.name=d9(r)||"1:1",this.message=typeof n=="object"?n.message:n,this.stack="",typeof n=="object"&&n.stack&&(this.stack=n.stack),this.reason=this.message,this.fatal,this.line=a.start.line,this.column=a.start.column,this.position=a,this.source=s[0],this.ruleId=s[1],this.file,this.actual,this.expected,this.url,this.note}}Wt.prototype.file="";Wt.prototype.name="";Wt.prototype.reason="";Wt.prototype.message="";Wt.prototype.stack="";Wt.prototype.fatal=null;Wt.prototype.column=null;Wt.prototype.line=null;Wt.prototype.source=null;Wt.prototype.ruleId=null;Wt.prototype.position=null;const fn={basename:u9,dirname:h9,extname:p9,join:m9,sep:"/"};function u9(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');_a(e);let r=0,i=-1,s=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;s--;)if(e.charCodeAt(s)===47){if(a){r=s+1;break}}else i<0&&(a=!0,i=s+1);return i<0?"":e.slice(r,i)}if(n===e)return"";let o=-1,l=n.length-1;for(;s--;)if(e.charCodeAt(s)===47){if(a){r=s+1;break}}else o<0&&(a=!0,o=s+1),l>-1&&(e.charCodeAt(s)===n.charCodeAt(l--)?l<0&&(i=s):(l=-1,i=o));return r===i?i=o:i<0&&(i=e.length),e.slice(r,i)}function h9(e){if(_a(e),e.length===0)return".";let n=-1,r=e.length,i;for(;--r;)if(e.charCodeAt(r)===47){if(i){n=r;break}}else i||(i=!0);return n<0?e.charCodeAt(0)===47?"/":".":n===1&&e.charCodeAt(0)===47?"//":e.slice(0,n)}function p9(e){_a(e);let n=e.length,r=-1,i=0,s=-1,a=0,o;for(;n--;){const l=e.charCodeAt(n);if(l===47){if(o){i=n+1;break}continue}r<0&&(o=!0,r=n+1),l===46?s<0?s=n:a!==1&&(a=1):s>-1&&(a=-1)}return s<0||r<0||a===0||a===1&&s===r-1&&s===i+1?"":e.slice(s,r)}function m9(...e){let n=-1,r;for(;++n<e.length;)_a(e[n]),e[n]&&(r=r===void 0?e[n]:r+"/"+e[n]);return r===void 0?".":f9(r)}function f9(e){_a(e);const n=e.charCodeAt(0)===47;let r=g9(e,!n);return r.length===0&&!n&&(r="."),r.length>0&&e.charCodeAt(e.length-1)===47&&(r+="/"),n?"/"+r:r}function g9(e,n){let r="",i=0,s=-1,a=0,o=-1,l,c;for(;++o<=e.length;){if(o<e.length)l=e.charCodeAt(o);else{if(l===47)break;l=47}if(l===47){if(!(s===o-1||a===1))if(s!==o-1&&a===2){if(r.length<2||i!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){if(c=r.lastIndexOf("/"),c!==r.length-1){c<0?(r="",i=0):(r=r.slice(0,c),i=r.length-1-r.lastIndexOf("/")),s=o,a=0;continue}}else if(r.length>0){r="",i=0,s=o,a=0;continue}}n&&(r=r.length>0?r+"/..":"..",i=2)}else r.length>0?r+="/"+e.slice(s+1,o):r=e.slice(s+1,o),i=o-s-1;s=o,a=0}else l===46&&a>-1?a++:a=-1}return r}function _a(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const b9={cwd:x9};function x9(){return"/"}function _u(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function E9(e){if(typeof e=="string")e=new URL(e);else if(!_u(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return T9(e)}function T9(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let r=-1;for(;++r<n.length;)if(n.charCodeAt(r)===37&&n.charCodeAt(r+1)===50){const i=n.charCodeAt(r+2);if(i===70||i===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(n)}const Yc=["history","path","basename","stem","extname","dirname"];class y9{constructor(n){let r;n?typeof n=="string"||S9(n)?r={value:n}:_u(n)?r={path:n}:r=n:r={},this.data={},this.messages=[],this.history=[],this.cwd=b9.cwd(),this.value,this.stored,this.result,this.map;let i=-1;for(;++i<Yc.length;){const a=Yc[i];a in r&&r[a]!==void 0&&r[a]!==null&&(this[a]=a==="history"?[...r[a]]:r[a])}let s;for(s in r)Yc.includes(s)||(this[s]=r[s])}get path(){return this.history[this.history.length-1]}set path(n){_u(n)&&(n=E9(n)),Zc(n,"path"),this.path!==n&&this.history.push(n)}get dirname(){return typeof this.path=="string"?fn.dirname(this.path):void 0}set dirname(n){wx(this.basename,"dirname"),this.path=fn.join(n||"",this.basename)}get basename(){return typeof this.path=="string"?fn.basename(this.path):void 0}set basename(n){Zc(n,"basename"),Xc(n,"basename"),this.path=fn.join(this.dirname||"",n)}get extname(){return typeof this.path=="string"?fn.extname(this.path):void 0}set extname(n){if(Xc(n,"extname"),wx(this.dirname,"extname"),n){if(n.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=fn.join(this.dirname,this.stem+(n||""))}get stem(){return typeof this.path=="string"?fn.basename(this.path,this.extname):void 0}set stem(n){Zc(n,"stem"),Xc(n,"stem"),this.path=fn.join(this.dirname||"",n+(this.extname||""))}toString(n){return(this.value||"").toString(n||void 0)}message(n,r,i){const s=new Wt(n,r,i);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}info(n,r,i){const s=this.message(n,r,i);return s.fatal=null,s}fail(n,r,i){const s=this.message(n,r,i);throw s.fatal=!0,s}}function Xc(e,n){if(e&&e.includes(fn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+fn.sep+"`")}function Zc(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function wx(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function S9(e){return Uy(e)}const N9=Gy().freeze(),Hy={}.hasOwnProperty;function Gy(){const e=l9(),n=[];let r={},i,s=-1;return a.data=o,a.Parser=void 0,a.Compiler=void 0,a.freeze=l,a.attachers=n,a.use=c,a.parse=d,a.stringify=h,a.run=b,a.runSync=f,a.process=_,a.processSync=y,a;function a(){const T=Gy();let A=-1;for(;++A<n.length;)T.use(...n[A]);return T.data(Ax(!0,{},r)),T}function o(T,A){return typeof T=="string"?arguments.length===2?(ed("data",i),r[T]=A,a):Hy.call(r,T)&&r[T]||null:T?(ed("data",i),r=T,a):r}function l(){if(i)return a;for(;++s<n.length;){const[T,...A]=n[s];if(A[0]===!1)continue;A[0]===!0&&(A[0]=void 0);const m=T.call(a,...A);typeof m=="function"&&e.use(m)}return i=!0,s=Number.POSITIVE_INFINITY,a}function c(T,...A){let m;if(ed("use",i),T!=null)if(typeof T=="function")v(T,...A);else if(typeof T=="object")Array.isArray(T)?x(T):E(T);else throw new TypeError("Expected usable value, not `"+T+"`");return m&&(r.settings=Object.assign(r.settings||{},m)),a;function g(R){if(typeof R=="function")v(R);else if(typeof R=="object")if(Array.isArray(R)){const[j,...C]=R;v(j,...C)}else E(R);else throw new TypeError("Expected usable value, not `"+R+"`")}function E(R){x(R.plugins),R.settings&&(m=Object.assign(m||{},R.settings))}function x(R){let j=-1;if(R!=null)if(Array.isArray(R))for(;++j<R.length;){const C=R[j];g(C)}else throw new TypeError("Expected a list of plugins, not `"+R+"`")}function v(R,j){let C=-1,M;for(;++C<n.length;)if(n[C][0]===R){M=n[C];break}M?(Su(M[1])&&Su(j)&&(j=Ax(!0,M[1],j)),M[1]=j):n.push([...arguments])}}function d(T){a.freeze();const A=ys(T),m=a.Parser;return Qc("parse",m),Rx(m,"parse")?new m(String(A),A).parse():m(String(A),A)}function h(T,A){a.freeze();const m=ys(A),g=a.Compiler;return Jc("stringify",g),Ix(T),Rx(g,"compile")?new g(T,m).compile():g(T,m)}function b(T,A,m){if(Ix(T),a.freeze(),!m&&typeof A=="function"&&(m=A,A=void 0),!m)return new Promise(g);g(null,m);function g(E,x){e.run(T,ys(A),v);function v(R,j,C){j=j||T,R?x(R):E?E(j):m(null,j,C)}}}function f(T,A){let m,g;return a.run(T,A,E),Cx("runSync","run",g),m;function E(x,v){xx(x),m=v,g=!0}}function _(T,A){if(a.freeze(),Qc("process",a.Parser),Jc("process",a.Compiler),!A)return new Promise(m);m(null,A);function m(g,E){const x=ys(T);a.run(a.parse(x),x,(R,j,C)=>{if(R||!j||!C)v(R);else{const M=a.stringify(j,C);M==null||(j9(M)?C.value=M:C.result=M),v(R,C)}});function v(R,j){R||!j?E(R):g?g(j):A(null,j)}}}function y(T){let A;a.freeze(),Qc("processSync",a.Parser),Jc("processSync",a.Compiler);const m=ys(T);return a.process(m,g),Cx("processSync","process",A),m;function g(E){A=!0,xx(E)}}}function Rx(e,n){return typeof e=="function"&&e.prototype&&(_9(e.prototype)||n in e.prototype)}function _9(e){let n;for(n in e)if(Hy.call(e,n))return!0;return!1}function Qc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function Jc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function ed(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ix(e){if(!Su(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Cx(e,n,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ys(e){return A9(e)?e:new y9(e)}function A9(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function j9(e){return typeof e=="string"||Uy(e)}var ln={};const v9=[65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];ln.REPLACEMENT_CHARACTER="�";ln.CODE_POINTS={EOF:-1,NULL:0,TABULATION:9,CARRIAGE_RETURN:13,LINE_FEED:10,FORM_FEED:12,SPACE:32,EXCLAMATION_MARK:33,QUOTATION_MARK:34,NUMBER_SIGN:35,AMPERSAND:38,APOSTROPHE:39,HYPHEN_MINUS:45,SOLIDUS:47,DIGIT_0:48,DIGIT_9:57,SEMICOLON:59,LESS_THAN_SIGN:60,EQUALS_SIGN:61,GREATER_THAN_SIGN:62,QUESTION_MARK:63,LATIN_CAPITAL_A:65,LATIN_CAPITAL_F:70,LATIN_CAPITAL_X:88,LATIN_CAPITAL_Z:90,RIGHT_SQUARE_BRACKET:93,GRAVE_ACCENT:96,LATIN_SMALL_A:97,LATIN_SMALL_F:102,LATIN_SMALL_X:120,LATIN_SMALL_Z:122,REPLACEMENT_CHARACTER:65533};ln.CODE_POINT_SEQUENCES={DASH_DASH_STRING:[45,45],DOCTYPE_STRING:[68,79,67,84,89,80,69],CDATA_START_STRING:[91,67,68,65,84,65,91],SCRIPT_STRING:[115,99,114,105,112,116],PUBLIC_STRING:[80,85,66,76,73,67],SYSTEM_STRING:[83,89,83,84,69,77]};ln.isSurrogate=function(e){return e>=55296&&e<=57343};ln.isSurrogatePair=function(e){return e>=56320&&e<=57343};ln.getSurrogatePairCodePoint=function(e,n){return(e-55296)*1024+9216+n};ln.isControlCodePoint=function(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159};ln.isUndefinedCodePoint=function(e){return e>=64976&&e<=65007||v9.indexOf(e)>-1};var O1={controlCharacterInInputStream:"control-character-in-input-stream",noncharacterInInputStream:"noncharacter-in-input-stream",surrogateInInputStream:"surrogate-in-input-stream",nonVoidHtmlElementStartTagWithTrailingSolidus:"non-void-html-element-start-tag-with-trailing-solidus",endTagWithAttributes:"end-tag-with-attributes",endTagWithTrailingSolidus:"end-tag-with-trailing-solidus",unexpectedSolidusInTag:"unexpected-solidus-in-tag",unexpectedNullCharacter:"unexpected-null-character",unexpectedQuestionMarkInsteadOfTagName:"unexpected-question-mark-instead-of-tag-name",invalidFirstCharacterOfTagName:"invalid-first-character-of-tag-name",unexpectedEqualsSignBeforeAttributeName:"unexpected-equals-sign-before-attribute-name",missingEndTagName:"missing-end-tag-name",unexpectedCharacterInAttributeName:"unexpected-character-in-attribute-name",unknownNamedCharacterReference:"unknown-named-character-reference",missingSemicolonAfterCharacterReference:"missing-semicolon-after-character-reference",unexpectedCharacterAfterDoctypeSystemIdentifier:"unexpected-character-after-doctype-system-identifier",unexpectedCharacterInUnquotedAttributeValue:"unexpected-character-in-unquoted-attribute-value",eofBeforeTagName:"eof-before-tag-name",eofInTag:"eof-in-tag",missingAttributeValue:"missing-attribute-value",missingWhitespaceBetweenAttributes:"missing-whitespace-between-attributes",missingWhitespaceAfterDoctypePublicKeyword:"missing-whitespace-after-doctype-public-keyword",missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:"missing-whitespace-between-doctype-public-and-system-identifiers",missingWhitespaceAfterDoctypeSystemKeyword:"missing-whitespace-after-doctype-system-keyword",missingQuoteBeforeDoctypePublicIdentifier:"missing-quote-before-doctype-public-identifier",missingQuoteBeforeDoctypeSystemIdentifier:"missing-quote-before-doctype-system-identifier",missingDoctypePublicIdentifier:"missing-doctype-public-identifier",missingDoctypeSystemIdentifier:"missing-doctype-system-identifier",abruptDoctypePublicIdentifier:"abrupt-doctype-public-identifier",abruptDoctypeSystemIdentifier:"abrupt-doctype-system-identifier",cdataInHtmlContent:"cdata-in-html-content",incorrectlyOpenedComment:"incorrectly-opened-comment",eofInScriptHtmlCommentLikeText:"eof-in-script-html-comment-like-text",eofInDoctype:"eof-in-doctype",nestedComment:"nested-comment",abruptClosingOfEmptyComment:"abrupt-closing-of-empty-comment",eofInComment:"eof-in-comment",incorrectlyClosedComment:"incorrectly-closed-comment",eofInCdata:"eof-in-cdata",absenceOfDigitsInNumericCharacterReference:"absence-of-digits-in-numeric-character-reference",nullCharacterReference:"null-character-reference",surrogateCharacterReference:"surrogate-character-reference",characterReferenceOutsideUnicodeRange:"character-reference-outside-unicode-range",controlCharacterReference:"control-character-reference",noncharacterCharacterReference:"noncharacter-character-reference",missingWhitespaceBeforeDoctypeName:"missing-whitespace-before-doctype-name",missingDoctypeName:"missing-doctype-name",invalidCharacterSequenceAfterDoctypeName:"invalid-character-sequence-after-doctype-name",duplicateAttribute:"duplicate-attribute",nonConformingDoctype:"non-conforming-doctype",missingDoctype:"missing-doctype",misplacedDoctype:"misplaced-doctype",endTagWithoutMatchingOpenElement:"end-tag-without-matching-open-element",closingOfElementWithOpenChildElements:"closing-of-element-with-open-child-elements",disallowedContentInNoscriptInHead:"disallowed-content-in-noscript-in-head",openElementsLeftAfterEof:"open-elements-left-after-eof",abandonedHeadElementChild:"abandoned-head-element-child",misplacedStartTagForHeadElement:"misplaced-start-tag-for-head-element",nestedNoscriptInHead:"nested-noscript-in-head",eofInElementThatCanContainOnlyText:"eof-in-element-that-can-contain-only-text"};const ui=ln,td=O1,Ar=ui.CODE_POINTS,w9=65536;let R9=class{constructor(){this.html=null,this.pos=-1,this.lastGapPos=-1,this.lastCharPos=-1,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=w9}_err(){}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(n){if(this.pos!==this.lastCharPos){const r=this.html.charCodeAt(this.pos+1);if(ui.isSurrogatePair(r))return this.pos++,this._addGap(),ui.getSurrogatePairCodePoint(n,r)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,Ar.EOF;return this._err(td.surrogateInInputStream),n}dropParsedChunk(){this.pos>this.bufferWaterline&&(this.lastCharPos-=this.pos,this.html=this.html.substring(this.pos),this.pos=0,this.lastGapPos=-1,this.gapStack=[])}write(n,r){this.html?this.html+=n:this.html=n,this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1,this.lastChunkWritten=r}insertHtmlAtCurrentPos(n){this.html=this.html.substring(0,this.pos+1)+n+this.html.substring(this.pos+1,this.html.length),this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1}advance(){if(this.pos++,this.pos>this.lastCharPos)return this.endOfChunkHit=!this.lastChunkWritten,Ar.EOF;let n=this.html.charCodeAt(this.pos);return this.skipNextNewLine&&n===Ar.LINE_FEED?(this.skipNextNewLine=!1,this._addGap(),this.advance()):n===Ar.CARRIAGE_RETURN?(this.skipNextNewLine=!0,Ar.LINE_FEED):(this.skipNextNewLine=!1,ui.isSurrogate(n)&&(n=this._processSurrogate(n)),n>31&&n<127||n===Ar.LINE_FEED||n===Ar.CARRIAGE_RETURN||n>159&&n<64976||this._checkForProblematicCharacters(n),n)}_checkForProblematicCharacters(n){ui.isControlCodePoint(n)?this._err(td.controlCharacterInInputStream):ui.isUndefinedCodePoint(n)&&this._err(td.noncharacterInInputStream)}retreat(){this.pos===this.lastGapPos&&(this.lastGapPos=this.gapStack.pop(),this.pos--),this.pos--}};var I9=R9,C9=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4e3,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,1e4,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13e3,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204]);const k9=I9,be=ln,Mr=C9,k=O1,S=be.CODE_POINTS,jr=be.CODE_POINT_SEQUENCES,O9={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},$y=1,zy=2,Vy=4,L9=$y|zy|Vy,ae="DATA_STATE",hi="RCDATA_STATE",Os="RAWTEXT_STATE",vn="SCRIPT_DATA_STATE",Wy="PLAINTEXT_STATE",kx="TAG_OPEN_STATE",Ox="END_TAG_OPEN_STATE",nd="TAG_NAME_STATE",Lx="RCDATA_LESS_THAN_SIGN_STATE",Dx="RCDATA_END_TAG_OPEN_STATE",Mx="RCDATA_END_TAG_NAME_STATE",Fx="RAWTEXT_LESS_THAN_SIGN_STATE",Px="RAWTEXT_END_TAG_OPEN_STATE",Ux="RAWTEXT_END_TAG_NAME_STATE",Bx="SCRIPT_DATA_LESS_THAN_SIGN_STATE",Hx="SCRIPT_DATA_END_TAG_OPEN_STATE",Gx="SCRIPT_DATA_END_TAG_NAME_STATE",$x="SCRIPT_DATA_ESCAPE_START_STATE",zx="SCRIPT_DATA_ESCAPE_START_DASH_STATE",Zt="SCRIPT_DATA_ESCAPED_STATE",Vx="SCRIPT_DATA_ESCAPED_DASH_STATE",rd="SCRIPT_DATA_ESCAPED_DASH_DASH_STATE",ro="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE",Wx="SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE",qx="SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE",Kx="SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE",Sn="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",Yx="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE",Xx="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE",io="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",Zx="SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE",pn="BEFORE_ATTRIBUTE_NAME_STATE",so="ATTRIBUTE_NAME_STATE",id="AFTER_ATTRIBUTE_NAME_STATE",sd="BEFORE_ATTRIBUTE_VALUE_STATE",ao="ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE",oo="ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE",lo="ATTRIBUTE_VALUE_UNQUOTED_STATE",ad="AFTER_ATTRIBUTE_VALUE_QUOTED_STATE",Wn="SELF_CLOSING_START_TAG_STATE",Ss="BOGUS_COMMENT_STATE",Qx="MARKUP_DECLARATION_OPEN_STATE",Jx="COMMENT_START_STATE",e0="COMMENT_START_DASH_STATE",qn="COMMENT_STATE",t0="COMMENT_LESS_THAN_SIGN_STATE",n0="COMMENT_LESS_THAN_SIGN_BANG_STATE",r0="COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE",i0="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE",co="COMMENT_END_DASH_STATE",uo="COMMENT_END_STATE",s0="COMMENT_END_BANG_STATE",a0="DOCTYPE_STATE",ho="BEFORE_DOCTYPE_NAME_STATE",po="DOCTYPE_NAME_STATE",o0="AFTER_DOCTYPE_NAME_STATE",l0="AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE",c0="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE",od="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE",ld="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE",cd="AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE",d0="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE",u0="AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE",h0="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE",Ns="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE",_s="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE",dd="AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE",Nn="BOGUS_DOCTYPE_STATE",mo="CDATA_SECTION_STATE",p0="CDATA_SECTION_BRACKET_STATE",m0="CDATA_SECTION_END_STATE",oi="CHARACTER_REFERENCE_STATE",f0="NAMED_CHARACTER_REFERENCE_STATE",g0="AMBIGUOS_AMPERSAND_STATE",b0="NUMERIC_CHARACTER_REFERENCE_STATE",x0="HEXADEMICAL_CHARACTER_REFERENCE_START_STATE",E0="DECIMAL_CHARACTER_REFERENCE_START_STATE",T0="HEXADEMICAL_CHARACTER_REFERENCE_STATE",y0="DECIMAL_CHARACTER_REFERENCE_STATE",As="NUMERIC_CHARACTER_REFERENCE_END_STATE";function Ne(e){return e===S.SPACE||e===S.LINE_FEED||e===S.TABULATION||e===S.FORM_FEED}function Vs(e){return e>=S.DIGIT_0&&e<=S.DIGIT_9}function Qt(e){return e>=S.LATIN_CAPITAL_A&&e<=S.LATIN_CAPITAL_Z}function Ir(e){return e>=S.LATIN_SMALL_A&&e<=S.LATIN_SMALL_Z}function Zn(e){return Ir(e)||Qt(e)}function ud(e){return Zn(e)||Vs(e)}function qy(e){return e>=S.LATIN_CAPITAL_A&&e<=S.LATIN_CAPITAL_F}function Ky(e){return e>=S.LATIN_SMALL_A&&e<=S.LATIN_SMALL_F}function D9(e){return Vs(e)||qy(e)||Ky(e)}function Mo(e){return e+32}function ke(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(e>>>10&1023|55296)+String.fromCharCode(56320|e&1023))}function Kn(e){return String.fromCharCode(Mo(e))}function S0(e,n){const r=Mr[++e];let i=++e,s=i+r-1;for(;i<=s;){const a=i+s>>>1,o=Mr[a];if(o<n)i=a+1;else if(o>n)s=a-1;else return Mr[a+r]}return-1}let qt=class Et{constructor(){this.preprocessor=new k9,this.tokenQueue=[],this.allowCDATA=!1,this.state=ae,this.returnState="",this.charRefCode=-1,this.tempBuff=[],this.lastStartTagName="",this.consumedAfterSnapshot=-1,this.active=!1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr=null}_err(){}_errOnNextCodePoint(n){this._consume(),this._err(n),this._unconsume()}getNextToken(){for(;!this.tokenQueue.length&&this.active;){this.consumedAfterSnapshot=0;const n=this._consume();this._ensureHibernation()||this[this.state](n)}return this.tokenQueue.shift()}write(n,r){this.active=!0,this.preprocessor.write(n,r)}insertHtmlAtCurrentPos(n){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(n)}_ensureHibernation(){if(this.preprocessor.endOfChunkHit){for(;this.consumedAfterSnapshot>0;this.consumedAfterSnapshot--)this.preprocessor.retreat();return this.active=!1,this.tokenQueue.push({type:Et.HIBERNATION_TOKEN}),!0}return!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_unconsume(){this.consumedAfterSnapshot--,this.preprocessor.retreat()}_reconsumeInState(n){this.state=n,this._unconsume()}_consumeSequenceIfMatch(n,r,i){let s=0,a=!0;const o=n.length;let l=0,c=r,d;for(;l<o;l++){if(l>0&&(c=this._consume(),s++),c===S.EOF){a=!1;break}if(d=n[l],c!==d&&(i||c!==Mo(d))){a=!1;break}}if(!a)for(;s--;)this._unconsume();return a}_isTempBufferEqualToScriptString(){if(this.tempBuff.length!==jr.SCRIPT_STRING.length)return!1;for(let n=0;n<this.tempBuff.length;n++)if(this.tempBuff[n]!==jr.SCRIPT_STRING[n])return!1;return!0}_createStartTagToken(){this.currentToken={type:Et.START_TAG_TOKEN,tagName:"",selfClosing:!1,ackSelfClosing:!1,attrs:[]}}_createEndTagToken(){this.currentToken={type:Et.END_TAG_TOKEN,tagName:"",selfClosing:!1,attrs:[]}}_createCommentToken(){this.currentToken={type:Et.COMMENT_TOKEN,data:""}}_createDoctypeToken(n){this.currentToken={type:Et.DOCTYPE_TOKEN,name:n,forceQuirks:!1,publicId:null,systemId:null}}_createCharacterToken(n,r){this.currentCharacterToken={type:n,chars:r}}_createEOFToken(){this.currentToken={type:Et.EOF_TOKEN}}_createAttr(n){this.currentAttr={name:n,value:""}}_leaveAttrName(n){Et.getTokenAttr(this.currentToken,this.currentAttr.name)===null?this.currentToken.attrs.push(this.currentAttr):this._err(k.duplicateAttribute),this.state=n}_leaveAttrValue(n){this.state=n}_emitCurrentToken(){this._emitCurrentCharacterToken();const n=this.currentToken;this.currentToken=null,n.type===Et.START_TAG_TOKEN?this.lastStartTagName=n.tagName:n.type===Et.END_TAG_TOKEN&&(n.attrs.length>0&&this._err(k.endTagWithAttributes),n.selfClosing&&this._err(k.endTagWithTrailingSolidus)),this.tokenQueue.push(n)}_emitCurrentCharacterToken(){this.currentCharacterToken&&(this.tokenQueue.push(this.currentCharacterToken),this.currentCharacterToken=null)}_emitEOFToken(){this._createEOFToken(),this._emitCurrentToken()}_appendCharToCurrentCharacterToken(n,r){this.currentCharacterToken&&this.currentCharacterToken.type!==n&&this._emitCurrentCharacterToken(),this.currentCharacterToken?this.currentCharacterToken.chars+=r:this._createCharacterToken(n,r)}_emitCodePoint(n){let r=Et.CHARACTER_TOKEN;Ne(n)?r=Et.WHITESPACE_CHARACTER_TOKEN:n===S.NULL&&(r=Et.NULL_CHARACTER_TOKEN),this._appendCharToCurrentCharacterToken(r,ke(n))}_emitSeveralCodePoints(n){for(let r=0;r<n.length;r++)this._emitCodePoint(n[r])}_emitChars(n){this._appendCharToCurrentCharacterToken(Et.CHARACTER_TOKEN,n)}_matchNamedCharacterReference(n){let r=null,i=1,s=S0(0,n);for(this.tempBuff.push(n);s>-1;){const a=Mr[s],o=a<L9;o&&a&$y&&(r=a&zy?[Mr[++s],Mr[++s]]:[Mr[++s]],i=0);const c=this._consume();if(this.tempBuff.push(c),i++,c===S.EOF)break;o?s=a&Vy?S0(s,c):-1:s=c===a?++s:-1}for(;i--;)this.tempBuff.pop(),this._unconsume();return r}_isCharacterReferenceInAttribute(){return this.returnState===ao||this.returnState===oo||this.returnState===lo}_isCharacterReferenceAttributeQuirk(n){if(!n&&this._isCharacterReferenceInAttribute()){const r=this._consume();return this._unconsume(),r===S.EQUALS_SIGN||ud(r)}return!1}_flushCodePointsConsumedAsCharacterReference(){if(this._isCharacterReferenceInAttribute())for(let n=0;n<this.tempBuff.length;n++)this.currentAttr.value+=ke(this.tempBuff[n]);else this._emitSeveralCodePoints(this.tempBuff);this.tempBuff=[]}[ae](n){this.preprocessor.dropParsedChunk(),n===S.LESS_THAN_SIGN?this.state=kx:n===S.AMPERSAND?(this.returnState=ae,this.state=oi):n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitCodePoint(n)):n===S.EOF?this._emitEOFToken():this._emitCodePoint(n)}[hi](n){this.preprocessor.dropParsedChunk(),n===S.AMPERSAND?(this.returnState=hi,this.state=oi):n===S.LESS_THAN_SIGN?this.state=Lx:n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?this._emitEOFToken():this._emitCodePoint(n)}[Os](n){this.preprocessor.dropParsedChunk(),n===S.LESS_THAN_SIGN?this.state=Fx:n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?this._emitEOFToken():this._emitCodePoint(n)}[vn](n){this.preprocessor.dropParsedChunk(),n===S.LESS_THAN_SIGN?this.state=Bx:n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?this._emitEOFToken():this._emitCodePoint(n)}[Wy](n){this.preprocessor.dropParsedChunk(),n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?this._emitEOFToken():this._emitCodePoint(n)}[kx](n){n===S.EXCLAMATION_MARK?this.state=Qx:n===S.SOLIDUS?this.state=Ox:Zn(n)?(this._createStartTagToken(),this._reconsumeInState(nd)):n===S.QUESTION_MARK?(this._err(k.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(),this._reconsumeInState(Ss)):n===S.EOF?(this._err(k.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken()):(this._err(k.invalidFirstCharacterOfTagName),this._emitChars("<"),this._reconsumeInState(ae))}[Ox](n){Zn(n)?(this._createEndTagToken(),this._reconsumeInState(nd)):n===S.GREATER_THAN_SIGN?(this._err(k.missingEndTagName),this.state=ae):n===S.EOF?(this._err(k.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken()):(this._err(k.invalidFirstCharacterOfTagName),this._createCommentToken(),this._reconsumeInState(Ss))}[nd](n){Ne(n)?this.state=pn:n===S.SOLIDUS?this.state=Wn:n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):Qt(n)?this.currentToken.tagName+=Kn(n):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.tagName+=be.REPLACEMENT_CHARACTER):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):this.currentToken.tagName+=ke(n)}[Lx](n){n===S.SOLIDUS?(this.tempBuff=[],this.state=Dx):(this._emitChars("<"),this._reconsumeInState(hi))}[Dx](n){Zn(n)?(this._createEndTagToken(),this._reconsumeInState(Mx)):(this._emitChars("</"),this._reconsumeInState(hi))}[Mx](n){if(Qt(n))this.currentToken.tagName+=Kn(n),this.tempBuff.push(n);else if(Ir(n))this.currentToken.tagName+=ke(n),this.tempBuff.push(n);else{if(this.lastStartTagName===this.currentToken.tagName){if(Ne(n)){this.state=pn;return}if(n===S.SOLIDUS){this.state=Wn;return}if(n===S.GREATER_THAN_SIGN){this.state=ae,this._emitCurrentToken();return}}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(hi)}}[Fx](n){n===S.SOLIDUS?(this.tempBuff=[],this.state=Px):(this._emitChars("<"),this._reconsumeInState(Os))}[Px](n){Zn(n)?(this._createEndTagToken(),this._reconsumeInState(Ux)):(this._emitChars("</"),this._reconsumeInState(Os))}[Ux](n){if(Qt(n))this.currentToken.tagName+=Kn(n),this.tempBuff.push(n);else if(Ir(n))this.currentToken.tagName+=ke(n),this.tempBuff.push(n);else{if(this.lastStartTagName===this.currentToken.tagName){if(Ne(n)){this.state=pn;return}if(n===S.SOLIDUS){this.state=Wn;return}if(n===S.GREATER_THAN_SIGN){this._emitCurrentToken(),this.state=ae;return}}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Os)}}[Bx](n){n===S.SOLIDUS?(this.tempBuff=[],this.state=Hx):n===S.EXCLAMATION_MARK?(this.state=$x,this._emitChars("<!")):(this._emitChars("<"),this._reconsumeInState(vn))}[Hx](n){Zn(n)?(this._createEndTagToken(),this._reconsumeInState(Gx)):(this._emitChars("</"),this._reconsumeInState(vn))}[Gx](n){if(Qt(n))this.currentToken.tagName+=Kn(n),this.tempBuff.push(n);else if(Ir(n))this.currentToken.tagName+=ke(n),this.tempBuff.push(n);else{if(this.lastStartTagName===this.currentToken.tagName){if(Ne(n)){this.state=pn;return}else if(n===S.SOLIDUS){this.state=Wn;return}else if(n===S.GREATER_THAN_SIGN){this._emitCurrentToken(),this.state=ae;return}}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(vn)}}[$x](n){n===S.HYPHEN_MINUS?(this.state=zx,this._emitChars("-")):this._reconsumeInState(vn)}[zx](n){n===S.HYPHEN_MINUS?(this.state=rd,this._emitChars("-")):this._reconsumeInState(vn)}[Zt](n){n===S.HYPHEN_MINUS?(this.state=Vx,this._emitChars("-")):n===S.LESS_THAN_SIGN?this.state=ro:n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):this._emitCodePoint(n)}[Vx](n){n===S.HYPHEN_MINUS?(this.state=rd,this._emitChars("-")):n===S.LESS_THAN_SIGN?this.state=ro:n===S.NULL?(this._err(k.unexpectedNullCharacter),this.state=Zt,this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=Zt,this._emitCodePoint(n))}[rd](n){n===S.HYPHEN_MINUS?this._emitChars("-"):n===S.LESS_THAN_SIGN?this.state=ro:n===S.GREATER_THAN_SIGN?(this.state=vn,this._emitChars(">")):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.state=Zt,this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=Zt,this._emitCodePoint(n))}[ro](n){n===S.SOLIDUS?(this.tempBuff=[],this.state=Wx):Zn(n)?(this.tempBuff=[],this._emitChars("<"),this._reconsumeInState(Kx)):(this._emitChars("<"),this._reconsumeInState(Zt))}[Wx](n){Zn(n)?(this._createEndTagToken(),this._reconsumeInState(qx)):(this._emitChars("</"),this._reconsumeInState(Zt))}[qx](n){if(Qt(n))this.currentToken.tagName+=Kn(n),this.tempBuff.push(n);else if(Ir(n))this.currentToken.tagName+=ke(n),this.tempBuff.push(n);else{if(this.lastStartTagName===this.currentToken.tagName){if(Ne(n)){this.state=pn;return}if(n===S.SOLIDUS){this.state=Wn;return}if(n===S.GREATER_THAN_SIGN){this._emitCurrentToken(),this.state=ae;return}}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Zt)}}[Kx](n){Ne(n)||n===S.SOLIDUS||n===S.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?Sn:Zt,this._emitCodePoint(n)):Qt(n)?(this.tempBuff.push(Mo(n)),this._emitCodePoint(n)):Ir(n)?(this.tempBuff.push(n),this._emitCodePoint(n)):this._reconsumeInState(Zt)}[Sn](n){n===S.HYPHEN_MINUS?(this.state=Yx,this._emitChars("-")):n===S.LESS_THAN_SIGN?(this.state=io,this._emitChars("<")):n===S.NULL?(this._err(k.unexpectedNullCharacter),this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):this._emitCodePoint(n)}[Yx](n){n===S.HYPHEN_MINUS?(this.state=Xx,this._emitChars("-")):n===S.LESS_THAN_SIGN?(this.state=io,this._emitChars("<")):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.state=Sn,this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=Sn,this._emitCodePoint(n))}[Xx](n){n===S.HYPHEN_MINUS?this._emitChars("-"):n===S.LESS_THAN_SIGN?(this.state=io,this._emitChars("<")):n===S.GREATER_THAN_SIGN?(this.state=vn,this._emitChars(">")):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.state=Sn,this._emitChars(be.REPLACEMENT_CHARACTER)):n===S.EOF?(this._err(k.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=Sn,this._emitCodePoint(n))}[io](n){n===S.SOLIDUS?(this.tempBuff=[],this.state=Zx,this._emitChars("/")):this._reconsumeInState(Sn)}[Zx](n){Ne(n)||n===S.SOLIDUS||n===S.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?Zt:Sn,this._emitCodePoint(n)):Qt(n)?(this.tempBuff.push(Mo(n)),this._emitCodePoint(n)):Ir(n)?(this.tempBuff.push(n),this._emitCodePoint(n)):this._reconsumeInState(Sn)}[pn](n){Ne(n)||(n===S.SOLIDUS||n===S.GREATER_THAN_SIGN||n===S.EOF?this._reconsumeInState(id):n===S.EQUALS_SIGN?(this._err(k.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=so):(this._createAttr(""),this._reconsumeInState(so)))}[so](n){Ne(n)||n===S.SOLIDUS||n===S.GREATER_THAN_SIGN||n===S.EOF?(this._leaveAttrName(id),this._unconsume()):n===S.EQUALS_SIGN?this._leaveAttrName(sd):Qt(n)?this.currentAttr.name+=Kn(n):n===S.QUOTATION_MARK||n===S.APOSTROPHE||n===S.LESS_THAN_SIGN?(this._err(k.unexpectedCharacterInAttributeName),this.currentAttr.name+=ke(n)):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentAttr.name+=be.REPLACEMENT_CHARACTER):this.currentAttr.name+=ke(n)}[id](n){Ne(n)||(n===S.SOLIDUS?this.state=Wn:n===S.EQUALS_SIGN?this.state=sd:n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):(this._createAttr(""),this._reconsumeInState(so)))}[sd](n){Ne(n)||(n===S.QUOTATION_MARK?this.state=ao:n===S.APOSTROPHE?this.state=oo:n===S.GREATER_THAN_SIGN?(this._err(k.missingAttributeValue),this.state=ae,this._emitCurrentToken()):this._reconsumeInState(lo))}[ao](n){n===S.QUOTATION_MARK?this.state=ad:n===S.AMPERSAND?(this.returnState=ao,this.state=oi):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentAttr.value+=be.REPLACEMENT_CHARACTER):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):this.currentAttr.value+=ke(n)}[oo](n){n===S.APOSTROPHE?this.state=ad:n===S.AMPERSAND?(this.returnState=oo,this.state=oi):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentAttr.value+=be.REPLACEMENT_CHARACTER):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):this.currentAttr.value+=ke(n)}[lo](n){Ne(n)?this._leaveAttrValue(pn):n===S.AMPERSAND?(this.returnState=lo,this.state=oi):n===S.GREATER_THAN_SIGN?(this._leaveAttrValue(ae),this._emitCurrentToken()):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentAttr.value+=be.REPLACEMENT_CHARACTER):n===S.QUOTATION_MARK||n===S.APOSTROPHE||n===S.LESS_THAN_SIGN||n===S.EQUALS_SIGN||n===S.GRAVE_ACCENT?(this._err(k.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=ke(n)):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):this.currentAttr.value+=ke(n)}[ad](n){Ne(n)?this._leaveAttrValue(pn):n===S.SOLIDUS?this._leaveAttrValue(Wn):n===S.GREATER_THAN_SIGN?(this._leaveAttrValue(ae),this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):(this._err(k.missingWhitespaceBetweenAttributes),this._reconsumeInState(pn))}[Wn](n){n===S.GREATER_THAN_SIGN?(this.currentToken.selfClosing=!0,this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInTag),this._emitEOFToken()):(this._err(k.unexpectedSolidusInTag),this._reconsumeInState(pn))}[Ss](n){n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._emitCurrentToken(),this._emitEOFToken()):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.data+=be.REPLACEMENT_CHARACTER):this.currentToken.data+=ke(n)}[Qx](n){this._consumeSequenceIfMatch(jr.DASH_DASH_STRING,n,!0)?(this._createCommentToken(),this.state=Jx):this._consumeSequenceIfMatch(jr.DOCTYPE_STRING,n,!1)?this.state=a0:this._consumeSequenceIfMatch(jr.CDATA_START_STRING,n,!0)?this.allowCDATA?this.state=mo:(this._err(k.cdataInHtmlContent),this._createCommentToken(),this.currentToken.data="[CDATA[",this.state=Ss):this._ensureHibernation()||(this._err(k.incorrectlyOpenedComment),this._createCommentToken(),this._reconsumeInState(Ss))}[Jx](n){n===S.HYPHEN_MINUS?this.state=e0:n===S.GREATER_THAN_SIGN?(this._err(k.abruptClosingOfEmptyComment),this.state=ae,this._emitCurrentToken()):this._reconsumeInState(qn)}[e0](n){n===S.HYPHEN_MINUS?this.state=uo:n===S.GREATER_THAN_SIGN?(this._err(k.abruptClosingOfEmptyComment),this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState(qn))}[qn](n){n===S.HYPHEN_MINUS?this.state=co:n===S.LESS_THAN_SIGN?(this.currentToken.data+="<",this.state=t0):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.data+=be.REPLACEMENT_CHARACTER):n===S.EOF?(this._err(k.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.data+=ke(n)}[t0](n){n===S.EXCLAMATION_MARK?(this.currentToken.data+="!",this.state=n0):n===S.LESS_THAN_SIGN?this.currentToken.data+="!":this._reconsumeInState(qn)}[n0](n){n===S.HYPHEN_MINUS?this.state=r0:this._reconsumeInState(qn)}[r0](n){n===S.HYPHEN_MINUS?this.state=i0:this._reconsumeInState(co)}[i0](n){n!==S.GREATER_THAN_SIGN&&n!==S.EOF&&this._err(k.nestedComment),this._reconsumeInState(uo)}[co](n){n===S.HYPHEN_MINUS?this.state=uo:n===S.EOF?(this._err(k.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState(qn))}[uo](n){n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):n===S.EXCLAMATION_MARK?this.state=s0:n===S.HYPHEN_MINUS?this.currentToken.data+="-":n===S.EOF?(this._err(k.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--",this._reconsumeInState(qn))}[s0](n){n===S.HYPHEN_MINUS?(this.currentToken.data+="--!",this.state=co):n===S.GREATER_THAN_SIGN?(this._err(k.incorrectlyClosedComment),this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--!",this._reconsumeInState(qn))}[a0](n){Ne(n)?this.state=ho:n===S.GREATER_THAN_SIGN?this._reconsumeInState(ho):n===S.EOF?(this._err(k.eofInDoctype),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingWhitespaceBeforeDoctypeName),this._reconsumeInState(ho))}[ho](n){Ne(n)||(Qt(n)?(this._createDoctypeToken(Kn(n)),this.state=po):n===S.NULL?(this._err(k.unexpectedNullCharacter),this._createDoctypeToken(be.REPLACEMENT_CHARACTER),this.state=po):n===S.GREATER_THAN_SIGN?(this._err(k.missingDoctypeName),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._createDoctypeToken(ke(n)),this.state=po))}[po](n){Ne(n)?this.state=o0:n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):Qt(n)?this.currentToken.name+=Kn(n):n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.name+=be.REPLACEMENT_CHARACTER):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.name+=ke(n)}[o0](n){Ne(n)||(n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this._consumeSequenceIfMatch(jr.PUBLIC_STRING,n,!1)?this.state=l0:this._consumeSequenceIfMatch(jr.SYSTEM_STRING,n,!1)?this.state=u0:this._ensureHibernation()||(this._err(k.invalidCharacterSequenceAfterDoctypeName),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn)))}[l0](n){Ne(n)?this.state=c0:n===S.QUOTATION_MARK?(this._err(k.missingWhitespaceAfterDoctypePublicKeyword),this.currentToken.publicId="",this.state=od):n===S.APOSTROPHE?(this._err(k.missingWhitespaceAfterDoctypePublicKeyword),this.currentToken.publicId="",this.state=ld):n===S.GREATER_THAN_SIGN?(this._err(k.missingDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn))}[c0](n){Ne(n)||(n===S.QUOTATION_MARK?(this.currentToken.publicId="",this.state=od):n===S.APOSTROPHE?(this.currentToken.publicId="",this.state=ld):n===S.GREATER_THAN_SIGN?(this._err(k.missingDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn)))}[od](n){n===S.QUOTATION_MARK?this.state=cd:n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.publicId+=be.REPLACEMENT_CHARACTER):n===S.GREATER_THAN_SIGN?(this._err(k.abruptDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=ke(n)}[ld](n){n===S.APOSTROPHE?this.state=cd:n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.publicId+=be.REPLACEMENT_CHARACTER):n===S.GREATER_THAN_SIGN?(this._err(k.abruptDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=ke(n)}[cd](n){Ne(n)?this.state=d0:n===S.GREATER_THAN_SIGN?(this.state=ae,this._emitCurrentToken()):n===S.QUOTATION_MARK?(this._err(k.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),this.currentToken.systemId="",this.state=Ns):n===S.APOSTROPHE?(this._err(k.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),this.currentToken.systemId="",this.state=_s):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn))}[d0](n){Ne(n)||(n===S.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=ae):n===S.QUOTATION_MARK?(this.currentToken.systemId="",this.state=Ns):n===S.APOSTROPHE?(this.currentToken.systemId="",this.state=_s):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn)))}[u0](n){Ne(n)?this.state=h0:n===S.QUOTATION_MARK?(this._err(k.missingWhitespaceAfterDoctypeSystemKeyword),this.currentToken.systemId="",this.state=Ns):n===S.APOSTROPHE?(this._err(k.missingWhitespaceAfterDoctypeSystemKeyword),this.currentToken.systemId="",this.state=_s):n===S.GREATER_THAN_SIGN?(this._err(k.missingDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn))}[h0](n){Ne(n)||(n===S.QUOTATION_MARK?(this.currentToken.systemId="",this.state=Ns):n===S.APOSTROPHE?(this.currentToken.systemId="",this.state=_s):n===S.GREATER_THAN_SIGN?(this._err(k.missingDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this.state=ae,this._emitCurrentToken()):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Nn)))}[Ns](n){n===S.QUOTATION_MARK?this.state=dd:n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.systemId+=be.REPLACEMENT_CHARACTER):n===S.GREATER_THAN_SIGN?(this._err(k.abruptDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=ke(n)}[_s](n){n===S.APOSTROPHE?this.state=dd:n===S.NULL?(this._err(k.unexpectedNullCharacter),this.currentToken.systemId+=be.REPLACEMENT_CHARACTER):n===S.GREATER_THAN_SIGN?(this._err(k.abruptDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=ke(n)}[dd](n){Ne(n)||(n===S.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=ae):n===S.EOF?(this._err(k.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(k.unexpectedCharacterAfterDoctypeSystemIdentifier),this._reconsumeInState(Nn)))}[Nn](n){n===S.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=ae):n===S.NULL?this._err(k.unexpectedNullCharacter):n===S.EOF&&(this._emitCurrentToken(),this._emitEOFToken())}[mo](n){n===S.RIGHT_SQUARE_BRACKET?this.state=p0:n===S.EOF?(this._err(k.eofInCdata),this._emitEOFToken()):this._emitCodePoint(n)}[p0](n){n===S.RIGHT_SQUARE_BRACKET?this.state=m0:(this._emitChars("]"),this._reconsumeInState(mo))}[m0](n){n===S.GREATER_THAN_SIGN?this.state=ae:n===S.RIGHT_SQUARE_BRACKET?this._emitChars("]"):(this._emitChars("]]"),this._reconsumeInState(mo))}[oi](n){this.tempBuff=[S.AMPERSAND],n===S.NUMBER_SIGN?(this.tempBuff.push(n),this.state=b0):ud(n)?this._reconsumeInState(f0):(this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState))}[f0](n){const r=this._matchNamedCharacterReference(n);if(this._ensureHibernation())this.tempBuff=[S.AMPERSAND];else if(r){const i=this.tempBuff[this.tempBuff.length-1]===S.SEMICOLON;this._isCharacterReferenceAttributeQuirk(i)||(i||this._errOnNextCodePoint(k.missingSemicolonAfterCharacterReference),this.tempBuff=r),this._flushCodePointsConsumedAsCharacterReference(),this.state=this.returnState}else this._flushCodePointsConsumedAsCharacterReference(),this.state=g0}[g0](n){ud(n)?this._isCharacterReferenceInAttribute()?this.currentAttr.value+=ke(n):this._emitCodePoint(n):(n===S.SEMICOLON&&this._err(k.unknownNamedCharacterReference),this._reconsumeInState(this.returnState))}[b0](n){this.charRefCode=0,n===S.LATIN_SMALL_X||n===S.LATIN_CAPITAL_X?(this.tempBuff.push(n),this.state=x0):this._reconsumeInState(E0)}[x0](n){D9(n)?this._reconsumeInState(T0):(this._err(k.absenceOfDigitsInNumericCharacterReference),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState))}[E0](n){Vs(n)?this._reconsumeInState(y0):(this._err(k.absenceOfDigitsInNumericCharacterReference),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState))}[T0](n){qy(n)?this.charRefCode=this.charRefCode*16+n-55:Ky(n)?this.charRefCode=this.charRefCode*16+n-87:Vs(n)?this.charRefCode=this.charRefCode*16+n-48:n===S.SEMICOLON?this.state=As:(this._err(k.missingSemicolonAfterCharacterReference),this._reconsumeInState(As))}[y0](n){Vs(n)?this.charRefCode=this.charRefCode*10+n-48:n===S.SEMICOLON?this.state=As:(this._err(k.missingSemicolonAfterCharacterReference),this._reconsumeInState(As))}[As](){if(this.charRefCode===S.NULL)this._err(k.nullCharacterReference),this.charRefCode=S.REPLACEMENT_CHARACTER;else if(this.charRefCode>1114111)this._err(k.characterReferenceOutsideUnicodeRange),this.charRefCode=S.REPLACEMENT_CHARACTER;else if(be.isSurrogate(this.charRefCode))this._err(k.surrogateCharacterReference),this.charRefCode=S.REPLACEMENT_CHARACTER;else if(be.isUndefinedCodePoint(this.charRefCode))this._err(k.noncharacterCharacterReference);else if(be.isControlCodePoint(this.charRefCode)||this.charRefCode===S.CARRIAGE_RETURN){this._err(k.controlCharacterReference);const n=O9[this.charRefCode];n&&(this.charRefCode=n)}this.tempBuff=[this.charRefCode],this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState)}};qt.CHARACTER_TOKEN="CHARACTER_TOKEN";qt.NULL_CHARACTER_TOKEN="NULL_CHARACTER_TOKEN";qt.WHITESPACE_CHARACTER_TOKEN="WHITESPACE_CHARACTER_TOKEN";qt.START_TAG_TOKEN="START_TAG_TOKEN";qt.END_TAG_TOKEN="END_TAG_TOKEN";qt.COMMENT_TOKEN="COMMENT_TOKEN";qt.DOCTYPE_TOKEN="DOCTYPE_TOKEN";qt.EOF_TOKEN="EOF_TOKEN";qt.HIBERNATION_TOKEN="HIBERNATION_TOKEN";qt.MODE={DATA:ae,RCDATA:hi,RAWTEXT:Os,SCRIPT_DATA:vn,PLAINTEXT:Wy};qt.getTokenAttr=function(e,n){for(let r=e.attrs.length-1;r>=0;r--)if(e.attrs[r].name===n)return e.attrs[r].value;return null};var Bl=qt,cn={};const hd=cn.NAMESPACES={HTML:"http://www.w3.org/1999/xhtml",MATHML:"http://www.w3.org/1998/Math/MathML",SVG:"http://www.w3.org/2000/svg",XLINK:"http://www.w3.org/1999/xlink",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"};cn.ATTRS={TYPE:"type",ACTION:"action",ENCODING:"encoding",PROMPT:"prompt",NAME:"name",COLOR:"color",FACE:"face",SIZE:"size"};cn.DOCUMENT_MODE={NO_QUIRKS:"no-quirks",QUIRKS:"quirks",LIMITED_QUIRKS:"limited-quirks"};const U=cn.TAG_NAMES={A:"a",ADDRESS:"address",ANNOTATION_XML:"annotation-xml",APPLET:"applet",AREA:"area",ARTICLE:"article",ASIDE:"aside",B:"b",BASE:"base",BASEFONT:"basefont",BGSOUND:"bgsound",BIG:"big",BLOCKQUOTE:"blockquote",BODY:"body",BR:"br",BUTTON:"button",CAPTION:"caption",CENTER:"center",CODE:"code",COL:"col",COLGROUP:"colgroup",DD:"dd",DESC:"desc",DETAILS:"details",DIALOG:"dialog",DIR:"dir",DIV:"div",DL:"dl",DT:"dt",EM:"em",EMBED:"embed",FIELDSET:"fieldset",FIGCAPTION:"figcaption",FIGURE:"figure",FONT:"font",FOOTER:"footer",FOREIGN_OBJECT:"foreignObject",FORM:"form",FRAME:"frame",FRAMESET:"frameset",H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",HEAD:"head",HEADER:"header",HGROUP:"hgroup",HR:"hr",HTML:"html",I:"i",IMG:"img",IMAGE:"image",INPUT:"input",IFRAME:"iframe",KEYGEN:"keygen",LABEL:"label",LI:"li",LINK:"link",LISTING:"listing",MAIN:"main",MALIGNMARK:"malignmark",MARQUEE:"marquee",MATH:"math",MENU:"menu",META:"meta",MGLYPH:"mglyph",MI:"mi",MO:"mo",MN:"mn",MS:"ms",MTEXT:"mtext",NAV:"nav",NOBR:"nobr",NOFRAMES:"noframes",NOEMBED:"noembed",NOSCRIPT:"noscript",OBJECT:"object",OL:"ol",OPTGROUP:"optgroup",OPTION:"option",P:"p",PARAM:"param",PLAINTEXT:"plaintext",PRE:"pre",RB:"rb",RP:"rp",RT:"rt",RTC:"rtc",RUBY:"ruby",S:"s",SCRIPT:"script",SECTION:"section",SELECT:"select",SOURCE:"source",SMALL:"small",SPAN:"span",STRIKE:"strike",STRONG:"strong",STYLE:"style",SUB:"sub",SUMMARY:"summary",SUP:"sup",TABLE:"table",TBODY:"tbody",TEMPLATE:"template",TEXTAREA:"textarea",TFOOT:"tfoot",TD:"td",TH:"th",THEAD:"thead",TITLE:"title",TR:"tr",TRACK:"track",TT:"tt",U:"u",UL:"ul",SVG:"svg",VAR:"var",WBR:"wbr",XMP:"xmp"};cn.SPECIAL_ELEMENTS={[hd.HTML]:{[U.ADDRESS]:!0,[U.APPLET]:!0,[U.AREA]:!0,[U.ARTICLE]:!0,[U.ASIDE]:!0,[U.BASE]:!0,[U.BASEFONT]:!0,[U.BGSOUND]:!0,[U.BLOCKQUOTE]:!0,[U.BODY]:!0,[U.BR]:!0,[U.BUTTON]:!0,[U.CAPTION]:!0,[U.CENTER]:!0,[U.COL]:!0,[U.COLGROUP]:!0,[U.DD]:!0,[U.DETAILS]:!0,[U.DIR]:!0,[U.DIV]:!0,[U.DL]:!0,[U.DT]:!0,[U.EMBED]:!0,[U.FIELDSET]:!0,[U.FIGCAPTION]:!0,[U.FIGURE]:!0,[U.FOOTER]:!0,[U.FORM]:!0,[U.FRAME]:!0,[U.FRAMESET]:!0,[U.H1]:!0,[U.H2]:!0,[U.H3]:!0,[U.H4]:!0,[U.H5]:!0,[U.H6]:!0,[U.HEAD]:!0,[U.HEADER]:!0,[U.HGROUP]:!0,[U.HR]:!0,[U.HTML]:!0,[U.IFRAME]:!0,[U.IMG]:!0,[U.INPUT]:!0,[U.LI]:!0,[U.LINK]:!0,[U.LISTING]:!0,[U.MAIN]:!0,[U.MARQUEE]:!0,[U.MENU]:!0,[U.META]:!0,[U.NAV]:!0,[U.NOEMBED]:!0,[U.NOFRAMES]:!0,[U.NOSCRIPT]:!0,[U.OBJECT]:!0,[U.OL]:!0,[U.P]:!0,[U.PARAM]:!0,[U.PLAINTEXT]:!0,[U.PRE]:!0,[U.SCRIPT]:!0,[U.SECTION]:!0,[U.SELECT]:!0,[U.SOURCE]:!0,[U.STYLE]:!0,[U.SUMMARY]:!0,[U.TABLE]:!0,[U.TBODY]:!0,[U.TD]:!0,[U.TEMPLATE]:!0,[U.TEXTAREA]:!0,[U.TFOOT]:!0,[U.TH]:!0,[U.THEAD]:!0,[U.TITLE]:!0,[U.TR]:!0,[U.TRACK]:!0,[U.UL]:!0,[U.WBR]:!0,[U.XMP]:!0},[hd.MATHML]:{[U.MI]:!0,[U.MO]:!0,[U.MN]:!0,[U.MS]:!0,[U.MTEXT]:!0,[U.ANNOTATION_XML]:!0},[hd.SVG]:{[U.TITLE]:!0,[U.FOREIGN_OBJECT]:!0,[U.DESC]:!0}};const Yy=cn,H=Yy.TAG_NAMES,xe=Yy.NAMESPACES;function N0(e){switch(e.length){case 1:return e===H.P;case 2:return e===H.RB||e===H.RP||e===H.RT||e===H.DD||e===H.DT||e===H.LI;case 3:return e===H.RTC;case 6:return e===H.OPTION;case 8:return e===H.OPTGROUP}return!1}function M9(e){switch(e.length){case 1:return e===H.P;case 2:return e===H.RB||e===H.RP||e===H.RT||e===H.DD||e===H.DT||e===H.LI||e===H.TD||e===H.TH||e===H.TR;case 3:return e===H.RTC;case 5:return e===H.TBODY||e===H.TFOOT||e===H.THEAD;case 6:return e===H.OPTION;case 7:return e===H.CAPTION;case 8:return e===H.OPTGROUP||e===H.COLGROUP}return!1}function fo(e,n){switch(e.length){case 2:if(e===H.TD||e===H.TH)return n===xe.HTML;if(e===H.MI||e===H.MO||e===H.MN||e===H.MS)return n===xe.MATHML;break;case 4:if(e===H.HTML)return n===xe.HTML;if(e===H.DESC)return n===xe.SVG;break;case 5:if(e===H.TABLE)return n===xe.HTML;if(e===H.MTEXT)return n===xe.MATHML;if(e===H.TITLE)return n===xe.SVG;break;case 6:return(e===H.APPLET||e===H.OBJECT)&&n===xe.HTML;case 7:return(e===H.CAPTION||e===H.MARQUEE)&&n===xe.HTML;case 8:return e===H.TEMPLATE&&n===xe.HTML;case 13:return e===H.FOREIGN_OBJECT&&n===xe.SVG;case 14:return e===H.ANNOTATION_XML&&n===xe.MATHML}return!1}let F9=class{constructor(n,r){this.stackTop=-1,this.items=[],this.current=n,this.currentTagName=null,this.currentTmplContent=null,this.tmplCount=0,this.treeAdapter=r}_indexOf(n){let r=-1;for(let i=this.stackTop;i>=0;i--)if(this.items[i]===n){r=i;break}return r}_isInTemplate(){return this.currentTagName===H.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===xe.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagName=this.current&&this.treeAdapter.getTagName(this.current),this.currentTmplContent=this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):null}push(n){this.items[++this.stackTop]=n,this._updateCurrentElement(),this._isInTemplate()&&this.tmplCount++}pop(){this.stackTop--,this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this._updateCurrentElement()}replace(n,r){const i=this._indexOf(n);this.items[i]=r,i===this.stackTop&&this._updateCurrentElement()}insertAfter(n,r){const i=this._indexOf(n)+1;this.items.splice(i,0,r),i===++this.stackTop&&this._updateCurrentElement()}popUntilTagNamePopped(n){for(;this.stackTop>-1;){const r=this.currentTagName,i=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),r===n&&i===xe.HTML)break}}popUntilElementPopped(n){for(;this.stackTop>-1;){const r=this.current;if(this.pop(),r===n)break}}popUntilNumberedHeaderPopped(){for(;this.stackTop>-1;){const n=this.currentTagName,r=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),n===H.H1||n===H.H2||n===H.H3||n===H.H4||n===H.H5||n===H.H6&&r===xe.HTML)break}}popUntilTableCellPopped(){for(;this.stackTop>-1;){const n=this.currentTagName,r=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),n===H.TD||n===H.TH&&r===xe.HTML)break}}popAllUpToHtmlElement(){this.stackTop=0,this._updateCurrentElement()}clearBackToTableContext(){for(;this.currentTagName!==H.TABLE&&this.currentTagName!==H.TEMPLATE&&this.currentTagName!==H.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop()}clearBackToTableBodyContext(){for(;this.currentTagName!==H.TBODY&&this.currentTagName!==H.TFOOT&&this.currentTagName!==H.THEAD&&this.currentTagName!==H.TEMPLATE&&this.currentTagName!==H.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop()}clearBackToTableRowContext(){for(;this.currentTagName!==H.TR&&this.currentTagName!==H.TEMPLATE&&this.currentTagName!==H.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop()}remove(n){for(let r=this.stackTop;r>=0;r--)if(this.items[r]===n){this.items.splice(r,1),this.stackTop--,this._updateCurrentElement();break}}tryPeekProperlyNestedBodyElement(){const n=this.items[1];return n&&this.treeAdapter.getTagName(n)===H.BODY?n:null}contains(n){return this._indexOf(n)>-1}getCommonAncestor(n){let r=this._indexOf(n);return--r>=0?this.items[r]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.currentTagName===H.HTML}hasInScope(n){for(let r=this.stackTop;r>=0;r--){const i=this.treeAdapter.getTagName(this.items[r]),s=this.treeAdapter.getNamespaceURI(this.items[r]);if(i===n&&s===xe.HTML)return!0;if(fo(i,s))return!1}return!0}hasNumberedHeaderInScope(){for(let n=this.stackTop;n>=0;n--){const r=this.treeAdapter.getTagName(this.items[n]),i=this.treeAdapter.getNamespaceURI(this.items[n]);if((r===H.H1||r===H.H2||r===H.H3||r===H.H4||r===H.H5||r===H.H6)&&i===xe.HTML)return!0;if(fo(r,i))return!1}return!0}hasInListItemScope(n){for(let r=this.stackTop;r>=0;r--){const i=this.treeAdapter.getTagName(this.items[r]),s=this.treeAdapter.getNamespaceURI(this.items[r]);if(i===n&&s===xe.HTML)return!0;if((i===H.UL||i===H.OL)&&s===xe.HTML||fo(i,s))return!1}return!0}hasInButtonScope(n){for(let r=this.stackTop;r>=0;r--){const i=this.treeAdapter.getTagName(this.items[r]),s=this.treeAdapter.getNamespaceURI(this.items[r]);if(i===n&&s===xe.HTML)return!0;if(i===H.BUTTON&&s===xe.HTML||fo(i,s))return!1}return!0}hasInTableScope(n){for(let r=this.stackTop;r>=0;r--){const i=this.treeAdapter.getTagName(this.items[r]);if(this.treeAdapter.getNamespaceURI(this.items[r])===xe.HTML){if(i===n)return!0;if(i===H.TABLE||i===H.TEMPLATE||i===H.HTML)return!1}}return!0}hasTableBodyContextInTableScope(){for(let n=this.stackTop;n>=0;n--){const r=this.treeAdapter.getTagName(this.items[n]);if(this.treeAdapter.getNamespaceURI(this.items[n])===xe.HTML){if(r===H.TBODY||r===H.THEAD||r===H.TFOOT)return!0;if(r===H.TABLE||r===H.HTML)return!1}}return!0}hasInSelectScope(n){for(let r=this.stackTop;r>=0;r--){const i=this.treeAdapter.getTagName(this.items[r]);if(this.treeAdapter.getNamespaceURI(this.items[r])===xe.HTML){if(i===n)return!0;if(i!==H.OPTION&&i!==H.OPTGROUP)return!1}}return!0}generateImpliedEndTags(){for(;N0(this.currentTagName);)this.pop()}generateImpliedEndTagsThoroughly(){for(;M9(this.currentTagName);)this.pop()}generateImpliedEndTagsWithExclusion(n){for(;N0(this.currentTagName)&&this.currentTagName!==n;)this.pop()}};var P9=F9;const go=3;let L1=class Qn{constructor(n){this.length=0,this.entries=[],this.treeAdapter=n,this.bookmark=null}_getNoahArkConditionCandidates(n){const r=[];if(this.length>=go){const i=this.treeAdapter.getAttrList(n).length,s=this.treeAdapter.getTagName(n),a=this.treeAdapter.getNamespaceURI(n);for(let o=this.length-1;o>=0;o--){const l=this.entries[o];if(l.type===Qn.MARKER_ENTRY)break;const c=l.element,d=this.treeAdapter.getAttrList(c);this.treeAdapter.getTagName(c)===s&&this.treeAdapter.getNamespaceURI(c)===a&&d.length===i&&r.push({idx:o,attrs:d})}}return r.length<go?[]:r}_ensureNoahArkCondition(n){const r=this._getNoahArkConditionCandidates(n);let i=r.length;if(i){const s=this.treeAdapter.getAttrList(n),a=s.length,o=Object.create(null);for(let l=0;l<a;l++){const c=s[l];o[c.name]=c.value}for(let l=0;l<a;l++)for(let c=0;c<i;c++){const d=r[c].attrs[l];if(o[d.name]!==d.value&&(r.splice(c,1),i--),r.length<go)return}for(let l=i-1;l>=go-1;l--)this.entries.splice(r[l].idx,1),this.length--}}insertMarker(){this.entries.push({type:Qn.MARKER_ENTRY}),this.length++}pushElement(n,r){this._ensureNoahArkCondition(n),this.entries.push({type:Qn.ELEMENT_ENTRY,element:n,token:r}),this.length++}insertElementAfterBookmark(n,r){let i=this.length-1;for(;i>=0&&this.entries[i]!==this.bookmark;i--);this.entries.splice(i+1,0,{type:Qn.ELEMENT_ENTRY,element:n,token:r}),this.length++}removeEntry(n){for(let r=this.length-1;r>=0;r--)if(this.entries[r]===n){this.entries.splice(r,1),this.length--;break}}clearToLastMarker(){for(;this.length;){const n=this.entries.pop();if(this.length--,n.type===Qn.MARKER_ENTRY)break}}getElementEntryInScopeWithTagName(n){for(let r=this.length-1;r>=0;r--){const i=this.entries[r];if(i.type===Qn.MARKER_ENTRY)return null;if(this.treeAdapter.getTagName(i.element)===n)return i}return null}getElementEntry(n){for(let r=this.length-1;r>=0;r--){const i=this.entries[r];if(i.type===Qn.ELEMENT_ENTRY&&i.element===n)return i}return null}};L1.MARKER_ENTRY="MARKER_ENTRY";L1.ELEMENT_ENTRY="ELEMENT_ENTRY";var U9=L1;let Xy=class{constructor(n){const r={},i=this._getOverriddenMethods(this,r);for(const s of Object.keys(i))typeof i[s]=="function"&&(r[s]=n[s],n[s]=i[s])}_getOverriddenMethods(){throw new Error("Not implemented")}};Xy.install=function(e,n,r){e.__mixins||(e.__mixins=[]);for(let s=0;s<e.__mixins.length;s++)if(e.__mixins[s].constructor===n)return e.__mixins[s];const i=new n(e,r);return e.__mixins.push(i),i};var Gn=Xy;const B9=Gn;let H9=class extends B9{constructor(n){super(n),this.preprocessor=n,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.offset=0,this.col=0,this.line=1}_getOverriddenMethods(n,r){return{advance(){const i=this.pos+1,s=this.html[i];return n.isEol&&(n.isEol=!1,n.line++,n.lineStartPos=i),(s===`
`||s==="\r"&&this.html[i+1]!==`
`)&&(n.isEol=!0),n.col=i-n.lineStartPos+1,n.offset=n.droppedBufferSize+i,r.advance.call(this)},retreat(){r.retreat.call(this),n.isEol=!1,n.col=this.pos-n.lineStartPos+1},dropParsedChunk(){const i=this.pos;r.dropParsedChunk.call(this);const s=i-this.pos;n.lineStartPos-=s,n.droppedBufferSize+=s,n.offset=n.droppedBufferSize+this.pos}}}};var Zy=H9;const _0=Gn,pd=Bl,G9=Zy;let $9=class extends _0{constructor(n){super(n),this.tokenizer=n,this.posTracker=_0.install(n.preprocessor,G9),this.currentAttrLocation=null,this.ctLoc=null}_getCurrentLocation(){return{startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}_attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line,this.currentAttrLocation.endCol=this.posTracker.col,this.currentAttrLocation.endOffset=this.posTracker.offset;const n=this.tokenizer.currentToken,r=this.tokenizer.currentAttr;n.location.attrs||(n.location.attrs=Object.create(null)),n.location.attrs[r.name]=this.currentAttrLocation}_getOverriddenMethods(n,r){const i={_createStartTagToken(){r._createStartTagToken.call(this),this.currentToken.location=n.ctLoc},_createEndTagToken(){r._createEndTagToken.call(this),this.currentToken.location=n.ctLoc},_createCommentToken(){r._createCommentToken.call(this),this.currentToken.location=n.ctLoc},_createDoctypeToken(s){r._createDoctypeToken.call(this,s),this.currentToken.location=n.ctLoc},_createCharacterToken(s,a){r._createCharacterToken.call(this,s,a),this.currentCharacterToken.location=n.ctLoc},_createEOFToken(){r._createEOFToken.call(this),this.currentToken.location=n._getCurrentLocation()},_createAttr(s){r._createAttr.call(this,s),n.currentAttrLocation=n._getCurrentLocation()},_leaveAttrName(s){r._leaveAttrName.call(this,s),n._attachCurrentAttrLocationInfo()},_leaveAttrValue(s){r._leaveAttrValue.call(this,s),n._attachCurrentAttrLocationInfo()},_emitCurrentToken(){const s=this.currentToken.location;this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=s.startLine,this.currentCharacterToken.location.endCol=s.startCol,this.currentCharacterToken.location.endOffset=s.startOffset),this.currentToken.type===pd.EOF_TOKEN?(s.endLine=s.startLine,s.endCol=s.startCol,s.endOffset=s.startOffset):(s.endLine=n.posTracker.line,s.endCol=n.posTracker.col+1,s.endOffset=n.posTracker.offset+1),r._emitCurrentToken.call(this)},_emitCurrentCharacterToken(){const s=this.currentCharacterToken&&this.currentCharacterToken.location;s&&s.endOffset===-1&&(s.endLine=n.posTracker.line,s.endCol=n.posTracker.col,s.endOffset=n.posTracker.offset),r._emitCurrentCharacterToken.call(this)}};return Object.keys(pd.MODE).forEach(s=>{const a=pd.MODE[s];i[a]=function(o){n.ctLoc=n._getCurrentLocation(),r[a].call(this,o)}}),i}};var Qy=$9;const z9=Gn;let V9=class extends z9{constructor(n,r){super(n),this.onItemPop=r.onItemPop}_getOverriddenMethods(n,r){return{pop(){n.onItemPop(this.current),r.pop.call(this)},popAllUpToHtmlElement(){for(let i=this.stackTop;i>0;i--)n.onItemPop(this.items[i]);r.popAllUpToHtmlElement.call(this)},remove(i){n.onItemPop(this.current),r.remove.call(this,i)}}}};var W9=V9;const md=Gn,A0=Bl,q9=Qy,K9=W9,Y9=cn,fd=Y9.TAG_NAMES;let X9=class extends md{constructor(n){super(n),this.parser=n,this.treeAdapter=this.parser.treeAdapter,this.posTracker=null,this.lastStartTagToken=null,this.lastFosterParentingLocation=null,this.currentToken=null}_setStartLocation(n){let r=null;this.lastStartTagToken&&(r=Object.assign({},this.lastStartTagToken.location),r.startTag=this.lastStartTagToken.location),this.treeAdapter.setNodeSourceCodeLocation(n,r)}_setEndLocation(n,r){if(this.treeAdapter.getNodeSourceCodeLocation(n)&&r.location){const s=r.location,a=this.treeAdapter.getTagName(n),o=r.type===A0.END_TAG_TOKEN&&a===r.tagName,l={};o?(l.endTag=Object.assign({},s),l.endLine=s.endLine,l.endCol=s.endCol,l.endOffset=s.endOffset):(l.endLine=s.startLine,l.endCol=s.startCol,l.endOffset=s.startOffset),this.treeAdapter.updateNodeSourceCodeLocation(n,l)}}_getOverriddenMethods(n,r){return{_bootstrap(i,s){r._bootstrap.call(this,i,s),n.lastStartTagToken=null,n.lastFosterParentingLocation=null,n.currentToken=null;const a=md.install(this.tokenizer,q9);n.posTracker=a.posTracker,md.install(this.openElements,K9,{onItemPop:function(o){n._setEndLocation(o,n.currentToken)}})},_runParsingLoop(i){r._runParsingLoop.call(this,i);for(let s=this.openElements.stackTop;s>=0;s--)n._setEndLocation(this.openElements.items[s],n.currentToken)},_processTokenInForeignContent(i){n.currentToken=i,r._processTokenInForeignContent.call(this,i)},_processToken(i){if(n.currentToken=i,r._processToken.call(this,i),i.type===A0.END_TAG_TOKEN&&(i.tagName===fd.HTML||i.tagName===fd.BODY&&this.openElements.hasInScope(fd.BODY)))for(let a=this.openElements.stackTop;a>=0;a--){const o=this.openElements.items[a];if(this.treeAdapter.getTagName(o)===i.tagName){n._setEndLocation(o,i);break}}},_setDocumentType(i){r._setDocumentType.call(this,i);const s=this.treeAdapter.getChildNodes(this.document),a=s.length;for(let o=0;o<a;o++){const l=s[o];if(this.treeAdapter.isDocumentTypeNode(l)){this.treeAdapter.setNodeSourceCodeLocation(l,i.location);break}}},_attachElementToTree(i){n._setStartLocation(i),n.lastStartTagToken=null,r._attachElementToTree.call(this,i)},_appendElement(i,s){n.lastStartTagToken=i,r._appendElement.call(this,i,s)},_insertElement(i,s){n.lastStartTagToken=i,r._insertElement.call(this,i,s)},_insertTemplate(i){n.lastStartTagToken=i,r._insertTemplate.call(this,i);const s=this.treeAdapter.getTemplateContent(this.openElements.current);this.treeAdapter.setNodeSourceCodeLocation(s,null)},_insertFakeRootElement(){r._insertFakeRootElement.call(this),this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null)},_appendCommentNode(i,s){r._appendCommentNode.call(this,i,s);const a=this.treeAdapter.getChildNodes(s),o=a[a.length-1];this.treeAdapter.setNodeSourceCodeLocation(o,i.location)},_findFosterParentingLocation(){return n.lastFosterParentingLocation=r._findFosterParentingLocation.call(this),n.lastFosterParentingLocation},_insertCharacters(i){r._insertCharacters.call(this,i);const s=this._shouldFosterParentOnInsertion(),a=s&&n.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current,o=this.treeAdapter.getChildNodes(a),l=s&&n.lastFosterParentingLocation.beforeElement?o.indexOf(n.lastFosterParentingLocation.beforeElement)-1:o.length-1,c=o[l];if(this.treeAdapter.getNodeSourceCodeLocation(c)){const{endLine:h,endCol:b,endOffset:f}=i.location;this.treeAdapter.updateNodeSourceCodeLocation(c,{endLine:h,endCol:b,endOffset:f})}else this.treeAdapter.setNodeSourceCodeLocation(c,i.location)}}}};var Z9=X9;const Q9=Gn;let J9=class extends Q9{constructor(n,r){super(n),this.posTracker=null,this.onParseError=r.onParseError}_setErrorLocation(n){n.startLine=n.endLine=this.posTracker.line,n.startCol=n.endCol=this.posTracker.col,n.startOffset=n.endOffset=this.posTracker.offset}_reportError(n){const r={code:n,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1};this._setErrorLocation(r),this.onParseError(r)}_getOverriddenMethods(n){return{_err(r){n._reportError(r)}}}};var D1=J9;const ej=D1,tj=Zy,nj=Gn;let rj=class extends ej{constructor(n,r){super(n,r),this.posTracker=nj.install(n,tj),this.lastErrOffset=-1}_reportError(n){this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,super._reportError(n))}};var ij=rj;const sj=D1,aj=ij,oj=Gn;let lj=class extends sj{constructor(n,r){super(n,r);const i=oj.install(n.preprocessor,aj,r);this.posTracker=i.posTracker}};var cj=lj;const dj=D1,uj=cj,hj=Qy,j0=Gn;let pj=class extends dj{constructor(n,r){super(n,r),this.opts=r,this.ctLoc=null,this.locBeforeToken=!1}_setErrorLocation(n){this.ctLoc&&(n.startLine=this.ctLoc.startLine,n.startCol=this.ctLoc.startCol,n.startOffset=this.ctLoc.startOffset,n.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,n.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,n.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset)}_getOverriddenMethods(n,r){return{_bootstrap(i,s){r._bootstrap.call(this,i,s),j0.install(this.tokenizer,uj,n.opts),j0.install(this.tokenizer,hj)},_processInputToken(i){n.ctLoc=i.location,r._processInputToken.call(this,i)},_err(i,s){n.locBeforeToken=s&&s.beforeToken,n._reportError(i)}}}};var mj=pj,pe={};const{DOCUMENT_MODE:fj}=cn;pe.createDocument=function(){return{nodeName:"#document",mode:fj.NO_QUIRKS,childNodes:[]}};pe.createDocumentFragment=function(){return{nodeName:"#document-fragment",childNodes:[]}};pe.createElement=function(e,n,r){return{nodeName:e,tagName:e,attrs:r,namespaceURI:n,childNodes:[],parentNode:null}};pe.createCommentNode=function(e){return{nodeName:"#comment",data:e,parentNode:null}};const Jy=function(e){return{nodeName:"#text",value:e,parentNode:null}},eS=pe.appendChild=function(e,n){e.childNodes.push(n),n.parentNode=e},gj=pe.insertBefore=function(e,n,r){const i=e.childNodes.indexOf(r);e.childNodes.splice(i,0,n),n.parentNode=e};pe.setTemplateContent=function(e,n){e.content=n};pe.getTemplateContent=function(e){return e.content};pe.setDocumentType=function(e,n,r,i){let s=null;for(let a=0;a<e.childNodes.length;a++)if(e.childNodes[a].nodeName==="#documentType"){s=e.childNodes[a];break}s?(s.name=n,s.publicId=r,s.systemId=i):eS(e,{nodeName:"#documentType",name:n,publicId:r,systemId:i})};pe.setDocumentMode=function(e,n){e.mode=n};pe.getDocumentMode=function(e){return e.mode};pe.detachNode=function(e){if(e.parentNode){const n=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(n,1),e.parentNode=null}};pe.insertText=function(e,n){if(e.childNodes.length){const r=e.childNodes[e.childNodes.length-1];if(r.nodeName==="#text"){r.value+=n;return}}eS(e,Jy(n))};pe.insertTextBefore=function(e,n,r){const i=e.childNodes[e.childNodes.indexOf(r)-1];i&&i.nodeName==="#text"?i.value+=n:gj(e,Jy(n),r)};pe.adoptAttributes=function(e,n){const r=[];for(let i=0;i<e.attrs.length;i++)r.push(e.attrs[i].name);for(let i=0;i<n.length;i++)r.indexOf(n[i].name)===-1&&e.attrs.push(n[i])};pe.getFirstChild=function(e){return e.childNodes[0]};pe.getChildNodes=function(e){return e.childNodes};pe.getParentNode=function(e){return e.parentNode};pe.getAttrList=function(e){return e.attrs};pe.getTagName=function(e){return e.tagName};pe.getNamespaceURI=function(e){return e.namespaceURI};pe.getTextNodeContent=function(e){return e.value};pe.getCommentNodeContent=function(e){return e.data};pe.getDocumentTypeNodeName=function(e){return e.name};pe.getDocumentTypeNodePublicId=function(e){return e.publicId};pe.getDocumentTypeNodeSystemId=function(e){return e.systemId};pe.isTextNode=function(e){return e.nodeName==="#text"};pe.isCommentNode=function(e){return e.nodeName==="#comment"};pe.isDocumentTypeNode=function(e){return e.nodeName==="#documentType"};pe.isElementNode=function(e){return!!e.tagName};pe.setNodeSourceCodeLocation=function(e,n){e.sourceCodeLocation=n};pe.getNodeSourceCodeLocation=function(e){return e.sourceCodeLocation};pe.updateNodeSourceCodeLocation=function(e,n){e.sourceCodeLocation=Object.assign(e.sourceCodeLocation,n)};var bj=function(n,r){return r=r||Object.create(null),[n,r].reduce((i,s)=>(Object.keys(s).forEach(a=>{i[a]=s[a]}),i),Object.create(null))},Hl={};const{DOCUMENT_MODE:li}=cn,tS="html",xj="about:legacy-compat",Ej="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",nS=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],Tj=nS.concat(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),yj=["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"],rS=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],Sj=rS.concat(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]);function v0(e){const n=e.indexOf('"')!==-1?"'":'"';return n+e+n}function w0(e,n){for(let r=0;r<n.length;r++)if(e.indexOf(n[r])===0)return!0;return!1}Hl.isConforming=function(e){return e.name===tS&&e.publicId===null&&(e.systemId===null||e.systemId===xj)};Hl.getDocumentMode=function(e){if(e.name!==tS)return li.QUIRKS;const n=e.systemId;if(n&&n.toLowerCase()===Ej)return li.QUIRKS;let r=e.publicId;if(r!==null){if(r=r.toLowerCase(),yj.indexOf(r)>-1)return li.QUIRKS;let i=n===null?Tj:nS;if(w0(r,i))return li.QUIRKS;if(i=n===null?rS:Sj,w0(r,i))return li.LIMITED_QUIRKS}return li.NO_QUIRKS};Hl.serializeContent=function(e,n,r){let i="!DOCTYPE ";return e&&(i+=e),n?i+=" PUBLIC "+v0(n):r&&(i+=" SYSTEM"),r!==null&&(i+=" "+v0(r)),i};var Tr={};const gd=Bl,M1=cn,Z=M1.TAG_NAMES,et=M1.NAMESPACES,Fo=M1.ATTRS,R0={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},Nj="definitionurl",_j="definitionURL",Aj={attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},jj={"xlink:actuate":{prefix:"xlink",name:"actuate",namespace:et.XLINK},"xlink:arcrole":{prefix:"xlink",name:"arcrole",namespace:et.XLINK},"xlink:href":{prefix:"xlink",name:"href",namespace:et.XLINK},"xlink:role":{prefix:"xlink",name:"role",namespace:et.XLINK},"xlink:show":{prefix:"xlink",name:"show",namespace:et.XLINK},"xlink:title":{prefix:"xlink",name:"title",namespace:et.XLINK},"xlink:type":{prefix:"xlink",name:"type",namespace:et.XLINK},"xml:base":{prefix:"xml",name:"base",namespace:et.XML},"xml:lang":{prefix:"xml",name:"lang",namespace:et.XML},"xml:space":{prefix:"xml",name:"space",namespace:et.XML},xmlns:{prefix:"",name:"xmlns",namespace:et.XMLNS},"xmlns:xlink":{prefix:"xmlns",name:"xlink",namespace:et.XMLNS}},vj=Tr.SVG_TAG_NAMES_ADJUSTMENT_MAP={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},wj={[Z.B]:!0,[Z.BIG]:!0,[Z.BLOCKQUOTE]:!0,[Z.BODY]:!0,[Z.BR]:!0,[Z.CENTER]:!0,[Z.CODE]:!0,[Z.DD]:!0,[Z.DIV]:!0,[Z.DL]:!0,[Z.DT]:!0,[Z.EM]:!0,[Z.EMBED]:!0,[Z.H1]:!0,[Z.H2]:!0,[Z.H3]:!0,[Z.H4]:!0,[Z.H5]:!0,[Z.H6]:!0,[Z.HEAD]:!0,[Z.HR]:!0,[Z.I]:!0,[Z.IMG]:!0,[Z.LI]:!0,[Z.LISTING]:!0,[Z.MENU]:!0,[Z.META]:!0,[Z.NOBR]:!0,[Z.OL]:!0,[Z.P]:!0,[Z.PRE]:!0,[Z.RUBY]:!0,[Z.S]:!0,[Z.SMALL]:!0,[Z.SPAN]:!0,[Z.STRONG]:!0,[Z.STRIKE]:!0,[Z.SUB]:!0,[Z.SUP]:!0,[Z.TABLE]:!0,[Z.TT]:!0,[Z.U]:!0,[Z.UL]:!0,[Z.VAR]:!0};Tr.causesExit=function(e){const n=e.tagName;return n===Z.FONT&&(gd.getTokenAttr(e,Fo.COLOR)!==null||gd.getTokenAttr(e,Fo.SIZE)!==null||gd.getTokenAttr(e,Fo.FACE)!==null)?!0:wj[n]};Tr.adjustTokenMathMLAttrs=function(e){for(let n=0;n<e.attrs.length;n++)if(e.attrs[n].name===Nj){e.attrs[n].name=_j;break}};Tr.adjustTokenSVGAttrs=function(e){for(let n=0;n<e.attrs.length;n++){const r=Aj[e.attrs[n].name];r&&(e.attrs[n].name=r)}};Tr.adjustTokenXMLAttrs=function(e){for(let n=0;n<e.attrs.length;n++){const r=jj[e.attrs[n].name];r&&(e.attrs[n].prefix=r.prefix,e.attrs[n].name=r.name,e.attrs[n].namespace=r.namespace)}};Tr.adjustTokenSVGTagName=function(e){const n=vj[e.tagName];n&&(e.tagName=n)};function Rj(e,n){return n===et.MATHML&&(e===Z.MI||e===Z.MO||e===Z.MN||e===Z.MS||e===Z.MTEXT)}function Ij(e,n,r){if(n===et.MATHML&&e===Z.ANNOTATION_XML){for(let i=0;i<r.length;i++)if(r[i].name===Fo.ENCODING){const s=r[i].value.toLowerCase();return s===R0.TEXT_HTML||s===R0.APPLICATION_XML}}return n===et.SVG&&(e===Z.FOREIGN_OBJECT||e===Z.DESC||e===Z.TITLE)}Tr.isIntegrationPoint=function(e,n,r,i){return!!((!i||i===et.HTML)&&Ij(e,n,r)||(!i||i===et.MATHML)&&Rj(e,n))};const N=Bl,Cj=P9,I0=U9,kj=Z9,Oj=mj,C0=Gn,Lj=pe,Dj=bj,k0=Hl,bn=Tr,nt=O1,Mj=ln,Yr=cn,u=Yr.TAG_NAMES,V=Yr.NAMESPACES,iS=Yr.ATTRS,Fj={scriptingEnabled:!0,sourceCodeLocationInfo:!1,onParseError:null,treeAdapter:Lj},sS="hidden",Pj=8,Uj=3,aS="INITIAL_MODE",F1="BEFORE_HTML_MODE",Gl="BEFORE_HEAD_MODE",Zi="IN_HEAD_MODE",oS="IN_HEAD_NO_SCRIPT_MODE",$l="AFTER_HEAD_MODE",Tn="IN_BODY_MODE",fl="TEXT_MODE",dt="IN_TABLE_MODE",lS="IN_TABLE_TEXT_MODE",zl="IN_CAPTION_MODE",Aa="IN_COLUMN_GROUP_MODE",$t="IN_TABLE_BODY_MODE",Pn="IN_ROW_MODE",Vl="IN_CELL_MODE",P1="IN_SELECT_MODE",U1="IN_SELECT_IN_TABLE_MODE",gl="IN_TEMPLATE_MODE",B1="AFTER_BODY_MODE",Wl="IN_FRAMESET_MODE",cS="AFTER_FRAMESET_MODE",dS="AFTER_AFTER_BODY_MODE",uS="AFTER_AFTER_FRAMESET_MODE",Bj={[u.TR]:Pn,[u.TBODY]:$t,[u.THEAD]:$t,[u.TFOOT]:$t,[u.CAPTION]:zl,[u.COLGROUP]:Aa,[u.TABLE]:dt,[u.BODY]:Tn,[u.FRAMESET]:Wl},Hj={[u.CAPTION]:dt,[u.COLGROUP]:dt,[u.TBODY]:dt,[u.TFOOT]:dt,[u.THEAD]:dt,[u.COL]:Aa,[u.TR]:$t,[u.TD]:Pn,[u.TH]:Pn},O0={[aS]:{[N.CHARACTER_TOKEN]:vs,[N.NULL_CHARACTER_TOKEN]:vs,[N.WHITESPACE_CHARACTER_TOKEN]:le,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:Zj,[N.START_TAG_TOKEN]:vs,[N.END_TAG_TOKEN]:vs,[N.EOF_TOKEN]:vs},[F1]:{[N.CHARACTER_TOKEN]:Ws,[N.NULL_CHARACTER_TOKEN]:Ws,[N.WHITESPACE_CHARACTER_TOKEN]:le,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:Qj,[N.END_TAG_TOKEN]:Jj,[N.EOF_TOKEN]:Ws},[Gl]:{[N.CHARACTER_TOKEN]:qs,[N.NULL_CHARACTER_TOKEN]:qs,[N.WHITESPACE_CHARACTER_TOKEN]:le,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:bo,[N.START_TAG_TOKEN]:ev,[N.END_TAG_TOKEN]:tv,[N.EOF_TOKEN]:qs},[Zi]:{[N.CHARACTER_TOKEN]:Ks,[N.NULL_CHARACTER_TOKEN]:Ks,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:bo,[N.START_TAG_TOKEN]:Ke,[N.END_TAG_TOKEN]:Xr,[N.EOF_TOKEN]:Ks},[oS]:{[N.CHARACTER_TOKEN]:Ys,[N.NULL_CHARACTER_TOKEN]:Ys,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:bo,[N.START_TAG_TOKEN]:nv,[N.END_TAG_TOKEN]:rv,[N.EOF_TOKEN]:Ys},[$l]:{[N.CHARACTER_TOKEN]:Xs,[N.NULL_CHARACTER_TOKEN]:Xs,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:bo,[N.START_TAG_TOKEN]:iv,[N.END_TAG_TOKEN]:sv,[N.EOF_TOKEN]:Xs},[Tn]:{[N.CHARACTER_TOKEN]:xo,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:jt,[N.END_TAG_TOKEN]:H1,[N.EOF_TOKEN]:An},[fl]:{[N.CHARACTER_TOKEN]:Tt,[N.NULL_CHARACTER_TOKEN]:Tt,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:le,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:le,[N.END_TAG_TOKEN]:Mv,[N.EOF_TOKEN]:Fv},[dt]:{[N.CHARACTER_TOKEN]:jn,[N.NULL_CHARACTER_TOKEN]:jn,[N.WHITESPACE_CHARACTER_TOKEN]:jn,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:G1,[N.END_TAG_TOKEN]:$1,[N.EOF_TOKEN]:An},[lS]:{[N.CHARACTER_TOKEN]:qv,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:Wv,[N.COMMENT_TOKEN]:ws,[N.DOCTYPE_TOKEN]:ws,[N.START_TAG_TOKEN]:ws,[N.END_TAG_TOKEN]:ws,[N.EOF_TOKEN]:ws},[zl]:{[N.CHARACTER_TOKEN]:xo,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:Kv,[N.END_TAG_TOKEN]:Yv,[N.EOF_TOKEN]:An},[Aa]:{[N.CHARACTER_TOKEN]:bl,[N.NULL_CHARACTER_TOKEN]:bl,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:Xv,[N.END_TAG_TOKEN]:Zv,[N.EOF_TOKEN]:An},[$t]:{[N.CHARACTER_TOKEN]:jn,[N.NULL_CHARACTER_TOKEN]:jn,[N.WHITESPACE_CHARACTER_TOKEN]:jn,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:Qv,[N.END_TAG_TOKEN]:Jv,[N.EOF_TOKEN]:An},[Pn]:{[N.CHARACTER_TOKEN]:jn,[N.NULL_CHARACTER_TOKEN]:jn,[N.WHITESPACE_CHARACTER_TOKEN]:jn,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:ew,[N.END_TAG_TOKEN]:tw,[N.EOF_TOKEN]:An},[Vl]:{[N.CHARACTER_TOKEN]:xo,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:nw,[N.END_TAG_TOKEN]:rw,[N.EOF_TOKEN]:An},[P1]:{[N.CHARACTER_TOKEN]:Tt,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:hS,[N.END_TAG_TOKEN]:pS,[N.EOF_TOKEN]:An},[U1]:{[N.CHARACTER_TOKEN]:Tt,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:iw,[N.END_TAG_TOKEN]:sw,[N.EOF_TOKEN]:An},[gl]:{[N.CHARACTER_TOKEN]:xo,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:aw,[N.END_TAG_TOKEN]:ow,[N.EOF_TOKEN]:mS},[B1]:{[N.CHARACTER_TOKEN]:xl,[N.NULL_CHARACTER_TOKEN]:xl,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:Xj,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:lw,[N.END_TAG_TOKEN]:cw,[N.EOF_TOKEN]:js},[Wl]:{[N.CHARACTER_TOKEN]:le,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:dw,[N.END_TAG_TOKEN]:uw,[N.EOF_TOKEN]:js},[cS]:{[N.CHARACTER_TOKEN]:le,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:Tt,[N.COMMENT_TOKEN]:$e,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:hw,[N.END_TAG_TOKEN]:pw,[N.EOF_TOKEN]:js},[dS]:{[N.CHARACTER_TOKEN]:Po,[N.NULL_CHARACTER_TOKEN]:Po,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:L0,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:mw,[N.END_TAG_TOKEN]:Po,[N.EOF_TOKEN]:js},[uS]:{[N.CHARACTER_TOKEN]:le,[N.NULL_CHARACTER_TOKEN]:le,[N.WHITESPACE_CHARACTER_TOKEN]:vr,[N.COMMENT_TOKEN]:L0,[N.DOCTYPE_TOKEN]:le,[N.START_TAG_TOKEN]:fw,[N.END_TAG_TOKEN]:le,[N.EOF_TOKEN]:js}};class Gj{constructor(n){this.options=Dj(Fj,n),this.treeAdapter=this.options.treeAdapter,this.pendingScript=null,this.options.sourceCodeLocationInfo&&C0.install(this,kj),this.options.onParseError&&C0.install(this,Oj,{onParseError:this.options.onParseError})}parse(n){const r=this.treeAdapter.createDocument();return this._bootstrap(r,null),this.tokenizer.write(n,!0),this._runParsingLoop(null),r}parseFragment(n,r){r||(r=this.treeAdapter.createElement(u.TEMPLATE,V.HTML,[]));const i=this.treeAdapter.createElement("documentmock",V.HTML,[]);this._bootstrap(i,r),this.treeAdapter.getTagName(r)===u.TEMPLATE&&this._pushTmplInsertionMode(gl),this._initTokenizerForFragmentParsing(),this._insertFakeRootElement(),this._resetInsertionMode(),this._findFormInFragmentContext(),this.tokenizer.write(n,!0),this._runParsingLoop(null);const s=this.treeAdapter.getFirstChild(i),a=this.treeAdapter.createDocumentFragment();return this._adoptNodes(s,a),a}_bootstrap(n,r){this.tokenizer=new N(this.options),this.stopped=!1,this.insertionMode=aS,this.originalInsertionMode="",this.document=n,this.fragmentContext=r,this.headElement=null,this.formElement=null,this.openElements=new Cj(this.document,this.treeAdapter),this.activeFormattingElements=new I0(this.treeAdapter),this.tmplInsertionModeStack=[],this.tmplInsertionModeStackTop=-1,this.currentTmplInsertionMode=null,this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1}_err(){}_runParsingLoop(n){for(;!this.stopped;){this._setupTokenizerCDATAMode();const r=this.tokenizer.getNextToken();if(r.type===N.HIBERNATION_TOKEN)break;if(this.skipNextNewLine&&(this.skipNextNewLine=!1,r.type===N.WHITESPACE_CHARACTER_TOKEN&&r.chars[0]===`
`)){if(r.chars.length===1)continue;r.chars=r.chars.substr(1)}if(this._processInputToken(r),n&&this.pendingScript)break}}runParsingLoopForCurrentChunk(n,r){if(this._runParsingLoop(r),r&&this.pendingScript){const i=this.pendingScript;this.pendingScript=null,r(i);return}n&&n()}_setupTokenizerCDATAMode(){const n=this._getAdjustedCurrentElement();this.tokenizer.allowCDATA=n&&n!==this.document&&this.treeAdapter.getNamespaceURI(n)!==V.HTML&&!this._isIntegrationPoint(n)}_switchToTextParsing(n,r){this._insertElement(n,V.HTML),this.tokenizer.state=r,this.originalInsertionMode=this.insertionMode,this.insertionMode=fl}switchToPlaintextParsing(){this.insertionMode=fl,this.originalInsertionMode=Tn,this.tokenizer.state=N.MODE.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let n=this.fragmentContext;do{if(this.treeAdapter.getTagName(n)===u.FORM){this.formElement=n;break}n=this.treeAdapter.getParentNode(n)}while(n)}_initTokenizerForFragmentParsing(){if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===V.HTML){const n=this.treeAdapter.getTagName(this.fragmentContext);n===u.TITLE||n===u.TEXTAREA?this.tokenizer.state=N.MODE.RCDATA:n===u.STYLE||n===u.XMP||n===u.IFRAME||n===u.NOEMBED||n===u.NOFRAMES||n===u.NOSCRIPT?this.tokenizer.state=N.MODE.RAWTEXT:n===u.SCRIPT?this.tokenizer.state=N.MODE.SCRIPT_DATA:n===u.PLAINTEXT&&(this.tokenizer.state=N.MODE.PLAINTEXT)}}_setDocumentType(n){const r=n.name||"",i=n.publicId||"",s=n.systemId||"";this.treeAdapter.setDocumentType(this.document,r,i,s)}_attachElementToTree(n){if(this._shouldFosterParentOnInsertion())this._fosterParentElement(n);else{const r=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.appendChild(r,n)}}_appendElement(n,r){const i=this.treeAdapter.createElement(n.tagName,r,n.attrs);this._attachElementToTree(i)}_insertElement(n,r){const i=this.treeAdapter.createElement(n.tagName,r,n.attrs);this._attachElementToTree(i),this.openElements.push(i)}_insertFakeElement(n){const r=this.treeAdapter.createElement(n,V.HTML,[]);this._attachElementToTree(r),this.openElements.push(r)}_insertTemplate(n){const r=this.treeAdapter.createElement(n.tagName,V.HTML,n.attrs),i=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(r,i),this._attachElementToTree(r),this.openElements.push(r)}_insertFakeRootElement(){const n=this.treeAdapter.createElement(u.HTML,V.HTML,[]);this.treeAdapter.appendChild(this.openElements.current,n),this.openElements.push(n)}_appendCommentNode(n,r){const i=this.treeAdapter.createCommentNode(n.data);this.treeAdapter.appendChild(r,i)}_insertCharacters(n){if(this._shouldFosterParentOnInsertion())this._fosterParentText(n.chars);else{const r=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.insertText(r,n.chars)}}_adoptNodes(n,r){for(let i=this.treeAdapter.getFirstChild(n);i;i=this.treeAdapter.getFirstChild(n))this.treeAdapter.detachNode(i),this.treeAdapter.appendChild(r,i)}_shouldProcessTokenInForeignContent(n){const r=this._getAdjustedCurrentElement();if(!r||r===this.document)return!1;const i=this.treeAdapter.getNamespaceURI(r);if(i===V.HTML||this.treeAdapter.getTagName(r)===u.ANNOTATION_XML&&i===V.MATHML&&n.type===N.START_TAG_TOKEN&&n.tagName===u.SVG)return!1;const s=n.type===N.CHARACTER_TOKEN||n.type===N.NULL_CHARACTER_TOKEN||n.type===N.WHITESPACE_CHARACTER_TOKEN;return(n.type===N.START_TAG_TOKEN&&n.tagName!==u.MGLYPH&&n.tagName!==u.MALIGNMARK||s)&&this._isIntegrationPoint(r,V.MATHML)||(n.type===N.START_TAG_TOKEN||s)&&this._isIntegrationPoint(r,V.HTML)?!1:n.type!==N.EOF_TOKEN}_processToken(n){O0[this.insertionMode][n.type](this,n)}_processTokenInBodyMode(n){O0[Tn][n.type](this,n)}_processTokenInForeignContent(n){n.type===N.CHARACTER_TOKEN?bw(this,n):n.type===N.NULL_CHARACTER_TOKEN?gw(this,n):n.type===N.WHITESPACE_CHARACTER_TOKEN?Tt(this,n):n.type===N.COMMENT_TOKEN?$e(this,n):n.type===N.START_TAG_TOKEN?xw(this,n):n.type===N.END_TAG_TOKEN&&Ew(this,n)}_processInputToken(n){this._shouldProcessTokenInForeignContent(n)?this._processTokenInForeignContent(n):this._processToken(n),n.type===N.START_TAG_TOKEN&&n.selfClosing&&!n.ackSelfClosing&&this._err(nt.nonVoidHtmlElementStartTagWithTrailingSolidus)}_isIntegrationPoint(n,r){const i=this.treeAdapter.getTagName(n),s=this.treeAdapter.getNamespaceURI(n),a=this.treeAdapter.getAttrList(n);return bn.isIntegrationPoint(i,s,a,r)}_reconstructActiveFormattingElements(){const n=this.activeFormattingElements.length;if(n){let r=n,i=null;do if(r--,i=this.activeFormattingElements.entries[r],i.type===I0.MARKER_ENTRY||this.openElements.contains(i.element)){r++;break}while(r>0);for(let s=r;s<n;s++)i=this.activeFormattingElements.entries[s],this._insertElement(i.token,this.treeAdapter.getNamespaceURI(i.element)),i.element=this.openElements.current}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=Pn}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(u.P),this.openElements.popUntilTagNamePopped(u.P)}_resetInsertionMode(){for(let n=this.openElements.stackTop,r=!1;n>=0;n--){let i=this.openElements.items[n];n===0&&(r=!0,this.fragmentContext&&(i=this.fragmentContext));const s=this.treeAdapter.getTagName(i),a=Bj[s];if(a){this.insertionMode=a;break}else if(!r&&(s===u.TD||s===u.TH)){this.insertionMode=Vl;break}else if(!r&&s===u.HEAD){this.insertionMode=Zi;break}else if(s===u.SELECT){this._resetInsertionModeForSelect(n);break}else if(s===u.TEMPLATE){this.insertionMode=this.currentTmplInsertionMode;break}else if(s===u.HTML){this.insertionMode=this.headElement?$l:Gl;break}else if(r){this.insertionMode=Tn;break}}}_resetInsertionModeForSelect(n){if(n>0)for(let r=n-1;r>0;r--){const i=this.openElements.items[r],s=this.treeAdapter.getTagName(i);if(s===u.TEMPLATE)break;if(s===u.TABLE){this.insertionMode=U1;return}}this.insertionMode=P1}_pushTmplInsertionMode(n){this.tmplInsertionModeStack.push(n),this.tmplInsertionModeStackTop++,this.currentTmplInsertionMode=n}_popTmplInsertionMode(){this.tmplInsertionModeStack.pop(),this.tmplInsertionModeStackTop--,this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]}_isElementCausesFosterParenting(n){const r=this.treeAdapter.getTagName(n);return r===u.TABLE||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current)}_findFosterParentingLocation(){const n={parent:null,beforeElement:null};for(let r=this.openElements.stackTop;r>=0;r--){const i=this.openElements.items[r],s=this.treeAdapter.getTagName(i),a=this.treeAdapter.getNamespaceURI(i);if(s===u.TEMPLATE&&a===V.HTML){n.parent=this.treeAdapter.getTemplateContent(i);break}else if(s===u.TABLE){n.parent=this.treeAdapter.getParentNode(i),n.parent?n.beforeElement=i:n.parent=this.openElements.items[r-1];break}}return n.parent||(n.parent=this.openElements.items[0]),n}_fosterParentElement(n){const r=this._findFosterParentingLocation();r.beforeElement?this.treeAdapter.insertBefore(r.parent,n,r.beforeElement):this.treeAdapter.appendChild(r.parent,n)}_fosterParentText(n){const r=this._findFosterParentingLocation();r.beforeElement?this.treeAdapter.insertTextBefore(r.parent,n,r.beforeElement):this.treeAdapter.insertText(r.parent,n)}_isSpecialElement(n){const r=this.treeAdapter.getTagName(n),i=this.treeAdapter.getNamespaceURI(n);return Yr.SPECIAL_ELEMENTS[i][r]}}var $j=Gj;function zj(e,n){let r=e.activeFormattingElements.getElementEntryInScopeWithTagName(n.tagName);return r?e.openElements.contains(r.element)?e.openElements.hasInScope(n.tagName)||(r=null):(e.activeFormattingElements.removeEntry(r),r=null):Jt(e,n),r}function Vj(e,n){let r=null;for(let i=e.openElements.stackTop;i>=0;i--){const s=e.openElements.items[i];if(s===n.element)break;e._isSpecialElement(s)&&(r=s)}return r||(e.openElements.popUntilElementPopped(n.element),e.activeFormattingElements.removeEntry(n)),r}function Wj(e,n,r){let i=n,s=e.openElements.getCommonAncestor(n);for(let a=0,o=s;o!==r;a++,o=s){s=e.openElements.getCommonAncestor(o);const l=e.activeFormattingElements.getElementEntry(o),c=l&&a>=Uj;!l||c?(c&&e.activeFormattingElements.removeEntry(l),e.openElements.remove(o)):(o=qj(e,l),i===n&&(e.activeFormattingElements.bookmark=l),e.treeAdapter.detachNode(i),e.treeAdapter.appendChild(o,i),i=o)}return i}function qj(e,n){const r=e.treeAdapter.getNamespaceURI(n.element),i=e.treeAdapter.createElement(n.token.tagName,r,n.token.attrs);return e.openElements.replace(n.element,i),n.element=i,i}function Kj(e,n,r){if(e._isElementCausesFosterParenting(n))e._fosterParentElement(r);else{const i=e.treeAdapter.getTagName(n),s=e.treeAdapter.getNamespaceURI(n);i===u.TEMPLATE&&s===V.HTML&&(n=e.treeAdapter.getTemplateContent(n)),e.treeAdapter.appendChild(n,r)}}function Yj(e,n,r){const i=e.treeAdapter.getNamespaceURI(r.element),s=r.token,a=e.treeAdapter.createElement(s.tagName,i,s.attrs);e._adoptNodes(n,a),e.treeAdapter.appendChild(n,a),e.activeFormattingElements.insertElementAfterBookmark(a,r.token),e.activeFormattingElements.removeEntry(r),e.openElements.remove(r.element),e.openElements.insertAfter(n,a)}function tr(e,n){let r;for(let i=0;i<Pj&&(r=zj(e,n),!!r);i++){const s=Vj(e,r);if(!s)break;e.activeFormattingElements.bookmark=r;const a=Wj(e,s,r.element),o=e.openElements.getCommonAncestor(r.element);e.treeAdapter.detachNode(a),Kj(e,o,a),Yj(e,s,r)}}function le(){}function bo(e){e._err(nt.misplacedDoctype)}function $e(e,n){e._appendCommentNode(n,e.openElements.currentTmplContent||e.openElements.current)}function Xj(e,n){e._appendCommentNode(n,e.openElements.items[0])}function L0(e,n){e._appendCommentNode(n,e.document)}function Tt(e,n){e._insertCharacters(n)}function js(e){e.stopped=!0}function Zj(e,n){e._setDocumentType(n);const r=n.forceQuirks?Yr.DOCUMENT_MODE.QUIRKS:k0.getDocumentMode(n);k0.isConforming(n)||e._err(nt.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,r),e.insertionMode=F1}function vs(e,n){e._err(nt.missingDoctype,{beforeToken:!0}),e.treeAdapter.setDocumentMode(e.document,Yr.DOCUMENT_MODE.QUIRKS),e.insertionMode=F1,e._processToken(n)}function Qj(e,n){n.tagName===u.HTML?(e._insertElement(n,V.HTML),e.insertionMode=Gl):Ws(e,n)}function Jj(e,n){const r=n.tagName;(r===u.HTML||r===u.HEAD||r===u.BODY||r===u.BR)&&Ws(e,n)}function Ws(e,n){e._insertFakeRootElement(),e.insertionMode=Gl,e._processToken(n)}function ev(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.HEAD?(e._insertElement(n,V.HTML),e.headElement=e.openElements.current,e.insertionMode=Zi):qs(e,n)}function tv(e,n){const r=n.tagName;r===u.HEAD||r===u.BODY||r===u.HTML||r===u.BR?qs(e,n):e._err(nt.endTagWithoutMatchingOpenElement)}function qs(e,n){e._insertFakeElement(u.HEAD),e.headElement=e.openElements.current,e.insertionMode=Zi,e._processToken(n)}function Ke(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.BASE||r===u.BASEFONT||r===u.BGSOUND||r===u.LINK||r===u.META?(e._appendElement(n,V.HTML),n.ackSelfClosing=!0):r===u.TITLE?e._switchToTextParsing(n,N.MODE.RCDATA):r===u.NOSCRIPT?e.options.scriptingEnabled?e._switchToTextParsing(n,N.MODE.RAWTEXT):(e._insertElement(n,V.HTML),e.insertionMode=oS):r===u.NOFRAMES||r===u.STYLE?e._switchToTextParsing(n,N.MODE.RAWTEXT):r===u.SCRIPT?e._switchToTextParsing(n,N.MODE.SCRIPT_DATA):r===u.TEMPLATE?(e._insertTemplate(n,V.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=gl,e._pushTmplInsertionMode(gl)):r===u.HEAD?e._err(nt.misplacedStartTagForHeadElement):Ks(e,n)}function Xr(e,n){const r=n.tagName;r===u.HEAD?(e.openElements.pop(),e.insertionMode=$l):r===u.BODY||r===u.BR||r===u.HTML?Ks(e,n):r===u.TEMPLATE&&e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagName!==u.TEMPLATE&&e._err(nt.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(u.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode()):e._err(nt.endTagWithoutMatchingOpenElement)}function Ks(e,n){e.openElements.pop(),e.insertionMode=$l,e._processToken(n)}function nv(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.BASEFONT||r===u.BGSOUND||r===u.HEAD||r===u.LINK||r===u.META||r===u.NOFRAMES||r===u.STYLE?Ke(e,n):r===u.NOSCRIPT?e._err(nt.nestedNoscriptInHead):Ys(e,n)}function rv(e,n){const r=n.tagName;r===u.NOSCRIPT?(e.openElements.pop(),e.insertionMode=Zi):r===u.BR?Ys(e,n):e._err(nt.endTagWithoutMatchingOpenElement)}function Ys(e,n){const r=n.type===N.EOF_TOKEN?nt.openElementsLeftAfterEof:nt.disallowedContentInNoscriptInHead;e._err(r),e.openElements.pop(),e.insertionMode=Zi,e._processToken(n)}function iv(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.BODY?(e._insertElement(n,V.HTML),e.framesetOk=!1,e.insertionMode=Tn):r===u.FRAMESET?(e._insertElement(n,V.HTML),e.insertionMode=Wl):r===u.BASE||r===u.BASEFONT||r===u.BGSOUND||r===u.LINK||r===u.META||r===u.NOFRAMES||r===u.SCRIPT||r===u.STYLE||r===u.TEMPLATE||r===u.TITLE?(e._err(nt.abandonedHeadElementChild),e.openElements.push(e.headElement),Ke(e,n),e.openElements.remove(e.headElement)):r===u.HEAD?e._err(nt.misplacedStartTagForHeadElement):Xs(e,n)}function sv(e,n){const r=n.tagName;r===u.BODY||r===u.HTML||r===u.BR?Xs(e,n):r===u.TEMPLATE?Xr(e,n):e._err(nt.endTagWithoutMatchingOpenElement)}function Xs(e,n){e._insertFakeElement(u.BODY),e.insertionMode=Tn,e._processToken(n)}function vr(e,n){e._reconstructActiveFormattingElements(),e._insertCharacters(n)}function xo(e,n){e._reconstructActiveFormattingElements(),e._insertCharacters(n),e.framesetOk=!1}function av(e,n){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],n.attrs)}function ov(e,n){const r=e.openElements.tryPeekProperlyNestedBodyElement();r&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(r,n.attrs))}function lv(e,n){const r=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&r&&(e.treeAdapter.detachNode(r),e.openElements.popAllUpToHtmlElement(),e._insertElement(n,V.HTML),e.insertionMode=Wl)}function _n(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML)}function cv(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement();const r=e.openElements.currentTagName;(r===u.H1||r===u.H2||r===u.H3||r===u.H4||r===u.H5||r===u.H6)&&e.openElements.pop(),e._insertElement(n,V.HTML)}function D0(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function dv(e,n){const r=e.openElements.tmplCount>0;(!e.formElement||r)&&(e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML),r||(e.formElement=e.openElements.current))}function uv(e,n){e.framesetOk=!1;const r=n.tagName;for(let i=e.openElements.stackTop;i>=0;i--){const s=e.openElements.items[i],a=e.treeAdapter.getTagName(s);let o=null;if(r===u.LI&&a===u.LI?o=u.LI:(r===u.DD||r===u.DT)&&(a===u.DD||a===u.DT)&&(o=a),o){e.openElements.generateImpliedEndTagsWithExclusion(o),e.openElements.popUntilTagNamePopped(o);break}if(a!==u.ADDRESS&&a!==u.DIV&&a!==u.P&&e._isSpecialElement(s))break}e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML)}function hv(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML),e.tokenizer.state=N.MODE.PLAINTEXT}function pv(e,n){e.openElements.hasInScope(u.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML),e.framesetOk=!1}function mv(e,n){const r=e.activeFormattingElements.getElementEntryInScopeWithTagName(u.A);r&&(tr(e,n),e.openElements.remove(r.element),e.activeFormattingElements.removeEntry(r)),e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,n)}function ci(e,n){e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,n)}function fv(e,n){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(u.NOBR)&&(tr(e,n),e._reconstructActiveFormattingElements()),e._insertElement(n,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,n)}function M0(e,n){e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function gv(e,n){e.treeAdapter.getDocumentMode(e.document)!==Yr.DOCUMENT_MODE.QUIRKS&&e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML),e.framesetOk=!1,e.insertionMode=dt}function pi(e,n){e._reconstructActiveFormattingElements(),e._appendElement(n,V.HTML),e.framesetOk=!1,n.ackSelfClosing=!0}function bv(e,n){e._reconstructActiveFormattingElements(),e._appendElement(n,V.HTML);const r=N.getTokenAttr(n,iS.TYPE);(!r||r.toLowerCase()!==sS)&&(e.framesetOk=!1),n.ackSelfClosing=!0}function F0(e,n){e._appendElement(n,V.HTML),n.ackSelfClosing=!0}function xv(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._appendElement(n,V.HTML),e.framesetOk=!1,n.ackSelfClosing=!0}function Ev(e,n){n.tagName=u.IMG,pi(e,n)}function Tv(e,n){e._insertElement(n,V.HTML),e.skipNextNewLine=!0,e.tokenizer.state=N.MODE.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=fl}function yv(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(n,N.MODE.RAWTEXT)}function Sv(e,n){e.framesetOk=!1,e._switchToTextParsing(n,N.MODE.RAWTEXT)}function P0(e,n){e._switchToTextParsing(n,N.MODE.RAWTEXT)}function Nv(e,n){e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML),e.framesetOk=!1,e.insertionMode===dt||e.insertionMode===zl||e.insertionMode===$t||e.insertionMode===Pn||e.insertionMode===Vl?e.insertionMode=U1:e.insertionMode=P1}function U0(e,n){e.openElements.currentTagName===u.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML)}function B0(e,n){e.openElements.hasInScope(u.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(n,V.HTML)}function _v(e,n){e.openElements.hasInScope(u.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(u.RTC),e._insertElement(n,V.HTML)}function Av(e,n){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(n,V.HTML)}function jv(e,n){e._reconstructActiveFormattingElements(),bn.adjustTokenMathMLAttrs(n),bn.adjustTokenXMLAttrs(n),n.selfClosing?e._appendElement(n,V.MATHML):e._insertElement(n,V.MATHML),n.ackSelfClosing=!0}function vv(e,n){e._reconstructActiveFormattingElements(),bn.adjustTokenSVGAttrs(n),bn.adjustTokenXMLAttrs(n),n.selfClosing?e._appendElement(n,V.SVG):e._insertElement(n,V.SVG),n.ackSelfClosing=!0}function Mt(e,n){e._reconstructActiveFormattingElements(),e._insertElement(n,V.HTML)}function jt(e,n){const r=n.tagName;switch(r.length){case 1:r===u.I||r===u.S||r===u.B||r===u.U?ci(e,n):r===u.P?_n(e,n):r===u.A?mv(e,n):Mt(e,n);break;case 2:r===u.DL||r===u.OL||r===u.UL?_n(e,n):r===u.H1||r===u.H2||r===u.H3||r===u.H4||r===u.H5||r===u.H6?cv(e,n):r===u.LI||r===u.DD||r===u.DT?uv(e,n):r===u.EM||r===u.TT?ci(e,n):r===u.BR?pi(e,n):r===u.HR?xv(e,n):r===u.RB?B0(e,n):r===u.RT||r===u.RP?_v(e,n):r!==u.TH&&r!==u.TD&&r!==u.TR&&Mt(e,n);break;case 3:r===u.DIV||r===u.DIR||r===u.NAV?_n(e,n):r===u.PRE?D0(e,n):r===u.BIG?ci(e,n):r===u.IMG||r===u.WBR?pi(e,n):r===u.XMP?yv(e,n):r===u.SVG?vv(e,n):r===u.RTC?B0(e,n):r!==u.COL&&Mt(e,n);break;case 4:r===u.HTML?av(e,n):r===u.BASE||r===u.LINK||r===u.META?Ke(e,n):r===u.BODY?ov(e,n):r===u.MAIN||r===u.MENU?_n(e,n):r===u.FORM?dv(e,n):r===u.CODE||r===u.FONT?ci(e,n):r===u.NOBR?fv(e,n):r===u.AREA?pi(e,n):r===u.MATH?jv(e,n):r===u.MENU?Av(e,n):r!==u.HEAD&&Mt(e,n);break;case 5:r===u.STYLE||r===u.TITLE?Ke(e,n):r===u.ASIDE?_n(e,n):r===u.SMALL?ci(e,n):r===u.TABLE?gv(e,n):r===u.EMBED?pi(e,n):r===u.INPUT?bv(e,n):r===u.PARAM||r===u.TRACK?F0(e,n):r===u.IMAGE?Ev(e,n):r!==u.FRAME&&r!==u.TBODY&&r!==u.TFOOT&&r!==u.THEAD&&Mt(e,n);break;case 6:r===u.SCRIPT?Ke(e,n):r===u.CENTER||r===u.FIGURE||r===u.FOOTER||r===u.HEADER||r===u.HGROUP||r===u.DIALOG?_n(e,n):r===u.BUTTON?pv(e,n):r===u.STRIKE||r===u.STRONG?ci(e,n):r===u.APPLET||r===u.OBJECT?M0(e,n):r===u.KEYGEN?pi(e,n):r===u.SOURCE?F0(e,n):r===u.IFRAME?Sv(e,n):r===u.SELECT?Nv(e,n):r===u.OPTION?U0(e,n):Mt(e,n);break;case 7:r===u.BGSOUND?Ke(e,n):r===u.DETAILS||r===u.ADDRESS||r===u.ARTICLE||r===u.SECTION||r===u.SUMMARY?_n(e,n):r===u.LISTING?D0(e,n):r===u.MARQUEE?M0(e,n):r===u.NOEMBED?P0(e,n):r!==u.CAPTION&&Mt(e,n);break;case 8:r===u.BASEFONT?Ke(e,n):r===u.FRAMESET?lv(e,n):r===u.FIELDSET?_n(e,n):r===u.TEXTAREA?Tv(e,n):r===u.TEMPLATE?Ke(e,n):r===u.NOSCRIPT?e.options.scriptingEnabled?P0(e,n):Mt(e,n):r===u.OPTGROUP?U0(e,n):r!==u.COLGROUP&&Mt(e,n);break;case 9:r===u.PLAINTEXT?hv(e,n):Mt(e,n);break;case 10:r===u.BLOCKQUOTE||r===u.FIGCAPTION?_n(e,n):Mt(e,n);break;default:Mt(e,n)}}function wv(e){e.openElements.hasInScope(u.BODY)&&(e.insertionMode=B1)}function Rv(e,n){e.openElements.hasInScope(u.BODY)&&(e.insertionMode=B1,e._processToken(n))}function Yn(e,n){const r=n.tagName;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r))}function Iv(e){const n=e.openElements.tmplCount>0,r=e.formElement;n||(e.formElement=null),(r||n)&&e.openElements.hasInScope(u.FORM)&&(e.openElements.generateImpliedEndTags(),n?e.openElements.popUntilTagNamePopped(u.FORM):e.openElements.remove(r))}function Cv(e){e.openElements.hasInButtonScope(u.P)||e._insertFakeElement(u.P),e._closePElement()}function kv(e){e.openElements.hasInListItemScope(u.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(u.LI),e.openElements.popUntilTagNamePopped(u.LI))}function Ov(e,n){const r=n.tagName;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r))}function Lv(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function H0(e,n){const r=n.tagName;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r),e.activeFormattingElements.clearToLastMarker())}function Dv(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(u.BR),e.openElements.pop(),e.framesetOk=!1}function Jt(e,n){const r=n.tagName;for(let i=e.openElements.stackTop;i>0;i--){const s=e.openElements.items[i];if(e.treeAdapter.getTagName(s)===r){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilElementPopped(s);break}if(e._isSpecialElement(s))break}}function H1(e,n){const r=n.tagName;switch(r.length){case 1:r===u.A||r===u.B||r===u.I||r===u.S||r===u.U?tr(e,n):r===u.P?Cv(e):Jt(e,n);break;case 2:r===u.DL||r===u.UL||r===u.OL?Yn(e,n):r===u.LI?kv(e):r===u.DD||r===u.DT?Ov(e,n):r===u.H1||r===u.H2||r===u.H3||r===u.H4||r===u.H5||r===u.H6?Lv(e):r===u.BR?Dv(e):r===u.EM||r===u.TT?tr(e,n):Jt(e,n);break;case 3:r===u.BIG?tr(e,n):r===u.DIR||r===u.DIV||r===u.NAV||r===u.PRE?Yn(e,n):Jt(e,n);break;case 4:r===u.BODY?wv(e):r===u.HTML?Rv(e,n):r===u.FORM?Iv(e):r===u.CODE||r===u.FONT||r===u.NOBR?tr(e,n):r===u.MAIN||r===u.MENU?Yn(e,n):Jt(e,n);break;case 5:r===u.ASIDE?Yn(e,n):r===u.SMALL?tr(e,n):Jt(e,n);break;case 6:r===u.CENTER||r===u.FIGURE||r===u.FOOTER||r===u.HEADER||r===u.HGROUP||r===u.DIALOG?Yn(e,n):r===u.APPLET||r===u.OBJECT?H0(e,n):r===u.STRIKE||r===u.STRONG?tr(e,n):Jt(e,n);break;case 7:r===u.ADDRESS||r===u.ARTICLE||r===u.DETAILS||r===u.SECTION||r===u.SUMMARY||r===u.LISTING?Yn(e,n):r===u.MARQUEE?H0(e,n):Jt(e,n);break;case 8:r===u.FIELDSET?Yn(e,n):r===u.TEMPLATE?Xr(e,n):Jt(e,n);break;case 10:r===u.BLOCKQUOTE||r===u.FIGCAPTION?Yn(e,n):Jt(e,n);break;default:Jt(e,n)}}function An(e,n){e.tmplInsertionModeStackTop>-1?mS(e,n):e.stopped=!0}function Mv(e,n){n.tagName===u.SCRIPT&&(e.pendingScript=e.openElements.current),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function Fv(e,n){e._err(nt.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e._processToken(n)}function jn(e,n){const r=e.openElements.currentTagName;r===u.TABLE||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR?(e.pendingCharacterTokens=[],e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=lS,e._processToken(n)):Pt(e,n)}function Pv(e,n){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(n,V.HTML),e.insertionMode=zl}function Uv(e,n){e.openElements.clearBackToTableContext(),e._insertElement(n,V.HTML),e.insertionMode=Aa}function Bv(e,n){e.openElements.clearBackToTableContext(),e._insertFakeElement(u.COLGROUP),e.insertionMode=Aa,e._processToken(n)}function Hv(e,n){e.openElements.clearBackToTableContext(),e._insertElement(n,V.HTML),e.insertionMode=$t}function Gv(e,n){e.openElements.clearBackToTableContext(),e._insertFakeElement(u.TBODY),e.insertionMode=$t,e._processToken(n)}function $v(e,n){e.openElements.hasInTableScope(u.TABLE)&&(e.openElements.popUntilTagNamePopped(u.TABLE),e._resetInsertionMode(),e._processToken(n))}function zv(e,n){const r=N.getTokenAttr(n,iS.TYPE);r&&r.toLowerCase()===sS?e._appendElement(n,V.HTML):Pt(e,n),n.ackSelfClosing=!0}function Vv(e,n){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(n,V.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function G1(e,n){const r=n.tagName;switch(r.length){case 2:r===u.TD||r===u.TH||r===u.TR?Gv(e,n):Pt(e,n);break;case 3:r===u.COL?Bv(e,n):Pt(e,n);break;case 4:r===u.FORM?Vv(e,n):Pt(e,n);break;case 5:r===u.TABLE?$v(e,n):r===u.STYLE?Ke(e,n):r===u.TBODY||r===u.TFOOT||r===u.THEAD?Hv(e,n):r===u.INPUT?zv(e,n):Pt(e,n);break;case 6:r===u.SCRIPT?Ke(e,n):Pt(e,n);break;case 7:r===u.CAPTION?Pv(e,n):Pt(e,n);break;case 8:r===u.COLGROUP?Uv(e,n):r===u.TEMPLATE?Ke(e,n):Pt(e,n);break;default:Pt(e,n)}}function $1(e,n){const r=n.tagName;r===u.TABLE?e.openElements.hasInTableScope(u.TABLE)&&(e.openElements.popUntilTagNamePopped(u.TABLE),e._resetInsertionMode()):r===u.TEMPLATE?Xr(e,n):r!==u.BODY&&r!==u.CAPTION&&r!==u.COL&&r!==u.COLGROUP&&r!==u.HTML&&r!==u.TBODY&&r!==u.TD&&r!==u.TFOOT&&r!==u.TH&&r!==u.THEAD&&r!==u.TR&&Pt(e,n)}function Pt(e,n){const r=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,e._processTokenInBodyMode(n),e.fosterParentingEnabled=r}function Wv(e,n){e.pendingCharacterTokens.push(n)}function qv(e,n){e.pendingCharacterTokens.push(n),e.hasNonWhitespacePendingCharacterToken=!0}function ws(e,n){let r=0;if(e.hasNonWhitespacePendingCharacterToken)for(;r<e.pendingCharacterTokens.length;r++)Pt(e,e.pendingCharacterTokens[r]);else for(;r<e.pendingCharacterTokens.length;r++)e._insertCharacters(e.pendingCharacterTokens[r]);e.insertionMode=e.originalInsertionMode,e._processToken(n)}function Kv(e,n){const r=n.tagName;r===u.CAPTION||r===u.COL||r===u.COLGROUP||r===u.TBODY||r===u.TD||r===u.TFOOT||r===u.TH||r===u.THEAD||r===u.TR?e.openElements.hasInTableScope(u.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=dt,e._processToken(n)):jt(e,n)}function Yv(e,n){const r=n.tagName;r===u.CAPTION||r===u.TABLE?e.openElements.hasInTableScope(u.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=dt,r===u.TABLE&&e._processToken(n)):r!==u.BODY&&r!==u.COL&&r!==u.COLGROUP&&r!==u.HTML&&r!==u.TBODY&&r!==u.TD&&r!==u.TFOOT&&r!==u.TH&&r!==u.THEAD&&r!==u.TR&&H1(e,n)}function Xv(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.COL?(e._appendElement(n,V.HTML),n.ackSelfClosing=!0):r===u.TEMPLATE?Ke(e,n):bl(e,n)}function Zv(e,n){const r=n.tagName;r===u.COLGROUP?e.openElements.currentTagName===u.COLGROUP&&(e.openElements.pop(),e.insertionMode=dt):r===u.TEMPLATE?Xr(e,n):r!==u.COL&&bl(e,n)}function bl(e,n){e.openElements.currentTagName===u.COLGROUP&&(e.openElements.pop(),e.insertionMode=dt,e._processToken(n))}function Qv(e,n){const r=n.tagName;r===u.TR?(e.openElements.clearBackToTableBodyContext(),e._insertElement(n,V.HTML),e.insertionMode=Pn):r===u.TH||r===u.TD?(e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(u.TR),e.insertionMode=Pn,e._processToken(n)):r===u.CAPTION||r===u.COL||r===u.COLGROUP||r===u.TBODY||r===u.TFOOT||r===u.THEAD?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=dt,e._processToken(n)):G1(e,n)}function Jv(e,n){const r=n.tagName;r===u.TBODY||r===u.TFOOT||r===u.THEAD?e.openElements.hasInTableScope(r)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=dt):r===u.TABLE?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=dt,e._processToken(n)):(r!==u.BODY&&r!==u.CAPTION&&r!==u.COL&&r!==u.COLGROUP||r!==u.HTML&&r!==u.TD&&r!==u.TH&&r!==u.TR)&&$1(e,n)}function ew(e,n){const r=n.tagName;r===u.TH||r===u.TD?(e.openElements.clearBackToTableRowContext(),e._insertElement(n,V.HTML),e.insertionMode=Vl,e.activeFormattingElements.insertMarker()):r===u.CAPTION||r===u.COL||r===u.COLGROUP||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR?e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=$t,e._processToken(n)):G1(e,n)}function tw(e,n){const r=n.tagName;r===u.TR?e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=$t):r===u.TABLE?e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=$t,e._processToken(n)):r===u.TBODY||r===u.TFOOT||r===u.THEAD?(e.openElements.hasInTableScope(r)||e.openElements.hasInTableScope(u.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=$t,e._processToken(n)):(r!==u.BODY&&r!==u.CAPTION&&r!==u.COL&&r!==u.COLGROUP||r!==u.HTML&&r!==u.TD&&r!==u.TH)&&$1(e,n)}function nw(e,n){const r=n.tagName;r===u.CAPTION||r===u.COL||r===u.COLGROUP||r===u.TBODY||r===u.TD||r===u.TFOOT||r===u.TH||r===u.THEAD||r===u.TR?(e.openElements.hasInTableScope(u.TD)||e.openElements.hasInTableScope(u.TH))&&(e._closeTableCell(),e._processToken(n)):jt(e,n)}function rw(e,n){const r=n.tagName;r===u.TD||r===u.TH?e.openElements.hasInTableScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=Pn):r===u.TABLE||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR?e.openElements.hasInTableScope(r)&&(e._closeTableCell(),e._processToken(n)):r!==u.BODY&&r!==u.CAPTION&&r!==u.COL&&r!==u.COLGROUP&&r!==u.HTML&&H1(e,n)}function hS(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.OPTION?(e.openElements.currentTagName===u.OPTION&&e.openElements.pop(),e._insertElement(n,V.HTML)):r===u.OPTGROUP?(e.openElements.currentTagName===u.OPTION&&e.openElements.pop(),e.openElements.currentTagName===u.OPTGROUP&&e.openElements.pop(),e._insertElement(n,V.HTML)):r===u.INPUT||r===u.KEYGEN||r===u.TEXTAREA||r===u.SELECT?e.openElements.hasInSelectScope(u.SELECT)&&(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),r!==u.SELECT&&e._processToken(n)):(r===u.SCRIPT||r===u.TEMPLATE)&&Ke(e,n)}function pS(e,n){const r=n.tagName;if(r===u.OPTGROUP){const i=e.openElements.items[e.openElements.stackTop-1],s=i&&e.treeAdapter.getTagName(i);e.openElements.currentTagName===u.OPTION&&s===u.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagName===u.OPTGROUP&&e.openElements.pop()}else r===u.OPTION?e.openElements.currentTagName===u.OPTION&&e.openElements.pop():r===u.SELECT&&e.openElements.hasInSelectScope(u.SELECT)?(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode()):r===u.TEMPLATE&&Xr(e,n)}function iw(e,n){const r=n.tagName;r===u.CAPTION||r===u.TABLE||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR||r===u.TD||r===u.TH?(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),e._processToken(n)):hS(e,n)}function sw(e,n){const r=n.tagName;r===u.CAPTION||r===u.TABLE||r===u.TBODY||r===u.TFOOT||r===u.THEAD||r===u.TR||r===u.TD||r===u.TH?e.openElements.hasInTableScope(r)&&(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),e._processToken(n)):pS(e,n)}function aw(e,n){const r=n.tagName;if(r===u.BASE||r===u.BASEFONT||r===u.BGSOUND||r===u.LINK||r===u.META||r===u.NOFRAMES||r===u.SCRIPT||r===u.STYLE||r===u.TEMPLATE||r===u.TITLE)Ke(e,n);else{const i=Hj[r]||Tn;e._popTmplInsertionMode(),e._pushTmplInsertionMode(i),e.insertionMode=i,e._processToken(n)}}function ow(e,n){n.tagName===u.TEMPLATE&&Xr(e,n)}function mS(e,n){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(u.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode(),e._processToken(n)):e.stopped=!0}function lw(e,n){n.tagName===u.HTML?jt(e,n):xl(e,n)}function cw(e,n){n.tagName===u.HTML?e.fragmentContext||(e.insertionMode=dS):xl(e,n)}function xl(e,n){e.insertionMode=Tn,e._processToken(n)}function dw(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.FRAMESET?e._insertElement(n,V.HTML):r===u.FRAME?(e._appendElement(n,V.HTML),n.ackSelfClosing=!0):r===u.NOFRAMES&&Ke(e,n)}function uw(e,n){n.tagName===u.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagName!==u.FRAMESET&&(e.insertionMode=cS))}function hw(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.NOFRAMES&&Ke(e,n)}function pw(e,n){n.tagName===u.HTML&&(e.insertionMode=uS)}function mw(e,n){n.tagName===u.HTML?jt(e,n):Po(e,n)}function Po(e,n){e.insertionMode=Tn,e._processToken(n)}function fw(e,n){const r=n.tagName;r===u.HTML?jt(e,n):r===u.NOFRAMES&&Ke(e,n)}function gw(e,n){n.chars=Mj.REPLACEMENT_CHARACTER,e._insertCharacters(n)}function bw(e,n){e._insertCharacters(n),e.framesetOk=!1}function xw(e,n){if(bn.causesExit(n)&&!e.fragmentContext){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==V.HTML&&!e._isIntegrationPoint(e.openElements.current);)e.openElements.pop();e._processToken(n)}else{const r=e._getAdjustedCurrentElement(),i=e.treeAdapter.getNamespaceURI(r);i===V.MATHML?bn.adjustTokenMathMLAttrs(n):i===V.SVG&&(bn.adjustTokenSVGTagName(n),bn.adjustTokenSVGAttrs(n)),bn.adjustTokenXMLAttrs(n),n.selfClosing?e._appendElement(n,i):e._insertElement(n,i),n.ackSelfClosing=!0}}function Ew(e,n){for(let r=e.openElements.stackTop;r>0;r--){const i=e.openElements.items[r];if(e.treeAdapter.getNamespaceURI(i)===V.HTML){e._processToken(n);break}if(e.treeAdapter.getTagName(i).toLowerCase()===n.tagName){e.openElements.popUntilElementPopped(i);break}}}const Tw=Vi($j);class ja{constructor(n,r,i){this.property=n,this.normal=r,i&&(this.space=i)}}ja.prototype.property={};ja.prototype.normal={};ja.prototype.space=null;function fS(e,n){const r={},i={};let s=-1;for(;++s<e.length;)Object.assign(r,e[s].property),Object.assign(i,e[s].normal);return new ja(r,i,n)}function ba(e){return e.toLowerCase()}class Kt{constructor(n,r){this.property=n,this.attribute=r}}Kt.prototype.space=null;Kt.prototype.boolean=!1;Kt.prototype.booleanish=!1;Kt.prototype.overloadedBoolean=!1;Kt.prototype.number=!1;Kt.prototype.commaSeparated=!1;Kt.prototype.spaceSeparated=!1;Kt.prototype.commaOrSpaceSeparated=!1;Kt.prototype.mustUseProperty=!1;Kt.prototype.defined=!1;let yw=0;const te=Zr(),Be=Zr(),gS=Zr(),P=Zr(),ye=Zr(),Di=Zr(),wt=Zr();function Zr(){return 2**++yw}const Au=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Be,commaOrSpaceSeparated:wt,commaSeparated:Di,number:P,overloadedBoolean:gS,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),bd=Object.keys(Au);class z1 extends Kt{constructor(n,r,i,s){let a=-1;if(super(n,r),G0(this,"space",s),typeof i=="number")for(;++a<bd.length;){const o=bd[a];G0(this,bd[a],(i&Au[o])===Au[o])}}}z1.prototype.defined=!0;function G0(e,n,r){r&&(e[n]=r)}const Sw={}.hasOwnProperty;function Qi(e){const n={},r={};let i;for(i in e.properties)if(Sw.call(e.properties,i)){const s=e.properties[i],a=new z1(i,e.transform(e.attributes||{},i),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(a.mustUseProperty=!0),n[i]=a,r[ba(i)]=i,r[ba(a.attribute)]=i}return new ja(n,r,e.space)}const bS=Qi({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),xS=Qi({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function ES(e,n){return n in e?e[n]:n}function TS(e,n){return ES(e,n.toLowerCase())}const yS=Qi({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:TS,properties:{xmlns:null,xmlnsXLink:null}}),SS=Qi({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Be,ariaAutoComplete:null,ariaBusy:Be,ariaChecked:Be,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:Be,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:Be,ariaFlowTo:ye,ariaGrabbed:Be,ariaHasPopup:null,ariaHidden:Be,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:P,ariaLive:null,ariaModal:Be,ariaMultiLine:Be,ariaMultiSelectable:Be,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:Be,ariaReadOnly:Be,ariaRelevant:null,ariaRequired:Be,ariaRoleDescription:ye,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:Be,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null}}),Nw=Qi({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:TS,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Di,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:ye,autoFocus:te,autoPlay:te,blocking:ye,capture:te,charSet:null,checked:te,cite:null,className:ye,cols:P,colSpan:null,content:null,contentEditable:Be,controls:te,controlsList:ye,coords:P|Di,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:gS,draggable:Be,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:ye,height:P,hidden:te,high:P,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:ye,itemRef:ye,itemScope:te,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:P,pattern:null,ping:ye,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:ye,required:te,reversed:te,rows:P,rowSpan:P,sandbox:ye,scope:null,scoped:te,seamless:te,selected:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:Be,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Be,width:P,wrap:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:Be,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:te,disableRemotePlayback:te,prefix:null,property:null,results:P,security:null,unselectable:null}}),_w=Qi({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:ES,properties:{about:wt,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Di,g2:Di,glyphName:Di,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:wt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:wt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:wt,rev:wt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:wt,requiredFeatures:wt,requiredFonts:wt,requiredFormats:wt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:wt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:wt,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:wt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Aw=/^data[-\w.:]+$/i,$0=/-[a-z]/g,jw=/[A-Z]/g;function V1(e,n){const r=ba(n);let i=n,s=Kt;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Aw.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace($0,ww);i="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!$0.test(a)){let o=a.replace(jw,vw);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}s=z1}return new s(i,n)}function vw(e){return"-"+e.toLowerCase()}function ww(e){return e.charAt(1).toUpperCase()}const ql=fS([xS,bS,yS,SS,Nw],"html"),va=fS([xS,bS,yS,SS,_w],"svg"),z0=/[#.]/g;function Rw(e,n){const r=e||"",i={};let s=0,a,o;for(;s<r.length;){z0.lastIndex=s;const l=z0.exec(r),c=r.slice(s,l?l.index:r.length);c&&(a?a==="#"?i.id=c:Array.isArray(i.className)?i.className.push(c):i.className=[c]:o=c,s+=c.length),l&&(a=l[0],s++)}return{type:"element",tagName:o||n||"div",properties:i,children:[]}}function V0(e){const n=String(e||"").trim();return n?n.split(/[ \t\n\r\f]+/g):[]}function Iw(e){return e.join(" ").trim()}function W0(e){const n=[],r=String(e||"");let i=r.indexOf(","),s=0,a=!1;for(;!a;){i===-1&&(i=r.length,a=!0);const o=r.slice(s,i).trim();(o||!a)&&n.push(o),s=i+1,i=r.indexOf(",",s)}return n}function Cw(e,n){const r=n||{};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const kw=new Set(["menu","submit","reset","button"]),ju={}.hasOwnProperty;function NS(e,n,r){const i=r&&Mw(r);return function(a,o,...l){let c=-1,d;if(a==null)d={type:"root",children:[]},l.unshift(o);else if(d=Rw(a,n),d.tagName=d.tagName.toLowerCase(),i&&ju.call(i,d.tagName)&&(d.tagName=i[d.tagName]),Ow(o,d.tagName)){let h;for(h in o)ju.call(o,h)&&Lw(e,d.properties,h,o[h])}else l.unshift(o);for(;++c<l.length;)vu(d.children,l[c]);return d.type==="element"&&d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}}function Ow(e,n){return e==null||typeof e!="object"||Array.isArray(e)?!1:n==="input"||!e.type||typeof e.type!="string"?!0:"children"in e&&Array.isArray(e.children)?!1:n==="button"?kw.has(e.type.toLowerCase()):!("value"in e)}function Lw(e,n,r,i){const s=V1(e,r);let a=-1,o;if(i!=null){if(typeof i=="number"){if(Number.isNaN(i))return;o=i}else typeof i=="boolean"?o=i:typeof i=="string"?s.spaceSeparated?o=V0(i):s.commaSeparated?o=W0(i):s.commaOrSpaceSeparated?o=V0(W0(i).join(" ")):o=q0(s,s.property,i):Array.isArray(i)?o=i.concat():o=s.property==="style"?Dw(i):String(i);if(Array.isArray(o)){const l=[];for(;++a<o.length;)l[a]=q0(s,s.property,o[a]);o=l}s.property==="className"&&Array.isArray(n.className)&&(o=n.className.concat(o)),n[s.property]=o}}function vu(e,n){let r=-1;if(n!=null)if(typeof n=="string"||typeof n=="number")e.push({type:"text",value:String(n)});else if(Array.isArray(n))for(;++r<n.length;)vu(e,n[r]);else if(typeof n=="object"&&"type"in n)n.type==="root"?vu(e,n.children):e.push(n);else throw new Error("Expected node, nodes, or string, got `"+n+"`")}function q0(e,n,r){if(typeof r=="string"){if(e.number&&r&&!Number.isNaN(Number(r)))return Number(r);if((e.boolean||e.overloadedBoolean)&&(r===""||ba(r)===ba(n)))return!0}return r}function Dw(e){const n=[];let r;for(r in e)ju.call(e,r)&&n.push([r,e[r]].join(": "));return n.join("; ")}function Mw(e){const n={};let r=-1;for(;++r<e.length;)n[e[r].toLowerCase()]=e[r];return n}const _S=NS(ql,"div"),Fw=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],Pw=NS(va,"g",Fw);function Uw(e){const n=String(e),r=[],i=/\r?\n|\r/g;for(;i.test(n);)r.push(i.lastIndex);return r.push(n.length+1),{toPoint:s,toOffset:a};function s(o){let l=-1;if(typeof o=="number"&&o>-1&&o<r[r.length-1]){for(;++l<r.length;)if(r[l]>o)return{line:l+1,column:o-(l>0?r[l-1]:0)+1,offset:o}}return{line:void 0,column:void 0,offset:void 0}}function a(o){const l=o&&o.line,c=o&&o.column;if(typeof l=="number"&&typeof c=="number"&&!Number.isNaN(l)&&!Number.isNaN(c)&&l-1 in r){const d=(r[l-2]||0)+c-1||0;if(d>-1&&d<r[r.length-1])return d}return-1}}const Bw={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},AS={}.hasOwnProperty,Hw=Object.prototype;function Gw(e,n){const r=n||{};let i,s;return Vw(r)?(s=r,i={}):(s=r.file||void 0,i=r),W1({schema:i.space==="svg"?va:ql,file:s,verbose:i.verbose,location:!1},e)}function W1(e,n){let r;switch(n.nodeName){case"#comment":{const i=n;return r={type:"comment",value:i.data},Uo(e,i,r),r}case"#document":case"#document-fragment":{const i=n,s="mode"in i?i.mode==="quirks"||i.mode==="limited-quirks":!1;if(r={type:"root",children:jS(e,n.childNodes),data:{quirksMode:s}},e.file&&e.location){const a=String(e.file),o=Uw(a),l=o.toPoint(0),c=o.toPoint(a.length);r.position={start:l,end:c}}return r}case"#documentType":{const i=n;return r={type:"doctype"},Uo(e,i,r),r}case"#text":{const i=n;return r={type:"text",value:i.value},Uo(e,i,r),r}default:return r=$w(e,n),r}}function jS(e,n){let r=-1;const i=[];for(;++r<n.length;)i[r]=W1(e,n[r]);return i}function $w(e,n){const r=e.schema;e.schema=n.namespaceURI===Bw.svg?va:ql;let i=-1;const s={};for(;++i<n.attrs.length;){const l=n.attrs[i],c=(l.prefix?l.prefix+":":"")+l.name;AS.call(Hw,c)||(s[c]=l.value)}const o=(e.schema.space==="svg"?Pw:_S)(n.tagName,s,jS(e,n.childNodes));if(Uo(e,n,o),o.tagName==="template"){const l=n,c=l.sourceCodeLocation,d=c&&c.startTag&&vi(c.startTag),h=c&&c.endTag&&vi(c.endTag),b=W1(e,l.content);d&&h&&e.file&&(b.position={start:d.end,end:h.start}),o.content=b}return e.schema=r,o}function Uo(e,n,r){if("sourceCodeLocation"in n&&n.sourceCodeLocation&&e.file){const i=zw(e,r,n.sourceCodeLocation);i&&(e.location=!0,r.position=i)}}function zw(e,n,r){const i=vi(r);if(n.type==="element"){const s=n.children[n.children.length-1];if(i&&!r.endTag&&s&&s.position&&s.position.end&&(i.end=Object.assign({},s.position.end)),e.verbose){const a={};let o;if(r.attrs)for(o in r.attrs)AS.call(r.attrs,o)&&(a[V1(e.schema,o).property]=vi(r.attrs[o]));n.data={position:{opening:vi(r.startTag),closing:r.endTag?vi(r.endTag):null,properties:a}}}}return i}function vi(e){const n=K0({line:e.startLine,column:e.startCol,offset:e.startOffset}),r=K0({line:e.endLine,column:e.endCol,offset:e.endOffset});return n||r?{start:n,end:r}:void 0}function K0(e){return e.line&&e.column?e:void 0}function Vw(e){return"messages"in e}const Ww={abandonedHeadElementChild:{reason:"Unexpected metadata element after head",description:"Unexpected element after head. Expected the element before `</head>`",url:!1},abruptClosingOfEmptyComment:{reason:"Unexpected abruptly closed empty comment",description:"Unexpected `>` or `->`. Expected `-->` to close comments"},abruptDoctypePublicIdentifier:{reason:"Unexpected abruptly closed public identifier",description:"Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"},abruptDoctypeSystemIdentifier:{reason:"Unexpected abruptly closed system identifier",description:"Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"},absenceOfDigitsInNumericCharacterReference:{reason:"Unexpected non-digit at start of numeric character reference",description:"Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"},cdataInHtmlContent:{reason:"Unexpected CDATA section in HTML",description:"Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"},characterReferenceOutsideUnicodeRange:{reason:"Unexpected too big numeric character reference",description:"Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"},closingOfElementWithOpenChildElements:{reason:"Unexpected closing tag with open child elements",description:"Unexpectedly closing tag. Expected other tags to be closed first",url:!1},controlCharacterInInputStream:{reason:"Unexpected control character",description:"Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"},controlCharacterReference:{reason:"Unexpected control character reference",description:"Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"},disallowedContentInNoscriptInHead:{reason:"Disallowed content inside `<noscript>` in `<head>`",description:"Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",url:!1},duplicateAttribute:{reason:"Unexpected duplicate attribute",description:"Unexpectedly double attribute. Expected attributes to occur only once"},endTagWithAttributes:{reason:"Unexpected attribute on closing tag",description:"Unexpected attribute. Expected `>` instead"},endTagWithTrailingSolidus:{reason:"Unexpected slash at end of closing tag",description:"Unexpected `%c-1`. Expected `>` instead"},endTagWithoutMatchingOpenElement:{reason:"Unexpected unopened end tag",description:"Unexpected end tag. Expected no end tag or another end tag",url:!1},eofBeforeTagName:{reason:"Unexpected end of file",description:"Unexpected end of file. Expected tag name instead"},eofInCdata:{reason:"Unexpected end of file in CDATA",description:"Unexpected end of file. Expected `]]>` to close the CDATA"},eofInComment:{reason:"Unexpected end of file in comment",description:"Unexpected end of file. Expected `-->` to close the comment"},eofInDoctype:{reason:"Unexpected end of file in doctype",description:"Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"},eofInElementThatCanContainOnlyText:{reason:"Unexpected end of file in element that can only contain text",description:"Unexpected end of file. Expected text or a closing tag",url:!1},eofInScriptHtmlCommentLikeText:{reason:"Unexpected end of file in comment inside script",description:"Unexpected end of file. Expected `-->` to close the comment"},eofInTag:{reason:"Unexpected end of file in tag",description:"Unexpected end of file. Expected `>` to close the tag"},incorrectlyClosedComment:{reason:"Incorrectly closed comment",description:"Unexpected `%c-1`. Expected `-->` to close the comment"},incorrectlyOpenedComment:{reason:"Incorrectly opened comment",description:"Unexpected `%c`. Expected `<!--` to open the comment"},invalidCharacterSequenceAfterDoctypeName:{reason:"Invalid sequence after doctype name",description:"Unexpected sequence at `%c`. Expected `public` or `system`"},invalidFirstCharacterOfTagName:{reason:"Invalid first character in tag name",description:"Unexpected `%c`. Expected an ASCII letter instead"},misplacedDoctype:{reason:"Misplaced doctype",description:"Unexpected doctype. Expected doctype before head",url:!1},misplacedStartTagForHeadElement:{reason:"Misplaced `<head>` start tag",description:"Unexpected start tag `<head>`. Expected `<head>` directly after doctype",url:!1},missingAttributeValue:{reason:"Missing attribute value",description:"Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"},missingDoctype:{reason:"Missing doctype before other content",description:"Expected a `<!doctype html>` before anything else",url:!1},missingDoctypeName:{reason:"Missing doctype name",description:"Unexpected doctype end at `%c`. Expected `html` instead"},missingDoctypePublicIdentifier:{reason:"Missing public identifier in doctype",description:"Unexpected `%c`. Expected identifier for `public` instead"},missingDoctypeSystemIdentifier:{reason:"Missing system identifier in doctype",description:'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'},missingEndTagName:{reason:"Missing name in end tag",description:"Unexpected `%c`. Expected an ASCII letter instead"},missingQuoteBeforeDoctypePublicIdentifier:{reason:"Missing quote before public identifier in doctype",description:"Unexpected `%c`. Expected `\"` or `'` instead"},missingQuoteBeforeDoctypeSystemIdentifier:{reason:"Missing quote before system identifier in doctype",description:"Unexpected `%c`. Expected `\"` or `'` instead"},missingSemicolonAfterCharacterReference:{reason:"Missing semicolon after character reference",description:"Unexpected `%c`. Expected `;` instead"},missingWhitespaceAfterDoctypePublicKeyword:{reason:"Missing whitespace after public identifier in doctype",description:"Unexpected `%c`. Expected ASCII whitespace instead"},missingWhitespaceAfterDoctypeSystemKeyword:{reason:"Missing whitespace after system identifier in doctype",description:"Unexpected `%c`. Expected ASCII whitespace instead"},missingWhitespaceBeforeDoctypeName:{reason:"Missing whitespace before doctype name",description:"Unexpected `%c`. Expected ASCII whitespace instead"},missingWhitespaceBetweenAttributes:{reason:"Missing whitespace between attributes",description:"Unexpected `%c`. Expected ASCII whitespace instead"},missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:{reason:"Missing whitespace between public and system identifiers in doctype",description:"Unexpected `%c`. Expected ASCII whitespace instead"},nestedComment:{reason:"Unexpected nested comment",description:"Unexpected `<!--`. Expected `-->`"},nestedNoscriptInHead:{reason:"Unexpected nested `<noscript>` in `<head>`",description:"Unexpected `<noscript>`. Expected a closing tag or a meta element",url:!1},nonConformingDoctype:{reason:"Unexpected non-conforming doctype declaration",description:'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',url:!1},nonVoidHtmlElementStartTagWithTrailingSolidus:{reason:"Unexpected trailing slash on start tag of non-void element",description:"Unexpected `/`. Expected `>` instead"},noncharacterCharacterReference:{reason:"Unexpected noncharacter code point referenced by character reference",description:"Unexpected code point. Do not use noncharacters in HTML"},noncharacterInInputStream:{reason:"Unexpected noncharacter character",description:"Unexpected code point `%x`. Do not use noncharacters in HTML"},nullCharacterReference:{reason:"Unexpected NULL character referenced by character reference",description:"Unexpected code point. Do not use NULL characters in HTML"},openElementsLeftAfterEof:{reason:"Unexpected end of file",description:"Unexpected end of file. Expected closing tag instead",url:!1},surrogateCharacterReference:{reason:"Unexpected surrogate character referenced by character reference",description:"Unexpected code point. Do not use lone surrogate characters in HTML"},surrogateInInputStream:{reason:"Unexpected surrogate character",description:"Unexpected code point `%x`. Do not use lone surrogate characters in HTML"},unexpectedCharacterAfterDoctypeSystemIdentifier:{reason:"Invalid character after system identifier in doctype",description:"Unexpected character at `%c`. Expected `>`"},unexpectedCharacterInAttributeName:{reason:"Unexpected character in attribute name",description:"Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"},unexpectedCharacterInUnquotedAttributeValue:{reason:"Unexpected character in unquoted attribute value",description:"Unexpected `%c`. Quote the attribute value to include it"},unexpectedEqualsSignBeforeAttributeName:{reason:"Unexpected equals sign before attribute name",description:"Unexpected `%c`. Add an attribute name before it"},unexpectedNullCharacter:{reason:"Unexpected NULL character",description:"Unexpected code point `%x`. Do not use NULL characters in HTML"},unexpectedQuestionMarkInsteadOfTagName:{reason:"Unexpected question mark instead of tag name",description:"Unexpected `%c`. Expected an ASCII letter instead"},unexpectedSolidusInTag:{reason:"Unexpected slash in tag",description:"Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"},unknownNamedCharacterReference:{reason:"Unexpected unknown named character reference",description:"Unexpected character reference. Expected known named character references"}},qw="https://html.spec.whatwg.org/multipage/parsing.html#parse-error-",Kw={2:!0,1:!1,0:null};function Yw(e){const n=this.data("settings"),r=Object.assign({},n,e);Object.assign(this,{Parser:i});function i(s,a){const o=r.fragment?"parseFragment":"parse",l=r.emitParseErrors?d:null,c=new Tw({sourceCodeLocationInfo:!0,onParseError:l,scriptingEnabled:!1});return Gw(c[o](s),{space:r.space,file:a,verbose:r.verbose});function d(h){const b=h.code,f=Xw(b),_=r[f],y=_??!0,T=typeof y=="number"?y:y?1:0,A={line:h.startLine,column:h.startCol,offset:h.startOffset},m={line:h.endLine,column:h.endCol,offset:h.endOffset};if(T){const E=Ww[f]||{reason:"",description:"",url:""},x=a.message(g(E.reason),{start:A,end:m});x.source="parse-error",x.ruleId=b,x.fatal=Kw[T],x.note=g(E.description),x.url="url"in E&&E.url===!1?null:qw+b}function g(E){return E.replace(/%c(?:-(\d+))?/g,(x,v)=>{const R=v?-Number.parseInt(v,10):0,j=s.charAt(h.startOffset+R);return j==="`"?"` ` `":j}).replace(/%x/g,()=>"0x"+s.charCodeAt(h.startOffset).toString(16).toUpperCase())}}}}function Xw(e){return e.replace(/-[a-z]/g,n=>n.charAt(1).toUpperCase())}const Zw=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"],Y0={}.hasOwnProperty;function Qw(e,n){const r=n||{};function i(s,...a){let o=i.invalid;const l=i.handlers;if(s&&Y0.call(s,e)){const c=String(s[e]);o=Y0.call(l,c)?l[c]:i.unknown}if(o)return o.call(this,s,...a)}return i.handlers=r.handlers||{},i.invalid=r.invalid,i.unknown=r.unknown,i}function Jw(e,n){if(e=e.replace(n.subset?e5(n.subset):/["&'<>`]/g,i),n.subset||n.escapeOnly)return e;return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,r).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,i);function r(s,a,o){return n.format((s.charCodeAt(0)-55296)*1024+s.charCodeAt(1)-56320+65536,o.charCodeAt(a+2),n)}function i(s,a,o){return n.format(s.charCodeAt(0),o.charCodeAt(a+1),n)}}function e5(e){const n=[];let r=-1;for(;++r<e.length;)n.push(e[r].replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"));return new RegExp("(?:"+n.join("|")+")","g")}function t5(e,n,r){const i="&#x"+e.toString(16).toUpperCase();return r&&n&&!/[\dA-Fa-f]/.test(String.fromCharCode(n))?i:i+";"}function n5(e,n,r){const i="&#"+String(e);return r&&n&&!/\d/.test(String.fromCharCode(n))?i:i+";"}const vS=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],xd={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},r5=["cent","copy","divide","gt","lt","not","para","times"],wS={}.hasOwnProperty,wu={};let Eo;for(Eo in xd)wS.call(xd,Eo)&&(wu[xd[Eo]]=Eo);function i5(e,n,r,i){const s=String.fromCharCode(e);if(wS.call(wu,s)){const a=wu[s],o="&"+a;return r&&vS.includes(a)&&!r5.includes(a)&&(!i||n&&n!==61&&/[^\da-z]/i.test(String.fromCharCode(n)))?o:o+";"}return""}function s5(e,n,r){let i=t5(e,n,r.omitOptionalSemicolons),s;if((r.useNamedReferences||r.useShortestReferences)&&(s=i5(e,n,r.omitOptionalSemicolons,r.attribute)),(r.useShortestReferences||!s)&&r.useShortestReferences){const a=n5(e,n,r.omitOptionalSemicolons);a.length<i.length&&(i=a)}return s&&(!r.useShortestReferences||s.length<i.length)?s:i}function Mi(e,n){return Jw(e,Object.assign({format:s5},n))}function a5(e,n,r,i){return i.settings.bogusComments?"<?"+Mi(e.value,Object.assign({},i.settings.characterReferences,{subset:[">"]}))+">":"<!--"+e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g,s)+"-->";function s(a){return Mi(a,Object.assign({},i.settings.characterReferences,{subset:["<",">"]}))}}function o5(e,n,r,i){return"<!"+(i.settings.upperDoctype?"DOCTYPE":"doctype")+(i.settings.tightDoctype?"":" ")+"html>"}function X0(e,n){const r=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,s=r.indexOf(n);for(;s!==-1;)i++,s=r.indexOf(n,s+n.length);return i}function q1(e){const n=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof n=="string"&&n.replace(/[ \t\n\f\r]/g,"")===""}const Ge=IS(1),RS=IS(-1);function IS(e){return n;function n(r,i,s){const a=r?r.children:[];let o=(i||0)+e,l=a&&a[o];if(!s)for(;l&&q1(l);)o+=e,l=a[o];return l}}const l5={}.hasOwnProperty;function CS(e){return n;function n(r,i,s){return l5.call(e,r.tagName)&&e[r.tagName](r,i,s)}}const K1=CS({html:c5,head:Ed,body:d5,p:u5,li:h5,dt:p5,dd:m5,rt:Z0,rp:Z0,optgroup:f5,option:g5,menuitem:b5,colgroup:Ed,caption:Ed,thead:x5,tbody:E5,tfoot:T5,tr:y5,td:Q0,th:Q0});function Ed(e,n,r){const i=Ge(r,n,!0);return!i||i.type!=="comment"&&!(i.type==="text"&&q1(i.value.charAt(0)))}function c5(e,n,r){const i=Ge(r,n);return!i||i.type!=="comment"}function d5(e,n,r){const i=Ge(r,n);return!i||i.type!=="comment"}function u5(e,n,r){const i=Ge(r,n);return i?i.type==="element"&&(i.tagName==="address"||i.tagName==="article"||i.tagName==="aside"||i.tagName==="blockquote"||i.tagName==="details"||i.tagName==="div"||i.tagName==="dl"||i.tagName==="fieldset"||i.tagName==="figcaption"||i.tagName==="figure"||i.tagName==="footer"||i.tagName==="form"||i.tagName==="h1"||i.tagName==="h2"||i.tagName==="h3"||i.tagName==="h4"||i.tagName==="h5"||i.tagName==="h6"||i.tagName==="header"||i.tagName==="hgroup"||i.tagName==="hr"||i.tagName==="main"||i.tagName==="menu"||i.tagName==="nav"||i.tagName==="ol"||i.tagName==="p"||i.tagName==="pre"||i.tagName==="section"||i.tagName==="table"||i.tagName==="ul"):!r||!(r.type==="element"&&(r.tagName==="a"||r.tagName==="audio"||r.tagName==="del"||r.tagName==="ins"||r.tagName==="map"||r.tagName==="noscript"||r.tagName==="video"))}function h5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&i.tagName==="li"}function p5(e,n,r){const i=Ge(r,n);return i&&i.type==="element"&&(i.tagName==="dt"||i.tagName==="dd")}function m5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="dt"||i.tagName==="dd")}function Z0(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="rp"||i.tagName==="rt")}function f5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&i.tagName==="optgroup"}function g5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="option"||i.tagName==="optgroup")}function b5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="menuitem"||i.tagName==="hr"||i.tagName==="menu")}function x5(e,n,r){const i=Ge(r,n);return i&&i.type==="element"&&(i.tagName==="tbody"||i.tagName==="tfoot")}function E5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="tbody"||i.tagName==="tfoot")}function T5(e,n,r){return!Ge(r,n)}function y5(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&i.tagName==="tr"}function Q0(e,n,r){const i=Ge(r,n);return!i||i.type==="element"&&(i.tagName==="td"||i.tagName==="th")}const S5=CS({html:N5,head:_5,body:A5,colgroup:j5,tbody:v5});function N5(e){const n=Ge(e,-1);return!n||n.type!=="comment"}function _5(e){const n=e.children,r=[];let i=-1;for(;++i<n.length;){const s=n[i];if(s.type==="element"&&(s.tagName==="title"||s.tagName==="base")){if(r.includes(s.tagName))return!1;r.push(s.tagName)}}return n.length>0}function A5(e){const n=Ge(e,-1,!0);return!n||n.type!=="comment"&&!(n.type==="text"&&q1(n.value.charAt(0)))&&!(n.type==="element"&&(n.tagName==="meta"||n.tagName==="link"||n.tagName==="script"||n.tagName==="style"||n.tagName==="template"))}function j5(e,n,r){const i=RS(r,n),s=Ge(e,-1,!0);return r&&i&&i.type==="element"&&i.tagName==="colgroup"&&K1(i,r.children.indexOf(i),r)?!1:s&&s.type==="element"&&s.tagName==="col"}function v5(e,n,r){const i=RS(r,n),s=Ge(e,-1);return r&&i&&i.type==="element"&&(i.tagName==="thead"||i.tagName==="tbody")&&K1(i,r.children.indexOf(i),r)?!1:s&&s.type==="element"&&s.tagName==="tr"}const To={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function w5(e,n,r,i){const s=i.schema,a=s.space==="svg"?!1:i.settings.omitOptionalTags;let o=s.space==="svg"?i.settings.closeEmptyElements:i.settings.voids.includes(e.tagName.toLowerCase());const l=[];let c;s.space==="html"&&e.tagName==="svg"&&(i.schema=va);const d=R5(i,e.properties),h=i.all(s.space==="html"&&e.tagName==="template"?e.content:e);return i.schema=s,h&&(o=!1),(d||!a||!S5(e,n,r))&&(l.push("<",e.tagName,d?" "+d:""),o&&(s.space==="svg"||i.settings.closeSelfClosing)&&(c=d.charAt(d.length-1),(!i.settings.tightSelfClosing||c==="/"||c&&c!=='"'&&c!=="'")&&l.push(" "),l.push("/")),l.push(">")),l.push(h),!o&&(!a||!K1(e,n,r))&&l.push("</"+e.tagName+">"),l.join("")}function R5(e,n){const r=[];let i=-1,s;if(n){for(s in n)if(n[s]!==void 0&&n[s]!==null){const a=I5(e,s,n[s]);a&&r.push(a)}}for(;++i<r.length;){const a=e.settings.tightAttributes?r[i].charAt(r[i].length-1):null;i!==r.length-1&&a!=='"'&&a!=="'"&&(r[i]+=" ")}return r.join("")}function I5(e,n,r){const i=V1(e.schema,n),s=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,a=e.settings.allowDangerousCharacters?0:1;let o=e.quote,l;if(i.overloadedBoolean&&(r===i.attribute||r==="")?r=!0:(i.boolean||i.overloadedBoolean&&typeof r!="string")&&(r=!!r),r==null||r===!1||typeof r=="number"&&Number.isNaN(r))return"";const c=Mi(i.attribute,Object.assign({},e.settings.characterReferences,{subset:To.name[s][a]}));return r===!0||(r=Array.isArray(r)?(i.commaSeparated?Cw:Iw)(r,{padLeft:!e.settings.tightCommaSeparatedLists}):String(r),e.settings.collapseEmptyAttributes&&!r)?c:(e.settings.preferUnquoted&&(l=Mi(r,Object.assign({},e.settings.characterReferences,{subset:To.unquoted[s][a],attribute:!0}))),l!==r&&(e.settings.quoteSmart&&X0(r,o)>X0(r,e.alternative)&&(o=e.alternative),l=o+Mi(r,Object.assign({},e.settings.characterReferences,{subset:(o==="'"?To.single:To.double)[s][a],attribute:!0}))+o),c+(l&&"="+l))}function kS(e,n,r,i){return r&&r.type==="element"&&(r.tagName==="script"||r.tagName==="style")?e.value:Mi(e.value,Object.assign({},i.settings.characterReferences,{subset:["<","&"]}))}function C5(e,n,r,i){return i.settings.allowDangerousHtml?e.value:kS(e,n,r,i)}function k5(e,n,r,i){return i.all(e)}const O5=Qw("type",{invalid:L5,unknown:D5,handlers:{comment:a5,doctype:o5,element:w5,raw:C5,root:k5,text:kS}});function L5(e){throw new Error("Expected node, not `"+e+"`")}function D5(e){throw new Error("Cannot compile unknown node `"+e.type+"`")}function M5(e,n){const r=n||{},i=r.quote||'"',s=i==='"'?"'":'"';if(i!=='"'&&i!=="'")throw new Error("Invalid quote `"+i+"`, expected `'` or `\"`");return{one:F5,all:P5,settings:{omitOptionalTags:r.omitOptionalTags||!1,allowParseErrors:r.allowParseErrors||!1,allowDangerousCharacters:r.allowDangerousCharacters||!1,quoteSmart:r.quoteSmart||!1,preferUnquoted:r.preferUnquoted||!1,tightAttributes:r.tightAttributes||!1,upperDoctype:r.upperDoctype||!1,tightDoctype:r.tightDoctype||!1,bogusComments:r.bogusComments||!1,tightCommaSeparatedLists:r.tightCommaSeparatedLists||!1,tightSelfClosing:r.tightSelfClosing||!1,collapseEmptyAttributes:r.collapseEmptyAttributes||!1,allowDangerousHtml:r.allowDangerousHtml||!1,voids:r.voids||Zw,characterReferences:r.characterReferences||r.entities||{},closeSelfClosing:r.closeSelfClosing||!1,closeEmptyElements:r.closeEmptyElements||!1},schema:r.space==="svg"?va:ql,quote:i,alternative:s}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function F5(e,n,r){return O5(e,n,r,this)}function P5(e){const n=[],r=e&&e.children||[];let i=-1;for(;++i<r.length;)n[i]=this.one(r[i],i,e);return n.join("")}function U5(e){const n=this.data("settings"),r=Object.assign({},n,e);Object.assign(this,{Compiler:i});function i(s){return M5(s,r)}}const B5=N9().use(Yw).use(U5).freeze(),Y1=function(e){if(e==null)return z5;if(typeof e=="string")return $5(e);if(typeof e=="object")return Array.isArray(e)?H5(e):G5(e);if(typeof e=="function")return Kl(e);throw new Error("Expected function, string, or object as test")};function H5(e){const n=[];let r=-1;for(;++r<e.length;)n[r]=Y1(e[r]);return Kl(i);function i(...s){let a=-1;for(;++a<n.length;)if(n[a].call(this,...s))return!0;return!1}}function G5(e){return Kl(n);function n(r){let i;for(i in e)if(r[i]!==e[i])return!1;return!0}}function $5(e){return Kl(n);function n(r){return r&&r.type===e}}function Kl(e){return n;function n(r,...i){return!!(r&&typeof r=="object"&&"type"in r&&e.call(this,r,...i))}}function z5(){return!0}const V5=!0,J0=!1,W5="skip",q5=function(e,n,r,i){typeof n=="function"&&typeof r!="function"&&(i=r,r=n,n=null);const s=Y1(n),a=i?-1:1;o(e,void 0,[])();function o(l,c,d){const h=l&&typeof l=="object"?l:{};if(typeof h.type=="string"){const f=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return b;function b(){let f=[],_,y,T;if((!n||s(l,c,d[d.length-1]||null))&&(f=K5(r(l,d)),f[0]===J0))return f;if(l.children&&f[0]!==W5)for(y=(i?l.children.length:-1)+a,T=d.concat(l);y>-1&&y<l.children.length;){if(_=o(l.children[y],y,T)(),_[0]===J0)return _;y=typeof _[1]=="number"?_[1]:y+a}return f}}};function K5(e){return Array.isArray(e)?e:typeof e=="number"?[V5,e]:[e]}const Y5=function(e,n,r,i){typeof n=="function"&&typeof r!="function"&&(i=r,r=n,n=null),q5(e,n,s,i);function s(a,o){const l=o[o.length-1];return r(a,l?l.children.indexOf(a):null,l)}};function yo(e){return"children"in e?OS(e):"value"in e?e.value:""}function X5(e){return e.type==="text"?e.value:"children"in e?OS(e):""}function OS(e){let n=-1;const r=[];for(;++n<e.children.length;)r[n]=X5(e.children[n]);return r.join("")}const Z5={}.hasOwnProperty,Q5=function(e,n,r){const i=Y1(r||n),s=n&&typeof n=="object"&&"cascade"in n?n.cascade:void 0,a=s??!0;return o(e);function o(l,c,d){const h=[];if(!i(l,c,d))return null;if(l.children){let _=-1;for(;++_<l.children.length;){const y=o(l.children[_],_,l);y&&h.push(y)}if(a&&l.children.length>0&&h.length===0)return null}const b={};let f;for(f in l)Z5.call(l,f)&&(b[f]=f==="children"?h:l[f]);return b}};var Ru={exports:{}};(function(e,n){function r(i){let s=[],a;for(let o of i.split(",").map(l=>l.trim()))if(/^-?\d+$/.test(o))s.push(parseInt(o,10));else if(a=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[l,c,d,h]=a;if(c&&h){c=parseInt(c),h=parseInt(h);const b=c<h?1:-1;(d==="-"||d===".."||d==="‥")&&(h+=b);for(let f=c;f!==h;f+=b)s.push(f)}}return s}n.default=r,e.exports=r})(Ru,Ru.exports);var J5=Ru.exports;const eR=Vi(J5);oe.displayName="clike";oe.aliases=[];function oe(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}dn.displayName="c";dn.aliases=[];function dn(e){e.register(oe),e.languages.c=e.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),e.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),e.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},e.languages.c.string],char:e.languages.c.char,comment:e.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:e.languages.c}}}}),e.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete e.languages.c.boolean}Qr.displayName="cpp";Qr.aliases=[];function Qr(e){e.register(dn),function(n){var r=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,i=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return r.source});n.languages.cpp=n.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:r,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),n.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return i})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),n.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n.languages.cpp}}}}),n.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),n.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:n.languages.extend("cpp",{})}}),n.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},n.languages.cpp["base-clause"])}(e)}Yl.displayName="arduino";Yl.aliases=["ino"];function Yl(e){e.register(Qr),e.languages.arduino=e.languages.extend("cpp",{keyword:/\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,constant:/\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,builtin:/\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/}),e.languages.ino=e.languages.arduino}wa.displayName="bash";wa.aliases=["sh","shell"];function wa(e){(function(n){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",i={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:i,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:i}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},i.inside=n.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=s.variable[1].inside,l=0;l<a.length;l++)o[a[l]]=n.languages.bash[a[l]];n.languages.sh=n.languages.bash,n.languages.shell=n.languages.bash})(e)}Jr.displayName="csharp";Jr.aliases=["cs","dotnet"];function Jr(e){e.register(oe),function(n){function r(K,ue){return K.replace(/<<(\d+)>>/g,function(fe,xt){return"(?:"+ue[+xt]+")"})}function i(K,ue,fe){return RegExp(r(K,ue),fe||"")}function s(K,ue){for(var fe=0;fe<ue;fe++)K=K.replace(/<<self>>/g,function(){return"(?:"+K+")"});return K.replace(/<<self>>/g,"[^\\s\\S]")}var a={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function o(K){return"\\b(?:"+K.trim().replace(/ /g,"|")+")\\b"}var l=o(a.typeDeclaration),c=RegExp(o(a.type+" "+a.typeDeclaration+" "+a.contextual+" "+a.other)),d=o(a.typeDeclaration+" "+a.contextual+" "+a.other),h=o(a.type+" "+a.typeDeclaration+" "+a.other),b=s(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=s(/\((?:[^()]|<<self>>)*\)/.source,2),_=/@?\b[A-Za-z_]\w*\b/.source,y=r(/<<0>>(?:\s*<<1>>)?/.source,[_,b]),T=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[d,y]),A=/\[\s*(?:,\s*)*\]/.source,m=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[T,A]),g=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[b,f,A]),E=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[g]),x=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[E,T,A]),v={keyword:c,punctuation:/[<>()?,.:[\]]/},R=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,j=/"(?:\\.|[^\\"\r\n])*"/.source,C=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:i(/(^|[^$\\])<<0>>/.source,[C]),lookbehind:!0,greedy:!0},{pattern:i(/(^|[^@$\\])<<0>>/.source,[j]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:i(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[T]),lookbehind:!0,inside:v},{pattern:i(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[_,x]),lookbehind:!0,inside:v},{pattern:i(/(\busing\s+)<<0>>(?=\s*=)/.source,[_]),lookbehind:!0},{pattern:i(/(\b<<0>>\s+)<<1>>/.source,[l,y]),lookbehind:!0,inside:v},{pattern:i(/(\bcatch\s*\(\s*)<<0>>/.source,[T]),lookbehind:!0,inside:v},{pattern:i(/(\bwhere\s+)<<0>>/.source,[_]),lookbehind:!0},{pattern:i(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[m]),lookbehind:!0,inside:v},{pattern:i(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,h,_]),inside:v}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:i(/([(,]\s*)<<0>>(?=\s*:)/.source,[_]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:i(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[_]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:i(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:i(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,T]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:i(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:i(/<<0>>\s*<<1>>(?=\s*\()/.source,[_,b]),inside:{function:i(/^<<0>>/.source,[_]),generic:{pattern:RegExp(b),alias:"class-name",inside:v}}},"type-list":{pattern:i(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,y,_,x,c.source,f,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:i(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,f]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:c,"class-name":{pattern:RegExp(x),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var M=j+"|"+R,B=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[M]),Q=s(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),Y=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,ie=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[T,Q]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:i(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[Y,ie]),lookbehind:!0,greedy:!0,inside:{target:{pattern:i(/^<<0>>(?=\s*:)/.source,[Y]),alias:"keyword"},"attribute-arguments":{pattern:i(/\(<<0>>*\)/.source,[Q]),inside:n.languages.csharp},"class-name":{pattern:RegExp(T),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var De=/:[^}\r\n]+/.source,de=s(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),Ze=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[de,De]),Ce=s(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[M]),2),G=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Ce,De]);function q(K,ue){return{interpolation:{pattern:i(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[K]),lookbehind:!0,inside:{"format-string":{pattern:i(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[ue,De]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:i(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[Ze]),lookbehind:!0,greedy:!0,inside:q(Ze,de)},{pattern:i(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[G]),lookbehind:!0,greedy:!0,inside:q(G,Ce)}],char:{pattern:RegExp(R),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp}(e)}Xe.displayName="markup";Xe.aliases=["atom","html","mathml","rss","ssml","svg","xml"];function Xe(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,i){var s={};s["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[i]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+i]={pattern:/[\s\S]+/,inside:e.languages[i]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}yr.displayName="css";yr.aliases=[];function yr(e){(function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var i=n.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(e)}Xl.displayName="diff";Xl.aliases=[];function Xl(e){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(i){var s=r[i],a=[];/^\w+$/.test(i)||a.push(/\w+/.exec(i)[0]),i==="diff"&&a.push("bold"),n.languages.diff[i]={pattern:RegExp("^(?:["+s+`].*(?:\r
?|
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+i+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:r,quoted:{pattern:RegExp(/(^|\s)/.source+i),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(e)}Ma.displayName="t4-templating";Ma.aliases=[];function Ma(e){(function(n){function r(s,a,o){return{pattern:RegExp("<#"+s+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+s+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:a,alias:o}}}}function i(s){var a=n.languages[s],o="language-"+s;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:r("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:r("=",a,o),"class-feature":r("\\+",a,o),standard:r("",a,o)}}}}n.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:i})})(e)}sg.displayName="t4-cs";sg.aliases=["t4"];function sg(e){e.register(Jr),e.register(Ma),e.languages.t4=e.languages["t4-cs"]=e.languages["t4-templating"].createT4("csharp")}ag.displayName="t4-vb";ag.aliases=[];function ag(e){e.register(Ma),e.register(Oa),e.languages["t4-vb"]=e.languages["t4-templating"].createT4("vbnet")}og.displayName="tap";og.aliases=[];function og(e){e.register(Ia),e.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:e.languages.yaml,alias:"language-yaml"}}}lg.displayName="tcl";lg.aliases=[];function lg(e){e.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,lookbehind:!0},{pattern:/(\$)\{[^}]+\}/,lookbehind:!0},{pattern:/(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,lookbehind:!0}],function:{pattern:/(^[\t ]*proc[ \t]+)\S+/m,lookbehind:!0},builtin:[{pattern:/(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,lookbehind:!0},/\b(?:else|elseif)\b/],scope:{pattern:/(^[\t ]*)(?:global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,punctuation:/[{}()\[\]]/}}cg.displayName="tt2";cg.aliases=[];function cg(e){e.register(oe),e.register(at),function(n){n.languages.tt2=n.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),n.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),n.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),n.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete n.languages.tt2.string,n.hooks.add("before-tokenize",function(r){var i=/\[%[\s\S]+?%\]/g;n.languages["markup-templating"].buildPlaceholders(r,"tt2",i)}),n.hooks.add("after-tokenize",function(r){n.languages["markup-templating"].tokenizePlaceholders(r,"tt2")})}(e)}dg.displayName="toml";dg.aliases=[];function dg(e){(function(n){var r=/(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;function i(s){return s.replace(/__/g,function(){return r})}n.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(i(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(i(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(e)}ug.displayName="tremor";ug.aliases=["trickle","troy"];function ug(e){(function(n){n.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var r=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;n.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+r+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+r+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(r),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.tremor}}},string:/[\s\S]+/}},n.languages.troy=n.languages.tremor,n.languages.trickle=n.languages.tremor})(e)}hg.displayName="typoscript";hg.aliases=["tsconfig"];function hg(e){(function(n){var r=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;n.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:r}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:r,number:/^\d+$/,punctuation:/[,|:]/}},keyword:r,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},n.languages.tsconfig=n.languages.typoscript})(e)}pg.displayName="unrealscript";pg.aliases=["uc","uscript"];function pg(e){e.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},e.languages.uc=e.languages.uscript=e.languages.unrealscript}mg.displayName="uorazor";mg.aliases=[];function mg(e){e.languages.uorazor={"comment-hash":{pattern:/#.*/,alias:"comment",greedy:!0},"comment-slash":{pattern:/\/\/.*/,alias:"comment",greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/},greedy:!0},"source-layers":{pattern:/\b(?:arms|backpack|blue|bracelet|cancel|clear|cloak|criminal|earrings|enemy|facialhair|friend|friendly|gloves|gray|grey|ground|hair|head|innerlegs|innertorso|innocent|lefthand|middletorso|murderer|neck|nonfriendly|onehandedsecondary|outerlegs|outertorso|pants|red|righthand|ring|self|shirt|shoes|talisman|waist)\b/i,alias:"function"},"source-commands":{pattern:/\b(?:alliance|attack|cast|clearall|clearignore|clearjournal|clearlist|clearsysmsg|createlist|createtimer|dclick|dclicktype|dclickvar|dress|dressconfig|drop|droprelloc|emote|getlabel|guild|gumpclose|gumpresponse|hotkey|ignore|lasttarget|lift|lifttype|menu|menuresponse|msg|org|organize|organizer|overhead|pause|poplist|potion|promptresponse|pushlist|removelist|removetimer|rename|restock|say|scav|scavenger|script|setability|setlasttarget|setskill|settimer|setvar|sysmsg|target|targetloc|targetrelloc|targettype|undress|unignore|unsetvar|useobject|useonce|useskill|usetype|virtue|wait|waitforgump|waitformenu|waitforprompt|waitforstat|waitforsysmsg|waitfortarget|walk|wfsysmsg|wft|whisper|yell)\b/,alias:"function"},"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},function:/\b(?:atlist|close|closest|count|counter|counttype|dead|dex|diffhits|diffmana|diffstam|diffweight|find|findbuff|finddebuff|findlayer|findtype|findtypelist|followers|gumpexists|hidden|hits|hp|hue|human|humanoid|ingump|inlist|insysmessage|insysmsg|int|invul|lhandempty|list|listexists|mana|maxhits|maxhp|maxmana|maxstam|maxweight|monster|mounted|name|next|noto|paralyzed|poisoned|position|prev|previous|queued|rand|random|rhandempty|skill|stam|str|targetexists|timer|timerexists|varexist|warmode|weight)\b/,keyword:/\b(?:and|as|break|continue|else|elseif|endfor|endif|endwhile|for|if|loop|not|or|replay|stop|while)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/}}fg.displayName="v";fg.aliases=[];function fg(e){e.register(oe),function(n){var r={pattern:/[\s\S]+/,inside:null};n.languages.v=n.languages.extend("clike",{string:{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":r}}}},"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),r.inside=n.languages.v,n.languages.insertBefore("v","string",{char:{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"}}),n.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),n.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:n.languages.v.generic.inside}}}})}(e)}gg.displayName="vala";gg.aliases=[];function gg(e){e.register(oe),e.languages.vala=e.languages.extend("clike",{"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],keyword:/\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,function:/\b\w+(?=\s*\()/,number:/(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,operator:/\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,punctuation:/[{}[\];(),.:]/,constant:/\b[A-Z0-9_]+\b/}),e.languages.insertBefore("vala","string",{"raw-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"template-string":{pattern:/@"[\s\S]*?"/,greedy:!0,inside:{interpolation:{pattern:/\$(?:\([^)]*\)|[a-zA-Z]\w*)/,inside:{delimiter:{pattern:/^\$\(?|\)$/,alias:"punctuation"},rest:e.languages.vala}},string:/[\s\S]+/}}}),e.languages.insertBefore("vala","keyword",{regex:{pattern:/\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\//,"regex-flags":/^[a-z]+$/}}})}bg.displayName="velocity";bg.aliases=[];function bg(e){e.register(Xe),function(n){n.languages.velocity=n.languages.extend("markup",{});var r={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};r.variable.inside={string:r.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:r.number,boolean:r.boolean,punctuation:r.punctuation},n.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?\]\]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|\]\]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,inside:{punctuation:/[{}]/}},rest:r}},variable:r.variable}),n.languages.velocity.tag.inside["attr-value"].inside.rest=n.languages.velocity}(e)}xg.displayName="verilog";xg.aliases=[];function xg(e){e.languages.verilog={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"kernel-function":{pattern:/\B\$\w+\b/,alias:"property"},constant:/\B`\w+\b/,function:/\b\w+(?=\()/,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/}}Eg.displayName="vhdl";Eg.aliases=[];function Eg(e){e.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,attribute:{pattern:/\b'\w+/,alias:"attr-name"},keyword:/\b(?:access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|private|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\w+(?=\()/,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,punctuation:/[{}[\];(),.:]/}}Tg.displayName="vim";Tg.aliases=[];function Tg(e){e.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,function:/\b\w+(?=\()/,keyword:/\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/}}yg.displayName="visual-basic";yg.aliases=["vb","vba"];function yg(e){e.languages["visual-basic"]={comment:{pattern:/(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,inside:{keyword:/^REM/i}},directive:{pattern:/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,alias:"property",greedy:!0},string:{pattern:/\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,greedy:!0},date:{pattern:/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,alias:"number"},number:/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,boolean:/\b(?:False|Nothing|True)\b/i,keyword:/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,operator:/[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,punctuation:/[{}().,:?]/},e.languages.vb=e.languages["visual-basic"],e.languages.vba=e.languages["visual-basic"]}Sg.displayName="warpscript";Sg.aliases=[];function Sg(e){e.languages.warpscript={comment:/#.*|\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,greedy:!0},variable:/\$\S+/,macro:{pattern:/@\S+/,alias:"property"},keyword:/\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,number:/[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,boolean:/\b(?:F|T|false|true)\b/,punctuation:/<%|%>|[{}[\]()]/,operator:/==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/}}Ng.displayName="wasm";Ng.aliases=[];function Ng(e){e.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/}}_g.displayName="web-idl";_g.aliases=["webidl"];function _g(e){(function(n){var r=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,i="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+r+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,s={};n.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+r),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:s},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+i),lookbehind:!0,inside:s},{pattern:RegExp("("+/\bcallback\s+/.source+r+/\s*=\s*/.source+")"+i),lookbehind:!0,inside:s},{pattern:RegExp(/(\btypedef\b\s*)/.source+i),lookbehind:!0,inside:s},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+r),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+r),lookbehind:!0},RegExp(r+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+r),lookbehind:!0},{pattern:RegExp(i+"(?="+/\s*(?:\.{3}\s*)?/.source+r+/\s*[(),;=]/.source+")"),inside:s}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var a in n.languages["web-idl"])a!=="class-name"&&(s[a]=n.languages["web-idl"][a]);n.languages.webidl=n.languages["web-idl"]})(e)}Ag.displayName="wgsl";Ag.aliases=[];function Ag(e){e.languages.wgsl={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"builtin-attribute":{pattern:/(@)builtin\(.*?\)/,lookbehind:!0,inside:{attribute:{pattern:/^builtin/,alias:"attr-name"},punctuation:/[(),]/,"built-in-values":{pattern:/\b(?:frag_depth|front_facing|global_invocation_id|instance_index|local_invocation_id|local_invocation_index|num_workgroups|position|sample_index|sample_mask|vertex_index|workgroup_id)\b/,alias:"attr-value"}}},attributes:{pattern:/(@)(?:align|binding|compute|const|fragment|group|id|interpolate|invariant|location|size|vertex|workgroup_size)/i,lookbehind:!0,alias:"attr-name"},functions:{pattern:/\b(fn\s+)[_a-zA-Z]\w*(?=[(<])/,lookbehind:!0,alias:"function"},keyword:/\b(?:bitcast|break|case|const|continue|continuing|default|discard|else|enable|fallthrough|fn|for|function|if|let|loop|private|return|storage|struct|switch|type|uniform|var|while|workgroup)\b/,builtin:/\b(?:abs|acos|acosh|all|any|array|asin|asinh|atan|atan2|atanh|atomic|atomicAdd|atomicAnd|atomicCompareExchangeWeak|atomicExchange|atomicLoad|atomicMax|atomicMin|atomicOr|atomicStore|atomicSub|atomicXor|bool|ceil|clamp|cos|cosh|countLeadingZeros|countOneBits|countTrailingZeros|cross|degrees|determinant|distance|dot|dpdx|dpdxCoarse|dpdxFine|dpdy|dpdyCoarse|dpdyFine|exp|exp2|extractBits|f32|f64|faceForward|firstLeadingBit|floor|fma|fract|frexp|fwidth|fwidthCoarse|fwidthFine|i32|i64|insertBits|inverseSqrt|ldexp|length|log|log2|mat[2-4]x[2-4]|max|min|mix|modf|normalize|override|pack2x16float|pack2x16snorm|pack2x16unorm|pack4x8snorm|pack4x8unorm|pow|ptr|quantizeToF16|radians|reflect|refract|reverseBits|round|sampler|sampler_comparison|select|shiftLeft|shiftRight|sign|sin|sinh|smoothstep|sqrt|staticAssert|step|storageBarrier|tan|tanh|textureDimensions|textureGather|textureGatherCompare|textureLoad|textureNumLayers|textureNumLevels|textureNumSamples|textureSample|textureSampleBias|textureSampleCompare|textureSampleCompareLevel|textureSampleGrad|textureSampleLevel|textureStore|texture_1d|texture_2d|texture_2d_array|texture_3d|texture_cube|texture_cube_array|texture_depth_2d|texture_depth_2d_array|texture_depth_cube|texture_depth_cube_array|texture_depth_multisampled_2d|texture_multisampled_2d|texture_storage_1d|texture_storage_2d|texture_storage_2d_array|texture_storage_3d|transpose|trunc|u32|u64|unpack2x16float|unpack2x16snorm|unpack2x16unorm|unpack4x8snorm|unpack4x8unorm|vec[2-4]|workgroupBarrier)\b/,"function-calls":{pattern:/\b[_a-z]\w*(?=\()/i,alias:"function"},"class-name":/\b(?:[A-Z][A-Za-z0-9]*)\b/,"bool-literal":{pattern:/\b(?:false|true)\b/,alias:"boolean"},"hex-int-literal":{pattern:/\b0[xX][0-9a-fA-F]+[iu]?\b(?![.pP])/,alias:"number"},"hex-float-literal":{pattern:/\b0[xX][0-9a-fA-F]*(?:\.[0-9a-fA-F]*)?(?:[pP][+-]?\d+[fh]?)?/,alias:"number"},"decimal-float-literal":[{pattern:/\d*\.\d+(?:[eE](?:\+|-)?\d+)?[fh]?/,alias:"number"},{pattern:/\d+\.\d*(?:[eE](?:\+|-)?\d+)?[fh]?/,alias:"number"},{pattern:/\d+[eE](?:\+|-)?\d+[fh]?/,alias:"number"},{pattern:/\b\d+[fh]\b/,alias:"number"}],"int-literal":{pattern:/\b\d+[iu]?\b/,alias:"number"},operator:[{pattern:/(?:\^|~|\|(?!\|)|\|\||&&|<<|>>|!)(?!=)/},{pattern:/&(?![&=])/},{pattern:/(?:\+=|-=|\*=|\/=|%=|\^=|&=|\|=|<<=|>>=)/},{pattern:/(^|[^<>=!])=(?![=>])/,lookbehind:!0},{pattern:/(?:==|!=|<=|\+\+|--|(^|[^=])>=)/,lookbehind:!0},{pattern:/(?:(?:[+%]|(?:\*(?!\w)))(?!=))|(?:-(?!>))|(?:\/(?!\/))/},{pattern:/->/}],punctuation:/[@(){}[\],;<>:.]/}}jg.displayName="wiki";jg.aliases=[];function jg(e){e.register(Xe),e.languages.wiki=e.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+)[^=\r\n].*?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold-italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0,alias:["bold","italic"]},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?\}\}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:e.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),e.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,inside:e.languages.markup.tag.inside}}}})}vg.displayName="wolfram";vg.aliases=["mathematica","nb","wl"];function vg(e){e.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},e.languages.mathematica=e.languages.wolfram,e.languages.wl=e.languages.wolfram,e.languages.nb=e.languages.wolfram}wg.displayName="wren";wg.aliases=[];function wg(e){e.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},e.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:e.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}Rg.displayName="xeora";Rg.aliases=["xeoracube"];function Rg(e){e.register(Xe),function(n){n.languages.xeora=n.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),n.languages.insertBefore("inside","punctuation",{variable:n.languages.xeora["function-inline"].inside.variable},n.languages.xeora["function-block"]),n.languages.xeoracube=n.languages.xeora}(e)}Ig.displayName="xml-doc";Ig.aliases=[];function Ig(e){e.register(Xe),function(n){function r(o,l){n.languages[o]&&n.languages.insertBefore(o,"comment",{"doc-comment":l})}var i=n.languages.markup.tag,s={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:i}},a={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:i}};r("csharp",s),r("fsharp",s),r("vbnet",a)}(e)}Cg.displayName="xojo";Cg.aliases=[];function Cg(e){e.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,greedy:!0},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],directive:{pattern:/#(?:Else|ElseIf|Endif|If|Pragma)\b/i,alias:"property"},keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,punctuation:/[.,;:()]/}}kg.displayName="xquery";kg.aliases=[];function kg(e){e.register(Xe),function(n){n.languages.xquery=n.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),n.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,n.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,n.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,n.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:n.languages.xquery,alias:"language-xquery"};var r=function(s){return typeof s=="string"?s:typeof s.content=="string"?s.content:s.content.map(r).join("")},i=function(s){for(var a=[],o=0;o<s.length;o++){var l=s[o],c=!1;if(typeof l!="string"&&(l.type==="tag"&&l.content[0]&&l.content[0].type==="tag"?l.content[0].content[0].content==="</"?a.length>0&&a[a.length-1].tagName===r(l.content[0].content[1])&&a.pop():l.content[l.content.length-1].content==="/>"||a.push({tagName:r(l.content[0].content[1]),openedBraces:0}):a.length>0&&l.type==="punctuation"&&l.content==="{"&&(!s[o+1]||s[o+1].type!=="punctuation"||s[o+1].content!=="{")&&(!s[o-1]||s[o-1].type!=="plain-text"||s[o-1].content!=="{")?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&l.type==="punctuation"&&l.content==="}"?a[a.length-1].openedBraces--:l.type!=="comment"&&(c=!0)),(c||typeof l=="string")&&a.length>0&&a[a.length-1].openedBraces===0){var d=r(l);o<s.length-1&&(typeof s[o+1]=="string"||s[o+1].type==="plain-text")&&(d+=r(s[o+1]),s.splice(o+1,1)),o>0&&(typeof s[o-1]=="string"||s[o-1].type==="plain-text")&&(d=r(s[o-1])+d,s.splice(o-1,1),o--),/^\s+$/.test(d)?s[o]=d:s[o]=new n.Token("plain-text",d,null,d)}l.content&&typeof l.content!="string"&&i(l.content)}};n.hooks.add("after-tokenize",function(s){s.language==="xquery"&&i(s.tokens)})}(e)}Og.displayName="yang";Og.aliases=[];function Og(e){e.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}}Lg.displayName="zig";Lg.aliases=[];function Lg(e){(function(n){function r(d){return function(){return d}}var i=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,s="\\b(?!"+i.source+")(?!\\d)\\w+\\b",a=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,o=/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,r(a)),l=/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,r(s)),c="(?!\\s)(?:!?\\s*(?:"+o+"\\s*)*"+l+")+";n.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,r(c)).replace(/<ALIGN>/g,r(a))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,r(c)).replace(/<ALIGN>/g,r(a))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword:i,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},n.languages.zig["class-name"].forEach(function(d){d.inside===null&&(d.inside=n.languages.zig)})})(e)}p.register(Xe);p.register(yr);p.register(oe);p.register(Jl);p.register(st);p.register(X1);p.register(Z1);p.register(Q1);p.register(J1);p.register(eh);p.register(th);p.register(nh);p.register(rh);p.register(es);p.register(ih);p.register(sh);p.register(ah);p.register(oh);p.register(dn);p.register(Qr);p.register(Yl);p.register(lh);p.register(ch);p.register(wa);p.register(Ia);p.register(rc);p.register(dh);p.register(uh);p.register(Jr);p.register(hh);p.register(ph);p.register(mh);p.register(fh);p.register(gh);p.register(bh);p.register(xh);p.register(Eh);p.register(ka);p.register(Th);p.register(yh);p.register(Sh);p.register(Nh);p.register(_h);p.register(Ah);p.register(jh);p.register(vh);p.register(wh);p.register(Rh);p.register(Ih);p.register(Ch);p.register(kh);p.register(Oh);p.register(Lh);p.register(Dh);p.register(Mh);p.register(Fh);p.register(Ph);p.register(Uh);p.register(Bh);p.register(Hh);p.register(Gh);p.register($h);p.register(zh);p.register(ni);p.register(Vh);p.register(Wh);p.register(qh);p.register(Kh);p.register(Yh);p.register(Xh);p.register(Zh);p.register(Qh);p.register(Jh);p.register(ep);p.register(Xl);p.register(at);p.register(tp);p.register(np);p.register(rp);p.register(ip);p.register(sp);p.register(ap);p.register(op);p.register(lp);p.register(cp);p.register(dp);p.register(Ra);p.register(up);p.register(hp);p.register(pp);p.register(mp);p.register(fp);p.register(gp);p.register(bp);p.register(xp);p.register(Ep);p.register(Tp);p.register(yp);p.register(Sp);p.register(Np);p.register(_p);p.register(Ap);p.register(jp);p.register(vp);p.register(wp);p.register(Rp);p.register(Ip);p.register(Cp);p.register(kp);p.register(Zl);p.register(Op);p.register(Lp);p.register(Dp);p.register(Mp);p.register(tc);p.register(cc);p.register(Fp);p.register(Pp);p.register(Up);p.register(La);p.register(Bp);p.register(Hp);p.register(Gp);p.register($p);p.register(zp);p.register(Vp);p.register(Ji);p.register(Wp);p.register(qp);p.register(Kp);p.register(Yp);p.register(Xp);p.register(Zp);p.register(Qp);p.register(Jp);p.register(Ql);p.register(em);p.register(tm);p.register(ei);p.register(ti);p.register(rs);p.register(nm);p.register(rm);p.register(im);p.register(sm);p.register(am);p.register(om);p.register(lm);p.register(ts);p.register(cm);p.register(dm);p.register(um);p.register(hm);p.register(pm);p.register(mm);p.register(fm);p.register(gm);p.register(bm);p.register(ec);p.register(xm);p.register(Em);p.register(Tm);p.register(ym);p.register(Da);p.register(Sm);p.register(Nm);p.register(_m);p.register(Am);p.register(jm);p.register(vm);p.register(wm);p.register(Rm);p.register(nc);p.register(uc);p.register(Im);p.register(Cm);p.register(km);p.register(Om);p.register(Lm);p.register(Dm);p.register(Mm);p.register(Fm);p.register(Pm);p.register(Um);p.register(Bm);p.register(Hm);p.register(Gm);p.register($m);p.register(zm);p.register(Vm);p.register(Wm);p.register(qm);p.register(Km);p.register(ic);p.register(Ym);p.register(Xm);p.register(Zm);p.register(Qm);p.register(Jm);p.register(ef);p.register(tf);p.register(nf);p.register(rf);p.register(sf);p.register(af);p.register(of);p.register(sc);p.register(lf);p.register(cf);p.register(df);p.register(uf);p.register(hf);p.register(pf);p.register(mf);p.register(ff);p.register(gf);p.register(bf);p.register(xf);p.register(Ef);p.register(Tf);p.register(yf);p.register(Sf);p.register(Nf);p.register(_f);p.register(Af);p.register(Ca);p.register(jf);p.register(vf);p.register(wf);p.register(Rf);p.register(ac);p.register(If);p.register(Cf);p.register(hc);p.register(kf);p.register(Of);p.register(Lf);p.register(Df);p.register(Mf);p.register(Ff);p.register(Pf);p.register(Uf);p.register(Bf);p.register(oc);p.register(Hf);p.register(lc);p.register(Gf);p.register($f);p.register(zf);p.register(Vf);p.register(Wf);p.register(qf);p.register(Kf);p.register(Yf);p.register(pc);p.register(Xf);p.register(Zf);p.register(Qf);p.register(Jf);p.register(eg);p.register(tg);p.register(ng);p.register(rg);p.register(dc);p.register(ig);p.register(Ma);p.register(sg);p.register(Oa);p.register(ag);p.register(og);p.register(lg);p.register(cg);p.register(dg);p.register(ug);p.register(hg);p.register(pg);p.register(mg);p.register(fg);p.register(gg);p.register(bg);p.register(xg);p.register(Eg);p.register(Tg);p.register(yg);p.register(Sg);p.register(Ng);p.register(_g);p.register(Ag);p.register(jg);p.register(vg);p.register(wg);p.register(Rg);p.register(Ig);p.register(Cg);p.register(kg);p.register(Og);p.register(Lg);function Cu(){Cu=function(s,a){return new r(s,void 0,a)};var e=RegExp.prototype,n=new WeakMap;function r(s,a,o){var l=new RegExp(s,a);return n.set(l,o||n.get(s)),El(l,r.prototype)}function i(s,a){var o=n.get(a);return Object.keys(o).reduce(function(l,c){var d=o[c];if(typeof d=="number")l[c]=s[d];else{for(var h=0;s[d[h]]===void 0&&h+1<d.length;)h++;l[c]=s[d[h]]}return l},Object.create(null))}return function(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&El(s,a)}(r,RegExp),r.prototype.exec=function(s){var a=e.exec.call(this,s);if(a){a.groups=i(a,this);var o=a.indices;o&&(o.groups=i(o,this))}return a},r.prototype[Symbol.replace]=function(s,a){if(typeof a=="string"){var o=n.get(this);return e[Symbol.replace].call(this,s,a.replace(/\$<([^>]+)>/g,function(c,d){var h=o[d];return"$"+(Array.isArray(h)?h.join("$"):h)}))}if(typeof a=="function"){var l=this;return e[Symbol.replace].call(this,s,function(){var c=arguments;return typeof c[c.length-1]!="object"&&(c=[].slice.call(c)).push(i(c,l)),a.apply(this,c)})}return e[Symbol.replace].call(this,s,a)},Cu.apply(this,arguments)}function El(e,n){return El=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},El(e,n)}function sE(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function Td(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(s,a){if(s){if(typeof s=="string")return sE(s,a);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?sE(s,a):void 0}}(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xR=function(e){return function(n){return n===void 0&&(n={}),function(i,s){if(s&&!i.registered(s))throw new Error('The default language "'+s+'" is not registered with refractor.')}(e,n.defaultLanguage),function(i){Y5(i,"element",r)};function r(i,s,a){var o,l;if(a&&a.tagName==="pre"&&i.tagName==="code"){var c=(i==null||(o=i.data)==null?void 0:o.meta)||(i==null||(l=i.properties)==null?void 0:l.metastring)||"";i.properties.className?typeof i.properties.className=="boolean"?i.properties.className=[]:Array.isArray(i.properties.className)||(i.properties.className=[i.properties.className]):i.properties.className=[];var d,h,b=function(v){for(var R,j=Td(v.properties.className);!(R=j()).done;){var C=R.value;if(C.slice(0,9)==="language-")return C.slice(9).toLowerCase()}return null}(i);if(!b&&n.defaultLanguage&&i.properties.className.push("language-"+(b=n.defaultLanguage)),i.properties.className.push("code-highlight"),b)try{var f,_;_=(f=b)!=null&&f.includes("diff-")?b.split("-")[1]:b,d=e.highlight(yo(i),_),a.properties.className=(a.properties.className||[]).concat("language-"+_)}catch(v){if(!n.ignoreMissing||!/Unknown language/.test(v.message))throw v;d=i}else d=i;d.children=(h=1,function v(R){return R.reduce(function(j,C){if(C.type==="text"){var M=C.value,B=(M.match(/\n/g)||"").length;if(B===0)C.position={start:{line:h,column:1},end:{line:h,column:1}},j.push(C);else for(var Q,Y=M.split(`
`),ie=Td(Y.entries());!(Q=ie()).done;){var De=Q.value,de=De[0],Ze=De[1];j.push({type:"text",value:de===Y.length-1?Ze:Ze+`
`,position:{start:{line:h+de,column:1},end:{line:h+de,column:1}}})}return h+=B,j}if(Object.prototype.hasOwnProperty.call(C,"children")){var Ce=h;return C.children=v(C.children),j.push(C),C.position={start:{line:Ce,column:1},end:{line:h,column:1}},j}return j.push(C),j},[])})(d.children),d.position=d.children.length>0?{start:{line:d.children[0].position.start.line,column:0},end:{line:d.children[d.children.length-1].position.end.line,column:0}}:{start:{line:0,column:0},end:{line:0,column:0}};for(var y,T=function(v){var R=/{([\d,-]+)}/,j=v.split(",").map(function(B){return B.trim()}).join();if(R.test(j)){var C=R.exec(j)[1],M=eR(C);return function(B){return M.includes(B+1)}}return function(){return!1}}(c),A=function(v){var R=Cu(/showLineNumbers=(\d+)/i,{lines:1});if(R.test(v)){var j=R.exec(v);return Number(j.groups.lines)}return 1}(c),m=function(v){for(var R=new Array(v),j=0;j<v;j++)R[j]={type:"element",tagName:"span",properties:{className:[]},children:[]};return R}(d.position.end.line),g=["showlinenumbers=false",'showlinenumbers="false"',"showlinenumbers={false}"],E=function(){var v,R,j=y.value,C=j[0],M=j[1];M.properties.className=["code-line"];var B=Q5(d,function(Q){return Q.position.start.line<=C+1&&Q.position.end.line>=C+1});M.children=B.children,!c.toLowerCase().includes("showLineNumbers".toLowerCase())&&!n.showLineNumbers||g.some(function(Q){return c.toLowerCase().includes(Q)})||(M.properties.line=[(C+A).toString()],M.properties.className.push("line-number")),T(C)&&M.properties.className.push("highlight-line"),(b==="diff"||(v=b)!=null&&v.includes("diff-"))&&yo(M).substring(0,1)==="-"?M.properties.className.push("deleted"):(b==="diff"||(R=b)!=null&&R.includes("diff-"))&&yo(M).substring(0,1)==="+"&&M.properties.className.push("inserted")},x=Td(m.entries());!(y=x()).done;)E();m.length>0&&yo(m[m.length-1]).trim()===""&&m.pop(),i.children=m}}}},ER=xR(p),TR=function(n,r){return r===void 0&&(r=[[ER,{ignoreMissing:!0}]]),B5().data("settings",{fragment:!0}).use([...r]).processSync(""+n).toString()};function yR(e){return e.replace(/```(tsx?|jsx?|html|xml)(.*)\s+([\s\S]*?)(\s.+)?```/g,n=>n.replace(/[<&"]/g,r=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[r])).replace(/[<&"]/g,n=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[n])}function yd(e){e.stopPropagation(),e.preventDefault()}class SR{constructor(n){this.elm=void 0,this.start=void 0,this.end=void 0,this.value=void 0;var{selectionStart:r,selectionEnd:i}=n;this.elm=n,this.start=r,this.end=i,this.value=this.elm.value}position(n,r){var{selectionStart:i,selectionEnd:s}=this.elm;return this.start=typeof n=="number"&&!isNaN(n)?n:i,this.end=typeof r=="number"&&!isNaN(r)?r:s,this.elm.selectionStart=this.start,this.elm.selectionEnd=this.end,this}insertText(n){return this.elm.focus(),this.elm.setRangeText(n),this.value=this.elm.value,this.position(),this}getSelectedValue(n,r){var{selectionStart:i,selectionEnd:s}=this.elm;return this.value.slice(typeof n=="number"&&!isNaN(n)?n:i,typeof r=="number"&&!isNaN(r)?n:s)}getLineStartNumber(){for(var n=this.start;n>0;)if(n--,this.value.charAt(n)===`
`){n++;break}return n}getIndentText(){var n=this.getLineStartNumber(),r=this.getSelectedValue(n),i="";return r.replace(/(^(\s)+)/,(s,a)=>i=a),i}lineStarInstert(n){if(n){var r=this.start,i=this.getLineStartNumber(),s=this.getSelectedValue(i);this.position(i,this.end).insertText(s.split(`
`).map(a=>n+a).join(`
`)).position(r+n.length,this.end)}return this}lineStarRemove(n){if(n){var r=this.start,i=this.getLineStartNumber(),s=this.getSelectedValue(i),a=new RegExp("^"+n,"g"),o=r-n.length;a.test(s)||(o=r),this.position(i,this.end).insertText(s.split(`
`).map(l=>l.replace(a,"")).join(`
`)).position(o,this.end)}}notifyChange(){var n=new Event("input",{bubbles:!0,cancelable:!1});this.elm.dispatchEvent(n)}}function NR(e){var n=new SR(e.target),r=(e.code||e.nativeEvent.code).toLocaleLowerCase();if(r==="tab")yd(e),n.start===n.end?e.shiftKey?n.lineStarRemove("  "):n.insertText("  ").position(n.start+2,n.end+2):n.getSelectedValue().indexOf(`
`)>-1&&e.shiftKey?n.lineStarRemove("  "):n.getSelectedValue().indexOf(`
`)>-1?n.lineStarInstert("  "):n.insertText("  ").position(n.start+2,n.end),n.notifyChange();else if(r==="enter"){yd(e);var i=`
`+n.getIndentText();n.insertText(i).position(n.start+i.length,n.start+i.length),n.notifyChange()}else if(r&&/^(quote|backquote|bracketleft|digit9|comma)$/.test(r)&&n.getSelectedValue()){yd(e);var s=n.getSelectedValue(),a="";switch(r){case"quote":a="'"+s+"'",e.shiftKey&&(a='"'+s+'"');break;case"backquote":a="`"+s+"`";break;case"bracketleft":a="["+s+"]",e.shiftKey&&(a="{"+s+"}");break;case"digit9":a="("+s+")";break;case"comma":a="<"+s+">";break}n.insertText(a),n.notifyChange()}}var _R={position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},AR={position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",opacity:.8,overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},aE={margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word",outline:0},jR=["prefixCls","value","padding","minHeight","placeholder","language","data-color-mode","className","style","rehypePlugins","onChange"];const vR=Mu.forwardRef((e,n)=>{var{prefixCls:r="w-tc-editor",padding:i=10,minHeight:s=16,placeholder:a,language:o,"data-color-mode":l,className:c,style:d,rehypePlugins:h,onChange:b}=e,f=s9(e,jR),[_,y]=D.useState(e.value||"");D.useEffect(()=>y(e.value||""),[e.value]);var T=D.useRef(null);D.useImperativeHandle(n,()=>T.current,[T]);var A={paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i},m=D.useMemo(()=>TR("<pre aria-hidden=true><code "+(o&&_?'class="language-'+o+'"':"")+" >"+yR(String(_||""))+"</code><br /></pre>",h),[_,o,h]),g=D.useMemo(()=>t.jsx("div",{style:Cr({},aE,A,{minHeight:s}),className:r+"-preview "+(o?"language-"+o:""),dangerouslySetInnerHTML:{__html:m}}),[r,o,m]),E=R=>{y(R.target.value),b&&b(R)},x=R=>{f.readOnly||(!f.onKeyDown||f.onKeyDown(R)!==!1)&&NR(R)},v=Cr({autoComplete:"off",autoCorrect:"off",spellCheck:"false",autoCapitalize:"off"},f,{placeholder:a,onKeyDown:x,style:Cr({},aE,AR,A,{minHeight:s},a&&!_?{WebkitTextFillColor:"inherit"}:{}),onChange:E,className:r+"-text",value:_});return t.jsxs("div",{style:Cr({},_R,d),className:r+" "+(c||""),"data-color-mode":l,children:[t.jsx("textarea",Cr({},v,{ref:T})),g]})});function L({value:e}){return t.jsx("div",{className:"my-2 overflow-x-auto",children:t.jsx(vR,{className:"bg-gray-200/25 border-2 border-gray-300 border-solid font-mono min-w-full rounded text-base w-max","data-color-mode":"light",readOnly:!0,language:"js",value:e})})}const wR="/my-textbook/assets/adjacency-list-edges-9eDj1UNY.png",RR="/my-textbook/assets/adjacency-list-depth-first-search-XhxsPApS.png",IR="/my-textbook/assets/adjacency-list-breadth-first-search-IIom2C-w.png",CR=`// Узел графа для списка смежности
class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
} 

// Или используем хеш-карту
const adjList = new Map();

// Даны направленные рёбра, построим список смежности
const edges = [["A", "B"], ["B", "C"], ["B", "E"], ["C", "E"], ["E", "D"]];

for (const edge of edges) {
  const src = edge[0];
  const dst = edge[1];

  // Если текущий источник не существует, добавим его в хеш-карту
  if (!adjList.has(src)) {
    adjList.set(src, []);    
  }

  // Если текущий пункт назначения не существует, добавим его в хеш-карту
  if (!adjList.has(dst)) {
    adjList.set(dst, []);    
  }

  // Получим массив соседей по ключу (источник) и добавим в него пункт назначения
  adjList.get(src).push(dst);    
}`,kR=`function dfs(node, target, adjList, visit) {
  if (visit.has(node)) {
    return 0;
  }

  if (node === target) {
    return 1;
  }

  let count = 0;
  visit.add(node);

  for (const neighbor of adjList.get(node)) {
    count += dfs(neighbor, target, adjList, visit); 
  }

  visit.delete(node);
  return count;
}`,OR=`function bfs(node, target, adjList) {
  let length = 0;
  const visit = new Set();
  const queue = []; // представим, что это очередь, чтобы не занимать место реализацией очереди
  visit.add(node);
  queue.push(node);

  while (queue.length !== 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift(); // представим, что это операция очереди dequeue

      if (curr === target) {
        return length;
      }

      for (const neighbor of adjList.get(curr)) {
        if (!visit.has(neighbor)) {
          visit.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    length++;
  }

  return length;
}`;function LR(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Список смежности, вероятно, является «самым приятным» форматом из трёх, которые мы рассмотрели. Здесь нам дан список направленных рёбер, и мы должны соединить источник с пунктами назначения. Другими словами, нам нужно построить список смежности по массиву рёбер."}),t.jsx("p",{className:"mb-2",children:"Код ниже демонстрирует, как мы можем построить список смежности. Мы можем использовать хеш-карту, где ключом является вершина, и он сопоставляется со списком своих соседей, которые также являются вершинами. Хеш-карта подходит, поскольку мы предполагаем, что все ключи значений уникальны."}),t.jsx(L,{value:CR}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Граф, представленный списком смежности",className:"mx-auto",height:"400",src:wR,width:"800"})}),t.jsx("h2",{className:"font-bold my-2",children:"DFS для списка смежности"}),t.jsx("p",{className:"mb-2",children:"Допустим, мы хотим посчитать количество путей, ведущих от источника к пункту назначения."}),t.jsxs("p",{className:"mb-2",children:["В приведённом ниже коде у нас есть список смежности, источник и цель"," ",t.jsx("code",{children:"target"}),". Подобно обходу матрицы, мы будем использовать"," ",t.jsx("code",{children:"Set"})," под названием ",t.jsx("code",{children:"visit"}),", чтобы отслеживать вершины, которые мы уже посетили."]}),t.jsxs("p",{className:"mb-2",children:["Затем мы будем рекурсивно запускать DFS в нашем списке, пока не достигнем целевого узла, после чего вернем ",t.jsx("code",{children:"1"}),". Как только мы найдём путь, мы вернёмся, удалив узлы из нашего ",t.jsx("code",{children:"Set"})," и вернув ",t.jsx("code",{children:"count"}),"."]}),t.jsx(L,{value:kR}),t.jsxs("p",{className:"mb-2",children:["На изображении ниже продемонстрирован описанный выше алгоритм. Красные галочки указывают, что узел был посещён и находится в ",t.jsx("code",{children:"Set"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск в глубину в графе, представленным списком смежности",className:"mx-auto",height:"1260",src:RR,width:"1060"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Этот бэктрекинг является экспоненциальным. В худшем случае каждый узел связан с каждым другим узлом графа. Напомним правило,"," ",t.jsxs("code",{children:["E <= V",t.jsx("sup",{children:"2"})]}),". Итак, предположим, что каждая вершина имеет ",t.jsx("i",{children:"N"})," рёбер. Если мы хотим создать дерево решений, определяющее, сколько вершин могут быть соседями каждой вершины, и высота этого дерева равна ",t.jsx("i",{children:"V"}),", это означает, что в худшем случае нам придется выполнить"," ",t.jsxs("i",{children:["N",t.jsx("sup",{children:"v"})]})," ","работы по очень схожим причинам к тому, что мы обсуждали в статье о матрицах."]}),t.jsx("h2",{className:"font-bold my-2",children:"BFS для списка смежности"}),t.jsxs("p",{className:"mb-2",children:["Запуск BFS аналогичен тому, что мы видели раньше. Допустим, наша цель — найти"," ",t.jsx("strong",{children:"кратчайший путь"})," от узла к цели. Под кратчайшим путем мы подразумеваем достижение пункта назначения путём посещения наименьшего количества возможных вершин."]}),t.jsxs("p",{className:"mb-2",children:["Наш код очень похож на код, когда мы рассматривали BFS для графа, представленного матрицей, за исключением того, что в этом случае нам не нужно беспокоиться о крайних случаях. Мы будем продолжать увеличивать длину на каждом уровне, пока не найдем целевую вершину ",t.jsx("code",{children:"target"}),"."]}),t.jsx(L,{value:OR}),t.jsxs("p",{className:"mb-2",children:["Глядя на изображение ниже, приведённый выше фрагмент кода вернёт ",t.jsx("code",{children:"2"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск в ширину в графе, представленным списком смежности",className:"mx-auto",height:"819",src:IR,width:"1060"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Ранее мы узнали, что количество рёбер в графе ограничено ",t.jsx("i",{children:"V"}),t.jsx("sup",{children:"2"}),". Однако мы знаем, что в этом случае у нас нет петель и нет максимального количества рёбер. Следовательно, мы можем сказать, что сложность по времени равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"V"})," + ",t.jsx("i",{children:"E"}),"), где ",t.jsx("i",{children:"V"})," — количество вершин, а"," ",t.jsx("i",{children:"E"})," — количество рёбер. Это связано с тем, что в худшем случае наш BFS должен учитывать все пути ко всем возможным вершинам, а это означает, что общая работа будет равна количеству вершин и рёбер вместе взятых."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Вы можете в это не поверить, но на самом деле это лишь поверхностное понимание и объяснение основ. В конце концов, существует целая область исследований под названием Теория графов."})]})}const DR=`const array = [1, 2, 3];

array[1];`,MR=`for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}`,FR="array.pop();",PR=`// удаление элемента по индексу i
for (let j = i + 1; j < array.length; j++) {
  array[j - 1] = array[j];
}

array.length--;`,UR="array.push(4);",BR=`// вставка элемента по индексу i
for (let j = array.length - 1; j > i - 1; j--) {
  array[j + 1] = array[j];
}

array[i] = 4;`;function HR(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Массив — это структура данных, в которой можно хранить коллекции элементов. Каждый элемент проиндексирован."}),t.jsx("p",{children:"Наиболее распространёнными операциями являются:"}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsx("li",{className:"ml-6",children:"Чтение"}),t.jsx("li",{className:"ml-6",children:"Удаление"}),t.jsx("li",{className:"ml-6",children:"Вставка"})]}),t.jsx("h2",{className:"font-bold my-2",children:"Чтение из массива"}),t.jsx("p",{children:"Чтение из массива происходит через доступ по индексу:"}),t.jsx(L,{value:DR}),t.jsxs("p",{children:["Если известен индекс элемента, доступ происходит мгновенно. Сложность по времени составляет ",t.jsx("i",{children:"O"}),"(1)."]}),t.jsx("h2",{className:"font-bold my-2",children:"Обход массива"}),t.jsxs("p",{children:["Сложность обхода массива из n элементов — ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx(L,{value:MR}),t.jsxs("p",{children:["Количество операций линейно зависит от ",t.jsx("i",{children:"n"}),". Если ",t.jsx("i",{children:"n"})," удвоится, количество операций также удвоится."]}),t.jsx("h2",{className:"font-bold my-2",children:"Удаление из массива"}),t.jsxs("p",{children:["При удалении любого элемента из массива (кроме последнего) необходимо сдвинуть все последующие элементы на 1 позицию влево. В худшем случае придётся переместить все оставшиеся элементы. Таким образом, сложность будет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx(L,{value:PR}),t.jsxs("p",{children:["Удаление последнего элемента из массива — ",t.jsx("i",{children:"O"}),"(1), так как другие элементы не придётся сдвигать."]}),t.jsx(L,{value:FR}),t.jsx("h2",{className:"font-bold my-2",children:"Вставка в массив"}),t.jsxs("p",{children:["При вставке в массив необходимо сдвигать элементы по аналогии с удалением, но вправо. Сложность аналогичная — в худшем случае ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx(L,{value:UR}),t.jsxs("p",{children:["При вставке в конец массива сложность ",t.jsx("i",{children:"O"}),"(1)."]}),t.jsx(L,{value:BR}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги:"}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Примечания"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Чтение"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")",t.jsx("sup",{children:"*"})]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:["При удалении последнего элемента ",t.jsx("i",{children:"O"}),"(1)"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Вставка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")",t.jsx("sup",{children:"*"})]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:["При вставке в конец массива ",t.jsx("i",{children:"O"}),"(1)"]})]})]})]})]})}const GR="/my-textbook/assets/backtracking1-BfJXCuoY.png",$R="/my-textbook/assets/backtracking2-5JuPTDHV.png",zR=`class TreeNode {
  left = null;
  right = null;

  constructor(val) {
    this.val = val;
  }
}

function canReachLeaf(root) {
  if (!root || root.val === 0) {
    return false;
  }

  if (!root.left && !root.right) {
    return true;
  }

  if (canReachLeaf(root.left)) {
    return true;
  }

  if (canReachLeaf(root.right)) {
    return true;
  }

  return false;
}`,VR=`function leafPath(root, path) {
  if (!root || root.val === 0) {
    return false;
  }

  path.push(root.val);
  
  if (!root.left && !root.right) {
    return true;
  }

  if (leafPath(root.left, path)) {
    return true;
  }

  if (leafPath(root.right, path)) {
    return true;
  }

  path.pop();

  return false;
}`;function WR(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Бэктрекинг"}),t.jsx("p",{className:"mb-2",children:"Поиск с возвратом (бэктрекинг) — это алгоритм, который похож на алгоритм DFS для бинарных деревьев, который мы уже обсуждали. Он действует методом грубой силы. Мы исследуем возможный способ решения задачи, и если решить задачу этим способом нам не удаётся, мы возвращаемся назад и исследуем другие способы, пока не найдём решение."}),t.jsx("h2",{className:"font-bold my-2",children:"Мотивация с примером"}),t.jsx("p",{className:"mb-2",children:"Кратко обсудив, что такое бэктрекинг, и приняв во внимание всё, что мы знаем о DFS, давайте посмотрим, как мы будем решать следующую задачу."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Определите, существует ли путь от корня дерева до листового узла. Путь не может содержать нулей."})}),t.jsxs("p",{className:"mb-2",children:["По сути, проблема заключается в том, можем ли мы пройти от корневого узла к листовому узлу, не встречая значения ",t.jsx("code",{children:"0"}),". Мы возвращаем"," ",t.jsx("code",{children:"true"}),", если путь существует, и ",t.jsx("code",{children:"false"}),", если его нет."]}),t.jsxs("p",{className:"mb-2",children:["Первое, что приходит на ум, — это использование поиска в глубину. Наше ограничение состоит в том, что на нашем пути не может быть узла со значением ",t.jsx("code",{children:"0"}),". Мы также знаем, что если дерево пусто, то не может существовать и валидного пути. Наконец, если мы достигли листового узла и не вернули ",t.jsx("code",{children:"false"}),", мы можем вернуть ",t.jsx("code",{children:"true"}),", поскольку это означает, что существует путь от корня до листа."]}),t.jsxs("p",{className:"mb-2",children:["Для решения этой проблемы предположим, что существует ровно один путь, поэтому он должен существовать либо в правом поддереве, либо в левом поддереве. Произвольно мы решаем попробовать левую сторону перед правой. Если ответ не найден в левом поддереве, алгоритм будет искать в правом поддереве и, если путь существует, вернёт ",t.jsx("code",{children:"true"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Дано дерево ",t.jsx("code",{children:"[4, 0, 1, null, 7, 2, 0]"}),", валидный путь будет выглядеть следующим образом, как показано на изображении. Путь недействителен, если в нем есть ",t.jsx("code",{children:"0"}),"."]}),t.jsx("p",{className:"mb-2",children:"Теперь, когда мы знаем наши базовые случаи, перевести это в код очень просто."}),t.jsx(L,{value:zR}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск пути от корня до листового узла",className:"mx-auto",height:"600",src:GR,width:"1080"})}),t.jsx("p",{className:"mb-2",children:"Давайте взглянем на немного изменённую задачу, в которой нам нужно возвращать значения пути вместо простого возврата логического значения."}),t.jsxs("p",{className:"mb-2",children:["В этой задаче мы можем передать параметр ",t.jsx("code",{children:"path"}),", который представляет собой список для хранения всех узлов, находящихся на валидном пути. Итак, учитывая дерево ",t.jsx("code",{children:"[4, 0, 1, null, 7, 3, 2, null, null, null, 0]"}),", мы сначала добавляем корневой узел в наш список."]}),t.jsxs("p",{className:"mb-2",children:["Поскольку существует только один валидный путь, он будет находиться либо в левом поддереве, либо в правом поддереве. Приоритет левого над правым делает левое поддерево недопустимым, поскольку левый дочерний узел ",t.jsx("code",{children:"4"})," равен"," ",t.jsx("code",{children:"0"}),". Мы возвращаем ",t.jsx("code",{children:"false"})," и теперь рекурсивно проверяем правое поддерево. Двигаясь вправо, ",t.jsx("code",{children:"1"})," является валидным, поэтому мы добавляем его в наш список. Теперь мы проверяем ",t.jsx("code",{children:"3"}),", которое является валидным, поэтому оно добавляется в наш список. Левый дочерний узел ",t.jsx("code",{children:"3"})," ","равен ",t.jsx("code",{children:"null"}),", поэтому мы возвращаем ",t.jsx("code",{children:"false"}),". Проверяя правый дочерний узел ",t.jsx("code",{children:"3"}),", мы снова попадаем в базовый случай. Теперь мы должны удалить ",t.jsx("code",{children:"3"})," из нашего списка, потому что, если бы существовал валидный путь, мы бы уже вернули ",t.jsx("code",{children:"true"}),". Мы возвращаемся к родительскому узлу"," ",t.jsx("code",{children:"3"}),", то есть ",t.jsx("code",{children:"1"}),", и проверяем его правое поддерево. Добавляем ",t.jsx("code",{children:"2"})," в наш список. Затем мы исследуем ",t.jsx("code",{children:"2"}),", но"," ",t.jsx("code",{children:"2"})," — это листовой узел, что заставляет рекурсивный вызов возвратить"," ",t.jsx("code",{children:"true"}),", после чего функция возвращает ",t.jsx("code",{children:"true"}),". Наш валидный путь — ",t.jsx("code",{children:"[4, 1, 2]"}),"."]}),t.jsx("p",{className:"mb-2",children:"На изображении ниже показан этот процесс."}),t.jsx("img",{alt:"Поиск пути от корня до листового узла",className:"mb-2",height:"919",src:$R,width:"1540"}),t.jsx(L,{value:VR}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Учитывая, что дерево имеет ",t.jsx("i",{children:"n"})," узлов, сложность по времени будет равна"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), поскольку нам придётся обойти всё дерево. Как и в любом алгоритме грубой силы, нам придётся пройти через входные данные, размер которых в данном случае соответствует размеру дерева."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Бэктрекинг — это абстрактный алгоритм, и бинарные деревья — не единственная структура данных, к которой его можно применять. В следующих статьях мы увидим, как можно применить этот алгоритм к другим структурам данных."})]})}const qR="/my-textbook/assets/binary-search-exist-kkI1BJjD.png",KR="/my-textbook/assets/binary-search-not-exist-3p-mEddV.png",YR=`const arr = [1, 3, 3, 4, 5, 6, 7, 8];

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    
    if (target > arr[mid]) {
      l = mid + 1;
    } else if (target < arr[mid]) {
      r = mid - 1; 
    } else {
      return mid;
    }
  }
  
  return -1;
}`,XR=`// возвращает 1, если n слишком большое число, -1, если слишком маленькое, 0, если верное
function isCorrect(n) {
  if (n > 10) {
    return 1;
  } else if (n < 10) {
    return -1;
  } else {
    return 0;
  }
}`,ZR=`function binarySearch(low, high) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (isCorrect(mid) > 0) {
      high = mid - 1;
    } else if (isCorrect(mid) < 0) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  
  return -1;
}`;function QR(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Бинарный поиск — это эффективный способ поиска элементов в отсортированном массиве. Обычно нам дается массив и элемент ",t.jsx("code",{children:"target"}),", который нам нужно найти."]}),t.jsxs("p",{className:"mb-2",children:["В своей основе бинарный поиск делит массив посередине, называемой ",t.jsx("code",{children:"mid"}),", и сравнивает значение ",t.jsx("code",{children:"mid"})," со значением ",t.jsx("code",{children:"target"}),". Если значение ",t.jsx("code",{children:"mid"})," меньше, чем ",t.jsx("code",{children:"target"}),", он удаляет левую половину массива и продолжает поиск справа от ",t.jsx("code",{children:"mid"}),". Если значение"," ",t.jsx("code",{children:"mid"})," больше, чем ",t.jsx("code",{children:"target"}),", поиск продолжается слева от"," ",t.jsx("code",{children:"mid"}),". В итоге мы либо найдём ",t.jsx("code",{children:"target"}),", либо определим, что"," ",t.jsx("code",{children:"target"})," не существует в массиве."]}),t.jsx("h2",{className:"font-bold my-2",children:"Механика бинарного поиска"}),t.jsxs("p",{className:"mb-2",children:["Теперь, когда мы знаем общую идею бинарного поиска, мы можем определить, как он будет работать логистически. Значение ",t.jsx("code",{children:"target"})," поступает в качестве аргумента, но ",t.jsx("code",{children:"mid"})," нам необходимо вычислить. Значение ",t.jsx("code",{children:"mid"})," ","первоначально рассчитывается путём добавления ",t.jsx("b",{children:"крайнего левого"})," индекса к"," ",t.jsx("b",{children:"крайнему правому"})," индексу, а затем делением результата на ",t.jsx("b",{children:"2"}),". Это позволяет нам иметь две равные части массива. Мы будем иметь следующее:"]}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsxs("li",{children:[t.jsx("code",{children:"L"})," — крайний левый индекс текущего подмассива;"]}),t.jsxs("li",{children:[t.jsx("code",{children:"R"})," — крайний правый индекс текущего подмассива;"]}),t.jsxs("li",{children:[t.jsx("code",{children:"mid"})," — ",t.jsx("code",{children:"(L + R) / 2"}),", индекс, по которому текущий подмассив делится на две равные половины."]})]}),t.jsxs("p",{className:"mb-2",children:[t.jsx("code",{children:"L"})," и ",t.jsx("code",{children:"R"})," иногда называют ",t.jsx("code",{children:"low"})," и"," ",t.jsx("code",{children:"high"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Идея теперь состоит в том, что мы будем продолжать поиск ",t.jsx("code",{children:"target"})," до тех пор, пока либо не найдём ",t.jsx("code",{children:"target"}),", либо наш указатель"," ",t.jsx("code",{children:"L"})," не пересечёт указатель ",t.jsx("code",{children:"R"}),", что будет означать, что в массиве не существует ",t.jsx("code",{children:"target"}),"."]}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsxs("li",{children:[t.jsxs("strong",{children:[t.jsx("code",{children:"target"})," существует в массиве"]}),t.jsxs("p",{className:"mb-2",children:["Рассмотрим вышеизложенную концепцию на примере. Возьмём массив"," ",t.jsx("code",{children:"[1, 2, 3, 4, 5, 6, 7, 8]"})," и ",t.jsx("code",{children:"target = 5"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Мы знаем, что наш указатель ",t.jsx("code",{children:"L"})," начинается с 0-го индекса, а"," ",t.jsx("code",{children:"R"})," — с 7-го индекса (",t.jsx("code",{children:"arr.length - 1"}),"). Вычисляем"," ",t.jsx("code",{children:"mid"}),": (7 + 0) / 2 = ",t.jsx("code",{children:"3"}),". Теперь мы можем сравнить значение по индексу 3 с ",t.jsx("code",{children:"target"}),"."]}),t.jsxs("p",{className:"mb-2",children:["4 меньше, чем 5, что говорит о том, что нам нужно искать большее число, а поскольку массив отсортирован, большие числа располагаются справа. Следовательно, нам необходимо переместить ",t.jsx("code",{children:"L"})," в позицию"," ",t.jsx("code",{children:"mid + 1"}),", которая определяет нижнюю границу. Указатель"," ",t.jsx("code",{children:"R"})," остаётся на своём месте."]}),t.jsxs("p",{className:"mb-2",children:["На следующей итерации вычисление ",t.jsx("code",{children:"mid"})," даёт нам ",t.jsx("code",{children:"5"}),". Глядя на 5-й индекс, наш элемент равен ",t.jsx("code",{children:"6"}),", это больше, чем 5. Следовательно, указатель ",t.jsx("code",{children:"R"})," необходимо переместить в"," ",t.jsx("code",{children:"mid - 1"}),", так как нам нужно искать меньший элемент. Теперь оба указателя ",t.jsx("code",{children:"L"})," и ",t.jsx("code",{children:"R"})," указывают на 4-й индекс. Новое значение ",t.jsx("code",{children:"mid"})," равно 4, и действительно, ",t.jsx("code",{children:"target"})," ","находится в массиве по 4-му индексу, поэтому мы можем вернуть ",t.jsx("code",{children:"mid"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Бинарный поиск, элемент существует в массиве",className:"mx-auto",height:"840",src:qR,width:"1440"})}),t.jsx("p",{className:"mb-2",children:"Псевдокод демонстрирует описанный выше процесс:"}),t.jsx(L,{value:YR}),t.jsxs("strong",{children:["Для рассчёта ",t.jsx("code",{children:"mid"})," будет лучше использовать формулу"," ",t.jsx("code",{children:"L + (R - L) / 2"}),". Эта формула позволяет избежать целочисленного переполнения в некоторых ситуациях."]})]}),t.jsxs("li",{children:[t.jsxs("strong",{children:[t.jsx("code",{children:"target"})," не существует в массиве"]}),t.jsxs("p",{className:"mb-2",children:["Углубимся в то, что произойдёт, если ",t.jsx("code",{children:"target"})," не существует в массиве. Возьмём тот же самый массив"," ",t.jsx("code",{children:"arr = [1, 2, 3, 4, 5, 6, 7, 8]"})," и ",t.jsx("code",{children:"target = 9"}),"."]}),t.jsx("p",{className:"mb-2",children:"Наш левый указатель пересечёт правый."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Бинарный поиск, элемент не существует в массиве",className:"mx-auto",height:"1200",src:KR,width:"1440"})})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Бинарный поиск в диапазоне"}),t.jsx("p",{className:"mb-2",children:"Представьте, что ваш друг дал вам диапазон от 1 до 100 и попросил угадать число, которое он загадал. Есть три исхода: либо ваше предположение верно, либо слишком маленькое, либо слишком большое."}),t.jsxs("p",{className:"mb-2",children:["Если ваша догадка слишком мала, вам придется угадать число среди тех, которые больше вашей догадки, а если слишком велика, то вам придется угадать число среди меньших чисел. Различие от поиска состоит в том, что вы не знаете, о каком числе думает ваш друг (значение ",t.jsx("code",{children:"target"}),"). Всё, что у вас есть — это обратная связь от друга каждый раз, когда вы угадываете, и вы соответствующим образом корректируете следующее предположение."]}),t.jsxs("p",{className:"mb-2",children:["Как мы будем устанавливать наши границы? Мы можем применить стандартный шаблон бинарного поиска, который мы изучили ранее, за исключением того, что вместо того, чтобы проверять, соответствует ли ваш ",t.jsx("code",{children:"mid"})," значению"," ",t.jsx("code",{children:"target"}),", вы должны спросить своего друга, верна ли ваша догадка."]}),t.jsx("p",{className:"mb-2",children:"Конечно, у вашего друга есть операция определения того, слишком ли ваша догадка велика или мала. Всё, что он делает, это сравнивает ваше предположение с числом, о котором он думает, и сообщает вам, следует ли вам угадать большее или меньшее число. Предположим, что ваш друг загадал число 10. Псевдокод этой операции будет выглядить следующим образом:"}),t.jsx(L,{value:XR}),t.jsx("p",{className:"mb-2",children:"Теперь всё, что нам нужно сделать, это вызвать эту функцию в нашей функции бинарного поиска."}),t.jsx(L,{value:ZR}),t.jsxs("p",{className:"mb-2",children:["Как уже отмечалось, на основе значения, возвращаемого из функции"," ",t.jsx("code",{children:"isCorrect"}),", мы можем перемещать наши ",t.jsx("code",{children:"low"})," и"," ",t.jsx("code",{children:"high"}),", которые, как говорилось ранее, являются просто ещё одним способом представления указателей ",t.jsx("code",{children:"L"})," и ",t.jsx("code",{children:"R"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Поиск в диапазоне может сбивать с толку и может показаться очень тонким, потому что вам нужно придумать, как изменить типичную реализацию бинарного поиска. Для подобных задач предоставляется предопределённый метод API, в данном случае"," ",t.jsx("code",{children:"isCorrect"}),", и вы должны рассматривать функцию как чёрный ящик и использовать её в своём собственном методе бинарного поиска."]}),t.jsxs("p",{className:"mb-2",children:[t.jsx("strong",{children:"Сложность по времени"})," для бинарного поиска составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),")."]})]})}const JR="/my-textbook/assets/binary-search-tree-kloIB8qX.png",eI=`function search(root, target) {
  if (root === null) {
    return false;
  }

  if (target > root.value) {
    return search(root.right, target);
  } else if (target < root.value) {
    return search(root.left, target);
  } else {
    return true;
  }    
}`;function tI(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Разница между бинарными деревьями и бинарными деревьями поиска"}),t.jsx("p",{className:"mb-2",children:"Бинарные деревья поиска (binary search tree — BST) — это разновидность бинарных деревьев, элементы в которых отсортированы по определённым правилам. Правила заключаются в том, что каждый левый дочерний элемент должен быть меньше своего родителя, а каждый правый дочерний элемент должен быть больше своего родителя. Бинарные деревья поиска не допускают дубликатов."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Следует отметить, что правила BST применимы и к поддеревьям. Таким образом, хотя узел, значение которого меньше корня, будет находиться в левом поддереве, важно определить, где именно в левом поддереве будет находиться это значение."})}),t.jsx("h2",{className:"font-bold my-2",children:"Мотивация"}),t.jsxs("p",{className:"mb-2",children:["Зачем беспокоиться о BST, если у нас есть отсортированные массивы? С помощью бинарного поиска мы можем искать в них значения за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),") по времени, и если BST предлагает ту же функциональность, не можем ли мы просто использовать массив? Всё так и есть. Однако BST блистает, когда мы пытаемся вставить или удалить значение. Обе эти операции выполняются за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),") по времени для BST, но за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") по времени для массива."]}),t.jsx("p",{className:"mb-2",children:"Таким образом, хотя BST и не имеют преимуществ перед отсортированными массивами при поиске, они лучше подходят для вставки и удаления. В этой статье мы сосредоточимся конкретно на операции поиска."}),t.jsx("h2",{className:"font-bold my-2",children:"Поиск в BST"}),t.jsx("p",{className:"mb-2",children:"Деревья лучше всего обходить с помощью рекурсии. Хотя вы можете перемещаться по дереву итеративно, для этого потребуется поддерживать стек, что намного сложнее. Для рекурсии, как обсуждалось ранее, нам нужен базовый случай и вызывающая саму себя функция."}),t.jsxs("p",{className:"mb-2",children:["Возьмём для примера дерево ",t.jsx("code",{children:"[2, 1, 3, null, null, null, 4]"})," и найдём"," ",t.jsx("code",{children:"target = 3"}),"."]}),t.jsx("p",{className:"mb-2",children:"При бинарном поиске, если текущий элемент больше искомого, мы шли влево, а если текущий элемент меньше искомого, мы шли вправо. Аналогичный подход можно применить и здесь. Мы знаем, что все узлы слева меньше нашего текущего узла, а все узлы справа больше нашего текущего узла. Зная это, мы можем пойти направо, если наш текущий узел меньше искомого, и пойти налево, если текущий узел больше искомого."}),t.jsxs("p",{className:"mb-2",children:["Если искомое значение есть в дереве, мы вернём ",t.jsx("code",{children:"true"}),". В противном случае мы возвращаем ",t.jsx("code",{children:"false"}),"."]}),t.jsxs("p",{className:"mb-2",children:["В данном примере мы сначала начинаем со сравнения корневого значения с"," ",t.jsx("code",{children:"target"}),". ",t.jsx("code",{children:"2"})," слишком мало, поэтому наша цель должна находиться справа, то есть мы можем исключить левое поддерево. Когда мы идём направо, первый узел равен ",t.jsx("code",{children:"3"}),", что соответствует ",t.jsx("code",{children:"target"}),", поэтому мы возвращаем ",t.jsx("code",{children:"true"})," из рекурсивного вызова, что означает, что наша цель действительно существует в дереве."]}),t.jsx("p",{className:"mb-2",children:"Это продеманстрировано в псевдокоде и на изображении ниже."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Бинарное дерево поиска",className:"mx-auto",height:"440",src:JR,width:"1160"})}),t.jsx(L,{value:eI}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Если у нас сбалансированное бинарное дерево, наш алгоритм поиска будет работать за"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),") по времени. Сбалансированное бинарное дерево означает, что высота левого поддерева равна высоте правого поддерева, или разница между этими высотами равна ",t.jsx("code",{children:"1"}),". В сбалансированном дереве мы можем каждый раз исключать половину узлов, в результате чего получается ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),"). Если дерево не сбалансировано, то это приводит к сложности по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Это является худшим случаем."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("p",{className:"mb-2",children:["Основное преимущество бинарных деревьев поиска по сравнению с отсортированными массивами заключается в том, что мы можем вставлять, удалять и выполнять поиск за"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),") по времени."]})]})}const nI="/my-textbook/assets/binary-tree1-LR2spxBv.png",rI="/my-textbook/assets/binary-tree2-iSPJDWrt.png",iI="/my-textbook/assets/binary-tree3-PY4QE5vy.png",sI="/my-textbook/assets/binary-tree4-aqvNQMN1.png",aI=`class TreeNode {
    left = null;
    right = null;

    constructor(val) {
        this.val = val; 
    }
}`;function oI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Бинарное дерево — это ещё одна структура данных, включающая узлы и указатели. Мы говорили об узлах в статьях, посвящённых связным спискам. Мы соединяли эти узлы прямой линией с помощью указателей ",t.jsx("code",{children:"next"})," и ",t.jsx("code",{children:"prev"}),". Узлы в бинарном дереве также имеют не более двух указателей, но мы называем их"," ",t.jsx("strong",{children:"левым дочерним"})," (",t.jsx("strong",{children:"left child"}),") и"," ",t.jsx("strong",{children:"правым дочерним"})," (",t.jsx("strong",{children:"right child"}),") указателями. Первый узел бинарного дерева называется ",t.jsx("strong",{children:"корневым"})," (",t.jsx("strong",{children:"root"}),") узлом. Вместо прямой линии мы рисуем указатели вниз."]}),t.jsxs("p",{className:"mb-2",children:["Значение узла может быть любым типом данных. Класс ",t.jsx("code",{children:"TreeNode"})," будет выглядеть следующим образом. Обратите внимание, насколько реализация похожа на"," ",t.jsx("code",{children:"ListNode"}),", обсуждавшийся в статье о связных списках, за исключением того, что теперь у нас есть ",t.jsx("code",{children:"left"})," и ",t.jsx("code",{children:"right"}),"."]}),t.jsx(L,{value:aI}),t.jsxs("p",{className:"mb-2",children:["Если у узла нет дочерних узлов, он классифицируется как ",t.jsx("strong",{children:"листовой"})," ","(",t.jsx("strong",{children:"leaf"}),") узел. Если у узла есть хотя бы один дочерний узел, левый или правый, он будет классифицироваться как ",t.jsx("strong",{children:"нелистовой"})," (",t.jsx("strong",{children:"non-leaf"}),") узел."]}),t.jsx("p",{className:"mb-2",children:"В отличие от связных списков, указатели бинарного дерева могут указывать только в одном направлении. Таким образом, в бинарных деревьях не допускаются циклы. С математической точки зрения бинарное дерево представляет собой неориентированный граф без циклов. Это означает, что листовой узел всегда гарантированно существует."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"То же самое относится и к деревьям решений, которые используются в рекурсии."})}),t.jsx("p",{className:"mb-2",children:"В следующем разделе показано, как строятся бинарные деревья, и их терминология, которая имеет решающее значение для понимания проблем с бинарными деревьями."}),t.jsx("h2",{className:"font-bold my-2",children:"Свойства"}),t.jsxs("ul",{className:"mb-2",children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Корневой узел"}),t.jsx("p",{children:"Корневой узел является самым высоким узлом в дереве и не имеет родительского узла. Ко всем узлам дерева можно получить доступ через корневой узел."})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Листовые узлы"}),t.jsx("p",{className:"mb-2",children:"Листовые узлы — это узлы без дочерних элементов. Узлы на последнем уровне дерева гарантированно являются листовыми узлами, но их также можно найти на других уровнях."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Корневой и листовые узлы",className:"mx-auto",height:"459",src:nI,width:"660"})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Дети"}),t.jsx("p",{className:"mb-2",children:"Детьми узла являются его левый и правый дочерние узлы."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Родительский и дочерние узлы",className:"mx-auto",height:"459",src:rI,width:"720"})})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Высота"})," (",t.jsx("strong",{children:"Height"}),")",t.jsxs("p",{className:"mb-2",children:["Высота бинарного дерева измеряется от корневого узла до самого нижнего листового узла, как и высота чего-либо в реальной жизни. Высота дерева из одного узла составляет ",t.jsx("code",{children:"1"}),", если учитывается сам узел, или"," ",t.jsx("code",{children:"0"}),", если нет."]}),t.jsxs("p",{className:"mb-2",children:["Иногда высота считается по количеству рёбер, находящихся между узлами, а не по самим узлам. Используя этот метод, высота будет равна ",t.jsx("code",{children:"n - 1"}),", где"," ",t.jsx("code",{children:"n"})," — количество узлов на пути от корня до самого нижнего листа."]}),t.jsxs("p",{className:"mb-2",children:["Максимальная высота бинарного дерева, данного на изображении ниже, равна"," ",t.jsx("code",{children:"3"}),". Альтернативно, если бы мы считали по рёбрам, а не по узлам, высота была бы равна ",t.jsx("code",{children:"2"}),"."]}),t.jsx("p",{children:t.jsxs("strong",{children:["Количество рёбер в дереве равно"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," - 1"]}),", где"," ",t.jsx("code",{children:t.jsx("i",{children:"n"})})," ","— количество узлов."]})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Глубина"})," (",t.jsx("strong",{children:"Depth"}),")",t.jsxs("p",{className:"mb-2",children:["Глубина узла бинарного дерева измеряется от него самого до корня. Как видно на рисунке ниже, глубина в корневом узле равна ",t.jsx("code",{children:"1"}),", причём по мере спуска она увеличивается. Измерить глубину в определённом узле можно посмотрев, сколько узлов находится над ним, включая сам узел."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Высота и глубина бинарного дерева",className:"mx-auto",height:"459",src:iI,width:"1180"})})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Предок"})," (",t.jsx("strong",{children:"Ancestor"}),")",t.jsx("p",{children:"Узел, соединённый со всеми узлами ниже него, считается предком этих узлов."})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Потомок"})," (",t.jsx("strong",{children:"Descendent"}),")",t.jsx("p",{className:"mb-2",children:"Потомком узла является либо дочерний элемент узла, либо дочерний элемент какого-либо другого потомка узла."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Предок и потомки",className:"mx-auto",height:"459",src:sI,width:"630"})})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Хотя большая часть этой статьи посвящена определениям, эти термины имеют основополагающее значение для понимания, когда дело доходит до решения задач о бинарных деревьях, и они помогут нам в последующих статьях."})]})}const lI="/my-textbook/assets/breadth-first-search-AyPu5fAk.png",cI=`function bfs(root) {
  const queue = []; // представим, что это очередь, чтобы не занимать место реализацией очереди

  if (root) {
    queue.push(root);
  }

  let level = 0;

  while (queue.length > 0) {
    console.log('level' + level + ':');

    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const curr = queue.shift(); // представим, что это операция очереди dequeue

      console.log(curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    level++;
  }
}`;function dI(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsx("p",{className:"mb-2",children:"При поиске в глубину мы отдавали приоритет глубине. Для поиска в ширину (Breadth-first Search — BFS) мы отдаём приоритет ширине. Мы фокусируемся на посещении всех узлов на одном уровне, прежде чем перейти на следующий уровень."}),t.jsx("p",{className:"mb-2",children:"Как правило, поиск в ширину реализуется итеративно, и именно такую реализацию мы рассмотрим в этой статье. Вы можете написать этот алгоритм рекурсивно, но это намного сложнее."}),t.jsxs("p",{className:"mb-2",children:["BFS использует структуру данных «очередь», которая позволяет нам удалять элементы из головы за ",t.jsx("i",{children:"O"}),"(1) по времени. Скоро это обретёт смысл."]}),t.jsx("p",{className:"mb-2",children:"Псевдокод для BFS показан ниже."}),t.jsx(L,{value:cI}),t.jsxs("p",{className:"mb-2",children:["Возьмём для примера бинарное дерево ",t.jsx("code",{children:"[4, 3, 6, 2, null, 5, 7]"})," и применим алгоритм BFS. Помните, наша цель — посетить все узлы на одном уровне, прежде чем перейти к следующему."]}),t.jsxs("p",{className:"mb-2",children:["Если мы добавим наш корневой узел ",t.jsx("code",{children:"root"})," в нашу очередь и пройдёмся по очереди так, что в любой момент времени наша очередь будет содержать узлы только на определённом уровне, то мы гарантируем, что мы посещаем уровни по порядку, а также не перепутаем уровни. Это именно то, чего достигает код внутри цикла"," ",t.jsx("code",{children:"while"}),". Пока наша очередь не пуста, мы удаляем узлы, присутствующие в нашей очереди, и добавляем в очередь их дочерние узлы (что будет являться следующим уровнем). Поэтому, когда мы удаляем ",t.jsx("code",{children:"root"}),", мы добавляем в очередь его дочерние узлы, которые равны ",t.jsx("code",{children:"3"})," и ",t.jsx("code",{children:"6"}),". Затем мы удаляем ",t.jsx("code",{children:"3"})," и добавляем его дочерний узел ",t.jsx("code",{children:"2"}),". Затем мы удаляем ",t.jsx("code",{children:"6"})," и добавляем в очередь ",t.jsx("code",{children:"5"})," и ",t.jsx("code",{children:"7"}),". Из-за того, что очереди следуют принципу FIFO, мы гарантируем, что посещаем узлы слева направо."]}),t.jsx("p",{className:"mb-2",children:"Наша очередь становится пустой, как только мы посетим все узлы."}),t.jsx("p",{className:"mb-2",children:"На изображении ниже показано, как будет выглядеть состояние очереди на каждом уровне дерева."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск в ширину",className:"mx-auto",height:"459",src:lI,width:"780"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Технически, общая проделанная работа равна ",t.jsx("i",{children:"c"})," * ",t.jsx("i",{children:"n"}),", где ",t.jsx("i",{children:"n"})," — количество узлов в дереве, а ",t.jsx("i",{children:"c"})," — объем работы, выполняемой на каждом узле. Всего мы выполнили три операции для каждого узла — вывод в консоль, добавление узла и его удаление. Это то, что представляет собой ",t.jsx("i",{children:"c"}),". В случае асимптотического анализа мы можем отбросить эту константу, что означает, что сложность алгоритма по времени составит ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Поиск в ширину будет чрезвычайно полезен, когда дело дойдёт до обхода графа, что мы вскоре увидим."})]})}const uI="/my-textbook/assets/bst-insertion-LYgPRuuS.png",hI="/my-textbook/assets/bst-removal1-LORuFuPD.png",pI="/my-textbook/assets/bst-removal2-bCGl8aBr.png",mI="/my-textbook/assets/bst-removal3-KyYD62lT.png",fI=`function insert(root, value) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value > root.value) {
    root.right = insert(root.right, value);
  } else if (value < root.value) {
    root.left = insert(root.left, value);
  }

  return root; 
}`,gI=`function minValueNode(root) {
  let curr = root;
  
  while (curr && cur.left !== null) {
    curr = curr.left;
  }

  return curr;
}

function remove(root, value) {
  if (root === null) {
    return null;
  }

  if (value > root.value) {
    root.right = remove(root.right, value);
  } else if (value < root.value) {
    root.left = remove(root.left, value);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      const minNode = minValueNode(root.right);
      root.value = minNode.value;
      root.right = remove(root.right, minNode.value);
    }
  }

  return root;
}`;function bI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Ранее мы упоминали, что основным преимуществом использования бинарных деревьев поиска (BST) по сравнению с отсортированными массивами является то, что мы можем выполнять удаление и вставку за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),") по времени, при условии, что дерево сбалансировано. Давайте углубимся в вставку и удаление."]}),t.jsx("h2",{className:"font-bold my-2",children:"Вставка"}),t.jsx("p",{className:"mb-2",children:"Если мы хотим вставить новый узел в BST, нам сначала нужно пройти по BST, чтобы найти правильную позицию для вставки, а затем вставить этот узел."}),t.jsxs("p",{className:"mb-2",children:["Если у нас есть BST ",t.jsx("code",{children:"[4]"})," и мы хотим вставить ",t.jsx("code",{children:"6"}),", то мы могли бы получить либо ",t.jsx("code",{children:"[4, null, 6]"}),", либо ",t.jsx("code",{children:"[6, 4, null]"}),". Оба из этих вариантов будут валидными BST. В первом примере мы добавили"," ",t.jsx("code",{children:"6"})," в качестве листового узла, что проще, чем добавление ",t.jsx("code",{children:"6"})," ","в корень, что показано во втором примере."]}),t.jsxs("p",{className:"mb-2",children:["Давайте добавим ",t.jsx("code",{children:"5"})," к полученному ранее дереву"," ",t.jsx("code",{children:"[4, null, 6]"}),", в результате чего получится"," ",t.jsx("code",{children:"[4, null, 6, 5, null]"}),"."]}),t.jsx("p",{className:"mb-2",children:"Этот процесс продемонстрирован приведённым ниже псевдокодом."}),t.jsx(L,{value:fI}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Вставка в бинарное дерево поиска",className:"mx-auto",height:"380",src:uI,width:"840"})}),t.jsxs("p",{className:"mb-2",children:["На изображении выше показано, как выполняется вставка. ",t.jsx("code",{children:"6"})," больше корневого узла, поэтому она попадает в правое поддерево. ",t.jsx("code",{children:"5"})," больше корневого узла, но меньше ",t.jsx("code",{children:"6"}),", так что она попадает в левое поддерево дерева с корнем в ",t.jsx("code",{children:"6"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Удаление"}),t.jsx("p",{className:"mb-2",children:"Прежде чем удалить узел из BST, нам необходимо рассмотреть два случая:"}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsx("li",{children:"Удаляемый узел имеет 0 или 1 дочерний узел"}),t.jsx("li",{children:"Удаляемый узел имеет 2 дочерних узла"})]}),t.jsx("h2",{className:"font-bold my-2",children:"Случай 1 - удаляемый узел имеет один дочерний узел, либо не имеет дочерних узлов"}),t.jsxs("p",{className:"mb-2",children:["Если мы хотим удалить узел ",t.jsx("code",{children:"2"}),", у которого нет дочерних узлов, то указатель ",t.jsx("code",{children:"left"})," узла ",t.jsx("code",{children:"3"})," теперь будет указывать на"," ",t.jsx("code",{children:"null"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление узла, у которого нет детей",className:"mx-auto",height:"480",src:hI,width:"1260"})}),t.jsxs("p",{className:"mb-2",children:["Если мы хотим удалить узел ",t.jsx("code",{children:"3"}),", у которого есть один дочерний узел, указатель ",t.jsx("code",{children:"left"})," корневого узла теперь будет указывать на"," ",t.jsx("code",{children:"2"})," вместо ",t.jsx("code",{children:"3"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление узла, у которого один дочерний узел",className:"mx-auto",height:"480",src:pI,width:"1260"})}),t.jsx("h2",{className:"font-bold my-2",children:"Случай 2 - удаляемый узел имеет два дочерних узла"}),t.jsxs("p",{className:"mb-2",children:["Если мы хотим удалить узел c двумя дочерними узлами, скажем, ",t.jsx("code",{children:"6"}),", мы заменяем этот узел его ",t.jsx("strong",{children:"последовательным преемником"}),"."]}),t.jsx("p",{className:"mb-2",children:"Последовательным преемником является самый левый узел в правом поддереве удаляемого узла. По-другому можно сказать, что это наименьший узел среди всех узлов, которые больше удаляемого узла. Это гарантирует, что полученное дерево по-прежнему будет валидным бинарным деревом поиска."}),t.jsx("p",{className:"mb-2",children:"На рисунке ниже показан процесс удаления узлов с двумя дочерними узлами."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление узла, у которого два дочерних узла",className:"mx-auto",height:"500",src:mI,width:"1360"})}),t.jsx(L,{value:gI}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени для этих операций составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),"), если дерево является сбалансированным. В противном случае сложность будет составлять"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]})]})}const xI="/my-textbook/assets/bucketSort-9wm64IAT.png",EI=`function bucketSort(array) {
  // предполагается, что array содержит только 0, 1 или 2
  const counts = [0, 0, 0];

  for (let i = 0; i < array.length; i++) {
      counts[array[i]]++;
  }

  let i = 0;
  for (let n = 0; n < counts.length; n++) {
      for (let j = 0; j < counts[n]; j++) {
          array[i] = n;
          i++;
      }
  }

  return array;
}`,TI=`let i = 0;
for (let n = 0; n < counts.length; n++) {
  for (let j = 0; j < counts[n]; j++) {
    array[i] = n;
    i++;
  }
}`;function yI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Это последний алгоритм сортировки, который мы рассмотрим, и он довольно важен. Он не так популярен и не так широко используется, как предыдущие алгоритмы, которые мы рассмотрели. Блочная (карманная, корзинная) сортировка работает отлично, когда сортируемый набор данных имеет значения ",t.jsx("strong",{children:"в определённом диапазоне"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsxs("p",{className:"mb-2",children:["Представьте, что у нас есть массив из ",t.jsx("code",{children:"6"})," элементов, который содержит значения диапазона ",t.jsx("code",{children:"0 — 2"}),". Идея блочной сортировки состоит в том, чтобы создать «блок» для каждого числа и сопоставить числа с соответствующими блоками."]}),t.jsxs("p",{className:"mb-2",children:["У нас будут блоки для ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"1"})," и ",t.jsx("code",{children:"2"}),". Эти блоки, которые представляют собой просто позицию в нашем массиве, будет содержать частоту каждого из значений в пределах диапазона. В этом примере у нас есть только три значения и, соответственно, у нас будет три блока."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Термин «блок» на самом деле просто обозначет позицию в массиве, где мы будем отображать эту частоту."})}),t.jsx("p",{className:"mb-2",children:"Как только каждый блок будет заполнен частотой каждого из значений, мы перезапишем все значения в исходном массиве так, чтобы они оказались в отсортированном порядке. Это имеет больше смысла, если посмотреть на псевдокод ниже:"}),t.jsx(L,{value:EI}),t.jsxs("p",{className:"mb-2",children:["Первая часть псевдокода, прямо перед тем, как мы делаем ",t.jsx("code",{children:"i = 0"}),", относится к заполнению каждого из блоков. Давайте рассмотрим вторую часть немного подробнее."]}),t.jsx(L,{value:TI}),t.jsxs("ul",{className:"list-disc list-inside mb-2",children:[t.jsxs("li",{children:["Указатель ",t.jsx("code",{children:"i"})," будет отслеживать следующую позицию вставки для нашего исходного массива ",t.jsx("code",{children:"array"}),"."]}),t.jsxs("li",{children:["Указатель ",t.jsx("code",{children:"n"})," отслеживает текущую позицию массива ",t.jsx("code",{children:"counts"}),"."]}),t.jsxs("li",{children:["Указатель ",t.jsx("code",{children:"j"})," отслеживает количество раз, когда в ",t.jsx("code",{children:"array"})," ","появлялся ",t.jsx("code",{children:"counts[n]"}),"."]})]}),t.jsxs("p",{className:"mb-2",children:["Итак, зная это, у нас есть массив ",t.jsx("code",{children:"counts = [2, 1, 3]"}),". И наш исходный массив ",t.jsx("code",{children:"[2, 1, 2, 0, 0, 2]"}),"."]}),t.jsxs("p",{className:"mb-2",children:["На первой итерации ",t.jsx("code",{children:"n = 0"}),", что соответствует ",t.jsx("code",{children:"2"})," в"," ",t.jsx("code",{children:"counts"}),". Наш внутренний цикл выполнится два раза, перезаписав"," ",t.jsx("code",{children:"array[0]"})," и ",t.jsx("code",{children:"array[1]"})," на ",t.jsx("code",{children:"0"}),". Это имеет смысл, поскольку у нас было два нуля, и размещение их в ",t.jsx("code",{children:"array"})," рядом друг с другом приведёт к их сортировке. Этот процесс будет продолжаться для каждого числа, и конечным состоянием ",t.jsx("code",{children:"array"})," будет"," ",t.jsx("code",{children:"[0, 0, 1, 2, 2, 2]"}),", что и является конечной целью."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Блочная сортировка",className:"mx-auto",height:"560",src:xI,width:"1170"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Вы можете посмотреть на вложенный цикл ",t.jsx("code",{children:"for"})," и сразу же подумать, что это ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"). Это не совсем правильно. Давайте проведём некоторый анализ. Мы знаем, что для первого цикла ",t.jsx("code",{children:"for"})," мы выполним ",t.jsx("i",{children:"n"})," шагов, поскольку мы проходим через все элементы и подсчитываем частоту."]}),t.jsxs("p",{className:"mb-2",children:["Второй цикл ",t.jsx("code",{children:"for"})," совершит ",t.jsx("i",{children:"n"})," итераций, где ",t.jsx("i",{children:"n"})," — длина массива ",t.jsx("code",{children:"counts"}),". Однако внутренний цикл выполнит только"," ",t.jsx("code",{children:"counts[n]"})," итераций, количество которых каждый раз разное. В первый раз их количество будет ",t.jsx("code",{children:"2"}),", затем ",t.jsx("code",{children:"1"}),", и затем"," ",t.jsx("code",{children:"3"}),". Следовательно, сложность по времени нашего алгоритма составит"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Следует отметить, что вложенные циклы ",t.jsx("code",{children:"for"})," не всегда означают сложность по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"). Как мы видели выше, важно проанализировать, сколько раз внутренний цикл ",t.jsx("code",{children:"for"})," выполняется на каждой итерации внешнего цикла"," ",t.jsx("code",{children:"for"}),"."]})}),t.jsx("h2",{className:"font-bold my-2",children:"Устойчивость"}),t.jsx("p",{className:"mb-2",children:"Поскольку мы перезаписываем исходный массив, сохранить относительный порядок значений невозможно. Никакой перестановки тоже не происходит. Следовательно, блочная сортировка является неустойчивой."}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("p",{className:"mb-2",children:["Таким образом, хотя сложность по времени алгоритма блочной сортировки составляет"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), мы должны помнить, что он будет работать только в том случае, если набор данных находится в пределах определённого диапазона. Как правило, при решении алгоритмических задач самым надёжным вариантом является использование сортировки слиянием, быстрой сортировки или сортировки вставками (для небольших и почти отсортированных наборов данных), что используется встроенными методами сортировки в языках программирования, а иногда и гибрид всех трёх."]}),t.jsx("p",{className:"mb-2",children:"Теперь, когда мы рассмотрели все алгоритмы сортировки, ниже подведём итоги времени выполнения:"}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Алгоритм"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Примечания"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Сортировка вставками"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")*"]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:["Если полностью или почти отсортированно — ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Сортировка слиянием"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),")"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Быстрая сортировка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),")",t.jsx("sup",{children:"*"})]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:["Выбор наибольшего или наименьшего элемента в качестве опорного, например, обратная сортировка — ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Блочная сортировка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")*"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Предполагается, что у вас есть значения в указанном диапазоне"})]})]})]})]})}const SI="/my-textbook/assets/combinations-RlTQ1oA2.png",NI=`function combinations(n, k) {
  const combs = [];
  helper(1, [], combs, n, k);
  return combs;
}

function helper(i, curComb, combs, n, k) {
  if (curComb.length === k) {
    combs.push([...curComb]);
    return;
  }

  if (i > n) {
    return;
  }

  // путь, по которому мы включаем i
  curComb.push(i);
  helper(i + 1, curComb, combs, n, k);
  curComb.pop();
  
  // путь, по которому мы НЕ включаем i
  helper(i + 1, curComb, combs, n, k);
}`,_I=`function combinations2(n, k) {
  const combs = [];
  helper2(1, [], combs, n, k);
  return combs;
}

function helper2(i, curComb, combs, n, k) {
  if (curComb.length === k) {
    combs.push([...curComb]);
    return;
  }

  if (i > n) {
    return;
  }

  for (let j = i; j < n + 1; j++) {
    curComb.push(j);
    helper2(j + 1, curComb, combs, n, k);
    curComb.pop();
  }
}`;function AI(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsxs("p",{className:"mb-2",children:["С математической точки зрения, сочетания имеют то же определение, что и подмножества. Порядок, в котором мы размещаем элементы, не имеет значения. Существует очень аккуратная математическая формула для расчёта количества возможных сочетаний размера ",t.jsx("i",{children:"k"})," при заданном ",t.jsx("i",{children:"n"}),", которая, хотя и не так уместна для сочетаний в информатике, все же актуальна. Поясним это на примере."]}),t.jsx("h2",{className:"font-bold my-2",children:"Пример использования сочетаний"}),t.jsx("p",{className:"mb-2",children:"Предположим, перед нами стоит следующая задача:"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Даны два числа ",t.jsx("i",{children:"n"})," и ",t.jsx("i",{children:"k"}),", верните все возможные сочетания размера"," ",t.jsx("i",{children:"k"}),", выбирая из значений от ",t.jsx("code",{children:"1"})," до ",t.jsx("i",{children:"n"}),"."]})}),t.jsxs("p",{className:"mb-2",children:["Предположим, что ",t.jsx("i",{children:"n"})," = ",t.jsx("code",{children:"5"})," и ",t.jsx("i",{children:"k"})," = ",t.jsx("code",{children:"2"}),". Другими словами, вопрос звучит так: «сколько существует способов выбрать уникальные подмножества размера ",t.jsx("code",{children:"2"})," из множества чисел в диапазоне от"," ",t.jsx("code",{children:"1"})," до ",t.jsx("code",{children:"5"}),"?». Ограничением здесь является то, что наши сочетания могут иметь размер только ",t.jsx("code",{children:"2"}),". Напомним, что одно и то же сочетание с элементами, расположенными в другом порядке, не считается, т. е."," ",t.jsx("code",{children:"[2, 1]"})," и ",t.jsx("code",{children:"[1, 2]"})," считаются за ",t.jsx("code",{children:"1"})," уникальное сочетание."]}),t.jsx("p",{className:"mb-2",children:"Итак, как нам решить эту проблему в коде? Есть два подхода."}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Тривиальный подход"}),t.jsxs("p",{className:"mb-2",children:["Этот подход аналогичен подходу к подмножествам. Мы проходим через"," ",t.jsx("code",{children:"1 − 5"})," в нашем дереве решений и принимаем решение включить или исключить текущее число, в котором мы находимся. Здесь мы ограничены количеством элементов, которые нам разрешено включать в наше сочетание. Поскольку ",t.jsx("i",{children:"k"})," = ",t.jsx("code",{children:"2"}),", наш базовый случай срабатывает, когда"," ",t.jsx("code",{children:"curComb.length === k"}),". Вот почему, когда мы достигаем"," ",t.jsx("code",{children:"[1, 2]"}),", нам не нужно идти дальше."]}),t.jsxs("p",{className:"mb-2",children:["Проблема с этим подходом заключается в том, что высота дерева станет ",t.jsx("i",{children:"n"}),", где ",t.jsx("i",{children:"n"})," — длина нашего стека рекурсивных вызовов. Это связано с тем, что в худшем случае нам, возможно, придётся пройти через весь диапазон значений, пока мы не достигнем базового случая."]}),t.jsxs("p",{className:"mb-2",children:["Построение каждого сочетания требует работы ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"k"}),"). Это даёт нам верхнюю границу ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"k"})," ⋅ 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"), которая является приблизительной. В предыдущей статье мы не были ограничены количеством элементов, которые могли быть в каждом множестве, поэтому у нас была сложность ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ⋅ 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"). Давайте рассмотрим реализацию этой техники, прежде чем перейти к более эффективному решению."]}),t.jsx(L,{value:NI}),t.jsxs("p",{className:"mb-2",children:["Вы можете заметить, что приведенный выше код очень похож на код из статьи о подмножествах, и вы будете правы. Тем не менее, есть небольшие различия. В нашей функции ",t.jsx("code",{children:"helper"})," ",t.jsx("code",{children:"i"})," обозначает текущее число в диапазоне, ",t.jsx("code",{children:"curComb"})," представляет текущее сочетание,"," ",t.jsx("code",{children:"combs"})," представляет список списков, которые будут содержать каждый"," ",t.jsx("code",{children:"curComb"}),". ",t.jsx("code",{children:"k"})," представляет размер каждого сочетания, содержащего элементы, выбранные из диапазона, доходящего до ",t.jsx("code",{children:"n"}),". Наш базовый случай срабатывает, когда длина ",t.jsx("code",{children:"curComb"})," достигает"," ",t.jsx("code",{children:"k"}),". Изучив каждый ",t.jsx("code",{children:"i"}),", мы возвращаемся назад и исследуем другие сочетания, исключающие ",t.jsx("code",{children:"i"}),". Повторяем это до тех пор, пока ",t.jsx("code",{children:"i <= n"}),"."]})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Оптимизированный подход"}),t.jsxs("p",{className:"mb-2",children:["В начале этой статьи мы упомянули, что существует изящная математическая формула для определения количества сочетаний. Формула выглядит следующим образом и является более эффективной, чем ",t.jsx("i",{children:"k"})," ⋅ 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),":"," ",t.jsxs("span",{className:"after:absolute after:content-['.'] after:leading-[0.25rem] after:left-full after:ml-0.5 after:rotate-180 after:top-1/2 flex flex-col items-center relative text-sm w-max",children:[t.jsxs("span",{children:[t.jsx("i",{children:"n"}),"!"]}),t.jsx("span",{className:"bg-black h-px w-full"}),t.jsxs("span",{children:[t.jsx("i",{children:"k"}),"!(",t.jsx("i",{children:"n"})," - ",t.jsx("i",{children:"k"}),")!"]})]})]}),t.jsxs("p",{className:"mb-2",children:["При таком подходе мы можем создать каждое нужное нам сочетание, не идя по пути, где мы не создаём ни одного допустимого сочетания. Но нам также нужно следить за дубликатами. Итак, для каждого ",t.jsx("code",{children:"i"})," мы хотим включать только числа, следующие за ним. Это помогает нам избежать дублирования в наших сочетаниях. Это также гарантирует, что у нас не будет дерева решений размера"," ",t.jsx("i",{children:"n"}),". На каждом шаге мы выбираем число, т. е. мы никогда не выбираем число. Поскольку мы никогда не используем значение повторно, каждая ветвь приводит к появлению различных сочетаний, которые выглядят следующим образом:"]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Все возможные сочетания",className:"mx-auto",height:"240",src:SI,width:"680"})}),t.jsxs("p",{className:"mb-2",children:["Если"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," = 5"]})," ","и"," ",t.jsxs("code",{children:[t.jsx("i",{children:"k"})," = 2"]}),", мы получаем ",t.jsx("code",{children:"5! / (2! * (5 - 2)!) = 10"})]}),t.jsx(L,{value:_I})]})]})]})}const jI="/my-textbook/assets/depth-first-search-inorder-FKvqs0fv.png",vI="/my-textbook/assets/depth-first-search-preorder-ikEtnaVk.png",wI="/my-textbook/assets/depth-first-search-postorder-rjoQ4Zoe.png",RI=`function inorder(root) {
  if (root === null) {
    return;
  }

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}`,II=`function preorder(root) {
  if (root === null) {
    return;
  }

  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}`,CI=`function postorder(root) {
  if (root === null) {
    return;
  }

  preorder(root.left);
  preorder(root.right);
  console.log(root.val);
}`;function kI(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Поиск в глубину (Depth-first Search — DFS) — это способ обхода бинарных деревьев поиска, в котором приоритет отдаётся глубине, а не ширине."}),t.jsxs("p",{className:"mb-2",children:["Идея состоит в том, чтобы продолжать перемещаться либо по левому поддереву, либо по правому поддереву до тех пор, пока не останется больше узлов. Существуют различные методы, с помощью которых выполняется поиск в глубину. Эти методы посещают узлы ",t.jsx("code",{children:"root"}),", ",t.jsx("code",{children:"left"})," и ",t.jsx("code",{children:"right"})," в разном порядке. Эти три метода:"]}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsx("li",{children:"Inorder (центрированный)"}),t.jsx("li",{children:"Preorder (прямой)"}),t.jsx("li",{children:"Postorder (обратный)"})]}),t.jsx("p",{className:"mb-2",children:"Поиск в глубину лучше всего реализовать с помощью рекурсии. Опять же, вы можете использовать стек и делать это итеративно, но это намного сложнее."}),t.jsxs("p",{className:"mb-2",children:["Возьмём дерево с узлами ",t.jsx("code",{children:"[4, 3, 6, 2, null, 5, 7]"}),", идущими слева направо."]}),t.jsx("h2",{className:"font-bold my-2",children:"Центрированный обход"}),t.jsxs("p",{className:"mb-2",children:["Центрированный обход с приоритетом левого поддерева над правым сначала посещает дочерний узел ",t.jsx("code",{children:"left"}),", затем родительский узел, а затем дочерний узел"," ",t.jsx("code",{children:"right"}),". Центрированный обход приведёт к посещению узлов в отсортированном порядке."]}),t.jsx(L,{value:RI}),t.jsxs("p",{className:"mb-2",children:["Порядок посещения этих узлов — ",t.jsx("code",{children:"[2, 3, 4, 5, 6, 7]"}),", он является отсортированным. Важно отметить, что это работает только тогда, когда левое поддерево имеет приоритет над правым. Если правое будет иметь приоритет над левым, мы получим массив, отсортированный в обратном порядке."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Причина, по которой узлы будут выводиться в отсортированном виде, связана со свойством BST. Поскольку мы знаем, что все значения слева от узла меньше, это означает, что мы не достигнем базового случая, пока не достигнем самого левого узла, который также является самым маленьким узлом. После посещения самого левого узла мы пройдём вверх, посетим родителя, а затем посетим правое поддерево. На изображении ниже показан этот процесс."})}),t.jsx("p",{className:"mb-2",children:"Порядок посещения узлов представлен цифрами синего цвета рядом с узлом."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Центрированный обход в глубину",className:"mx-auto",height:"480",src:jI,width:"400"})}),t.jsx("h2",{className:"font-bold my-2",children:"Прямой обход"}),t.jsxs("p",{className:"mb-2",children:["Прямой обход с приоритетом левого поддерева над правым посещает родителя, дочерний узел ",t.jsx("code",{children:"left"}),", а затем дочерний узел ",t.jsx("code",{children:"right"}),"."]}),t.jsx(L,{value:II}),t.jsxs("p",{className:"mb-2",children:["Узлы посещаются в следующем порядке: ",t.jsx("code",{children:"[4, 3, 2, 6, 5, 7]"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Прямой обход в глубину",className:"mx-auto",height:"480",src:vI,width:"400"})}),t.jsx("h2",{className:"font-bold my-2",children:"Обратный обход"}),t.jsxs("p",{className:"mb-2",children:["Обратный обход с приоритетом левого поддерева над правым посещает дочерний узел"," ",t.jsx("code",{children:"left"}),", дочерний узел ",t.jsx("code",{children:"right"}),", а затем родителя."]}),t.jsx(L,{value:CI}),t.jsxs("p",{className:"mb-2",children:["Узлы посещаются в следующем порядке: ",t.jsx("code",{children:"[2, 3, 5, 7, 6, 4]"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Обратный обход в глубину",className:"mx-auto",height:"480",src:wI,width:"400"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Мы знаем, что нам нужно посетить каждый узел дерева, и если в дереве ",t.jsx("i",{children:"n"})," ","узлов, алгоритм будет работать за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsxs("p",{className:"mb-2",children:["Ещё один интересный момент заключается в том, что мы могли бы отсортировать массив, используя бинарное дерево. Сначала нам нужно будет построить дерево и вставить каждое значение. Мы знаем, что существует ",t.jsx("i",{children:"n"})," значений, и вставка значения в бинарное дерево занимает ",t.jsx("i",{children:"log n"})," времени. Следовательно, весь процесс построения дерева составит ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),"). Обход дерева займёт всего ",t.jsx("i",{children:"n"})," шагов, поэтому в общей сложности это будет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," +"," ",t.jsx("i",{children:"n log n"}),")."]}),t.jsxs("p",{className:"mb-2",children:["Константы не принимаются во внимание. Мы также знаем, что ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),") будет расти быстрее, чем ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), поэтому мы можем установить верхнюю границу на уровне ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Теперь, когда мы увидели, как дерево проходится в глубину, давайте посмотрим, как оно проходится, когда мы в первую очередь расставляем приоритеты по ширине."})]})}const OI="/my-textbook/assets/list-node2-OhtOJ6gX.png",LI="/my-textbook/assets/doubly-linked-list-appending1-ADyTXC7-.png",DI="/my-textbook/assets/doubly-linked-list-appending2-ezH_oSB4.png",MI="/my-textbook/assets/doubly-linked-list-deletion-iU285AVX.png",FI=`tail.next = ListNode4;
ListNode4.prev = tail;
tail = tail.next;`,PI=`ListNode2.next = null;
tail = ListNode2;`;function UI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Рассмотрев связные списки, давайте теперь узнаем об их разновидности — двусвязных списках. Как следует из названия, они называются двусвязными, поскольку каждый узел теперь имеет два указателя. В дополнение к указателю ",t.jsx("code",{children:"next"})," у нас есть указатель ",t.jsx("code",{children:"prev"}),", который указывает на предыдущий узел. Если указатель ",t.jsx("code",{children:"prev"})," указывает на ",t.jsx("code",{children:"null"}),", то это означает, что мы находимся в начале связного списка."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Узел списка",className:"mx-auto",height:"320",src:OI,width:"1200"})}),t.jsx("h2",{className:"font-bold my-2",children:"Операции двусвязного списка"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Вставка"}),t.jsxs("p",{className:"mb-2",children:["Как и в случае со связным списком, добавление узла в двусвязный список будет выполняться за ",t.jsx("i",{children:"O"}),"(1) по времени. Только на этот раз нам также нужно обновить указатель ",t.jsx("code",{children:"prev"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Например, если посмотреть на картинку ниже, в нашем связном списке есть три узла: ",t.jsx("code",{children:"ListNode1"}),", ",t.jsx("code",{children:"ListNode2"})," и ",t.jsx("code",{children:"ListNode3"}),". Также у нас есть ещё один узел ",t.jsx("code",{children:"ListNode4"}),", который мы ходим вставить в список. Мы знаем, что нам придётся обновить указатель"," ",t.jsx("code",{children:"next"})," узла ",t.jsx("code",{children:"ListNode3"})," и указатель ",t.jsx("code",{children:"prev"})," ","узла ",t.jsx("code",{children:"ListNode4"}),". Псевдокод ниже демонстрирует это вместе с пошаговым визуальным представлением:"]}),t.jsx(L,{value:FI}),t.jsx("img",{alt:"Добавление нового узла",className:"mb-2",height:"400",src:LI,width:"1839"}),t.jsx("img",{alt:"Добавление нового узла в цепочку",height:"1080",src:DI,width:"1839"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Удаление"}),t.jsxs("p",{className:"mb-2",children:["Возвращаясь к примеру с тремя узлами, удаление также выполняется за ",t.jsx("i",{children:"O"}),"(1) по времени. Никакого сдвига или перемещения не требуется. Вместо этого, в этом случае требуется корректировка указателя ",t.jsx("code",{children:"prev"}),". Псевдокод ниже демонстрирует это вместе с визуальным представлением:"]}),t.jsx(L,{value:PI}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление узла",className:"mx-auto",height:"1160",src:MI,width:"1320"})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Возможно, вы догадались, что обе операции добавления и удаления из конца связных списков выполняются за ",t.jsx("i",{children:"O"}),"(1), что похоже на операции"," ",t.jsx("code",{children:"push"})," и ",t.jsx("code",{children:"pop"})," в стеке. Стек — это всего лишь абстрактный интерфейс, который также можно реализовать с помощью связных списков."]})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Если на желаемый узел не указывают ",t.jsx("code",{children:"head"})," или ",t.jsx("code",{children:"tail"}),", то необходимо добраться до узла перед удалением, что займёт ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") по времени."]})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Доступ"}),t.jsxs("p",{className:"mb-2",children:["Подобно связным списком, мы не можем получить произвольный узел. Так что в худшем случае нам придётся обойти ",t.jsx("i",{children:"n"})," узлов до достижения желаемого узла. Эта операция занимает ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") по времени."]})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги:"}),t.jsxs("p",{className:"mb-2",children:["Эта статья может показаться более знакомой, чем ожидалось, но это потому, что единственное существенное различие между связными и двусвязными списками заключается в том, что двусвязный список имеет указатель ",t.jsx("code",{children:"prev"}),", что требует больше операций при вставке и удалении узлов."]}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Примечания"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Доступ"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Поиск"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Вставка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Предполагая, что у вас есть ссылка на узел в желаемой позиции"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Предполагая, что у вас есть ссылка на узел в желаемой позиции"})]})]})]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["По сравнению с массивами связные списки менее эффективны при доступе к случайному элементу из-за отсутствия встроенного индекса. Таким образом, массивы будут иметь доступ за ",t.jsx("i",{children:"O"}),"(1) по времени во всех случаях, а связные списки — за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), если только вы не хотите получить доступ к узлу"," ",t.jsx("code",{children:"head"})," или ",t.jsx("code",{children:"tail"}),"."]})})]})}const BI="/my-textbook/assets/middle-of-the-list-odd-rpL0Hob-.png",HI="/my-textbook/assets/middle-of-the-list-even-vuBTLjlo.png",GI="/my-textbook/assets/linked-list-cycle-detection-PLF0jNbQ.png",$I="/my-textbook/assets/linked-list-cycle-start-detection-gsNmky39.png",zI=`function middleOfList(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}`,VI=`function hasCycle(head) {
  const visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return true;
    }

    visited.add(head);

    head = head.next;
  }

  return false;
}`,WI=`function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}`,qI=`function cycleStart(head) {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  let slow2 = head;
  
  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
}`;function KI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Мы можем использовать метод двух указателей при работе со связными списками. Указатели могут начинаться в одном и том же месте или даже в разных местах, а затем мы будем перемещать их с разной скоростью. Обычно есть указатели"," ",t.jsx("code",{children:"fast"})," и ",t.jsx("code",{children:"slow"}),". Указатель ",t.jsx("code",{children:"fast"})," движется в два раза быстрее, чем указатель ",t.jsx("code",{children:"slow"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Примеры использования быстрых и медленных указателей"}),t.jsx("p",{className:"mb-2",children:"Рассмотрим несколько примеров, демонстрирующих эту технику."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Задача: найти середину связного списка."})}),t.jsxs("p",{className:"mb-2",children:["Решение методом грубой силы заключается в том, чтобы перебрать весь связный список и, используя переменную, скажем, ",t.jsx("code",{children:"length"}),", отслеживать длину. Затем мы можем запустить цикл ",t.jsx("code",{children:"for"})," до ",t.jsx("code",{children:"length / 2"}),", и когда мы выйдем из цикла ",t.jsx("code",{children:"for"}),", мы достигнем середины."]}),t.jsxs("p",{className:"mb-2",children:["Это решение работает, но оно не элегантно. Лучший и более эффективный способ — разместить два указателя в начале связного списка. Наш указатель ",t.jsx("code",{children:"fast"})," ","движется в два раза быстрее, чем указатель ",t.jsx("code",{children:"slow"}),". К тому времени, когда указатель ",t.jsx("code",{children:"fast"})," дойдёт до конца, указатель ",t.jsx("code",{children:"slow"})," ","окажется в середине связного списка. Это имеет смысл, поскольку если медленный указатель движется со скоростью, вдвое меньшей скорости указателя"," ",t.jsx("code",{children:"fast"}),", и указатель ",t.jsx("code",{children:"fast"})," достиг конца, то медленный указатель должен находиться посередине."]}),t.jsx(L,{value:zI}),t.jsx("p",{className:"mb-2",children:"Для связных списков нечётной длины мы можем начать оба указателя в одном и том же месте."}),t.jsx("img",{alt:"Поиск середины списка нечётной длины",className:"mb-2",height:"201",src:BI,width:"1880"}),t.jsxs("p",{className:"mb-2",children:["Для связных списков чётной длины середина может быть одним из двух узлов. Мы можем выбрать любой из узлов в качестве середины. На демонстрации ниже выбор"," ",t.jsx("code",{children:"3"})," означает, что указатели ",t.jsx("code",{children:"fast"})," и ",t.jsx("code",{children:"slow"})," ","начинаются с ",t.jsx("code",{children:"head"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Однако, выбор ",t.jsx("code",{children:"2"})," означает, что ",t.jsx("code",{children:"fast"})," начинается с"," ",t.jsx("code",{children:"slow.next"}),", что имеет смысл, поскольку, если ",t.jsx("code",{children:"fast"})," ","начинается дальше ",t.jsx("code",{children:"slow"}),", он дойдёт до конца быстрее."]}),t.jsx("img",{alt:"Поиск середины списка чётной длины",className:"mb-2",height:"441",src:HI,width:"1880"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Что произойдёт, если цикл ",t.jsx("code",{children:"while"})," будет проверять только наличие"," ",t.jsx("code",{children:"fast"}),", без ",t.jsx("code",{children:"fast.next"}),"? Мы получим ошибку. Это связано с тем, что к тому времени, когда быстрый указатель достигает последнего узла в связном списке, ",t.jsx("code",{children:"fast.next === null"}),", что означает, что когда мы попытаемся выполнить ",t.jsx("code",{children:"fast = fast.next.next"})," в блоке"," ",t.jsx("code",{children:"while"}),", мы вызываем ",t.jsx("code",{children:"null.next"}),", чего на самом деле не существует!"]})}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени для приведённого выше составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), где"," ",t.jsx("i",{children:"n"})," — это длина связного списка. Сложность по памяти составляет ",t.jsx("i",{children:"O"}),"(1)."]}),t.jsx("h2",{className:"font-bold my-2",children:"Обнаружение цикла"}),t.jsxs("p",{className:"mb-2",children:["Используя приведённую выше концепцию, мы также можем обнаруживать циклы в наших связных списках. Это связано с тем, что если в нашем связном списке есть цикл, наш быстрый указатель в конечном итоге догонит медленный указатель, поскольку он никогда не станет ",t.jsx("code",{children:"null"}),". Это также называют алгоритмом «черепахи и зайца» Флойда. Представьте себе, что черепаха и заяц стартуют с одной и той же позиции на круговой беговой дорожке. Заяц движется в два раза быстрее черепахи. Поскольку поле круглое, в какой-то момент заяц пройдёт мимо черепахи."]}),t.jsxs("p",{className:"mb-2",children:["В этом заключается идея использования быстрых и медленных указателей при обнаружении цикла. Мы начинаем наши указатели ",t.jsx("code",{children:"slow"})," и"," ",t.jsx("code",{children:"fast"})," с начала связного списка. Если наши указатели ",t.jsx("code",{children:"slow"})," ","и ",t.jsx("code",{children:"fast"})," встречаются, мы знаем, что существует цикл."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Задача: определить, существует ли в связном списке цикл."})}),t.jsxs("p",{className:"mb-2",children:["Возможно, вы поняли, что это похоже на обнаружение дубликатов в массиве. По сути, если мы встречаем узел, который уже видели, то у нас должен быть цикл. Технически мы могли бы использовать ",t.jsx("code",{children:"Set"})," для обнаружения цикла. Мы бы хранили все наши узлы (ссылку на объект, а не значение, поскольку несколько узлов могут иметь одинаковые значения) в нашем ",t.jsx("code",{children:"Set"})," и проверяли наличие каждого узла в нём."]}),t.jsx(L,{value:VI}),t.jsxs("p",{className:"mb-2",children:["Хотя это будет работать, такое решение занимает больше места, ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Решение, представленное ниже, более эффективно. Идея состоит в том, что если цикл действительно существует, наш быстрый указатель в конечном итоге встретится с медленным указателем. Они всегда будут встречаться, и быстрый указатель не пропустит медленный указатель, потому что на каждой итерации быстрый указатель приближается на одну позицию к медленному указателю. Так, на демонстрации ниже, начиная с шага 2, быстрый указатель находится на 3 позиции позади медленного указателя. На шаге 3 он отстаёт на 2 позиции, на шаге 4 — на одну позицию, после чего догоняет медленный указатель на шаге 5."]}),t.jsx(L,{value:WI}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Обнаружение цикла в списке",className:"mx-auto",height:"801",src:GI,width:"1401"})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Задача: определить, существует ли в связном списке цикл, и вернуть узел, в котором он начинается."})}),t.jsxs("p",{className:"mb-2",children:["Сложная часть этой задачи — найти, где начинается цикл. Конечно, мы можем использовать наши быстрый и медленный указатели для обнаружения цикла, но узел, в котором встречаются медленный и быстрый указатели, не обязательно будет узлом, где начинается цикл. Способ решения этой проблемы — инициализровать другой медленный указатель, назовём его ",t.jsx("code",{children:"slow2"}),", который указывает на начало связного списка после того, как наши первоначальные медленный и быстрый указатели пересеклись. Если ",t.jsx("code",{children:"C"})," — это узел, в котором начинается цикл, то расстояние от ",t.jsx("code",{children:"slow"})," до ",t.jsx("code",{children:"C"})," и расстояние от"," ",t.jsx("code",{children:"slow2"})," до ",t.jsx("code",{children:"C"})," должны быть равны. Таким образом, когда"," ",t.jsx("code",{children:"slow2"})," и ",t.jsx("code",{children:"slow"})," встречаются, мы гарантированно приходим к"," ",t.jsx("code",{children:"C"}),". Чуть позже мы докажем это с помощью простых математических вычислений."]}),t.jsx(L,{value:qI}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Обнаружение начала цикла в списке",className:"mx-auto",height:"1100",src:$I,width:"1400"})}),t.jsx("p",{className:"mb-2",children:"Давайте теперь докажем, почему этот метод работает."}),t.jsx("h2",{className:"font-bold my-2",children:"Математическое доказательство «черепахи и зайца» Флойда"}),t.jsxs("p",{className:"mb-2",children:["1. Обозначим расстояние между первым узлом и узлом, в котором начинается цикл, через ",t.jsx("code",{children:"P"}),"."]}),t.jsxs("p",{className:"mb-2",children:["2. Обозначим длину цикла через ",t.jsx("code",{children:"C"}),"."]}),t.jsxs("p",{className:"mb-2",children:["3. Расстояние от узла, в котором указатели ",t.jsx("code",{children:"slow"})," и ",t.jsx("code",{children:"fast"})," ","пересекаются, до узла, в котором начинается цикл, обозначим через ",t.jsx("code",{children:"X"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Используя эту информацию, мы можем вывести, что расстояние между началом цикла и узлом, в котором пересекаются указатели ",t.jsx("code",{children:"slow"})," и ",t.jsx("code",{children:"fast"}),", равно ",t.jsx("code",{children:"C - X"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Мы знаем, что ",t.jsx("code",{children:"2 * slow = fast"}),". Используя приведённую выше информацию, давайте перепишем это уравнение через ",t.jsx("code",{children:"C, X, P"}),", в результате чего получим следующее:"]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Шаг 1: перепишем через ",t.jsx("code",{children:"C, X, P"})]})}),t.jsx("p",{className:"mb-2",children:t.jsx("code",{children:"2(P + C - X) = P + C + C - X"})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Шаг 2: раскроем скобки"})}),t.jsx("p",{className:"mb-2",children:t.jsx("code",{children:"2P + 2C - 2X = P + 2C - X"})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Шаг 3: теперь мы можем перенести всё в левую часть, что приведёт к следующему"})}),t.jsx("p",{className:"mb-2",children:t.jsx("code",{children:"P - X = 0"})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Шаг 4: определим ",t.jsx("code",{children:"P"})]})}),t.jsx("p",{className:"mb-2",children:t.jsx("code",{children:"P = X"})}),t.jsxs("p",{className:"mb-2",children:["Таким образом, если ",t.jsx("code",{children:"P = X"}),", должно быть так, что указатели"," ",t.jsx("code",{children:"slow"})," и ",t.jsx("code",{children:"slow2"})," находятся на одинаковом расстоянии от узла, в котором начинается цикл."]})]})}const YI="/my-textbook/assets/hash-implementation-gHp7PCDU.png",XI=`hashmap["Александр"] = "Дрожжино";
hashmap["Михаил"] = "Москва";
hashmap["Джексон"] = "Мценск";`;function ZI(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["В этой статье речь пойдёт о хеш-картах. Примеры и задачи в Моём справочнике пишутся на ",t.jsx("code",{children:"JavaScript"}),", данная статья в большей степени актуальна для других языков программирования."]}),t.jsx("p",{className:"mb-2",children:"Хеш-карты «под капотом» чаще всего реализуются с помощью массивов. Хеш-карта может иметь нулевой размер, но массив изначально не будет иметь нулевой размер."}),t.jsx("p",{className:"mb-2",children:"Предположим, что мы хотим заполнить этот массив следующими парами ключ/значение:"}),t.jsx(L,{value:XI}),t.jsxs("p",{className:"mb-2",children:["Для этого нам необходимо познакомиться с ",t.jsx("strong",{children:"хешированием"})," и"," ",t.jsx("strong",{children:"хеш-функциями"}),". Хеш-функция принимает ключ (в данном случае строку) и конвертирует его в число. Одна и та же строка всегда будет давать одно и то же число. Используя это число, можно определить место, в котором мы хотим сохранить нашу пару ключ/значение."]}),t.jsx("h2",{className:"font-bold mb-2",children:"Вставка и хеширование"}),t.jsxs("p",{className:"mb-2",children:["Возьмем ",t.jsx("code",{children:'"Александр"'})," для примера. Наша хеш-функция возьмёт каждый символ строки и получит его ASCII-код (я буду использовать псевдозначения для простоты). Затем она суммирует ASCII-коды, чтобы определить, где строка должна оказаться в массиве. Однако, поскольку это может быть огромное число и оно легко может выйти за размеры массива, мы можем использовать оператор остатка от деления"," ",t.jsx("code",{children:"%"}),". Представим, что сумма ASCII-кодов всех символов"," ",t.jsx("code",{children:'"Александр"'})," равна 25. Чтобы определить расположение строки в массиве, мы можем использовать формулу:"," ",t.jsxs("strong",{children:["сумма ASCII-кодов ",t.jsx("code",{children:"%"})," размер массива"]}),". В нашем случае размер массива равен 2. Таким образом, ",t.jsx("code",{children:"25 % 2"})," ","равняется ",t.jsx("strong",{children:"1"}),", по этому индексу мы будем хранить первую пару ключ/значение. Этот процесс также иногда называют ",t.jsx("strong",{children:"прехешированием"}),"."]}),t.jsx("p",{className:"mb-2",children:"Из-за того, что размер нашего массива равен всего лишь 2, вполне вероятно, что другая пара ключ/значение приведёт к такому же индексу массива, когда мы возьмём остаток. Это называется коллизией, коллизии очень распространены. Есть способы попытаться свести к минимуму коллизии, но они совершенно неизбежны."}),t.jsxs("p",{className:"mb-2",children:["Чтобы гарантировать, что каждая пара ключ/значение найдёт свободное место, мы будем отслеживать размер массива и количество фактически заполненных индексов. Когда хеш-карта станет наполовину заполненой (половина индексов в массиве занята), мы будем удваивать размер массива: ",t.jsx("strong",{children:"размер массива * 2"}),". В данном случае мы имеем размер 2, и посколько добавление"," ",t.jsx("code",{children:'"Александр": "Дрожжино"'})," приведёт к заполнению карты наполовину, мы удвоим её размер перед выполнением следующей вставки."," ",t.jsx("strong",{children:"Это гарантирует, что мы минимизируем коллизии перед вставкой."})]}),t.jsxs("p",{className:"mb-2",children:["Как только мы изменили размер, мы выполняем операцию, называемую"," ",t.jsx("strong",{children:"рехешированием"}),". Это необходимо, поскольку размер массива изменился. Рехеширование пересчитывает положение всех элементов, которые уже существуют в хеш-карте. Мы вставили ",t.jsx("code",{children:'"Александр"'})," по индексу"," ",t.jsx("strong",{children:"1"}),". В данном случае после удвоения размера массива новая позиция"," ",t.jsx("code",{children:'"Александр"'})," оказывается по индексу ",t.jsx("strong",{children:"1"}),", поэтому нам не нужно её обновлять. Однако, если новая позиция"," ",t.jsx("code",{children:'"Александр"'})," была бы по индексу 2, нам нужно было бы переместить пару ключ/значение."]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Нам необходимо выполнять рехеширование, если мы хотим поддерживать сложность по времени ",t.jsx("i",{children:"O"}),"(1) для наших операций. Мы начали с массива с размером 2. Допустим, мы хотели вставить 10000 пар ключ/значение в массив. Когда мы хотим найти ",t.jsx("code",{children:'"Александр"'}),", мы вычисляем позицию, используя новый размер, и ",t.jsx("code",{children:'"Александр"'})," может больше не быть в этой позиции."]})}),t.jsxs("p",{className:"mb-2",children:["Представим, что конвертирование ",t.jsx("code",{children:'"Михаил"'})," в число приводит к 27."," ",t.jsx("strong",{children:t.jsx("code",{children:"27 % 4 = 3"})}),", что означает ",t.jsx("code",{children:'"Михаил": "Москва"'})," окажется в массиве по 3 индексу. Теперь мы удвоим размер, он станет равным 8."]}),t.jsx("h2",{className:"font-bold mb-2",children:"Коллизии"}),t.jsxs("p",{className:"mb-2",children:["Предположим, что конвертирование ",t.jsx("code",{children:'"Джексон"'})," в число приводит к 33."," ",t.jsx("strong",{children:t.jsx("code",{children:"33 % 8 = 1"})}),". Это коллизия, поскольку Александр уже находится по индексу 1. Как решить эту проблему? Мы можем продолжать увеличивать размер массива, пока не найдём свободное место для ",t.jsx("code",{children:'"Джексон"'}),", однако это гигансткий расход памяти."]}),t.jsx("p",{className:"mb-2",children:"Есть два распространенных способа преодоления коллизий:"}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Метод цепочек"}),t.jsx("p",{className:"mb-2",children:"Метод цепочек решает коллизии путём объединения элементов в узлы связного списка, таким образом несколько пар ключ/значение могут храниться по одному индексу."}),t.jsxs("p",{className:"mb-2",children:["Поскольку Александр и Джексон принадлежат одному и тому же индексу, мы можем хранить их как объект связного списка. В этом случае сложность по времени сводится к ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") для поиска, вставки и удаления. Любые будущие ключи, принадлежащие тому же индексу, будут храниться как узел в цепочке связного списка."]})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Открытая адресация"}),t.jsx("p",{className:"mb-2",children:"Идея открытой адресации состоит в том, чтобы найти следующий доступный слот, чтобы мы не хранили более одной пары ключ/значение по одному индексу. В сравнении с методом цепочек, открытая адресация более эффективна при небольшом количестве коллизий. Ограничением здесь является то, что общее количество записей в хеш-карте ограничено размером массива."})]})]}),t.jsx("img",{alt:"Реализация хеша",height:"800",src:YI,width:"1600"})]})}const QI="/my-textbook/assets/heapify-Q8E_H38P.png",JI=`heapify(array) {
  // 0-я позиция перемещается в конец
  array.push(array[0]);

  this.heap = array;

  let cur = Math.floor((this.heap.length - 1) / 2);

  while (cur > 0) {
    // Спускает вниз
    let i = cur;

    while (2 * i < this.heap.length) {
      if (2 * i + 1 < this.heap.length
        && this.heap[2 * i + 1] < this.heap[2 * i]
        && this.heap[i] > this.heap[2 * i + 1]
      ) {
        // меняет с правым дочерним элементом
        [this.heap[i], this.heap[2 * i + 1]] = [this.heap[2 * i + 1], this.heap[i]];
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        // меняет с левым дочерним элементом     
        [this.heap[i], this.heap[2 * i]] = [this.heap[2 * i], this.heap[i]];
        i = 2 * i;
      } else {
        break;
      }
    }

    cur--;
  }

  return;
}`;function eC(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Напомним, что сложность по времени построения бинарного дерева поиска из ",t.jsx("i",{children:"n"})," ","элементов равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),"). Если мы построим кучу размера ",t.jsx("i",{children:"n"})," с помощью операции push для каждого элемента, это также будет выполняться за время"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),"). Но на самом деле существует более эффективный алгоритм, известный как ",t.jsx("i",{children:"Heapify"}),", который позволяет нам выполнить эту операцию за время ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsx("p",{className:"mb-2",children:"Идея использования heapify для построения кучи состоит в том, чтобы удовлетворить свойства структуры и порядка. Нам нужно убедиться, что наша бинарная куча представляет собой полное бинарное дерево и что значение каждого узла не превышает значения его родителя."}),t.jsxs("p",{className:"mb-2",children:["Поскольку листовые узлы не могут нарушать свойства min heap, для них нет необходимости выполнять ",t.jsx("code",{children:"heapify()"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы пропускаем все листовые узлы, нам нужно начать только с"," ",t.jsx("code",{children:"Math.floor(heap.length / 2)"}),". Затем нам нужно спуститься вниз точно так же, как мы это делали в предыдущей статье в методе ",t.jsx("code",{children:"pop()"}),". Мы не будем подробно рассматривать код, поскольку большая его часть аналогична методу"," ",t.jsx("code",{children:"pop()"}),"."]}),t.jsx(L,{value:JI}),t.jsxs("p",{className:"mb-2",children:["Начиная с первого нелистового узла, мы будем спускаться вниз точно так же, как мы это делали в функции ",t.jsx("code",{children:"pop()"}),". После каждой итерации мы будем уменьшать индекс на ",t.jsx("code",{children:"1"}),", чтобы мы могли выполнить ",t.jsx("code",{children:"heapify()"})," на следующем узле, вплоть до индекса ",t.jsx("code",{children:"1"}),"."]}),t.jsxs("p",{className:"mb-2",children:["На изображении ниже показано, как ",t.jsx("code",{children:"heapify()"})," выполняется на всех узлах, начиная с индекса ",t.jsx("code",{children:"4"}),". Узлы в синих прямоугольниках являются листовыми узлами."]}),t.jsx("img",{alt:"Преобразование в кучу",className:"mb-2",height:"1240",src:QI,width:"1600"}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Учитывая, что в бинарном дереве ",t.jsx("i",{children:"n"})," узлов, существует примерно ",t.jsx("i",{children:"n"})," /"," ",t.jsx("code",{children:"2"})," листовых узлов. Используя эту информацию, мы можем выяснить, на сколько уровней должен спуститься вниз каждый узел, а также объём работы, которую"," ",t.jsx("code",{children:"heapify()"})," выполняет на каждом уровне."]}),t.jsxs("p",{className:"mb-2",children:["Мы не выполняем heapify на 3-м/последнем уровне. Узлы на 2-м уровне должны спуститься на один уровень ниже, а узлы на 1-м уровне спускаются вниз на два уровня, при этом корневой узел должен спуститься вниз по всем уровням. Таким образом, хотя количество узлов каждый раз уменьшается вдвое, количество уровней, которые необходимо пройти, увеличивается. Когда мы складываем всю работу вместе, получается очень аккуратное математическое суммирование, которое упрощается до"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), но мы не будем его рассматривать. Крайне маловероятно, что вас попросят доказать сложность по времени ",t.jsx("code",{children:"heapify()"}),", поэтому достаточно знать, что она равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Задачи с BST распространены, но когда дело доходит до использования структуры данных в качестве утилиты, они гораздо чаще встречаются с кучей. Если вам постоянно нужно находить максимальное или минимальное значение в задаче, отличным вариантом будет использование min heap или max heap."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Иногда задача требует найти элементы «Top K» по некоторым критериям. Эти вопросы созданы для того, чтобы решать их с помощью кучи."})})]})}const tC="/my-textbook/assets/binary-heap-6pN-k8HH.png",nC="/my-textbook/assets/binary-heap-array-TQoo0fhR.png",rC="/my-textbook/assets/binary-heap-parent-and-children--yflIQXd.png",iC=`class Heap {
    constructor() {
        this.heap = [];
        this.heap.push(0);
    }
}`;function sC(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Куча (heap) — это специализированная древовидная структура данных, которая представляет собой полное бинарное дерево. Куча реализует абстрактный тип данных, называемый очередью с приоритетом, но иногда «куча» и «очередь с приоритетом» используются как взаимозаменяемые термины."}),t.jsx("p",{className:"mb-2",children:"Мы уже узнали, что очереди работают по принципу «первый пришёл — первый вышел», но в очереди с приоритетом значения удаляются в зависимости от заданного приоритета. Первым удаляется элемент с наивысшим приоритетом."}),t.jsx("h2",{className:"font-bold my-2",children:"Два типа кучи"}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsx("li",{children:"Min Heap"}),t.jsx("li",{children:"Max Heap"})]}),t.jsxs("p",{className:"mb-2",children:[t.jsx("strong",{children:"Min heaps"})," имеют наименьшее значение в корневом узле, а при удалении наименьшее значение имеет наивысший приоритет."]}),t.jsxs("p",{className:"mb-2",children:[t.jsx("strong",{children:"Max heaps"})," имеют наибольшее значение в корневом узле, а при удалении наибольшее значение имеет наивысший приоритет."]}),t.jsx("p",{className:"mb-2",children:"В этой статье мы сосредоточимся на min heap, но реализация для max heap точно такая же, за исключением того, что вы отдаёте приоритет максимальному значению вместо минимального."}),t.jsx("h2",{className:"font-bold my-2",children:"Свойства кучи"}),t.jsx("p",{className:"mb-2",children:"Чтобы бинарное дерево можно было назвать кучей, оно должно удовлетворять следующим свойствам:"}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Свойство структуры"}),t.jsxs("p",{children:["Бинарная куча — это бинарное дерево, которое представляет собой"," ",t.jsx("strong",{children:"полное бинарное дерево"}),", в котором каждый уровень дерева заполнен полностью, за исключением узлов самого нижнего уровня, которые заполняются последовательно слева направо."]})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Свойство порядка"}),t.jsxs("p",{className:"mb-2",children:["Свойство порядка для min heap заключается в том, что все потомки должны быть больше, чем их предок. Другими словами, если у нас есть дерево с корнем"," ",t.jsx("code",{children:"y"}),", каждый узел в правом и левом поддереве должен быть больше или равен ",t.jsx("code",{children:"y"}),". Это рекурсивное свойство, как в бинарных деревьях поиска."]}),t.jsxs("p",{children:["В max heap каждый узел в правом и левом поддереве меньше или равен"," ",t.jsx("code",{children:"y"}),"."]})]})]}),t.jsx("p",{className:"mb-2",children:"На следующем изображении показана бинарная куча."}),t.jsx("img",{alt:"Бинарная куча",height:"440",src:tC,width:"509"}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsxs("p",{className:"mb-2",children:["Бинарные кучи рисуются с использованием древовидной структуры данных, но внутри они реализуются с использованием массивов. Давайте покажем, как мы можем это сделать, используя данную бинарную кучу:"," ",t.jsx("code",{children:"[14, 19, 16, 21, 26, 19, 68, 65, 30, null, null, null, null, null, null]"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Мы возьмем массив размером"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," + 1"]}),", где ",t.jsx("i",{children:"n"})," — количество узлов в нашей бинарной куче. Скоро это обретёт смысл. Мы будем посещать наши узлы в том же порядке, как мы посещаем узлы при поиске в ширину — уровень за уровнем, слева направо. Мы вставим их в наш массив последовательно. Однако мы начнём их заполнять с индекса ",t.jsx("code",{children:"1"}),", а не с"," ",t.jsx("code",{children:"0"}),", по причинам, которые мы скоро обсудим."]}),t.jsx("p",{className:"mb-2",children:"После заполнения нашего массива он будет выглядеть следующим образом:"}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Заполнение кучи (массива)",className:"mx-auto",height:"420",src:nC,width:"1040"})}),t.jsxs("p",{className:"mb-2",children:["Причина, по которой мы начинаем заполнять наш массив с индекса ",t.jsx("code",{children:"1"}),", заключается в том, что это помогает нам определить индекс, в котором находится левый дочерний, правый дочерний или родительский узел узла. Поскольку бинарные кучи представляют собой полные бинарные деревья, для указателей не требуется места. Вместо этого левый дочерний, правый дочерний и родительский узел можно вычислить с помощью следующих формул, где ",t.jsx("i",{children:"i"})," — индекс данного узла."]}),t.jsxs("p",{className:"flex flex-col mb-2",children:[t.jsxs("code",{children:[t.jsx("strong",{children:"левый дочерний узел"})," = 2 ∗ ",t.jsx("i",{children:"i"})]}),t.jsxs("code",{children:[t.jsx("strong",{children:"правый дочерний узел"})," = 2 ∗ ",t.jsx("i",{children:"i"})," + 1"]}),t.jsxs("code",{children:[t.jsx("strong",{children:"родительский узел"})," = ",t.jsx("i",{children:"i"})," / 2"]})]}),t.jsxs("p",{className:"mb-2",children:["Теперь предположим, что мы хотим найти указанные выше свойства узла"," ",t.jsx("code",{children:"19"}),". На следующем изображении показано, как использование формул помогает нам их понять. Число внутри круга в каждом узле дерева — это значение, хранящееся в этом узле. Число над узлом (синим цветом) — это соответствующий индекс в массиве. Важно отметить, что эти формулы работают только в том случае, если дерево является полным бинарным деревом. Теперь мы также можем понять, почему мы начинаем с индекса ",t.jsx("code",{children:"1"}),". Предположим, мы хотели найти левый и правый дочерний узел ",t.jsx("code",{children:"14"}),", а ",t.jsx("code",{children:"14"})," находился в ",t.jsx("code",{children:"0"}),". Ну, любое число, умноженное на ",t.jsx("code",{children:"0"})," это ",t.jsx("code",{children:"0"}),", и сообщит нам, что левый дочерний элемент находится по индексу ",t.jsx("code",{children:"0"}),", что, конечно, не так."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск родительского и дочерних узлов в бинарной куче",className:"mx-auto",height:"420",src:rC,width:"1040"})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Всякий раз, когда с кучей выполняются какие-либо операции, например удаление или добавление, мы должны убедиться, что свойства min heap удовлетворены и три вышеупомянутые формулы по-прежнему действительны. Мы обсудим это в следующей статье."})}),t.jsx("p",{className:"mb-2",children:"Ниже приведен код реализации кучи."}),t.jsx(L,{value:iC}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Глядя на свойства max heap и min heap, можно сказать, что если задача требует от нас найти минимум или максимум, куча является жизнеспособным вариантом. Посмотрим, насколько он эффективен, когда дело доходит до операций удаления и добавления."})]})}const aC="/my-textbook/assets/binary-heap-push-MsL5PfJ8.png",oC="/my-textbook/assets/binary-heap-pop-KEQpSJ9f.png",lC=`push(value) {
  this.heap.push(value);
  let i = this.heap.length - 1;

  // поднимает вверх
  while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
    [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    i = Math.floor(i / 2);
  }
}`,cC=`pop() {
  if (this.heap.length === 1) {
    // Обычно мы бы выкинули исключение, если куча пуста.
    return -1;
  }

  if (this.heap.length === 2) {
    return this.heap.pop();
  }

  const result = this.heap[1];

  // перемещает последнее значение в корень
  this.heap[1] = this.heap.pop();

  let i = 1;

  // спускает вниз
  while(2 * i < this.heap.length) {
    if (2 * i + 1 < heap.length
      && this.heap[2 * i + 1] < this.heap[2 * i]
      && this.heap[i] > this.heap[2 * i + 1]
    ) {
      // меняет с правым дочерним элементом
      [this.heap[i], this.heap[2 * i + 1]] = [this.heap[2 * i + 1], this.heap[i]];
      i = 2 * i + 1;
    } else if (this.heap[i] > this.heap[2 * i]) {
      // меняет с левым дочерним элементом      
      [this.heap[i], this.heap[2 * i]] = [this.heap[2 * i], this.heap[i]];
      i = 2 * i;
    } else {
      break;
    }
  }

  return result;
}`;function dC(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Добавление (push)"}),t.jsxs("p",{className:"mb-2",children:["Возьмём ту же бинарную кучу, что и ранее:"," ",t.jsx("code",{children:"[14, 19, 16, 21, 26, 19, 68, 65, 30, null, null, null, null, null, null]"}),", допустим, мы хотим добавить в неё ",t.jsx("code",{children:"17"}),". Нам нужно убедиться, что мы добавляем ",t.jsx("code",{children:"17"})," так, что свойства структуры и порядка сохраняются."]}),t.jsxs("p",{className:"mb-2",children:["Поскольку бинарная куча представляет собой полное бинарное дерево, и нам необходимо заполнять узлы последовательным образом, добавление ",t.jsx("code",{children:"17"})," ","должно произойти в ",t.jsx("code",{children:"10"}),"-м индексе. Однако это может нарушить свойство min heap, а это значит, что нам придётся перемещать ",t.jsx("code",{children:"17"})," вверх по дереву, пока не найдём его правильное положение."]}),t.jsxs("p",{className:"mb-2",children:["В этом случае, поскольку ",t.jsx("code",{children:"17"})," меньше, чем его родительский элемент,"," ",t.jsx("code",{children:"26"}),", ему необходимо подниматься вверх до тех пор, пока он не перестанет быть меньше своего родительского элемента. Итак, мы меняем"," ",t.jsx("code",{children:"17"})," на ",t.jsx("code",{children:"26"}),", и теперь родительским элементом"," ",t.jsx("code",{children:"17"})," является ",t.jsx("code",{children:"19"}),", что снова нарушает свойство min heap. Производим ещё один обмен. После этого ",t.jsx("code",{children:"17"})," теперь больше своего нового родителя, равного ",t.jsx("code",{children:"14"}),". Число ",t.jsx("code",{children:"17"})," также меньше всех своих потомков, поскольку ",t.jsx("code",{children:"19"})," уже было меньше всех своих потомков. Результирующая min heap будет выглядеть следующим образом."]}),t.jsx("img",{alt:"Добавление в кучу",className:"mb-2",height:"640",src:aC,width:"1720"}),t.jsx(L,{value:lC}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы знаем, что дерево всегда будет сбалансировано, сложность по времени операции push равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Удаление (pop)"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Очевидный способ"})}),t.jsxs("p",{className:"mb-2",children:["Удаление из кучи сложнее, чем операция push. Один из способов, о котором вы, возможно, уже подумали, — это извлечь корневой узел и заменить его на"," ",t.jsx("code",{children:"min(leftChild, rightChild)"}),". Проблема здесь в том, что, хотя свойство порядка не нарушено, мы нарушили свойство структуры. Если взять предыдущее дерево, удалить ",t.jsx("code",{children:"14"})," и заменить его на ",t.jsx("code",{children:"16"})," -"," ",t.jsx("code",{children:"min(leftChild, rightChild)"}),", то для замены ",t.jsx("code",{children:"16"})," потребуется"," ",t.jsx("code",{children:"19"}),". Теперь в уровне ",t.jsx("code",{children:"2"})," отсутствует узел, т.е. у"," ",t.jsx("code",{children:"19"})," отсутствует левый дочерний элемент."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Правильный способ"})}),t.jsxs("p",{className:"mb-2",children:["Правильный способ — взять самый правый узел последнего уровня и поменять его местами с корневым узлом. Теперь мы сохранили свойство структуры. Однако свойство порядка нарушается. Чтобы исправить свойство порядка, мы должны убедиться, что"," ",t.jsx("code",{children:"30"})," находится на своём месте. Для этого мы запустим цикл и поменяем местами ",t.jsx("code",{children:"30"})," на ",t.jsx("code",{children:"min(leftChild, rightChild)"}),". Меняем местами"," ",t.jsx("code",{children:"30"})," на ",t.jsx("code",{children:"16"}),", затем ",t.jsx("code",{children:"19"})," на ",t.jsx("code",{children:"30"}),". Полученное дерево будет выглядеть следующим образом."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление из кучи",className:"mx-auto",height:"420",src:oC,width:"960"})}),t.jsx(L,{value:cC}),t.jsxs("p",{className:"mb-2",children:["Псевдокод, показанный выше, на первый взгляд может показаться устрашающим, поэтому давайте рассмотрим его. Если наша куча ",t.jsx("code",{children:"heap"})," пуста, удалять нечего, следовательно, ",t.jsx("code",{children:"return -1"}),". Наша куча также может иметь только один узел, и в этом случае мы просто удалим этот узел и не будем вносить никаких изменений. Если два приведённых выше условия не выполнились, значит, у нас есть дочерние элементы, а это означает, что нам нужно выполнить замену."]}),t.jsxs("p",{className:"mb-2",children:["Мы сохраняем наше значение ",t.jsx("code",{children:"14"})," в переменную с именем"," ",t.jsx("code",{children:"result"}),", чтобы не потерять его. Затем мы можем удалить из нашей кучи"," ",t.jsx("code",{children:"30"})," и поместить ",t.jsx("code",{children:"30"})," в корневой узел."]}),t.jsxs("p",{className:"mb-2",children:["Наш цикл ",t.jsx("code",{children:"while"})," выполняется до тех пор, пока у нас есть левый дочерний элемент, и мы определяем это, проверяя, что ",t.jsx("code",{children:"2 * i"})," не выходит за пределы массива. Далее нас интересуют три случая:"]}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsx("li",{children:"Узел не имеет дочерних элементов"}),t.jsxs("li",{children:["У узла есть ",t.jsx("strong",{children:"только"})," левый дочерний элемент"]}),t.jsx("li",{children:"Узел имеет два дочерних элемента"})]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"При рассмотрении бинарной кучи невозможно иметь только правый дочерний элемент, поскольку тогда она больше не является полным бинарным деревом и нарушает свойство структуры."})}),t.jsxs("p",{className:"mb-2",children:["Поскольку наличие левого дочернего узла в цикле ",t.jsx("code",{children:"while"})," гарантировано, нам нужно теперь проверить, есть ли у узла правый дочерний узел, что мы проверяем с помощью ",t.jsx("code",{children:"2 * i + 1"}),". Мы также следим за тем, чтобы текущий узел был больше, чем его дочерние элементы, чтобы поддерживать свойство порядка. Мы заменяем узел на минимум из двух его дочерних элементов."]}),t.jsx("p",{className:"mb-2",children:"Если правого дочернего узла не существует и значение текущего узла больше, чем его левого дочернего элемента, мы меняем его местами с левым дочерним элементом."}),t.jsx("p",{className:"mb-2",children:"Если ни один из вышеперечисленных случаев не выполняется, тогда наш узел уже находится в правильном положении, удовлетворяя как свойству порядка, так и свойству структуры."}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Сложность по времени операций, обсуждавшихся до сих пор, можно резюмировать в следующей таблице."}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Получить Min/Max"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Добавление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),")"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),")"]})]})]})]})]})}const uC="/my-textbook/assets/insertion-sort-IDv9hEZ6.png",hC=`function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    
    while (j >= 0 && array[j + 1] < array[j]) {
      const temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  return array;
}`;function pC(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Сортировка вставками — это один из алгоритмов сортировки, используемый для сортировки данных в различных структурах данных. Это один из простейших алгоритмов сортировки, который лучше всего работает при небольшом размере данных (скоро мы обсудим, почему это так)."}),t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsxs("p",{className:"mb-2",children:["Допустим, у нас есть массив из 5 элементов, заполненный значениями:"," ",t.jsx("code",{children:"[2, 3, 4, 1, 6]"}),". Наша цель — отсортировать массив так, чтобы в итоге мы получили ",t.jsx("code",{children:"[1, 2, 3, 4, 6]"}),". Сортировка вставками предполагает разбиение массивов на подмассивы и сортировку их по отдельности, в результате чего получается отсортированный массив. Если бы у нас был массив из 1 элемента, он уже был бы отсортирован, поскольку нет другого элемента для сравнения. Таким образом, мы предполагаем, что первый элемент отсортирован, поскольку мы рассматриваем его как отдельный подмассив."]}),t.jsxs("p",{className:"mb-2",children:["Следующий подмассив будет состоять из 2 элементов, ",t.jsx("code",{children:"[2, 3]"}),". Чтобы выполнить сортировку, необходимо сравнить два элемента. Для массива из двух элементов это тривиально. Однако когда мы доберёмся до полного массива из 5 элементов, невозможно отслеживать, где находится каждый элемент, без использования указателей. Так что создадим два указателя ",t.jsx("code",{children:"i"})," и ",t.jsx("code",{children:"j"}),"."]}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsxs("li",{children:[t.jsx("code",{children:"j"})," всегда будет позади ",t.jsx("code",{children:"i"})," и никогда не пересечёт"," ",t.jsx("code",{children:"i"})]}),t.jsxs("li",{children:["указатель ",t.jsx("code",{children:"i"})," указывает на индекс"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," - 1"]}),", где"," ",t.jsx("code",{children:t.jsx("i",{children:"n"})})," ","— размер текущего подмассива"]}),t.jsxs("li",{children:["указатель ",t.jsx("code",{children:"j"})," начинается на один индекс позади ",t.jsx("code",{children:"i"}),", и до тех пор, пока ",t.jsx("code",{children:"j"})," не выйдет за пределы массива, то есть не будет указывать на отрицательный индекс, а элемент по индексу ",t.jsx("code",{children:"j + 1"})," ","меньше, чем элемент ",t.jsx("code",{children:"j"}),", мы продолжаем уменьшать ",t.jsx("code",{children:"j"}),". Это гарантирует, что мы отсортировали все элементы до индекса ",t.jsx("code",{children:"i"}),", прежде чем перейти к следующему подмассиву (итерации). Это продемонстрировано в псевдокоде ниже."]})]}),t.jsx(L,{value:hC}),t.jsx("p",{className:"mb-2",children:"Шаги выполнения кода с приведённым выше примером будут выглядеть следующим образом."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Сортировка вставками",className:"mx-auto",height:"940",src:uC,width:"1440"})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Вы можете подумать, будет ли сортировка вставками работать с другими типами данных, кроме чисел? Будет. Пока существует способ сравнить два значения, этот алгоритм будет работать с любым типом данных."})}),t.jsx("h2",{className:"font-bold my-2",children:"Устойчивость"}),t.jsxs("p",{className:"mb-2",children:["Устойчивость алгоритма сортировки заключается в относительном порядке элементов после завершения сортировки. Возьмём ",t.jsx("code",{children:"[7, 3, 7]"})," для примера. Есть две семёрки, одна находится по индексу ",t.jsx("code",{children:"0"}),", другая по индексу"," ",t.jsx("code",{children:"2"}),". Мы знаем, что относительный порядок этих двух семёрок останется прежним, поскольку 3 поменяется местами с 7 в индексе ",t.jsx("code",{children:"0"}),", после чего цикл ",t.jsx("code",{children:"while"})," никогда не будет запущен."]}),t.jsxs("p",{className:"mb-2",children:["Это называется ",t.jsx("strong",{children:"устойчивым"})," алгоритмом сортировки. Сортировка вставками является устойчивой, то есть гарантировано, что относительный порядок останется прежним. В неустойчивом алгоритме сортировки это не гарантировано."]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Сортировка вставками любого набора входных данных размера ",t.jsx("i",{children:"n"}),", в лучшем случае, если массив уже отсортирован, будет стоить ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Это связано с тем, что нам всё равно придётся пройти через каждый элемент массива, но наш цикл"," ",t.jsx("code",{children:"while"})," никогда не будет вызван. В худшем случае все элементы сортируются в обратном порядке, что означает, что цикл ",t.jsx("code",{children:"while"})," будет выполняться ",t.jsx("i",{children:"n"})," раз внутри цикла ",t.jsx("code",{children:"for"}),". Это приводит к сложности по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")."]}),t.jsxs("h2",{className:"font-bold my-2",children:["Более глубокое погружение - почему ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")?"]}),t.jsxs("p",{className:"mb-2",children:["В худшем случае сортировка вставками выполняет ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"})," операций, где ",t.jsx("i",{children:"n"})," — размер массива. На первой итерации цикла"," ",t.jsx("code",{children:"for"})," мы сортируем первые два элемента, затем 3, 4 и, наконец, 5. Что ж, если все элементы расположены в обратном порядке, нам не только придётся пройти через весь массив — цикл ",t.jsx("code",{children:"for"}),", но также выполнить перестановку на каждом шаге, что в общей сложности будет равно ",t.jsx("i",{children:"n"}),". Следовательно, можно сделать вывод, что это ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),". Конечно, существует очень четкое математическое доказательство, но для целей данной статьи этого объяснения достаточно."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("p",{className:"mb-2",children:["Сортировка вставками — отличный алгоритм, когда размер входных данных мал, но он терпит неудачу, когда ",t.jsx("i",{children:"n"})," очень велико из-за его сложности ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"). Тем не менее, полезно знать его плюсы и минусы."]})]})}const mC="/my-textbook/assets/graph-ueOA_ORz.png",fC="/my-textbook/assets/graph-represented-by-matrix-_bUq6ZGN.png",gC="/my-textbook/assets/graph-represented-by-adjacency-matrix-zecMsDEw.png",bC="/my-textbook/assets/graph-represented-by-adjacency-list-ZVo6TkBZ.png",xC=`const grid = [[0, 0, 0, 0],
              [1, 1, 0, 0],
              [0, 0, 0, 1],
              [0, 1, 0, 0]];`,EC=`const adjMatrix = [[0, 0, 0, 0],
                   [1, 1, 0, 0],
                   [0, 0, 0, 1],
                   [0, 1, 0, 0]];`,TC=`// ребро от v1 до v2 существует
adjMatrix[v1][v2] = 1;

// ребро от v2 до v1 существует
adjMatrix[v2][v1] = 1;

// рёбер от v1 до v2 не существует
adjMatrix[v1][v2] = 0;

// рёбер от v2 до v1 не существует
adjMatrix[v2][v1] = 0;`,yC=`class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}`;function SC(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"На самом деле в ходе курса мы уже несколько раз встречались с графами. Граф — это структура данных, состоящая из узлов (которые мы видели в виде узлов дерева и узлов списка) и, возможно, указателей, соединяющих их вместе."}),t.jsx("p",{className:"mb-2",children:"Давайте сначала рассмотрим некоторую терминологию графов."}),t.jsx("h2",{className:"font-bold my-2",children:"Терминология графов"}),t.jsxs("p",{className:"mb-2",children:["В графах узлы называются ",t.jsx("strong",{children:"вершинами"}),", а указатели, соединяющие эти узлы, называются ",t.jsx("strong",{children:"рёбрами"}),". В графах нет ограничений относительно расположения узлов и того, как рёбра соединяют эти узлы вместе."]}),t.jsx("p",{className:"mb-2",children:"Также возможно, что узлы не соединены никакими рёбрами, и это все равно будет считаться графом — пустым графом (нуль-графом)."}),t.jsxs("p",{className:"mb-2",children:["Число рёбер ",t.jsx("code",{children:"E"}),", учитывая количество вершин ",t.jsx("code",{children:"V"}),", всегда будет меньше или равно"," ",t.jsxs("code",{children:["V",t.jsx("sup",{children:"2"})]}),"."," ",t.jsxs("code",{children:["E <= V",t.jsx("sup",{children:"2"})]}),". Это связано с тем, что каждый узел может указывать максимум на себя и на любой другой узел графа. Если у нас есть узлы ",t.jsx("code",{children:"A"}),", ",t.jsx("code",{children:"B"})," и"," ",t.jsx("code",{children:"C"}),", ",t.jsx("code",{children:"A"})," может указывать на себя, ",t.jsx("code",{children:"B"})," и"," ",t.jsx("code",{children:"C"}),". То же самое касается ",t.jsx("code",{children:"B"})," и ",t.jsx("code",{children:"C"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Если указатели, соединяющие рёбра, имеют направление, граф называется"," ",t.jsx("strong",{children:"ориентированным графом"}),". Если есть рёбра, но нет направления, такой граф называется ",t.jsx("strong",{children:"неориентированным графом"}),". Например, деревья и связные списки представляют собой ориентированные графы, поскольку у нас есть такие указатели, как ",t.jsx("code",{children:"prev"}),", ",t.jsx("code",{children:"next"})," и ",t.jsx("code",{children:"left"}),","," ",t.jsx("code",{children:"right"}),"."]}),t.jsx("img",{alt:"Граф",className:"mb-2",height:"320",src:mC,width:"240"}),t.jsx("h2",{className:"font-bold my-2",children:"Форматы графов"}),t.jsx("p",{className:"mb-2",children:"Граф можно представить по-разному. Это абстрактная концепция, которая конкретизируется с использованием различных структур данных. Чаще всего графы представляются с использованием следующего:"}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsx("li",{className:"mb-2",children:"Матрица"}),t.jsx("li",{className:"mb-2",children:"Матрица смежности"}),t.jsx("li",{className:"mb-2",children:"Список смежности"})]}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Матрица"}),t.jsxs("p",{className:"mb-2",children:["Матрица — это двумерный массив со строками и столбцами, и граф можно представить с помощью матрицы. В приведённом ниже коде каждый массив, разделённый запятыми, представляет каждую строку. Здесь у нас четыре строки и четыре столбца. Все индексы начинаются с ",t.jsx("code",{children:"0"}),", и идея состоит в том, что мы должны иметь возможность доступа к произвольной строке, столбцу или конкретному элементу по указанной строке или столбцу. Доступ ко второй строке можно легко выполнить с помощью ",t.jsx("code",{children:"grid[1]"}),", а доступ ко второму столбцу можно выполнить с помощью ",t.jsx("code",{children:"grid[0][1]"}),"."]}),t.jsx(L,{value:xC}),t.jsx("p",{className:"mb-2",children:"Как это можно использовать для представления графа? Как мы уже упоминали, графы абстрактны и могут быть определены разными способами. Допустим, все нули в нашей сетке являются вершинами. Чтобы пройти по графу, нам разрешено двигаться вверх, вниз, влево и вправо. Если мы хотим соединить нули вместе, используя наши рёбра, мы в конечном итоге получим кучу связанных нулей, которые являются связанными компонентами, обозначающими граф. Мы обсудим обход матрицы в следующей статье."}),t.jsx("img",{alt:"Граф представленный с помощью матрицы",className:"mb-2",height:"260",src:fC,width:"440"})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Матрица смежности"}),t.jsx("p",{className:"mb-2",children:"Это менее распространенный формат ввода. Здесь индекс массива представляет саму вершину. Давайте возьмем пример:"}),t.jsx(L,{value:EC}),t.jsxs("p",{className:"mb-2",children:["Поскольку индексы сами по себе представляют вершину, ",t.jsx("code",{children:"0"})," означает, что ребро не существует между заданными ",t.jsx("code",{children:"v1, v2"})," и ",t.jsx("code",{children:"1"})," ","означает обратное. ",t.jsx("code",{children:"adjMatrix[1][2] === 0"})," означает, что между вершинами ",t.jsx("code",{children:"1"})," и ",t.jsx("code",{children:"2"})," нет ребра. Кроме того,"," ",t.jsx("code",{children:"adjMatrix[2][1] === 0"})," означает, что между вершинами"," ",t.jsx("code",{children:"2"})," и ",t.jsx("code",{children:"1"})," нет ребра. Из этого можно сделать следующий вывод:"]}),t.jsx(L,{value:TC}),t.jsx("p",{className:"mb-2",children:"Чтобы представить приведённую выше матрицу смежности, мы можем взглянуть на следующее изображение."}),t.jsx("img",{alt:"Граф представленный с помощью матрицы смежности",className:"mb-2",height:"260",src:gC,width:"520"}),t.jsxs("p",{className:"mb-2",children:["Проблема в том, что это гигантский расход памяти. Поскольку это квадратная матрица, сложность по времени равна ",t.jsx("i",{children:"O"}),"(V",t.jsx("sup",{children:"2"}),"), где"," ",t.jsx("code",{children:"V"})," — количество вершин. Это имеет смысл, поскольку количество рёбер также равно количеству узлов."]})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Список смежности"}),t.jsxs("p",{className:"mb-2",children:["Обычно это наиболее распространенный способ представления графов. Это также двумерный массив. Удобство здесь в том, что мы можем объявить его, используя класс ",t.jsx("code",{children:"GraphNode"}),", и он содержит атрибут списка, называемый"," ",t.jsx("code",{children:"neighbors"}),", с помощью которого мы можем получить доступ ко всем соседям данной вершины."]}),t.jsx(L,{value:yC}),t.jsx("p",{className:"mb-2",children:"В конечном итоге это обеспечивает более эффективное использование памяти, поскольку нас интересуют только связанные узлы."}),t.jsx("img",{alt:"Граф представленный с помощью списка смежности",className:"mb-2",height:"180",src:bC,width:"280"})]})]}),t.jsx("p",{className:"mb-2",children:"В следующих нескольких статьях мы обсудим, как мы можем выполнять обход графа, используя все вышеупомянутые форматы, и какие проблемы мы можем решить с помощью графов."})]})}const NC="/my-textbook/assets/depth-first-search-iterative-inorder-a8j2g6FE.png",_C="/my-textbook/assets/depth-first-search-iterative-preorder-kNkXA60L.png",AC="/my-textbook/assets/depth-first-search-iterative-postorder-E_Py_fLV.png",jC=`function inorder(root) {
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
}`,vC=`function preorder(root) {
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      console.log(curr.val);

      if (curr.right) {
        stack.push(curr.right);
      }

      curr = curr.left;
    } else {
      curr = stack.pop();
    }
  }
}`,wC=`function postorder(root) {
  const stack = [root];
  const visit = [false];

  while (stack.length > 0) {
    const curr = stack.pop();
    const visited = visit.pop();

    if (curr) {
      if (visited) {
        console.log(curr.val);
      } else {
        stack.push(curr);
        visit.push(true);
        stack.push(curr.right);
        visit.push(false);
        stack.push(curr.left);
        visit.push(false);
      }
    }
  }
}`;function RC(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Рекурсивный подход к выполнению поиска в глубину тривиален. Иногда вас могут попросить написать итеративное решение, что может быть намного сложнее. Поэтому его полезно знать в таких ситуациях."}),t.jsx("p",{className:"mb-2",children:"Рекурсия использует стек под капотом. В итеративной версии мы объявим собственный стек для выполнения тех же операций."}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsx("p",{className:"mb-2",children:"Если мы объявим наши собственные стеки, мы можем осмысленно добавлять в стек наши узлы, принимая во внимание порядок, в котором нам нужно выводить в консоль / извлекать их. Напомним, что существуют три способа обхода дерева."}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Inorder (центрированный)"}),t.jsxs("p",{className:"mb-2",children:["Напомним, что inorder обход предполагает сначала посещение левого дочернего узла (включая всё его поддерево), затем посещение узла и, наконец, посещение правого дочернего узла (включая всё его поддерево). Мы объявим указатель"," ",t.jsx("code",{children:"curr"}),", который будет указывать на текущий узел, который мы обрабатываем. Как только наш указатель ",t.jsx("code",{children:"curr"})," укажет на узел, мы добавим его в стек. После этого мы обновим указатель ",t.jsx("code",{children:"curr"})," на"," ",t.jsx("code",{children:"curr.left"}),". Если наш ",t.jsx("code",{children:"curr"})," указывает на"," ",t.jsx("code",{children:"null"}),", мы можем извлечь последний узел из стека, вывести в консоль его значение и перейти к правому поддереву."]}),t.jsx(L,{value:jC}),t.jsx("figure",{className:"bg-white",children:t.jsx("img",{alt:"Центрированный обход в глубину",className:"mx-auto",height:"800",src:NC,width:"1240"})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Preorder (прямой)"}),t.jsx("p",{className:"mb-2",children:"Preorder обход немного сложнее, чем inorder обход. Напомним, что при preorder обходе мы переходим от корня к левому поддереву, а затем к правому поддереву."}),t.jsxs("p",{className:"mb-2",children:["В приведённом ниже коде цикл ",t.jsx("code",{children:"while"})," проверяет, что"," ",t.jsx("code",{children:"curr"})," ещё указывает на узел или в нашем стеке всё ещё есть элементы. Когда наш ",t.jsx("code",{children:"curr"})," достигает ",t.jsx("code",{children:"null"}),", это означает, что узла не существует. Однако внутри нашего стека всё ещё могут быть элементы, а это значит, что мы их извлекаем и выводим в консоль."]}),t.jsx(L,{value:vC}),t.jsx("figure",{className:"bg-white",children:t.jsx("img",{alt:"Прямой обход в глубину",className:"mx-auto",height:"580",src:_C,width:"1240"})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Postorder (обратный)"}),t.jsx("p",{className:"mb-2",children:"Postorder обход предполагает обход левого дочернего элемента, правого дочернего элемента и затем корня. Этот вариант сложнее двух предыдущих."}),t.jsxs("p",{className:"mb-2",children:["Мы будем использовать два стека. В этом случае у нас будет стек"," ",t.jsx("code",{children:"visit"})," и ещё один стек ",t.jsx("code",{children:"stack"}),". Стек ",t.jsx("code",{children:"visit"})," ","всегда будет того же размера, что и стек ",t.jsx("code",{children:"stack"}),". Сначала мы поместим наш корневой узел на вершину ",t.jsx("code",{children:"stack"}),". Затем мы отметим этот узел в ",t.jsx("code",{children:"visit"})," как ",t.jsx("code",{children:"false"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Затем мы можем запустить цикл ",t.jsx("code",{children:"while"}),", который будет выполняться,"," ",t.jsxs("strong",{children:["пока ",t.jsx("code",{children:"stack"})," не пуст"]})," ","(поскольку наши ",t.jsx("code",{children:"visit"})," и ",t.jsx("code",{children:"stack"})," имеют одинаковый размер). Используя это, мы извлечём ",t.jsx("code",{children:"curr"})," и ",t.jsx("code",{children:"visited"}),". Если наш ",t.jsx("code",{children:"curr"})," не равен ",t.jsx("code",{children:"null"}),", мы проверяем, посетили ли мы этот узел ранее."]}),t.jsx(L,{value:wC}),t.jsx("img",{alt:"Обратный обход в глубину",className:"mx-auto",height:"800",src:AC,width:"1560"})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Если ",t.jsx("i",{children:"n"})," — количество узлов, и мы выполняем ",t.jsx("i",{children:"O"}),"(1) работу с каждым узлом, то сложность по времени равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Также можно сказать, что сложность составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"h"}),"), где ",t.jsx("i",{children:"h"})," — высота дерева. Сложность по памяти равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), где в худшем случае в стеке находятся все узлы."]})]})}const IC="/my-textbook/assets/kadanes-algorithm-E-zv_uqf.png",CC="/my-textbook/assets/sliding-window-rs8yuivv.png",kC=`function bruteForce(nums) {
  let maxSum = nums[0];

  for (let l = 0; l < nums.length; l++) { 
    let curSum = 0;

    for (let r = l; r < nums.length; r++) {
      curSum += nums[r];
      maxSum = Math.max(maxSum, curSum);
    }
  }

  return maxSum;
}`,OC=`function kadanes(nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (const n of nums) {
    curSum = Math.max(curSum, 0);
    curSum += n;
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}`,LC=`function slidingWindow(nums) {
  let maxSum = nums[0];
  let curSum = 0;
  let maxL = 0;
  let maxR = 0;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (curSum < 0) {
      curSum = 0;
      L = R;
    }

    curSum += nums[R];

    if (curSum > maxSum) {
      maxSum = curSum;
      maxL = L; 
      maxR = R;     
    }    
  }

  return [maxL, maxR];
}`;function DC(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Алгоритм Кэдейна — это жадный алгоритм/алгоритм динамического программирования, который можно использовать для решения задач с массивами, чтобы снизить сложность по времени до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Он используется для вычисления подмассива максимальной суммы, заканчивающегося в определённой позиции."]}),t.jsx("h2",{className:"font-bold my-2",children:"Мотивация"}),t.jsx("p",{className:"mb-2",children:"Предположим, нам задан следующий вопрос:"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Найдите непустой подмассив с наибольшей суммой."})}),t.jsx("p",{className:"mb-2",children:"Этот вопрос просит нас найти группу смежных значений в массиве, которые дают наибольшую сумму. Затем нас просят вернуть эту сумму."}),t.jsxs("p",{className:"mb-2",children:["Если мы на секунду забудем об алгоритме Кэдейна, то решением методом грубой силы будет пройти через каждый подмассив и вычислить сумму, отслеживая при этом максимальную сумму. Это сработает, но предстоит много повторяющейся работы. На каждой итерации нашего внешнего цикла ",t.jsx("code",{children:"for"})," наш внутренний цикл выполняет линейную работу. Это приводит к сложности ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")."]}),t.jsx(L,{value:kC}),t.jsx("p",{className:"mb-2",children:"Мы можем сделать лучше."}),t.jsx("p",{className:"mb-2",children:"Алгоритм Кэдейна сообщает нам, что существует способ вычислить наибольшую сумму, совершив всего один проход по массиву, сводя сложность к линейному времени. Давайте посмотрим, как это можно сделать."}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы ищем наибольшую сумму, рекомендуется избегать отрицательных чисел, поскольку мы знаем, что это противоречит тому, о чём спрашивает вопрос. Отрицательные числа только уменьшат нашу сумму. Алгоритм Кэдейна выполняет один цикл ",t.jsx("code",{children:"for"})," по массиву и в начале каждой итерации, если текущая сумма отрицательна, он сбрасывает текущую сумму до нуля. Таким образом, мы обеспечиваем один проход и решаем задачу за линейное время. Вот как это будет выглядеть в коде и визуализировано. Помните, что ключевым моментом здесь является то, что если мы встречаем подмассив с отрицательной суммой, мы отбрасываем его, и продолжаем рассматривать подмассив до тех пор, пока он имеет положительную сумму."]}),t.jsx("img",{alt:"Алгоритм Кэдейна",className:"mb-2",height:"440",src:IC,width:"1720"}),t.jsx(L,{value:OC}),t.jsx("h2",{className:"font-bold my-2",children:"Скользящее окно"}),t.jsx("p",{className:"mb-2",children:"Иногда проблема может потребовать вернуть фактический подмассив, содержащий наибольшую сумму, а не только саму сумму. В предыдущей реализации у нас не обязательно было два явных указателя, которые отслеживали бы подмассив, но мы действительно можем сделать это, отслеживая «окно». Окно в этом случае обозначает непрерывный подмассив, который не нарушает наше ограничение на то, чтобы сумма оставалась положительной."}),t.jsxs("p",{className:"mb-2",children:["Для этого у нас может быть левый указатель ",t.jsx("code",{children:"L = 0"})," и правый указатель"," ",t.jsx("code",{children:"R"}),". Мы будем добавлять элементы справа и удалять слева. Поскольку нам нужен подмассив с максимальной суммой, мы также можем иметь два других указателя,"," ",t.jsx("code",{children:"maxL"})," и ",t.jsx("code",{children:"maxR"}),", которые отслеживают подмассив, содержащий максимальную сумму на данный момент. Таким образом, мы не теряем их при перемещении ",t.jsx("code",{children:"L"})," и ",t.jsx("code",{children:"R"}),". Как и раньше, если наша текущая сумма становится отрицательной, мы можем переместить левый указатель до правого указателя. Это означает, что наше ограничение нарушено, и мы удаляем все элементы слева и запускаем новое окно."]}),t.jsx(L,{value:LC}),t.jsx("img",{alt:"Скользящее окно",className:"mb-2",height:"680",src:CC,width:"1720"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Подмассивом является часть массива, которая является смежной."})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы делаем только один проход, наша сложность по времени сводится к"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]})]})}const MC="/my-textbook/assets/0-1-knapsack-idea-9EkhACMI.png",FC="/my-textbook/assets/0-1-knapsack-dp-4qqxMkm3.png",PC=`function dfs(profit, weight, capacity) {
  return dfsHelper(0, profit, weight, capacity);
}

function dfsHelper(i, profit, weight, capacity) {
  if (i === profit.length) {
    return 0;
  }

  // Пропускает предмет i
  let maxProfit = dfsHelper(i + 1, profit, weight, capacity);

  // Включает предмет i
  const newCapacity = capacity - weight[i];

  if (newCapacity >= 0) {
    const p = profit[i] + dfsHelper(i + 1, profit, weight, newCapacity);
    // Вычисляет максимум
    maxProfit = Math.max(maxProfit, p);
  }

  return maxProfit;
}`,UC=`function memoization(profit, weight, capacity) {
  // Двумерный массив с N строк и M + 1 столбцов, инициализированный с -1
  const N = profit.length;
  const M = capacity;
  const cache = new Array();

  for (let row = 0; row < N; row++) {
    cache.push(new Array(M + 1).fill(-1));
  }

  return memoHelper(0, profit, weight, capacity, cache);
}

function memoHelper(i, profit, weight, capacity, cache) {
  if (i === profit.length) {
    return 0;
  }

  if (cache[i][capacity] !== -1) {
    return cache[i][capacity];
  }
  
  // Пропускает предмет i
  cache[i][capacity] = memoHelper(i + 1, profit, weight, capacity, cache);

  // Включает предмет i
  let newCapacity = capacity - weight[i];

  if (newCapacity >= 0) {
    const p = profit[i] + memoHelper(i + 1, profit, weight, newCapacity, cache);
    // Вычисляет максимум
    cache[i][capacity] = Math.max(cache[i][capacity], p);  
  }
  
  return cache[i][capacity];
}`,BC=`function dp(profit, weight, capacity) {
  const N = profit.length;
  const M = capacity;
  const dp = new Array();

  for (let row = 0; row < N; row++) {
    dp.push(new Array(M + 1).fill(0));
  }

  // Заполняет первый столбец и строку, чтобы сократить количество условий
  for (let i = 0; i < N; i++) {
    dp[i][0] = 0;
  }

  for (let c = 0; c <= M; c++) {
    if (weight[0] <= c) {
      dp[0][c] = profit[0];
    } 
  }

  for (let i = 1; i < N; i++) {
    for (let c = 1; c <= M; c++) {
      const skip = dp[i - 1][c];
      let include = 0;

      if (c - weight[i] >= 0) {
        include = profit[i] + dp[i - 1][c - weight[i]];
      }

      dp[i][c] = Math.max(include, skip);
    }
  }

  return dp[N - 1][M];
}`,HC=`function optimizedDp(profit, weight, capacity) {
  const N = profit.length;
  const M = capacity;
  let dp = new Array(M + 1).fill(0);

  // Заполняет первую строку, чтобы сократить количество условий
  for (let c = 0; c <= M; c++) {
    if (weight[0] <= c) {
      dp[c] = profit[0];
    } 
  }

  for (let i = 1; i < N; i++) {
    const curRow = new Array(M + 1).fill(0);

    for (let c = 1; c <= M; c++) {
      const skip = dp[c];
      let include = 0;

      if (c - weight[i] >= 0) {
        include = profit[i] + dp[c - weight[i]];
      }

      curRow[c] = Math.max(include, skip);
    }

    dp = curRow;
  }

  return dp[M];
}`;function GC(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Идея"}),t.jsx("p",{className:"mb-2",children:"Предположим, нам дана сумка/рюкзак фиксированной вместимости, а также вес некоторых предметов и ценность, которую мы получаем, решив положить этот предмет в сумку. Мы хотим максимизировать ценность, а также гарантировать, что вес всех предметов в нашем рюкзаке не превысит его вместимость. Причина, по которой этот алгоритм называется 0-1, заключается в том, что в каждой точке мы можем либо включить предмет, либо не включать его — бинарное решение."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Учитывая список из N предметов и рюкзак ограниченной вместимости, верните максимальную общую ценность, которая может содержаться в рюкзаке. Ценность i-го предмета равна profit[i], а его вес равен weight[i]. Предположим, вы можете добавить каждый предмет в сумку не более одного раза."})}),t.jsxs("p",{className:"mb-2",children:["Вашим первым инстинктом может быть просто жадность и выбор предметов, имеющих наибольшую ценность. Однако таким образом мы не можем получить максимальную ценность, потому что вместимость может стать проблемой, так как предметы, имеющие самую высокую ценность, могут быть самыми тяжелыми. Итак, учитывая"," ",t.jsx("code",{children:"profit = [4, 4, 7, 1]"})," и ",t.jsx("code",{children:"weight = [5, 2, 3, 1]"}),", мы можем включить или исключить каждый предмет. Мы можем построить дерево решений, как показано ниже. ",t.jsx("i",{children:"Вм"})," представляет вместимость нашей сумки в любой момент, цифры красного цвета представляют вес, а цифры синего цвета представляют общую ценность."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Дерево решений задачи о рюкзаке 0-1",className:"mx-auto",height:"400",src:MC,width:"780"})}),t.jsx("p",{className:"mb-2",children:"Глядя на изображение выше, вы можете заметить, что мы получаем наибольшую ценность, когда пропускаем первый предмет, но включаем все остальные предметы, что даёт общую ценность 12."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"В следующей статье мы более подробно остановимся на том, как работает дерево решений, но пока этого достаточно."})}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsxs("p",{className:"mb-2",children:["Когда мы начнём думать о реализации кода, нашим базовым случаем будет"," ",t.jsx("code",{children:"i === profit.length"}),". Это имеет смысл, потому что, если мы исчерпаем все предметы, возвращать будет нечего. Затем, как упоминалось ранее, мы можем либо пропустить предмет, либо включить его. Если мы пропустим предмет, нам не придётся беспокоиться о переполнении вместимости или о ценности."]}),t.jsxs("p",{className:"mb-2",children:["В случае, если мы решили включить предмет, мы должны рассчитать новую вместимость"," ",t.jsx("strong",{children:"и"})," включить этот предмет ",t.jsx("i",{children:"только"})," в том случае, если включение этого предмета не приведёт к переполнению вместимости. Затем мы можем рассчитать ценность, пройдя вниз по этой ветви дерева решений, рекурсивный вызов которой будет каждый раз вызываться с новой, обновлённой вместимостью. Поскольку мы хотим максимизировать нашу ценность, мы можем взять максимум из двух рассчитанных ценностей, т. е. если наша ",t.jsx("code",{children:"maxProfit"})," была получена путём пропуска ",t.jsx("code",{children:"i"})," или включения ",t.jsx("code",{children:"i"}),"."]}),t.jsx(L,{value:PC}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени приведённого выше кода составляет 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})})," ",". Мы знаем, что 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})})," ","потенциально может быть очень большим, мы можем избежать дублирующейся работы. Напомним, для Фибоначчи мы вычисляли ",t.jsx("code",{children:"F(2)"})," несколько раз. Возможно, вы уже догадались, что для оптимизации этого процесса можно использовать мемоизацию! На самом деле мы можем взять этот код и оптимизировать его так, чтобы довести его до сложности ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"}),"), где ",t.jsx("i",{children:"m"})," — заданная нам вместимость."]}),t.jsxs("p",{className:"mb-2",children:["Мы можем использовать кэш, чтобы не пересчитывать значения. В функции"," ",t.jsx("code",{children:"memoization"})," кэш представляет собой нашу двумерную сетку, в которой мы инициализируем все значения равными ",t.jsx("code",{children:"-1"}),". Мы воспользуемся этим позже, чтобы помочь с нашим базовым случаем."]}),t.jsx(L,{value:UC}),t.jsxs("p",{className:"mb-2",children:["В нашей функции ",t.jsx("code",{children:"memoHelper"})," у нас есть два базовых случая. Во-первых, если мы выйдем за пределы предметов, мы сможем вернуть ",t.jsx("code",{children:"0"}),". Во-вторых, если наш кэш уже содержит значение в ",t.jsx("code",{children:"cache[i][capacity]"}),", и это значение не ",t.jsx("code",{children:"-1"}),", мы можем вернуть значение, хранящееся в кэше — ценность по этой позиции уже рассчитана."]}),t.jsx("h2",{className:"font-bold my-2",children:"Метод динамического программирования снизу"}),t.jsxs("p",{className:"mb-2",children:["В этом случае у нас будет 9 столбцов и 4 строки, представляющие наше пространство решений. Каждая строка представляет каждый предмет, а каждый столбец представляет доступную вместимость. Теперь, предполагая, что все предметы имеют положительный вес, мы не можем включить какие-либо предметы в ",t.jsx("code",{children:"0"}),"-й столбец просто потому, что вес каждого предмета превышает вместимость ",t.jsx("code",{children:"0"})," — нам просто не хватает места. Опять же, как и в случае с решением с мемоизацией, мы можем включить или пропустить этот предмет. Если мы решим пропустить этот предмет, его значение будет таким же, как ",t.jsx("code",{children:"i-1"}),"-я строка. Другими словами, значение слева."]}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsxs("li",{className:"ml-6 mb-2",children:["Если мы находимся в строке и столбце, где вес предмета (изображенного строкой) превышает вместимость (изображенную столбцом), мы получаем его значение по"," ",t.jsx("code",{children:"dp[i - 1][c]"}),", что означает подъём на одну строку вверх."]}),t.jsxs("li",{className:"ml-6 mb-2",children:["Если мы находимся в строке и столбце, вместимости которых достаточно для размещения предмета, мы получаем значение этой ячейки, беря ценность, связанную с этим предметом, и добавляя ее к ",t.jsx("code",{children:"dp[i - 1][c - weight[i]]"}),", что означает переход на одну строку вверх, а ",t.jsx("code",{children:"c - weight[i]"})," — влево, где"," ",t.jsx("code",{children:"c"})," — текущая вместимость, а ",t.jsx("code",{children:"weight[i]"})," — вес текущего предмета. Это означает движение вверх по диагонали."]})]}),t.jsx("p",{className:"mb-2",children:"В конце концов мы можем вернуть значение в правой нижней ячейке. Вот как это будет выглядеть визуализировано."}),t.jsx("img",{alt:"Сетка",className:"mb-2",height:"300",src:FC,width:"640"}),t.jsx(L,{value:BC}),t.jsx("h2",{className:"font-bold my-2",children:"(небольшая) оптимизация памяти"}),t.jsx("p",{className:"mb-2",children:"Обратите внимание, что в предыдущем решении мы постоянно храним в памяти всю сетку. Однако реальность такова, что нам нужно только две строки в памяти одновременно."}),t.jsx(L,{value:HC}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени и памяти"}),t.jsxs("p",{className:"mb-2",children:["Как упоминалось ранее, метод динамического программирования снизу снижает сложность по времени до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"}),"), где ",t.jsx("i",{children:"n"})," — количество предметов, а ",t.jsx("i",{children:"m"})," — вместимость нашего рюкзака. Это большое улучшение по сравнению с 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Вопросы по динамическому программированию поначалу могут быть чрезвычайно трудными и требуют много практики. Недостаточно смотреть на код, главное — решать проблемы самостоятельно."})]})}const $C="/my-textbook/assets/list-node-wx8OPk-Y.png",zC="/my-textbook/assets/list-nodes-vW5h9gZy.png",VC="/my-textbook/assets/list-node-chaining-nMtJwpMc.png",WC="/my-textbook/assets/list-nodes-chaining-LD9JJHgl.png",qC="/my-textbook/assets/linked-list-traversal-qSyZeymN.png",KC="/my-textbook/assets/circular-linked-list-QFMTSWRM.png",YC="/my-textbook/assets/linked-list-appending1-ewz10Iu9.png",XC="/my-textbook/assets/linked-list-appending2-RmqnMYmf.png",ZC="/my-textbook/assets/linked-list-appending3-ravs9ATb.png",QC="/my-textbook/assets/linked-list-deleting1-oFXSI2Ae.png",JC="/my-textbook/assets/linked-list-deleting2-6GJ2ttbB.png",ek="/my-textbook/assets/linked-list-deleting3-5snmbEeX.png",tk=`class ListNode {
  constructor (value, next = null) {
    this.value = value; // установка желаемого значения, например, числа, символа и т. д.
    this.next = next; // установка указателя на следующий узел, по умолчанию null
  }
}`,nk="ListNode1.next = ListNode2;",rk=`ListNode2.next = ListNode3;
ListNode3.next = null`,ik=`let cur = ListNode1;

while (cur) {
  cur = cur.next;
}`,sk="tail.next = ListNode4",ak="tail = ListNode4",ok="head.next = head.next.next";function lk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Связный список — это ещё одна структура данных, похожая на массив, в том смысле, что элементы хранятся в упорядоченной последовательности. Но есть и различия."}),t.jsxs("p",{className:"mb-2",children:["Первое отличие состоит в том, что связные списки состоят из объектов, называемых"," ",t.jsx("strong",{children:"узлами списка"}),". Эти объекы содержат два атрибута:"]}),t.jsxs("ol",{className:"list-decimal list-inside mb-2",children:[t.jsxs("li",{children:[t.jsx("code",{children:"value"})," — здесь хранится значение узла. Значение может быть любым - символом, числом и т. д."]}),t.jsxs("li",{children:[t.jsx("code",{children:"next"})," — ссылка на следующий узел в связном списке. Рисунок ниже демонстрирует объект узла списка."]})]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Узел списка",className:"mx-auto",height:"400",src:$C,width:"1440"})}),t.jsx("h2",{className:"font-bold my-2",children:"Создание связного списка с нуля"}),t.jsxs("p",{className:"mb-2",children:["Объединение этих ",t.jsx("strong",{children:"узлов списка"})," вместе в цепочку приводит к созданию связного списка. Создание вашего класса ",t.jsx("code",{children:"ListNode"})," в псевдокоде будет выглядеть следующим образом:"]}),t.jsx(L,{value:tk}),t.jsxs("p",{className:"mb-2",children:["Посмотрим на пример того, как эти объекты ",t.jsx("code",{children:"ListNode"})," можно объединить в цепочку для создания желаемого связного списка. Предположим, что у нас есть 3 объекта ",t.jsx("code",{children:"ListNode"}),": ",t.jsx("code",{children:"ListNode1"}),", ",t.jsx("code",{children:"ListNode2"}),","," ",t.jsx("code",{children:"ListNode3"}),", и мы создаём их экземпляры со следующими значениями, как показано на рисунке ниже."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Узлы списка",className:"mx-auto",height:"320",src:zC,width:"1440"})}),t.jsxs("p",{className:"mb-2",children:["В данном случае наш атрибут ",t.jsx("code",{children:"value"})," представляет собой строку - красный, синий, зелёный. При создании экземпляров узлы будут храниться в памяти в произвольном порядке."]}),t.jsxs("p",{className:"mb-2",children:["Далее нам нужно убедиться, что наши указатели ",t.jsx("code",{children:"next"})," указывают на другой ",t.jsx("code",{children:"ListNode"}),", а не ",t.jsx("code",{children:"null"}),"."]}),t.jsx(L,{value:nk}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Цепочка из двух узлов",className:"mx-auto",height:"320",src:VC,width:"1440"})}),t.jsxs("p",{className:"mb-2",children:["Указатель ",t.jsx("code",{children:"next"})," узла ",t.jsx("code",{children:"ListNode1"})," указывает на"," ",t.jsx("code",{children:"ListNode2"})," — ",t.jsx("code",{children:"ListNode2"})," идёт после ",t.jsx("code",{children:"ListNode1"})," ","в связном списке. Установим указатели ",t.jsx("code",{children:"next"})," для ",t.jsx("code",{children:"ListNode2"})," ","и ",t.jsx("code",{children:"ListNode3"}),"."]}),t.jsx(L,{value:rk}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Цепочка из нескольких узлов",className:"mx-auto",height:"320",src:WC,width:"1440"})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Поскольку ",t.jsx("code",{children:"ListNode3"})," является последним узлом в связном списке, его указатель ",t.jsx("code",{children:"next"})," будет указывать на ",t.jsx("code",{children:"null"}),"."]})}),t.jsx("h2",{className:"font-bold my-2",children:"Обход"}),t.jsxs("p",{className:"mb-2",children:["Чтобы пройти по связному списку от начала до конца, мы можем использовать простой цикл ",t.jsx("code",{children:"while"}),"."]}),t.jsx(L,{value:ik}),t.jsxs("p",{className:"mb-2",children:["Мы начинаем обход с самого начала, ",t.jsx("code",{children:"ListNode1"}),", и присваиваем его переменной ",t.jsx("code",{children:"cur"}),", обозначающей текущий узел, в котором мы находимся. Продолжаем выполнять цикл ",t.jsx("code",{children:"while"})," и обновлять переменную"," ",t.jsx("code",{children:"cur"}),", записывая в неё следующий узел, пока не встретим узел, который равен ",t.jsx("code",{children:"null"})," — это означает, что мы находимся в конце связного списка и обход завершён. Сложность обхода по времени составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("img",{alt:"Обход связного списка",height:"1260",src:qC,width:"1600"}),t.jsx("h2",{className:"font-bold my-2",children:"Круговой связный список"}),t.jsxs("p",{className:"mb-2",children:["Интересный сценарий возникает, если указатель ",t.jsx("code",{children:"next"})," узла"," ",t.jsx("code",{children:"ListNode3"})," указывает на ",t.jsx("code",{children:"ListNode1"}),", а не ",t.jsx("code",{children:"null"}),". Это создаст бесконечный цикл ",t.jsx("code",{children:"while"})," и программа выйдет из строя. Это произойдёт потому, что мы никогда не достигнем конца связного списка. После"," ",t.jsx("code",{children:"ListNode3"}),", ",t.jsx("code",{children:"ListNode3.next"})," будет указывать на"," ",t.jsx("code",{children:"ListNode1"}),", который указывает на ",t.jsx("code",{children:"ListNode2"}),", который указывает на ",t.jsx("code",{children:"ListNode3"}),", и обратно на ",t.jsx("code",{children:"ListNode1"}),", создавая бесконечный цикл."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Круговой связный список",className:"mx-auto",height:"360",src:KC,width:"1480"})}),t.jsx("h2",{className:"font-bold my-2",children:"Операции связного списка"}),t.jsxs("p",{className:"mb-2",children:["Связные списки имеют указатели ",t.jsx("code",{children:"head"})," и ",t.jsx("code",{children:"tail"}),". Указатель"," ",t.jsx("code",{children:"head"})," указывает на самый первый узел связного списка,"," ",t.jsx("code",{children:"ListNode1"}),", а указатель ",t.jsx("code",{children:"tail"})," указывает на самый последний узел — ",t.jsx("code",{children:"ListNode3"}),". Если в связном списке только один узел,"," ",t.jsx("code",{children:"head"})," и ",t.jsx("code",{children:"tail"})," указывают на один и тот же узел."]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Вставка"}),t.jsxs("p",{className:"mb-2",children:["Преимущество связных списков перед массивами состоит в том, что добавление нового элемента может быть выполнено за ",t.jsx("i",{children:"O"}),"(1) по времени. После добавления ещё одного узла не требуется сдвиг элементов, и у нас уже есть ссылки на ",t.jsx("code",{children:"head"})," и ",t.jsx("code",{children:"tail"}),". Если взять наш пример выше, если бы мы хотели добавить ",t.jsx("code",{children:"ListNode4"})," в конец списка, мы бы добавили его в ",t.jsx("code",{children:"tail"}),". После добавления ",t.jsx("code",{children:"ListNode4"})," мы обновляем наш указатель ",t.jsx("code",{children:"tail"}),", чтобы он указывал на"," ",t.jsx("code",{children:"ListNode4"}),". Эта операция будет выполнена за ",t.jsx("i",{children:"O"}),"(1) по времени так как это всего лишь одна операция. Процесс будет выгледеть следующим образом:"]}),t.jsx("img",{alt:"Добавление нового узла",height:"520",src:YC,width:"1639"}),t.jsx(L,{value:sk}),t.jsx("img",{alt:"Добавление нового узла в цепочку",height:"360",src:XC,width:"1639"}),t.jsx(L,{value:ak}),t.jsx("img",{alt:"Перенос указателя tail",className:"mb-2",height:"360",src:ZC,width:"1639"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Хотя операция вставки занимает ",t.jsx("i",{children:"O"}),"(1) по времени, поскольку никакого сдвига узлов не требуется, нам всё равно придётся пройти по списку, чтобы добраться до точки вставки, если у нас нет ссылки на позицию вставки."]})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Удаление"}),t.jsxs("p",{className:"mb-2",children:["Удаление из начала связного списка составляет ",t.jsx("i",{children:"O"}),"(1) по времени, поскольку оно представляет собой одну операцию и у нас есть указатель"," ",t.jsx("code",{children:"head"}),". Опять же, сам обход списка займёт ",t.jsx("i",{children:"n"})," шагов, если у вас нет ссылки на узел. Чтобы удалить определённый узел, скажем"," ",t.jsx("strong",{children:"y"}),", необходимо пропустить его и обновить указатель"," ",t.jsx("code",{children:"next"})," предыдущего узла на узел, который идёт после"," ",t.jsx("strong",{children:"y"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Будет проще представить это в коде. Предположим, что мы хотим удалить"," ",t.jsx("code",{children:"ListNode2"})," из предыдущего примера. Сейчас наш ",t.jsx("code",{children:"head"})," ","указывает на ",t.jsx("code",{children:"ListNode1"}),", а ",t.jsx("code",{children:"head.next"})," — на"," ",t.jsx("code",{children:"ListNode2"}),". Поскольку ",t.jsx("code",{children:"ListNode2"})," будет удалён, нам нужно обновить наш указатель ",t.jsx("code",{children:"head.next"})," на ",t.jsx("code",{children:"ListNode3"}),", доступ к которому можно получить по цепочке указателей ",t.jsx("code",{children:"next"}),":"," ",t.jsx("code",{children:"head.next.next"}),". Это имеет смысл, поскольку ",t.jsx("code",{children:"head.next"})," ","— это ",t.jsx("code",{children:"ListNode2"}),", и логично, что ",t.jsx("code",{children:"head.next.next"})," будет указывать на ",t.jsx("code",{children:"ListNode3"}),"."]}),t.jsx("img",{alt:"Связный список перед удалением",height:"400",src:QC,width:"1639"}),t.jsx(L,{value:ok}),t.jsx("img",{alt:"Удаление узла",className:"mb-2",height:"403",src:JC,width:"1639"}),t.jsxs("p",{className:"mb-2",children:["Обновлённый связный список после удаления ",t.jsx("code",{children:"ListNode2"}),". Обратите внимание, что теперь указатель ",t.jsx("code",{children:"next"})," узла ",t.jsx("code",{children:"ListNode1"})," ","указывает на ",t.jsx("code",{children:"ListNode3"})," вместо ",t.jsx("code",{children:"ListNode2"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Связный список после удаления",className:"mx-auto",height:"400",src:ek,width:"1440"})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Предполагается, что ",t.jsx("code",{children:"ListNode2"})," будет удалён из памяти, поскольку в большинстве языков есть сборщики мусора."]})})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги:"}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Примечания"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Доступ"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Поиск"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Вставка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Предполагая, что у вас есть ссылка на узел в желаемой позиции"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Предполагая, что у вас есть ссылка на узел в желаемой позиции"})]})]})]})]})}const ck="/my-textbook/assets/matrix-breadth-first-search-1-Jry-GD.png",dk=`const matrix = [[0, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 1],
               [0, 1, 0, 0]];`,uk=`function bfs(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [[0, 0]]; // представим, что это очередь, чтобы не занимать место реализацией очереди
  const visited = new Set([\`\${0}-\${0}\`]);
}`,hk=`let length = 0;

while (queue.length > 0) {
  const queueLength = queue.length;

  for (let i = 0; i < queueLength; i++) {
    const [r, c] = queue.shift(); // представим, что это операция очереди dequeue

    if (r === ROWS - 1 && c === COLS - 1) {
      return length;
    }
    
    const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for (const [dr, dc] of neighbors) {
      const newR = r + dr;
      const newC = c + dc;
      
      if (Math.min(newR, newC) < 0
        || newR === ROWS
        || newC === COLS
        || visited.has(\`\${newR}-\${newC}\`)
        || grid[newR][newC] === 1) {
        continue;
      }

      queue.push([newR, newC]);
      visited.add(\`\${newR}-\${newC}\`);
    }
  }
  
  length++;
}`,pk=`function bfs(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [[0, 0]]; // представим, что это очередь, чтобы не занимать место реализацией очереди
  const visited = new Set([\`\${0}-\${0}\`]);
  
  let length = 0;
  
  while (queue.length > 0) {
    const queueLength = queue.length;
  
    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift(); // представим, что это операция очереди dequeue
  
      if (r === ROWS - 1 && c === COLS - 1) {
        return length;
      }
      
      const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      
      for (const [dr, dc] of neighbors) {
        const newR = r + dr;
        const newC = c + dc;
        
        if (Math.min(newR, newC) < 0
          || newR === ROWS
          || newC === COLS
          || visited.has(\`\${newR}-\${newC}\`)
          || grid[newR][newC] === 1) {
          continue;
        }
  
        queue.push([newR, newC]);
        visited.add(\`\${newR}-\${newC}\`);
      }
    }
    
    length++;
  }
}`;function mk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Поиск в ширину чаще всего используется для поиска кратчайшего пути в графе."}),t.jsx("p",{className:"mb-2",children:"Давайте сразу углубимся в вопрос. Вы заметите, что код BFS для графа похож на код BFS для деревьев, с некоторыми крайними случаями."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Найдите длину кратчайшего пути от верхнего левого угла сетки до правого нижнего."})}),t.jsx("p",{className:"mb-2",children:"Мы также можем использовать для этого DFS, но это более грубый подход. BFS более эффективен, поскольку при первом обнаружении вершины во время обхода расстояние от нашего источника даст нам кратчайший путь. Давайте посмотрим на код, учитывая следующую матрицу."}),t.jsx(L,{value:dk}),t.jsx("h2",{className:"font-bold my-2",children:"Первые шаги"}),t.jsxs("p",{className:"mb-2",children:["Как и в предыдущей статье, мы запишем количество наших строк и столбцов, что говорит нам, где находятся наши границы. Мы будем использовать ",t.jsx("code",{children:"Set"})," ","для отслеживания посещённых вершин. Мы будем использовать очередь, чтобы отслеживать все посещённые вершины на каждом уровне и определять, на каком уровне мы находимся в данный момент. Мы можем инициализировать нашу очередь первой вершиной ",t.jsx("code",{children:"[0, 0]"})," и пометить ее как посещённую. Это наша отправная точка."]}),t.jsx(L,{value:uk}),t.jsx("h2",{className:"font-bold my-2",children:"BFS для графа"}),t.jsxs("p",{className:"mb-2",children:["Нам предлагается найти длину кратчайшего пути. После первых шагов мы можем инициализировать переменную ",t.jsx("code",{children:"length"})," значением ",t.jsx("code",{children:"0"}),". Затем, как и в случае с BFS для деревьев, мы можем запустить цикл ",t.jsx("code",{children:"while"})," для нашей очереди и сделать снимок длины очереди. Здесь, когда мы извлекаем элемент из очереди, мы получаем ",t.jsx("code",{children:"r"})," (строку) и ",t.jsx("code",{children:"c"})," (столбец). В случае с деревьями следующим шагом было посещение дочерних узлов извлечённого узла. Здесь мы посещаем соседей извлечённой вершины. Нам придётся сделать это только в том случае, если мы еще не достигли правого нижнего угла, то есть когда"," ",t.jsx("code",{children:"r === ROWS - 1"})," и ",t.jsx("code",{children:"c === COLS - 1"}),"."]}),t.jsxs("p",{className:"mb-2",children:["В лучшем случае мы сможем двигаться во всех четырёх направлениях, не выходя за пределы сетки. Для этого мы можем сохранить двумерный массив —"," ",t.jsx("code",{children:"neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]"}),". Хотя технически это не соседи, массив просто представляет направления, в которых мы можем двигаться — вправо, влево, вверх, вниз соответственно."]}),t.jsxs("p",{className:"mb-2",children:["Код в блоке ",t.jsx("code",{children:"if"})," такой же, как и в DFS. Если мы вышли за пределы, координата заблокирована или вершина уже посещена, мы переходим к следующей итерации. В противном случае мы добавляем всех соседей в очередь и добавляем их в"," ",t.jsx("code",{children:"Set"}),", чтобы гарантировать, что мы не посетим их снова. Обратите внимание, как мы добавляем в ",t.jsx("code",{children:"Set"})," сразу после добавления в очередь. Таким образом, в нашей очереди никогда не будет дважды встречаться один и тот же элемент, что помогает сделать ее более эффективной с точки зрения сложности по времени, о чём мы поговорим позже. Следующий фрагмент кода после первых шагов выглядит так."]}),t.jsx(L,{value:hk}),t.jsx("p",{className:"mb-2",children:"Объединив всё это вместе, мы получим следующее."}),t.jsx(L,{value:pk}),t.jsx("p",{className:"mb-2",children:"Ниже мы можем визуализировать этот алгоритм применительно к нашей матрице. Числа и кружки одного цвета обозначают длину пути в этой конкретной вершине."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск в ширину в графе, представленным матрицей",className:"mx-auto",height:"1200",src:ck,width:"1150"})}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы никогда не посещаем координату дважды, в худшем случае мы посещаем каждую координату не более одного раза. Если ",t.jsx("i",{children:"n"})," — количество строк, а"," ",t.jsx("code",{children:"m"})," — количество столбцов, это даёт нам сложность по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"}),")."]})]})}const fk="/my-textbook/assets/matrix-depth-first-search1-eK3W1qKx.png",gk="/my-textbook/assets/matrix-depth-first-search2-VzR_x2z8.png",bk=`const matrix = [[0, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 1],
               [0, 1, 0, 0]];`,xk=`function dfs(grid, r, c, visit) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  if (Math.min(r, c) < 0 || r === ROWS || c === COLS ||
    visit.has(\`\${r}-\${c}\`) || grid[r][c] === 1) {
    return 0;
  }
  
  if (r === ROWS - 1 && c === COLS - 1) {
    return 1;
  }
  
  visit.add(\`\${r}-\${c}\`);

  let count = 0;
  count += dfs(grid, r + 1, c, visit);
  count += dfs(grid, r - 1, c, visit);
  count += dfs(grid, r, c + 1, visit);
  count += dfs(grid, r, c - 1, visit);

  visit.delete(\`\${r}-\${c}\`);
  return count;
}`;function Ek(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Как нам применить поиск в глубину к графам? Лучше всего показать это на примере."}),t.jsx("p",{className:"mb-2",children:"Предположим, нам необходимо решить следующую задачу:"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Подсчитайте уникальные пути от левого верхнего угла до правого нижнего. Один путь может проходить только через нули и не может посещать одну и ту же ячейку более одного раза."})}),t.jsx(L,{value:bk}),t.jsx("p",{className:"mb-2",children:"В этой задаче всё зависит от выбора. Вы можете подумать, что это похоже на бэктрекинг, и будете правы. Ранее мы упоминали, что DFS рекурсивен по своей природе, и для решения этой задачи мы будем использовать рекурсию. Во-первых, нам нужно подумать о нашем базовом случае(ах). Что ж, мы знаем, что можем двигаться во всех четырёх направлениях, кроме диагонального. Это означает, что если мы выйдем за пределы, мы можем вернуть ноль."}),t.jsx("p",{className:"mb-2",children:"Мы знаем, что это будет метод грубой силы, DFS с бэктрекингом, поскольку в любой точке нашего пути у нас может не быть допустимого способа добраться до правого нижнего угла, и в этом случае нам придётся вернуться."}),t.jsx("p",{className:"mb-2",children:"Для начала давайте определимся с нашими базовыми случаями. Поскольку мы пытаемся найти количество уникальных путей, нам нужно вести подсчёт допустимых путей из каждой вершины."}),t.jsx("h2",{className:"font-bold my-2",children:"Базовые случаи"}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Уникального пути не существует"}),t.jsxs("p",{className:"mb-2",children:["Поскольку нам разрешено двигаться во всех четырёх направлениях, вполне возможно, что во время нашего обхода мы в конечном итоге выйдем за пределы матрицы. Это означает, что либо наш столбец ",t.jsx("code",{children:"c"}),", либо наша строка"," ",t.jsx("code",{children:"r"})," становятся отрицательными или выходят за пределы длины нашей матрицы. Не имеет значения, что из ",t.jsx("code",{children:"r"})," и ",t.jsx("code",{children:"c"})," выходит за пределы, потому что для выполнения поиска нам нужен действительный"," ",t.jsx("code",{children:"c"})," ",t.jsx("strong",{children:"И"})," действительный ",t.jsx("code",{children:"r"}),". Мы не можем выполнить поиск по ",t.jsx("code",{children:"matrix[-1][3]"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Если мы уже посетили координату или текущая координата равна ",t.jsx("code",{children:"1"}),", то допустимого пути через эту координату не существует."]}),t.jsxs("p",{className:"mb-2",children:["Поэтому, поскольку во всех вышеупомянутых случаях допустимого пути не существует, мы вернём ",t.jsx("code",{children:"0"}),", что означает отсутствие уникального пути. Скоро мы увидим это в нашем коде."]})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Уникальный путь существует"}),t.jsxs("p",{className:"mb-2",children:["Если мы не вернули ",t.jsx("code",{children:"0"})," из первого случая, и мы достигли самого правого столбца и самой нижней строки, это должно быть тот случай, когда мы нашли действительный путь. Помните, что наше определение допустимого пути — это существование пути от ",t.jsx("code",{children:"matrix[0][0]"})," до"," ",t.jsx("code",{children:"matrix[3][3]"}),". Теперь мы можем вернуть ",t.jsx("code",{children:"1"}),", и это увеличит наш счётчик количества уникальных путей."]})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsx("p",{className:"mb-2",children:"Чтобы гарантировать, что мы не посетим координату более одного раза, мы добавляем её в глобальный HashSet после посещения."}),t.jsxs("p",{className:"mb-2",children:["Затем по любой заданной координате мы можем рекурсивно выполнить наш DFS для"," ",t.jsx("code",{children:"r + 1"}),", ",t.jsx("code",{children:"r - 1"}),", ",t.jsx("code",{children:"c + 1"})," и ",t.jsx("code",{children:"c - 1"}),". Если наш рекурсивный вызов вернет ",t.jsx("code",{children:"1"}),", наш счётчик будет увеличен, и если он вернёт ",t.jsx("code",{children:"0"}),", добавление его к счётчику не будет иметь никакого значения."]}),t.jsx("p",{className:"mb-2",children:"При каждом рекурсивном вызове мы можем удалить все строки и столбцы, которые привели нас к недопустимому пути. Таким образом, мы можем гарантировать, что посетим их снова, но выберем другое направление и проверим, существует ли действительный путь с этого направления."}),t.jsxs("p",{className:"mb-2",children:["В приведённом ниже коде мы настроили вышеупомянутые базовые случаи. Затем мы добавляем текущую строку и столбец в наш ",t.jsx("code",{children:"Set"}),". Наш счётчик инициализируется с ",t.jsx("code",{children:"0"}),", потому что нам нужно отслеживать все возможные уникальные пути к месту назначения в любой заданной вершине. Как только наши рекурсивные вызовы вернутся, мы сможем удалить посещённые вершины из нашего"," ",t.jsx("code",{children:"Set"}),". Опять же, это потому, что они могут быть частью другого уникального пути, просто из другого источника. Итак, когда мы вернёмся назад, мы сможем посетить их снова."]}),t.jsx(L,{value:xk}),t.jsx("p",{className:"mb-2",children:"Чтобы визуализировать вышеизложенное в нашей матрице, мы можем разбить наш алгоритм на поиск исходного уникального пути, а затем вернуться назад, чтобы найти другой потенциально уникальный путь."}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Найдём первый уникальный путь"}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Поиск первого уникального пути",className:"mx-auto",height:"1000",src:fk,width:"1010"})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Возврат назад, чтобы найти другой потенциально уникальный путь"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Красная пунктирная линия представляет ещё один уникальный путь, достигнутый из ",t.jsx("code",{children:"matrix[0][3]"}),"."]})}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Возврат для поиска другого потенциального уникального пути",className:"mx-auto",height:"1340",src:gk,width:"1010"})})]})]}),t.jsxs("p",{className:"mb-2",children:["Наша функция возвращает ",t.jsx("code",{children:"2"}),", обозначая, что существуют ",t.jsx("code",{children:"2"})," ","уникальных пути от ",t.jsx("code",{children:"(0,0)"})," до ",t.jsx("code",{children:"(3,3)"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["К настоящему моменту мы знаем, что рассматриваем только худший случай. В худшем случае нам может потребоваться просмотреть каждую строку и столбец. По каждой координате мы можем двигаться во всех четырех направлениях. Каждая из координат, достигнутых при движении в каждом из этих четырех направлений, также сможет перемещаться вверх, вниз, влево или вправо. У нас есть четыре варианта из каждой позиции. Если мы хотим создать из этого дерево решений, каждый узел будет иметь не более четырех дочерних элементов. Дерево имеет коэффициент ветвления"," ",t.jsx("code",{children:"4"}),", а высота дерева равна размеру матрицы, которая равна всего"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"})]}),", где"," ",t.jsx("code",{children:t.jsx("i",{children:"n"})})," ","— количество строк, а"," ",t.jsx("code",{children:t.jsx("i",{children:"m"})})," ","это количество столбцов."]}),t.jsxs("p",{className:"mb-2",children:["Следовательно, мы получаем ",t.jsx("code",{children:"4"}),t.jsx("sup",{children:t.jsx("i",{children:"nm"})}),"."]}),t.jsxs("p",{className:"mb-2",children:["Сложностью по памяти будет весь стек вызовов, поскольку он рекурсивный. Следовательно, она составит ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"}),")."]})]})}const Tk="/my-textbook/assets/merge-sort-splitting-kUyITO9a.png",yk="/my-textbook/assets/merge-sort1-GE74dFUX.png",Sk="/my-textbook/assets/merge-sort2-HXaoqViu.png",Nk=`function mergeSort(array, left, right) {
  if (left < right) {
    const middle = Math.floor((left + right) / 2);

    mergeSort(array, left, middle); // сортируем левую половину
    mergeSort(array, middle + 1, right); // сортируем правую половину
    merge(array, left, middle, right); // объединяем отсортированные половины
  }

  return array;
}`,_k=`function merge(array, left, middle, right) {
  const leftLength = middle - left + 1;
  const rightLength = right - middle;

  const leftSubarray = new Array(leftLength);
  const rightSubarray = new Array(rightLength);

  for (let i = 0; i < leftLength; i++) {
    leftSubarray[i] = array[left + i];
  }

  for (let j = 0; j < rightLength; j++) {
    rightSubarray[j] = array[middle + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftLength && j < rightLength) {
    if (leftSubarray[i] <= rightSubarray[j]) {
      array[k] = leftSubarray[i];
      i++;
    } else {
      array[k] = rightSubarray[j];
      j++;
    }

    k++;
  }

  while (i < leftLength) {
    array[k] = leftSubarray[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    array[k] = rightSubarray[j];
    j++;
    k++;
  }
}`,Ak=`if (leftSubarray[i] <= rightSubarray[j]) {
  array[k] = leftSubarray[i];
  i++;
})`;function jk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Концепция сортировки слиянием очень проста. Будем продолжать разбивать массив пополам, пока размер подмассивов не достигнет единицы, отсортируем их и объединим отсортированные массивы, в результате чего получится окончательный отсортированный массив. Мы будем использовать рекурсию для этого. Точнее, рекурсию с двумя ветвями."}),t.jsxs("p",{className:"mb-2",children:["Возьмём массив из 5 элементов, например, ",t.jsx("code",{children:"[3, 2, 4, 1, 6]"}),". Наша задача — отсортировать массив в порядке возрастания или неубывания, если у нас есть дубликаты. Мы будем разбивать массив следующим образом."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Разбивка массива пополам",className:"mx-auto",height:"640",src:Tk,width:"840"})}),t.jsxs("p",{className:"mb-2",children:["Как уже отмечалось, у нас есть две ветви. Давайте сначала поработаем над сортировкой и объединением левой ветви. Сначала нам необходимо достичь базового случая, после чего мы сможем начать сортировку и объединение массивов вместе, получив в результате ",t.jsx("code",{children:"[2, 3, 4]"}),". Как только наша рекурсия достигнет базового случая, у нас появятся два подмассива: ",t.jsx("code",{children:"[3]"})," и"," ",t.jsx("code",{children:"[2]"}),". Нам нужен способ сравнить эти два элемента, чтобы знать, куда их поместить в исходный подмассив, то есть ",t.jsx("code",{children:"[3, 2]"}),". Для этого создаются копии обоих подмассивов, и с помощью двух указателей значения сравниваются и помещаются в исходный подмассив в отсортированном порядке. Это можно увидеть в псевдокоде ниже."]}),t.jsx(L,{value:Nk}),t.jsx("h2",{className:"font-bold my-2",children:"Визуализация и псевдокод"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Рекурсивный вызов ",t.jsx("code",{children:"mergeSort()"})]})}),t.jsxs("p",{className:"mb-2",children:["Используя рекурсию с двумя ветвями, мы решаем подзадачи обеих ветвей и «собираем» вместе решения подзадач, чтобы прийти к окончательному решению. Сначала мы отсортируем подмассив ",t.jsx("code",{children:"[3, 2]"})," до ",t.jsx("code",{children:"[2, 3]"})," — это часть"," ",t.jsx("code",{children:"mergeSort(array, left, middle)"}),". Теперь мы можем перейти к сортировке"," ",t.jsx("code",{children:"[4]"}),", что соответствует"," ",t.jsx("code",{children:"mergeSort(array, middle + 1, right)"}),". Важно отметить последовательность выполнения вызовов. Вызов ",t.jsx("code",{children:"merge()"})," не будет выполнен до тех пор, пока оба рекурсивных вызова ",t.jsx("code",{children:"mergeSort()"})," не вернутся к текущему подмассиву. На первом изображении ниже показана сортировка и объединение левой половины. На втором изображении показана сортировка и объединение второй половины для получения окончательно отсортированного массива."]}),t.jsx("img",{alt:"Сортировка левой половины",className:"mb-2",height:"400",src:yk,width:"1760"}),t.jsx("img",{alt:"Сортировка правой половины",height:"1340",src:Sk,width:"1739"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Чтобы убедиться, что приведённые выше изображения не сбивают с толку, на них показано, как получается конечный массив, который является результирующим массивом. Изображения визуализируют то, что происходит внутри функции"," ",t.jsx("code",{children:"merge()"}),"."]})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Функция ",t.jsx("code",{children:"merge()"})," и три указателя"]})}),t.jsxs("p",{className:"mb-2",children:["Как видно на изображении выше, у нас есть три указателя: ",t.jsx("code",{children:"k"}),","," ",t.jsx("code",{children:"j"})," и ",t.jsx("code",{children:"i"}),"."]}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsxs("li",{children:[t.jsx("code",{children:"k"})," отслеживает, где должен быть размещён следующий элемент в"," ",t.jsx("code",{children:"array"}),"."]}),t.jsxs("li",{children:[t.jsx("code",{children:"i"})," указывает на элемент в левом подмассиве, который в данный момент сравнивается с элементом ",t.jsx("code",{children:"j"})," в правом подмассиве."]}),t.jsxs("li",{children:["Один из ",t.jsx("code",{children:"i"})," или ",t.jsx("code",{children:"j"})," будет увеличиваться в зависимости от того, какой элемент меньше."]}),t.jsxs("li",{children:[t.jsx("code",{children:"k"})," будет увеличиваться в любом случае, потому что внутри"," ",t.jsx("code",{children:"array"})," будет помещен элемент независимо от того, какой из"," ",t.jsx("code",{children:"i"})," или ",t.jsx("code",{children:"j"})," увеличивается."]})]}),t.jsxs("p",{className:"mb-2",children:["Это ясно видно на изображении выше и показано в псевдокоде функции"," ",t.jsx("code",{children:"merge()"})," ниже."]}),t.jsx(L,{value:_k}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Хотя изображения демонстрируют только слияние конечного подмассива, рекурсия подразумевает, что слияние происходит на каждом уровне после сортировки массивов, потому что мы бы никогда не получили окончательный массив, если бы подмассивы не были отсортированы и объеденены."})}),t.jsx("h2",{className:"font-bold my-2",children:"Устойчивость"}),t.jsxs("p",{className:"mb-2",children:["Сортировка слиянием является ",t.jsx("strong",{children:"устойчивым"})," алгоритмом, потому что если у нас есть пара дубликатов, скажем, ",t.jsx("code",{children:"7"}),", то ",t.jsx("code",{children:"7"})," в левом подмассиве всегда попадёт в объединённый массив раньше, чем ",t.jsx("code",{children:"7"})," в правом подмассиве. Это связано с тем, что когда мы сравниваем ",t.jsx("code",{children:"i-й"})," ","элемент в левом подмассиве с ",t.jsx("code",{children:"j-м"})," элементом в правом подмассиве на предмет равенства, мы выбираем элемент в левом подмассиве, сохраняя относительный порядок. Вспомним следующий псевдокод из функции ",t.jsx("code",{children:"merge()"}),"."]}),t.jsx(L,{value:Ak}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("p",{className:"mb-2",children:["Как же сортировка слиянием соотносится с сортировкой вставками? В худшем случае сортировка вставками составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"), когда сортировка слиянием составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),") в худшем, среднем и лучшем случаях, что делает сортировку слиянием более эффективной. Единственный случай, когда сортировка вставками может быть предпочтительнее, это когда известно, что массив имеет мало элементов и уже отсортирован или почти отсортирован, поскольку при этом будет пропущена перестановка. Однако сортировка слиянием более эффективна с точки зрения времени, потому что, если мы не знаем размер входящих данных, сортировка вставками будет работать хуже, чем сортировка слиянием."]})]})}const vk=`const names = ['Илья', 'Михаил', 'Александр', 'Роман', 'Александр', 'Дмитрий'];
const frequencyMap = {};

names.forEach((name) => {
  if (frequencyMap[name]) {
    frequencyMap[name]++;
  } else {
    frequencyMap[name] = 1;
  }
});

console.log(frequencyMap); // { Илья: 1, Михаил: 1, Александр: 2, Роман: 1, Дмитрий: 1 }`;function wk(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Объект — это коллекция свойств, состоящая из пар ключ/значение. В других языках программирования подобную структуру данных также называют хеш-таблицей или хеш-картой. ",t.jsx("code",{children:"Map"})," – это коллекция ключ/значение, как и объект. Но основное отличие в том, что ",t.jsx("code",{children:"Map"})," позволяет использовать ключи любого типа."]}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("caption",{className:"caption-bottom",children:"Сравнение объектов и массив по сложности по времени"}),t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsxs("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:["Объект/",t.jsx("code",{children:"Map"})]}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Массив"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Вставка"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Поиск"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"log n"}),"), если массив отсортирован"]})]})]})]}),t.jsx("p",{children:"Недостатком объектов является то, что они не упорядочены."}),t.jsx("p",{children:"Объекты не допускают существование двух одинаковых ключей. Представим, что у нас есть массив имён и необходимо подсчитать, как часто встречается каждое имя. Мы можем создать объект, в котором ключами будут имена, а значением — то, сколько раз это имя встречается в массиве. Если имени в объекте нет, то мы добавляем его со значением 1, иначе инкрементируем значение по этому имени."}),t.jsx(L,{value:vk})]})}const Rk="/my-textbook/assets/factorial1-N4-Kzin5.png",Ik="/my-textbook/assets/factorial2-JLfb35tA.png",Ck=`function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}`,kk=`let n = 5;
let result = 1;

while (n > 1) {
  result *= n;
  n--;
}`;function Ok(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Рекурсия — это когда функция вызывает саму себя с как правило меньшим входным значением. Когда итеративная функция будет использовать циклы ",t.jsx("code",{children:"for"})," и"," ",t.jsx("code",{children:"while"}),", рекурсивная функция будет вызывать саму себя до тех пор, пока не будет достигнут базовый случай."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Рекурсивные функции состоят из двух частей:"})}),t.jsxs("ul",{className:"list-disc list-inside mb-2",children:[t.jsx("li",{children:t.jsx("strong",{children:"Базовый случай"})}),t.jsx("li",{children:t.jsx("strong",{children:"Функция, вызывающая саму себя с другим входным значением"})})]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Существует два типа рекурсии: с одной ветвью и с двумя ветвями. Сначала рассмотрим рекурсию с одной ветвью."})}),t.jsxs("p",{className:"mb-2",children:["Рекурсию лучше всего объяснить на примере. Возьмём ",t.jsx("i",{children:"n"})," факториал из математики, формула для которого:"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"}),"! = ",t.jsx("i",{children:"n"})," * (",t.jsx("i",{children:"n"})," - 1) * (",t.jsx("i",{children:"n"})," - 2) * ...1"]}),". ",t.jsx("i",{children:"n"}),"! — это всего лишь краткий способ представления совокупного произведения всех чисел от ",t.jsx("i",{children:"n"})," до 1. Более короткий способ записи этого будет следующий:"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"}),"! = ",t.jsx("i",{children:"n"})," * (",t.jsx("i",{children:"n"})," - 1)!"]}),", то есть ",t.jsx("code",{children:"5! = 5 * 4!"}),". Это показано на изображении и псевдокоде ниже."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Представление факториала",className:"mx-auto",height:"780",src:Rk,width:"200"})}),t.jsx(L,{value:Ck}),t.jsxs("p",{className:"mb-2",children:["В последней строке в операторе ",t.jsx("code",{children:"return"})," функция вызывает саму себя с другим входным значением. Давайте проанализируем это. У нас есть две части:"," ",t.jsx("strong",{children:"базовый случай"})," и ",t.jsx("strong",{children:"вызывающая саму себя функция"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Когда код достигает последней строки с переданным значением 5, мы получаем"," ",t.jsx("code",{children:"5 * factorial(4)"}),", что снова начинает выполнение функции, только теперь со значением 4, после чего мы получаем ",t.jsx("code",{children:"4 * factorial(3)"}),", и затем ",t.jsx("code",{children:"3 * factorial(2)"}),", и, наконец, ",t.jsx("code",{children:"2 * factorial(1)"}),", после чего достигается базовый случай."]}),t.jsxs("p",{className:"mb-2",children:["Но что происходит, когда достигается базовый случай? Когда функция вызывается с переданным значением ",t.jsx("code",{children:"1"}),", возвращается ",t.jsx("code",{children:"1"}),", и теперь это значение можно умножить на 2, что приведёт к ",t.jsx("code",{children:"2"}),", что будет ответом для"," ",t.jsx("code",{children:"2!"}),". Пока мы решили только первую подзадачу. Теперь мы вычисляем"," ",t.jsx("code",{children:"3 * factorial(2)"}),", в результате чего получаем ",t.jsx("code",{children:"6"}),", затем"," ",t.jsx("code",{children:"4 * factorial(3)"}),", получая ",t.jsx("code",{children:"24"}),", и, наконец,"," ",t.jsx("code",{children:"5 * factorial(4)"}),", получая ",t.jsx("code",{children:"120"})," — окончательный ответ для"," ",t.jsx("code",{children:"5!"}),". ",t.jsx("strong",{children:"Самая важная часть"})," заключается в том, что когда мы достигаем базового случая, мы возвращаемся «вверх» по дереву рекурсии, потому что теперь нам нужно «собрать» воедино ответы на наши подзадачи, чтобы прийти к окончательному решению."]}),t.jsx("p",{className:"mb-2",children:"Этот процесс визуализирован ниже."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Расчёт факториала",className:"mx-auto",height:"780",src:Ik,width:"1060"})}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Как уже отмечалось, мы взяли исходную задачу ",t.jsx("code",{children:"factorial(5)"})," и разбили её на более мелкие подзадачи, и, объединив ответы на эти подзадачи, мы смогли решить исходную задачу. Важно отметить, что если в рекурсии нет базового случая, последняя строка будет выполняться вечно, что приведёт к переполнению стека!"]})}),t.jsx("h2",{className:"font-bold my-2",children:"Анализ сложности по времени и памяти"}),t.jsxs("p",{className:"mb-2",children:["Всего выполняется ",t.jsx("i",{children:"n"})," вызовов функции ",t.jsx("code",{children:"factorial"}),", в результате чего сложность по времени составляет ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Кроме того, сложность по памяти также будет равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Поскольку выполняется ",t.jsx("i",{children:"n"})," ","рекурсивных вызовов, получается ",t.jsx("i",{children:"n"})," стеков, что приводит к сложности по памяти ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Циклы и рекурсия"}),t.jsx("p",{className:"mb-2",children:"Любой рекурсивный алгоритм можно написать итеративно, и наоборот. Итеративная реализация вычисления факторила будет выглядеть так:"}),t.jsx(L,{value:kk}),t.jsxs("p",{className:"mb-2",children:["В итеративном случае мы сохраняем наш ответ в переменноё с именем"," ",t.jsx("code",{children:"result"})," и уменьшаем ",t.jsx("code",{children:"n"})," до тех пор, пока ",t.jsx("i",{children:"n"})," не станет равным ",t.jsx("code",{children:"1"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Рекурсия станет очень полезной, когда мы доберёмся до деревьев, поскольку её можно легко использовать для поиска в глубину."})]})}const PS="/my-textbook/assets/fibonacci1-QuwxS_DN.png",Lk="/my-textbook/assets/one-dimension-dp-PoJhDJS2.png",Dk=`function bruteForce(n) {
  if (n <= 1) {
    return n;
  }

  return bruteForce(n - 1) + bruteForce(n - 2);
}`,Mk=`function memoization(n, cache) {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);

  return cache[n];
}`,Fk=`function dp(n) {
  if (n < 2) { 
    return n;
  }
  
  const dp = [0,1]
  let i = 2;
  
  while (i <= n) {
    const tmp = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = tmp;
    i++;
  }
  
  return dp[1];
}`;function Pk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Динамическое программирование — это, вероятно, тема, которой люди боятся больше всего, но мы постараемся объяснить её интуитивно."}),t.jsx("h2",{className:"font-bold my-2",children:"Что такое динамическое программирование?"}),t.jsxs("p",{className:"mb-2",children:["Проще говоря, это оптимизированная версия рекурсии. Она берёт большую проблему и решает её, разбивая её на более мелкие проблемы. Причина, по которой мы говорим, что это оптимизированная рекурсия, заключается в том, что она более оптимальна, когда речь идет о времени и памяти. Давайте вернёмся к последовательности Фибоначчи, которую мы обсуждали ранее в этом справочнике. Мы рассчитали ",t.jsx("i",{children:"n"}),"-е число Фибоначчи по формуле: ",t.jsx("i",{children:"F"}),"(",t.jsx("i",{children:"n"}),") = ",t.jsx("i",{children:"F"}),"(",t.jsx("i",{children:"n"})," - 1) + ",t.jsx("i",{children:"F"}),"(",t.jsx("i",{children:"n"})," - 2) со следующим кодом:"]}),t.jsx(L,{value:Dk}),t.jsxs("p",{className:"mb-2",children:["Мы также установили, что сложность по времени приведённого выше алгоритма равна"," ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"), поскольку на каждом уровне ",t.jsx("code",{children:"bruteForce"})," создает еще 2 вызова"," ",t.jsx("code",{children:"bruteForce"}),". С помощью динамического программирования мы можем значительно повысить производительность этого алгоритма и довести его с ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),") до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Динамическое программирование против рекурсии"}),t.jsxs("p",{className:"mb-2",children:["Если мы посмотрим на дерево ",t.jsx("code",{children:"bruteForce(5)"})," ниже, то увидим, что мы вычисляем ",t.jsx("code",{children:"F(2)"})," три раза, что требует дополнительной работы, поскольку мы уже вычислили значение ",t.jsx("code",{children:"F(2)"}),". Это не кажется большой проблемой, когда входные данные малы, но по мере их роста объём проделанной работы растёт экспоненциально, что станет чрезвычайно медленным, если у нас будет что-то вроде вычисления 100 числа Фибоначчи."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Последовательность Фибоначчи в виде дерева",className:"mx-auto",height:"580",src:PS,width:"1180"})}),t.jsxs("p",{className:"mb-2",children:["Динамическое программирование говорит нам, что мы можем избежать повторения этих вычислений с помощью концепции, называемой ",t.jsx("strong",{children:"мемоизацией"}),". Идея здесь заключается в том, что после выполнения вычисления мы можем сохранить его в кэше, в данном случае ",t.jsx("code",{children:"F(2)"}),", и если мы снова встретимся с тем же вычислением, мы сможем получить результат из нашего кэша. В этом, по сути, и состоит идея динамического программирования — рекурсия с мемоизацией."]}),t.jsxs("p",{className:"mb-2",children:["Чтобы представить наш кэш, мы можем использовать объект для отслеживания уже выполненных вычислений. Ключом будет число Фибоначчи, а значением будет его возвращаемое значение. Таким образом, мы можем получить данные за время ",t.jsx("i",{children:"O"}),"(1)."]}),t.jsx(L,{value:Mk}),t.jsx("h2",{className:"font-bold my-2",children:"Метод динамического программирования сверху"}),t.jsx("p",{className:"mb-2",children:"Вышеупомянутый подход известен как «метод динамического программирования сверху», и это связано с тем, что мы обходим дерево от корня и спускаемся вниз до наших базовых случаев, что в любом случае по сути является рекурсией. Конечно, динамическое программирование сверху писать легче, но существует и динамическое программирование снизу."}),t.jsx("p",{className:"mb-2",children:"Динамическое программирование снизу начинается с базовых случаев и продвигается вверх. На самом деле это делается с помощью циклов и лучше просто потому, что не требует лишних расходов на рекурсивные вызовы. Многие люди считают динамическое программирование снизу «настоящим» динамическим программированием."}),t.jsx("p",{className:"mb-2",children:"Давайте воспользуемся методом динамического программирования снизу для решения той же проблемы."}),t.jsx("h2",{className:"font-bold my-2",children:"Метод динамического программирования снизу"}),t.jsxs("p",{className:"mb-2",children:["Мы вычисляем значение ",t.jsx("i",{children:"n"}),", используя ",t.jsx("i",{children:"n"})," − 1 и ",t.jsx("i",{children:"n"})," − 2. Давайте теперь предположим, что у нас есть массив из 6 элементов, который поможет нам вычислить 5-е число Фибоначчи, где значение, хранящееся в ",t.jsx("code",{children:"i"}),"-м индексе массива, представляет значение Фибоначчи для ",t.jsx("code",{children:"i"}),". Это будет выглядеть следующим образом: ",t.jsx("code",{children:"[0, 1, 1, 2, 3, 5]"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени для этого равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), и сложность по памяти также равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Реальный вопрос здесь в том, нужно ли нам вообще выделять место для всего массива. Если подумать, мы всегда используем только два предыдущих значения для расчёта текущего значения."]}),t.jsx("p",{className:"mb-2",children:"Динамическое программирование сообщает нам, что можно сохранить только два предыдущих значения, а затем использовать их для расчёта следующего значения(ий)."}),t.jsxs("p",{className:"mb-2",children:["Итак, если мы возьмём массив из 2 элементов, мы сможем снизить нашу сложность по памяти до ",t.jsx("i",{children:"O"}),"(1). Сделав это, мы можем просто сохранить число Фибоначчи по 1-му индексу во временной переменной, вычислить следующее число Фибоначчи и перезаписать значение 1-го индекса вновь вычисленным числом Фибоначчи и, наконец, перезаписать 0-й индекс нашей временной переменной. Обратите внимание на следующее: числа над массивом, выделенные белым цветом, представляют индекс, а числа красного цвета представляют числа Фибоначчи."]}),t.jsx(L,{value:Fk}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Вычисление пятого числа Фибоначчи с помощью динамического программирования",className:"mx-auto",height:"229",src:Lk,width:"1019"})}),t.jsxs("p",{className:"mb-2",children:["С помощью приведённого выше кода мы снизили сложность по времени до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), потому что наш цикл идёт до ",t.jsx("i",{children:"n"}),", и количество наших операций будет линейно зависеть от размера нашего ",t.jsx("i",{children:"n"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Мы также довели сложность по памяти до ",t.jsx("i",{children:"O"}),"(1), потому что независимо от того, насколько велико наше ",t.jsx("i",{children:"n"}),", нам всегда будет нужен массив из 2 элементов."]}),t.jsx("p",{className:"mb-2",children:"Здесь мы использовали только одномерный массив, но также существует двумерное динамическое программирование, которое мы рассмотрим позже."})]})}const Uk="/my-textbook/assets/palindromes1-J1ljymZA.png",Bk="/my-textbook/assets/palindromes2-_UER2rUI.png",Hk="/my-textbook/assets/palindromes3-CFh6bWqW.png",Gk=`function longest(s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    // нечётная длина
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }

      l--;
      r++;
    }
  }

  return length;
}`,$k=`function longest(s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    // нечётная длина
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }

      l--;
      r++;
    }

    // чётная длина
    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }
  
      l--;
      r++;
    }
  }

  return length;
}`,zk=`function longest2(s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    // нечётная длина
    length = Math.max(length, helper(s, i, i));
    
    // чётная длина
    length = Math.max(length, helper(s, i, i + 1)); 
  }
    
  return length;
}

function helper(s, l, r) {
  let maxLength = 0;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    if (r - l + 1 > maxLength) {
      maxLength = r - l + 1;
    }

    l--;
    r++;
  }

  return maxLength;
}`;function Vk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Удивительно, но задачи с палиндромами также можно решить с помощью динамического программирования. Хотя шаблон, по которому они решаются, не является типичным подходом DFS/мемоизации/динамического программирования снизу. Лучше всего продемонстрировать это на примере."}),t.jsx("p",{className:"mb-2",children:"Предположим, перед нами стоит следующий вопрос:"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Дана строка S, верните длину самой длинной палиндромной подстроки внутри S."})}),t.jsx("p",{className:"mb-2",children:"Палиндром — это последовательность символов, которая одинаково читается как в прямом, так и в обратном направлении. Например, «racecar» или «aba». Итак, по определению палиндромная подстрока — это непрерывная часть строки, которая является палиндромом."}),t.jsx("p",{className:"mb-2",children:"В статье о методе двух указателей мы обсуждали, как определить, является ли строка палиндромом. Однако здесь мы сталкиваемся с вариацией, а именно нахождением длины самой длинной палиндромной подстроки."}),t.jsx("h2",{className:"font-bold my-2",children:"Подход грубой силы"}),t.jsxs("p",{className:"mb-2",children:["Самый простой способ решить эту задачу — просмотреть все возможные подстроки и определить, являются ли они палиндромами, используя метод двух указателей. Если"," ",t.jsx("i",{children:"n"})," — количество символов в нашей строке, а количество подстрок, которые может образовывать каждый символ, линейно увеличивается до ",t.jsx("i",{children:"n"}),", всего у нас будет ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"})," подстрок. Затем, учитывая эти ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"})," подстрок и самую длинную подстроку длиной ",t.jsx("i",{children:"n"}),", общая сложность по времени достигает ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"3"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Подход динамического программирования"}),t.jsxs("p",{className:"mb-2",children:["Если мы сравним первый и последний символ и они равны, подзадача состоит в том, чтобы определить, является ли внутренняя строка, за исключением символов по индексам ",t.jsx("code",{children:"0"})," и ",t.jsx("code",{children:"length - 1"}),", палиндромом. Если внутренняя строка является палиндромом, как и самые внешние символы, мы знаем, что вся подстрока является палиндромом."]}),t.jsxs("p",{className:"mb-2",children:["Подход к этой проблеме с помощью динамического программирования говорит нам, что сначала мы должны решить подзадачу. Учитывая строку"," ",t.jsx("code",{children:"s = 'abaab'"}),", мы можем начать с середины и расширяться наружу. Однако это даст нам только палиндромные подстроки с символом"," ",t.jsx("code",{children:"a"})," в середине. Это не гарантирует, что мы получим самую длинную палиндромную подстроку, а в случае ",t.jsx("code",{children:"s"})," этот подход не работает, поскольку самая длинная палиндромная подстрока — это ",t.jsx("code",{children:"baab"}),", которая не образуется путем расширения из ",t.jsx("code",{children:"a"})," по 2-му индексу."]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["На изображении ниже показаны все подстроки, где символ ",t.jsx("code",{children:"a"})," по индексу 2 является средним символом."]})}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Полиндромные подстроки для символа из середины строки",className:"mx-auto",height:"360",src:Uk,width:"760"})}),t.jsxs("p",{className:"mb-2",children:["Поскольку не гарантируется, что выбор среднего символа приведет к созданию самой длинной палиндромной подстроки, единственный способ — выбрать каждый символ и расширить его, используя левый и правый указатель. Для этого мы можем запустить цикл ",t.jsx("code",{children:"for"})," по нашей строке и на каждой итерации устанавливать начальную позицию левого и правого указателя на текущий символ. Затем, пока наши левая и правая стороны не выходят за пределы, а символ слева соответствует символу справа, мы можем уменьшать левый и увеличивать правый указатели (это часть расширения). Затем мы можем взять разницу между нашим левым и правым указателем и добавить"," ",t.jsx("code",{children:"1"}),", чтобы включить все элементы. Это показано на изображении и в коде ниже:"]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Полиндромные подстроки для каждого символа в качестве середины подстроки",className:"mx-auto",height:"660",src:Bk,width:"1200"})}),t.jsx(L,{value:Gk}),t.jsxs("p",{className:"mb-2",children:["Вы заметили небольшую ошибку? Самая длинная палиндромная подстрока имеет длину"," ",t.jsx("code",{children:"3"}),", но мы ясно видим, что это должна быть длина ",t.jsx("code",{children:"baab"})," —"," ",t.jsx("code",{children:"4"}),", которую наш алгоритм не смог учесть. Вы также могли заметить, что все приведённые выше палиндромы имеют нечётную длину. Это потому, что наша начальная подстрока имеет длину ",t.jsx("code",{children:"1"}),", и когда мы расширяем слева и справа, мы добавляем ",t.jsx("code",{children:"2"})," к нашей длине. Конечно, сумма чётного и нечётного числа всегда нечётна, в результате чего мы получаем самую длинную палиндромную подстроку нечётной длины."]}),t.jsx("h2",{className:"font-bold my-2",children:"Подстроки чётной длины"}),t.jsxs("p",{className:"mb-2",children:["Чтобы гарантировать, что мы получим самую длинную палиндромную подстроку, чётную или нечётную, нам нужно начать с начальной подстроки чётной длины. Таким образом, мы учтём и подстроки чётной длины. Чтобы вычислить самую длинную палиндромную подстроку, мы можем вернуть ",t.jsx("code",{children:"Math.max(нечётная, чётная)"}),". На изображении ниже мы начинаем с ",t.jsx("code",{children:"ab"})," и пытаемся расшириться наружу. Поскольку ",t.jsx("code",{children:"ab"})," не является палиндромом, мы никогда не войдём в цикл"," ",t.jsx("code",{children:"while"}),". Когда мы доберёмся до ",t.jsx("code",{children:"aa"}),", расширение наружу даст нам ",t.jsx("code",{children:"baab"}),", прежде чем наш правый указатель выйдет за пределы. Это самая длинная палиндромная подстрока с длиной ",t.jsx("code",{children:"4"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Полиндромные подстроки для каждой пары символов в качестве середины подстроки",className:"mx-auto",height:"560",src:Hk,width:"1200"})}),t.jsx("p",{className:"mb-2",children:"Наш окончательный код будет выглядеть следующим образом:"}),t.jsx(L,{value:$k}),t.jsx("p",{className:"mb-2",children:"Или переработанная версия со вспомогательной функцией, обеспечивающая более чистый код:"}),t.jsx(L,{value:zk}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени и памяти"}),t.jsxs("p",{className:"mb-2",children:["Решение динамического программирования доводит нашу сложность по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"3"}),") до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"), поскольку у нас есть ",t.jsx("i",{children:"n"})," символов, и формирование подстроки для каждого символа также требует ",t.jsx("i",{children:"n"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Переработанная версия кода была добавлена для полноты, поскольку она позволяет избежать написания дублирующегося кода."})]})}const Wk="/my-textbook/assets/permutations-Zwb7YYEw.png",qk="/my-textbook/assets/permutations-resursive-wCp_e1gR.png",Kk="/my-textbook/assets/permutations-iterative-cRRL7A1f.png",Yk=`function permutationsRecursive(nums) {
  return helper(0, nums);
}

function helper(i, nums) {
  if (i === nums.length) {
    return [[]];
  }

  const resultPermutations = [];
  const permutations = helper(i + 1, nums);

  for (let permutation of permutations) {
    for (let j = 0; j < permutation.length + 1; j++) {
      const permutationCopy = [...permutation];
      permutationCopy.splice(j, 0, nums[i]);
      resultPermutations.push(permutationCopy);
    }
  }

  return resultPermutations; 
}`,Xk=`function permutationsIterative(nums) {
    let permutations = [[]];

    for (let n of nums) {
        const nextPermutations = new Array();
        for (let permutation of permutations) {
            for (let i = 0; i < permutation.length + 1; i++) {
                const permutationCopy = [...permutation];
                permutationCopy.concat(permutation);
                permutationCopy.splice(i, 0, n);
                nextPermutations.push(permutationCopy);
            }  
        }

        permutations = nextPermutations;
    }

    return permutations;
}`;function Zk(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Говоря математическим языком, перестановка множества различных объектов — это упорядоченное расположение этих объектов. В отличие от сочетаний, мы хотим использовать все данные нам элементы, то есть не пропускать элементы. Если у нас есть 4 элемента, мы можем создавать перестановки, переставляя элементы. Пока порядок расположения элементов различен, мы будем считать его допустимой перестановкой."}),t.jsx("h2",{className:"font-bold my-2",children:"Пример использования перестановок"}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Дан список чисел, верните все возможные различные перестановки чисел."})}),t.jsxs("p",{className:"mb-2",children:["Предположим, что ",t.jsx("code",{children:"nums = [1, 2, 3, 4]"}),". При каждой перестановке мы можем выбрать три других числа, исключая само число. Итак, для ",t.jsx("code",{children:"1"})," мы можем выбрать ",t.jsx("code",{children:"[2, 3, 4]"}),", и для ",t.jsx("code",{children:"2"})," мы можем выбрать"," ",t.jsx("code",{children:"[1, 3, 4]"}),". Обратите внимание, что элементы различны, но в то же время, если мы изменим порядок, у нас будет новая, допустимая перестановка. Вот как будут выглядеть визуализированные перестановки."]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Изображение ниже демонстрирует, как мы можем генерировать перестановки для всех чисел, если дан список ",t.jsx("code",{children:"[1, 2, 3, 4]"}),". Число перестановок здесь равно"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"}),"!"]}),", где ",t.jsx("i",{children:"n"})," — количество элементов в списке. ",t.jsx("code",{children:"4! = 24"}),", следовательно, получаем ",t.jsx("code",{children:"24"})," перестановки."]})}),t.jsx("img",{alt:"Все возможные перестановки",className:"mb-2",height:"701",src:Wk,width:"1601"}),t.jsxs("p",{className:"mb-2",children:["Каждая перестановка будет иметь размер ",t.jsx("i",{children:"n"}),", а количество перестановок, которые мы можем создать, равно"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"}),"!"]}),". Чтобы упростить реализацию, для каждого ",t.jsx("i",{children:"n"})," мы создадим копию наших текущих перестановок и для каждой из этих перестановок вставим ",t.jsx("i",{children:"n"})," в разные позиции, что даст нам новые перестановки. Например, если у нас есть ",t.jsx("code",{children:"[1, 2]"})," и"," ",t.jsx("code",{children:"n = 3"}),", мы сначала создадим копию ",t.jsx("code",{children:"[1, 2]"})," и будем выполнять цикл до ",t.jsx("code",{children:"[1, 2].length + 1"}),", и вставим ",t.jsx("code",{children:"3"})," в каждую позицию от ",t.jsx("code",{children:"0"})," до ",t.jsx("code",{children:"[1, 2].length + 1"}),", что даст"," ",t.jsx("code",{children:"[3, 1, 2]"}),", ",t.jsx("code",{children:"[1, 3, 2]"}),", ",t.jsx("code",{children:"[1, 2, 3]"}),". Затем мы сделаем то же самое для ",t.jsx("code",{children:"n = 4"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Для вставки в начало массива сложность по времени равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Это в сочетании с ",t.jsx("i",{children:"n"}),"! означает, что наша сложность по времени равна ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ⋅ ",t.jsx("i",{children:"n"}),"!), что технически не является стопроцентной точностью, о чем мы поговорим чуть позже."]}),t.jsx("p",{className:"mb-2",children:"Мы собираемся реализовать два решения: рекурсивное и итеративное."}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Рекурсивное решение"}),t.jsxs("p",{className:"mb-2",children:["Для рекурсивного решения мы можем использовать подход, описанный ранее. Большая часть работы выполняется с использованием функции ",t.jsx("code",{children:"helper"}),", которая принимает ",t.jsx("code",{children:"i"})," и ",t.jsx("code",{children:"nums"}),". ",t.jsx("code",{children:"i"})," — наш указатель, по которому мы проходим, а ",t.jsx("code",{children:"nums"})," — наш заданный список, который в данном случае равен ",t.jsx("code",{children:"[1, 2, 3, 4]"}),". Самая сложная часть этого решения — это, пожалуй, вложенный цикл ",t.jsx("code",{children:"for"}),"."]}),t.jsx(L,{value:Yk}),t.jsx("img",{alt:"Рекурсивный поиск перестановок",className:"mb-2",height:"300",src:qk,width:"280"})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:"Итеративное решение"}),t.jsxs("p",{className:"mb-2",children:["В итеративном решении вместо выполнения рекурсивного вызова мы просто будем перебирать числа, ",t.jsx("code",{children:"for (const n of nums)"}),". В конце каждой итерации мы можем обновить наши ",t.jsx("code",{children:"permutations"})," до значений"," ",t.jsx("code",{children:"nextPermutations"}),", чтобы не создавать одну и ту же копию на каждой итерации."]}),t.jsx(L,{value:Xk}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Визуализация того, как мы создаём итеративное решение. Различные цвета используются для обозначения того, что на каждой итерации у нас есть новая копия ",t.jsx("code",{children:"permutation"})," и что мы не используем одну и ту же копию повсюду."]})}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Итеративный поиск перестановок",className:"mx-auto",height:"380",src:Kk,width:"700"})})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Если количество предоставленных нам элементов равно ",t.jsx("i",{children:"n"}),", то для каждого элемента может быть ",t.jsx("i",{children:"n"}),"! перестановок. Однако внутри каждого цикла"," ",t.jsx("code",{children:"for"})," в обоих решениях есть еще один цикл ",t.jsx("code",{children:"for"}),", который работает от ",t.jsx("code",{children:"0"})," до длины каждой перестановки, которая равна ",t.jsx("i",{children:"n"}),", поскольку мы используем все элементы. ",t.jsx("i",{children:"n"})," ⋅ ",t.jsx("i",{children:"n"})," = ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),". В результате мы получаем ",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"})," ⋅ ",t.jsx("i",{children:"n"}),"!, что даёт ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"})," ⋅ ",t.jsx("i",{children:"n"}),"!)."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Это всё, что мы рассмотрим на тему бэктрекинга в этом справочнике. Это решение для перестановок могло показаться ошеломляющим, но это лишь один из способов, которым это можно сделать."})]})}const Qk="/my-textbook/assets/prefix-sum-D6JCYqXW.png",Jk=`class PrefixSum {
  constructor(nums) {
    this.prefix = [];

    let total = 0;

    for (const num of nums) {
      total += num;
      this.prefix.push(total);
    }
  }
}`,e4=`rangeSum(left, right) {
  const leftPrefix = left > 0 ? this.prefix[left - 1] : 0;
  const rightPrefix = this.prefix[right];
  
  return rightPrefix - leftPrefix;
}`;function t4(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Префиксная сумма — это очень полезная техника, которую можно использовать с массивами. Представим, что у нас есть массив ",t.jsx("code",{children:"nums = [2, -1, 3, -3, 4]"}),". Основная идея состоит в том, что мы создаём массив, скажем, ",t.jsx("code",{children:"prefix"}),", и заполняем его так, чтобы значение его индекса ",t.jsx("code",{children:"i"})," обозначало текущую сумму подмассива ",t.jsx("code",{children:"nums"}),", который начинается с ",t.jsx("code",{children:"0"})," и доходит до индекса ",t.jsx("code",{children:"i"})," включительно. Это чрезвычайно полезно, когда мы хотим получить сумму подмассива, заканчивающегося произвольным индексом ",t.jsx("code",{children:"i"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Таким образом, для массива ",t.jsx("code",{children:"[2, -1, 3, -3, 4]"})," префикс будет"," ",t.jsx("code",{children:"[2, 1, 4, 1, 5]"}),"."]}),t.jsx("p",{className:"mb-2",children:"Посмотрим на задачу, демонстрирующую эту концепцию."}),t.jsx("p",{className:"mb-2",children:"Дан массив значений, необходимо разработать структуру данных, которая может возвращать сумму подмассива значений."}),t.jsxs("p",{className:"mb-2",children:["Создадим класс ",t.jsx("code",{children:"PrefixSum"}),", который принимает массив ",t.jsx("code",{children:"nums"}),", для которого мы хотим рассчитывать сумму подмассива значений. Мы можем пройти циклом по ",t.jsx("code",{children:"nums"})," и добавить каждое число в переменную"," ",t.jsx("code",{children:"total"}),". Будем добавлять ",t.jsx("code",{children:"total"})," в массив"," ",t.jsx("code",{children:"prefix"})," на каждой итерации."]}),t.jsx(L,{value:Jk}),t.jsxs("p",{className:"mb-2",children:["После вычисления суммы, мы можем вычислить сумму любого подмассива, начинающегося с индекса ",t.jsx("code",{children:"left"})," и заканчивающегося индексом ",t.jsx("code",{children:"right"})," за"," ",t.jsx("i",{children:"O"}),"(1) по времени, потому что нам не нужно её пересчитывать. Мы можем сделать это так: ",t.jsx("code",{children:"prefix[right] - prefix[left - 1]"}),". ",t.jsx("code",{children:"-1"})," ","гарантирует, что мы исключим сумму всех чисел до ",t.jsx("code",{children:"left"}),". Однако, если"," ",t.jsx("code",{children:"left === 0"}),", будем отнимать 0, так как нам не нужно ничего вычитать."]}),t.jsx(L,{value:e4}),t.jsxs("p",{className:"mb-2",children:["Визуализируем, как благодаря префиксной сумме сумма подмассива вычисляется за"," ",t.jsx("i",{children:"O"}),"(1) по времени. Возьмём два случая: ",t.jsx("code",{children:"L = 2"}),", ",t.jsx("code",{children:"R = 3"})," ","и ",t.jsx("code",{children:"L = 0"}),", ",t.jsx("code",{children:"R = 3"})," (когда префикс для первого элемента не существует)."]}),t.jsx("img",{alt:"Расчёт префиксной суммы",height:"400",src:Qk,width:"1600"}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени изначального расчёта префиксной суммы — ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Однако расчёт суммы подмассива значений будет выполняться за ",t.jsx("i",{children:"O"}),"(1) операций независимо от того, насколько массив большой."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Префиксные суммы распространены повсеместно и могут быть чрезвычайно полезны для массивов чисел всякий раз, когда необходимо сохранять текущую сумму. Суммирование — не единственная операция, которую мы можем выполнить с помощью этой техники. Например, мы можем рассчитать префиксное произведение. Также мы можем сделать обратное и получить постфиксную сумму, что потребует ту же самую операцию, только в обратном порядке."})]})}const n4="/my-textbook/assets/enqueue-bquerH9H.png",r4="/my-textbook/assets/dequeue-QppbPPH8.png",i4=`enqueue(val) {
  const newNode = new ListNode(value);

  if (this.tail !== null) {
  // очередь не пуста
    this.tail.next = newNode;
    this.tail = this.tail.next;
  } else {
  // очередь пуста
    this.head = newNode;
    this.tail = newNode;
  }
}`,s4=`dequeue() {
  if (this.head === null) {
  // очередь пуста
    return;
  }

  // удаляет первый узел и возвращает его значение
  const value = this.head.value;

  this.head = this.head.next;

  if (!this.head) {
    this.tail = null;
  }

  return value;
}`;function a4(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Очереди похожи на стеки, за исключением того, что они следуют так называемому принципу FIFO (First in First Out). Примером из реального мира может служить очередь в банке. Первый человек, который встанет в очередь, будет первым, кого обслужат. Примером из мира программного обеспечения может служить работа принтера. Например, если несколько человек пытаются распечатать документы, документы будут распечатаны в порядке поступления команд."}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация и операции"}),t.jsx("p",{className:"mb-2",children:"Чаще всего очереди реализуют с использованием связного списка."}),t.jsxs("p",{className:"mb-2",children:["Очереди поддерживают две операции: ",t.jsx("code",{children:"enqueue"})," (постановка в очередь) и"," ",t.jsx("code",{children:"dequeue"})," (удаление из очереди)."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Очередь — это просто абстрактный интерфейс (как и стек), который может быть реализован несколькими структурами данных при условии, что они выполняют контракт реазилации операций постановки в очередь и удаления из очереди."})}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Постановка в очередь"}),t.jsxs("p",{className:"mb-2",children:["Операция постановки в очередь добавляет элементы в конец очереди до тех пор, пока не будет достигнут размер очереди. Поскольку добавление в конец очереди не требует смещения элементов, эта операция выполняется за ",t.jsx("i",{children:"O"}),"(1). Следующий псевдокод и изображение демонстрируют это."]}),t.jsx(L,{value:i4}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Постановка в очередь",className:"mx-auto",height:"200",src:n4,width:"1040"})})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Удаление из очереди"}),t.jsx("p",{className:"mb-2",children:"Операция удаления из очереди удаляет элемент из начала очереди и возвращает этот элемент. Следующий псевдокод и изображение демонстрируют это."}),t.jsx(L,{value:s4}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Удаление из очереди",className:"mx-auto",height:"200",src:r4,width:"800"})})]})]}),t.jsxs("p",{className:"mb-2",children:["Очереди также можно реализовать с помощью массивов, однако это становится немного сложнее, если вы хотите поддерживать эффективность операций ",t.jsx("code",{children:"enqueue"})," и"," ",t.jsx("code",{children:"dequeue"}),". При реализации с помощью массива сложность"," ",t.jsx("code",{children:"dequeue"})," составит ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") по времени из-за сдвига элементов."]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Существует также разновидность очереди, которая называется двусторонней очередью (",t.jsx("code",{children:"deque"}),"). Двусторонняя очередь позволяет добавлять и удалять элементы как и сначала, так и с конца очереди."]})}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Постановка в очередь"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Удаление из очереди"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]})]})]})]}),t.jsx("p",{className:"mb-2",children:"Одним из наиболее важных вариантов использования очереди является поиск в ширину для деревьев и графов, который мы рассмотрим в будущей статье."})]})}const o4="/my-textbook/assets/quick-sort-partition-hRd9Ecr5.png",l4=`function quickSort(array, start, end) {
  if (end - start + 1 <= 1) {
      return array;
  }

  const pivot = array[end];
  let left = start;

  for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
          const tmp = array[left];
          array[left] = array[i];
          array[i] = tmp;
          left++;
      }
  }

  array[end] = array[left];
  array[left] = pivot;

  quickSort(array, start, left - 1);
  quickSort(array, left + 1, end);

  return array;
}`;function c4(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Идея быстрой сортировки состоит в том, чтобы выбрать индекс, который называется"," ",t.jsx("code",{children:"pivot"})," (опорный элемент), и разделить массив так, чтобы каждое значение слева было меньше или равно ",t.jsx("code",{children:"pivot"}),", а каждое значение справа было больше, чем опорный элемент."]}),t.jsx("h2",{className:"font-bold my-2",children:"Выбор опорного элемента"}),t.jsx("p",{className:"mb-2",children:"В целом, существует несколько проверенных и опробованных вариантов выбора опорного элемента:"}),t.jsxs("ul",{className:"list-disc list-inside",children:[t.jsx("li",{children:"Выбор первого индекса"}),t.jsx("li",{children:"Выбор последнего индекса"}),t.jsx("li",{children:"Выбор медианы первого, среднего и последнего элементов"}),t.jsx("li",{children:"Выбор случайного опорного элемента"})]}),t.jsx("p",{className:"mb-2",children:"Вы можете спросить, какой опорный элемент выбрать? Это зависит от самих данных, как от размера, так и от начального порядка. Для упрощения задачи в этой статье мы будем использовать последний индекс в качестве опорного элемента."}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsxs("p",{className:"mb-2",children:["Мы выберем ",t.jsx("code",{children:"pivot"}),", если мы ещё не достигли базового случая, который представляет собой массив из 1 элемента, и выберем указатель ",t.jsx("code",{children:"left"}),", который сначала будет указывать на самый левый элемент текущего подмассива. Затем мы пройдёмся по нашему массиву, и если мы найдём элемент, меньший, чем наш элемент"," ",t.jsx("code",{children:"pivot"}),", мы будем менять местами текущий элемент с элементом, на который указывает указатель ",t.jsx("code",{children:"left"}),", и увеличивать указатель"," ",t.jsx("code",{children:"left"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Как только мы пройдёмся по массиву, мы перенесём элемент ",t.jsx("code",{children:"left"})," в конец массива и переместим опорный элемент в позицию ",t.jsx("code",{children:"left"}),". Это имеет смысл, поскольку как только мы пройдём по всем элементам, меньшим, чем элемент"," ",t.jsx("code",{children:"pivot"}),", и поместим их слева от опорного элемента, ",t.jsx("code",{children:"left"})," ","теперь будет указывать на первый элемент, который больше опорного элемента. Каждый элемент после него также будет больше опорного элемента. Вот почему мы перемещаем элемент ",t.jsx("code",{children:"left"})," в конец, а затем перемещаем опорный элемент в позицию"," ",t.jsx("code",{children:"left"}),"."]}),t.jsxs("p",{className:"mb-2",children:["В результате все элементы, меньшие или равные ",t.jsx("code",{children:"pivot"}),", оказываются слева, а остальные — справа."]}),t.jsxs("p",{className:"mb-2",children:["Возьмём для сортировки массив ",t.jsx("code",{children:"[6, 2, 4, 1, 3]"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Разделение массива"}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Сортировка вставками",className:"mx-auto",height:"600",src:o4,width:"1180"})}),t.jsxs("p",{className:"mb-2",children:["Как видно выше, мы отсортируем результирующий массив так, чтобы все элементы слева были меньше элемента ",t.jsx("code",{children:"pivot"}),", а остальные находились справа."]}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Мы не будем визуализировать все шаги, но этот процесс будет выполняться рекурсивно, пока мы не достигнем базового случая. Важно отметить, что мы не выделяем новую память для разделения массивов. Мы просто перемещаем указатели, чтобы каждый раз работать с меньшей частью исходного массива, пока не получим отсортированный массив."})}),t.jsx("p",{className:"mb-2",children:"Псевдокод будет выглядеть следующим образом."}),t.jsx(L,{value:l4}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Быстрая сортировка похожа на сортировку слиянием. Сложность по времени также будет составлять ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),"), однако только в лучшем случае. В лучшем случае мы выбираем ",t.jsx("code",{children:"pivot"})," так, чтобы всегда можно было выполнить разделение посередине. Если массив каждый раз идеально разделён посередине, а опорным элементом является медиана, то возможно получить сложность ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n log n"}),") как конечный результат."]}),t.jsxs("p",{className:"mb-2",children:["Выбор опорного элемента, в котором ",t.jsx("code",{children:"pivot"})," является наименьшим или наибольшим элементом, приведёт к худшему результату — ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),"). Это связано с тем, что в худшем случае выбор наибольшего или наименьшего элемента в массиве приведёт к худшему выбору опорного элемента, а выбор худшего опорного элемента каждый раз будет означать, что у вас есть ",t.jsx("i",{children:"n"})," ","групп для перебора, в результате чего получается сложность ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")."]}),t.jsx("h2",{className:"font-bold my-2",children:"Устойчивость"}),t.jsx("p",{className:"mb-2",children:"Быстрая сортировка не является стабильным алгоритмом, поскольку она переставляет несмежные элементы."}),t.jsxs("p",{className:"mb-2",children:["Возьмём массив ",t.jsx("code",{children:"[7, 3, 7, 4, 5]"}),", где у нас есть две 7-ки, одна по 0-му индексу и одна по 2-му индексу. В этом случае, если нашим опорным элементом является последний 4-й индекс, мы получим ",t.jsx("code",{children:"[3, 4, 7, 7, 5]"}),", где 7 из 0-го индекса будет находиться в 3-м индексе, что означает, что относительный порядок 7-к нарушен."]})]})}const d4="/my-textbook/assets/sliding-window-fixed-WkSyg0Pb.png",u4="/my-textbook/assets/sliding-window-variable-1-F9Mol9W-.png",h4="/my-textbook/assets/sliding-window-variable-2-U5uzNxsl.png",p4=`function closeDuplicatesBruteForce(nums, k) {
  for (let l = 0; l < nums.length; l++) {
    for (let r = l + 1; r < Math.min(nums.length, l + k); r++) {
      if (nums[l] === nums[r]) {
        return true;
      }
    }
  }

  return false;
}`,m4=`function closeDuplicates(nums, k) {
  let window = new Set();
  let l = 0;
  
  for (let r = 0; r < nums.length; r++) {
    if (r - l + 1 > k) {
      window.delete(nums[l]);
      l++;
    }

    if (window.has(nums[r])) {
      return true;
    }

    window.add(nums[r]);
  }

  return false;
}`,f4=`function longestSubarray(nums) {
  let length = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[l] !== nums[r]) {
      l = r;
    }

    length = Math.max(length, r - l + 1);
  }

  return length;
}`,g4=`function shortestSubarray(nums, target) {
  let total = 0;
  let l = 0;
  let length = Infinity;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];

    while (total >= target) {
      length = Math.min(r - l + 1, length);
      total -= nums[l];
      l++;
    }
  }

  if (length === Infinity) {
    return 0;
  }

  return length;
}`;function b4(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Скользящее окно фиксированного размера"}),t.jsxs("p",{className:"mb-2",children:["Идея скользящего окна фиксированного размера состоит в том, чтобы"," ",t.jsx("strong",{children:"поддерживать"})," два указателя, которые находятся на расстоянии"," ",t.jsx("code",{children:"k"})," друг от друга и соответствуют определённому ограничению."]}),t.jsx("p",{children:"Посмотрим на задачу:"}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Дан массив, верните ",t.jsx("code",{children:"true"}),", если в окне размера ",t.jsx("code",{children:"k"})," есть два элемента, которые равны."]})}),t.jsxs("p",{className:"mb-2",children:["Решение этой проблемы методом грубой силы — запустить два цикла ",t.jsx("code",{children:"for"})," и вернуть ",t.jsx("code",{children:"true"}),", если в подмассиве размера ",t.jsx("code",{children:"k"})," существуют равные элементы (дубликаты)."]}),t.jsxs("p",{className:"mb-2",children:["Представим, что у нас есть массив ",t.jsx("code",{children:"[1, 2, 3, 2, 3, 3]"})," и"," ",t.jsx("code",{children:"k = 3"}),". Глядя на массив, мы замечаем, что есть два числа, которые дублируются. Используя метод грубой силы, внешний цикл сделает ",t.jsx("i",{children:"n"})," итераций, внутренний цикл будет делать ",t.jsx("i",{children:"k"})," итераций, где ",t.jsx("code",{children:"k <= n"}),", что означает, что в худшем случае мы получаем квадратичную сложность по времени"," ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),")."]}),t.jsx(L,{value:p4}),t.jsxs("p",{className:"mb-2",children:["Можно добиться лучшего решения с использованием метода скользящего окна. В данном случае, мы должны поддерживать окно размера ",t.jsx("code",{children:"k"}),", и внутри него должно быть два дубликата."]}),t.jsxs("p",{className:"mb-2",children:[t.jsx("code",{children:"Set"})," позволяет хранить уникальные элементы и имеет сложность по времени ",t.jsx("i",{children:"O"}),"(1) для просмотра, удаления и вставки элементов. Мы можем использовать его для обозначения нашего окна и добавлять элементы, на которые указывает правый указатель. Когда размер нашего окна превышает ",t.jsx("code",{children:"k"}),", мы можем удалять элементы, на которые указывает левый указатель, чтобы сохранять размер нашего окна. Если мы встретим уже добавленное число, мы можем вернуть"," ",t.jsx("code",{children:"true"}),". Размер нашего множества никогда не превысит ",t.jsx("code",{children:"k"}),"."]}),t.jsx(L,{value:m4}),t.jsx("img",{alt:"Метод двух указателей (фиксированная длина)",height:"960",src:d4,width:"1680"}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени для скользящего окна фиксированного размера."}),t.jsxs("p",{className:"mb-2",children:["Мы снизили сложность по времени с ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),t.jsx("sup",{children:"2"}),") до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"), посколько мы выполняем только один проход по массиву. В худшем случае мы совершим ",t.jsx("i",{children:"n"})," итераций. Операции над нашим"," ",t.jsx("code",{children:"Set"})," составляют ",t.jsx("i",{children:"O"}),"(1) по времени."]}),t.jsx("p",{className:"mb-2",children:"При этом фиксированный размер — не едиственный способ реализовать метод скользящего окна. Существует также вариант скользящего окна, в котором мы продолжаем расширять наше окно до тех пор, пока не попадём в заданное ограничение."}),t.jsx("h2",{className:"font-bold my-2",children:"Скользящее окно переменного размера"}),t.jsx("p",{className:"mb-2",children:"Рассмотрим относительно простой пример, затем перейдём к более сложному."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Простой пример: найдите длину самого длинного подмассива, в каждой позиции которого одинаковые значения."})}),t.jsxs("p",{className:"mb-2",children:["Применим метод скользящего окна к массиву ",t.jsx("code",{children:"[4, 2, 2, 3, 3, 3]"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Вновь будем использовать два указателя: ",t.jsx("code",{children:"L"})," и ",t.jsx("code",{children:"R"}),". Наше ограничение состоит в том, что в нашем окне не может быть разных значений. В то же время нам придётся отслеживать самое длинное окно, с которым мы столкнулись, которое соответствует нашему ограничению, т. е. имеет одинаковые значения в каждой позиции."]}),t.jsxs("p",{className:"mb-2",children:["Запустим цикл ",t.jsx("code",{children:"for"})," по нашему массиву и будем расширять окно справа, пока не встретим значение, с которым раньше не сталкивались. Затем уменьшаем окно, совмещая указатель ",t.jsx("code",{children:"L"})," с указателем ",t.jsx("code",{children:"R"}),". Нам не нужно увеличивать ",t.jsx("code",{children:"L"}),", поскольку если мы встретим новое значение, то все предыдущие значения были дубликатами. Затем мы повторно вычисляем длину"," ",t.jsx("code",{children:"length"})," нашего окна, беря максимальную из текущей длины и предыдущей максимальной длины. Длина текущего окна вычисляется с помощью"," ",t.jsx("code",{children:"R - L + 1"}),", что обеспечивает включение обоих индексов."]}),t.jsx(L,{value:f4}),t.jsx("img",{alt:"Метод двух указателей (переменная длина)",className:"mb-2",height:"560",src:u4,width:"1700"}),t.jsx("p",{className:"mb-2",children:"Обратите внимание, у нас есть два указателя, мы расширяем наше окно справа и сдвигаем левый указатель, когда наше ограничение нарушается."}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Классический пример: найдите длину самого короткого подмассива, сумма которого больше или равна переданному значению ",t.jsx("code",{children:"target"}),". Предполагается, что все значения в массиве положительные."]})}),t.jsxs("p",{className:"mb-2",children:["Здесь необходимо найти минимальную длину. Будем расширять наше окно справа, и если наша сумма станет больше или равна ",t.jsx("code",{children:"target"}),", мы начнём отнимать слева, пока окно не перестанет нарушать это ограничение."]}),t.jsx(L,{value:g4}),t.jsx("img",{alt:"Метод двух указателей (переменная длина)",height:"840",src:h4,width:"1720"}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени для скользящего окна переменного размера."}),t.jsxs("p",{className:"mb-2",children:["Прелесть этого метода в том, что он снижает сложность по времени до ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),"). Возникает вопрос: как можно иметь цикл ",t.jsx("code",{children:"while"})," внутри цикла"," ",t.jsx("code",{children:"for"})," и иметь сложность по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),")? Цикл"," ",t.jsx("code",{children:"while"})," не выполняет ",t.jsx("i",{children:"n"})," итераций на каждой итерации цикла"," ",t.jsx("code",{children:"for"}),", он выполнит ",t.jsx("i",{children:"n"})," итераций всего. Фактически, в некоторых итерациях цикла ",t.jsx("code",{children:"for"})," он даже не запускается. Например, когда"," ",t.jsx("code",{children:"total < target"}),", цикл ",t.jsx("code",{children:"while"})," никогда не выполняется."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("p",{className:"mb-2",children:["Метод скользящего окна очень абстрактный и может применяться ко многим проблемам, некоторые из которых могут включать в себя другие концепции. Ключевая вещь, которая говорит о том, что проблему можно решить с использованием метода скользящего окна фиксированного размера — если проблема указывает на подмассив с длиной ",t.jsx("code",{children:"k"}),"."]})]})}const x4="/my-textbook/assets/stack-pop-wH6Fh_3n.png",E4="/my-textbook/assets/stack-push-kg3oRKgl.png",T4=`push(n) {
  this.stack.push(n);
}`,y4=`pop() {
  return this.stack.pop();
}`,S4=`peek() {
  return this.stack.at(-1);
}`;function N4(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Стек — это структура данных, содержащая коллекцию элементов, в которой добавлять и удалять элементы можно только с конца (называемого вершиной стека). В физическом мире стек можно представить себе как стопку тарелок в столовой. Когда вы собираетесь взять тарелку, вы можете взять её только сверху, и аналогично, когда вы закончите есть, стопку тарелок можно построить только путём складывания их друг на друга — это именно то, что представляет собой стек в мире ПО."}),t.jsxs("p",{className:"mb-2",children:["Стек следует принципу LIFO (Last In First Out). Последний элемент, помещенный внутрь, является первым элементом, который выходит наружу. Стек поддерживает три операции: ",t.jsx("code",{children:"push"})," (добавить в стек), ",t.jsx("code",{children:"pop"})," (удалить из стека) и ",t.jsx("code",{children:"peek"})," (вернуть элемент с вершины стека без удаления)."]}),t.jsxs("p",{className:"mb-2",children:["Стек, в котором все его элементы не возрастают, либо, наоборот, не убывают, называется монотонным стеком. Например, ",t.jsx("code",{children:"[1, 3, 10, 15, 17]"})," — это монотонный стек."]}),t.jsx("h2",{className:"font-bold my-2",children:"Push"}),t.jsxs("p",{className:"mb-2",children:["Оперция ",t.jsx("code",{children:"push"})," добавляет элемент на вершину стека, что для массива будет добавлением элемента в его конец. Это эффективная ",t.jsx("i",{children:"O"}),"(1) операция. Можно визуализировать стек как вертикальный массив. Добавим числа от 1 до 4 на вершину стека. Указатель на вершину обновляется и указывает на последний добавленный элемент. Следующие псевдокод и изображение демонстрируют это."]}),t.jsx(L,{value:T4}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Операция push",className:"mx-auto",height:"500",src:E4,width:"1280"})}),t.jsx("p",{className:"mb-2",children:"Поскольку стек удаляет элементы в порядке, обратном их вставке, его можно использовать для разворота последовательностей, например, строки, которая представляет собой просто последовательность символов."}),t.jsx("h2",{className:"font-bold my-2",children:"Pop"}),t.jsxs("p",{className:"mb-2",children:["Оперция ",t.jsx("code",{children:"pop"})," удаляет последний элемент из вершины стека, что для массива будет удалением его последнего элемента. Это также эффективная ",t.jsx("i",{children:"O"}),"(1) операция. Возьмём предыдущий пример, предположим, что мы хотим удалить"," ",t.jsx("code",{children:"3"})," и ",t.jsx("code",{children:"4"}),". Следующие псевдокод и изображение демонстрируют это. Опять же, указатель на вершину обновляется и указывает на последний элемент."]}),t.jsx(L,{value:y4}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Операция pop",className:"mx-auto",height:"500",src:x4,width:"1280"})}),t.jsx("h2",{className:"font-bold my-2",children:"Peek"}),t.jsxs("p",{className:"mb-2",children:[t.jsx("code",{children:"Peek"})," — самая простая операция из трёх. Она просто возвращает верхний элемент, не удаляя его."]}),t.jsx(L,{value:S4}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsxs("table",{className:"border-collapse mb-2 table-auto w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Операция"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Сложность по времени"}),t.jsx("th",{className:"border-2 border-gray-300 border-solid p-2 text-left",children:"Примечания"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Push"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)"]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"—"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Pop"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Сначала проверьте, пуст ли стек"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Peek"}),t.jsxs("td",{className:"border-2 border-gray-300 border-solid p-2",children:[t.jsx("i",{children:"O"}),"(1)",t.jsx("sup",{children:"*"})]}),t.jsx("td",{className:"border-2 border-gray-300 border-solid p-2",children:"Возвращает без удаления"})]})]})]})]})}const _4="/my-textbook/assets/distinct-elements-subsets-q8SWsish.png",A4="/my-textbook/assets/distinct-elements-subsets-implementation--Bn993DD.png",j4="/my-textbook/assets/distinct-elements-subsets-difficulty-ZmL9WEAo.png",v4=`function subsetsWithoutDuplicates(nums) {
  const subsets = [];
  const currSet = [];

  helper(0, nums, currSet, subsets);

  return subsets;
}`,w4=`function helper(i, nums, currSet, subsets) {
  if (i >= nums.length) {
    subsets.push([...currSet]);
    return;
  }

  // путь, по которому мы включаем nums[i]
  currSet.push(nums[i]);
  helper(i + 1, nums, currSet, subsets);
  currSet.pop();

  // путь, по которому мы НЕ включаем nums[i]
  helper(i + 1, nums, currSet, subsets);
}`,R4=`function subsetsWithoutDuplicates2(nums) {
  nums.sort();

  const subsets = [];
  const currSet = [];

  helper2(0, nums, currSet, subsets);

  return subsets;
}`,I4=`function helper2(i, nums, currSet, subsets) {
  if (i >= nums.length) {
    subsets.push([...currSet]);
    return;
  }

  // путь, по которому мы включаем nums[i]
  currSet.push(nums[i]);
  helper2(i + 1, nums, currSet, subsets);
  currSet.pop();

  // путь, по которому мы НЕ включаем nums[i]
  while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
    i++;
  }
  
  helper2(i + 1, nums, currSet, subsets);
}`;function C4(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Подмножества — это тема, принадлежащая «комбинаторике», разделу математики, изучающему перестановки, подмножества и сочетания."}),t.jsx("h2",{className:"font-bold my-2",children:"Понятие подмножества"}),t.jsx("p",{className:"mb-2",children:"Формально в математике, если у нас есть два множества, множество A и множество B, множество A является подмножеством множества B, если все его элементы находятся в множестве B. Кроме того, любое множество является подмножеством самого себя, а пустое множество является подмножеством каждого множества. Порядок не важен в подмножествах, пока мы не доберёмся до перестановок. Однако элементы должны быть разными."}),t.jsxs("p",{className:"mb-2",children:["Прежде чем перейти к задачам, приведём несколько примеров множеств и подмножеств. Учитывая множество ",t.jsx("code",{children:"A = {1, 2, 3, 4, 5}"})," и множество"," ",t.jsx("code",{children:"B = {5, 2, 1}"}),", множество ",t.jsx("code",{children:"B"})," является подмножеством множества ",t.jsx("code",{children:"A"}),", поскольку оно содержит все элементы множества ",t.jsx("code",{children:"A"}),". Изменённый порядок множества ",t.jsx("code",{children:"B"})," на"," ",t.jsx("code",{children:"{2, 5, 1}"})," по-прежнему считается тем же подмножеством."]}),t.jsxs("p",{className:"mb-2",children:["Учитывая множество ",t.jsx("code",{children:"C = {9, 10, 11, 12}"})," и множество"," ",t.jsx("code",{children:"D = {6, 9, 10}"}),", множество ",t.jsx("code",{children:"D"})," не является подмножеством множества ",t.jsx("code",{children:"С"}),", поскольку оно содержит ",t.jsx("code",{children:"6"}),", которой нет в множестве ",t.jsx("code",{children:"С"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Примеры использования подмножеств"}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{className:"block",children:"Подмножества - уникальные элементы"}),t.jsx("strong",{children:"Дан список уникальных чисел, верните все возможные уникальные подмножества."}),t.jsx("p",{className:"mb-2",children:"Вспомните из статьи про бэктрекинг, что когда мы делаем выбор пойти по пути назад, мы возвращаемся и исследуем другие варианты. Применение этой концепции к подмножествам означало бы, что для каждого элемента мы исследуем все подмножества, включающие этот элемент. Затем мы возвращаемся назад, чтобы изучить все подмножества, которые не включают этот элемент. Мы делаем это до тех пор, пока не исчерпаем все элементы и к концу у нас не будет всех возможных различных подмножеств."}),t.jsxs("strong",{children:["Следующее изображение демонстрирует все возможные уникальные подмножества для"," ",t.jsx("code",{children:"nums = {1, 2, 3}"}),"."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Все возможные подмножества",className:"mx-auto",height:"320",src:_4,width:"1000"})}),t.jsx("strong",{className:"block mb-2",children:"Реализация"}),t.jsxs("p",{className:"mb-2",children:["В реализации у нас есть две функции:"," ",t.jsx("strong",{children:t.jsx("code",{children:"subsetsWithoutDuplicates"})})," ","и"," ",t.jsx("strong",{children:t.jsx("code",{children:"helper"})}),"."]}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:t.jsx("code",{children:"subsetsWithoutDuplicates"})}),t.jsxs("p",{className:"mb-2",children:["Если предоставленный нам список не содержит дубликатов, мы реализуем функцию ",t.jsx("code",{children:"subsetsWithoutDuplicates"}),". В этой функции мы объявим список списков подмножеств ",t.jsx("code",{children:"subsets"})," и ещё один список"," ",t.jsx("code",{children:"currSet"}),". Как только мы создадим каждый ",t.jsx("code",{children:"currSet"}),", мы добавим его в ",t.jsx("code",{children:"subsets"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Для создания каждого ",t.jsx("code",{children:"currSet"})," нам понадобится функция"," ",t.jsx("code",{children:"helper"}),"."]}),t.jsx(L,{value:v4})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{children:t.jsx("code",{children:"helper"})}),t.jsxs("p",{className:"mb-2",children:["Мы передадим начальный индекс ",t.jsx("code",{children:"i"}),", ",t.jsx("code",{children:"nums"}),", который представляет собой наш список, ",t.jsx("code",{children:"currSet"})," и ",t.jsx("code",{children:"subsets"})," ","нашей функции ",t.jsx("code",{children:"helper"}),". Затем мы пройдёмся по всему списку, добавим текущее число в ",t.jsx("code",{children:"nums"})," и применим наш стандартный алгоритм бэктрекинга, т. е. будем выполнять рекурсию до тех пор, пока не достигнем базового случая, а затем извлечём текущее число из"," ",t.jsx("code",{children:"currSet"}),", чтобы мы могли пойти по пути, по которому мы решаем не включать текущий элемент."]}),t.jsx(L,{value:w4}),t.jsx("p",{children:t.jsxs("strong",{children:["На изображении ниже показана полная пошаговая реализация получения подмножеств из списка ",t.jsx("code",{children:"[1, 2, 3]"}),". Массив под каждым шагом представляет ",t.jsx("code",{children:"subsets"}),". Синие массивы в дереве решений представляют текущее обрабатываемое подмножество, ",t.jsx("code",{children:"currSet"}),"."]})})]})]}),t.jsx("img",{alt:"Пошаговая реализация получения подмножеств",height:"1701",src:A4,width:"1801"})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("strong",{className:"block",children:"Подмножества - неуникальные элементы"}),t.jsx("strong",{children:"Дан список чисел, которые не обязательно уникальны, верните все возможные уникальные подмножества."}),t.jsxs("p",{className:"mb-2",children:["В этой задаче нам даны ",t.jsx("code",{children:"nums"}),", содержащие дубликаты. Чтобы создать конкретные подмножества, мы сначала сортируем массив так, чтобы все дубликаты находились рядом друг с другом. Затем мы можем запустить цикл"," ",t.jsx("code",{children:"while"}),", чтобы пропустить дубликаты. Это отличается от предыдущей задачи, поскольку в этом случае, когда мы возвращаемся назад, то есть извлекаем число из ",t.jsx("code",{children:"currSet"}),", мы запускаем цикл ",t.jsx("code",{children:"while"}),", чтобы пропустить дубликаты перед повторным вызовом ",t.jsx("code",{children:"helper2"}),". Мы также следим за тем, чтобы наш указатель ",t.jsx("code",{children:"i"})," не выходил за пределы."]}),t.jsxs("p",{className:"mb-2",children:["В этом разница между ",t.jsx("code",{children:"helper"})," и ",t.jsx("code",{children:"helper2"}),"."]}),t.jsx("p",{className:"mb-2",children:"Ниже приведена реализация."}),t.jsx(L,{value:R4}),t.jsx(L,{value:I4})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени"}),t.jsxs("p",{className:"mb-2",children:["Сложность по времени будет равна ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"), поскольку для каждого отдельного элемента мы можем либо включить, либо не включать этот конкретный элемент. Если нам дан список ",t.jsx("code",{children:"[1, 2, 3]"})," для расчёта всех подмножеств, мы можем принять только два решения для любого данного элемента и записать всё это в дерево решений, а ",t.jsx("i",{children:"n"})," — количество элементов в множестве, вполне логично, что наш алгоритм работает за ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ⋅ 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),")."]}),t.jsxs("p",{className:"mb-2",children:["Сложность по памяти следует считать такой же, но иногда вводные данные не считаются частью сложности по времени. Это доводит сложность по памяти до ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"), если ",t.jsx("i",{children:"n"})," не учитывается."]}),t.jsx("p",{className:"mb-2",children:"Глядя на изображение ниже, это становится очевидным."}),t.jsx("img",{alt:"Сложность поиска всех возможных подмножеств",height:"160",src:j4,width:"380"})]})}const k4="/my-textbook/assets/directed-acyclic-graph-nXQKdbLC.png",O4="/my-textbook/assets/directed-cyclic-graph-_giz1YuK.png",L4="/my-textbook/assets/disconnected-directed-acyclic-graphs-tIU_vCQN.png",D4="/my-textbook/assets/topological-sort-reversed-edges-3VmsBcde.png",M4="/my-textbook/assets/topological-sort-reversed-result-IMPfPS6C.png",F4="/my-textbook/assets/topological-sort-unknown-start-dx544E58.png",P4="/my-textbook/assets/topological-sort-prerequisites-example-9RVn0EHs.png",U4=`function topologicalSort(edges, n) {
  const adj = new Map();

  for (let i = 1; i <= n; i++) {
    adj.set(i, []);
  }
  
  for (const [src, dst] of edges) {
    adj.get(src).push(dst);
  }

  const topSort = [];
  const visited = new Set();

  for (let i = 1; i <= n; i++) {
    dfs(i, adj, visited, topSort);
  }

  return topSort.reverse();
}

function dfs(src, adj, visited, topSort) {
  if (visited.has(src)) {
    return;
  }

  visited.add(src);

  for (const neighbor of adj.get(src)) {
    dfs(neighbor, adj, visited, topSort);
  }

  topSort.push(src);
}`;function B4(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Идея"}),t.jsx("p",{className:"mb-2",children:"Топологическая сортировка — это способ сортировки ориентированного ациклического графа (directed acyclic graph — DAG), при котором каждый узел предшествует зависимым узлам. Простой пример – университетские курсы. Есть некоторые курсы, которые можно пройти без каких-либо предварительных условий, а есть курсы, которые имеют предварительные условия, то есть вы не можете пройти их, если предварительно не прошли другие курсы."}),t.jsx("p",{className:"mb-2",children:"Другими словами, некоторые курсы можно проходить независимо от других курсов, а другие необходимо проходить в определённом порядке. Мы можем представить этот сценарий с помощью «DAG», где рёбра представляют зависимости между курсами."}),t.jsxs("p",{className:"mb-2",children:["Итак, если у нас есть узел ",t.jsx("code",{children:"C"})," и от него зависят узлы ",t.jsx("code",{children:"A"})," и"," ",t.jsx("code",{children:"B"}),", то ",t.jsx("code",{children:"A"})," и ",t.jsx("code",{children:"B"})," появятся перед ",t.jsx("code",{children:"C"})," в топологическом порядке. В каком порядке они появляются, не имеет значения, если только ",t.jsx("code",{children:"A"})," и ",t.jsx("code",{children:"B"})," не зависят друг от друга."]}),t.jsx("h2",{className:"font-bold my-2",children:"Пример"}),t.jsxs("p",{className:"mb-2",children:["Предположим, нам дан следующий ориентированный ациклический граф (DAG). Топологический порядок этого графа будет следующим: ",t.jsx("code",{children:"A, B, C, D, E, F"}),". Обратите внимание, что каждый узел появляется перед зависимым узлом."]}),t.jsx("img",{alt:"Ориентированный ациклический граф",className:"mb-2",height:"420",src:k4,width:"220"}),t.jsxs("p",{className:"mb-2",children:["Это довольно простой пример. Ранее мы упоминали, что топологическая сортировка работает на ациклических графах. Что, если бы в нашем графе был цикл? Давайте немного модифицируем приведённый выше граф и применим к нему ту же концепцию. В этом случае у нас есть ребро, выходящее из ",t.jsx("code",{children:"E"})," и входящее в"," ",t.jsx("code",{children:"A"}),". Порядок будет таким: ",t.jsx("code",{children:"E, A, B, C, D, E, F"}),". Это фактически противоречит идее топологической сортировки, поскольку невозможно иметь"," ",t.jsx("code",{children:"E"})," перед ",t.jsx("code",{children:"A"}),", а также после ",t.jsx("code",{children:"A"}),". Это всё равно, что сказать: чтобы пройти курс ",t.jsx("code",{children:"A"}),", вы должны сначала пройти курс"," ",t.jsx("code",{children:"E"}),", но чтобы пройти курс ",t.jsx("code",{children:"E"}),", вы должны сначала пройти курс"," ",t.jsx("code",{children:"A"})," — это цикл."]}),t.jsx("img",{alt:"Ориентированный циклический граф",className:"mb-2",height:"420",src:O4,width:"300"}),t.jsxs("p",{className:"mb-2",children:["Если циклов нет, топологическая сортировка будет работать даже на несвязных графах. Если в графе есть два связных компонента, порядок расположения вершин отдельных несвязных компонентов не имеет значения, поскольку они независимы друг от друга. В приведённом ниже графе есть два связных компонента, и одним из возможных валидных порядков может быть ",t.jsx("code",{children:"A, B, C, D, E, F, G, H"}),"."]}),t.jsx("img",{alt:"Несвязные ориентированные ациклические графы",className:"mb-2",height:"420",src:L4,width:"360"}),t.jsx("h2",{className:"font-bold my-2",children:"Алгоритм"}),t.jsxs("p",{className:"mb-2",children:["Для обхода графа мы можем использовать BFS или DFS. В нашем случае мы будем использовать рекурсивный DFS. Вопрос здесь в том, каким будет наш базовый случай? Если взглянуть на наш граф, то видно, что мы хотим выйти из функции, когда достигнем ",t.jsx("code",{children:"F"}),". Однако в этом случае мы посетим ",t.jsx("code",{children:"F"})," дважды, потому что ",t.jsx("code",{children:"F"})," можно достичь из ",t.jsx("code",{children:"D"}),", но также и из"," ",t.jsx("code",{children:"E"}),", т. е. ",t.jsx("code",{children:"D->F"}),", ",t.jsx("code",{children:"E->F"}),". Чтобы избежать этого, мы можем использовать ",t.jsx("code",{children:"Set"})," ",t.jsx("code",{children:"visited"})," для отслеживания посещённых узлов. Это приведёт к порядоку"," ",t.jsx("code",{children:"A, B, D, F, C, E, G, H"}),", что окажется неверным. Проблема здесь в том, что ",t.jsx("code",{children:"F"})," появляется раньше ",t.jsx("code",{children:"C"})," и ",t.jsx("code",{children:"E"}),", но"," ",t.jsx("code",{children:"F"})," зависит как от ",t.jsx("code",{children:"C"}),", так и от ",t.jsx("code",{children:"E"}),"."]}),t.jsxs("p",{className:"mb-2",children:["Мы хотим найти способ посетить ",t.jsx("code",{children:"C"})," и ",t.jsx("code",{children:"E"})," до того, как посетим ",t.jsx("code",{children:"F"}),". Есть два распространённых метода, которые мы можем использовать для решения этой проблемы."]}),t.jsxs("ol",{className:"list-decimal list-inside",children:[t.jsxs("li",{className:"mb-2",children:["Развернуть рёбра графа и запустить обратный обход. Напомним обратный обход:"," ",t.jsx("code",{children:"left, right, root"}),". Это даст нам правильный топологический порядок, который показан ниже.",t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Числа рядом с вершинами обозначают порядок их посещения."})}),t.jsx("figure",{className:"bg-white",children:t.jsx("img",{alt:"Топологическая сортировка с помощью разворота рёбер графа",className:"mx-auto",height:"501",src:D4,width:"580"})})]}),t.jsxs("li",{className:"mb-2",children:["Вместо того, чтобы разворачивать граф, выполнить обратный обход и развернуть результирующий массив. Это избавляет нас от разворачивания графа и по-прежнему даёт нам правильный топологический порядок.",t.jsx("figure",{className:"bg-white",children:t.jsx("img",{alt:"Топологическая сортировка с помощью разворота результирующего массива",className:"mx-auto mt-2",height:"420",src:M4,width:"800"})})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Топологическая сортировка без известной начальной точки"}),t.jsx("p",{className:"mb-2",children:"В примерах выше мы говорили о графах, где мы знали, какие вершины являются «головами» связных компонентов. Однако большинство задач не столь удобны. Тем не менее, пока у нас есть список всех вершин входного графа, мы можем решить проблему. Вместо того, чтобы выполнять DFS, начиная с «головы» (или исходной вершины) каждого компонента, мы будем запускать его для каждой отдельной вершины каждого компонента в том порядке, в котором они появляются."}),t.jsxs("p",{className:"mb-2",children:["Предположим, что первые четыре вершины появляются в порядке"," ",t.jsx("code",{children:"B, C, H, A"}),". В этом случае мы можем просто выполнять обратный DFS по одной вершине за раз. Мы можем посетить соседей ",t.jsx("code",{children:"B"}),", затем соседей"," ",t.jsx("code",{children:"C"})," и, наконец, соседей ",t.jsx("code",{children:"H"})," и ",t.jsx("code",{children:"A"}),". К тому времени, как мы посетим другие узлы, мы уже посетим их или их соседей, поэтому мы можем просто вернуться из функции. Это будет выглядеть следующим образом."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Топологическая сортировка без известной начальной точки",className:"mx-auto",height:"441",src:F4,width:"800"})}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsxs("p",{className:"mb-2",children:["Предположим, нам дан ориентированный ациклический граф и мы хотим вернуть топологический порядок. Сначала мы построим список смежности, используя данный массив рёбер. Чтобы сохранить наш топологический порядок, мы можем использовать массив ",t.jsx("code",{children:"topSort"})," и ",t.jsx("code",{children:"Set"})," ",t.jsx("code",{children:"visited"}),", чтобы избежать повторного посещения одной и той же вершины дважды. Мы можем выполнить наш DFS и вернуть массив ",t.jsx("code",{children:"topSort"})," с топологическим порядком."]}),t.jsx("h2",{className:"font-bold my-2",children:"DFS"}),t.jsxs("p",{className:"mb-2",children:["Несмотря на то, что функция ",t.jsx("code",{children:"dfs"})," является вспомогательной функцией, она формирует наш массив. Мы можем передать ",t.jsx("code",{children:"src"}),", который обозначает текущий узел, на котором мы находимся. ",t.jsx("code",{children:"adj"}),", который представляет список смежности и позволяет нам просматривать соседей. ",t.jsx("code",{children:"visited"})," и массив ",t.jsx("code",{children:"topSort"}),", который мы и вернём в конце. Если текущий узел"," ",t.jsx("code",{children:"src"})," уже находится в ",t.jsx("code",{children:"Set"})," ",t.jsx("code",{children:"visited"}),", мы можем вернуться из функции. В противном случае мы добавим его в ",t.jsx("code",{children:"visited"})," и выполненим ",t.jsx("code",{children:"dfs"})," для его соседей. После выполнения ",t.jsx("code",{children:"dfs"})," мы можем добавить ",t.jsx("code",{children:"src"})," к нашему ",t.jsx("code",{children:"topSort"}),"."]}),t.jsx(L,{value:U4}),t.jsx("h2",{className:"font-bold my-2",children:"Циклический путь"}),t.jsxs("p",{className:"mb-2",children:["Что, если бы нам не было гарантировано, что граф ацикличен? Как бы мы добавили обнаружение циклов в нашем графе? Мы можем объявить еще один ",t.jsx("code",{children:"Set"})," ",t.jsx("code",{children:"path"}),", который будет отслеживать текущий путь в нашем DFS. Как и в случае с ",t.jsx("code",{children:"visited"}),", мы добавим вершины в наш ",t.jsx("code",{children:"path"}),". Затем, как только рекурсивные вызовы для всех соседей выполнятся, мы также извлечём вершину из нашего ",t.jsx("code",{children:"path"}),". Если мы посетим одну и ту же вершину по пути дважды, мы можем вернуть ",t.jsx("code",{children:"false"}),", поскольку это означает, что в нашем графе есть цикл."]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Во введении мы кратко упомянули, что одно из применений топологической сортировки — это предварительные условия курса. Граф ниже представляет собой конкретный пример этого: A = алгебра, C = химия, E = английский язык и P = физика. Топологический порядок имеет смысл, поскольку вам необходимо сдать «Физику I», прежде чем изучать «Физику II», и так далее."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Топологическая сортировка на примере предварительных условий курса",className:"mx-auto",height:"441",src:P4,width:"660"})})]})}const H4="/my-textbook/assets/trie-YRC5JOzG.png",G4="/my-textbook/assets/trie-insert-apple-X-XsSa7j.png",$4="/my-textbook/assets/trie-insert-ape-oStD4E_e.png",z4="/my-textbook/assets/trie-insert-nope-UQEFvQi4.png",V4="/my-textbook/assets/trie-search-vG5E9hIt.png",W4="/my-textbook/assets/trie-starts-with-aTDBtlPI.png",q4=`class TrieNode {
  constructor() {
    this.word = false;
    this.children = new Map();
  }
}`,K4=`class Trie {
  constructor() {
    this.root = new TrieNode(); 
  }
  
  ...
}`,Y4=`insert(word) {
  let curr = this.root;

  for (const char of word) {
    if (!curr.children.has(char)) {
      curr.children.set(char, new TrieNode());
    }

    curr = curr.children.get(char);
  }

  curr.word = true;
}`,X4=`search(word) {
  let curr = this.root;

  for (const char of word) {
    if (!curr.children.has(char)) {
      return false;
    }

    curr = curr.children.get(char);
  }

  return curr.word;
}`,Z4=`startsWith(prefix) {
  let curr = this.root;

  for (let char of prefix) {
    if (!curr.children.has(char)) {
      return false;
    }

    curr = curr.children.get(char);
  }

  return true;
}`;function Q4(){return t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"font-bold my-2",children:"Мотивация"}),t.jsx("p",{className:"mb-2",children:"Давайте объясним, почему нам нужно префиксное дерево (trie)."}),t.jsx("p",{className:"mb-2",children:"Представьте, что у нас есть большая коробка, наполненная разными овощами, такими как кабачки, капуста, помидоры и т. д. Если бы мы хотели упорядочить их по именам, нам нужно было бы начать с коробок меньшего размера и пометить каждую из них каждой буквой алфавита. Таким образом, все овощи, названия которых начинаются с буквы «А», попадут в коробку с надписью «А» и т. д. и т. п."}),t.jsx("p",{className:"mb-2",children:"Но есть овощи, у которых общая первая буква или даже несколько первых букв, например «кабачок» и «капуста». Вместо того, чтобы создавать новые коробки для каждого префикса, мы можем создавать новые коробки внутри исходной коробки, чтобы каждая новая коробка использовалась для обозначения каждой дополнительной буквы в названии нашего овоща."}),t.jsx("p",{className:"mb-2",children:"Итак, теперь, когда у нас есть дополнительные коробки внутри, скажем, коробки «к», помеченные второй буквой названия каждого овоща, мы можем положить «кабачок» и «капусту» в одну и ту же коробку и т. д. и т. п. Мы можем продолжать делать это для каждой буквы алфавита, пока у нас не появится группа меньших коробок внутри больших коробок."}),t.jsx("p",{className:"mb-2",children:"Префиксное дерево позволяет нам организовывать слова по первым нескольким буквам (префиксам). В случае дерева каждая коробка для овощей будет представлена как узел, а рёбра будут использоваться для обозначения букв, которые их соединяют."}),t.jsxs("p",{className:"mb-2",children:["Префиксное дерево представляет собой древовидную структуру данных, которую можно использовать для поиска слов по заданному префиксу. Оно позволяет делать это за"," ",t.jsx("i",{children:"O"}),"(1) по времени."]}),t.jsx("p",{className:"mb-2",children:"Мы хотим иметь возможность вставки и поиска таким образом, чтобы у нас получились следующие сложности:"}),t.jsxs("ul",{className:"mb-2",children:[t.jsxs("li",{children:["Вставка слова: ",t.jsx("i",{children:"O"}),"(1)"]}),t.jsxs("li",{children:["Поиск слова: ",t.jsx("i",{children:"O"}),"(1)"]}),t.jsxs("li",{children:["Поиск префикса: ",t.jsx("i",{children:"O"}),"(1)"]})]}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["Вы можете подумать про себя, что нельзя ли выполнить описанные выше операции и с объектом? Да, но объект будет поддерживать только точное совпадение строки, поэтому в худшем случае поиск префикса займёт ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"}),") итераций. Префиксное дерево позволит нам искать строки, начинающиеся с определённого префикса, за ",t.jsx("i",{children:"O"}),"(1) по времени."]})}),t.jsxs("p",{className:"mb-2",children:["Возможно, вы уже поняли, что реальным применением префиксного дерева является автозаполнение поисковой системы. Автозаполнение сопоставляет буквы префикса, чтобы предсказать слова, которые вы собираетесь ввести. А поскольку поиск префикса составляет ",t.jsx("i",{children:"O"}),"(1), он выполняется быстро и эффективно."]}),t.jsxs("p",{className:"mb-2",children:["На изображении ниже показано префиксное дерево. Для примеров возьмём английский алфавит. Поскольку в алфавите 26 букв, каждый узел будет иметь не более 26 дочерних элементов. Для краткости мы использовали ",t.jsx("strong",{children:"..."})," для обозначения всех букв между c и z."]}),t.jsx("img",{alt:"Префиксное дерево",className:"mb-2",height:"300",src:H4,width:"500"}),t.jsx("h2",{className:"font-bold my-2",children:"Реализация"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Узел префиксного дерева"})}),t.jsxs("p",{className:"mb-2",children:["Когда мы вставляем в дерево, мы вставляем слова, даже если они представляют собой отдельные символы. Нам нужно сделать это, чтобы при поиске мы могли определить, существует слово или нет. Итак, каждый узел, назовем его"," ",t.jsx("code",{children:"TrieNode"}),", должен отслеживать свои дочерние узлы и иметь логическую переменную, которая определяет, заканчивается ли слово на этом"," ",t.jsx("code",{children:"TrieNode"}),". Для этого мы можем создать отдельный класс"," ",t.jsx("code",{children:"TrieNode"}),"."]}),t.jsx(L,{value:q4}),t.jsxs("p",{className:"mb-2",children:["Итак, теперь всякий раз, когда мы добавляем экземпляр класса ",t.jsx("code",{children:"Trie"}),", у нас будет новый ",t.jsx("code",{children:"TrieNode"})," в качестве корневого узла в конструкторе."]})]}),t.jsxs("li",{children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Класс префиксного дерева"})}),t.jsx(L,{value:K4}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Вставка слова"})}),t.jsxs("p",{className:"mb-2",children:["Чтобы вставить в префиксное дерево, мы можем перебрать каждый символ слова, которое хотим вставить. Если символ не существует, мы можем вставить его в наш ",t.jsx("code",{children:"Map"})," вместе с его дочерними элементами. В противном случае мы можем продолжить движение вниз по дереву. Достигнув последнего символа, мы можем пометить этот ",t.jsx("code",{children:"TrieNode"})," как слово."]}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы используем ",t.jsx("code",{children:"Map"})," для хранения дочерних элементов, мы можем получить дочерние элементы за ",t.jsx("i",{children:"O"}),"(1) по времени."]}),t.jsx(L,{value:Y4}),t.jsx("p",{className:"mb-2",children:t.jsxs("strong",{children:["На изображениях ниже показан процесс вставки слов «apple», «ape» и «nope». ",t.jsx("code",{children:"curr"})," представляет текущий ",t.jsx("code",{children:"TrieNode"})," (в красных кружках), а логическое значение ",t.jsx("code",{children:"word"})," показывает, заканчивается ли слово на ",t.jsx("code",{children:"TrieNode"}),"."]})}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Вставка слова 'apple' в префиксное дерево",className:"mx-auto mt-2",height:"1100",src:G4,width:"800"})}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Вставка слова 'ape' в префиксное дерево",className:"mx-auto",height:"630",src:$4,width:"1300"})}),t.jsx("img",{alt:"Вставка слова 'nope' в префиксное дерево",className:"mb-2",height:"1200",src:z4,width:"1761"})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Поиск слова"})}),t.jsxs("p",{className:"mb-2",children:["Мы можем проверить, существует ли слово, и вернуть логическое значение. Для этого мы пройдёмся по каждому символу и как только встретим символ, которого нет в нашем дереве, мы сможем вернуть ",t.jsx("code",{children:"false"}),". Это имеет смысл, поскольку слово не может быть полным, если один из символов отсутствует. Однако может быть и так, что существует каждый отдельный символ, но последний символ не помечен как слово. Например, если в нашем префиксном дереве есть слово «apple», а мы ищем слово «app», даже если префикс существует, само слово не существует, поскольку атрибут"," ",t.jsx("code",{children:"word"})," ",t.jsx("code",{children:"'p'"})," равен ",t.jsx("code",{children:"false"}),"."]}),t.jsx(L,{value:X4}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"На изображении ниже показан поиск по слову «no»."})}),t.jsx("img",{alt:"Поиск слова в префиксном дереве",className:"mb-2",height:"640",src:V4,width:"1660"})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Поиск префикса"})}),t.jsxs("p",{className:"mb-2",children:["Если мы хотим узнать, содержит ли наше дерево слово с префиксом, мы можем использовать следующий метод. Если каждый символ префикса существует в нашем префиксном дереве, мы можем вернуть ",t.jsx("code",{children:"true"}),". В противном случае мы вернем ",t.jsx("code",{children:"false"}),"."]}),t.jsx(L,{value:Z4}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Префикс «no» существует в нашем дереве."})}),t.jsx("img",{alt:"Поиск префикса в префиксном дереве",className:"mb-2",height:"651",src:W4,width:"1661"})]})]})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Сложность по времени и памяти"}),t.jsxs("p",{className:"mb-2",children:["Если бы у нас не было префиксного дерева, выполнение поиска методом грубой силы представляло бы собой перебор всех слов и проверку, какие из них совпадают. Это даёт нам сложность по времени ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"n"})," ∗ ",t.jsx("i",{children:"m"}),"), где ",t.jsx("i",{children:"n"})," — количество слов, а ",t.jsx("i",{children:"m"})," — средняя длина каждого слова."]}),t.jsxs("p",{className:"mb-2",children:["Префиксные деревья позволяют нам сделать это за время ",t.jsx("i",{children:"O"}),"(",t.jsx("i",{children:"m"}),"). Это связано с тем, что мы итерируемся один раз для каждого символа в целевом слове."]})]})}const J4="/my-textbook/assets/fibonacci2-KRkjgAyt.png",eO=`function fibonacci(n) {
  // Базовый случай: n = 0 или 1
  if (n <= 1) {
    return n;
  }

  // Рекурсивный случай: fib(n) = fib(n - 1) + fib(n - 2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;function tO(){return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2",children:["Более интересный вид рекурсии — это рекурсия с двумя ветвями. Опять же, давайте возьмём математический пример, чтобы рассмотреть это - последовательность Фибоначчи. Математическая формула для расчёта ",t.jsx("i",{children:"n"})," числа Фибоначчи состоит в том, чтобы взять числа"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," - 1"]})," ","и"," ",t.jsxs("code",{children:[t.jsx("i",{children:"n"})," - 2"]})," ","и сложить их. Известно, что"," ",t.jsxs("code",{children:[t.jsx("i",{children:"F"}),"(0) = 0"]})," ","и"," ",t.jsxs("code",{children:[t.jsx("i",{children:"F"}),"(1) = 1"]}),", что в рекурсивной функции будет нашим базовым случаем."]}),t.jsx("p",{className:"mb-2",children:"Формула будет записана так:"}),t.jsx("p",{className:"mb-2",children:t.jsxs("code",{children:[t.jsx("i",{children:"fib"}),"(",t.jsx("i",{children:"n"}),") = ",t.jsx("i",{children:"fib"}),"(",t.jsx("i",{children:"n"})," - 1) + ",t.jsx("i",{children:"fib"}),"(",t.jsx("i",{children:"n"})," - 2)"]})}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Вышеуказанное известно как рекуррентное соотношение."})}),t.jsx("h2",{className:"font-bold my-2",children:"Концепция"}),t.jsx("p",{className:"mb-2",children:"Мы можем визуализировать математическую формулу с помощью следующего дерева."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Последовательность Фибоначчи в виде дерева",className:"mx-auto",height:"580",src:PS,width:"1180"})}),t.jsx(L,{value:eO}),t.jsx("p",{className:"mb-2",children:"Приведённый выше псевдокод аналогичен нашему предыдущему примеру с факториалом, за исключением того, что здесь коэффициент ветвления равен двум. Обратите внимание, как мы дважды вызываем функцию в последней строке, в результате чего получается дерево, показанное на изображении."}),t.jsxs("p",{className:"mb-2",children:["Для анализа давайте воспользуемся той же техникой, которую мы представили в предыдущей статье. У нас есть базовый случай, мы знаем, что функция вызывает себя в последнем операторе ",t.jsx("code",{children:"return"}),", и мы знаем, что в какой-то момент, когда базовый случай будет достигнут, нам придется вернуться «вверх», чтобы вычислить окончательный ответ. Чтобы вычислить ",t.jsx("code",{children:"fibonacci(5)"}),", мы получаем ",t.jsx("code",{children:"fibonacci(4) + fibonacci(3)"}),". Теперь оба этих вызова выполняют функцию заново. Глядя на наше дерево, ",t.jsx("code",{children:"fibonacci(4)"})," вызовет"," ",t.jsx("code",{children:"fibonacci(3) + fibonacci(2)"})," и так далее, пока ",t.jsx("i",{children:"n"})," не достигнет"," ",t.jsx("code",{children:"1"})," или ",t.jsx("code",{children:"0"}),", после чего функция вернёт результат и продолжит идти вверх до тех пор, пока ",t.jsx("code",{children:"fibonacci(4)"})," не даст нам ответ"," ",t.jsx("code",{children:"3"}),". Теперь у нас есть ответ для ",t.jsx("code",{children:"fibonacci(4)"}),", и мы делаем то же самое для ",t.jsx("code",{children:"fibonacci(3)"}),", получая ",t.jsx("code",{children:"2"}),". Сложим эти два числа, и получим 5-ое число Фибоначчи, которое будет равно ",t.jsx("code",{children:"5"}),"."]}),t.jsx("h2",{className:"font-bold my-2",children:"Оценка сложности по времени"}),t.jsxs("p",{className:"mb-2",children:["Оценить сложность по времени для этого случая немного сложнее. Давайте проанализируем дерево и количество узлов на каждом из уровней. На 1-ом уровне (0 индекс) находится ",t.jsx("code",{children:"1"})," узел, на 2-ом — ",t.jsx("code",{children:"2"}),", затем"," ",t.jsx("code",{children:"4"}),", после чего мы видим закономерность. Каждый уровень может содержать в два 2 раза больше узлов, чем предыдущий уровень."]}),t.jsxs("p",{className:"mb-2",children:["Это даёт нам только половину ответа. Если ",t.jsx("i",{children:"n"})," — уровень, на котором мы сейчас находится, это означает, что для получения количества узлов на любом уровне"," ",t.jsx("i",{children:"n"})," используется формула"," ",t.jsxs("code",{children:["2",t.jsx("sup",{children:t.jsx("i",{children:"n"})})]}),". Поскольку нам потенциально необходимо пройти весь путь до ",t.jsx("i",{children:"n"}),"-го уровня, а на каждом уровне в два раза больше узлов, мы можем сказать, что сложность по времени составляет ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),") ."]}),t.jsxs("p",{className:"mb-2",children:["Алгоритмически говоря, даже если бы у нас было 2 * 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})})," ","или 2",t.jsx("sup",{children:t.jsx("i",{children:"n"})})," ","- 1 операций, сложность бы всё равно составляла ",t.jsx("i",{children:"O"}),"(2",t.jsx("sup",{children:t.jsx("i",{children:"n"})}),"), поскольку константы не влияют на сложность."]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Последовательность Фибоначчи в виде дерева",className:"mx-auto",height:"640",src:J4,width:"1420"})}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"В следующих статьях мы будем возвращаться к рекурсии снова и снова, и она действительно хороша, когда дело доходит до обхода деревьев и графов."})]})}const nO="/my-textbook/assets/two-dimension-dp1-PcMLOJdS.png",rO="/my-textbook/assets/two-dimension-dp2-ap4OT0KE.png",iO="/my-textbook/assets/two-dimension-dp3-pNFfTBt_.png",sO=`function bruteForce(r, c, rows, cols) {
  if (r === rows || c === cols) {
    return 0;
  }

  if (r === rows - 1 && c === cols - 1) {
    return 1;
  }

  return bruteForce(r + 1, c, rows, cols) + bruteForce(r, c + 1, rows, cols);
}`,aO=`function memoization(r, c, rows, cols, cache) {
  if (r === rows || c === cols) {
    return 0;
  }

  if (cache[r][c] > 0) {
    return cache[r][c];
  }

  if (r === rows - 1 && c === cols - 1) {
    return 1;
  }

  cache[r][c] = memoization(r + 1, c, rows, cols, cache) + memoization(r, c + 1, rows, cols, cache);

  return cache[r][c];
}`,oO=`function dp(rows, cols) {
  let prevRow = new Array(cols).fill(0); 

  for (let i = rows - 1; i >= 0; i--) {
    let curRow = new Array(cols).fill(0);
    curRow[cols - 1] = 1;

    for (let j = cols - 2; j >= 0; j--) {
      curRow[j] = curRow[j + 1] + prevRow[j];
    }

    prevRow = curRow;
  }

  return prevRow[0];
}`;function lO(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mb-2",children:"Мы уже обсуждали одномерное динамическое программирование. Давайте теперь возьмём сетку (которую мы обсуждали ранее) и выясним, как мы можем применить к ней динамическое программирование. Для этого возьмём следующую задачу, знакомую нам по статьям про графы."}),t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Подсчитайте количество уникальных путей от верхнего левого угла до правого нижнего. Вам разрешено двигаться только вниз или вправо."})}),t.jsxs("p",{className:"mb-2",children:["Давайте примем во внимание следующую сетку, где нам разрешено двигаться только вниз или вправо. Единственный способ выйти за пределы — это если наш указатель"," ",t.jsx("code",{children:"r"})," окажется на количестве строк, а указатель ",t.jsx("code",{children:"c"})," — на количестве столбцов."]}),t.jsx("img",{alt:"Сетка",className:"mb-2",height:"340",src:nO,width:"340"}),t.jsx("h2",{className:"font-bold my-2",children:"Подход методом грубой силы"}),t.jsxs("p",{className:"mb-2",children:["Подход методом грубой силы, начиная с ",t.jsx("code",{children:"0, 0"}),", будет выглядеть следующим образом, где синие стрелки обозначают все пути, которые мы можем пройти от заданной координаты. Чтобы вычислить уникальные пути от заданной координаты до пункта назначения, мы просто добавляем возвращаемое значение к текущему значению в нашей координате. Изображение ниже демонстрирует часть подхода грубой силы, но этого достаточно, чтобы увидеть, где он терпит неудачу. Зная то, что вы знаете о DP на данный момент, можете ли вы выяснить, где выполняется ненужная работа?"]}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Подсчёт уникальных путей методом грубой силы",className:"mx-auto",height:"980",src:rO,width:"980"})}),t.jsx(L,{value:sO}),t.jsx("h2",{className:"font-bold my-2",children:"Проблема"}),t.jsxs("p",{className:"mb-2",children:["Проблема с этим подходом заключается в том, что, поскольку нам нужно идти вниз и вправо, чтобы вычислить значение по каждой отдельной координате, в конечном итоге нам придётся вычислять множество значений несколько раз, что является дорогостоящим, особенно при использовании подхода сверху. Сейчас это кажется тривиальным, учитывая размер сетки, но это будет намного менее эффективно, если у нас будет сетка размером, скажем, ",t.jsx("code",{children:"100 * 100"}),"."]}),t.jsx("p",{className:"mb-2",children:"Давайте посмотрим, как мы можем решить эту проблему с помощью DP."}),t.jsx("h2",{className:"font-bold my-2",children:"Подход динамического программирования"}),t.jsxs("ul",{children:[t.jsxs("li",{className:"mb-2",children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Метод динамического программирования сверху"})}),t.jsx("p",{className:"mb-2",children:"Давайте теперь посмотрим, как мы можем использовать DP, чтобы сэкономить дополнительную работу, которую мы выполняем при решении методом грубой силы. Код будет выглядеть следующим образом:"}),t.jsx(L,{value:aO}),t.jsx("p",{className:"mb-2",children:"Технически этот код очень похож на тот, который был при методе грубой силы. В этом случае мы вводим параметр кэша, который хранит количество уникальных путей от заданной координаты. Давайте теперь завершим остальную часть визуального представления, которое мы продемонстрировали ранее, только на этот раз используя подход DP."}),t.jsx("figure",{className:"bg-white mb-2",children:t.jsx("img",{alt:"Подсчёт уникальных путей динамическим программированием",className:"mx-auto",height:"320",src:iO,width:"1330"})}),t.jsxs("p",{className:"mb-2",children:["На изображении выше мы находим пути для ",t.jsx("code",{children:"1"}),"-й строки"," ",t.jsx("code",{children:"(1, 0)"}),", и это помогает нам найти пути для ",t.jsx("code",{children:"0"}),"-й строки. Обратите внимание, что на четвёртом шаге, когда мы хотим вычислить"," ",t.jsx("code",{children:"(0, 1)"}),", нам не нужно вычислять ",t.jsx("code",{children:"(1, 1)"})," снова, поскольку оно уже находится в нашем кэше. Это избавляет нас от тонны ненужной работы."]})]}),t.jsxs("li",{className:"mb-2",children:[t.jsx("p",{className:"mb-2",children:t.jsx("strong",{children:"Метод динамического программирования снизу"})}),t.jsx("p",{className:"mb-2",children:"При таком подходе мы можем начать снизу и двигаться вверх. Сложность по времени останется прежней, за исключением того, что это итеративный подход. Порядок, в котором мы выполняем эти вычисления, очень важен. Нам приходится вычислять эти значения справа налево, потому что мы можем получить возвращаемое значение только тогда, когда достигнем базового случая."}),t.jsxs("p",{className:"mb-2",children:["На самом деле нам даже не нужна полная сетка для вычисления значений в любой заданной строке. Это означает, что для расчета значений ",t.jsx("code",{children:"n"}),"-й строки нам нужны только значения ",t.jsx("code",{children:"n - 1"})," строки. Затем мы можем обновить нашу предыдущую строку, чтобы она стала текущей. Звучит знакомо? Мы использовали тот же подход в решении Фибоначчи!"]}),t.jsx(L,{value:oO}),t.jsxs("p",{className:"mb-2",children:["Поскольку мы упомянули, что для вычисления значений в любой заданной строке нам нужна только предыдущая строка, мы можем инициализировать начальную строку, заполненную нулями, чтобы вычислить самую нижнюю строку. Наш первый цикл ",t.jsx("code",{children:"for"})," уменьшает номер строки, и для каждого номера строки мы инициализируем строку, полную нулей, и присваиваем ",t.jsx("code",{children:"1"})," самому правому столбцу, потому что это наше возвращаемое значение. Затем мы используем внутренний цикл ",t.jsx("code",{children:"for"}),", чтобы просмотреть каждый столбец в строке и вычислить его значение так же, как мы продемонстрировали на изображениях ранее."]})]})]}),t.jsx("h2",{className:"font-bold my-2",children:"Итоги"}),t.jsx("p",{className:"mb-2",children:"Это была лишь поверхностность, и задачи динамического программирования могут оказаться намного сложнее, чем то, что мы только что рассмотрели. Как всегда, эти основы помогут вам, по крайней мере, понять концепцию."})]})}const cO="/my-textbook/assets/two-pointers-L5WKEjNi.png",dO=`function isPalindrome(word) {
  let l = 0;
  let r = word.length - 1;

  while (l < r) {
    if (word[l] !== word[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}`,uO=`function targetSum(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      return [l, r];
    }
  }