import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { faq } from "@/content/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Tomas and Angie's wedding."
};

export default function FaqPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={faq.title} intro={faq.intro} />
        <div className="grid gap-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold">
                <span>{item.question}</span>
                <span className="float-right text-[var(--accent)] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
