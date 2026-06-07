import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = siteContent.nl.meta;

export default function DutchPage() {
  return <SitePage content={siteContent.nl} basePath={process.env.PAGES_BASE_PATH || ""} />;
}
