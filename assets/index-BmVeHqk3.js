(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _i(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const ie={},Ut=[],Te=()=>{},yl=()=>!1,dr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wi=e=>e.startsWith("onUpdate:"),pe=Object.assign,xi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_l=Object.prototype.hasOwnProperty,Y=(e,t)=>_l.call(e,t),D=Array.isArray,Vt=e=>mr(e)==="[object Map]",Co=e=>mr(e)==="[object Set]",U=e=>typeof e=="function",ce=e=>typeof e=="string",Mt=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Ro=e=>(ae(e)||U(e))&&U(e.then)&&U(e.catch),Io=Object.prototype.toString,mr=e=>Io.call(e),wl=e=>mr(e).slice(8,-1),To=e=>mr(e)==="[object Object]",Ei=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ln=_i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xl=/-(\w)/g,Ge=hr(e=>e.replace(xl,(t,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,Qt=hr(e=>e.replace(El,"-$1").toLowerCase()),pr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=hr(e=>e?`on${pr(e)}`:""),gt=(e,t)=>!Object.is(e,t),Rr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},No=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},kl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let la;const Mo=()=>la||(la=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ki(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ce(r)?Pl(r):ki(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ce(e)||ae(e))return e}const Sl=/;(?![^(]*\))/g,Al=/:([^]+)/,Ol=/\/\*[^]*?\*\//g;function Pl(e){const t={};return e.replace(Ol,"").split(Sl).forEach(n=>{if(n){const r=n.split(Al);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Si(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Si(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rl=_i(Cl);function Lo(e){return!!e||e===""}const Me=e=>ce(e)?e:e==null?"":D(e)||ae(e)&&(e.toString===Io||!U(e.toString))?JSON.stringify(e,jo,2):String(e),jo=(e,t)=>t&&t.__v_isRef?jo(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Ir(r,a)+" =>"]=i,n),{})}:Co(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ir(n))}:Mt(t)?Ir(t):ae(t)&&!D(t)&&!To(t)?String(t):t,Ir=(e,t="")=>{var n;return Mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Il{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Tl(e,t=Le){t&&t.active&&t.effects.push(e)}function Nl(){return Le}let Pt;class Ai{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Tl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,_t();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Ml(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ht,n=Pt;try{return ht=!0,Pt=this,this._runnings++,ca(this),this.fn()}finally{fa(this),this._runnings--,Pt=n,ht=t}}stop(){this.active&&(ca(this),fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Ml(e){return e.value}function ca(e){e._trackId++,e._depsLength=0}function fa(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)$o(e.deps[t],e);e.deps.length=e._depsLength}}function $o(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ht=!0,Kr=0;const Fo=[];function _t(){Fo.push(ht),ht=!1}function wt(){const e=Fo.pop();ht=e===void 0?!0:e}function Oi(){Kr++}function Pi(){for(Kr--;!Kr&&Gr.length;)Gr.shift()()}function zo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&$o(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Gr=[];function Ho(e,t,n){Oi();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Gr.push(r.scheduler)))}Pi()}const Do=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},qr=new WeakMap,Ct=Symbol(""),Xr=Symbol("");function Oe(e,t,n){if(ht&&Pt){let r=qr.get(e);r||qr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Do(()=>r.delete(n))),zo(Pt,i)}}function Je(e,t,n,r,i,a){const o=qr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Mt(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Ei(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Vt(e)&&s.push(o.get(Xr)));break;case"delete":D(e)||(s.push(o.get(Ct)),Vt(e)&&s.push(o.get(Xr)));break;case"set":Vt(e)&&s.push(o.get(Ct));break}Oi();for(const l of s)l&&Ho(l,4);Pi()}const Ll=_i("__proto__,__v_isRef,__isVue"),Bo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt)),ua=jl();function jl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)Oe(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t(),Oi();const r=q(this)[t].apply(this,n);return Pi(),wt(),r}}),e}function $l(e){Mt(e)||(e=String(e));const t=q(this);return Oe(t,"has",e),t.hasOwnProperty(e)}class Uo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Xl:Ko:a?Yo:Wo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=D(t);if(!i){if(o&&Y(ua,n))return Reflect.get(ua,n,r);if(n==="hasOwnProperty")return $l}const s=Reflect.get(t,n,r);return(Mt(n)?Bo.has(n):Ll(n))||(i||Oe(t,"get",n),a)?s:Pe(s)?o&&Ei(n)?s:s.value:ae(s)?i?qo(s):vr(s):s}}class Vo extends Uo{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=bn(a);if(!rr(r)&&!bn(r)&&(a=q(a),r=q(r)),!D(t)&&Pe(a)&&!Pe(r))return l?!1:(a.value=r,!0)}const o=D(t)&&Ei(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,i);return t===q(i)&&(o?gt(r,a)&&Je(t,"set",n,r):Je(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Je(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Mt(n)||!Bo.has(n))&&Oe(t,"has",n),r}ownKeys(t){return Oe(t,"iterate",D(t)?"length":Ct),Reflect.ownKeys(t)}}class Fl extends Uo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zl=new Vo,Hl=new Fl,Dl=new Vo(!0);const Ci=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);n||(gt(t,a)&&Oe(i,"get",t),Oe(i,"get",a));const{has:o}=gr(i),s=r?Ci:n?Ti:yn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return t||(gt(e,i)&&Oe(r,"has",e),Oe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function $n(e,t=!1){return e=e.__v_raw,!t&&Oe(q(e),"iterate",Ct),Reflect.get(e,"size",e)}function da(e){e=q(e);const t=q(this);return gr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function ma(e,t){t=q(t);const n=q(this),{has:r,get:i}=gr(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?gt(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function ha(e){const t=q(this),{has:n,get:r}=gr(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Je(t,"delete",e,void 0),a}function pa(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function Fn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?Ci:e?Ti:yn;return!e&&Oe(s,"iterate",Ct),o.forEach((f,c)=>r.call(i,l(f),l(c),a))}}function zn(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=Vt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?Ci:t?Ti:yn;return!t&&Oe(a,"iterate",l?Xr:Ct),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bl(){const e={get(a){return Ln(this,a)},get size(){return $n(this)},has:jn,add:da,set:ma,delete:ha,clear:pa,forEach:Fn(!1,!1)},t={get(a){return Ln(this,a,!1,!0)},get size(){return $n(this)},has:jn,add:da,set:ma,delete:ha,clear:pa,forEach:Fn(!1,!0)},n={get(a){return Ln(this,a,!0)},get size(){return $n(this,!0)},has(a){return jn.call(this,a,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Fn(!0,!1)},r={get(a){return Ln(this,a,!0,!0)},get size(){return $n(this,!0)},has(a){return jn.call(this,a,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=zn(a,!1,!1),n[a]=zn(a,!0,!1),t[a]=zn(a,!1,!0),r[a]=zn(a,!0,!0)}),[e,n,t,r]}const[Ul,Vl,Wl,Yl]=Bl();function Ri(e,t){const n=t?e?Yl:Wl:e?Vl:Ul;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Y(n,i)&&i in r?n:r,i,a)}const Kl={get:Ri(!1,!1)},Gl={get:Ri(!1,!0)},ql={get:Ri(!0,!1)};const Wo=new WeakMap,Yo=new WeakMap,Ko=new WeakMap,Xl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(wl(e))}function vr(e){return bn(e)?e:Ii(e,!1,zl,Kl,Wo)}function Go(e){return Ii(e,!1,Dl,Gl,Yo)}function qo(e){return Ii(e,!0,Hl,ql,Ko)}function Ii(e,t,n,r,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Jl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function cn(e){return bn(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function bn(e){return!!(e&&e.__v_isReadonly)}function rr(e){return!!(e&&e.__v_isShallow)}function Xo(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Zl(e){return Object.isExtensible(e)&&No(e,"__v_skip",!0),e}const yn=e=>ae(e)?vr(e):e,Ti=e=>ae(e)?qo(e):e;class Qo{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ai(()=>t(this._value),()=>Xn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return(!t._cacheable||t.effect.dirty)&&gt(t._value,t._value=t.effect.run())&&Xn(t,4),Jo(t),t.effect._dirtyLevel>=2&&Xn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ec(e,t,n=!1){let r,i;const a=U(e);return a?(r=e,i=Te):(r=e.get,i=e.set),new Qo(r,i,a||!i,n)}function Jo(e){var t;ht&&Pt&&(e=q(e),zo(Pt,(t=e.dep)!=null?t:e.dep=Do(()=>e.dep=void 0,e instanceof Qo?e:void 0)))}function Xn(e,t=4,n){e=q(e);const r=e.dep;r&&Ho(r,t)}function Pe(e){return!!(e&&e.__v_isRef===!0)}function tc(e){return Zo(e,!1)}function nc(e){return Zo(e,!0)}function Zo(e,t){return Pe(e)?e:new rc(e,t)}class rc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:yn(t)}get value(){return Jo(this),this._value}set value(t){const n=this.__v_isShallow||rr(t)||bn(t);t=n?t:q(t),gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),Xn(this,4))}}function Rt(e){return Pe(e)?e.value:e}const ic={get:(e,t,n)=>Rt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function es(e){return cn(e)?e:new Proxy(e,ic)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(e,t,n,r){try{return r?e(...r):e()}catch(i){br(i,t,n)}}function ze(e,t,n,r){if(U(e)){const i=pt(e,t,n,r);return i&&Ro(i)&&i.catch(a=>{br(a,t,n)}),i}if(D(e)){const i=[];for(let a=0;a<e.length;a++)i.push(ze(e[a],t,n,r));return i}}function br(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){_t(),pt(l,null,10,[e,o,s]),wt();return}}ac(e,n,i,r)}function ac(e,t,n,r=!0){console.error(e)}let _n=!1,Qr=!1;const _e=[];let Ye=0;const Wt=[];let ft=null,St=0;const ts=Promise.resolve();let Ni=null;function ns(e){const t=Ni||ts;return e?t.then(this?e.bind(this):e):t}function oc(e){let t=Ye+1,n=_e.length;for(;t<n;){const r=t+n>>>1,i=_e[r],a=wn(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Mi(e){(!_e.length||!_e.includes(e,_n&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?_e.push(e):_e.splice(oc(e.id),0,e),rs())}function rs(){!_n&&!Qr&&(Qr=!0,Ni=ts.then(as))}function sc(e){const t=_e.indexOf(e);t>Ye&&_e.splice(t,1)}function lc(e){D(e)?Wt.push(...e):(!ft||!ft.includes(e,e.allowRecurse?St+1:St))&&Wt.push(e),rs()}function ga(e,t,n=_n?Ye+1:0){for(;n<_e.length;n++){const r=_e[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;_e.splice(n,1),n--,r()}}}function is(e){if(Wt.length){const t=[...new Set(Wt)].sort((n,r)=>wn(n)-wn(r));if(Wt.length=0,ft){ft.push(...t);return}for(ft=t,St=0;St<ft.length;St++)ft[St]();ft=null,St=0}}const wn=e=>e.id==null?1/0:e.id,cc=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function as(e){Qr=!1,_n=!0,_e.sort(cc);try{for(Ye=0;Ye<_e.length;Ye++){const t=_e[Ye];t&&t.active!==!1&&pt(t,null,14)}}finally{Ye=0,_e.length=0,is(),_n=!1,Ni=null,(_e.length||Wt.length)&&as()}}function fc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||ie;h&&(i=n.map(g=>ce(g)?g.trim():g)),m&&(i=n.map(kl))}let s,l=r[s=Cr(t)]||r[s=Cr(Ge(t))];!l&&a&&(l=r[s=Cr(Qt(t))]),l&&ze(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,i)}}function os(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=os(f,t,!0);c&&(s=!0,pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ae(e)&&r.set(e,null),null):(D(a)?a.forEach(l=>o[l]=null):pe(o,a),ae(e)&&r.set(e,o),o)}function yr(e,t){return!e||!dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Qt(t))||Y(e,t))}let je=null,_r=null;function ir(e){const t=je;return je=e,_r=e&&e.type.__scopeId||null,t}function Li(e){_r=e}function ji(){_r=null}function ss(e,t=je,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Oa(-1);const a=ir(t);let o;try{o=e(...i)}finally{ir(a),r._d&&Oa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:f,renderCache:c,props:m,data:h,setupState:g,ctx:A,inheritAttrs:R}=e,$=ir(e);let y,w;try{if(n.shapeFlag&4){const z=i||r,V=z;y=We(f.call(V,z,c,m,g,h,A)),w=s}else{const z=t;y=We(z.length>1?z(m,{attrs:s,slots:o,emit:l}):z(m,null)),w=t.props?s:uc(s)}}catch(z){mn.length=0,br(z,e,1),y=he(It)}let C=y;if(w&&R!==!1){const z=Object.keys(w),{shapeFlag:V}=C;z.length&&V&7&&(a&&z.some(wi)&&(w=dc(w,a)),C=Kt(C,w,!1,!0))}return n.dirs&&(C=Kt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,ir($),y}const uc=e=>{let t;for(const n in e)(n==="class"||n==="style"||dr(n))&&((t||(t={}))[n]=e[n]);return t},dc=(e,t)=>{const n={};for(const r in e)(!wi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?va(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!yr(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?va(r,o,f):!0:!!o;return!1}function va(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!yr(n,a))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const pc="components";function Nr(e,t){return vc(pc,e,!0,t)||e}const gc=Symbol.for("v-ndc");function vc(e,t,n=!0,r=!1){const i=je||we;if(i){const a=i.type;{const s=uf(a,!1);if(s&&(s===t||s===Ge(t)||s===pr(Ge(t))))return a}const o=ba(i[e]||a[e],t)||ba(i.appContext[e],t);return!o&&r?a:o}}function ba(e,t){return e&&(e[t]||e[Ge(t)]||e[pr(Ge(t))])}const bc=e=>e.__isSuspense;function yc(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):lc(e)}const _c=Symbol.for("v-scx"),wc=()=>Ze(_c),Hn={};function fn(e,t,n){return ls(e,t,n)}function ls(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=ie){if(t&&a){const F=t;t=(...ee)=>{F(...ee),V()}}const l=we,f=F=>r===!0?F:Ht(F,r===!1?1:void 0);let c,m=!1,h=!1;if(Pe(e)?(c=()=>e.value,m=rr(e)):cn(e)?(c=()=>f(e),m=!0):D(e)?(h=!0,m=e.some(F=>cn(F)||rr(F)),c=()=>e.map(F=>{if(Pe(F))return F.value;if(cn(F))return f(F);if(U(F))return pt(F,l,2)})):U(e)?t?c=()=>pt(e,l,2):c=()=>(g&&g(),ze(e,l,3,[A])):c=Te,t&&r){const F=c;c=()=>Ht(F())}let g,A=F=>{g=C.onStop=()=>{pt(F,l,4),g=C.onStop=void 0}},R;if(Er)if(A=Te,t?n&&ze(t,l,3,[c(),h?[]:void 0,A]):c(),i==="sync"){const F=wc();R=F.__watcherHandles||(F.__watcherHandles=[])}else return Te;let $=h?new Array(e.length).fill(Hn):Hn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const F=C.run();(r||m||(h?F.some((ee,ve)=>gt(ee,$[ve])):gt(F,$)))&&(g&&g(),ze(t,l,3,[F,$===Hn?void 0:h&&$[0]===Hn?[]:$,A]),$=F)}else C.run()};y.allowRecurse=!!t;let w;i==="sync"?w=y:i==="post"?w=()=>Se(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>Mi(y));const C=new Ai(c,Te,w),z=Nl(),V=()=>{C.stop(),z&&xi(z.effects,C)};return t?n?y():$=C.run():i==="post"?Se(C.run.bind(C),l&&l.suspense):C.run(),R&&R.push(V),V}function xc(e,t,n){const r=this.proxy,i=ce(e)?e.includes(".")?cs(r,e):()=>r[e]:e.bind(r,r);let a;U(t)?a=t:(a=t.handler,n=t);const o=Rn(this),s=ls(i,a.bind(r),n);return o(),s}function cs(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ht(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))Ht(e.value,t,n);else if(D(e))for(let r=0;r<e.length;r++)Ht(e[r],t,n);else if(Co(e)||Vt(e))e.forEach(r=>{Ht(r,t,n)});else if(To(e))for(const r in e)Ht(e[r],t,n);return e}function Et(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(_t(),ze(l,n,8,[e.el,s,e,t]),wt())}}/*! #__NO_SIDE_EFFECTS__ */function Jt(e,t){return U(e)?pe({name:e.name},t,{setup:e}):e}const Qn=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function Ec(e,t){us(e,"a",t)}function kc(e,t){us(e,"da",t)}function us(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(wr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)fs(i.parent.vnode)&&Sc(r,t,n,i),i=i.parent}}function Sc(e,t,n,r){const i=wr(t,e,r,!0);ds(()=>{xi(r[t],i)},n)}function wr(e,t,n=we,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_t();const s=Rn(n),l=ze(t,n,e,o);return s(),wt(),l});return r?i.unshift(a):i.push(a),a}}const rt=e=>(t,n=we)=>(!Er||e==="sp")&&wr(e,(...r)=>t(...r),n),Ac=rt("bm"),Oc=rt("m"),Pc=rt("bu"),Cc=rt("u"),Rc=rt("bum"),ds=rt("um"),Ic=rt("sp"),Tc=rt("rtg"),Nc=rt("rtc");function Mc(e,t=we){wr("ec",e,t)}function $i(e,t,n,r){let i;const a=n;if(D(e)||ce(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a)}else if(ae(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a)}}else i=[];return i}const Jr=e=>e?Cs(e)?Di(e)||e.proxy:Jr(e.parent):null,un=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>Fi(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Mi(e.update)}),$nextTick:e=>e.n||(e.n=ns.bind(e.proxy)),$watch:e=>xc.bind(e)}),Mr=(e,t)=>e!==ie&&!e.__isScriptSetup&&Y(e,t),Lc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Mr(r,t))return o[t]=1,r[t];if(i!==ie&&Y(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,a[t];if(n!==ie&&Y(n,t))return o[t]=4,n[t];Zr&&(o[t]=0)}}const c=un[t];let m,h;if(c)return t==="$attrs"&&Oe(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ie&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Mr(i,t)?(i[t]=n,!0):r!==ie&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==ie&&Y(e,o)||Mr(t,o)||(s=a[0])&&Y(s,o)||Y(r,o)||Y(un,o)||Y(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ya(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zr=!0;function jc(e){const t=Fi(e),n=e.proxy,r=e.ctx;Zr=!1,t.beforeCreate&&_a(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:A,activated:R,deactivated:$,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:z,render:V,renderTracked:F,renderTriggered:ee,errorCaptured:ve,serverPrefetch:be,expose:Ie,inheritAttrs:at,components:xt,directives:De,filters:tn}=t;if(f&&$c(f,r,null),o)for(const J in o){const G=o[J];U(G)&&(r[J]=G.bind(n))}if(i){const J=i.call(n,n);ae(J)&&(e.data=vr(J))}if(Zr=!0,a)for(const J in a){const G=a[J],qe=U(G)?G.bind(n,n):U(G.get)?G.get.bind(n,n):Te,ot=!U(G)&&U(G.set)?G.set.bind(n):Te,Be=ge({get:qe,set:ot});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Ee=>Be.value=Ee})}if(s)for(const J in s)ms(s[J],r,n,J);if(l){const J=U(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Jn(G,J[G])})}c&&_a(c,e,"c");function ue(J,G){D(G)?G.forEach(qe=>J(qe.bind(n))):G&&J(G.bind(n))}if(ue(Ac,m),ue(Oc,h),ue(Pc,g),ue(Cc,A),ue(Ec,R),ue(kc,$),ue(Mc,ve),ue(Nc,F),ue(Tc,ee),ue(Rc,w),ue(ds,z),ue(Ic,be),D(Ie))if(Ie.length){const J=e.exposed||(e.exposed={});Ie.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:qe=>n[G]=qe})})}else e.exposed||(e.exposed={});V&&e.render===Te&&(e.render=V),at!=null&&(e.inheritAttrs=at),xt&&(e.components=xt),De&&(e.directives=De)}function $c(e,t,n=Te){D(e)&&(e=ei(e));for(const r in e){const i=e[r];let a;ae(i)?"default"in i?a=Ze(i.from||r,i.default,!0):a=Ze(i.from||r):a=Ze(i),Pe(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function _a(e,t,n){ze(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const i=r.includes(".")?cs(n,r):()=>n[r];if(ce(e)){const a=t[e];U(a)&&fn(i,a)}else if(U(e))fn(i,e.bind(n));else if(ae(e))if(D(e))e.forEach(a=>ms(a,t,n,r));else{const a=U(e.handler)?e.handler.bind(n):t[e.handler];U(a)&&fn(i,a,e)}}function Fi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>ar(l,f,o,!0)),ar(l,t,o)),ae(t)&&a.set(t,l),l}function ar(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&ar(e,a,n,!0),i&&i.forEach(o=>ar(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Fc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Fc={data:wa,props:xa,emits:xa,methods:on,computed:on,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:on,directives:on,watch:Hc,provide:wa,inject:zc};function wa(e,t){return t?e?function(){return pe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function zc(e,t){return on(ei(e),ei(t))}function ei(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?pe(Object.create(null),e,t):t}function xa(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:pe(Object.create(null),ya(e),ya(t??{})):t}function Hc(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function hs(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dc=0;function Bc(e,t){return function(r,i=null){U(r)||(r=pe({},r)),i!=null&&!ae(i)&&(i=null);const a=hs(),o=new WeakSet;let s=!1;const l=a.app={_uid:Dc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:mf,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,c){return c?(a.components[f]=c,l):a.components[f]},directive(f,c){return c?(a.directives[f]=c,l):a.directives[f]},mount(f,c,m){if(!s){const h=he(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,Di(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return a.provides[f]=c,l},runWithContext(f){const c=dn;dn=l;try{return f()}finally{dn=c}}};return l}}let dn=null;function Jn(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=we||je;if(r||dn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}const ps={},gs=()=>Object.create(ps),vs=e=>Object.getPrototypeOf(e)===ps;function Uc(e,t,n,r=!1){const i={},a=gs();e.propsDefaults=Object.create(null),bs(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Go(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Vc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(yr(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const A=Ge(h);i[A]=ti(l,s,A,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{bs(e,t,i,a)&&(f=!0);let c;for(const m in s)(!t||!Y(t,m)&&((c=Qt(m))===m||!Y(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=ti(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!Y(t,m))&&(delete a[m],f=!0)}f&&Je(e.attrs,"set","")}function bs(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(ln(l))continue;const f=t[l];let c;i&&Y(i,c=Ge(l))?!a||!a.includes(c)?n[c]=f:(s||(s={}))[c]=f:yr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=q(n),f=s||ie;for(let c=0;c<a.length;c++){const m=a[c];n[m]=ti(i,l,m,f[m],e,!Y(f,m))}}return o}function ti(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Rn(i);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function ys(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!U(e)){const c=m=>{l=!0;const[h,g]=ys(m,t,!0);pe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ae(e)&&r.set(e,Ut),Ut;if(D(a))for(let c=0;c<a.length;c++){const m=Ge(a[c]);Ea(m)&&(o[m]=ie)}else if(a)for(const c in a){const m=Ge(c);if(Ea(m)){const h=a[c],g=o[m]=D(h)||U(h)?{type:h}:pe({},h);if(g){const A=Aa(Boolean,g.type),R=Aa(String,g.type);g[0]=A>-1,g[1]=R<0||A<R,(A>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return ae(e)&&r.set(e,f),f}function Ea(e){return e[0]!=="$"&&!ln(e)}function ka(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Sa(e,t){return ka(e)===ka(t)}function Aa(e,t){return D(t)?t.findIndex(n=>Sa(n,e)):U(t)&&Sa(t,e)?0:-1}const _s=e=>e[0]==="_"||e==="$stable",zi=e=>D(e)?e.map(We):[We(e)],Wc=(e,t,n)=>{if(t._n)return t;const r=ss((...i)=>zi(t(...i)),n);return r._c=!1,r},ws=(e,t,n)=>{const r=e._ctx;for(const i in e){if(_s(i))continue;const a=e[i];if(U(a))t[i]=Wc(i,a,r);else if(a!=null){const o=zi(a);t[i]=()=>o}}},xs=(e,t)=>{const n=zi(t);e.slots.default=()=>n},Yc=(e,t)=>{const n=e.slots=gs();if(e.vnode.shapeFlag&32){const r=t._;r?(pe(n,t),No(n,"_",r,!0)):ws(t,n)}else t&&xs(e,t)},Kc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=ie;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(pe(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ws(t,i)),o=t}else t&&(xs(e,t),o={default:1});if(a)for(const s in i)!_s(s)&&o[s]==null&&delete i[s]};function ni(e,t,n,r,i=!1){if(D(e)){e.forEach((h,g)=>ni(h,t&&(D(t)?t[g]:t),n,r,i));return}if(Qn(r)&&!i)return;const a=r.shapeFlag&4?Di(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ie?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ce(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):Pe(f)&&(f.value=null)),U(l))pt(l,s,12,[o,c]);else{const h=ce(l),g=Pe(l);if(h||g){const A=()=>{if(e.f){const R=h?Y(m,l)?m[l]:c[l]:l.value;i?D(R)&&xi(R,a):D(R)?R.includes(a)||R.push(a):h?(c[l]=[a],Y(m,l)&&(m[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,Se(A,n)):A()}}}const Se=yc;function Gc(e){return qc(e)}function qc(e,t){const n=Mo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Te,insertStaticContent:A}=e,R=(u,d,p,_=null,v=null,k=null,P=void 0,E=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(_=b(u),Ee(u,v,k,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:x,ref:N,shapeFlag:H}=d;switch(x){case xr:$(u,d,p,_);break;case It:y(u,d,p,_);break;case jr:u==null&&w(d,p,_,P);break;case Ae:xt(u,d,p,_,v,k,P,E,S);break;default:H&1?V(u,d,p,_,v,k,P,E,S):H&6?De(u,d,p,_,v,k,P,E,S):(H&64||H&128)&&x.process(u,d,p,_,v,k,P,E,S,L)}N!=null&&v&&ni(N,u&&u.ref,k,d||u,!d)},$=(u,d,p,_)=>{if(u==null)r(d.el=s(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=l(d.children||""),p,_):d.el=u.el},w=(u,d,p,_)=>{[u.el,u.anchor]=A(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},V=(u,d,p,_,v,k,P,E,S)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?F(d,p,_,v,k,P,E,S):be(u,d,v,k,P,E,S)},F=(u,d,p,_,v,k,P,E)=>{let S,x;const{props:N,shapeFlag:H,transition:j,dirs:B}=u;if(S=u.el=o(u.type,k,N&&N.is,N),H&8?c(S,u.children):H&16&&ve(u.children,S,null,_,v,Lr(u,k),P,E),B&&Et(u,null,_,"created"),ee(S,u,u.scopeId,P,_),N){for(const Z in N)Z!=="value"&&!ln(Z)&&a(S,Z,null,N[Z],k,u.children,_,v,ye);"value"in N&&a(S,"value",null,N.value,k),(x=N.onVnodeBeforeMount)&&Ve(x,_,u)}B&&Et(u,null,_,"beforeMount");const W=Xc(v,j);W&&j.beforeEnter(S),r(S,d,p),((x=N&&N.onVnodeMounted)||W||B)&&Se(()=>{x&&Ve(x,_,u),W&&j.enter(S),B&&Et(u,null,_,"mounted")},v)},ee=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;ee(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},ve=(u,d,p,_,v,k,P,E,S=0)=>{for(let x=S;x<u.length;x++){const N=u[x]=E?ut(u[x]):We(u[x]);R(null,N,d,p,_,v,k,P,E)}},be=(u,d,p,_,v,k,P)=>{const E=d.el=u.el;let{patchFlag:S,dynamicChildren:x,dirs:N}=d;S|=u.patchFlag&16;const H=u.props||ie,j=d.props||ie;let B;if(p&&kt(p,!1),(B=j.onVnodeBeforeUpdate)&&Ve(B,p,d,u),N&&Et(d,u,p,"beforeUpdate"),p&&kt(p,!0),x?Ie(u.dynamicChildren,x,E,p,_,Lr(d,v),k):P||G(u,d,E,null,p,_,Lr(d,v),k,!1),S>0){if(S&16)at(E,d,H,j,p,_,v);else if(S&2&&H.class!==j.class&&a(E,"class",null,j.class,v),S&4&&a(E,"style",H.style,j.style,v),S&8){const W=d.dynamicProps;for(let Z=0;Z<W.length;Z++){const re=W[Z],de=H[re],Ne=j[re];(Ne!==de||re==="value")&&a(E,re,de,Ne,v,u.children,p,_,ye)}}S&1&&u.children!==d.children&&c(E,d.children)}else!P&&x==null&&at(E,d,H,j,p,_,v);((B=j.onVnodeUpdated)||N)&&Se(()=>{B&&Ve(B,p,d,u),N&&Et(d,u,p,"updated")},_)},Ie=(u,d,p,_,v,k,P)=>{for(let E=0;E<d.length;E++){const S=u[E],x=d[E],N=S.el&&(S.type===Ae||!rn(S,x)||S.shapeFlag&70)?m(S.el):p;R(S,x,N,null,_,v,k,P,!0)}},at=(u,d,p,_,v,k,P)=>{if(p!==_){if(p!==ie)for(const E in p)!ln(E)&&!(E in _)&&a(u,E,p[E],null,P,d.children,v,k,ye);for(const E in _){if(ln(E))continue;const S=_[E],x=p[E];S!==x&&E!=="value"&&a(u,E,x,S,P,d.children,v,k,ye)}"value"in _&&a(u,"value",p.value,_.value,P)}},xt=(u,d,p,_,v,k,P,E,S)=>{const x=d.el=u?u.el:s(""),N=d.anchor=u?u.anchor:s("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),u==null?(r(x,p,_),r(N,p,_),ve(d.children||[],p,N,v,k,P,E,S)):H>0&&H&64&&j&&u.dynamicChildren?(Ie(u.dynamicChildren,j,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&Es(u,d,!0)):G(u,d,p,N,v,k,P,E,S)},De=(u,d,p,_,v,k,P,E,S)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,P,S):tn(d,p,_,v,k,P,S):Lt(u,d,S)},tn=(u,d,p,_,v,k,P)=>{const E=u.component=of(u,_,v);if(fs(u)&&(E.ctx.renderer=L),sf(E),E.asyncDep){if(v&&v.registerDep(E,ue),!u.el){const S=E.subTree=he(It);y(null,S,d,p)}}else ue(E,u,d,p,v,k,P)},Lt=(u,d,p)=>{const _=d.component=u.component;if(mc(u,d,p))if(_.asyncDep&&!_.asyncResolved){J(_,d,p);return}else _.next=d,sc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ue=(u,d,p,_,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:N,bu:H,u:j,parent:B,vnode:W}=u;{const Ft=ks(u);if(Ft){N&&(N.el=W.el,J(u,N,P)),Ft.asyncDep.then(()=>{u.isUnmounted||E()});return}}let Z=N,re;kt(u,!1),N?(N.el=W.el,J(u,N,P)):N=W,H&&Rr(H),(re=N.props&&N.props.onVnodeBeforeUpdate)&&Ve(re,B,N,W),kt(u,!0);const de=Tr(u),Ne=u.subTree;u.subTree=de,R(Ne,de,m(Ne.el),b(Ne),u,v,k),N.el=de.el,Z===null&&hc(u,de.el),j&&Se(j,v),(re=N.props&&N.props.onVnodeUpdated)&&Se(()=>Ve(re,B,N,W),v)}else{let N;const{el:H,props:j}=d,{bm:B,m:W,parent:Z}=u,re=Qn(d);if(kt(u,!1),B&&Rr(B),!re&&(N=j&&j.onVnodeBeforeMount)&&Ve(N,Z,d),kt(u,!0),H&&oe){const de=()=>{u.subTree=Tr(u),oe(H,u.subTree,u,v,null)};re?d.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=Tr(u);R(null,de,p,_,u,v,k),d.el=de.el}if(W&&Se(W,v),!re&&(N=j&&j.onVnodeMounted)){const de=d;Se(()=>Ve(N,Z,de),v)}(d.shapeFlag&256||Z&&Qn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&Se(u.a,v),u.isMounted=!0,d=p=_=null}},S=u.effect=new Ai(E,Te,()=>Mi(x),u.scope),x=u.update=()=>{S.dirty&&S.run()};x.id=u.uid,kt(u,!0),x()},J=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Vc(u,d.props,_,p),Kc(u,d.children,p),_t(),ga(u),wt()},G=(u,d,p,_,v,k,P,E,S=!1)=>{const x=u&&u.children,N=u?u.shapeFlag:0,H=d.children,{patchFlag:j,shapeFlag:B}=d;if(j>0){if(j&128){ot(x,H,p,_,v,k,P,E,S);return}else if(j&256){qe(x,H,p,_,v,k,P,E,S);return}}B&8?(N&16&&ye(x,v,k),H!==x&&c(p,H)):N&16?B&16?ot(x,H,p,_,v,k,P,E,S):ye(x,v,k,!0):(N&8&&c(p,""),B&16&&ve(H,p,_,v,k,P,E,S))},qe=(u,d,p,_,v,k,P,E,S)=>{u=u||Ut,d=d||Ut;const x=u.length,N=d.length,H=Math.min(x,N);let j;for(j=0;j<H;j++){const B=d[j]=S?ut(d[j]):We(d[j]);R(u[j],B,p,null,v,k,P,E,S)}x>N?ye(u,v,k,!0,!1,H):ve(d,p,_,v,k,P,E,S,H)},ot=(u,d,p,_,v,k,P,E,S)=>{let x=0;const N=d.length;let H=u.length-1,j=N-1;for(;x<=H&&x<=j;){const B=u[x],W=d[x]=S?ut(d[x]):We(d[x]);if(rn(B,W))R(B,W,p,null,v,k,P,E,S);else break;x++}for(;x<=H&&x<=j;){const B=u[H],W=d[j]=S?ut(d[j]):We(d[j]);if(rn(B,W))R(B,W,p,null,v,k,P,E,S);else break;H--,j--}if(x>H){if(x<=j){const B=j+1,W=B<N?d[B].el:_;for(;x<=j;)R(null,d[x]=S?ut(d[x]):We(d[x]),p,W,v,k,P,E,S),x++}}else if(x>j)for(;x<=H;)Ee(u[x],v,k,!0),x++;else{const B=x,W=x,Z=new Map;for(x=W;x<=j;x++){const Ce=d[x]=S?ut(d[x]):We(d[x]);Ce.key!=null&&Z.set(Ce.key,x)}let re,de=0;const Ne=j-W+1;let Ft=!1,aa=0;const nn=new Array(Ne);for(x=0;x<Ne;x++)nn[x]=0;for(x=B;x<=H;x++){const Ce=u[x];if(de>=Ne){Ee(Ce,v,k,!0);continue}let Ue;if(Ce.key!=null)Ue=Z.get(Ce.key);else for(re=W;re<=j;re++)if(nn[re-W]===0&&rn(Ce,d[re])){Ue=re;break}Ue===void 0?Ee(Ce,v,k,!0):(nn[Ue-W]=x+1,Ue>=aa?aa=Ue:Ft=!0,R(Ce,d[Ue],p,null,v,k,P,E,S),de++)}const oa=Ft?Qc(nn):Ut;for(re=oa.length-1,x=Ne-1;x>=0;x--){const Ce=W+x,Ue=d[Ce],sa=Ce+1<N?d[Ce+1].el:_;nn[x]===0?R(null,Ue,p,sa,v,k,P,E,S):Ft&&(re<0||x!==oa[re]?Be(Ue,p,sa,2):re--)}}},Be=(u,d,p,_,v=null)=>{const{el:k,type:P,transition:E,children:S,shapeFlag:x}=u;if(x&6){Be(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){P.move(u,d,p,L);return}if(P===Ae){r(k,d,p);for(let H=0;H<S.length;H++)Be(S[H],d,p,_);r(u.anchor,d,p);return}if(P===jr){C(u,d,p);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),Se(()=>E.enter(k),v);else{const{leave:H,delayLeave:j,afterLeave:B}=E,W=()=>r(k,d,p),Z=()=>{H(k,()=>{W(),B&&B()})};j?j(k,W,Z):Z()}else r(k,d,p)},Ee=(u,d,p,_=!1,v=!1)=>{const{type:k,props:P,ref:E,children:S,dynamicChildren:x,shapeFlag:N,patchFlag:H,dirs:j}=u;if(E!=null&&ni(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const B=N&1&&j,W=!Qn(u);let Z;if(W&&(Z=P&&P.onVnodeBeforeUnmount)&&Ve(Z,d,u),N&6)Mn(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}B&&Et(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):x&&(k!==Ae||H>0&&H&64)?ye(x,d,p,!1,!0):(k===Ae&&H&384||!v&&N&16)&&ye(S,d,p),_&&jt(u)}(W&&(Z=P&&P.onVnodeUnmounted)||B)&&Se(()=>{Z&&Ve(Z,d,u),B&&Et(u,null,d,"unmounted")},p)},jt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===Ae){$t(p,_);return}if(d===jr){z(u);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,S=()=>P(p,k);E?E(u.el,k,S):S()}else k()},$t=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},Mn=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:P,um:E}=u;_&&Rr(_),v.stop(),k&&(k.active=!1,Ee(P,u,d,p)),E&&Se(E,d),Se(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ye=(u,d,p,_=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)Ee(u[P],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const O=(u,d,p)=>{u==null?d._vnode&&Ee(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,ga(),is(),T=!1),d._vnode=u},L={p:R,um:Ee,m:Be,r:jt,mt:tn,mc:ve,pc:G,pbc:Ie,n:b,o:e};let X,oe;return{render:O,hydrate:X,createApp:Bc(O,X)}}function Lr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Es(e,t,n=!1){const r=e.children,i=t.children;if(D(r)&&D(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=ut(i[a]),s.el=o.el),n||Es(o,s)),s.type===xr&&(s.el=o.el)}}function Qc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function ks(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ks(t)}const Jc=e=>e.__isTeleport,Ae=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),jr=Symbol.for("v-stc"),mn=[];let $e=null;function le(e=!1){mn.push($e=e?null:[])}function Zc(){mn.pop(),$e=mn[mn.length-1]||null}let xn=1;function Oa(e){xn+=e}function Ss(e){return e.dynamicChildren=xn>0?$e||Ut:null,Zc(),xn>0&&$e&&$e.push(e),e}function me(e,t,n,r,i,a){return Ss(K(e,t,n,r,i,a,!0))}function As(e,t,n,r,i){return Ss(he(e,t,n,r,i,!0))}function ri(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Os=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||Pe(e)||U(e)?{i:je,r:e,k:t,f:!!n}:e:null);function K(e,t=null,n=null,r=0,i=null,a=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Os(t),ref:t&&Zn(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return s?(Hi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),xn>0&&!o&&$e&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&$e.push(l),l}const he=ef;function ef(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===gc)&&(e=It),ri(e)){const s=Kt(e,t,!0);return n&&Hi(s,n),xn>0&&!a&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(df(e)&&(e=e.__vccOpts),t){t=tf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=Si(s)),ae(l)&&(Xo(l)&&!D(l)&&(l=pe({},l)),t.style=ki(l))}const o=ce(e)?1:bc(e)?128:Jc(e)?64:ae(e)?4:U(e)?2:0;return K(e,t,n,r,i,o,a,!0)}function tf(e){return e?Xo(e)||vs(e)?pe({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:o,children:s,transition:l}=e,f=t?nf(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Os(f),ref:t&&t.ref?n&&a?D(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(c.transition=l.clone(c)),c}function or(e=" ",t=0){return he(xr,null,e,t)}function Ps(e="",t=!1){return t?(le(),As(It,null,e)):he(It,null,e)}function We(e){return e==null||typeof e=="boolean"?he(It):D(e)?he(Ae,null,e.slice()):typeof e=="object"?ut(e):he(xr,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Hi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Hi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!vs(t)?t._ctx=je:i===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[or(t)]):n=8);e.children=t,e.shapeFlag|=n}function nf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Si([t.class,r.class]));else if(i==="style")t.style=ki([t.style,r.style]);else if(dr(i)){const a=t[i],o=r[i];o&&a!==o&&!(D(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ve(e,t,n,r=null){ze(e,t,7,[n,r])}const rf=hs();let af=0;function of(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||rf,a={uid:af++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ys(r,i),emitsOptions:os(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=fc.bind(null,a),e.ce&&e.ce(a),a}let we=null,sr,ii;{const e=Mo(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};sr=t("__VUE_INSTANCE_SETTERS__",n=>we=n),ii=t("__VUE_SSR_SETTERS__",n=>Er=n)}const Rn=e=>{const t=we;return sr(e),e.scope.on(),()=>{e.scope.off(),sr(t)}},Pa=()=>{we&&we.scope.off(),sr(null)};function Cs(e){return e.vnode.shapeFlag&4}let Er=!1;function sf(e,t=!1){t&&ii(t);const{props:n,children:r}=e.vnode,i=Cs(e);Uc(e,n,i,t),Yc(e,r);const a=i?lf(e,t):void 0;return t&&ii(!1),a}function lf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Lc);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?ff(e):null,a=Rn(e);_t();const o=pt(r,e,0,[e.props,i]);if(wt(),a(),Ro(o)){if(o.then(Pa,Pa),t)return o.then(s=>{Ca(e,s,t)}).catch(s=>{br(s,e,0)});e.asyncDep=o}else Ca(e,o,t)}else Rs(e,t)}function Ca(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=es(t)),Rs(e,n)}let Ra;function Rs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ra&&!r.render){const i=r.template||Fi(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:a,delimiters:s},o),l);r.render=Ra(i,f)}}e.render=r.render||Te}{const i=Rn(e);_t();try{jc(e)}finally{wt(),i()}}}const cf={get(e,t){return Oe(e,"get",""),e[t]}};function ff(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cf),slots:e.slots,emit:e.emit,expose:t}}function Di(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(es(Zl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function uf(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function df(e){return U(e)&&"__vccOpts"in e}const ge=(e,t)=>ec(e,t,Er);function Bi(e,t,n){const r=arguments.length;return r===2?ae(t)&&!D(t)?ri(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ri(n)&&(n=[n]),he(e,t,n))}const mf="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hf="http://www.w3.org/2000/svg",pf="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,Ia=dt&&dt.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?dt.createElementNS(hf,e):t==="mathml"?dt.createElementNS(pf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ia.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Ia.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vf=Symbol("_vtc");function bf(e,t,n){const r=e[vf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ta=Symbol("_vod"),yf=Symbol("_vsh"),_f=Symbol(""),wf=/(^|;)\s*display\s*:/;function xf(e,t,n){const r=e.style,i=ce(n);let a=!1;if(n&&!i){if(t)if(ce(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&er(r,s,"")}else for(const o in t)n[o]==null&&er(r,o,"");for(const o in n)o==="display"&&(a=!0),er(r,o,n[o])}else if(i){if(t!==n){const o=r[_f];o&&(n+=";"+o),r.cssText=n,a=wf.test(n)}}else t&&e.removeAttribute("style");Ta in e&&(e[Ta]=a?r.display:"",e[yf]&&(r.display="none"))}const Na=/\s*!important$/;function er(e,t,n){if(D(n))n.forEach(r=>er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);Na.test(n)?e.setProperty(Qt(r),n.replace(Na,""),"important"):e[r]=n}}const Ma=["Webkit","Moz","ms"],$r={};function Ef(e,t){const n=$r[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return $r[t]=r;r=pr(r);for(let i=0;i<Ma.length;i++){const a=Ma[i]+r;if(a in e)return $r[t]=a}return t}const La="http://www.w3.org/1999/xlink";function kf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(La,t.slice(6,t.length)):e.setAttributeNS(La,t,n);else{const a=Rl(t);n==null||a&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Sf(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Lo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Af(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}const ja=Symbol("_vei");function Pf(e,t,n,r,i=null){const a=e[ja]||(e[ja]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Cf(t);if(r){const f=a[t]=Tf(r,i);Af(e,s,f,l)}else o&&(Of(e,s,o,l),a[t]=void 0)}}const $a=/(?:Once|Passive|Capture)$/;function Cf(e){let t;if($a.test(e)){t={};let r;for(;r=e.match($a);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qt(e.slice(2)),t]}let Fr=0;const Rf=Promise.resolve(),If=()=>Fr||(Rf.then(()=>Fr=0),Fr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mf=(e,t,n,r,i,a,o,s,l)=>{const f=i==="svg";t==="class"?bf(e,r,f):t==="style"?xf(e,n,r):dr(t)?wi(t)||Pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,f))?Sf(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kf(e,t,r,f))};function Lf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fa(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fa(t)&&ce(n)?!1:t in e}const jf=pe({patchProp:Mf},gf);let za;function $f(){return za||(za=Gc(jf))}const Ff=(...e)=>{const t=$f().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Hf(r);if(!i)return;const a=t._component;!U(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,zf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function zf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Hf(e){return ce(e)?document.querySelector(e):e}const Is=e=>(Li("data-v-846f481c"),e=e(),ji(),e),Df={class:"container"},Bf={class:"left"},Uf={class:"branding p-md"},Vf={class:"nav grow"},Wf={key:0},Yf={class:"text-lg p-md foot"},Kf={href:"https://github.com/jemberton",title:"jemberton's github"},Gf={class:"right grow"},qf=Is(()=>K("div",{class:"menu p-md"},null,-1)),Xf={class:"main grow"},Qf=Is(()=>K("div",{class:"foot p-md"},null,-1)),Jf=Jt({__name:"App",setup(e){const t=[{title:"home",icon:"fa-solid fa-house fa-fw",url:"/"}];return(n,r)=>{const i=Nr("font-awesome-icon"),a=Nr("RouterLink"),o=Nr("RouterView");return le(),me("div",Df,[K("div",Bf,[K("div",Uf,[he(i,{icon:["fas","code"],class:"text-xl"})]),K("div",Vf,[(le(),me(Ae,null,$i(t,s=>he(a,{to:s.url,class:"nav-item p-sm"},{default:ss(()=>[s.icon!==""?(le(),me("div",Wf,[he(i,{icon:s.icon},null,8,["icon"])])):Ps("",!0),K("div",null,Me(s.title),1)]),_:2},1032,["to"])),64))]),K("div",Yf,[K("a",Kf,[he(i,{icon:"fa-brands fa-github"})])])]),K("div",Gf,[qf,K("div",Xf,[he(o)]),Qf])])}}}),Zt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Zf=Zt(Jf,[["__scopeId","data-v-846f481c"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof document<"u";function eu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function zr(e,t){const n={};for(const r in t){const i=t[r];n[r]=He(i)?i.map(e):e(i)}return n}const hn=()=>{},He=Array.isArray,Ts=/#/g,tu=/&/g,nu=/\//g,ru=/=/g,iu=/\?/g,Ns=/\+/g,au=/%5B/g,ou=/%5D/g,Ms=/%5E/g,su=/%60/g,Ls=/%7B/g,lu=/%7C/g,js=/%7D/g,cu=/%20/g;function Ui(e){return encodeURI(""+e).replace(lu,"|").replace(au,"[").replace(ou,"]")}function fu(e){return Ui(e).replace(Ls,"{").replace(js,"}").replace(Ms,"^")}function ai(e){return Ui(e).replace(Ns,"%2B").replace(cu,"+").replace(Ts,"%23").replace(tu,"%26").replace(su,"`").replace(Ls,"{").replace(js,"}").replace(Ms,"^")}function uu(e){return ai(e).replace(ru,"%3D")}function du(e){return Ui(e).replace(Ts,"%23").replace(iu,"%3F")}function mu(e){return e==null?"":du(e).replace(nu,"%2F")}function En(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const hu=/\/$/,pu=e=>e.replace(hu,"");function Hr(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=yu(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:En(o)}}function gu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ha(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function vu(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Gt(t.matched[r],n.matched[i])&&$s(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $s(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bu(e[n],t[n]))return!1;return!0}function bu(e,t){return He(e)?Da(e,t):He(t)?Da(t,e):e===t}function Da(e,t){return He(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function yu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var kn;(function(e){e.pop="pop",e.push="push"})(kn||(kn={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function _u(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pu(e)}const wu=/^[^#]+#/;function xu(e,t){return e.replace(wu,"#")+t}function Eu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const kr=()=>({left:window.scrollX,top:window.scrollY});function ku(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Eu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ba(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function Su(e,t){oi.set(e,t)}function Au(e){const t=oi.get(e);return oi.delete(e),t}let Ou=()=>location.protocol+"//"+location.host;function Fs(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),Ha(l,"")}return Ha(n,e)+r+i}function Pu(e,t,n,r){let i=[],a=[],o=null;const s=({state:h})=>{const g=Fs(e,location),A=n.value,R=t.value;let $=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}$=R?h.position-R.position:0}else r(g);i.forEach(y=>{y(n.value,A,{delta:$,type:kn.pop,direction:$?$>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function f(h){i.push(h);const g=()=>{const A=i.indexOf(h);A>-1&&i.splice(A,1)};return a.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(Q({},h.state,{scroll:kr()}),"")}function m(){for(const h of a)h();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function Ua(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?kr():null}}function Cu(e){const{history:t,location:n}=window,r={value:Fs(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Ou()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=Q({},t.state,Ua(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,f){const c=Q({},i.value,t.state,{forward:l,scroll:kr()});a(c.current,c,!0);const m=Q({},Ua(r.value,l,null),{position:c.position+1},f);a(l,m,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function Ru(e){e=_u(e);const t=Cu(e),n=Pu(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=Q({location:"",base:e,go:r,createHref:xu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Iu(e){return typeof e=="string"||e&&typeof e=="object"}function zs(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hs=Symbol("");var Va;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Va||(Va={}));function qt(e,t){return Q(new Error,{type:e,[Hs]:!0},t)}function Xe(e,t){return e instanceof Error&&Hs in e&&(t==null||!!(e.type&t))}const Wa="[^/]+?",Tu={sensitive:!1,strict:!1,start:!0,end:!0},Nu=/[.+*?^${}()[\]/\\]/g;function Mu(e,t){const n=Q({},Tu,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(Nu,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:R,optional:$,regexp:y}=h;a.push({name:A,repeatable:R,optional:$});const w=y||Wa;if(w!==Wa){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+z.message)}}let C=R?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=$&&f.length<2?`(?:/${C})`:"/"+C),$&&(C+="?"),i+=C,g+=20,$&&(g+=-8),R&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=a[h-1];m[A.name]=g&&A.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:$}=g,y=A in f?f[A]:"";if(He(y)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=He(y)?y.join("/"):y;if(!w)if($)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${A}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Lu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ju(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Lu(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(Ya(r))return 1;if(Ya(i))return-1}return i.length-r.length}function Ya(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $u={type:0,value:""},Fu=/[a-zA-Z0-9_]/;function zu(e){if(!e)return[[]];if(e==="/")return[[$u]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,f="",c="";function m(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Fu.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),i}function Hu(e,t,n){const r=Mu(zu(e.path),n),i=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Du(e,t){const n=[],r=new Map;t=qa({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,A=Bu(c);A.aliasOf=h&&h.record;const R=qa(t,c),$=[A];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)$.push(Q({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let y,w;for(const C of $){const{path:z}=C;if(m&&z[0]!=="/"){const V=m.record.path,F=V[V.length-1]==="/"?"":"/";C.path=m.record.path+(z&&F+z)}if(y=Hu(C,m,R),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Ga(y)&&o(c.name)),A.children){const V=A.children;for(let F=0;F<V.length;F++)a(V[F],y,h&&h.children[F])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:hn}function o(c){if(zs(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&ju(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Ds(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Ga(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},A,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw qt(1,{location:c});R=h.record.name,g=Q(Ka(m.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),c.params&&Ka(c.params,h.keys.map(w=>w.name))),A=h.stringify(g)}else if(c.path!=null)A=c.path,h=n.find(w=>w.re.test(A)),h&&(g=h.parse(A),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw qt(1,{location:c,currentLocation:m});R=h.record.name,g=Q({},m.params,c.params),A=h.stringify(g)}const $=[];let y=h;for(;y;)$.unshift(y.record),y=y.parent;return{name:R,path:A,params:g,matched:$,meta:Vu($)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function Ka(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Bu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Uu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Uu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ga(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vu(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function qa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ds(e,t){return t.children.some(n=>n===e||Ds(e,n))}function Wu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Ns," "),o=a.indexOf("="),s=En(o<0?a:a.slice(0,o)),l=o<0?null:En(a.slice(o+1));if(s in t){let f=t[s];He(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Xa(e){let t="";for(let n in e){const r=e[n];if(n=uu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(He(r)?r.map(a=>a&&ai(a)):[r&&ai(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Yu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=He(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Ku=Symbol(""),Qa=Symbol(""),Vi=Symbol(""),Bs=Symbol(""),si=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function mt(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const f=h=>{h===!1?l(qt(4,{from:n,to:t})):h instanceof Error?l(h):Iu(h)?l(qt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},c=a(()=>e.call(r&&r.instances[i],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>l(h))})}function Dr(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Gu(l)){const c=(l.__vccOpts||l)[t];c&&a.push(mt(c,n,r,o,s,i))}else{let f=l();a.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=eu(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&mt(g,n,r,o,s,i)()}))}}return a}function Gu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ja(e){const t=Ze(Vi),n=Ze(Bs),r=ge(()=>{const l=Rt(e.to);return t.resolve(l)}),i=ge(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Gt.bind(null,c));if(h>-1)return h;const g=Za(l[f-2]);return f>1&&Za(c)===g&&m[m.length-1].path!==g?m.findIndex(Gt.bind(null,l[f-2])):h}),a=ge(()=>i.value>-1&&Ju(n.params,r.value.params)),o=ge(()=>i.value>-1&&i.value===n.matched.length-1&&$s(n.params,r.value.params));function s(l={}){return Qu(l)?t[Rt(e.replace)?"replace":"push"](Rt(e.to)).catch(hn):Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const qu=Jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ja,setup(e,{slots:t}){const n=vr(Ja(e)),{options:r}=Ze(Vi),i=ge(()=>({[eo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Bi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Xu=qu;function Qu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ju(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!He(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function Za(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const eo=(e,t,n)=>e??t??n,Zu=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(si),i=ge(()=>e.route||r.value),a=Ze(Qa,0),o=ge(()=>{let f=Rt(a);const{matched:c}=i.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=ge(()=>i.value.matched[o.value]);Jn(Qa,ge(()=>o.value+1)),Jn(Ku,s),Jn(si,i);const l=tc();return fn(()=>[l.value,s.value,e.name],([f,c,m],[h,g,A])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Gt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return to(n.default,{Component:h,route:f});const g=m.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,$=Bi(h,Q({},A,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return to(n.default,{Component:$,route:f})||$}}});function to(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ed=Zu;function td(e){const t=Du(e.routes,e),n=e.parseQuery||Wu,r=e.stringifyQuery||Xa,i=e.history,a=an(),o=an(),s=an(),l=nc(lt);let f=lt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,b=>""+b),m=zr.bind(null,mu),h=zr.bind(null,En);function g(b,T){let O,L;return zs(b)?(O=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,O)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function $(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=Q({},T||l.value),typeof b=="string"){const d=Hr(n,b,T.path),p=t.resolve({path:d.path},T),_=i.createHref(d.fullPath);return Q(d,p,{params:h(p.params),hash:En(d.hash),redirectedFrom:void 0,href:_})}let O;if(b.path!=null)O=Q({},b,{path:Hr(n,b.path,T.path).path});else{const d=Q({},b.params);for(const p in d)d[p]==null&&delete d[p];O=Q({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(O,T),X=b.hash||"";L.params=c(h(L.params));const oe=gu(r,Q({},b,{hash:fu(X),path:L.path})),u=i.createHref(oe);return Q({fullPath:oe,hash:X,query:r===Xa?Yu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function w(b){return typeof b=="string"?Hr(n,b,l.value.path):Q({},b)}function C(b,T){if(f!==b)return qt(8,{from:T,to:b})}function z(b){return ee(b)}function V(b){return z(Q(w(b),{replace:!0}))}function F(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),Q({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function ee(b,T){const O=f=y(b),L=l.value,X=b.state,oe=b.force,u=b.replace===!0,d=F(O);if(d)return ee(Q(w(d),{state:typeof d=="object"?Q({},X,d.state):X,force:oe,replace:u}),T||O);const p=O;p.redirectedFrom=T;let _;return!oe&&vu(r,L,O)&&(_=qt(16,{to:p,from:L}),Be(L,L,!0,!1)),(_?Promise.resolve(_):Ie(p,L)).catch(v=>Xe(v)?Xe(v,2)?v:ot(v):G(v,p,L)).then(v=>{if(v){if(Xe(v,2))return ee(Q({replace:u},w(v.to),{state:typeof v.to=="object"?Q({},X,v.to.state):X,force:oe}),T||p)}else v=xt(p,L,!0,u,X);return at(p,L,v),v})}function ve(b,T){const O=C(b,T);return O?Promise.reject(O):Promise.resolve()}function be(b){const T=$t.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Ie(b,T){let O;const[L,X,oe]=nd(b,T);O=Dr(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{O.push(mt(p,b,T))});const u=ve.bind(null,b,T);return O.push(u),ye(O).then(()=>{O=[];for(const d of a.list())O.push(mt(d,b,T));return O.push(u),ye(O)}).then(()=>{O=Dr(X,"beforeRouteUpdate",b,T);for(const d of X)d.updateGuards.forEach(p=>{O.push(mt(p,b,T))});return O.push(u),ye(O)}).then(()=>{O=[];for(const d of oe)if(d.beforeEnter)if(He(d.beforeEnter))for(const p of d.beforeEnter)O.push(mt(p,b,T));else O.push(mt(d.beforeEnter,b,T));return O.push(u),ye(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=Dr(oe,"beforeRouteEnter",b,T,be),O.push(u),ye(O))).then(()=>{O=[];for(const d of o.list())O.push(mt(d,b,T));return O.push(u),ye(O)}).catch(d=>Xe(d,8)?d:Promise.reject(d))}function at(b,T,O){s.list().forEach(L=>be(()=>L(b,T,O)))}function xt(b,T,O,L,X){const oe=C(b,T);if(oe)return oe;const u=T===lt,d=zt?history.state:{};O&&(L||u?i.replace(b.fullPath,Q({scroll:u&&d&&d.scroll},X)):i.push(b.fullPath,X)),l.value=b,Be(b,T,O,u),ot()}let De;function tn(){De||(De=i.listen((b,T,O)=>{if(!Mn.listening)return;const L=y(b),X=F(L);if(X){ee(Q(X,{replace:!0}),L).catch(hn);return}f=L;const oe=l.value;zt&&Su(Ba(oe.fullPath,O.delta),kr()),Ie(L,oe).catch(u=>Xe(u,12)?u:Xe(u,2)?(ee(u.to,L).then(d=>{Xe(d,20)&&!O.delta&&O.type===kn.pop&&i.go(-1,!1)}).catch(hn),Promise.reject()):(O.delta&&i.go(-O.delta,!1),G(u,L,oe))).then(u=>{u=u||xt(L,oe,!1),u&&(O.delta&&!Xe(u,8)?i.go(-O.delta,!1):O.type===kn.pop&&Xe(u,20)&&i.go(-1,!1)),at(L,oe,u)}).catch(hn)}))}let Lt=an(),ue=an(),J;function G(b,T,O){ot(b);const L=ue.list();return L.length?L.forEach(X=>X(b,T,O)):console.error(b),Promise.reject(b)}function qe(){return J&&l.value!==lt?Promise.resolve():new Promise((b,T)=>{Lt.add([b,T])})}function ot(b){return J||(J=!b,tn(),Lt.list().forEach(([T,O])=>b?O(b):T()),Lt.reset()),b}function Be(b,T,O,L){const{scrollBehavior:X}=e;if(!zt||!X)return Promise.resolve();const oe=!O&&Au(Ba(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return ns().then(()=>X(b,T,oe)).then(u=>u&&ku(u)).catch(u=>G(u,b,T))}const Ee=b=>i.go(b);let jt;const $t=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:$,getRoutes:R,resolve:y,options:e,push:z,replace:V,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ue.add,isReady:qe,install(b){const T=this;b.component("RouterLink",Xu),b.component("RouterView",ed),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(l)}),zt&&!jt&&l.value===lt&&(jt=!0,z(i.location).catch(X=>{}));const O={};for(const X in lt)Object.defineProperty(O,X,{get:()=>l.value[X],enumerable:!0});b.provide(Vi,T),b.provide(Bs,Go(O)),b.provide(si,l);const L=b.unmount;$t.add(b),b.unmount=function(){$t.delete(b),$t.size<1&&(f=lt,De&&De(),De=null,l.value=lt,jt=!1,J=!1),L()}}};function ye(b){return b.reduce((T,O)=>T.then(()=>be(O)),Promise.resolve())}return Mn}function nd(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(f=>Gt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Gt(f,l))||i.push(l))}return[n,r,i]}const rd={class:"font-retina card rounded-sm shrink shadow"},id={key:0,class:"post-image filter-bw"},ad=["src"],od={key:1,class:"post-avatar p-md"},sd=["src"],ld={class:"post-metadata"},cd={class:"post-author text-lg"},fd={class:"post-username"},ud=["href"],dd={key:2,class:"post-metadata p-xl"},md={class:"post-author text-lg"},hd={class:"post-username"},pd=["href"],gd={class:"post-data p-lg"},vd={class:"post-title text-subtext1 text-lg"},bd={class:"post-timestamp text-subtext0 text-sm"},yd={class:"post-body gutters-v text-text"},_d={class:"post-actions"},wd={class:"post-file bg-blue p-xs rounded-sm text-mantle"},xd=Jt({__name:"BlogPost",props:{post:{}},setup(e){const t=e,n=r=>new Date(r).toISOString();return(r,i)=>(le(),me("div",rd,[t.post.image?(le(),me("div",id,[K("img",{src:t.post.image},null,8,ad)])):Ps("",!0),t.post.avatar?(le(),me("div",od,[K("img",{src:t.post.avatar,class:"round"},null,8,sd),K("div",ld,[K("div",cd,[K("strong",null,Me(t.post.author),1)]),K("div",fd,[t.post.link?(le(),me("a",{key:0,href:t.post.link},Me(t.post.username),9,ud)):(le(),me(Ae,{key:1},[or(Me(t.post.username),1)],64))])])])):(le(),me("div",dd,[K("div",md,[K("strong",null,Me(t.post.author),1)]),K("div",hd,[t.post.link?(le(),me("a",{key:0,href:t.post.link},Me(t.post.username),9,pd)):(le(),me(Ae,{key:1},[or(Me(t.post.username),1)],64))])])),K("div",gd,[K("div",vd,Me(t.post.title),1),K("div",bd,Me(n(t.post.timestamp)),1),K("div",yd,Me(t.post.body),1),K("div",_d,[(le(!0),me(Ae,null,$i(t.post.files,a=>(le(),me("div",wd,Me(a),1))),256))])])]))}}),Ed=Zt(xd,[["__scopeId","data-v-94f02c2e"]]),kd=[{title:"TEST POST",body:"TEST FOR DESIGN PURPOSES",timestamp:1715124732390,image:"",files:[],avatar:"",author:"Josh",username:"@jemberton",link:"https://github.com/jemberton"}],Sd={posts:kd},Ad=e=>(Li("data-v-be542e59"),e=e(),ji(),e),Od={class:"sheet"},Pd=Ad(()=>K("div",{class:"code p-md rounded-xs"},[K("span",{class:"text-green"},"jemberton@github ~$"),K("span",null,"echo $BLOG")],-1)),Cd=Jt({__name:"Home",setup(e){return(t,n)=>(le(),me("div",Od,[Pd,(le(!0),me(Ae,null,$i(Rt(Sd).posts,r=>(le(),As(Ed,{post:r},null,8,["post"]))),256))]))}}),Rd=Zt(Cd,[["__scopeId","data-v-be542e59"]]),Id={},Td=e=>(Li("data-v-737028da"),e=e(),ji(),e),Nd={class:"sheet"},Md=Td(()=>K("ul",null,[or(" TODO LIST "),K("li",null,"linux beginner guide")],-1)),Ld=[Md];function jd(e,t){return le(),me("div",Nd,Ld)}const $d=Zt(Id,[["render",jd],["__scopeId","data-v-737028da"]]),Fd={},zd={class:"sheet"};function Hd(e,t){return le(),me("div",zd," projects go here ... ")}const Dd=Zt(Fd,[["render",Hd],["__scopeId","data-v-ccd8e83b"]]),Bd={},Ud={class:"sheet"};function Vd(e,t){return le(),me("div",Ud," When I'm ready ... I'll put my contact info here. Otherwise, try messaging through github. ")}const Wd=Zt(Bd,[["render",Vd],["__scopeId","data-v-be86191f"]]),Yd=td({history:Ru("/"),routes:[{path:"/",name:"home",component:Rd},{path:"/guides",name:"guides",component:$d},{path:"/projects",name:"projects",component:Dd},{path:"/contact",name:"contact",component:Wd}]});function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?no(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function Kd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qd(e,t,n){return t&&Gd(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wi(e,t){return Qd(e)||Zd(e,t)||Us(e,t)||tm()}function In(e){return Xd(e)||Jd(e)||Us(e)||em()}function Xd(e){if(Array.isArray(e))return li(e)}function Qd(e){if(Array.isArray(e))return e}function Jd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Us(e,t){if(e){if(typeof e=="string")return li(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return li(e,t)}}function li(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function em(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ro=function(){},Yi={},Vs={},Ws=null,Ys={mark:ro,measure:ro};try{typeof window<"u"&&(Yi=window),typeof document<"u"&&(Vs=document),typeof MutationObserver<"u"&&(Ws=MutationObserver),typeof performance<"u"&&(Ys=performance)}catch{}var nm=Yi.navigator||{},io=nm.userAgent,ao=io===void 0?"":io,vt=Yi,ne=Vs,oo=Ws,Dn=Ys;vt.document;var it=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Ks=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Bn,Un,Vn,Wn,Yn,et="___FONT_AWESOME___",ci=16,Gs="fa",qs="svg-inline--fa",Tt="data-fa-i2svg",fi="data-fa-pseudo-element",rm="data-fa-pseudo-element-pending",Ki="data-prefix",Gi="data-icon",so="fontawesome-i2svg",im="async",am=["HTML","HEAD","STYLE","SCRIPT"],Xs=function(){try{return!0}catch{return!1}}(),te="classic",se="sharp",qi=[te,se];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Sn=Tn((Bn={},fe(Bn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(Bn,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Bn)),An=Tn((Un={},fe(Un,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Un,se,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Un)),On=Tn((Vn={},fe(Vn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Vn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Vn)),om=Tn((Wn={},fe(Wn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Wn,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Wn)),sm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Qs="fa-layers-text",lm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cm=Tn((Yn={},fe(Yn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Yn,se,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Yn)),Js=[1,2,3,4,5,6,7,8,9,10],fm=Js.concat([11,12,13,14,15,16,17,18,19,20]),um=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=new Set;Object.keys(An[te]).map(Pn.add.bind(Pn));Object.keys(An[se]).map(Pn.add.bind(Pn));var dm=[].concat(qi,In(Pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Js.map(function(e){return"".concat(e,"x")})).concat(fm.map(function(e){return"w-".concat(e)})),gn=vt.FontAwesomeConfig||{};function mm(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var pm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pm.forEach(function(e){var t=Wi(e,2),n=t[0],r=t[1],i=hm(mm(n));i!=null&&(gn[r]=i)})}var Zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Gs,replacementClass:qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Xt=I(I({},Zs),gn);Xt.autoReplaceSvg||(Xt.observeMutations=!1);var M={};Object.keys(Zs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Xt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Xt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Xt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Xt.cssPrefix}});vt.FontAwesomeConfig=M;var vn=[];function gm(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ct=ci,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vm(e){if(!(!e||!it)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ne.head.insertBefore(t,r),e}}var bm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cn(){for(var e=12,t="";e-- >0;)t+=bm[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xi(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function el(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ym(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(el(e[n]),'" ')},"").trim()}function Sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qi(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function _m(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function wm(e){var t=e.transform,n=e.width,r=n===void 0?ci:n,i=e.height,a=i===void 0?ci:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ks?l+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):l+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),l+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xm=`:root, :host {
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
}`;function tl(){var e=Gs,t=qs,n=M.cssPrefix,r=M.replacementClass,i=xm;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var lo=!1;function Br(){M.autoAddCss&&!lo&&(vm(tl()),lo=!0)}var Em={mixout:function(){return{dom:{css:tl,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},tt=vt||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var Fe=tt[et],nl=[],km=function e(){ne.removeEventListener("DOMContentLoaded",e),cr=1,nl.map(function(t){return t()})},cr=!1;it&&(cr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),cr||ne.addEventListener("DOMContentLoaded",km));function Sm(e){it&&(cr?setTimeout(e,0):nl.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?el(e):"<".concat(t," ").concat(ym(r),">").concat(a.map(Nn).join(""),"</").concat(t,">")}function co(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ur=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,l,f,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)f=a[l],c=s(c,t[f],f,t);return c};function Am(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ui(e){var t=Am(e);return t.length===1?t[0].toString(16):null}function Om(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function di(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=fo(t);typeof Fe.hooks.addPack=="function"&&!i?Fe.hooks.addPack(e,fo(t)):Fe.styles[e]=I(I({},Fe.styles[e]||{}),a),e==="fas"&&di("fa",t)}var Kn,Gn,qn,Dt=Fe.styles,Pm=Fe.shims,Cm=(Kn={},fe(Kn,te,Object.values(On[te])),fe(Kn,se,Object.values(On[se])),Kn),Ji=null,rl={},il={},al={},ol={},sl={},Rm=(Gn={},fe(Gn,te,Object.keys(Sn[te])),fe(Gn,se,Object.keys(Sn[se])),Gn);function Im(e){return~dm.indexOf(e)}function Tm(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Im(i)?i:null}var ll=function(){var t=function(a){return Ur(Dt,function(o,s,l){return o[l]=Ur(s,a,{}),o},{})};rl=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),il=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),sl=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Dt||M.autoFetchSvg,r=Ur(Pm,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});al=r.names,ol=r.unicodes,Ji=Ar(M.styleDefault,{family:M.familyDefault})};gm(function(e){Ji=Ar(e.styleDefault,{family:M.familyDefault})});ll();function Zi(e,t){return(rl[e]||{})[t]}function Nm(e,t){return(il[e]||{})[t]}function Ot(e,t){return(sl[e]||{})[t]}function cl(e){return al[e]||{prefix:null,iconName:null}}function Mm(e){var t=ol[e],n=Zi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Ji}var ea=function(){return{prefix:null,iconName:null,rest:[]}};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,i=Sn[r][e],a=An[r][e]||An[r][i],o=e in Fe.styles?e:null;return a||o||null}var uo=(qn={},fe(qn,te,Object.keys(On[te])),fe(qn,se,Object.keys(On[se])),qn);function Or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},fe(t,te,"".concat(M.cssPrefix,"-").concat(te)),fe(t,se,"".concat(M.cssPrefix,"-").concat(se)),t),o=null,s=te;(e.includes(a[te])||e.some(function(f){return uo[te].includes(f)}))&&(s=te),(e.includes(a[se])||e.some(function(f){return uo[se].includes(f)}))&&(s=se);var l=e.reduce(function(f,c){var m=Tm(M.cssPrefix,c);if(Dt[c]?(c=Cm[s].includes(c)?om[s][c]:c,o=c,f.prefix=c):Rm[s].indexOf(c)>-1?(o=c,f.prefix=Ar(c,{family:s})):m?f.iconName=m:c!==M.replacementClass&&c!==a[te]&&c!==a[se]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var h=o==="fa"?cl(f.iconName):{},g=Ot(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ea());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bt()||"fas"),l}var Lm=function(){function e(){Kd(this,e),this.definitions={}}return qd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),di(s,o[s]);var l=On[te][s];l&&di(l,o[s]),ll()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),mo=[],Bt={},Yt={},jm=Object.keys(Yt);function $m(e,t){var n=t.mixoutsTo;return mo=e,Bt={},Object.keys(Yt).forEach(function(r){jm.indexOf(r)===-1&&delete Yt[r]}),mo.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),lr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(a[o])})}r.provides&&r.provides(Yt)}),n}function mi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Bt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Bt[e]||[];i.forEach(function(a){a.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Yt[e]?Yt[e].apply(null,t):void 0}function hi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=Ot(n,t)||t,co(fl.definitions,n,t)||co(Fe.styles,n,t)}var fl=new Lm,Fm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Nt("noAuto")},zm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Nt("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Sm(function(){Dm({autoReplaceSvgRoot:n}),Nt("watch",t)})}},Hm={icon:function(t){if(t===null)return null;if(lr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ar(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(sm))){var i=Or(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||bt(),iconName:Ot(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=bt();return{prefix:a,iconName:Ot(a,t)||t}}}},Re={noAuto:Fm,config:M,dom:zm,parse:Hm,library:fl,findIconDefinition:hi,toHtml:Nn},Dm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&it&&M.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(it){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Bm(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Qi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Sr(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Um(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function ta(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,R=A.width,$=A.height,y=i==="fak",w=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat($)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/$*16*.0625,"em")}:{};g&&(C.attributes[Tt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Cn())},children:[l]}),delete C.attributes.title);var V=I(I({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},z),m.styles)}),F=r.found&&n.found?nt("generateAbstractMask",V)||{children:[],attributes:{}}:nt("generateAbstractIcon",V)||{children:[],attributes:{}},ee=F.children,ve=F.attributes;return V.children=ee,V.attributes=ve,s?Um(V):Bm(V)}function ho(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=I({},o.styles);Qi(i)&&(c.transform=wm({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Sr(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Vm(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Sr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vr=Fe.styles;function pi(e){var t=e[0],n=e[1],r=e.slice(4),i=Wi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Wm={found:!1,width:512,height:512};function Ym(e,t){!Xs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gi(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=bt()),new Promise(function(r,i){if(nt("missingIconAbstract"),n==="fa"){var a=cl(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Vr[t]&&Vr[t][e]){var o=Vr[t][e];return r(pi(o))}Ym(e,t),r(I(I({},Wm),{},{icon:M.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var po=function(){},vi=M.measurePerformance&&Dn&&Dn.mark&&Dn.measure?Dn:{mark:po,measure:po},sn='FA "6.5.2"',Km=function(t){return vi.mark("".concat(sn," ").concat(t," begins")),function(){return ul(t)}},ul=function(t){vi.mark("".concat(sn," ").concat(t," ends")),vi.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},na={begin:Km,end:ul},tr=function(){};function go(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function Gm(e){var t=e.getAttribute?e.getAttribute(Ki):null,n=e.getAttribute?e.getAttribute(Gi):null;return t&&n}function qm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Xm(){if(M.autoReplaceSvg===!0)return nr.replace;var e=nr[M.autoReplaceSvg];return e||nr.replace}function Qm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Jm(e){return ne.createElement(e)}function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qm:Jm:n;if(typeof e=="string")return ne.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(dl(o,{ceFn:r}))}),i}function Zm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(dl(i),n)}),n.getAttribute(Tt)===null&&M.keepOriginalSource){var r=ne.createComment(Zm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xi(n).indexOf(M.replacementClass))return nr.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function vo(e){e()}function ml(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=vo;M.mutateApproach===im&&(r=vt.requestAnimationFrame||vo),r(function(){var i=Xm(),a=na.begin("mutate");e.map(i),a(),n()})}}var ra=!1;function hl(){ra=!0}function bi(){ra=!1}var fr=null;function bo(e){if(oo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,i=r===void 0?tr:r,a=e.pseudoElementsCallback,o=a===void 0?tr:a,s=e.observeMutationsRoot,l=s===void 0?ne:s;fr=new oo(function(f){if(!ra){var c=bt();en(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!go(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&go(m.target)&&~um.indexOf(m.attributeName))if(m.attributeName==="class"&&Gm(m.target)){var h=Or(Xi(m.target)),g=h.prefix,A=h.iconName;m.target.setAttribute(Ki,g||c),A&&m.target.setAttribute(Gi,A)}else qm(m.target)&&i(m.target)})}}),it&&fr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eh(){fr&&fr.disconnect()}function th(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function nh(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Or(Xi(e));return i.prefix||(i.prefix=bt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Nm(i.prefix,e.innerText)||Zi(i.prefix,ui(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function rh(e){var t=en(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ih(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nh(e),r=n.iconName,i=n.prefix,a=n.rest,o=rh(e),s=mi("parseNodeAttributes",{},e),l=t.styleParser?th(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var ah=Fe.styles;function pl(e){var t=M.autoReplaceSvg==="nest"?yo(e,{styleParser:!1}):yo(e);return~t.extra.classes.indexOf(Qs)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var yt=new Set;qi.map(function(e){yt.add("fa-".concat(e))});Object.keys(Sn[te]).map(yt.add.bind(yt));Object.keys(Sn[se]).map(yt.add.bind(yt));yt=In(yt);function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ne.documentElement.classList,r=function(m){return n.add("".concat(so,"-").concat(m))},i=function(m){return n.remove("".concat(so,"-").concat(m))},a=M.autoFetchSvg?yt:qi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ah));a.includes("fa")||a.push("fa");var o=[".".concat(Qs,":not([").concat(Tt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=en(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=na.begin("onTree"),f=s.reduce(function(c,m){try{var h=pl(m);h&&c.push(h)}catch(g){Xs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){ml(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function oh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pl(e).then(function(n){n&&ml([n],t)})}function sh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:hi(i||{})),e(r,I(I({},n),{},{mask:i}))}}var lh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ke:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,R=n.classes,$=R===void 0?[]:R,y=n.attributes,w=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var V=t.prefix,F=t.iconName,ee=t.icon;return Pr(I({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Cn()):(w["aria-hidden"]="true",w.focusable="false")),ta({icons:{main:pi(ee),mask:l?pi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:F,transform:I(I({},Ke),i),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:w,styles:z,classes:$}})})}},ch={mixout:function(){return{icon:sh(lh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_o,n.nodeCallback=oh,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ne:r,a=n.callback,o=a===void 0?function(){}:a;return _o(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([gi(i,s),c.iconName?gi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var $=Wi(R,2),y=$[0],w=$[1];g([n,ta({icons:{main:y,mask:w},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Sr(s);l.length>0&&(i.style=l);var f;return Qi(o)&&(f=nt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},fh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Pr({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(In(a)).join(" ")},children:o}]})}}}},uh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Pr({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),Vm({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},dh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ke:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Pr({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),ho({content:n,transform:I(I({},Ke),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Ks){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ho({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},mh=new RegExp('"',"ug"),wo=[1105920,1112319];function hh(e){var t=e.replace(mh,""),n=Om(t,0),r=n>=wo[0]&&n<=wo[1],i=t.length===2?t[0]===t[1]:!1;return{value:ui(i?t[0]:t),isSecondary:r||i}}function xo(e,t){var n="".concat(rm).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=en(e.children),o=a.filter(function(ee){return ee.getAttribute(fi)===t})[0],s=vt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(lm),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?se:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[h][l[2].toLowerCase()]:cm[h][f],A=hh(m),R=A.value,$=A.isSecondary,y=l[0].startsWith("FontAwesome"),w=Zi(g,R),C=w;if(y){var z=Mm(R);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!$&&(!o||o.getAttribute(Ki)!==g||o.getAttribute(Gi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var V=ih(),F=V.extra;F.attributes[fi]=t,gi(w,g).then(function(ee){var ve=ta(I(I({},V),{},{icons:{main:ee,mask:ea()},prefix:g,iconName:C,extra:F,watchable:!0})),be=ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ve.map(function(Ie){return Nn(Ie)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ph(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function gh(e){return e.parentNode!==document.head&&!~am.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fi)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Eo(e){if(it)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(gh).map(ph),i=na.begin("searchPseudoElements");hl(),Promise.all(r).then(function(){i(),bi(),t()}).catch(function(){i(),bi(),n()})})}var vh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Eo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ne:r;M.searchPseudoElements&&Eo(i)}}},ko=!1,bh={mixout:function(){return{dom:{unwatch:function(){hl(),ko=!0}}}},hooks:function(){return{bootstrap:function(){bo(mi("mutationObserverCallbacks",{}))},noAuto:function(){eh()},watch:function(n){var r=n.observeMutationsRoot;ko?bi():bo(mi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},So=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},yh={mixout:function(){return{parse:{transform:function(n){return So(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=So(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _h(e){return e.tag==="g"?e.children:[e]}var wh={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Or(i.split(" ").map(function(o){return o.trim()})):ea();return a.prefix||(a.prefix=bt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,c=a.icon,m=o.width,h=o.icon,g=_m({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:I(I({},Wr),{},{fill:"white"})},R=c.children?{children:c.children.map(Ao)}:{},$={tag:"g",attributes:I({},g.inner),children:[Ao(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[$]},w="mask-".concat(s||Cn()),C="clip-".concat(s||Cn()),z={tag:"mask",attributes:I(I({},Wr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,y]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:_h(h)},z]};return r.push(V,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Wr)}),{children:r,attributes:i}}}},xh={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Eh={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},kh=[Em,ch,fh,uh,dh,vh,bh,yh,wh,xh,Eh];$m(kh,{mixoutsTo:Re});Re.noAuto;Re.config;var Sh=Re.library;Re.dom;var yi=Re.parse;Re.findIconDefinition;Re.toHtml;var Ah=Re.icon;Re.layer;Re.text;Re.counter;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function ke(e,t,n){return t=Rh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ph(e,t){if(e==null)return{};var n=Oh(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ch(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rh(e){var t=Ch(e,"string");return typeof t=="symbol"?t:String(t)}var Ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gl={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!f(w)||m(w)||h(w)||g(w)||l(w))return w;var z,V=0,F=0;if(c(w))for(z=[],F=w.length;V<F;V++)z.push(n(y,w[V],C));else{z={};for(var ee in w)Object.prototype.hasOwnProperty.call(w,ee)&&(z[y(ee,C)]=n(y,w[ee],C))}return z},r=function(y,w){w=w||{};var C=w.separator||"_",z=w.split||/(?=[A-Z])/;return y.split(z).join(C)},i=function(y){return A(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},A=function(y){return y=y-0,y===y},R=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(z,V){return C(z,y,V)}},$={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,w){return n(R(i,w),y)},decamelizeKeys:function(y,w){return n(R(o,w),y,w)},pascalizeKeys:function(y,w){return n(R(a,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Ih)})(gl);var Th=gl.exports,Nh=["class","style"];function Mh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Th.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Lh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return vl(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Lh(c);break;case"style":l.style=Mh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Ph(n,Nh);return Bi(e.tag,Qe(Qe(Qe({},t),{},{class:i.class,style:Qe(Qe({},i.style),o)},i.attrs),s),r)}var bl=!1;try{bl=!0}catch{}function jh(){if(!bl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function $h(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Po(e){if(e&&ur(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(yi.icon)return yi.icon(e);if(e===null)return null;if(ur(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Fh=Jt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ge(function(){return Po(t.icon)}),a=ge(function(){return Yr("classes",$h(t))}),o=ge(function(){return Yr("transform",typeof t.transform=="string"?yi.transform(t.transform):t.transform)}),s=ge(function(){return Yr("mask",Po(t.mask))}),l=ge(function(){return Ah(i.value,Qe(Qe(Qe(Qe({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});fn(l,function(c){if(!c)return jh("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=ge(function(){return l.value?vl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),zh={prefix:"fas",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Hh={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Dh={prefix:"fas",iconName:"book-bookmark",icon:[448,512,[],"e0bb","M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"]},Bh={prefix:"fas",iconName:"folder-tree",icon:[576,512,[],"f802","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z"]},Uh={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Vh=Uh,Wh={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Sh.add(Bh,Vh,zh,Wh,Hh,Dh);const ia=Ff(Zf);ia.component("font-awesome-icon",Fh);ia.use(Yd);ia.mount("#app");
