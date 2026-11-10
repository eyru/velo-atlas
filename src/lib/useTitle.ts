import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title + " · VELO ATLAS 骑行图鉴";
    return () => {
      document.title = "VELO ATLAS · 骑行图鉴";
    };
  }, [title]);
}
