export function TbcBadge({ children = "TBC" }: { children?: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
      {children}
    </span>
  );
}
