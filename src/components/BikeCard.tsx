import { ArrowUpRight, Check, GitCompare } from "lucide-react";
import type { Bike } from "../data/types";
import { cny, disciplineShort, weight } from "../lib/format";
import { toggleCompare, useCompareIds } from "../lib/compare";
import { Link } from "../router";
import { BikeSVG } from "./BikeSVG";

type Props = {
  bike: Bike;
  index?: number;
};

export function BikeCard({ bike, index = 0 }: Props) {
  const compare = useCompareIds();
  const selected = compare.includes(bike.id);
  const primary = bike.colors[0]?.hex ?? "#d9ff3d";

  return (
    <article className="bike-card" style={{ ["--card-accent" as string]: primary }}>
      <Link to={"/bike/" + bike.id} className="bike-card-link">
        <div className="card-visual">
          <div className="card-topline">
            <span className="card-index mono">{String(index + 1).padStart(2, "0")}</span>
            <span className={"card-cat mono " + bike.category}>{bike.category === "road" ? "ROAD" : "MTB"}</span>
            <span className="card-year mono">{bike.year}</span>
          </div>
          <BikeSVG bike={bike} variant="card" className="card-svg" />
          <span className="card-disc mono">{disciplineShort[bike.discipline]}</span>
        </div>
        <div className="card-body">
          <div className="card-brand-row">
            <span className="card-brand"><i style={{ background: bike.brandAccent }} />{bike.brandName}</span>
            <span className="card-family">{bike.family}</span>
          </div>
          <p className="card-edition">{bike.edition}</p>
          <div className="card-specs">
            <span>{bike.groupset.replace(/^(Shimano|SRAM|Campagnolo)\s/, "")}</span>
            <span>{weight(bike.weight)}</span>
          </div>
          <div className="card-bottom">
            <span className="card-price">{cny(bike.price)}<small>参考价</small></span>
            <span className="card-more">查看档案 <ArrowUpRight size={14} /></span>
          </div>
          <div className="card-colors">
            {bike.colors.slice(0, 5).map((c) => (
              <span key={c.name} className="color-dot" style={{ background: c.hex }} title={c.name} />
            ))}
            <span className="color-count mono">{bike.colors.length} COLORWAYS</span>
          </div>
        </div>
      </Link>
      <button
        className={"card-compare" + (selected ? " is-selected" : "")}
        onClick={() => toggleCompare(bike.id)}
        aria-label={selected ? "从对比台移除" : "加入对比台"}
        title={selected ? "已加入对比" : "加入对比"}
      >
        {selected ? <Check size={14} /> : <GitCompare size={14} />}
      </button>
    </article>
  );
}
