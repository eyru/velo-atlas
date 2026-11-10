import type { FamilyRaw, GeometryBase, SizeRow } from "./types";

export const geometryArchetypes: Record<string, GeometryBase> = {
  race: { stack: 555, reach: 390, headAngle: 73, seatAngle: 73.5, topTube: 550, headTube: 155, seatTube: 530, chainstay: 410, wheelbase: 988, bbDrop: 72, standover: 790, forkOffset: 45, wheelRadius: 336 },
  aero: { stack: 550, reach: 395, headAngle: 73, seatAngle: 73, topTube: 550, headTube: 145, seatTube: 525, chainstay: 410, wheelbase: 990, bbDrop: 70, standover: 785, forkOffset: 45, wheelRadius: 336 },
  climbing: { stack: 545, reach: 390, headAngle: 72.8, seatAngle: 73.5, topTube: 548, headTube: 145, seatTube: 520, chainstay: 410, wheelbase: 985, bbDrop: 72, standover: 782, forkOffset: 45, wheelRadius: 336 },
  endurance: { stack: 590, reach: 380, headAngle: 71.8, seatAngle: 73.5, topTube: 560, headTube: 180, seatTube: 540, chainstay: 420, wheelbase: 1005, bbDrop: 72, standover: 805, forkOffset: 48, wheelRadius: 336 },
  allroad: { stack: 580, reach: 385, headAngle: 72, seatAngle: 73.5, topTube: 558, headTube: 170, seatTube: 535, chainstay: 420, wheelbase: 1000, bbDrop: 72, standover: 800, forkOffset: 48, wheelRadius: 336 },
  gravel: { stack: 605, reach: 380, headAngle: 71.3, seatAngle: 73.5, topTube: 570, headTube: 165, seatTube: 540, chainstay: 430, wheelbase: 1025, bbDrop: 75, standover: 810, forkOffset: 50, wheelRadius: 350 },
  xc: { stack: 600, reach: 450, headAngle: 67.5, seatAngle: 75.5, topTube: 600, headTube: 100, seatTube: 470, chainstay: 435, wheelbase: 1130, bbDrop: 60, standover: 760, forkOffset: 44, wheelRadius: 368 },
  downcountry: { stack: 610, reach: 460, headAngle: 66.5, seatAngle: 76, topTube: 610, headTube: 110, seatTube: 460, chainstay: 435, wheelbase: 1155, bbDrop: 55, standover: 755, forkOffset: 44, wheelRadius: 368 },
  trail: { stack: 620, reach: 470, headAngle: 65.5, seatAngle: 76.5, topTube: 620, headTube: 120, seatTube: 450, chainstay: 435, wheelbase: 1180, bbDrop: 40, standover: 750, forkOffset: 44, wheelRadius: 368 },
  enduro: { stack: 630, reach: 480, headAngle: 64.5, seatAngle: 77, topTube: 625, headTube: 125, seatTube: 440, chainstay: 440, wheelbase: 1210, bbDrop: 35, standover: 745, forkOffset: 44, wheelRadius: 368 },
  downhill: { stack: 635, reach: 485, headAngle: 63.5, seatAngle: 77.5, topTube: 630, headTube: 130, seatTube: 430, chainstay: 445, wheelbase: 1250, bbDrop: 30, standover: 740, forkOffset: 44, wheelRadius: 368 },
  hardtail: { stack: 615, reach: 455, headAngle: 66.8, seatAngle: 75, topTube: 615, headTube: 115, seatTube: 450, chainstay: 435, wheelbase: 1140, bbDrop: 55, standover: 760, forkOffset: 44, wheelRadius: 368 },
};

export const ROAD_SIZES = ["XS", "S", "M", "L", "XL"];
export const ROAD_HEIGHTS: [number, number][] = [[155, 162], [162, 169], [169, 176], [176, 182], [182, 189]];
export const MTB_SIZES = ["S", "M", "L", "XL"];
export const MTB_HEIGHTS: [number, number][] = [[160, 168], [168, 176], [176, 184], [184, 192]];

