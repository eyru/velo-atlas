import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { bikes } from "../data/database";
import type { Category } from "../data/types";
import { cny } from "../lib/format";
import { Link } from "../router";
import { BikeCard } from "../components/BikeCard";
import { usePageTitle } from "../lib/useTitle";

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "road", label: "公路车" },
  { id: "mtb", label: "山地车" },
];

export function YearDetail({ year }: { year: number }) {
  usePageTitle(year + " 年款");

  const [filter, setFilter] = useState<"all" | Category>("all");
  const [visible, setVisible] = useState(36);

  const yearBikes = useMemo(
    () => bikes.filter((b) => b.year === year).sort((a, b) => b.popularity - a.popularity || a.price - b.price),
    [year],
  );
  const shown = filter === "all" ? yearBikes : yearBikes.filter((b) => b.category === filter);

  useEffect(() => {
    setVisible(36);
  }, [filter, year]);

  const allYears = useMemo(() => [...new Set(bikes.map((b) => b.year))].sort((a, b) => b - a), []);
  const idx = allYears.indexOf(year);
  const newer = idx > 0 ? allYears[idx - 1] : null;
  const older = idx >= 0 && idx < allYears.length - 1 ? allYears[idx + 1] : null;

  const brands = new Set(yearBikes.map((b) => b.brandSlug)).size;
  const roadCount = yearBikes.filter((b) => b.category === "road").length;
  const mtbCount = yearBikes.length - roadCount;
  const prices = yearBikes.map((b) => b.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  if (!yearBikes.length) {
    return (
      <div className="container not-found">
        <p className="eyebrow">404 / MODEL YEAR</p>
        <h1>这一年还没有档案。</h1>
        <p>目前收录 {allYears[allYears.length - 1]}–{allYears[0]} 年款，换一个年份看看。</p>
        <Link to="/catalog/road" className="btn btn-primary">返回公路车目录 <ArrowRight size={15} /></Link>
      </div>
    );
  }

  return (
    <div className="year-page">
      <section className="simple-hero year-hero">
        <div className="container">
          <div className="breadcrumb mono">
            <Link to="/">首页</Link><span>/</span><span>年款档案</span><span>/</span><span>{year}</span>
          </div>
          <div className="year-hero-grid">
            <div>
              <p className="eyebrow">MODEL YEAR / {String(year).slice(0, 2)} / {year}</p>
              <h1>{year}<em>年款</em></h1>
              <p className="catalog-desc">
                {year} 年上市或仍在售的 {yearBikes.length} 个版本，覆盖 {brands} 个品牌。
                价格区间 {cny(minPrice)} — {cny(maxPrice)}，公路 {roadCount} 个、山地 {mtbCount} 个。
              </p>
              <div className="year-switch">
                {FILTERS.map((f) => (
                  <button key={f.id} className={"chip" + (filter === f.id ? " is-on" : "")} onClick={() => setFilter(f.id)}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="year-nav">
              {newer ? (
                <Link to={"/year/" + newer} className="year-nav-card">
                  <span className="mono"><ArrowLeft size={13} /> 更新年款</span>
                  <strong>{newer}</strong>
                  <small>{bikes.filter((b) => b.year === newer).length} 个版本</small>
                </Link>
              ) : <div className="year-nav-card is-disabled"><span className="mono">已是最新收录年款</span><strong>{year}</strong></div>}
              {older ? (
                <Link to={"/year/" + older} className="year-nav-card">
                  <span className="mono">更早年款 <ArrowUpRight size={13} /></span>
                  <strong>{older}</strong>
                  <small>{bikes.filter((b) => b.year === older).length} 个版本</small>
                </Link>
              ) : <div className="year-nav-card is-disabled"><span className="mono">已是最早收录年款</span><strong>{year}</strong></div>}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">ARCHIVE / {year} BUILDS</p>
            <h2>{shown.length} 个版本。</h2>
          </div>
          <Link to={"/catalog/" + (filter === "mtb" ? "mtb" : "road") + "?year=" + year} className="text-link">
            在目录中筛选 <ArrowRight size={15} />
          </Link>
        </div>
        <div className="bike-grid">
          {shown.slice(0, visible).map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
        </div>
        {visible < shown.length ? (
          <div className="load-more">
            <button className="btn btn-ghost" onClick={() => setVisible((v) => v + 36)}>
              再加载 {Math.min(36, shown.length - visible)} 个版本
            </button>
          </div>
        ) : (
          <p className="list-end mono">END OF {year} ARCHIVE · {shown.length} BUILDS</p>
        )}
      </section>
    </div>
  );
}
