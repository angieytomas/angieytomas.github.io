import Link from "next/link";
import { navItems } from "@/content/site-data";

export function PageNavigation({ currentHref }: { currentHref: string }) {
  const currentIndex = navItems.findIndex((item) => item.href === currentHref);

  if (currentIndex === -1) {
    return null;
  }

  const previous = navItems[(currentIndex - 1 + navItems.length) % navItems.length];
  const next = navItems[(currentIndex + 1) % navItems.length];

  return (
    <nav className="mt-8 grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-2" aria-label="Page navigation">
      <Link
        href={previous.href}
        className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Previous
        </span>
        <span className="mt-2 block text-lg font-semibold">{previous.label}</span>
      </Link>
      <Link
        href={next.href}
        className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-right transition hover:border-[var(--accent)]"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Next
        </span>
        <span className="mt-2 block text-lg font-semibold">{next.label}</span>
      </Link>
    </nav>
  );
}
