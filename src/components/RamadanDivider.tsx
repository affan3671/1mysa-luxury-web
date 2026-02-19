/** Elegant Islamic geometric divider */
export default function RamadanDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6 sm:py-8 px-4">
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-primary/30" />
      {/* Geometric pattern — 3 diamonds */}
      <div className="flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-primary/40">
          <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 3)" fill="currentColor" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary/60">
          <rect x="8" y="0" width="8" height="8" transform="rotate(45 8 4)" fill="currentColor" />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-primary/40">
          <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 3)" fill="currentColor" />
        </svg>
      </div>
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}
