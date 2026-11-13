/**
 * 数据完整性校验：直接打包 src/data/database.ts 后逐条断言，
 * 不依赖浏览器与开发服务器，可放进 CI。
 *
 *   pnpm check
 */
import { build } from "esbuild";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const cacheDir = path.join(root, "node_modules", ".cache", "velo-atlas");
const cacheFile = path.join(cacheDir, "database.mjs");

const bundled = await build({
  stdin: {
    contents: [
      'export { bikes, families, stats } from "./src/data/database.ts";',
      'export { brands } from "./src/data/brands.ts";',
      'export { familySources } from "./src/data/family-sources.ts";',
    ].join("\n"),
    resolveDir: root,
    sourcefile: "data-check-entry.ts",
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

const { bikes, families, brands, stats, familySources } = await import(
  pathToFileURL(cacheFile).href + "?t=" + Date.now()
);

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (cat, msg) => warnings.push({ cat, msg });

const HEX = /^#[0-9a-f]{6}$/i;
const URL_RE = /https?:\/\/[^\s；，。（）()]+/;
const brandNames = new Set(brands.map((b) => b.name));
const brandByName = new Map(brands.map((b) => [b.name, b]));
const familyIds = new Set();
const bikeIds = new Set();
const seenNames = new Map();

for (const f of families) {
  const at = `车系 ${f.id}`;
  if (familyIds.has(f.id)) fail(`${at}：id 重复`);
  familyIds.add(f.id);
  if (!brandNames.has(f.brand)) fail(`${at}：品牌 ${f.brand} 不在品牌库`);
  if (!f.name?.trim()) fail(`${at}：车系名为空`);
  if (!f.generation?.trim()) fail(`${at}：缺少世代`);

  const key = `${f.brand}::${f.name}`.toLowerCase();
  if (seenNames.has(key)) fail(`${at}：与 ${seenNames.get(key)} 重复（同品牌同名车系）`);
  seenNames.set(key, f.id);

  const [minYear, maxYear] = f.years;
  if (!(minYear <= maxYear)) fail(`${at}：年款区间倒置 ${minYear}-${maxYear}`);
  if (minYear < 2015 || maxYear > 2028) warn("年款", `${at}：区间越界 ${minYear}-${maxYear}`);

  if (!f.colors.length) fail(`${at}：没有配色`);
  for (const c of f.colors) {
    if (!c.name?.trim() || !c.en?.trim()) fail(`${at}：配色缺少中英文名`);
    if (!HEX.test(c.hex)) fail(`${at}：配色 ${c.name} hex 非法 ${c.hex}`);
    if (c.photo && !c.photoSource) fail(`${at}：配色 ${c.name} 有官方图但缺少来源页`);
  }

  if (f.geoTable?.length) {
    const labels = f.geoTable.map((s) => s.label).join("/");
    if (labels !== f.sizes.join("/")) fail(`${at}：逐码几何尺码 ${labels} 与 sizes ${f.sizes.join("/")} 不一致`);
    for (const s of f.geoTable) {
      if (!(s.stack > 450 && s.stack < 720)) fail(`${at}：${s.label} 码 Stack 异常 ${s.stack}`);
      if (!(s.reach > 300 && s.reach < 560)) fail(`${at}：${s.label} 码 Reach 异常 ${s.reach}`);
      if (!(s.headAngle > 60 && s.headAngle < 76)) fail(`${at}：${s.label} 码头管角异常 ${s.headAngle}`);
    }
  }

  if (f.sizes.length < 3) fail(`${at}：尺码少于 3 个`);
  if (f.heights.length !== f.sizes.length) fail(`${at}：尺码与身高档位数量不一致`);

  if (f.category === "mtb") {
    if (f.rearTravel && f.discipline === "hardtail") fail(`${at}：硬尾却有后行程`);
    if (!f.rearTravel && (f.discipline === "enduro" || f.discipline === "downhill")) {
      warn("行程", `${at}：${f.discipline} 车型缺少后行程`);
    }
    if (f.rearTravel && !(f.rearTravel >= 60 && f.rearTravel <= 220)) fail(`${at}：后行程异常 ${f.rearTravel}`);
    if (!f.frontTravel) warn("行程", `${at}：山地车缺少前行程`);
  } else if (f.frontTravel || f.rearTravel) {
    fail(`${at}：公路车不应有避震行程`);
  }

  if (!f.highlights.length) fail(`${at}：没有亮点`);
  if (!f.story || f.story.length < 20) warn("文案", `${at}：车系故事过短`);
  const familyLevelSource = !!familySources[f.id] || URL_RE.test(f.notes ?? "");
  if (!familyLevelSource && !brandByName.get(f.brand)?.website) {
    warn("来源", `${at}：既没有车系页，也没有品牌官网可回退`);
  }

  const budgets = f.builds.map((b) => b.price).sort((a, b) => a - b);
  if (budgets.length > 1) {
    const min = budgets[0];
    const max = budgets[budgets.length - 1];
    if (max / min > 30) warn("价差", `${at}：版本价差 ${(max / min).toFixed(1)}×，请确认是否为同车系`);
  }

  for (const b of f.builds) {
    const bat = `${at} / ${b.year} ${b.edition}`;
    if (!b.edition?.trim()) fail(`${bat}：版本名为空`);
    if (b.year < minYear || b.year > maxYear) fail(`${bat}：年款越出车系区间`);
    if (!(b.price > 0)) fail(`${bat}：价格非法 ${b.price}`);
    if (b.price > 400000) warn("价格", `${bat}：价格 ${b.price} 偏高，请复核`);
    if (!(b.weight > 0.5 && b.weight < 30)) fail(`${bat}：重量非法 ${b.weight}`);
    if (!b.groupset?.trim()) fail(`${bat}：缺少套件`);
    if (!b.wheels?.trim()) fail(`${bat}：缺少轮组`);
  }
}

for (const b of bikes) {
  const at = `版本 ${b.id}`;
  if (bikeIds.has(b.id)) fail(`${at}：id 重复`);
  bikeIds.add(b.id);
  if (!familyIds.has(b.familyId)) fail(`${at}：找不到车系 ${b.familyId}`);
  if (!b.brandSlug) fail(`${at}：缺少品牌 slug`);
  if (!(b.priceUsd > 0)) fail(`${at}：美元参考价非法`);
  if (!(b.completeness >= 78 && b.completeness <= 100)) warn("完整度", `${at}：完整度异常 ${b.completeness}`);
  if (b.specs.length !== 6) fail(`${at}：规格组 ${b.specs.length} 组，应为 6 组`);
  const items = b.specs.reduce((n, g) => n + g.items.length, 0);
  if (items < 30) warn("规格", `${at}：规格仅 ${items} 项`);
  if (b.sizes.length < 3) fail(`${at}：尺码少于 3 个`);
  if (!b.sizes.every((s) => s.stack > 450 && s.stack < 720 && s.reach > 300 && s.reach < 560)) {
    fail(`${at}：几何数值超出合理范围`);
  }
  if (!b.searchText.includes(b.family.toLowerCase())) fail(`${at}：搜索索引缺少车系名`);
  if (!b.highlights.length) fail(`${at}：缺少亮点`);
  if (!b.notes?.trim()) fail(`${at}：缺少数据说明`);
  if (!b.sourceUrl) warn("来源", `${at}：车系与品牌都没有可追溯链接`);
  if (new RegExp(`${b.family}\\s+${b.family}`, "i").test(b.name)) fail(`${at}：显示名重复车系前缀`);
}

const byCat = new Map();
for (const w of warnings) {
  const entry = byCat.get(w.cat) ?? [];
  entry.push(w.msg);
  byCat.set(w.cat, entry);
}

console.log("VELO ATLAS · 数据校验");
console.log(`  车系 ${families.length} · 版本 ${bikes.length} · 品牌 ${stats.brands} · 年款 ${stats.years}`);
console.log(`  参考价 ¥${stats.minPrice.toLocaleString("zh-CN")} – ¥${stats.maxPrice.toLocaleString("zh-CN")}`);
const withFamily = families.filter((f) => familySources[f.id] || URL_RE.test(f.notes ?? "")).length;
const coveredBikes = bikes.filter((b) => {
  const family = families.find((f) => f.id === b.familyId);
  return !!familySources[b.familyId] || URL_RE.test(family?.notes ?? "");
}).length;
console.log(
  `  来源覆盖：车系级 ${withFamily}/${families.length}（版本 ${coveredBikes}/${bikes.length}）· 其余回退品牌官网`,
);
const verdict = [
  errors.length ? `${errors.length} 个错误` : "",
  warnings.length ? `${warnings.length} 条提示` : "",
].filter(Boolean);
console.log(`  结论：${verdict.length ? verdict.join(" · ") : "全部通过"}`);

for (const line of errors.slice(0, 40)) console.log("  ✗ " + line);
if (errors.length > 40) console.log(`  … 其余 ${errors.length - 40} 个错误省略`);

for (const [cat, list] of byCat) {
  console.log(`  ! ${cat} ${list.length} 条`);
  for (const line of list.slice(0, 3)) console.log("      " + line);
  if (list.length > 3) console.log(`      … 其余 ${list.length - 3} 条省略`);
}

process.exit(errors.length ? 1 : 0);
