import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { PageNavigation } from "@/components/page-navigation";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
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
            <div className="overflow-x-auto pb-3">
              <div className="flex min-w-max gap-3 snap-x snap-mandatory scroll-smooth">
                {buenosAires.images.map((image) => (
                  <div key={image.src} className="relative aspect-[4/3] min-w-[300px] flex-shrink-0 snap-center overflow-hidden rounded-lg">
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

        </div>
        <PageNavigation currentHref="/en/buenos-aires/" />
      </main>
    </SiteShell>
  );
}
