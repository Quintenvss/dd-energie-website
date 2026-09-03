export interface Product {
  name: string;
  price: string;
  priceNote: string;
  points: string[];
  popular?: boolean;
}

export const thuisbatterijen: Product[] = [
  {
    name: 'AlphaESS Smile G3',
    price: '€ 3.700',
    priceNote: 'incl. installatie',
    points: [
      'Stapelbare modules tot 23,0 kWh',
      'Geïntegreerd energiemanagement (EMS)',
      'Uitstekende prijs-kwaliteitverhouding',
      'Voorbereid op einde saldering (2027)',
      'Werkt mét en zonder zonnepanelen',
    ],
    popular: true,
  },
  {
    name: 'Enphase 5P',
    price: '€ 5.050',
    priceNote: 'incl. installatie',
    points: [
      'Uitbreidbaar tot 60 kWh',
      'Naadloos met Enphase micro-omvormers',
      'Geïntegreerd EMS in combinatie met meter',
      'All-in-one systeem',
    ],
  },
  {
    name: 'Sigenergy SigenStor 5 kW',
    price: '€ 6.995',
    priceNote: 'incl. installatie',
    points: [
      'Stapelbare modules tot 22,5 kWh',
      'Populairste batterij voor energiehandel',
      'EMS, omvormer en EV-lader in één',
      'Werkt mét en zonder zonnepanelen',
    ],
  },
];

export const hybrideWarmtepompen: Product[] = [
  {
    name: 'Weheat Flint 6 kW',
    price: '€ 3.894',
    priceNote: 'incl. subsidie en installatie',
    points: [
      'Compact en zeer stil (38 dB)',
      'Werkt samen met je cv-ketel',
      'Voor gasverbruik tot 1.000 m³',
      'Betrouwbaar merk, goede garanties',
    ],
    popular: true,
  },
  {
    name: 'Remeha Elga Ace',
    price: '€ 4.999',
    priceNote: 'incl. installatie',
    points: [
      'Beste prijs-kwaliteit in zijn klasse',
      'Vermogens van 6 tot 12 kW',
      'Scherpe prijs, snelle levertijd',
      'Zuinig en hoog rendement',
    ],
  },
  {
    name: 'Remeha Elga Ace Hybride',
    price: '€ 5.500',
    priceNote: 'incl. installatie',
    points: [
      'Compacte hybride oplossing',
      'Energielabel A+++',
      'Ook bij beperkte isolatie',
      'Uitstekende garanties',
    ],
  },
];

export const allElectricWarmtepompen: Product[] = [
  {
    name: 'Weheat All-Electric',
    price: '€ 11.500',
    priceNote: 'incl. installatie',
    points: [
      'Beste prijs-kwaliteit in zijn klasse',
      'Vermogens van 6 tot 12 kW',
      'Zuinigst in zijn klasse',
      'Scherpe prijs, snelle levertijd',
    ],
  },
  {
    name: 'Daikin Altherma',
    price: '€ 10.999',
    priceNote: 'incl. installatie',
    points: [
      'Energieklasse verwarming A+++',
      'Zeer hoge SCOP-waarde',
      'Verwarmen én koelen in één systeem',
      'Lange levensduur',
    ],
    popular: true,
  },
  {
    name: 'Vaillant aroTHERM Plus',
    price: '€ 12.500',
    priceNote: 'incl. installatie',
    points: [
      'Monoblock van Vaillant',
      'Energieklasse verwarming A+++',
      'Tot 10% extra besparing',
      'Betrouwbaar merk, sterke garanties',
    ],
  },
];
