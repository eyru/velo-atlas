const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)return {err:r.exceptionDetails.text+" "+(r.exceptionDetails.exception?.description||"")};return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable"); await c.send("Page.enable");
await c.send("Page.reload",{ignoreCache:true}); await wait(2200);
console.log("reload:",JSON.stringify(await c.eval('({h:document.querySelector(".year-hero h1")?.textContent,cards:document.querySelectorAll(".bike-card").length,main:document.querySelector("main")?.innerText.slice(0,80)})')));
await c.send("Page.navigate",{url:"http://127.0.0.1:5173/#/year/2024"}); await wait(1200);
console.log("after nav:",JSON.stringify(await c.eval('({h:document.querySelector(".year-hero h1")?.textContent,cards:document.querySelectorAll(".bike-card").length,main:document.querySelector("main")?.innerText.slice(0,80),hash:location.hash})')));
console.log("import:",JSON.stringify(await c.eval('import("/src/pages/YearDetail.tsx").then(m=>({ok:true,keys:Object.keys(m)})).catch(e=>({ok:false,err:String(e)}))')));
const appsrc=await (await fetch("http://127.0.0.1:5173/src/App.tsx")).text();
console.log("served App has YearDetail:",appsrc.includes("YearDetail"),"len",appsrc.length);
process.exit(0);