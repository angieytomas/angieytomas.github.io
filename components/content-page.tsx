import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import type { SiteContent } from "@/content/site-data";

type ContentPageProps = {
  content: SiteContent;
  title: string;
  intro: string;
  children: ReactNode;
};

export function ContentPage({ content, title, intro, children }: ContentPageProps) {
  const homeHref = content.locale === "en" ? "/" : "/nl";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader
        homeHref={homeHref}
        languageHref={content.languageToggle.href}
        languageLabel={content.languageToggle.label}
        menu={content.menu}
      />

      <main className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-medium sm:text-6xl">{title}</h1>
          <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
        </div>

        <div className="mt-14">{children}</div>

        <footer className="mt-20 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
          {content.footer}
        </footer>
      </main>
    </div>
  );
}
