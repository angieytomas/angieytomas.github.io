const rsvpUrl =
  process.env.NEXT_PUBLIC_RSVP_URL ||
  "https://tally.so/embed/your-form-id?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export type NavItem = {
  label: string;
  href: string;
};

export type WeekendDay = {
  day: string;
  title: string;
  body: string;
  badge?: string;
};

export type MediaItem = {
  src: string;
  alt: string;
};

export type Destination = {
  name: string;
  days: string;
  airport: string;
  flightTime: string;
  images?: MediaItem[];
  body: string;
};

export type DayTrip = {
  name: string;
  body: string;
};

export type InfoItem = {
  title: string;
  body: string;
  imageButton?: MediaItem;
  imageModal?: MediaItem;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/en/" },
  { label: "The Weekend", href: "/en/the-weekend/" },
  { label: "Buenos Aires", href: "/en/buenos-aires/" },
  { label: "Travel in Argentina", href: "/en/travel-in-argentina/" },
  { label: "Getting to Argentina", href: "/en/getting-to-argentina/" },
  { label: "RSVP", href: "/en/rsvp/" }
];

export const siteMeta = {
  title: "Tomas & Angie — 20 March 2027, Buenos Aires",
  description:
    "Tomas and Angie are getting married in Buenos Aires on 20 March 2027. Everything you need to plan your trip.",
  image: "/images/placeholders/hero-placeholder.svg"
};

export const home = {
  names: "Tomas & Angie",
  kicker: "are getting married",
  dateLine: "Saturday 20 March 2027 · Buenos Aires, Argentina",
  countdownTarget: "2027-03-20T17:00:00-03:00",
  welcome:
    "We can't wait to celebrate with you. We're getting married in Buenos Aires in March 2027 and we'd love for you to be there. The wedding is on Saturday the 20th, and if your plans allow, it would be lovely to have you around from Thursday to Sunday. This site has everything you need to plan your way over, and we'll add more details here as we go.",
  weekendLine:
    "If your plans allow it would be really nice to have you there from Thursday to Sunday.",
  locationStatus: "Venue and time coming soon",
  buttons: [
    { label: "RSVP", href: "/en/rsvp/" },
    { label: "Plan your trip", href: "/en/buenos-aires/" }
  ]
};

export const weekend = {
  title: "The Weekend",
  intro:
    "Saturday is the big day, but if your plans allow it would be really nice to have you in Buenos Aires from Thursday to Sunday. We're planning a couple of relaxed get-togethers around the wedding, likely on the Thursday and the Sunday, so there's a bit more time together. We'll add the details here as we sort them out.",
  days: [
    {
      day: "Thursday 18 and Friday 19",
      title: "Come into town and settle in",
      body: "We'll probably do something low-key to say hello.",
      badge: "TBC"
    },
    {
      day: "Saturday 20",
      title: "The Wedding",
      body: "The ceremony and the party. This is the one. We'll share the venue shortly, and the party will probably run from around 6 or 7pm until 2am.",
      badge: "TBC"
    },
    {
      day: "Sunday 21",
      title: "A relaxed get-together before everyone heads off",
      body: "Likely an asado and a slow afternoon.",
      badge: "TBC"
    }
  ] satisfies WeekendDay[],
  footer:
    "If you're around from Thursday to Sunday, that would be lovely. We'll keep adding the details here as we sort them out."
};

export const buenosAires = {
  title: "Buenos Aires",
  intro:
    "We're biased, but Buenos Aires is one of the best cities in the world and we want you to see it properly. Give it five days at least. It's a big city, and it's really many different cities in one, with its bohemian, upscale, trendy and green neighbourhoods, and the architecture changes as you move between them.",
  description:
    "It isn't really a checklist kind of city. There are a few classic spots worth seeing, mostly around the barrios of La Boca, San Telmo, Recoleta, Puerto Madero and Palermo, but the real point of Buenos Aires is just to enjoy normal city life. Green spaces, cafés, long walks, art, and staying out much later than you planned. There's also plenty going on, museums, theatres, tango, and football games, which we strongly recommend.",
  stay:
    "Airbnb is the easy option and pretty cheap here, you'll find good places for not much. For location, Palermo or Recoleta are probably your best bet. They're central and close to most of what you'll want to see. If you want somewhere quieter and more residential, have a look at Colegiales, Belgrano or Núñez. It's a big city, but taxis and Uber are cheap and everywhere, so being a bit further out really doesn't matter.",
  football:
    "You can't really get this city without football. Being in a stadium here is something else, loud and a bit mad and completely alive. If San Lorenzo play while you're here, I'll get tickets, just let me know. If you support someone else or want to see a particular club, do your research and tell me and I'll see what I can do. 😉",
  areas: ["Palermo", "Recoleta", "Colegiales", "Belgrano", "Núñez"],
  images: [
    {
      src: "/images/placeholders/hero-placeholder.svg",
      alt: "Placeholder image for Buenos Aires"
    }
  ]
};

