import type { FamilyRaw } from "./types";
import { B, C, roadFamily, mtbFamily } from "./helpers";

/**
 * C 组：8 个山地品牌官网在售/官网存档产品线（2024–2026）
 * 价格口径：官网美元价 ×7.2、官网欧元价 ×7.8 折算为人民币参考价（中国区未公布指导价时）。
 * 车系 = 产品线，配置 = builds；未取得官方几何表的车系不写 geoTable，由系统用参考几何。
 */
export const officialCFamilies: FamilyRaw[] = [
  /* ============================== Santa Cruz ============================== */
  mtbFamily("Santa Cruz", "Megatower", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Megatower 3",
    frame: "Carbon C / CC 车架，165mm VPP 后行程，内置 Glovebox 储物仓",
    fork: "Fox 38 Float Factory 170mm",
    frontTravel: 170,
    rearTravel: 165,
    wheelSize: '29"',
    colors: [
      C("亮面碳黑", "Gloss Carbon", "#232323", "黑"),
      C("牛血红", "Oxblood", "#6d1f24", "红"),
    ],
    highlights: [
      "165mm VPP 后行程配 170mm 前叉，定位长行程耐力赛与重口味林道",
      "下管 Glovebox 储物仓可放内胎/工具，出门不必背包",
      "几何带高低位翻转片，头管角可在 63.5°–64.2° 之间切换",
    ],
    story: "Megatower 是 Santa Cruz 的长行程耐力平台，用 VPP 连杆把踩踏效率和下坡吸震放在同一副车架上，是品牌在 EWS 赛场的主力。",
    builds: [
      B(2026, "GX AXS", 40313, 14.6, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { shock: "Fox Float X2 Factory 165mm", tires: "Maxxis Assegai 29×2.5 / Minion DHR II 29×2.4" }),
      B(2025, "X0 AXS", 48900, 14.2, "SRAM X0 Eagle AXS", "Reserve 30", { shock: "Fox Float X2 Factory 165mm", tires: "Maxxis Assegai 29×2.5 / Minion DHR II 29×2.4" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Santa Cruz", "Bullit", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Bullit 2",
    frame: "Carbon C 车架，MX 混合轮径，Bosch Performance Line CX 电机 + 600Wh 电池",
    fork: "Fox 38 Performance 180mm",
    frontTravel: 180,
    rearTravel: 170,
    wheelSize: '29"',
    colors: [
      C("冰川蓝", "Glacier Blue", "#4f7f96", "蓝"),
      C("哑光黑", "Matte Black", "#1e1e1e", "黑"),
    ],
    highlights: [
      "170mm 后行程 + 180mm 前叉的 MX 全功率电助力，专为重力和大落差线路准备",
      "Bosch Performance Line CX 电机配 600Wh 内置电池，可加装增程电池",
      "前 29\" 后 27.5\" 混合轮径，兼顾滚动通过性与后轮灵活性",
    ],
    story: "Bullit 把 Santa Cruz 的下坡血统和 Bosch 全功率电机结合，是一台用来刷缆车线路、也能自己踩上山的重装电助力。",
    builds: [
      B(2026, "GX AXS", 56513, 22.4, "SRAM GX Eagle AXS", "Race Face ARC 30", { shock: "Fox Float X2 Performance 170mm", tires: "Maxxis Assegai 29×2.5 / Minion DHR II 27.5×2.4" }),
      B(2025, "X0 AXS", 64000, 21.9, "SRAM X0 Eagle AXS", "Santa Cruz Reserve 30", { shock: "Fox Float X2 Factory 170mm" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Santa Cruz", "5010", {
    disc: "trail",
    years: [2024, 2026],
    gen: "5010 v5",
    frame: "Carbon C / CC 车架，140mm VPP 后行程，MX 混合轮径",
    fork: "Fox 36 Float Performance 150mm",
    frontTravel: 150,
    rearTravel: 140,
    wheelSize: '29"',
    colors: [
      C("哑光银灰", "Matte Silver", "#9aa0a6", "银"),
      C("番茄红", "Tomato Red", "#c0392b", "红"),
    ],
    highlights: [
      "MX 混合轮径 + 140mm 后行程，是 Santa Cruz 最灵活的短行程全能车",
      "VPP 连杆保留踩踏支撑，抬前轮与压弯都很轻快",
      "车架带 Glovebox 储物仓，短途骑行无需腰包",
    ],
    story: "5010 是 Santa Cruz 的“玩乐趣味”担当：行程不长但姿态松弛，适合把林道当成游乐场的人。",
    builds: [
      B(2026, "GX AXS", 30300, 14.3, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { shock: "Fox Float X Performance 140mm", tires: "Maxxis Minion DHR II 29×2.4 / 27.5×2.4" }),
      B(2025, "R Kit", 27713, 14.6, "SRAM NX Eagle", "Race Face AR", { shock: "Fox Float Performance 140mm" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Santa Cruz", "Highball", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Highball 4",
    frame: "Carbon C / CC 硬尾车架，100mm 行程专用几何",
    fork: "RockShox SID SL Select+ 100mm",
    frontTravel: 100,
    wheelSize: '29"',
    colors: [
      C("森林绿", "Forest Green", "#2f4f3a", "绿"),
      C("亮面碳黑", "Gloss Carbon", "#262626", "黑"),
    ],
    highlights: [
      "轻量碳纤硬尾，车架约 1.1kg，是品牌 XC 与马拉松主力",
      "29\" 轮径 + 100mm 前叉，几何偏向高效踩踏与快速转向",
      "车架预留双水壶位与内走线，适合长距离越野赛",
    ],
    story: "Highball 是 Santa Cruz 产品线里唯一的纯 XC 硬尾，轻、直接、维护简单，用来爬坡和绕圈赛最合适。",
    builds: [
      B(2026, "GX AXS", 26800, 10.4, "SRAM GX Eagle AXS", "DT Swiss XR 1700", { tires: "Maxxis Rekon Race 29×2.35" }),
      B(2025, "D Kit", 23753, 10.7, "SRAM SX Eagle", "Race Face AR", { tires: "Maxxis Rekon Race 29×2.35" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Santa Cruz", "Vala", {
    disc: "trail",
    years: [2025, 2026],
    gen: "Vala 1",
    frame: "Carbon C 车架，150mm VPP 后行程，Bosch Performance Line CX 电机",
    fork: "Fox 38 Performance 160mm",
    frontTravel: 160,
    rearTravel: 150,
    wheelSize: '29"',
    colors: [
      C("沙丘金", "Dune Gold", "#b08d57", "金"),
      C("石墨灰", "Graphite", "#3c4043", "灰"),
    ],
    highlights: [
      "全功率电助力林道车，150mm 后行程配 160mm 前叉",
      "Bosch CX 电机 + 可拆卸 600Wh 电池，兼顾爬坡效率与续航",
      "VPP 连杆在电助力重量下仍保持踩踏支撑",
    ],
    story: "Vala 是 Santa Cruz 面向大众林道场景的全功率电助力，行程比 Bullit 收敛，日常山路更轻快。",
    builds: [
      B(2026, "GX AXS", 42000, 21.8, "SRAM GX Eagle AXS", "Race Face ARC 30", { shock: "Fox Float X Performance 150mm" }),
      B(2025, "R Kit", 35633, 22.2, "SRAM NX Eagle", "Race Face AR", { shock: "Fox Float Performance 150mm" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Santa Cruz", "Heckler SL", {
    disc: "trail",
    years: [2025, 2026],
    gen: "Heckler SL 1",
    frame: "Carbon C 车架，150mm VPP 后行程，Fazua Ride 60 轻量电机 + 430Wh 电池",
    fork: "Fox 36 Float Performance 160mm",
    frontTravel: 160,
    rearTravel: 150,
    wheelSize: '29"',
    colors: [
      C("雾蓝", "Mist Blue", "#8fa9bd", "蓝"),
      C("哑光黑", "Matte Black", "#1f1f1f", "黑"),
    ],
    highlights: [
      "轻量电助力路线：Fazua Ride 60 电机 + 430Wh 电池，整车约 19kg",
      "MX 混合轮径与 150mm 后行程，下坡姿态接近常规耐力车",
      "电池可拆卸，支持外挂增程电池延长续航",
    ],
    story: "Heckler SL 是 Santa Cruz 对“轻电助力”的回答：助力够用、重量可控，骑起来仍像一台山地车。",
    builds: [
      B(2026, "GX AXS", 58900, 19.2, "SRAM GX Eagle AXS", "Santa Cruz Reserve 30", { shock: "Fox Float X Performance 150mm" }),
      B(2025, "R Kit", 52553, 19.6, "SRAM NX Eagle", "Race Face AR", { shock: "Fox Float Performance 150mm" }),
    ],
    notes: "官网：https://www.santacruzbicycles.com/bikes；按官网美元起价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  /* ============================== Yeti ============================== */
  mtbFamily("Yeti", "SB120", {
    disc: "downcountry",
    years: [2024, 2026],
    gen: "SB120",
    frame: "TURQ / C 系列碳纤车架，120mm Switch Infinity 后行程",
    fork: "Fox Factory 36 SL 140mm",
    frontTravel: 140,
    rearTravel: 120,
    wheelSize: '29"',
    colors: [
      C("绿松石", "Turquoise", "#1fb6b6", "绿"),
      C("碳黑", "Carbon Black", "#232323", "黑"),
    ],
    highlights: [
      "120mm Switch Infinity 连杆在踩踏与吸震之间切换，短行程也有下坡底气",
      "140mm Fox 36 SL 前叉，比纯 XC 车更抗造",
      "车架可装双水壶，适合长距离 downcountry 骑行",
    ],
    story: "SB120 是 Yeti 的 downcountry 主力，用 120mm 行程跑出接近林道车的下坡信心，同时保留 XC 级的爬坡效率。",
    builds: [
      B(2026, "C2 90", 35280, 12.4, "SRAM GX Eagle", "DT Swiss M1900", { shock: "Fox Float Performance 120mm" }),
      B(2025, "X0 AXS", 54720, 11.9, "SRAM X0 Eagle AXS", "DT Swiss XM 1700", { shock: "Fox Float Factory 120mm" }),
      B(2024, "XX AXS", 61920, 11.4, "SRAM XX SL Eagle AXS", "DT Swiss XRC 1200", { shock: "Fox Float Factory 120mm" }),
    ],
    notes: "官网：https://yeticycles.com/en-us/bikes；按官网美元整车价 ×7.2 折算，参考价，配置按官方 kit 档位整理。",
  }),

  mtbFamily("Yeti", "SB135", {
    disc: "trail",
    years: [2024, 2026],
    gen: "SB135",
    frame: "TURQ / C 系列碳纤车架，135mm Switch Infinity 后行程，27.5\" 轮径",
    fork: "Fox Factory 36 150mm",
    frontTravel: 150,
    rearTravel: 135,
    wheelSize: '27.5"',
    colors: [
      C("绿松石", "Turquoise", "#1fb6b6", "绿"),
      C("沙色", "Sand", "#c8b18b", "棕"),
    ],
    highlights: [
      "Yeti 现役唯一 27.5\" 全避震林道车，转向灵活、抬头容易",
      "135mm 后行程配 150mm 前叉，适合技术型林道与泵道",
      "Switch Infinity 连杆提供中段支撑，踩踏不塌",
    ],
    story: "SB135 保留了 27.5\" 轮径的灵活手感，是 Yeti 产品线里最适合玩动作和技术线路的一台。",
    builds: [
      B(2026, "C2 90", 30240, 13.2, "SRAM GX Eagle", "DT Swiss M1900", { shock: "Fox Float Performance 135mm" }),
      B(2025, "X0 AXS", 45360, 12.9, "SRAM X0 Eagle AXS", "DT Swiss XM 1700", { shock: "Fox Float Factory 135mm" }),
    ],
    notes: "官网：https://yeticycles.com/en-us/bikes；按官网美元整车价 ×7.2 折算，参考价，配置按官方 kit 档位整理。",
  }),

  mtbFamily("Yeti", "SB165", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "SB165",
    frame: "TURQ / C 系列碳纤车架，165mm Switch Infinity 后行程",
    fork: "Fox Factory 38 170mm",
    frontTravel: 170,
    rearTravel: 165,
    wheelSize: '29"',
    colors: [
      C("绿松石", "Turquoise", "#1fb6b6", "绿"),
      C("哑光黑", "Matte Black", "#1d1d1d", "黑"),
    ],
    highlights: [
      "165mm 后行程 + 170mm Fox 38，Yeti 现役最长行程耐力车",
      "Switch Infinity 转点在下坡中段提供稳定支撑，适合高速乱石",
      "车架支持线圈避震，方便按赛道调校",
    ],
    story: "SB165 是 Yeti 的耐力赛武器，把 165mm 行程做成既能踩回山顶、又能全速下坠的平台。",
    builds: [
      B(2026, "C2 90", 34560, 15.6, "SRAM GX Eagle", "DT Swiss M1900", { shock: "Fox Float X Performance 165mm" }),
      B(2025, "X0 AXS", 52000, 15.1, "SRAM X0 Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox Float X2 Factory 165mm" }),
    ],
    notes: "官网：https://yeticycles.com/en-us/bikes；按官网美元整车价 ×7.2 折算，参考价，配置按官方 kit 档位整理。",
  }),

  mtbFamily("Yeti", "ASR", {
    disc: "xc",
    years: [2025, 2026],
    gen: "ASR",
    frame: "TURQ 系列碳纤车架，115mm 后行程，超轻 XC 平台",
    fork: "Fox Factory 34 SC 120mm",
    frontTravel: 120,
    rearTravel: 115,
    wheelSize: '29"',
    colors: [
      C("绿松石", "Turquoise", "#1fb6b6", "绿"),
      C("月白", "Moon White", "#e8e8e6", "白"),
    ],
    highlights: [
      "115mm 行程的轻量 XC 全避震，车架重量控制在 1.9kg 级",
      "配 120mm Fox 34 SC，兼顾绕圈赛与马拉松越野",
      "可锁死后胆与紧凑后三角，爬坡效率接近硬尾",
    ],
    story: "ASR 是 Yeti 回归 XC 竞赛的作品，轻量车架加短行程连杆，为的是在爬坡和冲刺里不浪费每一瓦。",
    builds: [
      B(2026, "C2 90", 38880, 11.0, "SRAM GX Eagle", "DT Swiss XR 1700", { shock: "Fox Float Performance 115mm" }),
      B(2025, "X0 AXS", 48960, 10.6, "SRAM X0 Eagle AXS", "DT Swiss XRC 1200", { shock: "Fox Float Factory 115mm" }),
    ],
    notes: "官网：https://yeticycles.com/en-us/bikes；按官网同档整车美元价 ×7.2 折算，参考价（官网 kit 价随批次调整）。",
  }),

  /* ============================== Pivot ============================== */
  mtbFamily("Pivot", "Trailcat SL", {
    disc: "trail",
    years: [2025, 2026],
    gen: "Trailcat SL",
    frame: "碳纤车架，120mm dw-link 后行程",
    fork: "Fox 34 Factory 140mm",
    frontTravel: 140,
    rearTravel: 120,
    wheelSize: '29"',
    colors: [
      C("摩卡棕", "Mocha Storm", "#7b5b45", "棕"),
      C("草地绿", "Green Meadow Mist", "#7d9b76", "绿"),
    ],
    highlights: [
      "120mm dw-link 后行程配 140mm 前叉，定位短行程全能林道",
      "车架带 Pivot 工具箱，可收纳内胎与工具",
      "几何可调，头管角支持高低两档设置",
    ],
    story: "Trailcat SL 是 Pivot 用来填补 Mach 4 SL 与 Trail 429 之间空档的短行程林道车，轻快但不脆弱。",
    builds: [
      B(2026, "Race XT", 44633, 11.8, "Shimano XT M8100", "DT Swiss XM 1700", { shock: "Fox Float Factory 120mm" }),
      B(2025, "Pro X0 AXS", 52000, 11.6, "SRAM X0 Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox Float Factory 120mm" }),
    ],
    notes: "官网：https://www.pivotcycles.com/en-us/bikes/trailcat-sl；官网需选择国家/地区后显示当地价格，此处按官网同档整车公开报价折算为人民币参考价，配置按官方档位整理。",
  }),

  mtbFamily("Pivot", "Trailcat LT", {
    disc: "trail",
    years: [2025, 2026],
    gen: "Trailcat LT",
    frame: "碳纤车架，135mm dw-link 后行程",
    fork: "Fox 36 Factory 150mm",
    frontTravel: 150,
    rearTravel: 135,
    wheelSize: '29"',
    colors: [
      C("铁灰", "Iron Grey", "#4a4f55", "灰"),
      C("日落橙", "Sunset Orange", "#d2691e", "橙"),
    ],
    highlights: [
      "135mm 后行程 + 150mm 前叉，Trailcat 系列的长行程版本",
      "dw-link 连杆在中段提供抗下沉，爬坡踩踏扎实",
      "支持 29\" 轮径与长行程升降座管，适配技术林道",
    ],
    story: "Trailcat LT 把 Trailcat 的行程拉长到 135mm，用来应付更陡的下坡和更粗的轮胎。",
    builds: [
      B(2026, "Race XT", 48233, 13.6, "Shimano XT M8100", "DT Swiss XM 1700", { shock: "Fox Float X Factory 135mm" }),
      B(2025, "Pro X0 AXS", 56000, 13.4, "SRAM X0 Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox Float X Factory 135mm" }),
    ],
    notes: "官网：https://www.pivotcycles.com/en-us/bikes/trailcat-lt；官网需选择国家/地区后显示当地价格，此处按官网同档整车公开报价折算为人民币参考价。",
  }),

  mtbFamily("Pivot", "Shadowcat", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Shadowcat",
    frame: "碳纤车架，130mm dw-link 后行程，27.5\" 轮径",
    fork: "Fox 34 Factory 140mm",
    frontTravel: 140,
    rearTravel: 130,
    wheelSize: '27.5"',
    colors: [
      C("蓝幻影", "Blue Mirage", "#3f6fa8", "蓝"),
      C("哑光黑", "Matte Black", "#212121", "黑"),
    ],
    highlights: [
      "27.5\" 轮径的短行程林道车，转向快、动作轻",
      "130mm dw-link 后行程配 140mm 前叉，适合技术型小径",
      "低跨高车架，身材较小的骑手也能轻松落地",
    ],
    story: "Shadowcat 是 Pivot 为 27.5\" 爱好者保留的灵活选项，行程不长但玩性很高。",
    builds: [
      B(2026, "Race XT", 48953, 13.1, "Shimano XT M8100", "DT Swiss XM 1700", { shock: "Fox Float Factory 130mm" }),
      B(2024, "Ride GX/X01", 48953, 13.4, "SRAM GX Eagle", "Race Face ARC 30", { shock: "Fox Float Performance 130mm" }),
    ],
    notes: "官网：https://www.pivotcycles.com/en-us/bikes/shadowcat；官网需选择国家/地区后显示当地价格，此处按官网同档整车公开报价折算为人民币参考价。",
  }),

  mtbFamily("Pivot", "Phoenix", {
    disc: "downhill",
    years: [2025, 2026],
    gen: "Phoenix",
    frame: "碳纤车架，210mm dw6 后行程，MX 混合轮径",
    fork: "Fox 40 Factory 200mm",
    frontTravel: 200,
    rearTravel: 210,
    wheelSize: '29"',
    colors: [
      C("电光红", "Electric Red", "#c62828", "红"),
      C("薄荷绿", "Mint", "#8fd6c2", "绿"),
    ],
    highlights: [
      "210mm 后行程的纯种速降车，MX 轮径兼顾通过性与灵活性",
      "dw6 连杆为速降赛道调校，后段支撑强、触底少",
      "车架支持双肩叉与 200mm 前叉，世界杯级配置",
    ],
    story: "Phoenix 是 Pivot 的速降旗舰，用 dw6 连杆和 MX 轮径去啃世界杯级别的赛道。",
    builds: [
      B(2026, "Team XX DH", 71993, 16.8, "SRAM XX SL Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox DHX2 Factory 210mm" }),
      B(2025, "Race X0 DH", 63000, 17.2, "SRAM X0 DH", "DT Swiss M1900", { shock: "Fox Van RC 210mm" }),
    ],
    notes: "官网：https://www.pivotcycles.com/en-us/bikes/phoenix；官网需选择国家/地区后显示当地价格，此处按官网同档整车公开报价折算为人民币参考价。",
  }),

  /* ============================== Commencal ============================== */
  mtbFamily("Commencal", "FRS", {
    disc: "downhill",
    years: [2026, 2027],
    gen: "FRS",
    frame: "铝合金车架，180mm 后行程，27.5\" / MX 可选",
    fork: "Fox 38 Factory 180mm",
    frontTravel: 180,
    rearTravel: 180,
    wheelSize: '27.5"',
    colors: [
      C("赛车红", "Race Red", "#b71c1c", "红"),
      C("哑光黑", "Matte Black", "#1c1c1c", "黑"),
    ],
    highlights: [
      "180mm 前后行程的公园/自由骑车型，比 Supreme DH 更适合飞包",
      "铝合金车架抗摔耐用，配件通用性好",
      "支持 27.5\" 与 MX 两种轮径设定",
    ],
    story: "FRS 是 Commencal 用来填补速降与耐力之间的自由骑车型，为车公园的大跳台和反复摔车而生。",
    builds: [
      B(2027, "Signature", 51840, 16.2, "SRAM X0 Eagle AXS", "Spank 359", { shock: "Fox Float X2 Factory 180mm" }),
      B(2026, "Rockshox", 46800, 16.7, "SRAM GX Eagle", "Race Face ARC 30", { shock: "RockShox Super Deluxe 180mm" }),
    ],
    notes: "官网：https://www.commencal.com/us/en/bikes；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Commencal", "Meta", {
    disc: "enduro",
    years: [2025, 2027],
    gen: "Meta V5",
    frame: "铝合金车架，160mm 后行程，29\" 轮径",
    fork: "Fox 38 Performance 170mm",
    frontTravel: 170,
    rearTravel: 160,
    wheelSize: '29"',
    colors: [
      C("金属灰", "Metal Grey", "#6b7075", "灰"),
      C("荧光黄", "Fluo Yellow", "#d7e021", "黄"),
    ],
    highlights: [
      "160mm 后行程 + 170mm 前叉，Commencal 的耐力赛主力平台",
      "铝合金车架配可调几何，适应不同赛道风格",
      "后三角支持长短链stay切换，改变过弯与稳定性",
    ],
    story: "Meta 是 Commencal 最畅销的耐力车系，用铝合金车架把“耐摔、好修、下坡快”三件事做扎实。",
    builds: [
      B(2027, "Signature", 49680, 15.4, "SRAM X0 Eagle AXS", "Spank 359", { shock: "Fox Float X2 Factory 160mm" }),
      B(2027, "Essential", 37440, 15.9, "SRAM GX Eagle", "Race Face ARC 30", { shock: "Fox Float X Performance 160mm" }),
    ],
    notes: "官网：https://www.commencal.com/us/en/bikes；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Commencal", "Meta TR", {
    disc: "trail",
    years: [2025, 2027],
    gen: "Meta TR V4",
    frame: "铝合金车架，140mm 后行程，29\" 轮径",
    fork: "Fox 36 Performance 150mm",
    frontTravel: 150,
    rearTravel: 140,
    wheelSize: '29"',
    colors: [
      C("哑光石墨", "Matte Graphite", "#3a3f44", "灰"),
      C("军绿", "Army Green", "#5a5f3a", "绿"),
    ],
    highlights: [
      "140mm 后行程的林道版本，比 Meta 更轻快、更适合日常山路",
      "铝合金车架保留 Commencal 的耐用性与可维修性",
      "支持 29\" 轮径与长行程升降座管",
    ],
    story: "Meta TR 把 Meta 的行程收短，做成一台每天都能骑、又敢下陡坡的铝合金林道车。",
    builds: [
      B(2027, "Ride", 32400, 14.6, "Shimano SLX M7100", "Race Face ARC 30", { shock: "Fox Float Performance 140mm" }),
      B(2026, "Signature", 42000, 14.2, "SRAM GX Eagle AXS", "Spank 359", { shock: "Fox Float X Factory 140mm" }),
    ],
    notes: "官网：https://www.commencal.com/us/en/bikes；按官网同档整车美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Commencal", "Meta Power SX", {
    disc: "enduro",
    years: [2026, 2027],
    gen: "Meta Power SX",
    frame: "铝合金车架，165mm 后行程，Bosch Performance Line CX 电机 + 750Wh 电池",
    fork: "Fox 38 Performance 170mm",
    frontTravel: 170,
    rearTravel: 165,
    wheelSize: '29"',
    colors: [
      C("氧化红", "Oxide Red", "#a03028", "红"),
      C("哑光黑", "Matte Black", "#1b1b1b", "黑"),
    ],
    highlights: [
      "165mm 后行程的全功率电助力耐力车，Bosch CX 电机 + 750Wh 大电池",
      "MX 混合轮径设定，爬坡与下坡都不吃亏",
      "铝合金车架 + 可拆卸电池，维护成本低",
    ],
    story: "Meta Power SX 是 Commencal 的电助力耐力旗舰，用来把重口味线路的爬升成本降到最低。",
    builds: [
      B(2027, "Avid Signature", 77760, 24.5, "SRAM X0 Eagle AXS", "Spank 359", { shock: "Fox Float X2 Factory 165mm" }),
      B(2026, "Bosch Signature", 57600, 25.0, "SRAM GX Eagle", "Race Face ARC 30", { shock: "Fox Float X Performance 165mm" }),
    ],
    notes: "官网：https://www.commencal.com/us/en/bikes；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Commencal", "T.E.M.P.O.", {
    disc: "trail",
    years: [2025, 2027],
    gen: "T.E.M.P.O. V2",
    frame: "铝合金车架，140mm 后行程，Bosch Performance Line CX 电机",
    fork: "Fox 36 Performance 150mm",
    frontTravel: 150,
    rearTravel: 140,
    wheelSize: '29"',
    colors: [
      C("石板灰", "Slate Grey", "#50565c", "灰"),
      C("亮橙", "Bright Orange", "#e0651a", "橙"),
    ],
    highlights: [
      "140mm 后行程的电助力林道车，定位比 Meta Power 更轻快",
      "Bosch CX 电机 + 可拆卸电池，日常通勤与山路两用",
      "铝合金车架，载重与耐用性优于碳纤",
    ],
    story: "T.E.M.P.O. 是 Commencal 的电助力林道线，行程收敛、价格更友好，适合把电助力当日常工具的人。",
    builds: [
      B(2027, "Rockshox", 46080, 23.8, "SRAM GX Eagle", "Race Face ARC 30", { shock: "RockShox Deluxe 140mm" }),
      B(2025, "Power Signature AXS", 62400, 24.2, "SRAM GX Eagle AXS", "Spank 359", { shock: "Fox Float X Performance 140mm" }),
    ],
    notes: "官网：https://www.commencal.com/us/en/bikes；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  /* ============================== YT ============================== */
  mtbFamily("YT", "Izzo", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Izzo 29",
    frame: "碳纤车架（CF），130mm 后行程，29\" 轮径",
    fork: "Fox 34 Performance 140mm",
    frontTravel: 140,
    rearTravel: 130,
    wheelSize: '29"',
    colors: [
      C("哑光黑", "Matte Black", "#1e1e1e", "黑"),
      C("薄荷绿", "Mint Green", "#9fd8c0", "绿"),
    ],
    highlights: [
      "130mm 后行程的短行程林道车，YT 产品线里最轻快的一台",
      "碳纤车架配 Flip Chip 几何调节，可切换高低位",
      "整车定价激进，是同级碳纤林道车里性价比突出的一款",
    ],
    story: "Izzo 是 YT 的短行程林道车，用直销模式把碳纤车架的价格压到同级最低一档。",
    builds: [
      B(2026, "Core 4 CF", 31192, 13.1, "SRAM X0 Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox Float Performance 130mm" }),
      B(2025, "Core 3 CF", 23392, 13.6, "SRAM GX Eagle", "DT Swiss M1900", { shock: "Fox Float Performance 130mm" }),
      B(2024, "Core 2 CF", 17932, 14.2, "SRAM NX Eagle", "Race Face AR", { shock: "RockShox Deluxe Select+ 130mm" }),
    ],
    notes: "官网：https://www.yt-industries.com/Bikes/Trail-Izzo/；按官网欧元价 ×7.8 折算，参考价（官网标价为促销期价格）。",
  }),

  mtbFamily("YT", "Dirtlove", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Dirtlove",
    frame: "铝合金硬尾车架，26\" 轮径，土坡/街式几何",
    fork: "RockShox Pike DJ 100mm",
    frontTravel: 100,
    wheelSize: '26"',
    material: "铝合金",
    colors: [
      C("亮黑", "Gloss Black", "#1a1a1a", "黑"),
      C("荧光黄", "Fluo Yellow", "#e2e02a", "黄"),
    ],
    highlights: [
      "专为土坡与街式设计的硬尾，短后三角、低五通",
      "100mm DJ 专用前叉，锁死硬朗、适合起跳",
      "单速或短腿变速配置，链条张力稳定",
    ],
    story: "Dirtlove 是 YT 的土坡车，几何围绕起跳与落地设计，是车公园和土坡场里的常客。",
    builds: [
      B(2026, "Core 3", 15592, 12.4, "SRAM NX Eagle", "Race Face AR", { tires: "Maxxis DTH 26×2.3" }),
      B(2025, "Core 2", 13200, 12.8, "SRAM SX Eagle", "WTB KOM", { tires: "Maxxis DTH 26×2.3" }),
    ],
    notes: "官网：https://www.yt-industries.com/Bikes/Dirt-Dirtlove/；按官网欧元价 ×7.8 折算，参考价（官网标价含促销）。",
  }),

  mtbFamily("YT", "Primus", {
    disc: "trail",
    years: [2025, 2026],
    gen: "Primus",
    frame: "铝合金车架，青少年专用几何，140mm 后行程",
    fork: "RockShox Recon 140mm",
    frontTravel: 140,
    rearTravel: 140,
    wheelSize: '27.5"',
    material: "铝合金",
    colors: [
      C("亮橙", "Bright Orange", "#e8731c", "橙"),
      C("石墨黑", "Graphite", "#33383d", "黑"),
    ],
    highlights: [
      "面向青少年的全避震车型，车架比例与把宽按小身材设计",
      "140mm 前后行程，足够应付车公园与技术林道",
      "铝合金车架耐用，升级路径清晰",
    ],
    story: "Primus 是 YT 给年轻骑手准备的第一台全避震，尺寸和行程都为成长中的车手考虑。",
    builds: [
      B(2026, "Core 2", 17932, 14.2, "SRAM NX Eagle", "WTB KOM", { shock: "RockShox Deluxe Select 140mm" }),
      B(2025, "Core 1", 15590, 14.6, "SRAM SX Eagle", "Race Face AR", { shock: "RockShox Deluxe Select 140mm" }),
    ],
    notes: "官网：https://www.yt-industries.com/Bikes/Junior-Primus/；按官网欧元价 ×7.8 折算，参考价。",
  }),

  mtbFamily("YT", "Decoy", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Decoy MX",
    frame: "碳纤车架，165mm 后行程，Shimano EP8 电机 + 540Wh 电池",
    fork: "Fox 38 Performance 170mm",
    frontTravel: 170,
    rearTravel: 165,
    wheelSize: '29"',
    colors: [
      C("哑光黑", "Matte Black", "#1c1c1c", "黑"),
      C("电光蓝", "Electric Blue", "#1f5fbf", "蓝"),
    ],
    highlights: [
      "MX 混合轮径的全功率电助力耐力车，165mm 后行程",
      "Shimano EP8 电机 + 540Wh 电池，可外挂增程电池",
      "碳纤车架把整车重量控制在 24kg 以内",
    ],
    story: "Decoy 是 YT 的电助力耐力车，用碳纤车架和 MX 轮径把重量与通过性做了折中。",
    builds: [
      B(2026, "Core 4", 46792, 23.9, "SRAM GX Eagle AXS", "Crankbrothers Synthesis", { shock: "Fox Float X Performance 165mm" }),
      B(2025, "Core 3", 39000, 24.4, "SRAM GX Eagle", "DT Swiss M1900", { shock: "Fox Float X Performance 165mm" }),
    ],
    notes: "官网：https://www.yt-industries.com/Bikes/E-MTB-Decoy/；按官网欧元价 ×7.8 折算，参考价。",
  }),

  /* ============================== Rocky Mountain ============================== */
  mtbFamily("Rocky Mountain", "Slayer", {
    disc: "enduro",
    years: [2026, 2027],
    gen: "Slayer",
    frame: "铝合金车架，180mm 后行程，29\" / 27.5\" 双轮径设定",
    fork: "Fox 38 Performance 180mm",
    frontTravel: 180,
    rearTravel: 180,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("赛车黄", "Race Yellow", "#e0b81f", "黄"),
      C("哑光黑", "Matte Black", "#202020", "黑"),
    ],
    highlights: [
      "180mm 前后行程的自由骑车型，Slayer Park 版本专为车公园配置",
      "RIDE-9 几何调节系统可改头管角与五通高度",
      "铝合金车架抗造，适合反复飞包与摔车",
    ],
    story: "Slayer 是 Rocky Mountain 的自由骑线，180mm 行程配 RIDE-9 调节，冲大落差时底气很足。",
    builds: [
      B(2027, "Park", 32393, 17.1, "SRAM GX Eagle", "Race Face ARC 30", { shock: "Fox Float X Performance 180mm" }),
      B(2026, "Park", 38100, 17.6, "SRAM X0 Eagle AXS", "Race Face ARC 30", { shock: "Fox Float X2 Performance 180mm" }),
    ],
    notes: "官网：https://bikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Rocky Mountain", "Growler", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Growler",
    frame: "铝合金硬尾车架，130mm 前叉行程，29\" 轮径",
    fork: "RockShox Recon Silver 130mm",
    frontTravel: 130,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("森林绿", "Forest Green", "#2e4b39", "绿"),
      C("沙灰", "Sand Grey", "#b0a894", "灰"),
    ],
    highlights: [
      "130mm 前叉的硬尾林道车，比纯 XC 硬尾更抗造",
      "铝合金车架配升降座管走线，入门升级空间大",
      "29\" 轮径滚动效率高，适合混合路面与技术小径",
    ],
    story: "Growler 是 Rocky Mountain 的硬尾林道车，用来给刚入门的骑手一台能上山、能下坡的可靠伙伴。",
    builds: [
      B(2026, "50", 14393, 14.3, "Shimano Deore M6100", "WTB KOM", { tires: "Maxxis Rekon 29×2.4" }),
      B(2025, "50", 12800, 14.8, "Shimano CUES U6000", "Race Face AR", { tires: "Maxxis Rekon 29×2.4" }),
    ],
    notes: "官网：https://bikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Rocky Mountain", "Blizzard", {
    disc: "hardtail",
    years: [2025, 2027],
    gen: "Blizzard Carbon",
    frame: "碳纤车架，27.5\" 胖胎专用几何，前叉行程 100mm",
    fork: "RockShox Bluto 100mm",
    frontTravel: 100,
    wheelSize: '27.5"',
    colors: [
      C("雪原白", "Snow White", "#eceff1", "白"),
      C("冰蓝", "Ice Blue", "#6fa8c7", "蓝"),
    ],
    highlights: [
      "胖胎专用碳纤车架，可装 27.5×4.5\" 外胎，雪地/沙地通过性强",
      "100mm 前叉配低胎压，抓地力远超普通山地车",
      "车架预留货架孔位，适合冬季长途与探险",
    ],
    story: "Blizzard 是 Rocky Mountain 的胖胎车，专为雪地和沙地准备，是冬季不封车的最直接方案。",
    builds: [
      B(2027, "Carbon", 21593, 15.6, "SRAM GX Eagle", "Race Face ARC 30", { tires: "Maxxis Minion FBF 27.5×4.0" }),
      B(2025, "Carbon", 18900, 16.0, "SRAM NX Eagle", "WTB KOM", { tires: "Maxxis Minion FBF 27.5×4.0" }),
    ],
    notes: "官网：https://bikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Rocky Mountain", "Soul", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Soul 10",
    frame: "铝合金硬尾车架，27.5\" 轮径，入门几何",
    fork: "SR Suntour XCM 100mm",
    frontTravel: 100,
    wheelSize: '27.5"',
    material: "铝合金",
    colors: [
      C("亮蓝", "Bright Blue", "#2b6cb0", "蓝"),
      C("哑光黑", "Matte Black", "#262626", "黑"),
    ],
    highlights: [
      "入门级硬尾，27.5\" 轮径对新手更友好",
      "100mm 前叉 + 液压碟刹，城市与轻度越野通吃",
      "铝合金车架带货架/挡泥板孔位，可通勤可郊游",
    ],
    story: "Soul 是 Rocky Mountain 最入门的硬尾，用来把新人带进山地车世界，价格友好、维护简单。",
    builds: [
      B(2026, "10", 5609, 13.9, "Shimano CUES U6000", "WTB KOM", { tires: "Maxxis Ardent 27.5×2.25" }),
      B(2024, "10", 4800, 14.3, "Shimano Deore M6100", "Race Face AR", { tires: "Maxxis Ardent 27.5×2.25" }),
    ],
    notes: "官网：https://bikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Rocky Mountain", "Instinct Powerplay SL", {
    disc: "trail",
    years: [2026, 2027],
    gen: "Instinct Powerplay SL",
    frame: "碳纤 / 铝合金车架，150mm 后行程，Dyname S4 轻量电机",
    fork: "Fox 36 Performance 160mm",
    frontTravel: 160,
    rearTravel: 150,
    wheelSize: '29"',
    colors: [
      C("深海蓝", "Deep Sea Blue", "#1f4e79", "蓝"),
      C("哑光黑", "Matte Black", "#222222", "黑"),
    ],
    highlights: [
      "轻量电助力林道车，Dyname S4 电机 + 480Wh 电池，整车约 21kg",
      "150mm 后行程配 160mm 前叉，下坡姿态接近常规耐力车",
      "电池可拆卸，支持增程电池与快充",
    ],
    story: "Instinct Powerplay SL 把 Instinct 的几何和轻量电机结合，是 Rocky Mountain 对“骑起来仍像山地车”的电助力回答。",
    builds: [
      B(2027, "Carbon 70", 71993, 20.9, "SRAM X0 Eagle AXS", "Race Face ARC 30", { shock: "Fox Float X Performance 150mm" }),
      B(2026, "Alloy 50", 50393, 21.4, "SRAM GX Eagle", "WTB KOM", { shock: "Fox Float X Performance 150mm" }),
    ],
    notes: "官网：https://bikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  /* ============================== Kona ============================== */
  mtbFamily("Kona", "Process 134", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Process 134",
    frame: "铝合金 / 碳纤车架，140mm 后行程，29\" 轮径",
    fork: "RockShox Pike Select 150mm",
    frontTravel: 150,
    rearTravel: 140,
    wheelSize: '29"',
    colors: [
      C("哑光黑", "Matte Black", "#1f1f1f", "黑"),
      C("亮橙", "Bright Orange", "#e2701c", "橙"),
    ],
    highlights: [
      "140mm 后行程的林道车，Process 家族里最全能的一档",
      "Beamer 独立连杆设计，踩踏效率高、维护简单",
      "提供铝合金与碳纤（CR）两种车架，价格跨度大",
    ],
    story: "Process 134 是 Kona 林道线的中坚，行程适中、几何现代，从入门到竞赛配置都能覆盖。",
    builds: [
      B(2026, "CR/DL 29", 39593, 14.4, "SRAM GX Eagle AXS", "WTB KOM", { shock: "Fox Float X Performance 140mm" }),
      B(2025, "DL 29", 15833, 14.9, "Shimano SLX M7100", "Kona Aluminum 29", { shock: "RockShox Deluxe Select+ 140mm" }),
      B(2024, "29", 10793, 15.2, "Shimano Deore M6100", "Kona Aluminum 29", { shock: "RockShox Deluxe Select 140mm" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Kona", "Kahuna", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Kahuna",
    frame: "铝合金硬尾车架，100mm 前叉，29\" 轮径",
    fork: "RockShox Judy Silver 100mm",
    frontTravel: 100,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("金属蓝", "Metallic Blue", "#2c5f8a", "蓝"),
      C("哑光黑", "Matte Black", "#242424", "黑"),
    ],
    highlights: [
      "经典 XC 硬尾，29\" 轮径 + 100mm 前叉，爬坡效率高",
      "铝合金车架带货架孔位，可改通勤/轻旅行",
      "液压碟刹与 1× 传动，入门越野配置完整",
    ],
    story: "Kahuna 是 Kona 卖了二十多年的 XC 硬尾，几何稳定、价格亲民，是很多人第一台山地车。",
    builds: [
      B(2026, "Kahuna", 10793, 12.8, "Shimano Deore M6100", "Kona Aluminum 29", { tires: "Maxxis Rekon Race 29×2.35" }),
      B(2024, "Kahuna", 9200, 13.2, "Shimano CUES U6000", "WTB KOM", { tires: "Maxxis Rekon Race 29×2.35" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Kona", "Cinder Cone", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Cinder Cone",
    frame: "铝合金硬尾车架，120mm 前叉，29\" 轮径",
    fork: "RockShox Recon Silver 120mm",
    frontTravel: 120,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("火山红", "Volcano Red", "#b03a2e", "红"),
      C("石墨黑", "Graphite", "#3b3f43", "黑"),
    ],
    highlights: [
      "120mm 前叉的硬尾林道车，比纯 XC 更敢下坡",
      "铝合金车架带升降座管走线，升级空间充足",
      "29\" 轮径与宽胎组合，抓地与滚动兼顾",
    ],
    story: "Cinder Cone 是 Kona 硬尾线里的“能下坡”选项，120mm 前叉让它在技术小径上更从容。",
    builds: [
      B(2026, "Cinder Cone", 6113, 13.6, "Shimano Deore M6100", "Kona Aluminum 29", { tires: "Maxxis Rekon 29×2.4" }),
      B(2024, "Cinder Cone", 5400, 14.0, "Shimano CUES U6000", "WTB KOM", { tires: "Maxxis Rekon 29×2.4" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Kona", "Honzo ESD", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Honzo ESD",
    frame: "钢架硬尾，150mm 前叉，29\" 轮径，激进几何",
    fork: "RockShox Lyrik Select 150mm",
    frontTravel: 150,
    wheelSize: '29"',
    material: "钢",
    colors: [
      C("钢本色", "Raw Steel", "#8d8d8d", "银"),
      C("哑光黑", "Matte Black", "#1d1d1d", "黑"),
    ],
    highlights: [
      "钢架硬尾 + 150mm 前叉，Kona 硬尾线里最激进的一台",
      "长低几何（63° 头管角）专为陡坡与技术小径设计",
      "钢架吸震性好，骑感比铝合金柔和",
    ],
    story: "Honzo ESD 是 Kona 的“硬核硬尾”，钢架加长行程前叉，把硬尾骑成一台没有后避震的耐力车。",
    builds: [
      B(2026, "ESD", 16553, 14.8, "SRAM GX Eagle", "WTB KOM", { tires: "Maxxis Assegai 29×2.5" }),
      B(2025, "ESD", 14800, 15.3, "Shimano SLX M7100", "Kona Aluminum 29", { tires: "Maxxis Assegai 29×2.5" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Kona", "Big Honzo", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Big Honzo",
    frame: "铝合金硬尾车架，27.5+ 宽胎，120mm 前叉",
    fork: "RockShox Recon Silver 120mm",
    frontTravel: 120,
    wheelSize: '27.5"',
    material: "铝合金",
    colors: [
      C("橄榄绿", "Olive Green", "#6b6f43", "绿"),
      C("哑光黑", "Matte Black", "#232323", "黑"),
    ],
    highlights: [
      "27.5+ 宽胎硬尾，低胎压带来额外抓地与舒适性",
      "120mm 前叉 + 短后三角，转向灵活",
      "可换装 29\" 轮组，一车两用",
    ],
    story: "Big Honzo 用 27.5+ 宽胎补足硬尾的舒适性，是预算有限又想玩技术小径的实用选择。",
    builds: [
      B(2026, "Big Honzo", 7193, 14.5, "Shimano Deore M6100", "Kona Aluminum 27.5", { tires: "Maxxis Rekon+ 27.5×2.8" }),
      B(2024, "Big Honzo", 6400, 14.9, "Shimano CUES U6000", "WTB KOM", { tires: "Maxxis Rekon+ 27.5×2.8" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Kona", "Remote 160", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Remote 160",
    frame: "铝合金车架，160mm 后行程，Shimano EP8 电机 + 540Wh 电池",
    fork: "RockShox Zeb 170mm",
    frontTravel: 170,
    rearTravel: 160,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("哑光黑", "Matte Black", "#1e1e1e", "黑"),
      C("电光蓝", "Electric Blue", "#1c5fa8", "蓝"),
    ],
    highlights: [
      "160mm 后行程的全功率电助力耐力车，Shimano EP8 电机",
      "铝合金车架 + 可拆卸 540Wh 电池，维护方便",
      "29\" 轮径配 170mm 前叉，爬坡与下坡兼顾",
    ],
    story: "Remote 160 是 Kona 的电助力耐力车，把 Process 的下坡基因接到电机上，用来扩大骑行半径。",
    builds: [
      B(2026, "Remote 160 DL", 38873, 24.2, "SRAM GX Eagle AXS", "WTB KOM", { shock: "Fox Float X Performance 160mm" }),
      B(2024, "Remote 160", 26633, 24.7, "Shimano SLX M7100", "Kona Aluminum 29", { shock: "RockShox Deluxe Select+ 160mm" }),
    ],
    notes: "官网：https://www.konaworld.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  /* ============================== Marin ============================== */
  mtbFamily("Marin", "Tam", {
    disc: "trail",
    years: [2026, 2027],
    gen: "Tam",
    frame: "铝合金车架，140mm 后行程，29\" 轮径，MultiTrac 连杆",
    fork: "RockShox Pike Select 150mm",
    frontTravel: 150,
    rearTravel: 140,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("哑光黑", "Matte Black", "#202020", "黑"),
      C("森林绿", "Forest Green", "#33523c", "绿"),
    ],
    highlights: [
      "Marin 现役行程最长的林道车，140mm 后行程 + 150mm 前叉",
      "MultiTrac 连杆结构简单、维护成本低",
      "29\" 轮径配现代几何，适合技术型山路",
    ],
    story: "Tam 是 Marin 把林道车行程拉长后的作品，用简单的连杆和扎实的配置打中端林道市场。",
    builds: [
      B(2027, "Tam 2", 17993, 14.4, "Shimano SLX M7100", "Marin Aluminum 29", { shock: "RockShox Deluxe Select+ 140mm" }),
      B(2026, "Tam XR", 41753, 14.2, "SRAM GX Eagle AXS", "Marin Aluminum 29", { shock: "Fox Float X Performance 140mm" }),
    ],
    notes: "官网：https://www.marinbikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Marin", "Quake", {
    disc: "downhill",
    years: [2026, 2027],
    gen: "Quake",
    frame: "铝合金车架，190mm 后行程，27.5\" 轮径，自由骑/速降两用",
    fork: "Fox 40 Performance 200mm",
    frontTravel: 200,
    rearTravel: 190,
    wheelSize: '27.5"',
    material: "铝合金",
    colors: [
      C("亮红", "Bright Red", "#c62828", "红"),
      C("哑光黑", "Matte Black", "#1b1b1b", "黑"),
    ],
    highlights: [
      "190mm 后行程的自由骑/速降车，Marin 产品线里行程最长",
      "铝合金车架可单独购买车架组，方便自组",
      "双肩叉 + 线圈避震，车公园与赛道通吃",
    ],
    story: "Quake 是 Marin 重回重力赛道的作品，190mm 行程和铝合金车架都指向“耐用、好修、敢飞”。",
    builds: [
      B(2027, "Quake", 40313, 17.4, "SRAM GX Eagle", "Race Face ARC 30", { shock: "Fox DHX2 Performance 190mm" }),
      B(2026, "Quake", 45360, 17.9, "SRAM X0 DH", "Spank 359", { shock: "Fox DHX2 Factory 190mm" }),
    ],
    notes: "官网：https://www.marinbikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Marin", "Alcatraz", {
    disc: "hardtail",
    years: [2026, 2027],
    gen: "Alcatraz",
    frame: "铝合金硬尾车架，26\" 轮径，土坡/街式几何",
    fork: "Marin 100mm DJ 前叉",
    frontTravel: 100,
    wheelSize: '26"',
    material: "铝合金",
    colors: [
      C("亮黑", "Gloss Black", "#191919", "黑"),
      C("荧光绿", "Fluo Green", "#8fd14f", "绿"),
    ],
    highlights: [
      "专为土坡与街式设计的硬尾，短后三角、低五通",
      "100mm DJ 前叉锁死硬朗，起跳反馈直接",
      "提供 24\" 青少年版本，方便小车手过渡",
    ],
    story: "Alcatraz 是 Marin 的土坡车，几何围绕起跳和落地，是车公园里最常见的那类车。",
    builds: [
      B(2027, "Alcatraz 2", 12233, 12.6, "SRAM NX Eagle", "Marin Aluminum Disc", { tires: "Maxxis DTH 26×2.3" }),
      B(2026, "Alcatraz 1", 7913, 13.0, "SRAM SX Eagle", "Marin Aluminum Disc", { tires: "Maxxis DTH 26×2.3" }),
    ],
    notes: "官网：https://www.marinbikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Marin", "Pine Mountain", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Pine Mountain",
    frame: "铝合金硬尾车架，100mm 前叉，29\" 轮径",
    fork: "SR Suntour XCR 100mm",
    frontTravel: 100,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("松林绿", "Pine Green", "#2f4f3a", "绿"),
      C("哑光黑", "Matte Black", "#262626", "黑"),
    ],
    highlights: [
      "入门 XC 硬尾，29\" 轮径与 100mm 前叉，适合轻度越野",
      "铝合金车架带货架孔位，可通勤可郊游",
      "液压碟刹与宽齿比传动，爬坡轻松",
    ],
    story: "Pine Mountain 是 Marin 的入门 XC 硬尾，用简单可靠的配置把新人带进山地车。",
    builds: [
      B(2026, "Pine Mountain 2", 17273, 12.9, "Shimano Deore M6100", "Marin Aluminum 29", { tires: "Maxxis Rekon Race 29×2.35" }),
      B(2024, "Pine Mountain 1", 10793, 13.3, "Shimano CUES U6000", "Marin Aluminum 29", { tires: "Maxxis Rekon Race 29×2.35" }),
    ],
    notes: "官网：https://www.marinbikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),

  mtbFamily("Marin", "Team Marin", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Team Marin",
    frame: "铝合金硬尾车架，100mm 前叉，29\" 轮径，竞赛几何",
    fork: "RockShox SID SL 100mm",
    frontTravel: 100,
    wheelSize: '29"',
    material: "铝合金",
    colors: [
      C("车队红", "Team Red", "#b3261e", "红"),
      C("哑光黑", "Matte Black", "#1f1f1f", "黑"),
    ],
    highlights: [
      "Marin 的 XC 竞赛硬尾，几何比 Pine Mountain 更激进",
      "100mm SID SL 前叉配轻量轮组，绕圈赛取向",
      "铝合金车架刚性足，冲刺响应直接",
    ],
    story: "Team Marin 是 Marin 给越野赛准备的车，几何和配置都围绕绕圈赛的加速与转向。",
    builds: [
      B(2026, "Team Marin 2", 17993, 12.6, "Shimano XT M8100", "Marin Aluminum 29", { tires: "Maxxis Rekon Race 29×2.35" }),
      B(2024, "Team Marin 1", 10793, 13.0, "Shimano SLX M7100", "Marin Aluminum 29", { tires: "Maxxis Rekon Race 29×2.35" }),
    ],
    notes: "官网：https://www.marinbikes.com；按官网美元价 ×7.2 折算，参考价，配置按官方档位整理。",
  }),
];
