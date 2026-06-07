import Link from "next/link";
import type { GalleryItem, SiteContent } from "@/content/site-data";
import { Countdown } from "@/components/countdown";
import { ExpandableCards } from "@/components/expandable-cards";
import { FaqExplorer } from "@/components/faq-explorer";
import { SearchPanel } from "@/components/search-panel";
import { ShareLinkButton } from "@/components/share-link-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { WeekendPlanner } from "@/components/weekend-planner";

function SectionHeading({
  id,
  eyebrow,
  title,
  intro
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">{intro}</p>
      </div>
    </div>
  );
}

function galleryClassNames(item: GalleryItem) {
  const sizeClass =
    item.size === "wide" ? "md:col-span-2 min-h-[15rem]" : item.size === "tall" ? "min-h-[26rem]" : "min-h-[18rem]";
  const toneClass =
    item.tone === "wine"
      ? "bg-[linear-gradient(180deg,rgba(122,41,44,0.88),rgba(47,24,29,0.98))]"
      : item.tone === "olive"
        ? "bg-[linear-gradient(180deg,rgba(109,120,84,0.94),rgba(46,52,39,0.98))]"
        : item.tone === "ink"
          ? "bg-[linear-gradient(180deg,rgba(56,61,69,0.94),rgba(16,18,21,0.98))]"
          : "bg-[linear-gradient(180deg,rgba(219,211,200,0.95),rgba(174,159,145,0.98))]";

  return `${sizeClass} ${toneClass}`;
}

