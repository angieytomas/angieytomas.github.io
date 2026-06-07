"use client";

import { useState } from "react";

export function ShareLinkButton({
  hash,
  shareLabel,
  copiedLabel
}: {
  hash: string;
  shareLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        const url = `${window.location.origin}${window.location.pathname}#${hash}`;
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--foreground)] transition hover:border-[var(--accent)]"
    >
      {copied ? copiedLabel : shareLabel}
    </button>
  );
}
