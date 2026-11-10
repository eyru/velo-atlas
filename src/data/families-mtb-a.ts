import { B, C, mtbFamily } from "./helpers";

export const mtbFamiliesA = [
  /* ───────────────────────── Santa Cruz ───────────────────────── */
  mtbFamily("Santa Cruz", "Nomad", {
    disc: "enduro", years: [2023, 2026], gen: "Nomad 6",
    frame: "Carbon C / CC 碳纤维车架 · VPP 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 170, wheelSize: "29\" / MX",
    geoOverride: { stack: 632, reach: 480, headAngle: 64.2, seatAngle: 77.2, chainstay: 440, wheelbase: 1215, bbDrop: 32 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("冰川蓝", "Glacier Blue", "#3e7fa6", "蓝"),
      C("岩浆橙", "Magma Orange", "#d5622a", "橙"),
    ],
    highlights: ["VPP 悬挂", "混合轮径", "自由骑取向的耐力车"],
    story: "Nomad 是 Santa Cruz 的自由骑图腾，第六代用混合轮径和更长的行程，把“能骑上去、敢冲下来”写进几何里。",
    builds: [
      B(2026, "CC X0 AXS", 78800, 14.6, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 30", { popularity: 86 }),
      B(2025, "C GX AXS", 52800, 15.4, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { popularity: 80 }),
    ],
  }),
  mtbFamily("Santa Cruz", "Bronson", {
    disc: "trail", years: [2023, 2026], gen: "Bronson 5",
    frame: "Carbon C / CC 碳纤维车架 · VPP 悬挂",
    fork: "Fox 36 Factory 160mm", frontTravel: 160, rearTravel: 150, wheelSize: "29\" / MX",
    geoOverride: { stack: 625, reach: 472, headAngle: 64.7, seatAngle: 77, chainstay: 438, wheelbase: 1200, bbDrop: 34 },
    colors: [
      C("森林绿", "Forest Green", "#3e523f", "绿"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("沙丘棕", "Dune", "#a08160", "棕"),
    ],
    highlights: ["混合轮径", "150mm 后行程", "全能山地平台"],
    story: "Bronson 是 Santa Cruz 对“一台车搞定大部分山路”的回答，混合轮径让它在弯道里更灵活。",
    builds: [
      B(2026, "CC X0 AXS", 72800, 14.2, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 30", { popularity: 82 }),
      B(2024, "C GX AXS", 46800, 15.0, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { popularity: 77 }),
    ],
  }),
  mtbFamily("Santa Cruz", "Hightower", {
    disc: "trail", years: [2023, 2026], gen: "Hightower 3",
    frame: "Carbon C / CC 碳纤维车架 · VPP 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 145, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 470, headAngle: 65, seatAngle: 76.8, chainstay: 435, wheelbase: 1195, bbDrop: 38 },
    colors: [
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("苔藓绿", "Moss Green", "#4b5b3d", "绿"),
      C("峡谷棕", "Canyon Brown", "#8a6a4d", "棕"),
    ],
    highlights: ["29 吋全能", "145mm 后行程", "长距离山地舒适"],
    story: "Hightower 是 Santa Cruz 的 29 吋主力，几何稳、行程够，适合从林道到多日穿越的所有场景。",
    builds: [
      B(2026, "CC X0 AXS", 70800, 14.0, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 30", { popularity: 81 }),
      B(2024, "C GX AXS", 44800, 14.8, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { popularity: 76 }),
    ],
  }),
  mtbFamily("Santa Cruz", "Tallboy", {
    disc: "downcountry", years: [2023, 2026], gen: "Tallboy 5",
    frame: "Carbon C / CC 碳纤维车架 · VPP 悬挂",
    fork: "Fox 34 Factory 130mm", frontTravel: 130, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 610, reach: 462, headAngle: 66, seatAngle: 76.4, chainstay: 435, wheelbase: 1165, bbDrop: 42 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
      C("沙色", "Sand", "#b1997a", "棕"),
    ],
    highlights: ["短行程 29 吋", "爬坡效率高", "下坡能力超出预期"],
    story: "Tallboy 是 Santa Cruz 的短行程 29 吋，爬坡轻快，下坡却总比数据看起来更能打。",
    builds: [
      B(2026, "CC X0 AXS", 65800, 12.8, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 28", { popularity: 78 }),
      B(2024, "C GX AXS", 42800, 13.6, "SRAM GX Eagle AXS", "Santa Cruz Reserve 28", { popularity: 73 }),
    ],
  }),
  mtbFamily("Santa Cruz", "Blur", {
    disc: "xc", years: [2023, 2026], gen: "Blur TR",
    frame: "Carbon CC 碳纤维车架 · VPP 悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 115, wheelSize: "29\"",
    geoOverride: { stack: 598, reach: 455, headAngle: 67.2, seatAngle: 75.8, chainstay: 432, wheelbase: 1135, bbDrop: 56 },
    colors: [
      C("车队蓝", "Team Blue", "#1c5fa8", "蓝"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["XC 竞赛平台", "115mm 后行程", "轻量碳纤维车架"],
    story: "Blur 是 Santa Cruz 的 XC 竞赛车，车架轻、踩踏直接，是越野世界杯的常客。",
    builds: [
      B(2026, "CC XX SL AXS", 88800, 10.4, "SRAM XX SL Eagle AXS", "Santa Cruz Reserve 25", { popularity: 84 }),
      B(2024, "CC X0 AXS", 58800, 11.2, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 25", { popularity: 78 }),
    ],
  }),
  mtbFamily("Santa Cruz", "V10", {
    disc: "downhill", years: [2023, 2026], gen: "V10 9",
    frame: "Carbon CC 碳纤维车架 · VPP 速降悬挂",
    fork: "Fox 40 Factory 203mm", frontTravel: 203, rearTravel: 215, wheelSize: "29\"",
    geoOverride: { stack: 640, reach: 490, headAngle: 63, seatAngle: 77.5, chainstay: 445, wheelbase: 1260, bbDrop: 25 },
    colors: [
      C("车队黑", "Team Black", "#121417", "黑"),
      C("荧光黄", "Fluoro Yellow", "#d7e021", "黄"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["速降世界冠军平台", "215mm 后行程", "可调几何芯片"],
    story: "V10 是速降世界杯的常胜平台，第九代把几何芯片和悬挂曲线都推到更极端的范围。",
    builds: [
      B(2026, "CC DH X0", 98800, 16.8, "SRAM X0 DH", "Santa Cruz Reserve 31 DH", { popularity: 87 }),
    ],
  }),

  /* ───────────────────────── Yeti ───────────────────────── */
  mtbFamily("Yeti", "SB160", {
    disc: "enduro", years: [2023, 2026], gen: "SB160",
    frame: "Turq 碳纤维车架 · Switch Infinity 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.5, seatAngle: 77, chainstay: 440, wheelbase: 1212, bbDrop: 34 },
    colors: [
      C("土耳其蓝", "Turquoise", "#13a3a3", "蓝"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("芥末黄", "Mustard", "#c9a227", "黄"),
    ],
    highlights: ["Switch Infinity 悬挂", "Turq 顶级碳布", "耐力赛取向"],
    story: "SB160 是 Yeti 的耐力主力，Switch Infinity 转点让踩踏和吸震之间的平衡非常 Yeti。",
    builds: [
      B(2026, "Turq X0 AXS", 92800, 14.4, "SRAM X0 Eagle AXS", "Yeti DT Swiss EXC 1501", { popularity: 85 }),
      B(2025, "C2 GX AXS", 58800, 15.2, "SRAM GX Eagle AXS", "Yeti DT Swiss M 1700", { popularity: 79 }),
    ],
  }),
  mtbFamily("Yeti", "SB140", {
    disc: "trail", years: [2023, 2026], gen: "SB140",
    frame: "Turq 碳纤维车架 · Switch Infinity 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 622, reach: 470, headAngle: 65.2, seatAngle: 76.8, chainstay: 436, wheelbase: 1195, bbDrop: 38 },
    colors: [
      C("土耳其蓝", "Turquoise", "#13a3a3", "蓝"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("砖红", "Brick Red", "#a4442f", "红"),
    ],
    highlights: ["140mm 全能行程", "Switch Infinity 悬挂", "林道与耐力兼顾"],
    story: "SB140 是 Yeti 的全能林道车，行程比 SB160 收敛，但下坡的底气并没有少太多。",
    builds: [
      B(2026, "Turq X0 AXS", 82800, 13.6, "SRAM X0 Eagle AXS", "Yeti DT Swiss EXC 1501", { popularity: 80 }),
      B(2024, "C2 GX AXS", 52800, 14.4, "SRAM GX Eagle AXS", "Yeti DT Swiss M 1700", { popularity: 75 }),
    ],
  }),
  mtbFamily("Yeti", "ARC", {
    disc: "hardtail", years: [2023, 2026], gen: "ARC",
    material: "碳纤维", frame: "Turq 碳纤维硬尾车架",
    fork: "Fox 34 Factory 130mm", frontTravel: 130, wheelSize: "29\"",
    geoOverride: { stack: 615, reach: 455, headAngle: 66.5, seatAngle: 75.5, chainstay: 430, wheelbase: 1140, bbDrop: 52 },
    colors: [
      C("土耳其蓝", "Turquoise", "#13a3a3", "蓝"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("珍珠白", "Pearl White", "#e6e3da", "白"),
    ],
    highlights: ["碳纤维硬尾", "130mm 前叉", "轻量越野平台"],
    story: "ARC 是 Yeti 的硬尾，简单、轻、直接，适合把林道骑成一条连续的节奏。",
    builds: [
      B(2026, "Turq X0 AXS", 58800, 10.2, "SRAM X0 Eagle AXS", "Yeti DT Swiss XR 1700", { popularity: 72 }),
      B(2024, "C2 GX", 32800, 11.0, "SRAM GX Eagle", "Yeti DT Swiss XR 1700", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Pivot ───────────────────────── */
  mtbFamily("Pivot", "Firebird", {
    disc: "enduro", years: [2023, 2026], gen: "Firebird 29",
    frame: "Carbon 碳纤维车架 · dw-link 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 165, wheelSize: "29\"",
    geoOverride: { stack: 632, reach: 482, headAngle: 64.3, seatAngle: 76.8, chainstay: 438, wheelbase: 1215, bbDrop: 32 },
    colors: [
      C("凤凰红", "Firebird Red", "#b3202a", "红"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("金属蓝", "Metallic Blue", "#2b5d8c", "蓝"),
    ],
    highlights: ["dw-link 悬挂", "165mm 后行程", "耐力赛速度机器"],
    story: "Firebird 是 Pivot 的耐力旗舰，dw-link 让它在踩踏时保持支撑，在冲击下又能快速让开。",
    builds: [
      B(2026, "Team X0 AXS", 88800, 14.8, "SRAM X0 Eagle AXS", "Pivot DT Swiss XM 1700", { popularity: 81 }),
      B(2024, "Ride GX AXS", 58800, 15.6, "SRAM GX Eagle AXS", "Pivot DT Swiss XM 1700", { popularity: 74 }),
    ],
  }),
  mtbFamily("Pivot", "Switchblade", {
    disc: "trail", years: [2023, 2026], gen: "Switchblade",
    frame: "Carbon 碳纤维车架 · dw-link 悬挂",
    fork: "Fox 36 Factory 160mm", frontTravel: 160, rearTravel: 142, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 472, headAngle: 65.2, seatAngle: 76.5, chainstay: 432, wheelbase: 1198, bbDrop: 38 },
    colors: [
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("松石绿", "Teal", "#247b7b", "绿"),
      C("沙金", "Sand Gold", "#b09262", "金"),
    ],
    highlights: ["142mm 后行程", "dw-link 悬挂", "全能林道取向"],
    story: "Switchblade 是 Pivot 的全能车，行程分配让它在爬坡和下降之间保持一种很少见的从容。",
    builds: [
      B(2026, "Team X0 AXS", 82800, 13.8, "SRAM X0 Eagle AXS", "Pivot DT Swiss XM 1700", { popularity: 78 }),
      B(2024, "Ride GX AXS", 52800, 14.6, "SRAM GX Eagle AXS", "Pivot DT Swiss XM 1700", { popularity: 72 }),
    ],
  }),
  mtbFamily("Pivot", "Trail 429", {
    disc: "downcountry", years: [2023, 2026], gen: "Trail 429",
    frame: "Carbon 碳纤维车架 · dw-link 悬挂",
    fork: "Fox 34 Factory 130mm", frontTravel: 130, rearTravel: 120, wheelSize: "29\"",
    geoOverride: { stack: 608, reach: 460, headAngle: 66.2, seatAngle: 76.2, chainstay: 432, wheelbase: 1160, bbDrop: 44 },
    colors: [
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("钴蓝", "Cobalt Blue", "#24508c", "蓝"),
      C("苔绿", "Moss", "#4d5c3c", "绿"),
    ],
    highlights: ["短行程 29 吋", "dw-link 悬挂", "爬坡效率突出"],
    story: "Trail 429 是 Pivot 的短行程 29 吋，轻快、灵活，是那种越骑越觉得行程够用的车。",
    builds: [
      B(2026, "Team X0 AXS", 72800, 12.6, "SRAM X0 Eagle AXS", "Pivot DT Swiss XR 1700", { popularity: 75 }),
      B(2024, "Ride GX AXS", 46800, 13.4, "SRAM GX Eagle AXS", "Pivot DT Swiss XR 1700", { popularity: 70 }),
    ],
  }),

  /* ───────────────────────── Commencal ───────────────────────── */
  mtbFamily("Commencal", "Supreme DH", {
    disc: "downhill", years: [2023, 2026], gen: "Supreme DH V5",
    material: "铝合金", frame: "铝合金车架 · 速降悬挂",
    fork: "Fox 40 Factory 200mm", frontTravel: 200, rearTravel: 220, wheelSize: "29\"",
    geoOverride: { stack: 638, reach: 488, headAngle: 63.2, seatAngle: 77.3, chainstay: 445, wheelbase: 1255, bbDrop: 28 },
    colors: [
      C("安道尔灰", "Andorra Grey", "#5d6165", "灰"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("荧光黄", "Fluoro Yellow", "#d7e021", "黄"),
    ],
    highlights: ["铝合金速降车", "220mm 后行程", "世界杯车队平台"],
    story: "Supreme DH 是 Commencal 的速降武器，铝合金车架在极限冲击下的可靠性是它的信仰。",
    builds: [
      B(2026, "Race X0 DH", 68800, 17.2, "SRAM X0 DH", "e*thirteen LG1", { popularity: 79 }),
    ],
  }),
  mtbFamily("Commencal", "Meta SX", {
    disc: "enduro", years: [2023, 2026], gen: "Meta SX V5",
    material: "铝合金", frame: "铝合金车架 · 耐力悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 165, wheelSize: "29\" / MX",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.4, seatAngle: 77, chainstay: 440, wheelbase: 1215, bbDrop: 33 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("安道尔灰", "Andorra Grey", "#5d6165", "灰"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["铝合金耐力车", "混合轮径", "高性价比"],
    story: "Meta SX 是 Commencal 的耐力主力，铝合金车架把价格压住，却把几何和行程给足。",
    builds: [
      B(2026, "Race X0 AXS", 52800, 16.0, "SRAM X0 Eagle AXS", "e*thirteen LG1", { popularity: 76 }),
      B(2024, "Ride GX AXS", 33800, 16.8, "SRAM GX Eagle AXS", "e*thirteen LG1", { popularity: 71 }),
    ],
  }),
  mtbFamily("Commencal", "Clash", {
    disc: "trail", years: [2023, 2026], gen: "Clash 2024",
    material: "铝合金", frame: "铝合金车架 · 林道悬挂",
    fork: "Fox 36 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "27.5\"",
    geoOverride: { stack: 618, reach: 470, headAngle: 64.8, seatAngle: 76.5, chainstay: 432, wheelbase: 1190, bbDrop: 30 },
    colors: [
      C("安道尔灰", "Andorra Grey", "#5d6165", "灰"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
    ],
    highlights: ["27.5 吋灵活", "铝合金车架", "自由骑风格"],
    story: "Clash 是 Commencal 的 27.5 吋自由骑车，灵活、耐摔，适合把林道当成游乐场。",
    builds: [
      B(2026, "Race GX AXS", 42800, 15.6, "SRAM GX Eagle AXS", "e*thirteen LG1", { popularity: 72 }),
      B(2024, "Ride NX", 26800, 16.4, "SRAM NX Eagle", "e*thirteen LG1", { popularity: 67 }),
    ],
  }),

  /* ───────────────────────── YT ───────────────────────── */
  mtbFamily("YT", "Tues", {
    disc: "downhill", years: [2023, 2026], gen: "Tues MK3",
    material: "铝合金", frame: "铝合金车架 · V4L 速降悬挂",
    fork: "Fox 40 Factory 200mm", frontTravel: 200, rearTravel: 208, wheelSize: "29\"",
    geoOverride: { stack: 636, reach: 485, headAngle: 63.4, seatAngle: 77.2, chainstay: 445, wheelbase: 1250, bbDrop: 26 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("YT 黄", "YT Yellow", "#e3d81f", "黄"),
      C("竞速红", "Race Red", "#c01e2c", "红"),
    ],
    highlights: ["V4L 悬挂", "208mm 后行程", "直销高性价比"],
    story: "Tues 是 YT 的速降车，直销模式把价格打下来，赛道上却一点不含糊。",
    builds: [
      B(2026, "Uncaged X0 DH", 48800, 17.0, "SRAM X0 DH", "e*thirteen LG1", { popularity: 75 }),
    ],
  }),
  mtbFamily("YT", "Capra", {
    disc: "enduro", years: [2023, 2026], gen: "Capra MK3",
    material: "铝合金", frame: "铝合金车架 · V4L 悬挂",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 165, wheelSize: "29\"",
    geoOverride: { stack: 628, reach: 478, headAngle: 64.6, seatAngle: 76.8, chainstay: 440, wheelbase: 1210, bbDrop: 34 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("YT 黄", "YT Yellow", "#e3d81f", "黄"),
      C("军绿", "Army Green", "#4e5540", "绿"),
    ],
    highlights: ["V4L 悬挂", "165mm 后行程", "直销价格优势"],
    story: "Capra 是 YT 的耐力车，行程充足、几何激进，是“用更少的钱换更多下坡”的代表。",
    builds: [
      B(2026, "Uncaged X0 AXS", 42800, 15.8, "SRAM X0 Eagle AXS", "e*thirteen LG1", { popularity: 74 }),
      B(2024, "Core 3 GX", 28800, 16.5, "SRAM GX Eagle", "e*thirteen LG1", { popularity: 69 }),
    ],
  }),
  mtbFamily("YT", "Jeffsy", {
    disc: "trail", years: [2023, 2026], gen: "Jeffsy MK3",
    material: "铝合金", frame: "铝合金车架 · V4L 悬挂",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 145, wheelSize: "29\"",
    geoOverride: { stack: 620, reach: 468, headAngle: 65.2, seatAngle: 76.5, chainstay: 435, wheelbase: 1192, bbDrop: 38 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("军绿", "Army Green", "#4e5540", "绿"),
      C("YT 黄", "YT Yellow", "#e3d81f", "黄"),
    ],
    highlights: ["145mm 全能行程", "V4L 悬挂", "直销高性价比"],
    story: "Jeffsy 是 YT 的全能林道车，能爬、能下、能玩，是很多人第一台真正意义上的山地车。",
    builds: [
      B(2026, "Uncaged GX AXS", 36800, 14.6, "SRAM GX Eagle AXS", "e*thirteen LG1", { popularity: 73 }),
      B(2024, "Core 3 GX", 23800, 15.2, "SRAM GX Eagle", "e*thirteen LG1", { popularity: 68 }),
    ],
  }),

  /* ───────────────────────── Rocky Mountain ───────────────────────── */
  mtbFamily("Rocky Mountain", "Altitude", {
    disc: "enduro", years: [2023, 2026], gen: "Altitude",
    frame: "Smoothwall 碳纤维车架 · RIDE-4 几何",
    fork: "Fox 38 Factory 170mm", frontTravel: 170, rearTravel: 160, wheelSize: "29\"",
    geoOverride: { stack: 630, reach: 480, headAngle: 64.4, seatAngle: 77, chainstay: 440, wheelbase: 1212, bbDrop: 34 },
    colors: [
      C("落基山蓝", "Rocky Blue", "#1d4f91", "蓝"),
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("熔岩红", "Lava Red", "#b3202a", "红"),
    ],
    highlights: ["RIDE-4 可调几何", "160mm 后行程", "加拿大耐力血统"],
    story: "Altitude 是 Rocky Mountain 的耐力旗舰，RIDE-4 几何芯片能在四种设定间切换，适应不同山路。",
    builds: [
      B(2026, "C90 X0 AXS", 82800, 14.6, "SRAM X0 Eagle AXS", "Rocky Mountain DT Swiss XM 1700", { popularity: 78 }),
      B(2024, "C70 GX AXS", 52800, 15.4, "SRAM GX Eagle AXS", "Rocky Mountain DT Swiss XM 1700", { popularity: 73 }),
    ],
  }),
  mtbFamily("Rocky Mountain", "Instinct", {
    disc: "trail", years: [2023, 2026], gen: "Instinct",
    frame: "Smoothwall 碳纤维车架 · RIDE-4 几何",
    fork: "Fox 36 Factory 150mm", frontTravel: 150, rearTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 622, reach: 472, headAngle: 65, seatAngle: 76.6, chainstay: 438, wheelbase: 1198, bbDrop: 38 },
    colors: [
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("松林绿", "Pine Green", "#36503c", "绿"),
      C("砂岩", "Sandstone", "#a68a68", "棕"),
    ],
    highlights: ["RIDE-4 可调几何", "140mm 后行程", "全能林道"],
    story: "Instinct 是 Rocky Mountain 的全能林道车，行程比 Altitude 收敛，但适应面更宽。",
    builds: [
      B(2026, "C70 X0 AXS", 72800, 13.8, "SRAM X0 Eagle AXS", "Rocky Mountain DT Swiss XM 1700", { popularity: 74 }),
      B(2024, "C50 GX AXS", 44800, 14.6, "SRAM GX Eagle AXS", "Rocky Mountain DT Swiss XM 1700", { popularity: 69 }),
    ],
  }),
  mtbFamily("Rocky Mountain", "Element", {
    disc: "xc", years: [2023, 2026], gen: "Element",
    frame: "Smoothwall 碳纤维车架 · 短行程悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 110, wheelSize: "29\"",
    geoOverride: { stack: 602, reach: 458, headAngle: 67, seatAngle: 75.8, chainstay: 432, wheelbase: 1140, bbDrop: 52 },
    colors: [
      C("碳黑", "Carbon Black", "#16181b", "黑"),
      C("落基山蓝", "Rocky Blue", "#1d4f91", "蓝"),
      C("荧光绿", "Fluoro Green", "#8ec641", "绿"),
    ],
    highlights: ["XC 短行程", "110mm 后行程", "轻量爬坡平台"],
    story: "Element 是 Rocky Mountain 的 XC 车，轻量、敏捷，适合把越野骑成一场计时赛。",
    builds: [
      B(2026, "C90 X0 AXS", 68800, 11.2, "SRAM X0 Eagle AXS", "Rocky Mountain DT Swiss XR 1700", { popularity: 72 }),
      B(2024, "C50 GX AXS", 42800, 12.0, "SRAM GX Eagle AXS", "Rocky Mountain DT Swiss XR 1700", { popularity: 67 }),
    ],
  }),

  /* ───────────────────────── Kona ───────────────────────── */
  mtbFamily("Kona", "Process 153", {
    disc: "enduro", years: [2023, 2026], gen: "Process 153",
    material: "铝合金", frame: "铝合金车架 · Beamer 悬挂",
    fork: "Fox 38 Factory 160mm", frontTravel: 160, rearTravel: 153, wheelSize: "29\"",
    geoOverride: { stack: 626, reach: 475, headAngle: 64.8, seatAngle: 76.5, chainstay: 435, wheelbase: 1205, bbDrop: 35 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("Kona 橙", "Kona Orange", "#d75a1f", "橙"),
      C("松林绿", "Pine Green", "#36503c", "绿"),
    ],
    highlights: ["铝合金耐力车", "Beamer 悬挂", "性价比取向"],
    story: "Process 153 是 Kona 的耐力主力，铝合金车架、可靠悬挂，价格却比同级碳纤维车友好得多。",
    builds: [
      B(2026, "DL X0 AXS", 48800, 15.6, "SRAM X0 Eagle AXS", "WTB KOM Trail", { popularity: 70 }),
      B(2024, "AL GX", 28800, 16.4, "SRAM GX Eagle", "WTB KOM Trail", { popularity: 66 }),
    ],
  }),
  mtbFamily("Kona", "Hei Hei", {
    disc: "xc", years: [2023, 2026], gen: "Hei Hei",
    material: "铝合金", frame: "铝合金车架 · 短行程悬挂",
    fork: "Fox 34 Step-Cast 120mm", frontTravel: 120, rearTravel: 100, wheelSize: "29\"",
    geoOverride: { stack: 600, reach: 455, headAngle: 67.5, seatAngle: 75.5, chainstay: 432, wheelbase: 1132, bbDrop: 58 },
    colors: [
      C("Kona 橙", "Kona Orange", "#d75a1f", "橙"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("湖水蓝", "Lagoon Blue", "#3d7d8c", "蓝"),
    ],
    highlights: ["铝合金 XC", "100mm 后行程", "轻快爬坡"],
    story: "Hei Hei 是 Kona 的 XC 车，铝合金车架把重量和价格都控制住，骑起来轻快直接。",
    builds: [
      B(2026, "CR/DL X0 AXS", 42800, 11.8, "SRAM X0 Eagle AXS", "WTB KOM Light", { popularity: 68 }),
      B(2024, "AL/DL GX", 24800, 12.6, "SRAM GX Eagle", "WTB KOM Light", { popularity: 64 }),
    ],
  }),
  mtbFamily("Kona", "Honzo", {
    disc: "hardtail", years: [2023, 2026], gen: "Honzo",
    material: "钢", frame: "Reynolds 520 钢制硬尾车架",
    fork: "Fox 34 Factory 140mm", frontTravel: 140, wheelSize: "29\"",
    geoOverride: { stack: 618, reach: 458, headAngle: 66, seatAngle: 75.2, chainstay: 430, wheelbase: 1145, bbDrop: 50 },
    colors: [
      C("钢原色", "Raw Steel", "#9a9ea1", "银"),
      C("Kona 橙", "Kona Orange", "#d75a1f", "橙"),
      C("哑光黑", "Matte Black", "#17191c", "黑"),
    ],
    highlights: ["钢制硬尾", "140mm 前叉", "硬派林道风格"],
    story: "Honzo 是 Kona 的钢制硬尾，车架的弹性让它在粗糙路面上有一种碳纤维给不了的质感。",
    builds: [
      B(2026, "ST X0", 32800, 12.4, "SRAM X0 Eagle", "WTB KOM Trail", { popularity: 67 }),
      B(2024, "ST GX", 19800, 13.2, "SRAM GX Eagle", "WTB KOM Trail", { popularity: 63 }),
    ],
  }),

  /* ───────────────────────── Marin ───────────────────────── */
  mtbFamily("Marin", "Alpine Trail", {
    disc: "enduro", years: [2023, 2026], gen: "Alpine Trail",
    material: "铝合金", frame: "Series 4 铝合金车架 · MultiTrac 悬挂",
    fork: "Fox 38 Factory 160mm", frontTravel: 160, rearTravel: 150, wheelSize: "29\"",
    geoOverride: { stack: 626, reach: 475, headAngle: 64.8, seatAngle: 76.5, chainstay: 435, wheelbase: 1202, bbDrop: 35 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("海军蓝", "Navy", "#1d3557", "蓝"),
      C("熔岩橙", "Lava Orange", "#d05a28", "橙"),
    ],
    highlights: ["MultiTrac 悬挂", "150mm 后行程", "高性价比耐力车"],
    story: "Alpine Trail 是 Marin 的耐力车，配置实在，几何现代，是入门耐力骑行的稳妥选择。",
    builds: [
      B(2026, "C2 X0 AXS", 42800, 15.8, "SRAM X0 Eagle AXS", "Marin DT Swiss M 1900", { popularity: 68 }),
      B(2024, "C1 GX", 26800, 16.6, "SRAM GX Eagle", "Marin DT Swiss M 1900", { popularity: 64 }),
    ],
  }),
  mtbFamily("Marin", "Rift Zone", {
    disc: "trail", years: [2023, 2026], gen: "Rift Zone",
    material: "铝合金", frame: "Series 3 铝合金车架 · MultiTrac 悬挂",
    fork: "Fox 34 Factory 140mm", frontTravel: 140, rearTravel: 130, wheelSize: "29\"",
    geoOverride: { stack: 618, reach: 465, headAngle: 65.5, seatAngle: 76, chainstay: 435, wheelbase: 1185, bbDrop: 40 },
    colors: [
      C("哑光黑", "Matte Black", "#17191c", "黑"),
      C("森林绿", "Forest Green", "#3e523f", "绿"),
      C("沙色", "Sand", "#b1997a", "棕"),
    ],
    highlights: ["MultiTrac 悬挂", "130mm 后行程", "入门林道首选"],
    story: "Rift Zone 是 Marin 的入门林道车，把现代几何和可靠悬挂放在一个很容易接受的价格里。",
    builds: [
      B(2026, "C2 GX AXS", 32800, 14.8, "SRAM GX Eagle AXS", "Marin DT Swiss M 1900", { popularity: 65 }),
      B(2024, "C1 GX", 20800, 15.4, "SRAM GX Eagle", "Marin DT Swiss M 1900", { popularity: 61 }),
    ],
  }),
];