export const argentinaTravel = {
  title: "Travel in Argentina",
  intro:
    "If you're coming all this way, it's really worth seeing more of the country. Argentina is enormous, about the same length as going from Portugal all the way to Estonia, and it has a very particular geography, with the Andes running down it like a spine. That gives you landscapes you won't find anywhere else, and they change completely from one end of the country to the other. Below are a few flagship ideas for first timers. There are plenty of others too, so if you want something different just ask and we'll happily point you somewhere.",
  booking:
    "A few useful things before you pick. Most of these places need a domestic flight, but they're short, around two hours to most of them, and often cheap, roughly 50 to 150 euros return if you book ahead. To find flights you can use a metasearcher like [TurismoCity](https://turismocity.com) or [Despegar](https://www.despegar.com.ar) to compare prices and dates, and once you find a good one it's better to book straight from the airline. One tip that might save you money is to set the search in Argentinian pesos and pay in pesos with your foreign card, as it can work out cheaper than paying in dollars or euros. Domestic flights often leave from Aeroparque (AEP), but some go from Ezeiza (EZE), so pay attention to which one yours is. If the price and timing are similar, go for Aeroparque, it's conveniently right inside the city. Accommodation is generally very cheap around the country. Patagonia is a bit pricier, but March and April aren't peak season anymore so it's better than in summer.",
  practical:
    "A few useful things before you pick. Most of these places need a domestic flight, but they're short, around two hours to most of them, and often cheap, roughly 50 to 150 euros return if you book ahead. To find flights you can use a metasearcher like [TurismoCity](https://turismocity.com) or [Despegar](https://www.despegar.com.ar) to compare prices and dates, and once you find a good one it's better to book straight from the airline.",
  daysNote:
    "Treat the suggested days as a rough minimum, handy if time is tight and you want to fit in more than one of these, which we'd recommend if you can. If you'd rather take any of them at a slower pace, or dig deeper into one place, they all reward a few extra days.",
  destinations: [
    {
      name: "Iguazú Falls",
      days: "2 days",
      airport: "fly into IGR",
      flightTime: "about 1h45 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for Iguazú Falls" }],
      body:
        "[One of the seven natural wonders of the world](https://www.argentina.travel/en/news/iguazu-waterfalls-what-to-do-and-more-information), and it deserves it. Hundreds of waterfalls in the middle of the jungle, on the border with Brazil. Standing right next to these huge, powerful giants gives you a feeling that's hard to explain. You can even take a boat tour that gets you right to the bottom of them, prepare to get soaked. This is one of those places where a photo really doesn't do it justice, they are massive. In terms of logistics, the falls sit in a national park shared with Brazil, and you should really see both sides, as each gives you a different perspective. The Brazilian side is more about the wide panoramic views, and the Argentinian side puts you right next to those monstrous falls. Each side takes about a day, so with 2 days here you're fine."
    },
    {
      name: "Bariloche and the Patagonian Lakes",
      days: "4 to 7 days",
      airport: "fly into BRC",
      flightTime: "about 2h20 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for Bariloche" }],
      body:
        "The alpine side of Patagonia. Mountains, big blue lakes, forests and really good chocolate. [Bariloche](https://www.argentina.travel/en/news/tourism-in-bariloche-in-march-what-to-do-and-the-best-places-to-visit) is the base, and the [Seven Lakes drive](https://www.argentina.travel/en/news/route-of-the-7-lakes-a-journey-between-villa-la-angostura-san-martin-de-los-andes-and-bariloche) up to [Villa La Angostura](https://www.argentina.travel/en/activities/villa-la-angostura) is the classic outing, with [Parque Nacional Los Arrayanes](https://www.argentina.travel/en/activities/los-arrayanes-national-park) along the way. There are also gorgeous day hikes like Cerro López or the Refugio Frey, or you can kayak on the Nahuel Huapi lake. The food here is serious and quite different from the rest of the country, lots of Patagonian lamb, river trout, fondue and chocolate. By early autumn the days are cool and clear and the leaves are turning, probably the prettiest time to see it."
    },
    {
      name: "El Calafate and El Chaltén",
      days: "5 to 6 days",
      airport: "fly into FTE",
      flightTime: "about 3h15 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for El Calafate" }],
      body:
        "This second Patagonia option is more for nature and adventure than for town life. [El Calafate](https://www.argentina.travel/en/news/a-complete-guide-to-el-calafate) itself doesn't offer much, but it's the gate to two wonders. One is the Perito Moreno glacier, part of the [Glaciers National Park](https://www.argentina.travel/en/activities/los-glaciares-national-park) and the largest glacier in the Atlantic basin, and you can even hike on it. The other is [El Chaltén](https://www.argentina.travel/en/activities/el-chalten), a small village with a rustic vibe that's the trekking capital of the country, with the famous Fitz Roy right behind it. It's way south, so it can get cold even in March, around 7 to 13 degrees. You can also cross into Chile to see Torres del Paine, but that takes a couple of days, so with only 7 it gets a bit tight, still doable. The weather down here can be unpredictable, so keep your plans loose."
    },
    {
      name: "Ushuaia and the End of the World",
      days: "3 to 4 days",
      airport: "fly into USH",
      flightTime: "about 3h30 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for Ushuaia" }],
      body:
        "The southernmost city in the world, [the edge of Tierra del Fuego](https://www.argentina.travel/en/pr/tierra-del-fuego). Antarctic wildlife and very dramatic scenery. You can reach it from El Calafate, but that's about a day of travelling."
    },
    {
      name: "Mendoza",
      days: "3 to 4 days",
      airport: "fly into MDZ",
      flightTime: "about 1h45 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for Mendoza" }],
      body:
        "[The land of sun and good wine](https://www.argentina.travel/en/cuyo/mendoza), and that tells you all you need to know. At the feet of the Andes, where you can see the Aconcagua, the tallest mountain outside the Himalayas. The plan is easy and very rewarding, lunch at a mountain restaurant, then a vineyard, and repeat. The wineries are [beautiful pieces of architecture](https://vinomanos.com/2021/12/arquitectura-de-bodegas/) on their own. But it's not just wine. Head to Potrerillos for a day or two of the fun, adventurous stuff, like white-water rafting straight off the Andes, really good fun, and some lovely hikes in those giant mountains. And if you fancy a drink watching the sunset with some music, check out Las Palapas in Potrerillos."
    },
    {
      name: "Salta and the North",
      days: "4 to 5 days",
      airport: "fly into SLA or JUJ",
      flightTime: "about 2h15 from BA",
      images: [{ src: "/images/placeholders/hero-placeholder.svg", alt: "Placeholder image for Salta" }],
      body:
        "The northwest feels like [another country](https://www.argentina.travel/en/norte). As soon as you arrive you notice the colourful crafts and the strong presence of indigenous and traditional culture, in the clothing, the dances and the food. The landscape is high-altitude Andean and dry, all big skies, desert and painted mountains. You can fly into Salta or Jujuy, or fly into one and out from the other, which works really well. The trip splits nicely into two parts. The first is around Salta, using the capital as a base, with [Cachi](https://www.argentina.travel/en/activities/cachi) as a lovely day trip and [Cafayate](https://www.argentina.travel/en/activities/cafayate) for high-altitude wines and the Devil's Throat canyon, though that one needs an overnight. Another great day out from Salta is the [Tren a las Nubes](https://trenalasnubes.com.ar/inicio-en/), which you can do as a tour that takes you by bus up to San Antonio de los Cobres, with some really nice stops and views along the way. The second part is in Jujuy, where you can skip the city and base yourself in one of the villages of the Quebrada de Humahuaca. The two are about two hours apart by car. Give the villages at least two full days. Purmamarca, Tilcara and Humahuaca are tiny, close together and full of colour. From there, a few excursions are a must, the [Salinas Grandes](https://www.argentina.travel/en/news/certamente-sao-mais-de-sete-porque-os-vislumbres-magicos-que-esse-imperdivel-argentino-alcanca-nao-tem-limites-a-cor-branca-cobra-protagonismo-e-a-experiencia-so-fica-melhor-quando-se-caminha-por-um-cobertor-sem-fim-no-noroeste-estas-sao-as-razoes-pelas-quais-as-salinas-grandes-estao-no-top-7-das-maravilhas-naturais-do-pais), a huge white salt flat that goes all the way to the horizon, the Hornocal, the many-coloured mountain above Humahuaca, and the [Quebrada de las Señoritas](https://thetravellingtriplet.com/2019/05/01/walking-the-quebrada-de-las-senoritas/), a half-day hike with stunning views."
    }
  ] satisfies Destination[],
  dayTripsHeading: "Simple trips from Buenos Aires",
  dayTripsIntro: "If you have a bit more time, there are a few easy trips close to the city.",
  dayTrips: [
    {
      name: "An estancia (día de campo)",
      body:
        "A proper day in the countryside. Open pampas, horse riding, a big asado and a long, lazy afternoon. Works as a day trip or an easy overnight. San Antonio de Areco, the home of gaucho culture, and the area around Cañuelas are the usual spots, both a short drive out."
    },
    {
      name: "Delta del Tigre",
      body:
        "Just outside the city, a maze of rivers and little wooded islands you get around by boat. A real change of pace, green and calm, and an easy day out."
    },
    {
      name: "Colonia, Uruguay",
      body:
        "If you're curious, a one-hour ferry takes you across the river to Colonia del Sacramento, a tiny old town in another country. It's a long day but a good one, with cobbled streets and lovely river views."
    }
  ] satisfies DayTrip[],
  closing:
    "These are the headline ones, what we'd recommend for a first visit. If you want something more off the beaten track, just ask, we're happy to share our more niche favourites."
};

