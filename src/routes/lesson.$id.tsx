import { createFileRoute, notFound } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { LessonView } from "@/components/LessonView";
import { getLesson } from "@/data/lessons";

export const Route = createFileRoute("/lesson/$id")({
  head: ({ params }) => {
    const lesson = getLesson(Number(params.id));
    const title = lesson ? `Lesson ${String(lesson.id).padStart(2, "0")} · ${lesson.titleEn} — EduLexo` : "Lesson — EduLexo";
    return {
      meta: [
        { title },
        { name: "description", content: lesson?.subtitle ?? "EduLexo English lesson." },
      ],
    };
  },
  loader: ({ params }) => {
    const lesson = getLesson(Number(params.id));
    if (!lesson) throw notFound();
    return { lesson };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Lesson not found</h1>
        <a href="/" className="text-primary underline">Back to lessons</a>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground mt-2">{error.message}</p>
      </div>
    </div>
  ),
  component: LessonRoute,
});

function LessonRoute() {
  const { lesson } = Route.useLoaderData();
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <LessonView lesson={lesson} />
      </div>
    </div>
  );
}
