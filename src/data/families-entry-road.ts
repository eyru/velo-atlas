import { B, C, roadFamily } from "./helpers";

/**
 * 入门 / 高性价比公路车补充档案。
 *
 * 价格口径：中国大陆参考价，含入门铝架、入门碳架与直销品牌。
 * 几何口径：除标注官方逐码表的车系外，其余为按车型定位建立的参考模型；
 * 购买前请以品牌当季配置表与当地门店报价为准。
 */
const NOTE =
  "中国区参考价；配置按同级公开配置与品牌当季资料整理，重量为参考值，几何为参考模型，购买前以品牌当季配置表为准。";

const GRAVEL = { stack: 612, reach: 375, headAngle: 70.8, seatAngle: 73.5, topTube: 575, headTube: 182, seatTube: 545, chainstay: 435, wheelbase: 1038, bbDrop: 78, standover: 822, forkOffset: 52, wheelRadius: 350 };
const ENDURANCE = { stack: 600, reach: 375, headAngle: 71.5, seatAngle: 73.5, topTube: 565, headTube: 190, seatTube: 545, chainstay: 425, wheelbase: 1016, bbDrop: 72, standover: 815, forkOffset: 50, wheelRadius: 336 };
const RACE_AL = { stack: 570, reach: 390, headAngle: 72.5, seatAngle: 73.5, topTube: 550, headTube: 160, seatTube: 530, chainstay: 410, wheelbase: 995, bbDrop: 70, standover: 800, forkOffset: 45, wheelRadius: 336 };
const AERO_AL = { stack: 562, reach: 392, headAngle: 72.8, seatAngle: 73.5, topTube: 552, headTube: 152, seatTube: 525, chainstay: 410, wheelbase: 992, bbDrop: 70, standover: 795, forkOffset: 45, wheelRadius: 336 };

