const DEFAULT_RSVP_URL =
  process.env.NEXT_PUBLIC_RSVP_URL ||
  "https://tally.so/embed/2ElPyg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export type ExpandCard = {
  title: string;
  eyebrow: string;
  highlights: string[];
  footer?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type WeekendEvent = {
  slug: string;
  day: string;
  title: string;
  time: string;
  venue: string;
  dressCode: string;
  transport: string;
  notes: string[];
  mapHref: string;
};

export type Neighborhood = {
  title: string;
  vibe: string;
  sleep: string;
  coffee: string;
  dinner: string;
  distance: string;
  mapHref: string;
};

export type GuideCategory = {
  title: string;
  eyebrow: string;
  picks: string[];
  mapHref: string;
};

export type ChecklistGroup = {
  title: string;
  items: string[];
};

export type StyleBoard = {
  title: string;
  subtitle: string;
  looks: string[];
  palette: string[];
};

export type Destination = {
  title: string;
  why: string;
  stay: string;
  season: string;
  highlights: string[];
};

export type Itinerary = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  stops: string[];
  note: string;
};

export type FavoritePick = {
  label: string;
  title: string;
  note: string;
  mapHref: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  title: string;
  caption: string;
  size: "square" | "tall" | "wide";
  tone: "stone" | "olive" | "wine" | "ink";
};

