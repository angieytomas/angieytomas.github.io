import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { FaqList } from "@/components/faq-list";
import { siteContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: `FAQ | ${siteContent.en.meta.title}`,
  description: siteContent.en.faq.intro
};

export default function Page() {
  const content = siteContent.en;

  return (
    <ContentPage content={content} title={content.faq.title} intro={content.faq.intro}>
      <FaqList items={content.faq.items} />
    </ContentPage>
  );
}
