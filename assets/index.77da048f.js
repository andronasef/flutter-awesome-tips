import{S as e,i as t,s as n,e as r,a as o,b as s,l as i,g as l,t as a,c,d as f,f as m,h as u,I as d,j as g,m as h,k as p,n as x,o as $,p as w,q as b,H as y,r as v,M as k}from"./vendor.db13b0b2.js";function j(e){let t,n;return t=new d({props:{icon:"ic:round-navigate-before",class:"mt-1.5"}}),{c(){g(t.$$.fragment)},m(e,r){h(t,e,r),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function z(e){let t,n;return t=new d({props:{icon:"ic:round-navigate-next",class:"mt-1.5"}}),{c(){g(t.$$.fragment)},m(e,r){h(t,e,r),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function I(e){let t,n,u,d,g,h,p;const x=[z,j],$=[];function w(e,t){return e[0]?1:0}return n=w(e),u=$[n]=x[n](e),{c(){t=r("div"),u.c(),o(t,"class",d="z-10 rounded-full cursor-pointer bg-white/8 h-13 text-white text-center transform transition right-5 bottom-5 shadow-2xl text-4xl w-13 fixed hover:scale-115 active:scale-90 "+(e[0]?"left-5":"right-5"))},m(r,o){s(r,t,o),$[n].m(t,null),g=!0,h||(p=i(t,"click",e[1]),h=!0)},p(e,[r]){let s=n;n=w(e),n!==s&&(l(),a($[s],1,1,(()=>{$[s]=null})),c(),u=$[n],u||(u=$[n]=x[n](e),u.c()),f(u,1),u.m(t,null)),(!g||1&r&&d!==(d="z-10 rounded-full cursor-pointer bg-white/8 h-13 text-white text-center transform transition right-5 bottom-5 shadow-2xl text-4xl w-13 fixed hover:scale-115 active:scale-90 "+(e[0]?"left-5":"right-5")))&&o(t,"class",d)},i(e){g||(f(u),g=!0)},o(e){a(u),g=!1},d(e){e&&m(t),$[n].d(),h=!1,p()}}}function L(e,t,n){const r=u();let{before:o=!1}=t;return e.$$set=e=>{"before"in e&&n(0,o=e.before)},[o,function(){r("next",{next:o})}]}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class D extends e{constructor(e){super(),t(this,e,L,I,n,{before:0})}}function S(e,t,n){const r=e.slice();return r[1]=t[n],r}function F(e){let t,n,i,l,c;return n=new d({props:{icon:e[1][0],class:"transform transition-all hover:scale-125 active:scale-95"}}),{c(){t=r("a"),g(n.$$.fragment),i=x(),o(t,"href",l=e[1][1])},m(e,r){s(e,t,r),h(n,t,null),$(t,i),c=!0},p:w,i(e){c||(f(n.$$.fragment,e),c=!0)},o(e){a(n.$$.fragment,e),c=!1},d(e){e&&m(t),p(n)}}}function T(e){let t,n,i,u,d,g,h,p=e[0],w=[];for(let r=0;r<p.length;r+=1)w[r]=F(S(e,p,r));const y=e=>a(w[e],1,1,(()=>{w[e]=null}));return{c(){t=r("header"),n=r("a"),n.innerHTML='<img src="flutterwhite.svg" alt="Flutter Logo" class="h-9 mr-4 transform transition ease-in-out w-9 rotate-0 duration-500 hover:rotate-360"/> \n    <h1 class="font-extrabold text-white text-xl hidden md:text-2xl md:flex ">Flutter Tips</h1>',i=x(),u=r("span"),d=x(),g=r("div");for(let e=0;e<w.length;e+=1)w[e].c();o(n,"href","/"),o(n,"class","flex justify-end items-center"),o(u,"class","ml-auto"),o(g,"class","space-x-1 mt-2 ml-4 text-[27.5px]"),o(t,"class","flex h-[80px] px-5 text-white/85 items-center")},m(e,r){s(e,t,r),$(t,n),$(t,i),$(t,u),$(t,d),$(t,g);for(let t=0;t<w.length;t+=1)w[t].m(g,null);h=!0},p(e,[t]){if(1&t){let n;for(p=e[0],n=0;n<p.length;n+=1){const r=S(e,p,n);w[n]?(w[n].p(r,t),f(w[n],1)):(w[n]=F(r),w[n].c(),f(w[n],1),w[n].m(g,null))}for(l(),n=p.length;n<w.length;n+=1)y(n);c()}},i(e){if(!h){for(let e=0;e<p.length;e+=1)f(w[e]);h=!0}},o(e){w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)a(w[t]);h=!1},d(e){e&&m(t),b(w,e)}}}function A(e){return[[["ic:baseline-add","https://github.com/andronasef/FlutterAwesomeTips/issues"],["mdi:star","https://github.com/andronasef/FlutterAwesomeTips"],["uim:github-alt","https://github.com/andronasef/FlutterAwesomeTips"]]]}class M extends e{constructor(e){super(),t(this,e,A,T,n,{})}}function N(e){let t,n,i,l;return{c(){t=r("div"),n=new y,i=x(),l=r("style"),l.textContent="@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark-dimmed.min.css';\np > a {\n  color: #4169e1;\n}\n.end {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .end {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\nh1 {\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\nh2 {\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\np {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  opacity: 0.9;\n}\ncode, pre, .hljs {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 55, 55, var(--tw-bg-opacity));\n  border-radius: 0.25rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 2.5px;\n  text-align: left;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  white-space: pre-wrap;\n  width: 100%;\n}\npre {\n  padding: 0.5rem;\n}",n.a=i,o(l,"lang","scss"),o(l,"scoped",""),o(t,"class","flex flex-col h-full space-y-5 w-full p-10 px-[5%] items-center justify-center md:text-left md:px-[20%]")},m(r,o){s(r,t,o),n.m(e[0],t),$(t,i),$(t,l)},p(e,[t]){1&t&&n.p(e[0])},i:w,o:w,d(e){e&&m(t)}}}function q(e,t,n){let{markedDown:r}=t;return e.$$set=e=>{"markedDown"in e&&n(0,r=e.markedDown)},[r]}class B extends e{constructor(e){super(),t(this,e,q,N,n,{markedDown:0})}}function E(e){let t,n;return t=new D({}),t.$on("next",e[3]),{c(){g(t.$$.fragment)},m(e,r){h(t,e,r),n=!0},p:w,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function H(e){let t,n;return t=new D({props:{before:!0}}),t.$on("next",e[3]),{c(){g(t.$$.fragment)},m(e,r){h(t,e,r),n=!0},p:w,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function O(e){let t,n,i,u,d,w,b;n=new M({});let y=e[0]!=e[1]-1&&E(e),v=e[0]>=2&&H(e);return w=new B({props:{markedDown:e[2]}}),{c(){t=r("main"),g(n.$$.fragment),i=x(),y&&y.c(),u=x(),v&&v.c(),d=x(),g(w.$$.fragment),o(t,"class","flex flex-col h-full")},m(e,r){s(e,t,r),h(n,t,null),$(t,i),y&&y.m(t,null),$(t,u),v&&v.m(t,null),$(t,d),h(w,t,null),b=!0},p(e,[n]){e[0]!=e[1]-1?y?(y.p(e,n),3&n&&f(y,1)):(y=E(e),y.c(),f(y,1),y.m(t,u)):y&&(l(),a(y,1,1,(()=>{y=null})),c()),e[0]>=2?v?(v.p(e,n),1&n&&f(v,1)):(v=H(e),v.c(),f(v,1),v.m(t,d)):v&&(l(),a(v,1,1,(()=>{v=null})),c());const r={};4&n&&(r.markedDown=e[2]),w.$set(r)},i(e){b||(f(n.$$.fragment,e),f(y),f(v),f(w.$$.fragment,e),b=!0)},o(e){a(n.$$.fragment,e),a(y),a(v),a(w.$$.fragment,e),b=!1},d(e){e&&m(t),p(n),y&&y.d(),v&&v.d(),p(w)}}}function C(e,t,n){let r,o,s=null===localStorage.getItem("count")?1:parseInt(localStorage.getItem("count")),i="Loading";function l(){fetch(`./tips/${s}.md`).then((e=>e.text())).then((e=>{n(4,i=e)}))}return v((async()=>{await fetch("./tips.json").then((e=>e.json())).then((e=>n(1,o=Object.keys(e).length+1))),console.log(o),l()})),e.$$.update=()=>{16&e.$$.dirty&&n(2,r=k(i))},[s,o,r,function(e){e.detail.next?n(0,s--,s):n(0,s++,s),l(),localStorage.setItem("count",s.toString())},i]}new class extends e{constructor(e){super(),t(this,e,C,O,n,{})}}({target:document.getElementById("app")});
