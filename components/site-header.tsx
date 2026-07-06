import Link from "next/link";
import type { NavItem } from "@/content/site-data";

type SiteHeaderProps = {
  homeHref: string;
  languageLabel: string;
  languageHref: string;
  menu: NavItem[];
};

export function SiteHeader({ homeHref, languageLabel, languageHref, menu }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
        <Link href={homeHref} className="text-base font-medium text-[var(--foreground)]">
          Angie and Tomas
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 lg:flex">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--surface-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={languageHref}
            className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            {languageLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
