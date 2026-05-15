import { Home, BookOpen, PenLine, Type, BarChart3, TrendingUp, NotebookPen, Settings, Moon } from "lucide-react";

const items = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Lessons", active: true },
  { icon: PenLine, label: "Practice" },
  { icon: Type, label: "Vocabulary" },
  { icon: BarChart3, label: "Review" },
  { icon: TrendingUp, label: "Progress" },
  { icon: NotebookPen, label: "Notebook" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-20 shrink-0 py-6 px-2 border-r border-border bg-sidebar/60 backdrop-blur-xl">
      <nav className="flex flex-col gap-1 w-full">
        {items.map((it) => (
          <button key={it.label} className={`nav-item w-full ${it.active ? "active" : ""}`}>
            <it.icon className="w-5 h-5" strokeWidth={1.8} />
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <button className="nav-item w-full">
        <Moon className="w-5 h-5" strokeWidth={1.8} />
        <span>Dark Mode</span>
      </button>
    </aside>
  );
}
