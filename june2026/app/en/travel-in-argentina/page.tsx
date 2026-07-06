import type { Metadata } from "next";
import { ExpandableDestinationCard } from "@/components/expandable-destination-card";
import { MarkdownText } from "@/components/markdown-text";
import { PageIntro } from "@/components/page-intro";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { TextCard } from "@/components/text-card";
import { argentinaTravel } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Travel in Argentina",
  description: "Ideas for seeing more of Argentina around the wedding."
};

export default function TravelInArgentinaPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <PageIntro title={argentinaTravel.title} intro={argentinaTravel.intro} />
        <div className="grid gap-5">
          <PageSection title="Flights and booking">
            <p className="text-base leading-8 text-[var(--muted)]">
              <MarkdownText text={argentinaTravel.booking} />
            </p>
          </PageSection>

          <PageSection title="A few useful things">
            <p className="text-base leading-8 text-[var(--muted)]">
              <MarkdownText text={argentinaTravel.practical} />
            </p>
            <p className="mt-5 border-l-2 border-[var(--olive)] pl-4 text-base leading-8">
              {argentinaTravel.daysNote}
            </p>
          </PageSection>

          <div className="grid gap-4">
            {argentinaTravel.destinations.map((destination) => (
              <ExpandableDestinationCard
                key={destination.name}
                title={destination.name}
                meta={`${destination.days} · ${destination.airport} · ${destination.flightTime}`}
                images={destination.images}
              >
                {destination.body}
              </ExpandableDestinationCard>
            ))}
          </div>

          <PageSection title={argentinaTravel.dayTripsHeading} intro={argentinaTravel.dayTripsIntro}>
            <div className="grid gap-4">
              {argentinaTravel.dayTrips.map((trip) => (
                <TextCard key={trip.name} title={trip.name}>
                  {trip.body}
                </TextCard>
              ))}
            </div>
          </PageSection>

          <PageSection>
            <p className="text-lg leading-9">{argentinaTravel.closing}</p>
          </PageSection>
        </div>
      </main>
    </SiteShell>
  );
}
