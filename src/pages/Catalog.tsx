import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  GitCompare,
  LayoutGrid,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Table2,
  X,
} from "lucide-react";
import { bikes, families } from "../data/database";
import type { Bike, Category, ColorFamily, Discipline, Material } from "../data/types";
import { cny, disciplineLabel, disciplineShort, weight } from "../lib/format";
import { toggleCompare, useCompareIds } from "../lib/compare";
import { useRoute } from "../router";
import { Link } from "../router";
import { BikeCard } from "../components/BikeCard";
import { BikeSVG } from "../components/BikeSVG";
import { usePageTitle } from "../lib/useTitle";

type SortKey = "popular" | "price-asc" | "price-desc" | "year-desc" | "weight-asc" | "name";

type Filters = {
  brands: string[];
  years: number[];
  colors: ColorFamily[];
  disciplines: Discipline[];
  materials: Material[];
  bands: string[];
  q: string;
};

const BANDS = [
  { id: "0-15000", label: "¥15,000 以下", min: 0, max: 15000 },
  { id: "15000-30000", label: "¥15,000 – 30,000", min: 15000, max: 30000 },
  { id: "30000-60000", label: "¥30,000 – 60,000", min: 30000, max: 60000 },
  { id: "60000-100000", label: "¥60,000 – 100,000", min: 60000, max: 100000 },
  { id: "100000-9999999", label: "¥100,000 以上", min: 100000, max: 9999999 },
];

const SORTS: { id: SortKey; label: string }[] = [
  { id: "popular", label: "按热度" },
  { id: "year-desc", label: "年款从新到旧" },
  { id: "price-asc", label: "价格从低到高" },
  { id: "price-desc", label: "价格从高到低" },
  { id: "weight-asc", label: "重量从轻到重" },
  { id: "name", label: "按品牌名" },
];

const MATERIALS: Material[] = ["碳纤维", "铝合金", "钛合金", "钢"];
const COLOR_FAMILIES: ColorFamily[] = ["黑", "白", "灰", "银", "红", "橙", "黄", "绿", "蓝", "紫", "粉", "金", "棕"];

const CATEGORY_COPY: Record<Category, { en: string; title: string; desc: string }> = {
  road: {
    en: "ROAD / ARCHIVE 01",
    title: "公路车",
    desc: "气动、竞赛、爬坡、耐力、砾石与全地形。用价格、几何与年款把公路车拆开看，找到真正适合你路况的那一台。",
  },
  mtb: {
    en: "MOUNTAIN / ARCHIVE 02",
    title: "山地车",
    desc: "从 XC 到速降，行程与几何决定了车的性格。这里按用途、轮径、行程与年款归档，配置逐项落到具体型号。",
  },
};

const EMPTY: Filters = { brands: [], years: [], colors: [], disciplines: [], materials: [], bands: [], q: "" };

function readFilters(params: URLSearchParams): Filters {
  const list = (key: string) => (params.get(key) ?? "").split(",").filter(Boolean);
  const nums = list("year").map(Number).filter((n) => !Number.isNaN(n));
  return {
    brands: list("brand"),
    years: nums,
    colors: list("color") as ColorFamily[],
    disciplines: list("discipline") as Discipline[],
    materials: list("material") as Material[],
    bands: list("band"),
    q: params.get("q") ?? "",
  };
}

function sortBikes(list: Bike[], key: SortKey): Bike[] {
  const out = [...list];
  switch (key) {
    case "price-asc":
      return out.sort((a, b) => a.price - b.price);
    case "price-desc":
      return out.sort((a, b) => b.price - a.price);
    case "year-desc":
      return out.sort((a, b) => b.year - a.year || b.popularity - a.popularity);
    case "weight-asc":
      return out.sort((a, b) => a.weight - b.weight);
    case "name":
      return out.sort((a, b) => a.brandName.localeCompare(b.brandName) || a.family.localeCompare(b.family));
    default:
      return out.sort((a, b) => b.popularity - a.popularity || b.year - a.year);
  }
}

