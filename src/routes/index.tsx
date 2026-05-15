import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { lessons, LEVEL_META, type Level } from "@/data/lessons";
import { TOPIC_GRADIENTS } from "@/components/LessonView";
import { ArrowRight } from "lucide-react";

type Filter = Level | "ALL";
const FILTERS: Filter[] = ["A1", "A2", "B1", "ALL"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduLexo · Lexo for English — A1 / A2 / B1" },
      { name: "description", content: "90 interactive bilingual English lessons across A1, A2, and B1 levels." },
    ],
  }),
  component: HomePage,
});

const LEVEL_ORDER: Level[] = ["A1", "A2", "B1"];

const LEVEL_ACCENT: Record<Level, string> = {
  A1: "from-purple-500/40 via-fuchsia-500/30 to-blue-500/40",
  A2: "from-amber-500/40 via-orange-500/30 to-rose-500/40",
  B1: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
};

function HomePage() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const visibleLevels: Level[] = filter === "ALL" ? LEVEL_ORDER : [filter];
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-5 md:px-10 py-12 md:py-16 max-w-[1240px] w-full mx-auto">
          {/* HERO */}
          <section className="relative mb-20 md:mb-24">
            <div
              aria-hidden
              className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
              style={{ background: "var(--color-primary)", opacity: 0.08, filter: "blur(120px)" }}
            />
            <div className="relative space-y-8 md:space-y-10">
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-[0.22em] font-medium text-white/60">
                  A1 · A2 · B1
                </span>
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-[0.22em] font-medium text-white/60">
                  {lessons.length} Lessons
                </span>
                <span
                  className="px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-medium"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--color-gold) 25%, transparent)",
                    background: "color-mix(in oklab, var(--color-gold) 8%, transparent)",
                    color: "var(--color-gold)",
                  }}
                >
                  Bilingual
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 max-w-xl">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
                    Lexo{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "var(--gradient-primary)" }}
                    >
                      for English
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                    A masterfully curated curriculum spanning three complete levels. Master vocabulary, syntax, and conversation through an editorial bilingual lens.
                  </p>
                </div>
                <div className="text-right space-y-2 shrink-0">
                  <h2 className="arabic-text text-5xl md:text-6xl font-bold leading-tight tracking-tight">ليكسو للإنجليزية</h2>
                  <p className="arabic-text text-base md:text-lg text-white/40 font-light">ثلاثة مستويات · A1 · A2 · B1</p>
                </div>
              </div>
            </div>
          </section>

          {/* FILTER BAR */}
          <nav className="flex justify-center mb-20 md:mb-24">
            <div
              className="p-1.5 rounded-2xl inline-flex items-center gap-1 border border-white/10"
              style={{
                background: "color-mix(in oklab, white 4%, transparent)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
              }}
            >
              {FILTERS.map((f) => {
                const active = filter === f;
                const count = f === "ALL" ? lessons.length : lessons.filter((l) => l.level === f).length;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-7 md:px-9 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                      active ? "text-primary-foreground" : "text-white/45 hover:text-white"
                    }`}
                    style={
                      active
                        ? { background: "var(--color-primary)", boxShadow: "0 0 20px color-mix(in oklab, var(--color-primary) 40%, transparent)" }
                        : undefined
                    }
                  >
                    {f}
                    <span className="text-[10px] opacity-60 ml-1.5 font-medium">{count}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* LEVELS */}
          {visibleLevels.map((level, levelIdx) => {
            const items = lessons.filter((l) => l.level === level);
            const meta = LEVEL_META[level];
            return (
              <section key={level} id={`level-${level}`} className="mb-24 scroll-mt-24 space-y-10">
                {/* Level header — glass with hairline border */}
                <div className="relative group">
                  <div
                    aria-hidden
                    className="absolute -inset-1 rounded-3xl blur opacity-30 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 25%, transparent), transparent)",
                    }}
                  />
                  <div
                    className="relative flex flex-wrap items-center justify-between gap-6 p-8 md:p-10 rounded-3xl border border-white/10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), transparent)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="text-5xl md:text-6xl font-black text-white/10 select-none leading-none">
                        {String(levelIdx + 1).padStart(2, "0")}
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: "var(--color-gold)" }}
                          />
                          <span
                            className="text-[11px] tracking-[0.3em] uppercase font-bold"
                            style={{ color: "var(--color-gold)" }}
                          >
                            Level
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                          {level} <span className="font-light text-white/65">· {meta.en}</span>
                        </h2>
                        <p className="text-sm md:text-base text-white/40 font-light max-w-md">{meta.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h3
                        className="arabic-text text-3xl md:text-4xl font-bold leading-none mb-1.5"
                        style={{ color: "var(--color-gold)" }}
                      >
                        {meta.ar}
                      </h3>
                      <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold">
                        {items.length} Lessons
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lesson grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                  {items.map((l) => (
                    <Link
                      key={l.id}
                      to="/lesson/$id"
                      params={{ id: String(l.id) }}
                      className="group relative block"
                    >
                      <div
                        aria-hidden
                        className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, color-mix(in oklab, var(--color-primary) 25%, transparent), transparent)",
                        }}
                      />
                      <div
                        className="relative h-full p-7 rounded-[2rem] border border-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                        style={{ background: "color-mix(in oklab, var(--color-card-solid) 85%, black)" }}
                      >
                        <div
                          aria-hidden
                          className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-20 pointer-events-none"
                          style={{
                            background: "var(--color-primary)",
                            opacity: 0.06,
                            filter: "blur(40px)",
                          }}
                        />
                        <div className="relative space-y-5">
                          <div className="flex justify-between items-start">
                            <span className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-[10px] font-bold tracking-[0.18em] text-white/55 uppercase">
                              {level} · {String(l.id).padStart(2, "0")}
                            </span>
                            <span
                              className="text-[10px] font-bold tracking-[0.18em] uppercase"
                              style={{ color: "var(--color-primary-glow)" }}
                            >
                              {l.category}
                            </span>
                          </div>
                          <div className="space-y-2.5">
                            <h3
                              className="text-xl md:text-[1.35rem] font-bold tracking-tight leading-snug transition-colors"
                              style={{ color: "white" }}
                            >
                              <span className="group-hover:[color:var(--color-gold)] transition-colors">
                                {l.titleEn}
                              </span>
                            </h3>
                            <p className="arabic-text text-base md:text-lg text-white/55 leading-relaxed">
                              {l.titleAr}
                            </p>
                            <p className="text-xs md:text-sm text-white/35 font-light leading-relaxed line-clamp-2">
                              {l.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="relative mt-8 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/25">
                            6 Sections
                          </span>
                          <span className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
                            <ArrowRight className="w-4 h-4 text-white transition-colors group-hover:text-[#02020B]" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
