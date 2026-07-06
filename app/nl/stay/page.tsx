import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: `Verblijf | ${siteContent.nl.meta.title}`,
  description: siteContent.nl.stay.intro
};

export default function Page() {
  const content = siteContent.nl;

  return (
    <ContentPage content={content} title={content.stay.title} intro={content.stay.intro}>
      <div className="space-y-8">
        {content.stay.items.map((item) => (
          <section key={item.title} className="grid gap-3 border-b border-[var(--line)] pb-8 sm:grid-cols-[180px_1fr]">
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
