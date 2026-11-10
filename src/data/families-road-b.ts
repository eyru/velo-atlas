import { B, C, roadFamily } from "./helpers";

export const roadFamiliesB = [
  /* ───────────────────────── Cervélo ───────────────────────── */
  roadFamily("Cervélo", "S5", {
    disc: "aero", years: [2023, 2026], gen: "S5",
    frame: "Cervélo 碳纤维车架 · TrueAero 管型",
    fork: "S5 全碳气动前叉",
    geoOverride: { stack: 545, reach: 395, headAngle: 73, seatAngle: 73, chainstay: 410, wheelbase: 990 },
    colors: [
      C("碳晶黑", "Carbon Crystal", "#16181b", "黑"),
      C("冰川蓝", "Glacier Blue", "#3f7fa3", "蓝"),
      C("竞速红", "Racing Red", "#c01e2c", "红"),
      C("月白", "Moon White", "#e6e4dc", "白"),
    ],
    highlights: ["TrueAero 气动管型", "下凹式下管", "整合式 V 型把组"],
    story: "S5 是 Cervélo 气动哲学的极致表达：为了最后几瓦，工程师愿意重新设计整根下管和把组。",
    builds: [
      B(2026, "RED AXS", 104400, 6.74, "SRAM RED AXS", "Reserve 57/64", { popularity: 92 }),
      B(2025, "Ultegra Di2", 75800, 7.7, "Shimano Ultegra Di2 R8170", "Reserve 52/63", { popularity: 86 }),
    ],
  }),
  roadFamily("Cervélo", "R5", {
    disc: "climbing", years: [2023, 2026], gen: "R5",
    frame: "Cervélo 碳纤维车架 · 轻量竞赛",
    fork: "R5 全碳前叉",
    geoOverride: { stack: 542, reach: 387, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 982 },
    colors: [
      C("五通黑", "Five Black", "#121316", "黑"),
      C("湖水蓝", "Lake Blue", "#2f6f8f", "蓝"),
      C("朱砂红", "Cinnabar", "#b8322a", "红"),
    ],
    highlights: ["轻量爬坡平台", "一体式车架前端", "竞赛级刚性重量比"],
    story: "R5 是 Cervélo 的爬坡答案：轻量、刚性、精准，像一把为山路打磨的薄刃。",
    builds: [
      B(2026, "Dura-Ace Di2", 99800, 6.8, "Shimano Dura-Ace Di2 R9270", "Reserve 52/63", { popularity: 85 }),
      B(2024, "Ultegra Di2", 65800, 7.4, "Shimano Ultegra Di2 R8170", "Reserve 52/63", { popularity: 80 }),
    ],
  }),
  roadFamily("Cervélo", "Caledonia", {
    disc: "endurance", years: [2023, 2026], gen: "Caledonia",
    frame: "Cervélo 碳纤维车架 · 全能耐力",
    fork: "Caledonia 全碳前叉",
    geoOverride: { stack: 580, reach: 382, headAngle: 72, seatAngle: 73.5, chainstay: 420, wheelbase: 1005 },
    colors: [
      C("大西洋灰", "Atlantic Grey", "#6f7478", "灰"),
      C("午夜蓝", "Midnight Blue", "#1a2c47", "蓝"),
      C("苔藓绿", "Moss Green", "#4c5840", "绿"),
    ],
    highlights: ["34mm 胎容", "耐力几何", "兼顾铺装与碎石"],
    story: "Caledonia 是一台“没有短板的公路车”：足够快，足够舒适，也足够能装宽胎。",
    builds: [
      B(2026, "Ultegra Di2", 49800, 8.3, "Shimano Ultegra Di2 R8170", "Reserve 52/63", { popularity: 77 }),
      B(2024, "105 Di2", 32800, 8.9, "Shimano 105 Di2 R7170", "DT Swiss PR 1600", { popularity: 72 }),
    ],
  }),
  roadFamily("Cervélo", "Áspero", {
    disc: "gravel", years: [2023, 2026], gen: "Áspero",
    frame: "Cervélo 碳纤维车架 · Gravel 平台",
    fork: "Áspero 全碳前叉",
    geoOverride: { stack: 600, reach: 385, headAngle: 71.5, seatAngle: 73.5, chainstay: 432, wheelbase: 1038 },
    colors: [
      C("砾石棕", "Gravel Brown", "#8a6f52", "棕"),
      C("森林绿", "Forest Green", "#334b3a", "绿"),
      C("碳黑", "Carbon Black", "#17191c", "黑"),
    ],
    highlights: ["45mm 胎容", "低重心 Gravel 几何", "竞赛取向的碎石车"],
    story: "Áspero 是一台偏竞赛的 gravel 车：低重心、直接转向，让碎石路也能骑出公路车的节奏。",
    builds: [
      B(2026, "Force XPLR AXS", 62800, 8.5, "SRAM Force XPLR AXS", "Reserve 52/63", { popularity: 73 }),
      B(2024, "GRX 820", 39800, 9.2, "Shimano GRX RX820", "DT Swiss PR 1600", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Scott ───────────────────────── */
  roadFamily("Scott", "Addict RC", {
    disc: "climbing", years: [2023, 2026], gen: "Addict RC",
    frame: "HMX-SL 碳纤维车架 · 轻量竞赛",
    fork: "Addict RC 全碳前叉",
    geoOverride: { stack: 546, reach: 389, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 984 },
    colors: [
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("斯科特黄", "Scott Yellow", "#f4c300", "黄"),
      C("深海蓝", "Deep Blue", "#183b63", "蓝"),
      C("珍珠白", "Pearl White", "#e8e5dc", "白"),
    ],
    highlights: ["HMX-SL 顶级碳纤维", "一体式座舱", "轻量爬坡与气动兼得"],
    story: "Addict RC 是 Scott 的轻量旗舰，HMX-SL 碳布和一体式座舱让它在爬坡与冲刺之间保持平衡。",
    builds: [
      B(2026, "Ultimate", 97200, 6.1, "SRAM RED AXS", "Syncros Capital SL", { popularity: 86 }),
      B(2025, "Pro Ultegra", 54900, 7.3, "Shimano Ultegra Di2 R8170", "Syncros Capital 1.0 50", { popularity: 81 }),
      B(2024, "20 105 Di2", 29900, 8.1, "Shimano 105 Di2 R7170", "Syncros Capital 1.0 50", { popularity: 76 }),
    ],
  }),
  roadFamily("Scott", "Foil", {
    disc: "aero", years: [2023, 2026], gen: "Foil",
    frame: "HMX 碳纤维车架 · 气动管型",
    fork: "Foil 全碳气动前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("哑光黑", "Matte Black", "#141518", "黑"),
      C("竞速红", "Race Red", "#c51f2d", "红"),
      C("电光蓝", "Electric Blue", "#1851a8", "蓝"),
    ],
    highlights: ["气动整合座舱", "HMX 碳纤维", "冲刺与平路突围利器"],
    story: "Foil 是 Scott 的气动分支：管型更锋利，座舱更整合，目标只有一个——在平路上更快。",
    builds: [
      B(2026, "RC Ultimate", 99900, 7.0, "SRAM RED AXS", "Syncros Capital 1.0 50", { popularity: 84 }),
      B(2025, "RC 10 Ultegra", 48800, 7.9, "Shimano Ultegra Di2 R8170", "Syncros Capital 1.0 50", { popularity: 78 }),
    ],
  }),
  roadFamily("Scott", "Addict Gravel", {
    disc: "gravel", years: [2023, 2026], gen: "Addict Gravel",
    frame: "HMX 碳纤维车架 · Gravel 几何",
    fork: "Addict Gravel 全碳前叉",
    geoOverride: { stack: 605, reach: 383, headAngle: 71.3, seatAngle: 73.5, chainstay: 435, wheelbase: 1042 },
    colors: [
      C("森林绿", "Forest Green", "#354a39", "绿"),
      C("沙丘金", "Dune Gold", "#b3955f", "金"),
      C("石墨黑", "Graphite", "#2a2c2f", "黑"),
    ],
    highlights: ["50mm 胎容", "Gravel 竞赛几何", "一体式储物设计"],
    story: "Addict Gravel 把 Addict 的竞赛基因延伸到碎石路，车架更松弛，但踩踏依旧紧致。",
    builds: [
      B(2026, "10 GRX Di2", 44800, 8.4, "Shimano GRX RX822", "Syncros Capital 1.0 50", { popularity: 72 }),
      B(2024, "20 GRX", 25800, 9.3, "Shimano GRX RX820", "Syncros Capital 1.0 50", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Merida ───────────────────────── */
  roadFamily("Merida", "Reacto", {
    disc: "aero", years: [2023, 2026], gen: "Reacto 5",
    frame: "CF5 碳纤维车架 · NACA 气动管型",
    fork: "Reacto 全碳气动前叉",
    geoOverride: { stack: 550, reach: 393, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("美利达绿", "Merida Green", "#009b48", "绿"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("银灰", "Silver Grey", "#a5a9ad", "银"),
    ],
    highlights: ["CF5 高模量碳纤维", "NACA 气动管型", "整合式座舱与座管"],
    story: "Reacto 是美利达的平路武器，CF5 碳布与 NACA 管型让它在风洞里拥有与欧洲豪强正面竞争的数据。",
    builds: [
      B(2026, "Team Dura-Ace", 72800, 7.1, "Shimano Dura-Ace Di2 R9270", "Merida Team SL 45", { popularity: 82 }),
      B(2025, "8000 Ultegra", 36800, 7.9, "Shimano Ultegra Di2 R8170", "Merida Team SL 45", { popularity: 78 }),
      B(2024, "6000 105", 19800, 8.8, "Shimano 105 R7000", "DT Swiss PR 1600", { popularity: 73 }),
    ],
  }),
  roadFamily("Merida", "Scultura", {
    disc: "climbing", years: [2023, 2026], gen: "Scultura 5",
    frame: "CF5 碳纤维车架 · 轻量爬坡",
    fork: "Scultura 全碳前叉",
    geoOverride: { stack: 542, reach: 388, headAngle: 73, seatAngle: 73.5, chainstay: 408, wheelbase: 982 },
    colors: [
      C("车队黑", "Team Black", "#121417", "黑"),
      C("美利达绿", "Merida Green", "#009b48", "绿"),
      C("冠军白", "Champion White", "#e9e6dc", "白"),
    ],
    highlights: ["轻量爬坡平台", "CF5 碳纤维", "竞赛级五通刚性"],
    story: "Scultura 是山地火车里的轻量派：在坡度超过 8% 的地方，它比气动车更愿意向前。",
    builds: [
      B(2026, "Team Dura-Ace", 69800, 6.7, "Shimano Dura-Ace Di2 R9270", "Merida Team SL 45", { popularity: 83 }),
      B(2025, "8000 Ultegra", 33800, 7.6, "Shimano Ultegra Di2 R8170", "Merida Team SL 45", { popularity: 79 }),
      B(2024, "6000 105", 16800, 8.5, "Shimano 105 R7000", "DT Swiss PR 1600", { popularity: 74 }),
    ],
  }),
  roadFamily("Merida", "Silex", {
    disc: "gravel", years: [2023, 2026], gen: "Silex",
    frame: "CF2 碳纤维车架 · Gravel 平台",
    fork: "Silex 全碳前叉",
    geoOverride: { stack: 610, reach: 380, headAngle: 71, seatAngle: 73.5, chainstay: 438, wheelbase: 1048 },
    colors: [
      C("森林绿", "Forest Green", "#3b4f3b", "绿"),
      C("沙漠棕", "Desert Brown", "#96795a", "棕"),
      C("石墨黑", "Graphite", "#2c2f32", "黑"),
    ],
    highlights: ["45mm 胎容", "多安装位", "长距离 Gravel 几何"],
    story: "Silex 是美利达的全地形旅行车，几何更稳，安装位更多，适合把路线骑出城市。",
    builds: [
      B(2026, "9000 GRX", 32800, 8.6, "Shimano GRX RX822", "Merida Team TR", { popularity: 70 }),
      B(2024, "7000 GRX", 18800, 9.6, "Shimano GRX RX820", "DT Swiss PR 1600", { popularity: 66 }),
    ],
  }),

  /* ───────────────────────── BMC ───────────────────────── */
  roadFamily("BMC", "Teammachine", {
    disc: "race", years: [2023, 2026], gen: "SLR",
    frame: "ACE+ 碳纤维车架 · 竞赛平台",
    fork: "Teammachine SLR 全碳前叉",
    geoOverride: { stack: 550, reach: 392, headAngle: 73.2, seatAngle: 73.5, chainstay: 410, wheelbase: 988 },
    colors: [
      C("瑞士红", "Swiss Red", "#e30613", "红"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("阿尔卑斯白", "Alpine White", "#e6e4dc", "白"),
    ],
    highlights: ["ACE+ 碳纤维", "ICS 整合座舱", "瑞士精工竞赛几何"],
    story: "Teammachine 是 BMC 的竞赛核心，车架刚性分布经过重新计算，目标是让每一次加速都不浪费。",
    builds: [
      B(2026, "SLR 01 Dura-Ace", 108000, 6.9, "Shimano Dura-Ace Di2 R9270", "BMC CRD 501", { popularity: 87 }),
      B(2025, "SLR 03 Ultegra", 54800, 7.8, "Shimano Ultegra Di2 R8170", "BMC CRD 501", { popularity: 80 }),
    ],
  }),
  roadFamily("BMC", "Roadmachine", {
    disc: "endurance", years: [2023, 2026], gen: "Roadmachine",
    frame: "ACE 碳纤维车架 · 耐力平台",
    fork: "Roadmachine 全碳前叉",
    geoOverride: { stack: 585, reach: 382, headAngle: 72, seatAngle: 73.5, chainstay: 418, wheelbase: 1005 },
    colors: [
      C("石墨黑", "Graphite", "#292c2f", "黑"),
      C("深海蓝", "Deep Blue", "#1b3350", "蓝"),
      C("金属银", "Metallic Silver", "#9da2a6", "银"),
    ],
    highlights: ["D 型减震座管", "35mm 胎容", "长距离舒适几何"],
    story: "Roadmachine 在“快”和“舒服”之间找平衡，是 BMC 产品线里最适合长距离与粗糙路面的公路车。",
    builds: [
      B(2026, "01 Ultegra", 88800, 7.4, "Shimano Ultegra Di2 R8170", "BMC CRD 501", { popularity: 78 }),
      B(2024, "03 105", 36800, 8.6, "Shimano 105 Di2 R7170", "BMC CRD 501", { popularity: 73 }),
    ],
  }),
  roadFamily("BMC", "Kaius", {
    disc: "gravel", years: [2023, 2025], gen: "Kaius",
    frame: "ACE 碳纤维车架 · Gravel 平台",
    fork: "Kaius 全碳前叉",
    geoOverride: { stack: 605, reach: 385, headAngle: 71.5, seatAngle: 73.5, chainstay: 432, wheelbase: 1040 },
    colors: [
      C("砾石灰", "Gravel Grey", "#7b7e7b", "灰"),
      C("森林绿", "Forest Green", "#34493a", "绿"),
      C("砖红", "Brick Red", "#9c4638", "红"),
    ],
    highlights: ["45mm 胎容", "Gravel 竞赛几何", "整合式座舱"],
    story: "Kaius 是 BMC 的快速 gravel 车，几何接近公路车，但胎容与顺从一个不少。",
    builds: [
      B(2025, "01 GRX Di2", 72800, 8.2, "Shimano GRX RX822", "BMC CRD 501", { popularity: 71 }),
    ],
  }),

  /* ───────────────────────── Orbea ───────────────────────── */
  roadFamily("Orbea", "Orca", {
    disc: "race", years: [2023, 2026], gen: "Orca",
    frame: "OMR 碳纤维车架 · 竞赛平台",
    fork: "Orca 全碳前叉",
    geoOverride: { stack: 548, reach: 390, headAngle: 73.2, seatAngle: 73.5, chainstay: 410, wheelbase: 986 },
    colors: [
      C("巴斯克橙", "Basque Orange", "#f26522", "橙"),
      C("碳黑", "Carbon Black", "#17191c", "黑"),
      C("海蓝", "Sea Blue", "#255c7a", "蓝"),
      C("珍珠白", "Pearl White", "#e8e5dd", "白"),
    ],
    highlights: ["OMR 碳纤维", "MyO 定制涂装", "竞赛级轻量刚性"],
    story: "Orca 是 Orbea 的公路旗舰，MyO 定制让每台车都能拥有独一无二的配色。",
    builds: [
      B(2026, "M10iLTD Dura-Ace", 88800, 6.8, "Shimano Dura-Ace Di2 R9270", "Orbea Oquo Road Control", { popularity: 82 }),
      B(2025, "M20i Ultegra", 52800, 7.5, "Shimano Ultegra Di2 R8170", "Orbea Oquo Road Control", { popularity: 78 }),
      B(2024, "M30 105", 29800, 8.4, "Shimano 105 Di2 R7170", "Orbea Oquo Road Control", { popularity: 74 }),
    ],
  }),
  roadFamily("Orbea", "Avant", {
    disc: "endurance", years: [2023, 2026], gen: "Avant",
    frame: "OMR 碳纤维车架 · 耐力平台",
    fork: "Avant 全碳前叉",
    geoOverride: { stack: 590, reach: 380, headAngle: 71.8, seatAngle: 73.5, chainstay: 420, wheelbase: 1008 },
    colors: [
      C("橄榄绿", "Olive", "#4c5439", "绿"),
      C("石墨灰", "Graphite", "#6f7376", "灰"),
      C("酒红", "Wine Red", "#642332", "红"),
    ],
    highlights: ["35mm 胎容", "耐力舒适几何", "MyO 定制"],
    story: "Avant 把 Orbea 的竞赛基因调成舒适模式，适合长距离、粗糙路面和全天候骑行。",
    builds: [
      B(2026, "M30 105 Di2", 26800, 8.8, "Shimano 105 Di2 R7170", "Orbea Oquo Road Control", { popularity: 70 }),
      B(2024, "M20 Ultegra", 18800, 9.4, "Shimano 105 R7000", "Orbea Oquo Road Control", { popularity: 66 }),
    ],
  }),
  roadFamily("Orbea", "Terra", {
    disc: "gravel", years: [2023, 2025], gen: "Terra",
    frame: "OMR 碳纤维车架 · Gravel 平台",
    fork: "Terra 全碳前叉",
    geoOverride: { stack: 610, reach: 380, headAngle: 71, seatAngle: 73.5, chainstay: 435, wheelbase: 1048 },
    colors: [
      C("沙漠橙", "Desert Orange", "#c26a36", "橙"),
      C("森林绿", "Forest Green", "#35483a", "绿"),
      C("碳黑", "Carbon Black", "#191b1e", "黑"),
    ],
    highlights: ["50mm 胎容", "MyO 定制", "长距离 Gravel 几何"],
    story: "Terra 是 Orbea 的全地形平台，从碎石到轻越野，几何稳定，安装位充足。",
    builds: [
      B(2025, "M20 GRX", 32800, 9.0, "Shimano GRX RX822", "Orbea Oquo MP30", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Bianchi ───────────────────────── */
  roadFamily("Bianchi", "Oltre", {
    disc: "aero", years: [2023, 2026], gen: "Oltre RC",
    frame: "Bianchi 碳纤维车架 · 气动平台",
    fork: "Oltre 全碳气动前叉",
    geoOverride: { stack: 545, reach: 395, headAngle: 73, seatAngle: 73, chainstay: 410, wheelbase: 990 },
    colors: [
      C("Celeste 绿", "Celeste", "#00a86b", "绿"),
      C("碳黑", "Carbon Black", "#15171a", "黑"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["Celeste 标志涂装", "气动整合座舱", "Reparto Corse 赛道基因"],
    story: "Oltre 是 Bianchi 的旗舰气动车，Celeste 绿与锋利的管型放在一起，是意大利速度最直白的表达。",
    builds: [
      B(2026, "RC Dura-Ace", 118000, 6.9, "Shimano Dura-Ace Di2 R9270", "Fulcrum Speed 42", { popularity: 90 }),
      B(2025, "Comp Ultegra", 62800, 7.8, "Shimano Ultegra Di2 R8170", "Fulcrum Speed 42", { popularity: 83 }),
    ],
  }),
  roadFamily("Bianchi", "Specialissima", {
    disc: "climbing", years: [2023, 2026], gen: "Specialissima",
    frame: "Bianchi 碳纤维车架 · 轻量爬坡",
    fork: "Specialissima 全碳前叉",
    geoOverride: { stack: 540, reach: 388, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 982 },
    colors: [
      C("Celeste 绿", "Celeste", "#00a86b", "绿"),
      C("哑光黑", "Matte Black", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e7e3d8", "白"),
    ],
    highlights: ["轻量爬坡平台", "Countervail 减震", "经典 Celeste 涂装"],
    story: "Specialissima 是 Bianchi 的轻量旗舰，Countervail 碳层把震动过滤掉，只留下山路上的直接反馈。",
    builds: [
      B(2026, "RC Dura-Ace", 108000, 6.6, "Shimano Dura-Ace Di2 R9270", "Fulcrum Speed 42", { popularity: 84 }),
      B(2024, "Comp Ultegra", 59800, 7.4, "Shimano Ultegra Di2 R8170", "Fulcrum Speed 42", { popularity: 78 }),
    ],
  }),
  roadFamily("Bianchi", "Infinito", {
    disc: "endurance", years: [2023, 2026], gen: "Infinito CV",
    frame: "Bianchi 碳纤维车架 · Countervail",
    fork: "Infinito 全碳前叉",
    geoOverride: { stack: 585, reach: 382, headAngle: 72, seatAngle: 73.5, chainstay: 420, wheelbase: 1005 },
    colors: [
      C("Celeste 绿", "Celeste", "#00a86b", "绿"),
      C("石墨黑", "Graphite", "#2b2e31", "黑"),
      C("午夜蓝", "Midnight Blue", "#1a2c47", "蓝"),
    ],
    highlights: ["Countervail 减震", "32mm 胎容", "长距离耐力几何"],
    story: "Infinito 是 Bianchi 的耐力经典，Countervail 让它在石板路和长距离中保持意大利车少有的从容。",
    builds: [
      B(2026, "CV Ultegra", 48800, 8.1, "Shimano Ultegra Di2 R8170", "Fulcrum Speed 42", { popularity: 76 }),
      B(2024, "XE 105", 29800, 8.8, "Shimano 105 Di2 R7170", "Fulcrum Speed 42", { popularity: 71 }),
    ],
  }),

  /* ───────────────────────── Wilier ───────────────────────── */
  roadFamily("Wilier", "Filante SLR", {
    disc: "aero", years: [2023, 2026], gen: "Filante SLR",
    frame: "SLR 碳纤维车架 · 气动平台",
    fork: "Filante SLR 全碳前叉",
    geoOverride: { stack: 548, reach: 393, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 990 },
    colors: [
      C("意大利红", "Italian Red", "#c8102e", "红"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("海蓝", "Sea Blue", "#205b7e", "蓝"),
      C("香槟金", "Champagne", "#b49a63", "金"),
    ],
    highlights: ["SLR 顶级碳纤维", "整合式气动座舱", "意大利手工涂装"],
    story: "Filante SLR 是 Wilier 的气动旗舰，整合式座舱与深切管型把意大利美学和风洞数据放在同一台车上。",
    builds: [
      B(2026, "Dura-Ace Di2", 108000, 7.0, "Shimano Dura-Ace Di2 R9270", "Wilier HY 45", { popularity: 85 }),
      B(2025, "Ultegra Di2", 68800, 7.6, "Shimano Ultegra Di2 R8170", "Wilier HY 45", { popularity: 79 }),
    ],
  }),
  roadFamily("Wilier", "Cento10", {
    disc: "race", years: [2023, 2026], gen: "Cento10 SL",
    frame: "碳纤维车架 · 竞赛平台",
    fork: "Cento10 全碳前叉",
    geoOverride: { stack: 552, reach: 390, headAngle: 73, seatAngle: 73.5, chainstay: 410, wheelbase: 988 },
    colors: [
      C("竞速黑", "Racing Black", "#15171a", "黑"),
      C("威廉红", "Wilier Red", "#d61f2c", "红"),
      C("珍珠白", "Pearl White", "#e7e4db", "白"),
    ],
    highlights: ["气动轮廓", "竞赛几何", "高性价比意大利车"],
    story: "Cento10 把 Wilier 的竞赛基因带到更亲民的价位，适合想体验意大利公路车性格的车手。",
    builds: [
      B(2026, "Ultegra Di2", 48800, 8.2, "Shimano Ultegra Di2 R8170", "Wilier HY 45", { popularity: 75 }),
      B(2024, "105 Di2", 29800, 8.9, "Shimano 105 Di2 R7170", "Wilier HY 45", { popularity: 70 }),
    ],
  }),
  roadFamily("Wilier", "GTR", {
    disc: "endurance", years: [2023, 2025], gen: "GTR Team",
    frame: "碳纤维车架 · 耐力平台",
    fork: "GTR 全碳前叉",
    geoOverride: { stack: 585, reach: 380, headAngle: 72, seatAngle: 73.5, chainstay: 418, wheelbase: 1005 },
    colors: [
      C("石墨灰", "Graphite", "#6e7274", "灰"),
      C("威廉红", "Wilier Red", "#c8102e", "红"),
      C("海军蓝", "Navy", "#1c304d", "蓝"),
    ],
    highlights: ["耐力舒适几何", "35mm 胎容", "意大利设计"],
    story: "GTR 是 Wilier 的全能耐力车，几何放松，但车架依旧保留意大利式的转向锐度。",
    builds: [
      B(2025, "105 Di2", 19800, 9.2, "Shimano 105 Di2 R7170", "Wilier HY 45", { popularity: 66 }),
    ],
  }),
];
