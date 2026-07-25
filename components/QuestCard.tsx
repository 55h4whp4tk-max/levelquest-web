import { Check, Dumbbell, BookOpen, Heart, Target, Palette, PiggyBank, Sun } from "lucide-react";
import { categoryMeta, Quest } from "@/lib/data";

const iconMap: Record<string, any> = {
  Health: Dumbbell,
  Learning: BookOpen,
  Kindness: Heart,
  Productivity: Target,
  Creativity: Palette,
  Money: PiggyBank,
  Mindfulness: Sun,
};

export default function QuestCard({
  quest,
  onToggle,
}: {
  quest: Quest;
  onToggle: (id: number) => void;
}) {
  const meta = categoryMeta[quest.cat];
  const Icon = iconMap[quest.cat];

  return (
    <button
      onClick={() => onToggle(quest.id)}
      className={`flex items-center gap-3 w-full text-left bg-card border border-cardBorder rounded-2xl px-3.5 py-3 mb-2.5 transition-opacity ${
        quest.done ? "opacity-60" : ""
      }`}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: meta.bg }}
      >
        <Icon size={18} color={meta.color} />
      </div>
      <div className="flex-1">
        <div className={`text-sm font-bold text-textPrimary ${quest.done ? "line-through" : ""}`}>
          {quest.text}
        </div>
        <div className="text-[11px] font-bold text-textMuted mt-0.5">
          +{quest.xp} XP · {quest.cat}
        </div>
      </div>
      <div
        className={`w-6.5 h-6.5 rounded-full flex items-center justify-center shrink-0 ${
          quest.done ? "bg-moss" : "border-2 border-[#DCCFA6]"
        }`}
        style={{ width: 26, height: 26 }}
      >
        {quest.done && <Check size={15} color="#fff" strokeWidth={3} />}
      </div>
    </button>
  );
}