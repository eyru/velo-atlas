import { useSyncExternalStore } from "react";
import { bikeById } from "../data/database";
import type { Bike } from "../data/types";

const KEY = "velo-atlas-compare";

const MAX = 3;
let ids: string[] = [];
let loaded = false;
const listeners = new Set<() => void>();
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== KEY) return;
    try {
      ids = (JSON.parse(event.newValue ?? "[]") as string[]).filter((id) => !!bikeById[id]).slice(0, MAX);
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
    const raw = localStorage.getItem(KEY);
    if (raw) ids = (JSON.parse(raw) as string[]).filter((id) => !!bikeById[id]).slice(0, MAX);
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

export function useCompareBikes(): Bike[] {
  const list = useCompareIds();
  return list.map((id) => bikeById[id]).filter(Boolean);
}

export function toggleCompare(id: string): boolean {
  load();
  if (ids.includes(id)) {
    ids = ids.filter((x) => x !== id);
  } else {
    ids = [...ids, id].slice(-MAX);
  }
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

export { MAX as MAX_COMPARE };
