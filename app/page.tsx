import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = siteContent.en.meta;

export default function HomePage() {
  return <SitePage content={siteContent.en} basePath={process.env.PAGES_BASE_PATH || ""} />;
}
