export default function RamadanDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/40" />
      <span className="text-primary/60 text-lg tracking-widest select-none">✦ ☪ ✦</span>
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}
