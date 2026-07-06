const DEFAULT_RSVP_URL =
  process.env.NEXT_PUBLIC_RSVP_URL ||
  "https://tally.so/embed/2ElPyg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export type Locale = "en" | "nl";

export type NavItem = {
  label: string;
  href: string;
};

export type WeekendEvent = {
  day: string;
  title: string;
  time: string;
  place: string;
  note: string;
};

export type TravelItem = {
  title: string;
  text: string;
};

export type StayItem = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  languageToggle: {
    label: string;
    href: string;
  };
  menu: NavItem[];
  home: {
    eyebrow: string;
    names: string;
    subtitle: string;
    location: string;
    date: string;
    intro: string;
    temporaryNote: string;
    buttons: NavItem[];
    extraDatesLabel: string;
    extraDatesValue: string;
  };
  weekend: {
    title: string;
    intro: string;
    events: WeekendEvent[];
  };
  rsvp: {
    title: string;
    intro: string;
    points: string[];
    buttonLabel: string;
    buttonHref: string;
  };
  travel: {
    title: string;
    intro: string;
    items: TravelItem[];
  };
  stay: {
    title: string;
    intro: string;
    items: StayItem[];
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
  footer: string;
};

const enButtons: NavItem[] = [
  { label: "Weekend", href: "/weekend" },
  { label: "RSVP", href: "/rsvp" },
  { label: "Travel", href: "/travel" },
  { label: "Stay", href: "/stay" },
  { label: "FAQ", href: "/faq" }
];

