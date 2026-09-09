import type { SiteConfig } from './types';
import imgFlint from '../assets/weheat-flint-los.webp';
import imgAllElectric from '../assets/weheat-allelectric-los.webp';

/**
 * weheatofferte.nl: pure offerte-funnel. Bezoeker wil een prijs, zo snel mogelijk.
 * Formulier staat in de hero, de rest van de pagina neemt twijfel weg.
 */
const site: SiteConfig = {
  key: 'weheatofferte',
  domain: 'weheatofferte.nl',
  theme: 'ember',
  name: 'Weheat Offerte',
  wordmark: ['weheat', 'offerte', '.nl'],
  topbar: {
    style: 'primary',
    items: ['Gratis en vrijblijvend', 'Erkende Weheat-installateurs', 'Offerte binnen 1 werkdag'],
  },
  seo: {
    title: 'Weheat offerte aanvragen | Gratis prijsopgave van een erkende installateur',
    description:
      'Vraag gratis en vrijblijvend een Weheat offerte aan. Binnen 1 werkdag een scherpe prijs van een erkende Weheat-installateur, inclusief installatie en ISDE-subsidiecheck.',
  },
  phone: { display: '085 060 8951', href: 'tel:+31850608951' },

  hero: {
    variant: 'split-form',
    eyebrow: 'Gratis · vrijblijvend · reactie binnen 1 werkdag',
    title: 'Vraag je Weheat offerte aan en [[weet binnen 1 werkdag]] wat je betaalt',
    lead: 'Benieuwd wat een Weheat warmtepomp kost voor jouw woning? Beantwoord drie korte vragen en ontvang een offerte op maat van een erkende installateur bij jou in de buurt. Inclusief installatie en subsidie, zonder verplichtingen.',
    bullets: [
      'Offerte inclusief installatie én ISDE-subsidie',
      'Alleen erkende Weheat-installateurs',
      'Geen verplichtingen, geen belletjes van tien bedrijven',
    ],
    proof: 'Duurzaam Direct Energie scoort 10/10 op basis van 101 klantbeoordelingen',
  },

  usps: [
    {
      icon: 'clock',
      title: 'Binnen 1 werkdag',
      text: 'Je wordt gebeld door een adviseur die je situatie kort doorneemt. Daarna volgt de offerte per mail.',
    },
    {
      icon: 'euro',
      title: 'Subsidie in de offerte',
      text: 'Het ISDE-bedrag van 2.000 tot 3.500 euro staat direct in je offerte verwerkt. Geen verrassingen achteraf.',
    },
    {
      icon: 'shield',
      title: 'Erkende installateurs',
      text: 'Je aanvraag gaat naar een gecertificeerde installateur die dagelijks Weheat-warmtepompen plaatst.',
    },
    {
      icon: 'check',
      title: 'Vrijblijvend',
      text: 'Je zit nergens aan vast. Bevalt de offerte niet, dan leg je hem naast je en dat is dat.',
    },
  ],

  funnel: {
    title: 'Start je offerteaanvraag',
    intro: 'Drie vragen, dan je gegevens. Klaar in 1 minuut.',
    questions: [
      {
        name: 'woningtype',
        title: 'Wat voor woning heb je?',
        options: [
          { value: 'tussenwoning', label: 'Tussenwoning' },
          { value: 'hoek-of-2-onder-1-kap', label: 'Hoekwoning of 2-onder-1-kap' },
          { value: 'vrijstaand', label: 'Vrijstaande woning' },
          { value: 'appartement', label: 'Appartement' },
        ],
      },
      {
        name: 'huidige_verwarming',
        title: 'Hoe verwarm je nu?',
        options: [
          { value: 'cv-ketel', label: 'Cv-ketel op gas', hint: 'Meest voorkomend' },
          { value: 'hybride-warmtepomp', label: 'Al een hybride warmtepomp' },
          { value: 'anders', label: 'Anders of weet ik niet' },
        ],
      },
      {
        name: 'interesse',
        title: 'Waar wil je een offerte voor?',
        hint: 'Twijfel je? Kies advies, dan kijkt de installateur mee.',
        options: [
          { value: 'hybride', label: 'Hybride warmtepomp', hint: 'Naast je cv-ketel, vanaf € 3.894' },
          { value: 'all-electric', label: 'All-electric warmtepomp', hint: 'Volledig van het gas af' },
          { value: 'advies', label: 'Advies over wat past bij mijn woning' },
        ],
      },
    ],
    contactTitle: 'Waar mogen we de offerte naartoe sturen?',
    contactHint: 'De installateur belt je eerst kort om je situatie te checken.',
    submitLabel: 'Offerte aanvragen',
    footnote: 'Gratis en vrijblijvend. Je gegevens gaan alleen naar de installateur die je offerte maakt.',
    endpoint: '',
    fallbackEmail: 'info@ddenergie.nl',
  },

  sections: ['usps', 'compare', 'steps', 'models', 'about', 'faq', 'cta'],

  compare: {
    title: 'Zelf installateurs afbellen, of één aanvraag doen?',
    intro: 'Een goede Weheat-installateur vinden kost normaal gesproken avonden zoeken en bellen. Via weheatofferte.nl doe je één aanvraag en krijg je een offerte van een installateur die het merk kent.',
    rows: [
      { label: 'Tijd', self: 'Meerdere websites, formulieren en terugbelverzoeken', viaUs: 'Eén formulier van 1 minuut' },
      { label: 'Kennis van Weheat', self: 'Wisselend, niet elke installateur voert het merk', viaUs: 'Installateurs die Weheat dagelijks plaatsen' },
      { label: 'Subsidie', self: 'Zelf uitzoeken welk bedrag geldt', viaUs: 'ISDE-bedrag staat in de offerte' },
      { label: 'Prijs', self: 'Moeilijk te vergelijken door verschillende opbouw', viaUs: 'Eén duidelijke totaalprijs incl. installatie' },
      { label: 'Verplichtingen', self: 'Soms pushende verkopers', viaUs: 'Geen. Je beslist in alle rust' },
    ],
  },

  steps: {
    title: 'Zo werkt het',
    intro: 'Van aanvraag tot offerte in vier stappen.',
    items: [
      { title: 'Vul het formulier in', text: 'Drie vragen over je woning en je wensen, daarna je contactgegevens. Duurt 1 minuut.' },
      { title: 'Korte check per telefoon', text: 'Een adviseur belt je binnen 1 werkdag om je situatie te bespreken: gasverbruik, ketel, ruimte voor de buitenunit.' },
      { title: 'Offerte in je mailbox', text: 'Je ontvangt een offerte op maat met totaalprijs, installatie, garantie en het subsidiebedrag.' },
      { title: 'Jij beslist', text: 'Vergelijk rustig. Akkoord? Dan wordt de installatie ingepland, vaak binnen enkele weken.' },
    ],
  },

  models: {
    title: 'Waar vraag je een offerte voor aan?',
    intro: 'Weheat maakt stille, compacte warmtepompen die zowel hybride als volledig elektrisch ingezet worden. Dit zijn de twee meest aangevraagde opstellingen.',
    items: [
      {
        name: 'Weheat Flint',
        subtitle: 'Hybride, naast je cv-ketel',
        price: 'vanaf € 3.894',
        priceNote: 'incl. installatie en na aftrek ISDE-subsidie',
        badge: 'Meest aangevraagd',
        image: imgFlint,
        points: [
          'Zeer stil: circa 38 dB',
          'Bespaart tot 70% op je gasverbruik',
          'Geschikt bij gasverbruik tot 1.000 m³',
          'Meestal in één dag geplaatst',
        ],
      },
      {
        name: 'Weheat all-electric',
        subtitle: 'Volledig van het gas af',
        price: 'vanaf € 11.500',
        priceNote: 'incl. installatie, vóór aftrek ISDE-subsidie',
        image: imgAllElectric,
        points: [
          'Vermogens van 6 tot 12 kW',
          'Verwarmt en levert warm tapwater',
          'Zuinig, ook bij vrieskou',
          'Ideaal bij goede isolatie',
        ],
      },
    ],
  },

  about: {
    title: 'Over Weheat',
    text: 'Weheat is een Nederlandse fabrikant van warmtepompen die bekendstaat om compacte, stille buitenunits en een hoog rendement. De reeks bestaat uit de compacte Flint, de flexibel te plaatsen Sparrow en de krachtige Blackbird. Alle modellen zijn ontworpen voor Nederlandse woningen en werken met een natuurlijk koudemiddel.',
    points: ['Nederlands ontwerp en productie', 'Modellen: Flint, Sparrow en Blackbird', 'Hybride nu, later all-electric', 'Staat op de ISDE-apparatenlijst'],
  },

  faq: [
    {
      q: 'Wat kost een Weheat warmtepomp?',
      a: 'Een hybride Weheat Flint is er vanaf circa € 3.894 inclusief installatie en na aftrek van ISDE-subsidie. Een all-electric Weheat begint rond € 11.500 inclusief installatie, waar de subsidie van € 2.500 tot € 3.500 nog vanaf gaat. De exacte prijs hangt af van je woning en staat in de offerte.',
    },
    {
      q: 'Is de offerte echt vrijblijvend?',
      a: 'Ja. Je ontvangt een offerte en beslist zelf of je ermee verdergaat. Er zijn geen kosten en geen verplichtingen.',
    },
    {
      q: 'Van wie krijg ik de offerte?',
      a: 'Van een erkende installateur die is aangesloten bij dit initiatief en Weheat-warmtepompen plaatst in jouw regio. Je gegevens worden niet doorverkocht aan andere partijen.',
    },
    {
      q: 'Hoe snel kan de installatie plaatsvinden?',
      a: 'Na akkoord op de offerte wordt de installatie meestal binnen enkele weken ingepland. Een hybride warmtepomp is doorgaans in één werkdag geplaatst.',
    },
    {
      q: 'Hoe zit het met de ISDE-subsidie?',
      a: 'Via de ISDE-regeling krijg je in 2026 gemiddeld € 2.000 tot € 3.500 terug op een warmtepomp. Het bedrag staat in je offerte en de installateur levert alle documenten aan voor je aanvraag bij RVO.',
    },
    {
      q: 'Kan ik later van hybride naar all-electric?',
      a: 'Ja. Veel mensen beginnen met een hybride Weheat en gaan later volledig van het gas af. Bij Weheat kan die overstap vaak met een upgrade van het bestaande systeem, zonder een compleet nieuwe warmtepomp. De installateur bespreekt dit in de offerte.',
    },
    {
      q: 'Kan ik ook bellen?',
      a: 'Zeker. Bel 085 060 8951 op werkdagen en je krijgt direct een adviseur aan de lijn.',
    },
  ],

  cta: {
    title: 'Klaar om te weten wat een Weheat kost?',
    text: 'Eén formulier, één offerte, geen gedoe. Binnen 1 werkdag heb je een prijs.',
    button: 'Offerte aanvragen',
  },

  thanks: {
    title: 'Je aanvraag is binnen',
    text: 'Bedankt! Een adviseur belt je binnen 1 werkdag om je situatie kort door te nemen. Daarna ontvang je de offerte per e-mail.',
    next: [
      'Houd je telefoon in de gaten: we bellen met een 085-nummer.',
      'Zoek alvast je jaarlijkse gasverbruik op (staat op je energierekening).',
      'Kijk waar de buitenunit zou kunnen staan: tuin, balkon of plat dak.',
    ],
  },

  gtmId: '',
};

export default site;
