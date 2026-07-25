"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Map, Trophy, User } from "lucide-react";

const items = [
  { href: "/app", icon: Compass, label: "Quests" },
  { href: "/app/map", icon: Map, label: "Map" },
  { href: "/app/achievements", icon: Trophy, label: "Awards" },
  { href: "/app/profile", icon: User, label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 flex justify-around bg-card border-t border-cardBorder pt-2.5 pb-3.5">
      {items.map((it) => {
        const active = pathname === it.href;
        const Icon = it.icon;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`flex flex-col items-center gap-0.5 ${
              active ? "text-coral" : "text-[#B4A883]"
            }`}
          >
            <Icon size={20} fill={active ? "currentColor" : "none"} strokeWidth={active ? 2 : 1.8} />
            <span className="text-[10.5px] font-extrabold">{it.label}</span>
          </Link>
        );
      })}
    </div>
  );
}