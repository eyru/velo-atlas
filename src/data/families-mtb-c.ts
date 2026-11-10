import { B, C, mtbFamily } from "./helpers";

export const mtbFamiliesC = [
  /* ───────────────────────── Specialized ───────────────────────── */
  mtbFamily("Specialized", "Rockhopper", {
    disc: "hardtail", years: [2023, 2026], gen: "Rockhopper 29",
    frame: "A1 铝合金车架 · 入门越野平台",
    fork: "SR Suntour XCM 100mm",
    frontTravel: 100, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 618, reach: 435, headAngle: 68.5, seatAngle: 73.5, chainstay: 440, wheelbase: 1136 },
    colors: [
      C("哑光黑", "Matte Black", "#1b1d1f", "黑"),
      C("熔岩红", "Lava Red", "#b62a26", "红"),
      C("森林绿", "Forest Green", "#2c4a35", "绿"),
      C("沙丘灰", "Dune Grey", "#8b8578", "灰"),
    ],
    highlights: ["A1 铝合金车架，入门价位里少见的完整几何", "100mm 前叉与 2.3 英寸胎容", "货架孔位齐全，可通勤可越野"],
    story: "Rockhopper 是很多人第一台真正意义上的山地车。它不追求轻，而是把几何、胎容与可靠性做对，让入门骑手先骑起来。",
    builds: [
      B(2026, "Comp 29", 5990, 13.0, "Shimano CUES U6000", "Specialized Stout 29", { popularity: 72 }),
      B(2024, "Sport 29", 4290, 13.6, "Shimano CUES U6000", "Specialized Stout 29", { popularity: 66 }),
    ],
  }),
  mtbFamily("Specialized", "Status 140", {
    disc: "trail", years: [2023, 2026], gen: "Status 140",
    frame: "M5 铝合金车架 · 140mm 林道平台",
    fork: "Fox 36 Rhythm 150mm",
    frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 615, reach: 465, headAngle: 65, seatAngle: 76, chainstay: 435, wheelbase: 1195 },
    colors: [
      C("哑光黑", "Satin Black", "#191a1c", "黑"),
      C("水泥灰", "Cement Grey", "#7d807e", "灰"),
      C("竞速红", "Race Red", "#b01f24", "红"),
    ],
    highlights: ["铝合金版本的“便宜好骑”林道车", "140mm 后行程 + 150mm 前叉", "低重心与长轴距，下坡很稳"],
    story: "Status 是 Specialized 对高性价比林道车的回答：用铝合金把价格压下来，但几何与避震曲线不缩水。",
    builds: [
      B(2026, "140 Comp", 22800, 14.6, "SRAM NX Eagle", "Specialized Traverse 29", { popularity: 70 }),
      B(2024, "140", 18800, 14.9, "SRAM SX Eagle", "Specialized Traverse 29", { popularity: 63 }),
    ],
  }),

  /* ───────────────────────── Scott ───────────────────────── */
  mtbFamily("Scott", "Scale", {
    disc: "hardtail", years: [2023, 2026], gen: "Scale RC",
    frame: "HMF 碳纤维车架 · XC 硬尾",
    fork: "RockShox SID SL 100mm",
    frontTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 602, reach: 438, headAngle: 68.5, seatAngle: 74, chainstay: 425, wheelbase: 1120 },
    colors: [
      C("车队黑", "Team Black", "#15171a", "黑"),
      C("电光蓝", "Electric Blue", "#1c4fae", "蓝"),
      C("纯白", "Pure White", "#e9e7e0", "白"),
    ],
    highlights: ["XC 硬尾的轻量基准", "RC 版本车架约 900g 级", "几何偏竞赛，爬坡直接"],
    story: "Scale 是 Scott 的 XC 硬尾主线。它没有后避震，但把车架刚性、重量与坐姿效率做到了竞赛级别。",
    builds: [
      B(2026, "RC World Cup", 24800, 9.9, "SRAM XX SL Eagle AXS", "Syncros Silverton 1.0", { popularity: 74 }),
      B(2024, "940", 9800, 11.8, "Shimano SLX M7100", "Syncros Silverton 2.0", { material: "铝合金", popularity: 64 }),
    ],
  }),

  /* ───────────────────────── Giant ───────────────────────── */
  mtbFamily("Giant", "Talon", {
    disc: "hardtail", years: [2023, 2026], gen: "Talon 29",
    frame: "ALUXX 铝合金车架 · 入门硬尾",
    fork: "SR Suntour XCT 100mm",
    frontTravel: 100, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 620, reach: 432, headAngle: 68, seatAngle: 73, chainstay: 442, wheelbase: 1140 },
    colors: [
      C("曜石黑", "Obsidian", "#1a1c1e", "黑"),
      C("烈焰橙", "Flame Orange", "#d4551f", "橙"),
      C("深海蓝", "Deep Blue", "#1d3b5c", "蓝"),
    ],
    highlights: ["入门价位里最稳妥的选择之一", "100mm 前叉与 2.4 英寸胎", "全国门店多，维护方便"],
    story: "Talon 是 Giant 的入门硬尾，配置不花哨，但车架几何、品控与门店网络让它在同价位很难被忽略。",
    builds: [
      B(2026, "1", 5980, 13.2, "Shimano CUES U6000", "Giant GX 29", { popularity: 68 }),
      B(2024, "3", 3680, 13.9, "Shimano CUES U6000", "Giant GX 29", { popularity: 60 }),
    ],
  }),

  /* ───────────────────────── Orbea ───────────────────────── */
  mtbFamily("Orbea", "Alma", {
    disc: "hardtail", years: [2023, 2026], gen: "Alma M",
    frame: "OMR 碳纤维车架 · XC 硬尾",
    fork: "Fox 32 Step-Cast 100mm",
    frontTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 604, reach: 440, headAngle: 68.5, seatAngle: 74, chainstay: 426, wheelbase: 1124 },
    colors: [
      C("巴斯克蓝", "Basque Blue", "#1b4c8a", "蓝"),
      C("碳黑", "Carbon Black", "#17191b", "黑"),
      C("车队橙", "Team Orange", "#d35a22", "橙"),
    ],
    highlights: ["西班牙品牌的 XC 硬尾传统", "OMR 碳布与轻量管型", "竞赛几何，适合爬坡型赛道"],
    story: "Alma 是 Orbea 的 XC 硬尾，车架轻、前端稳，适合喜欢用硬尾去跑起伏赛道的骑手。",
    builds: [
      B(2026, "M-LTD", 21800, 9.8, "SRAM XX SL Eagle AXS", "Orbea Oquo XC", { popularity: 71 }),
      B(2024, "H30", 7999, 11.6, "Shimano Deore M6100", "Orbea OC 29", { material: "铝合金", popularity: 62 }),
    ],
  }),

  /* ───────────────────────── Cannondale ───────────────────────── */
  mtbFamily("Cannondale", "Trail", {
    disc: "hardtail", years: [2023, 2026], gen: "Trail SE",
    frame: "SmartForm C3 铝合金车架 · 林道硬尾",
    fork: "RockShox Judy 120mm",
    frontTravel: 120, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 626, reach: 445, headAngle: 66, seatAngle: 74, chainstay: 435, wheelbase: 1165 },
    colors: [
      C("石墨黑", "Graphite", "#1c1e20", "黑"),
      C("冲击绿", "Impact Green", "#4e7a2e", "绿"),
      C("火山红", "Volcano Red", "#b52a22", "红"),
    ],
    highlights: ["120mm 前叉的林道硬尾", "较 slack 的头管角，下坡更稳", "价格友好，升级空间大"],
    story: "Trail 是 Cannondale 的铝合金林道硬尾，几何比传统 XC 更放松，适合把硬尾骑出一点林道味道。",
    builds: [
      B(2026, "SE 1", 8980, 12.9, "Shimano SLX M7100", "Cannondale HollowGram XC", { popularity: 66 }),
      B(2024, "5", 4290, 13.7, "Shimano CUES U6000", "Cannondale Trail 29", { popularity: 58 }),
    ],
  }),

  /* ───────────────────────── Trek ───────────────────────── */
  mtbFamily("Trek", "X-Caliber", {
    disc: "hardtail", years: [2023, 2026], gen: "X-Caliber 29",
    frame: "Alpha Gold 铝合金车架 · XC 硬尾",
    fork: "RockShox Judy Silver 100mm",
    frontTravel: 100, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 606, reach: 442, headAngle: 69, seatAngle: 73.5, chainstay: 432, wheelbase: 1128 },
    colors: [
      C("锂灰", "Lithium Grey", "#6f7477", "灰"),
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("水蓝", "Aqua Blue", "#1f6f8b", "蓝"),
    ],
    highlights: ["Trek 的铝合金 XC 硬尾主力", "100mm 前叉，适合轻越野与通勤", "车架预留货架与脚撑孔位"],
    story: "X-Caliber 是 Trek 在入门与进阶级之间的硬尾，车架做工扎实，适合把通勤、绿道与轻越野放在一台车上。",
    builds: [
      B(2026, "9", 12800, 11.2, "Shimano XT M8100", "Bontrager Kovee Pro 30", { popularity: 69 }),
      B(2024, "8", 8980, 11.9, "Shimano Deore M6100", "Bontrager Kovee 29", { popularity: 61 }),
    ],
  }),

  /* ───────────────────────── Commencal ───────────────────────── */
  mtbFamily("Commencal", "Meta HT", {
    disc: "hardtail", years: [2023, 2026], gen: "Meta HT AM",
    frame: "6061 铝合金车架 · 长行程硬尾",
    fork: "Fox 38 Performance 160mm",
    frontTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 638, reach: 455, headAngle: 64.5, seatAngle: 75, chainstay: 432, wheelbase: 1188 },
    colors: [
      C("枪灰", "Gunmetal", "#4a4d50", "灰"),
      C("安道尔红", "Andorra Red", "#b31f2b", "红"),
      C("哑光黑", "Matte Black", "#17191b", "黑"),
    ],
    highlights: ["160mm 前叉的硬尾“迷你速降”", "非常 slack 的头管角", "铝合金车架，抗造"],
    story: "Meta HT 是把 Enduro 几何塞进硬尾的产物：上坡靠踩，下坡靠几何和胆子。它不是全能车，但很好玩。",
    builds: [
      B(2026, "AM Race", 26800, 13.6, "SRAM GX Eagle AXS", "Race Face ARC 30", { popularity: 73 }),
      B(2024, "AM Ride", 13800, 14.2, "SRAM NX Eagle", "Race Face AR 30", { popularity: 65 }),
    ],
  }),

  /* ───────────────────────── Santa Cruz ───────────────────────── */
  mtbFamily("Santa Cruz", "Chameleon", {
    disc: "hardtail", years: [2023, 2026], gen: "Chameleon 29",
    frame: "铝合金车架 · 可调后勾爪硬尾",
    fork: "Fox 34 Performance 130mm",
    frontTravel: 130, wheelSize: "29\"",
    material: "铝合金",
    geoOverride: { stack: 626, reach: 450, headAngle: 65.5, seatAngle: 74.5, chainstay: 430, wheelbase: 1170 },
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("芥末黄", "Mustard", "#c99a2e", "黄"),
      C("森林绿", "Forest Green", "#2f4a35", "绿"),
    ],
    highlights: ["可调后勾爪，硬尾/单速都能玩", "130mm 前叉，林道取向", "Santa Cruz 的铝合金工艺"],
    story: "Chameleon 是 Santa Cruz 的“万能硬尾”：可调后勾爪让它能在变速与单速之间切换，适合把一台车玩出很多种用法。",
    builds: [
      B(2026, "D", 15800, 12.7, "SRAM GX Eagle", "Race Face ARC 30", { popularity: 70 }),
      B(2024, "R", 12800, 13.0, "SRAM NX Eagle", "WTB KOM 29", { popularity: 62 }),
    ],
  }),

  /* ───────────────────────── Marin ───────────────────────── */
  mtbFamily("Marin", "San Quentin", {
    disc: "hardtail", years: [2023, 2026], gen: "San Quentin 3",
    frame: "Series 3 铝合金车架 · 27.5 林道硬尾",
    fork: "RockShox Recon 140mm",
    frontTravel: 140, wheelSize: "27.5\"",
    material: "铝合金",
    geoOverride: { stack: 618, reach: 452, headAngle: 65, seatAngle: 74, chainstay: 425, wheelbase: 1168 },
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("水泥灰", "Concrete", "#8a8b86", "灰"),
      C("锈红", "Rust Red", "#9c3b2a", "红"),
    ],
    highlights: ["27.5 轮径，动作更灵活", "140mm 前叉与短后下叉", "价格友好的林道硬尾"],
    story: "San Quentin 是 Marin 的林道硬尾，27.5 轮径与短后下叉让它在弯道和小跳台之间很灵活。",
    builds: [
      B(2026, "3", 16800, 12.9, "SRAM GX Eagle", "Marin Alloy 27.5", { popularity: 68 }),
      B(2024, "2", 10800, 13.4, "SRAM SX Eagle", "Marin Alloy 27.5", { popularity: 60 }),
    ],
  }),

  /* ───────────────────────── XC 旗舰补全（据 2026 官方资料核对） ───────────────────────── */
  mtbFamily("Trek", "Supercaliber", {
    disc: "xc", years: [2024, 2026], gen: "Supercaliber SLR Gen 2",
    frame: "SLR OCLV Mountain Carbon · IsoStrut 一体式后避震",
    fork: "RockShox SID SL Ultimate 110mm",
    frontTravel: 110, rearTravel: 60, wheelSize: "29\"",
    geoOverride: { stack: 594, reach: 450, headAngle: 67.5, seatAngle: 75.5, chainstay: 432, wheelbase: 1128, bbDrop: 56 },
    colors: [
      C("海军烟", "Navy Smoke", "#243040", "蓝"),
      C("碳黑", "Carbon Black", "#17191b", "黑"),
      C("车队红", "Team Red", "#b31f2b", "红"),
    ],
    highlights: ["IsoStrut 一体式后避震，结构极简", "XC 竞赛几何，踩踏效率优先", "SLR 碳纤维车架，整车约 10.3kg"],
    story: "Supercaliber 是 Trek 对 XC 竞赛的独特回答：用一根 IsoStrut 把后避震藏进上管，换来更少的转点和更直接的踩踏。第二代把行程与几何都推向更实用的方向。",
    builds: [
      B(2026, "SLR 9.9 XX SL AXS", 108000, 10.28, "SRAM XX SL Eagle AXS", "Bontrager Kovee RSL", { popularity: 84 }),
      B(2024, "SLR 9.8 XT", 62800, 11.2, "Shimano XT M8100", "Bontrager Kovee Elite", { popularity: 72 }),
    ],
  }),

  mtbFamily("Canyon", "Lux World Cup", {
    disc: "xc", years: [2024, 2026], gen: "Lux WC CFR",
    frame: "CFR 碳纤维车架 · 世界杯竞赛平台",
    fork: "RockShox SID SL Ultimate 110mm",
    frontTravel: 110, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 597, reach: 455, headAngle: 67.5, seatAngle: 75.5, chainstay: 430, wheelbase: 1132, bbDrop: 58 },
    colors: [
      C("车队涂装", "Team Replica", "#1c3f7a", "蓝"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("月白", "Moon White", "#e6e4dc", "白"),
    ],
    highlights: ["CFR 顶级碳布，车架约 1480g", "XTR Di2 无线电子变速", "世界杯赛道验证的竞赛几何"],
    story: "Lux World Cup 是 Canyon 的 XC 旗舰。它把“轻”和“踩踏刚性”放在第一位，再给出一套足够稳定的下坡几何，是典型的现代世界杯竞赛车。",
    builds: [
      B(2026, "CFR XTR Di2", 57600, 9.82, "Shimano XTR M9100", "DT Swiss XRC 1200", { popularity: 82 }),
      B(2024, "CFR X0 AXS", 46800, 10.4, "SRAM X0 Eagle AXS", "DT Swiss XRC 1700", { popularity: 70 }),
    ],
  }),

  mtbFamily("Pivot", "Mach 4 SL", {
    disc: "xc", years: [2024, 2026], gen: "Mach 4 SL",
    frame: "碳纤维车架 · DW-Link 短行程平台",
    fork: "Fox 34 Step-Cast 120mm",
    frontTravel: 120, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 450, headAngle: 66.5, seatAngle: 75.5, chainstay: 432, wheelbase: 1140, bbDrop: 56 },
    colors: [
      C("海沫绿", "Sea Foam Green", "#9fc8b8", "绿"),
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("熔岩橙", "Lava Orange", "#d4551f", "橙"),
    ],
    highlights: ["DW-Link 悬挂，踩踏与吸震平衡", "Team XTR 整车约 10.4kg", "120mm 前叉，比纯 XC 更能下坡"],
    story: "Mach 4 SL 是 Pivot 的短行程全能车：DW-Link 让它在踩踏时保持稳定，120mm 前叉又给了它比纯 XC 车更多的下坡余地。",
    builds: [
      B(2026, "Team XTR", 71280, 10.4, "Shimano XTR M9100", "DT Swiss XRC 1200", { popularity: 78 }),
      B(2024, "Race XT", 42800, 11.3, "Shimano XT M8100", "DT Swiss XR 1700", { popularity: 66 }),
    ],
  }),

  mtbFamily("Scott", "Spark RC", {
    disc: "xc", years: [2024, 2026], gen: "Spark RC World Cup",
    frame: "HMX 碳纤维车架 · 隐藏式后胆",
    fork: "Fox 34 SC 120mm",
    frontTravel: 120, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 448, headAngle: 66.5, seatAngle: 75.5, chainstay: 435, wheelbase: 1145, bbDrop: 55 },
    colors: [
      C("车队黑", "Team Black", "#15171a", "黑"),
      C("斯科特黄", "Scott Yellow", "#f4c300", "黄"),
      C("纯白", "Pure White", "#e9e7e0", "白"),
    ],
    highlights: ["隐藏式后胆，外观极简", "120mm 前后行程的现代 XC 几何", "TwinLoc 三档阻尼控制"],
    story: "Spark RC 把后胆藏进立管，让整车看起来像一台硬尾，却拥有 120mm 行程。它是 Scott 对“现代 XC 应该更全能”的回答。",
    builds: [
      B(2026, "World Cup", 43200, 10.8, "SRAM XX SL Eagle AXS", "Syncros Silverton SL", { popularity: 76 }),
      B(2024, "Team Issue AXS", 32800, 11.4, "SRAM GX Eagle AXS", "Syncros Silverton 1.0", { popularity: 66 }),
    ],
  }),
];
