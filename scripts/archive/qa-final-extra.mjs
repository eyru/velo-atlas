import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

class CDP {
  constructor(url) { this.url = url; this.id = 0; this.pending = new Map(); this.waiters = []; this.logs = []; }
  async open() {
    this.ws = new WebSocket(this.url);
    await new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; });
    this.ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id) {
        const p = this.pending.get(m.id);
        if (p) { this.pending.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); }
      }
      if (m.method) {
        const hit = this.waiters.filter((w) => w.name === m.method);
        this.waiters = this.waiters.filter((w) => w.name !== m.method);
        hit.forEach((w) => w.resolve());
      }
      if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") this.logs.push("console:" + m.params.args.map((a) => a.value || a.description).join(" "));
      if (m.method === "Runtime.exceptionThrown") this.logs.push("exception:" + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
    };
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  waitFor(name) { return new Promise((resolve) => this.waiters.push({ name, resolve })); }
  async navigate(url) {
    const loaded = this.waitFor("Page.loadEventFired");
    await this.send("Page.navigate", { url });
    await loaded;
  }
  async eval(x) {
    const r = await this.send("Runtime.evaluate", { expression: x, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    return r.result.value;
  }
}

const root = path.resolve(import.meta.dirname, "..");
const file = path.join(root, "VELO-ATLAS-骑行图鉴.html");
const base = pathToFileURL(file).href + "?final=" + Date.now();
const shots = path.join(root, "shots", "final");
await mkdir(shots, { recursive: true });

const list = await (await fetch("http://127.0.0.1:9223/json/list")).json();
const page = list.find((t) => t.type === "page" && t.url.startsWith("file:")) || list.find((t) => t.type === "page" && t.url === "about:blank");
if (!page) throw new Error("page target not found");
const c = new CDP(page.webSocketDebuggerUrl);
await c.open();
await c.send("Runtime.enable");
await c.send("Page.enable");
await c.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });

async function go(hash, key) {
  await c.navigate(base + "&case=" + key + hash);
  await c.eval("new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(true))))");
}
async function ev(fn) { return c.eval("(" + fn.toString() + ")()"); }
async function settleImages() {
  await c.eval("(async () => { await Promise.all([...document.images].map((i) => i.decode().catch(() => {}))); return true; })()");
}
async function shot(name) {
  const s = await c.send("Page.captureScreenshot", { format: "png" });
  await writeFile(path.join(shots, name), Buffer.from(s.data, "base64"));
}

const res = {};

await go("#/about", "about-report");
res.about = await ev(() => ({
  author: document.querySelector(".author-name")?.innerText,
  sourceLinks: [...document.querySelectorAll(".source-link-row a")].map((a) => a.innerText.trim()),
  sourceRows: document.querySelectorAll(".source-link-row").length,
  ow: document.documentElement.scrollWidth - innerWidth
}));

res.report = await ev(async () => {
  window.__opened = null;
  const orig = window.open;
  window.open = (u) => { window.__opened = u; return { closed: false }; };
  document.querySelector('a[href$="fact-check.md"]').click();
  await Promise.resolve();
  const url = window.__opened;
  let status = 0, type = "", text = "";
  if (url) {
    const resp = await fetch(url);
    status = resp.status;
    type = resp.headers.get("content-type") || "";
    text = await resp.text();
  }
  window.open = orig;
  return {
    opened: !!url,
    blob: !!url && url.startsWith("blob:"),
    status,
    type,
    head: text.slice(0, 52),
    hasCnSection: text.includes("国产车型补充"),
    has16: text.includes("16 个车系"),
    hasMethod: text.includes("方法与口径"),
    len: text.length
  };
});

await go("#/brand/xds", "brand-xds");
await settleImages();
res.brandXds = await ev(() => ({
  h1: document.querySelector("h1")?.innerText.replace(/\s+/g, " ").trim(),
  bikeCards: document.querySelectorAll(".bike-card").length,
  heroPhoto: (() => { const i = document.querySelector(".brand-hero-visual .bike-photo-frame img"); return i ? { ready: i.complete && i.naturalWidth > 0, w: i.naturalWidth, h: i.naturalHeight } : null; })(),
  heroCaption: document.querySelector(".brand-visual-caption")?.innerText.replace(/\s+/g, " ").trim(),
  ow: document.documentElement.scrollWidth - innerWidth
}));
await shot("10-brand-xds.png");

await c.send("Emulation.setDeviceMetricsOverride", { width: 1024, height: 900, deviceScaleFactor: 1, mobile: false });
await go("#/bike/x-lab-ad9-2026-dura-ace-di2-r9270", "ad9-1024");
await settleImages();
res.ad9At1024 = await ev(() => ({
  width: innerWidth,
  ow: document.documentElement.scrollWidth - innerWidth,
  gridCols: getComputedStyle(document.querySelector(".bike-hero-grid")).gridTemplateColumns,
  photo: (() => { const i = document.querySelector(".bike-photo-frame img"); if (!i) return null; const r = i.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height), ready: i.complete && i.naturalWidth > 0 }; })(),
  geo: document.querySelector(".geo-badge")?.innerText
}));
await shot("11-ad9-1024.png");

await c.send("Emulation.setDeviceMetricsOverride", { width: 768, height: 900, deviceScaleFactor: 1, mobile: false });
await go("#/bike/x-lab-ad9-2026-dura-ace-di2-r9270", "ad9-768");
await settleImages();
res.ad9At768 = await ev(() => ({
  width: innerWidth,
  ow: document.documentElement.scrollWidth - innerWidth,
  gridCols: getComputedStyle(document.querySelector(".bike-hero-grid")).gridTemplateColumns,
  photo: (() => { const i = document.querySelector(".bike-photo-frame img"); if (!i) return null; const r = i.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height), ready: i.complete && i.naturalWidth > 0 }; })()
}));

await go("#/about", "about-links-check");
res.aboutLinks = await ev(() => ({
  count: document.querySelectorAll(".source-link-row a").length,
  first: document.querySelector(".source-link-row a")?.innerText.trim(),
  wrap: getComputedStyle(document.querySelector(".source-link-row")).flexWrap
}));

res.logs = c.logs;
console.log(JSON.stringify(res, null, 2));
process.exit(0);
