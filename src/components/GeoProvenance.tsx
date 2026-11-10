import { ArrowUpRight } from "lucide-react";

type Props = {
  confidence?: "official" | "estimated";
  source?: string;
};

export function GeoProvenance({ confidence, source }: Props) {
  const official = confidence === "official";
  return (
    <div className={"geo-provenance " + (official ? "is-official" : "is-estimated")}>
      <span className="geo-badge mono">{official ? "官方逐码几何" : "参考几何模型"}</span>
      {source ? (
        <a className="geo-source" href={source} target="_blank" rel="noreferrer">
          查看品牌官方几何页 <ArrowUpRight size={12} />
        </a>
      ) : (
        <span className="geo-note">逐码数值由车架平台与尺码推算，非品牌官方逐码表；购车前请以品牌几何页复核。</span>
      )}
    </div>
  );
}
