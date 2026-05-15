// Regenerate lessons-a1.ts, lessons-a2.ts, lessons-b1.ts with bilingual sentences/conversation/story.
import fs from "node:fs";
import path from "node:path";
import { lessons } from "../src/data/lessons";

const tr = JSON.parse(fs.readFileSync(path.resolve("scripts/translations.json"), "utf8")) as Record<
  string,
  { sentences: string[]; conversation: string[]; story: string[] }
>;

const j = (v: unknown) => JSON.stringify(v);

function lessonLiteral(l: typeof lessons[number]): string {
  const t = tr[String(l.id)];
  if (!t) throw new Error(`No translation for ${l.id}`);
  const sentences = l.sentences.map((en, i) => ({ en: en as unknown as string, ar: t.sentences[i] }));
  const story = l.story.map((en, i) => ({ en: en as unknown as string, ar: t.story[i] }));
  const conversation = l.conversation.map((c, i) => ({ p: c.p, t: c.t, ar: t.conversation[i] }));
  return `  {
    id: ${l.id}, level: ${j(l.level)}, slug: ${j(l.slug)}, category: ${j(l.category)},
    titleEn: ${j(l.titleEn)}, titleAr: ${j(l.titleAr)},
    subtitle: ${j(l.subtitle)},
    caption: ${j(l.caption)},
    vocab: ${j(l.vocab)},
    sentences: ${j(sentences)},
    conversation: ${j(conversation)},
    story: ${j(story)},
    grammar: ${j(l.grammar)},
    writing: ${j(l.writing)},
    tip: ${j(l.tip)},
  }`;
}

function emit(level: "A1" | "A2" | "B1", varName: string, file: string) {
  const items = lessons.filter((l) => l.level === level).map(lessonLiteral).join(",\n");
  const content = `import type { Lesson } from "./lessons-types";\n\nexport const ${varName}: Lesson[] = [\n${items},\n];\n`;
  fs.writeFileSync(path.resolve(file), content);
  console.log(`wrote ${file}`);
}

emit("A1", "a1Lessons", "src/data/lessons-a1.ts");
emit("A2", "a2Lessons", "src/data/lessons-a2.ts");
emit("B1", "b1Lessons", "src/data/lessons-b1.ts");

// Rewrite lessons.ts as simple aggregator
const aggregator = `import type { Lesson } from "./lessons-types";
import { a1Lessons } from "./lessons-a1";
import { a2Lessons } from "./lessons-a2";
import { b1Lessons } from "./lessons-b1";

export type { Lesson, VocabPair, ConvoLine, Level, BiText } from "./lessons-types";
export { LEVEL_META } from "./lessons-types";

export const lessons: Lesson[] = [...a1Lessons, ...a2Lessons, ...b1Lessons];

export const getLesson = (id: number) => lessons.find((l) => l.id === id);
`;
fs.writeFileSync(path.resolve("src/data/lessons.ts"), aggregator);
console.log("wrote src/data/lessons.ts");
