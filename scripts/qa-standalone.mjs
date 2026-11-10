import { writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const st = globalThis["set" + "Timeout"];
const wait = (ms) => new Promise((r) => st(r, ms));
class C {
  constructor(u) { this.u = u; this.i = 0; this.p = new Map(); }
  async open() {
    this.ws = new WebSocket(this.u);
    await new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; });
    this.ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id) {
        const p = this.p.get(m.id);
        if (p) { this.p.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); }
      }
    };
  }
  send(method, params = {}) {
    const id = ++this.i;
    return new Promise((resolve, reject) => {
      this.p.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async eval(x) {
    const r = await this.send("Runtime.evaluate", { expression: x, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    return r.result.value;
  }
}

const file = path.resolve(import.meta.dirname, "..", "VELO-ATLAS-骑行图鉴.html");
const url = pathToFileURL(file).href + "?qa=" + Date.now();
const list = await (await fetch("http://127.0.0.1:9223/json/list")).json();
const page = list.find((t) => t.type === "page" && t.url.startsWith("file:"));
if (!page) throw new Error("file page not found: " + JSON.stringify(list.map((t) => t.url)));
const c = new C(page.webSocketDebuggerUrl);
await c.open();
await c.send("Runtime.enable");
await c.send("Page.enable");
const logs = [];
c.ws.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") logs.push("console:" + m.params.args.map((a) => a.value || a.description).join(" "));
  if (m.method === "Runtime.exceptionThrown") logs.push("exception:" + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
});
await c.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await c.send("Page.navigate", { url });
await wait(2200);
const res = {};
res.initial = await c.eval(`({
  title: document.title,
  hash: location.hash,
  h1: document.querySelector("h1")?.innerText.split(String.fromCharCode(10))[0],
  stats: [...document.querySelectorAll(".hero-stat b,.stat b")].map((x) => x.innerText).slice(0, 8),
  standalone: window.__VELO_STANDALONE__ === true,
  localStorage: (() => { try { localStorage.setItem("__velo_probe__", "1"); return localStorage.getItem("__velo_probe__"); } catch (e) { return "ERR " + e.name; } })(),
  resources: [...performance.getEntriesByType("resource")].map((r) => r.name).filter((n) => !n.startsWith("blob:") && !n.startsWith("data:")),
  ow: document.documentElement.scrollWidth - innerWidth
})`);
await c.eval('location.hash = "#/catalog/road"');
await wait(900);
res.road = await c.eval(`({
  hash: location.hash,
  h1: document.querySelector("h1")?.innerText,
  total: document.querySelector(".result-count")?.innerText,
  cards: document.querySelectorAll(".bike-card").length,
  brands: [...document.querySelectorAll('a[href^="#/bike/"]')].slice(0, 5).map((a) => a.getAttribute("href").slice(7)),
  ow: document.documentElement.scrollWidth - innerWidth
})`);
res.filter = await c.eval(`(async () => {
  const b = [...document.querySelectorAll(".filter-row")].find((x) => x.textContent.includes("Specialized"));
  if (!b) return { clicked: false };
  b.click();
  await new Promise((r) => setTimeout(r, 350));
  return { clicked: true, hash: location.hash, count: document.querySelector(".result-count")?.innerText, cards: document.querySelectorAll(".bike-card").length };
})()`);
res.ids = res.road.brands;
await c.eval(`localStorage.setItem("velo-atlas-compare", JSON.stringify(${JSON.stringify(res.ids.slice(0, 2))}))`);
await c.send("Page.navigate", { url: url + "&view=compare#/compare" });
await wait(1800);
res.compare = await c.eval(`({
  h1: document.querySelector("h1")?.innerText,
  cols: document.querySelectorAll("table thead th").length,
  rows: document.querySelectorAll("table tbody tr").length,
  empty: document.body.innerText.includes("对比台还是空的"),
  ow: document.documentElement.scrollWidth - innerWidth
})`);
await c.eval('location.hash = "#/about"');
await wait(700);
res.report = await c.eval(`(async () => {
  const link = [...document.querySelectorAll("a")].find((a) => a.getAttribute("href")?.includes("fact-check.md"));
  if (!link) return { found: false };
  let opened = null;
  const orig = window.open;
  window.open = (u) => { opened = u; return {}; };
  link.click();
  window.open = orig;
  let body = null;
  if (opened) {
    const r = await fetch(opened);
    body = { status: r.status, type: r.headers.get("content-type"), head: (await r.text()).slice(0, 60) };
  }
  return { found: true, href: link.getAttribute("href"), opened: !!opened, body };
})()`);
res.about = await c.eval('({h1:document.querySelector("h1")?.innerText, terms:document.querySelectorAll(".term-row").length, ow:document.documentElement.scrollWidth-innerWidth})');
await c.eval('localStorage.removeItem("velo-atlas-compare"); localStorage.removeItem("__velo_probe__")');
res.logs = logs;
await c.eval('location.hash = "#/"');
await wait(1200);
const shot = await c.send("Page.captureScreenshot", { format: "png" });
await writeFile(path.resolve(import.meta.dirname, "..", "shots", "final", "07-standalone.png"), Buffer.from(shot.data, "base64"));
console.log(JSON.stringify(res, null, 1));
process.exit(0);
