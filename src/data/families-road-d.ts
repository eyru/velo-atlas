import { B, C, roadFamily } from "./helpers";
import type { FamilyRaw } from "./types";

export const roadFamiliesD: FamilyRaw[] = [
  /* ───────────────────────── Specialized ───────────────────────── */
  roadFamily("Specialized", "Crux", {
    disc: "gravel", years: [2023, 2026], gen: "Crux",
    frame: "FACT 11r 碳纤维车架 · 竞赛 Gravel 平台",
    fork: "Crux 全碳前叉",
    geoOverride: { stack: 585, reach: 395, headAngle: 71.5, seatAngle: 73.5, chainstay: 425, wheelbase: 1028 },
    colors: [
      C("熔岩红", "Lava Red", "#c0202b", "红"),
      C("碳晶黑", "Carbon Crystal", "#17191c", "黑"),
      C("沙丘棕", "Dune Brown", "#a98c6b", "棕"),
      C("冰川白", "Glacier White", "#e6e3db", "白"),
    ],
    highlights: ["FACT 11r 碳纤维，竞赛级砾石平台", "45mm 胎容与 425mm 短后下叉并存", "S-Works 整车控制在 8.0 kg"],
    story: "Crux 把公路越野的竞赛基因直接摊开：短后下叉、低重心，让碎石路也被骑出绕圈赛的锐利感。",
    builds: [
      B(2026, "S-Works Crux", 78000, 8.0, "SRAM RED AXS", "Roval Terra CLX II", { popularity: 84 }),
      B(2025, "Crux Expert", 52800, 8.3, "SRAM Force XPLR AXS", "Roval Terra C", { popularity: 78 }),
      B(2024, "Crux Comp", 36800, 8.7, "Shimano GRX RX820", "DT Swiss PR 1600", { popularity: 73 }),
    ],
  }),
  roadFamily("Specialized", "Tarmac SL7", {
    disc: "race", years: [2020, 2023], gen: "Tarmac SL7",
    frame: "FACT 10r 碳纤维车架 · 上一代竞赛平台",
    fork: "Tarmac SL7 全碳前叉",
    geoOverride: { stack: 548, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 987 },
    colors: [
      C("碳晶黑", "Carbon Crystal", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e7e4dc", "白"),
      C("电光蓝", "Electric Blue", "#1a4fb8", "蓝"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["上一代全能竞赛标杆，二手流通量最大", "气动与重量的平衡点，如今依旧能打", "清仓价约为 SL8 同配置的六折"],
    story: "SL7 是那台把“全能”重新定义的车：它不极端，但每一项都刚好够用——这也是它至今仍是二手市场硬通货的原因。",
    builds: [
      B(2023, "S-Works Dura-Ace", 56800, 7.2, "Shimano Dura-Ace Di2 R9270", "Roval Rapide CL II", { popularity: 84 }),
      B(2022, "Pro Ultegra Di2", 39800, 7.8, "Shimano Ultegra Di2 R8170", "Roval Rapide CL II", { popularity: 80 }),
      B(2021, "Comp 105", 26800, 8.0, "Shimano 105 R7000", "Roval C38", { popularity: 75 }),
    ],
  }),

  /* ───────────────────────── Santa Cruz ───────────────────────── */
  roadFamily("Santa Cruz", "Stigmata", {
    disc: "gravel", years: [2023, 2026], gen: "Stigmata CC",
    frame: "CC 碳纤维车架 · Gravel 平台",
    fork: "Stigmata 全碳前叉",
    geoOverride: { stack: 588, reach: 388, headAngle: 71.6, seatAngle: 73.5, chainstay: 430, wheelbase: 1034 },
    colors: [
      C("芥末黄", "Mustard", "#c8a13a", "黄"),
      C("冰川蓝", "Glacier Blue", "#5b8ea8", "蓝"),
      C("碳黑", "Carbon Black", "#181a1d", "黑"),
      C("橄榄绿", "Olive", "#4d5638", "绿"),
    ],
    highlights: ["山地品牌做 gravel，容错率天生更高", "45mm 胎容与多安装位", "后三角为长途舒适性做了妥协"],
    story: "Stigmata 是 Santa Cruz 少见的公路产品线：几何不激进，但车架余量和容错率明显更像一台山地车。",
    builds: [
      B(2026, "CC Force XPLR", 62800, 8.3, "SRAM Force XPLR AXS", "Reserve 30", { popularity: 73 }),
      B(2025, "CC GRX 820", 46800, 8.6, "Shimano GRX RX820", "Reserve 30", { popularity: 69 }),
      B(2023, "CC Rival AXS", 34800, 8.9, "SRAM Rival AXS", "Reserve 30", { popularity: 64 }),
    ],
  }),

  /* ───────────────────────── Cervélo ───────────────────────── */
  roadFamily("Cervélo", "Soloist", {
    disc: "race", years: [2023, 2026], gen: "Soloist",
    frame: "Cervélo 碳纤维车架 · 全能竞赛平台",
    fork: "Soloist 全碳前叉",
    geoOverride: { stack: 548, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 988 },
    colors: [
      C("碳晶黑", "Carbon Crystal", "#16181b", "黑"),
      C("冰川白", "Glacier White", "#e7e4dc", "白"),
      C("湖水蓝", "Lake Blue", "#2f6f8f", "蓝"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["S5 气动管型下放到全能平台", "车架约 800g，爬坡不再拖后腿", "比 S5 轻、比 R5 气动"],
    story: "Soloist 是 Cervélo 对“一台车打天下”的回应：风洞数据不必顶尖，但爬坡、下坡和冲刺都不能掉队。",
    builds: [
      B(2026, "Dura-Ace Di2", 78800, 7.3, "Shimano Dura-Ace Di2 R9270", "Reserve 52/63", { popularity: 82 }),
      B(2025, "Ultegra Di2", 52800, 7.7, "Shimano Ultegra Di2 R8170", "Reserve 52/63", { popularity: 78 }),
      B(2023, "105 Di2", 33800, 8.0, "Shimano 105 Di2 R7170", "DT Swiss PR 1600", { popularity: 71 }),
    ],
  }),

  /* ───────────────────────── Pinarello ───────────────────────── */
  roadFamily("Pinarello", "Dogma X", {
    disc: "endurance", years: [2024, 2026], gen: "Dogma X",
    frame: "Torayca T1100 碳纤维车架 · 耐力旗舰平台",
    fork: "Dogma X Onda 全碳前叉",
    geoOverride: { stack: 590, reach: 385, headAngle: 72, seatAngle: 73.5, chainstay: 415, wheelbase: 1005 },
    colors: [
      C("皮纳瑞罗蓝", "Pinarello Blue", "#1d3f8f", "蓝"),
      C("哑光黑", "Matte Black", "#15171a", "黑"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
      C("金属银", "Metallic Silver", "#a3a7aa", "银"),
    ],
    highlights: ["耐力几何与气动管型的折中方案", "35mm 胎容，为长距离舒适性让路", "Dogma 家族里最不像赛车的一台"],
    story: "Dogma X 是 Pinarello 少见地把“舒服”放在“快”之前的一台：几何放松、胎容放大，车架却仍保留 Dogma 的刚性底子。",
    builds: [
      B(2026, "Dura-Ace Di2", 98800, 7.7, "Shimano Dura-Ace Di2 R9270", "Most Ultra 50", { popularity: 79 }),
      B(2025, "Ultegra Di2", 66800, 8.0, "Shimano Ultegra Di2 R8170", "Most Ultra 50", { popularity: 74 }),
    ],
  }),
  roadFamily("Pinarello", "Dogma F12", {
    disc: "aero", years: [2020, 2022], gen: "Dogma F12",
    frame: "Torayca T1100 碳纤维车架 · 上一代气动旗舰",
    fork: "Dogma F12 Onda 全碳前叉",
    geoOverride: { stack: 552, reach: 390, headAngle: 72.8, seatAngle: 73.5, chainstay: 408, wheelbase: 990 },
    colors: [
      C("皮纳瑞罗蓝", "Pinarello Blue", "#1d3f8f", "蓝"),
      C("哑光黑", "Matte Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["英力士车队的环法战车", "非对称车架与 Onda 前叉的集大成", "二手价已跌进中端碳车区间"],
    story: "F12 是 Dogma 家族最后一次把“气动”和传统意式线条放在一起的尝试，之后的 Dogma F 变得更整合，也更贵。",
    builds: [
      B(2022, "Dura-Ace Di2", 46800, 7.4, "Shimano Dura-Ace Di2 R9270", "Most Ultra 50", { popularity: 76 }),
      B(2021, "Ultegra Di2", 32800, 7.9, "Shimano Ultegra Di2 R8170", "Most Ultra 50", { popularity: 71 }),
      B(2020, "Record 12", 27800, 8.0, "Campagnolo Record 12", "Fulcrum Speed 42", { popularity: 66 }),
    ],
  }),

  /* ───────────────────────── Trek ───────────────────────── */
  roadFamily("Trek", "Domane AL", {
    disc: "endurance", years: [2023, 2026], gen: "Domane AL",
    material: "铝合金",
    frame: "100 系列 Alpha 铝合金车架",
    fork: "Domane AL 全碳前叉",
    geoOverride: { stack: 590, reach: 378, headAngle: 71.8, seatAngle: 73.5, chainstay: 420, wheelbase: 1008 },
    colors: [
      C("哑光黑", "Matte Black", "#16181b", "黑"),
      C("石墨灰", "Graphite", "#5f6468", "灰"),
      C("深海蓝", "Deep Blue", "#1d344b", "蓝"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["铝合金入门耐力车的基本盘", "38mm 胎容，兼容碎石与通勤", "与 Domane 同源的耐力几何"],
    story: "Domane AL 是很多人第一台“能骑远”的公路车：铝架不谈轻量，但几何、胎容和价格都踩在实用主义的点上。",
    builds: [
      B(2026, "AL 5", 9980, 9.0, "Shimano 105 R7100", "Bontrager Paradigm Comp", { popularity: 74 }),
      B(2025, "AL 4", 7980, 9.2, "Shimano Tiagra 4720", "Bontrager Paradigm Comp", { popularity: 70 }),
      B(2026, "AL 3", 6980, 9.4, "Shimano Tiagra 4720", "Bontrager Paradigm Comp", { popularity: 82 }),
      B(2024, "AL 2", 5480, 9.7, "Shimano Sora R3000", "Bontrager Paradigm Comp", { popularity: 91 }),
      B(2023, "AL 2", 5680, 9.6, "Shimano Tiagra 4720", "Bontrager Paradigm Comp", { popularity: 65 }),
    ],
  }),
  roadFamily("Trek", "Madone Gen 7", {
    disc: "aero", years: [2022, 2023], gen: "Madone Gen 7",
    frame: "OCLV 800 碳纤维车架 · IsoFlow 气动平台",
    fork: "Madone Gen 7 全碳气动前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 991 },
    colors: [
      C("哑光黑", "Matte Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("深海蓝", "Deep Blue", "#183b63", "蓝"),
    ],
    highlights: ["IsoFlow 座管开孔，Gen 7 的标志性设计", "气动优先，重量比 Gen 8 更吃亏", "清仓价已接近同级耐力车"],
    story: "Gen 7 是被 Gen 8 迅速取代的一代：IsoFlow 造型足够激进，但“气动与轻量”没做好的部分，最后都写进了清仓价。",
    builds: [
      B(2023, "SLR 9 Dura-Ace", 58800, 7.1, "Shimano Dura-Ace Di2 R9270", "Bontrager Aeolus RSL 51", { popularity: 78 }),
      B(2022, "SL 7 Ultegra", 34800, 7.9, "Shimano Ultegra Di2 R8170", "Bontrager Aeolus Pro 51", { popularity: 73 }),
    ],
  }),

  /* ───────────────────────── Giant ───────────────────────── */
  roadFamily("Giant", "Contend", {
    disc: "endurance", years: [2023, 2026], gen: "Contend",
    material: "铝合金",
    frame: "ALUXX 铝合金车架",
    fork: "Contend 全碳前叉",
    geoOverride: { stack: 592, reach: 376, headAngle: 72, seatAngle: 73.5, chainstay: 415, wheelbase: 1002 },
    colors: [
      C("竞速黑", "Race Black", "#17191c", "黑"),
      C("珠光白", "Pearl White", "#e9e6de", "白"),
      C("捷安特蓝", "Giant Blue", "#0055a5", "蓝"),
    ],
    highlights: ["入门价位里最完整的产品线", "D-Fuse 座管吸收细碎震动", "32mm 胎容，兼顾通勤与周末"],
    story: "Contend 是 Giant 的销量担当：没有惊喜，也没有短板，把“入门第一台公路车”这件事做得足够稳妥。",
    builds: [
      B(2026, "1", 8980, 8.9, "Shimano 105 R7100", "Giant P-R2", { popularity: 70 }),
      B(2025, "2", 6980, 9.2, "Shimano Tiagra 4720", "Giant P-R2", { popularity: 66 }),
      B(2023, "3", 5480, 9.5, "Shimano Tiagra 4720", "Giant P-R2", { popularity: 62 }),
    ],
  }),

  /* ───────────────────────── Colnago ───────────────────────── */
  roadFamily("Colnago", "V3Rs", {
    disc: "race", years: [2021, 2023], gen: "V3Rs",
    frame: "Colnago 碳纤维车架 · 上一代竞赛旗舰",
    fork: "V3Rs 全碳前叉",
    geoOverride: { stack: 546, reach: 388, headAngle: 72.8, seatAngle: 73.5, chainstay: 408, wheelbase: 985 },
    colors: [
      C("梅花红", "Colnago Red", "#c8102e", "红"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
    ],
    highlights: ["波加查 2021 环法冠军车", "轻量与刚性的经典配比", "二手价约为 V4Rs 的六成"],
    story: "V3Rs 是 Colnago 从手工钢架美学彻底转向现代竞赛车的分水岭，也是梅花在二手市场最保值的一代。",
    builds: [
      B(2023, "Dura-Ace Di2", 49800, 7.2, "Shimano Dura-Ace Di2 R9270", "Fulcrum Speed 42", { popularity: 82 }),
      B(2022, "Ultegra Di2", 35800, 7.7, "Shimano Ultegra Di2 R8170", "Fulcrum Speed 42", { popularity: 77 }),
      B(2021, "Record 12", 28800, 8.0, "Campagnolo Record 12", "Campagnolo Bora Ultra WTO 45", { popularity: 72 }),
    ],
  }),

  /* ───────────────────────── BMC ───────────────────────── */
  roadFamily("BMC", "Teammachine R", {
    disc: "aero", years: [2024, 2026], gen: "Teammachine R",
    frame: "ACE+ 碳纤维车架 · 气动竞赛平台",
    fork: "Teammachine R 全碳气动前叉",
    geoOverride: { stack: 550, reach: 395, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 992 },
    colors: [
      C("瑞士红", "Swiss Red", "#e30613", "红"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("银灰", "Silver Grey", "#a3a7aa", "银"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
    ],
    highlights: ["Teammachine 的气动化分支", "与 Red Bull Advanced Technologies 合作开发", "整合度接近纯气动车"],
    story: "Teammachine R 把 BMC 的“精确”换成了“更快”：车架更整合、管型更气动，代价是重量不再是最强项。",
    builds: [
      B(2026, "01 One Dura-Ace", 118000, 6.9, "Shimano Dura-Ace Di2 R9270", "BMC CRD 501", { popularity: 85 }),
      B(2025, "01 Two Ultegra", 72800, 7.5, "Shimano Ultegra Di2 R8170", "BMC CRD 501", { popularity: 79 }),
      B(2024, "01 Three 105 Di2", 42800, 8.0, "Shimano 105 Di2 R7170", "BMC CRD 501", { popularity: 73 }),
    ],
  }),

  /* ───────────────────────── Orbea ───────────────────────── */
  roadFamily("Orbea", "Orca Aero", {
    disc: "aero", years: [2023, 2026], gen: "Orca Aero",
    frame: "OMR 碳纤维车架 · 气动平台",
    fork: "Orca Aero 全碳前叉",
    geoOverride: { stack: 552, reach: 393, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 992 },
    colors: [
      C("巴斯克橙", "Basque Orange", "#f26522", "橙"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("深海蓝", "Deep Blue", "#1d344b", "蓝"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
    ],
    highlights: ["MyO 定制涂装，等待周期是代价", "气动管型与一体化座舱", "同级里少见的定制自由度"],
    story: "Orca Aero 是 Orbea 的气动答案：风洞数据不算最激进，但 MyO 定制让它在一众黑色气动车里有辨识度。",
    builds: [
      B(2026, "M20iLTD Dura-Ace", 82800, 7.2, "Shimano Dura-Ace Di2 R9270", "Orbea Oquo Road Control", { popularity: 78 }),
      B(2025, "M30i Ultegra", 52800, 7.9, "Shimano Ultegra Di2 R8170", "Orbea Oquo Road Control", { popularity: 73 }),
      B(2024, "M35 105 Di2", 36800, 8.0, "Shimano 105 Di2 R7170", "Orbea Oquo Road Control", { popularity: 68 }),
    ],
  }),
];
