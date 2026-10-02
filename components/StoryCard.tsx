import { BookOpen, Heart, MoreHorizontal, Star } from "lucide-react";

type StoryCardProps = {
  title: string;
  author: string;
  genre: string;
  description: string;
  rating: string;
  reads: string;
  chapters: number;
  accent?: string;
};

export default function StoryCard({
  title,
  author,
  genre,
  description,
  rating,
  reads,
  chapters,
  accent = "from-violet-500/30 via-fuchsia-500/10 to-transparent",
}: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.045]">
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${accent}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_30%)]" />

        <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl">
          {genre}
        </div>

        <button
          aria-label={`More options for ${title}`}
          className="absolute right-3 top-3 rounded-xl bg-black/30 p-2 text-white/60 backdrop-blur-xl transition hover:bg-black/50 hover:text-white"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-2 text-lg font-semibold tracking-[-0.02em] text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-white/40">by {author}</p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-xs text-white/60">
            <Star size={13} fill="currentColor" />
            {rating}
          </div>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/40">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-white/35">
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            {chapters} chapters
          </span>

          <span>{reads} reads</span>

          <button
            aria-label={`Save ${title}`}
            className="rounded-lg p-1.5 transition hover:bg-white/[0.06] hover:text-white"
          >
            <Heart size={15} />
          </button>
        </div>
      </div>
    </article>
  );
          }
