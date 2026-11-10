import type { Bike, SizeRow } from "../data/types";

type Props = {
  bike: Bike;
  size: SizeRow;
  color?: string;
};

const TAU = Math.PI * 2;

/**
 * 真实比例车架侧视图。
 * 所有长度使用同一比例尺，轮径、五通下沉、Stack/Reach 与轴距互相自洽。
 */
export function GeometryDiagram({ bike, size, color }: Props) {
  const accent = color ?? "#d9ff3d";
  const isMtb = bike.category === "mtb";
  const wheelRmm = size.wheelRadius ?? (isMtb ? 368 : 336);
  const s = Math.min(0.46, 760 / (size.wheelbase + wheelRmm * 2));
  const r = wheelRmm * s;

  const groundY = 470;
  const hubY = groundY - r;
  const rearHub = { x: 100 + r, y: hubY };
  const bbX = rearHub.x + Math.sqrt(Math.max(1, size.chainstay ** 2 - size.bbDrop ** 2)) * s;
  const bb = { x: bbX, y: hubY + size.bbDrop * s };
  const frontHub = { x: rearHub.x + size.wheelbase * s, y: hubY };
  const headTop = { x: bb.x + size.reach * s, y: bb.y - size.stack * s };

  const ha = (size.headAngle * Math.PI) / 180;
  const sa = (size.seatAngle * Math.PI) / 180;
  const headBottom = {
    x: headTop.x + Math.cos(ha) * size.headTube * s,
    y: headTop.y + Math.sin(ha) * size.headTube * s,
  };
  const seatTop = {
    x: bb.x - Math.cos(sa) * size.seatTube * s,
    y: bb.y - Math.sin(sa) * size.seatTube * s,
  };

  const saddle = { x: seatTop.x - Math.cos(sa) * 26, y: seatTop.y - Math.sin(sa) * 26 };
  const bar = { x: headTop.x - Math.cos(ha) * 26 + 4, y: headTop.y - Math.sin(ha) * 26 };
  const stackX = headTop.x + 34;
  const reachY = bb.y + 36;
  const wbY = groundY + 42;

  const haArc = 38;
  const haStart = { x: headBottom.x + haArc, y: headBottom.y };
  const haEnd = { x: headBottom.x + Math.cos(ha) * haArc, y: headBottom.y + Math.sin(ha) * haArc };
  const saArc = 40;
  const saStart = { x: bb.x - saArc, y: bb.y };
  const saEnd = { x: bb.x - Math.cos(sa) * saArc, y: bb.y - Math.sin(sa) * saArc };

  const spokes = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * TAU;
    return { x: Math.cos(a) * (r - 10), y: Math.sin(a) * (r - 10) };
  });

  return (
    <svg className="geo-diagram" viewBox="0 0 900 540" role="img" aria-label={`${bike.name} ${size.label} 码真实比例几何图`}>
      <defs>
        <pattern id="blueprint" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke={accent} strokeOpacity="0.055" strokeWidth="1" />
        </pattern>
        <linearGradient id="gFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="900" height="540" fill="url(#blueprint)" />

      {/* 地面 */}
      <line x1="26" y1={groundY} x2="874" y2={groundY} stroke={accent} strokeOpacity="0.38" strokeWidth="1" />
      <line x1="26" y1={groundY + 4} x2="874" y2={groundY + 4} stroke={accent} strokeOpacity="0.08" strokeWidth="1" />

      {/* 轮组 */}
      {[rearHub, frontHub].map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={r} fill="none" stroke={accent} strokeOpacity="0.32" strokeWidth="2.5" />
          <circle cx={h.x} cy={h.y} r={r - 9} fill="none" stroke={accent} strokeOpacity="0.16" strokeWidth="1.5" />
          {spokes.map((p, j) => (
            <line key={j} x1={h.x} y1={h.y} x2={h.x + p.x} y2={h.y + p.y} stroke={accent} strokeOpacity="0.11" strokeWidth="1" />
          ))}
          <circle cx={h.x} cy={h.y} r={17} fill="none" stroke={accent} strokeOpacity="0.28" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx={h.x} cy={h.y} r={4.5} fill={accent} />
        </g>
      ))}

      {/* 车架填充 */}
      <polygon points={`${bb.x},${bb.y} ${seatTop.x},${seatTop.y} ${headTop.x},${headTop.y} ${headBottom.x},${headBottom.y}`} fill={accent} opacity="0.045" />
      <polygon points={`${bb.x},${bb.y} ${rearHub.x},${rearHub.y} ${seatTop.x},${seatTop.y}`} fill={accent} opacity="0.035" />

      {/* 车架 */}
      <g stroke="url(#gFrame)" strokeWidth={3.2} strokeLinecap="round" fill="none">
        <line x1={bb.x} y1={bb.y} x2={rearHub.x} y2={rearHub.y} />
        <line x1={seatTop.x} y1={seatTop.y} x2={rearHub.x} y2={rearHub.y} />
        <line x1={bb.x} y1={bb.y} x2={seatTop.x} y2={seatTop.y} />
        <line x1={seatTop.x} y1={seatTop.y} x2={headTop.x} y2={headTop.y} />
        <line x1={headBottom.x} y1={headBottom.y} x2={bb.x} y2={bb.y} />
        <line x1={headTop.x} y1={headTop.y} x2={headBottom.x} y2={headBottom.y} strokeWidth={6.5} />
        {isMtb && bike.rearTravel ? (
          <line x1={bb.x + 12} y1={bb.y - 52} x2={seatTop.x + 10} y2={seatTop.y + 18} strokeWidth={4.5} />
        ) : null}
      </g>

      {/* 前叉 */}
      <line x1={headBottom.x} y1={headBottom.y} x2={frontHub.x} y2={frontHub.y} stroke={accent} strokeWidth={3.4} opacity="0.9" strokeLinecap="round" />

      {/* 传动 */}
      <circle cx={bb.x} cy={bb.y} r={19} fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx={bb.x} cy={bb.y} r={11} fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx={rearHub.x} cy={rearHub.y} r={12} fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="1.2" />
      <line x1={bb.x} y1={bb.y} x2={rearHub.x} y2={rearHub.y} stroke={accent} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 3" />

      {/* 座垫与车把 */}
      <line x1={seatTop.x} y1={seatTop.y} x2={saddle.x} y2={saddle.y} stroke={accent} strokeWidth="3.2" />
      <line x1={saddle.x - 30} y1={saddle.y - 3} x2={saddle.x + 24} y2={saddle.y - 5} stroke={accent} strokeWidth="5.5" strokeLinecap="round" />
      <line x1={headTop.x} y1={headTop.y} x2={bar.x} y2={bar.y} stroke={accent} strokeWidth="3.4" />
      <line x1={bar.x - 27} y1={bar.y - 2} x2={bar.x + 31} y2={bar.y - 2} stroke={accent} strokeWidth="4.5" strokeLinecap="round" />

      {/* Stack 尺寸线 */}
      <g stroke={accent} strokeWidth="1" opacity="0.85">
        <line x1={stackX} y1={headTop.y} x2={stackX} y2={bb.y} strokeDasharray="4 4" />
        <line x1={stackX - 5} y1={headTop.y} x2={stackX + 5} y2={headTop.y} />
        <line x1={stackX - 5} y1={bb.y} x2={stackX + 5} y2={bb.y} />
        <line x1={headTop.x} y1={headTop.y} x2={stackX + 5} y2={headTop.y} strokeDasharray="2 4" opacity="0.55" />
        <line x1={bb.x} y1={bb.y} x2={stackX + 5} y2={bb.y} strokeDasharray="2 4" opacity="0.55" />
      </g>
      <text
        x={stackX - 8}
        y={(headTop.y + bb.y) / 2}
        transform={`rotate(-90 ${stackX - 8} ${(headTop.y + bb.y) / 2})`}
        fill={accent}
        fontSize="11"
        fontFamily="monospace"
        textAnchor="middle"
        letterSpacing="1"
      >
        STACK {size.stack}
      </text>

      {/* Reach 尺寸线 */}
      <g stroke={accent} strokeWidth="1" opacity="0.85">
        <line x1={bb.x} y1={reachY} x2={headTop.x} y2={reachY} strokeDasharray="4 4" />
        <line x1={bb.x} y1={reachY - 5} x2={bb.x} y2={reachY + 5} />
        <line x1={headTop.x} y1={reachY - 5} x2={headTop.x} y2={reachY + 5} />
        <line x1={bb.x} y1={bb.y} x2={bb.x} y2={reachY + 5} strokeDasharray="2 4" opacity="0.55" />
        <line x1={headTop.x} y1={bb.y} x2={headTop.x} y2={reachY + 5} strokeDasharray="2 4" opacity="0.55" />
      </g>
      <text x={(bb.x + headTop.x) / 2} y={reachY - 8} fill={accent} fontSize="11" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
        REACH {size.reach}
      </text>

      {/* 轴距 */}
      <g stroke={accent} strokeWidth="1" opacity="0.8">
        <line x1={rearHub.x} y1={groundY + 8} x2={rearHub.x} y2={wbY + 6} strokeDasharray="2 4" />
        <line x1={frontHub.x} y1={groundY + 8} x2={frontHub.x} y2={wbY + 6} strokeDasharray="2 4" />
        <line x1={rearHub.x} y1={wbY} x2={frontHub.x} y2={wbY} strokeDasharray="4 4" />
        <line x1={rearHub.x} y1={wbY - 5} x2={rearHub.x} y2={wbY + 5} />
        <line x1={frontHub.x} y1={wbY - 5} x2={frontHub.x} y2={wbY + 5} />
      </g>
      <text x={(rearHub.x + frontHub.x) / 2} y={wbY - 9} fill={accent} fontSize="11" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
        WHEELBASE {size.wheelbase}
      </text>

      {/* 角度弧 */}
      <path d={`M ${haStart.x} ${haStart.y} A ${haArc} ${haArc} 0 0 1 ${haEnd.x} ${haEnd.y}`} fill="none" stroke={accent} strokeWidth="1.5" opacity="0.9" />
      <text x={headBottom.x + haArc + 8} y={headBottom.y + haArc * 0.58 + 10} fill={accent} fontSize="10" fontFamily="monospace">
        HA {size.headAngle}°
      </text>
      <path d={`M ${saStart.x} ${saStart.y} A ${saArc} ${saArc} 0 0 1 ${saEnd.x} ${saEnd.y}`} fill="none" stroke={accent} strokeWidth="1.5" opacity="0.9" />
      <text x={bb.x - saArc - 6} y={bb.y - saArc * 0.55} fill={accent} fontSize="10" fontFamily="monospace" textAnchor="end">
        SA {size.seatAngle}°
      </text>

      {/* 标注 */}
      <g fontFamily="monospace" fontSize="9" fill="#8b9199" letterSpacing="1">
        <text x={bb.x + 8} y={bb.y + 17}>BB</text>
        <text x={seatTop.x - 6} y={seatTop.y - 8} textAnchor="end">ST</text>
        <text x={headTop.x + 12} y={headTop.y - 8}>HT</text>
      </g>

      <g fontFamily="monospace" fontSize="12" fill="#e8ece3" letterSpacing="2">
        <text x="40" y="44">GEOMETRY / {size.label}</text>
        <text x="40" y="62" fill="#8b9199" fontSize="10">{bike.brandName.toUpperCase()} {bike.family.toUpperCase()}</text>
      </g>
      <g fontFamily="monospace" fontSize="9.5" fill="#8b9199" textAnchor="end" letterSpacing="1">
        <text x="860" y="44">ALL DIMENSIONS IN MM</text>
        <text x="860" y="59">FRAME SIZE {size.label} · WHEEL R {Math.round(wheelRmm)}</text>
        <text x="860" y="74" fill={bike.geoConfidence === "official" ? accent : "#8b9199"}>
          {bike.geoConfidence === "official" ? "OFFICIAL GEO TABLE" : "REFERENCE FIT MODEL"}
        </text>
      </g>
    </svg>
  );
}
