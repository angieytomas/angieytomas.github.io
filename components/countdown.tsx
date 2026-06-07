"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getCountdownParts(targetDate: string) {
  const distance = new Date(targetDate).getTime() - Date.now();
  const safeDistance = Math.max(distance, 0);

  return {
    days: Math.floor(safeDistance / DAY),
    hours: Math.floor((safeDistance % DAY) / HOUR),
    minutes: Math.floor((safeDistance % HOUR) / MINUTE)
  };
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [parts, setParts] = useState(() => getCountdownParts(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setParts(getCountdownParts(targetDate));
    }, SECOND);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "Days", value: parts.days },
        { label: "Hours", value: parts.hours },
        { label: "Minutes", value: parts.minutes }
      ].map((part, index) => (
        <motion.div
          key={part.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-4"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">{part.label}</p>
          <p className="mt-3 font-serif-display text-4xl text-[var(--foreground)] sm:text-5xl">{part.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
