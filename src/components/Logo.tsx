export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="13" cy="29" r="9.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="31" cy="29" r="9.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 29 L21 14 L27 29 M21 14 L31 29 M17 22 L26 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="14" r="1.7" fill="currentColor" />
      </svg>
      <span className="logo-type">
        <strong>VELO ATLAS</strong>
        {!compact && <small>骑行图鉴 · 自行车参数档案</small>}
      </span>
    </span>
  );
}
