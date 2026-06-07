"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ExpandCard } from "@/content/site-data";

export function ExpandableCards({ items }: { items: ExpandCard[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article
            key={item.title}
            className={`rounded-[1.8rem] border transition ${
              isOpen
                ? "border-[var(--accent)] bg-[var(--panel-strong)] shadow-[0_24px_80px_rgba(34,30,28,0.12)]"
                : "border-[var(--line)] bg-[var(--panel)]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              className="flex w-full flex-col gap-3 px-5 py-5 text-left"
            >
              <span className="eyebrow">{item.eyebrow}</span>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{item.title}</h3>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <div className="grid gap-3">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {item.footer ? <p className="mt-4 text-sm font-medium text-[var(--foreground)]">{item.footer}</p> : null}

                    {item.links?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--foreground)] transition hover:border-[var(--accent)]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
