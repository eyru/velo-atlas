import { B, C, roadFamily } from "./helpers";

export const roadFamiliesC = [
  /* ───────────────────────── Factor ───────────────────────── */
  roadFamily("Factor", "Ostro VAM", {
    disc: "aero", years: [2023, 2026], gen: "Ostro VAM",
    frame: "VAM 碳纤维车架 · 气动轻量平台",
    fork: "Ostro VAM 全碳前叉",
    geoOverride: { stack: 545, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 988 },
    colors: [
      C("裸碳黑", "Raw Carbon", "#1d1f22", "黑"),
      C("竞速红", "Race Red", "#c31f2d", "红"),
      C("冰川白", "Glacier White", "#e5e3dc", "白"),
      C("电光蓝", "Electric Blue", "#1a4fb8", "蓝"),
    ],
    highlights: ["气动与轻量的双重优化", "Black Inc 一体座舱", "环法级竞赛平台"],
    story: "Ostro VAM 是 Factor 对“气动爬坡车”的答案：在风洞里不输气动车，在称上不输爬坡车。",
    builds: [
      B(2026, "Dura-Ace Di2", 118000, 7.2, "Shimano Dura-Ace Di2 R9270", "Factor Black Inc 48", { popularity: 88 }),
      B(2025, "Ultegra Di2", 82800, 7.8, "Shimano Ultegra Di2 R8170", "Factor Black Inc 48", { popularity: 81 }),
    ],
  }),
  roadFamily("Factor", "O2 VAM", {
    disc: "climbing", years: [2023, 2026], gen: "O2 VAM",
    frame: "VAM 碳纤维车架 · 轻量爬坡",
    fork: "O2 VAM 全碳前叉",
    geoOverride: { stack: 540, reach: 387, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 980 },
    colors: [
      C("碳黑", "Carbon Black", "#17191c", "黑"),
      C("熔岩红", "Lava Red", "#b8202b", "红"),
      C("钛银", "Titanium Silver", "#969b9f", "银"),
    ],
    highlights: ["超轻爬坡平台", "一体式座舱", "限重边缘的克重控制"],
    story: "O2 VAM 是 Factor 的纯爬坡刀，车架轻到让人怀疑它是否真的通过了 UCI 限重。",
    builds: [
      B(2026, "Dura-Ace Di2", 108000, 6.5, "Shimano Dura-Ace Di2 R9270", "Factor Black Inc 48", { popularity: 83 }),
      B(2024, "Ultegra Di2", 76800, 7.2, "Shimano Ultegra Di2 R8170", "Factor Black Inc 48", { popularity: 77 }),
    ],
  }),

  /* ───────────────────────── Lapierre ───────────────────────── */
  roadFamily("Lapierre", "Aircode DRS", {
    disc: "aero", years: [2023, 2026], gen: "Aircode DRS",
    frame: "Ultimate 碳纤维车架 · 气动平台",
    fork: "Aircode DRS 全碳前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("法国蓝", "French Blue", "#0067b1", "蓝"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["气动管型", "整合式座舱", "法国设计语言"],
    story: "Aircode DRS 是 Lapierre 的平路快车，管型锋利，整合度高，带着法国品牌特有的线条感。",
    builds: [
      B(2026, "8.0 Ultegra", 62800, 7.6, "Shimano Ultegra Di2 R8170", "Lapierre DT Swiss ER 1600", { popularity: 76 }),
      B(2024, "6.0 105", 32800, 8.7, "Shimano 105 Di2 R7170", "Lapierre DT Swiss ER 1600", { popularity: 71 }),
    ],
  }),
  roadFamily("Lapierre", "Xelius", {
    disc: "climbing", years: [2023, 2026], gen: "Xelius SL",
    frame: "Ultimate 碳纤维车架 · 轻量爬坡",
    fork: "Xelius 全碳前叉",
    geoOverride: { stack: 542, reach: 387, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 982 },
    colors: [
      C("车队蓝", "Team Blue", "#0a4c8c", "蓝"),
      C("哑光黑", "Matte Black", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e8e4da", "白"),
    ],
    highlights: ["轻量爬坡平台", "3D 管型", "法国车队同款"],
    story: "Xelius 是 Lapierre 的爬坡传统，轻量车架与直接的五通，让它在山路上的节奏非常清晰。",
    builds: [
      B(2026, "9.0 Dura-Ace", 68800, 6.9, "Shimano Dura-Ace Di2 R9270", "Lapierre DT Swiss ER 1600", { popularity: 74 }),
      B(2024, "7.0 Ultegra", 38800, 7.9, "Shimano Ultegra Di2 R8170", "Lapierre DT Swiss ER 1600", { popularity: 69 }),
    ],
  }),
  roadFamily("Lapierre", "Pulsium", {
    disc: "endurance", years: [2023, 2025], gen: "Pulsium",
    frame: "Ultimate 碳纤维车架 · 耐力平台",
    fork: "Pulsium 全碳前叉",
    geoOverride: { stack: 590, reach: 378, headAngle: 71.8, seatAngle: 73.5, chainstay: 420, wheelbase: 1008 },
    colors: [
      C("石墨灰", "Graphite", "#73777a", "灰"),
      C("深海蓝", "Deep Sea", "#1d344b", "蓝"),
      C("橄榄绿", "Olive", "#4e5539", "绿"),
    ],
    highlights: ["耐力舒适几何", "35mm 胎容", "长距离取向"],
    story: "Pulsium 是 Lapierre 的长距离车，车架过滤震动的方式不靠机械结构，而是靠碳布叠层与管型。",
    builds: [
      B(2025, "7.0 105", 26800, 8.9, "Shimano 105 Di2 R7170", "Lapierre DT Swiss ER 1600", { popularity: 65 }),
    ],
  }),

  /* ───────────────────────── Ridley ───────────────────────── */
  roadFamily("Ridley", "Noah Fast", {
    disc: "aero", years: [2023, 2026], gen: "Noah Fast",
    frame: "Ridley 碳纤维车架 · 气动平台",
    fork: "Noah Fast 全碳前叉",
    geoOverride: { stack: 548, reach: 394, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("比利时红", "Belgian Red", "#e4002b", "红"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("海军蓝", "Navy", "#1a2d4a", "蓝"),
    ],
    highlights: ["F-Surface 气动管型", "整合式座舱", "比利时竞赛血统"],
    story: "Noah Fast 是 Ridley 的冲刺平台，F-Surface 管型在风洞中打磨，目标是把最后一公里变短。",
    builds: [
      B(2026, "Dura-Ace Di2", 98800, 7.3, "Shimano Dura-Ace Di2 R9270", "Ridley Forza 45", { popularity: 80 }),
      B(2025, "Ultegra Di2", 64800, 7.9, "Shimano Ultegra Di2 R8170", "Ridley Forza 45", { popularity: 74 }),
    ],
  }),
  roadFamily("Ridley", "Helium", {
    disc: "climbing", years: [2023, 2026], gen: "Helium SLX",
    frame: "Ridley 碳纤维车架 · 轻量爬坡",
    fork: "Helium 全碳前叉",
    geoOverride: { stack: 540, reach: 387, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 980 },
    colors: [
      C("车队黑", "Team Black", "#141619", "黑"),
      C("比利时红", "Belgian Red", "#e4002b", "红"),
      C("珍珠白", "Pearl White", "#e6e2d8", "白"),
    ],
    highlights: ["轻量爬坡平台", "竞赛几何", "石头路古典赛基因"],
    story: "Helium 是 Ridley 的轻量爬坡车，车架刚性足够，重量却轻到适合长时间爬坡。",
    builds: [
      B(2026, "Ultegra Di2", 58800, 6.8, "Shimano Ultegra Di2 R8170", "Ridley Forza 45", { popularity: 76 }),
      B(2024, "105 Di2", 34800, 7.8, "Shimano 105 Di2 R7170", "Ridley Forza 45", { popularity: 71 }),
    ],
  }),
  roadFamily("Ridley", "Grifn", {
    disc: "gravel", years: [2023, 2025], gen: "Grifn",
    frame: "Ridley 碳纤维车架 · Gravel 平台",
    fork: "Grifn 全碳前叉",
    geoOverride: { stack: 610, reach: 380, headAngle: 71, seatAngle: 73.5, chainstay: 435, wheelbase: 1045 },
    colors: [
      C("砾石绿", "Gravel Green", "#3d513d", "绿"),
      C("沙丘棕", "Dune Brown", "#96795b", "棕"),
      C("碳黑", "Carbon Black", "#181a1d", "黑"),
    ],
    highlights: ["45mm 胎容", "多安装位", "Gravel 舒适几何"],
    story: "Grifn 是 Ridley 的全地形车，几何稳定，胎容充足，适合把公路骑行延伸到碎石路。",
    builds: [
      B(2025, "GRX 820", 28800, 9.4, "Shimano GRX RX820", "Ridley Forza 45", { popularity: 64 }),
    ],
  }),

  /* ───────────────────────── Cube ───────────────────────── */
  roadFamily("Cube", "Litening", {
    disc: "aero", years: [2023, 2026], gen: "Litening Air",
    frame: "C:68X 碳纤维车架 · 气动平台",
    fork: "Litening 全碳前叉",
    geoOverride: { stack: 550, reach: 393, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("库贝蓝", "Cube Blue", "#009ee0", "蓝"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("金属银", "Metallic Silver", "#a3a7aa", "银"),
    ],
    highlights: ["C:68X 碳纤维", "气动整合座舱", "德国性价比旗舰"],
    story: "Litening Air 是 Cube 的顶级气动车，用德国式理性把风洞数据、整合度和价格压到同一条线上。",
    builds: [
      B(2026, "Air C68X Dura-Ace", 78800, 6.8, "Shimano Dura-Ace Di2 R9270", "Cube Newmen Advanced", { popularity: 79 }),
      B(2025, "Air C62 Ultegra", 38800, 7.9, "Shimano Ultegra Di2 R8170", "Cube Newmen Advanced", { popularity: 74 }),
    ],
  }),
  roadFamily("Cube", "Agree", {
    disc: "endurance", years: [2023, 2026], gen: "Agree",
    frame: "C:62 碳纤维车架 · 全能平台",
    fork: "Agree 全碳前叉",
    geoOverride: { stack: 580, reach: 385, headAngle: 72, seatAngle: 73.5, chainstay: 418, wheelbase: 1002 },
    colors: [
      C("石墨黑", "Graphite", "#2b2e31", "黑"),
      C("库贝蓝", "Cube Blue", "#009ee0", "蓝"),
      C("橄榄绿", "Olive", "#4d553a", "绿"),
    ],
    highlights: ["C:62 碳纤维", "全能几何", "德国高性价比"],
    story: "Agree 是 Cube 的全能公路车，既能在集团里跟住节奏，也能舒适地骑完长距离。",
    builds: [
      B(2026, "C62 Ultegra", 26800, 8.4, "Shimano Ultegra Di2 R8170", "Cube Newmen Advanced", { popularity: 71 }),
      B(2024, "Race 105", 16800, 9.2, "Shimano 105 R7000", "Cube Newmen Advanced", { popularity: 67 }),
    ],
  }),
  roadFamily("Cube", "Nuroad", {
    disc: "gravel", years: [2023, 2025], gen: "Nuroad",
    frame: "C:62 碳纤维车架 · Gravel 平台",
    fork: "Nuroad 全碳前叉",
    geoOverride: { stack: 605, reach: 382, headAngle: 71.2, seatAngle: 73.5, chainstay: 435, wheelbase: 1045 },
    colors: [
      C("森林绿", "Forest Green", "#3a4d3a", "绿"),
      C("沙漠棕", "Desert Brown", "#997c5c", "棕"),
      C("石墨黑", "Graphite", "#2c2f32", "黑"),
    ],
    highlights: ["50mm 胎容", "多安装位", "Gravel 舒适几何"],
    story: "Nuroad 是 Cube 的全地形旅行车，能装宽胎，也能装行李，是“一台车走遍周末”的答案。",
    builds: [
      B(2025, "C62 GRX", 22800, 9.3, "Shimano GRX RX820", "Cube Newmen Evolution", { popularity: 65 }),
    ],
  }),

  /* ───────────────────────── Cannondale ───────────────────────── */
  roadFamily("Cannondale", "SuperSix EVO", {
    disc: "race", years: [2023, 2026], gen: "SuperSix EVO 4",
    frame: "BallisTec 碳纤维车架 · 竞赛平台",
    fork: "SuperSix EVO 全碳前叉",
    geoOverride: { stack: 545, reach: 390, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 985 },
    colors: [
      C("佳能绿", "Cannondale Green", "#00a651", "绿"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
    ],
    highlights: ["轻量气动融合", "SystemBar 一体座舱", "Lab71 顶级版本"],
    story: "SuperSix EVO 是 Cannondale 的全能竞赛车，第四代把气动、轻量和舒适度同时往前推了一步。",
    builds: [
      B(2026, "LAB71 RED AXS", 109990, 6.7, "SRAM RED AXS", "Cannondale HollowGram 45", { popularity: 89 }),
      B(2025, "Hi-MOD 1 Ultegra", 72800, 7.4, "Shimano Ultegra Di2 R8170", "Cannondale HollowGram 45", { popularity: 83 }),
      B(2024, "Carbon 2 105", 36800, 8.4, "Shimano 105 Di2 R7170", "Cannondale HollowGram 45", { popularity: 77 }),
    ],
  }),
  roadFamily("Cannondale", "Synapse", {
    disc: "endurance", years: [2023, 2026], gen: "Synapse 3",
    frame: "BallisTec 碳纤维车架 · 耐力平台",
    fork: "Synapse 全碳前叉",
    geoOverride: { stack: 590, reach: 378, headAngle: 71.8, seatAngle: 73.5, chainstay: 420, wheelbase: 1010 },
    colors: [
      C("石墨黑", "Graphite", "#2b2e31", "黑"),
      C("深海蓝", "Deep Blue", "#1b3350", "蓝"),
      C("橄榄绿", "Olive", "#4c5439", "绿"),
    ],
    highlights: ["SAVE 微避震结构", "35mm 胎容", "长距离舒适几何"],
    story: "Synapse 是 Cannondale 的耐力车，SAVE 结构让它在粗糙路面上比纯竞赛车更从容。",
    builds: [
      B(2026, "Hi-MOD 1 Ultegra", 68800, 7.8, "Shimano Ultegra Di2 R8170", "Cannondale HollowGram 45", { popularity: 76 }),
      B(2024, "Carbon 2 105", 29800, 8.9, "Shimano 105 Di2 R7170", "Cannondale HollowGram 45", { popularity: 71 }),
    ],
  }),
  roadFamily("Cannondale", "CAAD13", {
    disc: "race", years: [2023, 2026], gen: "CAAD13",
    material: "铝合金",
    frame: "SmartForm C1 铝合金车架",
    fork: "CAAD13 全碳前叉",
    geoOverride: { stack: 550, reach: 390, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 985 },
    colors: [
      C("铝原色", "Raw Aluminum", "#b7babd", "银"),
      C("竞速黑", "Race Black", "#17191c", "黑"),
      C("佳能绿", "Cannondale Green", "#00a651", "绿"),
    ],
    highlights: ["铝合金竞赛车标杆", "轻量液压成型管型", "高性价比"],
    story: "CAAD13 是铝合金公路车的标杆，车架重量和刚性让很多碳纤维车都感到压力。",
    builds: [
      B(2026, "105 Di2", 22800, 8.3, "Shimano 105 Di2 R7170", "Cannondale HollowGram 45", { popularity: 73 }),
      B(2024, "105", 13800, 8.9, "Shimano 105 R7000", "DT Swiss PR 1600", { popularity: 69 }),
    ],
  }),
  roadFamily("Cannondale", "Topstone", {
    disc: "gravel", years: [2023, 2026], gen: "Topstone Carbon",
    frame: "BallisTec 碳纤维车架 · Kingpin 后三角",
    fork: "Topstone 全碳前叉",
    geoOverride: { stack: 610, reach: 380, headAngle: 71, seatAngle: 73.5, chainstay: 435, wheelbase: 1048 },
    colors: [
      C("森林绿", "Forest Green", "#3a4e3b", "绿"),
      C("沙丘棕", "Dune Brown", "#957758", "棕"),
      C("石墨黑", "Graphite", "#2c2f32", "黑"),
    ],
    highlights: ["Kingpin 后三角减震", "45mm 胎容", "多安装位"],
    story: "Topstone Carbon 用 Kingpin 转点让后三角获得微小形变，在碎石路上比硬尾公路车多一层缓冲。",
    builds: [
      B(2026, "Carbon 1 GRX", 42800, 8.8, "Shimano GRX RX822", "Cannondale HollowGram 45", { popularity: 72 }),
      B(2024, "Carbon 3 GRX", 24800, 9.7, "Shimano GRX RX820", "DT Swiss PR 1600", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Look ───────────────────────── */
  roadFamily("Look", "795 Blade RS", {
    disc: "aero", years: [2023, 2026], gen: "795 Blade RS",
    frame: "Look 碳纤维一体车架 · 气动平台",
    fork: "795 全碳前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("法国蓝", "French Blue", "#003da5", "蓝"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["碳纤维一体车架", "法式雕塑线条", "气动整合座舱"],
    story: "795 Blade RS 是 Look 的旗舰气动车，车架线条像一件雕塑，但每一处曲面都为风洞服务。",
    builds: [
      B(2026, "Dura-Ace Di2", 108000, 7.2, "Shimano Dura-Ace Di2 R9270", "Look Corima 47", { popularity: 81 }),
      B(2025, "Ultegra Di2", 69800, 7.8, "Shimano Ultegra Di2 R8170", "Look Corima 47", { popularity: 75 }),
    ],
  }),
  roadFamily("Look", "765 Optimum", {
    disc: "endurance", years: [2023, 2026], gen: "765 Optimum",
    frame: "Look 碳纤维车架 · 耐力平台",
    fork: "765 全碳前叉",
    geoOverride: { stack: 585, reach: 380, headAngle: 72, seatAngle: 73.5, chainstay: 420, wheelbase: 1005 },
    colors: [
      C("石墨灰", "Graphite", "#73777a", "灰"),
      C("法国蓝", "French Blue", "#003da5", "蓝"),
      C("珍珠白", "Pearl White", "#e7e3d9", "白"),
    ],
    highlights: ["耐力舒适几何", "碳纤维车架", "法式长途美学"],
    story: "765 Optimum 是 Look 的长距离车，几何放松，车架依旧保留法国品牌对线条的执着。",
    builds: [
      B(2026, "Ultegra Di2", 48800, 8.3, "Shimano Ultegra Di2 R8170", "Look Corima 47", { popularity: 69 }),
      B(2024, "105 Di2", 29800, 9.0, "Shimano 105 Di2 R7170", "Look Corima 47", { popularity: 65 }),
    ],
  }),

  /* ───────────────────────── Felt ───────────────────────── */
  roadFamily("Felt", "AR", {
    disc: "aero", years: [2023, 2026], gen: "AR Advanced",
    frame: "UHC 碳纤维车架 · 气动平台",
    fork: "AR 全碳前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("哑光黑", "Matte Black", "#15171a", "黑"),
      C("费尔特红", "Felt Red", "#c01e2c", "红"),
      C("银灰", "Silver Grey", "#a3a7aa", "银"),
    ],
    highlights: ["UHC 碳纤维", "气动管型", "铁三基因"],
    story: "AR 是 Felt 的气动公路车，管型直接、座舱整合，带着品牌从铁三赛场继承来的速度执念。",
    builds: [
      B(2026, "Advanced Ultegra", 46800, 7.9, "Shimano Ultegra Di2 R8170", "Felt Devox 45", { popularity: 72 }),
      B(2024, "Advanced 105", 28800, 8.8, "Shimano 105 Di2 R7170", "Felt Devox 45", { popularity: 67 }),
    ],
  }),
  roadFamily("Felt", "FR", {
    disc: "climbing", years: [2023, 2026], gen: "FR Advanced",
    frame: "UHC 碳纤维车架 · 轻量平台",
    fork: "FR 全碳前叉",
    geoOverride: { stack: 542, reach: 388, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 982 },
    colors: [
      C("碳黑", "Carbon Black", "#17191c", "黑"),
      C("费尔特红", "Felt Red", "#c01e2c", "红"),
      C("珍珠白", "Pearl White", "#e6e2d8", "白"),
    ],
    highlights: ["轻量爬坡平台", "UHC 碳纤维", "竞赛几何"],
    story: "FR 是 Felt 的轻量爬坡车，车架重量控制在同级前列，适合长坡与连续起伏。",
    builds: [
      B(2026, "Advanced Ultegra", 43800, 7.2, "Shimano Ultegra Di2 R8170", "Felt Devox 45", { popularity: 70 }),
      B(2024, "Advanced 105", 25800, 8.1, "Shimano 105 Di2 R7170", "Felt Devox 45", { popularity: 66 }),
    ],
  }),
];
