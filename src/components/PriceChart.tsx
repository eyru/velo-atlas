import { cny } from "../lib/format";

type Point = { year: number; price: number };

export function PriceChart({ data, accent = "#d9ff3d" }: { data: Point[]; accent?: string }) {
  const points = [...data].sort((a, b) => a.year - b.year);
  if (points.length === 0) return null;
  const W = 640;
  const H = 240;
  const pad = { l: 74, r: 24, t: 28, b: 40 };
  const prices = points.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = Math.max(max - min, max * 0.16, 1);
  const lo = Math.max(0, min - span * 0.25);
  const hi = max + span * 0.25;
  const x = (i: number) => pad.l + (points.length === 1 ? (W - pad.l - pad.r) / 2 : (i / (points.length - 1)) * (W - pad.l - pad.r));
  const y = (v: number) => pad.t + (1 - (v - lo) / (hi - lo)) * (H - pad.t - pad.b);
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i)} ${y(p.price)}`).join(" ");
  const area = `${line} L${x(points.length - 1)} ${H - pad.b} L${x(0)} ${H - pad.b} Z`;
  const ticks = 4;

  return (
    <div className="price-chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="历年参考价走势">
        <defs>
          <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: ticks + 1 }, (_, i) => {
          const v = lo + ((hi - lo) / ticks) * i;
          const yy = y(v);
          return (
            <g key={i}>
              <line x1={pad.l} y1={yy} x2={W - pad.r} y2={yy} stroke="#ffffff" strokeOpacity="0.07" strokeDasharray="2 5" />
              <text x={pad.l - 10} y={yy + 3} fill="#727880" fontSize={10} fontFamily="monospace" textAnchor="end">{Math.round(v / 1000)}k</text>
            </g>
          );
        })}
        <path d={area} fill="url(#priceFill)" />
        <path d={line} fill="none" stroke={accent} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <g key={p.year}>
            <circle cx={x(i)} cy={y(p.price)} r={4.5} fill="#0a0b0d" stroke={accent} strokeWidth={2} />
            <text x={x(i)} y={H - pad.b + 22} fill="#8b9199" fontSize={10} fontFamily="monospace" textAnchor="middle">{p.year}</text>
            <text x={x(i)} y={y(p.price) - 12} fill="#e8ece3" fontSize={10} fontFamily="monospace" textAnchor="middle">{cny(p.price)}</text>
          </g>
        ))}
      </svg>
      <div className="chart-legend mono">
        <span>参考价走势 / CNY</span>
        <span>{points[0].year}–{points[points.length - 1].year}</span>
      </div>
    </div>
  );
}
