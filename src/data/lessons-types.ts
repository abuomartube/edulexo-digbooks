export type Level = "A1" | "A2" | "B1";
export type VocabPair = { en: string; ar: string };
export type ConvoLine = { p: "A" | "B"; t: string; ar: string };
export type BiText = { en: string; ar: string };

export type Lesson = {
  id: number;
  level: Level;
  slug: string;
  category: string;
  titleEn: string;
  titleAr: string;
  subtitle: string;
  caption: string;
  vocab: VocabPair[];
  sentences: BiText[];
  conversation: ConvoLine[];
  story: BiText[];
  grammar: { titleEn: string; titleAr: string; lines: string[] };
  writing: { en: string; ar: string };
  tip: { en: string; ar: string };
};

export const LEVEL_META: Record<Level, { en: string; ar: string; tagline: string }> = {
  A1: { en: "Beginner", ar: "المبتدئ", tagline: "Start from zero — daily life basics." },
  A2: { en: "Elementary", ar: "الابتدائي 2", tagline: "Build on the basics — past, plans, comparisons." },
  B1: { en: "Intermediate", ar: "المتوسط", tagline: "Real conversations — opinions, stories, conditionals." },
};
