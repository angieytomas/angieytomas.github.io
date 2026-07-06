import type { SiteContent } from "../utils/site";
import { RSVP_EMBED_URL } from "./rsvp";

export const en: SiteContent = {
  lang: "en",
  meta: {
    title: "Angie and Tomas in Buenos Aires",
    description: "Temporary bilingual wedding website with the key dates, Buenos Aires plans, RSVP details, and practical travel tips."
  },
  nav: [
    { label: "Details", href: "#details" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Travel", href: "#travel" },
    { label: "FAQ", href: "#faq" }
  ],
  languageSwitcher: {
    label: "ES",
    otherLanguageLabel: "Ver en espanol",
    otherLanguageHref: "es/"
  },
  hero: {
    eyebrow: "Temporary save-the-date site",
    names: "Angie & Tomas",
    date: "Saturday, 20 March 2027",
    location: "Buenos Aires, Argentina",
    intro: "We are sharing the first important details now so you can start planning. Please block Saturday, 20 March 2027 for the wedding, and if you can, also keep Thursday, 18 March and Sunday, 21 March free for relaxed plans around the celebration. More information will be added here soon.",
    primaryCta: "RSVP now",
    secondaryCta: "View details",
    asideTemporaryLabel: "Temporary version",
    asideTemporaryText: "This site is a first draft. The key details are here, and the fuller plan is coming soon.",
    asideGuestLabel: "What matters now",
    asideGuestText: "For the moment, the main things to note are the date, Buenos Aires, the RSVP, and a few travel tips."
  },
  details: {
    title: "Key Details",
    intro: "This is a temporary version of the website, so some pieces are still to be confirmed. For now, please use these details for planning.",
    cards: [
      {
        title: "Main celebration",
        description: "The wedding celebration will be in Buenos Aires. We will share the exact venue, timings, and logistics as soon as they are confirmed.",
        meta: "Saturday, 20 March 2027"
      },
      {
        title: "Extra dates to hold",
        description: "If your trip allows it, please also keep Thursday, 18 March and Sunday, 21 March free. We are hoping to do something relaxed with everyone on those days too.",
        meta: "Thursday, 18 March and Sunday, 21 March 2027"
      },
      {
        title: "More details soon",
        description: "We still have a number of things to finalize, so think of this as the early planning version. We will add venue information, schedule, accommodation suggestions, and local recommendations soon.",
        meta: "Thank you for your patience"
      }
    ],
    mapLabel: "Open Buenos Aires in Google Maps",
    mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina",
    timelineTitle: "Current plan",
    timeline: [
      {
        time: "Thu 18 Mar",
        title: "Chill get-together",
        description: "We are hoping to organize something easy and informal for anyone already in town."
      },
      {
        time: "Sat 20 Mar",
        title: "Wedding day",
        description: "The main celebration in Buenos Aires."
      },
      {
        time: "Sun 21 Mar",
        title: "Wind-down plans",
        description: "We would love to do one more relaxed plan together before everyone heads home."
      }
    ]
  },
  rsvp: {
    title: "RSVP",
    intro: "Please RSVP when you can, even if you are still sorting out travel. Early replies help a lot while we keep planning.",
    embedNotice: "If the embedded form does not load for you, use the button to open it in a new tab.",
    embedUrl: RSVP_EMBED_URL,
    openFormLabel: "Open RSVP form",
    deadlineLabel: "Please reply as soon as you can"
  },
  travel: {
    title: "Travel Tips",
    intro: "For now, the most useful thing is to plan around Buenos Aires and keep the trip as simple as possible.",
    cards: [
      {
        title: "Airport guidance",
        description: "Most international guests should plan to arrive directly into Buenos Aires, usually via Ezeiza International Airport (EZE). There is no Mendoza leg involved."
      },
      {
        title: "Flight tips",
        description: "If you think you may come, booking earlier is usually kinder on both price and route options. A flexible fare can be helpful while the finer details are still coming together."
      },
      {
        title: "Passport & visa",
        description: "Please check passport validity and entry requirements well in advance. Some nationalities may need to confirm visa rules or reciprocity requirements."
      },
      {
        title: "Insurance",
        description: "Travel insurance is strongly recommended for international guests, especially if your trip includes multiple flights or baggage connections."
      },
      {
        title: "Getting around",
        description: "In Buenos Aires, ride-hailing apps and taxis are easy options for getting around. We will share any event-specific transport notes once plans are finalized."
      }
    ]
  },
  stay: {
    title: "Where to Stay",
    intro: "We will share more precise recommendations later. For now, these are the kinds of areas to keep in mind in Buenos Aires.",
    cards: [
      {
        title: "Palermo",
        description: "A popular area with lots of cafes, restaurants, and short-term rental options. A comfortable base if you want an easy city stay."
      },
      {
        title: "Recoleta",
        description: "A classic neighborhood with hotels, wide avenues, and a calm, polished feel. Good if you prefer a more traditional area."
      },
      {
        title: "Book something flexible",
        description: "Because more event details are still coming, a flexible cancellation policy may be a good idea if you are booking early."
      }
    ]
  },
  guide: {
    title: "Local Notes",
    intro: "A few quick tips for anyone planning a trip to Buenos Aires.",
    cards: [
      {
        title: "Money",
        description: "Card acceptance is common in many places, but carrying some cash is still useful. Exchange rates and payment habits can change, so check current advice before traveling."
      },
      {
        title: "Weather",
        description: "March is late summer in Buenos Aires, so expect warm days and pleasant evenings, with the possibility of some humidity."
      },
      {
        title: "SIM & eSIM",
        description: "If your phone supports it, an eSIM is often the easiest option. Otherwise, a local SIM can be picked up in larger cities."
      },
      {
        title: "Plugs",
        description: "Argentina commonly uses type C and type I plugs. Bring an adapter if needed and double-check your chargers are voltage compatible."
      },
      {
        title: "Safety & customs",
        description: "Use the same common-sense travel habits you would in any city. Late dinners, warm hospitality, and long celebrations are part of the rhythm here."
      }
    ]
  },
  activities: {
    title: "Around the Weekend",
    intro: "We do not have the full social plan yet, but these are the moments we are hoping to shape around the wedding.",
    items: [
      {
        title: "Thursday, 18 March",
        description: "A relaxed meet-up for anyone who arrives early."
      },
      {
        title: "Saturday, 20 March",
        description: "The wedding celebration in Buenos Aires."
      },
      {
        title: "Sunday, 21 March",
        description: "A low-key plan before goodbyes and departures."
      }
    ]
  },
  faq: {
    title: "FAQ",
    intro: "A few quick answers for now. We will add more once plans are locked in.",
    items: [
      {
        question: "Is this the final website?",
        answer: "Not yet. This is the temporary version with the most important planning information, and we will update it as more details are confirmed."
      },
      {
        question: "Where is the wedding?",
        answer: "In Buenos Aires, Argentina. We will share the exact venue and schedule as soon as they are finalized."
      },
      {
        question: "Should I block other dates besides the wedding day?",
        answer: "Yes, if possible. We would love for guests to also keep Thursday, 18 March and Sunday, 21 March 2027 free for more relaxed plans."
      },
      {
        question: "Do I need to wait for all the details before I RSVP?",
        answer: "No. If you already know whether you are likely to come, an early RSVP is very helpful."
      },
      {
        question: "Should I plan travel through Mendoza?",
        answer: "No. Everything for now is centered on Buenos Aires."
      }
    ]
  },
  stickyCta: "RSVP",
  footer: "Temporary wedding website for Angie and Tomas in Buenos Aires."
};
