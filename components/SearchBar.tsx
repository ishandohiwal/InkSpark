"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search stories, authors, genres...",
}: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className="group relative w-full">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition group-focus-within:text-white/60"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] pl-11 pr-11 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-white/[0.18] focus:bg-white/[0.05]"
      />

      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => setValue("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-white/30 transition hover:bg-white/[0.07] hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
