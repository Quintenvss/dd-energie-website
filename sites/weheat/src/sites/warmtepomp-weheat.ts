import type { SiteConfig } from './types';
import imgFlint from '../assets/weheat-flint-los.webp';
import imgAllElectric from '../assets/weheat-allelectric-los.webp';

/**
 * warmtepomp-weheat.nl: check-stijl. Bezoeker oriënteert zich en vraagt zich af
 * of een Weheat past bij zijn woning. De funnel is verpakt als geschiktheidscheck.
 */
const site: SiteConfig = {
  key: 'warmtepomp-weheat',
  domain: 'warmtepomp-weheat.nl',
  theme: 'sky',
  name: 'Warmtepomp Weheat',
  wordmark: ['warmtepomp-', 'weheat', '.nl'],
  topbar: {
    style: 'dark',
    items: ['Gratis geschiktheidscheck', 'Erkende Weheat-installateurs', 'Uitkomst binnen 1 werkdag'],
  },
  seo: {
    title: 'Weheat warmtepomp | Doe de geschiktheidscheck voor jouw woning',
    description:
      'Past een Weheat warmtepomp bij jouw woning? Doe de gratis check in 4 vragen en ontvang een uitkomst met prijsindicatie en subsidie van een erkende Weheat-installateur.',
  },
  phone: { display: '085 060 8951', href: 'tel:+31850608951' },

  hero: {
    variant: 'check',
    eyebrow: 'Gratis geschiktheidscheck · 4 vragen · 1 minuut',
    title: 'Is een Weheat warmtepomp [[geschikt voor jouw woning]]?',
    lead: 'Niet elke woning heeft dezelfde warmtepomp nodig. Beantwoord vier vragen over je huis en je hoort van een erkende installateur of hybride of all-electric bij je past, wat het kost en hoeveel subsidie je krijgt.',
    bullets: [
      'Uitkomst met prijsindicatie en subsidiebedrag',
      'Beoordeeld door een installateur, niet door een rekenmodel',
      'Gratis en zonder verplichtingen',
    ],
    proof: 'Beoordeeld door installateurs met een 10/10 klantscore (Duurzaam Direct Energie, 101 reviews)',
  },

  usps: [
    {
      icon: 'search',
      title: 'Eerlijke uitkomst',
      text: 'Past een warmtepomp niet bij je woning, dan hoor je dat ook. Liever een goed advies dan een verkeerde installatie.',
    },
    {
      icon: 'home',
      title: 'Voor bijna elke woning',
      text: 'Een hybride Weheat past in de meeste woningen met een cv-ketel, ook bij matige isolatie.',
    },
    {
      icon: 'sound',
      title: 'Stil in de tuin',
      text: 'De Weheat buitenunit produceert circa 38 dB en voldoet ruim aan de geluidsnormen voor woningen.',
    },
    {
      icon: 'euro',
      title: 'Subsidiecheck inbegrepen',
      text: 'Je hoort direct welk ISDE-bedrag geldt voor de warmtepomp die bij jou past.',
    },
  ],

  funnel: {
    title: 'Doe de geschiktheidscheck',
    intro: 'Vier vragen over je woning. Je ontvangt de uitkomst van een installateur.',
    questions: [
      {
        name: 'bouwjaar',
        title: 'Wanneer is je woning gebouwd?',
        options: [
          { value: 'voor-1990', label: 'Vóór 1990' },
          { value: '1990-2010', label: 'Tussen 1990 en 2010' },
          { value: 'na-2010', label: 'Na 2010' },
        ],
      },
      {
        name: 'isolatie',
        title: 'Hoe is je woning geïsoleerd?',
        hint: 'Denk aan dak, muren, vloer en glas.',
        options: [
          { value: 'goed', label: 'Goed', hint: 'HR++ glas, spouw, dak en vloer geïsoleerd' },
          { value: 'gemiddeld', label: 'Gemiddeld', hint: 'Dubbel glas, deels geïsoleerd' },
          { value: 'matig', label: 'Matig of weet ik niet' },
        ],
      },
      {
        name: 'afgiftesysteem',
        title: 'Hoe wordt de warmte afgegeven?',
        options: [
          { value: 'radiatoren', label: 'Radiatoren' },
          { value: 'vloerverwarming', label: 'Vloerverwarming' },
          { value: 'beide', label: 'Radiatoren en vloerverwarming' },
        ],
      },
      {
        name: 'gasverbruik',
        title: 'Wat is je gasverbruik per jaar?',
        hint: 'Een schatting is prima.',
        options: [
          { value: 'tot-1000', label: 'Minder dan 1.000 m³' },
          { value: '1000-1800', label: '1.000 tot 1.800 m³' },
          { value: 'meer-dan-1800', label: 'Meer dan 1.800 m³' },
          { value: 'onbekend', label: 'Weet ik niet' },
        ],
      },
    ],
    contactTitle: 'Waar mogen we de uitkomst naartoe sturen?',
    contactHint: 'Een installateur kijkt naar je antwoorden en belt je met de uitkomst.',
    submitLabel: 'Bekijk mijn uitkomst',
    footnote: 'Gratis en vrijblijvend. Je gegevens gaan alleen naar de installateur die de check beoordeelt.',
    endpoint: '',
    fallbackEmail: 'info@ddenergie.nl',
  },

  sections: ['usps', 'suitability', 'models', 'steps', 'about', 'faq', 'cta'],

  suitability: {
    title: 'Hybride of all-electric: wat past waar?',
    intro: 'De uitkomst van de check hangt vooral af van isolatie, afgiftesysteem en gasverbruik. Dit is de vuistregel die installateurs gebruiken.',
    cards: [
      {
        title: 'Woning van vóór 1990, matig geïsoleerd, radiatoren',
        fit: 'Hybride',
        text: 'Een hybride Weheat Flint neemt het grootste deel van het verwarmen over; de cv-ketel springt bij op koude dagen. Geen isolatie-eisen, snel terugverdiend.',
      },
      {
        title: 'Woning van 1990 tot 2010, gemiddeld geïsoleerd',
        fit: 'Beide',
        text: 'Hybride is de veilige keuze. All-electric kan als de isolatie op orde is en de radiatoren groot genoeg zijn voor lagere aanvoertemperaturen.',
      },
      {
        title: 'Woning van na 2010 of goed na-geïsoleerd, vloerverwarming',
        fit: 'All-electric',
        text: 'Vloerverwarming en goede isolatie maken een all-electric Weheat rendabel. Je gaat volledig van het gas af, inclusief warm tapwater.',
      },
    ],
  },

  steps: {
    title: 'Zo werkt de check',
    intro: 'Geen automatische uitkomst, maar een beoordeling door iemand die dagelijks warmtepompen plaatst.',
    items: [
      { title: 'Beantwoord 4 vragen', text: 'Bouwjaar, isolatie, afgiftesysteem en gasverbruik. Een schatting is prima.' },
      { title: 'Installateur beoordeelt', text: 'Een erkende Weheat-installateur bekijkt je antwoorden en belt je binnen 1 werkdag met de uitkomst.' },
      { title: 'Prijsindicatie en subsidie', text: 'Je hoort welk type past, wat het ongeveer kost en welk ISDE-bedrag je terugkrijgt.' },
      { title: 'Offerte als je wilt', text: 'Wil je verder? Dan volgt een offerte op maat. Wil je niet verder? Dan stopt het hier.' },
    ],
  },

  models: {
    title: 'De twee Weheat opstellingen',
    intro: 'Zelfde merk, zelfde stille techniek, ander doel.',
    items: [
      {
        name: 'Weheat Flint',
        subtitle: 'Hybride, samen met je cv-ketel',
        price: 'vanaf € 3.894',
        priceNote: 'incl. installatie, na aftrek ISDE-subsidie',
        badge: 'Past in de meeste woningen',
        image: imgFlint,
        points: [
          'Geen isolatie-eisen',
          'Circa 38 dB, zeer stil',
          'Tot 70% minder gasverbruik',
          'Vaak in één dag geplaatst',
        ],
      },
      {
        name: 'Weheat all-electric',
        subtitle: 'Cv-ketel eruit, gasaansluiting dicht',
        price: 'vanaf € 11.500',
        priceNote: 'incl. installatie, vóór aftrek ISDE-subsidie',
        image: imgAllElectric,
        points: [
          '6 tot 12 kW vermogen',
          'Verwarming en warm water',
          'Vereist goede isolatie',
          'Hoogste subsidiebedrag',
        ],
      },
    ],
  },

  about: {
    title: 'Over het merk Weheat',
    text: 'Weheat is een Nederlandse fabrikant die warmtepompen ontwikkelt voor de Nederlandse woningvoorraad: compact, stil en met een hoog rendement bij lage buitentemperaturen. De pompen werken met een natuurlijk koudemiddel en staan op de ISDE-apparatenlijst.',
    points: ['Nederlandse fabrikant', 'Drie modellen: Flint, Sparrow, Blackbird', 'Hybride nu, later all-electric', 'Bediening en inzicht via app'],
  },

  faq: [
    {
      q: 'Is mijn woning geschikt voor een Weheat warmtepomp?',
      a: 'Een hybride Weheat past in vrijwel elke woning met een cv-ketel, ook bij beperkte isolatie. Voor all-electric is goede isolatie belangrijk en helpt vloerverwarming of grote radiatoren. Doe de check en een installateur beoordeelt jouw situatie.',
    },
    {
      q: 'Wat als mijn woning nu alleen geschikt is voor hybride?',
      a: 'Dan begin je hybride en stap je later over op all-electric, bijvoorbeeld na isoleren. Bij Weheat kan die overstap vaak met een upgrade van het bestaande systeem, zonder een nieuwe warmtepomp te kopen. Zo is je investering van nu niet weggegooid.',
    },
    {
      q: 'Moet ik eerst isoleren?',
      a: 'Voor een hybride warmtepomp niet. Voor all-electric is isoleren vaak wel verstandig, omdat de warmtepomp dan met lagere temperaturen kan verwarmen en zuiniger draait. De installateur vertelt je wat in jouw geval zinvol is.',
    },
    {
      q: 'Hoeveel geluid maakt de buitenunit?',
      a: 'De Weheat buitenunit produceert circa 38 decibel, vergelijkbaar met zacht achtergrondgeluid. Dat is ruim binnen de wettelijke geluidsnorm van 40 dB op de erfgrens.',
    },
    {
      q: 'Wat kost een Weheat warmtepomp?',
      a: 'Een hybride Weheat Flint is er vanaf circa € 3.894 inclusief installatie en na aftrek van subsidie. Een all-electric Weheat begint rond € 11.500 inclusief installatie, voordat de subsidie van € 2.500 tot € 3.500 eraf gaat.',
    },
    {
      q: 'Hoeveel ISDE-subsidie krijg ik?',
      a: 'In 2026 ligt de ISDE-subsidie voor een hybride warmtepomp rond € 2.000 tot € 3.000 en voor all-electric rond € 2.500 tot € 3.500. Voorwaarde is installatie door een erkend installateur en een aanvraag binnen 24 maanden.',
    },
    {
      q: 'Wat gebeurt er met mijn antwoorden?',
      a: 'Je antwoorden gaan naar een erkende installateur die je situatie beoordeelt en je belt met de uitkomst. Ze worden niet gedeeld met andere partijen.',
    },
  ],

  cta: {
    title: 'Benieuwd of een Weheat bij je woning past?',
    text: 'Doe de gratis check. Binnen 1 werkdag weet je of hybride of all-electric bij je past en wat het kost.',
    button: 'Doe de check',
  },

  thanks: {
    title: 'Je check is ontvangen',
    text: 'Bedankt! Een erkende installateur bekijkt je antwoorden en belt je binnen 1 werkdag met de uitkomst, een prijsindicatie en het subsidiebedrag.',
    next: [
      'We bellen met een 085-nummer. Neem je niet op, dan proberen we het later nog eens.',
      'Zoek alvast je gasverbruik op voor een scherpere prijsindicatie.',
      'Kijk of er ruimte is voor een buitenunit van ongeveer een meter breed.',
    ],
  },

  gtmId: '',
};

export default site;
