import { Search, Bell, Flame, Star, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 px-6 lg:px-10 py-5 border-b border-border bg-background/40 backdrop-blur-xl sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          L<span className="text-gold">·</span>
        </div>
        <div className="leading-tight">
          <div className="font-bold text-lg tracking-tight">EduLexo</div>
          <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">LEARN · PRACTICE · ACHIEVE</div>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl items-center gap-2 px-4 h-11 rounded-full border border-border bg-card/50 backdrop-blur">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input placeholder="Search lessons..." className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground" />
        <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">⌘ K</kbd>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
          <Flame className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
          <span className="text-sm font-semibold">12</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
          <Star className="w-4 h-4 fill-current" style={{ color: "var(--color-gold)" }} />
          <span className="text-sm font-semibold">850</span>
        </div>
        <button className="w-9 h-9 rounded-full border border-border bg-card/50 flex items-center justify-center hover:border-primary/50 transition">
          <Bell className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-accent border-2 border-primary/40" />
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
