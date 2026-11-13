const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();this.errs=[];}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}else if(m.method==="Runtime.exceptionThrown"){this.errs.push(m.params.exceptionDetails.text+" "+(m.params.exceptionDetails.exception?.description||""));}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text);return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable"); await c.send("Page.enable");
const go=async(h,w=1440,hh=1000,ms=1600)=>{await c.send("Emulation.setDeviceMetricsOverride",{width:w,height:hh,deviceScaleFactor:1,mobile:w<600});await c.send("Page.navigate",{url:"http://127.0.0.1:5173/#"+h});await wait(ms);};
const ev=async(x)=>await c.eval(x);
await go("/");
console.log("HOME", JSON.stringify(await ev('({h1:document.querySelector("h1")?.innerText,stats:[...document.querySelectorAll(".hero-stats strong,.stat strong,.footer-stat strong")].map(e=>e.innerText).slice(0,8),years:[...document.querySelectorAll(".year-list a")].slice(0,3).map(a=>a.getAttribute("href"))})')));
await go("/year/2024");
console.log("YEAR", JSON.stringify(await ev('({h1:document.querySelector(".year-hero h1")?.innerText,cards:document.querySelectorAll(".bike-card").length,more:document.querySelector(".load-more button")?.innerText})')));
await ev('document.querySelector(".load-more button")?.click()'); await wait(700);
console.log("YEAR MORE", JSON.stringify(await ev('({cards:document.querySelectorAll(".bike-card").length,more:document.querySelector(".load-more button")?.innerText,end:document.querySelector(".list-end")?.innerText})')));
for (const [name,path] of [["SUPERCALIBER","/family/trek-supercaliber"],["LUX","/family/canyon-lux-world-cup"],["SPARKRC","/family/scott-spark-rc"],["MACH4","/family/pivot-mach-4-sl"],["ABOUT","/about"]]) {
  await go(path,1440,1000,1300);
  console.log(name, JSON.stringify(await ev('({h1:document.querySelector("h1")?.innerText,builds:document.querySelectorAll(".build-row").length,geo:document.querySelectorAll(".geo-table tbody tr").length,link:[...document.querySelectorAll("a")].find(a=>a.href.includes("fact-check"))?.getAttribute("href"),docX:document.documentElement.scrollWidth-innerWidth})')));
}
// compare: use first 3 bikes from database
await go("/");
const ids=await ev('(async()=>{const d=await import("/src/data/database.ts");return d.bikes.slice(0,3).map(b=>b.id);})()');
await ev('localStorage.setItem("velo-atlas-compare",JSON.stringify('+JSON.stringify(ids)+'));location.hash="#/compare";location.reload();');
await wait(2200);
console.log("COMPARE", JSON.stringify(await ev('({rows:document.querySelectorAll(".compare-table tbody tr").length,heads:document.querySelectorAll(".compare-table thead th").length,empty:!!document.querySelector(".compare-empty")})')));
console.log("ERRORS", JSON.stringify(c.errs));
process.exit(0);