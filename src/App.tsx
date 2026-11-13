import { lazy, Suspense, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { useRoute } from "./router";

import { Home } from "./pages/Home";

// 路由级拆包：首屏只加载外壳；首页常驻，其余页面与数据在导航后拉取。
// 离线单文件构建会把这些动态导入内联成单个 chunk，见 vite.config.ts。
const Catalog = lazy(() => import("./pages/Catalog").then((m) => ({ default: m.Catalog })));
const Brands = lazy(() => import("./pages/Brands").then((m) => ({ default: m.Brands })));
const BrandDetail = lazy(() => import("./pages/BrandDetail").then((m) => ({ default: m.BrandDetail })));
const BikeDetail = lazy(() => import("./pages/BikeDetail").then((m) => ({ default: m.BikeDetail })));
const FamilyDetail = lazy(() => import("./pages/FamilyDetail").then((m) => ({ default: m.FamilyDetail })));
const YearDetail = lazy(() => import("./pages/YearDetail").then((m) => ({ default: m.YearDetail })));
const Compare = lazy(() => import("./pages/Compare").then((m) => ({ default: m.Compare })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));
const SearchOverlay = lazy(() => import("./components/SearchOverlay").then((m) => ({ default: m.SearchOverlay })));

function ArchiveFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="mono">LOADING ARCHIVE</span>
      <span className="route-fallback-bar"><i /></span>
    </div>
  );
}

export default function App() {
  const route = useRoute();
  const [searchOpen, setSearchOpen] = useState(false);
  const [s0, s1] = route.segments;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "/" && !searchOpen) {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          setSearchOpen(true);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  let page: React.ReactNode;
  if (!s0) page = <Home />;
  else if (s0 === "catalog")
    page = (
      <Catalog
        key={(s1 === "mtb" ? "mtb" : "road") + "?" + route.query.toString()}
        category={s1 === "mtb" ? "mtb" : "road"}
      />
    );
  else if (s0 === "brands") page = <Brands />;
  else if (s0 === "brand" && s1) page = <BrandDetail slug={s1} />;
  else if (s0 === "bike" && s1) page = <BikeDetail key={s1} id={s1} />;
  else if (s0 === "family" && s1) page = <FamilyDetail key={s1} id={s1} />;
  else if (s0 === "year" && s1) page = <YearDetail key={s1} year={Number(s1)} />;
  else if (s0 === "compare") page = <Compare />;
  else if (s0 === "about") page = <About />;
  else page = <NotFound />;

  return (
    <div className="app-shell">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <main>
        <Suspense fallback={<ArchiveFallback />}>{page}</Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {searchOpen ? (
        <Suspense fallback={null}>
          <SearchOverlay open onClose={() => setSearchOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