export const gettingToArgentina = {
  title: "Getting to Argentina",
  intro:
    "Most of you are flying from Europe, so here are a few tips to make finding flights easier and cheaper.",
  items: [
    {
      title: "How to search",
      body:
        "Use Google Flights to search, not necessarily to book. Two things make it worth it. You can put in several departure airports at once, which helps if you're flexible about where you fly from, and the date grid shows you the cheapest days across a whole range of dates. The little image below shows the kind of view you can use to compare different day combinations. Once you've found a good flight, book it directly on the airline's own website rather than through Google or some third party. It's usually the same price and a lot less hassle if anything changes.\n\nFor domestic flights inside Argentina, see the tips on the Travel in Argentina page, including a metasearcher to compare prices and a note on paying in pesos for a better rate.",
      imageButton: {
        src: "/images/placeholders/google-flights-button.svg",
        alt: "Placeholder image for the Google Flights date grid button"
      },
      imageModal: {
        src: "/images/placeholders/google-flights-grid.svg",
        alt: "Placeholder image for the Google Flights date grid"
      }
    },
    {
      title: "Book early",
      body: "Prices climb as the date gets closer, so it's worth booking sooner rather than later."
    },
    {
      title: "Airlines from Europe to Buenos Aires",
      body:
        "KLM, Iberia, Air Europa, Lufthansa, LATAM, ITA Airways, British Airways, Air France and Turkish Airlines all fly to Buenos Aires. Plus Ultra goes from Madrid only, and Level from Barcelona only. Delta is an option too if you don't mind a layover in the US. Sometimes the prices are great and sometimes they're not, so it's worth a look but check the routing."
    },
    {
      title: "Where you'll land",
      body:
        "International flights come into Ezeiza (EZE), about 45 minutes outside the city. Worth remembering if you've got an onward domestic flight, because those usually go from Aeroparque (AEP), a different and more central airport."
    }
  ] satisfies InfoItem[]
};

