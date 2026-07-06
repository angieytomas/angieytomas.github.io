# Tomas & Angie — Wedding Website (Content + Build Spec)

This file is the single source of truth for the wedding site. It contains the tech spec, design direction, final page list, all copy, and a list of things still to be filled in (TBC). Hand this to the coding agent as-is.

---

## 1. Tech stack & constraints

- **Framework:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, App Router.
- **Output:** static HTML via `output: "export"`.
- **Hosting:** GitHub Pages via GitHub Actions.
- **Language:** English only for now. Keep the i18n routing/structure in place (e.g. `/en/...`) so Spanish can be added later without restructuring. Do **not** write Spanish content yet.
- **Content storage:** keep all copy in TypeScript data files (arrays of objects for days, destinations, etc.). The page components map over these. This makes "TBC → real info" edits trivial later.
- **RSVP:** embedded Tally form, configured by `NEXT_PUBLIC_RSVP_URL`.

### Domain / basePath (important)
- **Assumption:** a custom domain (`tomasandangie.com`) will be used, so **no `basePath`/`assetPrefix`** is needed and links/images can use root-relative paths.
- **Fallback:** if the site is instead served from `username.github.io/repo-name`, you **must** set `basePath` and `assetPrefix` to `/repo-name` in `next.config`, or every internal link and image will break. Also add a `.nojekyll` file, and a `CNAME` file if using the custom domain.
- Decide this before first deploy.

---

## 2. Design direction

**Principle: mobile-first, centered, calm.** Single centered column (max ~640–720px), generous vertical spacing, large tap targets. The page reads top-to-bottom on a phone. Desktop is the same column centered with more breathing room. No multi-column layouts that reflow awkwardly.

**Visual tone:** romantic but not fussy. A destination-wedding-in-Buenos-Aires feel.

**Colour:** warm neutrals, cream/bone background, soft ink-charcoal text, with **terracotta** as the single accent (buttons, links, dividers, active nav). Avoid pure black/white and heavy gradients.

Suggested tokens (agent can refine):
- background `#F7F3EC` (bone)
- text `#2E2A26` (ink)
- accent `#B5532E` (terracotta)
- accent-soft `#E8C9B8` (for pills/badges)
- muted `#8A8178` (captions, secondary text)

**Typography:** two-font system. Elegant **serif for headings/display** (the names "Tomas & Angie" want a real display serif), clean readable **sans for body**. Large confident heading scale. Body 16–18px, relaxed line-height.

**Components / patterns:**
- Slim persistent header: names/monogram on the left, hamburger menu on mobile, inline nav on desktop.
- Reusable "section card": centered title, short intro line, content. Reuse across all pages for consistency.
- **Expandable destination card** (see Travel in Argentina). This is a key new pattern, described in detail in that section.
- **Countdown** to 20 March 2027 on the home page.
- Footer: date, city, repeated RSVP link, contact.

**Motion:** subtle only, gentle fade/slide-in on scroll, and a smooth expand/collapse on the destination cards. Nothing heavy.

**Imagery:** reserve a hero image slot on Home, an optional image slot on the Buenos Aires page, and an image area inside each destination card (see below). All images lazy-loaded and optional, so the site is fast before final photos exist. Images will be committed to the GitHub repo and referenced by path. The couple will provide the image paths/filenames later, so for now leave the slots wired but empty (render nothing if no image is set).

**Voice (VERY important for the agent):** the copy is written to sound like the couple typed it themselves, warm and personal, a bit playful, with small asides in brackets and the odd exclamation mark. It is first person ("we", "let us know"). **Do not rewrite it into polished marketing or AI prose.** Hard rules: **never use colons or semicolons**, no "not X but Y" constructions, no em-dashes, no flowery adjectives, no exaggerations. If you need copy that isn't here, match this exact tone.

---

## 3. Final pages & nav labels

Nav order (left to right / top to bottom on mobile):

1. **Home** → `/`
2. **The Weekend** → `/the-weekend`
3. **Buenos Aires** → `/buenos-aires`
4. **Travel in Argentina** → `/travel-in-argentina`
5. **Getting to Argentina** → `/getting-to-argentina`
6. **RSVP** → `/rsvp`