export const entryRoadFamilies = [
  /* ───────────────────────── Specialized 闪电 ───────────────────────── */
  roadFamily("Specialized", "Diverge E5", {
    disc: "gravel", years: [2024, 2026], gen: "Diverge E5",
    frame: "E5 铝合金车架 · 砾石几何 · 多安装位",
    fork: "FACT 碳纤维砾石前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("哑光黑", "Satin Black", "#1b1d1f", "黑"),
      C("沙丘白", "Dune White", "#ded8c8", "白"),
      C("森林绿", "Forest Green", "#2f5d46", "绿"),
    ],
    highlights: ["E5 铝合金车架", "最大 700×47C 胎容", "货架/挡泥板安装位", "入门砾石完整平台"],
    story: "Diverge E5 是闪电砾石谱系里最容易被忽略的一台：它没有 Future Shock，却保留了 Diverge 的稳定几何、宽胎空间和安装位。对第一次离开柏油路的人来说，这台车比一台昂贵的竞赛车更接近“什么路都能去”。",
    builds: [
      B(2026, "E5", 6990, 10.2, "Shimano Claris R2000", "Axis Sport Disc", { tires: "700×38C", popularity: 88 }),
      B(2025, "E5 Comp", 9990, 9.9, "Shimano GRX RX400", "Axis Elite Disc", { tires: "700×38C", popularity: 80 }),
      B(2024, "E5 Elite", 11990, 9.6, "Shimano GRX RX820", "DT Swiss G540", { tires: "700×38C", popularity: 68 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Trek 崔克 ───────────────────────── */
  roadFamily("Trek", "Checkpoint ALR", {
    disc: "gravel", years: [2025, 2026], gen: "Checkpoint ALR",
    frame: "300 系列 Alpha 铝合金车架 · 砾石几何",
    fork: "Checkpoint 全碳砾石前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("锂灰", "Lithium Grey", "#8d9297", "灰"),
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("崔克红", "Trek Red", "#b5121b", "红"),
    ],
    highlights: ["Alpha 铝合金车架", "Stranglehold 可调后轴", "最大 700×45C 胎容", "上管包/货架安装位"],
    story: "Checkpoint ALR 把 Trek 的砾石平台从碳纤维下放到铝合金，保留可调后轴和大量安装位。它不是廉价的替代品，而是更耐摔、更适合通勤与长途的第一台砾石车。",
    builds: [
      B(2026, "ALR 5", 13980, 9.9, "Shimano GRX RX820", "Bontrager Paradigm SL", { tires: "700×40C", popularity: 80 }),
      B(2025, "ALR 4", 10980, 10.3, "Shimano GRX RX400", "Bontrager Paradigm Comp", { tires: "700×40C", popularity: 86 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Giant 捷安特 ───────────────────────── */
  roadFamily("Giant", "Contend AR", {
    disc: "allroad", years: [2024, 2026], gen: "Contend AR",
    frame: "ALUXX 铝合金车架 · 全地形几何",
    fork: "Advanced-Grade 复合材质前叉",
    material: "铝合金", geoOverride: { ...ENDURANCE, stack: 595, chainstay: 420, wheelbase: 1010 },
    colors: [
      C("竞速黑", "Racing Black", "#1b1d20", "黑"),
      C("珠光白", "Pearl White", "#e9e7df", "白"),
      C("捷安特蓝", "Giant Blue", "#15539b", "蓝"),
    ],
    highlights: ["ALUXX 铝合金车架", "D-Fuse 座管吸震", "最大 700×38C 胎容", "通勤/长途安装位"],
    story: "Contend AR 是 Contend 的“全地形”分支：几何比纯公路更松弛，胎容更宽，价格却仍停在入门区间。它适合那些不想买第二台砾石车、但偶尔想走烂路的通勤者。",
    builds: [
      B(2026, "AR 3", 6980, 9.6, "Shimano Sora R3000", "Giant S-X2 Disc", { tires: "700×32C", popularity: 87 }),
      B(2025, "AR 2", 7980, 9.4, "Shimano Tiagra 4720", "Giant P-R2 Disc", { tires: "700×32C", popularity: 78 }),
      B(2024, "AR 1", 9980, 9.1, "Shimano 105 R7000", "Giant P-R2 Disc", { tires: "700×32C", popularity: 66 }),
    ],
    notes: NOTE,
  }),
  roadFamily("Giant", "Revolt AL", {
    disc: "gravel", years: [2025, 2026], gen: "Revolt AL",
    frame: "ALUXX 铝合金砾石车架",
    fork: "Advanced-Grade 复合材质前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("曜石黑", "Obsidian", "#191b1d", "黑"),
      C("苔藓绿", "Moss Green", "#4b5f3b", "绿"),
      C("沙漠灰", "Desert Grey", "#a79c88", "灰"),
    ],
    highlights: ["ALUXX 铝合金车架", "D-Fuse 座管", "最大 700×45C 胎容", "货架/挡泥板安装位"],
    story: "Revolt 是捷安特最畅销的砾石车系，铝架版把价格压到入门区间，同时保留宽胎与舒适几何。对预算有限、又想一台车覆盖通勤和周末碎石路的人，这是很难绕开的选项。",
    builds: [
      B(2026, "2", 6980, 9.8, "Shimano Sora R3000", "Giant S-X2 Disc", { tires: "700×38C", popularity: 88 }),
      B(2025, "1", 8980, 9.5, "Shimano GRX RX400", "Giant P-R2 Disc", { tires: "700×38C", popularity: 79 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Merida 美利达 ───────────────────────── */
  roadFamily("Merida", "Scultura AL", {
    disc: "race", years: [2024, 2026], gen: "Scultura AL",
    frame: "Lite 铝合金车架 · 竞赛几何",
    fork: "Scultura 全碳前叉",
    material: "铝合金", geoOverride: RACE_AL,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("美利达绿", "Merida Green", "#007a4d", "绿"),
      C("珍珠白", "Pearl White", "#ecebe4", "白"),
    ],
    highlights: ["Lite 铝合金车架", "全碳前叉", "内走线", "入门竞赛几何"],
    story: "Scultura AL 是美利达把竞赛车几何下放到铝合金平台的产物。它比同价位的耐力车更趴、更直接，适合想认真练速度、又不想第一台车就上碳纤维的人。",
    builds: [
      B(2026, "100", 3990, 9.8, "Shimano Claris R2000", "Merida Comp SL", { tires: "700×25C", popularity: 90 }),
      B(2026, "300", 4990, 9.6, "Shimano Sora R3000", "Merida Comp SL", { tires: "700×25C", popularity: 87 }),
      B(2025, "400", 6290, 9.3, "Shimano Tiagra 4720", "Merida Comp SL", { tires: "700×25C", popularity: 80 }),
      B(2024, "500", 7590, 9.0, "Shimano 105 R7000", "Merida Comp SL", { tires: "700×25C", popularity: 72 }),
    ],
    notes: NOTE,
  }),
  roadFamily("Merida", "Silex AL", {
    disc: "gravel", years: [2025, 2026], gen: "Silex AL",
    frame: "Lite 铝合金砾石车架",
    fork: "Silex 全碳前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("石墨黑", "Graphite", "#3b3f42", "黑"),
      C("沙色", "Sand", "#b9a88d", "棕"),
      C("湖水蓝", "Lake Blue", "#3b7187", "蓝"),
    ],
    highlights: ["Lite 铝合金车架", "最大 700×45C 胎容", "货架/挡泥板安装位", "舒适砾石几何"],
    story: "Silex 是美利达的砾石主力，铝架版把价格拉进万元内，同时保留宽胎与长途安装位。它的几何比 Revolt 稍长，骑起来更像一台稳定的长途车。",
    builds: [
      B(2026, "200", 6990, 10.4, "Shimano Sora R3000", "Merida Comp CC", { tires: "700×38C", popularity: 84 }),
      B(2026, "400", 8990, 10.1, "Shimano GRX RX400", "Merida Comp CC", { tires: "700×40C", popularity: 77 }),
      B(2025, "600", 10990, 9.8, "Shimano GRX RX820", "Merida Team TR", { tires: "700×40C", popularity: 67 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Cannondale ───────────────────────── */
  roadFamily("Cannondale", "CAAD Optimo", {
    disc: "race", years: [2024, 2026], gen: "CAAD Optimo",
    frame: "SmartForm C2 铝合金车架",
    fork: "CAAD Optimo 全碳前叉",
    material: "铝合金", geoOverride: RACE_AL,
    colors: [
      C("铝原色", "Raw Aluminum", "#b8bcc0", "银"),
      C("竞速黑", "Racing Black", "#17191b", "黑"),
      C("佳能绿", "Cannondale Green", "#007a4d", "绿"),
    ],
    highlights: ["SmartForm C2 铝合金", "全碳前叉", "竞赛几何", "圈刹/碟刹平台"],
    story: "CAAD 是 Cannondale 的铝合金招牌，Optimo 则是这个招牌的入门入口。它没有 CAAD13 的激进管型，却保留了轻量铝架和直接的路感，是很多车手的第一台“认真骑”的公路车。",
    builds: [
      B(2026, "4", 4990, 9.7, "Shimano Claris R2000", "Cannondale RD 2.0", { tires: "700×25C", popularity: 88 }),
      B(2026, "3", 5990, 9.5, "Shimano Sora R3000", "Cannondale RD 2.0", { tires: "700×25C", popularity: 82 }),
      B(2025, "2", 7490, 9.2, "Shimano Tiagra 4720", "Cannondale RD 2.0", { tires: "700×25C", popularity: 74 }),
      B(2024, "1", 8990, 8.9, "Shimano 105 R7000", "Cannondale RD 2.0", { tires: "700×25C", popularity: 66 }),
    ],
    notes: NOTE,
  }),
  roadFamily("Cannondale", "Topstone AL", {
    disc: "gravel", years: [2024, 2026], gen: "Topstone AL",
    frame: "SmartForm C2 铝合金砾石车架",
    fork: "Topstone 全碳前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("石墨黑", "Graphite", "#34383b", "黑"),
      C("橄榄绿", "Olive Green", "#5c6047", "绿"),
      C("沙丘灰", "Dune Grey", "#b2a897", "灰"),
    ],
    highlights: ["SmartForm C2 铝合金", "最大 700×45C 胎容", "货架/挡泥板安装位", "Kingpin 吸震后三角"],
    story: "Topstone 铝合金版是 Cannondale 的砾石入门答案：保留 Kingpin 吸震结构和宽胎空间，价格却比碳架版低了一大截。它适合把通勤、周末碎石和长途都压在一台车上的人。",
    builds: [
      B(2026, "4", 7990, 10.2, "Shimano Sora R3000", "Cannondale CX 2.0", { tires: "700×37C", popularity: 84 }),
      B(2026, "3", 9990, 9.9, "Shimano GRX RX400", "Cannondale CX 2.0", { tires: "700×40C", popularity: 76 }),
      B(2025, "2", 11990, 9.6, "Shimano GRX RX820", "DT Swiss G540", { tires: "700×40C", popularity: 66 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Scott 斯科特 ───────────────────────── */
  roadFamily("Scott", "Speedster", {
    disc: "endurance", years: [2024, 2026], gen: "Speedster",
    frame: "Speedster 铝合金车架 · 耐力几何",
    fork: "Speedster 碳纤维前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("车队黑", "Team Black", "#191b1e", "黑"),
      C("电光蓝", "Electric Blue", "#1655c9", "蓝"),
      C("纯白", "Pure White", "#efeee8", "白"),
    ],
    highlights: ["铝合金车架", "碳纤维前叉", "耐力几何", "35C 胎容"],
    story: "Speedster 是 Scott 公路谱系里的入门铝架，几何比 Addict 更直立，适合长距离和日常通勤。它没有夸张的气动管型，却把 Scott 的干净线条和实用配置保留了下来。",
    builds: [
      B(2026, "40", 4990, 10.0, "Shimano Claris R2000", "Syncros Race 24", { tires: "700×28C", popularity: 88 }),
      B(2026, "30", 5990, 9.8, "Shimano Sora R3000", "Syncros Race 24", { tires: "700×28C", popularity: 82 }),
      B(2025, "20", 7990, 9.5, "Shimano Tiagra 4720", "Syncros Race 24", { tires: "700×28C", popularity: 74 }),
      B(2024, "10", 9990, 9.2, "Shimano 105 R7000", "Syncros Race 24", { tires: "700×28C", popularity: 66 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Cube 库贝 ───────────────────────── */
  roadFamily("Cube", "Attain", {
    disc: "endurance", years: [2025, 2026], gen: "Attain",
    frame: "Aluminium 6061 耐力车架",
    fork: "Attain 全碳前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("哑光黑", "Matte Black", "#1b1d1f", "黑"),
      C("深海蓝", "Deep Blue", "#1c3b63", "蓝"),
      C("银灰", "Silver Grey", "#aeb3b7", "银"),
    ],
    highlights: ["6061 铝合金车架", "全碳前叉", "耐力几何", "最大 700×34C 胎容"],
    story: "Attain 是 Cube 在欧洲卖得最好的入门耐力车之一：价格克制、配置直接、几何舒适。它不追求赛道成绩，而是让第一次骑公路车的人能连续骑上几个小时。",
    builds: [
      B(2026, "Race", 6990, 9.9, "Shimano Sora R3000", "Cube Alexrims", { tires: "700×28C", popularity: 85 }),
      B(2026, "SL", 8990, 9.7, "Shimano Tiagra 4720", "Cube Alexrims", { tires: "700×28C", popularity: 78 }),
      B(2025, "SLT", 9990, 9.4, "Shimano 105 R7000", "Cube Alexrims", { tires: "700×28C", popularity: 70 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Bianchi 比安奇 ───────────────────────── */
  roadFamily("Bianchi", "Via Nirone 7", {
    disc: "endurance", years: [2024, 2026], gen: "Via Nirone 7",
    frame: "铝合金车架 · 耐力几何",
    fork: "Bianchi 全碳前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("Celeste 绿", "Celeste", "#7fc7b6", "绿"),
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("珍珠白", "Pearl White", "#ecebe4", "白"),
    ],
    highlights: ["经典 Celeste 涂装", "铝合金车架", "全碳前叉", "耐力几何"],
    story: "Via Nirone 7 是 Bianchi 最容易被买到的入口：铝架、碳叉、经典 Celeste 涂装。它未必轻，却是少数在这个价位还能把意大利品牌辨识度完整保留下来的车。",
    builds: [
      B(2026, "Claris", 4990, 9.9, "Shimano Claris R2000", "Bianchi Reparto Corse", { tires: "700×28C", popularity: 86 }),
      B(2025, "Sora", 6990, 9.7, "Shimano Sora R3000", "Bianchi Reparto Corse", { tires: "700×28C", popularity: 78 }),
      B(2024, "Tiagra", 8990, 9.4, "Shimano Tiagra 4720", "Bianchi Reparto Corse", { tires: "700×28C", popularity: 68 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Canyon 峡谷 ───────────────────────── */
  roadFamily("Canyon", "Endurace AL", {
    disc: "endurance", years: [2025, 2026], gen: "Endurace AL",
    frame: "铝合金耐力车架 · 舒适几何",
    fork: "Endurace 全碳前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("隐身黑", "Stealth Black", "#17191b", "黑"),
      C("峡谷灰", "Canyon Grey", "#8e9397", "灰"),
      C("深海蓝", "Deep Blue", "#1c3659", "蓝"),
    ],
    highlights: ["铝合金车架", "全碳前叉", "耐力几何", "最大 700×35C 胎容"],
    story: "Endurace AL 是 Canyon 直销体系里最便宜的公路入口。它把碳架版的长途几何和舒适性保留下来，用铝合金换低价格，是“第一台真正能骑长途的公路车”的典型答案。",
    builds: [
      B(2026, "6", 6990, 9.5, "Shimano Sora R3000", "Canyon Alexrims", { tires: "700×30C", popularity: 87 }),
      B(2026, "7", 8990, 9.3, "Shimano Tiagra 4720", "Canyon Alexrims", { tires: "700×30C", popularity: 79 }),
      B(2025, "8", 10990, 9.0, "Shimano 105 R7100", "DT Swiss Endurance LN", { tires: "700×30C", popularity: 70 }),
    ],
    notes: NOTE,
  }),
  roadFamily("Canyon", "Grail AL", {
    disc: "gravel", years: [2025, 2026], gen: "Grail AL",
    frame: "铝合金砾石车架",
    fork: "Grail 全碳前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("砾石灰", "Gravel Grey", "#777b7d", "灰"),
      C("森林绿", "Forest Green", "#314e3c", "绿"),
      C("沙色", "Sand", "#b8a78c", "棕"),
    ],
    highlights: ["铝合金车架", "全碳前叉", "双把位设计", "最大 700×45C 胎容"],
    story: "Grail AL 把 Canyon 的砾石平台压进万元内，保留双把位和宽胎空间。它不是最轻的砾石车，却是直销价格下配置最完整的入门选择之一。",
    builds: [
      B(2026, "6", 8990, 10.1, "Shimano GRX RX400", "Canyon Alexrims", { tires: "700×40C", popularity: 82 }),
      B(2025, "7", 10990, 9.8, "Shimano GRX RX820", "DT Swiss G540", { tires: "700×40C", popularity: 72 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Felt 费尔特 ───────────────────────── */
  roadFamily("Felt", "VR", {
    disc: "endurance", years: [2024, 2026], gen: "VR",
    frame: "Felt 铝合金耐力车架",
    fork: "VR 全碳前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("费尔特红", "Felt Red", "#b5121b", "红"),
      C("银灰", "Silver", "#b7bbbe", "银"),
    ],
    highlights: ["铝合金车架", "全碳前叉", "耐力几何", "最大 700×32C 胎容"],
    story: "VR 是 Felt 的耐力公路入口，几何比 FR 更放松，配置也更偏日常。它适合那些喜欢 Felt 的干净设计、但不准备为竞赛车买单的人。",
    builds: [
      B(2026, "40", 5990, 9.7, "Shimano Sora R3000", "Felt Devox 2.1", { tires: "700×28C", popularity: 84 }),
      B(2025, "30", 7990, 9.5, "Shimano Tiagra 4720", "Felt Devox 2.1", { tires: "700×28C", popularity: 76 }),
      B(2024, "20", 9990, 9.2, "Shimano 105 R7000", "Felt Devox 2.1", { tires: "700×28C", popularity: 66 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Wilier 威廉 ───────────────────────── */
  roadFamily("Wilier", "Montegrappa", {
    disc: "endurance", years: [2024, 2026], gen: "Montegrappa",
    frame: "铝合金车架 · 耐力几何",
    fork: "Montegrappa 全碳前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("意大利红", "Italian Red", "#b01722", "红"),
      C("银灰", "Silver Grey", "#b4b8bb", "银"),
    ],
    highlights: ["铝合金车架", "全碳前叉", "意大利品牌入门款", "耐力几何"],
    story: "Montegrappa 是 Wilier 面向入门市场的铝架耐力车。它没有 Filante 的气动锋芒，却把意大利品牌的涂装和公路车的基本功做得很完整。",
    builds: [
      B(2026, "Sora", 5990, 9.8, "Shimano Sora R3000", "Wilier Corsa", { tires: "700×28C", popularity: 80 }),
      B(2025, "Tiagra", 7990, 9.5, "Shimano Tiagra 4720", "Wilier Corsa", { tires: "700×28C", popularity: 72 }),
      B(2024, "105", 9990, 9.2, "Shimano 105 R7000", "Wilier Corsa", { tires: "700×28C", popularity: 64 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Marin 马林 ───────────────────────── */
  roadFamily("Marin", "Gestalt", {
    disc: "gravel", years: [2025, 2026], gen: "Gestalt",
    frame: "Series 2 铝合金车架 · 全地形几何",
    fork: "Gestalt 全碳前叉",
    material: "铝合金", geoOverride: GRAVEL,
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("马林绿", "Marin Green", "#315c4a", "绿"),
      C("沙色", "Sand", "#b8a78c", "棕"),
    ],
    highlights: ["Series 2 铝合金", "全碳前叉", "最大 700×45C 胎容", "货架/挡泥板安装位"],
    story: "Gestalt 是 Marin 的全地形公路车，几何比纯砾石车更接近公路，适合通勤、长途和轻度碎石。它的价格和配置都很直接，是入门 all-road 的实用派。",
    builds: [
      B(2026, "1", 5990, 10.1, "Shimano Sora R3000", "Marin Aluminum Disc", { tires: "700×35C", popularity: 83 }),
      B(2026, "2", 6990, 9.9, "Shimano Tiagra 4720", "Marin Aluminum Disc", { tires: "700×35C", popularity: 76 }),
      B(2025, "X", 7990, 9.7, "Shimano GRX RX400", "Marin Aluminum Disc", { tires: "700×40C", popularity: 68 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── Decathlon 迪卡侬 ───────────────────────── */
  roadFamily("Decathlon", "Triban RC120", {
    disc: "endurance", years: [2025, 2026], gen: "Triban RC120",
    frame: "Triban 铝合金车架 · 耐力几何",
    fork: "Triban 碳纤维前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("哑光黑", "Matte Black", "#1a1c1e", "黑"),
      C("迪卡侬蓝", "Decathlon Blue", "#16529b", "蓝"),
      C("沙色", "Sand", "#b7a78d", "棕"),
    ],
    highlights: ["铝合金车架", "碳纤维前叉", "机械碟刹", "入门价格标杆"],
    story: "Triban RC120 是很多人真正意义上的第一台公路车：价格低、维护简单、几何舒适。它不是一台让人兴奋的车，却把“先骑起来”这件事的门槛降到了最低。",
    builds: [
      B(2026, "Disc", 2999, 10.8, "microSHIFT 2×8", "Triban 铝合金碟刹轮组", { tires: "700×32C", popularity: 96 }),
      B(2025, "Rim", 3499, 10.5, "Shimano Claris R2000", "Triban 铝合金轮组", { tires: "700×28C", popularity: 82 }),
    ],
    notes: NOTE,
  }),
  roadFamily("Decathlon", "Triban RC500", {
    disc: "endurance", years: [2025, 2026], gen: "Triban RC500",
    frame: "Triban 铝合金车架 · 耐力几何",
    fork: "Triban 碳纤维前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("哑光黑", "Matte Black", "#191b1d", "黑"),
      C("迪卡侬蓝", "Decathlon Blue", "#16529b", "蓝"),
    ],
    highlights: ["铝合金车架", "碳纤维前叉", "Shimano Sora 9 速", "液压碟刹"],
    story: "RC500 是 RC120 的进阶版：更完整的 9 速套件、液压碟刹和更轻的轮组。它仍然便宜，但已经能支撑起规律训练和长距离骑行。",
    builds: [
      B(2026, "Disc", 4999, 10.2, "Shimano Sora R3000", "Triban 铝合金碟刹轮组", { tires: "700×32C", popularity: 90 }),
      B(2025, "Disc", 5499, 10.1, "Shimano Sora R3000", "Triban 铝合金碟刹轮组", { tires: "700×32C", popularity: 78 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── JAVA ───────────────────────── */
  roadFamily("JAVA", "Veloce", {
    disc: "allroad", years: [2025, 2026], gen: "Veloce",
    frame: "JAVA 铝合金车架 · 全地形几何",
    fork: "JAVA 碳纤维前叉",
    material: "铝合金", geoOverride: { ...ENDURANCE, stack: 590, chainstay: 425 },
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("JAVA 红", "JAVA Red", "#b5121b", "红"),
      C("银灰", "Silver Grey", "#b5b9bc", "银"),
    ],
    highlights: ["铝合金车架", "碳纤维前叉", "全内走线", "国产入门价格"],
    story: "JAVA Veloce 是国产入门公路车里辨识度很高的一台：全内走线、碳叉、碟刹，价格却压在三千元档。它适合想要“看起来像现代公路车”的首购用户。",
    builds: [
      B(2026, "A5", 2999, 10.5, "L-TWOO A5 2×9", "JAVA 铝合金碟刹轮组", { tires: "700×28C", popularity: 90 }),
      B(2025, "Sora", 3599, 10.2, "Shimano Sora R3000", "JAVA 铝合金碟刹轮组", { tires: "700×28C", popularity: 80 }),
    ],
    notes: NOTE,
  }),
  roadFamily("JAVA", "Siluro", {
    disc: "aero", years: [2025, 2026], gen: "Siluro",
    frame: "JAVA T800 碳纤维气动车架",
    fork: "JAVA 全碳气动前叉",
    material: "碳纤维", geoOverride: AERO_AL,
    colors: [
      C("竞速黑", "Racing Black", "#17191b", "黑"),
      C("J-Air 蓝", "J-Air Blue", "#1c4f9c", "蓝"),
      C("珍珠白", "Pearl White", "#ecebe4", "白"),
    ],
    highlights: ["T800 碳纤维车架", "全内走线", "气动管型", "入门碳架气动车"],
    story: "Siluro 把国产碳纤维气动车的价格拉到七千元档。它不是顶级竞赛车，却用一体式座舱、隐藏走线和气动管型，满足了很多人对“第一台碳车”的想象。",
    builds: [
      B(2026, "Tiagra", 6999, 8.8, "Shimano Tiagra 4720", "JAVA 铝合金碟刹轮组", { tires: "700×28C", popularity: 86 }),
      B(2025, "105", 8999, 8.5, "Shimano 105 R7000", "JAVA 铝合金碟刹轮组", { tires: "700×28C", popularity: 76 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── TWITTER ───────────────────────── */
  roadFamily("TWITTER", "Raptor", {
    disc: "race", years: [2024, 2026], gen: "Raptor",
    frame: "TWITTER T800 碳纤维车架",
    fork: "TWITTER 全碳前叉",
    material: "碳纤维", geoOverride: RACE_AL,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("TWITTER 红", "Twitter Red", "#b5121b", "红"),
      C("电光蓝", "Electric Blue", "#1655c9", "蓝"),
    ],
    highlights: ["T800 碳纤维车架", "全内走线", "液压碟刹", "直销价格"],
    story: "TWITTER Raptor 是国产直销碳架公路车的代表之一：配置表漂亮、价格低、型号迭代快。它适合愿意自己做功课、也接受线上购买与调试的用户。",
    builds: [
      B(2026, "A7", 3999, 9.2, "L-TWOO A7 2×10", "TWITTER 铝合金碟刹轮组", { tires: "700×28C", popularity: 88 }),
      B(2025, "Sora", 4999, 9.0, "Shimano Sora R3000", "TWITTER 铝合金碟刹轮组", { tires: "700×28C", popularity: 80 }),
      B(2024, "Tiagra", 5999, 8.8, "Shimano Tiagra 4720", "TWITTER 铝合金碟刹轮组", { tires: "700×28C", popularity: 70 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── XDS 喜德盛 ───────────────────────── */
  roadFamily("XDS", "RC200", {
    disc: "endurance", years: [2024, 2026], gen: "RC200",
    frame: "X6 铝合金车架 · 耐力几何",
    fork: "XDS 碳纤维前叉",
    material: "铝合金", geoOverride: ENDURANCE,
    colors: [
      C("曜石黑", "Obsidian", "#191b1d", "黑"),
      C("喜德盛红", "XDS Red", "#b5121b", "红"),
      C("深海蓝", "Deep Blue", "#1b3b63", "蓝"),
    ],
    highlights: ["X6 铝合金车架", "碳纤维前叉", "机械碟刹", "两千元档入门"],
    story: "RC200 是喜德盛公路谱系里最便宜的碟刹入口之一。它的配置不华丽，但车架、前叉和几何都按正经公路车来做，适合预算极紧、又想避开“伪公路”的用户。",
    builds: [
      B(2026, "Tourney", 1999, 11.2, "Shimano Tourney 2×7", "XDS 铝合金碟刹轮组", { tires: "700×28C", popularity: 94 }),
      B(2025, "Claris", 2399, 10.9, "Shimano Claris R2000", "XDS 铝合金碟刹轮组", { tires: "700×28C", popularity: 86 }),
      B(2024, "Sora", 2699, 10.6, "Shimano Sora R3000", "XDS 铝合金碟刹轮组", { tires: "700×28C", popularity: 74 }),
    ],
    notes: NOTE,
  }),
  roadFamily("XDS", "RC300", {
    disc: "race", years: [2025, 2026], gen: "RC300",
    frame: "X6 铝合金车架 · 竞赛几何",
    fork: "XDS 碳纤维前叉",
    material: "铝合金", geoOverride: RACE_AL,
    colors: [
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("天青白", "Sky White", "#e8ecec", "白"),
      C("喜德盛红", "XDS Red", "#b5121b", "红"),
    ],
    highlights: ["X6 铝合金车架", "碳纤维前叉", "全内走线", "万元内竞赛入门"],
    story: "RC300 比 RC200 更接近“训练车”：几何更紧凑，配置更完整，价格仍停在三千元档。它适合已经确定要骑公路、准备开始规律训练的人。",
    builds: [
      B(2026, "Sora", 2999, 10.4, "Shimano Sora R3000", "XDS 铝合金碟刹轮组", { tires: "700×28C", popularity: 88 }),
      B(2025, "Tiagra", 3499, 10.1, "Shimano Tiagra 4720", "XDS 铝合金碟刹轮组", { tires: "700×28C", popularity: 78 }),
    ],
    notes: NOTE,
  }),
  roadFamily("XDS", "AD300", {
    disc: "aero", years: [2025, 2026], gen: "AD300",
    frame: "X6 铝合金气动车架 · 全内走线",
    fork: "XDS 全碳气动前叉",
    material: "铝合金", geoOverride: AERO_AL,
    colors: [
      C("松烟灰", "Pine Smoke", "#5b6266", "灰"),
      C("天青白", "Sky White", "#e8ecec", "白"),
      C("星云白", "Nebula White", "#dfe3e6", "白"),
    ],
    highlights: ["X6 铝合金气动车架", "全内走线", "液压碟刹", "AD 系列入门款"],
    story: "AD300 把喜德盛 AD 气动谱系的价格拉到四千元内，保留全内走线和气动管型。它是“看起来很快”的入门车，适合平路巡航和想要一体式座舱视觉的用户。",
    builds: [
      B(2026, "RX 12S", 3599, 10.2, "L-TWOO RX 2x12", "Branta 铝合金碟刹轮组", { tires: "700×28C", popularity: 90 }),
      B(2025, "Sora", 3999, 10.0, "Shimano Sora R3000", "Branta 铝合金碟刹轮组", { tires: "700×28C", popularity: 80 }),
    ],
    notes: NOTE,
  }),

  /* ───────────────────────── PARDUS 瑞豹 ───────────────────────── */
  roadFamily("PARDUS", "ROBIN AL", {
    disc: "race", years: [2025, 2026], gen: "ROBIN AL",
    frame: "PARDUS 铝合金车架 · 竞赛几何",
    fork: "PARDUS 全碳前叉",
    material: "铝合金", geoOverride: RACE_AL,
    colors: [
      C("雾银", "Mist Silver", "#b5b9bc", "银"),
      C("哑光黑", "Matte Black", "#181a1c", "黑"),
      C("瑞豹蓝", "Pardus Blue", "#16529b", "蓝"),
    ],
    highlights: ["铝合金车架", "全碳前叉", "全内走线", "国产竞赛入门"],
    story: "ROBIN AL 是瑞豹把 ROBIN 竞赛谱系下放到铝合金的入口。它保留了激进座舱和全内走线，价格却只有碳架 ROBIN 的一半左右，适合想练速度的首购用户。",
    builds: [
      B(2026, "Sora", 4999, 9.8, "Shimano Sora R3000", "PARDUS 铝合金轮组", { tires: "700×28C", popularity: 83 }),
      B(2025, "Tiagra", 5999, 9.5, "Shimano Tiagra 4720", "PARDUS 铝合金轮组", { tires: "700×28C", popularity: 74 }),
    ],
    notes: NOTE,
  }),
];
