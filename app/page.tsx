import Link from "next/link";
import {
  Compass, Flame, Map, Trophy, Sparkles, Users, Palette,
  Dumbbell, BookOpen, Heart, Target, PiggyBank, Sun,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LevelQuest — Turn Everyday Life Into an Adventure",
  alternates: { canonical: "/" },
};

const categories = [
  { icon: Dumbbell, label: "Health & Fitness", color: "#E8604C", bg: "#FDEAE6" },
  { icon: BookOpen, label: "Learning", color: "#2F6E9E", bg: "#E7F0F7" },
  { icon: Heart, label: "Kindness", color: "#D14C7A", bg: "#FBE7EE" },
  { icon: Target, label: "Productivity", color: "#3E7D5C", bg: "#E8F2EB" },
  { icon: Palette, label: "Creativity", color: "#8A5CC7", bg: "#F0E9FA" },
  { icon: PiggyBank, label: "Money & Saving", color: "#C4941A", bg: "#FBF1DE" },
  { icon: Sun, label: "Mindfulness", color: "#3C9C9C", bg: "#E6F4F4" },
];

const features = [
  {
    icon: Compass,
    title: "Daily Quests",
    body: "Every day brings a fresh set of quests across seven categories, sized to fit your life.",
  },
  {
    icon: Sparkles,
    title: "XP & Levels",
    body: "Every quest completed earns XP. Level up to unlock titles, badges, and cosmetic rewards.",
  },
  {
    icon: Map,
    title: "Adventure Map",
    body: "Travel across an interactive world as you progress — forests, islands, cities, and beyond.",
  },
  {
    icon: Flame,
    title: "Streaks",
    body: "Keep your daily streak alive. Longer streaks unlock bonus rewards along the way.",
  },
  {
    icon: Trophy,
    title: "Achievements",
    body: "Hundreds of achievements reward you for trying new things and staying consistent.",
  },
  {
    icon: Users,
    title: "Positive Community",
    body: "Celebrate milestones and encourage others in a community built around positivity, not popularity.",
  },
];

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "LevelQuest",
            applicationCategory: "LifestyleApplication",
            operatingSystem: "Any",
            description:
              "A gamified self-improvement app. Complete daily quests, earn XP, level up, and explore an adventure map as you build real habits.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <header className="max-w-5xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="font-display text-xl font-bold text-ink">LevelQuest</div>
        <Link
          href="/app"
          className="bg-ink text-parchment text-sm font-extrabold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Start your quest
        </Link>
      </header>

      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16 text-center">
        <div className="inline-flex items-center gap-1.5 bg-cardBorder/40 border border-cardBorder rounded-full px-3 py-1 text-xs font-bold text-textMuted mb-6">
          <Sparkles size={13} /> Free to start · No pay-to-win
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight max-w-3xl mx-auto">
          Turn everyday life into an adventure
        </h1>
        <p className="text-textMuted text-base sm:text-lg mt-5 max-w-xl mx-auto font-semibold">
          LevelQuest turns habits and personal growth into daily quests. Earn XP,
          level up, and explore a whole world — instead of staring at another
          boring checklist.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/app"
            className="bg-coral text-white text-sm font-extrabold px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Start your first quest — it&apos;s free
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 border border-cardBorder bg-card rounded-full pl-2.5 pr-4 py-2"
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: c.bg }}
              >
                <c.icon size={14} color={c.color} />
              </span>
              <span className="text-xs font-bold text-textPrimary">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-display text-2xl font-bold text-ink text-center mb-10">
          Everything a good adventure needs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-cardBorder rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-parchment flex items-center justify-center mb-3">
                <f.icon size={18} className="text-coral" />
              </div>
              <div className="font-bold text-sm text-textPrimary mb-1">{f.title}</div>
              <div className="text-xs text-textMuted leading-relaxed">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-parchment">
            Your next level is one quest away
          </h2>
          <p className="text-parchment/70 text-sm font-semibold mt-3 max-w-md mx-auto">
            No install, no signup wall — jump straight in and start earning XP today.
          </p>
          <Link
            href="/app"
            className="inline-block mt-7 bg-coral text-white text-sm font-extrabold px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Open LevelQuest
          </Link>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-textMuted font-semibold">
        <span>© {new Date().getFullYear()} LevelQuest</span>
        <span>Made for people who want habits to feel like a game, not a chore.</span>
      </footer>
    </>
  );
}