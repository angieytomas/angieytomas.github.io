import type { Metadata } from "next";
import { ImageLightbox } from "@/components/image-lightbox";
import { PageIntro } from "@/components/page-intro";
import { RichText } from "@/components/rich-text";
import { SiteShell } from "@/components/site-shell";
import { TextCard } from "@/components/text-card";
import { gettingToArgentina } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Getting to Argentina",
  description: "Flight planning notes for guests travelling to Buenos Aires."
};

export default function GettingToArgentinaPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={gettingToArgentina.title} intro={gettingToArgentina.intro} />
        <div className="grid gap-4">
          {gettingToArgentina.items.map((item) => (
            <TextCard key={item.title} title={item.title}>
              <RichText text={item.body} />
              {item.imageButton ? (
                <ImageLightbox src={item.imageButton.src} alt={item.imageButton.alt} label={item.title} />
              ) : null}
            </TextCard>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
