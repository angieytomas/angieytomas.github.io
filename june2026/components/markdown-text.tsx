import type { ReactNode } from "react";

const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

export function MarkdownText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    const [fullMatch, label, href] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(
      <a
        key={`${href}-${index}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-[3px] bg-[rgba(232,201,184,0.35)] px-0.5 font-semibold text-[#9b3f23] underline decoration-[#b5532e] decoration-2 underline-offset-4 transition hover:bg-[rgba(232,201,184,0.62)] hover:text-[var(--accent)]"
      >
        {label}
      </a>
    );

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
