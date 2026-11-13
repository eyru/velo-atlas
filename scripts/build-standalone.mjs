import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const outProject = path.join(root, "VELO-ATLAS-骑行图鉴.html");
const outParent = path.resolve(root, "..", "VELO-ATLAS-骑行图鉴.html");

const html = await readFile(path.join(dist, "index.html"), "utf8");
const jsMatch = html.match(/<script[^>]*src="([^"]+\.js)"[^>]*><\/script>/);
const cssMatch = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/);
if (!jsMatch || !cssMatch) throw new Error("build output not found: run pnpm build first");

const resolveAsset = (url) => path.join(dist, url.replace(/^\//, ""));

const MIME = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

async function replaceAsync(text, pattern, replacer) {
  const matches = [...text.matchAll(pattern)];
  if (!matches.length) return text;
  const pieces = [];
  let last = 0;
  for (const m of matches) {
    pieces.push(text.slice(last, m.index));
    pieces.push(await replacer(...m));
    last = m.index + m[0].length;
  }
  pieces.push(text.slice(last));
  return pieces.join("");
}

async function inlineAssets(text, label) {
  let bytes = 0;
  let count = 0;
  const dataUri = async (file) => {
    const ext = path.extname(file).toLowerCase();
    const mime = MIME[ext];
    if (!mime) return null;
    const buf = await readFile(resolveAsset("/assets/" + file));
    bytes += buf.byteLength;
    count += 1;
    return "data:" + mime + ";base64," + buf.toString("base64");
  };

  // Vite with base:"./" emits new URL("name.webp", import.meta.url).href.
  text = await replaceAsync(
    text,
    /new URL\("([^"]+\.[A-Za-z0-9]+)"\s*,\s*import\.meta\.url\)\.href/g,
    async (whole, file) => {
      const uri = await dataUri(file);
      return uri ? JSON.stringify(uri) : whole;
    },
  );

  // Older output / absolute asset URLs.
  const urls = [...new Set(text.match(/\/assets\/[A-Za-z0-9._@%+~-]+\.[A-Za-z0-9]+/g) || [])];
  for (const url of urls) {
    const ext = path.extname(url).toLowerCase();
    const mime = MIME[ext];
    if (!mime) continue;
    const buf = await readFile(resolveAsset(url));
    bytes += buf.byteLength;
    count += 1;
    text = text.split(url).join("data:" + mime + ";base64," + buf.toString("base64"));
  }
  console.log(label + " inlined assets:", count, "| raw", (bytes / 1024).toFixed(1), "kB");
  return text;
}

const js = (await inlineAssets(await readFile(resolveAsset(jsMatch[1]), "utf8"), "js")).replaceAll("</script", "<\\/script");
const css = (await inlineAssets(await readFile(resolveAsset(cssMatch[1]), "utf8"), "css")).replaceAll("</style", "<\\/style");
const favicon = await readFile(path.join(root, "public", "favicon.svg"));
const report = await readFile(path.join(root, "public", "research", "fact-check.md"));
const faviconUri = "data:image/svg+xml;base64," + favicon.toString("base64");
const reportB64 = report.toString("base64");

const reportBridge = `<script>
(function () {
  window.__VELO_STANDALONE__ = true;
  var payload = "${reportB64}";
  function blobUrl() {
    var bin = atob(payload);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], { type: "text/markdown;charset=utf-8" }));
  }
  document.addEventListener("click", function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('a[href$="fact-check.md"]') : null;
    if (!link) return;
    event.preventDefault();
    var url = blobUrl();
    var win = window.open(url, "_blank");
    if (!win) window.location.href = url;
  }, true);
})();
</script>`;

let out = html
  .replace(jsMatch[0], () => "")
  .replace(cssMatch[0], () => "<style>" + css + "</style>")
  .replace(/<link rel="icon"[^>]*>/, () => '<link rel="icon" href="' + faviconUri + '" type="image/svg+xml">')
  // 带 import.meta 的包必须按模块执行；模块脚本内联后在 file:// 下同样可用。
  .replace("</body>", () => reportBridge + '\n<script type="module">' + js + "</script>\n</body>")
  .replace("<body>", () => '<!-- VELO ATLAS 单文件版：样式、脚本、图标、官方配色图与核查报告均已内联，双击即可离线打开。 -->\n  <body>');

const leftover = [...out.matchAll(/.{0,100}(?:src|href)="\/assets\/.{0,100}/g)].slice(0, 8).map((m) => m[0]);
if (leftover.length) {
  console.log("LEFTOVER REFS:", leftover);
  throw new Error("standalone output still references external assets");
}
const bareRefs = (out.match(/\/assets\//g) || []).length;
if (bareRefs) throw new Error("standalone output still contains /assets/ references: " + bareRefs);

await writeFile(outProject, out);
await writeFile(outParent, out);
const kb = (n) => (n / 1024).toFixed(1) + " kB";
console.log("built:", outProject);
console.log("mirror:", outParent);
console.log("size:", kb(Buffer.byteLength(out)), "| js", kb(Buffer.byteLength(js)), "| css", kb(Buffer.byteLength(css)), "| report", kb(Buffer.byteLength(report)));
console.log("remaining /assets/ refs:", (out.match(/\/assets\//g) || []).length);
