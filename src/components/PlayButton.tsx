import { Play } from "lucide-react";

export function PlayButton({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-8 h-8" : "w-9 h-9";
  return (
    <button aria-label="Play audio" className={`play-btn ${dim}`}>
      <Play className="w-3.5 h-3.5 fill-current ml-[1px]" />
    </button>
  );
}