Removed pages (do **not** build these): the standalone **Stay** page (its content lives inside Buenos Aires), the **Getting Here** logistics page (dropped), and the **FAQ** page (replaced by a short note, see below).

---

## 4. Page content

### Home

Header:
- **Tomas & Angie**
- *are getting married*
- **Saturday 20 March 2027 · Buenos Aires, Argentina**

Countdown to 20 March 2027.

Welcome paragraph:
> We can't wait to celebrate with you. We're getting married in Buenos Aires in March 2027 and we'd love for you to be there. The wedding is on Saturday the 20th, and if your plans allow, it would be lovely to have you around from Thursday to Sunday. This site has everything you need to plan your way over, and we'll add more details here as we go.

Location & time line:
> We'll share the venue shortly. The party will probably run from around 6 or 7pm until 2am.

Buttons: **RSVP** · **Plan your trip** (links to Buenos Aires or Travel in Argentina).

---

### The Weekend

Intro:
> Saturday is the big day, but if your plans allow it would be really nice to have you in Buenos Aires from Thursday to Sunday. We're planning a couple of relaxed get-togethers around the wedding, likely on the Thursday and the Sunday, so there's a bit more time together. We'll add the details here as we sort them out.

(some people might not be there on time for Saturday so dont make big pressure to be there on thursday, only say that "if youre around")

Day list:
- **Thursday 18 and Friday 19.** Come into town and settle in. We'll probably do something low-key to say hello.
- **Saturday 20. The Wedding.** The ceremony and the party. This is the one. We'll share the venue shortly, and the party will probably run from around 6 or 7pm until 2am.
- **Sunday 21.** A relaxed get-together before everyone heads off, likely an asado.

---

### Buenos Aires

at the top of the website add a slideable part for pictures of Buenos Aires (to be uploaded) which i will add later on.

Intro:
> We're biased, but Buenos Aires is one of the best cities in the world and we want you to see it properly. Give it five days at least. It's a big city, and it's really many different cities in one, with its bohemian, upscale, trendy and green neighbourhoods (we call them barrios), and the architecture changes as you move between them.

Description:
> It isn't really a checklist kind of city. There are a few classic spots worth seeing, mostly around the barrios of La Boca, San Telmo, Recoleta, Puerto Madero and Palermo, but the real point of Buenos Aires is just to enjoy normal city life. Green spaces, cafés, long walks, art, and staying out much later than you planned. There's also plenty going on, museums, theatres, tango, and football games (strongly recommended!).

Food:
> The food is amazing, and no, it's not only meat! (although the meat...). There's something here for every taste and we've got good recommendations for all of them, so you just have to show up hungry and excited.

Where to stay:
> Airbnb is the easy option and pretty cheap here, you'll find good places for not much. For location, Palermo or Recoleta are probably your best bet. They're central and close to most of what you'll want to see. If you want somewhere quieter and more residential, have a look at Colegiales, Belgrano or Núñez. It's a big city, but taxis and Uber are cheap and everywhere, so being a bit further out really doesn't matter.

Football (add maybe one or two sentences above when mentioning football and saying that of course they should catch a game if they coincide, we can get tickets dfor San Lorenzo , for any other team do you own research but why would you go somewhere else ;)):
> You can't really get this city without football. Being in a stadium here is something else, loud and a bit mad and completely alive. If San Lorenzo (that's Tomas's team) play while you're here, I'll get tickets, just let me know. If you support someone else or want to see a particular club, do your research and tell me and I'll see what I can do. 😉

---

### Travel in Argentina

**Structure note for the agent (important):**
- Each destination is an **expandable card**. Collapsed, it shows only the **title** and the little meta line (days · airport · flight time). Tapping the card expands it to reveal, in this order: an **image area** (one or more images, sitting directly below the title and above the text, lazy-loaded, render nothing if no image is set yet), then the **descriptive text**. Tapping again collapses it. Smooth expand/collapse animation, large tap target, works with keyboard and screen readers (button + aria-expanded).
- Store as data per destination: `name`, `meta` (days / airport / flight time), `images` (array, empty for now), `body` (markdown, may contain links). Render markdown links as styled `<a>` in terracotta, opening in a new tab.
- The "Simple trips from Buenos Aires" items can use the same expandable pattern or stay as short static blocks, agent's choice, but keep them visually lighter than the main destinations.

