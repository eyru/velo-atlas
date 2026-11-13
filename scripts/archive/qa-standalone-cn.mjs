import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const st = globalThis["set" + "Timeout"];
const wait = (ms) => new Promise((r) => st(r, ms));

class CDP {
  constructor(url) { this.url = url; this.id = 0; this.pending = new Map(); }
  async open() {
    this.ws = new WebSocket(this.url);
    await new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; });
    this.ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id) {
        const p = this.pending.get(m.id);
        if (p) { this.pending.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); }
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
  async eval(x) {
    const r = await this.send("Runtime.evaluate", { expression: x, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    return r.result.value;
  }
}

const root = path.resolve(import.meta.dirname, "..");
const file = path.join(root, "VELO-ATLAS-骑行图鉴.html");
const base = pathToFileURL(file).href + "?qa=" + Date.now();
const shots = path.join(root, "shots", "final");
await mkdir(shots, { recursive: true });

const list = await (await fetch("http://127.0.0.1:9223/json/list")).json();
const page = list.find((t) => t.type === "page" && t.url.startsWith("file:")) || list.find((t) => t.type === "page" && t.url === "about:blank");
if (!page) throw new Error("page target not found: " + JSON.stringify(list.map((t) => t.url)));
const c = new CDP(page.webSocketDebuggerUrl);
c.logs = [];
await c.open();
await c.send("Runtime.enable");
await c.send("Page.enable");
await c.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });

async function go(hash, key, ms = 1800) {
  await c.send("Page.navigate", { url: base + "&case=" + key + hash });
  await wait(ms);
}

async function shot(name) {
  const s = await c.send("Page.captureScreenshot", { format: "png" });
  await writeFile(path.join(shots, name), Buffer.from(s.data, "base64"));
}

const res = {};

await go("#/", "home", 2200);
res.home = await c.eval(`({
  title: document.title,
  hash: location.hash,
  h1: document.querySelector("h1")?.innerText.split(String.fromCharCode(10))[0],
  stats: [...document.querySelectorAll(".hero-stats strong")].map((x) => x.innerText),
  statsLabels: [...document.querySelectorAll(".hero-stats span")].map((x) => x.innerText),
  signature: document.querySelector(".footer-signature")?.innerText.replace(/\\s+/g, " ").trim(),
  standalone: window.__VELO_STANDALONE__ === true,
  resources: [...performance.getEntriesByType("resource")].map((r) => r.name).filter((n) => !n.startsWith("blob:") && !n.startsWith("data:")),
  ow: document.documentElement.scrollWidth - innerWidth,
  cards: document.querySelectorAll(".bike-card").length,
  brandHeading: document.querySelector(".brand-section h2")?.innerText
})`);
await shot("07-standalone.png");

await go("#/catalog/road?brand=xds", "road-xds");
res.roadXds = await c.eval(`({
  h1: document.querySelector("h1")?.innerText,
  count: document.querySelector(".result-count")?.innerText,
  cards: document.querySelectorAll(".bike-card").length,
  brands: [...document.querySelectorAll(".bike-card")].map((x) => x.innerText.split(String.fromCharCode(10)).slice(0, 3).join(" ")).slice(0, 4)
})`);

await go("#/catalog/mtb?brand=xds", "mtb-xds");
res.mtbXds = await c.eval(`({
  count: document.querySelector(".result-count")?.innerText,
  cards: document.querySelectorAll(".bike-card").length,
  text: document.querySelector(".catalog-grid")?.innerText.slice(0, 300),
  hrefs: [...document.querySelectorAll('a[href^="#/bike/"]')].map((a) => a.getAttribute("href"))
})`);

await go("#/bike/xds-600-2025-sram-nx-11s", "xiake");
res.xiake = await c.eval(`({
  h1: document.querySelector("h1")?.innerText.replace(/\\s+/g, " ").trim(),
  breadcrumb: document.querySelector(".breadcrumb")?.innerText.replace(/\\s+/g, " ").trim(),
  category: document.querySelector(".bike-eyebrow-row .mono")?.innerText,
  photoFrame: !!document.querySelector(".bike-photo-frame"),
  svg: !!document.querySelector(".bike-hero-visual svg"),
  sizeSwitch: [...document.querySelectorAll(".size-switch button")].map((b) => b.innerText)
})`);

await go("#/bike/x-lab-ad9-2026-dura-ace-di2-r9270", "ad9", 2200);
res.ad9 = await c.eval(`(async () => {
  const img = document.querySelector(".bike-photo-frame img");
  if (img && !img.complete) await new Promise((r) => { img.onload = r; img.onerror = r; setTimeout(r, 1500); });
  return {
    h1: document.querySelector("h1")?.innerText.replace(/\\s+/g, " ").trim(),
    photo: !!img,
    imgReady: !!img && img.complete && img.naturalWidth > 0,
    imgSize: img ? img.naturalWidth + "x" + img.naturalHeight : null,
    imgSrc: img ? img.src.slice(0, 26) : null,
    source: document.querySelector(".photo-source")?.getAttribute("href"),
    geoBadge: document.querySelector(".geo-provenance .geo-badge")?.innerText,
    official: document.querySelector(".geo-provenance")?.className,
    geoSource: document.querySelector(".geo-source")?.getAttribute("href"),
    sizes: [...document.querySelectorAll(".size-switch button")].map((b) => b.innerText),
    geoRows: document.querySelectorAll(".spec-table tbody tr").length,
    ow: document.documentElement.scrollWidth - innerWidth
  };
})()`);
await shot("08-cn-ad9-official.png");

