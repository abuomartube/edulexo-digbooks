import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, MessageSquare, Users, GraduationCap, PenLine, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { LessonSection, BilingualRow } from "@/components/LessonSection";
import { PlayButton } from "@/components/PlayButton";
import morningImg from "@/assets/morning-routine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lesson 01 · Morning Routine — EduLexo" },
      { name: "description", content: "Learn English daily routine vocabulary, sentences, conversation, and grammar — bilingual A1 lesson." },
    ],
  }),
  component: LessonPage,
});

const vocabLeft = [
  { en: "wake up", ar: "يستيقظ" },
  { en: "breakfast", ar: "فطور" },
  { en: "shower", ar: "استحمام" },
];
const vocabRight = [
  { en: "brush teeth", ar: "ينظف الأسنان" },
  { en: "coffee", ar: "قهوة" },
  { en: "get dressed", ar: "يرتدي الملابس" },
];

const sentencesLeft = [
  "I wake up at seven o'clock.",
  "I take a shower every morning.",
];
const sentencesRight = [
  "I drink a cup of coffee.",
  "I eat breakfast with my family.",
];

const convo = [
  { p: "A", t: "Good morning! Did you sleep well?" },
  { p: "B", t: "Yes, thank you. And you?" },
  { p: "A", t: "I'm fine. Do you want coffee?" },
  { p: "B", t: "Yes, please. With a little sugar." },
];

const story = [
  "Omar wakes up at six every day.",
  "He drinks coffee and reads the news.",
  "Then he takes a shower and gets dressed.",
  "At eight, he leaves the house for work.",
];

function LessonPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-5 md:px-10 py-8 max-w-[1280px] w-full mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="tag-chip primary">LESSON 01</span>
            <span className="tag-chip">LEVEL A1</span>
            <span className="tag-chip">DAILY LIFE</span>
          </div>

          {/* Hero */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Morning Routine
              </h1>
              <div className="h-1 w-16 rounded-full bg-primary mt-3 mb-5" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
              <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Talk about what you do every morning — simple words, real life.
              </p>
            </div>
            <div className="lg:text-right">
              <h2 className="arabic-text text-4xl md:text-5xl font-bold leading-tight" style={{ textAlign: "right" }}>
                الروتين الصباحي
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary mt-3 ml-auto" style={{ boxShadow: "0 0 16px var(--color-primary)" }} />
              <figure className="mt-5">
                <img
                  src={morningImg}
                  alt="A calm start to the day"
                  width={1280}
                  height={800}
                  className="rounded-2xl border border-border w-full max-w-md object-cover aspect-[16/10]"
                  style={{ boxShadow: "var(--shadow-card)" }}
                />
                <figcaption className="text-sm text-muted-foreground text-center mt-2">A calm start to the day.</figcaption>
              </figure>
            </div>
          </div>

          {/* Vocabulary */}
          <div className="mb-5">
            <LessonSection num="01" title="Vocabulary" arabicTitle="المفردات" icon={BookOpen}>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2.5">
                  {vocabLeft.map((v) => (
                    <BilingualRow key={v.en} english={v.en} arabic={v.ar} />
                  ))}
                </div>
                <div className="space-y-2.5">
                  {vocabRight.map((v) => (
                    <BilingualRow key={v.en} english={v.en} arabic={v.ar} />
                  ))}
                </div>
              </div>
            </LessonSection>
          </div>

          {/* Key Sentences */}
          <div className="mb-5">
            <LessonSection num="02" title="Key Sentences" arabicTitle="الجمل" icon={MessageSquare}>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2.5">
                  {sentencesLeft.map((s) => (
                    <BilingualRow key={s} english={s} arabic="" bullet />
                  ))}
                </div>
                <div className="space-y-2.5">
                  {sentencesRight.map((s) => (
                    <BilingualRow key={s} english={s} arabic="" bullet />
                  ))}
                </div>
              </div>
            </LessonSection>
          </div>

          {/* Conversation + Short Story */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <LessonSection num="03" title="Conversation" arabicTitle="محادثة" icon={Users}>
              <div className="space-y-2.5">
                {convo.map((c, i) => (
                  <BilingualRow key={i} english={`${c.p}: ${c.t}`} arabic="" prefix={c.p} />
                ))}
              </div>
            </LessonSection>
            <LessonSection num="04" title="Short Story" arabicTitle="قصة قصيرة" icon={BookOpen}>
              <div className="space-y-2.5">
                {story.map((s, i) => (
                  <BilingualRow key={i} english={s} arabic="" />
                ))}
              </div>
            </LessonSection>
          </div>

          {/* Grammar + Writing */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <LessonSection num="05" title="Grammar" arabicTitle="القاعدة" icon={GraduationCap}>
              <div className="inner-card rounded-xl p-4 border-l-4 border-l-gold relative" style={{ borderLeftColor: "var(--color-gold)" }}>
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: "var(--color-primary-glow)" }}>
                      Present Simple — I / You / We
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>I wake up.</li>
                      <li>You drink coffee.</li>
                      <li>We eat breakfast every morning.</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <span className="arabic-text text-sm" style={{ color: "var(--color-gold)" }}>المضارع البسيط</span>
                    <PlayButton />
                  </div>
                </div>
              </div>
            </LessonSection>

            <LessonSection num="06" title="Writing Practice" arabicTitle="تدريب الكتابة" icon={PenLine}>
              <div className="space-y-3">
                <div className="flex justify-between gap-3">
                  <p className="text-sm">Write 4 sentences about your morning.</p>
                  <p className="arabic-text text-sm" style={{ color: "var(--color-primary-glow)" }}>اكتب أربع جمل عن صباحك.</p>
                </div>
                <textarea
                  placeholder="Start writing..."
                  rows={3}
                  className="w-full inner-card rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 transition resize-none placeholder:text-muted-foreground"
                />
              </div>
            </LessonSection>
          </div>

          {/* Tip */}
          <div className="glass-card rounded-2xl p-4 md:p-5 flex items-center gap-4 mb-8">
            <span className="section-num shrink-0"><Lightbulb className="w-4 h-4" /></span>
            <span className="font-bold tracking-wider text-sm">TIP</span>
            <span className="flex-1 text-sm">Say each sentence aloud while doing the action.</span>
            <span className="arabic-text text-sm hidden md:block">.اقرأ كل جملة بصوت مرتفع</span>
            <PlayButton />
          </div>

          {/* Footer nav */}
          <div className="flex items-center justify-between gap-4 pb-8">
            <button className="inner-card rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm hover:border-primary/50 transition">
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            <div className="flex-1 flex items-center gap-3 max-w-md mx-auto">
              <div className="flex-1 h-1.5 rounded-full bg-card overflow-hidden">
                <div className="h-full w-[5%] rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--color-primary)" }} />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">1 / 30</span>
            </div>
            <button className="rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
