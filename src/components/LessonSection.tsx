import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function LessonSection({
  num,
  title,
  arabicTitle,
  icon: Icon,
  children,
}: {
  num: string;
  title: string;
  arabicTitle: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <section className="glass-card rounded-2xl p-5 md:p-6">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="section-num">{num}</span>
          <h2 className="text-lg md:text-xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="arabic-text font-semibold" style={{ color: "var(--color-gold)" }}>{arabicTitle}</span>
          <Icon className="w-5 h-5" style={{ color: "var(--color-gold)" }} />
        </div>
      </header>
      {children}
    </section>
  );
}

export function BilingualRow({
  english,
  arabic,
  bullet = false,
  prefix,
}: {
  english: string;
  arabic: string;
  bullet?: boolean;
  prefix?: string;
}) {
  return (
    <div className="inner-card rounded-xl px-4 py-3 flex items-center gap-3">
      <div className="flex-1 flex items-center gap-2 min-w-0">
        {prefix && (
          <span className="w-6 h-6 rounded-full bg-primary/25 border border-primary/40 text-[11px] font-bold flex items-center justify-center text-primary-foreground shrink-0">
            {prefix}
          </span>
        )}
        {bullet && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
        <span className="text-sm md:text-[15px] truncate">{english}</span>
      </div>
      <button aria-label="Play" className="play-btn" style={{ width: "2rem", height: "2rem" }}>
        <span className="sr-only">Play</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <span className="arabic-text text-sm md:text-[15px] shrink-0 min-w-[5rem]">{arabic}</span>
    </div>
  );
}

export function StackedRow({
  english,
  arabic,
  bullet = false,
  prefix,
}: {
  english: string;
  arabic: string;
  bullet?: boolean;
  prefix?: string;
}) {
  return (
    <div className="inner-card rounded-xl px-4 py-3 space-y-2">
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 min-w-0">
          {prefix && (
            <span className="w-6 h-6 rounded-full bg-primary/25 border border-primary/40 text-[11px] font-bold flex items-center justify-center text-primary-foreground shrink-0">
              {prefix}
            </span>
          )}
          {bullet && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
          <span className="text-sm md:text-[15px] leading-snug">{english}</span>
        </div>
        <button aria-label="Play" className="play-btn shrink-0" style={{ width: "2rem", height: "2rem" }}>
          <span className="sr-only">Play</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      {arabic && (
        <p
          dir="rtl"
          className="arabic-text text-sm md:text-[15px] leading-relaxed text-right"
          style={{ color: "color-mix(in oklab, var(--color-foreground) 75%, transparent)" }}
        >
          {arabic}
        </p>
      )}
    </div>
  );
}
