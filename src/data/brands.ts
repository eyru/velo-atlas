import type { Brand } from "./types";

const brandList: Brand[] = [
  { slug: "specialized", name: "Specialized", cn: "闪电", country: "美国", founded: 1974, accent: "#e01f2d", tagline: "Innovate or Die", story: "从车库里的三条轮胎到全球最大的自行车品牌之一，Specialized 把风洞、人体工学与赛事反馈写进每一代车架。", specialties: ["公路", "山地", "Gravel"], tech: ["FACT 碳纤维", "Body Geometry", "Rider-First Engineered"] },
  { slug: "trek", name: "Trek", cn: "崔克", country: "美国", founded: 1976, accent: "#00a3e0", tagline: "We Build Bikes", story: "诞生于威斯康星谷仓的 Trek，用 OCLV 碳纤维与 Project One 定制体系，构建了覆盖公路到速降的完整产品宇宙。", specialties: ["公路", "山地", "城市"], tech: ["OCLV 碳纤维", "IsoSpeed", "Project One"] },
  { slug: "giant", name: "Giant", cn: "捷安特", country: "中国台湾", founded: 1972, accent: "#0055a5", tagline: "Ride Life. Ride Giant.", story: "全球最大的自行车制造商，从代工到自有品牌，以 Advanced 碳纤维与 Maestro 悬挂系统影响整个行业。", specialties: ["公路", "山地", "通勤"], tech: ["Advanced SL", "Maestro", "ALUXX"] },
  { slug: "canyon", name: "Canyon", cn: "峡谷", country: "德国", founded: 1985, accent: "#00b6e3", tagline: "Pure Cycling", story: "直销模式的开创者，把德国工程理性与赛道成绩结合，用 CFR 顶级碳纤维和极简设计语言定义现代公路车。", specialties: ["公路", "山地", "铁三"], tech: ["CFR", "Aero Cockpit", "VCLS"] },
  { slug: "pinarello", name: "Pinarello", cn: "皮纳瑞罗", country: "意大利", founded: 1953, accent: "#1d3f8f", tagline: "Made in Italy", story: "环法冠军的常客，Dogma 系列以非对称车架和 Onda 前叉成为意大利竞赛美学的代名词。", specialties: ["公路", "Gravel"], tech: ["TiCR 内走线", "Onda 前叉", "Asymmetric Frame"] },
  { slug: "colnago", name: "Colnago", cn: "梅花", country: "意大利", founded: 1954, accent: "#c8102e", tagline: "The Art of Bicycles", story: "梅花标志承载着古典赛的荣耀，从钢架到碳纤维，Colnago 始终把手工温度与竞赛血统放在一起。", specialties: ["公路", "Gravel"], tech: ["C68 模块化", "T47 中轴", "梅花管型"] },
  { slug: "cervelo", name: "Cervélo", cn: "塞尔维洛", country: "加拿大", founded: 1995, accent: "#d4d8dc", tagline: "Engineering Speed", story: "由两位工程师创立，Cervélo 把风洞数据变成可量产的空气动力学车架，S5 是公路气动车的标杆之一。", specialties: ["公路", "铁三", "Gravel"], tech: ["TrueAero", "Reserve 轮组", "Dropped Downtube"] },
  { slug: "scott", name: "Scott", cn: "斯科特", country: "瑞士", founded: 1958, accent: "#f4c300", tagline: "No Shortcuts", story: "瑞士精工与轻量化狂热的结合体，Addict RC 与 Spark 分别在公路和山地赛场追逐克重极限。", specialties: ["公路", "山地"], tech: ["HMX-SL", "TwinLoc", "Foil 气动"] },
  { slug: "merida", name: "Merida", cn: "美利达", country: "中国台湾", founded: 1972, accent: "#009b48", tagline: "Made for Cycling", story: "以制造实力起家，美利达用 Reacto 与 Ninety-Six 证明中国台湾品牌同样能站上世界顶级赛场。", specialties: ["公路", "山地"], tech: ["CF5 碳纤维", "P-FLEX", "NACA 管型"] },
  { slug: "bmc", name: "BMC", cn: "BMC", country: "瑞士", founded: 1994, accent: "#e30613", tagline: "Swiss Precision", story: "瑞士自行车制造商 BMC 以 Teammachine 的精确操控和 Fourstroke 的整合悬挂著称，工程感是其最鲜明的标签。", specialties: ["公路", "山地"], tech: ["ACE+ 碳纤维", "TCC", "APS 悬挂"] },
  { slug: "orbea", name: "Orbea", cn: "奥贝亚", country: "西班牙", founded: 1840, accent: "#f26522", tagline: "Ride Different", story: "从军械工坊到巴斯克山地的自行车品牌，Orbea 以 Oiz 和 Orca 的轻量化与定制涂装闻名。", specialties: ["公路", "山地"], tech: ["OMR 碳纤维", "MyO 定制", "SIC 走线"] },
  { slug: "bianchi", name: "Bianchi", cn: "比安奇", country: "意大利", founded: 1885, accent: "#00a86b", tagline: "Celeste Since 1885", story: "世界上现存最古老的自行车品牌之一，那一抹 Celeste 绿早已超越颜色，成为意大利骑行文化的图腾。", specialties: ["公路", "Gravel"], tech: ["Countervail", "Celeste 涂装", "Aero 管型"] },
  { slug: "wilier", name: "Wilier", cn: "威廉", country: "意大利", founded: 1906, accent: "#e6007e", tagline: "Italian Soul", story: "来自意大利北部的 Wilier 以 Filante SLR 的整合式气动设计和轻量爬坡车，延续百年竞赛基因。", specialties: ["公路", "Gravel"], tech: ["SLR 碳纤维", "Integrated Cockpit", "Asymmetric"] },
  { slug: "factor", name: "Factor", cn: "法克特", country: "英国", founded: 2007, accent: "#b8ff2c", tagline: "Science in Speed", story: "从赛车工程跨界而来，Factor 以 Ostro VAM 和 O2 VAM 的极致轻量与气动平衡，成为新世代高端公路车代表。", specialties: ["公路"], tech: ["VAM 碳纤维", "Black Inc 轮组", "Aero 整合"] },
  { slug: "lapierre", name: "Lapierre", cn: "拉皮尔", country: "法国", founded: 1946, accent: "#0067b1", tagline: "French Passion", story: "法国老牌自行车制造商，以 Xelius 的轻量爬坡和 Zesty 山地的灵活操控，书写法式骑行美学。", specialties: ["公路", "山地"], tech: ["Ultimate 碳纤维", "3D 管型", "OST+"] },
  { slug: "ridley", name: "Ridley", cn: "里德利", country: "比利时", founded: 1997, accent: "#e4002b", tagline: "Born in Belgium", story: "比利时品牌 Ridley 在石头路和越野赛场长大，Noah 的气动与 Helium 的轻量形成鲜明双极。", specialties: ["公路", "Gravel"], tech: ["F-Surface", "Aero 管型", "D-shaped 座管"] },
  { slug: "cube", name: "Cube", cn: "库贝", country: "德国", founded: 1993, accent: "#009ee0", tagline: "Ride More", story: "德国直销品牌 Cube 用高性价比和完整产品线征服欧洲，从 Litening 竞赛公路到 Stereo 山地一应俱全。", specialties: ["公路", "山地", "通勤"], tech: ["C:68X 碳纤维", "Newmen 轮组", "Agree 气动"] },
  { slug: "cannondale", name: "Cannondale", cn: "佳能戴尔", country: "美国", founded: 1971, accent: "#00a651", tagline: "Innovation Every Ride", story: "以铝架革命起家，Cannondale 的 SuperSix EVO 和 Scalpel 一直是轻量、刚性、操控三位一体的代表。", specialties: ["公路", "山地"], tech: ["BallisTec", "HollowGram", "SystemBar"] },
  { slug: "look", name: "Look", cn: "洛克", country: "法国", founded: 1951, accent: "#003da5", tagline: "French Cycling Art", story: "锁踏的发明者，也是碳纤维一体车架的先行者，Look 795 以法式雕塑感与赛道性能著称。", specialties: ["公路"], tech: ["碳纤维一体车架", "ZED 曲柄", "3D 管型"] },
  { slug: "felt", name: "Felt", cn: "费尔特", country: "美国", founded: 1991, accent: "#f2f2f2", tagline: "Find Your Fast", story: "从铁三赛场起家的 Felt，用 AR 气动公路与 FR 轻量爬坡车，延续对速度的单一执念。", specialties: ["公路", "铁三"], tech: ["UHC 碳纤维", "Aero 管型", "Inside 走线"] },
  { slug: "santacruz", name: "Santa Cruz", cn: "圣克鲁兹", country: "美国", founded: 1993, accent: "#f5c518", tagline: "Ride What You Love", story: "加州森林里长大的山地品牌，VPP 悬挂与 CC 碳纤维让 Blur、Hightower 成为无数车手的梦想之车。", specialties: ["山地"], tech: ["VPP 悬挂", "CC 碳纤维", "Reserve 轮组"] },
  { slug: "yeti", name: "Yeti", cn: "雪人", country: "美国", founded: 1985, accent: "#00a9e0", tagline: "Built for the Ride", story: "科罗拉多手工山地车品牌，Switch Infinity 悬挂和标志性的 turquoise 涂装，是 Yeti 最容易被认出的两张名片。", specialties: ["山地"], tech: ["Switch Infinity", "TURQ 碳纤维", "Lifetime 车架"] },
  { slug: "pivot", name: "Pivot", cn: "匹沃特", country: "美国", founded: 2007, accent: "#ef3e42", tagline: "Obsessed with Detail", story: "由前山地车手创立，Pivot 以 DW-Link 悬挂和极致的细节完成度，在小众高端山地市场建立口碑。", specialties: ["山地"], tech: ["DW-Link", "Hollow Core 碳纤维", "Super Boost"] },
  { slug: "commencal", name: "Commencal", cn: "科曼", country: "安道尔", founded: 2000, accent: "#ffcc00", tagline: "Ride Hard", story: "安道尔山地的重力品牌，Meta、Clash、Supreme 以结实、直接、为下坡而生著称。", specialties: ["山地"], tech: ["Contact 系统", "重载车架", "DH 几何"] },
  { slug: "yt", name: "YT", cn: "YT", country: "德国", founded: 2008, accent: "#c6ff00", tagline: "Live Uncaged", story: "德国直销山地品牌，用激进几何和线上模式打破价格壁垒，Izzo、Jeffsy、Capra 覆盖从越野到速降。", specialties: ["山地"], tech: ["V4L 悬挂", "直销模式", "激进几何"] },
  { slug: "rockymountain", name: "Rocky Mountain", cn: "落基山", country: "加拿大", founded: 1981, accent: "#e31837", tagline: "Made in Canada", story: "从温哥华北岸的雨林与岩石中走来，Rocky Mountain 用 Smoothwall 碳纤维和 Ride-9 可调几何征服陡坡。", specialties: ["山地"], tech: ["Smoothwall", "Ride-9 几何", "LC2 悬挂"] },
  { slug: "kona", name: "Kona", cn: "科纳", country: "美国", founded: 1988, accent: "#f47b20", tagline: "Ride Free", story: "从夏威夷科纳岛得名，Kona 的 Hei Hei 与 Process 系列带着太平洋西北的泥土气息和自由精神。", specialties: ["山地"], tech: ["Beamer 悬挂", "Kona 几何", "手工涂装"] },
  { slug: "marin", name: "Marin", cn: "马林", country: "美国", founded: 1986, accent: "#00a79d", tagline: "Born in Marin", story: "山地车发源地加州 Marin 县的本土品牌，Rift Zone 与 San Quentin 把玩味和性价比放在同等重要的位置。", specialties: ["山地"], tech: ["MultiTrac 悬挂", "Series 3 铝架", "Geo 可调"] },
  { slug: "xds", name: "XDS", cn: "喜德盛", country: "中国大陆", founded: 1995, accent: "#e4002b", tagline: "Ride Beyond", story: "从深圳宝安起步的喜德盛，用 X6 铝合金、SLR 气动车架与自有 Branta 部件体系，把专业自行车做成了普通人也能负担的日常装备；X-LAB 则是它面向竞赛与高端碳纤维市场的前沿实验室。", specialties: ["公路", "山地", "通勤"], tech: ["X6 SLR 铝合金", "Branta 部件", "L-TWOO 电变"], website: "https://www.xidesheng.com" },
  { slug: "xlab", name: "X-LAB", cn: "喜德盛实验室", country: "中国大陆", founded: 2022, accent: "#c8ff3d", tagline: "Race Lab", story: "X-LAB 是喜德盛的高端竞赛子品牌，把风洞、碳纤维铺层与职业车队反馈压缩进少数几个型号；AD 系列用激进的竞赛几何和一体化座舱，直接对标国际一线气动公路车。", specialties: ["公路"], tech: ["T1100 碳纤维", "一体成型", "全内走线"], website: "https://www.xidesheng.com" },
  { slug: "pardus", name: "PARDUS", cn: "瑞豹", country: "中国大陆", founded: 2013, accent: "#00b3a4", tagline: "Born to Race", story: "瑞豹从山东泰安的碳纤维工厂出发，先为职业队做代工，再用 ROBIN 公路与 TIFONE 山地建立自有产品线；里约奥运会中国国家队战车 NAIK 是它最被记住的一次亮相。", specialties: ["公路", "山地", "Gravel"], tech: ["T1100 碳布", "WING 一体把", "全隐藏走线"], website: "https://www.parduscycle.com" },
  { slug: "sava", name: "SAVA", cn: "萨瓦", country: "中国大陆", founded: 2010, accent: "#ff6b00", tagline: "Carbon for All", story: "萨瓦用直销与碳纤维规模生产，把全碳公路车的门槛拉到主流价位；Blade、AeroX 与 Gelaro 覆盖气动、综合与砾石，配置表直接、型号迭代快，是国产品牌里很少见的全球化打法。", specialties: ["公路", "Gravel", "山地"], tech: ["T800/T1000 碳布", "CFR 车架", "全内走线"], website: "https://savadeck-bike.com" },
  { slug: "winspace", name: "WINSPACE", cn: "银贝斯", country: "中国大陆", founded: 2008, accent: "#4d7cff", tagline: "Speed, Engineered", story: "银贝斯从碳纤维轮组起家，随后把一体成型车架、T47 中轴与 ACR 全内走线做成自己的工程语言；T1550 与 SLC5 在海外评测中频繁出现，是国产高端公路车最常被拿来与国际品牌对位的名字之一。", specialties: ["公路", "Gravel"], tech: ["T1000+T800 碳布", "ACR 全内走线", "T47 中轴"], website: "https://www.winspace.cc" },
  { slug: "decathlon", name: "Decathlon", cn: "迪卡侬", country: "法国", founded: 1976, accent: "#16529b", tagline: "Sport for All", story: "从法国里尔的一家体育用品超市起步，迪卡侬用自有品牌把自行车价格压到大众区间；Triban 公路与 Rockrider 山地是很多人真正的第一台车，门店试骑与售后网络是它最实际的优势。", specialties: ["公路", "山地", "通勤"], tech: ["Triban 铝合金车架", "Rockrider 硬尾平台", "门店调试"] },
  { slug: "java", name: "JAVA", cn: "佳沃", country: "中国大陆", founded: 2010, accent: "#b5121b", tagline: "Ride Your Style", story: "JAVA（佳沃）以全内走线、气动管型和鲜明涂装切入年轻公路车市场，Veloce、Siluro 等型号把碳架与铝架价格压到入门区间，是国产直销品牌里视觉辨识度很高的一家。", specialties: ["公路", "Gravel"], tech: ["全内走线", "T800 碳纤维", "液压碟刹"] },
  { slug: "twitter", name: "TWITTER", cn: "推特", country: "中国大陆", founded: 2010, accent: "#1655c9", tagline: "Carbon Direct", story: "TWITTER 以线上直销和碳纤维车架为核心，Raptor 公路与 Sniper 山地用配置表和价格吸引首购用户；型号迭代快，购买前需要确认当季配置与售后网点。", specialties: ["公路", "山地"], tech: ["T800 碳纤维", "直销模式", "全内走线"] },
];

