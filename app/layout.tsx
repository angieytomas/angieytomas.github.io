import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angie and Tomas",
  description: "Minimal wedding website for Buenos Aires."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
