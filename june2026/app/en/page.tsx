import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { PageNavigation } from "@/components/page-navigation";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";
import { home } from "@/content/site-data";

export default function HomePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[720px] px-5">
        <section className="reveal relative -mx-5 min-h-[calc(100svh-73px)] overflow-hidden bg-[var(--ink)] px-5 py-10 text-[var(--paper)] sm:rounded-b-lg">
          <Image
            src="/images/home/header.jpeg"
            alt="Angie and Tomas"
            fill
            priority
            className="object-cover opacity-70"
            sizes="(max-width: 760px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,42,38,0.2),rgba(46,42,38,0.78))]" />
          <div className="relative z-10 flex min-h-[calc(100svh-153px)] flex-col justify-end">
            {home.kicker ? <p className="text-sm uppercase tracking-[0.22em]">{home.kicker}</p> : null}
            <h1 className="hero-font text-7xl leading-none sm:text-9xl">{home.names}</h1>
            <p className="mt-5 max-w-sm text-lg leading-8 text-[#fff4e5]">{home.dateLine}</p>
            <div className="mt-8 max-w-md">
              <Countdown target={home.countdownTarget} />
            </div>
          </div>
        </section>

        <div className="grid gap-7 py-8 sm:py-10">
          <PageSection>
            <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src="/images/home/main_img.jpg"
                  alt="Angie and Tomas"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                {home.welcome.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-9">
                    {paragraph}
                  </p>
                ))}
              </div>
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

        </div>
        <PageNavigation currentHref="/en/" />
      </main>
    </SiteShell>
  );
}
