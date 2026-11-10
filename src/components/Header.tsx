import { useEffect, useState } from "react";
import { GitCompare, Menu, Search, X } from "lucide-react";
import { Link, navigate, useRoute } from "../router";
import { useCompareIds } from "../lib/compare";
import { Logo } from "./Logo";

type Props = {
  onOpenSearch: () => void;
};

const nav = [
  { label: "公路车", to: "/catalog/road", key: "/catalog/road" },
  { label: "山地车", to: "/catalog/mtb", key: "/catalog/mtb" },
  { label: "品牌库", to: "/brands", key: "/brands" },
  { label: "对比台", to: "/compare", key: "/compare" },
];

export function Header({ onOpenSearch }: Props) {
  const route = useRoute();
  const compare = useCompareIds();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route.path]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="header-inner">
        <Link to="/" className="brand-link" aria-label="VELO ATLAS 首页">
          <Logo />
        </Link>

        <nav className="main-nav" aria-label="主导航">
          {nav.map((item) => {
            const active = route.path === item.key || (item.key !== "/" && route.path.startsWith(item.key + "/"));
            return (
              <Link key={item.to} to={item.to} className={"nav-link" + (active ? " is-active" : "")}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button className="search-trigger" onClick={onOpenSearch} aria-label="搜索车型、品牌">
            <Search size={15} />
            <span>搜索车型 / 品牌</span>
            <kbd>Ctrl K</kbd>
          </button>
          <Link to="/compare" className={"compare-trigger" + (compare.length ? " has-items" : "")} aria-label="打开对比台">
            <GitCompare size={16} />
            <span className="compare-count">{compare.length}</span>
          </Link>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="打开菜单" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={"mobile-panel" + (open ? " is-open" : "")}>
        {nav.map((item, i) => (
          <Link key={item.to} to={item.to} className="mobile-link">
            <span className="mono">0{i + 1}</span>
            {item.label}
          </Link>
        ))}
        <button className="mobile-search" onClick={() => { setOpen(false); onOpenSearch(); }}>
          <Search size={16} /> 搜索车型 / 品牌
        </button>
      </div>
    </header>
  );
}
