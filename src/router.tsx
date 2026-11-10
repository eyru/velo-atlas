import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

export type Route = {
  path: string;
  segments: string[];
  query: URLSearchParams;
  hash: string;
};

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  return raw.length > 0 ? raw : "/";
}

function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

let cachedHash = typeof window === "undefined" ? "/" : readHash();
let cachedRoute: Route = parseHash(cachedHash);

function parseHash(hash: string): Route {
  const [pathPart, queryPart = ""] = hash.split("?");
  const path = pathPart.startsWith("/") ? pathPart : "/" + pathPart;
  return {
    path,
    segments: path.split("/").filter(Boolean),
    query: new URLSearchParams(queryPart),
    hash,
  };
}

function getSnapshot(): Route {
  const h = readHash();
  if (h !== cachedHash) {
    cachedHash = h;
    cachedRoute = parseHash(h);
  }
  return cachedRoute;
}

export function useRoute(): Route {
  return useSyncExternalStore(subscribe, getSnapshot, () => cachedRoute);
}

export function navigate(to: string, options: { replace?: boolean; scroll?: boolean } = {}) {
  const target = to.startsWith("#") ? to : "#" + (to.startsWith("/") ? to : "/" + to);
  if (options.replace) {
    window.history.replaceState(null, "", target);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = target;
  }
  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }
}

export function href(path: string, params?: Record<string, string | number | undefined | null>): string {
  const search = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== "") search.set(key, String(value));
    }
  }
  const q = search.toString();
  return "#" + (path.startsWith("/") ? path : "/" + path) + (q ? "?" + q : "");
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
  scroll?: boolean;
};

export function Link({ to, children, scroll = true, onClick, ...rest }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to, { scroll });
  };
  return (
    <a href={href(to)} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