const nlButtons: NavItem[] = [
  { label: "Weekend", href: "/nl/weekend" },
  { label: "RSVP", href: "/nl/rsvp" },
  { label: "Reis", href: "/nl/travel" },
  { label: "Verblijf", href: "/nl/stay" },
  { label: "FAQ", href: "/nl/faq" }
];

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    meta: {
      title: "Angie and Tomas | Buenos Aires",
      description: "Minimal wedding website for Angie and Tomas in Buenos Aires."
    },
    languageToggle: {
      label: "NL",
      href: "/nl"
    },
    menu: enButtons,
    home: {
      eyebrow: "Temporary version",
      names: "Angie and Tomas",
      subtitle: "Join us in Buenos Aires",
      location: "Buenos Aires, Argentina",
      date: "Saturday, 20 March 2027",
      intro: "The essential information is here for now. More details will follow.",
      temporaryNote: "Please plan around Buenos Aires only. Thursday 18 March and Sunday 21 March may also include relaxed plans.",
      buttons: enButtons,
      extraDatesLabel: "Also hold",
      extraDatesValue: "Thursday 18 March and Sunday 21 March 2027"
    },
    weekend: {
      title: "Wedding Weekend",
      intro: "A simple overview of the weekend as it stands now.",
      events: [
        {
          day: "Thu 18 Mar",
          title: "Something chill",
          time: "Evening",
          place: "Buenos Aires",
          note: "Relaxed plans for anyone already in town."
        },
        {
          day: "Sat 20 Mar",
          title: "Wedding celebration",
          time: "Main event",
          place: "Buenos Aires",
          note: "This is the date to build the trip around."
        },
        {
          day: "Sun 21 Mar",
          title: "Slow goodbye",
          time: "Daytime",
          place: "Buenos Aires",
          note: "A final easy plan before departures."
        }
      ]
    },
    rsvp: {
      title: "RSVP",
      intro: "Please reply as soon as you can, even if some travel details are still open.",
      points: ["Attendance", "Dietary restrictions", "Arrival date", "Departure date"],
      buttonLabel: "Open RSVP form",
      buttonHref: DEFAULT_RSVP_URL
    },
    travel: {
      title: "Travel",
      intro: "Only the planning essentials for now.",
      items: [
        {
          title: "Flights",
          text: "Plan to fly into Buenos Aires. Most international guests will arrive via Ezeiza, EZE."
        },
        {
          title: "Entry",
          text: "Check passport validity and entry requirements well in advance for your nationality."
        },
        {
          title: "Money",
          text: "Cards are common, but carrying some cash is still useful."
        },
        {
          title: "Phone",
          text: "An eSIM is usually the easiest option for a short stay."
        },
        {
          title: "Weather",
          text: "Expect warm March weather and bring light layers for the evening."
        }
      ]
    },
    stay: {
      title: "Where to Stay",
      intro: "A few simple neighborhood suggestions in Buenos Aires.",
      items: [
        {
          title: "Palermo",
          text: "The easiest all-round option for cafes, restaurants, and a lively city base."
        },
        {
          title: "Recoleta",
          text: "A calmer and more classic area if you prefer something polished and quiet."
        },
        {
          title: "Belgrano",
          text: "A more residential option if you want a slower pace."
        }
      ]
    },
    faq: {
      title: "FAQ",
      intro: "Only the most relevant questions for now.",
      items: [
        {
          question: "Is this the final website?",
          answer: "No. This is a temporary version with the essentials only."
        },
        {
          question: "Where is everything happening?",
          answer: "In Buenos Aires, Argentina. No Mendoza plans are involved."
        },
        {
          question: "Do I need to RSVP already?",
          answer: "Yes, please. Early replies help a lot while details are still being finalized."
        },
        {
          question: "Should I keep other dates free?",
          answer: "If possible, yes. Thursday 18 March and Sunday 21 March may also include plans."
        },
        {
          question: "Which area should I stay in?",
          answer: "Palermo is probably the easiest choice for most guests."
        },
        {
          question: "What airport should I use?",
          answer: "Most international guests should plan around Ezeiza, EZE."
        }
      ]
    },
    footer: "Angie and Tomas, Buenos Aires, March 2027"
  },
  nl: {
    locale: "nl",
    meta: {
      title: "Angie en Tomas | Buenos Aires",
      description: "Minimalistische trouwwebsite voor Angie en Tomas in Buenos Aires."
    },
    languageToggle: {
      label: "EN",
      href: "/"
    },
    menu: nlButtons,
    home: {
      eyebrow: "Tijdelijke versie",
      names: "Angie en Tomas",
      subtitle: "Kom naar Buenos Aires",
      location: "Buenos Aires, Argentinie",
      date: "Zaterdag 20 maart 2027",
      intro: "Voor nu staat alleen de belangrijkste informatie hier. Meer details volgen later.",
      temporaryNote: "Plan alleen rond Buenos Aires. Donderdag 18 maart en zondag 21 maart kunnen ook nog relaxte plannen hebben.",
      buttons: nlButtons,
      extraDatesLabel: "Houd ook vrij",
      extraDatesValue: "Donderdag 18 maart en zondag 21 maart 2027"
    },
    weekend: {
      title: "Trouwweekend",
      intro: "Een eenvoudige versie van het weekend zoals het nu gepland is.",
      events: [
        {
          day: "Do 18 mrt",
          title: "Iets rustigs",
          time: "Avond",
          place: "Buenos Aires",
          note: "Ontspannen plannen voor iedereen die al in de stad is."
        },
        {
          day: "Za 20 mrt",
          title: "Trouwfeest",
          time: "Hoofdmoment",
          place: "Buenos Aires",
          note: "Dit is de datum waar de reis omheen gebouwd moet worden."
        },
        {
          day: "Zo 21 mrt",
          title: "Rustige afsluiting",
          time: "Overdag",
          place: "Buenos Aires",
          note: "Nog een eenvoudig moment voor vertrek."
        }
      ]
    },
    rsvp: {
      title: "RSVP",
      intro: "Laat graag zo snel mogelijk weten of je komt, ook als sommige reisdetails nog open zijn.",
      points: ["Aanwezigheid", "Dieetwensen", "Aankomstdatum", "Vertrekdatum"],
      buttonLabel: "Open RSVP formulier",
      buttonHref: DEFAULT_RSVP_URL
    },
    travel: {
      title: "Reis",
      intro: "Alleen de belangrijkste planninginformatie voor nu.",
      items: [
        {
          title: "Vluchten",
          text: "Plan om naar Buenos Aires te vliegen. De meeste internationale gasten komen aan via Ezeiza, EZE."
        },
        {
          title: "Toegang",
          text: "Check op tijd de geldigheid van je paspoort en de inreisregels voor jouw nationaliteit."
        },
        {
          title: "Geld",
          text: "Kaarten werken vaak, maar wat cash is nog steeds handig."
        },
        {
          title: "Telefoon",
          text: "Een eSIM is meestal de makkelijkste optie voor een korte reis."
        },
        {
          title: "Weer",
          text: "Reken op warm maartweer en neem lichte lagen mee voor de avond."
        }
      ]
    },
    stay: {
      title: "Waar te verblijven",
      intro: "Een paar eenvoudige buurtaanbevelingen in Buenos Aires.",
      items: [
        {
          title: "Palermo",
          text: "De makkelijkste all-round keuze voor cafes, restaurants en een levendige uitvalsbasis."
        },
        {
          title: "Recoleta",
          text: "Een rustigere en klassiekere buurt als je iets netters en stillers wilt."
        },
        {
          title: "Belgrano",
          text: "Een meer residentiele optie als je een trager tempo wilt."
        }
      ]
    },
    faq: {
      title: "FAQ",
      intro: "Alleen de meest relevante vragen voor nu.",
      items: [
        {
          question: "Is dit al de definitieve website?",
          answer: "Nee. Dit is een tijdelijke versie met alleen de essentie."
        },
        {
          question: "Waar gebeurt alles?",
          answer: "In Buenos Aires, Argentinie. Er zijn geen Mendoza-plannen."
        },
        {
          question: "Moet ik nu al RSVP'en?",
          answer: "Ja graag. Vroege antwoorden helpen veel terwijl details nog worden afgerond."
        },
        {
          question: "Moet ik andere dagen ook vrijhouden?",
          answer: "Als het lukt wel. Donderdag 18 maart en zondag 21 maart kunnen ook plannen hebben."
        },
        {
          question: "In welke buurt kan ik het beste verblijven?",
          answer: "Voor de meeste gasten is Palermo waarschijnlijk de makkelijkste keuze."
        },
        {
          question: "Welke luchthaven is handig?",
          answer: "De meeste internationale gasten kunnen het beste uitgaan van Ezeiza, EZE."
        }
      ]
    },
    footer: "Angie en Tomas, Buenos Aires, maart 2027"
  }
};
