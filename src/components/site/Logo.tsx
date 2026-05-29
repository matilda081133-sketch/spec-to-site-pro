export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M16 23s-6-3.6-6-9a4 4 0 016-3.46A4 4 0 0122 14c0 5.4-6 9-6 9z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M11.5 15.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <div className="leading-tight">
        <div className="font-display text-lg">Здоровье нации</div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">медицинский центр</div>
      </div>
    </div>
  );
}
