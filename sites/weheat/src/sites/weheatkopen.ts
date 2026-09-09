import type { SiteConfig } from './types';
import imgFlint from '../assets/weheat-flint-los.webp';
import imgAllElectric from '../assets/weheat-allelectric-los.webp';

/**
 * weheatkopen.nl: productgericht. Bezoeker weet al dat hij Weheat wil en zoekt
 * modellen, prijzen en een plek om te kopen. Prijsopbouw en subsidie centraal.
 */
const site: SiteConfig = {
  key: 'weheatkopen',
  domain: 'weheatkopen.nl',
  theme: 'mint',
  name: 'Weheat Kopen',
  wordmark: ['weheat', 'kopen', '.nl'],
  topbar: {
    style: 'dark',
    items: ['Prijzen incl. installatie', 'ISDE-subsidie geregeld', 'Erkende Weheat-installateurs'],
  },
  seo: {
    title: 'Weheat kopen | Modellen, prijzen en subsidie 2026 incl. installatie',
    description:
      'Weheat warmtepomp kopen? Bekijk de Flint en all-electric modellen, prijzen inclusief installatie en de ISDE-subsidie van 2026. Vraag direct je persoonlijke prijs aan.',
  },
  phone: { display: '085 060 8951', href: 'tel:+31850608951' },

  hero: {
    variant: 'product',
    eyebrow: 'Inclusief installatie en subsidieaanvraag',
    title: 'Weheat kopen? [[Dit kost het]], en zo regel je het in één keer',
    lead: 'De Weheat Flint is een van de stilste hybride warmtepompen op de markt. Op deze pagina zie je wat de modellen kosten, hoeveel subsidie je krijgt en hoe je een Weheat koopt inclusief installatie door een erkende installateur.',
    bullets: [
      'Vaste totaalprijs inclusief installatie',
      'ISDE-subsidie van € 2.000 tot € 3.500',
      'Geplaatst door erkende Weheat-installateurs',
    ],
    proof: '10/10 klantbeoordeling voor Duurzaam Direct Energie (101 reviews)',
  },

  usps: [
    {
      icon: 'euro',
      title: 'Eén totaalprijs',
      text: 'Warmtepomp, installatie, inbedrijfstelling en aansluiten op je cv-ketel: alles zit in de prijs.',
    },
    {
      icon: 'tools',
      title: 'Installatie inbegrepen',
      text: 'Je koopt geen losse warmtepomp maar een werkende installatie. Meestal in één dag geplaatst.',
    },
    {
      icon: 'star',
      title: 'Hulp bij subsidie',
      text: 'Je krijgt alle documenten voor RVO aangeleverd. De aanvraag kost je een kwartier.',
    },
    {
      icon: 'shield',
      title: 'Garantie en service',
      text: 'Fabrieksgarantie van Weheat plus een installateur die je kunt bellen als er iets is.',
    },
  ],

  funnel: {
    title: 'Vraag je persoonlijke prijs aan',
    intro: 'Kies je model en ontvang binnen 1 werkdag een vaste prijs inclusief installatie.',
    questions: [
      {
        name: 'model',
        title: 'Welk model heeft je interesse?',
        options: [
          { value: 'flint-hybride', label: 'Weheat Flint (hybride)', hint: 'Vanaf € 3.894 na subsidie' },
          { value: 'all-electric', label: 'Weheat all-electric', hint: 'Vanaf € 11.500 incl. installatie' },
          { value: 'advies', label: 'Weet ik nog niet, adviseer mij' },
        ],
      },
      {
        name: 'gasverbruik',
        title: 'Hoeveel gas verbruik je per jaar?',
        hint: 'Staat op je jaarafrekening. Een schatting is prima.',
        options: [
          { value: 'tot-1000', label: 'Minder dan 1.000 m³' },
          { value: '1000-1500', label: '1.000 tot 1.500 m³' },
          { value: 'meer-dan-1500', label: 'Meer dan 1.500 m³' },
          { value: 'onbekend', label: 'Weet ik niet' },
        ],
      },
      {
        name: 'termijn',
        title: 'Wanneer wil je de warmtepomp laten plaatsen?',
        options: [
          { value: 'zsm', label: 'Zo snel mogelijk' },
          { value: 'binnen-3-maanden', label: 'Binnen 3 maanden' },
          { value: 'orienterend', label: 'Ik oriënteer me nog' },
        ],
      },
    ],
    contactTitle: 'Naar wie mag de prijsopgave?',
    contactHint: 'Een adviseur belt je kort om de prijs definitief te maken.',
    submitLabel: 'Prijs aanvragen',
    footnote: 'Vrijblijvend. Je gegevens worden alleen gebruikt voor je prijsopgave.',
    endpoint: '',
    fallbackEmail: 'info@ddenergie.nl',
  },

  sections: ['usps', 'models', 'prices', 'steps', 'about', 'faq', 'cta'],

  prices: {
    title: 'Wat zit er in de prijs?',
    intro: 'Bij losse online prijzen van warmtepompen komt de installatie er vaak nog bovenop. De prijzen op deze site zijn totaalprijzen: je betaalt niets extra voor plaatsing of aansluiting.',
    included: [
      'De Weheat warmtepomp (binnen- en buitendeel)',
      'Montage van de buitenunit op de grond, het dak of aan de gevel',
      'Aansluiten op je bestaande cv-installatie of cv-ketel',
      'Elektrische aansluiting in de meterkast',
      'Inbedrijfstelling en uitleg over de bediening en de app',
      'Registratie en documenten voor je ISDE-subsidieaanvraag',
      'Fabrieksgarantie Weheat en installatiegarantie',
    ],
  },

  steps: {
    title: 'Zo koop je een Weheat',
    intro: 'Geen webshop-winkelmandje, maar wel net zo eenvoudig.',
    items: [
      { title: 'Kies je model', text: 'Flint hybride of all-electric. Twijfel je? Dan bepaalt de adviseur samen met jou wat past.' },
      { title: 'Ontvang een vaste prijs', text: 'Binnen 1 werkdag een prijsopgave inclusief installatie en het subsidiebedrag voor jouw situatie.' },
      { title: 'Installatie ingepland', text: 'Na akkoord wordt de installatie ingepland. Een hybride Weheat is meestal in één werkdag geplaatst.' },
      { title: 'Subsidie aanvragen', text: 'Je krijgt alle documenten aangeleverd en vraagt de ISDE-subsidie aan bij RVO. Uitbetaling volgt meestal binnen 8 weken.' },
    ],
  },

  models: {
    title: 'Weheat modellen en prijzen',
    intro: 'Weheat maakt drie warmtepompen: de compacte Flint, de flexibel te plaatsen Sparrow en de krachtige Blackbird. Dit zijn de twee opstellingen die het meest gekozen worden; de Sparrow en Blackbird zijn op aanvraag leverbaar.',
    items: [
      {
        name: 'Weheat Flint',
        subtitle: 'Hybride warmtepomp, 6 kW',
        price: '€ 3.894',
        priceNote: 'incl. installatie, na aftrek ISDE-subsidie',
        badge: 'Bestseller',
        image: imgFlint,
        points: [
          'Compact en zeer stil (circa 38 dB)',
          'Werkt samen met je huidige cv-ketel',
          'Voor woningen met gasverbruik tot 1.000 m³',
          'Bespaart tot 70% gas',
        ],
      },
      {
        name: 'Weheat all-electric',
        subtitle: 'Volledig elektrisch, 6 tot 12 kW',
        price: '€ 11.500',
        priceNote: 'incl. installatie, vóór aftrek ISDE-subsidie',
        image: imgAllElectric,
        points: [
          'Geen gasaansluiting meer nodig',
          'Verwarming én warm tapwater',
          'Hoog rendement, ook in de winter',
          'Voor goed geïsoleerde woningen',
        ],
      },
    ],
  },

  about: {
    title: 'Waarom Weheat?',
    text: 'Weheat is een Nederlandse warmtepompfabrikant die zich richt op één ding: stille, zuinige warmtepompen die passen bij Nederlandse woningen en Nederlandse winters. De compacte buitenunit past ook in een kleine tuin of op een balkon.',
    points: ['Ontworpen in Nederland', 'Flint, Sparrow en Blackbird', 'Hybride nu, later all-electric', 'Op de ISDE-apparatenlijst van RVO'],
  },

  faq: [
    {
      q: 'Kan ik een Weheat los kopen zonder installatie?',
      a: 'Weheat-warmtepompen worden geleverd en geplaatst door erkende installateurs. Dat is ook een voorwaarde voor de ISDE-subsidie en de fabrieksgarantie. De prijzen op deze site zijn daarom altijd inclusief installatie.',
    },
    {
      q: 'Wat is het verschil tussen de Flint en de all-electric variant?',
      a: 'De Flint is een hybride warmtepomp: hij werkt samen met je cv-ketel en neemt het grootste deel van het verwarmen over. De all-electric variant vervangt je cv-ketel volledig, ook voor warm tapwater. Hybride is voordeliger en past in bijna elke woning; all-electric vraagt goede isolatie.',
    },
    {
      q: 'Welke Weheat modellen zijn er?',
      a: 'Weheat heeft drie modellen. De Flint is compact en de populairste keuze voor hybride. De Sparrow is flexibel te plaatsen en levert meer vermogen. De Blackbird is het krachtigste model en wordt vaak op een plat dak of uit het zicht geplaatst. De adviseur bepaalt samen met jou welk model bij je woning past.',
    },
    {
      q: 'Kan ik nu hybride kopen en later all-electric gaan?',
      a: 'Ja. Dat is precies waar Weheat op is ingericht: begin hybride naast je cv-ketel en stap later over op all-electric. Die overstap kan vaak met een upgrade van het bestaande systeem in plaats van een compleet nieuwe warmtepomp.',
    },
    {
      q: 'Hoeveel subsidie krijg ik in 2026?',
      a: 'Voor een hybride warmtepomp ligt de ISDE-subsidie rond € 2.000 tot € 3.000, voor all-electric rond € 2.500 tot € 3.500. Het exacte bedrag hangt af van het model en vermogen en staat in je prijsopgave.',
    },
    {
      q: 'Hoe lang duurt de levering?',
      a: 'Weheat-warmtepompen zijn doorgaans goed leverbaar. Na akkoord op de prijsopgave wordt de installatie meestal binnen enkele weken ingepland.',
    },
    {
      q: 'Wat bespaar ik met een Weheat Flint?',
      a: 'Een hybride warmtepomp neemt tot zo’n 70% van je gasverbruik over. Bij een verbruik van 1.000 m³ scheelt dat honderden euro’s per jaar, afhankelijk van je energietarieven. De adviseur rekent het voor jouw situatie door.',
    },
    {
      q: 'Kan ik betalen in termijnen?',
      a: 'Vraag hiernaar bij de adviseur. Voor warmtepompen bestaan aantrekkelijke financieringsmogelijkheden, zoals het Warmtefonds met lage rente voor woningeigenaren.',
    },
  ],

  cta: {
    title: 'Weheat kopen inclusief installatie?',
    text: 'Vraag je persoonlijke prijs aan. Binnen 1 werkdag weet je precies wat je betaalt en wat je terugkrijgt aan subsidie.',
    button: 'Prijs aanvragen',
  },

  thanks: {
    title: 'Je prijsaanvraag is verstuurd',
    text: 'Bedankt! Een adviseur belt je binnen 1 werkdag om de prijs definitief te maken voor jouw woning. Daarna ontvang je de prijsopgave per e-mail.',
    next: [
      'Pak je laatste energierekening erbij voor je gasverbruik.',
      'Maak een foto van je cv-ketel en de meterkast; dat versnelt de offerte.',
      'Bedenk waar de buitenunit kan staan.',
    ],
  },

  gtmId: '',
};

export default site;
