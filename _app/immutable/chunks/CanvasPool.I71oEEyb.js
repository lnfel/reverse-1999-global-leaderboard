import{g as v,B as p}from"./colorToUniform.BoUiyIWH.js";import{T as x,D as C,n as l}from"./8.CwZgqg-q.js";const u={};function f(o,e){let t=0;for(let a=0;a<e;a++)t=t*31+o[a].uid>>>0;return u[t]||d(o,t)}let c=0;function d(o,e){const t={};let a=0;c||(c=v());for(let n=0;n<c;n++){const r=n<o.length?o[n]:x.EMPTY.source;t[a++]=r.source,t[a++]=r.style}const s=new p(t);return u[e]=s,s}class h{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){const a=C.get().createCanvas();a.width=e,a.height=t;const s=a.getContext("2d");return{canvas:a,context:s}}getOptimalCanvasAndContext(e,t,a=1){e=Math.ceil(e*a-1e-6),t=Math.ceil(t*a-1e-6),e=l(e),t=l(t);const s=(e<<17)+(t<<1);this._canvasPool[s]||(this._canvasPool[s]=[]);let n=this._canvasPool[s].pop();return n||(n=this._createCanvasAndContext(e,t)),n}returnCanvasAndContext(e){const t=e.canvas,{width:a,height:s}=t,n=(a<<17)+(s<<1);this._canvasPool[n].push(e)}clear(){this._canvasPool={}}}const _=new h;export{_ as C,f as g};
//# sourceMappingURL=CanvasPool.I71oEEyb.js.map