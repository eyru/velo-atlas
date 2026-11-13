import fs from "node:fs";
const BASE="http://127.0.0.1:5173", CDP="http://127.0.0.1:9222";
const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();this.ev=[];}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}else this.ev.push(m);};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text+" "+(r.exceptionDetails.exception?.description||""));return r.result.value;}}
const list=await (await fetch(CDP+"/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Page.enable"); await c.send("Runtime.enable");
await c.send("Emulation.setDeviceMetricsOverride",{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
const A=[]; const add=(n,ok,d)=>A.push({n,ok,d});
async function nav(h,ms=1200){await c.send("Page.navigate",{url:BASE+"/#"+h});await wait(ms);}
await nav("/catalog/road");
const b0=await c.eval('document.querySelector(".brand-filter-list .filter-row")?.textContent');
await c.eval('document.querySelector(".brand-filter-list .filter-row")?.click()');
await wait(500);
add("brand row filters", (await c.eval('location.hash')).includes("brand=") && (await c.eval('document.querySelector(".result-count")?.textContent')) !== "136 / 136 BUILDS", {hash:await c.eval('location.hash'),count:await c.eval('document.querySelector(".result-count")?.textContent'),chip:await c.eval('document.querySelector(".active-chip")?.textContent'),first:b0});
const cnt=await c.eval('document.querySelectorAll(".bike-card").length');
add("grid after filter", cnt>0 && cnt<=24, cnt);

await nav("/bike/specialized-tarmac-sl8-2026-s-works-dura-ace-di2");
const sizes=await c.eval('[...document.querySelectorAll(".size-switch button")].map(b=>b.textContent.trim())');
const leg0=await c.eval('document.querySelector(".geometry-legend")?.textContent');
await c.eval('(() => { const b=[...document.querySelectorAll(".size-switch button")].find(x=>x.textContent.trim()==="L"); b?.click(); return !!b; })()');
await wait(400);
add("bike size L switch", (await c.eval('document.querySelector(".size-switch button.is-on")?.textContent'))==="L" && (await c.eval('document.querySelector(".geometry-legend")?.textContent'))!==leg0, {sizes,on:await c.eval('document.querySelector(".size-switch button.is-on")?.textContent'),leg0,leg1:await c.eval('document.querySelector(".geometry-legend")?.textContent')});

await nav("/family/specialized-tarmac-sl8");
const rows=await c.eval('document.querySelectorAll(".geo-table tbody tr").length');
await c.eval('document.querySelectorAll(".geo-table tbody tr")[3]?.click()');
await wait(350);
add("family geo table switch", rows>0 && (await c.eval('document.querySelectorAll(".geo-table tbody tr.is-active").length'))===1, {rows,active:await c.eval('document.querySelector(".geo-table tbody tr.is-active")?.textContent')});

await c.send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true});
await nav("/catalog/road");
await c.eval('document.querySelector(".filter-toggle")?.click()'); await wait(400);
const before=await c.eval('document.querySelector(".result-count")?.textContent');
await c.eval('document.querySelectorAll(".catalog-sidebar .brand-filter-list .filter-row")[1]?.click()'); await wait(400);
add("mobile brand filter", (await c.eval('document.querySelector(".result-count")?.textContent'))!==before, {before,after:await c.eval('document.querySelector(".result-count")?.textContent'),drawer:await c.eval('document.querySelector(".catalog-sidebar")?.className')});
await c.eval('[...document.querySelectorAll(".drawer-foot button")][0]?.click()'); await wait(400);
add("drawer closes", !(await c.eval('document.querySelector(".catalog-sidebar")?.classList.contains("is-open")')), await c.eval('document.querySelector(".catalog-sidebar")?.className'));
const errs=c.ev.filter(e=>e.method==="Runtime.exceptionThrown"||(e.method==="Log.entryAdded"&&e.params?.entry?.level==="error")).map(e=>e.params?.exceptionDetails?.text||e.params?.entry?.text);
fs.writeFileSync("shots/check.json",JSON.stringify({A,errs},null,2));
console.log(JSON.stringify({A,errs},null,2)); process.exit(0);