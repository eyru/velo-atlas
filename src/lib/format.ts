import type { Category, Discipline, Material } from "../data/types";

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

export function cny(value: number): string {
  return "¥" + Math.round(value).toLocaleString("zh-CN");
}

export function usd(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

export function weight(value: number): string {
  return value.toFixed(1) + " kg";
}

export function num(value: number): string {
  return Math.round(value).toLocaleString("zh-CN");
}

export const disciplineLabel: Record<Discipline, string> = {
  aero: "气动公路",
  race: "竞赛公路",
  climbing: "爬坡公路",
  endurance: "耐力公路",
  gravel: "砾石公路",
  allroad: "全地形公路",
  xc: "XC 越野",
  downcountry: "Downcountry",
  trail: "林道山地",
  enduro: "耐力山地",
  downhill: "速降山地",
  hardtail: "硬尾山地",
};

export const disciplineShort: Record<Discipline, string> = {
  aero: "AERO",
  race: "RACE",
  climbing: "CLIMB",
  endurance: "ENDURE",
  gravel: "GRAVEL",
  allroad: "ALLROAD",
  xc: "XC",
  downcountry: "DC",
  trail: "TRAIL",
  enduro: "ENDURO",
  downhill: "DH",
  hardtail: "HT",
};

export const categoryLabel: Record<Category, string> = {
  road: "公路车",
  mtb: "山地车",
};

export const materialLabel: Record<Material, string> = {
  碳纤维: "碳纤维",
  铝合金: "铝合金",
  钛合金: "钛合金",
  钢: "钢",
};

export function pct(value: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(100, (value / total) * 100));
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