export type SiteContent = {
  locale: "en" | "nl";
  meta: {
    title: string;
    description: string;
  };
  ui: {
    heroBadge: string;
    countdown: string;
    temporaryStatusLabel: string;
    temporaryStatusText: string;
    searchEyebrow: string;
    searchTitle: string;
    searchIntro: string;
    searchPlaceholder: string;
    whatWeNeedLabel: string;
    rsvpHelperText: string;
    venueLabel: string;
    transportLabel: string;
    openMapLabel: string;
    exploreMapLabel: string;
    searchFaqLabel: string;
    faqPlaceholder: string;
    answersReadySuffix: string;
    openLabel: string;
    closeLabel: string;
    shareLabel: string;
    copiedLabel: string;
  };
  languageToggle: {
    label: string;
    href: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    eyebrow: string;
    title: string;
    location: string;
    weekend: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    notes: string[];
  };
  quickFacts: Array<{
    label: string;
    value: string;
  }>;
  weekend: {
    title: string;
    intro: string;
    events: WeekendEvent[];
  };
  rsvp: {
    title: string;
    intro: string;
    fields: string[];
    buttonLabel: string;
    buttonHref: string;
    note: string;
  };
  travel: {
    title: string;
    intro: string;
    cards: ExpandCard[];
    snapshotLabel: string;
  };
  stay: {
    title: string;
    intro: string;
    neighborhoods: Neighborhood[];
  };
  guide: {
    title: string;
    intro: string;
    categories: GuideCategory[];
  };
  packing: {
    title: string;
    intro: string;
    groups: ChecklistGroup[];
  };
  dressCode: {
    title: string;
    intro: string;
    boards: StyleBoard[];
  };
  explore: {
    title: string;
    intro: string;
    destinations: Destination[];
  };
  itineraries: {
    title: string;
    intro: string;
    items: Itinerary[];
  };
  favorites: {
    title: string;
    intro: string;
    items: FavoritePick[];
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
  gallery: {
    title: string;
    intro: string;
    items: GalleryItem[];
  };
  finalNote: {
    eyebrow: string;
    title: string;
    body: string;
  };
};

export const siteContent: Record<"en" | "nl", SiteContent> = {
  en: {
    locale: "en",
    meta: {
      title: "Angie and Tomas | Buenos Aires Wedding Weekend",
      description:
        "An editorial travel guide for Angie and Tomas's wedding weekend in Buenos Aires, with RSVP, travel notes, itineraries, and planning tools."
    },
    ui: {
      heroBadge: "Wedding weekend",
      countdown: "Countdown",
      temporaryStatusLabel: "Temporary status",
      temporaryStatusText: "This edition carries the essential planning layer first. The sharper venue details come next.",
      searchEyebrow: "Search",
      searchTitle: "Find what matters fast",
      searchIntro: "Search for neighborhoods, travel topics, itinerary ideas, or weekend moments.",
      searchPlaceholder: "Try Palermo, adapters, brunch, Patagonia...",
      whatWeNeedLabel: "What we need",
      rsvpHelperText: "The form is external so you can answer quickly on phone or desktop.",
      venueLabel: "Venue",
      transportLabel: "Transport",
      openMapLabel: "Open map",
      exploreMapLabel: "Explore on map",
      searchFaqLabel: "Search FAQ",
      faqPlaceholder: "Search safety, weather, adapters...",
      answersReadySuffix: "answers ready",
      openLabel: "Open",
      closeLabel: "Close",
      shareLabel: "Share link",
      copiedLabel: "Copied"
    },
    languageToggle: {
      label: "NL",
      href: "/nl"
    },
    nav: [
      { label: "Weekend", href: "#weekend" },
      { label: "RSVP", href: "#rsvp" },
      { label: "Travel", href: "#travel" },
      { label: "Stay", href: "#stay" },
      { label: "Guide", href: "#guide" },
      { label: "Dress", href: "#dress-code" },
      { label: "FAQ", href: "#faq" }
    ],
    hero: {
      eyebrow: "Editorial temporary edition",
      title: "Angie and Tomas",
      location: "Buenos Aires, Argentina",
      weekend: "March 18-21, 2027",
      intro:
        "Less wedding template, more travel magazine. This first release is built to help everyone plan the trip, lock in the dates, RSVP early, and start imagining a longer stay in Argentina.",
      primaryCta: "RSVP",
      secondaryCta: "Start planning",
      notes: [
        "Thursday 18 March: relaxed welcome plans",
        "Saturday 20 March: wedding celebration",
        "Sunday 21 March: farewell brunch energy"
      ]
    },
    quickFacts: [
      { label: "Main date", value: "Saturday, 20 March 2027" },
      { label: "City", value: "Buenos Aires only" },
      { label: "Guests", value: "Mostly Netherlands + Europe" },
      { label: "Status", value: "Temporary site, fuller details soon" }
    ],
    weekend: {
      title: "Wedding Weekend",
      intro: "Three moments. One city. Open each card for the planning essentials.",
      events: [
        {
          slug: "welcome-drinks",
          day: "Thu 18 Mar",
          title: "Welcome Drinks",
          time: "19:30 until late",
          venue: "Central Buenos Aires venue to be confirmed",
          dressCode: "City evening, polished but easy",
          transport: "Taxi or Cabify will be the easiest option.",
          notes: [
            "Think drinks, catching up, and a warm start to the weekend.",
            "Final address and exact timing will land here soon."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        },
        {
          slug: "wedding-celebration",
          day: "Sat 20 Mar",
          title: "Wedding Celebration",
          time: "Late afternoon into the night",
          venue: "Buenos Aires venue to be confirmed",
          dressCode: "Editorial formal",
          transport: "Event transport guidance will be shared closer to the date.",
          notes: [
            "This is the main event to build your trip around.",
            "Venue, timing, and logistics will be updated in the next release."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        },
        {
          slug: "farewell-brunch",
          day: "Sun 21 Mar",
          title: "Farewell Brunch",
          time: "Around 13:00",
          venue: "Northside Buenos Aires location to be confirmed",
          dressCode: "Relaxed smart casual",
          transport: "Come by taxi, Cabify, or walk if you stay nearby.",
          notes: [
            "A softer final note before departures.",
            "Ideal for anyone staying through Sunday."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        }
      ]
    },
    rsvp: {
      title: "RSVP",
      intro: "Keep it simple. Early answers help before every detail is locked.",
      fields: [
        "Attendance",
        "Dietary restrictions",
        "Where you plan to stay",
        "Arrival date",
        "Departure date",
        "Song request"
      ],
      buttonLabel: "Open RSVP form",
      buttonHref: DEFAULT_RSVP_URL,
      note: "If the embedded form is slow, open it in a new tab and you are done in a minute."
    },
    travel: {
      title: "Travel to Argentina",
      intro: "Concise planning notes, built for quick scanning.",
      snapshotLabel: "Download travel snapshot",
      cards: [
        {
          eyebrow: "Flights",
          title: "Search smart, then book when it feels right",
          highlights: [
            "Start with Google Flights, Skyscanner, and Momondo.",
            "Most guests will search from Amsterdam, Brussels, Paris, Frankfurt, or London.",
            "Flexible fares are helpful while the final venue details are still coming."
          ],
          footer: "Plan for Buenos Aires only. No Mendoza leg.",
          links: [
            { label: "Google Flights", href: "https://www.google.com/travel/flights" },
            { label: "Skyscanner", href: "https://www.skyscanner.com" },
            { label: "Momondo", href: "https://www.momondo.com" }
          ]
        },
        {
          eyebrow: "Entry",
          title: "Check your passport and visa rules early",
          highlights: [
            "Confirm passport validity well ahead of travel.",
            "Check current entry requirements for your nationality directly with official Argentine sources and your airline.",
            "Keep digital copies of passport, insurance, and confirmations."
          ]
        },
        {
          eyebrow: "Money",
          title: "Cards are common, cash still helps",
          highlights: [
            "Major cards work in many hotels, restaurants, and shops.",
            "Carry a little cash for taxis, small cafes, or quick purchases.",
            "Exchange and payment habits can shift, so check current advice before departure."
          ]
        },
        {
          eyebrow: "eSIM",
          title: "Stay connected without the airport scramble",
          highlights: [
            "An eSIM is usually the easiest option for short stays.",
            "If you prefer a local SIM, buy it once you are in the city.",
            "Download offline maps before the flight."
          ]
        },
        {
          eyebrow: "Power",
          title: "Adapters and charging",
          highlights: [
            "Argentina commonly uses type C and type I plugs.",
            "Bring one adapter per frequent-use device.",
            "A small power bank will make day trips easier."
          ]
        },
        {
          eyebrow: "Weather",
          title: "Late summer, warm light, easy layers",
          highlights: [
            "March in Buenos Aires is usually warm with pleasant evenings.",
            "Pack for daytime sun, indoor air-conditioning, and a late-night layer.",
            "Comfortable shoes matter more than overpacking."
          ]
        }
      ]
    },
    stay: {
      title: "Where to Stay",
      intro: "Five neighborhoods. Five different moods. Choose the one that fits your trip style.",
      neighborhoods: [
        {
          title: "Palermo",
          vibe: "Creative, social, design-forward",
          sleep: "Great for boutique hotels and stylish apartments.",
          coffee: "Best for morning cafes, terraces, and easy starts.",
          dinner: "Good if you want options every night without much planning.",
          distance: "A strong all-round base for the whole weekend.",
          mapHref: "https://maps.google.com/?q=Palermo+Buenos+Aires"
        },
        {
          title: "Recoleta",
          vibe: "Classic, elegant, calm",
          sleep: "Good for polished hotels and a more traditional stay.",
          coffee: "Think salons, quiet corners, and long breakfasts.",
          dinner: "Great for easy evenings and refined city pacing.",
          distance: "Convenient for guests who want a smoother, quieter base.",
          mapHref: "https://maps.google.com/?q=Recoleta+Buenos+Aires"
        },
        {
          title: "Belgrano",
          vibe: "Residential, leafy, low-key",
          sleep: "A strong choice for longer stays or apartment bookings.",
          coffee: "Less scene, more neighborhood rhythm.",
          dinner: "Good local spots without the Palermo intensity.",
          distance: "Ideal if you value calm over nightlife density.",
          mapHref: "https://maps.google.com/?q=Belgrano+Buenos+Aires"
        },
        {
          title: "Puerto Madero",
          vibe: "Modern, sleek, hotel-led",
          sleep: "Useful if you want larger hotels and straightforward logistics.",
          coffee: "Best for riverside walks and hotel lounge starts.",
          dinner: "More polished than characterful, but easy.",
          distance: "Works well for short stays with minimal friction.",
          mapHref: "https://maps.google.com/?q=Puerto+Madero+Buenos+Aires"
        },
        {
          title: "San Telmo",
          vibe: "Historic, textured, atmospheric",
          sleep: "Great if you want character and older architecture.",
          coffee: "Good for slower mornings and weekend wandering.",
          dinner: "A strong choice for people who like mood over polish.",
          distance: "Best if you want a more layered, local-feeling city base.",
          mapHref: "https://maps.google.com/?q=San+Telmo+Buenos+Aires"
        }
      ]
    },
    guide: {
      title: "Buenos Aires Guide",
      intro: "Short category hits. No essays. Just where to point your curiosity.",
      categories: [
        {
          eyebrow: "Coffee",
          title: "Start in Palermo Soho, drift to Recoleta, finish in Belgrano.",
          picks: ["Early cortado", "Slow breakfast", "Work-friendly corner", "Afternoon reset"],
          mapHref: "https://maps.google.com/?q=coffee+Buenos+Aires"
        },
        {
          eyebrow: "Wine bars",
          title: "Low light, late starts, and one more glass.",
          picks: ["Palermo for natural wine", "Chacarita for smaller rooms", "Recoleta for classic pours"],
          mapHref: "https://maps.google.com/?q=wine+bar+Buenos+Aires"
        },
        {
          eyebrow: "Restaurants",
          title: "Book one polished dinner, then leave room for instinct.",
          picks: ["Parrilla night", "Pasta night", "Long lunch", "Late reservation"],
          mapHref: "https://maps.google.com/?q=restaurants+Buenos+Aires"
        },
        {
          eyebrow: "Shopping",
          title: "Independent labels, leather, paper goods, and home objects.",
          picks: ["Palermo boutiques", "Recoleta galleries", "Design stores", "Bookshops"],
          mapHref: "https://maps.google.com/?q=shopping+Buenos+Aires"
        },
        {
          eyebrow: "Culture",
          title: "Museums, cinema, theater, and old buildings that still feel alive.",
          picks: ["Museum afternoon", "Cinema evening", "Bookshop stop", "Historic theater"],
          mapHref: "https://maps.google.com/?q=culture+Buenos+Aires"
        },
        {
          eyebrow: "Parks",
          title: "Good for a reset between city hours and event dressing.",
          picks: ["Bosques walks", "Rose garden loop", "Jacaranda streets", "Riverside air"],
          mapHref: "https://maps.google.com/?q=parks+Buenos+Aires"
        },
        {
          eyebrow: "Architecture",
          title: "Stone facades, modern lines, and strong interior references.",
          picks: ["Recoleta facades", "Modern towers", "Historic passages", "Design museums"],
          mapHref: "https://maps.google.com/?q=architecture+Buenos+Aires"
        }
      ]
    },
    packing: {
      title: "What to Pack",
      intro: "Travel lighter than you think. Buenos Aires rewards restraint.",
      groups: [
        {
          title: "Wedding weekend",
          items: ["Event look", "Evening layer", "Small formal bag", "Comfortable second shoes"]
        },
        {
          title: "City exploration",
          items: ["Day bag", "Sunglasses", "Easy cotton layers", "Phone charger"]
        },
        {
          title: "Day trips",
          items: ["Water bottle", "Cap", "Portable battery", "Light shirt"]
        },
        {
          title: "Evenings",
          items: ["Light jacket", "Dressier shoe option", "Minimal jewelry", "Lip balm"]
        }
      ]
    },
    dressCode: {
      title: "Dress Code",
      intro: "Keep it clean, modern, and city-smart. The mood is polished, not fussy.",
      boards: [
        {
          title: "Welcome Drinks",
          subtitle: "Soft tailoring, silk, crisp shirting, easy confidence.",
          looks: ["Fluid dress", "Relaxed suit", "Sharp loafer", "Minimal jewelry"],
          palette: ["Ivory", "Charcoal", "Olive", "Deep wine"]
        },
        {
          title: "Wedding Day",
          subtitle: "Editorial formal with movement, structure, and restraint.",
          looks: ["Long line silhouette", "Black tie edge", "Structured blazer", "Elevated heel or polished flat"],
          palette: ["Black", "Stone", "Ink", "Burgundy accent"]
        },
        {
          title: "Farewell Brunch",
          subtitle: "Fresh, pared back, sunlight-friendly.",
          looks: ["Light set", "Cotton shirt", "Refined sandal", "Simple sunglasses"],
          palette: ["Warm white", "Sand", "Pale gray", "Muted olive"]
        }
      ]
    },
    explore: {
      title: "Explore Argentina",
      intro: "If you are crossing an ocean, consider stretching the trip.",
      destinations: [
        {
          title: "Buenos Aires",
          why: "Design, food, pace, and culture all in one place.",
          stay: "Best as the main base around the wedding weekend.",
          season: "Great in March for warm city days.",
          highlights: ["Palermo", "Recoleta", "San Telmo", "Museums"]
        },
        {
          title: "Iguazu Falls",
          why: "A dramatic contrast to the city.",
          stay: "Perfect as a two-night extension.",
          season: "Warm and lush in March.",
          highlights: ["Falls circuit", "Boat ride", "Jungle walks", "Brazil side views"]
        },
        {
          title: "Bariloche",
          why: "Lakes, mountains, and cool air.",
          stay: "Best for a slower scenic extension.",
          season: "Early autumn begins to soften the landscape.",
          highlights: ["Lake drives", "Boat days", "Chocolate shops", "Hiking"]
        },
        {
          title: "Patagonia",
          why: "Wide skies, glacier scale, and a full reset.",
          stay: "Worth it if you can add a longer block of days.",
          season: "March is one of the strongest travel windows.",
          highlights: ["Glacier country", "Windy plains", "Big views", "Lodge time"]
        },
        {
          title: "El Chalten",
          why: "For guests who want Argentina at its most cinematic.",
          stay: "Pair with a Patagonia extension.",
          season: "Excellent for shoulder-season trekking.",
          highlights: ["Trails", "Peak views", "Crisp mornings", "Long walks"]
        }
      ]
    },
    itineraries: {
      title: "Suggested Itineraries",
      intro: "Choose a tempo, then build from there.",
      items: [
        {
          slug: "weekend-only",
          title: "Option A",
          duration: "4-5 days",
          route: "Buenos Aires wedding weekend",
          stops: ["Arrive Thursday", "Welcome Drinks", "Wedding Day", "Farewell Brunch", "One extra city day"],
          note: "Best for guests keeping the trip compact but still easy."
        },
        {
          slug: "city-and-falls",
          title: "Option B",
          duration: "7-8 days",
          route: "Buenos Aires + Iguazu",
          stops: ["City stay", "Wedding weekend", "Two nights at the falls", "Fly back out"],
          note: "The strongest contrast option with minimal overplanning."
        },
        {
          slug: "city-and-lakes",
          title: "Option C",
          duration: "10-12 days",
          route: "Buenos Aires + Bariloche",
          stops: ["Wedding weekend", "Slow lake days", "Scenic meals", "One hiking day"],
          note: "Good for guests who want beauty without a very intense schedule."
        },
        {
          slug: "city-and-patagonia",
          title: "Option D",
          duration: "14+ days",
          route: "Buenos Aires + Patagonia",
          stops: ["Wedding weekend", "Southbound flight", "Big landscape days", "One quiet lodge finish"],
          note: "The long-form version for anyone ready to turn this into a major trip."
        }
      ]
    },
    favorites: {
      title: "Favorite Places",
      intro: "Personal, not exhaustive. Think of these as mood pins from the couple.",
      items: [
        {
          label: "Favorite restaurant mood",
          title: "Late dinner, one bottle too many, no rush home",
          note: "The ideal night has sharp lighting, soft music, and a table that keeps stretching.",
          mapHref: "https://maps.google.com/?q=Palermo+restaurants+Buenos+Aires"
        },
        {
          label: "Favorite wine bar mood",
          title: "Standing room, natural wine, city energy",
          note: "Less formal tasting, more one-great-glass turning into three.",
          mapHref: "https://maps.google.com/?q=wine+bar+Palermo+Buenos+Aires"
        },
        {
          label: "Favorite cafe ritual",
          title: "Morning coffee before the city fully wakes up",
          note: "Best done with sunlight, a paper map, and no agenda yet.",
          mapHref: "https://maps.google.com/?q=cafe+Recoleta+Buenos+Aires"
        },
        {
          label: "Favorite hotel feeling",
          title: "A quiet lobby, excellent sheets, one beautiful chair",
          note: "We love places that feel edited rather than overdesigned.",
          mapHref: "https://maps.google.com/?q=boutique+hotel+Buenos+Aires"
        },
        {
          label: "Favorite hidden gem energy",
          title: "A street that makes you slow down on purpose",
          note: "Buenos Aires is at its best when you leave room to wander.",
          mapHref: "https://maps.google.com/?q=hidden+gem+Buenos+Aires"
        },
        {
          label: "Favorite day trip",
          title: "A day that feels far away without much effort",
          note: "Think water, lunch, fresh air, then back to the city for dinner.",
          mapHref: "https://maps.google.com/?q=day+trip+from+Buenos+Aires"
        }
      ]
    },
    faq: {
      title: "FAQ",
      intro: "25 practical questions for a smoother trip.",
      items: [
        { question: "Is this the final website?", answer: "No. This is the first editorial edition with the essentials. Venue specifics and more personal recommendations will follow." },
        { question: "What date should I build the trip around?", answer: "Saturday, 20 March 2027 is the main date. If you can, also keep Thursday 18 and Sunday 21 March free." },
        { question: "Where is the wedding?", answer: "In Buenos Aires, Argentina. The exact venue is still to be confirmed." },
        { question: "Do I need to RSVP before every detail is final?", answer: "Yes, please. Early responses help us shape the weekend." },
        { question: "Can I arrive only for the wedding day?", answer: "Yes. The wider weekend is lovely if you can make it, but Saturday is the key commitment." },
        { question: "What airport should I use?", answer: "Most long-haul guests will arrive via Ezeiza International Airport, usually shown as EZE." },
        { question: "How far is the airport from the city?", answer: "Travel time depends on traffic, but build in a generous buffer on arrival and departure days." },
        { question: "Do I need a visa?", answer: "That depends on your passport. Check the current rules directly with official Argentine sources and your airline." },
        { question: "Should I carry cash?", answer: "A little, yes. Cards are common, but small cash amounts are still useful." },
        { question: "Can I drink tap water?", answer: "In Buenos Aires, tap water is generally considered fine, but bottled water is easy to find if you prefer it." },
        { question: "Do I need an adapter?", answer: "Usually yes, unless your plugs already match type C or type I." },
        { question: "What should I wear during the day?", answer: "Light layers, comfortable shoes, sunglasses, and something small for air-conditioned interiors." },
        { question: "What will the weather feel like?", answer: "Think warm late-summer city weather with easier evenings than peak summer." },
        { question: "Is Buenos Aires safe?", answer: "Use normal city awareness: keep an eye on bags, avoid flashing valuables, and use licensed rides at night." },
        { question: "Do people speak English?", answer: "In many hotels and restaurants, yes. A little Spanish still goes a long way." },
        { question: "What is the easiest way to get around?", answer: "Taxi and Cabify are usually the simplest options for guests." },
        { question: "Should I book accommodation now?", answer: "If you see a good flexible option in a neighborhood you like, that is a sensible move." },
        { question: "Which neighborhood is best for first-time visitors?", answer: "Palermo is the easiest all-round choice for most guests." },
        { question: "Should I plan anything through Mendoza?", answer: "No. This site and this wedding weekend are centered on Buenos Aires." },
        { question: "Do I need travel insurance?", answer: "Yes, it is a smart idea, especially for long-haul or multi-flight itineraries." },
        { question: "Can I make a longer trip out of this?", answer: "Absolutely. The itinerary section is designed for exactly that." },
        { question: "Is March a good time to visit Argentina?", answer: "Yes. It is a very appealing window for Buenos Aires and many other parts of the country." },
        { question: "Will there be transportation for events?", answer: "If we organize dedicated transport, we will publish the details once the venues are confirmed." },
        { question: "What kind of dress code should I expect?", answer: "Modern, refined, city-forward. Think editorial formal rather than traditional wedding styling." },
        { question: "Will this site keep changing?", answer: "Yes. Expect venue specifics, more city notes, and sharper recommendations in the next update." }
      ]
    },
    gallery: {
      title: "Gallery Notes",
      intro: "A moodboard for the weekend: texture, architecture, night light, and city rhythm.",
      items: [
        { title: "Arrival light", caption: "Warm stone, long shadows, first coffee.", size: "wide", tone: "stone" },
        { title: "City grid", caption: "Blocks, facades, and clean lines.", size: "tall", tone: "ink" },
        { title: "Table setting", caption: "Layered neutrals with one dark accent.", size: "square", tone: "wine" },
        { title: "Late dinner", caption: "Soft light and longer conversations.", size: "square", tone: "olive" },
        { title: "Saturday mood", caption: "Sharp tailoring, movement, and air.", size: "wide", tone: "stone" },
        { title: "Sunday finish", caption: "Easy pacing, daylight, one more hug.", size: "tall", tone: "olive" }
      ]
    },
    finalNote: {
      eyebrow: "From us",
      title: "Thank you for making the trip feel possible.",
      body: "We cannot wait to gather everyone we love in Buenos Aires. More details are on the way, but for now the most important thing is simple: save the dates, tell us if you think you can come, and start dreaming a little bigger than just one night."
    }
  },
  nl: {
    locale: "nl",
    meta: {
      title: "Angie en Tomas | Trouwweekend in Buenos Aires",
      description:
        "Een editorial travel guide voor het trouwweekend van Angie en Tomas in Buenos Aires, met RSVP, reisinfo, itineraries en praktische planning."
    },
    ui: {
      heroBadge: "Trouwweekend",
      countdown: "Aftellen",
      temporaryStatusLabel: "Tijdelijke status",
      temporaryStatusText: "Deze editie geeft eerst de essentiele planninglaag. Strakkere venue details volgen in de volgende update.",
      searchEyebrow: "Zoek",
      searchTitle: "Vind snel wat belangrijk is",
      searchIntro: "Zoek op buurten, reistopics, itinerary ideeen of weekendmomenten.",
      searchPlaceholder: "Probeer Palermo, adapters, brunch, Patagonia...",
      whatWeNeedLabel: "Wat we nodig hebben",
      rsvpHelperText: "Het formulier is extern zodat je het snel kunt invullen op mobiel of desktop.",
      venueLabel: "Locatie",
      transportLabel: "Transport",
      openMapLabel: "Open kaart",
      exploreMapLabel: "Bekijk op kaart",
      searchFaqLabel: "Zoek FAQ",
      faqPlaceholder: "Zoek veiligheid, weer, adapters...",
      answersReadySuffix: "antwoorden klaar",
      openLabel: "Open",
      closeLabel: "Sluit",
      shareLabel: "Deel link",
      copiedLabel: "Gekopieerd"
    },
    languageToggle: {
      label: "EN",
      href: "/"
    },
    nav: [
      { label: "Weekend", href: "#weekend" },
      { label: "RSVP", href: "#rsvp" },
      { label: "Reis", href: "#travel" },
      { label: "Verblijf", href: "#stay" },
      { label: "Gids", href: "#guide" },
      { label: "Dresscode", href: "#dress-code" },
      { label: "FAQ", href: "#faq" }
    ],
    hero: {
      eyebrow: "Tijdelijke editorial editie",
      title: "Angie en Tomas",
      location: "Buenos Aires, Argentinie",
      weekend: "18-21 maart 2027",
      intro:
        "Minder trouwtemplate, meer travel magazine. Deze eerste versie helpt iedereen om de reis te plannen, de data vrij te houden, vroeg te RSVP'en en misschien meteen een langere trip door Argentinie te overwegen.",
      primaryCta: "RSVP",
      secondaryCta: "Begin met plannen",
      notes: [
        "Donderdag 18 maart: relaxte welkomplannen",
        "Zaterdag 20 maart: trouwfeest",
        "Zondag 21 maart: farewell brunch"
      ]
    },
    quickFacts: [
      { label: "Hoofddatum", value: "Zaterdag 20 maart 2027" },
      { label: "Stad", value: "Alleen Buenos Aires" },
      { label: "Gasten", value: "Vooral Nederland + Europa" },
      { label: "Status", value: "Tijdelijke site, meer details volgen" }
    ],
    weekend: {
      title: "Trouwweekend",
      intro: "Drie momenten. Een stad. Open elke kaart voor de essentials.",
      events: [
        {
          slug: "welcome-drinks",
          day: "Do 18 mrt",
          title: "Welcome Drinks",
          time: "19:30 tot laat",
          venue: "Locatie in centraal Buenos Aires volgt nog",
          dressCode: "Stedelijk avond, verzorgd maar niet zwaar",
          transport: "Taxi of Cabify is het makkelijkst.",
          notes: [
            "Denk aan drankjes, bijkletsen en een warme start van het weekend.",
            "Definitief adres en exacte timing komen hier later."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        },
        {
          slug: "wedding-celebration",
          day: "Za 20 mrt",
          title: "Wedding Celebration",
          time: "Late namiddag tot diep in de nacht",
          venue: "Locatie in Buenos Aires volgt nog",
          dressCode: "Editorial formal",
          transport: "Eventtransport delen we dichter bij de datum.",
          notes: [
            "Dit is het hoofdmoment waar je je reis omheen kunt bouwen.",
            "Venue, timing en logistiek volgen in de volgende update."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        },
        {
          slug: "farewell-brunch",
          day: "Zo 21 mrt",
          title: "Farewell Brunch",
          time: "Rond 13:00",
          venue: "Noordelijk deel van Buenos Aires, nog te bevestigen",
          dressCode: "Relaxed smart casual",
          transport: "Taxi, Cabify of lopend als je dichtbij zit.",
          notes: [
            "Een zachtere afsluiting voor vertrek.",
            "Ideaal voor iedereen die tot zondag blijft."
          ],
          mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina"
        }
      ]
    },
    rsvp: {
      title: "RSVP",
      intro: "Hou het simpel. Vroege antwoorden helpen enorm terwijl details nog volgen.",
      fields: [
        "Aanwezigheid",
        "Dieetwensen",
        "Waar je wilt verblijven",
        "Aankomstdatum",
        "Vertrekdatum",
        "Song request"
      ],
      buttonLabel: "Open RSVP formulier",
      buttonHref: DEFAULT_RSVP_URL,
      note: "Laadt de embedded versie traag, open het formulier dan gewoon in een nieuw tabblad."
    },
    travel: {
      title: "Reis naar Argentinie",
      intro: "Korte planning notes die je snel kunt scannen.",
      snapshotLabel: "Download travel snapshot",
      cards: [
        {
          eyebrow: "Vluchten",
          title: "Zoek slim en boek zodra het goed voelt",
          highlights: [
            "Begin met Google Flights, Skyscanner en Momondo.",
            "De meeste gasten zoeken vanuit Amsterdam, Brussel, Parijs, Frankfurt of Londen.",
            "Flexibele tickets zijn handig zolang venue details nog volgen."
          ],
          footer: "Plan alleen voor Buenos Aires. Geen Mendoza-stuk.",
          links: [
            { label: "Google Flights", href: "https://www.google.com/travel/flights" },
            { label: "Skyscanner", href: "https://www.skyscanner.com" },
            { label: "Momondo", href: "https://www.momondo.com" }
          ]
        },
        {
          eyebrow: "Entry",
          title: "Check paspoort en visumregels op tijd",
          highlights: [
            "Controleer de geldigheid van je paspoort ruim vooraf.",
            "Check de actuele eisen voor jouw nationaliteit direct bij officiele Argentijnse bronnen en je airline.",
            "Bewaar digitale kopieen van paspoort, verzekering en boekingen."
          ]
        },
        {
          eyebrow: "Geld",
          title: "Kaarten werken vaak, wat cash blijft handig",
          highlights: [
            "Grote kaarten werken op veel plekken.",
            "Een beetje cash helpt voor taxi's, kleine cafes of snelle aankopen.",
            "Betaalgewoontes kunnen veranderen, dus check actuele info voor vertrek."
          ]
        },
        {
          eyebrow: "eSIM",
          title: "Online zonder gedoe op de luchthaven",
          highlights: [
            "Een eSIM is meestal de makkelijkste optie voor een korte trip.",
            "Liever een lokale SIM, koop die dan pas in de stad.",
            "Download offline maps alvast voor vertrek."
          ]
        },
        {
          eyebrow: "Stekkers",
          title: "Adapters en laden",
          highlights: [
            "Argentinie gebruikt meestal type C en type I.",
            "Neem een adapter mee voor elk apparaat dat je veel gebruikt.",
            "Een kleine powerbank maakt dagtrips makkelijker."
          ]
        },
        {
          eyebrow: "Weer",
          title: "Late zomer, warm licht, makkelijke lagen",
          highlights: [
            "Maart in Buenos Aires is meestal warm met fijne avonden.",
            "Pak voor zon overdag, airco binnen en een lichte laag voor later.",
            "Comfortabele schoenen zijn belangrijker dan te veel meenemen."
          ]
        }
      ]
    },
    stay: {
      title: "Waar te verblijven",
      intro: "Vijf buurten. Vijf ritmes. Kies wat past bij jouw trip.",
      neighborhoods: [
        {
          title: "Palermo",
          vibe: "Creatief, sociaal, design-forward",
          sleep: "Sterk voor boutique hotels en stijlvolle appartementen.",
          coffee: "Ideaal voor cafes, terrassen en makkelijke ochtenden.",
          dinner: "Veel keuze zonder veel planning.",
          distance: "De beste all-round basis voor de meeste gasten.",
          mapHref: "https://maps.google.com/?q=Palermo+Buenos+Aires"
        },
        {
          title: "Recoleta",
          vibe: "Klassiek, elegant, rustig",
          sleep: "Goed voor nette hotels en een traditionelere stay.",
          coffee: "Meer salons en rustige ontbijten.",
          dinner: "Sterk voor makkelijke avonden en een zachter tempo.",
          distance: "Handig als je een rustigere basis wilt.",
          mapHref: "https://maps.google.com/?q=Recoleta+Buenos+Aires"
        },
        {
          title: "Belgrano",
          vibe: "Residentieel, groen, low-key",
          sleep: "Goed voor langere verblijven of apartment bookings.",
          coffee: "Minder scene, meer buurtgevoel.",
          dinner: "Fijne lokale adressen zonder Palermo-drukte.",
          distance: "Goed als rust belangrijker is dan nightlife.",
          mapHref: "https://maps.google.com/?q=Belgrano+Buenos+Aires"
        },
        {
          title: "Puerto Madero",
          vibe: "Modern, strak, hotel-led",
          sleep: "Handig voor grotere hotels en eenvoudige logistiek.",
          coffee: "Sterk voor rivierwandelingen en hotel lounges.",
          dinner: "Meer gepolijst dan karaktervol, maar heel makkelijk.",
          distance: "Werkt goed voor korte trips met weinig frictie.",
          mapHref: "https://maps.google.com/?q=Puerto+Madero+Buenos+Aires"
        },
        {
          title: "San Telmo",
          vibe: "Historisch, gelaagd, sfeervol",
          sleep: "Mooi als je karakter en oudere architectuur zoekt.",
          coffee: "Sterk voor tragere ochtenden en wandelen.",
          dinner: "Goed als je meer mood dan polish wilt.",
          distance: "Beste keuze voor een meer lokale stadsbasis.",
          mapHref: "https://maps.google.com/?q=San+Telmo+Buenos+Aires"
        }
      ]
    },
    guide: {
      title: "Buenos Aires gids",
      intro: "Korte categorieen. Geen lappen tekst. Alleen waar je nieuwsgierigheid heen kan.",
      categories: [
        {
          eyebrow: "Koffie",
          title: "Begin in Palermo Soho, ga door naar Recoleta, eindig in Belgrano.",
          picks: ["Vroege cortado", "Rustig ontbijt", "Werkvriendelijke hoek", "Middagreset"],
          mapHref: "https://maps.google.com/?q=coffee+Buenos+Aires"
        },
        {
          eyebrow: "Wine bars",
          title: "Laag licht, late starts en nog een glas.",
          picks: ["Palermo voor natural wine", "Chacarita voor kleinere bars", "Recoleta voor klassiek"],
          mapHref: "https://maps.google.com/?q=wine+bar+Buenos+Aires"
        },
        {
          eyebrow: "Restaurants",
          title: "Boek een sterke dinner, laat daarna ruimte voor spontaniteit.",
          picks: ["Parrilla night", "Pasta night", "Lange lunch", "Late booking"],
          mapHref: "https://maps.google.com/?q=restaurants+Buenos+Aires"
        },
        {
          eyebrow: "Shopping",
          title: "Independent labels, leer, papierwaren en home objects.",
          picks: ["Palermo boutiques", "Recoleta galleries", "Design stores", "Bookshops"],
          mapHref: "https://maps.google.com/?q=shopping+Buenos+Aires"
        },
        {
          eyebrow: "Cultuur",
          title: "Musea, cinema, theater en gebouwen die nog echt leven.",
          picks: ["Museum afternoon", "Cinema evening", "Bookshop stop", "Historic theater"],
          mapHref: "https://maps.google.com/?q=culture+Buenos+Aires"
        },
        {
          eyebrow: "Parken",
          title: "Perfect als reset tussen city hours en event dressing.",
          picks: ["Bosques walks", "Rose garden loop", "Jacaranda streets", "Riverside air"],
          mapHref: "https://maps.google.com/?q=parks+Buenos+Aires"
        },
        {
          eyebrow: "Architectuur",
          title: "Steen, moderne lijnen en sterke interieurs.",
          picks: ["Recoleta facades", "Modern towers", "Historic passages", "Design museums"],
          mapHref: "https://maps.google.com/?q=architecture+Buenos+Aires"
        }
      ]
    },
    packing: {
      title: "Wat mee te nemen",
      intro: "Neem minder mee dan je denkt. Buenos Aires beloont eenvoud.",
      groups: [
        {
          title: "Trouwweekend",
          items: ["Event look", "Laag voor de avond", "Kleine nette tas", "Tweede paar schoenen"]
        },
        {
          title: "Stad verkennen",
          items: ["Day bag", "Zonnebril", "Lichte lagen", "Telefoonoplader"]
        },
        {
          title: "Dagtrips",
          items: ["Waterfles", "Pet", "Powerbank", "Licht shirt"]
        },
        {
          title: "Avonden",
          items: ["Licht jasje", "Nettere schoenen", "Minimale sieraden", "Lip balm"]
        }
      ]
    },
    dressCode: {
      title: "Dresscode",
      intro: "Clean, modern en city-smart. Gepolijst, maar niet stijf.",
      boards: [
        {
          title: "Welcome Drinks",
          subtitle: "Zachte tailoring, zijde, scherp overhemd, vanzelfsprekende eenvoud.",
          looks: ["Vloeiende jurk", "Relaxed pak", "Strakke loafer", "Minimale sieraden"],
          palette: ["Ivory", "Charcoal", "Olive", "Deep wine"]
        },
        {
          title: "Wedding Day",
          subtitle: "Editorial formal met beweging, structuur en rust.",
          looks: ["Lang silhouet", "Black tie edge", "Structured blazer", "Verfijnde hak of nette flat"],
          palette: ["Black", "Stone", "Ink", "Burgundy accent"]
        },
        {
          title: "Farewell Brunch",
          subtitle: "Fris, licht en vriendelijk voor zonlicht.",
          looks: ["Lichte set", "Katoenen shirt", "Verfijnde sandaal", "Eenvoudige zonnebril"],
          palette: ["Warm white", "Sand", "Pale gray", "Muted olive"]
        }
      ]
    },
    explore: {
      title: "Verken Argentinie",
      intro: "Als je toch een oceaan oversteekt, maak er misschien meer van.",
      destinations: [
        {
          title: "Buenos Aires",
          why: "Design, eten, ritme en cultuur in een stad.",
          stay: "De hoofdplek rond het trouwweekend.",
          season: "Sterk in maart voor warme stadsdagen.",
          highlights: ["Palermo", "Recoleta", "San Telmo", "Musea"]
        },
        {
          title: "Iguazu Falls",
          why: "Een dramatisch contrast met de stad.",
          stay: "Perfect als verlenging van twee nachten.",
          season: "Warm en groen in maart.",
          highlights: ["Falls circuit", "Boat ride", "Jungle walks", "Brazil side views"]
        },
        {
          title: "Bariloche",
          why: "Meren, bergen en koelere lucht.",
          stay: "Mooi voor een trage, scenic extension.",
          season: "Vroege herfst maakt het landschap zachter.",
          highlights: ["Lake drives", "Boat days", "Chocolate shops", "Hiking"]
        },
        {
          title: "Patagonia",
          why: "Grote lucht, gletsjers en een complete reset.",
          stay: "De moeite waard als je meer dagen kunt toevoegen.",
          season: "Maart is een heel sterke reisperiode.",
          highlights: ["Glacier country", "Windy plains", "Big views", "Lodge time"]
        },
        {
          title: "El Chalten",
          why: "Voor gasten die Argentinie op zijn meest filmisch willen.",
          stay: "Mooi in combinatie met Patagonia.",
          season: "Sterk voor shoulder-season trekking.",
          highlights: ["Trails", "Peak views", "Crisp mornings", "Long walks"]
        }
      ]
    },
    itineraries: {
      title: "Suggested itineraries",
      intro: "Kies een tempo en bouw daarvandaan verder.",
      items: [
        {
          slug: "weekend-only",
          title: "Optie A",
          duration: "4-5 dagen",
          route: "Buenos Aires trouwweekend",
          stops: ["Aankomst donderdag", "Welcome Drinks", "Wedding Day", "Farewell Brunch", "Een extra stadsdag"],
          note: "Voor wie het compact wil houden zonder stress."
        },
        {
          slug: "city-and-falls",
          title: "Optie B",
          duration: "7-8 dagen",
          route: "Buenos Aires + Iguazu",
          stops: ["City stay", "Trouwweekend", "Twee nachten bij de watervallen", "Terug en uitvliegen"],
          note: "De sterkste contrastoptie met weinig overplanning."
        },
        {
          slug: "city-and-lakes",
          title: "Optie C",
          duration: "10-12 dagen",
          route: "Buenos Aires + Bariloche",
          stops: ["Trouwweekend", "Trage dagen aan het meer", "Scenic meals", "Een wandeldag"],
          note: "Goed voor gasten die schoonheid willen zonder een te druk schema."
        },
        {
          slug: "city-and-patagonia",
          title: "Optie D",
          duration: "14+ dagen",
          route: "Buenos Aires + Patagonia",
          stops: ["Trouwweekend", "Vlucht naar het zuiden", "Grote landschapsdagen", "Rustige lodge-finish"],
          note: "De long-form versie voor wie hier echt een grote reis van wil maken."
        }
      ]
    },
    favorites: {
      title: "Favoriete plekken",
      intro: "Persoonlijk, niet volledig. Meer mood pins dan harde must-do's.",
      items: [
        {
          label: "Favoriete restaurantmood",
          title: "Late dinner, nog een fles, niemand heeft haast",
          note: "De ideale avond heeft scherp licht, zachte muziek en een tafel die maar blijft duren.",
          mapHref: "https://maps.google.com/?q=Palermo+restaurants+Buenos+Aires"
        },
        {
          label: "Favoriete wine bar mood",
          title: "Staan aan de bar, natural wine, stadse energie",
          note: "Minder proeven, meer een geweldig glas dat er vanzelf drie worden.",
          mapHref: "https://maps.google.com/?q=wine+bar+Palermo+Buenos+Aires"
        },
        {
          label: "Favoriete cafe-ritueel",
          title: "Ochtendkoffie voordat de stad echt wakker is",
          note: "Het beste met zonlicht, een papieren kaart en nog geen plan.",
          mapHref: "https://maps.google.com/?q=cafe+Recoleta+Buenos+Aires"
        },
        {
          label: "Favoriete hotel-feeling",
          title: "Een stille lobby, goede lakens, een mooie stoel",
          note: "We houden van plekken die edited voelen in plaats van overdesigned.",
          mapHref: "https://maps.google.com/?q=boutique+hotel+Buenos+Aires"
        },
        {
          label: "Favoriete hidden gem energy",
          title: "Een straat waardoor je expres langzamer gaat lopen",
          note: "Buenos Aires is op zijn best als je ruimte laat om te dwalen.",
          mapHref: "https://maps.google.com/?q=hidden+gem+Buenos+Aires"
        },
        {
          label: "Favoriete day trip",
          title: "Een dag die ver voelt zonder veel moeite",
          note: "Denk aan water, lunch, frisse lucht en dan terug voor dinner in de stad.",
          mapHref: "https://maps.google.com/?q=day+trip+from+Buenos+Aires"
        }
      ]
    },
    faq: {
      title: "FAQ",
      intro: "25 praktische vragen voor een soepelere trip.",
      items: [
        { question: "Is dit al de definitieve website?", answer: "Nee. Dit is de eerste editorial editie met de essentials. Venue specifics en meer persoonlijke tips volgen nog." },
        { question: "Welke datum is het belangrijkst?", answer: "Zaterdag 20 maart 2027 is de hoofddatum. Als het kan, hou ook donderdag 18 en zondag 21 maart vrij." },
        { question: "Waar is de bruiloft?", answer: "In Buenos Aires, Argentinie. De exacte venue volgt nog." },
        { question: "Moet ik al RSVP'en als niet alles vastligt?", answer: "Ja graag. Vroege antwoorden helpen ons enorm." },
        { question: "Kan ik alleen voor de trouwdag komen?", answer: "Ja. Het bredere weekend is heel leuk, maar zaterdag is de kern." },
        { question: "Welke luchthaven moet ik gebruiken?", answer: "De meeste long-haul gasten komen aan via Ezeiza International Airport, meestal EZE." },
        { question: "Hoe ver is de luchthaven van de stad?", answer: "Dat hangt af van verkeer, dus neem ruime buffers op aankomst- en vertrekdagen." },
        { question: "Heb ik een visum nodig?", answer: "Dat hangt af van je paspoort. Check de actuele regels direct bij officiele Argentijnse bronnen en je airline." },
        { question: "Moet ik cash meenemen?", answer: "Een beetje wel. Kaarten werken vaak, maar cash blijft handig." },
        { question: "Kan ik kraanwater drinken?", answer: "In Buenos Aires wordt kraanwater meestal als prima gezien, maar flessenwater is makkelijk te vinden als je dat liever hebt." },
        { question: "Heb ik een adapter nodig?", answer: "Meestal wel, tenzij jouw stekkers al passen op type C of type I." },
        { question: "Wat draag ik overdag?", answer: "Lichte lagen, comfortabele schoenen, zonnebril en iets kleins voor airco binnen." },
        { question: "Hoe voelt het weer in maart?", answer: "Denk aan warme late-zomerstadsdagen met aangenamere avonden dan in piekzomer." },
        { question: "Is Buenos Aires veilig?", answer: "Gebruik normale stadsalertheid: let op tassen, toon geen waardevolle spullen en neem 's avonds betrouwbare ritten." },
        { question: "Spreken mensen Engels?", answer: "In veel hotels en restaurants wel. Een beetje Spaans helpt alsnog." },
        { question: "Wat is de makkelijkste manier om rond te komen?", answer: "Taxi en Cabify zijn meestal het simpelst voor gasten." },
        { question: "Moet ik nu al verblijf boeken?", answer: "Als je een goede flexibele optie ziet in een buurt die je aanspreekt, is dat slim." },
        { question: "Welke buurt is het beste voor een eerste bezoek?", answer: "Palermo is voor de meeste gasten de makkelijkste all-round keuze." },
        { question: "Moet ik iets via Mendoza plannen?", answer: "Nee. Deze website en dit trouwweekend draaien volledig om Buenos Aires." },
        { question: "Heb ik een reisverzekering nodig?", answer: "Ja, dat is een goed idee, zeker voor lange reizen of meerdere vluchten." },
        { question: "Kan ik hier een langere reis van maken?", answer: "Absoluut. Daar is de itinerary-sectie juist voor bedoeld." },
        { question: "Is maart een goede periode voor Argentinie?", answer: "Ja. Het is een heel aantrekkelijke periode voor Buenos Aires en veel andere delen van het land." },
        { question: "Komt er event-transport?", answer: "Als we dedicated transport regelen, zetten we dat online zodra de venues vastliggen." },
        { question: "Wat voor dresscode moet ik verwachten?", answer: "Modern, verfijnd en city-forward. Denk editorial formal in plaats van traditionele wedding styling." },
        { question: "Blijft deze site veranderen?", answer: "Ja. Verwacht venue specifics, meer city notes en scherpere aanbevelingen in de volgende update." }
      ]
    },
    gallery: {
      title: "Gallery notes",
      intro: "Een moodboard voor het weekend: textuur, architectuur, avondlicht en stadsritme.",
      items: [
        { title: "Arrival light", caption: "Warme steen, lange schaduwen, eerste koffie.", size: "wide", tone: "stone" },
        { title: "City grid", caption: "Blokken, gevels en strakke lijnen.", size: "tall", tone: "ink" },
        { title: "Table setting", caption: "Neutrale lagen met een donker accent.", size: "square", tone: "wine" },
        { title: "Late dinner", caption: "Zacht licht en langere gesprekken.", size: "square", tone: "olive" },
        { title: "Saturday mood", caption: "Strakke tailoring, beweging en lucht.", size: "wide", tone: "stone" },
        { title: "Sunday finish", caption: "Rustig tempo, daglicht, nog een knuffel.", size: "tall", tone: "olive" }
      ]
    },
    finalNote: {
      eyebrow: "Van ons",
      title: "Dank dat jullie deze reis mogelijk maken.",
      body: "We kunnen niet wachten om iedereen die we liefhebben samen te brengen in Buenos Aires. Meer details volgen snel, maar voor nu is het belangrijkste heel simpel: hou de data vrij, laat ons weten of je denkt te komen, en droom misschien net iets groter dan alleen een avond."
    }
  }
};
