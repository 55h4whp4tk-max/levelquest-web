export type Quest = {
  id: number;
  cat: string;
  text: string;
  xp: number;
  done: boolean;
};

export const categoryMeta: Record<string, { color: string; bg: string }> = {
  Health: { color: "#E8604C", bg: "#FDEAE6" },
  Learning: { color: "#2F6E9E", bg: "#E7F0F7" },
  Kindness: { color: "#D14C7A", bg: "#FBE7EE" },
  Productivity: { color: "#3E7D5C", bg: "#E8F2EB" },
  Creativity: { color: "#8A5CC7", bg: "#F0E9FA" },
  Money: { color: "#C4941A", bg: "#FBF1DE" },
  Mindfulness: { color: "#3C9C9C", bg: "#E6F4F4" },
};

export const initialQuests: Quest[] = [
  { id: 1, cat: "Health", text: "Take a 15-minute walk", xp: 20, done: false },
  { id: 2, cat: "Learning", text: "Read 10 pages of a book", xp: 15, done: false },
  { id: 3, cat: "Kindness", text: "Send someone a thank-you message", xp: 15, done: false },
  { id: 4, cat: "Productivity", text: "Clear your inbox to zero", xp: 25, done: false },
  { id: 5, cat: "Creativity", text: "Sketch or write for 10 minutes", xp: 15, done: false },
  { id: 6, cat: "Money", text: "Log yesterday's spending", xp: 10, done: false },
  { id: 7, cat: "Mindfulness", text: "Breathe deeply for 3 minutes", xp: 10, done: false },
];

export type WorldStop = { id: number; name: string; levelReq: number; icon: string };

export const world: WorldStop[] = [
  { id: 1, name: "Meadow Camp", levelReq: 1, icon: "🏕️" },
  { id: 2, name: "Whispering Woods", levelReq: 2, icon: "🌲" },
  { id: 3, name: "Riverbend Village", levelReq: 4, icon: "🏘️" },
  { id: 4, name: "Highpeak Ridge", levelReq: 6, icon: "⛰️" },
  { id: 5, name: "Coral Isles", levelReq: 8, icon: "🏝️" },
  { id: 6, name: "Ember Citadel", levelReq: 10, icon: "🏰" },
  { id: 7, name: "Starfall Reach", levelReq: 13, icon: "🌌" },
];

export type Achievement = { id: number; name: string; desc: string; got: boolean; icon: string };

export const achievements: Achievement[] = [
  { id: 1, name: "First Steps", desc: "Complete your first quest", got: false, icon: "🥾" },
  { id: 2, name: "Week Warrior", desc: "Hit a 7-day streak", got: false, icon: "🔥" },
  { id: 3, name: "Bookworm", desc: "Complete 20 Learning quests", got: false, icon: "📚" },
  { id: 4, name: "Kind Soul", desc: "Complete 15 Kindness quests", got: false, icon: "💗" },
  { id: 5, name: "Early Bird", desc: "Finish a quest before 8am", got: false, icon: "🌅" },
  { id: 6, name: "Penny Wise", desc: "Log spending 10 days straight", got: false, icon: "🪙" },
  { id: 7, name: "Century Club", desc: "Reach level 10", got: false, icon: "💯" },
  { id: 8, name: "Zen Master", desc: "30 Mindfulness quests", got: false, icon: "🧘" },
];

export const avatarOptions = ["🦊", "🐺", "🦉", "🐉", "🦁", "🐢"];
export const themeOptions = [
  { name: "Ember", color: "#E8604C" },
  { name: "Moss", color: "#3E7D5C" },
  { name: "Tide", color: "#3C9C9C" },
  { name: "Dusk", color: "#8A5CC7" },
];

const titles = ["Wanderer", "Apprentice", "Pathfinder", "Ranger", "Voyager", "Champion", "Sage", "Legend"];

export function xpForLevel(level: number): number {
  return 80 + (level - 1) * 30;
}

export function levelInfo(totalXp: number) {
  let level = 1;
  let remaining = totalXp;
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level += 1;
  }
  return { level, into: remaining, need: xpForLevel(level) };
}

export function titleForLevel(level: number): string {
  const idx = Math.min(titles.length - 1, Math.floor((level - 1) / 2));
  return titles[idx];
}