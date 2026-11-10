const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text+" "+(r.exceptionDetails.exception?.description||""));return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable");
await c.send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:2,mobile:true});
await c.send("Page.navigate",{url:"http://127.0.0.1:5173/"}); await wait(1500);
const dump='(()=>[...document.querySelectorAll("header a")].map(a=>{const r=a.getBoundingClientRect();return {t:a.innerText.replace(/\s+/g,"").slice(0,12),href:a.getAttribute("href"),disp:getComputedStyle(a).display,vis:getComputedStyle(a).visibility,rect:[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)],parent:a.parentElement.className};}))()';
const before=await c.eval(dump);
await c.eval('document.querySelector(".menu-toggle").click()'); await wait(400);
const after=await c.eval(dump);
const exp=await c.eval('document.querySelector(".menu-toggle").getAttribute("aria-expanded")');
await c.eval('(()=>{const a=[...document.querySelectorAll("header a")].filter(x=>x.getAttribute("href")==="#/catalog/road").pop();a.click();return true;})()'); await wait(900);
const nav=await c.eval('({hash:location.hash,h1:document.querySelector("h1")?.innerText})');
console.log(JSON.stringify({before,after,exp,nav},null,1)); process.exit(0);