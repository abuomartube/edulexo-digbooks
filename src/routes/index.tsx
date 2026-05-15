import { createFileRoute, Link } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { lessons } from "@/data/lessons";
import { TOPIC_GRADIENTS } from "@/components/LessonView";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduLexo · Lexo for English — Beginner A1" },
      { name: "description", content: "30 interactive bilingual English lessons for beginners. Learn, practice, achieve." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-5 md:px-10 py-8 max-w-[1280px] w-full mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="tag-chip primary">LEVEL A1</span>
            <span className="tag-chip">30 LESSONS</span>
            <span className="tag-chip">BILINGUAL</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Lexo <span style={{ color: "var(--color-primary-glow)" }}>for English</span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-primary mt-3 mb-5" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
              <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                A complete 30-lesson journey for adult learners — vocabulary, sentences, conversation, story, grammar and writing — every day.
              </p>
            </div>
            <div className="text-right">
              <h2 className="arabic-text text-3xl md:text-4xl font-bold leading-tight" style={{ textAlign: "right" }}>
                ليكسو للإنجليزية
              </h2>
              <p className="arabic-text text-sm text-muted-foreground mt-2">للمبتدئين · المستوى الأول</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
            <h3 className="text-sm font-bold tracking-[0.2em] text-muted-foreground">ALL LESSONS</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
            {lessons.map((l) => {
              const gradient = TOPIC_GRADIENTS[l.category] ?? "from-purple-500/30 to-blue-500/30";
              return (
                <Link key={l.id} to="/lesson/$id" params={{ id: String(l.id) }}
                  className="glass-card rounded-2xl p-5 hover:border-primary/50 transition group relative overflow-hidden">
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-50 group-hover:opacity-80 transition`} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="tag-chip primary">{String(l.id).padStart(2, "0")}</span>
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
        </main>
      </div>
    </div>
  );
}
