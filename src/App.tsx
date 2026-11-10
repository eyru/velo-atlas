import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchOverlay } from "./components/SearchOverlay";
import { useRoute } from "./router";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Brands } from "./pages/Brands";
import { BrandDetail } from "./pages/BrandDetail";
import { BikeDetail } from "./pages/BikeDetail";
import { FamilyDetail } from "./pages/FamilyDetail";
import { YearDetail } from "./pages/YearDetail";
import { Compare } from "./pages/Compare";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

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
      <main>{page}</main>
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
