"use client";

import { startTransition, useDeferredValue, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { FaqItem } from "@/content/site-data";

export function FaqExplorer({
  items,
  searchLabel,
  placeholder,
  answersReadySuffix,
  openLabel,
  closeLabel
}: {
  items: FaqItem[];
  searchLabel: string;
  placeholder: string;
  answersReadySuffix: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(items[0]?.question ?? null);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const filteredItems = deferredQuery
    ? items.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(deferredQuery))
    : items;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-5">
        <p className="eyebrow">{searchLabel}</p>
        <input
          type="search"
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            startTransition(() => setQuery(nextValue));
          }}
          placeholder={placeholder}
          className="mt-4 w-full rounded-[1.3rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
        />
        <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
          {filteredItems.length} {answersReadySuffix}
        </p>
      </div>

      <div className="grid gap-3">
        {filteredItems.map((item) => {
          const isOpen = item.question === openQuestion;

          return (
            <article key={item.question} className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel-strong)]">
              <button
                type="button"
                onClick={() => setOpenQuestion((current) => (current === item.question ? null : item.question))}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-lg font-medium tracking-[-0.02em] text-[var(--foreground)]">{item.question}</span>
                <span className="text-sm text-[var(--accent)]">{isOpen ? closeLabel : openLabel}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </div>
  );
}
