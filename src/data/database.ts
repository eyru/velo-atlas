import { brands, brandBySlug, getBrand } from "./brands";
import { cockpitFor, groupsets, tiresFor, wheelsets } from "./components";
import { buildSizes } from "./geometry";
import { roadFamiliesA } from "./families-road-a";
import { roadFamiliesB } from "./families-road-b";
import { roadFamiliesC } from "./families-road-c";
import { roadFamiliesD } from "./families-road-d";
import { mtbFamiliesA } from "./families-mtb-a";
import { mtbFamiliesB } from "./families-mtb-b";
import { mtbFamiliesC } from "./families-mtb-c";
import { cnRoadFamilies, cnMtbFamilies } from "./families-cn";
import { slugify } from "./helpers";
import type { Bike, BuildRaw, Category, Discipline, FamilyRaw, SpecGroup } from "./types";

export const families: FamilyRaw[] = [
  ...roadFamiliesA,
  ...roadFamiliesB,
  ...roadFamiliesC,
  ...roadFamiliesD,
  ...mtbFamiliesA,
  ...mtbFamiliesB,
  ...mtbFamiliesC,
  ...cnRoadFamilies,
  ...cnMtbFamilies,
];

const disciplineMeta: Record<Discipline, { label: string; en: string; blurb: string }> = {
  aero: { label: "气动公路", en: "Aero Road", blurb: "为平路速度与集团冲刺而生，管型与整合度优先。" },
  race: { label: "竞赛公路", en: "Race Road", blurb: "全能竞赛几何，爬坡、冲刺与下坡都要快。" },
  climbing: { label: "爬坡公路", en: "Climbing Road", blurb: "轻量优先，长坡与连续起伏的最佳拍档。" },
  endurance: { label: "耐力公路", en: "Endurance Road", blurb: "舒适几何与长距离稳定性，适合全天候骑行。" },
  gravel: { label: "砾石公路", en: "Gravel", blurb: "宽胎、稳定几何与多安装位，把公路延伸到碎石。" },
  allroad: { label: "全地形公路", en: "All-Road", blurb: "公路效率与轻度越野能力的平衡点。" },
  xc: { label: "XC 越野", en: "Cross-Country", blurb: "轻量、踩踏效率与爬坡能力优先的越野竞赛车。" },
  downcountry: { label: "Downcountry", en: "Downcountry", blurb: "短行程但几何更激进，爬得上去也冲得下来。" },
  trail: { label: "林道山地", en: "Trail", blurb: "全能行程，兼顾爬坡、技术路段与下坡乐趣。" },
  enduro: { label: "耐力山地", en: "Enduro", blurb: "长行程与稳几何，为陡峭下坡与耐力赛准备。" },
  downhill: { label: "速降山地", en: "Downhill", blurb: "纯重力取向，缆车路线与赛道上的速度机器。" },
  hardtail: { label: "硬尾山地", en: "Hardtail", blurb: "结构简单、维护成本低，踩踏反馈直接。" },
};

export const disciplineInfo = disciplineMeta;

const categoryLabel: Record<Category, string> = { road: "公路车", mtb: "山地车" };

function groupsetBrandOf(name: string): string {
  if (name.startsWith("Shimano")) return "Shimano";
  if (name.startsWith("SRAM")) return "SRAM";
  if (name.startsWith("Campagnolo")) return "Campagnolo";
  return "其他";
}

function drivetrainOf(name: string): string {
  const spec = groupsets[name];
  const speeds = spec?.speeds ?? "—";
  const electronic = /Di2|AXS|Wireless/i.test(name);
  return `${speeds} · ${electronic ? "电子变速" : "机械变速"}`;
}

function priceHistoryOf(family: FamilyRaw): { year: number; price: number }[] {
  const byYear = new Map<number, number[]>();
  for (const b of family.builds) {
    const list = byYear.get(b.year) ?? [];
    list.push(b.price);
    byYear.set(b.year, list);
  }
  return [...byYear.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([year, prices]) => ({
      year,
      price: Math.round(prices.reduce((s, p) => s + p, 0) / prices.length / 100) * 100,
    }));
}

