"use client";

import { useMemo } from "react";
import TopBar from "@/components/TopBar";
import QuestCard from "@/components/QuestCard";
import { useApp } from "@/lib/AppStateContext";
import { levelInfo, titleForLevel } from "@/lib/data";

export default function QuestsPage() {
  const { state, loaded, toggleQuest } = useApp();
  const { level, into, need } = levelInfo(state.totalXp);
  const title = titleForLevel(level);

  const grouped = useMemo(() => {
    const g: Record<string, typeof state.quests> = {};
    state.quests.forEach((q) => {
      g[q.cat] = g[q.cat] || [];
      g[q.cat].push(q);
    });
    return g;
  }, [state.quests]);

  const doneCount = state.quests.filter((q) => q.done).length;

  if (!loaded) return null;

  return (
    <>
      <TopBar level={level} into={into} need={need} streak={state.streak} title={title} />
      <div className="px-4.5 pt-4 pb-4" style={{ padding: "18px" }}>
        <div className="flex justify-between items-baseline mb-3.5">
          <h1 className="font-display text-lg font-bold">Today&apos;s Quests</h1>
          <span className="text-xs font-extrabold text-textMuted">
            {doneCount}/{state.quests.length} done
          </span>
        </div>
        {Object.values(grouped).map((list) =>
          list.map((q) => <QuestCard key={q.id} quest={q} onToggle={toggleQuest} />)
        )}
      </div>
    </>
  );
}