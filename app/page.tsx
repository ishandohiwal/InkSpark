import SiteHeader from "@/components/SiteHeader";
import StoryCard from "@/components/StoryCard";
import SectionHeading from "@/components/SectionHeading";

const featuredStories = [
  {
    title: "The Last Starfall",
    author: "Avery Rowan",
    genre: "Fantasy",
    description:
      "When the stars begin disappearing from the night sky, a forgotten heir discovers that every vanished star is connected to a buried kingdom.",
    rating: "4.9",
    reads: "2.4M",
    chapters: 48,
    accent: "from-violet-600/40 via-indigo-500/15 to-transparent",
  },
  {
    title: "Letters Never Sent",
    author: "Mira Vale",
    genre: "Romance",
    description:
      "Two strangers keep finding letters written for each other in places neither of them remembers visiting.",
    rating: "4.8",
    reads: "891K",
    chapters: 31,
    accent: "from-rose-500/30 via-pink-500/10 to-transparent",
  },
  {
    title: "Zero Protocol",
    author: "Evan Cross",
    genre: "Sci-Fi",
    description:
      "A teenager wakes inside a city where everyone has a memory that he somehow remembers losing.",
    rating: "4.7",
    reads: "1.7M",
    chapters: 62,
    accent: "from-cyan-500/30 via-blue-500/10 to-transparent",
  },
];

const genres = [
  "Fantasy",
  "Romance",
  "Mystery",
  "Science Fiction",
  "Adventure",
  "Thriller",
  "Horror",
  "Historical",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/[0.06] pt-16">
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[120px]" />
            <div className="absolute right-[8%] top-[20%] h-80 w-80 rounded-full bg-fuchsia-500/[0.06] blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs text-white/50 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                A new home for stories
              </div>

              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
                Read worlds.
                <br />
                <span className="bg-gradient-to-r from-white via-white/75 to-white/35 bg-clip-text text-transparent">
                  Create yours.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                Discover stories you will remember, write worlds people can
                disappear into, and experience fiction in a completely new
                way.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90">
                  Start Reading
                </button>

                <button className="rounded-2xl border border-white/[0.1] bg-white/[0.035] px-7 py-3.5 text-sm font-medium text-white/75 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white">
                  Start Writing
                </button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["10M+", "stories to discover"],
                ["4.8M+", "readers"],
                ["120K+", "writers"],
                ["∞", "worlds to explore"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold tracking-[-0.03em]">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-white/30">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="For you"
            title="Stories worth opening"
            description="A small glimpse of what your InkSpark journey can become."
            action="Explore all"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredStories.map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </div>
        </section>

        {/* DISCOVER */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Discover"
              title="Find your next obsession"
              description="Explore stories by mood, genre, and the kind of world you want to enter."
            />

            <div className="flex flex-wrap gap-3">
              {genres.map((genre, index) => (
                <button
                  key={genre}
                  className={`rounded-2xl border px-5 py-3 text-sm transition ${
                    index === 0
                      ? "border-white/20 bg-white text-black"
                      : "border-white/[0.08] bg-white/[0.025] text-white/55 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM FEATURES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-16">
          <SectionHeading
            eyebrow="InkSpark"
            title="More than reading"
            description="The foundation of InkSpark combines social storytelling with deeper ways to experience fiction."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎮",
                title: "Gamified Reading",
                text: "XP, levels, achievements, streaks, milestones, and reading progression.",
              },
              {
                icon: "🌎",
                title: "Living Worlds",
                text: "Characters, factions, locations, lore, history, events, and relationships.",
              },
              {
                icon: "📖",
                title: "Better Reading",
                text: "Personalized reading modes, typography, themes, focus tools, and progress.",
              },
              {
                icon: "📚",
                title: "Multiple Formats",
                text: "Novels, web novels, light novels, short stories, poetry, and
