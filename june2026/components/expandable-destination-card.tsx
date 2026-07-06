"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { MarkdownText } from "@/components/markdown-text";

type ImageItem = {
  src: string;
  alt: string;
};

type ExpandableDestinationCardProps = {
  title: string;
  meta: string;
  images?: ImageItem[];
  children: ReactNode;
};

export function ExpandableDestinationCard({
  title,
  meta,
  images,
  children
}: ExpandableDestinationCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-strong)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{meta}</p>
          <h3 className="display-font mt-2 text-2xl leading-tight">{title}</h3>
        </div>
        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-[var(--accent)]">
          {open ? "Hide" : "Show"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--line)] px-5 pb-6 pt-5 sm:px-6">
            {images && images.length > 0 ? (
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                {images.map((image) => (
                  <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="text-base leading-8 text-[var(--muted)]">
              {typeof children === "string" ? <MarkdownText text={children} /> : children}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
