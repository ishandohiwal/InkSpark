"use client";

import {
  BookOpen,
  Compass,
  Home,
  PenLine,
  User,
} from "lucide-react";

const items = [
  { label: "Home", icon: Home },
  { label: "Discover", icon: Compass },
  { label: "Library", icon: BookOpen },
  { label: "Write", icon: PenLine },
  { label: "Profile", icon: User },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.07] bg-black/80 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          const active = index === 0;

          return (
            <button
              key={item.label}
              className={`flex min-w-14 flex-col items-center gap-1 rounded-xl px-3 py-2 transition ${
                active
                  ? "text-white"
                  : "text-white/35 hover:text-white/70"
              }`}
            >
              <Icon size={19} strokeWidth={active ? 2.2 : 1.8} />

              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
              }
