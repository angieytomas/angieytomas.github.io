import Link from "next/link";
import type { ReactNode } from "react";
import { footer } from "@/content/site-data";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      {children}
      <footer className="mx-auto max-w-[720px] px-5 pb-10 pt-14 text-sm text-[var(--muted)]">
        <div className="border-t border-[var(--line)] pt-6">
          <p>{footer.line}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/en/rsvp/" className="text-[var(--accent)]">
              RSVP
            </Link>
            {footer.contact ? <a href={`mailto:${footer.contact}`}>{footer.contact}</a> : null}
          </div>
        </div>
      </footer>
    </div>
  );
}
