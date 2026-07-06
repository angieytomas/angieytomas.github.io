import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { TextCard } from "@/components/text-card";
import { gettingHere } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Getting Here",
  description: "Practical arrival notes for Buenos Aires."
};

export default function GettingHerePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={gettingHere.title} intro={gettingHere.intro} />
        <div className="grid gap-4">
          {gettingHere.items.map((item) => (
            <TextCard key={item.title} title={item.title}>
              {item.body}
            </TextCard>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
