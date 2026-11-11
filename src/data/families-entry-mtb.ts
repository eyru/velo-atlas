import { B, C, mtbFamily } from "./helpers";

/**
 * 入门 / 高性价比山地车补充档案。
 *
 * 覆盖 27.5 与 29 吋硬尾、100–130mm 前叉、机械碟刹与入门气压前叉，
 * 价格主要落在 1,999–10,980 元，专门补上原档案里最缺的“第一台山地车”区间。
 */
const NOTE =
  "中国区参考价；配置按同级公开配置与品牌当季资料整理，重量为参考值，几何为参考模型，购买前以品牌当季配置表为准。";

const XC29 = { stack: 618, reach: 438, headAngle: 68, seatAngle: 74, topTube: 610, headTube: 120, seatTube: 455, chainstay: 440, wheelbase: 1138, bbDrop: 58, standover: 770, forkOffset: 46, wheelRadius: 368 };
const XC275 = { ...XC29, wheelbase: 1112, wheelRadius: 350, standover: 755 };
const TRAIL29 = { stack: 625, reach: 452, headAngle: 66.5, seatAngle: 74.5, topTube: 618, headTube: 125, seatTube: 450, chainstay: 438, wheelbase: 1172, bbDrop: 48, standover: 758, forkOffset: 46, wheelRadius: 368 };

