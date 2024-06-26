import"../chunks/disclose-version.Bg9kRutz.js";import{m as O,c as U,p as z,l as st,t as y,a as q,b as G,d as P,n as g,r as b,u as a,q as Z,o as x,s as D,e as m,g as e,a9 as rt,f as nt}from"../chunks/custom-element.Bd7BP0Qt.js";import{s as lt}from"../chunks/snippet.DqBexmgK.js";import{s as S,h as ct}from"../chunks/attributes.Ch3uYejW.js";import{s as N,t as L}from"../chunks/class.DJa49N0K.js";import{p as J}from"../chunks/props.Cda_5gBt.js";import{u as it,s as dt,p as ut}from"../chunks/stores.gvC-oz9W.js";/* empty css                    */import{b as h}from"../chunks/paths.BtfFdbie.js";import{o as K}from"../chunks/index-client.CZUoncps.js";import{b as pt}from"../chunks/this.CecjLYcE.js";import{S as ht}from"../chunks/Storm.33_yk9Z6.js";const mt=!1,It=Object.freeze(Object.defineProperty({__proto__:null,ssr:mt},Symbol.toStringTag,{value:"Module"}));var gt=P('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/classic.min.css">'),ft=P('<button type="button" title="Toggle theme" aria-label="Toggle theme"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5rem" height="1.5rem" fill="currentColor" stroke-linecap="round" class="theme-toggle__classic pointer-events-none group-data-[state=enabled]:text-amber-300" viewBox="0 0 32 32"><clipPath id="theme-toggle__classic__cutout"><path d="M0-5h30a1 1 0 0 0 9 13v24H0Z"></path></clipPath><g clip-path="url(#theme-toggle__classic__cutout)"><circle cx="16" cy="16" r="9.34"></circle><g stroke="currentColor" stroke-width="1.5"><path d="M16 5.5v-4"></path><path d="M16 30.5v-4"></path><path d="M1.5 16h4"></path><path d="M26.5 16h4"></path><path d="m23.4 8.6 2.8-2.8"></path><path d="m5.7 26.3 2.9-2.9"></path><path d="m5.8 5.8 2.8 2.8"></path><path d="m23.4 23.4 2.9 2.9"></path></g></g></svg> <span class="text-slate-800 dark:text-white group-hover:text-tuscany-600 group-focus:text-tuscany-600 md:sr-only"> </span></button>');function Q(s,t){z(t,!0);let c=J(t,"class",7,"");const r="delay-500";let i=x("dark"),o=x(!1),d;K(()=>{g(o,b(localStorage.getItem("ots:theme")==="dark")),g(i,b(a(o)?"dark":"light")),a(o)?d.dataset.state="enabled":delete d.dataset.state});function f(l){l.stopPropagation(),g(o,!a(o)),setTimeout(()=>{g(i,b(a(o)?"dark":"light")),a(o)?l.currentTarget.dataset.state="enabled":delete l.currentTarget.dataset.state,localStorage.setItem("ots:theme",a(i)),localStorage.getItem("ots:theme")==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},Number(r.replace("delay-",""))),console.log(t.$$host)}var n=ft();st(l=>{var j=gt();q(l,j)}),pt(n,l=>d=l,()=>d),n.__click=f;var u=m(n),v=e(e(u,!0)),w=m(v);return y(()=>{N(n,`theme-toggle group flex items-center gap-2 text-slate-800 transition-colors delay-500 outline-none ${c()??""}`),L(n,"theme-toggle--toggled",a(o)),D(w,`Switch to ${(a(i)==="dark"?"light":"dark")??""} mode`)}),q(s,n),G({get class(){return c()},set class(l=""){c(l),Z()}})}O(["click"]);customElements.define("dark-mode-toggle",U(Q,{class:{}},[],[],!0));async function vt(s,t,c,r,i,o,d){var f,n,u,v;s.stopPropagation(),g(t,!a(t)),!a(c)&&a(t)&&(g(r,"loading"),await i()),a(t)&&a(o)?(g(r,"playing"),a(o).play(),(f=document.querySelector("#waveform path animate"))==null||f.setAttribute("values",a(d)),(n=document.querySelector("#waveform circle"))==null||n.classList.add("hidden")):!a(t)&&a(o)&&(g(r,"paused"),(u=document.querySelector("#waveform path animate"))==null||u.setAttribute("values",""),(v=document.querySelector("#waveform circle"))==null||v.classList.remove("hidden"),a(o).pause())}var yt=P('<button type="button" class="outline-none flex items-center gap-2 md:static hover:text-tuscany-600 focus:text-tuscany-600"><svg class="round w-6 h-6" id="waveform"><defs><radialGradient id="rgrad" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgb(0,255,10);stop-opacity:1.00"></stop><stop offset="25%" style="stop-color:rgb(0,188,212);stop-opacity:0.70"></stop><stop offset="50%" style="stop-color:rgb(238,130,238);stop-opacity:1.00"></stop><stop offset="75%" style="stop-color:rgb(103,58,183);stop-opacity:0.70"></stop><stop offset="100%" style="stop-color:rgb(233,30,99);stop-opacity:1.00"></stop></radialGradient></defs><circle fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" cx="12" cy="12" r="10"></circle><path style="stroke:url(#rgrad); stroke-width: 1px; fill: none;"><animate attributeName="d" dur="2.54s" repeatCount="indefinite" calcMode="linear" values=""></animate></path></svg> <span class="md:sr-only"> </span></button>');function W(s,t){z(t,!0);const c={idle:"Listen to the melody",loading:"Searching for the source",playing:"Snap back to reality",paused:"Listen again"};let r=x(!1),i=x("idle"),o=x(!1),d=x(void 0),f=x("");async function n(){const $=await(await fetch(`${window.location.origin}${h}/audio/reverse-bgm.mp3`)).arrayBuffer();structuredClone($);const k=URL.createObjectURL(new Blob([$],{type:"audio/mpeg"})),C=await new AudioContext().decodeAudioData($);if(g(d,b(new Audio)),g(o,!0),C){a(d).loop=!0,a(d).src=k;const _=await fetch(`${h}/api/waveform-path`);g(f,b((await _.json()).path))}}var u=yt();u.__click=[vt,r,o,i,n,d,f];var v=m(u),w=e(e(v,!0)),l=m(w);y(()=>D(l,c[a(i)])),q(s,u),G()}O(["click"]);U(W,{},[],[],!0);function xt(s){var c;s.stopPropagation();const t=(c=s.currentTarget.closest("header"))==null?void 0:c.querySelector("nav");t&&(t.dataset.state=t.dataset.state==="open"?"close":"open")}function M(s){const t=s.currentTarget.closest("nav");t&&(t.dataset.state="close")}function wt(s){s.stopPropagation();const t=s.currentTarget.closest(".dropdown");t&&(t.dataset.state=t.dataset.state==="open"?"close":"open")}function bt(s,t){g(t,b(a(t)==="outside-the-suitcase"?"inside-the-suitcase":"outside-the-suitcase")),localStorage.setItem("ots:shelter-from-the-storm",a(t))}var kt=P('<!> <header><div class="flex items-center justify-between"><a class="group flex items-center md:flex-col md:items-start outline-none gap-2 md:gap-0"><img alt="Ms. International" loading="lazy" class="w-12 h-12 md:hidden"> <h1 class="crimson-text-bold text-3xl tracking-wider md:hidden group-hover:text-tuscany-600 group-focus:text-tuscany-600">OTS</h1> <h1 class="crimson-text-bold text-3xl sr-only md:not-sr-only group-hover:text-tuscany-600 group-focus:text-tuscany-600">Outside the suitcase</h1> <span class="mukta-regular sr-only md:not-sr-only">Reverse 1999 Global Leaderboard</span></a> <button type="button" class="md:hidden text-slate-800 dark:text-white outline-none hover:text-tuscany-600 focus:text-tuscany-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu pointer-events-none"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></div> <nav data-state="close" class="data-[state=close]:hidden md:data-[state=close]:flex flex flex-col md:flex-row md:items-center gap-4 mukta-regular text-lg tracking-wide"><a class="outline-none hover:text-tuscany-600 focus:text-tuscany-600">Home</a> <div data-state="close" class="dropdown group md:relative"><div class="flex items-center justify-between md:justify-start gap-1"><a class="outline-none hover:text-tuscany-600 focus:text-tuscany-600">Leaderboard</a> <button type="button" class="outline-none hover:text-tuscany-600 focus:text-tuscany-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4 group-data-[state=open]:hidden pointer-events-none"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-down-up w-4 h-4 group-data-[state=close]:hidden pointer-events-none"><path d="m7 20 5-5 5 5"></path><path d="m7 4 5 5 5-5"></path></svg></button></div> <div><a class="border-l-8 border-transparent outline-none hover:text-tuscany-600 focus:text-tuscany-600 px-4">F2P</a> <a class="border-l-8 border-transparent outline-none hover:text-tuscany-600 focus:text-tuscany-600 px-4">FFA</a></div></div> <span class="outline-none line-through blur-[2px] select-none">Stats</span> <button type="button" class="text-left outline-none hover:text-tuscany-600 focus:text-tuscany-600"> </button> <!> <!></nav></header> <!>',1);function _t(s,t){z(t,!0);const c={};it(c);const r=()=>dt(ut,"$page",c);let i=J(t,"children",7),o=x(b(localStorage.getItem("ots:shelter-from-the-storm")??"outside-the-suitcase")),d=rt(()=>a(o)==="outside-the-suitcase"?"":"hidden");K(()=>{document.documentElement.addEventListener("click",()=>{const p=document.querySelector("nav"),T=document.querySelectorAll(".dropdown");p&&(p.dataset.state="close"),T.forEach(E=>{E.dataset.state="close"})}),document.documentElement.addEventListener("keyup",p=>{if(p.key==="Escape"){const T=document.querySelector("nav"),E=document.querySelectorAll(".dropdown");T&&(T.dataset.state="close"),E.forEach(ot=>{ot.dataset.state="close"})}})});var f=kt(),n=nt(f);ht(n,{get class(){return a(d)}});var u=e(e(n,!0));y(()=>N(u,`sticky bottom-0 z-10 flex flex-col-reverse md:flex-row gap-6 items-stretch justify-between backdrop-blur-md ${(r().url.pathname.includes(`${h}/leaderboard/`)?"bg-white/70 dark:bg-slate-900/70":"")??""} px-10 md:px-20 py-6`));var v=m(u),w=m(v);S(w,"href",`${h??""}/`);var l=m(w);S(l,"src",`${h??""}/jessica-ms-international.png`);var j=e(e(w,!0));j.__click=[xt];var $=e(e(v,!0)),k=m($);S(k,"href",`${h??""}/`),k.__click=[M];var A=e(e(k,!0)),C=m(A),_=m(C);S(_,"href",`${h??""}/leaderboard/darkness-of-the-abyss`),_.__click=[M],y(()=>L(_,"text-tuscany-600",r().url.pathname.includes(`${h}/leaderboard`)));var X=e(e(_,!0));X.__click=[wt];var F=e(e(C,!0));y(()=>N(F,`dropdown-content w-full group-data-[state=close]:hidden flex flex-col gap-1 md:absolute bottom-full md:backdrop-blur-md ${(r().url.pathname.includes(`${h}/leaderboard/`)?"md:bg-white/70 md:dark:bg-slate-900/70":"")??""} md:mb-10`));var B=m(F);y(()=>{var p;return S(B,"href",`${h??""}/leaderboard/${((p=r().data.raid)==null?void 0:p.toLowerCase().split(" ").join("-"))??"darkness-of-the-abyss"??""}?category=f2p`)}),B.__click=[M];var R=e(e(B,!0));y(()=>{var p;return S(R,"href",`${h??""}/leaderboard/${((p=r().data.raid)==null?void 0:p.toLowerCase().split(" ").join("-"))??"darkness-of-the-abyss"??""}?category=ffa`)}),R.__click=[M];var H=e(A,!0);H.nodeValue="  ";var Y=e(H),I=e(e(Y,!0));I.__click=[bt,o];var tt=m(I),V=e(e(I,!0));Q(V,{});var et=e(e(V,!0));W(et,{});var at=e(e(u,!0));return lt(i,at),y(()=>{L(k,"text-tuscany-600",r().url.pathname===`${h}/`),L(B,"border-tuscany-600",new URL(window.location.toString()).searchParams.get("category")==="f2p"),L(R,"border-tuscany-600",new URL(window.location.toString()).searchParams.get("category")==="ffa"),D(tt,a(o)==="outside-the-suitcase"?"Take shelter from the rain":"Brave the storm")}),ct(l),q(s,f),G({get children(){return i()},set children(p){i(p),Z()}})}O(["click"]);U(_t,{children:{}},[],[],!0);export{_t as component,It as universal};
//# sourceMappingURL=3.C95j-Un-.js.map