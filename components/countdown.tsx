"use client";

import { useEffect, useState } from "react";

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
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {[
        { label: "Days", value: parts.days },
        { label: "Hours", value: parts.hours },
        { label: "Minutes", value: parts.minutes }
      ].map((part) => (
        <div
          key={part.label}
          className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-5 text-center shadow-[0_18px_40px_rgba(32,28,24,0.06)]"
        >
          <p className="text-xs text-[var(--muted)] sm:text-sm">{part.label}</p>
          <p className="mt-3 text-4xl font-medium text-[var(--foreground)] sm:text-5xl">{part.value}</p>
        </div>
      ))}
    </div>
  );
}
