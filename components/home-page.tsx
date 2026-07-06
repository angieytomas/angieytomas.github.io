import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { SiteHeader } from "@/components/site-header";
import type { SiteContent } from "@/content/site-data";

export function HomePage({ content }: { content: SiteContent }) {
  const homeHref = content.locale === "en" ? "/" : "/nl";
  const labels =
    content.locale === "en"
      ? {
          heroKicker: "We're getting married",
          countdown: "Countdown",
          welcome: "Welcome",
          destination: "Wedding destination",
          details: "Date and location",
          quickInfo: "Key details",
          pageLinks: "Explore the key pages"
        }
      : {
          heroKicker: "We gaan trouwen",
          countdown: "Aftellen",
          welcome: "Welkom",
          destination: "Bestemming",
          details: "Datum en locatie",
          quickInfo: "Belangrijke info",
          pageLinks: "Bekijk de belangrijkste pagina's"
        };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader
        homeHref={homeHref}
        languageHref={content.languageToggle.href}
        languageLabel={content.languageToggle.label}
        menu={content.menu}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 sm:gap-14 sm:py-14">
        <section className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] px-6 py-12 shadow-[0_28px_80px_rgba(32,28,24,0.06)] sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm text-[var(--muted)]">{content.home.eyebrow}</p>
            <p className="mt-4 text-base text-[var(--foreground)]">{labels.heroKicker}</p>
            <h1 className="mt-6 text-5xl font-medium leading-none sm:text-7xl md:text-8xl">
              {content.home.names}
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">{content.home.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--foreground)] sm:text-base">
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2">{content.home.date}</span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2">{content.home.location}</span>
            </div>
            <div className="mt-10">
              <p className="mb-5 text-sm text-[var(--muted)]">{labels.countdown}</p>
              <Countdown targetDate="2027-03-20T17:00:00-03:00" />
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-[0_20px_50px_rgba(32,28,24,0.05)] sm:p-8">
            <p className="text-sm text-[var(--muted)]">{labels.welcome}</p>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--foreground)] sm:text-xl">
              {content.home.intro}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {content.home.temporaryNote}
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8">
            <p className="text-sm text-[var(--muted)]">{labels.destination}</p>
            <h2 className="mt-5 text-3xl font-medium sm:text-4xl">{content.home.location}</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              {content.home.extraDatesLabel}: {content.home.extraDatesValue}
            </p>
          </article>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm text-[var(--muted)]">{labels.details}</p>
            <p className="mt-4 text-xl font-medium">{content.home.date}</p>
          </article>
          <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm text-[var(--muted)]">{labels.destination}</p>
            <p className="mt-4 text-xl font-medium">{content.home.location}</p>
          </article>
          <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm text-[var(--muted)]">{labels.quickInfo}</p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]">{content.home.temporaryNote}</p>
          </article>
          <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm text-[var(--muted)]">{content.home.extraDatesLabel}</p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]">{content.home.extraDatesValue}</p>
          </article>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--muted)]">{labels.quickInfo}</p>
              <h2 className="mt-2 text-2xl font-medium sm:text-3xl">{labels.pageLinks}</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.home.buttons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className="flex items-center justify-between rounded-[1.2rem] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 text-lg font-medium transition hover:-translate-y-0.5 hover:bg-[var(--background)]"
              >
                <span>{button.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="px-2 pt-2 text-sm text-[var(--muted)]">{content.footer}</footer>
      </main>
    </div>
  );
}