await go("#/bike/xds-ad350-2026-l-twoo-rx-12s", "ad350", 2200);
res.ad350 = await c.eval(`(async () => {
  const img = () => document.querySelector(".bike-photo-frame img");
  const first = img();
  if (first && !first.complete) await new Promise((r) => { first.onload = r; first.onerror = r; setTimeout(r, 1200); });
  const before = { src: first?.src.slice(0, 34), ready: !!first && first.naturalWidth > 0, color: document.querySelector(".bike-visual-top span:last-child")?.innerText };
  const buttons = [...document.querySelectorAll(".bike-colorways .colorway")];
  if (buttons[2]) buttons[2].click();
  await new Promise((r) => setTimeout(r, 400));
  const second = img();
  if (second && !second.complete) await new Promise((r) => { second.onload = r; second.onerror = r; setTimeout(r, 1200); });
  return {
    colors: buttons.map((b) => b.innerText.trim()),
    before,
    after: { src: second?.src.slice(0, 34), ready: !!second && second.naturalWidth > 0, color: document.querySelector(".bike-visual-top span:last-child")?.innerText },
    changed: before.src !== second?.src.slice(0, 34),
    badge: document.querySelector(".photo-badge")?.innerText,
    source: document.querySelector(".photo-source")?.getAttribute("href")
  };
})()`);

await go("#/bike/x-lab-ad8-2026-105-di2-r7170", "ad8", 1800);
res.ad8 = await c.eval(`({
  h1: document.querySelector("h1")?.innerText.replace(/\\s+/g, " ").trim(),
  photoFrame: !!document.querySelector(".bike-photo-frame"),
  svg: !!document.querySelector(".bike-hero-visual svg"),
  badge: document.querySelector(".bike-visual-top span")?.innerText,
  geo: document.querySelector(".geo-provenance .geo-badge")?.innerText
})`);

await go("#/bike/sava-blade-r7-2026-105-di2-12s", "blade-r7", 2200);
res.bladeR7 = await c.eval(`({
  h1: document.querySelector("h1")?.innerText.replace(/\\s+/g, " ").trim(),
  geo: document.querySelector(".geo-provenance .geo-badge")?.innerText,
  geoClass: document.querySelector(".geo-provenance")?.className,
  source: document.querySelector(".geo-source")?.getAttribute("href"),
  sizes: [...document.querySelectorAll(".size-switch button")].map((b) => b.innerText),
  imgReady: (() => { const i = document.querySelector(".bike-photo-frame img"); return !!i && i.complete && i.naturalWidth > 0; })(),
  tableHead: [...document.querySelectorAll(".spec-table thead th")].map((x) => x.innerText)
})`);

await go("#/about", "about", 1500);
res.about = await c.eval(`({
  author: document.querySelector(".author-name")?.innerText,
  role: document.querySelector(".author-role")?.innerText,
  note: document.querySelector(".author-note")?.innerText.replace(/\\s+/g, " ").trim().slice(0, 80),
  footer: document.querySelector(".footer-signature")?.innerText.replace(/\\s+/g, " ").trim(),
  terms: document.querySelectorAll(".term-row").length,
  links: [...document.querySelectorAll("a[href*='xidesheng'], a[href*='pardus'], a[href*='sava'], a[href*='winspace']")].length,
  sourceLinks: [...document.querySelectorAll(".source-link-row a")].map((a) => a.innerText.trim()),
  sourceRows: document.querySelectorAll(".source-link-row").length
})`);
await shot("09-about-signature.png");

const compareIds = ["x-lab-ad9-2026-dura-ace-di2-r9270", "sava-blade-r7-2026-105-di2-12s", "xds-ad350-2026-l-twoo-rx-12s"];
await c.eval(`localStorage.setItem("velo-atlas-compare", JSON.stringify(${JSON.stringify(compareIds)}))`);
await go("#/compare", "compare", 2200);
res.compare = await c.eval(`({
  h1: document.querySelector("h1")?.innerText,
  cols: document.querySelectorAll("table thead th").length,
  rows: document.querySelectorAll("table tbody tr").length,
  best: document.querySelectorAll(".best, .is-best, [data-best]").length,
  hasXds: document.body.innerText.includes("AD350"),
  hasAd9: document.body.innerText.includes("AD9"),
  ow: document.documentElement.scrollWidth - innerWidth
})`);

await c.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await go("#/", "mobile", 1800);
res.mobile = await c.eval(`({
  width: innerWidth,
  ow: document.documentElement.scrollWidth - innerWidth,
  h1: document.querySelector("h1")?.innerText.split(String.fromCharCode(10))[0],
  nav: !!document.querySelector(".nav-toggle, .menu-toggle, button[aria-label*='菜单']"),
  signature: document.querySelector(".footer-signature")?.innerText.replace(/\\s+/g, " ").trim()
})`);

res.logs = c.logs;
res.externalRequests = res.home.resources;
console.log(JSON.stringify(res, null, 1));
process.exit(0);
