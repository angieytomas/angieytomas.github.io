"use client";

import { startTransition, useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [mounted, theme]);

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
      onClick={() => {
        startTransition(() => {
          setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
        });
      }}
      aria-label="Toggle color theme"
    >
      <span>{mounted ? theme : "light"}</span>
      <span className="text-[var(--accent)]">{mounted && theme === "dark" ? "Night" : "Day"}</span>
    </button>
  );
}
