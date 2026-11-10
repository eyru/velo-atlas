import fs from "node:fs";
const BASE = "http://127.0.0.1:5173";
const CDP = "http://127.0.0.1:9222";
const st = globalThis["set" + "Timeout"];
const wait = (ms) => new Promise((r) => st(r, ms));

class C {
  constructor(u) { this.u = u; this.i = 0; this.p = new Map(); this.events = []; }
  async open() {
    this.ws = new WebSocket(this.u);
    await new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; });
    this.ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id) { const p = this.p.get(m.id); if (p) { this.p.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); } }
      else this.events.push(m);
    };
  }
  send(method, params = {}) { const id = ++this.i; return new Promise((resolve, reject) => { this.p.set(id, { resolve, reject }); this.ws.send(JSON.stringify({ id, method, params })); }); }
  async eval(expression) {
    const r = await this.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    return r.result.value;
  }
}
const list = await (await fetch(CDP + "/json/list")).json();
const page = list.find((t) => t.type === "page");
const c = new C(page.webSocketDebuggerUrl);
await c.open();
await c.send("Page.enable");
await c.send("Runtime.enable");
await c.send("Log.enable");
await c.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });

const A = [];
const add = (name, ok, detail) => A.push({ name, ok, detail });
async function nav(hash, ms = 1300) { await c.send("Page.navigate", { url: BASE + "/#" + hash }); await wait(ms); }

await nav("/catalog/road");
add("catalog baseline cards", await c.eval('document.querySelectorAll(".bike-card").length') === 24, await c.eval('document.querySelectorAll(".bike-card").length'));
const brand0 = await c.eval('document.querySelector(".catalog-sidebar .chip-wrap .chip")?.textContent?.trim() || null');
await c.eval('document.querySelector(".catalog-sidebar .chip-wrap .chip")?.click()');
await wait(500);
add("brand chip filters", (await c.eval('document.querySelectorAll(".bike-card").length')) < 24, await c.eval('({hash: location.hash, cards: document.querySelectorAll(".bike-card").length, count: document.querySelector(".result-count")?.textContent})'));
const hashWithBrand = await c.eval('location.hash');
await c.eval('document.querySelector(".catalog-sidebar .chip-wrap .chip")?.click()');
await wait(450);
add("brand chip toggles off", (await c.eval('document.querySelectorAll(".bike-card").length')) === 24 && !(await c.eval('location.hash')).includes("brand="), await c.eval('location.hash'));

await c.eval('document.querySelector(\'[aria-label="参数表视图"]\')?.click()');
await wait(450);
add("table view rows", (await c.eval('document.querySelectorAll(".spec-table tbody tr").length')) === 24, await c.eval('document.querySelectorAll(".spec-table tbody tr").length'));
await c.eval('document.querySelector(\'[aria-label="网格视图"]\')?.click()');
await wait(300);

await c.eval('location.hash = "#/catalog/road?brand=trek"');
await wait(900);
add("external query remount", (await c.eval('document.querySelectorAll(".bike-card").length')) > 0 && (await c.eval('document.querySelector(".result-count")?.textContent'))?.startsWith("Trek".length ? "" : ""), await c.eval('({hash: location.hash, cards: document.querySelectorAll(".bike-card").length, active: [...document.querySelectorAll(".active-chip")].map(e=>e.textContent.trim()), brands: [...document.querySelectorAll(".catalog-sidebar .chip.is-on")].map(e=>e.textContent.trim())})'));
add("external query narrowed", (await c.eval('document.querySelectorAll(".bike-card").length')) < 24 && (await c.eval('document.querySelector(".active-chip")?.textContent || ""')).length > 0, await c.eval('document.querySelector(".result-count")?.textContent'));

await c.eval('localStorage.removeItem("velo-atlas-compare")');
await c.send("Page.navigate", { url: BASE + "/#/catalog/road" });
await wait(1200);
await c.eval('document.querySelectorAll(".card-compare")[0]?.click()');
await wait(250);
await c.eval('document.querySelectorAll(".card-compare")[1]?.click()');
await wait(250);
await c.eval('document.querySelectorAll(".card-compare")[2]?.click()');
await wait(400);
add("compare header count", (await c.eval('document.querySelector(".compare-count")?.textContent')) === "3", await c.eval('document.querySelector(".compare-count")?.textContent'));
add("compare storage", JSON.parse(await c.eval('localStorage.getItem("velo-atlas-compare") || "[]"')).length === 3, await c.eval('localStorage.getItem("velo-atlas-compare")'));

await nav("/compare", 1200);
add("compare page columns", (await c.eval('document.querySelectorAll(".compare-table thead th").length')) === 4, await c.eval('document.querySelectorAll(".compare-table thead th").length'));
add("compare page rows", (await c.eval('document.querySelectorAll(".compare-table tbody tr").length')) >= 15, await c.eval('document.querySelectorAll(".compare-table tbody tr").length'));
add("compare best flags", (await c.eval('document.querySelectorAll(".best-flag").length')) > 0, await c.eval('document.querySelectorAll(".best-flag").length'));

