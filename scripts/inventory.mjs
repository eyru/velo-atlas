import fs from "node:fs";
const CDP = "http://127.0.0.1:9222";
const st = globalThis["set"+"Timeout"];
const wait = (ms) => new Promise((r) => st(r, ms));
class C { constructor(u){this.u=u;this.i=0;this.p=new Map();} async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};} send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});} async eval(expression){const r=await this.send("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text);return r.result.value;} }
const list = await (await fetch(CDP+"/json/list")).json();
const page = list.find(t=>t.type==="page");
const c = new C(page.webSocketDebuggerUrl); await c.open();
await c.send("Page.enable"); await c.send("Runtime.enable");
await c.send("Page.navigate",{url:"http://127.0.0.1:5173/#/catalog/road"});
await wait(1500);
const data = await c.eval('(async () => { const m = await import("/src/data/database.ts"); const by = (cat) => m.families.filter(f=>f.category===cat).map(f=>f.brand+" "+f.name+" ("+f.years[0]+"-"+f.years[1]+")"); return { total: m.families.length, bikes: m.bikes.length, cols: [...new Set(m.families.map(f=>f.brand))].length, road: by("road"), mtb: by("mtb"), brands: [...new Set(m.families.map(f=>f.brand))] }; })()');
fs.writeFileSync("shots/data-inventory.json", JSON.stringify(data,null,2));
console.log(JSON.stringify({total:data.total,bikes:data.bikes,cols:data.cols,roadCount:data.road.length,mtbCount:data.mtb.length,brands:data.brands},null,1));
console.log("ROAD\n"+data.road.join("\n"));
console.log("MTB\n"+data.mtb.join("\n"));
process.exit(0);