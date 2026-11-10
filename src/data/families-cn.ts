import { B, C, mtbFamily, roadFamily } from "./helpers";
import { geoRow } from "./geometry";

import xdsAd350Gray from "../assets/bikes/xds-ad350-gray.webp";
import xdsAd350Nebula from "../assets/bikes/xds-ad350-nebula.webp";
import xdsAd350Sky from "../assets/bikes/xds-ad350-sky.webp";
import xlabAd9Black from "../assets/bikes/xlab-ad9-black.webp";
import xlabAd9Astana from "../assets/bikes/xlab-ad9-astana.webp";
import pardusRobinEvoRed from "../assets/bikes/pardus-robin-evo-red.webp";
import pardusRobinEvoBlack from "../assets/bikes/pardus-robin-evo-black.webp";
import pardusRobinRs from "../assets/bikes/pardus-robin-rs.webp";
import pardusRobg3 from "../assets/bikes/pardus-robg3.webp";
import savaBladeR7Black from "../assets/bikes/sava-blade-r7-black.webp";
import savaBladeR7White from "../assets/bikes/sava-blade-r7-white.webp";
import savaBladeR7Green from "../assets/bikes/sava-blade-r7-green.webp";
import savaBladeR7Red from "../assets/bikes/sava-blade-r7-red.webp";
import savaAeroxBlack from "../assets/bikes/sava-aerox-black.webp";
import savaAeroxGray from "../assets/bikes/sava-aerox-gray.webp";
import savaBladeR9Black from "../assets/bikes/sava-blade-r9-black.webp";
import savaBladeR9Green from "../assets/bikes/sava-blade-r9-green.webp";
import savaGelaroBlack from "../assets/bikes/sava-gelaro-black.webp";
import savaGelaroGray from "../assets/bikes/sava-gelaro-gray.webp";
import savaTitanGreen from "../assets/bikes/sava-titan-green.webp";
import savaTitanOrange from "../assets/bikes/sava-titan-orange.webp";
import winspaceT1550Black from "../assets/bikes/winspace-t1550-black.webp";
import winspaceT1550Purple from "../assets/bikes/winspace-t1550-purple.webp";
import winspaceSlc5Black from "../assets/bikes/winspace-slc5-black.webp";
import winspaceM6Emerald from "../assets/bikes/winspace-m6-emerald.webp";

const AD350_SRC = "https://www.xidesheng.com/goods/2056272417912729602/detail";
const AD9_SRC = "https://www.xidesheng.com/goods/1964971806496309249/detail";
const PARDUS_SRC = "https://www.parduscycle.com/highway.aspx?t=1030";
const SAVA_R7_SRC = "https://savadeck-bike.com/products/sava-blade-r7-105-di2-full-carbon-road-bike-24s";
const SAVA_AEROX_SRC = "https://savadeck-bike.com/products/2026-aerox-r7-105-r7170-di2-full-carbon-road-bike";
const SAVA_R9_SRC = "https://savadeck-bike.com/products/sava-blade-slr9-dura-ace-di2-full-carbon-road-bike-24sp";
const SAVA_GELARO_SRC = "https://savadeck-bike.com/products/sava-gelaro-s8-grx820-carbon-gravel-bike-12s";
const SAVA_TITAN_SRC = "https://savadeck-bike.com/products/sava-titan-612-deore-m6100-full-suspension-carbon-mountain-bike";
const WINSPACE_T1550_SRC = "https://winspace.com.au/products/t1550-2nd-gen-winspace-road-bike-shimano-105-di2";
const WINSPACE_SLC5_SRC = "https://winspace.com.au/products/winspace-slc5-shimano-105-di2";
const WINSPACE_M6_SRC = "https://winspace.com.au/products/winspace-m6-aero-road-bike-shimano-105-di2";

