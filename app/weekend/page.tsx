import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: `Weekend | ${siteContent.en.meta.title}`,
  description: siteContent.en.weekend.intro
};

export default function Page() {
  const content = siteContent.en;

  return (
    <ContentPage content={content} title={content.weekend.title} intro={content.weekend.intro}>
      <div className="space-y-8">
        {content.weekend.events.map((event) => (
          <section key={event.day} className="grid gap-3 border-b border-[var(--line)] pb-8 sm:grid-cols-[160px_1fr]">
            <p className="text-sm text-[var(--muted)]">{event.day}</p>
            <div>
              <h2 className="text-2xl font-medium">{event.title}</h2>
              <p className="mt-3 text-base text-[var(--foreground)]">{event.time}</p>
              <p className="mt-2 text-base text-[var(--foreground)]">{event.place}</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{event.note}</p>
            </div>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
