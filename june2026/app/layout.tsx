import type { Metadata } from "next";
import { Calligraffitti, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/content/site-data";

const calligraffitti = Calligraffitti({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calligraffitti",
  adjustFontFallback: false
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomasandangie.com"),
  title: {
    default: siteMeta.title,
    template: "%s | Angie & Tomas"
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
      <body className={`${calligraffitti.variable} ${libreBaskerville.variable}`}>{children}</body>
    </html>
  );
}