const ad9Geo = [
  geoRow("XS", [155, 165], { stack: 505, reach: 371, headAngle: 70.9, seatAngle: 75.1, topTube: 504, headTube: 105, seatTube: 470, chainstay: 410, wheelbase: 970, bbDrop: 72, standover: 735, wheelRadius: 336, crank: 170, stem: 90, bar: 360 }),
  geoRow("S", [165, 175], { stack: 520, reach: 379, headAngle: 71.5, seatAngle: 74.5, topTube: 523, headTube: 118, seatTube: 503, chainstay: 410, wheelbase: 977.6, bbDrop: 72, standover: 755, wheelRadius: 336, crank: 172.5, stem: 100, bar: 360 }),
  geoRow("M", [175, 185], { stack: 534, reach: 387, headAngle: 72.5, seatAngle: 74, topTube: 540, headTube: 130, seatTube: 515, chainstay: 410, wheelbase: 982, bbDrop: 70, standover: 775, wheelRadius: 336, crank: 172.5, stem: 110, bar: 380 }),
  geoRow("L", [180, 190], { stack: 553, reach: 395, headAngle: 73, seatAngle: 73.5, topTube: 559, headTube: 148, seatTube: 543, chainstay: 410, wheelbase: 992, bbDrop: 70, standover: 795, wheelRadius: 336, crank: 172.5, stem: 120, bar: 400 }),
  geoRow("XL", [190, 200], { stack: 587, reach: 405, headAngle: 73.2, seatAngle: 73.2, topTube: 579, headTube: 171, seatTube: 568, chainstay: 410, wheelbase: 1007, bbDrop: 70, standover: 815, wheelRadius: 336, crank: 175, stem: 130, bar: 400 }),
];

const bladeGeo = [
  geoRow("XS", [156, 168], { stack: 499.95, reach: 375.55, headAngle: 71, seatAngle: 75.4, topTube: 505.77, headTube: 100, seatTube: 450, chainstay: 405, wheelbase: 974.32, bbDrop: 70, standover: 734, wheelRadius: 336, crank: 170, stem: 90, bar: 380 }),
  geoRow("S", [168, 175], { stack: 521.37, reach: 380.78, headAngle: 71.9, seatAngle: 74.8, topTube: 522.4, headTube: 118, seatTube: 480, chainstay: 405, wheelbase: 974.6, bbDrop: 70, standover: 756, wheelRadius: 336, crank: 170, stem: 100, bar: 400 }),
  geoRow("M", [175, 180], { stack: 539.69, reach: 386.36, headAngle: 72.5, seatAngle: 74.2, topTube: 539, headTube: 136, seatTube: 500, chainstay: 405, wheelbase: 980.5, bbDrop: 70, standover: 778.76, wheelRadius: 336, crank: 172.5, stem: 110, bar: 400 }),
  geoRow("L", [180, 188], { stack: 558.24, reach: 391.32, headAngle: 72.9, seatAngle: 73.6, topTube: 555.6, headTube: 154, seatTube: 520, chainstay: 405, wheelbase: 987.5, bbDrop: 70, standover: 794.92, wheelRadius: 336, crank: 172.5, stem: 120, bar: 420 }),
  geoRow("XL", [188, 198], { stack: 576.4, reach: 396.72, headAngle: 72.9, seatAngle: 73, topTube: 572.9, headTube: 173, seatTube: 540, chainstay: 405, wheelbase: 998.5, bbDrop: 70, standover: 813.43, wheelRadius: 336, crank: 175, stem: 120, bar: 420 }),
];

