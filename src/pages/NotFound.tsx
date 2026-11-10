import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "../router";
import { usePageTitle } from "../lib/useTitle";

export function NotFound() {
  usePageTitle("页面不存在");
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <span className="nf-code mono">404 / OFF ROUTE</span>
        <div className="nf-icon"><Compass size={34} /></div>
        <h1>这条路线不在图鉴里。</h1>
        <p>链接可能已经变更，或者这个车型还没有被收录。回到目录重新检索，通常两步就能找到。</p>
        <div className="nf-links">
          <Link to="/" className="btn btn-primary"><ArrowLeft size={15} /> 回到首页</Link>
          <Link to="/catalog/road" className="btn btn-ghost">公路车目录</Link>
          <Link to="/catalog/mtb" className="btn btn-ghost">山地车目录</Link>
        </div>
      </div>
    </div>
  );
}