function specsOf(family: FamilyRaw, build: BuildRaw, bike: Pick<Bike, "sizes" | "priceUsd" | "drivetrain">): SpecGroup[] {
  const gs = groupsets[build.groupset];
  const wheels = wheelsets[build.wheels];
  const cockpit = cockpitFor(build.price, family.category, family.discipline);
  const m = bike.sizes.find((s) => s.label === "M") ?? bike.sizes[Math.floor(bike.sizes.length / 2)];
  const sizeRange = bike.sizes.map((s) => s.label).join(" / ");
  const heightRange = `${bike.sizes[0].height[0]}–${bike.sizes[bike.sizes.length - 1].height[1]} cm`;
  const frameGroup: SpecGroup = {
    title: "车架与悬挂",
    icon: "frame",
    items: [
      { label: "车架", value: family.frame },
      { label: "前叉", value: family.fork },
      ...(build.shock || family.rearTravel ? [{ label: "后避震", value: build.shock ?? `Fox Float Factory ${family.rearTravel}mm` }] : []),
      { label: "车架材质", value: build.material ?? family.material },
      { label: "轮径", value: family.wheelSize },
      ...(family.frontTravel ? [{ label: "前行程", value: `${family.frontTravel} mm` }] : []),
      ...(family.rearTravel ? [{ label: "后行程", value: `${family.rearTravel} mm` }] : []),
    ],
  };
  const driveGroup: SpecGroup = {
    title: "传动与制动",
    icon: "cog",
    items: [
      { label: "套件", value: build.groupset },
      { label: "变速形式", value: bike.drivetrain },
      ...(gs ? [
        { label: "后拨", value: gs.rd },
        { label: "前拨", value: gs.fd },
        { label: "牙盘", value: gs.crank },
        { label: "飞轮", value: gs.cassette },
        { label: "链条", value: gs.chain },
        { label: "刹车", value: gs.brakes },
        { label: "碟片", value: gs.rotors },
      ] : []),
    ],
  };
  const wheelGroup: SpecGroup = {
    title: "轮组与轮胎",
    icon: "wheel",
    items: [
      { label: "轮组", value: build.wheels },
      ...(wheels ? [
        { label: "轮圈", value: wheels.rim },
        { label: "花鼓", value: wheels.hubs },
        { label: "真空胎", value: wheels.tubeless },
      ] : []),
      { label: "轮胎", value: build.tires ?? tiresFor(family.category, family.discipline) },
    ],
  };
  const cockpitGroup: SpecGroup = {
    title: "座舱与接触点",
    icon: "handlebar",
    items: [
      { label: "车把", value: cockpit.bar },
      { label: "把立", value: cockpit.stem },
      { label: "座管", value: cockpit.post },
      { label: "把带", value: cockpit.tape },
      ...(m ? [
        { label: "M 码曲柄", value: `${m.crank} mm` },
        { label: "M 码把立", value: `${m.stem} mm` },
        { label: "M 码车把宽", value: `${m.bar} mm` },
      ] : []),
    ],
  };
  const geoGroup: SpecGroup = {
    title: "几何与尺码",
    icon: "ruler",
    items: [
      { label: "可选尺码", value: sizeRange },
      { label: "适配身高", value: heightRange },
      { label: "几何口径", value: family.geoConfidence === "official" ? "品牌官方逐码表" : "参考几何模型（非官方逐码表）" },
      ...(m ? [
        { label: "M 码 Stack", value: `${m.stack} mm` },
        { label: "M 码 Reach", value: `${m.reach} mm` },
        { label: "M 码头管角", value: `${m.headAngle}°` },
        { label: "M 码座管角", value: `${m.seatAngle}°` },
        { label: "M 码后下叉", value: `${m.chainstay} mm` },
        { label: "M 码轴距", value: `${m.wheelbase} mm` },
      ] : []),
    ],
  };
  const versionGroup: SpecGroup = {
    title: "版本与价格",
    icon: "tag",
    items: [
      { label: "年款", value: `${build.year}` },
      { label: "版本", value: build.edition },
      { label: "中国区参考价", value: `¥${build.price.toLocaleString("zh-CN")}` },
      { label: "美元参考价", value: `$${bike.priceUsd.toLocaleString("en-US")}` },
      { label: "整车重量", value: `${build.weight.toFixed(1)} kg` },
      { label: "上市状态", value: build.year >= 2025 ? "在售 / 最新" : "往季款" },
    ],
  };
  return [frameGroup, driveGroup, wheelGroup, cockpitGroup, geoGroup, versionGroup];
}

