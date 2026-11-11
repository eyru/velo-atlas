import { ArrowRight, ArrowUpRight, Calendar, Database, Gauge, Mountain, Palette, Ruler, Tag, Weight, Wind } from "lucide-react";
import { brands } from "../data/brands";
import { bikes, families, stats } from "../data/database";
import type { Category } from "../data/types";
import { cny, disciplineLabel } from "../lib/format";
import { Link } from "../router";
import { BikeSVG } from "../components/BikeSVG";
import { BikeCard } from "../components/BikeCard";

const categoryCopy: Record<Category, { cn: string; en: string; desc: string; icon: typeof Wind }> = {
  road: {
    cn: "公路车",
    en: "ROAD / 01",
    desc: "从气动竞赛到砾石长途，按品牌、年份、颜色与骑行类型检索。",
    icon: Wind,
  },
  mtb: {
    cn: "山地车",
    en: "MOUNTAIN / 02",
    desc: "XC、林道、耐力到速降，把行程、几何与配置放在同一张表里。",
    icon: Mountain,
  },
};

export function Home() {
  const heroBike =
    bikes.find((b) => b.family.includes("Tarmac") && b.year === 2026) ??
    [...bikes].filter((b) => b.year >= 2025).sort((a, b) => b.popularity - a.popularity)[0];
  const featured = [...bikes]
    .filter((b) => b.year >= 2025 && b.price >= 15000)
    .sort((a, b) => b.popularity - a.popularity)
    .filter((b, i, arr) => arr.findIndex((x) => x.familyId === b.familyId) === i)
    .slice(0, 6);

  const entryBikes = [...bikes]
    .filter((b) => b.price <= 10000)
    .sort((a, b) => b.popularity - a.popularity || b.year - a.year)
    .filter((b, i, arr) => arr.findIndex((x) => x.familyId === b.familyId) === i)
    .slice(0, 6);
  const entryCount = bikes.filter((b) => b.price <= 10000).length;

  const roadFamilies = families.filter((f) => f.category === "road");
  const mtbFamilies = families.filter((f) => f.category === "mtb");
  const roadBike = bikes.find((b) => b.family === "Tarmac") ?? bikes.find((b) => b.category === "road")!;
  const mtbBike = bikes.find((b) => b.family === "Nomad") ?? bikes.find((b) => b.category === "mtb")!;

  const brandCounts = brands
    .map((b) => ({ ...b, count: bikes.filter((x) => x.brandSlug === b.slug).length }))
    .sort((a, b) => b.count - a.count);

  const yearCounts = [...new Set(bikes.map((b) => b.year))]
    .sort((a, b) => b - a)
    .map((year) => ({ year, count: bikes.filter((b) => b.year === year).length }));

  const geoPoints = bikes.reduce((sum, b) => sum + b.sizes.length * 6, 0);
  const colorCount = new Set(families.flatMap((f) => f.colors.map((c) => c.name))).size;
  const groupsetCount = new Set(bikes.map((b) => b.groupset)).size;
  const yearCount = new Set(bikes.map((b) => b.year)).size;
  const minWeight = Math.min(...bikes.map((b) => b.weight));
  const maxWeight = Math.max(...bikes.map((b) => b.weight));
  const maxYearCount = Math.max(...yearCounts.map((x) => x.count));

  const dataItems = [
    { icon: Tag, k: "价格", t: cny(stats.minPrice) + " — " + cny(stats.maxPrice), d: "每个版本的中国区参考价，并给出同车系历年走势。" },
    { icon: Ruler, k: "几何", t: geoPoints.toLocaleString("zh-CN") + " 个数据点", d: "Stack / Reach / 头管角 / 座管角 / 后下叉 / 轴距，按尺码展开。" },
    { icon: Calendar, k: "年份", t: stats.years + " 共 " + yearCount + " 个年款", d: "区分在售款与往季款，年款与版本清晰对应。" },
    { icon: Palette, k: "颜色", t: colorCount + " 种配色", d: "中文名、英文名、色值与色系，支持按色系筛选。" },
    { icon: Gauge, k: "配置", t: groupsetCount + " 种套件", d: "套件、轮组、轮胎、座舱与刹车，逐项落到具体型号。" },
    { icon: Weight, k: "重量", t: minWeight.toFixed(1) + " — " + maxWeight.toFixed(1) + " kg", d: "整车参考重量，用于横向比较不同价位与材质的差异。" },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-word" aria-hidden="true">ATLAS</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="accent-dot" /> VELO ATLAS — 自行车参数档案</p>
            <h1>
              把每一台车，<br />
              <em>读成一张工程图。</em>
            </h1>
            <p className="hero-lede">
              价格、几何、生产年份、配色、套件与整车重量，集中在一个可以横向比较的档案库里。
              公路与山地分开归档，按品牌、年份、颜色一路筛到你想要的那一台。
            </p>
            <div className="hero-actions">
              <Link to="/catalog/road" className="btn btn-primary">进入公路车库 <ArrowRight size={16} /></Link>
              <Link to="/catalog/mtb" className="btn btn-ghost">浏览山地车 <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-stats">
              <div><strong>{stats.bikes}</strong><span>版本档案</span></div>
              <div><strong>{stats.families}</strong><span>车系</span></div>
              <div><strong>{stats.brands}</strong><span>品牌</span></div>
              <div><strong>{stats.years}</strong><span>年份跨度</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-head">
              <span className="mono">FEATURED BUILD / 2026</span>
              <span className="mono">{heroBike.brandName.toUpperCase()}</span>
            </div>
            <BikeSVG bike={heroBike} showGeometry className="hero-bike" />
            <div className="hero-caption">
              <div>
                <span className="mono">{heroBike.brandCn} · {heroBike.family}</span>
                <strong>{heroBike.edition}</strong>
              </div>
              <div className="hero-caption-price">
                <span className="mono">参考价</span>
                <strong>{cny(heroBike.price)}</strong>
              </div>
            </div>
            <div className="hero-specs mono">
              <span>{heroBike.material}</span>
              <span>{heroBike.groupset}</span>
              <span>{heroBike.sizes.find((s) => s.label === "M")?.stack} / {heroBike.sizes.find((s) => s.label === "M")?.reach} MM</span>
            </div>
          </div>
        </div>
        <div className="hero-rail mono">
          <span>ENGINEERING DATA / {stats.years}</span>
          <span>STACK · REACH · HEAD ANGLE · SEAT ANGLE · CHAINSTAY</span>
          <span>{stats.bikes} BUILDS ARCHIVED</span>
        </div>
      </section>

      <section className="section container category-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / 分类归档</p>
            <h2>两条线路，各自成册。</h2>
          </div>
          <p className="section-note">公路车与山地车使用独立的数据模型：轮胎、行程、几何基准与筛选维度都不同，不做混排。</p>
        </div>
        <div className="category-grid">
          {(["road", "mtb"] as Category[]).map((cat) => {
            const copy = categoryCopy[cat];
            const Icon = copy.icon;
            const fams = cat === "road" ? roadFamilies : mtbFamilies;
            const buildCount = fams.reduce((s, f) => s + f.builds.length, 0);
            const disciplines = [...new Set(fams.map((f) => f.discipline))];
            return (
              <Link key={cat} to={"/catalog/" + cat} className={"category-card " + cat}>
                <div className="category-top">
                  <span className="mono">{copy.en}</span>
                  <Icon size={20} />
                </div>
                <div className="category-visual">
                  <BikeSVG bike={cat === "road" ? roadBike : mtbBike} variant="card" />
                </div>
                <div className="category-body">
                  <h3>{copy.cn}</h3>
                  <p>{copy.desc}</p>
                  <div className="category-meta">
                    <span><strong>{fams.length}</strong> 车系</span>
                    <span><strong>{buildCount}</strong> 版本</span>
                    <span><strong>{brands.filter((b) => bikes.some((x) => x.brandSlug === b.slug && x.category === cat)).length}</strong> 品牌</span>
                  </div>
                  <div className="category-tags">
                    {disciplines.slice(0, 5).map((d) => <span key={d}>{disciplineLabel[d]}</span>)}
                  </div>
                </div>
                <span className="category-arrow"><ArrowUpRight size={20} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section container featured-section entry-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 / 入门车库</p>
            <h2>第一台车，不必从五位数开始。</h2>
          </div>
          <p className="section-note">
            已收录 {entryCount} 个 10,000 元以下版本，从 1,999 元的入门公路/山地到 9,990 元的耐力公路。
            <Link to="/catalog/road?band=0-5000" className="text-link"> 公路 ¥5,000 以下 <ArrowRight size={14} /></Link>
            <Link to="/catalog/mtb?band=0-5000" className="text-link"> 山地 ¥5,000 以下 <ArrowRight size={14} /></Link>
          </p>
        </div>
        <div className="bike-grid">
          {entryBikes.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
        </div>
      </section>

      <section className="section container featured-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 / 本周焦点</p>
            <h2>值得先看的六台。</h2>
          </div>
          <Link to="/catalog/road?sort=popular" className="text-link">按热度浏览全部 <ArrowRight size={15} /></Link>
        </div>
        <div className="bike-grid">
          {featured.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
        </div>
      </section>

      <section className="section container data-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 / 数据维度</p>
            <h2>一台车，拆成六层。</h2>
          </div>
          <p className="section-note">不是参数堆砌，而是按决策顺序组织：先看价格与年份，再看几何是否合身，最后核对套件与细节。</p>
        </div>
        <div className="data-grid">
          {dataItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.k} className="data-card">
                <div className="data-card-head"><Icon size={18} /><span className="mono">{item.k}</span></div>
                <strong>{item.t}</strong>
                <p>{item.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section brand-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">05 / 品牌库</p>
              <h2>{brands.length} 个品牌，一张谱系。</h2>
            </div>
            <Link to="/brands" className="text-link">查看完整品牌库 <ArrowRight size={15} /></Link>
          </div>
          <div className="brand-marquee">
            {brandCounts.map((b) => (
              <Link key={b.slug} to={"/brand/" + b.slug} className="brand-tile" style={{ ["--brand" as string]: b.accent }}>
                <span className="brand-tile-name">{b.name}</span>
                <span className="brand-tile-cn">{b.cn} · {b.country}</span>
                <span className="brand-tile-count mono">{String(b.count).padStart(2, "0")} BUILDS</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container year-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 / 年款索引</p>
            <h2>从新年款往回翻。</h2>
          </div>
          <p className="section-note">年款是自行车配置变化的第一坐标。点击年份，直接进入对应筛选结果。</p>
        </div>
        <div className="year-list">
          {yearCounts.map((y) => (
            <Link key={y.year} to={"/year/" + y.year} className="year-row">
              <span className="year-number">{y.year}</span>
              <span className="year-bar"><i style={{ width: (y.count / maxYearCount) * 100 + "%" }} /></span>
              <span className="year-count mono">{y.count} BUILDS</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section container closing">
        <div className="closing-inner">
          <p className="eyebrow">READY TO COMPARE</p>
          <h2>别再对着六篇评测来回切标签页。</h2>
          <p>把三台车放进对比台，价格、几何、套件和重量逐行对齐。所有数据都可以在一个屏幕上读完。</p>
          <div className="hero-actions">
            <Link to="/catalog/road" className="btn btn-primary">开始检索 <ArrowRight size={16} /></Link>
            <Link to="/compare" className="btn btn-ghost">打开对比台 <Database size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
