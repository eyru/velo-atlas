import { Fragment, useMemo, useState } from "react";
import { ArrowRight, Check, GitCompare, Plus, Printer, Search, Trash2, X } from "lucide-react";
import { bikes } from "../data/database";
import type { Bike } from "../data/types";
import { cny, disciplineLabel, weight } from "../lib/format";
import { clearCompare, removeCompare, toggleCompare, useCompareBikes } from "../lib/compare";
import { Link } from "../router";
import { BikeSVG } from "../components/BikeSVG";
import { usePageTitle } from "../lib/useTitle";

type Row = {
  label: string;
  group: string;
  get: (bike: Bike) => string;
  best?: (list: Bike[]) => string | null;
  better?: "low" | "high";
  raw?: (bike: Bike) => number;
};

const mSize = (bike: Bike) => bike.sizes.find((s) => s.label === "M") ?? bike.sizes[0];

const ROWS: Row[] = [
  { label: "年款", group: "概览", get: (b) => b.year + " 年", better: "high", raw: (b) => b.year },
  { label: "骑行类型", group: "概览", get: (b) => disciplineLabel[b.discipline] },
  { label: "车架材质", group: "概览", get: (b) => b.material },
  { label: "整车重量", group: "概览", get: (b) => weight(b.weight), better: "low", raw: (b) => b.weight },
  { label: "参考价", group: "概览", get: (b) => cny(b.price) },
  { label: "年款状态", group: "概览", get: (b) => (b.status === "current" ? "在售" : "往季") },
  { label: "车架", group: "车架", get: (b) => b.frame },
  { label: "前叉", group: "车架", get: (b) => b.fork },
  { label: "后避震", group: "车架", get: (b) => b.shock ?? "硬尾 / 无" },
  { label: "前 / 后行程", group: "车架", get: (b) => (b.frontTravel ? b.frontTravel + " mm" + (b.rearTravel ? " / " + b.rearTravel + " mm" : " / 硬尾") : "—") },
  { label: "轮径", group: "车架", get: (b) => b.wheelSize },
  { label: "套件", group: "配置", get: (b) => b.groupset },
  { label: "变速形式", group: "配置", get: (b) => b.drivetrain },
  { label: "轮组", group: "配置", get: (b) => b.wheels },
  { label: "轮胎", group: "配置", get: (b) => b.tires },
  { label: "可选尺码", group: "几何", get: (b) => b.sizes.map((s) => s.label).join(" / ") },
  { label: "M 码 Stack", group: "几何", get: (b) => (mSize(b)?.stack ?? "—") + " mm" },
  { label: "M 码 Reach", group: "几何", get: (b) => (mSize(b)?.reach ?? "—") + " mm" },
  { label: "M 码头管角", group: "几何", get: (b) => (mSize(b)?.headAngle ?? "—") + "°" },
  { label: "M 码轴距", group: "几何", get: (b) => (mSize(b)?.wheelbase ?? "—") + " mm" },
  { label: "配色数量", group: "外观", get: (b) => b.colors.length + " 种" },
  { label: "数据完整度", group: "外观", get: (b) => b.completeness + "%", better: "high", raw: (b) => b.completeness },
];

