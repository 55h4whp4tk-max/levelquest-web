"use client";

import { Lock } from "lucide-react";
import TopBar from "@/components/TopBar";
import { useApp } from "@/lib/AppStateContext";
import { levelInfo, titleForLevel, world } from "@/lib/data";

export default function MapPage() {
  const { state, loaded } = useApp();
  const { level, into, need } = levelInfo(state.totalXp);
  const title = titleForLevel(level);
  const nextLocked = world.find((w) => level < w.levelReq);

  if (!loaded) return null;

  return (
    <>
      <TopBar level={level} into={into} need={need} streak={state.streak} title={title} />
      <div style={{ padding: "18px" }}>
        <h1 className="font-display text-lg font-bold">Adventure Map</h1>
        <p className="text-xs text-textMuted mt-1">Earn XP to unlock the next world</p>

        <div className="mt-5">
          {world.map((w) => {
            const unlocked = level >= w.levelReq;
            const isCurrent = unlocked && nextLocked
              ? w.id === nextLocked.id - 1
              : unlocked && w.id === world[world.length - 1].id;

            return (
              <div key={w.id} className="flex items-center gap-3.5 mb-5">
                <div
                  className={`w-13 h-13 rounded-full flex items-center justify-center border-2 ${
                    isCurrent ? "border-coral border-[3px]" : "border-[#DCCFA6]"
                  } ${unlocked ? "bg-card" : "bg-[#EDE6D4] opacity-70"}`}
                  style={{ width: 52, height: 52 }}
                >
                  {unlocked ? (
                    <span className="text-2xl">{w.icon}</span>
                  ) : (
                    <Lock size={18} color="#B4A883" />
                  )}
                </div>
                <div>
                  <div className={`text-sm font-extrabold ${unlocked ? "text-textPrimary" : "text-[#B4A883]"}`}>
                    {w.name}
                  </div>
                  <div className="text-[11px] font-bold text-textMuted mt-0.5">
                    {unlocked ? (isCurrent ? "You are here" : "Unlocked") : `Unlocks at level ${w.levelReq}`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}