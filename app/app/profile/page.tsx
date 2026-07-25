"use client";

import TopBar from "@/components/TopBar";
import { useApp } from "@/lib/AppStateContext";
import { levelInfo, titleForLevel, avatarOptions, themeOptions } from "@/lib/data";

export default function ProfilePage() {
  const { state, loaded, setAvatar, setTheme } = useApp();
  const { level, into, need } = levelInfo(state.totalXp);
  const title = titleForLevel(level);
  const activeColor = themeOptions.find((t) => t.name === state.themeName)!.color;

  if (!loaded) return null;

  return (
    <>
      <TopBar level={level} into={into} need={need} streak={state.streak} title={title} />
      <div style={{ padding: "18px" }}>
        <h1 className="font-display text-lg font-bold mb-4">Your Profile</h1>

        <div className="bg-card border border-cardBorder rounded-[18px] p-4.5 text-center mb-5" style={{ padding: 18 }}>
          <div
            className="w-18 h-18 rounded-full border-[3px] flex items-center justify-center mx-auto mb-2.5 text-4xl"
            style={{ width: 72, height: 72, background: activeColor + "22", borderColor: activeColor }}
          >
            {state.avatar}
          </div>
          <div className="font-display text-lg font-bold">{title}</div>
          <div className="text-xs font-bold text-textMuted mt-0.5">
            Level {level} · {state.totalXp} XP total
          </div>
          <div className="flex justify-center gap-5 mt-3.5">
            <div>
              <div className="text-sm font-extrabold">{state.streak} 🔥</div>
              <div className="text-[10.5px] text-textMuted mt-0.5">day streak</div>
            </div>
            <div>
              <div className="text-sm font-extrabold">0 🏆</div>
              <div className="text-[10.5px] text-textMuted mt-0.5">achievements</div>
            </div>
            <div>
              <div className="text-sm font-extrabold">1 🗺️</div>
              <div className="text-[10.5px] text-textMuted mt-0.5">worlds found</div>
            </div>
          </div>
        </div>

        <div className="text-xs font-extrabold mb-2">Choose your avatar</div>
        <div className="flex flex-wrap gap-2 mb-4.5" style={{ marginBottom: 18 }}>
          {avatarOptions.map((a) => (
            <button
              key={a}
              onClick={() => setAvatar(a)}
              className={`w-11 h-11 rounded-xl border bg-card text-xl flex items-center justify-center ${
                state.avatar === a ? "border-2 border-coral" : "border-cardBorder"
              }`}
              style={{ width: 44, height: 44 }}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="text-xs font-extrabold mb-2">Theme color</div>
        <div className="flex flex-wrap gap-2">
          {themeOptions.map((t) => (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-card text-xs font-extrabold border"
              style={{ borderColor: state.themeName === t.name ? t.color : "#ECE0C4" }}
            >
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: t.color }} />
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}