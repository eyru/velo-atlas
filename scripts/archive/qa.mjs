import fs from "node:fs";
const BASE = "http://127.0.0.1:5173";
const CDP = "http://127.0.0.1:9222";
const st = globalThis["set" + "Timeout"];
const wait = (ms) => new Promise((r) => st(r, ms));

class Client {
  constructor(url) { this.url = url; this.id = 0; this.pending = new Map(); this.events = []; }
  async open() {
    this.ws = new WebSocket(this.url);
    await new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; });
    this.ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id) { const p = this.pending.get(m.id); if (p) { this.pending.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); } }
      else this.events.push(m);
    };
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject }); this.ws.send(JSON.stringify({ id, method, params })); });
  }
  async eval(expression) {
    const r = await this.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    return r.result.value;
  }
}

const PROBE = String.raw`(() => {
  const vw = innerWidth;
  const all = [...document.querySelectorAll("*")];
  const visible = (el) => {
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
    return cs.display !== "none" && cs.visibility !== "hidden" && Number(cs.opacity) > 0.01 && r.width > 0;
  };
  const overflow = all.filter((el) => {
    if (!visible(el)) return false;
    const r = el.getBoundingClientRect();
    if (r.right <= vw + 2) return false;
    if (getComputedStyle(el).position === "fixed") return false;
    if (el.closest(".spec-table-wrap, .compare-scroll, .brand-marquee, .year-list, .search-results, .catalog-sidebar")) return false;
    return true;
  }).slice(0, 10).map((el) => ({ tag: el.tagName, cls: String(el.className).slice(0, 60), right: Math.round(el.getBoundingClientRect().right) }));

  const invisible = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.textContent.trim()) continue;
    const el = node.parentElement;
    if (!el || !visible(el)) continue;
    const c = getComputedStyle(el).color;
    if (c === "rgba(0, 0, 0, 0)" || c === "transparent") {
      if (el.closest(".hero-word, .nf-code, .catalog-hero h1 em")) continue;
      invisible.push({ cls: String(el.className).slice(0, 50), text: node.textContent.trim().slice(0, 30) });
    }
  }

  const tiny = all.filter((el) => visible(el) && el.textContent.trim() && parseFloat(getComputedStyle(el).fontSize) < 9);
  const zeroSvg = [...document.querySelectorAll("svg")].filter((s) => { const r = s.getBoundingClientRect(); return r.width < 2 || r.height < 2; })
    .slice(0, 6).map((s) => ({ cls: String(s.parentElement?.className || "").slice(0, 50), w: Math.round(s.getBoundingClientRect().width), h: Math.round(s.getBoundingClientRect().height) }));

  const css = (sel, props) => {
    const el = document.querySelector(sel); if (!el) return null;
    const cs = getComputedStyle(el); const out = {};
    for (const p of props) out[p] = cs[p];
    const r = el.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), ...out };
  };
  return {
    url: location.hash || "/",
    title: document.title,
    viewport: innerWidth,
    h1: document.querySelector("h1")?.innerText?.replace(/\s+/g, " ").slice(0, 80) || null,
    docOverflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    scrollH: document.documentElement.scrollHeight,
    overflow,
    invisible: invisible.slice(0, 8),
    tinyCount: tiny.length,
    tinySample: tiny.slice(0, 5).map((el) => ({ cls: String(el.className).slice(0, 40), fs: getComputedStyle(el).fontSize, text: el.textContent.trim().slice(0, 16) })),
    zeroSvg,
    counts: { bikeCards: document.querySelectorAll(".bike-card").length, svg: document.querySelectorAll("svg").length, buttons: document.querySelectorAll("button").length },
    header: css(".header-inner", ["height"]),
    container: css(".container", ["width"]),
    heroH1: css("h1", ["fontSize", "lineHeight", "letterSpacing"]),
    firstCard: css(".bike-card", ["width"]),
    compareRows: document.querySelectorAll(".compare-table tbody tr").length,
    buildRows: document.querySelectorAll(".build-row").length,
    bg: getComputedStyle(document.body).backgroundColor
  };
})()`;

const list = await (await fetch(CDP + "/json/list")).json();
const page = list.find((t) => t.type === "page");
const c = new Client(page.webSocketDebuggerUrl);
await c.open();
await c.send("Page.enable");
await c.send("Runtime.enable");
await c.send("Log.enable");
await c.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });

const out = [];
const discovered = {};
async function go(route, ms = 1300) {
  await c.send("Page.navigate", { url: BASE + "/#" + route.replace(/^#/, "") });
  await wait(ms);
  try { out.push(await c.eval(PROBE)); } catch (e) { out.push({ url: route, error: String(e).slice(0, 300) }); }
}

for (const route of ["/", "/catalog/road", "/catalog/mtb", "/brands", "/brand/specialized", "/compare", "/about"]) {
  await go(route);
  if (route === "/catalog/road") {
    discovered.bikes = await c.eval('[...document.querySelectorAll(\'a[href*="/bike/"]\')].map(a => a.getAttribute("href")).slice(0, 6)');
  }
  if (route === "/brand/specialized") {
    discovered.family = await c.eval('document.querySelector(\'a[href*="/family/"]\')?.getAttribute("href") || null');
  }
}

if (discovered.family) await go(discovered.family);
if (discovered.bikes?.[0]) await go(discovered.bikes[0]);

// populate compare via localStorage then visit
if (discovered.bikes?.length >= 3) {
  const ids = await c.eval('[...document.querySelectorAll(\'a[href*="/bike/"]\')].map(a => a.getAttribute("href").split("/bike/")[1]).slice(0,3)');
  await c.eval('localStorage.setItem("velo-atlas-compare", ' + JSON.stringify(JSON.stringify(ids)) + ')');
  await go("/compare");
}

// responsive widths
for (const w of [1024, 768, 390]) {
  await c.send("Emulation.setDeviceMetricsOverride", { width: w, height: 900, deviceScaleFactor: 1, mobile: w < 500 });
  await go("/", 1000);
  await go("/catalog/road", 1000);
}

const errors = c.events.filter((e) => e.method === "Runtime.exceptionThrown" || (e.method === "Log.entryAdded" && e.params?.entry?.level === "error"))
  .map((e) => e.method === "Runtime.exceptionThrown" ? e.params.exceptionDetails.text : e.params.entry.text).slice(0, 10);

fs.writeFileSync("shots/qa2.json", JSON.stringify({ out, errors, discovered }, null, 2));
console.log(JSON.stringify({ out, errors, discovered }, null, 2));
process.exit(0);
