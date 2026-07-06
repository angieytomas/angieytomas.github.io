import type { Metadata } from "next";
import "./globals.css";
import { siteMeta } from "@/content/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomasandangie.com"),
  title: {
    default: siteMeta.title,
    template: "%s | Tomas & Angie"
  },
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.image],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