export const cnRoadFamilies = [
  /* ───────────────────────── XDS 喜德盛 ───────────────────────── */
  roadFamily("XDS", "AD350", {
    disc: "aero", years: [2025, 2026], gen: "AD350 2026", material: "铝合金",
    frame: "X6 二代 SLR 气动铝合金车架 · 全内走线",
    fork: "碳纤维气动前叉",
    geoOverride: { stack: 545, reach: 385, headAngle: 72, seatAngle: 74, topTube: 545, headTube: 150, seatTube: 500, chainstay: 410, wheelbase: 990, bbDrop: 70, standover: 780, forkOffset: 45, wheelRadius: 336 },
    sizes: ["48", "50", "52", "54", "56"],
    heights: [[160, 168], [168, 175], [175, 182], [182, 188], [188, 195]],
    colors: [
      C("松烟灰", "Pine Smoke", "#6f7378", "灰", xdsAd350Gray, AD350_SRC),
      C("天青白", "Sky White", "#e9eef0", "白", xdsAd350Sky, AD350_SRC),
      C("星云白", "Nebula White", "#f1eee6", "白", xdsAd350Nebula, AD350_SRC),
    ],
    highlights: ["X6 二代 SLR 气动铝架，全内走线", "L-TWOO RX 2×12 与油压碟刹", "Branta 破风一体把、碳纤维座管"],
    story: "AD350 是喜德盛把气动公路门槛压到铝价位的答案：车架用 X6 二代 SLR 抽管，线管全藏，套件与座舱按整车完成度配套，适合第一次认真骑快的人。",
    builds: [
      B(2026, "L-TWOO RX 12S", 4299, 9.8, "L-TWOO RX 2x12", "Branta 铝合金碟刹轮组", { tires: "700×30C", popularity: 82 }),
    ],
    notes: "官方公布车架、套件与配色，中国区建议零售价未公开，4299 元为参考价；几何为参考模型，非官方逐码表。",
  }),
  /* ───────────────────────── X-LAB ───────────────────────── */
  roadFamily("X-LAB", "AD9", {
    disc: "aero", years: [2025, 2026], gen: "AD9",
    frame: "X-LAB 旗舰气动碳纤维车架 · 全内走线",
    fork: "X-LAB 全碳气动前叉",
    geoTable: ad9Geo, geoSource: AD9_SRC, geoConfidence: "official",
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[155, 165], [165, 175], [175, 185], [180, 190], [190, 200]],
    colors: [
      C("黑武士", "Black Samurai", "#17191c", "黑", xlabAd9Black, AD9_SRC),
      C("阿斯塔纳世界队版", "Astana Team", "#3fb6e8", "蓝", xlabAd9Astana, AD9_SRC),
    ],
    highlights: ["Dura-Ace Di2 R9270 12 速", "Vision Metron 60 SL 碳轮", "官方 S 码整车 7.2kg（不含脚踏）"],
    story: "AD9 是喜德盛实验室的旗舰气动车，几何直接按世巡赛队版思路设定：低 Stack、长 Reach、极短头管，把车手压进风里。",
    builds: [
      B(2026, "Dura-Ace Di2 R9270", 59999, 7.2, "Shimano Dura-Ace Di2 R9270", "Vision Metron 60 SL", { tires: "MICHELIN PRO 5 700×28C", popularity: 90 }),
    ],
    notes: "官方公布完整配置、整车重量与逐码几何，未公布中国区建议零售价，59999 元为参考价；几何为品牌官方逐码表（含拖拽距、前轴距原始数据）。",
  }),
  roadFamily("X-LAB", "AD8", {
    disc: "aero", years: [2025, 2026], gen: "AD8",
    frame: "X-LAB 气动碳纤维车架 · 全内走线",
    fork: "X-LAB 全碳气动前叉",
    geoOverride: { stack: 540, reach: 390, headAngle: 72.5, seatAngle: 73.5, topTube: 545, headTube: 145, seatTube: 505, chainstay: 410, wheelbase: 985, bbDrop: 70, standover: 780, forkOffset: 43, wheelRadius: 336 },
    sizes: ["48", "50", "52", "54", "56"],
    heights: [[160, 168], [168, 175], [175, 182], [182, 188], [188, 195]],
    colors: [
      C("黑武士", "Black Samurai", "#17191c", "黑"),
      C("珍珠白", "Pearl White", "#ecece7", "白"),
    ],
    highlights: ["105 Di2 R7170 12 速电子变速", "BRANTA C50 TEAM 碳轮", "与 AD9 同族的气动管型"],
    story: "AD8 把 AD9 的气动轮廓下放到 105 Di2 价位，车架保留全内走线与一体座舱接口，是 X-LAB 产品线里更常被真实骑走的那台。",
    builds: [
      B(2026, "105 Di2 R7170", 26980, 7.9, "Shimano 105 Di2 R7170", "BRANTA C50 TEAM", { tires: "700×28C", popularity: 84 }),
    ],
    notes: "26980 元为官方公布的 AD8 参考价；重量为估算；几何为参考模型（AD8 未公布逐码表，不套用 AD9 官方数据）。",
  }),

  /* ───────────────────────── PARDUS 瑞豹 ───────────────────────── */
  roadFamily("PARDUS", "ROBIN EVO", {
    disc: "race", years: [2025, 2026], gen: "ROBIN EVO",
    frame: "PARDUS 综合型碳纤维车架 · M 码 710g",
    fork: "PARDUS 全碳前叉",
    geoOverride: { stack: 550, reach: 390, headAngle: 72.5, seatAngle: 73.5, topTube: 545, headTube: 150, seatTube: 510, chainstay: 410, wheelbase: 985, bbDrop: 70, standover: 785, forkOffset: 45, wheelRadius: 336 },
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
    heights: [[150, 158], [158, 165], [165, 172], [172, 179], [179, 186], [186, 193]],
    colors: [
      C("竞速红", "Racing Red", "#c8102e", "红", pardusRobinEvoRed, PARDUS_SRC),
      C("曜石黑", "Obsidian Black", "#1b1d20", "黑", pardusRobinEvoBlack, PARDUS_SRC),
    ],
    highlights: ["M 码车架 710g，WING 碳纤维一体把", "全隐藏内走线", "RED AXS / FORCE AXS 双版本"],
    story: "ROBIN EVO 是瑞豹的综合型旗舰：不追求极端气动，也不做纯爬坡轻量，而是把 710g 车架、全隐藏走线和一体把组合成一台能突围也能冲刺的车。",
    builds: [
      B(2026, "RED AXS", 59999, 7.2, "SRAM RED AXS", "PARDUS 碳纤维轮组", { tires: "700×28C", popularity: 86 }),
      B(2026, "FORCE AXS", 39999, 7.4, "SRAM Force AXS", "PARDUS 碳纤维轮组", { tires: "700×28C", popularity: 80 }),
    ],
    notes: "官方公布车架重量、配置与中国区价格；几何为参考模型，非官方逐码表。",
  }),
  roadFamily("PARDUS", "ROBIN RS", {
    disc: "race", years: [2025, 2026], gen: "ROBIN RS",
    frame: "PARDUS 次顶级碳纤维车架 · 全隐藏内走线",
    fork: "PARDUS 全碳前叉",
    geoOverride: { stack: 555, reach: 385, headAngle: 72.3, seatAngle: 73.5, topTube: 548, headTube: 155, seatTube: 515, chainstay: 410, wheelbase: 990, bbDrop: 70, standover: 790, forkOffset: 45, wheelRadius: 336 },
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
    heights: [[150, 158], [158, 165], [165, 172], [172, 179], [179, 186], [186, 193]],
    colors: [C("银灰", "Silver Grey", "#b8bcc2", "银", pardusRobinRs, PARDUS_SRC)],
    highlights: ["全隐藏内走线", "Rival AXS 12 速", "次顶级碳纤维平台"],
    story: "ROBIN RS 是 EVO 的次顶级兄弟：保留一体把与隐藏走线的观感，用更易接近的套件把价格拉下来。",
    builds: [
      B(2026, "Rival AXS", 12999, 8.2, "SRAM Rival AXS", "PARDUS 铝合金轮组", { tires: "700×28C", popularity: 78 }),
    ],
    notes: "官方公布 12999 元与配置；重量为估算；几何为参考模型。",
  }),
  roadFamily("PARDUS", "ROBG3 AL", {
    disc: "allroad", years: [2025, 2026], gen: "ROBG3 AL", material: "铝合金",
    frame: "6061 T6 铝合金全能公路车架 · 38C 胎容",
    fork: "全碳纤维前叉",
    geoOverride: { stack: 585, reach: 380, headAngle: 71.5, seatAngle: 73.5, topTube: 560, headTube: 175, seatTube: 535, chainstay: 425, wheelbase: 1010, bbDrop: 72, standover: 800, forkOffset: 48, wheelRadius: 336 },
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[155, 163], [163, 170], [170, 177], [177, 184], [184, 191]],
    colors: [C("雾银", "Mist Silver", "#c7c9c7", "银", pardusRobg3, PARDUS_SRC)],
    highlights: ["6061 T6 铝合金车架", "38C 胎容，公路/碎石两用", "L-TWOO eGR 1×12 传动"],
    story: "ROBG3 AL 是第三代全能铝公路：几何比竞赛车更稳，胎容放到 38C，适合通勤、长途和周末的轻度碎石。",
    builds: [
      B(2026, "eGR 1×12", 3999, 9.6, "L-TWOO eGR 1x12", "PARDUS 铝合金轮组", { tires: "700×38C", popularity: 76 }),
    ],
    notes: "官方公布 3999 元、6061 T6 车架与 38C 胎容；重量为估算；几何为参考模型。",
  }),

  /* ───────────────────────── SAVA 萨瓦 ───────────────────────── */
  roadFamily("SAVA", "Blade R7", {
    disc: "aero", years: [2025, 2026], gen: "Blade R7",
    frame: "T800+T1000 碳纤维气动车架 · 全内走线",
    fork: "SAVA 全碳气动前叉",
    geoTable: bladeGeo, geoSource: SAVA_R7_SRC, geoConfidence: "official",
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[156, 168], [168, 175], [175, 180], [180, 188], [188, 198]],
    colors: [
      C("竞速黑", "Racing Black", "#17191c", "黑", savaBladeR7Black, SAVA_R7_SRC),
      C("珍珠白", "Pearl White", "#ecece7", "白", savaBladeR7White, SAVA_R7_SRC),
      C("翡翠绿", "Emerald Green", "#1f6b4f", "绿", savaBladeR7Green, SAVA_R7_SRC),
      C("火焰红", "Flame Red", "#b3202a", "红", savaBladeR7Red, SAVA_R7_SRC),
    ],
    highlights: ["T800+T1000 碳纤维车架/前叉/一体把", "105 Di2 12 速，50-34T / 11-34T", "官方整车 7.4kg，UCI 认证"],
    story: "Blade R7 是萨瓦气动公路的主力：一体把、全内走线、碳轮和 105 Di2 一次给齐，7.4kg 的整车重量让它在同价位很难被忽略。",
    builds: [
      B(2026, "105 Di2 12S", 27499, 7.4, "Shimano 105 Di2 R7170", "SAVA 碳纤维轮组", { tires: "700×28C", popularity: 84 }),
    ],
    notes: "官方定价 3799 美元，按 1:7.2 折算为 27499 元参考价；车架/套件/重量与逐码几何均来自官方页面。",
  }),
  roadFamily("SAVA", "AeroX R7", {
    disc: "aero", years: [2025, 2026], gen: "AeroX R7",
    frame: "全碳纤维气动车架 · T47 中轴",
    fork: "SAVA 全碳气动前叉",
    geoOverride: { stack: 530, reach: 385, headAngle: 72.5, seatAngle: 73.5, topTube: 540, headTube: 130, seatTube: 500, chainstay: 410, wheelbase: 985, bbDrop: 72, standover: 780, forkOffset: 45, wheelRadius: 336 },
    sizes: ["44", "47", "51", "54", "56"],
    heights: [[155, 161], [161, 168], [168, 175], [175, 182], [182, 189]],
    colors: [
      C("曜石黑", "Obsidian Black", "#17191c", "黑", savaAeroxBlack, SAVA_AEROX_SRC),
      C("陨石灰", "Meteor Grey", "#7b8084", "灰", savaAeroxGray, SAVA_AEROX_SRC),
    ],
    highlights: ["全碳气动车架与 50mm 碳轮", "105 Di2 12 速，T47 中轴", "全内走线，UCI 认证"],
    story: "AeroX R7 比 Blade 更激进：更低的车头、更长的气动管型，配 50mm 碳轮，目标是把平路巡航速度做上去。",
    builds: [
      B(2026, "105 Di2 12S", 19499, 7.8, "Shimano 105 Di2 R7170", "SAVA 50mm 碳纤维轮组", { tires: "700×28C", popularity: 80 }),
    ],
    notes: "官方定价 2699 美元，按 1:7.2 折算为 19499 元参考价；几何为参考模型，非官方逐码表。",
  }),
  roadFamily("SAVA", "Blade R9", {
    disc: "aero", years: [2025, 2026], gen: "Blade R9",
    frame: "CFR 碳纤维气动车架 · 全内走线",
    fork: "SAVA 全碳气动前叉",
    geoTable: bladeGeo, geoSource: SAVA_R9_SRC, geoConfidence: "official",
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[156, 168], [168, 175], [175, 180], [180, 188], [188, 198]],
    colors: [
      C("翡翠绿", "Emerald Green", "#1f6b4f", "绿", savaBladeR9Green, SAVA_R9_SRC),
      C("竞速黑", "Racing Black", "#17191c", "黑", savaBladeR9Black, SAVA_R9_SRC),
    ],
    highlights: ["CFR 碳纤维车架与碳轮", "Dura-Ace Di2 2×12", "官方整车 7.29kg，UCI 认证"],
    story: "Blade R9 是 Blade 平台的顶配：CFR 碳布、Dura-Ace Di2 和一体座舱，把空气动力与重量同时推到萨瓦的量产上限。",
    builds: [
      B(2026, "Dura-Ace Di2 12S", 30499, 7.29, "Shimano Dura-Ace Di2 R9270", "SAVA 碳纤维轮组", { tires: "700×28C", popularity: 86 }),
    ],
    notes: "官方定价 4199 美元，按 1:7.2 折算为 30499 元参考价；车架平台与 Blade R7 共用官方逐码几何（几何页标注 R7/R9 同平台）。",
  }),
  roadFamily("SAVA", "Gelaro S8", {
    disc: "gravel", years: [2025, 2026], gen: "Gelaro S8",
    frame: "T800 全碳纤维砾石车架 · 最大 45C 胎容",
    fork: "全碳砾石前叉",
    geoOverride: { stack: 600, reach: 380, headAngle: 71, seatAngle: 73.5, topTube: 565, headTube: 165, seatTube: 525, chainstay: 430, wheelbase: 1030, bbDrop: 75, standover: 805, forkOffset: 50, wheelRadius: 350 },
    sizes: ["47", "49", "51", "53", "55", "58"],
    heights: [[155, 163], [163, 170], [170, 177], [177, 183], [183, 190], [190, 198]],
    colors: [
      C("经典黑", "Classic Black", "#17191c", "黑", savaGelaroBlack, SAVA_GELARO_SRC),
      C("迷雾灰", "Mist Grey", "#9aa0a2", "灰", savaGelaroGray, SAVA_GELARO_SRC),
    ],
    highlights: ["T800 全碳车架/前叉", "GRX820 1×12 砾石套件", "700×40C 原厂胎，最大 45C"],
    story: "Gelaro S8 把萨瓦的碳纤维工艺带到砾石路面：40C 原厂胎、1×12 GRX 和更稳的几何，适合把公路骑行延伸进土路。",
    builds: [
      B(2026, "GRX820 1×12", 15999, 9.2, "Shimano GRX RX820", "SAVA 铝合金砾石轮组", { tires: "700×40C", popularity: 77 }),
    ],
    notes: "官方定价 2199 美元，按 1:7.2 折算为 15999 元参考价；重量为估算；几何为参考模型。",
  }),

  /* ───────────────────────── WINSPACE 银贝斯 ───────────────────────── */
  roadFamily("WINSPACE", "T1550 Gen2", {
    disc: "race", years: [2025, 2026], gen: "T1550 Gen2",
    frame: "T1000+T800 一体成型碳纤维车架 · ACR 全内走线",
    fork: "WINSPACE 全碳前叉",
    geoOverride: { stack: 545, reach: 395, headAngle: 72.5, seatAngle: 73.5, topTube: 545, headTube: 150, seatTube: 515, chainstay: 410, wheelbase: 985, bbDrop: 70, standover: 785, forkOffset: 45, wheelRadius: 336 },
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[155, 163], [163, 170], [170, 177], [177, 184], [184, 191]],
    colors: [
      C("幻彩紫", "Chameleon Purple", "#5b3f8f", "紫", winspaceT1550Purple, WINSPACE_T1550_SRC),
      C("风味黑", "Flavoured Black", "#15161a", "黑", winspaceT1550Black, WINSPACE_T1550_SRC),
    ],
    highlights: ["T1000+T800 一体成型车架", "ACR 全内走线与 T47 中轴", "UCI 认证，优化后的激进竞赛几何"],
    story: "T1550 Gen2 是银贝斯的竞赛平台：一体成型碳布、T47 螺纹中轴和 ACR 全内走线，几何比上一代更激进，却保留了可调空间。",
    builds: [
      B(2026, "105 Di2 12S", 36999, 8.1, "Shimano 105 Di2 R7170", "WINSPACE HYPER 碳纤维轮组", { tires: "700×28C", popularity: 82 }),
    ],
    notes: "澳洲官网 7790 澳元起，按 1:4.75 折算为 36999 元参考价；重量为估算；几何为参考模型。",
  }),
  roadFamily("WINSPACE", "SLC5", {
    disc: "climbing", years: [2025, 2026], gen: "SLC5",
    frame: "M46+M65+T800+T1100 碳纤维车架 · T47",
    fork: "WINSPACE 全碳前叉",
    geoOverride: { stack: 540, reach: 390, headAngle: 72.5, seatAngle: 73.5, topTube: 545, headTube: 145, seatTube: 510, chainstay: 410, wheelbase: 980, bbDrop: 72, standover: 780, forkOffset: 45, wheelRadius: 336 },
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[155, 163], [163, 170], [170, 177], [177, 184], [184, 191]],
    colors: [C("黑金", "Black Gold", "#191714", "金", winspaceSlc5Black, WINSPACE_SLC5_SRC)],
    highlights: ["M46/M65/T800/T1100 混合碳布", "HYPER 一体把与气动座管", "Wishbone 陶瓷 T47 中轴"],
    story: "SLC5 是银贝斯的轻量爬坡取向公路车：不同模量碳布分区铺层，配一体把与陶瓷 T47，目标是把刚性留在五通、把重量留在山上。",
    builds: [
      B(2026, "105 Di2 12S", 44999, 7.6, "Shimano 105 Di2 R7170", "WINSPACE HYPER 碳纤维轮组", { tires: "700×28C", popularity: 79 }),
    ],
    notes: "澳洲官网 9490 澳元起，按 1:4.75 折算为 44999 元参考价；重量为估算；几何为参考模型。",
  }),
  roadFamily("WINSPACE", "M6", {
    disc: "aero", years: [2025, 2026], gen: "M6",
    frame: "T700+T800+M40+M60 碳纤维气动车架 · FSA ACR",
    fork: "WINSPACE 全碳气动前叉",
    geoOverride: { stack: 545, reach: 390, headAngle: 73, seatAngle: 73.5, topTube: 545, headTube: 145, seatTube: 505, chainstay: 410, wheelbase: 985, bbDrop: 70, standover: 780, forkOffset: 45, wheelRadius: 336 },
    sizes: ["XS", "S", "M", "L", "XL"],
    heights: [[155, 163], [163, 170], [170, 177], [177, 184], [184, 191]],
    colors: [C("翡翠湖", "Emerald Lake", "#1e6f63", "绿", winspaceM6Emerald, WINSPACE_M6_SRC)],
    highlights: ["M 码车架约 900g", "FSA ACR 全内走线，最大 32C", "UNAAS Hard D50 碳轮"],
    story: "M6 是银贝斯的气动全能车：车架约 900g，管型按风洞优化，同时把胎容放到 32C，让它在糟糕路面上也不至于太硬。",
    builds: [
      B(2026, "105 Di2 12S", 35499, 8.0, "Shimano 105 Di2 R7170", "UNAAS Hard D50 碳纤维轮组", { tires: "700×30C", popularity: 81 }),
    ],
    notes: "澳洲官网 7490 澳元起，按 1:4.75 折算为 35499 元参考价；重量为估算；几何为参考模型。",
  }),
];

