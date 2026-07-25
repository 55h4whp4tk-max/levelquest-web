"use client";

import TopBar from "@/components/TopBar";
import { useApp } from "@/lib/AppStateContext";
import { levelInfo, titleForLevel, achievements } from "@/lib/data";

export default function AchievementsPage() {
  const { state, loaded } = useApp();
  const { level, into, need } = levelInfo(state.totalXp);
  const title = titleForLevel(level);
  const gotCount = achievements.filter((a) => a.got).length;

  if (!loaded) return null;

  return (
    <>
      <TopBar level={level} into={into} need={need} streak={state.streak} title={title} />
      <div style={{ padding: "18px" }}>
        <div className="flex justify-between items-baseline mb-3.5">
          <h1 className="font-display text-lg font-bold">Achievements</h1>
          <span className="text-xs font-extrabold text-textMuted">
            {gotCount}/{achievements.length}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`bg-card border border-cardBorder rounded-2xl py-3.5 px-2.5 text-center ${
                a.got ? "" : "opacity-50"
              }`}
            >
              <div className="text-3xl">{a.got ? a.icon : "🔒"}</div>
              <div className="text-xs font-extrabold mt-1.5">{a.name}</div>
              <div className="text-[10.5px] text-textMuted mt-0.5">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}