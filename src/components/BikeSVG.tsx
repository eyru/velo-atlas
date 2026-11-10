import { useId } from "react";
import type { Bike } from "../data/types";

type Props = {
  bike: Bike;
  color?: string;
  showGeometry?: boolean;
  variant?: "card" | "full";
  className?: string;
};

export function BikeSVG({ bike, color, showGeometry = false, variant = "full", className }: Props) {
  const uid = useId().replace(/:/g, "");
  const isMtb = bike.category === "mtb";
  const main = color ?? bike.colors[0]?.hex ?? "#d9ff3d";
  const accent = isMtb ? "#ff7a3d" : "#d9ff3d";

  const geo = isMtb
    ? { rear: [196, 344], front: [704, 344], r: 118, bb: [432, 354], seatTop: [388, 168], headTop: [640, 178], headBottom: [654, 268], saddle: [356, 146] }
    : { rear: [200, 344], front: [700, 344], r: 112, bb: [432, 352], seatTop: [394, 178], headTop: [628, 190], headBottom: [642, 268], saddle: [368, 156] };

  const [rx, ry] = geo.rear;
  const [fx, fy] = geo.front;
  const [bx, by] = geo.bb;
  const [stx, sty] = geo.seatTop;
  const [htx, hty] = geo.headTop;
  const [hbx, hby] = geo.headBottom;
  const [sx, sy] = geo.saddle;

  const spokes = (cx: number, cy: number, radius: number) =>
    Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2;
      return { x1: cx + Math.cos(a) * 8, y1: cy + Math.sin(a) * 8, x2: cx + Math.cos(a) * radius, y2: cy + Math.sin(a) * radius };
    });

  const wheel = (cx: number, cy: number, key: string) => (
    <g key={key}>
      <circle cx={cx} cy={cy} r={geo.r} fill="none" stroke="#08090a" strokeWidth={isMtb ? 18 : 15} />
      <circle cx={cx} cy={cy} r={geo.r - 6} fill="none" stroke={main} strokeOpacity={0.22} strokeWidth={2} />
      {isMtb && (
        <circle cx={cx} cy={cy} r={geo.r + 5} fill="none" stroke="#2a2d31" strokeWidth={3} strokeDasharray="4 7" />
      )}
      <circle cx={cx} cy={cy} r={isMtb ? 88 : 94} fill="none" stroke={main} strokeWidth={3} strokeOpacity={0.9} />
      {spokes(cx, cy, isMtb ? 84 : 90).map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={main} strokeOpacity={0.38} strokeWidth={1} />
      ))}
      <circle cx={cx} cy={cy} r={10} fill="#0b0c0e" stroke={main} strokeWidth={2.5} />
      <circle cx={cx - (isMtb ? 0 : 30)} cy={cy} r={isMtb ? 30 : 24} fill="none" stroke={main} strokeOpacity={0.55} strokeWidth={2} strokeDasharray="3 4" />
    </g>
  );

  const framePath = isMtb
    ? `M${bx} ${by} L${rx} ${ry} M${stx} ${sty} L${rx} ${ry} M${bx} ${by} L${hbx} ${hby} M${stx} ${sty} L${htx} ${hty} M${bx} ${by} L${stx} ${sty} M${htx} ${hty} L${hbx} ${hby}`
    : `M${bx} ${by} L${rx} ${ry} M${stx} ${sty} L${rx} ${ry} M${bx} ${by} L${hbx} ${hby} M${stx} ${sty} L${htx} ${hty} M${bx} ${by} L${stx} ${sty} M${htx} ${hty} L${hbx} ${hby}`;

  return (
    <svg
      className={"bike-svg " + (className ?? "")}
      viewBox="0 0 900 500"
      role="img"
      aria-label={`${bike.brandName} ${bike.family} 侧视图`}
    >
      <defs>
        <linearGradient id={`frame-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={main} stopOpacity="1" />
          <stop offset="55%" stopColor={main} stopOpacity="0.82" />
          <stop offset="100%" stopColor={main} stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id={`fade-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={main} stopOpacity="0.16" />
          <stop offset="100%" stopColor={main} stopOpacity="0" />
        </linearGradient>
        <filter id={`shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      {variant === "full" && (
        <g opacity="0.5">
          <line x1="60" y1="444" x2="840" y2="444" stroke={main} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 8" />
          <line x1="200" y1="444" x2="200" y2="462" stroke={main} strokeOpacity="0.35" strokeWidth="1" />
          <line x1="700" y1="444" x2="700" y2="462" stroke={main} strokeOpacity="0.35" strokeWidth="1" />
          <text x="450" y="482" textAnchor="middle" fill="#8b9199" fontSize="11" fontFamily="monospace" letterSpacing="2">
            WHEELBASE {bike.sizes.find((s) => s.label === "M")?.wheelbase ?? 990} MM
          </text>
        </g>
      )}

      <ellipse cx="450" cy="462" rx="290" ry="14" fill={`url(#fade-${uid})`} />

      <g filter={`url(#shadow-${uid})`}>
        {wheel(rx, ry, "rear")}
        {wheel(fx, fy, "front")}

        {/* chain + cassette */}
        <path d={`M${bx} ${by - 22} L${rx} ${ry - 14} M${bx} ${by + 22} L${rx} ${ry + 14}`} stroke="#5b6066" strokeWidth={2} fill="none" opacity={0.8} />
        <circle cx={rx} cy={ry} r={26} fill="none" stroke="#7b8188" strokeWidth={4} strokeDasharray="1 3" />

        {/* frame */}
        <path d={framePath} stroke={`url(#frame-${uid})`} strokeWidth={isMtb ? 17 : 14} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={framePath} stroke="#ffffff" strokeOpacity={0.26} strokeWidth={2} strokeLinecap="round" fill="none" />

        {/* fork */}
        {isMtb ? (
          <>
            <path d={`M${hbx} ${hby} L${fx} ${fy}`} stroke="#2b2e33" strokeWidth={18} strokeLinecap="round" />
            <path d={`M${hbx} ${hby} L${fx} ${fy}`} stroke={main} strokeWidth={7} strokeLinecap="round" opacity={0.9} />
            <path d={`M${hbx - 8} ${hby + 6} L${fx - 12} ${fy}`} stroke="#0d0e10" strokeWidth={5} strokeLinecap="round" />
          </>
        ) : (
          <path d={`M${hbx} ${hby} L${fx} ${fy}`} stroke={main} strokeWidth={11} strokeLinecap="round" />
        )}

        {/* seatpost + saddle */}
        <path d={`M${stx} ${sty} L${sx + 12} ${sy}`} stroke={main} strokeWidth={isMtb ? 14 : 10} strokeLinecap="round" />
        {isMtb ? (
          <path d={`M${sx - 42} ${sy + 3} L${sx + 50} ${sy - 2} L${sx + 56} ${sy + 6} L${sx - 36} ${sy + 11} Z`} fill="#111316" stroke={main} strokeWidth={2.5} />
        ) : (
          <path d={`M${sx - 34} ${sy + 2} Q${sx + 4} ${sy - 12} ${sx + 52} ${sy + 1} Q${sx + 40} ${sy + 12} ${sx + 2} ${sy + 11} Q${sx - 26} ${sy + 10} ${sx - 34} ${sy + 2} Z`} fill="#111316" stroke={main} strokeWidth={2.5} />
        )}

        {/* cockpit */}
        <path d={`M${htx} ${hty} L${htx - 8} ${hty - 26}`} stroke={main} strokeWidth={8} strokeLinecap="round" />
        {isMtb ? (
          <>
            <path d={`M${htx - 52} ${hty - 28} L${htx + 34} ${hty - 28}`} stroke="#141619" strokeWidth={10} strokeLinecap="round" />
            <path d={`M${htx - 52} ${hty - 28} L${htx + 34} ${hty - 28}`} stroke={main} strokeWidth={3} strokeLinecap="round" opacity={0.8} />
            <path d={`M${htx - 46} ${hty - 28} L${htx - 52} ${hty - 20} M${htx + 28} ${hty - 28} L${htx + 34} ${hty - 20}`} stroke="#0d0e10" strokeWidth={9} strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d={`M${htx - 60} ${hty - 30} L${htx + 26} ${hty - 30}`} stroke="#141619" strokeWidth={8} strokeLinecap="round" />
            <path d={`M${htx + 26} ${hty - 30} Q${htx + 58} ${hty - 28} ${htx + 58} ${hty + 2} Q${htx + 58} ${hty + 30} ${htx + 26} ${hty + 32}`} stroke={main} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d={`M${htx - 60} ${hty - 30} L${htx - 66} ${hty - 12}`} stroke="#141619" strokeWidth={8} strokeLinecap="round" />
          </>
        )}

        {/* crank + chainring */}
        <circle cx={bx} cy={by} r={isMtb ? 30 : 34} fill="none" stroke={main} strokeWidth={3} opacity={0.85} />
        <circle cx={bx} cy={by} r={isMtb ? 12 : 14} fill="#0b0c0e" stroke={main} strokeWidth={3} />
        <path d={`M${bx} ${by} L${bx + 42} ${by + 34}`} stroke={main} strokeWidth={7} strokeLinecap="round" />
        <circle cx={bx + 42} cy={by + 34} r={5} fill={main} />

        {/* rear shock for MTB */}
        {isMtb && (
          <g>
            <path d={`M${stx + 6} ${sty + 38} L${bx - 4} ${by - 46}`} stroke="#0d0e10" strokeWidth={12} strokeLinecap="round" />
            <path d={`M${stx + 6} ${sty + 38} L${bx - 4} ${by - 46}`} stroke={main} strokeWidth={5} strokeLinecap="round" />
            <circle cx={stx + 6} cy={sty + 38} r={6} fill={main} />
          </g>
        )}

        {/* geometry overlay */}
        {showGeometry && (
          <g fontFamily="monospace" fontSize="12">
            <line x1={bx} y1={by} x2={bx} y2={hty} stroke={accent} strokeWidth={1.5} strokeDasharray="5 5" opacity={0.95} />
            <line x1={bx} y1={hty} x2={htx} y2={hty} stroke={accent} strokeWidth={1.5} strokeDasharray="5 5" opacity={0.95} />
            <line x1={bx} y1={by} x2={htx} y2={by} stroke={accent} strokeWidth={1} strokeDasharray="2 6" opacity={0.45} />
            <circle cx={bx} cy={by} r={4} fill={accent} />
            <circle cx={htx} cy={hty} r={4} fill={accent} />
            <text x={bx - 14} y={by - 28} fill={accent} textAnchor="end">STACK</text>
            <text x={(bx + htx) / 2} y={hty - 12} fill={accent} textAnchor="middle">REACH</text>
          </g>
        )}
      </g>
    </svg>
  );
}
