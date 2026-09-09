# Weheat conversiesites

Drie losse conversiesites (offerte-vergelijker-stijl) voor de Weheat-domeinen, gebouwd
vanuit één codebase. Elke site heeft een eigen domein, eigen ontwerp (kleuren,
lettertypen, hero-opzet), eigen teksten, eigen funnelvragen en eigen FAQ.

| Site                     | Insteek                                            | Thema   |
| ------------------------ | -------------------------------------------------- | ------- |
| **weheatofferte.nl**     | Pure offerte-funnel, formulier in de hero           | `ember` |
| **weheatkopen.nl**       | Productgericht: modellen, prijzen, subsidie         | `tide`  |
| **warmtepomp-weheat.nl** | Geschiktheidscheck: past een Weheat bij je woning?  | `sky`   |

Initiatief van Duurzaam Direct Energie en Strada Installatietechniek (zie footer en
privacyverklaring).

## Commando's

Alles draait vanuit deze map (`sites/weheat`):

| Commando                     | Actie                                                     |
| ---------------------------- | --------------------------------------------------------- |
| `npm install`                | Dependencies installeren                                  |
| `npm run dev:offerte`        | Dev-server weheatofferte.nl (poort 4331)                  |
| `npm run dev:kopen`          | Dev-server weheatkopen.nl (poort 4332)                    |
| `npm run dev:warmtepomp`     | Dev-server warmtepomp-weheat.nl (poort 4333)              |
| `npm run build`              | Bouwt alle drie de sites naar `dist/<domein>/`            |
| `npm run build:offerte` enz. | Bouwt één site                                            |
| `npm run preview:kopen` enz. | Bekijkt de productie-build van één site lokaal            |

De `SITE`-omgevingsvariabele bepaalt welke site gebouwd wordt (`weheatofferte`,
`weheatkopen` of `warmtepomp-weheat`). De scripts zetten die automatisch.

## Structuur

- `sites.mjs` — registry: sleutel, domein, thema en poort per site.
- `src/sites/<site>.ts` — **alle teksten en instellingen per site**: SEO, hero,
  USP's, funnelvragen, secties, modellen, FAQ, bedankt-pagina, GTM-id.
- `src/sites/types.ts` — de vorm van zo'n configuratie.
- `src/styles/themes/<thema>.css` — kleuren en lettertypen per site.
- `src/styles/base.css` — gedeelde basis (knoppen, velden, keuzekaarten, funnel).
- `src/components/` — secties; `Hero.astro` heeft drie varianten, de rest is gedeeld.
- `src/components/Funnel.astro` + `src/scripts/funnel.ts` — het multi-step formulier.
- `src/pages/` — `index`, `bedankt`, `privacy`, `404`.

Teksten aanpassen = het bestand in `src/sites/` bewerken. Een sectie verplaatsen of
weglaten = de `sections`-lijst in die configuratie aanpassen.

## Leads (formulier)

Het formulier stuurt een JSON-bericht naar `funnel.endpoint` in de siteconfiguratie.
Zolang dat leeg is, opent verzenden een voorgevulde e-mail naar `funnel.fallbackEmail`
(mailto-fallback), net als op ddenergie.nl.

Aanbevolen: één n8n-workflow met een Webhook-node (POST, JSON). De lead bevat o.a.:

```json
{
  "woningtype": "tussenwoning",
  "huidige_verwarming": "cv-ketel",
  "interesse": "hybride",
  "naam": "…", "email": "…", "telefoon": "…", "postcode": "1234 AB", "huisnummer": "12",
  "site": "weheatofferte",
  "domein": "weheatofferte.nl",
  "pagina": "https://weheatofferte.nl/?utm_source=…",
  "utm_source": "…", "utm_medium": "…", "utm_campaign": "…",
  "verwijzer": "https://www.google.com/",
  "verzonden_op": "2026-09-09T20:00:00.000Z"
}
```

Met `site`/`domein` en `postcode` kan de workflow de lead naar DD Energie of Strada
routeren en in een sheet of CRM zetten. Plak de webhook-URL in `funnel.endpoint` van
elke site (of in alle drie dezelfde).

Na succesvol verzenden gaat de bezoeker naar `/bedankt/` (met `noindex`), waar een
`lead_thankyou`-event in de `dataLayer` wordt gezet. De funnel zelf stuurt
`funnel_start`, `funnel_step` en `lead_submitted`. Vul `gtmId` in de siteconfiguratie
om Google Tag Manager te laden.

Spamfilter: verborgen honeypot-veld `website`; is dat gevuld, dan wordt niets verstuurd.

## Vóór livegang

- [ ] `funnel.endpoint` (n8n-webhook) instellen en testen.
- [ ] `gtmId` invullen en conversies koppelen aan `lead_thankyou`.
- [ ] KvK-nummers invullen in `src/pages/privacy.astro`.
- [ ] Prijzen en subsidiebedragen controleren (staan in `src/sites/*.ts`).
- [ ] Eventueel de tekst over Sparrow/Blackbird en de "hybride nu, later
      all-electric"-upgrade afstemmen met Weheat.
- [ ] Search Console per domein verifiëren.

## Deployen (Hostinger)

`npm run build` maakt drie volledig statische sites:

```
dist/weheatofferte.nl/
dist/weheatkopen.nl/
dist/warmtepomp-weheat.nl/
```

Per domein in hPanel een website toevoegen (of het domein als extra website aan het
bestaande hostingpakket koppelen), daarna de inhoud van de bijbehorende `dist/<domein>/`
naar `public_html` uploaden. Stel de 404-pagina in op `404.html`. SSL via Hostinger
(gratis Let's Encrypt).
