"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WeekendEvent } from "@/content/site-data";

export function WeekendPlanner({
  events,
  venueLabel,
  transportLabel,
  openMapLabel
}: {
  events: WeekendEvent[];
  venueLabel: string;
  transportLabel: string;
  openMapLabel: string;
}) {
  const [selectedSlug, setSelectedSlug] = useState(events[1]?.slug ?? events[0]?.slug);
  const selectedEvent = events.find((event) => event.slug === selectedSlug) ?? events[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="grid gap-3">
        {events.map((event) => {
          const isActive = event.slug === selectedEvent.slug;

          return (
            <button
              key={event.slug}
              type="button"
              onClick={() => setSelectedSlug(event.slug)}
              className={`rounded-[1.8rem] border px-5 py-5 text-left transition ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--panel-strong)] shadow-[0_24px_80px_rgba(34,30,28,0.12)]"
                  : "border-[var(--line)] bg-[var(--panel)] hover:border-[var(--foreground)]/20"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">{event.day}</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{event.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{event.time}</p>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={selectedEvent.slug}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-[0_28px_80px_rgba(34,30,28,0.08)] sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge">{selectedEvent.day}</span>
            <span className="badge">{selectedEvent.time}</span>
            <span className="badge">{selectedEvent.dressCode}</span>
          </div>

          <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            {selectedEvent.title}
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="editorial-card">
              <p className="eyebrow">{venueLabel}</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{selectedEvent.venue}</p>
            </div>
            <div className="editorial-card">
              <p className="eyebrow">{transportLabel}</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{selectedEvent.transport}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {selectedEvent.notes.map((note) => (
              <div key={note} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                {note}
              </div>
            ))}
          </div>

          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
            href={selectedEvent.mapHref}
            target="_blank"
            rel="noreferrer"
          >
            {openMapLabel}
          </a>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
