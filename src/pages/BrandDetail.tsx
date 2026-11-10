import { ArrowRight, ArrowUpRight, MapPin, Settings2 } from "lucide-react";
import { brandBySlug } from "../data/brands";
import { bikes, families } from "../data/database";
import { cny, disciplineShort } from "../lib/format";
import { Link } from "../router";
import { BikeCard } from "../components/BikeCard";
import { BikeSVG } from "../components/BikeSVG";
import { BikeVisualMedia } from "../components/BikeVisualMedia";
import { usePageTitle } from "../lib/useTitle";

export function BrandDetail({ slug }: { slug: string }) {
  const brand = brandBySlug[slug];
  usePageTitle(brand ? brand.name + " " + brand.cn : "品牌");

  if (!brand) {
    return (
      <div className="container not-found">
        <p className="eyebrow">404 / BRAND</p>
        <h1>找不到这个品牌。</h1>
        <Link to="/brands" className="btn btn-primary">返回品牌库 <ArrowRight size={15} /></Link>
      </div>
    );
  }

  const brandBikes = bikes.filter((b) => b.brandSlug === brand.slug);
  const brandFamilies = families.filter((f) => f.brand === brand.name);
  const heroBike = [...brandBikes].sort((a, b) => b.popularity - a.popularity || b.year - a.year)[0] ?? brandBikes[0];
  const latest = [...brandBikes].sort((a, b) => b.year - a.year || b.popularity - a.popularity).slice(0, 8);
  const road = brandFamilies.filter((f) => f.category === "road");
  const mtb = brandFamilies.filter((f) => f.category === "mtb");
  const years = brandBikes.length ? Math.min(...brandBikes.map((b) => b.year)) + "–" + Math.max(...brandBikes.map((b) => b.year)) : "—";

  return (
    <div className="brand-detail" style={{ ["--brand" as string]: brand.accent }}>
      <section className="brand-hero">
        <div className="container">
          <div className="breadcrumb mono">
            <Link to="/">首页</Link><span>/</span><Link to="/brands">品牌库</Link><span>/</span><span>{brand.name}</span>
          </div>
          <div className="brand-hero-grid">
            <div className="brand-hero-copy">
              <div className="brand-title-row">
                <span className="brand-hero-monogram">{brand.name.slice(0, 2).toUpperCase()}</span>
                <div>
                  <p className="eyebrow">{brand.country} · EST. {brand.founded}</p>
                  <h1>{brand.name}<em>{brand.cn}</em></h1>
                </div>
              </div>
              <p className="brand-tagline">{brand.tagline}</p>
              <p className="brand-story">{brand.story}</p>
              <div className="brand-meta">
                <span><MapPin size={14} />{brand.country}</span>
                <span><Settings2 size={14} />{brand.tech.length} 项核心技术</span>
                <span className="mono">FOUNDED {brand.founded}</span>
              </div>
              <div className="brand-stats">
                <div><strong>{brandFamilies.length}</strong><span>车系</span></div>
                <div><strong>{brandBikes.length}</strong><span>版本档案</span></div>
                <div><strong>{road.length}</strong><span>公路车系</span></div>
                <div><strong>{mtb.length}</strong><span>山地车系</span></div>
              </div>
              <div className="brand-actions">
                <Link to={"/catalog/" + (road.length >= mtb.length ? "road" : "mtb") + "?brand=" + brand.slug} className="btn btn-primary">
                  浏览该品牌车型 <ArrowRight size={15} />
                </Link>
                <Link to="/compare" className="btn btn-ghost">打开对比台</Link>
              </div>
            </div>
            <div className="brand-hero-visual">
              <div className="brand-visual-head mono">
                <span>{brand.name.toUpperCase()} / FLAGSHIP</span>
                <span>{heroBike ? heroBike.year : ""}</span>
              </div>
              {heroBike ? (
                <BikeVisualMedia
                  photo={heroBike.photo}
                  photoSource={heroBike.photoSource}
                  alt={`${heroBike.brandName} ${heroBike.family} 官方产品图`}
                >
                  <BikeSVG bike={heroBike} showGeometry />
                </BikeVisualMedia>
              ) : null}
              {heroBike ? (
                <Link to={"/bike/" + heroBike.id} className="brand-visual-caption">
                  <div>
                    <span className="mono">{heroBike.family} · {heroBike.edition}</span>
                    <strong>{cny(heroBike.price)}</strong>
                  </div>
                  <ArrowUpRight size={18} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">TECH / 技术标签</p>
            <h2>这个品牌押注的方向。</h2>
          </div>
          <p className="section-note">{brand.specialties.join(" · ")}</p>
        </div>
        <div className="tech-grid">
          {brand.tech.map((t, i) => (
            <div key={t} className="tech-card">
              <span className="mono">0{i + 1}</span>
              <strong>{t}</strong>
            </div>
          ))}
        </div>
      </section>

      {road.length ? (
        <section className="section container">
          <div className="section-head">
            <div>
              <p className="eyebrow">ROAD LINEUP</p>
              <h2>公路车系</h2>
            </div>
            <span className="mono section-count">{road.length} FAMILIES</span>
          </div>
          <div className="family-grid">
            {road.map((f) => <FamilyCard key={f.id} family={f} accent={brand.accent} />)}
          </div>
        </section>
      ) : null}

      {mtb.length ? (
        <section className="section container">
          <div className="section-head">
            <div>
              <p className="eyebrow">MOUNTAIN LINEUP</p>
              <h2>山地车系</h2>
            </div>
            <span className="mono section-count">{mtb.length} FAMILIES</span>
          </div>
          <div className="family-grid">
            {mtb.map((f) => <FamilyCard key={f.id} family={f} accent={brand.accent} />)}
          </div>
        </section>
      ) : null}

      {latest.length ? (
        <section className="section container">
          <div className="section-head">
            <div>
              <p className="eyebrow">BUILDS / {years}</p>
              <h2>最新版本档案</h2>
            </div>
            <Link to={"/catalog/" + (latest[0].category) + "?brand=" + brand.slug} className="text-link">查看全部 {brandBikes.length} 个版本 <ArrowRight size={15} /></Link>
          </div>
          <div className="bike-grid">
            {latest.map((b, i) => <BikeCard key={b.id} bike={b} index={i} />)}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function FamilyCard({ family, accent }: { family: (typeof families)[number]; accent: string }) {
  const prices = family.builds.map((b) => b.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <Link to={"/family/" + family.id} className="family-card" style={{ ["--brand" as string]: accent }}>
      <div className="family-card-head">
        <span className="mono">{disciplineShort[family.discipline]}</span>
        <span className="mono">{family.years[0]}–{family.years[1]}</span>
      </div>
      <h3>{family.name}</h3>
      <p className="family-generation">{family.generation}</p>
      <div className="family-specs mono">
        <span>{family.material}</span>
        <span>{family.wheelSize}</span>
        {family.frontTravel ? <span>{family.rearTravel ? "前 " + family.frontTravel + " / 后 " + family.rearTravel + " mm" : "前 " + family.frontTravel + " mm · 硬尾"}</span> : <span>{family.geo}</span>}
      </div>
      <div className="family-colors">
        {family.colors.slice(0, 6).map((c) => <i key={c.name} style={{ background: c.hex }} title={c.name} />)}
        <span className="mono">{family.colors.length} 色</span>
      </div>
      <div className="family-card-foot">
        <span className="mono">{family.builds.length} BUILDS · 尺码 {family.sizes[0]}–{family.sizes[family.sizes.length - 1]}</span>
        <span className="family-price">{cny(min)}{min !== max ? " 起" : ""}</span>
      </div>
      <span className="family-arrow"><ArrowUpRight size={16} /></span>
    </Link>
  );
}
