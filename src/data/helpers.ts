import type { BikeColor, BuildRaw, Category, ColorFamily, Discipline, FamilyRaw, GeometryBase, Material, SizeRow } from "./types";
import { MTB_HEIGHTS, MTB_SIZES, ROAD_HEIGHTS, ROAD_SIZES } from "./geometry";

export function C(name: string, en: string, hex: string, family: ColorFamily, photo?: string, photoSource?: string): BikeColor {
  return { name, en, hex, family, ...(photo ? { photo } : {}), ...(photoSource ? { photoSource } : {}) };
}

export function B(
  year: number,
  edition: string,
  price: number,
  weight: number,
  groupset: string,
  wheels: string,
  extra: Partial<BuildRaw> = {},
): BuildRaw {
  return { year, edition, price, weight, groupset, wheels, ...extra };
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[éèê]/g, "e")
    .replace(/[ü]/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Common = {
  disc: Discipline;
  years: [number, number];
  gen: string;
  frame: string;
  fork: string;
  colors: BikeColor[];
  highlights: string[];
  story: string;
  builds: BuildRaw[];
  material?: Material;
  geoOverride?: Partial<GeometryBase>;
  geoTable?: SizeRow[];
  geoSource?: string;
  geoConfidence?: "official" | "estimated";
  sizes?: string[];
  heights?: [number, number][];
  notes?: string;
  frontTravel?: number;
  rearTravel?: number;
  wheelSize?: string;
};

export function roadFamily(brand: string, name: string, o: Common): FamilyRaw {
  return {
    id: `${slugify(brand)}-${slugify(name)}`,
    brand,
    name,
    category: "road" as Category,
    discipline: o.disc,
    years: o.years,
    generation: o.gen,
    frame: o.frame,
    fork: o.fork,
    material: o.material ?? "碳纤维",
    wheelSize: o.wheelSize ?? "700C",
    geo: o.disc === "gravel" ? "gravel" : o.disc === "endurance" ? "endurance" : o.disc === "aero" ? "aero" : o.disc === "climbing" ? "climbing" : o.disc === "allroad" ? "allroad" : "race",
    geoOverride: o.geoOverride,
    geoTable: o.geoTable,
    geoSource: o.geoSource,
    geoConfidence: o.geoConfidence ?? (o.geoTable?.length ? "official" : "estimated"),
    sizes: o.sizes ?? ROAD_SIZES,
    heights: o.heights ?? ROAD_HEIGHTS,
    colors: o.colors,
    highlights: o.highlights,
    story: o.story,
    builds: o.builds,
    notes: o.notes,
  };
}

export function mtbFamily(brand: string, name: string, o: Common): FamilyRaw {
  return {
    id: `${slugify(brand)}-${slugify(name)}`,
    brand,
    name,
    category: "mtb" as Category,
    discipline: o.disc,
    years: o.years,
    generation: o.gen,
    frame: o.frame,
    fork: o.fork,
    material: o.material ?? "碳纤维",
    wheelSize: o.wheelSize ?? "29\"",
    frontTravel: o.frontTravel,
    rearTravel: o.rearTravel,
    geo: o.disc === "xc" ? "xc" : o.disc === "downcountry" ? "downcountry" : o.disc === "trail" ? "trail" : o.disc === "enduro" ? "enduro" : o.disc === "downhill" ? "downhill" : "hardtail",
    geoOverride: o.geoOverride,
    geoTable: o.geoTable,
    geoSource: o.geoSource,
    geoConfidence: o.geoConfidence ?? (o.geoTable?.length ? "official" : "estimated"),
    sizes: o.sizes ?? MTB_SIZES,
    heights: o.heights ?? MTB_HEIGHTS,
    colors: o.colors,
    highlights: o.highlights,
    story: o.story,
    builds: o.builds,
    notes: o.notes,
  };
}
