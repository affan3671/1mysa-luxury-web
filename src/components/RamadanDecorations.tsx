/** Mosque silhouette SVG for hero backgrounds */
export function MosqueSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMax meet"
      fill="currentColor"
    >
      <path d="M0,200 L0,160 L50,160 L50,140 L60,100 Q80,60 100,100 L110,140 L110,160 L150,160 L150,180 L200,180 L200,140 L220,140 L220,120 Q240,80 260,120 L260,140 L280,140 L280,180 L350,180 L350,130 L360,90 Q380,30 400,90 L410,130 L410,180 L480,180 L480,140 L500,140 L500,120 Q520,80 540,120 L540,140 L560,140 L560,180 L650,180 L650,160 L690,160 L690,140 L700,100 Q720,60 740,100 L750,140 L750,160 L800,160 L800,200 Z" />
    </svg>
  );
}
