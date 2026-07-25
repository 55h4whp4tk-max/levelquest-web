import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["600", "700", "800"],
});

const siteUrl = "https://levelquest.app"; // TODO: replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LevelQuest — Turn Everyday Life Into an Adventure",
    template: "%s · LevelQuest",
  },
  description:
    "LevelQuest is a gamified self-improvement app. Complete daily quests in health, learning, kindness, and more, earn XP, level up, and explore an adventure map as you build real habits.",
  keywords: [
    "habit tracker",
    "gamified habits",
    "self improvement app",
    "daily quests",
    "productivity game",
    "XP habit tracker",
  ],
  applicationName: "LevelQuest",
  manifest: "/manifest.json",
  openGraph: {
    title: "LevelQuest — Turn Everyday Life Into an Adventure",
    description:
      "Complete daily quests, earn XP, level up, and explore a whole world as you build real habits.",
    url: siteUrl,
    siteName: "LevelQuest",
    locale: "en_US",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LevelQuest",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F2340",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="font-body bg-parchment text-textPrimary antialiased">
        {children}
      </body>
    </html>
  );
}