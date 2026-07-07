import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { TbcBadge } from "@/components/tbc-badge";
import { faq, rsvp } from "@/content/site-data";

export const metadata: Metadata = {
  title: "RSVP",
  description: "RSVP for Tomas and Angie's Buenos Aires wedding."
};

export default function RsvpPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={rsvp.title} intro={rsvp.intro} />
        <div className="grid gap-5">
          <PageSection>
            <p className="text-base leading-8 text-[var(--muted)]">{rsvp.note}</p>
            <div className="mt-5">
              <TbcBadge>{rsvp.deadline}</TbcBadge>
            </div>
          </PageSection>
          <section className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-strong)]">
            <iframe
              src={rsvp.url}
              title="RSVP form"
              className="h-[760px] w-full border-0"
              loading="lazy"
            />
          </section>
          <PageSection title={faq.title}>
            <p className="text-base leading-8 text-[var(--muted)]">{faq.intro}</p>
          </PageSection>
        </div>
      </main>
    </SiteShell>
  );
}
