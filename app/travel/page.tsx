import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: `Travel | ${siteContent.en.meta.title}`,
  description: siteContent.en.travel.intro
};

export default function Page() {
  const content = siteContent.en;

  return (
    <ContentPage content={content} title={content.travel.title} intro={content.travel.intro}>
      <div className="space-y-8">
        {content.travel.items.map((item) => (
          <section key={item.title} className="grid gap-3 border-b border-[var(--line)] pb-8 sm:grid-cols-[180px_1fr]">
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
