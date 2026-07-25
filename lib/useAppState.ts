"use client";

import { useEffect, useState } from "react";
import { initialQuests, Quest } from "./data";

const STORAGE_KEY = "levelquest:v1";

export type AppState = {
  quests: Quest[];
  totalXp: number;
  streak: number;
  avatar: string;
  themeName: string;
};

const defaultState: AppState = {
  quests: initialQuests,
  totalXp: 0,
  streak: 0,
  avatar: "🦊",
  themeName: "Ember",
};

export function useAppState() {
  const [state, setState] = useState<AppState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...defaultState, ...JSON.parse(raw) });
    } catch {
      // ignore corrupted storage
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore write failures (e.g. private browsing)
    }
  }, [state, loaded]);

  const toggleQuest = (id: number) => {
    setState((s) => {
      const quest = s.quests.find((q) => q.id === id)!;
      const delta = quest.done ? -quest.xp : quest.xp;
      return {
        ...s,
        quests: s.quests.map((q) => (q.id === id ? { ...q, done: !q.done } : q)),
        totalXp: Math.max(0, s.totalXp + delta),
      };
    });
  };

  const setAvatar = (avatar: string) => setState((s) => ({ ...s, avatar }));
  const setTheme = (themeName: string) => setState((s) => ({ ...s, themeName }));

  return { state, loaded, toggleQuest, setAvatar, setTheme };
}