import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  photo?: string;
  photoSource?: string;
  alt: string;
  /** 首屏主图：立即加载并提高抓取优先级 */
  priority?: boolean;
  children: ReactNode;
};

/** 官方产品图优先；没有官方图时回退到数据驱动的工程侧视图。 */
export function BikeVisualMedia({ photo, photoSource, alt, priority = false, children }: Props) {
  if (!photo) return <>{children}</>;
  return (
    <div className="bike-photo-frame">
      <img
        src={photo}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
      <span className="photo-badge mono">OFFICIAL PRODUCT IMAGE</span>
      {photoSource ? (
        <a className="photo-source mono" href={photoSource} target="_blank" rel="noreferrer">
          品牌官方图 <ArrowUpRight size={11} />
        </a>
      ) : null}
    </div>
  );
}