/**
 * 品牌官网：车系数据没有单独产品页链接时，作为来源回退。
 * 只放品牌官方域名，不放经销商或媒体页面。
 */
const websiteBySlug: Record<string, string> = {
  specialized: "https://www.specialized.com/cn/zh",
  trek: "https://www.trekbikes.com/cn/zh_CN/",
  giant: "https://www.giant-bicycles.com/cn",
  canyon: "https://www.canyon.com/zh-cn/",
  pinarello: "https://www.pinarello.com",
  colnago: "https://www.colnago.com",
  cervelo: "https://www.cervelo.com",
  scott: "https://www.scott-sports.com/cn/zh/",
  merida: "https://www.merida-bikes.com/zh-cn",
  bmc: "https://www.bmc-switzerland.com",
  orbea: "https://www.orbea.com",
  bianchi: "https://www.bianchi.com",
  wilier: "https://www.wilier.com",
  factor: "https://www.factor-bikes.com",
  lapierre: "https://www.lapierrebikes.com",
  ridley: "https://www.ridley-bikes.com",
  cube: "https://www.cube.eu",
  cannondale: "https://www.cannondale.com",
  look: "https://www.lookcycle.com",
  felt: "https://www.feltbicycles.com",
  santacruz: "https://www.santacruzbicycles.com",
  yeti: "https://www.yeticycles.com",
  pivot: "https://www.pivotcycles.com",
  commencal: "https://www.commencal.com",
  yt: "https://www.yt-industries.com",
  rockymountain: "https://bikes.com",
  kona: "https://www.konaworld.com",
  marin: "https://www.marinbikes.com",
  decathlon: "https://www.decathlon.com.cn",
  java: "https://www.java-bike.com",
  twitter: "https://www.twitter-bike.com",
};

export const brands: Brand[] = brandList.map((brand) =>
  brand.website ? brand : { ...brand, website: websiteBySlug[brand.slug] },
);

export const brandBySlug = Object.fromEntries(brands.map((b) => [b.slug, b]));

/** 同时接受 slug 或品牌显示名，避免车系数据里的品牌名查不到元数据。 */
export function getBrand(key: string) {
  return brandBySlug[key] ?? brands.find((b) => b.name === key || b.cn === key);
}
