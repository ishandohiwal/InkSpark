export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60 backdrop-blur-xl">
            ✦ Welcome to InkSpark
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Stories that feel
            <span className="block bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              alive.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
            Read unforgettable stories, discover new worlds, write your own,
            and become part of a community built around imagination.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03] hover:bg-white/90">
              Start Reading
            </button>

            <button className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-medium text-white transition hover:bg-white/[0.08]">
              Write a Story
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["📖", "Read", "Find stories worth getting lost in."],
            ["✍️", "Write", "Turn your ideas into something real."],
            ["🌎", "Worlds", "Build universes beyond the page."],
            ["🎮", "Level Up", "Make your reading journey matter."],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.045]"
            >
              <div className="text-2xl">{icon}</div>

              <h2 className="mt-5 text-lg font-medium">{title}</h2>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
             }