export const gettingHere = {
  title: "Getting Here",
  intro: "A few practical things for getting here and getting set up.",
  items: [
    {
      title: "From the airport",
      body:
        "International flights land at Ezeiza (EZE), about 45 minutes from the centre. Domestic flights use Aeroparque (AEP), which is in the city. For both, use the official airport taxis or Uber and Cabify rather than random unmarked cars."
    },
    {
      title: "Money",
      body:
        "Bring some cash. The currency situation here moves around a lot, there's an official rate and a street rate, and cards work much better than they used to, but having pesos on you is always handy. We'll update this nearer the time with the current best advice."
    },
    {
      title: "Getting around",
      body: "Taxis and ride apps are cheap and everywhere. For buses and the subte, get a SUBE card you can top up."
    },
    {
      title: "Staying connected",
      body: "Easiest thing is an eSIM you set up before you land, so you've got data straight away."
    },
    {
      title: "Safety",
      body:
        "It's a big city, so the usual common sense. Keep an eye on your phone and bag in crowds and you'll be fine."
    }
  ] satisfies InfoItem[]
};

export const faq = {
  title: "Questions?",
  intro: "Oops, we haven't really thought these through yet. In the meantime, if you have any questions at all, just let us know and we'll help.",
  items: [
    {
      question: "Who do I contact?",
      answer: "Just send us a note at hello@tomasandangie.com and we'll help."
    }
  ] satisfies FaqItem[]
};

export const rsvp = {
  title: "RSVP",
  intro: "We'd love to know if you can make it. Fill in the form below, it only takes a minute.",
  note:
    "Let us know about any dietary needs or anything else we should know, and whether you're bringing a plus-one. If your plans aren't final yet, RSVP anyway and drop us a note if things change.",
  deadline: "We'll confirm a deadline soon",
  url: rsvpUrl
};

export const footer = {
  line: "Tomas & Angie · 20 March 2027 · Buenos Aires",
  contact: "hello@tomasandangie.com"
};
