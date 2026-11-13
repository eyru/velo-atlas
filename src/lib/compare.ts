import { useSyncExternalStore } from "react";

/**
 * 对比台只保存版本 id，不依赖车型数据。
 * 这样页头、卡片等外壳组件不会把全量数据库拖进首屏 chunk；
 * id 是否有效由对比台页面在渲染时过滤。
 */
const KEY = "velo-atlas-compare";

const MAX = 3;
let ids: string[] = [];
let loaded = false;
const listeners = new Set<() => void>();

function normalize(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((id): id is string => typeof id === "string" && id.length > 0))].slice(0, MAX);
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== KEY) return;
    try {
      ids = normalize(JSON.parse(event.newValue ?? "[]"));
    } catch {
      ids = [];
    }
    loaded = true;
    listeners.forEach((l) => l());
  });
}

function load() {
  if (loaded) return;
  loaded = true;
  try {
    ids = normalize(JSON.parse(localStorage.getItem(KEY) ?? "[]"));
  } catch {
    ids = [];
  }
}

function emit() {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  load();
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useCompareIds(): string[] {
  load();
  return useSyncExternalStore(subscribe, () => ids, () => ids);
}

export function toggleCompare(id: string): boolean {
  load();
  ids = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id].slice(-MAX);
  emit();
  return ids.includes(id);
}

export function removeCompare(id: string) {
  load();
  ids = ids.filter((x) => x !== id);
  emit();
}

export function clearCompare() {
  load();
  ids = [];
  emit();
}

/** 用一组 id 覆盖对比台（分享链接导入、失效 id 清理）。 */
export function setCompareIds(next: string[]): string[] {
  load();
  ids = normalize(next);
  emit();
  return ids;
}

/** 解析 #/compare?bikes=a,b,c 的分享参数。 */
export function parseCompareParam(value: string | null): string[] {
  if (!value) return [];
  return normalize(value.split(",").map((x) => decodeURIComponent(x.trim())));
}

export { MAX as MAX_COMPARE, KEY as COMPARE_STORAGE_KEY };