export const cnMtbFamilies = [
  mtbFamily("XDS", "侠客 600", {
    disc: "hardtail", years: [2024, 2025], gen: "侠客 600", material: "铝合金",
    frame: "X6 铝合金硬尾车架 · 27.5 轮径",
    fork: "气压锁死前叉 100mm",
    wheelSize: '27.5"',
    geoOverride: { stack: 600, reach: 435, headAngle: 68, seatAngle: 74.5, topTube: 600, headTube: 110, seatTube: 430, chainstay: 435, wheelbase: 1120, bbDrop: 55, standover: 750, forkOffset: 44, wheelRadius: 350 },
    frontTravel: 100,
    sizes: ["15.5", "17", "19"],
    heights: [[160, 170], [170, 180], [180, 190]],
    colors: [
      C("曜石黑橙", "Obsidian Orange", "#1b1d20", "黑"),
      C("深海蓝", "Deep Sea Blue", "#1e3a5f", "蓝"),
    ],
    highlights: ["X6 铝合金车架，27.5 轮径", "气压锁死前叉与油压碟刹", "SRAM NX 1×11 传动"],
    story: "侠客 600 是喜德盛入门硬尾的主力：结构简单、维护便宜，27.5 轮径在城市与林道之间更灵活，适合把第一台山地车骑坏。",
    builds: [
      B(2025, "SRAM NX 11S", 3398, 13.8, "SRAM NX Eagle", "Branta 铝合金轮组", { tires: "27.5×2.1", popularity: 72 }),
    ],
    notes: "参考价与重量来自渠道资料；几何为参考模型，非官方逐码表。",
  }),

  /* ───────────────────────── PARDUS 瑞豹 ───────────────────────── */
  mtbFamily("PARDUS", "TIFONE", {
    disc: "trail", years: [2025, 2026], gen: "TIFONE",
    frame: "全碳纤维 XC 软尾车架 · 120mm 后行程",
    fork: "RockShox SID Ultimate 120mm",
    frontTravel: 120, rearTravel: 120,
    geoOverride: { stack: 615, reach: 465, headAngle: 66, seatAngle: 76.2, topTube: 615, headTube: 115, seatTube: 455, chainstay: 435, wheelbase: 1170, bbDrop: 45, standover: 755, forkOffset: 44, wheelRadius: 368 },
    sizes: ["S", "M", "L"],
    heights: [[165, 175], [175, 185], [185, 195]],
    colors: [
      C("竞速黑", "Race Black", "#17191c", "黑"),
      C("战队蓝", "Team Blue", "#1f4fa0", "蓝"),
    ],
    highlights: ["全碳纤维软尾车架", "120mm 前后行程", "SID Ultimate 前叉与 GX/XX SL 双版本"],
    story: "TIFONE 是瑞豹的全避震 XC 车：120mm 行程、全碳车架，配置从 GX Eagle 一直给到 XX SL，目标是把 XC 赛道的效率和林道的容错放在同一台车上。",
    builds: [
      B(2026, "S2 / SID ULT + GX Eagle", 39999, 11.8, "SRAM GX Eagle", "PARDUS 碳纤维轮组", { shock: "RockShox SIDLuxe Ultimate", tires: "29×2.35", popularity: 74 }),
      B(2026, "S1 / SID ULT FA + XX SL", 59999, 10.9, "SRAM XX SL Eagle AXS", "PARDUS 碳纤维轮组", { shock: "RockShox SIDLuxe Ultimate Flight Attendant", tires: "29×2.35", popularity: 78 }),
    ],
    notes: "官方公布配置与参考价；几何为参考模型，非官方逐码表。",
  }),

  /* ───────────────────────── SAVA 萨瓦 ───────────────────────── */
  mtbFamily("SAVA", "Titan 612", {
    disc: "trail", years: [2025, 2026], gen: "Titan 612",
    frame: "T800 碳纤维全避震车架",
    fork: "气压前叉 120mm",
    frontTravel: 120, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 610, reach: 455, headAngle: 66.5, seatAngle: 76, topTube: 605, headTube: 115, seatTube: 440, chainstay: 435, wheelbase: 1165, bbDrop: 45, standover: 750, forkOffset: 44, wheelRadius: 368 },
    sizes: ["15.5", "17", "19"],
    heights: [[160, 170], [170, 180], [180, 190]],
    colors: [
      C("烈焰橙", "Fiery Orange", "#d9541f", "橙", savaTitanOrange, SAVA_TITAN_SRC),
      C("山野绿", "Mountain Green", "#2f5c3a", "绿", savaTitanGreen, SAVA_TITAN_SRC),
    ],
    highlights: ["T800 碳纤维车架", "Deore M6100 12 速", "DNM 后避震 + 气压前叉，IV3 四活塞刹车"],
    story: "Titan 612 是萨瓦的入门全避震：碳纤维车架配 120mm 前后行程，套件用 Deore M6100，把软尾的门槛压到一万元出头。",
    builds: [
      B(2026, "Deore M6100 12S", 11199, 15.56, "Shimano Deore M6100", "SAVA 铝合金轮组", { shock: "DNM 气压后避震 120mm", tires: "29×2.35", popularity: 73 }),
    ],
    notes: "官方定价 1549 美元，按 1:7.2 折算为 11199 元参考价；官方同时提供 27.5 轮径选项；几何为参考模型。",
  }),
];
