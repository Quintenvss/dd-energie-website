# DD Energie — nieuwe website (Astro)

Nieuwe, snelle website voor [ddenergie.nl](https://ddenergie.nl) — gebouwd met
[Astro](https://astro.build) + Tailwind CSS v4. Vervangt de huidige WordPress/Divi-site.

## Commando's

| Commando          | Actie                                        |
| ----------------- | -------------------------------------------- |
| `npm install`     | Dependencies installeren                     |
| `npm run dev`     | Dev-server op `http://localhost:4321`        |
| `npm run build`   | Productie-build naar `./dist/`               |
| `npm run preview` | Productie-build lokaal bekijken              |

## Structuur

- `src/pages/` — alle pagina's. De oude WordPress-URL's zijn behouden
  (`/thuisbatterij-plaatsen/`, `/warmtepomp-plaatsen/`, `/over-ons/`, `/offerte-aanvragen/`,
  `/contact/`, `/blog/`) zodat bestaande SEO-waarde en backlinks blijven werken.
- `src/data/products.ts` — prijzen en productinfo (top 3 batterijen / warmtepompen).
- `src/data/faq.ts` — FAQ-teksten incl. automatische FAQ-schema.org markup.
- `src/content/blog/` — blogartikelen als Markdown; nieuw artikel = nieuw `.md`-bestand.
- `src/styles/global.css` — designsysteem (kleuren, fonts, signatuur-elementen).

## Formulieren instellen

De formulieren staan in `src/components/OfferteForm.astro` en `src/pages/contact.astro`.
Zet daar `FORM_ENDPOINT` / `data-endpoint` naar een van deze opties:

1. **n8n-webhook** (aanbevolen — jullie hebben al n8n): maak een workflow met een
   Webhook-node (POST, JSON) die de aanvraag doormailt naar info@ddenergie.nl en/of in een
   sheet/CRM zet. Plak de webhook-URL in het formulier.
2. **Formspree / Web3Forms**: gratis formulier-endpoints, geen server nodig.

Zolang het endpoint leeg is, opent verzenden een voorgevulde e-mail (mailto-fallback).

## Nog toevoegen (TODO)

- Echte installatiefoto's ("Recente installaties") — plaats in `src/assets/` en gebruik
  Astro's `<Image>` (product-, merk- en certificaatbeelden staan er al in).
- Trustoo review-widget embedden in `src/components/Reviews.astro`.
- Privacyverklaring- en cookiebeleid-pagina's (links staan al in de footer).
- Resterende blogartikelen overzetten uit WordPress (als `.md` in `src/content/blog/`).

## Deployen

`npm run build` maakt een volledig statische site in `dist/` — geen PHP/database nodig.

- **Hostinger**: upload de inhoud van `dist/` naar `public_html` (of gebruik de statische
  site-deploy van Hostinger). Stel 404-pagina in op `404.html`.
- **Netlify/Vercel/Cloudflare Pages**: repo koppelen, build-commando `npm run build`,
  output-directory `dist`. Gratis tier is ruim voldoende.

Na livegang: oude WordPress uitzetten en op DNS-niveau naar de nieuwe hosting wijzen.
