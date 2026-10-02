type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 flex items-end justify-between gap-6">
      <div className="min-w-0">
        {eyebrow && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/30">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            {description}
          </p>
        )}
      </div>

      {action && (
        <button className="shrink-0 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white/55 transition hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white">
          {action}
        </button>
      )}
    </div>
  );
}
