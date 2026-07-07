import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { TbcBadge } from "@/components/tbc-badge";
import { home } from "@/content/site-data";

export default function HomePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <section className="reveal relative -mx-5 min-h-[calc(100svh-73px)] overflow-hidden bg-[var(--ink)] px-5 py-10 text-[var(--paper)] sm:rounded-b-lg">
          <Image
            src="/images/buenos-aires-hero.png"
            alt="A warm editorial view of Buenos Aires"
            fill
            priority
            className="object-cover opacity-70"
            sizes="(max-width: 760px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,42,38,0.2),rgba(46,42,38,0.78))]" />
          <div className="relative z-10 flex min-h-[calc(100svh-153px)] flex-col justify-end">
            <p className="text-sm uppercase tracking-[0.22em]">{home.kicker}</p>
            <h1 className="display-font mt-5 text-6xl leading-none sm:text-8xl">{home.names}</h1>
            <p className="mt-5 max-w-sm text-lg leading-8 text-[#fff4e5]">{home.dateLine}</p>
            <div className="mt-8 max-w-md">
              <Countdown target={home.countdownTarget} />
            </div>
          </div>
        </section>

        <div className="grid gap-7 py-8 sm:py-10">
          <PageSection eyebrow="Welcome">
            <p className="text-lg leading-9">{home.welcome}</p>
            <p className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-base leading-8 text-[var(--muted)]">
              {home.weekendLine}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <TbcBadge>{home.locationStatus}</TbcBadge>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {home.buttons.map((button) => (
                <Link
                  key={button.href}
                  href={button.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--paper)] transition hover:bg-[var(--ink)]"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </PageSection>

          <PageSection title="A quick hello from us">
            <div className="grid gap-4 md:grid-cols-[1.25fr_0.85fr]">
              <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src="/images/home/pic.jpg"
                  alt="Angie and Tomas"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 text-base leading-8 text-[var(--muted)]">
                <p>We wanted to add a little picture here so you can see us before the wedding. It feels nice to share a proper photo on the main page.</p>
              </div>
            </div>
          </PageSection>

          <PageSection title="Something silly at the end">
            <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-center">
              <Image
                src="/images/home/dancing_cats.gif"
                alt="Funny dancing cats gif"
                width={1200}
                height={750}
                className="mx-auto max-h-[360px] w-full object-contain"
              />
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">A little dancing cats moment to finish the page with something fun.</p>
            </div>
          </PageSection>
        </div>
      </main>
    </SiteShell>
  );
}
