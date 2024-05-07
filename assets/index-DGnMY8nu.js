(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bi(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const re={},Dt=[],Ce=()=>{},pl=()=>!1,cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yi=e=>e.startsWith("onUpdate:"),me=Object.assign,_i=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,Y=(e,t)=>gl.call(e,t),D=Array.isArray,Ut=e=>fr(e)==="[object Map]",Ao=e=>fr(e)==="[object Set]",B=e=>typeof e=="function",se=e=>typeof e=="string",Tt=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",So=e=>(ie(e)||B(e))&&B(e.then)&&B(e.catch),Oo=Object.prototype.toString,fr=e=>Oo.call(e),vl=e=>fr(e).slice(8,-1),Po=e=>fr(e)==="[object Object]",wi=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,an=bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ur=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,We=ur(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Xt=ur(e=>e.replace(yl,"-$1").toLowerCase()),dr=ur(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=ur(e=>e?`on${dr(e)}`:""),ht=(e,t)=>!Object.is(e,t),Pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Co=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_l=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ia;const Ro=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xi(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=se(r)?kl(r):xi(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(se(e)||ie(e))return e}const wl=/;(?![^(]*\))/g,xl=/:([^]+)/,El=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(El,"").split(wl).forEach(n=>{if(n){const r=n.split(xl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ei(e){let t="";if(se(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Ei(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sl=bi(Al);function Io(e){return!!e||e===""}const Ol=e=>se(e)?e:e==null?"":D(e)||ie(e)&&(e.toString===Oo||!B(e.toString))?JSON.stringify(e,To,2):String(e),To=(e,t)=>t&&t.__v_isRef?To(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Cr(r,a)+" =>"]=i,n),{})}:Ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Cr(n))}:Tt(t)?Cr(t):ie(t)&&!D(t)&&!Po(t)?String(t):t,Cr=(e,t="")=>{var n;return Tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Pl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(e,t=Ie){t&&t.active&&t.effects.push(e)}function Rl(){return Ie}let St;class ki{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Il(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),yt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ut,n=St;try{return ut=!0,St=this,this._runnings++,aa(this),this.fn()}finally{oa(this),this._runnings--,St=n,ut=t}}stop(){this.active&&(aa(this),oa(this),this.onStop&&this.onStop(),this.active=!1)}}function Il(e){return e.value}function aa(e){e._trackId++,e._depsLength=0}function oa(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)No(e.deps[t],e);e.deps.length=e._depsLength}}function No(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ut=!0,Wr=0;const Mo=[];function bt(){Mo.push(ut),ut=!1}function yt(){const e=Mo.pop();ut=e===void 0?!0:e}function Ai(){Wr++}function Si(){for(Wr--;!Wr&&Yr.length;)Yr.shift()()}function Lo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&No(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Yr=[];function jo(e,t,n){Ai();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Yr.push(r.scheduler)))}Si()}const Fo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Kr=new WeakMap,Ot=Symbol(""),Gr=Symbol("");function ke(e,t,n){if(ut&&St){let r=Kr.get(e);r||Kr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Fo(()=>r.delete(n))),Lo(St,i)}}function qe(e,t,n,r,i,a){const o=Kr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Tt(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?wi(n)&&s.push(o.get("length")):(s.push(o.get(Ot)),Ut(e)&&s.push(o.get(Gr)));break;case"delete":D(e)||(s.push(o.get(Ot)),Ut(e)&&s.push(o.get(Gr)));break;case"set":Ut(e)&&s.push(o.get(Ot));break}Ai();for(const l of s)l&&jo(l,4);Si()}const Tl=bi("__proto__,__v_isRef,__isVue"),$o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tt)),sa=Nl();function Nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let a=0,o=this.length;a<o;a++)ke(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bt(),Ai();const r=G(this)[t].apply(this,n);return Si(),yt(),r}}),e}function Ml(e){Tt(e)||(e=String(e));const t=G(this);return ke(t,"has",e),t.hasOwnProperty(e)}class zo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Kl:Bo:a?Uo:Do).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=D(t);if(!i){if(o&&Y(sa,n))return Reflect.get(sa,n,r);if(n==="hasOwnProperty")return Ml}const s=Reflect.get(t,n,r);return(Tt(n)?$o.has(n):Tl(n))||(i||ke(t,"get",n),a)?s:Ae(s)?o&&wi(n)?s:s.value:ie(s)?i?Wo(s):hr(s):s}}class Ho extends zo{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=pn(a);if(!tr(r)&&!pn(r)&&(a=G(a),r=G(r)),!D(t)&&Ae(a)&&!Ae(r))return l?!1:(a.value=r,!0)}const o=D(t)&&wi(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,i);return t===G(i)&&(o?ht(r,a)&&qe(t,"set",n,r):qe(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&qe(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Tt(n)||!$o.has(n))&&ke(t,"has",n),r}ownKeys(t){return ke(t,"iterate",D(t)?"length":Ot),Reflect.ownKeys(t)}}class Ll extends zo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const jl=new Ho,Fl=new Ll,$l=new Ho(!0);const Oi=e=>e,mr=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const i=G(e),a=G(t);n||(ht(t,a)&&ke(i,"get",t),ke(i,"get",a));const{has:o}=mr(i),s=r?Oi:n?Ri:gn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function Mn(e,t=!1){const n=this.__v_raw,r=G(n),i=G(e);return t||(ht(e,i)&&ke(r,"has",e),ke(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ln(e,t=!1){return e=e.__v_raw,!t&&ke(G(e),"iterate",Ot),Reflect.get(e,"size",e)}function la(e){e=G(e);const t=G(this);return mr(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function ca(e,t){t=G(t);const n=G(this),{has:r,get:i}=mr(n);let a=r.call(n,e);a||(e=G(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?ht(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function fa(e){const t=G(this),{has:n,get:r}=mr(t);let i=n.call(t,e);i||(e=G(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&qe(t,"delete",e,void 0),a}function ua(){const e=G(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function jn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=G(o),l=t?Oi:e?Ri:gn;return!e&&ke(s,"iterate",Ot),o.forEach((f,c)=>r.call(i,l(f),l(c),a))}}function Fn(e,t,n){return function(...r){const i=this.__v_raw,a=G(i),o=Ut(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?Oi:t?Ri:gn;return!t&&ke(a,"iterate",l?Gr:Ot),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zl(){const e={get(a){return Nn(this,a)},get size(){return Ln(this)},has:Mn,add:la,set:ca,delete:fa,clear:ua,forEach:jn(!1,!1)},t={get(a){return Nn(this,a,!1,!0)},get size(){return Ln(this)},has:Mn,add:la,set:ca,delete:fa,clear:ua,forEach:jn(!1,!0)},n={get(a){return Nn(this,a,!0)},get size(){return Ln(this,!0)},has(a){return Mn.call(this,a,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!1)},r={get(a){return Nn(this,a,!0,!0)},get size(){return Ln(this,!0)},has(a){return Mn.call(this,a,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Fn(a,!1,!1),n[a]=Fn(a,!0,!1),t[a]=Fn(a,!1,!0),r[a]=Fn(a,!0,!0)}),[e,n,t,r]}const[Hl,Dl,Ul,Bl]=zl();function Pi(e,t){const n=t?e?Bl:Ul:e?Dl:Hl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Y(n,i)&&i in r?n:r,i,a)}const Vl={get:Pi(!1,!1)},Wl={get:Pi(!1,!0)},Yl={get:Pi(!0,!1)};const Do=new WeakMap,Uo=new WeakMap,Bo=new WeakMap,Kl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(vl(e))}function hr(e){return pn(e)?e:Ci(e,!1,jl,Vl,Do)}function Vo(e){return Ci(e,!1,$l,Wl,Uo)}function Wo(e){return Ci(e,!0,Fl,Yl,Bo)}function Ci(e,t,n,r,i){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function on(e){return pn(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function pn(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Yo(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Xl(e){return Object.isExtensible(e)&&Co(e,"__v_skip",!0),e}const gn=e=>ie(e)?hr(e):e,Ri=e=>ie(e)?Wo(e):e;class Ko{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ki(()=>t(this._value),()=>Gn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=G(this);return(!t._cacheable||t.effect.dirty)&&ht(t._value,t._value=t.effect.run())&&Gn(t,4),Go(t),t.effect._dirtyLevel>=2&&Gn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ql(e,t,n=!1){let r,i;const a=B(e);return a?(r=e,i=Ce):(r=e.get,i=e.set),new Ko(r,i,a||!i,n)}function Go(e){var t;ut&&St&&(e=G(e),Lo(St,(t=e.dep)!=null?t:e.dep=Fo(()=>e.dep=void 0,e instanceof Ko?e:void 0)))}function Gn(e,t=4,n){e=G(e);const r=e.dep;r&&jo(r,t)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function Jl(e){return qo(e,!1)}function Zl(e){return qo(e,!0)}function qo(e,t){return Ae(e)?e:new ec(e,t)}class ec{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:gn(t)}get value(){return Go(this),this._value}set value(t){const n=this.__v_isShallow||tr(t)||pn(t);t=n?t:G(t),ht(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:gn(t),Gn(this,4))}}function Bt(e){return Ae(e)?e.value:e}const tc={get:(e,t,n)=>Bt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xo(e){return on(e)?e:new Proxy(e,tc)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dt(e,t,n,r){try{return r?e(...r):e()}catch(i){pr(i,t,n)}}function Le(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&So(i)&&i.catch(a=>{pr(a,t,n)}),i}if(D(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Le(e[a],t,n,r));return i}}function pr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){bt(),dt(l,null,10,[e,o,s]),yt();return}}nc(e,n,i,r)}function nc(e,t,n,r=!0){console.error(e)}let vn=!1,qr=!1;const be=[];let Be=0;const Vt=[];let st=null,Et=0;const Qo=Promise.resolve();let Ii=null;function Jo(e){const t=Ii||Qo;return e?t.then(this?e.bind(this):e):t}function rc(e){let t=Be+1,n=be.length;for(;t<n;){const r=t+n>>>1,i=be[r],a=bn(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Ti(e){(!be.length||!be.includes(e,vn&&e.allowRecurse?Be+1:Be))&&(e.id==null?be.push(e):be.splice(rc(e.id),0,e),Zo())}function Zo(){!vn&&!qr&&(qr=!0,Ii=Qo.then(ts))}function ic(e){const t=be.indexOf(e);t>Be&&be.splice(t,1)}function ac(e){D(e)?Vt.push(...e):(!st||!st.includes(e,e.allowRecurse?Et+1:Et))&&Vt.push(e),Zo()}function da(e,t,n=vn?Be+1:0){for(;n<be.length;n++){const r=be[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;be.splice(n,1),n--,r()}}}function es(e){if(Vt.length){const t=[...new Set(Vt)].sort((n,r)=>bn(n)-bn(r));if(Vt.length=0,st){st.push(...t);return}for(st=t,Et=0;Et<st.length;Et++)st[Et]();st=null,Et=0}}const bn=e=>e.id==null?1/0:e.id,oc=(e,t)=>{const n=bn(e)-bn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ts(e){qr=!1,vn=!0,be.sort(oc);try{for(Be=0;Be<be.length;Be++){const t=be[Be];t&&t.active!==!1&&dt(t,null,14)}}finally{Be=0,be.length=0,es(),vn=!1,Ii=null,(be.length||Vt.length)&&ts()}}function sc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||re;h&&(i=n.map(g=>se(g)?g.trim():g)),m&&(i=n.map(_l))}let s,l=r[s=Or(t)]||r[s=Or(We(t))];!l&&a&&(l=r[s=Or(Xt(t))]),l&&Le(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(f,e,6,i)}}function ns(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=ns(f,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ie(e)&&r.set(e,null),null):(D(a)?a.forEach(l=>o[l]=null):me(o,a),ie(e)&&r.set(e,o),o)}function gr(e,t){return!e||!cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Xt(t))||Y(e,t))}let Te=null,vr=null;function nr(e){const t=Te;return Te=e,vr=e&&e.type.__scopeId||null,t}function rs(e){vr=e}function is(){vr=null}function as(e,t=Te,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ea(-1);const a=nr(t);let o;try{o=e(...i)}finally{nr(a),r._d&&Ea(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:f,renderCache:c,props:m,data:h,setupState:g,ctx:S,inheritAttrs:R}=e,F=nr(e);let y,w;try{if(n.shapeFlag&4){const z=i||r,V=z;y=Ue(f.call(V,z,c,m,g,h,S)),w=s}else{const z=t;y=Ue(z.length>1?z(m,{attrs:s,slots:o,emit:l}):z(m,null)),w=t.props?s:lc(s)}}catch(z){fn.length=0,pr(z,e,1),y=de(Ct)}let C=y;if(w&&R!==!1){const z=Object.keys(w),{shapeFlag:V}=C;z.length&&V&7&&(a&&z.some(yi)&&(w=cc(w,a)),C=Yt(C,w,!1,!0))}return n.dirs&&(C=Yt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,nr(F),y}const lc=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},cc=(e,t)=>{const n={};for(const r in e)(!yi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ma(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!gr(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ma(r,o,f):!0:!!o;return!1}function ma(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!gr(n,a))return!0}return!1}function uc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const dc="components";function Ir(e,t){return hc(dc,e,!0,t)||e}const mc=Symbol.for("v-ndc");function hc(e,t,n=!0,r=!1){const i=Te||ye;if(i){const a=i.type;{const s=df(a,!1);if(s&&(s===t||s===We(t)||s===dr(We(t))))return a}const o=ha(i[e]||a[e],t)||ha(i.appContext[e],t);return!o&&r?a:o}}function ha(e,t){return e&&(e[t]||e[We(t)]||e[dr(We(t))])}const pc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):ac(e)}const vc=Symbol.for("v-scx"),bc=()=>Xe(vc),$n={};function sn(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=re){if(t&&a){const $=t;t=(...Z)=>{$(...Z),V()}}const l=ye,f=$=>r===!0?$:$t($,r===!1?1:void 0);let c,m=!1,h=!1;if(Ae(e)?(c=()=>e.value,m=tr(e)):on(e)?(c=()=>f(e),m=!0):D(e)?(h=!0,m=e.some($=>on($)||tr($)),c=()=>e.map($=>{if(Ae($))return $.value;if(on($))return f($);if(B($))return dt($,l,2)})):B(e)?t?c=()=>dt(e,l,2):c=()=>(g&&g(),Le(e,l,3,[S])):c=Ce,t&&r){const $=c;c=()=>$t($())}let g,S=$=>{g=C.onStop=()=>{dt($,l,4),g=C.onStop=void 0}},R;if(wr)if(S=Ce,t?n&&Le(t,l,3,[c(),h?[]:void 0,S]):c(),i==="sync"){const $=bc();R=$.__watcherHandles||($.__watcherHandles=[])}else return Ce;let F=h?new Array(e.length).fill($n):$n;const y=()=>{if(!(!C.active||!C.dirty))if(t){const $=C.run();(r||m||(h?$.some((Z,pe)=>ht(Z,F[pe])):ht($,F)))&&(g&&g(),Le(t,l,3,[$,F===$n?void 0:h&&F[0]===$n?[]:F,S]),F=$)}else C.run()};y.allowRecurse=!!t;let w;i==="sync"?w=y:i==="post"?w=()=>Ee(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>Ti(y));const C=new ki(c,Ce,w),z=Rl(),V=()=>{C.stop(),z&&_i(z.effects,C)};return t?n?y():F=C.run():i==="post"?Ee(C.run.bind(C),l&&l.suspense):C.run(),R&&R.push(V),V}function yc(e,t,n){const r=this.proxy,i=se(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let a;B(t)?a=t:(a=t.handler,n=t);const o=On(this),s=os(i,a.bind(r),n);return o(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $t(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ae(e))$t(e.value,t,n);else if(D(e))for(let r=0;r<e.length;r++)$t(e[r],t,n);else if(Ao(e)||Ut(e))e.forEach(r=>{$t(r,t,n)});else if(Po(e))for(const r in e)$t(e[r],t,n);return e}function wt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(bt(),Le(l,n,8,[e.el,s,e,t]),yt())}}/*! #__NO_SIDE_EFFECTS__ */function br(e,t){return B(e)?me({name:e.name},t,{setup:e}):e}const qn=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function _c(e,t){cs(e,"a",t)}function wc(e,t){cs(e,"da",t)}function cs(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(yr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ls(i.parent.vnode)&&xc(r,t,n,i),i=i.parent}}function xc(e,t,n,r){const i=yr(t,e,r,!0);fs(()=>{_i(r[t],i)},n)}function yr(e,t,n=ye,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;bt();const s=On(n),l=Le(t,n,e,o);return s(),yt(),l});return r?i.unshift(a):i.push(a),a}}const et=e=>(t,n=ye)=>(!wr||e==="sp")&&yr(e,(...r)=>t(...r),n),Ec=et("bm"),kc=et("m"),Ac=et("bu"),Sc=et("u"),Oc=et("bum"),fs=et("um"),Pc=et("sp"),Cc=et("rtg"),Rc=et("rtc");function Ic(e,t=ye){yr("ec",e,t)}function Tc(e,t,n,r){let i;const a=n;if(D(e)||se(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a)}else if(ie(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a)}}else i=[];return i}const Xr=e=>e?As(e)?ji(e)||e.proxy:Xr(e.parent):null,ln=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ti(e.update)}),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>yc.bind(e)}),Tr=(e,t)=>e!==re&&!e.__isScriptSetup&&Y(e,t),Nc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(i!==re&&Y(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,a[t];if(n!==re&&Y(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const c=ln[t];let m,h;if(c)return t==="$attrs"&&ke(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==re&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Tr(i,t)?(i[t]=n,!0):r!==re&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==re&&Y(e,o)||Tr(t,o)||(s=a[0])&&Y(s,o)||Y(r,o)||Y(ln,o)||Y(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function pa(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qr=!0;function Mc(e){const t=Ni(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:S,activated:R,deactivated:F,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:z,render:V,renderTracked:$,renderTriggered:Z,errorCaptured:pe,serverPrefetch:ge,expose:Pe,inheritAttrs:nt,components:_t,directives:Fe,filters:Jt}=t;if(f&&Lc(f,r,null),o)for(const Q in o){const K=o[Q];B(K)&&(r[Q]=K.bind(n))}if(i){const Q=i.call(n,n);ie(Q)&&(e.data=hr(Q))}if(Qr=!0,a)for(const Q in a){const K=a[Q],Ye=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):Ce,rt=!B(K)&&B(K.set)?K.set.bind(n):Ce,$e=he({get:Ye,set:rt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$e.value,set:we=>$e.value=we})}if(s)for(const Q in s)us(s[Q],r,n,Q);if(l){const Q=B(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{Xn(K,Q[K])})}c&&ga(c,e,"c");function ce(Q,K){D(K)?K.forEach(Ye=>Q(Ye.bind(n))):K&&Q(K.bind(n))}if(ce(Ec,m),ce(kc,h),ce(Ac,g),ce(Sc,S),ce(_c,R),ce(wc,F),ce(Ic,pe),ce(Rc,$),ce(Cc,Z),ce(Oc,w),ce(fs,z),ce(Pc,ge),D(Pe))if(Pe.length){const Q=e.exposed||(e.exposed={});Pe.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:Ye=>n[K]=Ye})})}else e.exposed||(e.exposed={});V&&e.render===Ce&&(e.render=V),nt!=null&&(e.inheritAttrs=nt),_t&&(e.components=_t),Fe&&(e.directives=Fe)}function Lc(e,t,n=Ce){D(e)&&(e=Jr(e));for(const r in e){const i=e[r];let a;ie(i)?"default"in i?a=Xe(i.from||r,i.default,!0):a=Xe(i.from||r):a=Xe(i),Ae(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ga(e,t,n){Le(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function us(e,t,n,r){const i=r.includes(".")?ss(n,r):()=>n[r];if(se(e)){const a=t[e];B(a)&&sn(i,a)}else if(B(e))sn(i,e.bind(n));else if(ie(e))if(D(e))e.forEach(a=>us(a,t,n,r));else{const a=B(e.handler)?e.handler.bind(n):t[e.handler];B(a)&&sn(i,a,e)}}function Ni(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>rr(l,f,o,!0)),rr(l,t,o)),ie(t)&&a.set(t,l),l}function rr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&rr(e,a,n,!0),i&&i.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=jc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const jc={data:va,props:ba,emits:ba,methods:nn,computed:nn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:nn,directives:nn,watch:$c,provide:va,inject:Fc};function va(e,t){return t?e?function(){return me(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return nn(Jr(e),Jr(t))}function Jr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function nn(e,t){return e?me(Object.create(null),e,t):t}function ba(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:me(Object.create(null),pa(e),pa(t??{})):t}function $c(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function ds(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zc=0;function Hc(e,t){return function(r,i=null){B(r)||(r=me({},r)),i!=null&&!ie(i)&&(i=null);const a=ds(),o=new WeakSet;let s=!1;const l=a.app={_uid:zc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:hf,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,c){return c?(a.components[f]=c,l):a.components[f]},directive(f,c){return c?(a.directives[f]=c,l):a.directives[f]},mount(f,c,m){if(!s){const h=de(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,ji(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return a.provides[f]=c,l},runWithContext(f){const c=cn;cn=l;try{return f()}finally{cn=c}}};return l}}let cn=null;function Xn(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=ye||Te;if(r||cn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:cn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}const ms={},hs=()=>Object.create(ms),ps=e=>Object.getPrototypeOf(e)===ms;function Dc(e,t,n,r=!1){const i={},a=hs();e.propsDefaults=Object.create(null),gs(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Vo(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Uc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=G(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(gr(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const S=We(h);i[S]=Zr(l,s,S,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{gs(e,t,i,a)&&(f=!0);let c;for(const m in s)(!t||!Y(t,m)&&((c=Xt(m))===m||!Y(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=Zr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!Y(t,m))&&(delete a[m],f=!0)}f&&qe(e.attrs,"set","")}function gs(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(an(l))continue;const f=t[l];let c;i&&Y(i,c=We(l))?!a||!a.includes(c)?n[c]=f:(s||(s={}))[c]=f:gr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=G(n),f=s||re;for(let c=0;c<a.length;c++){const m=a[c];n[m]=Zr(i,l,m,f[m],e,!Y(f,m))}}return o}function Zr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=On(i);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function vs(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!B(e)){const c=m=>{l=!0;const[h,g]=vs(m,t,!0);me(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ie(e)&&r.set(e,Dt),Dt;if(D(a))for(let c=0;c<a.length;c++){const m=We(a[c]);ya(m)&&(o[m]=re)}else if(a)for(const c in a){const m=We(c);if(ya(m)){const h=a[c],g=o[m]=D(h)||B(h)?{type:h}:me({},h);if(g){const S=xa(Boolean,g.type),R=xa(String,g.type);g[0]=S>-1,g[1]=R<0||S<R,(S>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return ie(e)&&r.set(e,f),f}function ya(e){return e[0]!=="$"&&!an(e)}function _a(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function wa(e,t){return _a(e)===_a(t)}function xa(e,t){return D(t)?t.findIndex(n=>wa(n,e)):B(t)&&wa(t,e)?0:-1}const bs=e=>e[0]==="_"||e==="$stable",Mi=e=>D(e)?e.map(Ue):[Ue(e)],Bc=(e,t,n)=>{if(t._n)return t;const r=as((...i)=>Mi(t(...i)),n);return r._c=!1,r},ys=(e,t,n)=>{const r=e._ctx;for(const i in e){if(bs(i))continue;const a=e[i];if(B(a))t[i]=Bc(i,a,r);else if(a!=null){const o=Mi(a);t[i]=()=>o}}},_s=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Vc=(e,t)=>{const n=e.slots=hs();if(e.vnode.shapeFlag&32){const r=t._;r?(me(n,t),Co(n,"_",r,!0)):ys(t,n)}else t&&_s(e,t)},Wc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(me(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ys(t,i)),o=t}else t&&(_s(e,t),o={default:1});if(a)for(const s in i)!bs(s)&&o[s]==null&&delete i[s]};function ei(e,t,n,r,i=!1){if(D(e)){e.forEach((h,g)=>ei(h,t&&(D(t)?t[g]:t),n,r,i));return}if(qn(r)&&!i)return;const a=r.shapeFlag&4?ji(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(se(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):Ae(f)&&(f.value=null)),B(l))dt(l,s,12,[o,c]);else{const h=se(l),g=Ae(l);if(h||g){const S=()=>{if(e.f){const R=h?Y(m,l)?m[l]:c[l]:l.value;i?D(R)&&_i(R,a):D(R)?R.includes(a)||R.push(a):h?(c[l]=[a],Y(m,l)&&(m[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(S.id=-1,Ee(S,n)):S()}}}const Ee=gc;function Yc(e){return Kc(e)}function Kc(e,t){const n=Ro();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Ce,insertStaticContent:S}=e,R=(u,d,p,_=null,v=null,k=null,P=void 0,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!en(u,d)&&(_=b(u),we(u,v,k,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:x,ref:N,shapeFlag:H}=d;switch(x){case _r:F(u,d,p,_);break;case Ct:y(u,d,p,_);break;case Mr:u==null&&w(d,p,_,P);break;case De:_t(u,d,p,_,v,k,P,E,A);break;default:H&1?V(u,d,p,_,v,k,P,E,A):H&6?Fe(u,d,p,_,v,k,P,E,A):(H&64||H&128)&&x.process(u,d,p,_,v,k,P,E,A,L)}N!=null&&v&&ei(N,u&&u.ref,k,d||u,!d)},F=(u,d,p,_)=>{if(u==null)r(d.el=s(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=l(d.children||""),p,_):d.el=u.el},w=(u,d,p,_)=>{[u.el,u.anchor]=S(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},V=(u,d,p,_,v,k,P,E,A)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?$(d,p,_,v,k,P,E,A):ge(u,d,v,k,P,E,A)},$=(u,d,p,_,v,k,P,E)=>{let A,x;const{props:N,shapeFlag:H,transition:j,dirs:U}=u;if(A=u.el=o(u.type,k,N&&N.is,N),H&8?c(A,u.children):H&16&&pe(u.children,A,null,_,v,Nr(u,k),P,E),U&&wt(u,null,_,"created"),Z(A,u,u.scopeId,P,_),N){for(const J in N)J!=="value"&&!an(J)&&a(A,J,null,N[J],k,u.children,_,v,ve);"value"in N&&a(A,"value",null,N.value,k),(x=N.onVnodeBeforeMount)&&He(x,_,u)}U&&wt(u,null,_,"beforeMount");const W=Gc(v,j);W&&j.beforeEnter(A),r(A,d,p),((x=N&&N.onVnodeMounted)||W||U)&&Ee(()=>{x&&He(x,_,u),W&&j.enter(A),U&&wt(u,null,_,"mounted")},v)},Z=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},pe=(u,d,p,_,v,k,P,E,A=0)=>{for(let x=A;x<u.length;x++){const N=u[x]=E?lt(u[x]):Ue(u[x]);R(null,N,d,p,_,v,k,P,E)}},ge=(u,d,p,_,v,k,P)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:x,dirs:N}=d;A|=u.patchFlag&16;const H=u.props||re,j=d.props||re;let U;if(p&&xt(p,!1),(U=j.onVnodeBeforeUpdate)&&He(U,p,d,u),N&&wt(d,u,p,"beforeUpdate"),p&&xt(p,!0),x?Pe(u.dynamicChildren,x,E,p,_,Nr(d,v),k):P||K(u,d,E,null,p,_,Nr(d,v),k,!1),A>0){if(A&16)nt(E,d,H,j,p,_,v);else if(A&2&&H.class!==j.class&&a(E,"class",null,j.class,v),A&4&&a(E,"style",H.style,j.style,v),A&8){const W=d.dynamicProps;for(let J=0;J<W.length;J++){const ne=W[J],fe=H[ne],Re=j[ne];(Re!==fe||ne==="value")&&a(E,ne,fe,Re,v,u.children,p,_,ve)}}A&1&&u.children!==d.children&&c(E,d.children)}else!P&&x==null&&nt(E,d,H,j,p,_,v);((U=j.onVnodeUpdated)||N)&&Ee(()=>{U&&He(U,p,d,u),N&&wt(d,u,p,"updated")},_)},Pe=(u,d,p,_,v,k,P)=>{for(let E=0;E<d.length;E++){const A=u[E],x=d[E],N=A.el&&(A.type===De||!en(A,x)||A.shapeFlag&70)?m(A.el):p;R(A,x,N,null,_,v,k,P,!0)}},nt=(u,d,p,_,v,k,P)=>{if(p!==_){if(p!==re)for(const E in p)!an(E)&&!(E in _)&&a(u,E,p[E],null,P,d.children,v,k,ve);for(const E in _){if(an(E))continue;const A=_[E],x=p[E];A!==x&&E!=="value"&&a(u,E,x,A,P,d.children,v,k,ve)}"value"in _&&a(u,"value",p.value,_.value,P)}},_t=(u,d,p,_,v,k,P,E,A)=>{const x=d.el=u?u.el:s(""),N=d.anchor=u?u.anchor:s("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:U}=d;U&&(E=E?E.concat(U):U),u==null?(r(x,p,_),r(N,p,_),pe(d.children||[],p,N,v,k,P,E,A)):H>0&&H&64&&j&&u.dynamicChildren?(Pe(u.dynamicChildren,j,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&ws(u,d,!0)):K(u,d,p,N,v,k,P,E,A)},Fe=(u,d,p,_,v,k,P,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,P,A):Jt(d,p,_,v,k,P,A):Nt(u,d,A)},Jt=(u,d,p,_,v,k,P)=>{const E=u.component=sf(u,_,v);if(ls(u)&&(E.ctx.renderer=L),lf(E),E.asyncDep){if(v&&v.registerDep(E,ce),!u.el){const A=E.subTree=de(Ct);y(null,A,d,p)}}else ce(E,u,d,p,v,k,P)},Nt=(u,d,p)=>{const _=d.component=u.component;if(fc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Q(_,d,p);return}else _.next=d,ic(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ce=(u,d,p,_,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:N,bu:H,u:j,parent:U,vnode:W}=u;{const jt=xs(u);if(jt){N&&(N.el=W.el,Q(u,N,P)),jt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let J=N,ne;xt(u,!1),N?(N.el=W.el,Q(u,N,P)):N=W,H&&Pr(H),(ne=N.props&&N.props.onVnodeBeforeUpdate)&&He(ne,U,N,W),xt(u,!0);const fe=Rr(u),Re=u.subTree;u.subTree=fe,R(Re,fe,m(Re.el),b(Re),u,v,k),N.el=fe.el,J===null&&uc(u,fe.el),j&&Ee(j,v),(ne=N.props&&N.props.onVnodeUpdated)&&Ee(()=>He(ne,U,N,W),v)}else{let N;const{el:H,props:j}=d,{bm:U,m:W,parent:J}=u,ne=qn(d);if(xt(u,!1),U&&Pr(U),!ne&&(N=j&&j.onVnodeBeforeMount)&&He(N,J,d),xt(u,!0),H&&ae){const fe=()=>{u.subTree=Rr(u),ae(H,u.subTree,u,v,null)};ne?d.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=Rr(u);R(null,fe,p,_,u,v,k),d.el=fe.el}if(W&&Ee(W,v),!ne&&(N=j&&j.onVnodeMounted)){const fe=d;Ee(()=>He(N,J,fe),v)}(d.shapeFlag&256||J&&qn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Ee(u.a,v),u.isMounted=!0,d=p=_=null}},A=u.effect=new ki(E,Ce,()=>Ti(x),u.scope),x=u.update=()=>{A.dirty&&A.run()};x.id=u.uid,xt(u,!0),x()},Q=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Uc(u,d.props,_,p),Wc(u,d.children,p),bt(),da(u),yt()},K=(u,d,p,_,v,k,P,E,A=!1)=>{const x=u&&u.children,N=u?u.shapeFlag:0,H=d.children,{patchFlag:j,shapeFlag:U}=d;if(j>0){if(j&128){rt(x,H,p,_,v,k,P,E,A);return}else if(j&256){Ye(x,H,p,_,v,k,P,E,A);return}}U&8?(N&16&&ve(x,v,k),H!==x&&c(p,H)):N&16?U&16?rt(x,H,p,_,v,k,P,E,A):ve(x,v,k,!0):(N&8&&c(p,""),U&16&&pe(H,p,_,v,k,P,E,A))},Ye=(u,d,p,_,v,k,P,E,A)=>{u=u||Dt,d=d||Dt;const x=u.length,N=d.length,H=Math.min(x,N);let j;for(j=0;j<H;j++){const U=d[j]=A?lt(d[j]):Ue(d[j]);R(u[j],U,p,null,v,k,P,E,A)}x>N?ve(u,v,k,!0,!1,H):pe(d,p,_,v,k,P,E,A,H)},rt=(u,d,p,_,v,k,P,E,A)=>{let x=0;const N=d.length;let H=u.length-1,j=N-1;for(;x<=H&&x<=j;){const U=u[x],W=d[x]=A?lt(d[x]):Ue(d[x]);if(en(U,W))R(U,W,p,null,v,k,P,E,A);else break;x++}for(;x<=H&&x<=j;){const U=u[H],W=d[j]=A?lt(d[j]):Ue(d[j]);if(en(U,W))R(U,W,p,null,v,k,P,E,A);else break;H--,j--}if(x>H){if(x<=j){const U=j+1,W=U<N?d[U].el:_;for(;x<=j;)R(null,d[x]=A?lt(d[x]):Ue(d[x]),p,W,v,k,P,E,A),x++}}else if(x>j)for(;x<=H;)we(u[x],v,k,!0),x++;else{const U=x,W=x,J=new Map;for(x=W;x<=j;x++){const Se=d[x]=A?lt(d[x]):Ue(d[x]);Se.key!=null&&J.set(Se.key,x)}let ne,fe=0;const Re=j-W+1;let jt=!1,ta=0;const Zt=new Array(Re);for(x=0;x<Re;x++)Zt[x]=0;for(x=U;x<=H;x++){const Se=u[x];if(fe>=Re){we(Se,v,k,!0);continue}let ze;if(Se.key!=null)ze=J.get(Se.key);else for(ne=W;ne<=j;ne++)if(Zt[ne-W]===0&&en(Se,d[ne])){ze=ne;break}ze===void 0?we(Se,v,k,!0):(Zt[ze-W]=x+1,ze>=ta?ta=ze:jt=!0,R(Se,d[ze],p,null,v,k,P,E,A),fe++)}const na=jt?qc(Zt):Dt;for(ne=na.length-1,x=Re-1;x>=0;x--){const Se=W+x,ze=d[Se],ra=Se+1<N?d[Se+1].el:_;Zt[x]===0?R(null,ze,p,ra,v,k,P,E,A):jt&&(ne<0||x!==na[ne]?$e(ze,p,ra,2):ne--)}}},$e=(u,d,p,_,v=null)=>{const{el:k,type:P,transition:E,children:A,shapeFlag:x}=u;if(x&6){$e(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){P.move(u,d,p,L);return}if(P===De){r(k,d,p);for(let H=0;H<A.length;H++)$e(A[H],d,p,_);r(u.anchor,d,p);return}if(P===Mr){C(u,d,p);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),Ee(()=>E.enter(k),v);else{const{leave:H,delayLeave:j,afterLeave:U}=E,W=()=>r(k,d,p),J=()=>{H(k,()=>{W(),U&&U()})};j?j(k,W,J):J()}else r(k,d,p)},we=(u,d,p,_=!1,v=!1)=>{const{type:k,props:P,ref:E,children:A,dynamicChildren:x,shapeFlag:N,patchFlag:H,dirs:j}=u;if(E!=null&&ei(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&j,W=!qn(u);let J;if(W&&(J=P&&P.onVnodeBeforeUnmount)&&He(J,d,u),N&6)Tn(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}U&&wt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):x&&(k!==De||H>0&&H&64)?ve(x,d,p,!1,!0):(k===De&&H&384||!v&&N&16)&&ve(A,d,p),_&&Mt(u)}(W&&(J=P&&P.onVnodeUnmounted)||U)&&Ee(()=>{J&&He(J,d,u),U&&wt(u,null,d,"unmounted")},p)},Mt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===De){Lt(p,_);return}if(d===Mr){z(u);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,A=()=>P(p,k);E?E(u.el,k,A):A()}else k()},Lt=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},Tn=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:P,um:E}=u;_&&Pr(_),v.stop(),k&&(k.active=!1,we(P,u,d,p)),E&&Ee(E,d),Ee(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ve=(u,d,p,_=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)we(u[P],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const O=(u,d,p)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,da(),es(),T=!1),d._vnode=u},L={p:R,um:we,m:$e,r:Mt,mt:Jt,mc:pe,pc:K,pbc:Pe,n:b,o:e};let q,ae;return{render:O,hydrate:q,createApp:Hc(O,q)}}function Nr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Gc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ws(e,t,n=!1){const r=e.children,i=t.children;if(D(r)&&D(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=lt(i[a]),s.el=o.el),n||ws(o,s)),s.type===_r&&(s.el=o.el)}}function qc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function xs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xs(t)}const Xc=e=>e.__isTeleport,De=Symbol.for("v-fgt"),_r=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Mr=Symbol.for("v-stc"),fn=[];let Ne=null;function mt(e=!1){fn.push(Ne=e?null:[])}function Qc(){fn.pop(),Ne=fn[fn.length-1]||null}let yn=1;function Ea(e){yn+=e}function Es(e){return e.dynamicChildren=yn>0?Ne||Dt:null,Qc(),yn>0&&Ne&&Ne.push(e),e}function Pt(e,t,n,r,i,a){return Es(ue(e,t,n,r,i,a,!0))}function Jc(e,t,n,r,i){return Es(de(e,t,n,r,i,!0))}function ti(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const ks=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||Ae(e)||B(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function ue(e,t=null,n=null,r=0,i=null,a=e===De?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ks(t),ref:t&&Qn(t),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return s?(Li(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),yn>0&&!o&&Ne&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ne.push(l),l}const de=Zc;function Zc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===mc)&&(e=Ct),ti(e)){const s=Yt(e,t,!0);return n&&Li(s,n),yn>0&&!a&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(mf(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Ei(s)),ie(l)&&(Yo(l)&&!D(l)&&(l=me({},l)),t.style=xi(l))}const o=se(e)?1:pc(e)?128:Xc(e)?64:ie(e)?4:B(e)?2:0;return ue(e,t,n,r,i,o,a,!0)}function ef(e){return e?Yo(e)||ps(e)?me({},e):e:null}function Yt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:o,children:s,transition:l}=e,f=t?rf(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ks(f),ref:t&&t.ref?n&&a?D(a)?a.concat(Qn(t)):[a,Qn(t)]:Qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(c.transition=l.clone(c)),c}function tf(e=" ",t=0){return de(_r,null,e,t)}function nf(e="",t=!1){return t?(mt(),Jc(Ct,null,e)):de(Ct,null,e)}function Ue(e){return e==null||typeof e=="boolean"?de(Ct):D(e)?de(De,null,e.slice()):typeof e=="object"?lt(e):de(_r,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function Li(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Li(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!ps(t)?t._ctx=Te:i===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[tf(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ei([t.class,r.class]));else if(i==="style")t.style=xi([t.style,r.style]);else if(cr(i)){const a=t[i],o=r[i];o&&a!==o&&!(D(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function He(e,t,n,r=null){Le(e,t,7,[n,r])}const af=ds();let of=0;function sf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||af,a={uid:of++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vs(r,i),emitsOptions:ns(r,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=sc.bind(null,a),e.ce&&e.ce(a),a}let ye=null,ir,ni;{const e=Ro(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};ir=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),ni=t("__VUE_SSR_SETTERS__",n=>wr=n)}const On=e=>{const t=ye;return ir(e),e.scope.on(),()=>{e.scope.off(),ir(t)}},ka=()=>{ye&&ye.scope.off(),ir(null)};function As(e){return e.vnode.shapeFlag&4}let wr=!1;function lf(e,t=!1){t&&ni(t);const{props:n,children:r}=e.vnode,i=As(e);Dc(e,n,i,t),Vc(e,r);const a=i?cf(e,t):void 0;return t&&ni(!1),a}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Nc);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?uf(e):null,a=On(e);bt();const o=dt(r,e,0,[e.props,i]);if(yt(),a(),So(o)){if(o.then(ka,ka),t)return o.then(s=>{Aa(e,s,t)}).catch(s=>{pr(s,e,0)});e.asyncDep=o}else Aa(e,o,t)}else Ss(e,t)}function Aa(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Xo(t)),Ss(e,n)}let Sa;function Ss(e,t,n){const r=e.type;if(!e.render){if(!t&&Sa&&!r.render){const i=r.template||Ni(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=me(me({isCustomElement:a,delimiters:s},o),l);r.render=Sa(i,f)}}e.render=r.render||Ce}{const i=On(e);bt();try{Mc(e)}finally{yt(),i()}}}const ff={get(e,t){return ke(e,"get",""),e[t]}};function uf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ff),slots:e.slots,emit:e.emit,expose:t}}function ji(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xo(Xl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ln)return ln[n](e)},has(t,n){return n in t||n in ln}}))}function df(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function mf(e){return B(e)&&"__vccOpts"in e}const he=(e,t)=>Ql(e,t,wr);function Fi(e,t,n){const r=arguments.length;return r===2?ie(t)&&!D(t)?ti(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ti(n)&&(n=[n]),de(e,t,n))}const hf="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pf="http://www.w3.org/2000/svg",gf="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,Oa=ct&&ct.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ct.createElementNS(pf,e):t==="mathml"?ct.createElementNS(gf,e):ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Oa.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Oa.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bf=Symbol("_vtc");function yf(e,t,n){const r=e[bf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pa=Symbol("_vod"),_f=Symbol("_vsh"),wf=Symbol(""),xf=/(^|;)\s*display\s*:/;function Ef(e,t,n){const r=e.style,i=se(n);let a=!1;if(n&&!i){if(t)if(se(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Jn(r,s,"")}else for(const o in t)n[o]==null&&Jn(r,o,"");for(const o in n)o==="display"&&(a=!0),Jn(r,o,n[o])}else if(i){if(t!==n){const o=r[wf];o&&(n+=";"+o),r.cssText=n,a=xf.test(n)}}else t&&e.removeAttribute("style");Pa in e&&(e[Pa]=a?r.display:"",e[_f]&&(r.display="none"))}const Ca=/\s*!important$/;function Jn(e,t,n){if(D(n))n.forEach(r=>Jn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);Ca.test(n)?e.setProperty(Xt(r),n.replace(Ca,""),"important"):e[r]=n}}const Ra=["Webkit","Moz","ms"],Lr={};function kf(e,t){const n=Lr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Lr[t]=r;r=dr(r);for(let i=0;i<Ra.length;i++){const a=Ra[i]+r;if(a in e)return Lr[t]=a}return t}const Ia="http://www.w3.org/1999/xlink";function Af(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ia,t.slice(6,t.length)):e.setAttributeNS(Ia,t,n);else{const a=Sl(t);n==null||a&&!Io(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Sf(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Io(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Of(e,t,n,r){e.addEventListener(t,n,r)}function Pf(e,t,n,r){e.removeEventListener(t,n,r)}const Ta=Symbol("_vei");function Cf(e,t,n,r,i=null){const a=e[Ta]||(e[Ta]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Rf(t);if(r){const f=a[t]=Nf(r,i);Of(e,s,f,l)}else o&&(Pf(e,s,o,l),a[t]=void 0)}}const Na=/(?:Once|Passive|Capture)$/;function Rf(e){let t;if(Na.test(e)){t={};let r;for(;r=e.match(Na);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let jr=0;const If=Promise.resolve(),Tf=()=>jr||(If.then(()=>jr=0),jr=Date.now());function Nf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Mf(r,n.value),t,5,[r])};return n.value=e,n.attached=Tf(),n}function Mf(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ma=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Lf=(e,t,n,r,i,a,o,s,l)=>{const f=i==="svg";t==="class"?yf(e,r,f):t==="style"?Ef(e,n,r):cr(t)?yi(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,f))?Sf(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,f))};function jf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ma(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ma(t)&&se(n)?!1:t in e}const Ff=me({patchProp:Lf},vf);let La;function $f(){return La||(La=Yc(Ff))}const zf=(...e)=>{const t=$f().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Df(r);if(!i)return;const a=t._component;!B(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Hf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Hf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Df(e){return se(e)?document.querySelector(e):e}const $i=e=>(rs("data-v-0e78e79c"),e=e(),is(),e),Uf={class:"container"},Bf={class:"left"},Vf={class:"branding p-md"},Wf=$i(()=>ue("div",{class:"text-md"},"jemberton",-1)),Yf={class:"nav grow"},Kf={key:0},Gf={class:"text-lg p-md foot"},qf={href:"https://github.com/jemberton",title:"jemberton's github"},Xf={class:"right grow"},Qf=$i(()=>ue("div",{class:"menu p-md"},null,-1)),Jf={class:"main grow"},Zf=$i(()=>ue("div",{class:"foot p-md"},null,-1)),eu=br({__name:"App",setup(e){const t=[{title:"home",icon:"fa-solid fa-house fa-fw",url:"/"},{title:"guides",icon:"fa-solid fa-book-bookmark fa-fw",url:"/guides"},{title:"projects",icon:"fa-solid fa-folder-tree fa-fw",url:"/projects"},{title:"contact",icon:"fa-solid fa-address-card fa-fw",url:"/contact"}];return(n,r)=>{const i=Ir("font-awesome-icon"),a=Ir("RouterLink"),o=Ir("RouterView");return mt(),Pt("div",Uf,[ue("div",Bf,[ue("div",Vf,[de(i,{icon:["fas","code"],class:"text-xl"}),Wf]),ue("div",Yf,[(mt(),Pt(De,null,Tc(t,s=>de(a,{to:s.url,class:"nav-item p-sm"},{default:as(()=>[s.icon!==""?(mt(),Pt("div",Kf,[de(i,{icon:s.icon},null,8,["icon"])])):nf("",!0),ue("div",null,Ol(s.title),1)]),_:2},1032,["to"])),64))]),ue("div",Gf,[ue("a",qf,[de(i,{icon:"fa-brands fa-github"})])])]),ue("div",Xf,[Qf,ue("div",Jf,[de(o)]),Zf])])}}}),Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},tu=Pn(eu,[["__scopeId","data-v-0e78e79c"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof document<"u";function nu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Fr(e,t){const n={};for(const r in t){const i=t[r];n[r]=je(i)?i.map(e):e(i)}return n}const un=()=>{},je=Array.isArray,Os=/#/g,ru=/&/g,iu=/\//g,au=/=/g,ou=/\?/g,Ps=/\+/g,su=/%5B/g,lu=/%5D/g,Cs=/%5E/g,cu=/%60/g,Rs=/%7B/g,fu=/%7C/g,Is=/%7D/g,uu=/%20/g;function zi(e){return encodeURI(""+e).replace(fu,"|").replace(su,"[").replace(lu,"]")}function du(e){return zi(e).replace(Rs,"{").replace(Is,"}").replace(Cs,"^")}function ri(e){return zi(e).replace(Ps,"%2B").replace(uu,"+").replace(Os,"%23").replace(ru,"%26").replace(cu,"`").replace(Rs,"{").replace(Is,"}").replace(Cs,"^")}function mu(e){return ri(e).replace(au,"%3D")}function hu(e){return zi(e).replace(Os,"%23").replace(ou,"%3F")}function pu(e){return e==null?"":hu(e).replace(iu,"%2F")}function _n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const gu=/\/$/,vu=e=>e.replace(gu,"");function $r(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=wu(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:_n(o)}}function bu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ja(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function yu(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kt(t.matched[r],n.matched[i])&&Ts(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ts(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_u(e[n],t[n]))return!1;return!0}function _u(e,t){return je(e)?Fa(e,t):je(t)?Fa(t,e):e===t}function Fa(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function wu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var wn;(function(e){e.pop="pop",e.push="push"})(wn||(wn={}));var dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dn||(dn={}));function xu(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vu(e)}const Eu=/^[^#]+#/;function ku(e,t){return e.replace(Eu,"#")+t}function Au(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const xr=()=>({left:window.scrollX,top:window.scrollY});function Su(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Au(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $a(e,t){return(history.state?history.state.position-t:-1)+e}const ii=new Map;function Ou(e,t){ii.set(e,t)}function Pu(e){const t=ii.get(e);return ii.delete(e),t}let Cu=()=>location.protocol+"//"+location.host;function Ns(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),ja(l,"")}return ja(n,e)+r+i}function Ru(e,t,n,r){let i=[],a=[],o=null;const s=({state:h})=>{const g=Ns(e,location),S=n.value,R=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===S){o=null;return}F=R?h.position-R.position:0}else r(g);i.forEach(y=>{y(n.value,S,{delta:F,type:wn.pop,direction:F?F>0?dn.forward:dn.back:dn.unknown})})};function l(){o=n.value}function f(h){i.push(h);const g=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return a.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:xr()}),"")}function m(){for(const h of a)h();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function za(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?xr():null}}function Iu(e){const{history:t,location:n}=window,r={value:Ns(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Cu()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=X({},t.state,za(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,f){const c=X({},i.value,t.state,{forward:l,scroll:xr()});a(c.current,c,!0);const m=X({},za(r.value,l,null),{position:c.position+1},f);a(l,m,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function Tu(e){e=xu(e);const t=Iu(e),n=Ru(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=X({location:"",base:e,go:r,createHref:ku.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Nu(e){return typeof e=="string"||e&&typeof e=="object"}function Ms(e){return typeof e=="string"||typeof e=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ls=Symbol("");var Ha;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ha||(Ha={}));function Gt(e,t){return X(new Error,{type:e,[Ls]:!0},t)}function Ke(e,t){return e instanceof Error&&Ls in e&&(t==null||!!(e.type&t))}const Da="[^/]+?",Mu={sensitive:!1,strict:!1,start:!0,end:!0},Lu=/[.+*?^${}()[\]/\\]/g;function ju(e,t){const n=X({},Mu,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(Lu,"\\$&"),g+=40;else if(h.type===1){const{value:S,repeatable:R,optional:F,regexp:y}=h;a.push({name:S,repeatable:R,optional:F});const w=y||Da;if(w!==Da){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${w}): `+z.message)}}let C=R?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=F&&f.length<2?`(?:/${C})`:"/"+C),F&&(C+="?"),i+=C,g+=20,F&&(g+=-8),R&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",S=a[h-1];m[S.name]=g&&S.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:S,repeatable:R,optional:F}=g,y=S in f?f[S]:"";if(je(y)&&!R)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const w=je(y)?y.join("/"):y;if(!w)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function $u(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Fu(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(Ua(r))return 1;if(Ua(i))return-1}return i.length-r.length}function Ua(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zu={type:0,value:""},Hu=/[a-zA-Z0-9_]/;function Du(e){if(!e)return[[]];if(e==="/")return[[zu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,f="",c="";function m(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Hu.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),i}function Uu(e,t,n){const r=ju(Du(e.path),n),i=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Bu(e,t){const n=[],r=new Map;t=Wa({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,S=Vu(c);S.aliasOf=h&&h.record;const R=Wa(t,c),F=[S];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)F.push(X({},S,{components:h?h.record.components:S.components,path:z,aliasOf:h?h.record:S}))}let y,w;for(const C of F){const{path:z}=C;if(m&&z[0]!=="/"){const V=m.record.path,$=V[V.length-1]==="/"?"":"/";C.path=m.record.path+(z&&$+z)}if(y=Uu(C,m,R),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Va(y)&&o(c.name)),S.children){const V=S.children;for(let $=0;$<V.length;$++)a(V[$],y,h&&h.children[$])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:un}function o(c){if(Ms(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&$u(c,n[m])>=0&&(c.record.path!==n[m].record.path||!js(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Va(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},S,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Gt(1,{location:c});R=h.record.name,g=X(Ba(m.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),c.params&&Ba(c.params,h.keys.map(w=>w.name))),S=h.stringify(g)}else if(c.path!=null)S=c.path,h=n.find(w=>w.re.test(S)),h&&(g=h.parse(S),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw Gt(1,{location:c,currentLocation:m});R=h.record.name,g=X({},m.params,c.params),S=h.stringify(g)}const F=[];let y=h;for(;y;)F.unshift(y.record),y=y.parent;return{name:R,path:S,params:g,matched:F,meta:Yu(F)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function Ba(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Va(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Wa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function js(e,t){return t.children.some(n=>n===e||js(e,n))}function Ku(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Ps," "),o=a.indexOf("="),s=_n(o<0?a:a.slice(0,o)),l=o<0?null:_n(a.slice(o+1));if(s in t){let f=t[s];je(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Ya(e){let t="";for(let n in e){const r=e[n];if(n=mu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(a=>a&&ri(a)):[r&&ri(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Gu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const qu=Symbol(""),Ka=Symbol(""),Hi=Symbol(""),Fs=Symbol(""),ai=Symbol("");function tn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const f=h=>{h===!1?l(Gt(4,{from:n,to:t})):h instanceof Error?l(h):Nu(h)?l(Gt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},c=a(()=>e.call(r&&r.instances[i],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>l(h))})}function zr(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Xu(l)){const c=(l.__vccOpts||l)[t];c&&a.push(ft(c,n,r,o,s,i))}else{let f=l();a.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=nu(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&ft(g,n,r,o,s,i)()}))}}return a}function Xu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ga(e){const t=Xe(Hi),n=Xe(Fs),r=he(()=>{const l=Bt(e.to);return t.resolve(l)}),i=he(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Kt.bind(null,c));if(h>-1)return h;const g=qa(l[f-2]);return f>1&&qa(c)===g&&m[m.length-1].path!==g?m.findIndex(Kt.bind(null,l[f-2])):h}),a=he(()=>i.value>-1&&ed(n.params,r.value.params)),o=he(()=>i.value>-1&&i.value===n.matched.length-1&&Ts(n.params,r.value.params));function s(l={}){return Zu(l)?t[Bt(e.replace)?"replace":"push"](Bt(e.to)).catch(un):Promise.resolve()}return{route:r,href:he(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const Qu=br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ga,setup(e,{slots:t}){const n=hr(Ga(e)),{options:r}=Xe(Hi),i=he(()=>({[Xa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Fi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Ju=Qu;function Zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ed(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!je(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xa=(e,t,n)=>e??t??n,td=br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(ai),i=he(()=>e.route||r.value),a=Xe(Ka,0),o=he(()=>{let f=Bt(a);const{matched:c}=i.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=he(()=>i.value.matched[o.value]);Xn(Ka,he(()=>o.value+1)),Xn(qu,s),Xn(ai,i);const l=Jl();return sn(()=>[l.value,s.value,e.name],([f,c,m],[h,g,S])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Kt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return Qa(n.default,{Component:h,route:f});const g=m.props[c],S=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Fi(h,X({},S,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return Qa(n.default,{Component:F,route:f})||F}}});function Qa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const nd=td;function rd(e){const t=Bu(e.routes,e),n=e.parseQuery||Ku,r=e.stringifyQuery||Ya,i=e.history,a=tn(),o=tn(),s=tn(),l=Zl(at);let f=at;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Fr.bind(null,b=>""+b),m=Fr.bind(null,pu),h=Fr.bind(null,_n);function g(b,T){let O,L;return Ms(b)?(O=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,O)}function S(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const d=$r(n,b,T.path),p=t.resolve({path:d.path},T),_=i.createHref(d.fullPath);return X(d,p,{params:h(p.params),hash:_n(d.hash),redirectedFrom:void 0,href:_})}let O;if(b.path!=null)O=X({},b,{path:$r(n,b.path,T.path).path});else{const d=X({},b.params);for(const p in d)d[p]==null&&delete d[p];O=X({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(O,T),q=b.hash||"";L.params=c(h(L.params));const ae=bu(r,X({},b,{hash:du(q),path:L.path})),u=i.createHref(ae);return X({fullPath:ae,hash:q,query:r===Ya?Gu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function w(b){return typeof b=="string"?$r(n,b,l.value.path):X({},b)}function C(b,T){if(f!==b)return Gt(8,{from:T,to:b})}function z(b){return Z(b)}function V(b){return z(X(w(b),{replace:!0}))}function $(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),X({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,T){const O=f=y(b),L=l.value,q=b.state,ae=b.force,u=b.replace===!0,d=$(O);if(d)return Z(X(w(d),{state:typeof d=="object"?X({},q,d.state):q,force:ae,replace:u}),T||O);const p=O;p.redirectedFrom=T;let _;return!ae&&yu(r,L,O)&&(_=Gt(16,{to:p,from:L}),$e(L,L,!0,!1)),(_?Promise.resolve(_):Pe(p,L)).catch(v=>Ke(v)?Ke(v,2)?v:rt(v):K(v,p,L)).then(v=>{if(v){if(Ke(v,2))return Z(X({replace:u},w(v.to),{state:typeof v.to=="object"?X({},q,v.to.state):q,force:ae}),T||p)}else v=_t(p,L,!0,u,q);return nt(p,L,v),v})}function pe(b,T){const O=C(b,T);return O?Promise.reject(O):Promise.resolve()}function ge(b){const T=Lt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Pe(b,T){let O;const[L,q,ae]=id(b,T);O=zr(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{O.push(ft(p,b,T))});const u=pe.bind(null,b,T);return O.push(u),ve(O).then(()=>{O=[];for(const d of a.list())O.push(ft(d,b,T));return O.push(u),ve(O)}).then(()=>{O=zr(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(p=>{O.push(ft(p,b,T))});return O.push(u),ve(O)}).then(()=>{O=[];for(const d of ae)if(d.beforeEnter)if(je(d.beforeEnter))for(const p of d.beforeEnter)O.push(ft(p,b,T));else O.push(ft(d.beforeEnter,b,T));return O.push(u),ve(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=zr(ae,"beforeRouteEnter",b,T,ge),O.push(u),ve(O))).then(()=>{O=[];for(const d of o.list())O.push(ft(d,b,T));return O.push(u),ve(O)}).catch(d=>Ke(d,8)?d:Promise.reject(d))}function nt(b,T,O){s.list().forEach(L=>ge(()=>L(b,T,O)))}function _t(b,T,O,L,q){const ae=C(b,T);if(ae)return ae;const u=T===at,d=Ft?history.state:{};O&&(L||u?i.replace(b.fullPath,X({scroll:u&&d&&d.scroll},q)):i.push(b.fullPath,q)),l.value=b,$e(b,T,O,u),rt()}let Fe;function Jt(){Fe||(Fe=i.listen((b,T,O)=>{if(!Tn.listening)return;const L=y(b),q=$(L);if(q){Z(X(q,{replace:!0}),L).catch(un);return}f=L;const ae=l.value;Ft&&Ou($a(ae.fullPath,O.delta),xr()),Pe(L,ae).catch(u=>Ke(u,12)?u:Ke(u,2)?(Z(u.to,L).then(d=>{Ke(d,20)&&!O.delta&&O.type===wn.pop&&i.go(-1,!1)}).catch(un),Promise.reject()):(O.delta&&i.go(-O.delta,!1),K(u,L,ae))).then(u=>{u=u||_t(L,ae,!1),u&&(O.delta&&!Ke(u,8)?i.go(-O.delta,!1):O.type===wn.pop&&Ke(u,20)&&i.go(-1,!1)),nt(L,ae,u)}).catch(un)}))}let Nt=tn(),ce=tn(),Q;function K(b,T,O){rt(b);const L=ce.list();return L.length?L.forEach(q=>q(b,T,O)):console.error(b),Promise.reject(b)}function Ye(){return Q&&l.value!==at?Promise.resolve():new Promise((b,T)=>{Nt.add([b,T])})}function rt(b){return Q||(Q=!b,Jt(),Nt.list().forEach(([T,O])=>b?O(b):T()),Nt.reset()),b}function $e(b,T,O,L){const{scrollBehavior:q}=e;if(!Ft||!q)return Promise.resolve();const ae=!O&&Pu($a(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return Jo().then(()=>q(b,T,ae)).then(u=>u&&Su(u)).catch(u=>K(u,b,T))}const we=b=>i.go(b);let Mt;const Lt=new Set,Tn={currentRoute:l,listening:!0,addRoute:g,removeRoute:S,hasRoute:F,getRoutes:R,resolve:y,options:e,push:z,replace:V,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ce.add,isReady:Ye,install(b){const T=this;b.component("RouterLink",Ju),b.component("RouterView",nd),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(l)}),Ft&&!Mt&&l.value===at&&(Mt=!0,z(i.location).catch(q=>{}));const O={};for(const q in at)Object.defineProperty(O,q,{get:()=>l.value[q],enumerable:!0});b.provide(Hi,T),b.provide(Fs,Vo(O)),b.provide(ai,l);const L=b.unmount;Lt.add(b),b.unmount=function(){Lt.delete(b),Lt.size<1&&(f=at,Fe&&Fe(),Fe=null,l.value=at,Mt=!1,Q=!1),L()}}};function ve(b){return b.reduce((T,O)=>T.then(()=>ge(O)),Promise.resolve())}return Tn}function id(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(f=>Kt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Kt(f,l))||i.push(l))}return[n,r,i]}const ad={},$s=e=>(rs("data-v-dd2b8812"),e=e(),is(),e),od={class:"sheet"},sd=$s(()=>ue("div",{class:"code p-md rounded-xs"},"jemberton@github ~$ whoami",-1)),ld=$s(()=>ue("div",{class:"font-retina"},[ue("p",null,"Hi there! My name is Josh. Welcome to my little corner of github."),ue("p",null,"I am currently working on this site ... things may be broken and incomplete."),ue("p",null,"I am planning to add my projects, interests, and general knowledge of experiences here.")],-1)),cd=[sd,ld];function fd(e,t){return mt(),Pt("div",od,cd)}const ud=Pn(ad,[["render",fd],["__scopeId","data-v-dd2b8812"]]),dd={},md={class:"sheet"};function hd(e,t){return mt(),Pt("div",md," guides will go here ... ")}const pd=Pn(dd,[["render",hd],["__scopeId","data-v-790240f4"]]),gd={},vd={class:"sheet"};function bd(e,t){return mt(),Pt("div",vd," projects go here ... ")}const yd=Pn(gd,[["render",bd],["__scopeId","data-v-ccd8e83b"]]),_d={},wd={class:"sheet"};function xd(e,t){return mt(),Pt("div",wd," When I'm ready ... I'll put my contact info here. Otherwise, try messaging through github. ")}const Ed=Pn(_d,[["render",xd],["__scopeId","data-v-be86191f"]]),kd=rd({history:Tu("/"),routes:[{path:"/",name:"home",component:ud},{path:"/guides",name:"guides",component:pd},{path:"/projects",name:"projects",component:yd},{path:"/contact",name:"contact",component:Ed}]});function Ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ja(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ja(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function Ad(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Od(e,t,n){return t&&Sd(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Di(e,t){return Cd(e)||Id(e,t)||zs(e,t)||Nd()}function Cn(e){return Pd(e)||Rd(e)||zs(e)||Td()}function Pd(e){if(Array.isArray(e))return oi(e)}function Cd(e){if(Array.isArray(e))return e}function Rd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Id(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function zs(e,t){if(e){if(typeof e=="string")return oi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oi(e,t)}}function oi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Td(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Za=function(){},Ui={},Hs={},Ds=null,Us={mark:Za,measure:Za};try{typeof window<"u"&&(Ui=window),typeof document<"u"&&(Hs=document),typeof MutationObserver<"u"&&(Ds=MutationObserver),typeof performance<"u"&&(Us=performance)}catch{}var Md=Ui.navigator||{},eo=Md.userAgent,to=eo===void 0?"":eo,pt=Ui,te=Hs,no=Ds,zn=Us;pt.document;var tt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Bs=~to.indexOf("MSIE")||~to.indexOf("Trident/"),Hn,Dn,Un,Bn,Vn,Qe="___FONT_AWESOME___",si=16,Vs="fa",Ws="svg-inline--fa",Rt="data-fa-i2svg",li="data-fa-pseudo-element",Ld="data-fa-pseudo-element-pending",Bi="data-prefix",Vi="data-icon",ro="fontawesome-i2svg",jd="async",Fd=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),ee="classic",oe="sharp",Wi=[ee,oe];function Rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var xn=Rn((Hn={},le(Hn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),le(Hn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Hn)),En=Rn((Dn={},le(Dn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Dn,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Dn)),kn=Rn((Un={},le(Un,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Un,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Un)),$d=Rn((Bn={},le(Bn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Bn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Bn)),zd=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ks="fa-layers-text",Hd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Dd=Rn((Vn={},le(Vn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Vn,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Vn)),Gs=[1,2,3,4,5,6,7,8,9,10],Ud=Gs.concat([11,12,13,14,15,16,17,18,19,20]),Bd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=new Set;Object.keys(En[ee]).map(An.add.bind(An));Object.keys(En[oe]).map(An.add.bind(An));var Vd=[].concat(Wi,Cn(An),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",kt.GROUP,kt.SWAP_OPACITY,kt.PRIMARY,kt.SECONDARY]).concat(Gs.map(function(e){return"".concat(e,"x")})).concat(Ud.map(function(e){return"w-".concat(e)})),mn=pt.FontAwesomeConfig||{};function Wd(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var Kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kd.forEach(function(e){var t=Di(e,2),n=t[0],r=t[1],i=Yd(Wd(n));i!=null&&(mn[r]=i)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vs,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mn.familyPrefix&&(mn.cssPrefix=mn.familyPrefix);var qt=I(I({},qs),mn);qt.autoReplaceSvg||(qt.observeMutations=!1);var M={};Object.keys(qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){qt[e]=n,hn.forEach(function(r){return r(M)})},get:function(){return qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){qt.cssPrefix=t,hn.forEach(function(n){return n(M)})},get:function(){return qt.cssPrefix}});pt.FontAwesomeConfig=M;var hn=[];function Gd(e){return hn.push(e),function(){hn.splice(hn.indexOf(e),1)}}var ot=si,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qd(e){if(!(!e||!tt)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return te.head.insertBefore(t,r),e}}var Xd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=Xd[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Yi(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ki(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function Jd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function Zd(e){var t=e.transform,n=e.width,r=n===void 0?si:n,i=e.height,a=i===void 0?si:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Bs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var em=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qs(){var e=Vs,t=Ws,n=M.cssPrefix,r=M.replacementClass,i=em;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var io=!1;function Hr(){M.autoAddCss&&!io&&(qd(Qs()),io=!0)}var tm={mixout:function(){return{dom:{css:Qs,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},Je=pt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Me=Je[Qe],Js=[],nm=function e(){te.removeEventListener("DOMContentLoaded",e),or=1,Js.map(function(t){return t()})},or=!1;tt&&(or=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),or||te.addEventListener("DOMContentLoaded",nm));function rm(e){tt&&(or?setTimeout(e,0):Js.push(e))}function In(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(Qd(r),">").concat(a.map(In).join(""),"</").concat(t,">")}function ao(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Dr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,l,f,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)f=a[l],c=s(c,t[f],f,t);return c};function im(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ci(e){var t=im(e);return t.length===1?t[0].toString(16):null}function am(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function fi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=oo(t);typeof Me.hooks.addPack=="function"&&!i?Me.hooks.addPack(e,oo(t)):Me.styles[e]=I(I({},Me.styles[e]||{}),a),e==="fas"&&fi("fa",t)}var Wn,Yn,Kn,zt=Me.styles,om=Me.shims,sm=(Wn={},le(Wn,ee,Object.values(kn[ee])),le(Wn,oe,Object.values(kn[oe])),Wn),Gi=null,Zs={},el={},tl={},nl={},rl={},lm=(Yn={},le(Yn,ee,Object.keys(xn[ee])),le(Yn,oe,Object.keys(xn[oe])),Yn);function cm(e){return~Vd.indexOf(e)}function fm(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!cm(i)?i:null}var il=function(){var t=function(a){return Dr(zt,function(o,s,l){return o[l]=Dr(s,a,{}),o},{})};Zs=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),el=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),rl=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in zt||M.autoFetchSvg,r=Dr(om,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});tl=r.names,nl=r.unicodes,Gi=kr(M.styleDefault,{family:M.familyDefault})};Gd(function(e){Gi=kr(e.styleDefault,{family:M.familyDefault})});il();function qi(e,t){return(Zs[e]||{})[t]}function um(e,t){return(el[e]||{})[t]}function At(e,t){return(rl[e]||{})[t]}function al(e){return tl[e]||{prefix:null,iconName:null}}function dm(e){var t=nl[e],n=qi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Gi}var Xi=function(){return{prefix:null,iconName:null,rest:[]}};function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,i=xn[r][e],a=En[r][e]||En[r][i],o=e in Me.styles?e:null;return a||o||null}var so=(Kn={},le(Kn,ee,Object.keys(kn[ee])),le(Kn,oe,Object.keys(kn[oe])),Kn);function Ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),le(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=ee;(e.includes(a[ee])||e.some(function(f){return so[ee].includes(f)}))&&(s=ee),(e.includes(a[oe])||e.some(function(f){return so[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,c){var m=fm(M.cssPrefix,c);if(zt[c]?(c=sm[s].includes(c)?$d[s][c]:c,o=c,f.prefix=c):lm[s].indexOf(c)>-1?(o=c,f.prefix=kr(c,{family:s})):m?f.iconName=m:c!==M.replacementClass&&c!==a[ee]&&c!==a[oe]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var h=o==="fa"?al(f.iconName):{},g=At(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Xi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=At(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var mm=function(){function e(){Ad(this,e),this.definitions={}}return Od(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),fi(s,o[s]);var l=kn[ee][s];l&&fi(l,o[s]),il()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),lo=[],Ht={},Wt={},hm=Object.keys(Wt);function pm(e,t){var n=t.mixoutsTo;return lo=e,Ht={},Object.keys(Wt).forEach(function(r){hm.indexOf(r)===-1&&delete Wt[r]}),lo.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ar(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(a[o])})}r.provides&&r.provides(Wt)}),n}function ui(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ht[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ht[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function di(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=At(n,t)||t,ao(ol.definitions,n,t)||ao(Me.styles,n,t)}var ol=new mm,gm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},vm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(It("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,rm(function(){ym({autoReplaceSvgRoot:n}),It("watch",t)})}},bm={icon:function(t){if(t===null)return null;if(ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:At(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=kr(t[0]);return{prefix:r,iconName:At(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(zd))){var i=Ar(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||gt(),iconName:At(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=gt();return{prefix:a,iconName:At(a,t)||t}}}},Oe={noAuto:gm,config:M,dom:vm,parse:bm,library:ol,findIconDefinition:di,toHtml:In},ym=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&tt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return In(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _m(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ki(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Er(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function wm(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function Qi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,S=r.found?r:n,R=S.width,F=S.height,y=i==="fak",w=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(F)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/F*16*.0625,"em")}:{};g&&(C.attributes[Rt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[l]}),delete C.attributes.title);var V=I(I({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},z),m.styles)}),$=r.found&&n.found?Ze("generateAbstractMask",V)||{children:[],attributes:{}}:Ze("generateAbstractIcon",V)||{children:[],attributes:{}},Z=$.children,pe=$.attributes;return V.children=Z,V.attributes=pe,s?wm(V):_m(V)}function co(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Rt]="");var c=I({},o.styles);Ki(i)&&(c.transform=Zd({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Er(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function xm(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Er(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ur=Me.styles;function mi(e){var t=e[0],n=e[1],r=e.slice(4),i=Di(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Em={found:!1,width:512,height:512};function km(e,t){!Ys&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function hi(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gt()),new Promise(function(r,i){if(Ze("missingIconAbstract"),n==="fa"){var a=al(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ur[t]&&Ur[t][e]){var o=Ur[t][e];return r(mi(o))}km(e,t),r(I(I({},Em),{},{icon:M.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var fo=function(){},pi=M.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:fo,measure:fo},rn='FA "6.5.2"',Am=function(t){return pi.mark("".concat(rn," ").concat(t," begins")),function(){return sl(t)}},sl=function(t){pi.mark("".concat(rn," ").concat(t," ends")),pi.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},Ji={begin:Am,end:sl},Zn=function(){};function uo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function Sm(e){var t=e.getAttribute?e.getAttribute(Bi):null,n=e.getAttribute?e.getAttribute(Vi):null;return t&&n}function Om(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Pm(){if(M.autoReplaceSvg===!0)return er.replace;var e=er[M.autoReplaceSvg];return e||er.replace}function Cm(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Rm(e){return te.createElement(e)}function ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Cm:Rm:n;if(typeof e=="string")return te.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(ll(o,{ceFn:r}))}),i}function Im(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var er={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(ll(i),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=te.createComment(Im(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Yi(n).indexOf(M.replacementClass))return er.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return In(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function mo(e){e()}function cl(e,t){var n=typeof t=="function"?t:Zn;if(e.length===0)n();else{var r=mo;M.mutateApproach===jd&&(r=pt.requestAnimationFrame||mo),r(function(){var i=Pm(),a=Ji.begin("mutate");e.map(i),a(),n()})}}var Zi=!1;function fl(){Zi=!0}function gi(){Zi=!1}var sr=null;function ho(e){if(no&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Zn:t,r=e.nodeCallback,i=r===void 0?Zn:r,a=e.pseudoElementsCallback,o=a===void 0?Zn:a,s=e.observeMutationsRoot,l=s===void 0?te:s;sr=new no(function(f){if(!Zi){var c=gt();Qt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!uo(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&uo(m.target)&&~Bd.indexOf(m.attributeName))if(m.attributeName==="class"&&Sm(m.target)){var h=Ar(Yi(m.target)),g=h.prefix,S=h.iconName;m.target.setAttribute(Bi,g||c),S&&m.target.setAttribute(Vi,S)}else Om(m.target)&&i(m.target)})}}),tt&&sr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tm(){sr&&sr.disconnect()}function Nm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Mm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ar(Yi(e));return i.prefix||(i.prefix=gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=um(i.prefix,e.innerText)||qi(i.prefix,ci(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Lm(e){var t=Qt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function jm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Mm(e),r=n.iconName,i=n.prefix,a=n.rest,o=Lm(e),s=ui("parseNodeAttributes",{},e),l=t.styleParser?Nm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Fm=Me.styles;function ul(e){var t=M.autoReplaceSvg==="nest"?po(e,{styleParser:!1}):po(e);return~t.extra.classes.indexOf(Ks)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var vt=new Set;Wi.map(function(e){vt.add("fa-".concat(e))});Object.keys(xn[ee]).map(vt.add.bind(vt));Object.keys(xn[oe]).map(vt.add.bind(vt));vt=Cn(vt);function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=te.documentElement.classList,r=function(m){return n.add("".concat(ro,"-").concat(m))},i=function(m){return n.remove("".concat(ro,"-").concat(m))},a=M.autoFetchSvg?vt:Wi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Fm));a.includes("fa")||a.push("fa");var o=[".".concat(Ks,":not([").concat(Rt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ji.begin("onTree"),f=s.reduce(function(c,m){try{var h=ul(m);h&&c.push(h)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){cl(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function $m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ul(e).then(function(n){n&&cl([n],t)})}function zm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:di(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:di(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Hm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ve:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,S=g===void 0?null:g,R=n.classes,F=R===void 0?[]:R,y=n.attributes,w=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var V=t.prefix,$=t.iconName,Z=t.icon;return Sr(I({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(S||Sn()):(w["aria-hidden"]="true",w.focusable="false")),Qi({icons:{main:mi(Z),mask:l?mi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:$,transform:I(I({},Ve),i),symbol:o,title:h,maskId:c,titleId:S,extra:{attributes:w,styles:z,classes:F}})})}},Dm={mixout:function(){return{icon:zm(Hm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=go,n.nodeCallback=$m,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?te:r,a=n.callback,o=a===void 0?function(){}:a;return go(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,S){Promise.all([hi(i,s),c.iconName?hi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var F=Di(R,2),y=F[0],w=F[1];g([n,Qi({icons:{main:y,mask:w},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Er(s);l.length>0&&(i.style=l);var f;return Ki(o)&&(f=Ze("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Um={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Sr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Cn(a)).join(" ")},children:o}]})}}}},Bm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Sr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),xm({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Cn(s))}})})}}}},Vm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ve:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Sr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),co({content:n,transform:I(I({},Ve),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Cn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Bs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,co({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Wm=new RegExp('"',"ug"),vo=[1105920,1112319];function Ym(e){var t=e.replace(Wm,""),n=am(t,0),r=n>=vo[0]&&n<=vo[1],i=t.length===2?t[0]===t[1]:!1;return{value:ci(i?t[0]:t),isSecondary:r||i}}function bo(e,t){var n="".concat(Ld).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Qt(e.children),o=a.filter(function(Z){return Z.getAttribute(li)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Hd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[h][l[2].toLowerCase()]:Dd[h][f],S=Ym(m),R=S.value,F=S.isSecondary,y=l[0].startsWith("FontAwesome"),w=qi(g,R),C=w;if(y){var z=dm(R);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!F&&(!o||o.getAttribute(Bi)!==g||o.getAttribute(Vi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var V=jm(),$=V.extra;$.attributes[li]=t,hi(w,g).then(function(Z){var pe=Qi(I(I({},V),{},{icons:{main:Z,mask:Xi()},prefix:g,iconName:C,extra:$,watchable:!0})),ge=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=pe.map(function(Pe){return In(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Km(e){return Promise.all([bo(e,"::before"),bo(e,"::after")])}function Gm(e){return e.parentNode!==document.head&&!~Fd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(li)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yo(e){if(tt)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(Gm).map(Km),i=Ji.begin("searchPseudoElements");fl(),Promise.all(r).then(function(){i(),gi(),t()}).catch(function(){i(),gi(),n()})})}var qm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?te:r;M.searchPseudoElements&&yo(i)}}},_o=!1,Xm={mixout:function(){return{dom:{unwatch:function(){fl(),_o=!0}}}},hooks:function(){return{bootstrap:function(){ho(ui("mutationObserverCallbacks",{}))},noAuto:function(){Tm()},watch:function(n){var r=n.observeMutationsRoot;_o?gi():ho(ui("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Qm={mixout:function(){return{parse:{transform:function(n){return wo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=wo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Br={x:0,y:0,width:"100%",height:"100%"};function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Jm(e){return e.tag==="g"?e.children:[e]}var Zm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ar(i.split(" ").map(function(o){return o.trim()})):Xi();return a.prefix||(a.prefix=gt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,c=a.icon,m=o.width,h=o.icon,g=Jd({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:I(I({},Br),{},{fill:"white"})},R=c.children?{children:c.children.map(xo)}:{},F={tag:"g",attributes:I({},g.inner),children:[xo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(s||Sn()),C="clip-".concat(s||Sn()),z={tag:"mask",attributes:I(I({},Br),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Jm(h)},z]};return r.push(V,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Br)}),{children:r,attributes:i}}}},eh={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},th={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},nh=[tm,Dm,Um,Bm,Vm,qm,Xm,Qm,Zm,eh,th];pm(nh,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var rh=Oe.library;Oe.dom;var vi=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var ih=Oe.icon;Oe.layer;Oe.text;Oe.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function xe(e,t,n){return t=lh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ah(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oh(e,t){if(e==null)return{};var n=ah(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sh(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lh(e){var t=sh(e,"string");return typeof t=="symbol"?t:String(t)}var ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!f(w)||m(w)||h(w)||g(w)||l(w))return w;var z,V=0,$=0;if(c(w))for(z=[],$=w.length;V<$;V++)z.push(n(y,w[V],C));else{z={};for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(z[y(Z,C)]=n(y,w[Z],C))}return z},r=function(y,w){w=w||{};var C=w.separator||"_",z=w.split||/(?=[A-Z])/;return y.split(z).join(C)},i=function(y){return S(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},S=function(y){return y=y-0,y===y},R=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(z,V){return C(z,y,V)}},F={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,w){return n(R(i,w),y)},decamelizeKeys:function(y,w){return n(R(o,w),y,w)},pascalizeKeys:function(y,w){return n(R(a,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(ch)})(dl);var fh=dl.exports,uh=["class","style"];function dh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=fh.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function mh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ml(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ml(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=mh(c);break;case"style":l.style=dh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=oh(n,uh);return Fi(e.tag,Ge(Ge(Ge({},t),{},{class:i.class,style:Ge(Ge({},i.style),o)},i.attrs),s),r)}var hl=!1;try{hl=!0}catch{}function hh(){if(!hl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function ph(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ko(e){if(e&&lr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vi.icon)return vi.icon(e);if(e===null)return null;if(lr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var gh=br({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=he(function(){return ko(t.icon)}),a=he(function(){return Vr("classes",ph(t))}),o=he(function(){return Vr("transform",typeof t.transform=="string"?vi.transform(t.transform):t.transform)}),s=he(function(){return Vr("mask",ko(t.mask))}),l=he(function(){return ih(i.value,Ge(Ge(Ge(Ge({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});sn(l,function(c){if(!c)return hh("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=he(function(){return l.value?ml(l.value.abstract[0],{},r):null});return function(){return f.value}}}),vh={prefix:"fas",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},bh={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},yh={prefix:"fas",iconName:"book-bookmark",icon:[448,512,[],"e0bb","M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"]},_h={prefix:"fas",iconName:"folder-tree",icon:[576,512,[],"f802","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z"]},wh={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},xh=wh,Eh={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};rh.add(_h,xh,vh,Eh,bh,yh);const ea=zf(tu);ea.component("font-awesome-icon",gh);ea.use(kd);ea.mount("#app");
