"use client";

import { useEffect, useMemo, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(new Date(target).getTime() - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));
  const units = useMemo(
    () => [
      ["Days", timeLeft.days],
      ["Hours", timeLeft.hours],
      ["Minutes", timeLeft.minutes],
      ["Seconds", timeLeft.seconds]
    ],
    [timeLeft]
  );

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Countdown to the wedding">
      {units.map(([label, value]) => (
        <div key={label} className="border-t border-[var(--line)] pt-3 text-center">
          <div className="display-font text-3xl leading-none text-[var(--paper)] sm:text-5xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#fff4e5] sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
