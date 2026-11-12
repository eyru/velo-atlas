import { ArrowRight, ArrowUpRight, BookOpen, Database, Ruler, ShieldCheck } from "lucide-react";
import { stats } from "../data/database";
import { Link } from "../router";
import { usePageTitle } from "../lib/useTitle";

const terms = [
  { term: "Stack", en: "STACK", desc: "五通中心到车架上管前端的垂直高度。Stack 越大，骑行姿态越直立，适合长距离与柔韧性一般的骑手。" },
  { term: "Reach", en: "REACH", desc: "五通中心到头管顶端的水平距离。Reach 决定上半身伸展程度，是与 Stack 一起判断尺码的核心数据。" },
  { term: "头管角", en: "HEAD ANGLE", desc: "头管与地面的夹角。角度越小，前轮拖曳距越大，高速与下坡越稳定；角度越大，转向越敏捷。" },
  { term: "座管角", en: "SEAT ANGLE", desc: "座管与地面的夹角。影响踩踏位置与重心分配，山地车近年普遍变陡以提升爬坡效率。" },
  { term: "后下叉", en: "CHAINSTAY", desc: "五通到后轮轴的距离。短后下叉加速更直接，长后下叉稳定性更好、轮胎间隙更大。" },
  { term: "BB Drop", en: "BB DROP", desc: "轮轴连线与五通的高度差。下沉越多，重心越低、过弯越稳，但通过性下降。" },
  { term: "行程", en: "TRAVEL", desc: "山地车前叉或后避震可压缩的行程，单位毫米。行程越长，越偏向技术下坡与冲击吸收。" },
  { term: "参考价", en: "REFERENCE PRICE", desc: "公开渠道整理的中国区含税零售参考价，会随汇率、地区与经销商活动变化，不构成报价。" },
];

