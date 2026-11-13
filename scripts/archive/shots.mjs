import fs from "node:fs";
const st=globalThis["set"+"Timeout"]; const wait=(ms)=>new Promise(r=>st(r,ms));
class C{constructor(u){this.u=u;this.i=0;this.p=new Map();}async open(){this.ws=new WebSocket(this.u);await new Promise((res,rej)=>{this.ws.onopen=res;this.ws.onerror=rej;});this.ws.onmessage=(e)=>{const m=JSON.parse(e.data);if(m.id){const p=this.p.get(m.id);if(p){this.p.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}}};}send(method,params={}){const id=++this.i;return new Promise((resolve,reject)=>{this.p.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}async eval(x){const r=await this.send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw new Error(r.exceptionDetails.text);return r.result.value;}}
const list=await (await fetch("http://127.0.0.1:9222/json/list")).json(); const page=list.find(t=>t.type==="page");
const c=new C(page.webSocketDebuggerUrl); await c.open(); await c.send("Runtime.enable"); await c.send("Page.enable");
fs.mkdirSync("shots/final",{recursive:true});
async function shot(name,w,h,url,prep){
  await c.send("Emulation.setDeviceMetricsOverride",{width:w,height:h,deviceScaleFactor:1,mobile:w<600});
  await c.send("Page.navigate",{url}); await wait(1500);
  if(prep) await c.eval(prep);
  await c.eval('document.fonts.ready.then(()=>true)'); await wait(400);
  const r=await c.send("Page.captureScreenshot",{format:"png",fromSurface:true,captureBeyondViewport:false});
  fs.writeFileSync("shots/final/"+name,Buffer.from(r.data,"base64"));
  return name;
}
const out=[];
out.push(await shot("01-home.png",1440,980,"http://127.0.0.1:4173/"));
out.push(await shot("02-catalog.png",1440,1050,"http://127.0.0.1:4173/#/catalog/road"));
out.push(await shot("03-bike.png",1440,1050,"http://127.0.0.1:4173/#/bike/specialized-tarmac-sl8-2026-s-works-dura-ace-di2"));
await c.send("Page.navigate",{url:"http://127.0.0.1:4173/#/compare"}); await wait(900);
await c.eval('localStorage.setItem("velo-atlas-compare",JSON.stringify(["specialized-tarmac-sl8-2026-s-works-dura-ace-di2","trek-madone-gen-8-2026-slr-9-gen-8"]))');
out.push(await shot("04-compare.png",1440,1100,"http://127.0.0.1:4173/#/compare"));
out.push(await shot("05-mobile-home.png",390,844,"http://127.0.0.1:4173/"));
out.push(await shot("06-mobile-catalog.png",390,844,"http://127.0.0.1:4173/#/catalog/mtb"));
console.log(JSON.stringify(out)); process.exit(0);