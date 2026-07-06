import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: `RSVP | ${siteContent.nl.meta.title}`,
  description: siteContent.nl.rsvp.intro
};

export default function Page() {
  const content = siteContent.nl;

  return (
    <ContentPage content={content} title={content.rsvp.title} intro={content.rsvp.intro}>
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <ul className="space-y-3 border-t border-[var(--line)]">
            {content.rsvp.points.map((point) => (
              <li key={point} className="border-b border-[var(--line)] py-4 text-lg">
                {point}
              </li>
            ))}
          </ul>
          <a
            href={content.rsvp.buttonHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            {content.rsvp.buttonLabel}
          </a>
        </div>

        <div className="overflow-hidden border border-[var(--line)]">
          <iframe
            title="RSVP form"
            src={content.rsvp.buttonHref}
            className="min-h-[720px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </ContentPage>
  );
}
