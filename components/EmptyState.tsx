import { LucideIcon, Sparkles } from "lucide-react";

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  icon: Icon = Sparkles,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/[0.1] bg-white/[0.015] px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-white/50">
        <Icon size={23} strokeWidth={1.7} />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
        }
