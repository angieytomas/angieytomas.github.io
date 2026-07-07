"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/content/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(247,243,236,0.88)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[720px] items-center justify-between px-5 py-4">
        <Link href="/en/" className="display-font text-xl leading-none">
          T&A
        </Link>
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>Menu</span>
          <span
            aria-hidden="true"
            className={`text-base leading-none transition-transform ${open ? "rotate-180" : ""}`}
          >
            ↓
          </span>
        </button>
        <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.14em] text-[var(--muted)] md:flex">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-[var(--paper)] md:hidden">
          <div className="mx-auto grid max-w-[720px] gap-1 px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-1 py-3 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
