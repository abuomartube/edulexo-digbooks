import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { lessons, LEVEL_META, type Level } from "@/data/lessons";
import { TOPIC_GRADIENTS } from "@/components/LessonView";
import { ArrowRight, Sparkles } from "lucide-react";

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
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-5 md:px-10 py-8 max-w-[1280px] w-full mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="tag-chip primary">A1 · A2 · B1</span>
            <span className="tag-chip">{lessons.length} LESSONS</span>
            <span className="tag-chip">BILINGUAL</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Lexo <span style={{ color: "var(--color-primary-glow)" }}>for English</span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-primary mt-3 mb-5" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
              <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                Three complete levels — Beginner, Elementary, Intermediate. Vocabulary, sentences, conversation, story, grammar and writing in every lesson.
              </p>
            </div>
            <div className="text-right">
              <h2 className="arabic-text text-3xl md:text-4xl font-bold leading-tight" style={{ textAlign: "right" }}>
                ليكسو للإنجليزية
              </h2>
              <p className="arabic-text text-sm text-muted-foreground mt-2">ثلاثة مستويات · A1 · A2 · B1</p>
            </div>
          </div>

          {LEVEL_ORDER.map((level) => {
            const items = lessons.filter((l) => l.level === level);
            const meta = LEVEL_META[level];
            const accent = LEVEL_ACCENT[level];
            return (
              <section key={level} id={`level-${level}`} className="mb-14 scroll-mt-24">
                <div className="relative glass-card rounded-2xl p-5 md:p-6 mb-6 overflow-hidden">
                  <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-60`} />
                  <div className="relative flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                        <span className="text-[11px] tracking-[0.3em] font-bold text-muted-foreground">LEVEL</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        {level} <span className="text-muted-foreground font-bold">· {meta.en}</span>
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1 max-w-md">{meta.tagline}</p>
                    </div>
                    <div className="text-right">
                      <h3 className="arabic-text text-2xl font-bold" style={{ color: "var(--color-gold)" }}>{meta.ar}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{items.length} LESSONS</p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((l) => {
                    const gradient = TOPIC_GRADIENTS[l.category] ?? "from-purple-500/30 to-blue-500/30";
                    return (
                      <Link key={l.id} to="/lesson/$id" params={{ id: String(l.id) }}
                        className="glass-card rounded-2xl p-5 hover:border-primary/50 transition group relative overflow-hidden">
                        <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-50 group-hover:opacity-80 transition`} />
                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <span className="tag-chip primary">{level} · {String(l.id).padStart(2, "0")}</span>
                            <span className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground">{l.category}</span>
                          </div>
                          <h3 className="text-lg font-bold tracking-tight mb-1">{l.titleEn}</h3>
                          <p className="arabic-text text-sm mb-3" style={{ color: "var(--color-gold)" }}>{l.titleAr}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{l.subtitle}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">6 sections</span>
                            <span className="w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground"
                              style={{ background: "var(--gradient-primary)" }}>
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
