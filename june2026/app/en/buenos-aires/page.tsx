import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { TextCard } from "@/components/text-card";
import { buenosAires } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Buenos Aires",
  description: "Where to stay and how to enjoy Buenos Aires for the wedding."
};

export default function BuenosAiresPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={buenosAires.title} intro={buenosAires.intro} />
        <div className="grid gap-5">
          {buenosAires.images?.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {buenosAires.images.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 760px) 100vw, 720px"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <PageSection title="The city">
            <p className="text-base leading-8 text-[var(--muted)]">{buenosAires.description}</p>
          </PageSection>
          <PageSection title="Where to stay">
            <p className="text-base leading-8 text-[var(--muted)]">{buenosAires.stay}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {buenosAires.areas.map((area) => (
                <span key={area} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </PageSection>

          <PageSection title="Food & recommendations">
            <p className="text-base leading-8 text-[var(--muted)]">The food in Buenos Aires is spectacular and it's not only meat.</p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">We have tons of recommendations for places to eat and things to do, so just trust us on this.</p>
          </PageSection>
        </div>
      </main>
    </SiteShell>
  );
}
