type GenrePillProps = {
  label: string;
  active?: boolean;
};

export default function GenrePill({
  label,
  active = false,
}: GenrePillProps) {
  return (
    <button
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-white bg-white text-black"
          : "border-white/[0.08] bg-white/[0.025] text-white/50 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
