import fs from "node:fs";
const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text+" "+(r.exceptionDetails.exception?.description||""));return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json();
console.log(list.map(t=>t.url.slice(0,90)).join("\n"));
const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable");
await c.send("Page.navigate",{url:"http://127.0.0.1:5173/"}); await wait(1200);
const d=await c.eval('(async()=>{const m=await import("/src/data/database.ts?x="+Date.now());const br=await import("/src/data/brands.ts");const f=m.families[0];return {n:m.families.length,b:m.bikes.length,firstBrand:f.brand,keys:Object.keys(br.brandBySlug).slice(0,4),lookup:!!br.brandBySlug[f.brand],url:location.href};})()');
console.log(JSON.stringify(d,null,1)); process.exit(0);