/** 用官方逐码数据构造一行；未给出的曲柄/把立/车把按尺码给默认值。 */
export function geoRow(
  label: string,
  height: [number, number],
  v: {
    stack: number;
    reach: number;
    headAngle: number;
    seatAngle: number;
    topTube: number;
    headTube: number;
    seatTube: number;
    chainstay: number;
    wheelbase: number;
    bbDrop: number;
    standover: number;
    wheelRadius?: number;
    crank?: number;
    stem?: number;
    bar?: number;
  },
): SizeRow {
  return {
    label,
    height,
    crank: v.crank ?? (label === "XS" || label === "S" ? 170 : label === "XL" ? 175 : 172.5),
    stem: v.stem ?? (label === "XS" ? 80 : label === "S" ? 90 : label === "M" ? 100 : label === "L" ? 110 : 120),
    bar: v.bar ?? (label === "XS" ? 380 : label === "S" ? 400 : 420),
    wheelRadius: v.wheelRadius ?? 336,
    ...v,
  };
}

export function buildSizes(family: FamilyRaw): SizeRow[] {
  // 官方逐码表优先，绝不再用模型推算覆盖
  if (family.geoTable && family.geoTable.length) return family.geoTable;
  const base = { ...geometryArchetypes[family.geo], ...(family.geoOverride ?? {}) };
  const mid = (family.sizes.length - 1) / 2;
  const isMtb = family.category === "mtb";
  const d = isMtb
    ? { stack: 16, reach: 12, topTube: 12, headTube: 15, seatTube: 18, wheelbase: 20, standover: 8 }
    : { stack: 18, reach: 9, topTube: 12, headTube: 17, seatTube: 17, wheelbase: 17, standover: 10 };

  return family.sizes.map((label, i) => {
    const k = i - mid;
    const big = Math.max(0, k);
    const small = Math.max(0, -k);
    const stack = Math.round(base.stack + big * d.stack - small * d.stack * 0.82);
    const reach = Math.round(base.reach + big * d.reach - small * d.reach * 0.82);
    const topTube = Math.round(base.topTube + big * d.topTube - small * d.topTube * 0.85);
    const headTube = Math.round(base.headTube + big * d.headTube - small * d.headTube * 0.8);
    const seatTube = Math.round(base.seatTube + big * d.seatTube - small * d.seatTube * 0.85);
    const wheelbase = Math.round(base.wheelbase + big * d.wheelbase - small * d.wheelbase * 0.8);
    const standover = Math.round(base.standover + big * d.standover - small * d.standover * 0.9);
    const crank = isMtb ? (label === "S" ? 170 : label === "XL" ? 175 : 170) : label === "XS" || label === "S" ? 170 : label === "L" || label === "XL" ? 172.5 : 172.5;
    const stem = isMtb ? (label === "S" ? 40 : label === "XL" ? 50 : 45) : label === "XS" ? 80 : label === "S" ? 90 : label === "M" ? 100 : label === "L" ? 110 : 120;
    const bar = isMtb ? (family.discipline === "xc" ? 760 : 780) : label === "XS" ? 380 : label === "S" ? 400 : label === "M" ? 420 : 420;
    return {
      label,
      height: family.heights[i] ?? [160, 190],
      stack,
      reach,
      headAngle: +(base.headAngle - big * 0.15 + small * 0.2).toFixed(1),
      seatAngle: +(base.seatAngle - big * 0.2 + small * 0.15).toFixed(1),
      topTube,
      headTube,
      seatTube,
      chainstay: base.chainstay + (isMtb ? 0 : i === 0 ? 2 : 0),
      wheelbase,
      bbDrop: base.bbDrop,
      standover,
      crank,
      stem,
      bar,
      wheelRadius: base.wheelRadius,
    };
  });
}
