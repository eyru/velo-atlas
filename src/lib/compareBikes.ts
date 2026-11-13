import { useMemo } from "react";
import { bikeById } from "../data/database";
import type { Bike } from "../data/types";
import { useCompareIds } from "./compare";

/** 只有对比台与搜索结果需要完整车型对象，按需加载数据。 */
export function useCompareBikes(): Bike[] {
  const ids = useCompareIds();
  return useMemo(() => ids.map((id) => bikeById[id]).filter(Boolean), [ids]);
}
