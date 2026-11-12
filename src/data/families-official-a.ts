import type { FamilyRaw } from "./types";
import { B, C, roadFamily, mtbFamily } from "./helpers";


export const officialAFamilies: FamilyRaw[] = [
/* ───────────── Specialized ───────────── */

  roadFamily("Specialized", "Allez Sprint", {
  disc: "race",
  years: [2024, 2026],
  gen: "Allez Sprint Disc",
  material: "铝合金",
  frame: "E5 铝合金车架 · Smartweld 焊接工艺 · Aero 管型",
  fork: "S-Works FACT 全碳纤维前叉",
  colors: [
    C("亮光黑/火箭红", "Gloss Black/Rocket Red", "#141414", "黑"),
    C("缎面银灰", "Satin Silver Grey", "#9aa0a6", "灰"),
  ],
  highlights: ["E5 铝合金 Smartweld 焊接，刚性与 Tarmac 同源", "空气动力学管型下放，冲刺车架门槛之选", "全碳前叉 + 12mm 桶轴，转向刚性直接"],
  story: "Allez Sprint 把 Tarmac 的空力思路压进铝合金车身，是 Specialized 为 criterium 与冲刺训练保留的硬派车架。",
  builds: [
    B(2025, "Comp", 18990, 8.2, "Shimano 105 R7100", "Axis Elite Disc", { popularity: 82 }),
    B(2025, "LTD Shimano 105 Di2", 23990, 8.0, "Shimano 105 Di2 R7170", "Roval C38", { popularity: 74 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/allez-sprint-comp---shimano-105/p/4221550 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Specialized", "Shiv", {
  disc: "aero",
  years: [2024, 2026],
  gen: "Shiv Disc",
  frame: "FACT 11r 碳纤维车架 · 内置 Fuelcell 补给系统",
  fork: "S-Works FACT 碳纤维铁三前叉",
  colors: [
    C("亮光碳黑/荧光黄", "Gloss Carbon/Neon Yellow", "#0f0f10", "黑"),
    C("缎面蓝绿", "Satin Teal Fade", "#0f6b6b", "绿"),
  ],
  highlights: ["下沉式后上叉与深截面下管，计时赛姿态优化", "一体式 Fuelcell 储物与补给系统", "可切换铁三/计时赛把组设定"],
  story: "Shiv 是 Specialized 的铁三与计时赛平台，围绕长途补给与低风阻姿态设计，Disc 版本把制动也纳入气动布局。",
  builds: [
    B(2025, "Sport", 16990, 9.4, "Shimano 105 R7100", "Axis Elite Disc", { popularity: 60 }),
    B(2025, "Expert Disc", 59990, 8.6, "Shimano Ultegra Di2 R8170", "Roval Rapide CL II", { popularity: 72 }),
    B(2025, "S-Works Disc", 96990, 8.2, "Shimano Dura-Ace Di2 R9270", "Roval Rapide CLX III", { popularity: 66 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/shiv-expert-disc/p/175308 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Specialized", "Sirrus", {
  disc: "allroad",
  years: [2024, 2026],
  gen: "Sirrus",
  material: "铝合金",
  frame: "A1 铝合金车架 · Fitness 几何",
  fork: "Fact 全碳/铝合金前叉（按档位）",
  colors: [
    C("缎面黑", "Satin Black", "#1b1b1d", "黑"),
    C("亮光白/蓝", "Gloss White/Blue", "#f2f3f5", "白"),
  ],
  highlights: ["平把健身几何，兼顾通勤与长距离骑行", "多数档位配备碳纤维前叉与 12mm 桶轴", "可安装挡泥板与货架，日常通勤友好"],
  story: "Sirrus 是 Specialized 的平把健身/通勤主线，从入门铝合金到碳纤维 6.0 覆盖完整价格带。",
  builds: [
    B(2025, "1.0", 3390, 11.2, "Shimano Tourney 2×7", "Axis Sport Disc", { popularity: 78 }),
    B(2025, "3.0", 5990, 10.4, "Shimano Altus M2000", "Axis Sport Disc", { popularity: 88 }),
    B(2025, "6.0", 18990, 8.6, "Shimano 105 R7100", "Axis Elite Disc", { material: "碳纤维", popularity: 55 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/sirrus-3-0/p/216892 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Specialized", "Sirrus X", {
  disc: "allroad",
  years: [2024, 2026],
  gen: "Sirrus X",
  material: "铝合金",
  frame: "A1 铝合金车架 · 更宽胎容的健身平台",
  fork: "Fact 全碳/铝合金前叉（按档位）",
  colors: [
    C("缎面橄榄绿", "Satin Olive", "#5c6350", "绿"),
    C("亮光黑/沙色", "Gloss Black/Sand", "#171717", "黑"),
  ],
  highlights: ["38–42mm 胎容，能上碎石与土路", "1× 单盘传动为主，维护简单", "平把几何直立，长途舒适"],
  story: "Sirrus X 在 Sirrus 基础上放大胎容与单盘传动，定位城市之外的轻越野通勤。",
  builds: [
    B(2025, "2.0", 4290, 11.4, "microSHIFT 1×8", "Axis Sport Disc", { popularity: 80 }),
    B(2025, "3.0", 5990, 10.8, "Shimano Altus M2000", "Axis Sport Disc", { popularity: 76 }),
    B(2025, "5.0", 14990, 9.0, "SRAM GX Eagle", "Axis Elite Disc", { material: "碳纤维", popularity: 52 }),
    B(2025, "6.0", 16990, 8.8, "SRAM GX Eagle AXS", "Roval C38", { material: "碳纤维", popularity: 44 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/sirrus-x-3-0/p/216902 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Specialized", "Chisel", {
  disc: "xc",
  years: [2024, 2026],
  gen: "Chisel",
  material: "铝合金",
  frame: "Specialized D'Aluminum 铝合金车架 · XC 几何",
  fork: "RockShox Judy/SID 100mm 前叉（按档位）",
  frontTravel: 100,
  colors: [
    C("缎面黑/炭灰", "Satin Black/Charcoal", "#1c1d1f", "黑"),
    C("亮光红/白", "Gloss Red/White", "#c8102e", "红"),
  ],
  highlights: ["轻量铝合金 XC 硬尾，性价比竞赛入门", "100mm 行程与 29 寸轮组，滚动效率优先", "支持升降座管与真空胎设定"],
  story: "Chisel 是 Specialized 的铝合金 XC 硬尾，用接近碳架的重量把竞赛几何带到更低的价位。",
  builds: [
    B(2025, "Chisel", 10490, 11.6, "Shimano Deore M6100", "Specialized Stout 29", { popularity: 74 }),
    B(2025, "Comp", 12990, 11.2, "Shimano SLX M7100", "Specialized Stout 29", { popularity: 68 }),
    B(2025, "Comp EVO", 23990, 10.8, "SRAM GX Eagle", "Roval Control SL", { popularity: 48 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/chisel/p/4221775 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Specialized", "Epic Hardtail", {
  disc: "xc",
  years: [2024, 2026],
  gen: "Epic Hardtail",
  frame: "FACT 11m 碳纤维车架 · XC 竞赛几何",
  fork: "RockShox SID/Judy 100mm 前叉（按档位）",
  frontTravel: 100,
  colors: [
    C("亮光碳黑/金", "Gloss Carbon/Gold", "#101012", "黑"),
    C("缎面蓝", "Satin Blue", "#1c4f8b", "蓝"),
  ],
  highlights: ["FACT 碳纤维车架，整车可压到 9kg 级", "100mm XC 几何，爬坡与绕标都直接", "内走线 + 升降座管预留"],
  story: "Epic Hardtail 是 Specialized 的碳纤维 XC 硬尾，管型与后三角围绕踩踏效率与轻量做取舍。",
  builds: [
    B(2025, "Epic Hardtail", 14990, 10.4, "SRAM NX Eagle", "Specialized Stout 29", { popularity: 70 }),
    B(2025, "Comp", 21990, 9.9, "SRAM GX Eagle", "Roval Control SL", { popularity: 76 }),
    B(2025, "Expert", 33990, 9.4, "SRAM X0 Eagle AXS", "Roval Control SL", { popularity: 58 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/epic-hardtail/p/199662 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Specialized", "Epic World Cup", {
  disc: "xc",
  years: [2024, 2026],
  gen: "Epic World Cup",
  frame: "FACT 12m 碳纤维车架 · World Cup 竞赛几何",
  fork: "RockShox SID SL Ultimate 100mm 前叉",
  frontTravel: 100,
  colors: [
    C("亮光碳黑", "Gloss Carbon Black", "#0d0d0f", "黑"),
    C("缎面红/白", "Satin Red/White", "#b3122b", "红"),
  ],
  highlights: ["为绕标世界杯设计的短行程竞赛硬尾", "超轻 FACT 12m 车架与一体式座管夹", "量产版沿用厂队几何与避震曲线"],
  story: "Epic World Cup 把 Specialized 厂队的绕标设定直接量产，是品牌最轻的 XC 竞赛硬尾之一。",
  builds: [
    B(2025, "Expert", 45990, 9.2, "SRAM GX Eagle AXS", "Roval Control SL", { popularity: 62 }),
    B(2025, "Pro", 56990, 8.9, "SRAM X0 Eagle AXS", "Roval Control SL", { popularity: 54 }),
    B(2025, "S-Works", 85990, 8.6, "SRAM XX SL Eagle AXS", "Roval Control SL", { popularity: 50 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/epic-world-cup-expert---sram-gx-axs-rockshox-select/p/4221513 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Specialized", "Turbo Levo SL", {
  disc: "trail",
  years: [2024, 2026],
  gen: "Turbo Levo SL",
  frame: "FACT 11m 碳纤维车架 · SL 1.2 轻量电机",
  fork: "Fox 36 Rhythm/Performance 150mm 前叉（按档位）",
  frontTravel: 150,
  rearTravel: 150,
  colors: [
    C("缎面黑/荧光黄", "Satin Black/Neon", "#151517", "黑"),
    C("亮光森林绿", "Gloss Forest Green", "#2f4f3a", "绿"),
  ],
  highlights: ["SL 1.2 电机，整车重量接近常规 trail 车", "150/150mm 行程，爬坡与下坡兼顾", "可拆卸电池与增程电池扩展"],
  story: "Turbo Levo SL 用轻量电机换取接近普通山地车的操控，是 Specialized 电助力产品线里最灵活的一支。",
  builds: [
    B(2025, "Comp Carbon", 59990, 18.6, "SRAM GX Eagle", "Roval Traverse SL", { popularity: 66 }),
    B(2025, "Expert Carbon", 76990, 18.2, "SRAM X0 Eagle AXS", "Roval Traverse SL", { popularity: 56 }),
    B(2025, "S-Works", 109990, 17.9, "SRAM XX SL Eagle AXS", "Roval Traverse SL", { popularity: 48 }),
  ],
  notes: "官网：https://www.specialized.com.cn/cn/zh/turbo-levo-sl-expert-carbon/p/175106 ；中国区参考价，配置按官方档位整理。",
  }),

/* ───────────── Trek ───────────── */

  roadFamily("Trek", "Boone", {
  disc: "gravel",
  years: [2024, 2026],
  gen: "Boone",
  frame: "500 系列 OCLV 碳纤维车架 · 越野公路几何",
  fork: "Trek 全碳纤维越野公路前叉",
  colors: [
    C("哑光碳灰", "Matte Carbon Smoke", "#232427", "灰"),
    C("亮光深蓝", "Gloss Deep Blue", "#1d3a6b", "蓝"),
  ],
  highlights: ["cyclocross 专用几何与高位后上叉", "全碳车架 + 12mm 桶轴，泥地制动稳定", "可装 38mm 以上越野胎"],
  story: "Boone 是 Trek 的碳纤维 cyclocross 平台，几何围绕绕圈赛的高频上下车与泥地抓地设计。",
  builds: [
    B(2025, "5", 31800, 8.9, "Shimano GRX RX820", "Bontrager Aeolus Pro 51", { popularity: 58 }),
  ],
  notes: "官网：https://www.trekbikes.com/cn/zh_CN/search/?text=boone ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Trek", "Speed Concept", {
  disc: "aero",
  years: [2024, 2026],
  gen: "Speed Concept SLR",
  frame: "OCLV 800 碳纤维车架 · KVF 气动管型",
  fork: "Speed Concept 全碳纤维计时前叉",
  colors: [
    C("亮光碳黑/红", "Gloss Carbon/Red", "#101012", "黑"),
    C("哑光白/蓝", "Matte White/Blue", "#eef0f2", "白"),
  ],
  highlights: ["KVF 管型与整合式补给，铁三/计时赛取向", "一体式把组与隐藏走线", "碟刹版本兼顾制动力与气动"],
  story: "Speed Concept 是 Trek 的铁三与计时赛旗舰，整车围绕低风阻姿态与补给整合展开。",
  builds: [
    B(2025, "SLR 7", 70800, 9.0, "Shimano Ultegra Di2 R8170", "Bontrager Aeolus RSL 51", { popularity: 60 }),
    B(2025, "SLR 9", 101800, 8.7, "Shimano Dura-Ace Di2 R9270", "Bontrager Aeolus RSL 51", { popularity: 52 }),
  ],
  notes: "官网：https://www.trekbikes.com/cn/zh_CN/search/?text=speed%20concept ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Trek", "FX", {
  disc: "allroad",
  years: [2024, 2026],
  gen: "FX",
  material: "铝合金",
  frame: "Alpha Gold 铝合金车架 · 健身几何",
  fork: "FX 碳纤维/铝合金前叉（按档位）",
  colors: [
    C("哑光黑", "Matte Black", "#1a1a1c", "黑"),
    C("亮光蝰蛇红", "Gloss Viper Red", "#c3162a", "红"),
  ],
  highlights: ["平把健身几何，通勤与有氧训练皆宜", "FX Sport 档位升级碳纤维车架与 12mm 桶轴", "预留挡泥板与货架安装位"],
  story: "FX 是 Trek 销量最大的平把健身系列，从铝合金入门到碳纤维 FX Sport 覆盖完整价格带。",
  builds: [
    B(2025, "1", 3580, 11.6, "Shimano Altus M2000", "Bontrager Paradigm Comp", { popularity: 86 }),
    B(2025, "2", 4580, 11.0, "Shimano Acera M3000", "Bontrager Paradigm Comp", { popularity: 82 }),
    B(2025, "3", 6580, 10.4, "Shimano Deore M6100", "Bontrager Paradigm Comp", { popularity: 74 }),
    B(2025, "Sport SL 4", 13800, 9.2, "Shimano Tiagra 4720", "Bontrager Paradigm SL", { material: "碳纤维", popularity: 56 }),
  ],
  notes: "官网：https://www.trekbikes.com/cn/zh_CN/search/?text=fx ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Trek", "Procaliber", {
  disc: "xc",
  years: [2024, 2026],
  gen: "Procaliber Gen 3",
  frame: "OCLV 碳纤维车架 · IsoSpeed 断开式座管",
  fork: "RockShox SID 100mm 前叉（按档位）",
  frontTravel: 100,
  colors: [
    C("哑光碳灰/蓝", "Matte Carbon/Blue", "#1f2124", "灰"),
    C("亮光红/黑", "Gloss Red/Black", "#b5121f", "红"),
  ],
  highlights: ["IsoSpeed 断开式座管吸震，XC 长距离更省力", "100mm 行程 + 29 寸轮组，绕标效率优先", "碳纤维车架，整车可进 9kg 级"],
  story: "Procaliber 是 Trek 的碳纤维 XC 硬尾，用 IsoSpeed 结构在硬尾效率与舒适之间取平衡。",
  builds: [
    B(2025, "6", 10800, 11.4, "Shimano Deore M6100", "Bontrager Kovee", { popularity: 70 }),
    B(2025, "9.6 Gen 3", 21800, 10.2, "Shimano XT M8100", "Bontrager Kovee Pro 30", { popularity: 66 }),
    B(2025, "9.7 AXS Gen 3", 35800, 9.8, "SRAM GX Eagle AXS", "Bontrager Kovee Pro 30", { popularity: 52 }),
  ],
  notes: "官网：https://www.trekbikes.com/cn/zh_CN/search/?text=procaliber ；中国区参考价，配置按官方档位整理。",
  }),

/* ───────────── Giant ───────────── */

  roadFamily("Giant", "Trinity", {
  disc: "aero",
  years: [2024, 2026],
  gen: "Trinity Advanced SL",
  frame: "Advanced SL 碳纤维车架 · AeroSystem 管型",
  fork: "Trinity 全碳纤维计时前叉",
  colors: [
    C("碳纤/棱镜雾", "Carbon/Prismatic Haze", "#2a2d31", "黑"),
    C("碳纤/蓝蜻蜓", "Carbon/Blue Dragonfly", "#1f3f6e", "蓝"),
  ],
  highlights: ["AeroSystem 管型与整合式补给，计时赛取向", "一体式把组、隐藏走线与碟刹", "车架组与整车均按铁三姿态标定"],
  story: "Trinity 是 Giant 的铁三/计时赛平台，管型与把组围绕低风阻姿态与长途补给整合。",
  builds: [
    B(2025, "Advanced SL 0", 83800, 8.9, "Shimano Dura-Ace Di2 R9270", "Cadex 50 Ultra", { popularity: 54 }),
    B(2025, "Advanced SL 1", 55800, 9.2, "Shimano Ultegra Di2 R8170", "Giant SLR 1 40", { popularity: 60 }),
    B(2025, "Advanced SL 2", 45800, 9.4, "Shimano 105 Di2 R7170", "Giant SLR 2 42", { popularity: 62 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3516 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Giant", "PCR", {
  disc: "race",
  years: [2024, 2026],
  gen: "PCR LTD",
  material: "铝合金",
  frame: "ALUXX 铝合金车架 · 公路竞赛几何",
  fork: "PCR 全碳纤维前叉",
  colors: [
    C("渊黑", "Deep Black", "#131315", "黑"),
    C("白月光", "Moonlight White", "#f0f1f2", "白"),
    C("浅岩灰/木炭灰", "Light Rock Grey/Charcoal", "#8d9094", "灰"),
  ],
  highlights: ["铝合金公路车架，竞赛几何下放", "全碳前叉与内走线，外观接近碳架", "LTD 档位搭载 12 速套件"],
  story: "PCR 是 Giant 面向入门竞赛的铝合金公路线，几何取自 TCR，价格却压到训练车区间。",
  builds: [
    B(2025, "LTD 1", 6998, 9.4, "Shimano 105 R7100", "Giant S-X2 Disc", { popularity: 78 }),
    B(2025, "LTD 2 Plus", 5698, 9.7, "Shimano Tiagra 4720", "Giant S-X2 Disc", { popularity: 72 }),
    B(2025, "LTD 2", 4998, 9.9, "Shimano Sora R3000", "Giant S-X2 Disc", { popularity: 70 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3518 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Giant", "Escape", {
  disc: "allroad",
  years: [2024, 2026],
  gen: "Escape",
  material: "铝合金",
  frame: "ALUXX 铝合金车架 · 平把健身几何",
  fork: "Escape 碳纤维/铝合金前叉（按档位）",
  colors: [
    C("全消光水星灰/镀铬黑", "Matte Mercury Grey/Chrome Black", "#4a4d51", "灰"),
    C("雪山白", "Snow White", "#f4f5f6", "白"),
    C("星光银/丝绸灰", "Starlight Silver/Silk Grey", "#b9bcc0", "银"),
  ],
  highlights: ["平把健身几何，城市通勤与周末长距离皆宜", "Plus 档位升级碳纤维前叉与 12 速", "预留挡泥板与货架孔位"],
  story: "Escape 是 Giant 最走量的平把健身/通勤系列，覆盖从入门代步到轻度运动的价格带。",
  builds: [
    B(2025, "0 Plus", 4598, 10.6, "Shimano CUES U6000", "Giant S-X2 Disc", { popularity: 84 }),
    B(2025, "1", 2598, 11.4, "Shimano Altus M2000", "Giant S-X2 Disc", { popularity: 88 }),
    B(2025, "2", 1998, 11.8, "Shimano Tourney 2×7", "Giant S-X2 Disc", { popularity: 80 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3827 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Giant", "SCR", {
  disc: "race",
  years: [2024, 2026],
  gen: "SCR",
  material: "铝合金",
  frame: "ALUXX 铝合金车架 · 入门公路几何",
  fork: "SCR 碳纤维前叉",
  colors: [
    C("白月光", "Moonlight White", "#f1f2f3", "白"),
    C("原力兰", "Force Blue", "#26508c", "蓝"),
    C("全消光黑", "Matte Black", "#17181a", "黑"),
  ],
  highlights: ["Giant 入门公路主力，碳纤维前叉", "竞赛化几何，弯把下把位不憋屈", "28mm 胎容，日常路面舒适"],
  story: "SCR 是 Giant 的入门铝合金公路车，用 TCR 血统的几何承接第一次公路骑行。",
  builds: [
    B(2025, "SCR", 2598, 10.4, "Shimano Claris R2000", "Giant P-R2", { popularity: 76 }),
    B(2025, "SCR 2", 1998, 10.8, "Shimano Tourney 2×7", "Giant P-R2", { popularity: 74 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=1834 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Giant", "Glory", {
  disc: "downhill",
  years: [2024, 2026],
  gen: "Glory Advanced",
  frame: "Advanced 碳纤维车架 · Maestro 200mm 避震",
  fork: "Fox 40 Factory 203mm 前叉",
  frontTravel: 200,
  rearTravel: 200,
  colors: [
    C("碳纤黑/电光蓝", "Carbon Black/Electric Blue", "#141619", "黑"),
  ],
  highlights: ["Maestro 四连杆 200mm 行程，DH 竞赛平台", "碳纤维主车架，兼顾刚性与轻量", "厂队几何：长前伸、低五通"],
  story: "Glory 是 Giant 的下坡旗舰，Maestro 连杆在高速碎石与连续落差间维持抓地。",
  builds: [
    B(2025, "Advanced", 55800, 16.8, "SRAM X0 DH", "Giant TRX 0", { popularity: 46 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=1794 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Giant", "XTC", {
  disc: "xc",
  years: [2024, 2026],
  gen: "XTC",
  frame: "Advanced 碳纤维 / ALUXX SL 铝合金车架（按档位）",
  fork: "100mm XC 前叉（RockShox/Fox，按档位）",
  frontTravel: 100,
  colors: [
    C("娇艳珠蓝/碳纤维黑", "Gloss Sapphire/Carbon", "#1f4fa0", "蓝"),
    C("水泥灰", "Cement Grey", "#7d8184", "灰"),
    C("靛灰蓝", "Indigo Grey Blue", "#414a5c", "蓝"),
  ],
  highlights: ["Giant 的 XC 硬尾主力，碳/铝双线并行", "100mm 行程 + 29 寸轮组，绕标效率高", "内走线与升降座管预留"],
  story: "XTC 是 Giant 的 XC 硬尾系列，Advanced 碳架与 SLR 铝架覆盖竞赛到入门训练。",
  builds: [
    B(2025, "Advanced 1", 16800, 10.4, "Shimano XT M8100", "Giant XCR 0", { popularity: 68 }),
    B(2025, "SLR 1", 9598, 11.0, "Shimano SLX M7100", "Giant XCR 0", { material: "铝合金", popularity: 74 }),
    B(2025, "XTC 800", 3998, 12.4, "Shimano Deore M6100", "Giant GX 29", { material: "铝合金", popularity: 82 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3801 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Giant", "ATX", {
  disc: "hardtail",
  years: [2024, 2026],
  gen: "ATX",
  material: "铝合金",
  frame: "ALUXX 铝合金车架 · 入门越野几何",
  fork: "SR Suntour 100mm 前叉（按档位）",
  frontTravel: 100,
  colors: [
    C("烟雨灰", "Misty Rain Grey", "#6f7478", "灰"),
    C("全消光灰蓝", "Matte Grey Blue", "#3d4a58", "蓝"),
    C("沙漠鼠尾草", "Desert Sage", "#8a8a6d", "绿"),
  ],
  highlights: ["Giant 入门山地主力，价格带覆盖广", "100mm 前叉 + 29 寸轮组，通勤越野通吃", "部分档位配液压碟刹与内走线"],
  story: "ATX 是 Giant 最入门的山地系列，承担从代步到第一次越野骑行的过渡。",
  builds: [
    B(2025, "860", 3498, 13.4, "Shimano Deore M6100", "Giant GX 29", { popularity: 80 }),
    B(2025, "720", 1998, 14.2, "Shimano Altus M2000", "Giant GX 29", { popularity: 86 }),
    B(2025, "660", 1898, 14.6, "Shimano Acera M3000", "Giant GX 29", { popularity: 78 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3690 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Giant", "Stance", {
  disc: "trail",
  years: [2024, 2026],
  gen: "Stance",
  material: "铝合金",
  frame: "ALUXX 铝合金车架 · FlexPoint 120mm 避震",
  fork: "130mm trail 前叉（按档位）",
  frontTravel: 130,
  rearTravel: 120,
  colors: [
    C("亮黑/极光绿", "Gloss Black/Aurora Green", "#101214", "黑"),
    C("追光银/丝绸灰", "Chase Silver/Silk Grey", "#b3b7ba", "银"),
    C("天青蓝/亮柠黄", "Sky Blue/Bright Lemon", "#2f7fa8", "蓝"),
  ],
  highlights: ["FlexPoint 单转点 120mm 后避震，入门全避震", "130mm 前叉，下坡容错更高", "铝合金车架，维护成本低"],
  story: "Stance 是 Giant 的入门全避震 trail 车，用 FlexPoint 结构把价格压进万元以内。",
  builds: [
    B(2025, "Pro", 8998, 14.6, "Shimano SLX M7100", "Giant TRX 0", { popularity: 62 }),
    B(2025, "Stance 2", 5998, 15.2, "Shimano Deore M6100", "Giant S-X2 Disc", { popularity: 70 }),
    B(2025, "Stance 3", 3998, 15.8, "Shimano CUES U6000", "Giant S-X2 Disc", { popularity: 66 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3740 ；中国区参考价，配置按官方档位整理。",
  }),

  mtbFamily("Giant", "Faith", {
  disc: "enduro",
  years: [2024, 2026],
  gen: "Faith",
  material: "铝合金",
  frame: "ALUXX SL 铝合金车架 · 长行程 Freeride 几何",
  fork: "180mm 双肩/单肩前叉（按档位）",
  frontTravel: 180,
  rearTravel: 170,
  colors: [
    C("Copper", "Copper", "#a9633a", "棕"),
    C("Ocean Flux", "Ocean Flux", "#1f6f7a", "蓝"),
    C("镀铬黑/星光银", "Chrome Black/Starlight Silver", "#2b2d30", "黑"),
  ],
  highlights: ["170–180mm 长行程，freeride/公园取向", "铝合金车架抗造，配件通用性好", "低五通与长轴距，落差落地更稳"],
  story: "Faith 是 Giant 面向 freeride 与花式公园的长行程车，车架强度优先于轻量。",
  builds: [
    B(2025, "Faith", 14800, 17.2, "SRAM GX Eagle", "Giant TRX 0", { popularity: 44 }),
    B(2025, "Faith 2", 7998, 18.0, "SRAM NX Eagle", "Giant S-X2 Disc", { popularity: 50 }),
    B(2025, "Faith 3", 4998, 18.6, "Shimano Deore M6100", "Giant S-X2 Disc", { popularity: 48 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=3393 ；中国区参考价，配置按官方档位整理。",
  }),

  roadFamily("Giant", "Fastroad", {
  disc: "allroad",
  years: [2024, 2026],
  gen: "Fastroad AR",
  frame: "Advanced 碳纤维车架 · 平把公路几何",
  fork: "Fastroad 全碳纤维前叉",
  colors: [
    C("星光银/亮黑", "Starlight Silver/Gloss Black", "#c0c3c6", "银"),
    C("木炭灰/星光银", "Charcoal/Starlight Silver", "#4b4e52", "灰"),
  ],
  highlights: ["碳纤维平把公路，兼顾速度与直立姿态", "AR 版本加大胎容，可上碎石", "整合式座管与内走线"],
  story: "Fastroad 是 Giant 的碳纤维平把公路系列，用公路几何换取更快的通勤与健身效率。",
  builds: [
    B(2025, "AR Advanced 1", 12800, 9.6, "Shimano 105 R7100", "Giant SLR 2 42", { popularity: 58 }),
    B(2025, "AR Advanced 2", 8998, 9.9, "Shimano Tiagra 4720", "Giant S-X2 Disc", { popularity: 62 }),
  ],
  notes: "官网：https://www.giant.com.cn/index.php/index/bike_view.html?id=1544 ；中国区参考价，配置按官方档位整理。",
  }),

/* ───────────── Merida ───────────── */

  mtbFamily("Merida", "BIG.TRAIL", {
    disc: "trail",
    years: [2024, 2026],
    gen: "BIG.TRAIL",
    frame: "LITE 铝合金车架 · 140mm travel 几何",
    fork: "Marzocchi/SR Suntour 140mm 前叉（按档位）",
    frontTravel: 140,
    material: "铝合金",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#1b1c1e", "黑"),
      C("墨绿/铜", "Forest Green/Copper", "#2f4a3c", "绿"),
    ],
    highlights: ["MERIDA 的铝合金 trail 硬尾，140mm 前叉", "长前伸 + 低五通，下坡更稳", "支持升降座管与 2.4 寸胎"],
    story: "BIG.TRAIL 是 Merida 用铝合金把 trail 几何带到中价位硬尾的产品线，强调下坡信心。",
    builds: [
      B(2025, "400", 9350, 14.8, "Shimano Deore M6100", "Merida Comp CC", { popularity: 62 }),
      B(2025, "700", 13250, 14.2, "Shimano SLX M7100", "Merida Comp CC", { popularity: 54 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Merida", "ONE-FORTY", {
    disc: "trail",
    years: [2024, 2026],
    gen: "ONE-FORTY",
    frame: "LITE/CF 车架 · 140mm 后避震平台",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 140,
    colors: [
      C("哑光炭黑", "Matte Charcoal", "#25272a", "灰"),
      C("亮光橙/黑", "Gloss Orange/Black", "#d4611c", "橙"),
    ],
    highlights: ["Merida 的 140mm trail 全避震主力", "铝合金与 CF 碳架双线，覆盖中高价位", "可调几何翻转片，适应 29/27.5+"],
    story: "ONE-FORTY 是 Merida 的中行程 trail 平台，兼顾爬坡效率与下坡容错。",
    builds: [
      B(2025, "400", 18700, 15.6, "Shimano Deore M6100", "Merida Comp CC", { material: "铝合金", popularity: 58 }),
      B(2025, "700", 25700, 14.8, "Shimano SLX M7100", "Merida Comp CC", { material: "铝合金", popularity: 52 }),
      B(2025, "8000", 39000, 13.9, "Shimano XT M8100", "Merida Team TR", { popularity: 44 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Merida", "ONE-TWENTY", {
    disc: "downcountry",
    years: [2024, 2026],
    gen: "ONE-TWENTY",
    frame: "LITE 铝合金 / CF 碳纤维车架 · 120mm 平台",
    fork: "130mm 前叉（按档位）",
    frontTravel: 130,
    rearTravel: 120,
    colors: [
      C("亮光蓝/黑", "Gloss Blue/Black", "#1e5fa8", "蓝"),
      C("哑光灰/红", "Matte Grey/Red", "#6a6d70", "灰"),
    ],
    highlights: ["120mm downcountry 定位，爬坡轻快", "车架带翻转片，可切换几何", "轻量铝合金版本重量控制出色"],
    story: "ONE-TWENTY 介于 XC 与 trail 之间，是 Merida 对 downcountry 玩法的回答。",
    builds: [
      B(2025, "400", 17200, 14.9, "Shimano Deore M6100", "Merida Comp CC", { material: "铝合金", popularity: 56 }),
      B(2025, "600", 21800, 14.4, "Shimano SLX M7100", "Merida Comp CC", { material: "铝合金", popularity: 50 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Merida", "eONE-SIXTY", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "eONE-SIXTY",
    frame: "CF 碳纤维车架 · Shimano EP8 电机 · 170mm 平台",
    fork: "170mm enduro 前叉（按档位）",
    frontTravel: 170,
    rearTravel: 170,
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#16181a", "黑"),
      C("亮光灰/橙", "Gloss Grey/Orange", "#8d9195", "灰"),
    ],
    highlights: ["Shimano EP8 电机 + 630Wh 电池", "170/170mm 行程，电助力 enduro", "碳纤维车架与内藏电池设计"],
    story: "eONE-SIXTY 把 Merida 的 enduro 几何与 Shimano EP8 动力结合，用于长距离大落差骑行。",
    builds: [
      B(2025, "500", 35100, 23.8, "Shimano SLX M7100", "Merida Comp CC", { popularity: 48 }),
      B(2025, "700", 42900, 23.2, "Shimano XT M8100", "Merida Team TR", { popularity: 42 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Merida", "eBIG.NINE", {
    disc: "xc",
    years: [2024, 2026],
    gen: "eBIG.NINE",
    frame: "LITE 铝合金车架 · Shimano 电机 · 29 寸",
    fork: "100mm XC 前叉（按档位）",
    frontTravel: 100,
    material: "铝合金",
    colors: [
      C("哑光黑/绿", "Matte Black/Green", "#1a1c1b", "黑"),
      C("亮光银/蓝", "Gloss Silver/Blue", "#b7bcc0", "银"),
    ],
    highlights: ["29 寸 XC 电助力硬尾", "Shimano 中置电机 + 内藏电池", "适合通勤与林道混合路线"],
    story: "eBIG.NINE 是 Merida 的 29 寸 XC 电助力硬尾，把电驱效率与越野几何放在一起。",
    builds: [
      B(2025, "400", 21100, 21.6, "Shimano Deore M6100", "Merida Comp CC", { popularity: 52 }),
      B(2025, "500", 25000, 21.0, "Shimano SLX M7100", "Merida Comp CC", { popularity: 46 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Merida", "SPEEDER", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "SPEEDER",
    material: "铝合金",
    frame: "LITE 铝合金车架 · 平把健身几何",
    fork: "SPEEDER 碳纤维前叉",
    colors: [
      C("哑光黑/灰", "Matte Black/Grey", "#1c1d1f", "黑"),
      C("亮光蓝", "Gloss Blue", "#2a63a8", "蓝"),
    ],
    highlights: ["平把健身/通勤定位，碳纤维前叉", "液压碟刹与内走线", "可装挡泥板与货架"],
    story: "SPEEDER 是 Merida 的平把健身系列，用公路车架几何换取更快的城市通勤。",
    builds: [
      B(2025, "200", 8600, 10.6, "Shimano Altus M2000", "Merida Comp SL", { popularity: 64 }),
      B(2025, "300", 10100, 10.2, "Shimano Deore M6100", "Merida Comp SL", { popularity: 58 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Merida", "CROSSWAY", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "CROSSWAY",
    material: "铝合金",
    frame: "LITE 铝合金车架 · 旅行/通勤几何",
    fork: "SR Suntour 避震前叉（按档位）",
    colors: [
      C("哑光灰/黑", "Matte Grey/Black", "#5d6064", "灰"),
      C("亮光红", "Gloss Red", "#b3202f", "红"),
    ],
    highlights: ["旅行车定位，配避震前叉与直把", "货架/挡泥板/脚撑孔位齐全", "宽胎与舒适坐姿，适合长途"],
    story: "CROSSWAY 是 Merida 的旅行与日常通勤系列，强调载物能力与舒适姿态。",
    builds: [
      B(2025, "100", 5500, 13.4, "Shimano Altus M2000", "Merida Comp CC", { popularity: 60 }),
      B(2025, "300", 7000, 13.0, "Shimano Acera M3000", "Merida Comp CC", { popularity: 54 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Merida", "TIME WARP", {
    disc: "aero",
    years: [2024, 2026],
    gen: "TIME WARP",
    frame: "CF 碳纤维车架 · 计时/铁三几何",
    fork: "TIME WARP 全碳纤维计时前叉",
    colors: [
      C("亮光黑/青", "Gloss Black/Teal", "#101214", "黑"),
      C("亮光白/红", "Gloss White/Red", "#f2f3f4", "白"),
    ],
    highlights: ["Merida 的计时赛/铁三平台", "整合式把组与隐藏走线", "车架截面按低风阻优化"],
    story: "TIME WARP 是 Merida 的计时赛与铁三车，围绕长时间低风阻姿态与补给整合设计。",
    builds: [
      B(2025, "4000", 31200, 9.4, "Shimano 105 Di2 R7170", "Merida Team SL 45", { popularity: 44 }),
      B(2025, "8000", 54600, 8.9, "Shimano Ultegra Di2 R8170", "Merida Team SL 45", { popularity: 38 }),
    ],
    notes: "官网：https://www.merida-bikes.com/en/bikefinder ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

/* ───────────── Cannondale ───────────── */

  mtbFamily("Cannondale", "Moterra", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Moterra",
    frame: "SmartForm C1 铝合金车架 · Bosch Performance CX",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 150,
    material: "铝合金",
    colors: [
      C("哑光黑/绿", "Matte Black/Green", "#17191a", "黑"),
      C("亮光灰/橙", "Gloss Grey/Orange", "#8b8f93", "灰"),
    ],
    highlights: ["Bosch Performance CX 电机 + 750Wh 电池", "150/150mm 行程，全功率 trail 电助力", "铝合金车架，电池可拆"],
    story: "Moterra 是 Cannondale 的全功率 trail 电助力平台，用 Bosch 动力换更长爬坡与更多下坡趟数。",
    builds: [
      B(2025, "2", 47500, 24.2, "Shimano Deore M6100", "Cannondale Trail 29", { popularity: 50 }),
      B(2025, "1", 57600, 23.6, "Shimano SLX M7100", "Cannondale Trail 29", { popularity: 44 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/mountain ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  mtbFamily("Cannondale", "Moterra SL", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Moterra SL",
    frame: "碳纤维车架 · Bosch SX 轻量电机",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 150,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#131416", "黑"),
      C("亮光蓝绿", "Gloss Teal", "#1f6b74", "绿"),
    ],
    highlights: ["Bosch SX 轻量电机，整车重量更接近常规 trail", "碳纤维车架与内藏 400Wh 电池", "150/150mm 行程，操控灵活"],
    story: "Moterra SL 用轻量电机与碳架换取接近普通山地车的操控感，是 Cannondale 的轻电助力 trail 车。",
    builds: [
      B(2025, "2", 54000, 19.8, "Shimano SLX M7100", "Cannondale HollowGram XC", { popularity: 46 }),
      B(2025, "1", 68400, 19.2, "SRAM GX Eagle AXS", "Cannondale HollowGram XC", { popularity: 40 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/mountain ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Cannondale", "SuperSlice", {
    disc: "aero",
    years: [2024, 2026],
    gen: "SuperSlice",
    frame: "BallisTec 碳纤维车架 · 计时/铁三几何",
    fork: "SuperSlice 全碳纤维计时前叉",
    colors: [
      C("亮光黑/荧光黄", "Gloss Black/Highlighter", "#0f1012", "黑"),
      C("亮光白/蓝", "Gloss White/Blue", "#eef0f2", "白"),
    ],
    highlights: ["Cannondale 的计时赛/铁三平台", "整合式把组与储物盒", "碟刹版本兼顾制动与气动"],
    story: "SuperSlice 是 Cannondale 的铁三与计时赛旗舰，车架与把组围绕低风阻姿态设计。",
    builds: [
      B(2025, "Ultegra Di2", 46800, 9.2, "Shimano Ultegra Di2 R8170", "Cannondale HollowGram 45", { popularity: 42 }),
      B(2025, "Dura-Ace Di2", 64800, 8.9, "Shimano Dura-Ace Di2 R9270", "Cannondale HollowGram 45", { popularity: 36 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/road ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Cannondale", "Quick", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Quick",
    material: "铝合金",
    frame: "SmartForm C3 铝合金车架 · 平把健身几何",
    fork: "Quick 碳纤维/铝合金前叉（按档位）",
    colors: [
      C("哑光黑", "Matte Black", "#1a1b1d", "黑"),
      C("亮光石墨灰", "Gloss Graphite", "#54585c", "灰"),
    ],
    highlights: ["Cannondale 的平把健身/通勤主线", "液压碟刹与内走线", "预留挡泥板与货架孔位"],
    story: "Quick 是 Cannondale 销量最大的平把健身系列，覆盖从代步到运动的完整价格带。",
    builds: [
      B(2025, "4", 5470, 11.8, "Shimano Altus M2000", "Cannondale RD 2.0", { popularity: 72 }),
      B(2025, "2", 7920, 11.0, "Shimano Deore M6100", "Cannondale RD 2.0", { popularity: 64 }),
      B(2025, "1", 11500, 9.8, "Shimano 105 R7100", "Cannondale HollowGram 45", { material: "碳纤维", popularity: 48 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/active-fitness ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Cannondale", "Bad Boy", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Bad Boy",
    material: "铝合金",
    frame: "SmartForm C2 铝合金车架 · 城市几何",
    fork: "Bad Boy 碳纤维前叉",
    colors: [
      C("哑光黑/反光条", "Matte Black/Reflective", "#161718", "黑"),
      C("亮光军绿", "Gloss Olive", "#4f5747", "绿"),
    ],
    highlights: ["城市通勤定位，单臂前叉视觉标识", "碳纤维前叉与液压碟刹", "防刺胎与整合式灯位"],
    story: "Bad Boy 是 Cannondale 的城市通勤标志车型，用 Lefty 单臂前叉造型与实用配置区分于 Quick。",
    builds: [
      B(2025, "2", 9000, 11.4, "Shimano Altus M2000", "Cannondale RD 2.0", { popularity: 56 }),
      B(2025, "1", 11500, 10.8, "Shimano Deore M6100", "Cannondale RD 2.0", { popularity: 50 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/active-fitness ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Cannondale", "Treadwell", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Treadwell",
    material: "铝合金",
    frame: "SmartForm C3 铝合金车架 · 舒适城市几何",
    fork: "Treadwell 铝合金前叉",
    colors: [
      C("亮光沙色", "Gloss Sand", "#c2b096", "棕"),
      C("哑光深蓝", "Matte Deep Blue", "#1f3350", "蓝"),
    ],
    highlights: ["舒适直把城市车，坐姿直立", "宽胎与低跨高设计，上下车方便", "配挡泥板与货架孔位"],
    story: "Treadwell 是 Cannondale 的舒适城市系列，强调直立坐姿与日常实用性。",
    builds: [
      B(2025, "3", 5040, 12.2, "microSHIFT 1×8", "Cannondale RD 2.0", { popularity: 58 }),
      B(2025, "2", 6840, 11.8, "Shimano Altus M2000", "Cannondale RD 2.0", { popularity: 52 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/active-fitness ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  mtbFamily("Cannondale", "Scalpel HT", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Scalpel HT",
    frame: "碳纤维车架 · XC 竞赛硬尾几何",
    fork: "100mm XC 前叉（按档位）",
    frontTravel: 100,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#121315", "黑"),
      C("亮光蓝/黄", "Gloss Blue/Yellow", "#1f4f9c", "蓝"),
    ],
    highlights: ["Scalpel 家族的碳纤维 XC 硬尾", "轻量车架与竞赛几何", "内走线与升降座管预留"],
    story: "Scalpel HT 把 Scalpel 的竞赛血统做成硬尾，是 Cannondale 的轻量 XC 绕标车。",
    builds: [
      B(2025, "Carbon 3", 21600, 10.8, "Shimano Deore M6100", "Cannondale HollowGram XC", { popularity: 52 }),
      B(2025, "Carbon 2", 28800, 10.2, "Shimano SLX M7100", "Cannondale HollowGram XC", { popularity: 46 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/mountain ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Cannondale", "SuperX", {
    disc: "gravel",
    years: [2024, 2026],
    gen: "SuperX",
    frame: "BallisTec 碳纤维车架 · cyclocross 几何",
    fork: "SuperX 全碳纤维前叉",
    colors: [
      C("亮光黑/青", "Gloss Black/Teal", "#111315", "黑"),
      C("亮光白/橙", "Gloss White/Orange", "#f0f1f2", "白"),
    ],
    highlights: ["cyclocross 竞赛几何，转向敏捷", "碳纤维车架与 12mm 桶轴", "大胎容，可兼顾碎石路线"],
    story: "SuperX 是 Cannondale 的 cyclocross 竞赛车，几何围绕高频转向与泥地上下车设计。",
    builds: [
      B(2025, "2", 21600, 8.9, "SRAM Rival AXS", "Cannondale CX 2.0", { popularity: 46 }),
      B(2025, "1", 27400, 8.6, "SRAM Force AXS", "Cannondale HollowGram 45", { popularity: 40 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/road ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  mtbFamily("Cannondale", "Gemini", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Gemini",
    frame: "碳纤维/铝合金车架 · 170mm enduro 平台",
    fork: "170mm enduro 前叉（按档位）",
    frontTravel: 170,
    rearTravel: 170,
    colors: [
      C("哑光黑/红", "Matte Black/Red", "#141517", "黑"),
      C("亮光灰/绿", "Gloss Grey/Green", "#7d8286", "灰"),
    ],
    highlights: ["Cannondale 的 enduro 平台，170mm 行程", "可调几何与长轴距设定", "碳/铝双线覆盖中高价位"],
    story: "Gemini 是 Cannondale 的 enduro 主力，几何与避震曲线面向大落差与技术路段。",
    builds: [
      B(2025, "Carbon 2", 36000, 15.4, "SRAM GX Eagle", "Cannondale HollowGram XC", { popularity: 44 }),
      B(2025, "Carbon 1", 46800, 14.9, "SRAM X0 Eagle AXS", "Cannondale HollowGram XC", { popularity: 38 }),
    ],
    notes: "官网：https://www.cannondale.com/en-us/bikes/mountain ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),


/* ───────────── Scott ───────────── */

  roadFamily("Scott", "Plasma", {
    disc: "aero",
    years: [2024, 2026],
    gen: "Plasma RC",
    frame: "HMX 碳纤维车架 · 计时/铁三几何",
    fork: "Plasma 全碳纤维计时前叉",
    colors: [
      C("亮光黑/青", "Gloss Black/Teal", "#101214", "黑"),
      C("亮光白/红", "Gloss White/Red", "#f1f2f3", "白"),
    ],
    highlights: ["Scott 的计时赛/铁三平台", "整合式把组与储物盒", "碟刹与隐藏走线"],
    story: "Plasma 是 Scott 的铁三/计时赛旗舰，车架与把组围绕低风阻姿态和补给整合设计。",
    builds: [
      B(2025, "RC 20", 39000, 9.4, "Shimano Ultegra Di2 R8170", "Syncros Capital 1.0 50", { popularity: 42 }),
      B(2025, "RC Pro", 62400, 8.9, "Shimano Dura-Ace Di2 R9270", "Syncros Capital 1.0 50", { popularity: 36 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/road ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Scott", "Gambler", {
    disc: "downhill",
    years: [2024, 2026],
    gen: "Gambler",
    frame: "碳纤维/铝合金车架 · 200mm DH 平台",
    fork: "200mm 双肩前叉（按档位）",
    frontTravel: 200,
    rearTravel: 200,
    colors: [
      C("亮光黑/黄", "Gloss Black/Yellow", "#131416", "黑"),
      C("哑光灰/红", "Matte Grey/Red", "#6f7377", "灰"),
    ],
    highlights: ["Scott 的 DH 竞赛平台，200mm 行程", "可调几何与后轴规格", "碳/铝双线覆盖竞赛到入门"],
    story: "Gambler 是 Scott 的下坡车，车架几何与连杆曲线来自世界杯赛道需求。",
    builds: [
      B(2025, "920", 39000, 17.2, "SRAM GX Eagle", "Syncros Silverton 1.0", { popularity: 42 }),
      B(2025, "900", 50700, 16.6, "SRAM X0 DH", "Syncros Silverton 1.0", { popularity: 36 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Scott", "Voltage", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Voltage",
    frame: "铝合金车架 · 长行程 freeride 几何",
    fork: "180mm 前叉（按档位）",
    frontTravel: 180,
    rearTravel: 170,
    material: "铝合金",
    colors: [
      C("哑光黑/橙", "Matte Black/Orange", "#171819", "黑"),
      C("亮光蓝/白", "Gloss Blue/White", "#1e56a0", "蓝"),
    ],
    highlights: ["freeride/公园取向的长行程铝合金车", "结实车架与通用配件规格", "低五通与短后下叉，花式动作灵活"],
    story: "Voltage 是 Scott 面向 freeride 与花式公园的长行程车，耐用性优先。",
    builds: [
      B(2025, "eRIDE 900", 46800, 23.4, "SRAM NX Eagle", "Syncros Silverton 1.0", { popularity: 38 }),
      B(2025, "FR 720", 27300, 17.8, "SRAM GX Eagle", "Syncros Silverton 1.0", { popularity: 44 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Scott", "Patron", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Patron eRIDE",
    frame: "碳纤维车架 · Bosch Performance CX · 160mm",
    fork: "160mm enduro 前叉（按档位）",
    frontTravel: 160,
    rearTravel: 150,
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#151719", "黑"),
      C("亮光灰/橙", "Gloss Grey/Orange", "#878b8f", "灰"),
    ],
    highlights: ["Bosch Performance CX 电机 + 750Wh 电池", "160/150mm 行程，长距离电助力 enduro", "内藏电池与整合式灯组"],
    story: "Patron 是 Scott 的全功率 enduro 电助力车，面向长距离大落差路线。",
    builds: [
      B(2025, "910", 50700, 24.6, "Shimano XT M8100", "Syncros Silverton 1.0", { popularity: 40 }),
      B(2025, "900", 62400, 24.0, "SRAM GX Eagle AXS", "Syncros Silverton 1.0", { popularity: 34 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Scott", "Lumen", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Lumen eRIDE",
    frame: "碳纤维车架 · TQ 轻量电机 · 130mm",
    fork: "140mm trail 前叉（按档位）",
    frontTravel: 140,
    rearTravel: 130,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#131517", "黑"),
      C("亮光绿/黑", "Gloss Green/Black", "#2f6b4f", "绿"),
    ],
    highlights: ["TQ 轻量电机，整车接近常规 trail 重量", "碳纤维车架与内藏 360Wh 电池", "140/130mm 行程，操控灵活"],
    story: "Lumen 是 Scott 的轻量电助力 trail 车，用 TQ 电机换取接近普通山地车的骑感。",
    builds: [
      B(2025, "910", 54600, 18.9, "Shimano XT M8100", "Syncros Silverton 1.0", { popularity: 40 }),
      B(2025, "900", 66300, 18.4, "SRAM GX Eagle AXS", "Syncros Silverton 1.0", { popularity: 34 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Scott", "Strike", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Strike eRIDE",
    frame: "铝合金车架 · Bosch Performance · 150mm",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 150,
    material: "铝合金",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#191a1c", "黑"),
      C("亮光蓝/黑", "Gloss Blue/Black", "#215a9c", "蓝"),
    ],
    highlights: ["Bosch 中置电机 + 625Wh 电池", "150/150mm 行程，全功率 trail", "铝合金车架，维护成本低"],
    story: "Strike 是 Scott 的中价位电助力 trail 车，动力与行程都以实用为先。",
    builds: [
      B(2025, "930", 42900, 24.8, "Shimano Deore M6100", "Syncros Silverton 1.0", { popularity: 44 }),
      B(2025, "920", 35100, 25.2, "Shimano SLX M7100", "Syncros Race 24", { popularity: 48 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Scott", "Sub Cross", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Sub Cross",
    material: "铝合金",
    frame: "铝合金车架 · 旅行/通勤几何",
    fork: "SR Suntour 避震前叉（按档位）",
    colors: [
      C("哑光灰/黑", "Matte Grey/Black", "#5f6266", "灰"),
      C("亮光黑/绿", "Gloss Black/Green", "#171819", "黑"),
    ],
    highlights: ["旅行车定位，配避震前叉", "货架/挡泥板/脚撑孔位齐全", "宽胎与直立坐姿，长途舒适"],
    story: "Sub Cross 是 Scott 的旅行与通勤系列，强调载物能力与日常耐用性。",
    builds: [
      B(2025, "30", 6200, 13.8, "Shimano Altus M2000", "Syncros Race 24", { popularity: 56 }),
      B(2025, "10", 8600, 13.2, "Shimano Deore M6100", "Syncros Race 24", { popularity: 50 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/trekking ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Scott", "Axis", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Axis",
    material: "铝合金",
    frame: "铝合金车架 · 城市健身几何",
    fork: "Axis 碳纤维/铝合金前叉（按档位）",
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#1a1b1d", "黑"),
      C("亮光银/灰", "Gloss Silver/Grey", "#b5b9bc", "银"),
    ],
    highlights: ["平把城市/健身车，坐姿舒适", "液压碟刹与内走线", "可装挡泥板与货架"],
    story: "Axis 是 Scott 的平把城市与健身系列，定位日常通勤与周末骑行。",
    builds: [
      B(2025, "30", 5500, 12.4, "Shimano Altus M2000", "Syncros Race 24", { popularity: 54 }),
      B(2025, "20", 7000, 11.8, "Shimano Acera M3000", "Syncros Race 24", { popularity: 48 }),
    ],
    notes: "官网：https://www.scott-sports.com/global/en/bikes/trekking ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

/* ───────────── Cube ───────────── */

  mtbFamily("Cube", "Stereo Hybrid", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Stereo Hybrid",
    frame: "HPC 碳纤维/铝合金车架 · Bosch CX · 140mm",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 140,
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#141618", "黑"),
      C("亮光灰/橙", "Gloss Grey/Orange", "#8a8e92", "灰"),
    ],
    highlights: ["Bosch Performance CX 电机 + 750Wh 电池", "140mm 后避震，全功率 trail 电助力", "碳/铝双线覆盖中高价位"],
    story: "Stereo Hybrid 是 Cube 的电助力 trail 主力，把 Stereo 的连杆结构与 Bosch 动力结合。",
    builds: [
      B(2025, "Race 750", 33500, 24.4, "Shimano Deore M6100", "Cube Newmen Evolution", { popularity: 52 }),
      B(2025, "SLX 750", 39000, 23.8, "Shimano SLX M7100", "Cube Newmen Advanced", { popularity: 46 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Cube", "Reaction Hybrid", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Reaction Hybrid",
    frame: "铝合金车架 · Bosch Performance · 29 寸",
    fork: "100–120mm XC 前叉（按档位）",
    frontTravel: 120,
    material: "铝合金",
    colors: [
      C("哑光黑/绿", "Matte Black/Green", "#171a18", "黑"),
      C("亮光蓝/银", "Gloss Blue/Silver", "#24599b", "蓝"),
    ],
    highlights: ["29 寸 XC 电助力硬尾", "Bosch 中置电机与内藏电池", "通勤与林道混合路线皆宜"],
    story: "Reaction Hybrid 是 Cube 的 XC 电助力硬尾，把 Reaction 的竞赛几何电动化。",
    builds: [
      B(2025, "Pro 750", 25000, 22.4, "Shimano Deore M6100", "Cube AM Ride 25", { popularity: 54 }),
      B(2025, "SLX 750", 28800, 21.8, "Shimano SLX M7100", "Cube Newmen Evolution", { popularity: 48 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Cube", "AMS", {
    disc: "xc",
    years: [2024, 2026],
    gen: "AMS",
    frame: "C:68X 碳纤维车架 · 100mm XC 平台",
    fork: "100mm XC 前叉（按档位）",
    frontTravel: 100,
    rearTravel: 100,
    colors: [
      C("哑光碳黑/蓝", "Matte Carbon/Blue", "#121416", "黑"),
      C("亮光白/青", "Gloss White/Teal", "#eef0f1", "白"),
    ],
    highlights: ["Cube 的 XC 竞赛全避震平台", "C:68X 碳纤维车架与轻量连杆", "100/100mm 行程，绕标效率优先"],
    story: "AMS 是 Cube 的 XC 竞赛全避震车，连杆与几何围绕绕标赛道调校。",
    builds: [
      B(2025, "Race", 39000, 11.6, "Shimano XT M8100", "Cube Newmen Advanced", { popularity: 44 }),
      B(2025, "TM", 50700, 11.2, "Shimano XTR M9100", "Cube Newmen Advanced", { popularity: 38 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Cube", "Elite", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Elite C:62",
    frame: "C:62 碳纤维车架 · XC 硬尾几何",
    fork: "100mm XC 前叉（按档位）",
    frontTravel: 100,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#141517", "黑"),
      C("亮光蓝/白", "Gloss Blue/White", "#1f4f96", "蓝"),
    ],
    highlights: ["Cube 的碳纤维 XC 硬尾主力", "C:62 碳架，重量控制出色", "内走线与升降座管预留"],
    story: "Elite 是 Cube 的碳纤维 XC 硬尾，用 C:62 车架承接竞赛与训练需求。",
    builds: [
      B(2025, "Race", 19500, 10.9, "Shimano SLX M7100", "Cube Newmen Evolution", { popularity: 50 }),
      B(2025, "Pro", 23400, 10.6, "Shimano XT M8100", "Cube Newmen Advanced", { popularity: 44 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Cube", "Two15", {
    disc: "downhill",
    years: [2024, 2026],
    gen: "Two15 HPC",
    frame: "HPC 碳纤维车架 · 200mm DH 平台",
    fork: "200mm 双肩前叉（按档位）",
    frontTravel: 200,
    rearTravel: 200,
    colors: [
      C("亮光黑/黄", "Gloss Black/Yellow", "#131416", "黑"),
      C("哑光灰/红", "Matte Grey/Red", "#71757a", "灰"),
    ],
    highlights: ["Cube 的 DH 竞赛平台，200mm 行程", "碳纤维主车架，兼顾刚性与轻量", "长前伸与低五通设定"],
    story: "Two15 是 Cube 的下坡车，车架与连杆面向世界杯级别赛道。",
    builds: [
      B(2025, "SLX", 35100, 16.8, "Shimano SLX M7100", "Cube Newmen Advanced", { popularity: 36 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Cube", "Cross Race", {
    disc: "gravel",
    years: [2024, 2026],
    gen: "Cross Race C:62",
    frame: "C:62 碳纤维车架 · cyclocross 几何",
    fork: "Cross Race 全碳纤维前叉",
    colors: [
      C("亮光黑/青", "Gloss Black/Teal", "#111315", "黑"),
      C("亮光白/红", "Gloss White/Red", "#f0f1f2", "白"),
    ],
    highlights: ["cyclocross 竞赛几何，转向敏捷", "碳纤维车架与 12mm 桶轴", "大胎容，可兼顾碎石"],
    story: "Cross Race 是 Cube 的 cyclocross 竞赛车，几何围绕高频转向与泥地上下车设计。",
    builds: [
      B(2025, "Pro", 25000, 8.8, "Shimano GRX RX820", "Cube Newmen Evolution", { popularity: 42 }),
      B(2025, "SL", 28800, 8.5, "Shimano GRX RX822", "Cube Newmen Advanced", { popularity: 36 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/road ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Cube", "Kathmandu", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Kathmandu Hybrid",
    frame: "铝合金车架 · Bosch 中置电机 · 旅行几何",
    fork: "SR Suntour 避震前叉（按档位）",
    material: "铝合金",
    colors: [
      C("哑光灰/黑", "Matte Grey/Black", "#5b5f63", "灰"),
      C("亮光蓝/银", "Gloss Blue/Silver", "#255a9c", "蓝"),
    ],
    highlights: ["电助力旅行车，配货架与挡泥板", "Bosch 电机与内藏电池", "直立坐姿，长途舒适"],
    story: "Kathmandu 是 Cube 的电助力旅行系列，面向通勤与长途载物。",
    builds: [
      B(2025, "Hybrid Pro 750", 25700, 25.4, "Shimano Deore M6100", "Cube Alexrims", { popularity: 48 }),
      B(2025, "Hybrid EXC 750", 31200, 25.0, "Shimano XT M8100", "Cube Alexrims", { popularity: 42 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/trekking ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Cube", "Supreme Hybrid", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Supreme Hybrid",
    frame: "铝合金车架 · Bosch 电机 · 城市几何",
    fork: "Supreme 铝合金前叉",
    material: "铝合金",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#181a1c", "黑"),
      C("亮光沙色", "Gloss Sand", "#c0af95", "棕"),
    ],
    highlights: ["城市电助力，低跨高车架", "Bosch 电机与内藏电池", "标配挡泥板、货架与灯组"],
    story: "Supreme Hybrid 是 Cube 的城市电助力系列，主打低维护与日常实用性。",
    builds: [
      B(2025, "Pro 625", 27300, 26.2, "Shimano Deore M6100", "Cube Alexrims", { popularity: 46 }),
      B(2025, "Sport 625", 22600, 26.8, "Shimano CUES U6000", "Cube Alexrims", { popularity: 50 }),
    ],
    notes: "官网：https://www.cube.eu/bikes/trekking ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

/* ───────────── Orbea ───────────── */

  mtbFamily("Orbea", "Wild", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Wild",
    frame: "OMR 碳纤维/铝合金车架 · Bosch CX · 160mm",
    fork: "160mm enduro 前叉（按档位）",
    frontTravel: 160,
    rearTravel: 150,
    colors: [
      C("哑光黑/橙", "Matte Black/Orange", "#151719", "黑"),
      C("亮光蓝/青", "Gloss Blue/Teal", "#1f5fa0", "蓝"),
    ],
    highlights: ["Bosch Performance CX 电机 + 750Wh", "160/150mm 行程，全功率 enduro", "碳/铝双线覆盖中高价位"],
    story: "Wild 是 Orbea 的全功率 enduro 电助力车，面向长距离大落差与技术爬坡。",
    builds: [
      B(2025, "H20", 54600, 24.6, "Shimano Deore M6100", "Orbea Oquo MP30", { popularity: 46 }),
      B(2025, "M10", 62400, 23.8, "Shimano XT M8100", "Orbea Oquo MP30", { popularity: 40 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Orbea", "Rise", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Rise",
    frame: "OMR 碳纤维车架 · Shimano EP8 RS 轻量电机",
    fork: "140–150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 140,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#131517", "黑"),
      C("亮光绿/黑", "Gloss Green/Black", "#2f6a4e", "绿"),
    ],
    highlights: ["Shimano EP8 RS 轻量电机，骑感接近常规 trail", "碳纤维车架与内藏 360Wh 电池", "140mm 后行程，操控灵活"],
    story: "Rise 是 Orbea 的轻量电助力 trail 车，用轻电机与碳架换取接近普通山地车的操控。",
    builds: [
      B(2025, "H30", 42900, 19.4, "Shimano Deore M6100", "Orbea Oquo MP30", { popularity: 48 }),
      B(2025, "H20", 49100, 18.9, "Shimano SLX M7100", "Orbea Oquo MP30", { popularity: 42 }),
      B(2025, "M10", 58500, 18.4, "Shimano XT M8100", "Orbea Oquo MP30", { popularity: 36 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  mtbFamily("Orbea", "Laufey", {
    disc: "hardtail",
    years: [2024, 2026],
    gen: "Laufey",
    frame: "铝合金车架 · 长行程硬尾几何",
    fork: "140–150mm 前叉（按档位）",
    frontTravel: 140,
    material: "铝合金",
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#17191b", "黑"),
      C("亮光橙/灰", "Gloss Orange/Grey", "#d2621f", "橙"),
    ],
    highlights: ["Orbea 的长行程 trail 硬尾", "铝合金车架抗造，维护成本低", "140mm 前叉与大胎容，下坡有信心"],
    story: "Laufey 用长行程硬尾的简单结构换取 trail 乐趣，是 Orbea 的入门越野选择。",
    builds: [
      B(2025, "H30", 13250, 14.2, "Shimano Deore M6100", "Orbea Oquo MP30", { popularity: 54 }),
      B(2025, "H10", 17950, 13.6, "Shimano SLX M7100", "Orbea Oquo MP30", { popularity: 48 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/mountain ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Orbea", "Onna", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Onna",
    material: "铝合金",
    frame: "铝合金车架 · 城市舒适几何",
    fork: "Onna 碳纤维/铝合金前叉（按档位）",
    colors: [
      C("亮光沙色", "Gloss Sand", "#c1b095", "棕"),
      C("哑光深蓝", "Matte Deep Blue", "#1e3452", "蓝"),
    ],
    highlights: ["城市通勤定位，低跨高车架", "液压碟刹与内走线", "标配挡泥板与货架孔位"],
    story: "Onna 是 Orbea 的城市通勤系列，强调日常实用与舒适坐姿。",
    builds: [
      B(2025, "20", 7800, 12.8, "Shimano Altus M2000", "Orbea Oquo Road Control", { popularity: 52 }),
      B(2025, "30", 9350, 12.2, "Shimano Acera M3000", "Orbea Oquo Road Control", { popularity: 46 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/urban ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Orbea", "Gain", {
    disc: "endurance",
    years: [2024, 2026],
    gen: "Gain",
    frame: "碳纤维/铝合金车架 · Ebikemotion 后花鼓电机",
    fork: "Gain 碳纤维前叉",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#191b1d", "黑"),
      C("亮光白/蓝", "Gloss White/Blue", "#eff1f2", "白"),
    ],
    highlights: ["轻量电助力耐力公路车", "后花鼓电机，骑行阻力低", "内藏电池与整合式灯组"],
    story: "Gain 是 Orbea 的轻量电助力公路车，用后花鼓电机保持接近常规公路车的骑感。",
    builds: [
      B(2025, "D30", 27300, 13.6, "Shimano Deore M6100", "Orbea Oquo Road Control", { popularity: 44 }),
      B(2025, "M30", 35100, 12.9, "Shimano 105 R7100", "Orbea Oquo Road Control", { material: "碳纤维", popularity: 40 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/road ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Orbea", "Diem", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Diem",
    material: "铝合金",
    frame: "铝合金车架 · 城市/通勤几何",
    fork: "Diem 碳纤维前叉",
    colors: [
      C("亮光灰/黑", "Gloss Grey/Black", "#7c8084", "灰"),
      C("哑光军绿", "Matte Olive", "#4d5646", "绿"),
    ],
    highlights: ["城市通勤与健身两用", "碳纤维前叉与液压碟刹", "宽胎与挡泥板孔位"],
    story: "Diem 是 Orbea 的都市通勤车，配置以实用与低维护为主。",
    builds: [
      B(2025, "20", 13250, 11.6, "Shimano Altus M2000", "Orbea Oquo Road Control", { popularity: 48 }),
      B(2025, "30", 15600, 11.2, "Shimano Deore M6100", "Orbea Oquo Road Control", { popularity: 42 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/urban ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

  roadFamily("Orbea", "Kemen", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Kemen",
    material: "铝合金",
    frame: "铝合金车架 · 旅行/通勤几何",
    fork: "SR Suntour 避震前叉（按档位）",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#1a1c1e", "黑"),
      C("亮光蓝", "Gloss Blue", "#22589a", "蓝"),
    ],
    highlights: ["旅行车定位，配避震前叉", "货架/挡泥板/脚撑孔位齐全", "宽胎与直立坐姿，长途舒适"],
    story: "Kemen 是 Orbea 的旅行与日常通勤系列，面向载物与长距离骑行。",
    builds: [
      B(2025, "30", 19500, 13.6, "Shimano Deore M6100", "Orbea Oquo Road Control", { popularity: 44 }),
      B(2025, "20", 15600, 14.0, "Shimano Altus M2000", "Orbea Oquo Road Control", { popularity: 48 }),
    ],
    notes: "官网：https://www.orbea.com/en/bikes/urban ；按官网欧元建议价折算（1 EUR≈7.8 CNY），参考价。",
  }),

/* ───────────── Trek（补电助力/城市线，按美元价折算） ───────────── */

  mtbFamily("Trek", "Rail", {
    disc: "enduro",
    years: [2024, 2026],
    gen: "Rail",
    frame: "OCLV 碳纤维/Alpha Platinum 铝合金车架 · Bosch Performance CX",
    fork: "160mm enduro 前叉（按档位）",
    frontTravel: 160,
    rearTravel: 150,
    colors: [
      C("哑光黑/青", "Matte Black/Teal", "#141618", "黑"),
      C("亮光灰/橙", "Gloss Grey/Orange", "#898d91", "灰"),
    ],
    highlights: ["Bosch Performance CX 电机 + 750Wh 电池", "160/150mm 行程，全功率 enduro", "碳/铝双线覆盖中高价位"],
    story: "Rail 是 Trek 的全功率 enduro 电助力车，面向长距离大落差与技术爬坡。",
    builds: [
      B(2025, "7", 46800, 24.6, "Shimano Deore M6100", "Bontrager Line Pro 30", { popularity: 46 }),
      B(2025, "9.8 XT", 57600, 23.9, "Shimano XT M8100", "Bontrager Line Pro 30", { popularity: 40 }),
    ],
    notes: "官网：https://www.trekbikes.com/cn/zh_CN/c/B300/ ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  mtbFamily("Trek", "Fuel EXe", {
    disc: "trail",
    years: [2024, 2026],
    gen: "Fuel EXe",
    frame: "OCLV 碳纤维车架 · TQ-HPR50 轻量电机",
    fork: "150mm trail 前叉（按档位）",
    frontTravel: 150,
    rearTravel: 140,
    colors: [
      C("哑光碳黑", "Matte Carbon", "#131517", "黑"),
      C("亮光绿/黑", "Gloss Green/Black", "#2f6a4e", "绿"),
    ],
    highlights: ["TQ-HPR50 轻量电机，骑感接近常规 trail", "碳纤维车架与内藏 360Wh 电池", "140mm 后行程，操控灵活"],
    story: "Fuel EXe 用轻量电机与碳架换取接近普通山地车的操控，是 Trek 的轻电助力 trail 车。",
    builds: [
      B(2025, "9.5", 46800, 18.9, "Shimano SLX M7100", "Bontrager Line Pro 30", { popularity: 44 }),
      B(2025, "9.7 AXS", 57600, 18.4, "SRAM GX Eagle AXS", "Bontrager Line Pro 30", { popularity: 38 }),
    ],
    notes: "官网：https://www.trekbikes.com/cn/zh_CN/c/B300/ ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  mtbFamily("Trek", "Powerfly", {
    disc: "xc",
    years: [2024, 2026],
    gen: "Powerfly",
    frame: "Alpha Platinum 铝合金车架 · Bosch Performance CX",
    fork: "120mm XC 前叉（按档位）",
    frontTravel: 120,
    material: "铝合金",
    colors: [
      C("哑光黑/蓝", "Matte Black/Blue", "#171a1d", "黑"),
      C("亮光银/绿", "Gloss Silver/Green", "#b6babd", "银"),
    ],
    highlights: ["29 寸 XC 电助力硬尾", "Bosch 电机与内藏电池", "通勤与林道混合路线皆宜"],
    story: "Powerfly 是 Trek 的 XC 电助力硬尾，把通勤与越野需求放在同一车架平台上。",
    builds: [
      B(2025, "4", 32400, 22.8, "Shimano Deore M6100", "Bontrager Kovee", { popularity: 50 }),
      B(2025, "5", 39600, 22.2, "Shimano SLX M7100", "Bontrager Kovee Pro 30", { popularity: 44 }),
    ],
    notes: "官网：https://www.trekbikes.com/cn/zh_CN/c/B300/ ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),

  roadFamily("Trek", "Dual Sport", {
    disc: "allroad",
    years: [2024, 2026],
    gen: "Dual Sport",
    material: "铝合金",
    frame: "Alpha Gold 铝合金车架 · 混合路面几何",
    fork: "SR Suntour 避震前叉（按档位）",
    colors: [
      C("哑光黑/银", "Matte Black/Silver", "#1a1c1e", "黑"),
      C("亮光蓝/灰", "Gloss Blue/Grey", "#22589a", "蓝"),
    ],
    highlights: ["公路与碎石两用的混合车", "配避震前叉与宽胎", "货架/挡泥板孔位齐全"],
    story: "Dual Sport 是 Trek 的混合路面系列，用避震前叉与宽胎兼顾铺装与碎石路。",
    builds: [
      B(2025, "2", 5760, 13.6, "Shimano Altus M2000", "Bontrager Paradigm Comp", { popularity: 58 }),
      B(2025, "3", 7200, 13.0, "Shimano Deore M6100", "Bontrager Paradigm Comp", { popularity: 52 }),
    ],
    notes: "官网：https://www.trekbikes.com/cn/zh_CN/ ；按官网美元建议价折算（1 USD≈7.2 CNY），参考价。",
  }),


];