export function About() {
  usePageTitle("关于与数据说明");
  return (
    <div className="about-page">
      <section className="simple-hero">
        <div className="container">
          <div className="breadcrumb mono"><Link to="/">首页</Link><span>/</span><span>关于</span></div>
          <div className="simple-hero-grid">
            <div>
              <p className="eyebrow">ABOUT VELO ATLAS</p>
              <h1>先把数据<em>说清楚。</em></h1>
              <p className="catalog-desc">
                VELO ATLAS 是一个独立整理的自行车参数档案，把分散在品牌官网、经销商页面与评测中的价格、几何与配置，
                按车系和年款重新组织成可比较的结构。它不替你做决定，只负责把决定所需的事实摆在同一张桌上。
              </p>
            </div>
            <div className="about-figure mono">
              <span>FAMILIES</span><strong>{stats.families}</strong>
              <span>BUILDS</span><strong>{stats.bikes}</strong>
              <span>BRANDS</span><strong>{stats.brands}</strong>
              <span>YEARS</span><strong>{stats.years}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div><p className="eyebrow">01 / 数据维度</p><h2>每个版本记录什么。</h2></div>
          <p className="section-note">同一套字段覆盖公路与山地，便于跨类型比较，同时保留各自特有的行程与轮径信息。</p>
        </div>
        <div className="about-grid">
          {[
            { icon: Database, title: "身份与版本", body: "品牌、车系、世代、年款、版本名、在售状态，以及车系的生产年份区间。" },
            { icon: Ruler, title: "几何与尺码", body: "每个尺码的 Stack、Reach、头管角、座管角、上管、头管、后下叉、轴距、BB Drop、跨高与适配身高。" },
            { icon: ShieldCheck, title: "配置与价格", body: "车架、前叉、后避震、套件、轮组、轮胎、座舱与整车重量，以及中国区与美元参考价。" },
            { icon: BookOpen, title: "设计与背景", body: "车系定位、关键技术、设计要点与价格走势，帮助理解参数背后的取舍。" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="about-card">
                <Icon size={20} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section container" id="terms">
        <div className="section-head">
          <div><p className="eyebrow">02 / 术语表</p><h2>看懂几何表。</h2></div>
          <p className="section-note">如果你只记两个数，记 Stack 与 Reach：它们共同决定这台车架在你身上是否合身。</p>
        </div>
        <div className="term-list">
          {terms.map((t, i) => (
            <div key={t.term} className="term-row">
              <span className="mono term-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="term-name"><strong>{t.term}</strong><span className="mono">{t.en}</span></div>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="sources">
        <div className="section-head">
          <div><p className="eyebrow">03 / 数据来源与边界</p><h2>哪些是事实，哪些是估算。</h2></div>
        </div>
        <div className="editorial">
          <p>
            车型名称、车架结构、套件型号、轮组与轮胎规格、几何数据，来自品牌官网的产品页、技术手册与官方新闻稿；
            价格来自品牌中国区建议零售价与主流经销商公开页面；整车重量优先采用品牌公布的整车重量，缺失时按同配置公开数据估算。
          </p>
          <p>
            不同市场、不同批次与不同尺码的重量和配置可能存在差异。部分车型的配色名称会因地区而异，本站在保留官方英文名的同时给出中文意译，
            便于检索，不代表官方译名。价格统一标注为「参考价」，不构成销售报价或购买建议。
          </p>
          <p>
            2026 年 11 月，我们按 36 个品牌的官网在售产品线做了一轮系统扩充：新增 187 个车系、371 个版本，
            站内合计 393 个车系、826 个版本。价格、套件、轮组、整车重量与尺码按官网档位逐项录入；官网只提供美元或欧元的车型，
            按 1 USD≈7.2 CNY、1 EUR≈7.8 CNY 折算并标注为参考价。完整来源、置信度与未核实项记录在
            <a className="text-link" href="research/fact-check.md" target="_blank" rel="noreferrer">数据核对报告</a>中。
          </p>
          <p>
            本轮补充的 XDS 喜德盛、X-LAB、PARDUS 瑞豹、SAVA 萨瓦、WINSPACE 银贝斯、JAVA、TWITTER 与迪卡侬，
            均回到品牌官方产品页或官网产品线录入；25 张配色图取自品牌官网或官方 CDN，并在图内标注来源。
            X-LAB AD9 与 SAVA Blade R7/R9 使用官方逐码几何，其余车型明确标注为参考模型。
          </p>
          <p>
            本站与任何品牌、经销商无隶属关系。若你是品牌方并发现数据需要更正，欢迎通过页脚的信息反馈；我们会在核对后更新。
          </p>
        </div>
        <div className="source-link-row">
          <span className="mono">官方资料页</span>
          {[
            { label: "XDS 喜德盛", href: "https://www.xidesheng.com" },
            { label: "X-LAB", href: "https://www.xidesheng.com" },
            { label: "PARDUS 瑞豹", href: "https://www.parduscycle.com" },
            { label: "SAVA 萨瓦", href: "https://savadeck-bike.com" },
            { label: "WINSPACE 银贝斯", href: "https://winspace.com.au" },
            { label: "JAVA", href: "https://www.java-bike.com" },
            { label: "TWITTER", href: "https://www.twitter-bike.com" },
            { label: "迪卡侬", href: "https://www.decathlon.com.cn" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label} <ArrowUpRight size={11} />
            </a>
          ))}
        </div>
        <div className="about-cta">
          <div>
            <h3>从一台车开始。</h3>
            <p>公路与山地各自成册，按品牌、年份、颜色与价格一路筛下去。</p>
          </div>
          <div className="hero-actions">
            <Link to="/catalog/road" className="btn btn-primary">公路车档案 <ArrowRight size={15} /></Link>
            <Link to="/catalog/mtb" className="btn btn-ghost">山地车档案 <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section container author-section" id="author">
        <div className="author-card">
          <div className="author-mark mono">MADE BY</div>
          <div className="author-main">
            <p className="eyebrow">04 / 出品</p>
            <h2 className="author-name">何瑞程</h2>
            <p className="author-role mono">策划 · 数据整理 · 设计监制 · 前端实现</p>
            <p className="author-note">
              独立完成车系梳理、官方资料核对、几何数据建模与界面实现。
              如果这台档案帮你少走一次弯路，那它就是值得的。
            </p>
          </div>
          <div className="author-stamp mono" aria-hidden="true">VELO<br />ATLAS</div>
        </div>
      </section>
    </div>
  );
}
