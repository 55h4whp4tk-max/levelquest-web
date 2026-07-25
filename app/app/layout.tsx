import { AppStateProvider } from "@/lib/AppStateContext";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: "Your Quests",
  robots: { index: false },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppStateProvider>
      <div className="max-w-[420px] mx-auto min-h-screen flex flex-col bg-parchment shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <div className="flex-1">{children}</div>
        <BottomNav />
      </div>
    </AppStateProvider>
  );
}