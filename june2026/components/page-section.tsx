import type { ReactNode } from "react";

type PageSectionProps = {
  title?: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
};

export function PageSection({ title, eyebrow, intro, children }: PageSectionProps) {
  return (
    <section className="reveal rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 soft-shadow sm:p-7">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
      ) : null}
      {title ? <h2 className="display-font mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2> : null}
      {intro ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{intro}</p> : null}
      <div className={title || intro || eyebrow ? "mt-6" : ""}>{children}</div>
    </section>
  );
}