export function SitePage({ content, basePath }: { content: SiteContent; basePath: string }) {
  const searchEntries = [
    ...content.weekend.events.map((event) => ({
      title: event.title,
      meta: `${content.weekend.title} • ${event.day}`,
      href: "#weekend"
    })),
    ...content.travel.cards.map((item) => ({
      title: item.eyebrow,
      meta: `${content.travel.title} • ${item.title}`,
      href: "#travel"
    })),
    ...content.stay.neighborhoods.map((neighborhood) => ({
      title: neighborhood.title,
      meta: `${content.stay.title} • ${neighborhood.vibe}`,
      href: "#stay"
    })),
    ...content.explore.destinations.map((destination) => ({
      title: destination.title,
      meta: `${content.explore.title} • ${destination.season}`,
      href: "#explore"
    })),
    ...content.faq.items.slice(0, 8).map((item) => ({
      title: item.question,
      meta: content.faq.title,
      href: "#faq"
    }))
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="font-serif-display text-2xl tracking-[0.2em] text-[var(--foreground)]">
            A / T
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={content.languageToggle.href}
              className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              {content.languageToggle.label}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-10 lg:pt-10">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />

          <div className="mx-auto grid max-w-[92rem] gap-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="rounded-[2.4rem] border border-[var(--line)] bg-[var(--panel-strong)] p-7 shadow-[0_30px_100px_rgba(24,20,18,0.08)] sm:p-10 lg:p-12">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl font-serif-display text-[3.6rem] leading-[0.92] tracking-[-0.06em] text-[var(--foreground)] sm:text-[5.2rem] lg:text-[7rem]">
                {content.hero.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="badge">{content.hero.location}</span>
                <span className="badge">{content.hero.weekend}</span>
                <span className="badge">{content.ui.heroBadge}</span>
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{content.hero.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#rsvp" className="cta-primary">
                  {content.hero.primaryCta}
                </a>
                <a href="#travel" className="cta-secondary">
                  {content.hero.secondaryCta}
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                {content.hero.notes.map((note) => (
                  <div key={note} className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2.4rem] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
                <p className="eyebrow">{content.ui.countdown}</p>
                <div className="mt-5">
                  <Countdown targetDate="2027-03-20T17:00:00-03:00" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {content.quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">{fact.label}</p>
                    <p className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[2.4rem] border border-[var(--line)] bg-[linear-gradient(160deg,rgba(118,34,44,0.96),rgba(28,27,24,0.96))] p-8 text-white">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/72">{content.ui.temporaryStatusLabel}</p>
                <p className="mt-4 max-w-xl font-serif-display text-4xl tracking-[-0.05em]">
                  {content.ui.temporaryStatusText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <SearchPanel
              entries={searchEntries}
              eyebrow={content.ui.searchEyebrow}
              title={content.ui.searchTitle}
              intro={content.ui.searchIntro}
              placeholder={content.ui.searchPlaceholder}
            />
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="weekend" eyebrow="01" title={content.weekend.title} intro={content.weekend.intro} />
            <div className="mt-10">
              <WeekendPlanner
                events={content.weekend.events}
                venueLabel={content.ui.venueLabel}
                transportLabel={content.ui.transportLabel}
                openMapLabel={content.ui.openMapLabel}
              />
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="rsvp" eyebrow="02" title={content.rsvp.title} intro={content.rsvp.intro} />
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
                <p className="eyebrow">{content.ui.whatWeNeedLabel}</p>
                <div className="mt-5 grid gap-3">
                  {content.rsvp.fields.map((field) => (
                    <div key={field} className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
                      {field}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{content.rsvp.note}</p>
              </div>

              <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-[var(--muted)]">{content.ui.rsvpHelperText}</p>
                  <a href={content.rsvp.buttonHref} target="_blank" rel="noreferrer" className="cta-primary">
                    {content.rsvp.buttonLabel}
                  </a>
                </div>
                <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white">
                  <iframe
                    title="RSVP form"
                    src={content.rsvp.buttonHref}
                    className="min-h-[620px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="travel" eyebrow="03" title={content.travel.title} intro={content.travel.intro} />
            <div className="mt-10">
              <ExpandableCards items={content.travel.cards} />
            </div>
            <a
              href={`${basePath}/travel-snapshot.txt`}
              download
              className="mt-6 inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              {content.travel.snapshotLabel}
            </a>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="stay" eyebrow="04" title={content.stay.title} intro={content.stay.intro} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.stay.neighborhoods.map((neighborhood) => (
                <article key={neighborhood.title} className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                  <p className="eyebrow">{neighborhood.vibe}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{neighborhood.title}</h3>
                  <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                    <p>{neighborhood.sleep}</p>
                    <p>{neighborhood.coffee}</p>
                    <p>{neighborhood.dinner}</p>
                    <p className="text-[var(--foreground)]">{neighborhood.distance}</p>
                  </div>
                  <a
                    href={neighborhood.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
                  >
                    {content.ui.openMapLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="guide" eyebrow="05" title={content.guide.title} intro={content.guide.intro} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.guide.categories.map((category) => (
                <article key={category.eyebrow} className="rounded-[1.9rem] border border-[var(--line)] bg-[var(--panel)] p-5">
                  <p className="eyebrow">{category.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{category.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.picks.map((pick) => (
                      <span key={pick} className="badge">
                        {pick}
                      </span>
                    ))}
                  </div>
                  <a
                    href={category.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
                  >
                    {content.ui.exploreMapLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading id="packing" eyebrow="06" title={content.packing.title} intro={content.packing.intro} />
              <div className="mt-10 grid gap-4">
                {content.packing.groups.map((group) => (
                  <article key={group.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5">
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{group.title}</h3>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <div key={item} className="rounded-[1.1rem] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading id="dress-code" eyebrow="07" title={content.dressCode.title} intro={content.dressCode.intro} />
              <div className="mt-10 grid gap-4">
                {content.dressCode.boards.map((board) => (
                  <article key={board.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-5">
                    <p className="eyebrow">{board.title}</p>
                    <p className="mt-4 text-lg leading-7 text-[var(--foreground)]">{board.subtitle}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {board.palette.map((color) => (
                        <span key={color} className="badge">
                          {color}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {board.looks.map((look) => (
                        <div key={look} className="rounded-[1.1rem] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                          {look}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="explore" eyebrow="08" title={content.explore.title} intro={content.explore.intro} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.explore.destinations.map((destination) => (
                <article key={destination.title} className="rounded-[1.9rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                  <p className="eyebrow">{destination.season}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{destination.title}</h3>
                  <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                    <p>{destination.why}</p>
                    <p>{destination.stay}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span key={highlight} className="badge">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="itineraries" eyebrow="09" title={content.itineraries.title} intro={content.itineraries.intro} />
            <div className="mt-10 grid gap-4 xl:grid-cols-2">
              {content.itineraries.items.map((item) => (
                <article key={item.slug} id={item.slug} className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="eyebrow">{item.duration}</p>
                      <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{item.title}</h3>
                    </div>
                    <ShareLinkButton hash={item.slug} shareLabel={content.ui.shareLabel} copiedLabel={content.ui.copiedLabel} />
                  </div>
                  <p className="mt-5 text-xl tracking-[-0.02em] text-[var(--foreground)]">{item.route}</p>
                  <div className="mt-5 grid gap-2">
                    {item.stops.map((stop) => (
                      <div key={stop} className="rounded-[1.1rem] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                        {stop}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="favorites" eyebrow="10" title={content.favorites.title} intro={content.favorites.intro} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.favorites.items.map((item) => (
                <article key={item.label} className="rounded-[1.9rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                  <p className="eyebrow">{item.label}</p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                  <a
                    href={item.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
                  >
                    {content.ui.openMapLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="faq" eyebrow="11" title={content.faq.title} intro={content.faq.intro} />
            <div className="mt-10">
              <FaqExplorer
                items={content.faq.items}
                searchLabel={content.ui.searchFaqLabel}
                placeholder={content.ui.faqPlaceholder}
                answersReadySuffix={content.ui.answersReadySuffix}
                openLabel={content.ui.openLabel}
                closeLabel={content.ui.closeLabel}
              />
            </div>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-inner">
            <SectionHeading id="gallery" eyebrow="12" title={content.gallery.title} intro={content.gallery.intro} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.gallery.items.map((item) => (
                <article key={item.title} className={`gallery-card ${galleryClassNames(item)}`}>
                  <div className="gallery-overlay" />
                  <div className="relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/72">{item.title}</p>
                    <p className="mt-4 max-w-sm font-serif-display text-3xl tracking-[-0.04em] text-white">{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[92rem] rounded-[2.6rem] border border-[var(--line)] bg-[var(--panel-strong)] px-6 py-12 text-center shadow-[0_30px_100px_rgba(24,20,18,0.08)] sm:px-10 sm:py-16">
            <p className="eyebrow">{content.finalNote.eyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-serif-display text-[3.1rem] leading-[0.95] tracking-[-0.05em] text-[var(--foreground)] sm:text-[4.4rem]">
              {content.finalNote.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{content.finalNote.body}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
