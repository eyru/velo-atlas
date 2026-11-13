/**
 * 从品牌官网 sitemap 自动匹配车系级官方页面，生成 src/data/family-sources.ts。
 *
 *   node scripts/build-sources.mjs
 *
 * 只做「保守匹配」：车系名按整词出现在 URL 片段里才收录；
 * 匹配不到就留空，运行时回退到品牌官网，不猜链接。
 */
import { build } from "esbuild";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { gunzipSync } from "node:zlib";

const root = path.resolve(import.meta.dirname, "..");
const cacheDir = path.join(root, "node_modules", ".cache", "velo-atlas");
const cacheFile = path.join(cacheDir, "sources-data.mjs");
const outFile = path.join(root, "src", "data", "family-sources.ts");
const rawCache = path.join(cacheDir, "sitemaps.json");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0";

const bundled = await build({
  stdin: {
    contents: [
      'export { families } from "./src/data/database.ts";',
      'export { brands } from "./src/data/brands.ts";',
    ].join("\n"),
    resolveDir: root,
    sourcefile: "sources-entry.ts",
    loader: "ts",
  },
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
  loader: { ".webp": "dataurl", ".png": "dataurl", ".jpg": "dataurl", ".svg": "dataurl" },
});
await mkdir(cacheDir, { recursive: true });
await writeFile(cacheFile, bundled.outputFiles[0].text);
const { families, brands } = await import(pathToFileURL(cacheFile).href + "?t=" + Date.now());

const URL_RE = /https?:\/\/[^\s；，。（）()]+/;
const onlyBrand = process.argv.find((a) => a.startsWith("--brand="))?.slice("--brand=".length);
const missing = families
  .filter((f) => !URL_RE.test(f.notes ?? ""))
  .filter((f) => !onlyBrand || f.brand === onlyBrand);
const brandWebsite = new Map(brands.map((b) => [b.name, b.website ?? ""]));

const HOST_ALIAS = {
  Cervélo: "www.cervelo.com",
  "Rocky Mountain": "bikes.com",
  "Santa Cruz": "www.santacruzbicycles.com",
  SAVA: "savadeck-bike.com",
  WINSPACE: "www.winspace.cc",
  "X-LAB": "www.xidesheng.com",
  PARDUS: "www.parduscycle.com",
  XDS: "www.xidesheng.com",
};

async function get(url, timeout = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "application/xml,text/xml,text/html,*/*" },
      redirect: "follow",
      signal: controller.signal,
    });
    if (!res.ok) return "";
    const buf = Buffer.from(await res.arrayBuffer());
    const gz = /\.gz(\?|$)/.test(url) || (res.headers.get("content-type") ?? "").includes("gzip");
    try {
      return gz ? gunzipSync(buf).toString("utf8") : buf.toString("utf8");
    } catch {
      return "";
    }
  } catch {
    return "";
  } finally {
    clearTimeout(timer);
  }
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].replace(/&amp;/g, "&"));

const SKIP =
  /(blog|news|support|service|dealer|store|cart|account|warranty|manual|press|event|team|athlete|career|legal|privacy|cookie|equipment|accessor|component|spare|apparel|helmet|shoe|light|lock|pump|tire|tube|saddle|pedal|handlebar|stem|headset|bearing|guard|tool|bag|rack|fender|bottle|child|trailer|toy|battery|holder|assembly|\bkit\b|hardware|wedge|\bbolt|screw|axle|derailleur|hanger|chainring|caliper|rotor|shifter|lever|grip|tape|rim|hub|spoke|valve|adapter|mount|cover|strap|bracket|spring|damper|seal|oil|grease|cleaner|lube|protector|protection|armou?r|grommet|rocker|motor|sensor|display|remote|charger|cable|wire|housing|\bfork|pre-owned|used|outlet|clearance|rental|demo|glove|seatpost|frame-shock|frameset|\bshock\b|sock|jersey|short|bib|jacket|cap\b|t-shirt|tee\b|polychloroprene|\bcsp\b|guide|registration|\/pages\/|size-chart|manual|video|review)/i;
const PRODUCTISH = /(bike|bicycle|product|\/p\/|road|mountain|gravel|mtb|cyclo|ebike)/i;

