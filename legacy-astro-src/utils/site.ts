export type Language = "en" | "es";

export type LinkItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type AreaItem = {
  title: string;
  description: string;
  meta?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  lang: Language;
  meta: {
    title: string;
    description: string;
  };
  nav: LinkItem[];
  languageSwitcher: {
    label: string;
    otherLanguageLabel: string;
    otherLanguageHref: string;
  };
  hero: {
    eyebrow: string;
    names: string;
    date: string;
    location: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    asideTemporaryLabel: string;
    asideTemporaryText: string;
    asideGuestLabel: string;
    asideGuestText: string;
  };
  details: {
    title: string;
    intro: string;
    cards: AreaItem[];
    mapLabel: string;
    mapHref: string;
    timelineTitle: string;
    timeline: TimelineItem[];
  };
  rsvp: {
    title: string;
    intro: string;
    embedNotice: string;
    embedUrl: string;
    openFormLabel: string;
    deadlineLabel: string;
  };
  travel: {
    title: string;
    intro: string;
    cards: AreaItem[];
  };
  stay: {
    title: string;
    intro: string;
    cards: AreaItem[];
  };
  guide: {
    title: string;
    intro: string;
    cards: AreaItem[];
  };
  activities: {
    title: string;
    intro: string;
    items: AreaItem[];
  };
  faq: {
    title: string;
    intro: string;
    items: FAQItem[];
  };
  stickyCta: string;
  footer: string;
};
