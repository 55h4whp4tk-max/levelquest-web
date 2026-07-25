import { Flame } from "lucide-react";
import XpBar from "./XpBar";

export default function TopBar({
  level,
  into,
  need,
  streak,
  title,
}: {
  level: number;
  into: number;
  need: number;
  streak: number;
  title: string;
}) {
  return (
    <div className="bg-ink text-parchment px-5 pt-6 pb-7 rounded-b-xl2">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider opacity-70">{title}</div>
          <div className="font-display text-2xl font-bold mt-0.5">Level {level}</div>
        </div>
        <div className="flex items-center gap-1.5 bg-coral/20 border border-coral/40 rounded-full px-3 py-1.5">
          <Flame size={16} className="text-orange-300" fill="currentColor" />
          <span className="font-extrabold text-sm">{streak}</span>
        </div>
      </div>
      <div className="mt-3.5">
        <XpBar into={into} need={need} />
        <div className="text-[11px] opacity-65 mt-1.5 font-semibold">
          {into} / {need} XP to next level
        </div>
      </div>
    </div>
  );
}