import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  photo?: string;
  photoSource?: string;
  alt: string;
  children: ReactNode;
};

/** 官方产品图优先；没有官方图时回退到数据驱动的工程侧视图。 */
export function BikeVisualMedia({ photo, photoSource, alt, children }: Props) {
  if (!photo) return <>{children}</>;
  return (
    <div className="bike-photo-frame">
      <img src={photo} alt={alt} loading="lazy" />
      <span className="photo-badge mono">OFFICIAL PRODUCT IMAGE</span>
      {photoSource ? (
        <a className="photo-source mono" href={photoSource} target="_blank" rel="noreferrer">
          品牌官方图 <ArrowUpRight size={11} />
        </a>
      ) : null}
    </div>
  );
}
