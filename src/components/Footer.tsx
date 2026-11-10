import { Link } from "../router";
import { stats } from "../data/database";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            一个以工程图方式整理自行车的参数档案。价格、几何、版本与配色集中在一处，方便你在下单前把一台车看透。
          </p>
          <p className="mono footer-meta">
            {stats.families} 个车系 · {stats.bikes} 个版本 · {stats.brands} 个品牌 · {stats.years}
          </p>
        </div>
        <div className="footer-col">
          <h4>浏览</h4>
          <Link to="/catalog/road">公路车</Link>
          <Link to="/catalog/mtb">山地车</Link>
          <Link to="/brands">品牌库</Link>
          <Link to="/compare">对比台</Link>
        </div>
        <div className="footer-col">
          <h4>数据维度</h4>
          <Link to="/catalog/road?sort=price-asc">价格</Link>
          <Link to="/catalog/road?tab=geometry">几何</Link>
          <Link to="/catalog/road?sort=year-desc">生产年份</Link>
          <Link to="/brands">品牌与配色</Link>
        </div>
        <div className="footer-col">
          <h4>说明</h4>
          <Link to="/about">数据与免责声明</Link>
          <a href="https://www.uci.org" target="_blank" rel="noreferrer">UCI 规则</a>
          <Link to="/about">参考来源</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="mono footer-signature">
          VELO ATLAS / 骑行图鉴 © 2026 · 由 <strong>何瑞程</strong> 出品
        </span>
        <span className="footer-disclaimer">价格为参考价，非官方报价；配置以品牌当期公布为准。</span>
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>回到顶部 ↑</button>
      </div>
    </footer>
  );
}
