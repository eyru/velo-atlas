import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { brands } from "../data/brands";
import { bikes } from "../data/database";
import { cny, disciplineLabel } from "../lib/format";
import { navigate } from "../router";

type Props = {
  open: boolean;
  onClose: () => void;
};

const quick = [
  { label: "公路车", to: "/catalog/road" },
  { label: "山地车", to: "/catalog/mtb" },
  { label: "Specialized", to: "/brand/specialized" },
  { label: "Trek", to: "/brand/trek" },
  { label: "2026 款", to: "/catalog/road?year=2026" },
  { label: "砾石车", to: "/catalog/road?discipline=gravel" },
];

export function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 30);
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const normalized = query.trim().toLowerCase();
  const bikeResults = useMemo(() => {
    if (!normalized) return [];
    const words = normalized.split(/\s+/).filter(Boolean);
    return bikes
      .filter((b) => words.every((w) => b.searchText.includes(w)))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 7);
  }, [normalized]);

  const brandResults = useMemo(() => {
    if (!normalized) return [];
    return brands
      .filter((b) => b.name.toLowerCase().includes(normalized) || b.cn.includes(normalized) || b.country.includes(normalized))
      .slice(0, 4);
  }, [normalized]);

  if (!open) return null;

  const results: { key: string; to: string }[] = [
    ...bikeResults.map((b) => ({ key: b.id, to: "/bike/" + b.id })),
    ...brandResults.map((b) => ({ key: b.slug, to: "/brand/" + b.slug })),
  ];
  const activeIndex = results.length ? Math.min(active, results.length - 1) : -1;

  const go = (to: string) => {
    onClose();
    navigate(to);
  };

  const move = (delta: number) => {
    if (!results.length) return;
    const next = (activeIndex + delta + results.length) % results.length;
    setActive(next);
    const row = listRef.current?.querySelector<HTMLElement>('[data-idx="' + next + '"]');
    row?.scrollIntoView({ block: "nearest" });
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="全站搜索">
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-panel">
        <div className="search-bar">
          <Search size={20} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            placeholder="输入车型、品牌、年份或颜色，例如「SuperSix」「2026」「砾石」"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
              else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
              else if (e.key === "Enter") {
                if (results[activeIndex]) go(results[activeIndex].to);
                else go("/catalog/road");
              }
            }}
          />
          <button className="icon-btn" onClick={onClose} aria-label="关闭搜索"><X size={18} /></button>
        </div>

        {!normalized ? (
          <div className="search-empty">
            <p className="eyebrow">QUICK ENTRY / 快速入口</p>
            <div className="quick-grid">
              {quick.map((q) => (
                <button key={q.to} className="quick-item" onClick={() => go(q.to)}>
                  {q.label} <ArrowUpRight size={14} />
                </button>
              ))}
            </div>
            <p className="search-hint mono">试试：Dura-Ace、碳纤维、29"、红色、耐力、Colnago</p>
          </div>
        ) : (
          <div className="search-results" ref={listRef}>
            {bikeResults.length > 0 && (
              <div className="result-group">
                <p className="result-label">车型 / {bikeResults.length}</p>
                {bikeResults.map((b, i) => (
                  <button
                    key={b.id}
                    data-idx={i}
                    className={"result-row" + (i === activeIndex ? " is-active" : "")}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go("/bike/" + b.id)}
                  >
                    <span className="result-dot" style={{ background: b.colors[0]?.hex }} />
                    <span className="result-main">
                      <strong>{b.brandName} {b.family}</strong>
                      <small>{b.year} · {b.edition} · {disciplineLabel[b.discipline]}</small>
                    </span>
                    <span className="result-price mono">{cny(b.price)}</span>
                  </button>
                ))}
              </div>
            )}
            {brandResults.length > 0 && (
              <div className="result-group">
                <p className="result-label">品牌 / {brandResults.length}</p>
                {brandResults.map((b, i) => {
                  const idx = bikeResults.length + i;
                  return (
                  <button
                    key={b.slug}
                    data-idx={idx}
                    className={"result-row" + (idx === activeIndex ? " is-active" : "")}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => go("/brand/" + b.slug)}
                  >
                    <span className="brand-chip" style={{ borderColor: b.accent, color: b.accent }}>{b.name.slice(0, 2).toUpperCase()}</span>
                    <span className="result-main">
                      <strong>{b.name} · {b.cn}</strong>
                      <small>{b.country} · 创立于 {b.founded}</small>
                    </span>
                    <ArrowUpRight size={15} />
                  </button>
                  );
                })}
              </div>
            )}
            {bikeResults.length === 0 && brandResults.length === 0 && (
              <div className="no-result">
                <p>没有找到「{query}」</p>
                <span>试试车型名、品牌中文名或年份，例如「闪电」「2025」「气动」。</span>
              </div>
            )}
          </div>
        )}
        <div className="search-footer mono">
          <span>↑↓ 选择 · ENTER 打开</span>
          <span>ESC 关闭</span>
          <span>{bikes.length} 个版本可检索</span>
        </div>
      </div>
    </div>
  );
}
