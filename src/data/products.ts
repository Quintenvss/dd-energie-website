import type { ImageMetadata } from 'astro';
import imgAlphaess from '../assets/products/alphaess-smile-g3.webp';
import imgEnphase from '../assets/products/enphase-5p.webp';
import imgSigenergy from '../assets/products/sigenergy-5kw.webp';
import imgWeheatFlint from '../assets/products/weheat-flint.webp';
import imgElgaAce from '../assets/products/remeha-elga-ace.png';
import imgElgaAceHybride from '../assets/products/remeha-elga-ace-hybride.webp';
import imgWeheatAllElectric from '../assets/products/weheat-allelectric.webp';
import imgDaikin from '../assets/products/daikin-altherma.webp';
import imgVaillant from '../assets/products/vaillant-arotherm.webp';

export interface Product {
  name: string;
  price: string;
  priceNote: string;
  points: string[];
  image: ImageMetadata;
  popular?: boolean;
}

export const thuisbatterijen: Product[] = [
  {
    name: 'AlphaESS Smile G3',
    image: imgAlphaess,
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
    image: imgEnphase,
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
    image: imgSigenergy,
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
    image: imgWeheatFlint,
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
    image: imgElgaAce,
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
    image: imgElgaAceHybride,
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
    image: imgWeheatAllElectric,
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
    image: imgDaikin,
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
    image: imgVaillant,
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
