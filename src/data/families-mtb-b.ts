import { B, C, mtbFamily } from "./helpers";

export const mtbFamiliesB = [
  /* ───────────────────────── Specialized ───────────────────────── */
  mtbFamily("Specialized", "Stumpjumper", {
    disc: "trail", years: [2023, 2026], gen: "Stumpjumper 15",
    frame: "FACT 11m 碳纤维车架 · FSR 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 145, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 475, headAngle: 65, seatAngle: 76.5, chainstay: 432, wheelbase: 1198, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("特种红", "Specialized Red", "#c8102e", "红"),
      C("森林绿", "Forest Green", "#3e523f", "绿"),
      C("沙丘棕", "Dune", "#a08160", "棕"),
    ],
    highlights: ["FSR 悬挂", "可调几何", "全能林道标杆"],
    story: "Stumpjumper 是山地车的活化石，第十五代用可调几何和 FSR 悬挂，把“全能”两个字继续写下去。",
    builds: [
      B(2026, "S-Works X0 AXS", 88800, 13.2, "SRAM X0 Eagle AXS", "Roval Traverse SL", { popularity: 85 }),
      B(2025, "Pro GX AXS", 52800, 14.0, "SRAM GX Eagle AXS", "Roval Traverse", { popularity: 79 }),
      B(2024, "Comp 105", 32800, 14.8, "SRAM NX Eagle", "Roval Traverse", { popularity: 73 }),
    ],
  }),
  mtbFamily("Specialized", "Enduro", {
    disc: "enduro", years: [2023, 2026], gen: "Enduro",
    frame: "FACT 11m 碳纤维车架 · FSR 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 170, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 482, headAngle: 64.3, seatAngle: 76.8, chainstay: 442, wheelbase: 1218, bbDrop: 32 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("特种红", "Specialized Red", "#c8102e", "红"),
      C("金属蓝", "Metallic Blue", "#2b5d8c", "蓝"),
    ],
    highlights: ["FSR 悬挂", "170mm 前后行程", "耐力赛平台"],
    story: "Enduro 是 Specialized 的耐力旗舰，行程给足，几何激进，目标只有一个：把下坡骑得更快。",
    builds: [
      B(2026, "S-Works X0 AXS", 92800, 14.4, "SRAM X0 Eagle AXS", "Roval Traverse SL", { popularity: 84 }),
      B(2024, "Expert GX AXS", 56800, 15.2, "SRAM GX Eagle AXS", "Roval Traverse", { popularity: 78 }),
    ],
  }),
  mtbFamily("Specialized", "Epic", {
    disc: "xc", years: [2023, 2026], gen: "Epic 8",
    frame: "FACT 12m 碳纤维车架 · BRAIN 悬挂",
    fork: "RockShox SID SL Ultimate 110mm", frontTravel: 110, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 598, reach: 455, headAngle: 67.5, seatAngle: 75.5, chainstay: 430, wheelbase: 1130, bbDrop: 58 },
    colors: [
      C("车队白", "Team White", "#e9e7e0", "白"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("特种红", "Specialized Red", "#c8102e", "红"),
    ],
    highlights: ["BRAIN 智能避震", "100mm 后行程", "XC 世界冠军平台"],
    story: "Epic 是 Specialized 的 XC 竞赛车，BRAIN 系统会在踩踏和吸震之间自动切换，是世界杯的常胜平台。",
    builds: [
      B(2026, "S-Works XX SL AXS", 108000, 10.0, "SRAM XX SL Eagle AXS", "Roval Control SL", { popularity: 86 }),
      B(2024, "Comp X0 AXS", 52800, 11.0, "SRAM X0 Eagle AXS", "Roval Control", { popularity: 76 }),
    ],
  }),
  mtbFamily("Specialized", "Demo", {
    disc: "downhill", years: [2023, 2026], gen: "Demo",
    frame: "FACT 11m 碳纤维车架 · FSR 速降悬挂",
    fork: "Fox 40 Factory 200mm", frontTravel: 200, rearTravel: 200, wheelSize: "29\"",
    geoOverride: { stack: 638, reach: 488, headAngle: 63.2, seatAngle: 77.2, chainstay: 445, wheelbase: 1255, bbDrop: 28 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("特种红", "Specialized Red", "#c8102e", "红"),
      C("荧光黄", "Fluoro Yellow", "#d7e021", "黄"),
    ],
    highlights: ["FSR 速降悬挂", "200mm 前后行程", "世界杯速降平台"],
    story: "Demo 是 Specialized 的速降车，200mm 行程和低重心几何，为的只是让重力少一点阻力。",
    builds: [
      B(2026, "S-Works X0 DH", 98800, 17.0, "SRAM X0 DH", "Roval Traverse DH", { popularity: 80 }),
    ],
  }),

  /* ───────────────────────── Trek ───────────────────────── */
  mtbFamily("Trek", "Slash", {
    disc: "enduro", years: [2023, 2026], gen: "Slash 6",
    frame: "OCLV 碳纤维车架 · ABP 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 170, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.4, seatAngle: 76.8, chainstay: 440, wheelbase: 1212, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("崔克红", "Trek Red", "#c8102e", "红"),
      C("海军蓝", "Navy", "#1d3557", "蓝"),
    ],
    highlights: ["ABP 悬挂", "170mm 后行程", "耐力赛取向"],
    story: "Slash 是 Trek 的耐力旗舰，ABP 转点让刹车不再干扰悬挂，长行程也能保持踩踏效率。",
    builds: [
      B(2026, "9.9 X0 AXS", 88800, 14.6, "SRAM X0 Eagle AXS", "Bontrager Line Pro 30", { popularity: 82 }),
      B(2024, "8 GX AXS", 52800, 15.4, "SRAM GX Eagle AXS", "Bontrager Line Pro 30", { popularity: 76 }),
    ],
  }),
  mtbFamily("Trek", "Fuel EX", {
    disc: "trail", years: [2023, 2026], gen: "Fuel EX 9",
    frame: "OCLV 碳纤维车架 · ABP 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 472, headAngle: 65, seatAngle: 76.5, chainstay: 435, wheelbase: 1195, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("崔克红", "Trek Red", "#c8102e", "红"),
      C("橄榄绿", "Olive", "#4e5539", "绿"),
    ],
    highlights: ["ABP 悬挂", "可调几何", "全能林道"],
    story: "Fuel EX 是 Trek 的全能林道车，几何可调，行程够用，是那种一年四季都愿意骑的车。",
    builds: [
      B(2026, "9.9 X0 AXS", 78800, 13.8, "SRAM X0 Eagle AXS", "Bontrager Line Pro 30", { popularity: 80 }),
      B(2024, "8 GX AXS", 46800, 14.6, "SRAM GX Eagle AXS", "Bontrager Line Comp 30", { popularity: 75 }),
    ],
  }),
  mtbFamily("Trek", "Top Fuel", {
    disc: "downcountry", years: [2023, 2026], gen: "Top Fuel 9",
    frame: "OCLV 碳纤维车架 · ABP 悬挂",
    fork: "Fox 34 Factory 130mm", frontTravel: 130, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 610, reach: 462, headAngle: 66, seatAngle: 76.2, chainstay: 432, wheelbase: 1165, bbDrop: 44 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("崔克红", "Trek Red", "#c8102e", "红"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["120mm 后行程", "ABP 悬挂", "快速林道"],
    story: "Top Fuel 是 Trek 的短行程 29 吋，爬坡快、下坡稳，是 XC 与林道之间的那条线。",
    builds: [
      B(2026, "9.9 X0 AXS", 72800, 12.4, "SRAM X0 Eagle AXS", "Bontrager Line Pro 30", { popularity: 77 }),
      B(2024, "8 GX AXS", 42800, 13.2, "SRAM GX Eagle AXS", "Bontrager Line Comp 30", { popularity: 72 }),
    ],
  }),
  mtbFamily("Trek", "Session", {
    disc: "downhill", years: [2023, 2026], gen: "Session 9",
    frame: "OCLV 碳纤维车架 · ABP 速降悬挂",
    fork: "Fox 40 Factory 200mm", frontTravel: 200, rearTravel: 210, wheelSize: "29\"",
    geoOverride: { stack: 638, reach: 488, headAngle: 63.2, seatAngle: 77.2, chainstay: 445, wheelbase: 1258, bbDrop: 28 },
    colors: [
      C("车队黑", "Team Black", "#121417", "黑"),
      C("崔克红", "Trek Red", "#c8102e", "红"),
      C("荧光黄", "Fluoro Yellow", "#d7e021", "黄"),
    ],
    highlights: ["速降世界杯平台", "210mm 后行程", "ABP 悬挂"],
    story: "Session 是 Trek 的速降车，世界杯赛场的常客，车架几何为极限速度服务。",
    builds: [
      B(2026, "9.9 X0 DH", 92800, 17.2, "SRAM X0 DH", "Bontrager Line Pro 30 DH", { popularity: 78 }),
    ],
  }),
  mtbFamily("Trek", "Marlin", {
    disc: "hardtail", years: [2023, 2026], gen: "Marlin 8",
    material: "铝合金", frame: "Alpha Gold 铝合金硬尾车架",
    fork: "RockShox Judy 100mm", frontTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 612, reach: 445, headAngle: 67.5, seatAngle: 73.5, chainstay: 438, wheelbase: 1120, bbDrop: 55 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("崔克红", "Trek Red", "#c8102e", "红"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["入门硬尾", "100mm 前叉", "高性价比"],
    story: "Marlin 是很多人第一台山地车，简单、可靠，能把林道入口的门槛降到最低。",
    builds: [
      B(2026, "8 Deore", 8980, 13.6, "Shimano Deore M6100", "Bontrager Kovee", { popularity: 70 }),
      B(2025, "7 Deore", 6980, 14.0, "Shimano Deore M6100", "Bontrager Kovee", { popularity: 78 }),
      B(2025, "6 Acera", 5280, 14.3, "Shimano Acera M3000", "Bontrager Kovee", { popularity: 86 }),
      B(2026, "5 Altus", 4680, 14.5, "Shimano Altus M2000", "Bontrager Kovee", { popularity: 90 }),
      B(2026, "4", 3980, 14.8, "Shimano Tourney TX 3×7", "Bontrager Kovee", { popularity: 93 }),
    ],
  }),

  /* ───────────────────────── Giant ───────────────────────── */
  mtbFamily("Giant", "Trance", {
    disc: "trail", years: [2023, 2026], gen: "Trance X",
    frame: "ALUXX SL 铝合金车架 · Maestro 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 145, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 470, headAngle: 65.2, seatAngle: 76.5, chainstay: 435, wheelbase: 1192, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("捷安特蓝", "Giant Blue", "#005eb8", "蓝"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["Maestro 悬挂", "145mm 后行程", "全能林道"],
    story: "Trance X 是 Giant 的全能林道车，Maestro 悬挂在踩踏和吸震之间保持平衡，性价比突出。",
    builds: [
      B(2026, "Advanced Pro X0 AXS", 52800, 13.8, "SRAM X0 Eagle AXS", "Giant TRX 1", { popularity: 74 }),
      B(2024, "1 GX AXS", 32800, 14.6, "SRAM GX Eagle AXS", "Giant TRX 1", { popularity: 69 }),
    ],
  }),
  mtbFamily("Giant", "Reign", {
    disc: "enduro", years: [2023, 2026], gen: "Reign 29",
    frame: "ALUXX SL 铝合金车架 · Maestro 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 478, headAngle: 64.6, seatAngle: 76.8, chainstay: 438, wheelbase: 1210, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("捷安特蓝", "Giant Blue", "#005eb8", "蓝"),
      C("军绿", "Army Green", "#4e5540", "绿"),
    ],
    highlights: ["Maestro 悬挂", "160mm 后行程", "耐力赛取向"],
    story: "Reign 是 Giant 的耐力车，长行程、稳几何，价格却比很多碳纤维耐力车更低。",
    builds: [
      B(2026, "Advanced Pro X0 AXS", 56800, 14.8, "SRAM X0 Eagle AXS", "Giant TRX 1", { popularity: 73 }),
      B(2024, "1 GX AXS", 34800, 15.6, "SRAM GX Eagle AXS", "Giant TRX 1", { popularity: 68 }),
    ],
  }),
  mtbFamily("Giant", "Anthem", {
    disc: "xc", years: [2023, 2026], gen: "Anthem Advanced",
    frame: "Advanced 碳纤维车架 · Maestro 悬挂",
    fork: "Fox 34 Step-Cast 110mm", frontTravel: 110, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 452, headAngle: 67.5, seatAngle: 75.5, chainstay: 432, wheelbase: 1128, bbDrop: 58 },
    colors: [
      C("车队蓝", "Team Blue", "#005eb8", "蓝"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["XC 竞赛平台", "100mm 后行程", "轻量碳纤维"],
    story: "Anthem 是 Giant 的 XC 竞赛车，轻量、踩踏直接，是越野世界杯的常见面孔。",
    builds: [
      B(2026, "Advanced SL 0", 75600, 10.6, "SRAM XX SL Eagle AXS", "Giant XCR 1", { popularity: 72 }),
      B(2024, "Advanced 1 X0", 38800, 11.0, "SRAM X0 Eagle AXS", "Giant XCR 1", { popularity: 67 }),
    ],
  }),
  mtbFamily("Giant", "Fathom", {
    disc: "hardtail", years: [2023, 2026], gen: "Fathom",
    material: "铝合金", frame: "ALUXX 铝合金硬尾车架",
    fork: "Giant Crest 34 130mm", frontTravel: 130, wheelSize: "29\"",
    geoOverride: { stack: 616, reach: 452, headAngle: 66.5, seatAngle: 75, chainstay: 435, wheelbase: 1142, bbDrop: 52 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("捷安特蓝", "Giant Blue", "#005eb8", "蓝"),
      C("苔藓绿", "Moss", "#4d5c3c", "绿"),
    ],
    highlights: ["130mm 硬尾", "铝合金车架", "入门林道"],
    story: "Fathom 是 Giant 的硬尾林道车，几何现代，前叉行程够用，适合把入门骑行带到更野的路。",
    builds: [
      B(2026, "1 Deore", 12800, 13.8, "Shimano Deore M6100", "Giant AM 29", { popularity: 66 }),
      B(2024, "2 Deore", 8980, 14.4, "Shimano Deore M6100", "Giant AM 29", { popularity: 62 }),
    ],
  }),

  /* ───────────────────────── Canyon ───────────────────────── */
  mtbFamily("Canyon", "Spectral", {
    disc: "trail", years: [2023, 2026], gen: "Spectral 125",
    frame: "Carbon 碳纤维车架 · 四连杆悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 472, headAngle: 65, seatAngle: 76.5, chainstay: 435, wheelbase: 1196, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("峡谷红", "Canyon Red", "#c8102e", "红"),
      C("沙丘棕", "Dune", "#a08160", "棕"),
    ],
    highlights: ["四连杆悬挂", "140mm 后行程", "直销性价比"],
    story: "Spectral 是 Canyon 的全能林道车，配置直接、价格透明，是直销模式最有说服力的产品之一。",
    builds: [
      B(2026, "CF 9 X0 AXS", 48800, 13.6, "SRAM X0 Eagle AXS", "Canyon DT Swiss XM 1700", { popularity: 76 }),
      B(2024, "CF 8 GX AXS", 32800, 14.4, "SRAM GX Eagle AXS", "Canyon DT Swiss XM 1700", { popularity: 71 }),
    ],
  }),
  mtbFamily("Canyon", "Strive", {
    disc: "enduro", years: [2023, 2026], gen: "Strive",
    frame: "Carbon 碳纤维车架 · Shapeshifter 可调几何",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 480, headAngle: 64.5, seatAngle: 76.8, chainstay: 438, wheelbase: 1210, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("峡谷红", "Canyon Red", "#c8102e", "红"),
      C("金属蓝", "Metallic Blue", "#2b5d8c", "蓝"),
    ],
    highlights: ["Shapeshifter 可调几何", "160mm 后行程", "耐力赛取向"],
    story: "Strive 用 Shapeshifter 在爬坡和下降之间切换几何，是 Canyon 对耐力赛的理解。",
    builds: [
      B(2026, "CFR X0 AXS", 56800, 14.8, "SRAM X0 Eagle AXS", "Canyon DT Swiss EXC 1501", { popularity: 74 }),
      B(2024, "CF 8 GX AXS", 36800, 15.6, "SRAM GX Eagle AXS", "Canyon DT Swiss XM 1700", { popularity: 69 }),
    ],
  }),
  mtbFamily("Canyon", "Neuron", {
    disc: "downcountry", years: [2023, 2026], gen: "Neuron",
    frame: "Carbon 碳纤维车架 · 四连杆悬挂",
    fork: "Fox 34 Factory 130mm", frontTravel: 130, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 610, reach: 460, headAngle: 66, seatAngle: 76.2, chainstay: 432, wheelbase: 1162, bbDrop: 44 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("峡谷红", "Canyon Red", "#c8102e", "红"),
      C("松林绿", "Pine Green", "#36503c", "绿"),
    ],
    highlights: ["120mm 后行程", "轻量林道", "爬坡友好"],
    story: "Neuron 是 Canyon 的短行程林道车，轻快、好爬，适合把周末骑成一条长长的山脊线。",
    builds: [
      B(2026, "CF 9 X0 AXS", 42800, 12.8, "SRAM X0 Eagle AXS", "Canyon DT Swiss XR 1700", { popularity: 71 }),
      B(2024, "CF 8 GX AXS", 28800, 13.6, "SRAM GX Eagle AXS", "Canyon DT Swiss XR 1700", { popularity: 67 }),
    ],
  }),
  mtbFamily("Canyon", "Torque", {
    disc: "enduro", years: [2023, 2026], gen: "Torque",
    frame: "Carbon 碳纤维车架 · 四连杆悬挂",
    fork: "Fox 38 Factory 180mm", frontTravel: 180, rearTravel: 170, wheelSize: "29\"",
    geoOverride: { stack: 632, reach: 482, headAngle: 64, seatAngle: 76.8, chainstay: 440, wheelbase: 1220, bbDrop: 30 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("峡谷红", "Canyon Red", "#c8102e", "红"),
      C("荧光黄", "Fluoro Yellow", "#d7e021", "黄"),
    ],
    highlights: ["180mm 前叉", "自由骑取向", "公园与缆车路线"],
    story: "Torque 是 Canyon 的自由骑车，180mm 前叉和更 slack 的几何，为缆车路线和公园骑行准备。",
    builds: [
      B(2026, "CF 9 X0 AXS", 52800, 15.2, "SRAM X0 Eagle AXS", "Canyon DT Swiss EXC 1501", { popularity: 72 }),
      B(2024, "CF 8 GX AXS", 34800, 16.0, "SRAM GX Eagle AXS", "Canyon DT Swiss XM 1700", { popularity: 67 }),
    ],
  }),
  mtbFamily("Canyon", "Grand Canyon", {
    disc: "hardtail", years: [2023, 2026], gen: "Grand Canyon 8",
    material: "铝合金", frame: "铝合金硬尾车架",
    fork: "RockShox Judy 120mm", frontTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 614, reach: 448, headAngle: 67, seatAngle: 74.5, chainstay: 435, wheelbase: 1132, bbDrop: 54 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("峡谷红", "Canyon Red", "#c8102e", "红"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["入门硬尾", "120mm 前叉", "直销性价比"],
    story: "Grand Canyon 是 Canyon 的入门硬尾，配置实在，适合把第一次山地骑行变得轻松。",
    builds: [
      B(2026, "8 Deore", 9980, 13.2, "Shimano Deore M6100", "Canyon AM 29", { popularity: 65 }),
      B(2024, "7 Deore", 7980, 13.8, "Shimano Deore M6100", "Canyon AM 29", { popularity: 61 }),
    ],
  }),

  /* ───────────────────────── Scott ───────────────────────── */
  mtbFamily("Scott", "Spark", {
    disc: "xc", years: [2023, 2026], gen: "Spark RC",
    frame: "HMX 碳纤维车架 · TwinLoc 悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 456, headAngle: 67.2, seatAngle: 75.8, chainstay: 432, wheelbase: 1132, bbDrop: 56 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("斯科特黄", "Scott Yellow", "#e3d81f", "黄"),
      C("车队蓝", "Team Blue", "#1c5fa8", "蓝"),
    ],
    highlights: ["TwinLoc 线控", "120mm 前后行程", "XC 世界冠军平台"],
    story: "Spark RC 是 Scott 的 XC 竞赛车，TwinLoc 让骑手在踩踏和吸震之间即时切换，是世界杯的常胜平台。",
    builds: [
      B(2026, "RC Ultimate XX SL", 88800, 10.0, "SRAM XX SL Eagle AXS", "Syncros Silverton SL", { popularity: 82 }),
      B(2024, "RC Pro X0 AXS", 52800, 11.0, "SRAM X0 Eagle AXS", "Syncros Silverton 2.0", { popularity: 76 }),
    ],
  }),
  mtbFamily("Scott", "Genius", {
    disc: "trail", years: [2023, 2026], gen: "Genius",
    frame: "HMX 碳纤维车架 · TwinLoc 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 150, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 470, headAngle: 65.2, seatAngle: 76.5, chainstay: 435, wheelbase: 1196, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("斯科特黄", "Scott Yellow", "#e3d81f", "黄"),
      C("松林绿", "Pine Green", "#36503c", "绿"),
    ],
    highlights: ["TwinLoc 线控", "150mm 前后行程", "全能林道"],
    story: "Genius 是 Scott 的全能林道车，TwinLoc 让它在爬坡时收紧、下坡时放开，一台车覆盖更多地形。",
    builds: [
      B(2026, "Ultimate X0 AXS", 72800, 13.6, "SRAM X0 Eagle AXS", "Syncros Silverton 2.0", { popularity: 77 }),
      B(2024, "Pro GX AXS", 44800, 14.4, "SRAM GX Eagle AXS", "Syncros Silverton 2.0", { popularity: 72 }),
    ],
  }),
  mtbFamily("Scott", "Ransom", {
    disc: "enduro", years: [2023, 2026], gen: "Ransom",
    frame: "HMX 碳纤维车架 · TwinLoc 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 170, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.5, seatAngle: 76.8, chainstay: 440, wheelbase: 1215, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("斯科特黄", "Scott Yellow", "#e3d81f", "黄"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["TwinLoc 线控", "170mm 前后行程", "耐力赛取向"],
    story: "Ransom 是 Scott 的耐力旗舰，170mm 行程加上 TwinLoc，让它在长坡和陡降之间都有答案。",
    builds: [
      B(2026, "Ultimate X0 AXS", 82800, 14.8, "SRAM X0 Eagle AXS", "Syncros Silverton 2.0", { popularity: 75 }),
      B(2024, "Pro GX AXS", 50800, 15.6, "SRAM GX Eagle AXS", "Syncros Silverton 2.0", { popularity: 70 }),
    ],
  }),

  /* ───────────────────────── Merida ───────────────────────── */
  mtbFamily("Merida", "One-Sixty", {
    disc: "enduro", years: [2023, 2026], gen: "One-Sixty",
    frame: "CF4 碳纤维车架 · 耐力悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 478, headAngle: 64.6, seatAngle: 76.8, chainstay: 438, wheelbase: 1210, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("美利达绿", "Merida Green", "#007a3d", "绿"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["CF4 碳纤维", "160mm 后行程", "耐力赛取向"],
    story: "One-Sixty 是 Merida 的耐力车，碳纤维车架、现代几何，是欧洲山路上的常见面孔。",
    builds: [
      B(2026, "9000 X0 AXS", 62800, 14.6, "SRAM X0 Eagle AXS", "Merida Team TR", { popularity: 72 }),
      B(2024, "7000 GX AXS", 38800, 15.4, "SRAM GX Eagle AXS", "Merida Team TR", { popularity: 67 }),
    ],
  }),
  mtbFamily("Merida", "Ninety-Six", {
    disc: "xc", years: [2023, 2026], gen: "Ninety-Six",
    frame: "CF5 碳纤维车架 · 短行程悬挂",
    fork: "Fox 34 Step-Cast 100mm", frontTravel: 100, rearTravel: 96, wheelSize: "29\"",
    geoOverride: { stack: 598, reach: 452, headAngle: 68, seatAngle: 75.5, chainstay: 430, wheelbase: 1125, bbDrop: 60 },
    colors: [
      C("车队黑", "Team Black", "#121417", "黑"),
      C("美利达绿", "Merida Green", "#007a3d", "绿"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["XC 竞赛平台", "96mm 后行程", "超轻碳纤维"],
    story: "Ninety-Six 是 Merida 的 XC 竞赛车，96mm 后行程和轻量车架，为计时赛般的越野节奏服务。",
    builds: [
      B(2026, "9000 XX SL", 68800, 9.9, "SRAM XX SL Eagle AXS", "Merida Team SL", { popularity: 70 }),
      B(2024, "7000 X0", 42800, 10.8, "SRAM X0 Eagle AXS", "Merida Team SL", { popularity: 65 }),
    ],
  }),
  mtbFamily("Merida", "Big Nine", {
    disc: "hardtail", years: [2023, 2026], gen: "Big Nine",
    material: "铝合金", frame: "Lite 铝合金硬尾车架",
    fork: "RockShox Judy 100mm", frontTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 610, reach: 445, headAngle: 68, seatAngle: 73.5, chainstay: 435, wheelbase: 1118, bbDrop: 58 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("美利达绿", "Merida Green", "#007a3d", "绿"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["入门硬尾", "100mm 前叉", "高性价比"],
    story: "Big Nine 是 Merida 的入门 29 吋硬尾，简单可靠，是很多人进入山地骑行的第一台车。",
    builds: [
      B(2026, "500 Deore", 8980, 13.8, "Shimano Deore M6100", "Merida Comp CC", { popularity: 63 }),
      B(2025, "300 Acera", 5980, 14.4, "Shimano Acera M3000", "Merida Comp CC", { popularity: 72 }),
      B(2026, "100 Deore", 6290, 14.0, "Shimano Deore M6100", "Merida Comp CC", { popularity: 82 }),
      B(2026, "40 Acera", 4990, 14.3, "Shimano Acera M3000", "Merida Comp CC", { popularity: 88 }),
      B(2026, "20 Altus", 3990, 14.6, "Shimano Altus M2000", "Merida Comp CC", { popularity: 91 }),
      B(2026, "15", 3290, 14.8, "Shimano Tourney TX 3×7", "Merida Comp CC", { popularity: 94 }),
    ],
  }),

  /* ───────────────────────── Orbea ───────────────────────── */
  mtbFamily("Orbea", "Rallon", {
    disc: "enduro", years: [2023, 2026], gen: "Rallon",
    frame: "OMR 碳纤维车架 · 耐力悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 480, headAngle: 64.5, seatAngle: 76.8, chainstay: 438, wheelbase: 1212, bbDrop: 34 },
    colors: [
      C("巴斯克蓝", "Basque Blue", "#1d4f91", "蓝"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["OMR 碳纤维", "160mm 后行程", "巴斯克耐力血统"],
    story: "Rallon 是 Orbea 的耐力车，车架来自巴斯克山地的需求：长坡、陡降、连续的技术路段。",
    builds: [
      B(2026, "M10 X0 AXS", 72800, 14.6, "SRAM X0 Eagle AXS", "Oquo MC32", { popularity: 73 }),
      B(2024, "M20 GX AXS", 44800, 15.4, "SRAM GX Eagle AXS", "Oquo MC32", { popularity: 68 }),
    ],
  }),
  mtbFamily("Orbea", "Occam", {
    disc: "trail", years: [2023, 2026], gen: "Occam",
    frame: "OMR 碳纤维车架 · 林道悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 470, headAngle: 65.2, seatAngle: 76.5, chainstay: 435, wheelbase: 1195, bbDrop: 38 },
    colors: [
      C("巴斯克蓝", "Basque Blue", "#1d4f91", "蓝"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("松林绿", "Pine Green", "#36503c", "绿"),
    ],
    highlights: ["140mm 后行程", "OMR 碳纤维", "全能林道"],
    story: "Occam 是 Orbea 的全能林道车，轻量、灵活，适合把技术路段骑得更顺。",
    builds: [
      B(2026, "M10 X0 AXS", 62800, 13.6, "SRAM X0 Eagle AXS", "Oquo MC32", { popularity: 70 }),
      B(2024, "M20 GX AXS", 38800, 14.4, "SRAM GX Eagle AXS", "Oquo MC32", { popularity: 65 }),
    ],
  }),
  mtbFamily("Orbea", "Oiz", {
    disc: "xc", years: [2023, 2026], gen: "Oiz",
    frame: "OMX 碳纤维车架 · 短行程悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 455, headAngle: 67.5, seatAngle: 75.5, chainstay: 430, wheelbase: 1128, bbDrop: 58 },
    colors: [
      C("巴斯克蓝", "Basque Blue", "#1d4f91", "蓝"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["XC 竞赛平台", "100mm 后行程", "轻量碳纤维"],
    story: "Oiz 是 Orbea 的 XC 车，轻量车架和短行程悬挂，为越野计时赛的节奏服务。",
    builds: [
      B(2026, "M10 XX SL", 66800, 10.2, "SRAM XX SL Eagle AXS", "Oquo MP30", { popularity: 69 }),
      B(2024, "M20 X0", 40800, 11.0, "SRAM X0 Eagle AXS", "Oquo MP30", { popularity: 64 }),
    ],
  }),

  /* ───────────────────────── Cannondale ───────────────────────── */
  mtbFamily("Cannondale", "Jekyll", {
    disc: "enduro", years: [2023, 2026], gen: "Jekyll",
    frame: "BallisTec 碳纤维车架 · 耐力悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 165, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.5, seatAngle: 76.8, chainstay: 438, wheelbase: 1212, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("佳能绿", "Cannondale Green", "#00a651", "绿"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["165mm 后行程", "Gemini 双模式悬挂", "耐力赛取向"],
    story: "Jekyll 是 Cannondale 的耐力车，Gemini 双模式悬挂让它在爬坡和下降之间切换性格。",
    builds: [
      B(2026, "1 X0 AXS", 68800, 14.8, "SRAM X0 Eagle AXS", "Cannondale HollowGram 30", { popularity: 70 }),
      B(2024, "2 GX AXS", 42800, 15.6, "SRAM GX Eagle AXS", "Cannondale HollowGram 30", { popularity: 65 }),
    ],
  }),
  mtbFamily("Cannondale", "Scalpel", {
    disc: "xc", years: [2023, 2026], gen: "Scalpel",
    frame: "BallisTec 碳纤维车架 · 短行程悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 455, headAngle: 67.5, seatAngle: 75.5, chainstay: 430, wheelbase: 1128, bbDrop: 58 },
    colors: [
      C("佳能绿", "Cannondale Green", "#00a651", "绿"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["XC 竞赛平台", "100mm 后行程", "轻量碳纤维"],
    story: "Scalpel 是 Cannondale 的 XC 车，轻、快、直接，是越野世界杯的常客。",
    builds: [
      B(2026, "1 XX SL", 72800, 10.0, "SRAM XX SL Eagle AXS", "Cannondale HollowGram 25", { popularity: 71 }),
      B(2024, "2 X0", 44800, 10.8, "SRAM X0 Eagle AXS", "Cannondale HollowGram 25", { popularity: 66 }),
    ],
  }),
  mtbFamily("Cannondale", "Habit", {
    disc: "trail", years: [2023, 2026], gen: "Habit",
    frame: "BallisTec 碳纤维车架 · 林道悬挂",
    fork: "Fox 34 Factory 140mm", frontTravel: 140, rearTravel: 130, wheelSize: "29\"",
    geoOverride: { stack: 618, reach: 468, headAngle: 65.5, seatAngle: 76, chainstay: 435, wheelbase: 1185, bbDrop: 40 },
    colors: [
      C("佳能绿", "Cannondale Green", "#00a651", "绿"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["130mm 后行程", "林道取向", "轻量碳纤维"],
    story: "Habit 是 Cannondale 的林道车，行程适中、几何灵活，是周末山路的舒适答案。",
    builds: [
      B(2026, "Carbon 1 X0 AXS", 52800, 13.4, "SRAM X0 Eagle AXS", "Cannondale HollowGram 30", { popularity: 68 }),
      B(2024, "Carbon 3 GX", 32800, 14.2, "SRAM GX Eagle", "Cannondale HollowGram 30", { popularity: 63 }),
    ],
  }),

  /* ───────────────────────── Cube ───────────────────────── */
  mtbFamily("Cube", "Stereo", {
    disc: "enduro", years: [2023, 2026], gen: "Stereo 170",
    frame: "C:62 碳纤维车架 · 四连杆悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 478, headAngle: 64.6, seatAngle: 76.8, chainstay: 438, wheelbase: 1210, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("库贝蓝", "Cube Blue", "#009ee0", "蓝"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["C:62 碳纤维", "160mm 后行程", "德国性价比"],
    story: "Stereo 170 是 Cube 的耐力车，配置给足、价格克制，是德国式务实的代表。",
    builds: [
      B(2026, "TM X0 AXS", 48800, 14.8, "SRAM X0 Eagle AXS", "Cube Newmen Evolution", { popularity: 68 }),
      B(2024, "Race GX AXS", 30800, 15.6, "SRAM GX Eagle AXS", "Cube Newmen Evolution", { popularity: 63 }),
    ],
  }),
  mtbFamily("Cube", "Reaction", {
    disc: "hardtail", years: [2023, 2026], gen: "Reaction C:62",
    frame: "C:62 碳纤维硬尾车架",
    fork: "Fox 32 Factory 120mm", frontTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 612, reach: 450, headAngle: 67.5, seatAngle: 74, chainstay: 432, wheelbase: 1125, bbDrop: 56 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("库贝蓝", "Cube Blue", "#009ee0", "蓝"),
      C("苔藓绿", "Moss", "#4d5c3c", "绿"),
    ],
    highlights: ["碳纤维硬尾", "120mm 前叉", "轻量越野"],
    story: "Reaction C:62 是 Cube 的碳纤维硬尾，轻、直接，适合把越野骑成一条干净的节奏线。",
    builds: [
      B(2026, "SLT X0 AXS", 32800, 10.8, "SRAM X0 Eagle AXS", "Cube Newmen Advanced", { popularity: 65 }),
      B(2024, "Race Deore", 16800, 12.0, "Shimano Deore M6100", "Cube Newmen Advanced", { popularity: 61 }),
    ],
  }),

  /* ───────────────────────── BMC ───────────────────────── */
  mtbFamily("BMC", "Fourstroke", {
    disc: "xc", years: [2023, 2026], gen: "Fourstroke",
    frame: "Premium 碳纤维车架 · APS 悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 456, headAngle: 67.2, seatAngle: 75.8, chainstay: 430, wheelbase: 1130, bbDrop: 58 },
    colors: [
      C("瑞士红", "Swiss Red", "#c8102e", "红"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["APS 悬挂", "100mm 后行程", "瑞士精密工程"],
    story: "Fourstroke 是 BMC 的 XC 车，APS 悬挂和精确的车架调校，带着瑞士工程特有的克制。",
    builds: [
      B(2026, "01 One XX SL", 78800, 10.0, "SRAM XX SL Eagle AXS", "BMC CRD 30", { popularity: 67 }),
      B(2024, "02 Two X0", 46800, 10.8, "SRAM X0 Eagle AXS", "BMC CRD 30", { popularity: 62 }),
    ],
  }),
];