export const entryMtbFamilies = [
  /* ───────────────────────── Trek 崔克 ───────────────────────── */
  mtbFamily("Trek", "Roscoe", {
    disc: "trail", years: [2025, 2026], gen: "Roscoe",
    frame: "Alpha Gold 铝合金硬尾车架 · 林道几何",
    fork: "RockShox Recon Silver 120mm", frontTravel: 120, wheelSize: "29\"",
    material: "铝合金", geoOverride: TRAIL29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("崔克红", "Trek Red", "#b5121b", "红"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["120mm 林道前叉", "29 吋轮径", "可调几何", "入门林道硬尾"],
    story: "Roscoe 是 Trek 把林道硬尾做“好玩”的一次尝试：120mm 前叉、较 slack 的头管和宽胎，让它比 XC 硬尾更愿意下坡。它适合把绿道骑腻、开始寻找土路和机耕道的人。",
    builds: [
      B(2026, "6", 8980, 13.8, "Shimano Deore M6100", "Bontrager Kovee", { tires: "29×2.4", popularity: 86 }),
      B(2025, "7", 10980, 13.4, "Shimano SLX M7100", "Bontrager Kovee", { tires: "29×2.4", popularity: 76 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Merida 美利达 ───────────────────────── */
  mtbFamily("Merida", "Big Seven", {
    disc: "hardtail", years: [2025, 2026], gen: "Big Seven",
    frame: "Lite 铝合金硬尾车架 · 27.5 轮径",
    fork: "SR Suntour XCT 100mm", frontTravel: 100, wheelSize: "27.5\"",
    material: "铝合金", geoOverride: XC275,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("美利达绿", "Merida Green", "#007a4d", "绿"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["27.5 轮径", "100mm 前叉", "入门价格", "小身高友好"],
    story: "Big Seven 是美利达的 27.5 吋入门硬尾，轮径更小、起步更轻，适合身高不高或主要在窄林道里穿行的骑手。它和 Big Nine 一起，把美利达的入门山地梯队补完整。",
    builds: [
      B(2026, "15", 2990, 14.6, "Shimano Altus M2000", "Merida Comp CC", { tires: "27.5×2.1", popularity: 90 }),
      B(2026, "40", 4290, 14.2, "Shimano Acera M3000", "Merida Comp CC", { tires: "27.5×2.1", popularity: 82 }),
      B(2025, "100", 5590, 13.8, "Shimano Deore M6100", "Merida Comp CC", { tires: "27.5×2.2", popularity: 72 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Scott 斯科特 ───────────────────────── */
  mtbFamily("Scott", "Aspect", {
    disc: "hardtail", years: [2024, 2026], gen: "Aspect",
    frame: "Aspect 铝合金硬尾车架",
    fork: "SR Suntour XCM 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("车队黑", "Team Black", "#17191b", "黑"),
      C("电光蓝", "Electric Blue", "#1655c9", "蓝"),
      C("纯白", "Pure White", "#ecebe4", "白"),
    ],
    highlights: ["29 吋轮径", "100mm 前叉", "入门 XC 几何", "Scott 铝合金车架"],
    story: "Aspect 是 Scott 的入门硬尾，和 Scale 共用 29 吋 XC 的比例，但用铝合金和更基础的配置把价格压下来。它是进入 Scott 山地谱系最直接的一步。",
    builds: [
      B(2026, "940", 3990, 14.4, "Shimano Altus M2000", "Syncros Race 24", { tires: "29×2.1", popularity: 88 }),
      B(2026, "930", 4990, 14.0, "Shimano Acera M3000", "Syncros Race 24", { tires: "29×2.1", popularity: 82 }),
      B(2025, "920", 5990, 13.6, "Shimano Deore M6100", "Syncros Race 24", { tires: "29×2.2", popularity: 75 }),
      B(2024, "910", 6990, 13.2, "Shimano Deore M6100", "Syncros Race 24", { tires: "29×2.2", popularity: 66 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Cube 库贝 ───────────────────────── */
  mtbFamily("Cube", "Aim", {
    disc: "hardtail", years: [2025, 2026], gen: "Aim",
    frame: "Aluminium Lite 硬尾车架",
    fork: "SR Suntour XCT 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("深海蓝", "Deep Blue", "#1c3b63", "蓝"),
      C("银灰", "Silver Grey", "#aeb3b7", "银"),
    ],
    highlights: ["Aluminium Lite 车架", "29 吋轮径", "100mm 前叉", "德国品牌入门款"],
    story: "Aim 是 Cube 山地谱系的入口：车架做工规整、配置直接、价格克制。它没有 Acid 的升级空间，但作为第一台山地车，该有的东西一样不少。",
    builds: [
      B(2026, "Race", 3290, 14.5, "Shimano Altus M2000", "Cube AM Ride 25", { tires: "29×2.1", popularity: 90 }),
      B(2026, "SL", 4290, 14.1, "Shimano Acera M3000", "Cube AM Ride 25", { tires: "29×2.1", popularity: 82 }),
      B(2025, "EX", 5290, 13.7, "Shimano Deore M6100", "Cube AM Ride 25", { tires: "29×2.2", popularity: 72 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("Cube", "Acid", {
    disc: "hardtail", years: [2025, 2026], gen: "Acid",
    frame: "Aluminium Lite 硬尾车架 · 林道几何",
    fork: "RockShox Judy Silver 120mm", frontTravel: 120, wheelSize: "29\"",
    material: "铝合金", geoOverride: TRAIL29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("苔藓绿", "Moss Green", "#4b5f3b", "绿"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["120mm 前叉", "29 吋轮径", "林道几何", "升级空间大"],
    story: "Acid 是 Cube 入门硬尾里更偏林道的一台：120mm 前叉、宽胎和更放松的头管，让它比 Aim 更愿意下坡。它适合已经确定要往林道方向走的骑手。",
    builds: [
      B(2026, "Race", 6990, 13.9, "Shimano Deore M6100", "Cube AM Ride 25", { tires: "29×2.4", popularity: 82 }),
      B(2025, "SL", 8990, 13.4, "Shimano SLX M7100", "Cube AM Ride 25", { tires: "29×2.4", popularity: 72 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Marin 马林 ───────────────────────── */
  mtbFamily("Marin", "Bobcat Trail", {
    disc: "trail", years: [2025, 2026], gen: "Bobcat Trail",
    frame: "Series 2 铝合金硬尾车架 · 林道几何",
    fork: "SR Suntour XCM 120mm", frontTravel: 120, wheelSize: "29\"",
    material: "铝合金", geoOverride: TRAIL29,
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("马林绿", "Marin Green", "#315c4a", "绿"),
      C("水泥灰", "Cement Grey", "#7d807e", "灰"),
    ],
    highlights: ["120mm 前叉", "29 吋轮径", "林道几何", "入门价格"],
    story: "Bobcat Trail 是 Marin 的入门林道硬尾，几何比 XC 车更放松，配置够用且升级空间大。它适合把“山地车”真正骑进土路，而不是只停在绿道。",
    builds: [
      B(2026, "3", 3990, 14.4, "Shimano Altus M2000", "Marin Aluminum 29", { tires: "29×2.3", popularity: 88 }),
      B(2026, "4", 4990, 14.0, "Shimano Acera M3000", "Marin Aluminum 29", { tires: "29×2.3", popularity: 80 }),
      B(2025, "5", 5990, 13.6, "Shimano Deore M6100", "Marin Aluminum 29", { tires: "29×2.4", popularity: 72 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("Marin", "Bolinas Ridge", {
    disc: "hardtail", years: [2025, 2026], gen: "Bolinas Ridge",
    frame: "Series 1 铝合金硬尾车架",
    fork: "SR Suntour XCT 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("沙色", "Sand", "#b8a78c", "棕"),
      C("马林绿", "Marin Green", "#315c4a", "绿"),
    ],
    highlights: ["29 吋轮径", "100mm 前叉", "通勤/轻越野", "货架孔位"],
    story: "Bolinas Ridge 是 Marin 最便宜的 29 吋硬尾，定位接近“能越野的通勤车”。它适合预算有限、但想要一台能覆盖上下班和周末土路的学生或通勤者。",
    builds: [
      B(2026, "1", 3290, 14.7, "Shimano Tourney TX 3×7", "Marin Aluminum 29", { tires: "29×2.1", popularity: 88 }),
      B(2026, "2", 3990, 14.3, "Shimano Altus M2000", "Marin Aluminum 29", { tires: "29×2.1", popularity: 80 }),
      B(2025, "3", 4990, 13.9, "Shimano Acera M3000", "Marin Aluminum 29", { tires: "29×2.2", popularity: 70 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Kona 科纳 ───────────────────────── */
  mtbFamily("Kona", "Mahuna", {
    disc: "hardtail", years: [2025, 2026], gen: "Mahuna",
    frame: "Kona 6061 铝合金硬尾车架",
    fork: "SR Suntour XCR 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("科纳橙", "Kona Orange", "#d9651f", "橙"),
      C("苔藓绿", "Moss Green", "#4b5f3b", "绿"),
    ],
    highlights: ["6061 铝合金车架", "29 吋轮径", "100mm 前叉", "Kona 林道血统"],
    story: "Mahuna 是 Kona 的入门 29 吋硬尾，车架几何带着一点林道味道，价格却停在五千元档。它适合喜欢 Kona 品牌调性、又不想第一台车就花太多的骑手。",
    builds: [
      B(2026, "Base", 4990, 14.0, "Shimano Acera M3000", "Kona Aluminum 29", { tires: "29×2.2", popularity: 82 }),
      B(2025, "Deore", 5990, 13.6, "Shimano Deore M6100", "Kona Aluminum 29", { tires: "29×2.3", popularity: 72 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("Kona", "Fire Mountain", {
    disc: "hardtail", years: [2025, 2026], gen: "Fire Mountain",
    frame: "Kona 6061 铝合金硬尾车架 · 27.5",
    fork: "SR Suntour XCT 100mm", frontTravel: 100, wheelSize: "27.5\"",
    material: "铝合金", geoOverride: XC275,
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("火焰红", "Fire Red", "#b5121b", "红"),
      C("沙色", "Sand", "#b8a78c", "棕"),
    ],
    highlights: ["27.5 轮径", "100mm 前叉", "入门价格", "小身高友好"],
    story: "Fire Mountain 是 Kona 的 27.5 吋入门硬尾，轮径小、操控轻，适合身高不高或喜欢灵活操控的骑手。它是 Kona 山地谱系里最容易入手的一台。",
    builds: [
      B(2026, "Base", 3990, 14.5, "Shimano Altus M2000", "Kona Aluminum 27.5", { tires: "27.5×2.1", popularity: 85 }),
      B(2025, "Acera", 4990, 14.1, "Shimano Acera M3000", "Kona Aluminum 27.5", { tires: "27.5×2.2", popularity: 74 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── XDS 喜德盛 ───────────────────────── */
  mtbFamily("XDS", "英雄 300", {
    disc: "hardtail", years: [2025, 2026], gen: "英雄 300",
    frame: "X6 铝合金硬尾车架 · 27.5 轮径",
    fork: "SR Suntour XCT 100mm", frontTravel: 100, wheelSize: "27.5\"",
    material: "铝合金", geoOverride: XC275,
    colors: [
      C("曜石黑", "Obsidian", "#191b1d", "黑"),
      C("喜德盛红", "XDS Red", "#b5121b", "红"),
      C("深海蓝", "Deep Blue", "#1b3b63", "蓝"),
    ],
    highlights: ["X6 铝合金车架", "27.5 轮径", "机械碟刹", "两千元档"],
    story: "英雄 300 是喜德盛最走量的入门山地车之一：价格低、门店多、维护便宜。它适合学生通勤、绿道和轻度土路，是“第一台山地车”的典型答案。",
    builds: [
      B(2026, "Tourney", 1999, 14.8, "Shimano Tourney TX 3×7", "XDS 铝合金碟刹轮组", { tires: "27.5×2.1", popularity: 95 }),
      B(2025, "Altus", 2399, 14.4, "Shimano Altus M2000", "XDS 铝合金碟刹轮组", { tires: "27.5×2.1", popularity: 84 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("XDS", "英雄 500", {
    disc: "hardtail", years: [2025, 2026], gen: "英雄 500",
    frame: "X6 铝合金硬尾车架 · 29 轮径",
    fork: "SR Suntour XCM 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("曜石黑", "Obsidian", "#191b1d", "黑"),
      C("喜德盛红", "XDS Red", "#b5121b", "红"),
      C("天青白", "Sky White", "#e8ecec", "白"),
    ],
    highlights: ["X6 铝合金车架", "29 吋轮径", "100mm 前叉", "三千元档"],
    story: "英雄 500 把轮径升到 29 吋，滚动通过性更好，配置也比 300 更完整。它是喜德盛入门山地车里更适合“真的去越野”的一档。",
    builds: [
      B(2026, "Acera", 2999, 14.2, "Shimano Acera M3000", "XDS 铝合金碟刹轮组", { tires: "29×2.1", popularity: 90 }),
      B(2025, "Deore", 3499, 13.8, "Shimano Deore M6100", "XDS 铝合金碟刹轮组", { tires: "29×2.2", popularity: 80 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("XDS", "MT2", {
    disc: "hardtail", years: [2025, 2026], gen: "MT2",
    frame: "X6 铝合金硬尾车架 · 29 轮径",
    fork: "SR Suntour XCR 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("松烟灰", "Pine Smoke", "#5b6266", "灰"),
      C("喜德盛红", "XDS Red", "#b5121b", "红"),
    ],
    highlights: ["X6 铝合金车架", "29 吋轮径", "气压前叉", "入门越野"],
    story: "MT2 是喜德盛面向入门越野的 29 吋硬尾，前叉和传动比英雄系列更完整。它适合已经不满足于通勤、开始跑土路和绿道支线的骑手。",
    builds: [
      B(2026, "Acera", 3599, 13.9, "Shimano Acera M3000", "XDS 铝合金碟刹轮组", { tires: "29×2.2", popularity: 84 }),
      B(2025, "Deore", 3999, 13.5, "Shimano Deore M6100", "XDS 铝合金碟刹轮组", { tires: "29×2.2", popularity: 76 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("XDS", "MT3", {
    disc: "trail", years: [2025, 2026], gen: "MT3",
    frame: "X6 铝合金硬尾车架 · 林道几何",
    fork: "RockShox Judy 120mm", frontTravel: 120, wheelSize: "29\"",
    material: "铝合金", geoOverride: TRAIL29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("苔藓绿", "Moss Green", "#4b5f3b", "绿"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["120mm 前叉", "29 吋轮径", "林道几何", "国产林道入门"],
    story: "MT3 是喜德盛入门线里最偏林道的一台：120mm 前叉、更放松的头管和宽胎，让它能应付比 XC 硬尾更粗糙的下坡。它把国产林道硬尾的价格压到了五千元内。",
    builds: [
      B(2026, "Deore", 4599, 13.6, "Shimano Deore M6100", "XDS 铝合金碟刹轮组", { tires: "29×2.4", popularity: 82 }),
      B(2025, "SLX", 5299, 13.2, "Shimano SLX M7100", "XDS 铝合金碟刹轮组", { tires: "29×2.4", popularity: 72 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Decathlon 迪卡侬 ───────────────────────── */
  mtbFamily("Decathlon", "Rockrider ST 100", {
    disc: "hardtail", years: [2025, 2026], gen: "Rockrider ST 100",
    frame: "Rockrider 铝合金硬尾车架 · 27.5",
    fork: "SR Suntour XCT 80mm", frontTravel: 80, wheelSize: "27.5\"",
    material: "铝合金", geoOverride: { ...XC275, stack: 610, headAngle: 69 },
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("迪卡侬蓝", "Decathlon Blue", "#16529b", "蓝"),
      C("荧光黄", "Fluo Yellow", "#d8c53a", "黄"),
    ],
    highlights: ["27.5 轮径", "80mm 前叉", "机械碟刹", "两千元档"],
    story: "Rockrider ST 100 是迪卡侬最典型的学生/通勤山地车：价格低、门店试骑方便、维护便宜。它不适合高强度越野，但足够覆盖日常和轻度土路。",
    builds: [
      B(2026, "8S", 1999, 14.9, "microSHIFT 1×8", "Rockrider 铝合金碟刹轮组", { tires: "27.5×2.1", popularity: 94 }),
      B(2025, "Altus", 2399, 14.5, "Shimano Altus M2000", "Rockrider 铝合金碟刹轮组", { tires: "27.5×2.1", popularity: 82 }),
    ],
    notes: NOTE,
  }),
  mtbFamily("Decathlon", "Rockrider ST 530", {
    disc: "hardtail", years: [2025, 2026], gen: "Rockrider ST 530",
    frame: "Rockrider 铝合金硬尾车架 · 29",
    fork: "SR Suntour XCR 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "铝合金", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("迪卡侬蓝", "Decathlon Blue", "#16529b", "蓝"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["29 吋轮径", "100mm 前叉", "液压碟刹", "入门越野"],
    story: "ST 530 是迪卡侬入门山地车里更认真的一档：29 吋轮径、100mm 前叉和更完整的传动，让它能应付真正的土路。它仍然便宜，但不再是“只适合通勤”的车。",
    builds: [
      B(2026, "Acera", 3999, 14.0, "Shimano Acera M3000", "Rockrider 铝合金碟刹轮组", { tires: "29×2.2", popularity: 88 }),
      B(2025, "Deore", 4599, 13.6, "Shimano Deore M6100", "Rockrider 铝合金碟刹轮组", { tires: "29×2.2", popularity: 78 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── TWITTER ───────────────────────── */
  mtbFamily("TWITTER", "Sniper", {
    disc: "hardtail", years: [2025, 2026], gen: "Sniper",
    frame: "TWITTER T800 碳纤维硬尾车架",
    fork: "RockShox Judy 100mm", frontTravel: 100, wheelSize: "29\"",
    material: "碳纤维", geoOverride: XC29,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("TWITTER 红", "Twitter Red", "#b5121b", "红"),
      C("电光蓝", "Electric Blue", "#1655c9", "蓝"),
    ],
    highlights: ["T800 碳纤维车架", "29 吋轮径", "100mm 前叉", "直销价格"],
    story: "Sniper 是 TWITTER 的碳纤维硬尾入口，用直销价格把碳架山地车拉到四千元档。它适合愿意自己调试、追求轻量车架的用户。",
    builds: [
      B(2026, "AX 12S", 3999, 11.8, "L-TWOO AX 1×12", "TWITTER 铝合金轮组", { tires: "29×2.2", popularity: 86 }),
      B(2025, "Deore", 4999, 11.4, "Shimano Deore M6100", "TWITTER 铝合金轮组", { tires: "29×2.2", popularity: 76 }),
    ],
    notes: NOTE,
  }),
];
