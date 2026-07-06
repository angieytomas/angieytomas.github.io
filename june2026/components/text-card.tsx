import type { ReactNode } from "react";

export function TextCard({
  title,
  meta,
  children
}: {
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-5">
      {meta ? <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{meta}</p> : null}
      <h3 className="display-font mt-2 text-2xl leading-tight">{title}</h3>
      <div className="mt-4 text-base leading-8 text-[var(--muted)]">{children}</div>
    </article>
  );
}
