// Translate English sentences/conversation/story for every lesson into Arabic
// using the Lovable AI Gateway (free Gemini 2.5 Flash).
// Output: scripts/translations.json keyed by lesson id.
import { lessons } from "../src/data/lessons";
import fs from "node:fs";
import path from "node:path";

const API_KEY = process.env.LOVABLE_API_KEY;
if (!API_KEY) throw new Error("LOVABLE_API_KEY missing");

const OUT = path.resolve("scripts/translations.json");
const existing: Record<string, { sentences: string[]; conversation: string[]; story: string[] }> = fs.existsSync(OUT)
  ? JSON.parse(fs.readFileSync(OUT, "utf8"))
  : {};

async function translateLesson(l: typeof lessons[number]) {
  const payload = {
    sentences: l.sentences,
    conversation: l.conversation.map((c) => c.t),
    story: l.story,
  };
  const sys = `You are a professional Arabic translator for an English-learning textbook (Arabic-speaking learners). Translate the given English strings into clear, natural Modern Standard Arabic. Keep meaning, tone, names, and order exactly. Return ONLY valid JSON with the same shape: { "sentences": string[], "conversation": string[], "story": string[] }. Do not add commentary or markdown.`;
  const user = `Lesson: ${l.titleEn} (${l.level}, ${l.category}).\nTranslate to Arabic, preserving array lengths and order:\n${JSON.stringify(payload, null, 2)}`;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: sys },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on lesson ${l.id}: ${await res.text()}`);
  const j = await res.json();
  const content = j.choices?.[0]?.message?.content;
  const parsed = JSON.parse(content);
  if (
    !Array.isArray(parsed.sentences) || parsed.sentences.length !== l.sentences.length ||
    !Array.isArray(parsed.conversation) || parsed.conversation.length !== l.conversation.length ||
    !Array.isArray(parsed.story) || parsed.story.length !== l.story.length
  ) {
    throw new Error(`Bad shape on lesson ${l.id}: ${content}`);
  }
  return parsed;
}

async function run() {
  const concurrency = 6;
  const queue = lessons.filter((l) => !existing[l.id]);
  console.log(`Translating ${queue.length} / ${lessons.length} lessons...`);
  let done = 0;
  async function worker() {
    while (queue.length) {
      const l = queue.shift()!;
      try {
        const t = await translateLesson(l);
        existing[l.id] = t;
        done++;
        if (done % 5 === 0 || queue.length === 0) {
          fs.writeFileSync(OUT, JSON.stringify(existing, null, 2));
          console.log(`  saved ${done} (remaining ${queue.length})`);
        }
      } catch (e) {
        console.error(`Lesson ${l.id} failed:`, (e as Error).message);
        queue.push(l); // retry later
        await new Promise((r) => setTimeout(r, 1500));
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  fs.writeFileSync(OUT, JSON.stringify(existing, null, 2));
  console.log("Done.");
}

run();
