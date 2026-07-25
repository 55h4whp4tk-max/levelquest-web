"use client";

import { createContext, useContext } from "react";
import { useAppState, AppState } from "./useAppState";

type Ctx = {
  state: AppState;
  loaded: boolean;
  toggleQuest: (id: number) => void;
  setAvatar: (avatar: string) => void;
  setTheme: (themeName: string) => void;
};

const AppStateContext = createContext<Ctx | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const value = useAppState();
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useApp must be used inside AppStateProvider");
  return ctx;
}