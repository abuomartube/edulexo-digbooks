import { Link } from "@tanstack/react-router";
import { BookOpen, MessageSquare, Users, GraduationCap, PenLine, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { LessonSection, BilingualRow } from "@/components/LessonSection";
import { PlayButton } from "@/components/PlayButton";
import morningImg from "@/assets/morning-routine.jpg";
import type { Lesson } from "@/data/lessons";
import { lessons } from "@/data/lessons";

const TOPIC_GRADIENTS: Record<string, string> = {
  "DAILY LIFE": "from-purple-500/30 via-fuchsia-500/20 to-blue-500/30",
  SOCIAL: "from-pink-500/30 via-rose-500/20 to-purple-500/30",
  FAMILY: "from-amber-500/25 via-orange-500/20 to-rose-500/25",
  NUMBERS: "from-blue-500/30 via-cyan-500/20 to-indigo-500/30",
  FOOD: "from-orange-500/30 via-amber-500/20 to-red-500/25",
  WORK: "from-indigo-500/30 via-violet-500/20 to-purple-500/30",
  CITY: "from-cyan-500/30 via-sky-500/20 to-blue-500/30",
  NATURE: "from-emerald-500/30 via-teal-500/20 to-green-500/30",
  LIFESTYLE: "from-fuchsia-500/30 via-purple-500/20 to-pink-500/30",
  HOME: "from-amber-500/25 via-yellow-500/20 to-orange-500/25",
  STYLE: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
  HEALTH: "from-rose-500/30 via-red-500/20 to-pink-500/30",
  TRAVEL: "from-sky-500/30 via-blue-500/20 to-cyan-500/30",
  TECH: "from-blue-500/30 via-indigo-500/20 to-purple-500/30",
  SPORTS: "from-lime-500/30 via-emerald-500/20 to-green-500/30",
  ENTERTAINMENT: "from-fuchsia-500/30 via-pink-500/20 to-rose-500/30",
  EDUCATION: "from-blue-500/30 via-violet-500/20 to-purple-500/30",
  CULTURE: "from-pink-500/30 via-fuchsia-500/20 to-purple-500/30",
  EMOTIONS: "from-violet-500/30 via-purple-500/20 to-pink-500/30",
  MONEY: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  OFFICE: "from-slate-500/30 via-blue-500/20 to-indigo-500/30",
  DINING: "from-orange-500/30 via-amber-500/20 to-yellow-500/25",
  TRANSPORT: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
  PHONE: "from-purple-500/30 via-violet-500/20 to-blue-500/30",
  NEWS: "from-slate-500/30 via-zinc-500/20 to-purple-500/30",
  GOALS: "from-amber-500/30 via-yellow-500/20 to-orange-500/30",
  JOURNAL: "from-indigo-500/30 via-purple-500/20 to-pink-500/30",
  DREAMS: "from-purple-500/30 via-fuchsia-500/20 to-pink-500/30",
};

export function LessonView({ lesson }: { lesson: Lesson }) {
  const half = Math.ceil(lesson.vocab.length / 2);
  const vocabLeft = lesson.vocab.slice(0, half);
  const vocabRight = lesson.vocab.slice(half);
  const sHalf = Math.ceil(lesson.sentences.length / 2);
  const sentLeft = lesson.sentences.slice(0, sHalf);
  const sentRight = lesson.sentences.slice(sHalf);
  const idStr = String(lesson.id).padStart(2, "0");
  const prevId = lesson.id > 1 ? lesson.id - 1 : null;
  const nextId = lesson.id < lessons.length ? lesson.id + 1 : null;
  const gradient = TOPIC_GRADIENTS[lesson.category] ?? "from-purple-500/30 to-blue-500/30";

  return (
    <main className="flex-1 px-5 md:px-10 py-8 max-w-[1280px] w-full mx-auto">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="tag-chip primary">LESSON {idStr}</span>
        <span className="tag-chip">LEVEL A1</span>
        <span className="tag-chip">{lesson.category}</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">{lesson.titleEn}</h1>
          <div className="h-1 w-16 rounded-full bg-primary mt-3 mb-5" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
          <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">{lesson.subtitle}</p>
        </div>
        <div className="lg:text-right">
          <h2 className="arabic-text text-4xl md:text-5xl font-bold leading-tight" style={{ textAlign: "right" }}>{lesson.titleAr}</h2>
          <div className="h-1 w-16 rounded-full bg-primary mt-3 ml-auto" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
          <figure className="mt-5">
            {lesson.id === 1 ? (
              <img src={morningImg} alt={lesson.caption} width={1280} height={800}
                className="rounded-2xl border border-border w-full max-w-md object-cover aspect-[16/10]"
                style={{ boxShadow: "var(--shadow-card)" }} />
            ) : (
              <div className={`rounded-2xl border border-border w-full max-w-md aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.25),transparent_50%)]" />
                <div className="relative text-center px-6">
                  <div className="text-[10px] tracking-[0.3em] font-bold text-white/70 mb-2">{lesson.category}</div>
                  <div className="text-4xl font-extrabold text-white/95 tracking-tight">{lesson.titleEn}</div>
                </div>
              </div>
            )}
            <figcaption className="text-sm text-muted-foreground text-center mt-2">{lesson.caption}</figcaption>
          </figure>
        </div>
      </div>

      <div className="mb-5">
        <LessonSection num="01" title="Vocabulary" arabicTitle="المفردات" icon={BookOpen}>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2.5">{vocabLeft.map((v) => <BilingualRow key={v.en} english={v.en} arabic={v.ar} />)}</div>
            <div className="space-y-2.5">{vocabRight.map((v) => <BilingualRow key={v.en} english={v.en} arabic={v.ar} />)}</div>
          </div>
        </LessonSection>
      </div>

      <div className="mb-5">
        <LessonSection num="02" title="Key Sentences" arabicTitle="الجمل" icon={MessageSquare}>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2.5">{sentLeft.map((s) => <BilingualRow key={s} english={s} arabic="" bullet />)}</div>
            <div className="space-y-2.5">{sentRight.map((s) => <BilingualRow key={s} english={s} arabic="" bullet />)}</div>
          </div>
        </LessonSection>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <LessonSection num="03" title="Conversation" arabicTitle="محادثة" icon={Users}>
          <div className="space-y-2.5">
            {lesson.conversation.map((c, i) => <BilingualRow key={i} english={`${c.p}: ${c.t}`} arabic="" prefix={c.p} />)}
          </div>
        </LessonSection>
        <LessonSection num="04" title="Short Story" arabicTitle="قصة قصيرة" icon={BookOpen}>
          <div className="space-y-2.5">
            {lesson.story.map((s, i) => <BilingualRow key={i} english={s} arabic="" />)}
          </div>
        </LessonSection>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <LessonSection num="05" title="Grammar" arabicTitle="القاعدة" icon={GraduationCap}>
          <div className="inner-card rounded-xl p-4 border-l-4 relative" style={{ borderLeftColor: "var(--color-gold)" }}>
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--color-primary-glow)" }}>{lesson.grammar.titleEn}</h4>
                <ul className="space-y-1 text-sm">{lesson.grammar.lines.map((l, i) => <li key={i}>{l}</li>)}</ul>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <span className="arabic-text text-sm" style={{ color: "var(--color-gold)" }}>{lesson.grammar.titleAr}</span>
                <PlayButton />
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection num="06" title="Writing Practice" arabicTitle="تدريب الكتابة" icon={PenLine}>
          <div className="space-y-3">
            <div className="flex justify-between gap-3">
              <p className="text-sm">{lesson.writing.en}</p>
              <p className="arabic-text text-sm" style={{ color: "var(--color-primary-glow)" }}>{lesson.writing.ar}</p>
            </div>
            <textarea placeholder="Start writing..." rows={3}
              className="w-full inner-card rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 transition resize-none placeholder:text-muted-foreground" />
          </div>
        </LessonSection>
      </div>

      <div className="glass-card rounded-2xl p-4 md:p-5 flex items-center gap-4 mb-8">
        <span className="section-num shrink-0"><Lightbulb className="w-4 h-4" /></span>
        <span className="font-bold tracking-wider text-sm">TIP</span>
        <span className="flex-1 text-sm">{lesson.tip.en}</span>
        <span className="arabic-text text-sm hidden md:block">{lesson.tip.ar}</span>
        <PlayButton />
      </div>

      <div className="flex items-center justify-between gap-4 pb-8">
        {prevId ? (
          <Link to="/lesson/$id" params={{ id: String(prevId) }} className="inner-card rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm hover:border-primary/50 transition">
            <ArrowLeft className="w-4 h-4" /> Previous
          </Link>
        ) : (
          <Link to="/" className="inner-card rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm hover:border-primary/50 transition">
            <ArrowLeft className="w-4 h-4" /> All Lessons
          </Link>
        )}
        <div className="flex-1 flex items-center gap-3 max-w-md mx-auto">
          <div className="flex-1 h-1.5 rounded-full bg-card overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${(lesson.id / lessons.length) * 100}%`, background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--color-primary)" }} />
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{lesson.id} / {lessons.length}</span>
        </div>
        {nextId ? (
          <Link to="/lesson/$id" params={{ id: String(nextId) }} className="rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Next <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link to="/" className="rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Finish <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </main>
  );
}

export { TOPIC_GRADIENTS };