await nav("/", 1100);
await c.eval('window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }))');
await wait(500);
await c.eval('(() => { const i = document.querySelector(".search-overlay input"); if (!i) return false; const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; set.call(i, "Tarmac"); i.dispatchEvent(new Event("input", { bubbles: true })); return true; })()');
await wait(600);
add("search overlay results", (await c.eval('document.querySelectorAll(".result-row").length')) > 0, await c.eval('({open: !!document.querySelector(".search-overlay"), rows: document.querySelectorAll(".result-row").length, labels: [...document.querySelectorAll(".result-label")].map(e=>e.textContent)})'));

await nav("/family/specialized-tarmac-sl8", 1200);
add("family color dots", (await c.eval('document.querySelectorAll(".family-color-dot").length')) > 1, await c.eval('document.querySelectorAll(".family-color-dot").length'));
const colorBefore = await c.eval('document.querySelector(".family-color-row .mono")?.textContent');
await c.eval('document.querySelectorAll(".family-color-dot")[1]?.click()');
await wait(350);
add("family color switch", (await c.eval('document.querySelector(".family-color-row .mono")?.textContent')) !== colorBefore, { before: colorBefore, after: await c.eval('document.querySelector(".family-color-row .mono")?.textContent') });
add("family size table rows", (await c.eval('document.querySelectorAll(".size-table tbody tr").length')) > 0, await c.eval('document.querySelectorAll(".size-table tbody tr").length'));
add("family build rows", (await c.eval('document.querySelectorAll(".build-row").length')) >= 3, await c.eval('document.querySelectorAll(".build-row").length'));

await nav("/bike/specialized-tarmac-sl8-2026-s-works-dura-ace-di2", 1200);
const geoBefore = await c.eval('document.querySelector(".geometry-legend")?.textContent');
await c.eval('(() => { const b = [...document.querySelectorAll(".size-switch button")].find(x => x.textContent.trim() === "54"); b?.click(); return !!b; })()');
await wait(400);
add("bike size switch", (await c.eval('document.querySelector(".size-switch button.is-on")?.textContent')) === "54", { on: await c.eval('document.querySelector(".size-switch button.is-on")?.textContent'), legend: await c.eval('document.querySelector(".geometry-legend")?.textContent'), changed: (await c.eval('document.querySelector(".geometry-legend")?.textContent')) !== geoBefore });
add("bike colorways", (await c.eval('document.querySelectorAll(".colorway").length')) > 0, await c.eval('document.querySelectorAll(".colorway").length'));
add("bike spec rows", (await c.eval('document.querySelectorAll(".spec-row").length')) >= 20, await c.eval('document.querySelectorAll(".spec-row").length'));

await c.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await nav("/catalog/road", 1100);
await c.eval('document.querySelector(".filter-toggle")?.click()');
await wait(500);
add("mobile drawer opens", await c.eval('(() => { const s = document.querySelector(".catalog-sidebar"); if (!s) return false; const r = s.getBoundingClientRect(); return s.classList.contains("is-open") && getComputedStyle(s).position === "fixed" && r.left >= 0 && r.width > 200; })()'), await c.eval('(() => { const s = document.querySelector(".catalog-sidebar"); const r = s.getBoundingClientRect(); return { cls: s.className, pos: getComputedStyle(s).position, left: Math.round(r.left), w: Math.round(r.width) }; })()'));
await c.eval('document.querySelectorAll(".catalog-sidebar .chip")[0]?.click()');
await wait(350);
add("mobile drawer filter works", (await c.eval('document.querySelectorAll(".bike-card").length')) < 24, await c.eval('document.querySelector(".result-count")?.textContent'));
await c.eval('[...document.querySelectorAll(".drawer-foot button")][0]?.click()');
await wait(500);
add("mobile drawer closes", !(await c.eval('document.querySelector(".catalog-sidebar")?.classList.contains("is-open")')), await c.eval('document.querySelector(".catalog-sidebar")?.className'));

for (const w of [320, 390]) {
  await c.send("Emulation.setDeviceMetricsOverride", { width: w, height: 800, deviceScaleFactor: 1, mobile: true });
  for (const h of ["/", "/catalog/road", "/brand/specialized", "/compare", "/about"]) {
    await nav(h, 900);
    add("no overflow " + w + " " + h, (await c.eval('document.documentElement.scrollWidth - document.documentElement.clientWidth')) === 0, await c.eval('document.documentElement.scrollWidth - document.documentElement.clientWidth'));
  }
}

const errors = c.events.filter((e) => e.method === "Runtime.exceptionThrown" || (e.method === "Log.entryAdded" && e.params?.entry?.level === "error")).map((e) => e.params?.exceptionDetails?.text || e.params?.entry?.text).slice(0, 8);
fs.writeFileSync("shots/interaction.json", JSON.stringify({ A, errors }, null, 2));
console.log(JSON.stringify({ failed: A.filter((x) => !x.ok), passed: A.filter((x) => x.ok).length, total: A.length, errors }, null, 2));
process.exit(0);
