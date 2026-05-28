export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 14c2.5-4 7.5-4 10 0M9 14c2.5 4 7.5 4 10 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.6" fill="currentColor"/>
      </svg>
      <div className="leading-tight">
        <div className="font-display text-lg">Мать и Дитя</div>
        <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">медицинский центр</div>
      </div>
    </div>
  );
}
