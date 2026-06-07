import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://carreradesouza.github.io/wedding_website/",
      lastModified: "2026-06-07"
    },
    {
      url: "https://carreradesouza.github.io/wedding_website/nl/",
      lastModified: "2026-06-07"
    }
  ];
}
