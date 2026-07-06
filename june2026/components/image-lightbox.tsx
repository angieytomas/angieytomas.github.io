"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  label?: string;
};

export function ImageLightbox({ src, alt, label }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]"
        aria-label={`Open ${label ?? alt}`}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 720px" className="object-cover" />
        </div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(46,42,38,0.85)] p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-[var(--paper)] px-3 py-2 text-sm font-semibold text-[var(--ink)]"
            >
              Close
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--paper)]">
              <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
