import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GitCompare, Palette, Ruler } from "lucide-react";
import { getBrand } from "../data/brands";
import { bikes, families } from "../data/database";
import { cny, disciplineLabel, weight } from "../lib/format";
import { toggleCompare, useCompareIds } from "../lib/compare";
import { Link } from "../router";
import { BikeSVG } from "../components/BikeSVG";
import { BikeVisualMedia } from "../components/BikeVisualMedia";
import { GeoProvenance } from "../components/GeoProvenance";
import { GeometryDiagram } from "../components/GeometryDiagram";
import { usePageTitle } from "../lib/useTitle";

export function FamilyDetail({ id }: { id: string }) {
  const family = families.find((f) => f.id === id);
  usePageTitle(family ? family.brand + " " + family.name : "车系");

  if (!family) {
    return (
      <div className="container not-found">
        <p className="eyebrow">404 / FAMILY</p>
        <h1>找不到这个车系。</h1>
        <Link to="/catalog/road" className="btn btn-primary">返回公路车 <ArrowRight size={15} /></Link>
      </div>
    );
  }

  const brand = getBrand(family.brand);
  const brandBikes = bikes.filter((b) => b.familyId === family.id).sort((a, b) => b.year - a.year);
  const heroBike = brandBikes[0];
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeLabel, setSizeLabel] = useState(() => {
    const m = heroBike?.sizes.find((s) => s.label === "M");
    return m ? m.label : heroBike?.sizes[Math.floor((heroBike?.sizes.length ?? 1) / 2)]?.label ?? "";
  });
  const compareIds = useCompareIds();
  const activeColor = family.colors[colorIndex % family.colors.length];
  const activeSize = heroBike?.sizes.find((s) => s.label === sizeLabel) ?? heroBike?.sizes[0];
  const prices = family.builds.map((b) => b.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const related = families
    .filter((f) => f.brand === family.brand && f.id !== family.id)
    .sort((a, b) => Number(b.category === family.category) - Number(a.category === family.category))
    .slice(0, 3);
  const inCompare = heroBike ? compareIds.includes(heroBike.id) : false;

  return (
    <div className="family-page" style={{ ["--brand" as string]: brand?.accent ?? "#d9ff3d" }}>
      <section className="family-hero">
        <div className="container">
          <div className="breadcrumb mono">
            <Link to="/">首页</Link><span>/</span>
            <Link to={"/catalog/" + family.category}>{family.category === "road" ? "公路车" : "山地车"}</Link><span>/</span>
            <Link to={"/brand/" + (brand?.slug ?? "")}>{family.brand}</Link><span>/</span>
            <span>{family.name}</span>
          </div>
          <div className="family-hero-grid">
            <div className="family-hero-copy">
              <p className="eyebrow">{family.brand.toUpperCase()} / {family.category === "road" ? "ROAD" : "MOUNTAIN"} / {family.generation}</p>
              <h1>{family.name}</h1>
              <p className="family-sub">{family.generation} · {family.years[0]}–{family.years[1]} · {disciplineLabel[family.discipline]}</p>
              <p className="family-story">{family.story}</p>
              <div className="family-facts">
                <div><span className="mono">车架</span><strong>{family.material}</strong><small>{family.frame}</small></div>
                <div><span className="mono">轮径</span><strong>{family.wheelSize}</strong><small>{family.geo}</small></div>
                <div><span className="mono">行程</span><strong>{family.frontTravel ? (family.rearTravel ? family.frontTravel + " / " + family.rearTravel + " mm" : family.frontTravel + " mm") : "硬叉"}</strong><small>{family.category === "mtb" ? (family.rearTravel ? "前 / 后" : "前 · 硬尾") : "公路硬叉"}</small></div>
                <div><span className="mono">价格</span><strong>{cny(minPrice)}</strong><small>{minPrice !== maxPrice ? "起 · 至 " + cny(maxPrice) : "单一版本"}</small></div>
              </div>
              <div className="family-hero-actions">
                {heroBike ? <Link to={"/bike/" + heroBike.id} className="btn btn-primary">查看最新版本 <ArrowRight size={15} /></Link> : null}
                <Link to={"/catalog/" + family.category + "?brand=" + (brand?.slug ?? "")} className="btn btn-ghost">同品牌车型</Link>
              </div>
            </div>

            <div className="family-hero-visual">
              <div className="family-color-row">
                <span className="mono"><Palette size={13} /> {activeColor ? activeColor.name + " / " + activeColor.en : ""}</span>
                <span className="mono">{colorIndex + 1} / {family.colors.length}</span>
              </div>
              {heroBike ? (
                <BikeVisualMedia
                  photo={activeColor?.photo}
                  photoSource={activeColor?.photoSource}
                  alt={`${family.brand} ${family.name} ${activeColor?.name ?? ""} 官方产品图`}
                >
                  <BikeSVG bike={heroBike} color={activeColor?.hex} showGeometry />
                </BikeVisualMedia>
              ) : null}
              <div className="family-color-dots">
                {family.colors.map((c, i) => (
                  <button
                    key={c.name}
                    className={"family-color-dot" + (i === colorIndex ? " is-on" : "")}
                    style={
                      c.photo
                        ? { backgroundImage: `url(${c.photo})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : { background: c.hex }
                    }
                    onClick={() => setColorIndex(i)}
                    title={c.name}
                    aria-label={c.name}
                  />
                ))}
              </div>
              <div className="family-visual-meta mono">
                <span>{family.sizes.join(" / ")}</span>
                <span>{heroBike ? weight(heroBike.weight) : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">HIGHLIGHTS / 设计要点</p>
            <h2>这一代改了什么。</h2>
          </div>
          <p className="section-note">{family.notes ?? "以下为公开资料整理，具体配置以品牌当期公布为准。"}</p>
        </div>
        <div className="highlight-grid">
          {family.highlights.map((h, i) => (
            <div key={h} className="highlight-card">
              <span className="mono">0{i + 1}</span>
              <p>{h}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container geometry-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">GEOMETRY / 几何</p>
            <h2>按尺码拆开的车架数据。</h2>
          </div>
          <div className="size-switch">
            <span className="mono"><Ruler size={13} /> SIZE</span>
            {family.sizes.map((s) => (
              <button key={s} className={s === sizeLabel ? "is-on" : ""} onClick={() => setSizeLabel(s)}>{s}</button>
            ))}
          </div>
        </div>

        <GeoProvenance confidence={family.geoConfidence} source={family.geoSource} />

        <div className="geometry-layout">
          <div className="geometry-canvas">
            {heroBike && activeSize ? <GeometryDiagram bike={heroBike} size={activeSize} color={brand?.accent} /> : null}
            <div className="geometry-legend mono">
              <span>STACK {activeSize?.stack} MM</span>
              <span>REACH {activeSize?.reach} MM</span>
              <span>WHEELBASE {activeSize?.wheelbase} MM</span>
            </div>
          </div>
          <div className="geometry-key">
            {activeSize ? [
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
            )) : null}
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
              {heroBike?.sizes.map((s) => (
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
            <p className="eyebrow">BUILDS / 年款与配置</p>
            <h2>{family.builds.length} 个版本。</h2>
          </div>
          <p className="section-note">同一车系不同年款与配置并列展示，点击任意版本进入完整档案。</p>
        </div>
        <div className="build-list">
          <div className="build-row build-head mono">
            <span>年款 / 版本</span><span>套件</span><span>轮组</span><span>重量</span><span>参考价</span><span />
          </div>
          {[...family.builds].sort((a, b) => b.year - a.year).map((build) => {
            const bike = brandBikes.find((b) => b.year === build.year && b.edition === build.edition);
            if (!bike) return null;
            const selected = compareIds.includes(bike.id);
            return (
              <div key={bike.id} className="build-row">
                <span className="build-name">
                  <Link to={"/bike/" + bike.id}>
                    <em className="mono">{build.year}</em>
                    <strong>{build.edition}</strong>
                  </Link>
                </span>
                <span className="build-gs">{build.groupset}</span>
                <span className="build-wheels">{build.wheels}</span>
                <span className="mono">{weight(build.weight)}</span>
                <span className="build-price">{cny(build.price)}</span>
                <span className="build-actions">
                  <button
                    className={"table-compare" + (selected ? " is-on" : "")}
                    onClick={() => toggleCompare(bike.id)}
                    aria-label={selected ? "移出对比台" : "加入对比台"}
                  >
                    {selected ? <Check size={14} /> : <GitCompare size={14} />}
                  </button>
                  <Link to={"/bike/" + bike.id} className="build-open" aria-label="查看档案"><ArrowUpRight size={15} /></Link>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {related.length ? (
        <section className="section container">
          <div className="section-head">
            <div>
              <p className="eyebrow">MORE FROM {family.brand.toUpperCase()}</p>
              <h2>同品牌其他车系。</h2>
            </div>
            <Link to={"/brand/" + (brand?.slug ?? "")} className="text-link">品牌主页 <ArrowRight size={15} /></Link>
          </div>
          <div className="family-grid">
            {related.map((f) => (
              <Link key={f.id} to={"/family/" + f.id} className="family-card">
                <div className="family-card-head">
                  <span className="mono">{f.category === "road" ? "ROAD" : "MTB"}</span>
                  <span className="mono">{f.years[0]}–{f.years[1]}</span>
                </div>
                <h3>{f.name}</h3>
                <p className="family-generation">{f.generation}</p>
                <div className="family-specs mono"><span>{f.material}</span><span>{f.wheelSize}</span><span>{f.builds.length} BUILDS</span></div>
                <div className="family-card-foot"><span className="family-price">{cny(Math.min(...f.builds.map((b) => b.price)))} 起</span><ArrowUpRight size={15} /></div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="container family-back">
        <Link to={"/brand/" + (brand?.slug ?? "")} className="text-link"><ArrowLeft size={14} /> 返回 {family.brand} 品牌页</Link>
      </div>
    </div>
  );
}
