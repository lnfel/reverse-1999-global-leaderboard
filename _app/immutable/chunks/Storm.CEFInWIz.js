import"./disclose-version.BDr9Qe-U.js";import{p as j,c as O,s as f,f as S,i as x,g as o,j as C,h as G}from"./runtime.BGm8LMIg.js";import{j as L,g as N,p as P,t as V,a as $,m as B,o as D,f as J}from"./render.Dki2-gLd.js";import{o as K}from"./main-client.D0lBBaYG.js";import{b as Q}from"./paths.PlV-g5mt.js";function U(v,b,u,h,c){f(b,!0);const d=["Timekeeper","It's raining outside.","and the raindrops...","*Gasp*","Eeeek!"],y=1;function i(r,m,s){return r<=m&&r>=s}function n(r){const m=performance.now(),s=r.length*60/y;function l(){const t=window.requestAnimationFrame(l),M=performance.now(),g=Math.trunc(r.length*(M-m)/s);o(u)!==r?f(u,r.slice(0,g)):window.cancelAnimationFrame(t)}l()}function p(){f(h,window.requestAnimationFrame(p)),o(b)?(i(o(c),8e3,6e3)&&n(d[0]),i(o(c),6e3,4e3)&&n(d[1]),i(o(c),4e3,2e3)&&n(d[2]),i(o(c),2e3,500)&&n(d[3]),i(o(c),500,0)&&n(d[4])):(cancelAnimationFrame(o(h)),setTimeout(r=>{f(u,""),r.blur()},2e3,v.target))}p()}var X=J('<div class="rain-container fixed inset-0 -z-10 pointer-events-none"></div> <div class="fixed top-6 z-10 right-10 md:right-20 flex items-center gap-2"><span class="crimson-text-regular text-sm"> </span> <button type="button" class="opacity-20 outline-none hover:opacity-100 focus:opacity-100 transition-opacity"><img alt="Vertin" class="w-10 h-10 rounded-full overflow-hidden pointer-events-none"></button></div>',!0);function ae(v,b){j(b,!0);function u(e,a){const W=a.clientWidth,F=a.clientHeight;e&&(p=e.width=Math.max(500,W),r=e.height=Math.max(320,F)),a.style.left=a.style.right=a.style.top=a.style.bottom="0"}function h(){t=[];for(let e=g-1;e>=0;e--)t.push({x:1,y:0,z:0});for(let e=0;e<g;e++)t[e].x=Math.floor(Math.random()*document.documentElement.clientWidth+9),t[e].y=Math.floor(Math.random()*i.clientHeight+9),t[e].z=Math.floor(Math.random()*2+1),t[e].w=Math.floor(Math.random()*3+2)}function c(){for(let e=0;e<g;e++){t[e].y<=0&&(t[e].y+=i.clientHeight),t[e].x<-10?t[e].x+=p:t[e].y-=Number(t[e]?.w??1)*M;const a=n.createRadialGradient(250,450,140,250,300,600);localStorage.getItem("ots:theme")==="dark"?(a.addColorStop(0,"rgba(100, 170, 160, 0.2)"),a.addColorStop(.1,"rgba(100, 160, 160, 0.12)"),a.addColorStop(.2,"rgba(100, 150, 150, 0.1)"),a.addColorStop(1,"rgba(100, 140, 140, .08)")):a.addColorStop(0,"rgba(0, 0, 0, 0.2)"),n.fillStyle=a,n.fillRect(t[e].x,t[e].y,t[e].z,4)}}function d(e){o(w)&&(l=0,e>350?l=(500-e)*.004:e<350&&e>250?l=(e-250)*.006:e<250&&e>=100?l=(250-e)*.004:e<100&&e>=0&&(l=e*.006,f(w,!1),f(s,8e3)),l>0&&(n.fillStyle=localStorage.getItem("ots:theme")==="dark"?`rgba(250, 250, 245, ${l})`:`rgba(0, 0, 0, ${l})`,n.fillRect(0,0,p,r)))}function y(){const e=document.querySelector("canvas");e&&u(e,i),o(w)&&(o(s)<0?f(s,8e3):f(s,o(s)-15)),m=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",n.fillStyle=m,n.fillRect(0,0,p,r),c(),o(s)<500&&d(o(s)),window.requestAnimationFrame(y)}let i,n,p,r,m,s=S(8e3),l=0,t=[],M=.5,g=300,w=S(!1),k=S(""),H=S(0);K(()=>{const e=document.createElement("div"),a=document.createElement("canvas");m=localStorage.getItem("ots:theme")==="dark"?"#0f172a":"#ffffff",new ResizeObserver(F=>{t=[],h()}).observe(i),n=a.getContext("2d"),i.appendChild(e),e.style.position="fixed",e.appendChild(a),u(a,i),h(),y()});var _=D(v,!0,X),z=G(_);N(z,e=>i=e);var I=x(x(z)),A=C(I),q=C(A),R=x(x(A)),E=C(R);P(E,"src",`${B(Q)}/img/character/sonetto.webp`),V(q,()=>o(k)),R.__click=[U,w,k,H,s],$(v,_),O()}L(["click"]);export{ae as S};
