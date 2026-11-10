export type Category = "road" | "mtb";

export type Discipline =
  | "aero"
  | "race"
  | "climbing"
  | "endurance"
  | "gravel"
  | "allroad"
  | "xc"
  | "downcountry"
  | "trail"
  | "enduro"
  | "downhill"
  | "hardtail";

export type Material = "碳纤维" | "铝合金" | "钛合金" | "钢";

export type ColorFamily =
  | "黑"
  | "白"
  | "灰"
  | "银"
  | "红"
  | "橙"
  | "黄"
  | "绿"
  | "蓝"
  | "紫"
  | "粉"
  | "金"
  | "棕";

export interface BikeColor {
  name: string;
  en: string;
  hex: string;
  family: ColorFamily;
  /** 品牌官方产品图（本地资源，构建时内联） */
  photo?: string;
  /** 官方图片来源页 */
  photoSource?: string;
}

export interface SizeRow {
  label: string;
  height: [number, number];
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
  crank: number;
  stem: number;
  bar: number;
  /** 含外胎的真实轮半径（mm），用于几何图比例 */
  wheelRadius?: number;
}

export interface Brand {
  slug: string;
  name: string;
  cn: string;
  country: string;
  founded: number;
  accent: string;
  tagline: string;
  story: string;
  specialties: string[];
  tech: string[];
  website?: string;
}

export type BuildRaw = {
  year: number;
  edition: string;
  price: number;
  weight: number;
  groupset: string;
  wheels: string;
  tires?: string;
  shock?: string;
  material?: Material;
  popularity?: number;
};

export type FamilyRaw = {
  id: string;
  brand: string;
  name: string;
  category: Category;
  discipline: Discipline;
  years: [number, number];
  generation: string;
  frame: string;
  fork: string;
  material: Material;
  wheelSize: string;
  frontTravel?: number;
  rearTravel?: number;
  geo: string;
  geoOverride?: Partial<GeometryBase>;
  /** 品牌官方逐码几何表；存在时优先于估算 */
  geoTable?: SizeRow[];
  geoSource?: string;
  geoConfidence?: "official" | "estimated";
  sizes: string[];
  heights: [number, number][];
  colors: BikeColor[];
  highlights: string[];
  story: string;
  builds: BuildRaw[];
  notes?: string;
};

export type GeometryBase = {
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
  forkOffset: number;
  wheelRadius: number;
};

export type SpecItem = { label: string; value: string };
export type SpecGroup = { title: string; icon: string; items: SpecItem[] };

export type Bike = {
  id: string;
  brandSlug: string;
  brandName: string;
  brandCn: string;
  brandAccent: string;
  familyId: string;
  family: string;
  edition: string;
  name: string;
  year: number;
  category: Category;
  discipline: Discipline;
  generation: string;
  years: [number, number];
  price: number;
  priceUsd: number;
  material: Material;
  frame: string;
  fork: string;
  shock?: string;
  wheelSize: string;
  frontTravel?: number;
  rearTravel?: number;
  groupset: string;
  groupsetBrand: string;
  drivetrain: string;
  wheels: string;
  tires: string;
  weight: number;
  colors: BikeColor[];
  colorFamilies: ColorFamily[];
  highlights: string[];
  story: string;
  notes: string;
  sizes: SizeRow[];
  geoSource?: string;
  geoConfidence: "official" | "estimated";
  photo?: string;
  photoSource?: string;
  specs: SpecGroup[];
  priceHistory: { year: number; price: number }[];
  popularity: number;
  status: "current" | "archive";
  completeness: number;
  tags: string[];
  searchText: string;
};
