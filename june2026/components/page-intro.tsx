export function PageIntro({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="reveal py-10 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        Tomas & Angie
      </p>
      <h1 className="display-font mt-4 text-5xl leading-none sm:text-7xl">{title}</h1>
      <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{intro}</p>
    </div>
  );
}