function makeBike(family: FamilyRaw, build: BuildRaw): Bike {
  const brand = getBrand(family.brand);
  const sizes = buildSizes(family);
  const priceUsd = Math.round(build.price / 7.2 / 50) * 50;
  const drivetrain = drivetrainOf(build.groupset);
  const name = `${family.brand} ${family.name} ${build.edition}`;
  const id = `${family.id}-${build.year}-${slugify(build.edition)}`;
  const base = { sizes, priceUsd, drivetrain };
  const specs = specsOf(family, build, base);
  const filled = [
    build.price > 0,
    build.weight > 0,
    !!build.groupset,
    !!build.wheels,
    !!family.frame,
    !!family.fork,
    family.colors.length > 0,
    family.highlights.length > 0,
    !!family.story,
    (family.geoTable?.length ?? 0) > 0 || family.geoOverride !== undefined,
  ].filter(Boolean).length;
  const completeness = Math.min(100, Math.round(78 + (filled / 10) * 22));
  const tags = [
    categoryLabel[family.category],
    disciplineMeta[family.discipline].label,
    family.material,
    `${build.year}`,
    ...family.colors.map((c) => c.family + "色系"),
  ];
  const searchText = [
    family.brand,
    brand?.cn ?? "",
    family.name,
    family.generation,
    build.edition,
    `${build.year}`,
    categoryLabel[family.category],
    disciplineMeta[family.discipline].label,
    disciplineMeta[family.discipline].en,
    family.material,
    build.groupset,
    build.wheels,
    family.wheelSize,
    ...family.colors.map((c) => `${c.name} ${c.en} ${c.family}`),
    ...family.highlights,
  ].join(" ").toLowerCase();

  return {
    id,
    brandSlug: brand?.slug ?? slugify(family.brand),
    brandName: family.brand,
    brandCn: brand?.cn ?? family.brand,
    brandAccent: brand?.accent ?? "#d7e021",
    familyId: family.id,
    family: family.name,
    edition: build.edition,
    name,
    year: build.year,
    category: family.category,
    discipline: family.discipline,
    generation: family.generation,
    years: family.years,
    price: build.price,
    priceUsd,
    material: build.material ?? family.material,
    frame: family.frame,
    fork: family.fork,
    shock: build.shock ?? (family.rearTravel ? `Fox Float Factory ${family.rearTravel}mm` : undefined),
    wheelSize: family.wheelSize,
    frontTravel: family.frontTravel,
    rearTravel: family.rearTravel,
    groupset: build.groupset,
    groupsetBrand: groupsetBrandOf(build.groupset),
    drivetrain,
    wheels: build.wheels,
    tires: build.tires ?? tiresFor(family.category, family.discipline),
    weight: build.weight,
    colors: family.colors,
    colorFamilies: [...new Set(family.colors.map((c) => c.family))],
    highlights: family.highlights,
    story: family.story,
    notes: family.notes ?? "价格为参考价，实际以品牌官方与经销商为准。",
    sizes,
    geoSource: family.geoSource,
    geoConfidence: family.geoConfidence ?? (family.geoTable?.length ? "official" : "estimated"),
    photo: family.colors.find((c) => c.photo)?.photo,
    photoSource: family.colors.find((c) => c.photo)?.photoSource,
    specs,
    priceHistory: priceHistoryOf(family),
    popularity: build.popularity ?? 50,
    status: build.year >= 2025 ? "current" : "archive",
    completeness,
    tags: [...new Set(tags)],
    searchText,
  };
}

export const bikes: Bike[] = families
  .flatMap((f) => f.builds.map((b) => makeBike(f, b)))
  .sort((a, b) => b.year - a.year || b.popularity - a.popularity);

export const bikeById: Record<string, Bike> = Object.fromEntries(bikes.map((b) => [b.id, b]));

export const allColors = [...new Set(families.flatMap((f) => f.colors.map((c) => c.family)))].sort();
export const allYears = [...new Set(bikes.map((b) => b.year))].sort((a, b) => b - a);

export const stats = {
  brands: brands.length,
  families: families.length,
  bikes: bikes.length,
  roadFamilies: families.filter((f) => f.category === "road").length,
  mtbFamilies: families.filter((f) => f.category === "mtb").length,
  years: `${Math.min(...bikes.map((b) => b.year))}–${Math.max(...bikes.map((b) => b.year))}`,
  minPrice: Math.min(...bikes.map((b) => b.price)),
  maxPrice: Math.max(...bikes.map((b) => b.price)),
};

export function bikeLabel(b: Bike): string {
  return `${b.brandName} ${b.family}`;
}
