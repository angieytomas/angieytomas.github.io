"use client";

import { useDeferredValue, useState } from "react";
import { motion } from "motion/react";

type SearchEntry = {
  title: string;
  meta: string;
  href: string;
};

export function SearchPanel({
  entries,
  eyebrow,
  title,
  intro,
  placeholder
}: {
  entries: SearchEntry[];
  eyebrow: string;
  title: string;
  intro: string;
  placeholder: string;
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const results = deferredQuery
    ? entries
        .filter((entry) => `${entry.title} ${entry.meta}`.toLowerCase().includes(deferredQuery))
        .slice(0, 8)
    : entries.slice(0, 6);

  return (
    <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-[0_24px_80px_rgba(34,30,28,0.08)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{title}</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{intro}</p>
        </div>

        <div>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {results.map((result, index) => (
              <motion.a
                key={`${result.href}-${result.title}`}
                href={result.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-[1.3rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-4 transition hover:border-[var(--accent)]"
              >
                <p className="text-sm font-medium text-[var(--foreground)]">{result.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{result.meta}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
