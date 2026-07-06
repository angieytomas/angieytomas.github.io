import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = siteContent.nl.meta;

export default function Page() {
  return <HomePage content={siteContent.nl} />;
}