const resolveUrl = (u, base) => {
  try {
    return new URL(u, base).href;
  } catch {
    return "";
  }
};

function localeScore(url) {
  if (/\/(us|gb|au)\/en\//i.test(url)) return 5;
  if (/\/en[-_]?(us)?\//i.test(url)) return 4;
  if (/\/cn\/(zh|zh-cn|zh_cn)\//i.test(url)) return 3;
  if (/\/en\//i.test(url)) return 2;
  return 1;
}

function pickSitemaps(indexXml, baseUrl, limit) {
  const all = locs(indexXml)
    .map((u) => resolveUrl(u, baseUrl))
    .filter(Boolean);
  return [...new Set(all)].sort((a, b) => localeScore(b) - localeScore(a) || a.length - b.length).slice(0, limit);
}

/** sitemap 可能是索引、也可能是叶子；索引会再套一层，最多递归两层 */
async function collectFrom(url, depth) {
  const xml = await get(url);
  if (!xml) return [];
  if (/<sitemapindex/i.test(xml)) {
    if (depth >= 2) return [];
    const kids = pickSitemaps(xml, url, depth === 0 ? 24 : 8);
    const pages = [];
    for (let i = 0; i < kids.length; i += 5) {
      const lists = await Promise.all(kids.slice(i, i + 5).map((kid) => collectFrom(kid, depth + 1)));
      for (const list of lists) pages.push(...list);
    }
    return pages;
  }
  return locs(xml)
    .map((loc) => resolveUrl(loc, url))
    .filter(Boolean)
    .map((loc) => loc.split("?")[0].replace(/\/$/, ""));
}

async function collectUrls(host) {
  const base = "https://" + host;
  const robots = await get(base + "/robots.txt", 10000);
  const declared = [...robots.matchAll(/Sitemap:\s*(\S+)/gi)]
    .map((m) => resolveUrl(m[1].trim(), base))
    .filter(Boolean);
  const start = declared[0] ?? base + "/sitemap.xml";
  const pages = await collectFrom(start, 0);
  return [...new Set(pages)];
}

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function slugVariants(name) {
  const words = normalize(name).split("-").filter(Boolean);
  const out = [];
  for (let n = words.length; n >= 1; n -= 1) {
    const slug = words.slice(0, n).join("-");
    if (slug.length >= 2) out.push(slug);
  }
  return out;
}

function pathOf(url) {
  try {
    return decodeURIComponent(new URL(url).pathname).toLowerCase();
  } catch {
    return "";
  }
}

function segmentsOf(url) {
  return pathOf(url)
    .split("/")
    .filter(Boolean)
    .map((s) => s.replace(/\.(html?|php)$/, ""));
}

/** URL 里以整词形式出现该 slug 才算命中 */
function hits(url, slug) {
  const tokens = slug.split("-");
  for (const seg of segmentsOf(url)) {
    if (seg === slug) return 3;
    const parts = seg.split("-");
    for (let i = 0; i + tokens.length <= parts.length; i += 1) {
      if (tokens.every((t, j) => parts[i + j] === t)) {
        return parts.length === tokens.length ? 3 : 2;
      }
    }
  }
  return 0;
}

const loadCache = async () => {
  try {
    const { readFile } = await import("node:fs/promises");
    return JSON.parse(await readFile(rawCache, "utf8"));
  } catch {
    return {};
  }
};
const cache = await loadCache();

const hostByBrand = new Map();
for (const f of missing) {
  if (hostByBrand.has(f.brand)) continue;
  const site = brandWebsite.get(f.brand) ?? "";
  const host = (HOST_ALIAS[f.brand] ?? site.replace(/^https?:\/\//, "")).replace(/\/.*$/, "").replace(/^www\.www\./, "www.");
  hostByBrand.set(f.brand, host);
}

const pagesByHost = new Map();
for (const [brand, host] of hostByBrand) {
  if (!host) continue;
  if (!cache[host]) {
    process.stdout.write(`crawl ${brand} (${host}) … `);
    cache[host] = await collectUrls(host);
    console.log(cache[host].length, "urls");
  } else {
    console.log(`cache ${brand} (${host}) → ${cache[host].length} urls`);
  }
  pagesByHost.set(host, cache[host]);
}
await writeFile(rawCache, JSON.stringify(cache, null, 0));

const resolved = {};
const unresolved = [];
for (const f of missing) {
  const host = hostByBrand.get(f.brand);
  const pages = pagesByHost.get(host) ?? [];
  if (!pages.length) {
    unresolved.push(f);
    continue;
  }
  const genMatch = f.name.match(/\bgen(?:eration)?\s*(\d+)/i);
  const genToken = genMatch ? `gen-${genMatch[1]}` : "";
  const brandDomain = (brandWebsite.get(f.brand) ?? host).replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  let best = null;
  for (const [variantIndex, slug] of slugVariants(f.name).entries()) {
    const candidates = pages
      // 只认同一品牌域名，避免落到经销商或区域站点
      .filter((url) => pathOf(url) && url.includes(brandDomain))
      // 中文站点路径多为「装备/配件」栏目，英文路径更可能是整车产品页
      .filter((url) => !/[\u4e00-\u9fff]/.test(pathOf(url)))
      .filter((url) => !SKIP.test(pathOf(url)))
      // 成人车系不要落到童车页
      .filter((url) => /kid|youth|child|\bjr\b/i.test(f.name) || !/(kids?|\/kid|youth|child|-jr\b|\bjr-)/i.test(pathOf(url)))
      // 简写到更短的车系名时，只接受末段就是该车系名的落地页，防止落到别的型号
      .filter((url) => variantIndex === 0 || segmentsOf(url).at(-1) === slug)
      // 车系落地页（trekbikes.com/us/en_US/madone）本身不含 bike 字样，但末段就是车系名
      .filter((url) => PRODUCTISH.test(pathOf(url)) || segmentsOf(url).at(-1) === slug)
      .map((url) => ({ url, score: hits(url, slug) }))
      .filter((x) => x.score > 0);
    if (!candidates.length) continue;
    // 带世代的车型（Madone Gen 7）不拿现款页面冒充
    if (genToken && !candidates.some((c) => pathOf(c.url).includes(genToken))) continue;

    const top = candidates[0];
    // 同一 slug 常对应一堆具体配置页；优先取最短路径（车系落地页），
    // 再按 URL 长度打破平局，避免落到某个具体版本页。
    const electricFamily = /powerfly|hybrid|electric|e-bike|ebike|rail|exe/i.test(f.name);
    const electricPenalty = (url) => (!electricFamily && /electric|e-bike|ebike/i.test(pathOf(url)) ? 1 : 0);
    const localePenalty = (url) => (/\/(en|en-us|us|en_us)\//i.test(pathOf(url)) ? 0 : 1);
    const shortlist = candidates
      .filter((c) => c.score === top.score)
      .sort(
        (a, b) =>
          electricPenalty(a.url) - electricPenalty(b.url) ||
          localePenalty(a.url) - localePenalty(b.url) ||
          segmentsOf(a.url).length - segmentsOf(b.url).length ||
          a.url.length - b.url.length,
      );
    best = shortlist[0].url;
    break;
  }
  if (best) resolved[f.id] = best;
  else unresolved.push(f);
}

const byBrandLeft = new Map();
for (const f of unresolved) byBrandLeft.set(f.brand, (byBrandLeft.get(f.brand) ?? 0) + 1);

const lines = [
  "/**",
  " * 车系级官方页面：由 scripts/build-sources.mjs 从品牌官网 sitemap 自动匹配生成。",
  " * 只收录 URL 片段与车系名整词匹配的页面；匹配不到的不写入，运行时回退品牌官网。",
  " */",
  "export const familySources: Record<string, string> = {",
  ...Object.entries(resolved)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([id, url]) => `  "${id}": "${url}",`),
  "};",
  "",
];

if (onlyBrand) {
  console.log("\n[dry-run]", onlyBrand, "matched", Object.keys(resolved).length, "/", missing.length);
  for (const [id, url] of Object.entries(resolved)) console.log("  ", id, "→", url);
  for (const f of unresolved) console.log("  ✗", f.id, `(${f.name})`);
  process.exit(0);
}

await writeFile(outFile, lines.join("\n"));
console.log("\nmatched", Object.keys(resolved).length, "/", missing.length, "→", path.relative(root, outFile));
console.log("unresolved by brand:", [...byBrandLeft.entries()].map(([b, n]) => `${b} ${n}`).join(" · "));