export function Catalog({ category }: { category: Category }) {
  const route = useRoute();
  const copy = CATEGORY_COPY[category];
  usePageTitle(copy.title + "档案");

  const [filters, setFilters] = useState<Filters>(() => readFilters(route.query));
  const [sort, setSort] = useState<SortKey>(() => {
    const s = route.query.get("sort") as SortKey | null;
    return s && SORTS.some((x) => x.id === s) ? s : "popular";
  });
  const [view, setView] = useState<"grid" | "table">("grid");
  const [visible, setVisible] = useState(24);
  const [drawer, setDrawer] = useState(false);
  const compareIds = useCompareIds();

  const pool = useMemo(() => bikes.filter((b) => b.category === category), [category]);
  const categoryFamilies = useMemo(() => families.filter((f) => f.category === category), [category]);

  const brandFacet = useMemo(() => {
    const map = new Map<string, { name: string; cn: string; accent: string; count: number }>();
    for (const b of pool) {
      const entry = map.get(b.brandSlug) ?? { name: b.brandName, cn: b.brandCn, accent: b.brandAccent, count: 0 };
      entry.count += 1;
      map.set(b.brandSlug, entry);
    }
    return [...map.entries()].sort((a, b) => b[1].count - a[1].count || a[1].name.localeCompare(b[1].name));
  }, [pool]);

  const yearFacet = useMemo(() => {
    const map = new Map<number, number>();
    pool.forEach((b) => map.set(b.year, (map.get(b.year) ?? 0) + 1));
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [pool]);

  const colorFacet = useMemo(() => {
    const map = new Map<ColorFamily, number>();
    pool.forEach((b) => b.colorFamilies.forEach((c) => map.set(c, (map.get(c) ?? 0) + 1)));
    return COLOR_FAMILIES.filter((c) => map.has(c)).map((c) => [c, map.get(c)!] as [ColorFamily, number]);
  }, [pool]);

  const disciplineFacet = useMemo(() => {
    const map = new Map<Discipline, number>();
    pool.forEach((b) => map.set(b.discipline, (map.get(b.discipline) ?? 0) + 1));
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [pool]);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    const list = pool.filter((bike) => {
      if (filters.brands.length && !filters.brands.includes(bike.brandSlug)) return false;
      if (filters.years.length && !filters.years.includes(bike.year)) return false;
      if (filters.disciplines.length && !filters.disciplines.includes(bike.discipline)) return false;
      if (filters.materials.length && !filters.materials.includes(bike.material)) return false;
      if (filters.colors.length && !bike.colorFamilies.some((c) => filters.colors.includes(c))) return false;
      if (filters.bands.length) {
        const inBand = filters.bands.some((id) => {
          const band = BANDS.find((x) => x.id === id);
          return band ? bike.price >= band.min && bike.price < band.max : false;
        });
        if (!inBand) return false;
      }
      if (q && !bike.searchText.includes(q)) return false;
      return true;
    });
    return sortBikes(list, sort);
  }, [pool, filters, sort]);

  useEffect(() => {
    setVisible(24);
  }, [filters, sort, category]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.brands.length) params.set("brand", filters.brands.join(","));
    if (filters.years.length) params.set("year", filters.years.join(","));
    if (filters.colors.length) params.set("color", filters.colors.join(","));
    if (filters.disciplines.length) params.set("discipline", filters.disciplines.join(","));
    if (filters.materials.length) params.set("material", filters.materials.join(","));
    if (filters.bands.length) params.set("band", filters.bands.join(","));
    if (filters.q) params.set("q", filters.q);
    if (sort !== "popular") params.set("sort", sort);
    const qs = params.toString();
    window.history.replaceState(null, "", "#/catalog/" + category + (qs ? "?" + qs : ""));
  }, [filters, sort, category]);

  const activeCount =
    filters.brands.length +
    filters.years.length +
    filters.colors.length +
    filters.disciplines.length +
    filters.materials.length +
    filters.bands.length +
    (filters.q ? 1 : 0);

  const toggle = <K extends keyof Filters>(key: K, value: Filters[K] extends (infer U)[] ? U : never) => {
    setFilters((prev) => {
      const arr = prev[key] as unknown as unknown[];
      const next = arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
      return { ...prev, [key]: next } as Filters;
    });
  };

  const reset = () => setFilters({ ...EMPTY });
  const priceMin = filtered.length ? Math.min(...filtered.map((b) => b.price)) : 0;
  const priceMax = filtered.length ? Math.max(...filtered.map((b) => b.price)) : 0;
  const shown = filtered.slice(0, visible);

  const filterPanel = (
    <div className="filter-panel">
      <div className="filter-head">
        <span className="mono">FILTERS</span>
        <button className="filter-reset" onClick={reset} disabled={!activeCount}>
          <RotateCcw size={13} /> 重置{activeCount ? " (" + activeCount + ")" : ""}
        </button>
      </div>

      <div className="filter-group">
        <h4>品牌 <span className="mono">{brandFacet.length}</span></h4>
        <div className="filter-list brand-filter-list">
          {brandFacet.map(([slug, info]) => (
            <button
              key={slug}
              className={"filter-row" + (filters.brands.includes(slug) ? " is-on" : "")}
              onClick={() => toggle("brands", slug)}
              aria-pressed={filters.brands.includes(slug)}
            >
              <i style={{ background: info.accent }} />
              <span className="filter-name">{info.name}<small>{info.cn}</small></span>
              <em className="mono">{info.count}</em>
              {filters.brands.includes(slug) ? <Check size={13} /> : null}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>年款</h4>
        <div className="chip-wrap">
          {yearFacet.map(([year, count]) => (
            <button key={year} className={"chip" + (filters.years.includes(year) ? " is-on" : "")} onClick={() => toggle("years", year)}>
              {year}<em>{count}</em>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>骑行类型</h4>
        <div className="chip-wrap">
          {disciplineFacet.map(([d, count]) => (
            <button key={d} className={"chip" + (filters.disciplines.includes(d) ? " is-on" : "")} onClick={() => toggle("disciplines", d)}>
              {disciplineLabel[d]}<em>{count}</em>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>车架材质</h4>
        <div className="chip-wrap">
          {MATERIALS.map((m) => (
            <button key={m} className={"chip" + (filters.materials.includes(m) ? " is-on" : "")} onClick={() => toggle("materials", m)}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>颜色系</h4>
        <div className="color-filter-grid">
          {colorFacet.map(([c, count]) => (
            <button key={c} className={"color-chip" + (filters.colors.includes(c) ? " is-on" : "")} onClick={() => toggle("colors", c)} title={c + "色系 · " + count + " 个版本"}>
              <span className={"color-swatch cf-" + c} />
              {c}
              <em className="mono">{count}</em>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>价格区间</h4>
        <div className="filter-list">
          {BANDS.map((band) => {
            const count = pool.filter((b) => b.price >= band.min && b.price < band.max).length;
            return (
              <button key={band.id} className={"filter-row band-row" + (filters.bands.includes(band.id) ? " is-on" : "")} onClick={() => toggle("bands", band.id)}>
                <span className="filter-name">{band.label}</span>
                <em className="mono">{count}</em>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="catalog-page">
      <section className="catalog-hero">
        <div className="container">
          <div className="breadcrumb mono">
            <Link to="/">首页</Link><span>/</span><span>{copy.title}</span>
          </div>
          <div className="catalog-hero-grid">
            <div>
              <p className="eyebrow">{copy.en}</p>
              <h1>{copy.title}<em>档案</em></h1>
              <p className="catalog-desc">{copy.desc}</p>
            </div>
            <div className="catalog-hero-stats">
              <div><strong>{pool.length}</strong><span>版本</span></div>
              <div><strong>{categoryFamilies.length}</strong><span>车系</span></div>
              <div><strong>{brandFacet.length}</strong><span>品牌</span></div>
              <div><strong>{cny(Math.min(...pool.map((b) => b.price)))}</strong><span>起售参考价</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="catalog-toolbar-wrap">
        <div className="container catalog-toolbar">
          <div className="catalog-search">
            <Search size={15} />
            <input
              value={filters.q}
              onChange={(e) => setFilters((p) => ({ ...p, q: e.target.value }))}
              placeholder="搜索车系、版本、配色、套件…"
              aria-label="搜索车型"
            />
            {filters.q ? (
              <button className="search-clear" onClick={() => setFilters((p) => ({ ...p, q: "" }))} aria-label="清除搜索"><X size={14} /></button>
            ) : null}
          </div>

          <div className="toolbar-right">
            <span className="result-count mono">{filtered.length} / {pool.length} BUILDS</span>
            <label className="sort-select">
              <span className="mono">SORT</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </label>
            <div className="view-toggle">
              <button className={view === "grid" ? "is-on" : ""} onClick={() => setView("grid")} aria-label="网格视图"><LayoutGrid size={15} /></button>
              <button className={view === "table" ? "is-on" : ""} onClick={() => setView("table")} aria-label="参数表视图"><Table2 size={15} /></button>
            </div>
            <button className="filter-toggle" onClick={() => setDrawer(true)}>
              <SlidersHorizontal size={15} /> 筛选{activeCount ? " (" + activeCount + ")" : ""}
            </button>
          </div>
        </div>
      </div>

      <div className="container catalog-layout">
        <aside className={"catalog-sidebar" + (drawer ? " is-open" : "")}>
          <div className="drawer-head">
            <span className="mono">筛选条件</span>
            <button onClick={() => setDrawer(false)} aria-label="关闭筛选"><X size={18} /></button>
          </div>
          {filterPanel}
          <div className="drawer-foot">
            <button className="btn btn-primary" onClick={() => setDrawer(false)}>查看 {filtered.length} 个结果</button>
          </div>
        </aside>

        <div className="catalog-main">
          <div className="catalog-summary">
            <div className="active-chips">
              {filters.brands.map((slug) => {
                const info = brandFacet.find((x) => x[0] === slug);
                return <button key={slug} className="active-chip" onClick={() => toggle("brands", slug)}>{info ? info[1].name : slug}<X size={12} /></button>;
              })}
              {filters.years.map((y) => <button key={y} className="active-chip" onClick={() => toggle("years", y)}>{y}<X size={12} /></button>)}
              {filters.disciplines.map((d) => <button key={d} className="active-chip" onClick={() => toggle("disciplines", d)}>{disciplineLabel[d]}<X size={12} /></button>)}
              {filters.materials.map((m) => <button key={m} className="active-chip" onClick={() => toggle("materials", m)}>{m}<X size={12} /></button>)}
              {filters.colors.map((c) => <button key={c} className="active-chip" onClick={() => toggle("colors", c)}>{c}色系<X size={12} /></button>)}
              {filters.bands.map((b) => {
                const band = BANDS.find((x) => x.id === b);
                return <button key={b} className="active-chip" onClick={() => toggle("bands", b)}>{band ? band.label : b}<X size={12} /></button>;
              })}
              {filters.q ? <button className="active-chip" onClick={() => setFilters((p) => ({ ...p, q: "" }))}>“{filters.q}”<X size={12} /></button> : null}
            </div>
            <span className="catalog-range mono">
              {filtered.length ? cny(priceMin) + " — " + cny(priceMax) : "NO RESULTS"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <span className="mono">NO MATCH</span>
              <h3>这组条件没有对应车型。</h3>
              <p>试着放宽年款或价格区间，或者换一个颜色系。</p>
              <button className="btn btn-ghost" onClick={reset}><RotateCcw size={15} /> 清空全部筛选</button>
            </div>
          ) : view === "grid" ? (
            <>
              <div className="bike-grid catalog-grid">
                {shown.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
              </div>
              {visible < filtered.length ? (
                <div className="load-more">
                  <button className="btn btn-ghost" onClick={() => setVisible((v) => v + 24)}>
                    加载更多车型（还有 {filtered.length - visible} 个）
                  </button>
                </div>
              ) : (
                <p className="list-end mono">— END OF ARCHIVE / {filtered.length} BUILDS —</p>
              )}
            </>
          ) : (
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>车型</th>
                    <th>年款</th>
                    <th>类型</th>
                    <th>材质</th>
                    <th>套件</th>
                    <th>重量</th>
                    <th>M 码 Stack / Reach</th>
                    <th>参考价</th>
                    <th aria-label="操作" />
                  </tr>
                </thead>
                <tbody>
                  {shown.map((bike) => {
                    const m = bike.sizes.find((s) => s.label === "M") ?? bike.sizes[0];
                    const inCompare = compareIds.includes(bike.id);
                    return (
                      <tr key={bike.id}>
                        <td>
                          <Link to={"/bike/" + bike.id} className="table-bike">
                            <span className="table-svg"><BikeSVG bike={bike} variant="card" /></span>
                            <span>
                              <strong>{bike.brandName} {bike.family}</strong>
                              <small>{bike.edition}</small>
                            </span>
                            <ArrowUpRight size={13} />
                          </Link>
                        </td>
                        <td className="mono">{bike.year}</td>
                        <td><span className={"tag " + bike.category}>{disciplineShort[bike.discipline]}</span></td>
                        <td>{bike.material}</td>
                        <td className="table-gs">{bike.groupset}</td>
                        <td className="mono">{weight(bike.weight)}</td>
                        <td className="mono">{m ? m.stack + " / " + m.reach : "—"}</td>
                        <td className="table-price">{cny(bike.price)}</td>
                        <td>
                          <button
                            className={"table-compare" + (inCompare ? " is-on" : "")}
                            onClick={() => toggleCompare(bike.id)}
                            aria-label={inCompare ? "移出对比台" : "加入对比台"}
                            title={inCompare ? "已加入对比" : "加入对比"}
                          >
                            {inCompare ? <Check size={14} /> : <GitCompare size={14} />}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="load-more">
                {visible < filtered.length ? (
                  <button className="btn btn-ghost" onClick={() => setVisible((v) => v + 24)}>加载更多（还有 {filtered.length - visible} 个）</button>
                ) : (
                  <p className="list-end mono">— END OF ARCHIVE / {filtered.length} BUILDS —</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {drawer ? <div className="drawer-scrim" onClick={() => setDrawer(false)} /> : null}
    </div>
  );
}