export function Compare() {
  usePageTitle("对比台");
  const list = useCompareBikes();
  const [adding, setAdding] = useState(false);
  const [q, setQ] = useState("");

  const suggestions = useMemo(() => {
    const query = q.trim().toLowerCase();
    return bikes
      .filter((b) => !list.some((x) => x.id === b.id))
      .filter((b) => (query ? b.searchText.includes(query) : true))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 8);
  }, [q, list]);

  const groups = [...new Set(ROWS.map((r) => r.group))];

  return (
    <div className="compare-page">
      <section className="simple-hero compare-hero">
        <div className="container">
          <div className="breadcrumb mono"><Link to="/">首页</Link><span>/</span><span>对比台</span></div>
          <div className="compare-hero-row">
            <div>
              <p className="eyebrow">COMPARE DESK / MAX 3 BUILDS</p>
              <h1>把候选车<em>并排拆开。</em></h1>
              <p className="catalog-desc">最多同时对比三台车。价格、重量、套件与几何逐行对齐，最优值会自动标记。</p>
            </div>
            <div className="compare-actions">
              {list.length ? (
                <>
                  <button className="btn btn-ghost" onClick={() => window.print()}><Printer size={15} /> 打印对比表</button>
                  <button className="btn btn-ghost" onClick={clearCompare}><Trash2 size={15} /> 清空</button>
                </>
              ) : null}
              <button className="btn btn-primary" onClick={() => setAdding(true)} disabled={list.length >= 3}>
                <Plus size={16} /> 添加车型
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container compare-body">
        {list.length === 0 ? (
          <div className="compare-empty">
            <div className="compare-empty-icon"><GitCompare size={28} /></div>
            <h2>对比台还是空的。</h2>
            <p>从任意车型卡片点击对比按钮，或者直接搜索车型加入。最多三台。</p>
            <div className="compare-suggest">
              {[...bikes].sort((a, b) => b.popularity - a.popularity).slice(0, 4).map((b) => (
                <button key={b.id} className="suggest-card" onClick={() => toggleCompare(b.id)}>
                  <BikeSVG bike={b} variant="card" />
                  <strong>{b.brandName} {b.family}</strong>
                  <span>{b.edition} · {cny(b.price)}</span>
                  <em><Plus size={13} /> 加入对比</em>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-label-col"><span className="mono">SPEC / BUILD</span></th>
                  {list.map((b) => (
                    <th key={b.id} className="compare-bike-col">
                      <div className="compare-bike-head" style={{ ["--brand" as string]: b.brandAccent }}>
                        <Link to={"/bike/" + b.id} className="compare-bike-link">
                          <span className="compare-bike-visual"><BikeSVG bike={b} variant="card" /></span>
                          <span className="mono compare-bike-brand">{b.brandName} · {b.year}</span>
                          <strong>{b.family}</strong>
                          <small>{b.edition}</small>
                        </Link>
                        <div className="compare-bike-actions">
                          <Link to={"/bike/" + b.id} className="text-link">档案 <ArrowRight size={13} /></Link>
                          <button onClick={() => removeCompare(b.id)} aria-label="移除"><X size={15} /></button>
                        </div>
                      </div>
                    </th>
                  ))}
                  {list.length < 3 ? (
                    <th className="compare-bike-col compare-add-col">
                      <button className="compare-add" onClick={() => setAdding(true)}>
                        <Plus size={22} />
                        <span>再添加一台</span>
                        <small className="mono">{list.length} / 3</small>
                      </button>
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <Fragment key={group}>
                    <tr className="compare-group-row">
                      <td colSpan={list.length + (list.length < 3 ? 2 : 1)}>{group}</td>
                    </tr>
                    {ROWS.filter((r) => r.group === group).map((row) => {
                      const values = list.map((b) => row.raw ? row.raw(b) : 0);
                      let bestIndex = -1;
                      if (row.better && list.length > 1) {
                        const sorted = [...values].sort((a, b) => (row.better === "low" ? a - b : b - a));
                        bestIndex = values.indexOf(sorted[0]);
                      }
                      return (
                        <tr key={row.label}>
                          <td className="compare-label-col">{row.label}</td>
                          {list.map((b, i) => (
                            <td key={b.id} className={"compare-cell" + (i === bestIndex ? " is-best" : "")}>
                              {row.get(b)}
                              {i === bestIndex ? <span className="best-flag mono">BEST</span> : null}
                            </td>
                          ))}
                          {list.length < 3 ? <td className="compare-empty-cell" /> : null}
                        </tr>
                      );
                    })}
                  </Fragment>
                ))}
                <tr>
                  <td className="compare-label-col">操作</td>
                  {list.map((b) => (
                    <td key={b.id} className="compare-cell compare-cell-actions">
                      <button className="btn btn-ghost btn-sm" onClick={() => removeCompare(b.id)}>移除</button>
                    </td>
                  ))}
                  {list.length < 3 ? <td className="compare-empty-cell" /> : null}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {adding ? (
        <div className="modal-scrim" onClick={() => setAdding(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-head">
              <h3>添加车型到对比台</h3>
              <button onClick={() => setAdding(false)} aria-label="关闭"><X size={18} /></button>
            </div>
            <div className="catalog-search modal-search">
              <Search size={15} />
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索品牌、车系、套件…" />
            </div>
            <div className="search-result-list">
              {suggestions.map((b) => {
                const inList = list.some((x) => x.id === b.id);
                return (
                  <button key={b.id} className="search-result" onClick={() => { toggleCompare(b.id); setAdding(false); }}>
                    <span className="search-result-visual"><BikeSVG bike={b} variant="card" /></span>
                    <span className="search-result-main">
                      <strong>{b.brandName} {b.family}</strong>
                      <small>{b.edition} · {b.year} · {b.category === "road" ? "公路" : "山地"}</small>
                    </span>
                    <span className="search-result-price mono">{cny(b.price)}</span>
                    {inList ? <Check size={15} /> : <Plus size={15} />}
                  </button>
                );
              })}
              {suggestions.length === 0 ? <p className="muted">没有匹配车型。</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
