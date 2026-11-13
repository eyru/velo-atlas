import { useState } from "react";
import { ArrowRight, ArrowUpRight, Calendar, Check, ChevronRight, Database, GitCompare, Palette, Ruler, Tag, Weight } from "lucide-react";
import { bikes, bikeById } from "../data/database";
import { cny, disciplineLabel, usd, weight as fmtWeight } from "../lib/format";
import { toggleCompare, useCompareIds } from "../lib/compare";
import { Link } from "../router";
import { BikeSVG } from "../components/BikeSVG";
import { BikeVisualMedia } from "../components/BikeVisualMedia";
import { GeoProvenance } from "../components/GeoProvenance";
import { GeometryDiagram } from "../components/GeometryDiagram";
import { PriceChart } from "../components/PriceChart";
import { BikeCard } from "../components/BikeCard";
import { usePageTitle } from "../lib/useTitle";

export function BikeDetail({ id }: { id: string }) {
  const bike = bikeById[id];
  usePageTitle(bike ? bike.brandName + " " + bike.family + " " + bike.edition : "车型");

  if (!bike) {
    return (
      <div className="container not-found">
        <p className="eyebrow">404 / BUILD</p>
        <h1>这个版本档案不存在。</h1>
        <p>可能是链接里的版本 ID 已经变更，回到目录重新检索即可。</p>
        <Link to="/catalog/road" className="btn btn-primary">返回公路车目录 <ArrowRight size={15} /></Link>
      </div>
    );
  }

  const [colorIndex, setColorIndex] = useState(0);
  const [sizeLabel, setSizeLabel] = useState(() => {
    const m = bike.sizes.find((s) => s.label === "M");
    return m ? m.label : bike.sizes[Math.floor(bike.sizes.length / 2)]?.label ?? "";
  });
  const compareIds = useCompareIds();
  const activeColor = bike.colors[colorIndex % bike.colors.length];
  const activeSize = bike.sizes.find((s) => s.label === sizeLabel) ?? bike.sizes[0];
  const mSize = bike.sizes.find((s) => s.label === "M") ?? activeSize;
  const selected = compareIds.includes(bike.id);
  const siblingBuilds = bikes
    .filter((b) => b.familyId === bike.familyId && b.id !== bike.id)
    .sort((a, b) => b.year - a.year);
  const related = bikes
    .filter((b) => b.id !== bike.id && b.category === bike.category)
    .map((b) => ({
      bike: b,
      score:
        Math.abs(b.price - bike.price) / bike.price +
        (b.discipline === bike.discipline ? 0 : 0.35) +
        (b.brandSlug === bike.brandSlug ? 0.1 : 0),
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 4)
    .map((x) => x.bike);
  const priceDelta = bike.priceHistory.length > 1 ? bike.price - bike.priceHistory[0].price : 0;

  return (
    <div className="bike-page" style={{ ["--brand" as string]: bike.brandAccent }}>
      <section className="bike-hero">
        <div className="container">
          <div className="breadcrumb mono">
            <Link to="/">首页</Link><span>/</span>
            <Link to={"/catalog/" + bike.category}>{bike.category === "road" ? "公路车" : "山地车"}</Link><span>/</span>
            <Link to={"/brand/" + bike.brandSlug}>{bike.brandName}</Link><span>/</span>
            <Link to={"/family/" + bike.familyId}>{bike.family}</Link><span>/</span>
            <span>{bike.year}</span>
          </div>

          <div className="bike-hero-grid">
            <div className="bike-hero-copy">
              <div className="bike-eyebrow-row">
                <span className="mono">{bike.brandName.toUpperCase()} / {bike.category === "road" ? "ROAD" : "MOUNTAIN"}</span>
                <span className={"status-pill " + bike.status}>{bike.status === "current" ? "在售年款" : "往季档案"}</span>
              </div>
              <h1>{bike.family}<em>{bike.edition}</em></h1>
              <p className="bike-sub">
                {bike.year} 年款 · {disciplineLabel[bike.discipline]} · {bike.material}车架 · {bike.wheelSize}
              </p>
              <p className="bike-story">{bike.story}</p>

              <div className="bike-price-block">
                <div>
                  <span className="mono">中国区参考价</span>
                  <strong>{cny(bike.price)}</strong>
                  <small>约 {usd(bike.priceUsd)} · 非官方报价</small>
                </div>
                <div className="price-side">
                  <span className="mono"><Tag size={12} /> 数据完整度</span>
                  <div className="meter"><i style={{ width: bike.completeness + "%" }} /></div>
                  <small className="mono">{bike.completeness}% · {bike.specs.reduce((s, g) => s + g.items.length, 0)} 项规格</small>
                </div>
              </div>

              <div className="bike-actions">
                <button className={"btn " + (selected ? "btn-ghost" : "btn-primary")} onClick={() => toggleCompare(bike.id)}>
                  {selected ? <Check size={16} /> : <GitCompare size={16} />}
                  {selected ? "已加入对比台" : "加入对比台"}
                </button>
                <Link to={"/family/" + bike.familyId} className="btn btn-ghost">车系全部年款 <ArrowRight size={15} /></Link>
              </div>

              <div className="bike-quick-specs">
                <div><span className="mono">整车重量</span><strong>{fmtWeight(bike.weight)}</strong></div>
                <div><span className="mono">M 码 Stack / Reach</span><strong>{mSize ? mSize.stack + " / " + mSize.reach : "—"} mm</strong></div>
                <div><span className="mono">{bike.category === "mtb" ? "前 / 后行程" : "车架 / 前叉"}</span><strong>{bike.category === "mtb" ? (bike.frontTravel ?? "—") + " mm" + (bike.rearTravel ? " / " + bike.rearTravel + " mm" : " / 硬尾") : bike.material}</strong></div>
                <div><span className="mono">套件</span><strong>{bike.groupset.replace(/^(Shimano|SRAM|Campagnolo)\s/, "")}</strong></div>
              </div>
            </div>

            <div className="bike-hero-visual">
              <div className="bike-visual-top mono">
                <span>BUILD SHEET / {bike.year} · {activeColor.photo ? "OFFICIAL PHOTO" : "ENGINEERING VIEW"}</span>
                <span>{activeColor.name} / {activeColor.en}</span>
              </div>
              <BikeVisualMedia
                photo={activeColor.photo}
                photoSource={activeColor.photoSource}
                alt={`${bike.brandName} ${bike.family} ${activeColor.name} 官方产品图`}
                priority
              >
                <BikeSVG bike={bike} color={activeColor.hex} showGeometry />
              </BikeVisualMedia>
              <div className="bike-colorways">
                {bike.colors.map((c, i) => (
                  <button
                    key={c.name + i}
                    className={"colorway" + (i === colorIndex ? " is-on" : "")}
                    onClick={() => setColorIndex(i)}
                  >
                    <i
                      style={
                        c.photo
                          ? { backgroundImage: `url(${c.photo})`, backgroundSize: "cover", backgroundPosition: "center" }
                          : { background: c.hex }
                      }
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bike-numbers">
        <div className="container bike-numbers-grid">
          {[
            { icon: Tag, k: "参考价", v: cny(bike.price), s: "含税零售参考" },
            { icon: Weight, k: "整车重量", v: fmtWeight(bike.weight), s: bike.material + "车架" },
            { icon: Ruler, k: "M 码几何", v: mSize ? mSize.stack + " / " + mSize.reach : "—", s: "Stack / Reach (mm)" },
            { icon: Calendar, k: "年款", v: String(bike.year), s: bike.status === "current" ? "在售 / 最新" : "往季款" },
            { icon: Palette, k: "配色", v: String(bike.colors.length), s: "种官方配色" },
            { icon: Database, k: "规格项", v: String(bike.specs.reduce((s, g) => s + g.items.length, 0)), s: "项可核对参数" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.k} className="bike-number">
                <Icon size={16} />
                <span className="mono">{item.k}</span>
                <strong>{item.v}</strong>
                <small>{item.s}</small>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">HIGHLIGHTS / 关键设计</p>
            <h2>这台车为什么这样配。</h2>
          </div>
          <p className="section-note">来自品牌公开技术资料与车架规格，逐条对应到具体结构。</p>
        </div>
        <div className="highlight-grid">
          {bike.highlights.map((h, i) => (
            <div key={h} className="highlight-card">
              <span className="mono">0{i + 1}</span>
              <p>{h}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container specs-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">SPECIFICATION / 完整配置</p>
            <h2>六个维度，逐项可查。</h2>
          </div>
          <p className="section-note">同一版本的所有关键部件都落到具体型号；价格与重量为参考值。</p>
        </div>
        <div className="specs-grid">
          {bike.specs.map((group) => (
            <div key={group.title} className="spec-group">
              <h3><span className="mono">{group.icon.toUpperCase()}</span>{group.title}</h3>
              <dl>
                {group.items.map((item) => (
                  <div key={item.label} className="spec-row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="section container geometry-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">GEOMETRY / 车架几何</p>
            <h2>你该选哪个尺码。</h2>
          </div>
          <div className="size-switch">
            <span className="mono"><Ruler size={13} /> SIZE</span>
            {bike.sizes.map((s) => (
              <button key={s.label} className={s.label === sizeLabel ? "is-on" : ""} onClick={() => setSizeLabel(s.label)}>{s.label}</button>
            ))}
          </div>
        </div>

        <GeoProvenance confidence={bike.geoConfidence} source={bike.geoSource} />

        <div className="geometry-layout">
          <div className="geometry-canvas">
            <GeometryDiagram bike={bike} size={activeSize} color={bike.brandAccent} />
            <div className="geometry-legend mono">
              <span>STACK {activeSize.stack} MM</span>
              <span>REACH {activeSize.reach} MM</span>
              <span>WHEELBASE {activeSize.wheelbase} MM</span>
            </div>
          </div>
          <div className="geometry-key">
            {[
              ["尺码", activeSize.label],
              ["适配身高", activeSize.height[0] + "–" + activeSize.height[1] + " cm"],
              ["Stack", activeSize.stack + " mm"],
              ["Reach", activeSize.reach + " mm"],
              ["头管角", activeSize.headAngle + "°"],
              ["座管角", activeSize.seatAngle + "°"],
              ["上管长度", activeSize.topTube + " mm"],
              ["头管长度", activeSize.headTube + " mm"],
              ["座管长度", activeSize.seatTube + " mm"],
              ["后下叉", activeSize.chainstay + " mm"],
              ["轴距", activeSize.wheelbase + " mm"],
              ["五通下沉", activeSize.bbDrop + " mm"],
              ["跨高", activeSize.standover + " mm"],
              ["曲柄", activeSize.crank + " mm"],
              ["把立", activeSize.stem + " mm"],
              ["车把宽", activeSize.bar + " mm"],
            ].map(([k, v]) => (
              <div key={k} className="geometry-key-row"><span>{k}</span><strong className="mono">{v}</strong></div>
            ))}
          </div>
        </div>

        <div className="spec-table-wrap">
          <table className="spec-table geo-table">
            <thead>
              <tr>
                <th>尺码</th><th>身高</th><th>Stack</th><th>Reach</th><th>头管角</th><th>座管角</th>
                <th>上管</th><th>头管</th><th>后下叉</th><th>轴距</th><th>BB Drop</th><th>跨高</th>
              </tr>
            </thead>
            <tbody>
              {bike.sizes.map((s) => (
                <tr key={s.label} className={s.label === sizeLabel ? "is-active" : ""} onClick={() => setSizeLabel(s.label)}>
                  <td className="mono">{s.label}</td>
                  <td className="mono">{s.height[0]}–{s.height[1]}</td>
                  <td className="mono">{s.stack}</td>
                  <td className="mono">{s.reach}</td>
                  <td className="mono">{s.headAngle}°</td>
                  <td className="mono">{s.seatAngle}°</td>
                  <td className="mono">{s.topTube}</td>
                  <td className="mono">{s.headTube}</td>
                  <td className="mono">{s.chainstay}</td>
                  <td className="mono">{s.wheelbase}</td>
                  <td className="mono">{s.bbDrop}</td>
                  <td className="mono">{s.standover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">PRICE HISTORY / 价格走势</p>
            <h2>同车系历年参考价。</h2>
          </div>
          <p className="section-note">按年款取该车系各版本均价，单位人民币元。价格变动通常对应配置或汇率调整。</p>
        </div>
        <div className="price-chart-wrap">
          <PriceChart data={bike.priceHistory} accent={bike.brandAccent} />
          <div className="price-chart-side">
            <div><span className="mono">当前版本</span><strong>{cny(bike.price)}</strong></div>
            <div><span className="mono">车系首年均价</span><strong>{bike.priceHistory.length ? cny(bike.priceHistory[0].price) : "—"}</strong></div>
            <div><span className="mono">累计变化</span><strong className={priceDelta >= 0 ? "up" : "down"}>{priceDelta >= 0 ? "+" : ""}{cny(priceDelta)}</strong></div>
            <p>价格为公开渠道整理的参考价，不含地区差异、税费与经销商活动。</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">SAME FAMILY / 同车系其他版本</p>
            <h2>换个配置看。</h2>
          </div>
          <Link to={"/family/" + bike.familyId} className="text-link">完整车系页 <ArrowRight size={15} /></Link>
        </div>
        <div className="sibling-list">
          {siblingBuilds.map((b) => (
            <Link key={b.id} to={"/bike/" + b.id} className="sibling-row">
              <span className="mono sibling-year">{b.year}</span>
              <span className="sibling-main"><strong>{b.edition}</strong><small>{b.groupset} · {b.wheels}</small></span>
              <span className="mono sibling-weight">{fmtWeight(b.weight)}</span>
              <span className="sibling-price">{cny(b.price)}</span>
              <ChevronRight size={15} />
            </Link>
          ))}
          {siblingBuilds.length === 0 ? <p className="muted">该车系目前只有这一个版本档案。</p> : null}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">RELATED / 相关车型</p>
            <h2>同价位、同玩法的对手。</h2>
          </div>
          <Link to={"/catalog/" + bike.category + "?discipline=" + bike.discipline} className="text-link">更多同类 <ArrowUpRight size={15} /></Link>
        </div>
        <div className="bike-grid">
          {related.map((b, i) => <BikeCard key={b.id} bike={b} index={i} />)}
        </div>
      </section>

      <div className="container bike-note">
        <p><strong>数据说明：</strong>{bike.notes} 价格换算按 1 USD ≈ 7.2 CNY 估算，仅用于横向参考。官方产品图版权归品牌所有，仅作车型识别与配色参考；配置与几何以品牌官方公布为准。</p>
        <div className="provenance-row mono">
          <span className="provenance-key">SOURCE</span>
          {bike.sourceUrl ? (
            <a className="provenance-link" href={bike.sourceUrl} target="_blank" rel="noreferrer">
              {bike.sourceKind === "family" ? "车系官方产品页" : "品牌官网（车系页未收录）"} <ArrowUpRight size={12} />
            </a>
          ) : (
            <span>未收录</span>
          )}
          <span className="provenance-key">GEO</span>
          <span>{bike.geoConfidence === "official" ? "品牌官方逐码表" : "参考几何模型"}</span>
          <span className="provenance-key">IMAGE</span>
          <span>{bike.photo ? "品牌官方产品图" : "数据驱动工程侧视图"}</span>
        </div>
        <Link to="/about" className="text-link">查看完整数据来源与免责声明 <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
