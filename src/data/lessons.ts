import type { Lesson } from "./lessons-types";
import { a1Lessons } from "./lessons-a1";
import { a2Lessons } from "./lessons-a2";
import { b1Lessons } from "./lessons-b1";

export type { Lesson, VocabPair, ConvoLine, Level, BiText } from "./lessons-types";
export { LEVEL_META } from "./lessons-types";

export const lessons: Lesson[] = [...a1Lessons, ...a2Lessons, ...b1Lessons];

export const getLesson = (id: number) => lessons.find((l) => l.id === id);