Intro:
> If you're coming all this way, it's really worth seeing more of the country. Argentina is enormous, about the same length as going from Portugal all the way to Estonia, and it has a very particular geography, with the Andes running down it like a spine. That gives you landscapes you won't find anywhere else, and they change completely from one end of the country to the other. Below are a few flagship ideas for first timers. There are plenty of others too, so if you want something different just ask and we'll happily point you somewhere.

Flights and useful things (single merged block, near the top):
> A few useful things before you pick. Most of these places need a domestic flight, but they're short, around two hours to most of them, and often cheap, roughly 50 to 150 euros return if you book ahead. To find flights you can use a metasearcher like [TurismoCity](https://turismocity.com) or [Despegar](https://www.despegar.com.ar) to compare prices and dates, and once you find a good one it's better to book straight from the airline. One tip that might save you money is to set the search in Argentinian pesos and pay in pesos with your foreign card, as it can work out cheaper than paying in dollars or euros. Domestic flights often leave from Aeroparque (AEP), but some go from Ezeiza (EZE), so pay attention to which one yours is. If the price and timing are similar, go for Aeroparque, it's conveniently right inside the city. Accommodation is generally very cheap around the country. Patagonia is a bit pricier, but March and April aren't peak season anymore so it's better than in summer.

Suggested-days note:
> Treat the suggested days as a rough minimum, handy if time is tight and you want to fit in more than one of these (which we'd recommend if you can). If you'd rather take any of them at a slower pace, or dig deeper into one place, they all reward a few extra days.

**Destination cards:**

- **Iguazú Falls** — 2 days · fly into IGR · about 1h45 from BA
  > [One of the seven natural wonders of the world](https://www.argentina.travel/en/news/iguazu-waterfalls-what-to-do-and-more-information), and it deserves it. Hundreds of waterfalls in the middle of the jungle, on the border with Brazil. Standing right next to these huge, powerful giants gives you a feeling that's hard to explain. You can even take a boat tour that gets you right to the bottom of them (prepare to get soaked!). This is one of those places where a photo really doesn't do it justice, they are massive. In terms of logistics, the falls sit in a national park shared with Brazil, and you should really see both sides, as each gives you a different perspective. The Brazilian side is more about the wide panoramic views, and the Argentinian side puts you right next to those monstrous falls. Each side takes about a day, so with 2 days here you're fine.

- **Bariloche and the Patagonian Lakes** — 4 to 7 days · fly into BRC · about 2h20 from BA
  > The alpine side of Patagonia. Mountains, big blue lakes, forests and really good chocolate. [Bariloche](https://www.argentina.travel/en/news/tourism-in-bariloche-in-march-what-to-do-and-the-best-places-to-visit) is the base, and the [Seven Lakes drive](https://www.argentina.travel/en/news/route-of-the-7-lakes-a-journey-between-villa-la-angostura-san-martin-de-los-andes-and-bariloche) up to [Villa La Angostura](https://www.argentina.travel/en/activities/villa-la-angostura) is the classic outing, with [Parque Nacional Los Arrayanes](https://www.argentina.travel/en/activities/los-arrayanes-national-park) along the way. There are also gorgeous day hikes like Cerro López or the Refugio Frey, or you can kayak on the Nahuel Huapi lake. The food here is serious and quite different from the rest of the country, lots of Patagonian lamb, river trout, fondue and chocolate. By early autumn the days are cool and clear and the leaves are turning, probably the prettiest time to see it.

- **El Calafate and El Chaltén (the glaciers)** — 5 to 6 days · fly into FTE · about 3h15 from BA
  > This second Patagonia option is more for nature and adventure than for town life. [El Calafate](https://www.argentina.travel/en/news/a-complete-guide-to-el-calafate) itself doesn't offer much, but it's the gate to two wonders. One is the Perito Moreno glacier, part of the [Glaciers National Park](https://www.argentina.travel/en/activities/los-glaciares-national-park) and the largest glacier in the Atlantic basin, and you can even hike on it. The other is [El Chaltén](https://www.argentina.travel/en/activities/el-chalten), a small village with a rustic vibe that's the trekking capital of the country, with the famous Fitz Roy right behind it. It's way south, so it can get cold even in March, around 7 to 13 degrees. You can also cross into Chile to see Torres del Paine, but that takes a couple of days, so with only 7 it gets a bit tight, still doable. The weather down here can be unpredictable, so keep your plans loose.

- **Ushuaia and the End of the World** — 3 to 4 days · fly into USH · about 3h30 from BA
  > The southernmost city in the world, [the edge of Tierra del Fuego](https://www.argentina.travel/en/pr/tierra-del-fuego). Antarctic wildlife and very dramatic scenery. You can reach it from El Calafate, but that's about a day of travelling.

- **Mendoza (wine country)** — 3 to 4 days · fly into MDZ · about 1h45 from BA
  > [The land of sun and good wine](https://www.argentina.travel/en/cuyo/mendoza), and that tells you all you need to know. At the feet of the Andes, where you can see the Aconcagua, the tallest mountain outside the Himalayas. The plan is easy and very rewarding, lunch at a mountain restaurant, then a vineyard (March is harvest, the best time of year for it), and repeat. The wineries are [beautiful pieces of architecture](https://vinomanos.com/2021/12/arquitectura-de-bodegas/) on their own. But it's not just wine. Head to Potrerillos for a day or two of the fun, adventurous stuff, like white-water rafting straight off the Andes (really good fun) and some lovely hikes in those giant mountains. And if you fancy a drink watching the sunset with some music, check out Las Palapas in Potrerillos.

- **Salta and the North** — 4 to 5 days · fly into SLA or JUJ · about 2h15 from BA
  > The northwest feels like [another country](https://www.argentina.travel/en/norte). As soon as you arrive you notice the colourful crafts and the strong presence of indigenous and traditional culture, in the clothing, the dances and the food. The landscape is high-altitude Andean and dry, all big skies, desert and painted mountains. You can fly into Salta (SLA) or Jujuy (JUJ), or fly into one and out from the other, which works really well. The trip splits nicely into two parts. The first is around Salta, using the capital as a base, with [Cachi](https://www.argentina.travel/en/activities/cachi) as a lovely day trip (the drive there takes you deep into the Andes, crossing some really, really tall mountains) and [Cafayate](https://www.argentina.travel/en/activities/cafayate) for high-altitude wines and the Devil's Throat canyon, though that one needs an overnight. Another great day out from Salta is the [Tren a las Nubes](https://trenalasnubes.com.ar/inicio-en/), which you can do as a tour that takes you by bus up to San Antonio de los Cobres, with some really nice stops and views along the way. The second part is in Jujuy, where you can skip the city and base yourself in one of the villages of the Quebrada de Humahuaca. The two are about two hours apart by car. Give the villages at least two full days. Purmamarca, Tilcara and Humahuaca are tiny, close together and full of colour. From there, a few excursions are a must, the [Salinas Grandes](https://www.argentina.travel/en/news/certamente-sao-mais-de-sete-porque-os-vislumbres-magicos-que-esse-imperdivel-argentino-alcanca-nao-tem-limites-a-cor-branca-cobra-protagonismo-e-a-experiencia-so-fica-melhor-quando-se-caminha-por-um-cobertor-sem-fim-no-noroeste-estas-sao-as-razoes-pelas-quais-as-salinas-grandes-estao-no-top-7-das-maravilhas-naturais-do-pais), a huge white salt flat that goes all the way to the horizon, the Hornocal, the many-coloured mountain above Humahuaca, and the [Quebrada de las Señoritas](https://thetravellingtriplet.com/2019/05/01/walking-the-quebrada-de-las-senoritas/), a half-day hike with stunning views.

**Simple trips from Buenos Aires:**

> If you have a bit more time, there are a few easy trips close to the city.

- **An estancia (día de campo).** A proper day in the countryside. Open pampas, horse riding, a big asado and a long, lazy afternoon. Works as a day trip or an easy overnight. San Antonio de Areco, the home of gaucho culture, and the area around Cañuelas are the usual spots, both a short drive out.
- **Delta del Tigre.** Just outside the city, a maze of rivers and little wooded islands you get around by boat. A real change of pace, green and calm, and an easy day out.
- **Colonia, Uruguay.** If you're curious, a one-hour ferry takes you across the river to Colonia del Sacramento, a tiny old town in another country. It's a long day but a good one, with cobbled streets and lovely river views.

Closing line:
> These are the headline ones, what we'd recommend for a first visit. If you want something more off the beaten track, just ask, we're happy to share our more niche favourites.

---

### Getting to Argentina

Intro:
> Most of you are flying from Europe, so here are a few tips to make finding flights easier and cheaper.

How to search:
> Use Google Flights to search, not necessarily to book. Two things make it worth it. You can put in several departure airports at once, which helps if you're flexible about where you fly from, and the date grid shows you the cheapest days across a whole range of dates. Once you've found a good flight, book it directly on the airline's own website rather than through Google or some third party. It's usually the same price and a lot less hassle if anything changes.

> (For domestic flights inside Argentina, see the tips on the Travel in Argentina page, including a metasearcher to compare prices and a note on paying in pesos for a better rate.)

Book early:
> Prices climb as the date gets closer, so it's worth booking sooner rather than later.

Airlines from Europe to Buenos Aires:
> KLM, Iberia, Air Europa, Lufthansa, LATAM, ITA Airways, British Airways, Air France and Turkish Airlines all fly to Buenos Aires. Plus Ultra goes from Madrid only, and Level from Barcelona only. Delta is an option too if you don't mind a layover in the US. Sometimes the prices are great and sometimes they're not, so it's worth a look but check the routing.

Where you'll land:
> International flights come into Ezeiza (EZE), about 45 minutes outside the city. Worth remembering if you've got an onward domestic flight, because those usually go from Aeroparque (AEP), a different and more central airport.

---

### Questions? (replaces the old FAQ page)

This is a very short standalone block, not a full page of questions. Keep it light and friendly.

> Oops, we haven't really thought these through yet! In the meantime, if you have any questions at all, just let us know and we'll help.

(Include a contact link/email here, same as the footer.)

---

### RSVP

Intro:
> We'd love to know if you can make it. Fill in the form below, it only takes a minute.

> Let us know about any dietary needs or anything else we should know, and whether you're bringing a plus-one. If your plans aren't final yet, RSVP anyway and drop us a note if things change.

RSVP-by date: we'll confirm a deadline soon.

Embedded Tally form via `NEXT_PUBLIC_RSVP_URL`.

---

## 5. Footer (all pages)

- Tomas & Angie · 20 March 2027 · Buenos Aires
- RSVP link
- Contact: **hello@tomasandangie.com** *(placeholder, replace with real email/WhatsApp)*

---

## 6. Metadata (per page)

Set a sensible `<title>` and meta description per page, plus Open Graph tags for nice link sharing (people will share this on WhatsApp a lot).

- Site title: **Tomas & Angie — 20 March 2027, Buenos Aires**
- Default description: *Tomas and Angie are getting married in Buenos Aires on 20 March 2027. Everything you need to plan your trip.*
- OG image: reuse the home hero (placeholder for now).
- Favicon: a simple "T&A" monogram or a small mark in terracotta. Placeholder is fine.

---

## 7. To fill in later

- Wedding **venue** (Home, The Weekend). Time is roughly 6–7pm until 2am, confirm exact.
- **Get-together details** for Thursday/Friday/Sunday (kept deliberately light for now, do not invent specifics).
- **RSVP deadline** date.
- **Tally form URL** → set `NEXT_PUBLIC_RSVP_URL`. *(Needed from the couple.)*
- **Real contact email / WhatsApp** → replace the `hello@tomasandangie.com` placeholder. *(Needed from the couple.)*
- **Domain decision** → custom domain vs github.io (drives `basePath`). *(Needed before deploy.)*
- **Destination images** → filenames/paths in the repo, one or more per destination, plus the Home hero and the Buenos Aires image. *(Couple will provide.)*
- **Link check** → confirm the TurismoCity and Despegar URLs when wiring them. The Salinas Grandes link is a Portuguese-language article on the official Argentina site (only one available), swap if a cleaner English one turns up.
- **Spanish translation** (structure ready, content later).
