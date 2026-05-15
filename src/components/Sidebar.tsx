import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, PenLine, Type, BarChart3, TrendingUp, NotebookPen, Settings, Moon } from "lucide-react";

const items = [
  { icon: Home, label: "Home", to: "/" },
  { icon: BookOpen, label: "Lessons", to: "/" },
  { icon: PenLine, label: "Practice", to: "/" },
  { icon: Type, label: "Vocabulary", to: "/" },
  { icon: BarChart3, label: "Review", to: "/" },
  { icon: TrendingUp, label: "Progress", to: "/" },
  { icon: NotebookPen, label: "Notebook", to: "/" },
  { icon: Settings, label: "Settings", to: "/" },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-20 shrink-0 py-6 px-2 border-r border-border bg-sidebar/60 backdrop-blur-xl sticky top-0 h-screen">
      <nav className="flex flex-col gap-1 w-full">
        {items.map((it, i) => {
          const active = (it.label === "Home" && path === "/") || (it.label === "Lessons" && path.startsWith("/lesson"));
          return (
            <Link key={i} to={it.to} className={`nav-item w-full ${active ? "active" : ""}`}>
              <it.icon className="w-5 h-5" strokeWidth={1.8} />
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>
      <button className="nav-item w-full">
        <Moon className="w-5 h-5" strokeWidth={1.8} />
        <span>Dark Mode</span>
      </button>
    </aside>
  );
}
