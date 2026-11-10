const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text+" "+(r.exceptionDetails.exception?.description||""));return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable"); await c.send("Page.enable");
const logs=[]; c.ws.addEventListener("message",e=>{const m=JSON.parse(e.data);if(m.method==="Runtime.consoleAPICalled"&&m.params.type==="error")logs.push("console:"+m.params.args.map(a=>a.value||a.description).join(" "));if(m.method==="Runtime.exceptionThrown")logs.push("exception:"+(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text));});
await c.send("Emulation.setDeviceMetricsOverride",{width:1440,height:900,deviceScaleFactor:1,mobile:false});
await c.send("Page.navigate",{url:"http://127.0.0.1:5173/#/catalog/road"}); await wait(1500);
const res={};
res.initial=await c.eval('({cards:document.querySelectorAll(".bike-card").length,total:document.querySelector(".result-count")?.innerText,card:document.querySelector(".bike-card")?.innerText.slice(0,220)})');
// brand filter
await c.eval('(()=>{const b=[...document.querySelectorAll("button")].find(x=>x.innerText.includes("Specialized"));b.click();return true;})()'); await wait(500);
res.brand=await c.eval('({hash:location.hash,cards:document.querySelectorAll(".bike-card").length,total:document.querySelector(".result-count")?.innerText,all: [...document.querySelectorAll(".bike-card")].every(x=>x.innerText.includes("Specialized"))})');
// year filter
await c.eval('(()=>{const b=[...document.querySelectorAll("button")].find(x=>/^2024/.test(x.innerText.trim()));if(!b)return "nobtn";b.click();return b.innerText;})()'); await wait(500);
res.year=await c.eval('({hash:location.hash,cards:document.querySelectorAll(".bike-card").length,total:document.querySelector(".result-count")?.innerText,all: [...document.querySelectorAll(".bike-card")].every(x=>x.innerText.includes("2024"))})');
// price filter 100k+
await c.eval('(()=>{const b=[...document.querySelectorAll("button")].find(x=>x.innerText.includes("100,000 以上"));if(!b)return "nobtn";b.click();return b.innerText;})()'); await wait(500);
res.price=await c.eval('({hash:location.hash,cards:document.querySelectorAll(".bike-card").length,total:document.querySelector(".result-count")?.innerText})');
// reset
await c.eval('(()=>{document.querySelector(".filter-reset")?.click();return true;})()'); await wait(500);
res.reset=await c.eval('({hash:location.hash,cards:document.querySelectorAll(".bike-card").length,total:document.querySelector(".result-count")?.innerText})');
// sort price asc
await c.eval('(()=>{const s=document.querySelector("select");const setter=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,"value").set;setter.call(s,"price-asc");s.dispatchEvent(new Event("change",{bubbles:true}));return s.value;})()'); await wait(500);
res.sort=await c.eval('(()=>{const cards=[...document.querySelectorAll(".bike-card")];const prices=cards.map(x=>{const m=x.innerText.match(/¥([\d,]+)/);return m?+m[1].replace(/,/g,""):null;}).filter(Boolean);return {hash:location.hash,first:prices.slice(0,5),sorted:prices.every((p,i)=>i===0||prices[i-1]<=p)};})()');
// load more
res.loadBefore=await c.eval('document.querySelectorAll(".bike-card").length');
await c.eval('(()=>{const b=[...document.querySelectorAll("button")].find(x=>x.innerText.includes("加载更多"));if(!b)return "nobtn";b.click();return b.innerText;})()'); await wait(500);
res.loadAfter=await c.eval('document.querySelectorAll(".bike-card").length');
res.logs=logs;
console.log(JSON.stringify(res,null,1)); process.exit(0);