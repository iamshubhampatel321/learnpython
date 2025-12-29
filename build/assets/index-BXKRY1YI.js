(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))V(A);new MutationObserver(A=>{for(const D of A)if(D.type==="childList")for(const le of D.addedNodes)le.tagName==="LINK"&&le.rel==="modulepreload"&&V(le)}).observe(document,{childList:!0,subtree:!0});function m(A){const D={};return A.integrity&&(D.integrity=A.integrity),A.referrerPolicy&&(D.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?D.credentials="include":A.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function V(A){if(A.ep)return;A.ep=!0;const D=m(A);fetch(A.href,D)}})();var Co={exports:{}},wr={},To={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Id(){if(Cu)return F;Cu=1;var w=Symbol.for("react.element"),L=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),le=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),ve=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ne=Symbol.iterator;function J(c){return c===null||typeof c!="object"?null:(c=ne&&c[ne]||c["@@iterator"],typeof c=="function"?c:null)}var Ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,Z={};function Y(c,g,z){this.props=c,this.context=g,this.refs=Z,this.updater=z||Ve}Y.prototype.isReactComponent={},Y.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},Y.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gt(){}gt.prototype=Y.prototype;function st(c,g,z){this.props=c,this.context=g,this.refs=Z,this.updater=z||Ve}var Je=st.prototype=new gt;Je.constructor=st,be(Je,Y.prototype),Je.isPureReactComponent=!0;var xe=Array.isArray,Ze=Object.prototype.hasOwnProperty,Te={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function qe(c,g,z){var j,B={},W=null,$=null;if(g!=null)for(j in g.ref!==void 0&&($=g.ref),g.key!==void 0&&(W=""+g.key),g)Ze.call(g,j)&&!Le.hasOwnProperty(j)&&(B[j]=g[j]);var q=arguments.length-2;if(q===1)B.children=z;else if(1<q){for(var ee=Array(q),je=0;je<q;je++)ee[je]=arguments[je+2];B.children=ee}if(c&&c.defaultProps)for(j in q=c.defaultProps,q)B[j]===void 0&&(B[j]=q[j]);return{$$typeof:w,type:c,key:W,ref:$,props:B,_owner:Te.current}}function Tt(c,g){return{$$typeof:w,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function yt(c){return typeof c=="object"&&c!==null&&c.$$typeof===w}function Yt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(z){return g[z]})}var ut=/\/+/g;function Fe(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Yt(""+c.key):g.toString(36)}function et(c,g,z,j,B){var W=typeof c;(W==="undefined"||W==="boolean")&&(c=null);var $=!1;if(c===null)$=!0;else switch(W){case"string":case"number":$=!0;break;case"object":switch(c.$$typeof){case w:case L:$=!0}}if($)return $=c,B=B($),c=j===""?"."+Fe($,0):j,xe(B)?(z="",c!=null&&(z=c.replace(ut,"$&/")+"/"),et(B,g,z,"",function(je){return je})):B!=null&&(yt(B)&&(B=Tt(B,z+(!B.key||$&&$.key===B.key?"":(""+B.key).replace(ut,"$&/")+"/")+c)),g.push(B)),1;if($=0,j=j===""?".":j+":",xe(c))for(var q=0;q<c.length;q++){W=c[q];var ee=j+Fe(W,q);$+=et(W,g,z,ee,B)}else if(ee=J(c),typeof ee=="function")for(c=ee.call(c),q=0;!(W=c.next()).done;)W=W.value,ee=j+Fe(W,q++),$+=et(W,g,z,ee,B);else if(W==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return $}function ct(c,g,z){if(c==null)return c;var j=[],B=0;return et(c,j,"","",function(W){return g.call(z,W,B++)}),j}function Re(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(z){(c._status===0||c._status===-1)&&(c._status=1,c._result=z)},function(z){(c._status===0||c._status===-1)&&(c._status=2,c._result=z)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var oe={current:null},x={transition:null},I={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:x,ReactCurrentOwner:Te};function C(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:ct,forEach:function(c,g,z){ct(c,function(){g.apply(this,arguments)},z)},count:function(c){var g=0;return ct(c,function(){g++}),g},toArray:function(c){return ct(c,function(g){return g})||[]},only:function(c){if(!yt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},F.Component=Y,F.Fragment=m,F.Profiler=A,F.PureComponent=st,F.StrictMode=V,F.Suspense=b,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,F.act=C,F.cloneElement=function(c,g,z){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var j=be({},c.props),B=c.key,W=c.ref,$=c._owner;if(g!=null){if(g.ref!==void 0&&(W=g.ref,$=Te.current),g.key!==void 0&&(B=""+g.key),c.type&&c.type.defaultProps)var q=c.type.defaultProps;for(ee in g)Ze.call(g,ee)&&!Le.hasOwnProperty(ee)&&(j[ee]=g[ee]===void 0&&q!==void 0?q[ee]:g[ee])}var ee=arguments.length-2;if(ee===1)j.children=z;else if(1<ee){q=Array(ee);for(var je=0;je<ee;je++)q[je]=arguments[je+2];j.children=q}return{$$typeof:w,type:c.type,key:B,ref:W,props:j,_owner:$}},F.createContext=function(c){return c={$$typeof:le,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:D,_context:c},c.Consumer=c},F.createElement=qe,F.createFactory=function(c){var g=qe.bind(null,c);return g.type=c,g},F.createRef=function(){return{current:null}},F.forwardRef=function(c){return{$$typeof:ce,render:c}},F.isValidElement=yt,F.lazy=function(c){return{$$typeof:me,_payload:{_status:-1,_result:c},_init:Re}},F.memo=function(c,g){return{$$typeof:ve,type:c,compare:g===void 0?null:g}},F.startTransition=function(c){var g=x.transition;x.transition={};try{c()}finally{x.transition=g}},F.unstable_act=C,F.useCallback=function(c,g){return oe.current.useCallback(c,g)},F.useContext=function(c){return oe.current.useContext(c)},F.useDebugValue=function(){},F.useDeferredValue=function(c){return oe.current.useDeferredValue(c)},F.useEffect=function(c,g){return oe.current.useEffect(c,g)},F.useId=function(){return oe.current.useId()},F.useImperativeHandle=function(c,g,z){return oe.current.useImperativeHandle(c,g,z)},F.useInsertionEffect=function(c,g){return oe.current.useInsertionEffect(c,g)},F.useLayoutEffect=function(c,g){return oe.current.useLayoutEffect(c,g)},F.useMemo=function(c,g){return oe.current.useMemo(c,g)},F.useReducer=function(c,g,z){return oe.current.useReducer(c,g,z)},F.useRef=function(c){return oe.current.useRef(c)},F.useState=function(c){return oe.current.useState(c)},F.useSyncExternalStore=function(c,g,z){return oe.current.useSyncExternalStore(c,g,z)},F.useTransition=function(){return oe.current.useTransition()},F.version="18.3.1",F}var Tu;function Ro(){return Tu||(Tu=1,To.exports=Id()),To.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Od(){if(Pu)return wr;Pu=1;var w=Ro(),L=Symbol.for("react.element"),m=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,A=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function le(ce,b,ve){var me,ne={},J=null,Ve=null;ve!==void 0&&(J=""+ve),b.key!==void 0&&(J=""+b.key),b.ref!==void 0&&(Ve=b.ref);for(me in b)V.call(b,me)&&!D.hasOwnProperty(me)&&(ne[me]=b[me]);if(ce&&ce.defaultProps)for(me in b=ce.defaultProps,b)ne[me]===void 0&&(ne[me]=b[me]);return{$$typeof:L,type:ce,key:J,ref:Ve,props:ne,_owner:A.current}}return wr.Fragment=m,wr.jsx=le,wr.jsxs=le,wr}var Nu;function zd(){return Nu||(Nu=1,Co.exports=Od()),Co.exports}var S=zd(),Ri={},Po={exports:{}},De={},No={exports:{}},Lo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Dd(){return Lu||(Lu=1,(function(w){function L(x,I){var C=x.length;x.push(I);e:for(;0<C;){var c=C-1>>>1,g=x[c];if(0<A(g,I))x[c]=I,x[C]=g,C=c;else break e}}function m(x){return x.length===0?null:x[0]}function V(x){if(x.length===0)return null;var I=x[0],C=x.pop();if(C!==I){x[0]=C;e:for(var c=0,g=x.length,z=g>>>1;c<z;){var j=2*(c+1)-1,B=x[j],W=j+1,$=x[W];if(0>A(B,C))W<g&&0>A($,B)?(x[c]=$,x[W]=C,c=W):(x[c]=B,x[j]=C,c=j);else if(W<g&&0>A($,C))x[c]=$,x[W]=C,c=W;else break e}}return I}function A(x,I){var C=x.sortIndex-I.sortIndex;return C!==0?C:x.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var D=performance;w.unstable_now=function(){return D.now()}}else{var le=Date,ce=le.now();w.unstable_now=function(){return le.now()-ce}}var b=[],ve=[],me=1,ne=null,J=3,Ve=!1,be=!1,Z=!1,Y=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(x){for(var I=m(ve);I!==null;){if(I.callback===null)V(ve);else if(I.startTime<=x)V(ve),I.sortIndex=I.expirationTime,L(b,I);else break;I=m(ve)}}function xe(x){if(Z=!1,Je(x),!be)if(m(b)!==null)be=!0,Re(Ze);else{var I=m(ve);I!==null&&oe(xe,I.startTime-x)}}function Ze(x,I){be=!1,Z&&(Z=!1,gt(qe),qe=-1),Ve=!0;var C=J;try{for(Je(I),ne=m(b);ne!==null&&(!(ne.expirationTime>I)||x&&!Yt());){var c=ne.callback;if(typeof c=="function"){ne.callback=null,J=ne.priorityLevel;var g=c(ne.expirationTime<=I);I=w.unstable_now(),typeof g=="function"?ne.callback=g:ne===m(b)&&V(b),Je(I)}else V(b);ne=m(b)}if(ne!==null)var z=!0;else{var j=m(ve);j!==null&&oe(xe,j.startTime-I),z=!1}return z}finally{ne=null,J=C,Ve=!1}}var Te=!1,Le=null,qe=-1,Tt=5,yt=-1;function Yt(){return!(w.unstable_now()-yt<Tt)}function ut(){if(Le!==null){var x=w.unstable_now();yt=x;var I=!0;try{I=Le(!0,x)}finally{I?Fe():(Te=!1,Le=null)}}else Te=!1}var Fe;if(typeof st=="function")Fe=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Fe=function(){ct.postMessage(null)}}else Fe=function(){Y(ut,0)};function Re(x){Le=x,Te||(Te=!0,Fe())}function oe(x,I){qe=Y(function(){x(w.unstable_now())},I)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(x){x.callback=null},w.unstable_continueExecution=function(){be||Ve||(be=!0,Re(Ze))},w.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<x?Math.floor(1e3/x):5},w.unstable_getCurrentPriorityLevel=function(){return J},w.unstable_getFirstCallbackNode=function(){return m(b)},w.unstable_next=function(x){switch(J){case 1:case 2:case 3:var I=3;break;default:I=J}var C=J;J=I;try{return x()}finally{J=C}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(x,I){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var C=J;J=x;try{return I()}finally{J=C}},w.unstable_scheduleCallback=function(x,I,C){var c=w.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,x){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=C+g,x={id:me++,callback:I,priorityLevel:x,startTime:C,expirationTime:g,sortIndex:-1},C>c?(x.sortIndex=C,L(ve,x),m(b)===null&&x===m(ve)&&(Z?(gt(qe),qe=-1):Z=!0,oe(xe,C-c))):(x.sortIndex=g,L(b,x),be||Ve||(be=!0,Re(Ze))),x},w.unstable_shouldYield=Yt,w.unstable_wrapCallback=function(x){var I=J;return function(){var C=J;J=I;try{return x.apply(this,arguments)}finally{J=C}}}})(Lo)),Lo}var Ru;function Fd(){return Ru||(Ru=1,No.exports=Dd()),No.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function jd(){if(Mu)return De;Mu=1;var w=Ro(),L=Fd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V=new Set,A={};function D(e,t){le(e,t),le(e+"Capture",t)}function le(e,t){for(A[e]=t,e=0;e<t.length;e++)V.add(t[e])}var ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,ve=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,me={},ne={};function J(e){return b.call(ne,e)?!0:b.call(me,e)?!1:ve.test(e)?ne[e]=!0:(me[e]=!0,!1)}function Ve(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function be(e,t,n,r){if(t===null||typeof t>"u"||Ve(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,st);Y[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,st);Y[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,st);Y[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(be(t,n,i,r)&&(n=null),r||i===null?J(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xe=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Te=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),x=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var z=!1;function j(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function B(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=j(e.type,!1),e;case 11:return e=j(e.type.render,!1),e;case 1:return e=j(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case Te:return"Portal";case Tt:return"Profiler";case qe:return"StrictMode";case Fe:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function je(e){var t=ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=je(e))}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ao(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Io(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Ai(e,t){Io(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ii(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ii(e,t,n){(t!=="number"||xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(On(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function Do(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Fu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Bo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ju=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Di(e,t){if(t){if(ju[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,un=null,cn=null;function Ho(e){if(e=ir(e)){if(typeof Bi!="function")throw Error(m(280));var t=e.stateNode;t&&(t=qr(t),Bi(e.stateNode,e.type,t))}}function Vo(e){un?cn?cn.push(e):cn=[e]:un=e}function bo(){if(un){var e=un,t=cn;if(cn=un=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function qo(e,t){return e(t)}function Qo(){}var Wi=!1;function Yo(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return qo(e,t,n)}finally{Wi=!1,(un!==null||cn!==null)&&(Qo(),bo())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Hi=!1;if(ce)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Hi=!1}function Uu(e,t,n,r,i,l,o,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Un=!1,Sr=null,Er=!1,Vi=null,Bu={onError:function(e){Un=!0,Sr=e}};function Wu(e,t,n,r,i,l,o,a,s){Un=!1,Sr=null,Uu.apply(Bu,arguments)}function Hu(e,t,n,r,i,l,o,a,s){if(Wu.apply(this,arguments),Un){if(Un){var p=Sr;Un=!1,Sr=null}else throw Error(m(198));Er||(Er=!0,Vi=p)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $o(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Go(e){if($t(e)!==e)throw Error(m(188))}function Vu(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Go(i),e;if(l===r)return Go(i),t;l=l.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Ko(e){return e=Vu(e),e!==null?Xo(e):null}function Xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xo(e);if(t!==null)return t;e=e.sibling}return null}var Jo=L.unstable_scheduleCallback,Zo=L.unstable_cancelCallback,bu=L.unstable_shouldYield,qu=L.unstable_requestPaint,se=L.unstable_now,Qu=L.unstable_getCurrentPriorityLevel,bi=L.unstable_ImmediatePriority,ea=L.unstable_UserBlockingPriority,Cr=L.unstable_NormalPriority,Yu=L.unstable_LowPriority,ta=L.unstable_IdlePriority,Tr=null,dt=null;function $u(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Xu,Gu=Math.log,Ku=Math.LN2;function Xu(e){return e>>>=0,e===0?32:31-(Gu(e)/Ku|0)|0}var Pr=64,Nr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bn(a):(l&=o,l!==0&&(r=Bn(l)))}else o=n&~i,o!==0?r=Bn(o):l!==0&&(r=Bn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-tt(l),a=1<<o,s=i[o];s===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Ju(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ia,$i,la,oa,aa,Gi=!1,Rr=[],Pt=null,Nt=null,Lt=null,Hn=new Map,Vn=new Map,Rt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function bn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nc(e,t,n,r,i){switch(t){case"focusin":return Pt=bn(Pt,e,t,n,r,i),!0;case"dragenter":return Nt=bn(Nt,e,t,n,r,i),!0;case"mouseover":return Lt=bn(Lt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Hn.set(l,bn(Hn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vn.set(l,bn(Vn.get(l)||null,e,t,n,r,i)),!0}return!1}function ua(e){var t=Gt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=$o(n),t!==null){e.blockedOn=t,aa(e.priority,function(){la(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=ir(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Mr(e)&&n.delete(t)}function rc(){Gi=!1,Pt!==null&&Mr(Pt)&&(Pt=null),Nt!==null&&Mr(Nt)&&(Nt=null),Lt!==null&&Mr(Lt)&&(Lt=null),Hn.forEach(ca),Vn.forEach(ca)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,rc)))}function Qn(e){function t(i){return qn(i,e)}if(0<Rr.length){qn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&qn(Pt,e),Nt!==null&&qn(Nt,e),Lt!==null&&qn(Lt,e),Hn.forEach(t),Vn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&Rt.shift()}var dn=xe.ReactCurrentBatchConfig,Ar=!0;function ic(e,t,n,r){var i=Q,l=dn.transition;dn.transition=null;try{Q=1,Ki(e,t,n,r)}finally{Q=i,dn.transition=l}}function lc(e,t,n,r){var i=Q,l=dn.transition;dn.transition=null;try{Q=4,Ki(e,t,n,r)}finally{Q=i,dn.transition=l}}function Ki(e,t,n,r){if(Ar){var i=Xi(e,t,n,r);if(i===null)ml(e,t,r,Ir,n),sa(e,r);else if(nc(i,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<tc.indexOf(e)){for(;i!==null;){var l=ir(i);if(l!==null&&ia(l),l=Xi(e,t,n,r),l===null&&ml(e,t,r,Ir,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Ir=null;function Xi(e,t,n,r){if(Ir=null,e=Ui(r),e=Gt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$o(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case bi:return 1;case ea:return 4;case Cr:case Yu:return 16;case ta:return 536870912;default:return 16}default:return 16}}var Mt=null,Ji=null,Or=null;function fa(){if(Or)return Or;var e,t=Ji,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Or=i.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function pa(){return!1}function Ue(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dr:pa,this.isPropagationStopped=pa,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Ue(fn),Yn=C({},fn,{view:0,detail:0}),oc=Ue(Yn),el,tl,$n,Fr=C({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(el=e.screenX-$n.screenX,tl=e.screenY-$n.screenY):tl=el=0,$n=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),ma=Ue(Fr),ac=C({},Fr,{dataTransfer:0}),sc=Ue(ac),uc=C({},Yn,{relatedTarget:0}),nl=Ue(uc),cc=C({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Ue(cc),fc=C({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ue(fc),mc=C({},fn,{data:0}),ha=Ue(mc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yc[e])?!!t[e]:!1}function rl(){return vc}var wc=C({},Yn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Ue(wc),xc=C({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Ue(xc),_c=C({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Sc=Ue(_c),Ec=C({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=Ue(Ec),Tc=C({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pc=Ue(Tc),Nc=[9,13,27,32],il=ce&&"CompositionEvent"in window,Gn=null;ce&&"documentMode"in document&&(Gn=document.documentMode);var Lc=ce&&"TextEvent"in window&&!Gn,ya=ce&&(!il||Gn&&8<Gn&&11>=Gn),va=" ",wa=!1;function ka(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Rc(e,t){switch(e){case"compositionend":return xa(t);case"keypress":return t.which!==32?null:(wa=!0,va);case"textInput":return e=t.data,e===va&&wa?null:e;default:return null}}function Mc(e,t){if(pn)return e==="compositionend"||!il&&ka(e,t)?(e=fa(),Or=Ji=Mt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ya&&t.locale!=="ko"?null:t.data;default:return null}}var Ac={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ac[e.type]:t==="textarea"}function Sa(e,t,n,r){Vo(r),t=Hr(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Xn=null;function Ic(e){Wa(e,0)}function jr(e){var t=vn(e);if(Mo(t))return e}function Oc(e,t){if(e==="change")return t}var Ea=!1;if(ce){var ll;if(ce){var ol="oninput"in document;if(!ol){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),ol=typeof Ca.oninput=="function"}ll=ol}else ll=!1;Ea=ll&&(!document.documentMode||9<document.documentMode)}function Ta(){Kn&&(Kn.detachEvent("onpropertychange",Pa),Xn=Kn=null)}function Pa(e){if(e.propertyName==="value"&&jr(Xn)){var t=[];Sa(t,Xn,e,Ui(e)),Yo(Ic,t)}}function zc(e,t,n){e==="focusin"?(Ta(),Kn=t,Xn=n,Kn.attachEvent("onpropertychange",Pa)):e==="focusout"&&Ta()}function Dc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(Xn)}function Fc(e,t){if(e==="click")return jr(t)}function jc(e,t){if(e==="input"||e==="change")return jr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uc;function Jn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!b.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function Ra(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ra(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ma(){for(var e=window,t=xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=Ma(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ra(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=La(n,l);var o=La(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wc=ce&&"documentMode"in document&&11>=document.documentMode,mn=null,sl=null,Zn=null,ul=!1;function Aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||mn==null||mn!==xr(r)||(r=mn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Jn(Zn,r)||(Zn=r,r=Hr(sl,"onSelect"),0<r.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},cl={},Ia={};ce&&(Ia=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Br(e){if(cl[e])return cl[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ia)return cl[e]=t[n];return e}var Oa=Br("animationend"),za=Br("animationiteration"),Da=Br("animationstart"),Fa=Br("transitionend"),ja=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){ja.set(e,t),D(t,[e])}for(var dl=0;dl<Ua.length;dl++){var fl=Ua[dl],Hc=fl.toLowerCase(),Vc=fl[0].toUpperCase()+fl.slice(1);At(Hc,"on"+Vc)}At(Oa,"onAnimationEnd"),At(za,"onAnimationIteration"),At(Da,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Fa,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hu(r,t,void 0,e),e.currentTarget=null}function Wa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,p),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,p=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,p),l=s}}}if(Er)throw e=Vi,Er=!1,Vi=null,e}function K(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Ha(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Ha(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Wr]){e[Wr]=!0,V.forEach(function(n){n!=="selectionchange"&&(bc.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,pl("selectionchange",!1,t))}}function Ha(e,t,n,r){switch(da(t)){case 1:var i=ic;break;case 4:i=lc;break;default:i=Ki}n=i.bind(null,t,n,e),i=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gt(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Yo(function(){var p=l,y=Ui(n),v=[];e:{var h=ja.get(e);if(h!==void 0){var _=Zi,T=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":_=kc;break;case"focusin":T="focus",_=nl;break;case"focusout":T="blur",_=nl;break;case"beforeblur":case"afterblur":_=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Sc;break;case Oa:case za:case Da:_=dc;break;case Fa:_=Cc;break;case"scroll":_=oc;break;case"wheel":_=Pc;break;case"copy":case"cut":case"paste":_=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ga}var P=(t&4)!==0,ue=!P&&e==="scroll",d=P?h!==null?h+"Capture":null:h;P=[];for(var u=p,f;u!==null;){f=u;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,d!==null&&(k=Fn(u,d),k!=null&&P.push(nr(u,k,f)))),ue)break;u=u.return}0<P.length&&(h=new _(h,T,null,n,y),v.push({event:h,listeners:P}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",h&&n!==ji&&(T=n.relatedTarget||n.fromElement)&&(Gt(T)||T[vt]))break e;if((_||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=p,T=T?Gt(T):null,T!==null&&(ue=$t(T),T!==ue||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=p),_!==T)){if(P=ma,k="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(P=ga,k="onPointerLeave",d="onPointerEnter",u="pointer"),ue=_==null?h:vn(_),f=T==null?h:vn(T),h=new P(k,u+"leave",_,n,y),h.target=ue,h.relatedTarget=f,k=null,Gt(y)===p&&(P=new P(d,u+"enter",T,n,y),P.target=f,P.relatedTarget=ue,k=P),ue=k,_&&T)t:{for(P=_,d=T,u=0,f=P;f;f=gn(f))u++;for(f=0,k=d;k;k=gn(k))f++;for(;0<u-f;)P=gn(P),u--;for(;0<f-u;)d=gn(d),f--;for(;u--;){if(P===d||d!==null&&P===d.alternate)break t;P=gn(P),d=gn(d)}P=null}else P=null;_!==null&&Va(v,h,_,P,!1),T!==null&&ue!==null&&Va(v,ue,T,P,!0)}}e:{if(h=p?vn(p):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var N=Oc;else if(_a(h))if(Ea)N=jc;else{N=Dc;var R=zc}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Fc);if(N&&(N=N(e,p))){Sa(v,N,n,y);break e}R&&R(e,h,p),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ii(h,"number",h.value)}switch(R=p?vn(p):window,e){case"focusin":(_a(R)||R.contentEditable==="true")&&(mn=R,sl=p,Zn=null);break;case"focusout":Zn=sl=mn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Aa(v,n,y);break;case"selectionchange":if(Wc)break;case"keydown":case"keyup":Aa(v,n,y)}var M;if(il)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else pn?ka(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ya&&n.locale!=="ko"&&(pn||O!=="onCompositionStart"?O==="onCompositionEnd"&&pn&&(M=fa()):(Mt=y,Ji="value"in Mt?Mt.value:Mt.textContent,pn=!0)),R=Hr(p,O),0<R.length&&(O=new ha(O,e,null,n,y),v.push({event:O,listeners:R}),M?O.data=M:(M=xa(n),M!==null&&(O.data=M)))),(M=Lc?Rc(e,n):Mc(e,n))&&(p=Hr(p,"onBeforeInput"),0<p.length&&(y=new ha("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=M))}Wa(v,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Fn(e,n),l!=null&&r.unshift(nr(e,l,i)),l=Fn(e,t),l!=null&&r.push(nr(e,l,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,i?(s=Fn(n,l),s!=null&&o.unshift(nr(n,s,a))):i||(s=Fn(n,l),s!=null&&o.push(nr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(qc,`
`).replace(Qc,"")}function Vr(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(m(425))}function br(){}var hl=null,gl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,qa=typeof Promise=="function"?Promise:void 0,$c=typeof queueMicrotask=="function"?queueMicrotask:typeof qa<"u"?function(e){return qa.resolve(null).then(e).catch(Gc)}:vl;function Gc(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ft="__reactFiber$"+yn,rr="__reactProps$"+yn,vt="__reactContainer$"+yn,kl="__reactEvents$"+yn,Kc="__reactListeners$"+yn,Xc="__reactHandles$"+yn;function Gt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qa(e);e!==null;){if(n=e[ft])return n;e=Qa(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[ft]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function qr(e){return e[rr]||null}var xl=[],wn=-1;function Ot(e){return{current:e}}function X(e){0>wn||(e.current=xl[wn],xl[wn]=null,wn--)}function G(e,t){wn++,xl[wn]=e.current,e.current=t}var zt={},_e=Ot(zt),Me=Ot(!1),Kt=zt;function kn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Qr(){X(Me),X(_e)}function Ya(e,t,n){if(_e.current!==zt)throw Error(m(168));G(_e,t),G(Me,n)}function $a(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,$(e)||"Unknown",i));return C({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Kt=_e.current,G(_e,e),G(Me,Me.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=$a(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,X(Me),X(_e),G(_e,e)):X(Me),G(Me,n)}var wt=null,$r=!1,_l=!1;function Ka(e){wt===null?wt=[e]:wt.push(e)}function Jc(e){$r=!0,Ka(e)}function Dt(){if(!_l&&wt!==null){_l=!0;var e=0,t=Q;try{var n=wt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,$r=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Jo(bi,Dt),i}finally{Q=t,_l=!1}}return null}var xn=[],_n=0,Gr=null,Kr=0,Qe=[],Ye=0,Xt=null,kt=1,xt="";function Jt(e,t){xn[_n++]=Kr,xn[_n++]=Gr,Gr=e,Kr=t}function Xa(e,t,n){Qe[Ye++]=kt,Qe[Ye++]=xt,Qe[Ye++]=Xt,Xt=e;var r=kt;e=xt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var l=32-tt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-tt(t)+i|n<<i|r,xt=l+e}else kt=1<<l|n<<i|r,xt=e}function Sl(e){e.return!==null&&(Jt(e,1),Xa(e,1,0))}function El(e){for(;e===Gr;)Gr=xn[--_n],xn[_n]=null,Kr=xn[--_n],xn[_n]=null;for(;e===Xt;)Xt=Qe[--Ye],Qe[Ye]=null,xt=Qe[--Ye],Qe[Ye]=null,kt=Qe[--Ye],Qe[Ye]=null}var Be=null,We=null,te=!1,rt=null;function Ja(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,We=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:kt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,We=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(te){var t=We;if(t){var n=t;if(!Za(e,t)){if(Cl(e))throw Error(m(418));t=It(n.nextSibling);var r=Be;t&&Za(e,t)?Ja(r,n):(e.flags=e.flags&-4097|2,te=!1,Be=e)}}else{if(Cl(e))throw Error(m(418));e.flags=e.flags&-4097|2,te=!1,Be=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Xr(e){if(e!==Be)return!1;if(!te)return es(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=We)){if(Cl(e))throw ts(),Error(m(418));for(;t;)Ja(e,t),t=It(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Be?It(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=We;e;)e=It(e.nextSibling)}function Sn(){We=Be=null,te=!1}function Pl(e){rt===null?rt=[e]:rt.push(e)}var Zc=xe.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=bt(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,k){return u===null||u.tag!==6?(u=wo(f,d.mode,k),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,k){var N=f.type;return N===Le?y(d,u,f.props.children,k,f.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Re&&ns(N)===u.type)?(k=i(u,f.props),k.ref=lr(d,u,f),k.return=d,k):(k=_i(f.type,f.key,f.props,null,d.mode,k),k.ref=lr(d,u,f),k.return=d,k)}function p(d,u,f,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ko(f,d.mode,k),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function y(d,u,f,k,N){return u===null||u.tag!==7?(u=an(f,d.mode,k,N),u.return=d,u):(u=i(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return f=_i(u.type,u.key,u.props,null,d.mode,f),f.ref=lr(d,null,u),f.return=d,f;case Te:return u=ko(u,d.mode,f),u.return=d,u;case Re:var k=u._init;return v(d,k(u._payload),f)}if(On(u)||I(u))return u=an(u,d.mode,f,null),u.return=d,u;Jr(d,u)}return null}function h(d,u,f,k){var N=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:a(d,u,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===N?s(d,u,f,k):null;case Te:return f.key===N?p(d,u,f,k):null;case Re:return N=f._init,h(d,u,N(f._payload),k)}if(On(f)||I(f))return N!==null?null:y(d,u,f,k,null);Jr(d,f)}return null}function _(d,u,f,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return d=d.get(f)||null,a(u,d,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ze:return d=d.get(k.key===null?f:k.key)||null,s(u,d,k,N);case Te:return d=d.get(k.key===null?f:k.key)||null,p(u,d,k,N);case Re:var R=k._init;return _(d,u,f,R(k._payload),N)}if(On(k)||I(k))return d=d.get(f)||null,y(u,d,k,N,null);Jr(u,k)}return null}function T(d,u,f,k){for(var N=null,R=null,M=u,O=u=0,ye=null;M!==null&&O<f.length;O++){M.index>O?(ye=M,M=null):ye=M.sibling;var H=h(d,M,f[O],k);if(H===null){M===null&&(M=ye);break}e&&M&&H.alternate===null&&t(d,M),u=l(H,u,O),R===null?N=H:R.sibling=H,R=H,M=ye}if(O===f.length)return n(d,M),te&&Jt(d,O),N;if(M===null){for(;O<f.length;O++)M=v(d,f[O],k),M!==null&&(u=l(M,u,O),R===null?N=M:R.sibling=M,R=M);return te&&Jt(d,O),N}for(M=r(d,M);O<f.length;O++)ye=_(M,d,O,f[O],k),ye!==null&&(e&&ye.alternate!==null&&M.delete(ye.key===null?O:ye.key),u=l(ye,u,O),R===null?N=ye:R.sibling=ye,R=ye);return e&&M.forEach(function(qt){return t(d,qt)}),te&&Jt(d,O),N}function P(d,u,f,k){var N=I(f);if(typeof N!="function")throw Error(m(150));if(f=N.call(f),f==null)throw Error(m(151));for(var R=N=null,M=u,O=u=0,ye=null,H=f.next();M!==null&&!H.done;O++,H=f.next()){M.index>O?(ye=M,M=null):ye=M.sibling;var qt=h(d,M,H.value,k);if(qt===null){M===null&&(M=ye);break}e&&M&&qt.alternate===null&&t(d,M),u=l(qt,u,O),R===null?N=qt:R.sibling=qt,R=qt,M=ye}if(H.done)return n(d,M),te&&Jt(d,O),N;if(M===null){for(;!H.done;O++,H=f.next())H=v(d,H.value,k),H!==null&&(u=l(H,u,O),R===null?N=H:R.sibling=H,R=H);return te&&Jt(d,O),N}for(M=r(d,M);!H.done;O++,H=f.next())H=_(M,d,O,H.value,k),H!==null&&(e&&H.alternate!==null&&M.delete(H.key===null?O:H.key),u=l(H,u,O),R===null?N=H:R.sibling=H,R=H);return e&&M.forEach(function(Ad){return t(d,Ad)}),te&&Jt(d,O),N}function ue(d,u,f,k){if(typeof f=="object"&&f!==null&&f.type===Le&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var N=f.key,R=u;R!==null;){if(R.key===N){if(N=f.type,N===Le){if(R.tag===7){n(d,R.sibling),u=i(R,f.props.children),u.return=d,d=u;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Re&&ns(N)===R.type){n(d,R.sibling),u=i(R,f.props),u.ref=lr(d,R,f),u.return=d,d=u;break e}n(d,R);break}else t(d,R);R=R.sibling}f.type===Le?(u=an(f.props.children,d.mode,k,f.key),u.return=d,d=u):(k=_i(f.type,f.key,f.props,null,d.mode,k),k.ref=lr(d,u,f),k.return=d,d=k)}return o(d);case Te:e:{for(R=f.key;u!==null;){if(u.key===R)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ko(f,d.mode,k),u.return=d,d=u}return o(d);case Re:return R=f._init,ue(d,u,R(f._payload),k)}if(On(f))return T(d,u,f,k);if(I(f))return P(d,u,f,k);Jr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=wo(f,d.mode,k),u.return=d,d=u),o(d)):n(d,u)}return ue}var En=rs(!0),is=rs(!1),Zr=Ot(null),ei=null,Cn=null,Nl=null;function Ll(){Nl=Cn=ei=null}function Rl(e){var t=Zr.current;X(Zr),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){ei=e,Nl=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ie=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(ei===null)throw Error(m(308));Cn=e,ei.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Zt=null;function Al(e){Zt===null?Zt=[e]:Zt.push(e)}function ls(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Al(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,Al(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var i=e.updateQueue;Ft=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,p=s.next;s.next=null,o===null?l=p:o.next=p,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=s))}if(l!==null){var v=i.baseState;o=0,y=p=s=null,a=l;do{var h=a.lane,_=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=e,P=a;switch(h=t,_=n,P.tag){case 1:if(T=P.payload,typeof T=="function"){v=T.call(_,v,h);break e}v=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=P.payload,h=typeof T=="function"?T.call(_,v,h):T,h==null)break e;v=C({},v,h);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=_,s=v):y=y.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(s=v),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);nn|=o,e.lanes=o,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var or={},pt=Ot(or),ar=Ot(or),sr=Ot(or);function en(e){if(e===or)throw Error(m(174));return e}function Ol(e,t){switch(G(sr,t),G(ar,e),G(pt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zi(t,e)}X(pt),G(pt,t)}function Pn(){X(pt),X(ar),X(sr)}function us(e){en(sr.current);var t=en(pt.current),n=zi(t,e.type);t!==n&&(G(ar,e),G(pt,n))}function zl(e){ar.current===e&&(X(pt),X(ar))}var re=Ot(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function Fl(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var ii=xe.ReactCurrentDispatcher,jl=xe.ReactCurrentBatchConfig,tn=0,ie=null,fe=null,he=null,li=!1,ur=!1,cr=0,ed=0;function Se(){throw Error(m(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,i,l){if(tn=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?id:ld,e=n(r,i),ur){l=0;do{if(ur=!1,cr=0,25<=l)throw Error(m(301));l+=1,he=fe=null,t.updateQueue=null,ii.current=od,e=n(r,i)}while(ur)}if(ii.current=si,t=fe!==null&&fe.next!==null,tn=0,he=fe=ie=null,li=!1,t)throw Error(m(300));return e}function Wl(){var e=cr!==0;return cr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ie.memoizedState=he=e:he=he.next=e,he}function Ge(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?ie.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?ie.memoizedState=he=e:he=he.next=e}return he}function dr(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,p=l;do{var y=p.lane;if((tn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=v,o=r):s=s.next=v,ie.lanes|=y,nn|=y}p=p.next}while(p!==null&&p!==l);s===null?o=r:s.next=a,nt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ie.lanes|=l,nn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);nt(l,t.memoizedState)||(Ie=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function cs(){}function ds(e,t){var n=ie,r=Ge(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ie=!0),r=r.queue,bl(ms.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,fr(9,ps.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(m(349));(tn&30)!==0||fs(n,t,i)}return i}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function gs(e){var t=_t(e,1);t!==null&&at(t,e,1,-1)}function ys(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,ie,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return Ge().memoizedState}function oi(e,t,n,r){var i=mt();ie.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=Ge();r=r===void 0?null:r;var l=void 0;if(fe!==null){var o=fe.memoizedState;if(l=o.destroy,r!==null&&Ul(r,o.deps)){i.memoizedState=fr(t,n,l,r);return}}ie.flags|=e,i.memoizedState=fr(1|t,n,l,r)}function ws(e,t){return oi(8390656,8,e,t)}function bl(e,t){return ai(2048,8,e,t)}function ks(e,t){return ai(4,2,e,t)}function xs(e,t){return ai(4,4,e,t)}function _s(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,_s.bind(null,t,e),n)}function ql(){}function Es(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ts(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n):(nt(n,t)||(n=na(),ie.lanes|=n,nn|=n,e.baseState=!0),t)}function td(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),t()}finally{Q=n,jl.transition=r}}function Ps(){return Ge().memoizedState}function nd(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e))Ls(t,n);else if(n=ls(e,t,n,r),n!==null){var i=Ne();at(n,e,r,i),Rs(n,t,r)}}function rd(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ls(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,o)){var s=t.interleaved;s===null?(i.next=i,Al(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ls(e,t,i,r),n!==null&&(i=Ne(),at(n,e,r,i),Rs(n,t,r))}}function Ns(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ls(e,t){ur=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}var si={readContext:$e,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},id={readContext:$e,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:ql,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=td.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=mt();if(te){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ge===null)throw Error(m(349));(tn&30)!==0||fs(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ws(ms.bind(null,r,l,e),[e]),r.flags|=2048,fr(9,ps.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mt(),t=ge.identifierPrefix;if(te){var n=xt,r=kt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ld={readContext:$e,useCallback:Es,useContext:$e,useEffect:bl,useImperativeHandle:Ss,useInsertionEffect:ks,useLayoutEffect:xs,useMemo:Cs,useReducer:Hl,useRef:vs,useState:function(){return Hl(dr)},useDebugValue:ql,useDeferredValue:function(e){var t=Ge();return Ts(t,fe.memoizedState,e)},useTransition:function(){var e=Hl(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1},od={readContext:$e,useCallback:Es,useContext:$e,useEffect:bl,useImperativeHandle:Ss,useInsertionEffect:ks,useLayoutEffect:xs,useMemo:Cs,useReducer:Vl,useRef:vs,useState:function(){return Vl(dr)},useDebugValue:ql,useDeferredValue:function(e){var t=Ge();return fe===null?t.memoizedState=e:Ts(t,fe.memoizedState,e)},useTransition:function(){var e=Vl(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Ht(e),l=St(r,i);l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,i),t!==null&&(at(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Ht(e),l=St(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,i),t!==null&&(at(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Ht(e),i=St(n,r);i.tag=2,t!=null&&(i.callback=t),t=jt(e,i,r),t!==null&&(at(t,e,r,n),ti(t,e,r))}};function Ms(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(i,l):!0}function As(e,t,n){var r=!1,i=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=$e(l):(i=Ae(t)?Kt:_e.current,r=t.contextTypes,l=(r=r!=null)?kn(e,i):zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Il(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=$e(l):(l=Ae(t)?Kt:_e.current,i.context=kn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ql(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Os(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,co=r),Gl(e,t)},n}function zs(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ds(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var sd=xe.ReactCurrentOwner,Ie=!1;function Pe(e,t,n,r){t.child=e===null?is(t,null,n,r):En(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var l=t.ref;return Tn(t,i),r=Bl(e,t,n,r,l,i),n=Wl(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(te&&n&&Sl(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!vo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ws(e,t,l,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(o,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ws(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Et(e,t,i)}return Kl(e,t,n,r,i)}function Hs(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Rn,He),He|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Rn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,G(Rn,He),He|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,G(Rn,He),He|=r;return Pe(e,t,i,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,i){var l=Ae(n)?Kt:_e.current;return l=kn(t,l),Tn(t,i),n=Bl(e,t,n,r,l,i),r=Wl(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(te&&r&&Sl(t),t.flags|=1,Pe(e,t,n,i),t.child)}function bs(e,t,n,r,i){if(Ae(n)){var l=!0;Yr(t)}else l=!1;if(Tn(t,i),t.stateNode===null)di(e,t),As(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=$e(p):(p=Ae(n)?Kt:_e.current,p=kn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Is(t,o,r,p),Ft=!1;var h=t.memoizedState;o.state=h,ni(t,r,o,i),s=t.memoizedState,a!==r||h!==s||Me.current||Ft?(typeof y=="function"&&(Ql(t,n,y,r),s=t.memoizedState),(a=Ft||Ms(t,n,a,r,h,s,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=p,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:it(t.type,a),o.props=p,v=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=Ae(n)?Kt:_e.current,s=kn(t,s));var _=n.getDerivedStateFromProps;(y=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||h!==s)&&Is(t,o,r,s),Ft=!1,h=t.memoizedState,o.state=h,ni(t,r,o,i);var T=t.memoizedState;a!==v||h!==T||Me.current||Ft?(typeof _=="function"&&(Ql(t,n,_,r),T=t.memoizedState),(p=Ft||Ms(t,n,p,r,h,T,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),o.props=r,o.state=T,o.context=s,r=p):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,l,i)}function Xl(e,t,n,r,i,l){Vs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ga(t,n,!1),Et(e,t,l);r=t.stateNode,sd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):Pe(e,t,a,l),t.memoizedState=r.state,i&&Ga(t,n,!0),t.child}function qs(e){var t=e.stateNode;t.pendingContext?Ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ya(e,t.context,!1),Ol(e,t.containerInfo)}function Qs(e,t,n,r,i){return Sn(),Pl(i),t.flags|=256,Pe(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=re.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(re,i&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Si(o,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Zl(n),t.memoizedState=Jl,e):eo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ud(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=bt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=bt(a,l):(l=an(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&Pl(r),En(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(m(422))),ci(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Si({mode:"visible",children:r.children},i,0,null),l=an(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Jl,l);if((t.mode&1)===0)return ci(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(m(419)),r=$l(l,r,void 0),ci(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ie||a){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,_t(e,i),at(r,e,i,-1))}return yo(),r=$l(Error(m(421))),ci(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_d.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,We=It(i.nextSibling),Be=t,te=!0,rt=null,e!==null&&(Qe[Ye++]=kt,Qe[Ye++]=xt,Qe[Ye++]=Xt,kt=e.id,xt=e.overflow,Xt=t),t=eo(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function to(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Gs(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Pe(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,l);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:qs(t),Sn();break;case 5:us(t);break;case 1:Ae(t.type)&&Yr(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ys(e,t,n):(G(re,re.current&1),e=Et(e,t,n),e!==null?e.sibling:null);G(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return Et(e,t,n)}var Ks,no,Xs,Js;Ks=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},no=function(){},Xs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(pt.current);var l=null;switch(n){case"input":i=Mi(e,i),r=Mi(e,r),l=[];break;case"select":i=C({},i,{value:void 0}),r=C({},r,{value:void 0}),l=[];break;case"textarea":i=Oi(e,i),r=Oi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=br)}Di(n,r);var o;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var a=i[p];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(A.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(a=i?.[p],r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(A.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&K("scroll",e),l||a===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},Js=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ae(t.type)&&Qr(),Ee(t),null;case 3:return r=t.stateNode,Pn(),X(Me),X(_e),Fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(mo(rt),rt=null))),no(e,t),Ee(t),null;case 5:zl(t);var i=en(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ee(t),null}if(e=en(pt.current),Xr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ft]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<er.length;i++)K(er[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ao(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":zo(r,l),K("invalid",r)}Di(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),i=["children",""+a]):A.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":kr(r),Oo(r,l,!0);break;case"textarea":kr(r),Fo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=br)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[rr]=r,Ks(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fi(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)K(er[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Ao(e,r),i=Mi(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=C({},r,{value:void 0}),K("invalid",e);break;case"textarea":zo(e,r),i=Oi(e,r),K("invalid",e);break;default:i=r}Di(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Wo(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uo(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&zn(e,s):typeof s=="number"&&zn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(A.hasOwnProperty(l)?s!=null&&l==="onScroll"&&K("scroll",e):s!=null&&Je(e,l,s,o))}switch(n){case"input":kr(e),Oo(e,r,!1);break;case"textarea":kr(e),Fo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Js(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=en(sr.current),en(pt.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(l=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ee(t),null;case 13:if(X(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),Sn(),t.flags|=98560,l=!1;else if(l=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l[ft]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),l=!1}else rt!==null&&(mo(rt),rt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?pe===0&&(pe=3):yo())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Pn(),no(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Rl(t.type._context),Ee(t),null;case 17:return Ae(t.type)&&Qr(),Ee(t),null;case 19:if(X(re),l=t.memoizedState,l===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)pr(l,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ri(e),o!==null){for(t.flags|=128,pr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(re,re.current&1|2),t.child}e=e.sibling}l.tail!==null&&se()>Mn&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ri(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!te)return Ee(t),null}else 2*se()-l.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,n=re.current,G(re,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function fd(e,t){switch(El(t),t.tag){case 1:return Ae(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),X(Me),X(_e),Fl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return zl(t),null;case 13:if(X(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(re),null;case 4:return Pn(),null;case 10:return Rl(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var fi=!1,Ce=!1,pd=typeof WeakSet=="function"?WeakSet:Set,E=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Zs=!1;function md(e,t){if(hl=Ar,e=Ma(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var _;v!==n||i!==0&&v.nodeType!==3||(a=o+i),v!==l||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(_=v.firstChild)!==null;)h=v,v=_;for(;;){if(v===e)break t;if(h===n&&++p===i&&(a=o),h===l&&++y===r&&(s=o),(_=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=_}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},Ar=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var P=T.memoizedProps,ue=T.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?P:it(t.type,P),ue);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(k){ae(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return T=Zs,Zs=!1,T}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ro(t,n,l)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[rr],delete t[kl],delete t[Kc],delete t[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=br));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var we=null,lt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:Ce||Ln(n,t);case 6:var r=we,i=lt;we=null,Ut(e,t,n),we=r,lt=i,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Qn(e)):wl(we,n.stateNode));break;case 4:r=we,i=lt,we=n.stateNode.containerInfo,lt=!0,Ut(e,t,n),we=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&ro(n,t,o),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Ce&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ut(e,t,n),Ce=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var i=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(m(160));ru(l,o,i),we=null,lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){ae(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ht(e),r&4){try{mr(3,e,e.return),pi(3,e)}catch(P){ae(e,e.return,P)}try{mr(5,e,e.return)}catch(P){ae(e,e.return,P)}}break;case 1:ot(t,e),ht(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ot(t,e),ht(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{zn(i,"")}catch(P){ae(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Io(i,l),Fi(a,o);var p=Fi(a,l);for(o=0;o<s.length;o+=2){var y=s[o],v=s[o+1];y==="style"?Wo(i,v):y==="dangerouslySetInnerHTML"?Uo(i,v):y==="children"?zn(i,v):Je(i,y,v,p)}switch(a){case"input":Ai(i,l);break;case"textarea":Do(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?sn(i,!!l.multiple,_,!1):h!==!!l.multiple&&(l.defaultValue!=null?sn(i,!!l.multiple,l.defaultValue,!0):sn(i,!!l.multiple,l.multiple?[]:"",!1))}i[rr]=l}catch(P){ae(e,e.return,P)}}break;case 6:if(ot(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(P){ae(e,e.return,P)}}break;case 3:if(ot(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(P){ae(e,e.return,P)}break;case 4:ot(t,e),ht(e);break;case 13:ot(t,e),ht(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uo=se())),r&4&&iu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||y,ot(t,e),Ce=p):ot(t,e),ht(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(v=E=y;E!==null;){switch(h=E,_=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:Ln(h,h.return);var T=h.stateNode;if(typeof T.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(P){ae(r,n,P)}}break;case 5:Ln(h,h.return);break;case 22:if(h.memoizedState!==null){su(v);continue}}_!==null?(_.return=h,E=_):su(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Bo("display",o))}catch(P){ae(e,e.return,P)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(P){ae(e,e.return,P)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),ht(e),r&4&&iu(e);break;case 21:break;default:ot(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zn(i,""),r.flags&=-33);var l=nu(e);oo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nu(e);lo(e,a,o);break;default:throw Error(m(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){E=e,ou(e)}function ou(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fi;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ce;a=fi;var p=Ce;if(fi=o,(Ce=s)&&!p)for(E=i;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?uu(i):s!==null?(s.return=o,E=s):uu(i);for(;l!==null;)E=l,ou(l),l=l.sibling;E=i,fi=a,Ce=p}au(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,E=l):au(e)}}function au(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ss(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ce||t.flags&512&&io(t)}catch(h){ae(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function su(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function uu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ae(t,i,s)}}var l=t.return;try{io(t)}catch(s){ae(t,l,s)}break;case 5:var o=t.return;try{io(t)}catch(s){ae(t,o,s)}}}catch(s){ae(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var gd=Math.ceil,mi=xe.ReactCurrentDispatcher,ao=xe.ReactCurrentOwner,Ke=xe.ReactCurrentBatchConfig,U=0,ge=null,de=null,ke=0,He=0,Rn=Ot(0),pe=0,hr=null,nn=0,hi=0,so=0,gr=null,Oe=null,uo=0,Mn=1/0,Ct=null,gi=!1,co=null,Bt=null,yi=!1,Wt=null,vi=0,yr=0,fo=null,wi=-1,ki=0;function Ne(){return(U&6)!==0?se():wi!==-1?wi:wi=se()}function Ht(e){return(e.mode&1)===0?1:(U&2)!==0&&ke!==0?ke&-ke:Zc.transition!==null?(ki===0&&(ki=na()),ki):(e=Q,e!==0||(e=window.event,e=e===void 0?16:da(e.type)),e)}function at(e,t,n,r){if(50<yr)throw yr=0,fo=null,Error(m(185));Wn(e,n,r),((U&2)===0||e!==ge)&&(e===ge&&((U&2)===0&&(hi|=n),pe===4&&Vt(e,ke)),ze(e,r),n===1&&U===0&&(t.mode&1)===0&&(Mn=se()+500,$r&&Dt()))}function ze(e,t){var n=e.callbackNode;Zu(e,t);var r=Lr(e,e===ge?ke:0);if(r===0)n!==null&&Zo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zo(n),t===1)e.tag===0?Jc(du.bind(null,e)):Ka(du.bind(null,e)),$c(function(){(U&6)===0&&Dt()}),n=null;else{switch(ra(r)){case 1:n=bi;break;case 4:n=ea;break;case 16:n=Cr;break;case 536870912:n=ta;break;default:n=Cr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(wi=-1,ki=0,(U&6)!==0)throw Error(m(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Lr(e,e===ge?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xi(e,r);else{t=r;var i=U;U|=2;var l=pu();(ge!==e||ke!==t)&&(Ct=null,Mn=se()+500,ln(e,t));do try{wd();break}catch(a){fu(e,a)}while(!0);Ll(),mi.current=l,U=i,de!==null?t=0:(ge=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=qi(e),i!==0&&(r=i,t=po(e,i))),t===1)throw n=hr,ln(e,0),Vt(e,r),ze(e,se()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!yd(i)&&(t=xi(e,r),t===2&&(l=qi(e),l!==0&&(r=l,t=po(e,l))),t===1))throw n=hr,ln(e,0),Vt(e,r),ze(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:on(e,Oe,Ct);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=uo+500-se(),10<t)){if(Lr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(on.bind(null,e,Oe,Ct),t);break}on(e,Oe,Ct);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-tt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=vl(on.bind(null,e,Oe,Ct),r);break}on(e,Oe,Ct);break;case 5:on(e,Oe,Ct);break;default:throw Error(m(329))}}}return ze(e,se()),e.callbackNode===n?cu.bind(null,e):null}function po(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=xi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&mo(t)),e}function mo(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~so,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((U&6)!==0)throw Error(m(327));An();var t=Lr(e,0);if((t&1)===0)return ze(e,se()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=qi(e);r!==0&&(t=r,n=po(e,r))}if(n===1)throw n=hr,ln(e,0),Vt(e,t),ze(e,se()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Oe,Ct),ze(e,se()),null}function ho(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Mn=se()+500,$r&&Dt())}}function rn(e){Wt!==null&&Wt.tag===0&&(U&6)===0&&An();var t=U;U|=1;var n=Ke.transition,r=Q;try{if(Ke.transition=null,Q=1,e)return e()}finally{Q=r,Ke.transition=n,U=t,(U&6)===0&&Dt()}}function go(){He=Rn.current,X(Rn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:Pn(),X(Me),X(_e),Fl();break;case 5:zl(r);break;case 4:Pn();break;case 13:X(re);break;case 19:X(re);break;case 10:Rl(r.type._context);break;case 22:case 23:go()}n=n.return}if(ge=e,de=e=bt(e.current,null),ke=He=t,pe=0,hr=null,so=hi=nn=0,Oe=gr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Zt=null}return e}function fu(e,t){do{var n=de;try{if(Ll(),ii.current=si,li){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(tn=0,he=fe=ie=null,ur=!1,cr=0,ao.current=null,n===null||n.return===null){pe=1,hr=t,de=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=ke,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=a,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var _=Fs(o);if(_!==null){_.flags&=-257,js(_,o,a,l,t),_.mode&1&&Ds(l,p,t),t=_,s=p;var T=t.updateQueue;if(T===null){var P=new Set;P.add(s),t.updateQueue=P}else T.add(s);break e}else{if((t&1)===0){Ds(l,p,t),yo();break e}s=Error(m(426))}}else if(te&&a.mode&1){var ue=Fs(o);if(ue!==null){(ue.flags&65536)===0&&(ue.flags|=256),js(ue,o,a,l,t),Pl(Nn(s,a));break e}}l=s=Nn(s,a),pe!==4&&(pe=2),gr===null?gr=[l]:gr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Os(l,s,t);as(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bt===null||!Bt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=zs(l,a,t);as(l,k);break e}}l=l.return}while(l!==null)}hu(n)}catch(N){t=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pu(){var e=mi.current;return mi.current=si,e===null?si:e}function yo(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||(nn&268435455)===0&&(hi&268435455)===0||Vt(ge,ke)}function xi(e,t){var n=U;U|=2;var r=pu();(ge!==e||ke!==t)&&(Ct=null,ln(e,t));do try{vd();break}catch(i){fu(e,i)}while(!0);if(Ll(),U=n,mi.current=r,de!==null)throw Error(m(261));return ge=null,ke=0,pe}function vd(){for(;de!==null;)mu(de)}function wd(){for(;de!==null&&!bu();)mu(de)}function mu(e){var t=vu(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?hu(e):de=t,ao.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,He),n!==null){de=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function on(e,t,n){var r=Q,i=Ke.transition;try{Ke.transition=null,Q=1,kd(e,t,n,r)}finally{Ke.transition=i,Q=r}return null}function kd(e,t,n,r){do An();while(Wt!==null);if((U&6)!==0)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ec(e,l),e===ge&&(de=ge=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,wu(Cr,function(){return An(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ke.transition,Ke.transition=null;var o=Q;Q=1;var a=U;U|=4,ao.current=null,md(e,n),lu(n,e),Bc(gl),Ar=!!hl,gl=hl=null,e.current=n,hd(n),qu(),U=a,Q=o,Ke.transition=l}else e.current=n;if(yi&&(yi=!1,Wt=e,vi=i),l=e.pendingLanes,l===0&&(Bt=null),$u(n.stateNode),ze(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=co,co=null,e;return(vi&1)!==0&&e.tag!==0&&An(),l=e.pendingLanes,(l&1)!==0?e===fo?yr++:(yr=0,fo=e):yr=0,Dt(),null}function An(){if(Wt!==null){var e=ra(vi),t=Ke.transition,n=Q;try{if(Ke.transition=null,Q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,vi=0,(U&6)!==0)throw Error(m(331));var i=U;for(U|=4,E=e.current;E!==null;){var l=E,o=l.child;if((E.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(E=p;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:mr(8,y,l)}var v=y.child;if(v!==null)v.return=y,E=v;else for(;E!==null;){y=E;var h=y.sibling,_=y.return;if(eu(y),y===p){E=null;break}if(h!==null){h.return=_,E=h;break}E=_}}}var T=l.alternate;if(T!==null){var P=T.child;if(P!==null){T.child=null;do{var ue=P.sibling;P.sibling=null,P=ue}while(P!==null)}}E=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var u=e.current;for(E=u;E!==null;){o=E;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,E=f;else e:for(o=u;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(N){ae(a,a.return,N)}if(a===o){E=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,E=k;break e}E=a.return}}if(U=i,Dt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Tr,e)}catch{}r=!0}return r}finally{Q=n,Ke.transition=t}}return!1}function gu(e,t,n){t=Nn(n,t),t=Os(e,t,1),e=jt(e,t,1),t=Ne(),e!==null&&(Wn(e,1,t),ze(e,t))}function ae(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Nn(n,e),e=zs(t,e,1),t=jt(t,e,1),e=Ne(),t!==null&&(Wn(t,1,e),ze(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>se()-uo?ln(e,0):so|=n),ze(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Nr,Nr<<=1,(Nr&130023424)===0&&(Nr=4194304)));var n=Ne();e=_t(e,t),e!==null&&(Wn(e,t,n),ze(e,n))}function _d(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Ie=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ie=!1,cd(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,te&&(t.flags&1048576)!==0&&Xa(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=kn(t,_e.current);Tn(t,n),i=Bl(null,t,r,e,i,n);var l=Wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(l=!0,Yr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Il(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Xl(null,t,r,!0,l,n)):(t.tag=0,te&&l&&Sl(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cd(r),e=it(r,e),i){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=bs(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,it(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),bs(e,t,r,i,n);case 3:e:{if(qs(t),e===null)throw Error(m(387));r=t.pendingProps,l=t.memoizedState,i=l.element,os(e,t),ni(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Nn(Error(m(423)),t),t=Qs(e,t,r,n,i);break e}else if(r!==i){i=Nn(Error(m(424)),t),t=Qs(e,t,r,n,i);break e}else for(We=It(t.stateNode.containerInfo.firstChild),Be=t,te=!0,rt=null,n=is(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===i){t=Et(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&Tl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(t.flags|=32),Vs(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Ys(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Us(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,G(Zr,r._currentValue),r._currentValue=o,l!==null)if(nt(l.value,o)){if(l.children===i.children&&!Me.current){t=Et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=St(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ml(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(m(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ml(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=$e(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Bs(e,t,r,i,n);case 15:return Ws(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),di(e,t),t.tag=1,Ae(r)?(e=!0,Yr(t)):e=!1,Tn(t,n),As(t,r,i),Yl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return Gs(e,t,n);case 22:return Hs(e,t,n)}throw Error(m(156,t.tag))};function wu(e,t){return Jo(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new Ed(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Le:return an(n.children,i,l,t);case qe:o=8,i|=8;break;case Tt:return e=Xe(12,n,t,i|2),e.elementType=Tt,e.lanes=l,e;case Fe:return e=Xe(13,n,t,i),e.elementType=Fe,e.lanes=l,e;case et:return e=Xe(19,n,t,i),e.elementType=et,e.lanes=l,e;case oe:return Si(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:o=10;break e;case Yt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case Re:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Xe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=oe,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Td(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xo(e,t,n,r,i,l,o,a,s){return e=new Td(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(l),e}function Pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return zt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Ae(n))return $a(e,n,t)}return t}function xu(e,t,n,r,i,l,o,a,s){return e=xo(n,r,!0,e,i,l,o,a,s),e.context=ku(null),n=e.current,r=Ne(),i=Ht(n),l=St(r,i),l.callback=t??null,jt(n,l,i),e.current.lanes=i,Wn(e,i,r),ze(e,r),e}function Ei(e,t,n,r){var i=t.current,l=Ne(),o=Ht(i);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=St(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(i,t,o),e!==null&&(at(e,i,o,l),ti(e,i,o)),o}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _o(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Nd(){return null}var Su=typeof reportError=="function"?reportError:function(e){console.error(e)};function So(e){this._internalRoot=e}Ti.prototype.render=So.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Ei(e,t,null,null)},Ti.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Ei(null,e,null,null)}),t[vt]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&ua(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Ld(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var p=Ci(o);l.call(p)}}var o=xu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[vt]=o.current,tr(e.nodeType===8?e.parentNode:e),rn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var p=Ci(s);a.call(p)}}var s=xo(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[vt]=s.current,tr(e.nodeType===8?e.parentNode:e),rn(function(){Ei(t,s,n,r)}),s}function Ni(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Ci(o);a.call(s)}}Ei(t,o,e,i)}else o=Ld(n,t,e,i,r);return Ci(o)}ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Yi(t,n|1),ze(t,se()),(U&6)===0&&(Mn=se()+500,Dt()))}break;case 13:rn(function(){var r=_t(e,1);if(r!==null){var i=Ne();at(r,e,1,i)}}),_o(e,1)}},$i=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ne();at(t,e,134217728,n)}_o(e,134217728)}},la=function(e){if(e.tag===13){var t=Ht(e),n=_t(e,t);if(n!==null){var r=Ne();at(n,e,t,r)}_o(e,t)}},oa=function(){return Q},aa=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}},Bi=function(e,t,n){switch(t){case"input":if(Ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qr(r);if(!i)throw Error(m(90));Mo(r),Ai(r,i)}}}break;case"textarea":Do(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},qo=ho,Qo=rn;var Rd={usingClientEntryPoint:!1,Events:[ir,vn,qr,Vo,bo,ho]},vr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ko(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Tr=Li.inject(Md),dt=Li}catch{}}return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd,De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(m(200));return Pd(e,t,null,n)},De.createRoot=function(e,t){if(!Eo(e))throw Error(m(299));var n=!1,r="",i=Su;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xo(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,tr(e.nodeType===8?e.parentNode:e),new So(t)},De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Ko(t),e=e===null?null:e.stateNode,e},De.flushSync=function(e){return rn(e)},De.hydrate=function(e,t,n){if(!Pi(t))throw Error(m(200));return Ni(null,e,t,!0,n)},De.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Su;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xu(t,null,e,1,n??null,i,!1,l,o),e[vt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ti(t)},De.render=function(e,t,n){if(!Pi(t))throw Error(m(200));return Ni(null,e,t,!1,n)},De.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(m(40));return e._reactRootContainer?(rn(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},De.unstable_batchedUpdates=ho,De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Ni(e,t,n,!1,r)},De.version="18.3.1-next-f1338f8080-20240426",De}var Au;function Ud(){if(Au)return Po.exports;Au=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(L){console.error(L)}}return w(),Po.exports=jd(),Po.exports}var Iu;function Bd(){if(Iu)return Ri;Iu=1;var w=Ud();return Ri.createRoot=w.createRoot,Ri.hydrateRoot=w.hydrateRoot,Ri}var Wd=Bd(),Qt=Ro();function Hd({module:w,isDarkMode:L,onClick:m}){return S.jsxs("button",{onClick:m,className:`p-6 rounded-2xl text-left transition-all transform hover:scale-105 hover:-translate-y-1 ${L?"bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-900 hover:to-pink-900 border border-gray-600":"bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border border-purple-200 shadow-lg hover:shadow-xl"}`,children:[S.jsx("div",{className:"text-5xl mb-3",children:w.emoji}),S.jsxs("h3",{className:`text-xl mb-2 ${L?"text-white":"text-gray-900"}`,children:["Module ",w.id]}),S.jsx("p",{className:`mb-3 ${L?"text-gray-300":"text-gray-700"}`,children:w.title}),S.jsxs("div",{className:`inline-block px-3 py-1 rounded-full text-sm ${L?"bg-purple-500/20 text-purple-300":"bg-purple-100 text-purple-700"}`,children:[w.topics.length," Topics"]})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bd=w=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(L,m,V)=>V?V.toUpperCase():m.toLowerCase()),Ou=w=>{const L=bd(w);return L.charAt(0).toUpperCase()+L.slice(1)},Du=(...w)=>w.filter((L,m,V)=>!!L&&L.trim()!==""&&V.indexOf(L)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Qt.forwardRef(({color:w="currentColor",size:L=24,strokeWidth:m=2,absoluteStrokeWidth:V,className:A="",children:D,iconNode:le,...ce},b)=>Qt.createElement("svg",{ref:b,...qd,width:L,height:L,stroke:w,strokeWidth:V?Number(m)*24/Number(L):m,className:Du("lucide",A),...ce},[...le.map(([ve,me])=>Qt.createElement(ve,me)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=(w,L)=>{const m=Qt.forwardRef(({className:V,...A},D)=>Qt.createElement(Qd,{ref:D,iconNode:L,className:Du(`lucide-${Vd(Ou(w))}`,`lucide-${w}`,V),...A}));return m.displayName=Ou(w),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$d=In("check",Yd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Kd=In("code-xml",Gd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Jd=In("copy",Xd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],ef=In("moon",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],nf=In("sparkles",tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],lf=In("sun",rf);function of({code:w,isDarkMode:L}){const[m,V]=Qt.useState(!1),A=()=>{navigator.clipboard.writeText(w),V(!0),setTimeout(()=>V(!1),2e3)};return S.jsx("div",{className:"relative group",children:S.jsxs("div",{className:`rounded-xl overflow-hidden border ${L?"border-gray-600":"border-gray-300"}`,children:[S.jsxs("div",{className:`flex items-center justify-between px-4 py-2 ${L?"bg-gray-900":"bg-gray-100"}`,children:[S.jsx("span",{className:`text-sm ${L?"text-gray-400":"text-gray-600"}`,children:"Python Code"}),S.jsx("button",{onClick:A,className:`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${m?L?"bg-green-900/50 text-green-400":"bg-green-100 text-green-700":L?"bg-gray-800 text-gray-300 hover:bg-gray-700":"bg-white text-gray-700 hover:bg-gray-200"}`,children:m?S.jsxs(S.Fragment,{children:[S.jsx($d,{className:"w-4 h-4"}),"Copied!"]}):S.jsxs(S.Fragment,{children:[S.jsx(Jd,{className:"w-4 h-4"}),"Copy Code"]})})]}),S.jsx("div",{className:`p-4 overflow-x-auto ${L?"bg-gray-950":"bg-gray-50"}`,children:S.jsx("pre",{className:`text-sm ${L?"text-gray-200":"text-gray-800"}`,children:S.jsx("code",{children:w})})})]})})}function af({isDarkMode:w,setIsDarkMode:L}){return S.jsx("button",{onClick:()=>L(!w),className:`flex items-center gap-2 px-4 py-2 rounded-xl transition-all transform hover:scale-105 ${w?"bg-yellow-500 text-gray-900 hover:bg-yellow-400":"bg-purple-600 text-white hover:bg-purple-700"}`,children:w?S.jsxs(S.Fragment,{children:[S.jsx(lf,{className:"w-5 h-5"}),S.jsx("span",{className:"hidden sm:inline",children:"Light Mode"})]}):S.jsxs(S.Fragment,{children:[S.jsx(ef,{className:"w-5 h-5"}),S.jsx("span",{className:"hidden sm:inline",children:"Dark Mode"})]})})}const zu=[{id:1,title:"Python Basics (Foundation)",emoji:"🚀",topics:[{title:"What is Python?",description:"Python is like a magic spell book that helps computers understand what you want them to do! It's a programming language that's super easy to learn - easier than learning to ride a bike!",example:"Just like you tell your friend 'let's play soccer', you can tell Python 'print Hello!' and it will show you a message!"},{title:"Features of Python",description:"Python has amazing superpowers! It's easy to read (like reading a storybook), free to use, works on any computer, and has tons of free tools!",example:"Python is like having a Swiss Army knife - one tool that can do many things!",codeExample:`# Python Features:
# 1. Easy to read and write
print("Hello World!")  # Simple!

# 2. Free and Open Source
# Anyone can use Python for FREE!

# 3. Cross-Platform
# Works on Windows, Mac, Linux

# 4. Huge Library Support
import math
print("Square root:", math.sqrt(16))

# 5. Object-Oriented
# Can create classes and objects`},{title:"Python Use Cases",description:"Python can do SO many cool things! Make websites, analyze data, create AI, automate boring tasks, and even make games!",codeExample:`# Python Use Cases:

# 1. WEB DEVELOPMENT (Django, Flask)
# Build websites like Instagram, YouTube!

# 2. DATA SCIENCE (Pandas, NumPy)
# Analyze numbers and make graphs

# 3. ARTIFICIAL INTELLIGENCE (TensorFlow, PyTorch)
# Create smart robots and chatbots!

# 4. AUTOMATION
# Make Python do boring tasks for you!
import os
print("Automating file operations...")

# 5. GAME DEVELOPMENT (Pygame)
# Create your own video games!

# 6. WEB SCRAPING
# Collect data from websites`},{title:"Python Keywords",description:"Keywords are special reserved words in Python that have special meanings. You can't use them as variable names!",codeExample:`# Python has 35 keywords. Here are the important ones:

# Flow Control Keywords
if True:
    print("This runs!")
else:
    print("This doesn't")

# Loop Keywords
for i in range(3):
    print(i)
    
while False:
    pass  # pass does nothing
    
# Boolean Keywords
is_fun = True
is_boring = False
result = None  # None means "nothing"

# Logical Keywords
if True and True:
    print("Both true!")
    
if True or False:
    print("At least one true!")
    
if not False:
    print("Not false means true!")

# Other Important Keywords:
# class, def, return, import, from, as
# try, except, finally, raise
# break, continue, lambda, with`},{title:"Python Syntax & Indentation",description:"Python uses spaces (indentation) to organize code - like organizing your room with shelves! Other languages use {} brackets, but Python uses spaces.",example:"Think of indentation like steps on a staircase - each level shows what belongs together!",codeExample:`# CORRECT INDENTATION ✅
if True:
    print("This is indented")
    print("This too!")
    if True:
        print("Double indented!")

# WRONG INDENTATION ❌
# if True:
# print("Error! Not indented")

# Indentation in loops
for i in range(3):
    print("Loop iteration:", i)
    print("Still in loop")
print("Outside loop now!")

# Indentation in functions
def greet():
    print("Hello!")
    print("Welcome!")
    
greet()`},{title:"Comments (Single-line & Multi-line)",description:"Comments are like secret notes you write for yourself. Python doesn't read them - they're just for you to remember what your code does!",codeExample:`# This is a single-line comment
# Python ignores this line!

# You can add comments to explain code
age = 10  # This stores my age

"""
This is a multi-line comment.
You can write many lines here.
It's like writing a note to yourself!
Python ignores everything between the triple quotes.
"""

'''
You can also use single quotes
for multi-line comments.
Both work the same way!
'''

print("Python only reads this line!")`},{title:"Print Statement",description:"The print() function shows messages on the screen. It's how your program talks to you!",codeExample:`# Basic printing
print("Hello World!")

# Printing multiple things
print("My name is", "Alex")
print("Age:", 10)

# Printing with different separators
print("A", "B", "C", sep="-")  # A-B-C
print("Python", "is", "fun", sep=" 🎉 ")

# Printing without new line
print("Hello", end=" ")
print("World!")  # Prints on same line

# Printing special characters
print("Line 1\\nLine 2")  # \\n = new line
print("Tab\\there")       # \\t = tab

# Printing variables
name = "Emma"
age = 11
print(f"My name is {name} and I'm {age} years old")
print("Name:", name, "Age:", age)`},{title:"Input from User",description:"You can ask questions and get answers! Just like asking your friend their favorite color.",codeExample:`# Ask for someone's name
name = input("What's your name? ")
print("Hi " + name + "! Nice to meet you!")

# Ask for favorite number
age = input("How old are you? ")
print("Wow! You are " + age + " years old!")

# Ask for favorite color
color = input("What's your favorite color? ")
print(f"Cool! {color} is a great color! 🌈")

# Converting input to number
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
total = num1 + num2
print(f"Sum: {total}")`},{title:"Variables & Naming Rules",description:"Variables are like boxes where you store things! You can put your toys, snacks, or numbers in these boxes and use them later.",example:"Think of a variable like a toy box. You can label it 'my_toys' and put different toys inside!",codeExample:`# Creating variables (boxes to store things)
my_name = "Alex"
my_age = 10
favorite_color = "blue"
has_pet = True

print("Name:", my_name)
print("Age:", my_age)

# VARIABLE NAMING RULES:

# ✅ CORRECT Names
student_name = "Emma"
age_2024 = 12
_private = "secret"
firstName = "John"  # camelCase
first_name = "Jane"  # snake_case (Python style)

# ❌ WRONG Names (Don't use these!)
# 2students = "error"  # Can't start with number
# my-name = "error"    # Can't use hyphens
# for = "error"        # Can't use keywords
# my name = "error"    # Can't have spaces

# Multiple assignment
x, y, z = 1, 2, 3
print(x, y, z)

# Same value to multiple variables
a = b = c = 100
print(a, b, c)`},{title:"Python Data Types Overview",description:"Python has different types of data - like having different types of toys: action figures, dolls, cars, etc.",codeExample:`# Numeric Types
integer = 42           # int - whole numbers
decimal = 3.14         # float - decimal numbers  
complex_num = 2 + 3j   # complex - advanced math

# Text Type
message = "Hello!"     # str - text/string

# Boolean Type
is_true = True         # bool - True or False
is_false = False

# Sequence Types
my_list = [1, 2, 3]           # list - ordered, changeable
my_tuple = (1, 2, 3)          # tuple - ordered, unchangeable
my_range = range(5)           # range - sequence of numbers

# Mapping Type
my_dict = {"name": "Alex"}    # dict - key:value pairs

# Set Types
my_set = {1, 2, 3}           # set - unordered, unique items
frozen = frozenset({1, 2})   # frozenset - unchangeable set

# Binary Types (advanced)
my_bytes = b"Hello"          # bytes
my_array = bytearray(5)      # bytearray

# None Type
nothing = None               # None - represents "nothing"

# Check type of any variable
print(type(integer))   # <class 'int'>
print(type(message))   # <class 'str'>
print(type(my_list))   # <class 'list'>`},{title:"type() and id() Functions",description:"type() tells you what kind of data you have. id() gives each variable a unique identification number!",example:"type() is like asking 'what kind of toy is this?', id() is like each toy having a unique serial number!",codeExample:`# type() function - check data type
age = 10
name = "Emma"
numbers = [1, 2, 3]

print(type(age))      # <class 'int'>
print(type(name))     # <class 'str'>
print(type(numbers))  # <class 'list'>

# id() function - unique memory address
x = 100
y = 100
z = "hello"

print("ID of x:", id(x))
print("ID of y:", id(y))  # Same as x!
print("ID of z:", id(z))  # Different

# Checking if types match
if type(age) == int:
    print("age is an integer!")
    
# isinstance() - better way to check type
if isinstance(name, str):
    print("name is a string!")
    
# Check multiple types
value = 3.14
if isinstance(value, (int, float)):
    print("value is a number!")`}]},{id:2,title:"Data Types & Variables",emoji:"🎯",topics:[{title:"Numbers - Integers (int)",description:"Integers are whole numbers - like counting your toys: 1, 2, 3, 100! No decimal points here.",example:"If you have 5 apples, that's an integer. If you have 10 marbles, that's also an integer!",codeExample:`# Integer examples
apples = 5
marbles = 10
age = 12
score = 100

print("I have", apples, "apples")
print("My age is", age)
print("Game score:", score)`},{title:"Numbers - Floats (Decimal Numbers)",description:"Floats are numbers with decimal points - like measuring height: 4.5 feet, or price: $3.99",codeExample:`# Float examples
height = 4.5
price = 3.99
temperature = 98.6
pizza_slices = 2.5

print("Height:", height, "feet")
print("Price: $", price)
print("I ate", pizza_slices, "slices")`},{title:"Boolean - True or False",description:"Boolean is like a light switch - it's either ON (True) or OFF (False). Yes or No. Simple!",example:"Is it raining? True or False. Do you like ice cream? True or False!",codeExample:`# Boolean examples
is_sunny = True
is_raining = False
loves_pizza = True
homework_done = False

print("Is it sunny?", is_sunny)
print("Is it raining?", is_raining)
print("Homework done?", homework_done)`},{title:"Strings - Text and Words",description:"Strings are text - like your name, favorite song, or anything with letters and words!",codeExample:`# String examples
name = "Emma"
favorite_game = "Minecraft"
message = "I love learning Python!"

print(name)
print("Favorite game:", favorite_game)
print(message)`},{title:"String Slicing - Cutting Text",description:"You can slice strings like cutting a pizza! Get the first letter, last letter, or middle part.",example:"If you have the word 'PYTHON', you can take just 'PY' or 'THON' or any part you want!",codeExample:`# String slicing is like cutting words
word = "PYTHON"

print(word[0])      # First letter: P
print(word[0:2])    # First 2 letters: PY
print(word[2:])     # From 3rd letter: THON
print(word[-1])     # Last letter: N
print(word[::-1])   # Reverse: NOHTYP`},{title:"Type Casting - Changing Types",description:"Type casting is like transforming! You can turn text into numbers or numbers into text.",codeExample:`# Converting between types
age_text = "10"
age_number = int(age_text)  # Text to number
print(age_number + 5)        # Now we can do math: 15

score = 100
score_text = str(score)     # Number to text
print("Score: " + score_text)

# Text to float
price = float("3.99")
print(price)`}]},{id:3,title:"Operators in Python",emoji:"➕",topics:[{title:"Arithmetic Operators - Do the Math!",description:"Math operators help you add, subtract, multiply, and divide - just like in your math class!",codeExample:`# Math operations
apples = 5 + 3      # Addition: 8
left = 10 - 4       # Subtraction: 6
total = 6 * 7       # Multiplication: 42
share = 20 / 4      # Division: 5.0
floor_div = 20 // 3 # Floor Division: 6 (no decimal)
remainder = 17 % 5  # Modulus (Remainder): 2
power = 2 ** 3      # Exponent (Power): 8

print("Addition:", apples)
print("Multiplication:", total)
print("Power of 2^3:", power)
print("Remainder:", remainder)
print("Floor Division:", floor_div)`},{title:"Relational/Comparison Operators",description:"Compare things to see if they're equal, bigger, or smaller - like comparing your height with friends!",codeExample:`# Comparing values
my_age = 10
friend_age = 12

print(my_age == friend_age)  # Equal? False
print(my_age != friend_age)  # Not equal? True
print(my_age < friend_age)   # Less than? True
print(my_age > friend_age)   # Greater than? False
print(my_age <= 10)          # Less or equal? True
print(my_age >= 10)          # Greater or equal? True

# Comparing strings
name1 = "Alice"
name2 = "Bob"
print(name1 == name2)  # False
print(name1 < name2)   # True (alphabetically)`},{title:"Assignment Operators",description:"Assignment operators give values to variables and can do math at the same time!",codeExample:`# Basic assignment
x = 10
print("x =", x)

# Add and assign
x += 5  # Same as: x = x + 5
print("After x += 5:", x)  # 15

# Subtract and assign
x -= 3  # Same as: x = x - 3
print("After x -= 3:", x)  # 12

# Multiply and assign
x *= 2  # Same as: x = x * 2
print("After x *= 2:", x)  # 24

# Divide and assign
x /= 4  # Same as: x = x / 4
print("After x /= 4:", x)  # 6.0

# Modulus and assign
x %= 4  # Same as: x = x % 4
print("After x %= 4:", x)  # 2.0

# Power and assign
x **= 3  # Same as: x = x ** 3
print("After x **= 3:", x)  # 8.0`},{title:"Logical Operators - AND, OR, NOT",description:"Use AND, OR, NOT to combine conditions - like 'If it's sunny AND warm, let's go to the park!'",codeExample:`# Logical operators
is_sunny = True
is_warm = True
has_homework = False

# AND - Both must be True
can_play_outside = is_sunny and is_warm
print("Can play outside?", can_play_outside)  # True

# OR - At least one must be True
weekend_or_holiday = True or False
print("Time to relax?", weekend_or_holiday)  # True

# NOT - Opposite
print("No homework?", not has_homework)  # True

# Combining logical operators
age = 10
has_permission = True
if age >= 10 and has_permission:
    print("You can go to the party! 🎉")`},{title:"Bitwise Operators",description:"Bitwise operators work with binary numbers (0s and 1s) - like computer language!",example:"Computers think in 0s and 1s. Bitwise operators let you work directly with binary!",codeExample:`# Bitwise operators work with binary
a = 5   # Binary: 101
b = 3   # Binary: 011

# AND - both bits must be 1
print("a & b =", a & b)   # 1 (Binary: 001)

# OR - at least one bit is 1
print("a | b =", a | b)   # 7 (Binary: 111)

# XOR - bits are different
print("a ^ b =", a ^ b)   # 6 (Binary: 110)

# NOT - flip all bits
print("~a =", ~a)         # -6

# Left shift - move bits left
print("a << 1 =", a << 1) # 10 (Binary: 1010)

# Right shift - move bits right
print("a >> 1 =", a >> 1) # 2 (Binary: 10)`},{title:"Membership Operators - IN and NOT IN",description:"Check if something is inside a list, string, or collection!",example:"Like checking if your favorite toy is in your toy box!",codeExample:`# Membership operators
fruits = ["apple", "banana", "orange"]

# IN - check if item exists
if "apple" in fruits:
    print("Yes! Apple is in the list! 🍎")

if "grape" not in fruits:
    print("Grape is not in the list!")

# Works with strings too
message = "Python is fun!"
if "fun" in message:
    print("Found the word 'fun'!")

# Works with dictionaries (checks keys)
student = {"name": "Emma", "age": 11}
if "name" in student:
    print("Name key exists!")

# Check in range
if 5 in range(1, 10):
    print("5 is in the range!")`},{title:"Identity Operators - IS and IS NOT",description:"Identity operators check if two variables point to the SAME object in memory!",example:"Like checking if two people are the exact same person, not just twins!",codeExample:`# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

# IS - check if same object
print(a is c)      # True (c points to same list as a)
print(a is b)      # False (different objects, same content)

# IS NOT - check if different objects
print(a is not b)  # True

# == vs IS difference
print(a == b)      # True (same content)
print(a is b)      # False (different objects)

# With numbers (Python optimizes small numbers)
x = 10
y = 10
print(x is y)      # True (Python reuses small integers)

# None check (best practice)
value = None
if value is None:
    print("Value is None!")`},{title:"Operator Precedence",description:"Operator precedence is the order Python solves math - like PEMDAS in math class!",example:"Just like in math: Parentheses, Exponents, Multiply/Divide, Add/Subtract!",codeExample:`# Operator Precedence (high to low)

# 1. Parentheses first
result = (2 + 3) * 4
print("(2 + 3) * 4 =", result)  # 20

# 2. Exponents
result = 2 ** 3 * 2
print("2 ** 3 * 2 =", result)   # 16 (not 64)

# 3. Multiplication and Division (left to right)
result = 10 / 2 * 3
print("10 / 2 * 3 =", result)   # 15.0

# 4. Addition and Subtraction (left to right)
result = 10 - 3 + 2
print("10 - 3 + 2 =", result)   # 9

# Complex example
result = 2 + 3 * 4 ** 2 / 2 - 1
# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 2 = 24
# Step 4: 2 + 24 = 26
# Step 5: 26 - 1 = 25
print("Complex:", result)       # 25.0

# Use parentheses for clarity!
result = ((2 + 3) * 4) ** 2
print("With parentheses:", result)  # 400`}]},{id:4,title:"Control Flow - Making Choices",emoji:"🔀",topics:[{title:"If Statement - Making Decisions",description:"If statements help your program make decisions - like 'If it's raining, take an umbrella!'",example:"Just like you decide what to wear based on the weather!",codeExample:`# Simple if statement
age = 10

if age >= 10:
    print("You're old enough to ride the big slide!")
    
weather = "sunny"

if weather == "sunny":
    print("Let's go to the park! ☀️")`},{title:"If-Else - Two Choices",description:"If-else gives you two options - like choosing chocolate OR vanilla ice cream!",codeExample:`# If-else statement
score = 85

if score >= 90:
    print("Amazing! You got an A! 🌟")
else:
    print("Good job! Keep practicing! 💪")
    
is_weekend = True

if is_weekend:
    print("Yay! Time to play! 🎮")
else:
    print("Time for school! 📚")`},{title:"If-Elif-Else - Multiple Choices",description:"When you have more than two choices - like picking from many flavors of ice cream!",codeExample:`# Multiple conditions
temperature = 75

if temperature > 85:
    print("It's hot! Go swimming! 🏊")
elif temperature > 65:
    print("Perfect weather! Play outside! ⚽")
elif temperature > 45:
    print("A bit chilly! Wear a jacket! 🧥")
else:
    print("It's cold! Stay warm inside! 🏠")`},{title:"For Loop - Repeat Actions",description:"For loops help you do something many times - like counting from 1 to 10 without writing 10 lines!",example:"Instead of writing 'Happy Birthday' 10 times, let the loop do it!",codeExample:`# Counting with for loop
for i in range(1, 6):
    print("Count:", i)

# Looping through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print("I like", fruit)
    
# Repeat message
for i in range(3):
    print("Python is fun! 🐍")`},{title:"While Loop - Keep Going Until...",description:"While loops keep going as long as something is true - like eating cookies while there are cookies left!",codeExample:`# While loop example
cookies = 5

while cookies > 0:
    print("Eating a cookie! Yum! 🍪")
    cookies = cookies - 1
    print("Cookies left:", cookies)

print("All cookies gone! 😢")

# Countdown
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off! 🚀")`},{title:"Break and Continue",description:"Break stops the loop completely. Continue skips to the next round!",codeExample:`# Break - stop the loop
for i in range(1, 11):
    if i == 5:
        print("Found 5! Stopping here!")
        break
    print(i)

# Continue - skip to next
for i in range(1, 6):
    if i == 3:
        continue  # Skip 3
    print(i)`}]},{id:5,title:"Data Structures - Organizing Data",emoji:"📦",topics:[{title:"Lists - Collections of Items",description:"Lists are like toy boxes! You can put many things inside and organize them in order.",example:"Your backpack is like a list - it has books, pencils, snacks, all organized together!",codeExample:`# Creating lists
toys = ["car", "doll", "puzzle", "ball"]
numbers = [1, 2, 3, 4, 5]
mixed = ["apple", 10, True, 3.14]

print("My toys:", toys)
print("First toy:", toys[0])
print("Last toy:", toys[-1])

# Add to list
toys.append("robot")
print("After adding:", toys)`},{title:"List Methods - Cool List Tricks",description:"Lists have special powers! You can add, remove, sort, and do lots of cool things!",codeExample:`# List methods
fruits = ["banana", "apple", "orange"]

# Add item
fruits.append("grape")
print("After append:", fruits)

# Sort alphabetically
fruits.sort()
print("Sorted:", fruits)

# Remove item
fruits.remove("apple")
print("After remove:", fruits)

# Count and find
print("Length:", len(fruits))`},{title:"Tuples - Fixed Collections",description:"Tuples are like lists but you CAN'T change them - like days of the week, they're fixed!",codeExample:`# Creating tuples
weekdays = ("Mon", "Tue", "Wed", "Thu", "Fri")
colors = ("red", "blue", "green")
single = (42,)  # Single item tuple needs comma!

print("Weekdays:", weekdays)
print("First day:", weekdays[0])

# Can't change tuples!
# weekdays[0] = "Sunday"  # This would cause an error!

# But you can use them
for day in weekdays:
    print(day)`},{title:"Tuple Methods & Operations",description:"Tuples have fewer methods than lists, but they're super useful for counting and finding items!",codeExample:`# Tuple methods
numbers = (1, 2, 3, 2, 4, 2, 5)

# Count occurrences
print("Count of 2:", numbers.count(2))  # 3

# Find index
print("Index of 3:", numbers.index(3))  # 2

# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation
combined = tuple1 + tuple2
print("Combined:", combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = tuple1 * 3
print("Repeated:", repeated)  # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Length
print("Length:", len(tuple1))

# Min and Max
print("Min:", min(numbers))
print("Max:", max(numbers))`},{title:"Tuple Packing & Unpacking",description:"Packing is putting values into a tuple. Unpacking is taking them out - like packing and unpacking a suitcase!",example:"Perfect for swapping variables or returning multiple values from functions!",codeExample:`# TUPLE PACKING - creating tuple without parentheses
coordinates = 10, 20, 30
print(coordinates)  # (10, 20, 30)

# TUPLE UNPACKING - extract values
x, y, z = coordinates
print(f"x={x}, y={y}, z={z}")

# Swapping variables (using unpacking!)
a = 5
b = 10
a, b = b, a  # Swap!
print(f"a={a}, b={b}")  # a=10, b=5

# Unpacking with *
first, *middle, last = (1, 2, 3, 4, 5)
print("First:", first)    # 1
print("Middle:", middle)  # [2, 3, 4]
print("Last:", last)      # 5

# Function returning multiple values
def get_student():
    return "Emma", 11, "A"  # Returns tuple

name, age, grade = get_student()
print(f"{name} is {age} years old, grade {grade}")`},{title:"Sets - Unique Collections",description:"Sets only keep unique items - no duplicates! Like having one of each toy, not two of the same.",codeExample:`# Creating sets
unique_numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "apple"}  # 'apple' appears once

print("Fruits:", fruits)  # Only shows apple once!

# Add to set
fruits.add("orange")
print("After adding:", fruits)

# Remove from set
fruits.remove("banana")
print("After removing:", fruits)`},{title:"Set Methods & Operations",description:"Sets have cool mathematical operations - union, intersection, difference! Like Venn diagrams!",example:"Find what's common, what's different, or combine sets together!",codeExample:`# Set methods
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# UNION - all items from both sets
union = set1.union(set2)
# or: union = set1 | set2
print("Union:", union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# INTERSECTION - only items in both
intersection = set1.intersection(set2)
# or: intersection = set1 & set2
print("Intersection:", intersection)  # {4, 5}

# DIFFERENCE - items in first but not second
diff = set1.difference(set2)
# or: diff = set1 - set2
print("Difference:", diff)  # {1, 2, 3}

# SYMMETRIC DIFFERENCE - items in one but not both
sym_diff = set1.symmetric_difference(set2)
# or: sym_diff = set1 ^ set2
print("Symmetric Diff:", sym_diff)  # {1, 2, 3, 6, 7, 8}

# Other methods
set1.add(10)           # Add item
set1.discard(2)        # Remove (no error if missing)
# set1.remove(99)      # Remove (error if missing)
set1.clear()           # Remove all
print("Is empty?", len(set1) == 0)`},{title:"Dictionaries - Pairs of Information",description:"Dictionaries store pairs - like a real dictionary pairs words with meanings! Key + Value.",example:"Like a phone book: Name (key) → Phone Number (value)",codeExample:`# Creating dictionary
student = {
    "name": "Emma",
    "age": 11,
    "grade": 6,
    "favorite_subject": "Math"
}

print("Student info:", student)
print("Name:", student["name"])
print("Age:", student["age"])

# Add new info
student["hobby"] = "drawing"
print("Updated:", student)`},{title:"Dictionary Methods - Powerful Tools",description:"Dictionaries have many useful methods to get keys, values, items, and more!",codeExample:`# Dictionary methods
student = {"name": "Emma", "age": 11, "grade": "A"}

# Get all keys
print("Keys:", student.keys())  
# dict_keys(['name', 'age', 'grade'])

# Get all values
print("Values:", student.values())
# dict_values(['Emma', 11, 'A'])

# Get all items (key-value pairs)
print("Items:", student.items())
# dict_items([('name', 'Emma'), ('age', 11), ('grade', 'A')])

# Get value safely (no error if missing)
print(student.get("name"))     # Emma
print(student.get("hobby"))    # None
print(student.get("hobby", "Unknown"))  # Unknown

# Update dictionary
student.update({"age": 12, "school": "Python Elementary"})
print("Updated:", student)

# Remove item
removed = student.pop("grade")
print("Removed:", removed)  # A

# Copy dictionary
student_copy = student.copy()

# Clear all items
# student.clear()`},{title:"Iterating Through Dictionaries",description:"You can loop through dictionaries to access keys, values, or both!",example:"Like going through each contact in your phone book!",codeExample:`student = {
    "name": "Emma",
    "age": 11,
    "grade": "A",
    "subject": "Math"
}

# Iterate through keys (default)
for key in student:
    print(key)  # name, age, grade, subject

# Iterate through keys explicitly
for key in student.keys():
    print(f"Key: {key}")

# Iterate through values
for value in student.values():
    print(f"Value: {value}")

# Iterate through both (most common!)
for key, value in student.items():
    print(f"{key}: {value}")

# Example: Game inventory
inventory = {
    "sword": 1,
    "shield": 2,
    "potion": 5,
    "gold": 100
}

for item, quantity in inventory.items():
    print(f"You have {quantity} {item}(s)")

# Dictionary comprehension
squared = {x: x**2 for x in range(1, 6)}
print("Squared:", squared)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`},{title:"List Comprehension - Quick Lists",description:"A super fast way to create lists! It's like a shortcut to make lists in one line.",codeExample:`# Regular way
squares = []
for i in range(1, 6):
    squares.append(i * i)
print("Squares:", squares)

# List comprehension - faster!
squares_fast = [i * i for i in range(1, 6)]
print("Squares (fast):", squares_fast)

# Even numbers
evens = [i for i in range(1, 11) if i % 2 == 0]
print("Even numbers:", evens)`}]},{id:6,title:"Functions - Reusable Code Blocks",emoji:"🔧",topics:[{title:"What is a Function?",description:"Functions are like recipes! You write the steps once, then use them anytime you want - no need to rewrite!",example:"Like a recipe for making a sandwich - you can make it whenever you're hungry without rewriting the steps!",codeExample:`# Creating a function
def say_hello():
    print("Hello! 👋")
    print("Welcome to Python!")
    
# Using the function
say_hello()
say_hello()  # Can use it many times!`},{title:"Functions with Parameters",description:"Functions can accept inputs - like giving ingredients to a recipe to make different dishes!",codeExample:`# Function with parameters
def greet(name):
    print(f"Hello {name}! 🌟")
    print(f"Nice to meet you, {name}!")
    
greet("Emma")
greet("Alex")
greet("Sam")

# Function with multiple parameters
def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")
    
add_numbers(5, 3)
add_numbers(10, 7)`},{title:"Return Statement - Get Results Back",description:"Functions can give you back a result - like a vending machine giving you candy!",codeExample:`# Function that returns a value
def multiply(a, b):
    return a * b
    
result = multiply(5, 4)
print("5 x 4 =", result)

# Function for calculating area
def rectangle_area(length, width):
    area = length * width
    return area
    
my_area = rectangle_area(10, 5)
print("Area:", my_area, "square units")`},{title:"Default Parameters",description:"You can give parameters default values - like ordering a pizza that comes with cheese by default!",codeExample:`# Function with default parameter
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")
    
greet("Emma")              # Uses default "Hello"
greet("Alex", "Hi")        # Uses custom "Hi"
greet("Sam", "Good morning")

def make_smoothie(fruit="banana", size="medium"):
    print(f"Making a {size} {fruit} smoothie! 🥤")
    
make_smoothie()
make_smoothie("strawberry")
make_smoothie("mango", "large")`},{title:"Lambda Functions - Quick Mini Functions",description:"Lambda functions are tiny one-line functions - like a shortcut for simple tasks!",codeExample:`# Regular function
def square(x):
    return x * x

# Lambda function - same thing but shorter!
square_lambda = lambda x: x * x

print(square(5))         # 25
print(square_lambda(5))  # 25

# Lambda with two parameters
add = lambda a, b: a + b
print(add(3, 7))  # 10

# Lambda to double numbers
double = lambda x: x * 2
print(double(10))  # 20`},{title:"*args and **kwargs - Variable Length Arguments",description:"Sometimes you don't know how many arguments a function will get. *args and **kwargs let you accept any number!",example:"Like a pizza that can have any number of toppings!",codeExample:`# *args - for any number of positional arguments
def add_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(add_all(1, 2, 3))        # 6
print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs - for any number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Emma", age=11, hobby="drawing")
print_info(game="Minecraft", score=100)`},{title:"map() - Transform Every Item",description:"map() applies a function to every item in a list - like adding sprinkles to every cupcake!",codeExample:`# Using map() with lambda
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print("Doubled:", doubled)  # [2, 4, 6, 8, 10]

# Map with regular function
def square(x):
    return x * x

squared = list(map(square, numbers))
print("Squared:", squared)  # [1, 4, 9, 16, 25]

# Map on strings
names = ["emma", "alex", "sam"]
uppercase = list(map(str.upper, names))
print("Uppercase:", uppercase)  # ['EMMA', 'ALEX', 'SAM']`},{title:"filter() - Keep Only What You Want",description:"filter() keeps only items that pass a test - like picking only red candies from a bag!",codeExample:`# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", evens)  # [2, 4, 6, 8, 10]

# Filter names longer than 4 letters
names = ["Emma", "Alexander", "Jo", "Samantha"]
long_names = list(filter(lambda x: len(x) > 4, names))
print("Long names:", long_names)

# Filter positive numbers
nums = [-5, 3, -1, 8, -2, 10]
positives = list(filter(lambda x: x > 0, nums))
print("Positive:", positives)  # [3, 8, 10]`},{title:"reduce() - Combine Everything Together",description:"reduce() combines all items into one result - like mixing all ingredients into one smoothie!",codeExample:`from functools import reduce

# Sum all numbers
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print("Sum:", total)  # 15

# Find maximum
nums = [3, 7, 2, 9, 4]
maximum = reduce(lambda x, y: x if x > y else y, nums)
print("Max:", maximum)  # 9

# Multiply all numbers
result = reduce(lambda x, y: x * y, [1, 2, 3, 4])
print("Product:", result)  # 24`},{title:"Recursive Functions - Functions That Call Themselves",description:"A recursive function is like a magic mirror that shows itself! It calls itself to solve problems.",example:"Like counting down: 5... 4... 3... 2... 1... Blast off!",codeExample:`# Countdown recursively
def countdown(n):
    if n == 0:
        print("Blast off! 🚀")
    else:
        print(n)
        countdown(n - 1)

countdown(5)

# Factorial (5! = 5 × 4 × 3 × 2 × 1)
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print("5! =", factorial(5))  # 120

# Sum of numbers from 1 to n
def sum_to_n(n):
    if n == 1:
        return 1
    return n + sum_to_n(n - 1)

print("Sum 1 to 10:", sum_to_n(10))  # 55`}]},{id:7,title:"Modules & Packages",emoji:"📚",topics:[{title:"What is a Module?",description:"Modules are like toolboxes! They contain pre-written code you can use in your programs.",example:"Just like borrowing your friend's LEGO set to build something cool!",codeExample:`# Importing the math module
import math

print("Pi:", math.pi)
print("Square root of 16:", math.sqrt(16))

# Import specific things
from math import sqrt, pi
print("Using imported pi:", pi)
print("Square root of 25:", sqrt(25))`},{title:"Using Random Module - Surprises!",description:"The random module helps you create random things - like rolling dice or shuffling cards!",codeExample:`# Import random module
import random

# Random number between 1 and 10
dice = random.randint(1, 6)
print("You rolled:", dice, "🎲")

# Random choice from a list
colors = ["red", "blue", "green", "yellow"]
lucky_color = random.choice(colors)
print("Your lucky color:", lucky_color)

# Shuffle a list
cards = ["A", "K", "Q", "J", "10"]
random.shuffle(cards)
print("Shuffled cards:", cards)`},{title:"Creating Your Own Module",description:"You can create your own modules - like making your own toolbox with your favorite tools!",codeExample:`# Save this in a file called my_tools.py
def say_hello(name):
    return f"Hello {name}!"
    
def add(a, b):
    return a + b
    
def favorite_food():
    return "Pizza! 🍕"

# In another file, import and use it:
# import my_tools
# print(my_tools.say_hello("Emma"))
# print(my_tools.favorite_food())`}]},{id:8,title:"File Handling - Reading & Writing Files",emoji:"📁",topics:[{title:"Writing to a File",description:"You can save information to files - like writing in a diary and saving it!",codeExample:`# Writing to a file
file = open("my_story.txt", "w")
file.write("Once upon a time... 📖\\n")
file.write("There was a Python programmer.\\n")
file.write("They loved to code! 💻\\n")
file.close()

print("Story saved to file!")

# Better way using 'with'
with open("favorite_things.txt", "w") as f:
    f.write("Favorite color: Blue\\n")
    f.write("Favorite food: Pizza\\n")
    f.write("Favorite game: Minecraft\\n")`},{title:"Reading from a File",description:"You can read information from files - like reading your diary from yesterday!",codeExample:`# Reading from a file
with open("my_story.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("favorite_things.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip removes extra spaces`},{title:"Appending to a File",description:"Append means adding to the end - like adding more pages to your diary!",codeExample:`# Append to existing file
with open("my_story.txt", "a") as file:
    file.write("And they lived happily ever after! 🎉\\n")
    file.write("The End.\\n")

print("Added more to the story!")

# Appending more favorites
with open("favorite_things.txt", "a") as f:
    f.write("Favorite animal: Dog 🐕\\n")
    f.write("Favorite sport: Soccer ⚽\\n")`},{title:"File Modes - All the Ways to Open Files",description:"File modes tell Python HOW you want to open a file - read only, write, append, or create new!",example:"Like choosing if you want to read a book, write a new book, or add pages to an existing book!",codeExample:`# File Modes:

# 'r' - Read mode (default)
# Opens file for reading. Error if file doesn't exist.
with open("story.txt", "r") as f:
    content = f.read()

# 'w' - Write mode
# Creates new file or OVERWRITES existing file
with open("new_file.txt", "w") as f:
    f.write("Starting fresh!")

# 'a' - Append mode
# Adds to end of file, creates if doesn't exist
with open("log.txt", "a") as f:
    f.write("New log entry\\n")

# 'x' - Exclusive creation
# Creates file, ERROR if file already exists
with open("unique.txt", "x") as f:
    f.write("This file must be new!")

# 'r+' - Read and write
# Can read AND write, file must exist
with open("data.txt", "r+") as f:
    content = f.read()
    f.write("Adding more!")

# 'rb' - Read binary (for images, etc.)
# 'wb' - Write binary`},{title:"Working with CSV Files",description:"CSV (Comma Separated Values) files store data in tables - like a spreadsheet! Perfect for storing lists of information.",example:"Like a class roster with names, ages, and grades all organized in columns!",codeExample:`import csv

# Writing to CSV file
students = [
    ["Name", "Age", "Grade"],
    ["Emma", 11, "A"],
    ["Alex", 12, "B"],
    ["Sam", 11, "A+"]
]

with open("students.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerows(students)
    
print("CSV file created! 📊")

# Reading from CSV file
with open("students.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Using DictWriter (with headers)
students_dict = [
    {"name": "Emma", "age": 11, "grade": "A"},
    {"name": "Alex", "age": 12, "grade": "B"}
]

with open("students2.csv", "w", newline='') as file:
    fieldnames = ["name", "age", "grade"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(students_dict)`},{title:"Working with JSON Files",description:"JSON stores data in a format that's easy for both humans and computers to read! Like Python dictionaries saved to files.",example:"JSON is like saving your game progress - all your data organized and ready to load later!",codeExample:`import json

# Python dictionary
player_data = {
    "name": "SuperGamer",
    "level": 25,
    "score": 10500,
    "inventory": ["sword", "shield", "potion"],
    "is_premium": True
}

# Writing JSON to file
with open("game_save.json", "w") as file:
    json.dump(player_data, file, indent=2)
    
print("Game saved! 💾")

# Reading JSON from file
with open("game_save.json", "r") as file:
    loaded_data = json.load(file)
    print("Loaded data:", loaded_data)
    print("Player name:", loaded_data["name"])
    print("Level:", loaded_data["level"])

# Convert Python to JSON string
json_string = json.dumps(player_data, indent=2)
print("JSON string:", json_string)

# Convert JSON string to Python
python_data = json.loads(json_string)
print("Python data:", python_data)`},{title:"Using 'with' Statement - Auto-Close Files",description:"The 'with' statement automatically closes files when done - like a door that closes itself!",example:"You don't have to remember to close the file, Python does it for you!",codeExample:`# WITHOUT 'with' - you must close manually
file = open("manual.txt", "w")
file.write("Don't forget to close me!")
file.close()  # Must remember this!

# WITH 'with' - auto-closes! ✨
with open("auto.txt", "w") as file:
    file.write("I'll close automatically!")
# File is already closed here!

# Multiple files at once
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    content = infile.read()
    outfile.write(content.upper())

# Even if error occurs, file still closes!
try:
    with open("data.txt", "r") as f:
        content = f.read()
        # Some code that might cause error
except:
    print("Error happened, but file is still closed!")`}]},{id:9,title:"Exception Handling - Dealing with Errors",emoji:"🛡️",topics:[{title:"What are Exceptions?",description:"Exceptions are errors that happen when your code runs - like trying to divide by zero or opening a file that doesn't exist!",example:"It's like trying to eat from an empty plate - something's not right!",codeExample:`# This would cause an error without handling
try:
    result = 10 / 0  # Can't divide by zero!
except:
    print("Oops! Can't divide by zero! 😅")
    
print("Program continues...")

# Better error handling
try:
    number = int("hello")  # Can't convert text to number
except ValueError:
    print("That's not a number! 🤔")`},{title:"Try-Except-Else-Finally",description:"A complete error handling system! Try something, handle errors, run code if no errors, and always run cleanup code.",codeExample:`# Complete exception handling
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("Please enter a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Thanks for using the calculator! 🧮")`},{title:"Raising Exceptions",description:"You can create your own errors when something isn't right - like a referee calling a foul!",codeExample:`# Raising custom exceptions
def check_age(age):
    if age < 0:
        raise ValueError("Age can't be negative! 🚫")
    elif age < 13:
        raise ValueError("Sorry, must be 13+ for this game!")
    else:
        print("Welcome to the game! 🎮")

try:
    check_age(10)
except ValueError as e:
    print("Error:", e)`}]},{id:10,title:"Object-Oriented Programming (OOP)",emoji:"🏗️",topics:[{title:"What is a Class and Object?",description:"A class is like a blueprint for making things. An object is the actual thing you create from the blueprint!",example:"A cookie cutter is a class. The cookies you make are objects!",codeExample:`# Creating a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print(f"{self.name} says: Woof! 🐕")
    
    def birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old!")

# Creating objects
my_dog = Dog("Buddy", 3)
friend_dog = Dog("Max", 5)

my_dog.bark()
friend_dog.bark()
my_dog.birthday()`},{title:"Class with More Features",description:"Classes can have many features - like a car has wheels, color, engine, horn, etc.!",codeExample:`# A more detailed class
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.subjects = []
    
    def add_subject(self, subject):
        self.subjects.append(subject)
        print(f"{subject} added! 📚")
    
    def show_info(self):
        print(f"Name: {self.name}")
        print(f"Grade: {self.grade}")
        print(f"Subjects: {', '.join(self.subjects)}")

# Create a student
emma = Student("Emma", 6)
emma.add_subject("Math")
emma.add_subject("Science")
emma.show_info()`},{title:"Constructor (__init__) - Detailed",description:"The __init__ method is a special constructor that runs automatically when you create an object - like setting up a new toy when you unbox it!",example:"When you create a new character in a game, __init__ sets up their starting health, name, and level!",codeExample:`# Constructor in detail
class Player:
    def __init__(self, name, health=100, level=1):
        # These run automatically when object is created
        self.name = name
        self.health = health
        self.level = level
        print(f"Player {name} created! 🎮")
    
    def show_stats(self):
        print(f"Name: {self.name}")
        print(f"Health: {self.health}")
        print(f"Level: {self.level}")

# Creating objects - __init__ runs automatically
player1 = Player("SuperHero")
player2 = Player("NinjaWarrior", 150, 5)

player1.show_stats()
player2.show_stats()`},{title:"Instance Variables vs Class Variables",description:"Instance variables belong to each object (like everyone having their own name). Class variables are shared by ALL objects (like everyone in the same class wearing the same uniform)!",example:"Instance variable: Your own lunchbox. Class variable: The school you all attend!",codeExample:`class Student:
    # CLASS VARIABLE - shared by all students
    school_name = "Python Elementary"
    total_students = 0
    
    def __init__(self, name, age):
        # INSTANCE VARIABLES - unique to each student
        self.name = name
        self.age = age
        Student.total_students += 1

# Creating students
student1 = Student("Emma", 11)
student2 = Student("Alex", 12)

# Instance variables - different for each
print(student1.name)  # Emma
print(student2.name)  # Alex

# Class variable - SAME for all
print(student1.school_name)  # Python Elementary
print(student2.school_name)  # Python Elementary

# Accessing class variable directly
print(Student.school_name)
print(f"Total students: {Student.total_students}")`},{title:"Methods - Instance, Class, and Static",description:"There are 3 types of methods! Instance methods work with each object, class methods work with the class, and static methods are just utilities!",codeExample:`class MathHelper:
    pi = 3.14159
    
    # INSTANCE METHOD - uses self, works with object
    def __init__(self, number):
        self.number = number
    
    def square(self):
        return self.number * self.number
    
    # CLASS METHOD - uses cls, works with class
    @classmethod
    def get_pi(cls):
        return cls.pi
    
    # STATIC METHOD - doesn't use self or cls
    @staticmethod
    def add(a, b):
        return a + b

# Using instance method
obj = MathHelper(5)
print("Square:", obj.square())  # 25

# Using class method
print("Pi:", MathHelper.get_pi())  # 3.14159

# Using static method
print("Add:", MathHelper.add(10, 20))  # 30`},{title:"Single Inheritance",description:"Single inheritance is when a child class inherits from ONE parent class - like you inheriting traits from your mom!",example:"A smartphone inherits from a phone!",codeExample:`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating! 🍽️")
    
    def sleep(self):
        print(f"{self.name} is sleeping! 💤")

# Child class inherits from Animal
class Cat(Animal):
    def meow(self):
        print(f"{self.name} says: Meow! 🐱")

# Using inherited class
kitty = Cat("Whiskers")
kitty.eat()    # Inherited from Animal
kitty.sleep()  # Inherited from Animal  
kitty.meow()   # Cat's own method`},{title:"Multiple Inheritance",description:"Multiple inheritance is when a child inherits from MULTIPLE parents - like getting traits from both mom AND dad!",example:"A flying car inherits from both Car and Aircraft!",codeExample:`# Parent class 1
class Flyer:
    def fly(self):
        print("Flying in the sky! ✈️")

# Parent class 2
class Swimmer:
    def swim(self):
        print("Swimming in water! 🏊")

# Child inherits from BOTH parents
class Duck(Flyer, Swimmer):
    def quack(self):
        print("Quack quack! 🦆")

# Duck can do everything!
duck = Duck()
duck.fly()    # From Flyer
duck.swim()   # From Swimmer
duck.quack()  # Own method

# Another example
class Phone:
    def call(self):
        print("Making a call... 📞")

class Camera:
    def take_photo(self):
        print("Taking photo! 📸")

class Smartphone(Phone, Camera):
    def browse_web(self):
        print("Browsing internet! 🌐")

iphone = Smartphone()
iphone.call()
iphone.take_photo()
iphone.browse_web()`},{title:"Multilevel Inheritance",description:"Multilevel inheritance is like a family tree - grandparent → parent → child! Each level inherits from the previous one.",example:"Great-grandparent → Grandparent → Parent → You!",codeExample:`# Level 1 - Grandparent
class Vehicle:
    def __init__(self):
        self.vehicle_type = "Transport"
    
    def general_use(self):
        print("General transportation")

# Level 2 - Parent (inherits from Vehicle)
class Car(Vehicle):
    def __init__(self):
        super().__init__()
        self.wheels = 4
    
    def drive(self):
        print("Driving on road! 🚗")

# Level 3 - Child (inherits from Car)
class ElectricCar(Car):
    def __init__(self):
        super().__init__()
        self.battery = "100%"
    
    def charge(self):
        print("Charging battery! ⚡")

# ElectricCar has everything from all levels!
tesla = ElectricCar()
tesla.general_use()  # From Vehicle
tesla.drive()        # From Car
tesla.charge()       # Own method
print("Wheels:", tesla.wheels)
print("Battery:", tesla.battery)`},{title:"Hierarchical Inheritance",description:"Hierarchical inheritance is when MULTIPLE children inherit from ONE parent - like multiple kids from the same parents!",example:"One parent class, many child classes - like different types of dogs!",codeExample:`# Parent class
class Shape:
    def __init__(self, color):
        self.color = color
    
    def show_color(self):
        print(f"Color: {self.color}")

# Child 1
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

# Child 2
class Square(Shape):
    def __init__(self, color, side):
        super().__init__(color)
        self.side = side
    
    def area(self):
        return self.side ** 2

# Child 3
class Triangle(Shape):
    def __init__(self, color, base, height):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# All inherit from Shape!
circle = Circle("Red", 5)
square = Square("Blue", 4)
triangle = Triangle("Green", 3, 6)

circle.show_color()
print("Circle area:", circle.area())

square.show_color()
print("Square area:", square.area())`},{title:"Hybrid Inheritance",description:"Hybrid inheritance combines multiple types of inheritance - like mixing different inheritance patterns together!",example:"A combination of multiple + multilevel inheritance!",codeExample:`# Hybrid = Mix of different inheritance types

# Base class
class Device:
    def turn_on(self):
        print("Device turning on...")

# Multiple inheritance branch
class Phone(Device):
    def call(self):
        print("Making call... 📞")

class Camera(Device):
    def take_photo(self):
        print("Photo taken! 📸")

# Combines multiple parents
class Smartphone(Phone, Camera):
    def browse(self):
        print("Browsing web... 🌐")

# Multilevel branch
class SmartWatch(Smartphone):
    def track_fitness(self):
        print("Tracking steps! 👟")

# SmartWatch has everything!
watch = SmartWatch()
watch.turn_on()      # From Device
watch.call()         # From Phone
watch.take_photo()   # From Camera
watch.browse()       # From Smartphone
watch.track_fitness()  # Own method`},{title:"Polymorphism - One Name, Many Forms",description:"Polymorphism means one thing can take many forms - like the word 'play' means different things: play piano, play soccer, play games!",example:"The same method name does different things in different classes!",codeExample:`# Polymorphism - same method, different behavior

class Dog:
    def speak(self):
        return "Woof! 🐕"

class Cat:
    def speak(self):
        return "Meow! 🐱"

class Cow:
    def speak(self):
        return "Moo! 🐄"

class Duck:
    def speak(self):
        return "Quack! 🦆"

# Same method name, different implementations!
animals = [Dog(), Cat(), Cow(), Duck()]

for animal in animals:
    print(animal.speak())  # Each speaks differently!

# Polymorphism with functions
def make_sound(animal):
    print(animal.speak())

make_sound(Dog())  # Woof!
make_sound(Cat())  # Meow!`},{title:"Method Overriding",description:"Method overriding is when a child class creates its own version of a parent's method - like doing a task your own way instead of your parent's way!",example:"Parent says 'clean your room', but you have your own method of cleaning!",codeExample:`# Method Overriding
class Animal:
    def __init__(self, name):
        self.name = name
    
    def sound(self):
        return "Some generic sound"
    
    def move(self):
        return "Moving..."

# Child overrides parent methods
class Dog(Animal):
    def sound(self):  # Overriding sound()
        return f"{self.name} says: Woof! 🐕"
    
    def move(self):   # Overriding move()
        return f"{self.name} runs on four legs!"

class Bird(Animal):
    def sound(self):  # Overriding sound()
        return f"{self.name} says: Tweet! 🐦"
    
    def move(self):   # Overriding move()
        return f"{self.name} flies in the sky!"

# Using overridden methods
dog = Dog("Buddy")
bird = Bird("Tweety")

print(dog.sound())   # Uses Dog's version
print(dog.move())    # Uses Dog's version

print(bird.sound())  # Uses Bird's version
print(bird.move())   # Uses Bird's version`},{title:"Encapsulation - Hiding Information",description:"Encapsulation means keeping some things private and some things public - like having secrets that only you know!",example:"Your diary is private (encapsulated), but your name is public!",codeExample:`# Encapsulation - Public, Protected, Private

class BankAccount:
    def __init__(self, name, balance):
        self.name = name              # Public
        self._account_id = "12345"    # Protected (single _)
        self.__password = "secret123"  # Private (double __)
    
    # Public method - anyone can use
    def deposit(self, amount):
        self.__balance += amount
        print(f"Deposited ${amount}")
    
    # Protected method
    def _generate_statement(self):
        return "Statement generated"
    
    # Private method
    def __verify_password(self, pwd):
        return pwd == self.__password
    
    # Public method to access private
    def check_password(self, pwd):
        if self.__verify_password(pwd):
            print("Password correct! ✅")
        else:
            print("Wrong password! ❌")

account = BankAccount("Emma", 1000)

# Public - accessible
print(account.name)  # ✅ Works

# Protected - accessible but shouldn't use directly
print(account._account_id)  # ⚠️ Works but not recommended

# Private - NOT accessible
# print(account.__password)  # ❌ Error!

# Access private through public method
account.check_password("secret123")
account.check_password("wrong")`},{title:"Abstraction - Hiding Complexity",description:"Abstraction means hiding complex details and showing only what's necessary - like driving a car without knowing how the engine works!",example:"You use a TV remote without knowing the complex electronics inside!",codeExample:`from abc import ABC, abstractmethod

# Abstract class - can't create objects from it!
class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass  # Must be implemented by children
    
    @abstractmethod
    def move(self):
        pass  # Must be implemented by children
    
    # Concrete method - all children get this
    def breathe(self):
        print("Breathing... 💨")

# Concrete classes must implement abstract methods
class Dog(Animal):
    def sound(self):
        print("Woof! 🐕")
    
    def move(self):
        print("Running on four legs!")

class Fish(Animal):
    def sound(self):
        print("Blub blub! 🐠")
    
    def move(self):
        print("Swimming in water!")

# Can't do: animal = Animal()  # Error!

# But can do:
dog = Dog()
dog.sound()    # Woof!
dog.move()     # Running
dog.breathe()  # Breathing...

fish = Fish()
fish.sound()   # Blub blub!
fish.move()    # Swimming
fish.breathe() # Breathing...`},{title:"super() - Calling Parent Methods",description:"super() lets you call methods from the parent class - like asking your parent for help!",example:"Like doing a task your parent's way and then adding your own twist!",codeExample:`# Using super() to call parent methods

class Parent:
    def __init__(self, name):
        self.name = name
        print("Parent constructor called")
    
    def show_info(self):
        print(f"Name: {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Call parent's __init__
        self.age = age
        print("Child constructor called")
    
    def show_info(self):
        super().show_info()  # Call parent's method
        print(f"Age: {self.age}")  # Add more info

child = Child("Emma", 11)
child.show_info()

# Another example
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)  # Use parent's __init__
    
    def perimeter(self):
        return 4 * self.length

square = Square(5)
print("Area:", square.area())      # From parent
print("Perimeter:", square.perimeter())  # Own method`}]},{id:11,title:"Advanced Python - Cool Tricks!",emoji:"⚡",topics:[{title:"Decorators - Wrap Functions with Magic",description:"Decorators add extra features to functions - like adding sprinkles to ice cream!",codeExample:`# Simple decorator
def make_exciting(func):
    def wrapper():
        print("✨" * 10)
        func()
        print("✨" * 10)
    return wrapper

@make_exciting
def say_hello():
    print("Hello, World!")

say_hello()

# Another decorator example
def repeat_twice(func):
    def wrapper():
        func()
        func()
    return wrapper

@repeat_twice
def celebrate():
    print("Hooray! 🎉")

celebrate()`},{title:"Generators - Save Memory",description:"Generators create values one at a time - like getting candies one by one instead of carrying the whole bag!",codeExample:`# Generator function
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Using generator
for num in count_up_to(5):
    print(num)

# Generator expression
squares = (x * x for x in range(1, 6))
for square in squares:
    print(square)`},{title:"Working with Dates and Time",description:"Python can work with dates and times - know what day it is, count days, and more!",codeExample:`# Working with datetime
from datetime import datetime, timedelta

# Current date and time
now = datetime.now()
print("Today:", now.strftime("%B %d, %Y"))
print("Time:", now.strftime("%H:%M:%S"))

# Calculate future date
tomorrow = now + timedelta(days=1)
print("Tomorrow:", tomorrow.strftime("%B %d, %Y"))

# Your birthday countdown
birthday = datetime(2024, 12, 25)
days_until = (birthday - now).days
print(f"Days until birthday: {days_until}")`},{title:"Random Numbers and Choices",description:"Create random things - perfect for games, dice rolls, and surprises!",codeExample:`import random

# Random integer
dice_roll = random.randint(1, 6)
print("Dice roll:", dice_roll, "🎲")

# Random choice
animals = ["🐶", "🐱", "🐭", "🐹", "🐰"]
pet = random.choice(animals)
print("Your random pet:", pet)

# Shuffle list
deck = ["A", "K", "Q", "J", "10", "9"]
random.shuffle(deck)
print("Shuffled:", deck)

# Random float between 0 and 1
random_decimal = random.random()
print("Random decimal:", random_decimal)`},{title:"Iterators - Step Through Items",description:"Iterators let you go through items one by one - like flipping through pages of a book!",example:"An iterator is like a bookmark that helps you keep track of where you are in a list!",codeExample:`# Creating an iterator
my_list = [1, 2, 3, 4, 5]
my_iter = iter(my_list)

# Getting items one by one
print(next(my_iter))  # 1
print(next(my_iter))  # 2
print(next(my_iter))  # 3

# Creating custom iterator
class Counter:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max:
            self.current += 1
            return self.current
        raise StopIteration

# Using custom iterator
counter = Counter(5)
for num in counter:
    print(num)  # 1, 2, 3, 4, 5`},{title:"Closures - Functions Inside Functions",description:"A closure is when a function remembers variables from outside its scope - like a function with memory!",example:"Like a secret agent that remembers their secret code even after the mission!",codeExample:`# Closure example
def make_multiplier(n):
    def multiplier(x):
        return x * n  # Remembers 'n' from outer function!
    return multiplier

# Creating closures
times_3 = make_multiplier(3)
times_5 = make_multiplier(5)

print(times_3(10))  # 30 (10 * 3)
print(times_5(10))  # 50 (10 * 5)

# Another example - counter
def create_counter():
    count = 0
    def increment():
        nonlocal count  # Access outer variable
        count += 1
        return count
    return increment

counter1 = create_counter()
counter2 = create_counter()

print(counter1())  # 1
print(counter1())  # 2
print(counter2())  # 1 (separate counter!)`},{title:"Shallow Copy vs Deep Copy",description:"Shallow copy copies the surface, deep copy copies everything including nested items - like copying a folder vs copying everything inside it too!",example:"Shallow copy: Copy a toy box but toys inside are still shared. Deep copy: Copy the box AND make new copies of all toys!",codeExample:`import copy

# Original list with nested list
original = [1, 2, [3, 4], 5]

# SHALLOW COPY - copies outer list only
shallow = copy.copy(original)
shallow = original.copy()  # or use this

# Modify nested list
original[2][0] = 999

print("Original:", original)  # [1, 2, [999, 4], 5]
print("Shallow:", shallow)    # [1, 2, [999, 4], 5] - CHANGED!

# DEEP COPY - copies everything
original2 = [1, 2, [3, 4], 5]
deep = copy.deepcopy(original2)

# Modify nested list
original2[2][0] = 999

print("Original2:", original2)  # [1, 2, [999, 4], 5]
print("Deep:", deep)            # [1, 2, [3, 4], 5] - NOT changed!

# With dictionaries
dict_original = {"a": 1, "b": {"c": 2}}
dict_shallow = dict_original.copy()
dict_deep = copy.deepcopy(dict_original)

dict_original["b"]["c"] = 999
print("Shallow dict:", dict_shallow)  # Changed!
print("Deep dict:", dict_deep)        # Not changed!`},{title:"copy Module - Making Copies",description:"The copy module helps you make copies of objects - shallow or deep!",codeExample:`import copy

# Simple copy
list1 = [1, 2, 3]
list2 = copy.copy(list1)
list2.append(4)
print("List1:", list1)  # [1, 2, 3]
print("List2:", list2)  # [1, 2, 3, 4]

# Deep copy with nested structures
class Person:
    def __init__(self, name, friends):
        self.name = name
        self.friends = friends

person1 = Person("Emma", ["Alex", "Sam"])
person2 = copy.deepcopy(person1)

person1.friends.append("Jake")
print("Person1 friends:", person1.friends)  # ['Alex', 'Sam', 'Jake']
print("Person2 friends:", person2.friends)  # ['Alex', 'Sam']`},{title:"collections Module - Special Data Structures",description:"The collections module has super useful data structures - like upgraded versions of lists and dictionaries!",codeExample:`from collections import Counter, defaultdict, deque, namedtuple

# COUNTER - counts things automatically!
colors = ["red", "blue", "red", "green", "blue", "red"]
color_count = Counter(colors)
print(color_count)  # Counter({'red': 3, 'blue': 2, 'green': 1})
print(color_count['red'])  # 3

# DEFAULTDICT - never get KeyError!
scores = defaultdict(int)  # default value is 0
scores['Emma'] += 10
scores['Alex'] += 5
print(scores)  # defaultdict(<class 'int'>, {'Emma': 10, 'Alex': 5})

# DEQUE - fast add/remove from both ends!
queue = deque([1, 2, 3])
queue.append(4)      # Add to right
queue.appendleft(0)  # Add to left
print(queue)  # deque([0, 1, 2, 3, 4])
queue.pop()          # Remove from right
queue.popleft()      # Remove from left
print(queue)  # deque([1, 2, 3])

# NAMEDTUPLE - like a lightweight class
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
print(p[0], p[1])  # 10 20`},{title:"itertools Module - Iterator Tools",description:"itertools has amazing tools for working with iterators - create combinations, permutations, and more!",example:"Like a toolkit for generating all possible combinations - perfect for games and puzzles!",codeExample:`from itertools import count, cycle, repeat, combinations, permutations, chain

# COUNT - infinite counter
# for i in count(1, 2):  # Starts at 1, step by 2
#     if i > 10: break
#     print(i)  # 1, 3, 5, 7, 9

# CYCLE - repeat forever
colors = cycle(['red', 'blue', 'green'])
for i, color in enumerate(colors):
    if i >= 6: break
    print(color)  # red, blue, green, red, blue, green

# REPEAT - repeat value
for x in repeat('Hello', 3):
    print(x)  # Hello (3 times)

# COMBINATIONS - all combinations
letters = ['A', 'B', 'C']
combos = combinations(letters, 2)
print(list(combos))  # [('A', 'B'), ('A', 'C'), ('B', 'C')]

# PERMUTATIONS - all arrangements
perms = permutations(letters, 2)
print(list(perms))  # [('A', 'B'), ('A', 'C'), ('B', 'A'), ...]

# CHAIN - combine iterators
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = chain(list1, list2)
print(list(combined))  # [1, 2, 3, 4, 5, 6]`},{title:"datetime Module - Complete Guide",description:"Master dates and times - create dates, format them, calculate differences, and work with timezones!",codeExample:`from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print("Now:", now)

# Create specific date
birthday = datetime(2024, 12, 25, 10, 30)  # Dec 25, 2024, 10:30 AM
print("Birthday:", birthday)

# Date only
today = date.today()
print("Today:", today)

# Time only
current_time = time(14, 30, 0)  # 2:30 PM
print("Time:", current_time)

# Formatting dates
formatted = now.strftime("%B %d, %Y at %I:%M %p")
print(formatted)  # "December 29, 2025 at 02:30 PM"

# Parsing dates
date_str = "2024-12-25"
parsed = datetime.strptime(date_str, "%Y-%m-%d")
print("Parsed:", parsed)

# Date arithmetic
tomorrow = today + timedelta(days=1)
next_week = today + timedelta(weeks=1)
next_year = today + timedelta(days=365)

# Difference between dates
diff = birthday - now
print(f"Days until birthday: {diff.days}")

# Day of week
print("Day of week:", today.strftime("%A"))  # Monday, Tuesday, etc.`},{title:"math Module - Complete Math Functions",description:"The math module has TONS of math functions - from basic to advanced!",codeExample:`import math

# Constants
print("Pi:", math.pi)
print("Euler's number:", math.e)
print("Infinity:", math.inf)

# Basic functions
print("Square root of 16:", math.sqrt(16))
print("Absolute value:", math.fabs(-5.5))
print("Power:", math.pow(2, 3))

# Rounding
print("Ceiling of 4.3:", math.ceil(4.3))    # 5
print("Floor of 4.7:", math.floor(4.7))      # 4
print("Truncate:", math.trunc(4.9))         # 4

# Trigonometry (angles in radians)
angle_deg = 45
angle_rad = math.radians(angle_deg)
print(f"Sin of {angle_deg}°:", math.sin(angle_rad))
print(f"Cos of {angle_deg}°:", math.cos(angle_rad))
print(f"Tan of {angle_deg}°:", math.tan(angle_rad))

# Logarithms
print("Log base 10:", math.log10(100))  # 2.0
print("Natural log:", math.log(math.e))  # 1.0
print("Log base 2:", math.log2(8))       # 3.0

# Factorial
print("5 factorial:", math.factorial(5))  # 120

# GCD (Greatest Common Divisor)
print("GCD of 12 and 8:", math.gcd(12, 8))  # 4`}]},{id:12,title:"Python Standard Library",emoji:"🔨",topics:[{title:"OS Module - Control Your Computer",description:"The OS module helps you interact with your computer - create folders, check files, and more!",codeExample:`import os

# Get current directory
current = os.getcwd()
print("Current folder:", current)

# List files in directory
files = os.listdir('.')
print("Files here:", files)

# Check if file exists
if os.path.exists('my_file.txt'):
    print("File exists! ✅")
else:
    print("File not found! ❌")

# Create a new directory
# os.mkdir('my_new_folder')
print("Folder created!")`},{title:"Regular Expressions - Pattern Matching",description:"Regular expressions (regex) help you find patterns in text - like finding all phone numbers in a document!",codeExample:`import re

# Find all numbers in text
text = "I have 3 apples and 5 oranges"
numbers = re.findall(r'\\d+', text)
print("Numbers found:", numbers)

# Check if email is valid
email = "student@school.com"
if re.match(r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$', email):
    print("Valid email! ✉️")

# Replace words
sentence = "I love cats and cats love me"
new_sentence = re.sub(r'cats', 'dogs', sentence)
print(new_sentence)`},{title:"Math Module - Advanced Math",description:"The math module has lots of cool math functions - square roots, trigonometry, constants like pi!",codeExample:`import math

# Constants
print("Pi:", math.pi)
print("Euler's number:", math.e)

# Calculations
print("Square root of 16:", math.sqrt(16))
print("5 to the power of 3:", math.pow(5, 3))
print("Ceiling of 4.3:", math.ceil(4.3))
print("Floor of 4.7:", math.floor(4.7))

# Trigonometry
angle = 45
radians = math.radians(angle)
print(f"Sin of {angle}°:", math.sin(radians))`},{title:"sys Module - System Functions",description:"The sys module lets you interact with Python itself - check version, command line arguments, and exit programs!",example:"Like checking what version of Python you're using or passing arguments to your program!",codeExample:`import sys

# Python version
print("Python version:", sys.version)
print("Version info:", sys.version_info)

# Command line arguments
# When you run: python script.py arg1 arg2
print("Script name:", sys.argv[0])
# print("Arguments:", sys.argv[1:])

# Platform information
print("Operating system:", sys.platform)

# Maximum integer size
print("Max int:", sys.maxsize)

# Exit program
# sys.exit("Exiting program!")

# Path where Python looks for modules
print("Module search paths:", sys.path[:3])`},{title:"argparse Module - Command Line Arguments",description:"argparse helps you create programs that accept arguments from command line - like professional programs!",example:"Like when you run 'python game.py --level 5 --difficulty hard'!",codeExample:`import argparse

# Create parser
parser = argparse.ArgumentParser(description='My Cool Program')

# Add arguments
parser.add_argument('name', help='Your name')
parser.add_argument('--age', type=int, help='Your age')
parser.add_argument('--verbose', action='store_true', 
                   help='Print detailed output')

# Parse arguments (when run from command line)
# args = parser.parse_args()
# 
# print(f"Hello {args.name}!")
# if args.age:
#     print(f"You are {args.age} years old")
# if args.verbose:
#     print("Verbose mode enabled!")

# Example usage:
# python script.py Emma --age 11 --verbose`},{title:"logging Module - Track What Happens",description:"The logging module helps you track what your program does - like keeping a diary of everything that happens!",example:"Instead of using print(), use logging to track errors, warnings, and important events!",codeExample:`import logging

# Basic configuration
logging.basicConfig(level=logging.DEBUG,
                   format='%(levelname)s: %(message)s')

# Different log levels
logging.debug("This is debug info (for developers)")
logging.info("Program started successfully ℹ️")
logging.warning("Warning: Low on memory! ⚠️")
logging.error("Error: File not found! ❌")
logging.critical("Critical: System crash! 🔥")

# Logging to file
logging.basicConfig(
    filename='app.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info("This goes to app.log file!")

# Example usage
def divide(a, b):
    try:
        result = a / b
        logging.info(f"Division successful: {a}/{b} = {result}")
        return result
    except ZeroDivisionError:
        logging.error("Cannot divide by zero!")
        return None`},{title:"subprocess Module - Run Other Programs",description:"subprocess lets your Python program run other programs - like opening a calculator or running commands!",example:"Like a conductor that can tell other programs what to do!",codeExample:`import subprocess

# Run a simple command
# result = subprocess.run(['echo', 'Hello World'], 
#                        capture_output=True, text=True)
# print(result.stdout)

# Run Python code
# subprocess.run(['python', '--version'])

# Get output from command
# result = subprocess.run(['ls'], 
#                        capture_output=True, text=True)
# print("Files:", result.stdout)

# Run with shell
# subprocess.run('echo Hello from shell', shell=True)

# Check if command succeeded
# result = subprocess.run(['python', '-c', 'print(2+2)'],
#                        capture_output=True, text=True)
# if result.returncode == 0:
#     print("Success! Output:", result.stdout)

# Example: Open calculator (Windows)
# subprocess.run('calc', shell=True)`},{title:"time Module - Measure Time",description:"The time module helps you work with time - pause programs, measure how long code takes, and more!",example:"Like having a stopwatch to see how fast your code runs!",codeExample:`import time

# Current time (seconds since 1970)
current_time = time.time()
print("Current timestamp:", current_time)

# Pause program
print("Waiting 2 seconds...")
time.sleep(2)  # Sleep for 2 seconds
print("Done waiting! ⏰")

# Measure code execution time
start = time.time()

# Some code to measure
total = sum(range(1000000))

end = time.time()
print(f"Code took {end - start:.4f} seconds")

# Get readable time
readable = time.ctime()
print("Current time:", readable)

# Countdown timer
for i in range(5, 0, -1):
    print(f"Countdown: {i}")
    time.sleep(1)
print("Blast off! 🚀")`}]},{id:13,title:"Virtual Environment & Packages",emoji:"📦",topics:[{title:"What is pip?",description:"pip is like an app store for Python! It helps you download and install cool Python packages.",example:"Just like downloading apps on your phone, pip downloads Python libraries!",codeExample:`# Install a package (run in terminal)
# pip install requests

# Install specific version
# pip install pandas==1.5.0

# Uninstall a package
# pip uninstall requests

# List all installed packages
# pip list

# Show package info
# pip show numpy`},{title:"Using requirements.txt",description:"requirements.txt is a shopping list of all packages your project needs!",codeExample:`# Create requirements.txt with:
requests==2.28.0
pandas==1.5.0
numpy==1.23.0

# Install all packages from requirements.txt:
# pip install -r requirements.txt

# Create requirements.txt from current environment:
# pip freeze > requirements.txt`},{title:"Virtual Environments",description:"Virtual environments are like separate toy boxes for different projects - keeps everything organized!",example:"Like having one box for LEGO and another for action figures!",codeExample:`# Create virtual environment (terminal):
# python -m venv myenv

# Activate it (Windows):
# myenv\\Scripts\\activate

# Activate it (Mac/Linux):
# source myenv/bin/activate

# Now install packages:
# pip install requests

# Deactivate when done:
# deactivate`},{title:"pip freeze - Save Your Packages",description:"pip freeze shows all installed packages and their versions - like making a shopping list of everything you have!",example:"Save your package list so you can recreate the same environment on another computer!",codeExample:`# Show all installed packages
# pip freeze

# Output example:
# requests==2.28.0
# pandas==1.5.0
# numpy==1.23.0

# Save to requirements.txt
# pip freeze > requirements.txt

# Now anyone can install the same packages:
# pip install -r requirements.txt

# Uninstall all packages
# pip freeze > to_uninstall.txt
# pip uninstall -r to_uninstall.txt -y`},{title:"Poetry - Modern Package Manager",description:"Poetry is a modern tool that manages packages AND virtual environments together - easier than pip!",example:"Like having a smart assistant that handles all your Python packages and dependencies!",codeExample:`# Install Poetry first
# curl -sSL https://install.python-poetry.org | python3 -

# Create new project
# poetry new my-project

# Add packages
# poetry add requests
# poetry add pandas numpy

# Install all dependencies
# poetry install

# Show installed packages
# poetry show

# Update packages
# poetry update

# Run Python in Poetry environment
# poetry run python script.py

# pyproject.toml example:
# [tool.poetry.dependencies]
# python = "^3.9"
# requests = "^2.28.0"
# pandas = "^1.5.0"`},{title:"Conda - Package & Environment Manager",description:"Conda manages both packages and environments, especially good for data science!",example:"Popular in data science - comes with Anaconda distribution!",codeExample:`# Create conda environment
# conda create --name myenv python=3.9

# Activate environment
# conda activate myenv

# Install packages
# conda install numpy pandas matplotlib

# Install from conda-forge channel
# conda install -c conda-forge requests

# List environments
# conda env list

# List packages in environment
# conda list

# Export environment
# conda env export > environment.yml

# Create from environment file
# conda env create -f environment.yml

# Remove environment
# conda env remove --name myenv

# Deactivate
# conda deactivate`}]},{id:14,title:"Database Connectivity",emoji:"💾",topics:[{title:"What is a Database?",description:"A database is like a super organized filing cabinet that stores lots of information!",example:"Like your school's system that keeps track of all students, grades, and classes!",codeExample:`# Python can talk to databases!
# Databases help you:
# - Store information permanently
# - Organize data in tables
# - Search and find information quickly
# - Update and delete data

# Common databases:
# SQLite - Simple, built into Python
# MySQL - Popular, powerful
# PostgreSQL - Advanced features`},{title:"Using SQLite - Built-in Database",description:"SQLite comes with Python! Perfect for learning and small projects.",codeExample:`import sqlite3

# Create/connect to database
conn = sqlite3.connect('my_games.db')
cursor = conn.cursor()

# Create a table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY,
        name TEXT,
        score INTEGER
    )
''')

# Insert data
cursor.execute("INSERT INTO games (name, score) VALUES (?, ?)",
               ("Minecraft", 100))
cursor.execute("INSERT INTO games (name, score) VALUES (?, ?)",
               ("Roblox", 95))

# Save changes
conn.commit()

# Read data
cursor.execute("SELECT * FROM games")
games = cursor.fetchall()
for game in games:
    print(f"Game: {game[1]}, Score: {game[2]}")

# Close connection
conn.close()`},{title:"CRUD Operations",description:"CRUD means Create, Read, Update, Delete - the four main things you do with data!",codeExample:`import sqlite3

conn = sqlite3.connect('students.db')
cursor = conn.cursor()

# CREATE table
cursor.execute('''CREATE TABLE IF NOT EXISTS students
                 (id INTEGER PRIMARY KEY, 
                  name TEXT, 
                  age INTEGER)''')

# CREATE - Add new student
cursor.execute("INSERT INTO students (name, age) VALUES (?, ?)",
               ("Emma", 11))

# READ - Get all students
cursor.execute("SELECT * FROM students")
print("All students:", cursor.fetchall())

# UPDATE - Change student info
cursor.execute("UPDATE students SET age = ? WHERE name = ?",
               (12, "Emma"))

# DELETE - Remove student
cursor.execute("DELETE FROM students WHERE name = ?", 
               ("Emma",))

conn.commit()
conn.close()
print("Database operations complete! 💾")`},{title:"Python with MySQL",description:"MySQL is a popular database used by many websites! You need to install mysql-connector-python to use it.",example:"Many big websites like Facebook and YouTube use MySQL!",codeExample:`# First install: pip install mysql-connector-python

import mysql.connector

# Connect to MySQL server
conn = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="school_db"
)

cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    grade INT,
    subject VARCHAR(50)
)
""")

# Insert data
sql = "INSERT INTO students (name, grade, subject) VALUES (%s, %s, %s)"
values = ("Emma", 11, "Math")
cursor.execute(sql, values)

# Insert multiple rows
students = [
    ("Alex", 12, "Science"),
    ("Sam", 11, "English"),
    ("Jake", 12, "Math")
]
cursor.executemany(sql, students)
conn.commit()

# Read data
cursor.execute("SELECT * FROM students")
results = cursor.fetchall()
for student in results:
    print(f"ID: {student[0]}, Name: {student[1]}, Grade: {student[2]}")

# Update data
update_sql = "UPDATE students SET grade = %s WHERE name = %s"
cursor.execute(update_sql, (12, "Emma"))
conn.commit()

# Delete data
delete_sql = "DELETE FROM students WHERE name = %s"
cursor.execute(delete_sql, ("Jake",))
conn.commit()

# Close connection
cursor.close()
conn.close()
print("MySQL operations complete! 🗄️")`},{title:"Python with PostgreSQL",description:"PostgreSQL is a powerful, advanced database! Install psycopg2 to use it with Python.",example:"Used by Instagram, Spotify, and many large companies!",codeExample:`# First install: pip install psycopg2-binary

import psycopg2

# Connect to PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="school_db",
    user="your_username",
    password="your_password"
)

cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER,
    email VARCHAR(100)
)
""")

# Insert data
cursor.execute(
    "INSERT INTO students (name, age, email) VALUES (%s, %s, %s)",
    ("Emma", 11, "emma@school.com")
)

# Insert multiple
students = [
    ("Alex", 12, "alex@school.com"),
    ("Sam", 11, "sam@school.com")
]
cursor.executemany(
    "INSERT INTO students (name, age, email) VALUES (%s, %s, %s)",
    students
)
conn.commit()

# Read with WHERE clause
cursor.execute("SELECT * FROM students WHERE age >= %s", (11,))
results = cursor.fetchall()
for student in results:
    print(f"Name: {student[1]}, Age: {student[2]}, Email: {student[3]}")

# Update
cursor.execute(
    "UPDATE students SET age = %s WHERE name = %s",
    (12, "Emma")
)
conn.commit()

# Delete
cursor.execute("DELETE FROM students WHERE name = %s", ("Sam",))
conn.commit()

# Close
cursor.close()
conn.close()
print("PostgreSQL operations complete! 🐘")`},{title:"What is DBMS?",description:"DBMS (Database Management System) is software that helps store, retrieve, and manage data in databases!",example:"Like a librarian that helps organize and find books in a huge library!",codeExample:`# What is DBMS (Database Management System)?

# DBMS helps you:
# 1. Store data in organized tables
# 2. Retrieve data quickly with queries
# 3. Update and delete data safely
# 4. Handle multiple users at once
# 5. Keep data secure and backed up

# Types of DBMS:

# 1. Relational DBMS (RDBMS)
#    - MySQL, PostgreSQL, SQLite
#    - Data in tables with relationships
#    - Use SQL language

# 2. NoSQL DBMS
#    - MongoDB, Redis, Cassandra
#    - More flexible structure
#    - Good for big data

# 3. In-Memory DBMS
#    - Redis, Memcached
#    - Super fast, data in RAM

# Why use DBMS?
# ✅ Data integrity - keeps data accurate
# ✅ Security - controls who can access data
# ✅ Backup & Recovery - don't lose data
# ✅ Concurrent access - multiple users at once
# ✅ Efficient - fast searches and updates

# Example: School DBMS
# Tables: Students, Teachers, Classes, Grades
# Each table connected by relationships!`}]}];function sf(){const[w,L]=Qt.useState(!0),[m,V]=Qt.useState(null);return S.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${w?"bg-gray-900":"bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"}`,children:[S.jsx("header",{className:`sticky top-0 z-50 border-b transition-colors ${w?"bg-gray-800/80 backdrop-blur-lg border-gray-700":"bg-white/80 backdrop-blur-lg border-purple-200"}`,children:S.jsx("div",{className:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl",children:S.jsx(Kd,{className:"w-8 h-8 text-white"})}),S.jsxs("div",{children:[S.jsx("h1",{className:`text-2xl ${w?"text-white":"text-gray-900"}`,children:"Python for Kids! 🐍"}),S.jsx("p",{className:`text-sm ${w?"text-gray-400":"text-gray-600"}`,children:"Learn Python the Fun Way!"})]})]}),S.jsx(af,{isDarkMode:w,setIsDarkMode:L})]})})}),S.jsx("main",{className:"max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:m===null?S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:`text-center mb-12 p-8 rounded-3xl ${w?"bg-gradient-to-r from-purple-900/50 to-pink-900/50":"bg-gradient-to-r from-purple-100 to-pink-100"}`,children:[S.jsx("div",{className:"flex justify-center mb-4",children:S.jsx(nf,{className:`w-16 h-16 ${w?"text-yellow-400":"text-yellow-500"}`})}),S.jsx("h2",{className:`text-4xl mb-4 ${w?"text-white":"text-gray-900"}`,children:"Welcome to Python Learning! 🎉"}),S.jsx("p",{className:`text-xl ${w?"text-gray-300":"text-gray-700"}`,children:"14 Awesome Modules • Easy Examples • Fun Code • Real-World Projects"})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:zu.map(A=>S.jsx(Hd,{module:A,isDarkMode:w,onClick:()=>V(A.id)},A.id))})]}):S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:()=>V(null),className:`mb-6 px-6 py-3 rounded-xl transition-all ${w?"bg-gray-800 text-white hover:bg-gray-700":"bg-white text-gray-900 hover:bg-gray-100"}`,children:"← Back to All Modules"}),zu.filter(A=>A.id===m).map(A=>S.jsxs("div",{children:[S.jsxs("div",{className:`p-8 rounded-3xl mb-8 ${w?"bg-gradient-to-r from-purple-900/50 to-pink-900/50":"bg-gradient-to-r from-purple-100 to-pink-100"}`,children:[S.jsx("div",{className:"text-6xl mb-4",children:A.emoji}),S.jsxs("h2",{className:`text-4xl mb-2 ${w?"text-white":"text-gray-900"}`,children:["Module ",A.id,": ",A.title]}),S.jsxs("p",{className:`text-xl ${w?"text-gray-300":"text-gray-700"}`,children:[A.topics.length," Topics to Master"]})]}),S.jsx("div",{className:"space-y-8",children:A.topics.map((D,le)=>S.jsxs("div",{className:`p-6 rounded-2xl ${w?"bg-gray-800 border border-gray-700":"bg-white border border-purple-200"}`,children:[S.jsx("h3",{className:`text-2xl mb-3 ${w?"text-white":"text-gray-900"}`,children:D.title}),S.jsx("p",{className:`text-lg mb-4 ${w?"text-gray-300":"text-gray-700"}`,children:D.description}),D.example&&S.jsx("div",{className:`p-4 rounded-xl mb-4 ${w?"bg-blue-900/30 border-l-4 border-blue-500":"bg-blue-50 border-l-4 border-blue-400"}`,children:S.jsxs("p",{className:`${w?"text-blue-200":"text-blue-800"}`,children:["💡 ",S.jsx("strong",{children:"Real-world example:"})," ",D.example]})}),D.codeExample&&S.jsx(of,{code:D.codeExample,isDarkMode:w})]},le))})]},A.id))]})}),S.jsx("footer",{className:`mt-16 py-8 border-t ${w?"border-gray-800 bg-gray-900":"border-purple-200 bg-white"}`,children:S.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:S.jsx("p",{className:`text-lg ${w?"text-gray-400":"text-gray-600"}`,children:"Keep coding and have fun! 🚀 Made with 💜 for young Python learners"})})})]})}Wd.createRoot(document.getElementById("root")).render(S.jsx(sf,{}));
