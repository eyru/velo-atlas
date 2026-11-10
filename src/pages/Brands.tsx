import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { brands } from "../data/brands";
import { bikes, families } from "../data/database";
import { Link } from "../router";
import { usePageTitle } from "../lib/useTitle";

type SortKey = "count" | "founded" | "name";

export function Brands() {
  usePageTitle("品牌库");
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("全部");
  const [sort, setSort] = useState<SortKey>("count");

  const rows = useMemo(() => {
    const list = brands.map((brand) => {
      const brandBikes = bikes.filter((b) => b.brandSlug === brand.slug);
      const brandFamilies = families.filter((f) => f.brand === brand.name);
      return {
        ...brand,
        bikeCount: brandBikes.length,
        familyCount: brandFamilies.length,
        roadCount: brandBikes.filter((b) => b.category === "road").length,
        mtbCount: brandBikes.filter((b) => b.category === "mtb").length,
        minPrice: brandBikes.length ? Math.min(...brandBikes.map((b) => b.price)) : 0,
        maxPrice: brandBikes.length ? Math.max(...brandBikes.map((b) => b.price)) : 0,
      };
    });
    const filtered = list.filter((b) => {
      if (country !== "全部" && b.country !== country) return false;
      if (!q.trim()) return true;
      const hay = (b.name + " " + b.cn + " " + b.country + " " + b.tagline + " " + b.specialties.join(" ")).toLowerCase();
      return hay.includes(q.trim().toLowerCase());
    });
    return filtered.sort((a, b) => {
      if (sort === "founded") return a.founded - b.founded;
      if (sort === "name") return a.name.localeCompare(b.name);
      return b.bikeCount - a.bikeCount || a.name.localeCompare(b.name);
    });
  }, [q, country, sort]);

  const countries = ["全部", ...new Set(brands.map((b) => b.country))];

  return (
    <div className="brands-page">
      <section className="simple-hero">
        <div className="container">
          <div className="breadcrumb mono"><Link to="/">首页</Link><span>/</span><span>品牌库</span></div>
          <div className="simple-hero-grid">
            <div>
              <p className="eyebrow">BRAND INDEX / 28 MAKERS</p>
              <h1>品牌<em>谱系</em></h1>
              <p className="catalog-desc">
                从意大利手工钢管到加州碳纤维实验室，每个品牌都有自己的几何哲学与配置逻辑。
                按国家、创立年份或档案数量浏览，进入品牌页看完整车系与年款。
              </p>
            </div>
            <div className="brand-index-figure mono">
              <span>BRANDS</span><strong>{brands.length}</strong>
              <span>COUNTRIES</span><strong>{countries.length - 1}</strong>
              <span>FAMILIES</span><strong>{families.length}</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="container brand-toolbar">
        <div className="catalog-search">
          <Search size={15} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索品牌、国家、专长…" aria-label="搜索品牌" />
        </div>
        <div className="chip-wrap country-chips">
          {countries.map((c) => (
            <button key={c} className={"chip" + (country === c ? " is-on" : "")} onClick={() => setCountry(c)}>{c}</button>
          ))}
        </div>
        <label className="sort-select">
          <span className="mono">SORT</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            <option value="count">按档案数量</option>
            <option value="founded">按创立年份</option>
            <option value="name">按名称</option>
          </select>
        </label>
      </div>

      <div className="container">
        <div className="brand-grid">
          {rows.map((b) => (
            <Link key={b.slug} to={"/brand/" + b.slug} className="brand-card" style={{ ["--brand" as string]: b.accent }}>
              <div className="brand-card-top">
                <span className="brand-monogram">{b.name.slice(0, 2).toUpperCase()}</span>
                <span className="mono">{b.country} · {b.founded}</span>
              </div>
              <div className="brand-card-body">
                <h3>{b.name}</h3>
                <p className="brand-card-cn">{b.cn}</p>
                <p className="brand-card-tagline">{b.tagline}</p>
                <div className="brand-card-specs">
                  <span><strong>{b.familyCount}</strong> 车系</span>
                  <span><strong>{b.bikeCount}</strong> 版本</span>
                  <span className="mono">R {b.roadCount} / M {b.mtbCount}</span>
                </div>
                <div className="brand-card-price mono">
                  {b.minPrice ? "¥" + Math.round(b.minPrice / 1000) + "K — ¥" + Math.round(b.maxPrice / 1000) + "K" : "—"}
                </div>
              </div>
              <span className="brand-card-arrow"><ArrowUpRight size={18} /></span>
            </Link>
          ))}
        </div>
        {rows.length === 0 ? (
          <div className="empty-state"><h3>没有匹配的品牌。</h3><p>试试清空搜索或切换国家。</p></div>
        ) : null}
      </div>
    </div>
  );
}
