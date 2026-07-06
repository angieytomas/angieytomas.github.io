import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { TbcBadge } from "@/components/tbc-badge";
import { weekend } from "@/content/site-data";

export const metadata: Metadata = {
  title: "The Weekend",
  description: "The wedding weekend plan for Tomas and Angie in Buenos Aires."
};

export default function WeekendPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={weekend.title} intro={weekend.intro} />
        <div className="grid gap-5">
          <PageSection>
            <div className="grid gap-4">
              {weekend.days.map((day) => (
                <article key={day.day} className="border-l-2 border-[var(--accent-soft)] py-2 pl-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {day.day}
                    </p>
                    {day.badge ? <TbcBadge>{day.badge}</TbcBadge> : null}
                  </div>
                  <h2 className="display-font mt-3 text-3xl leading-tight">{day.title}</h2>
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">{day.body}</p>
                </article>
              ))}
            </div>
          </PageSection>
          <PageSection>
            <p className="text-lg leading-9">{weekend.footer}</p>
          </PageSection>
        </div>
      </main>
    </SiteShell>
  );
}
