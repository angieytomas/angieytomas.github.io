import type { FaqItem } from "@/content/site-data";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-[var(--foreground)]">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
