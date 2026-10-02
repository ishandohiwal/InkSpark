"use client";

import { useState } from "react";
import {
  Bell,
  BookOpen,
  Compass,
  Menu,
  PenLine,
  Search,
  User,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", icon: Compass },
  { label: "Discover", icon: Search },
  { label: "Library", icon: BookOpen },
  { label: "Write", icon: PenLine },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.12)] transition group-hover:scale-105">
            <PenLine size={18} strokeWidth={2.4} />
          </div>

          <span className="text-lg font-semibold tracking-[-0.03em]">
            Ink<span className="text-white/45">Spark</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white/50 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            aria-label="Search"
            className="rounded-xl p-2.5 text-white/45 transition hover:bg-white/[0.06] hover:text-white"
          >
            <Search size={18} />
          </button>

          <button
            aria-label="Notifications"
            className="rounded-xl p-2.5 text-white/45 transition hover:bg-white/[0.06] hover:text-white"
          >
            <Bell size={18} />
          </button>

          <button
            aria-label="Profile"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/55 transition hover:border-white/20 hover:text-white"
          >
            <User size={17} />
          </button>
        </div>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-xl p-2 text-white/60 transition hover:bg-white/[0.06] hover:text-white md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-black/95 px-5 py-4 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}

            <div className="my-2 h-px bg-white/[0.06]" />

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white"
            >
              <Bell size={18} />
              Notifications
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white"
            >
              <User size={18} />
              Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
          }
