export interface FaqItem {
  q: string;
  a: string;
}

export const faqThuisbatterij: FaqItem[] = [
  {
    q: 'Wat kost een thuisbatterij?',
    a: 'Een thuisbatterij inclusief installatie is er vanaf circa € 3.700. De uiteindelijke prijs hangt af van de capaciteit (kWh), het merk en jouw meterkast. In de offerte zie je altijd de totaalprijs — zonder verrassingen.',
  },
  {
    q: 'Hoe zit het met subsidie?',
    a: 'Voor thuisbatterijen is er op dit moment geen landelijke subsidie. Wel kan een batterij extra opleveren in combinatie met een dynamisch energiecontract, zeker nu de salderingsregeling per 2027 stopt. Onze adviseurs rekenen jouw situatie vrijblijvend door.',
  },
  {
    q: 'Is mijn woning geschikt?',
    a: 'Vrijwel elke woning met een eigen meterkast is geschikt. Zonnepanelen zijn een plus maar geen vereiste: ook zonder panelen kun je besparen door goedkope stroom op te slaan bij lage (dynamische) tarieven. We checken dit gratis tijdens het adviesgesprek.',
  },
  {
    q: 'Wat is de levensduur van een thuisbatterij?',
    a: 'Moderne thuisbatterijen gaan 10 tot 15 jaar mee (6.000+ laadcycli) en hebben doorgaans 10 jaar fabrieksgarantie. Het systeem verdient zichzelf gemiddeld binnen 5 tot 8 jaar terug.',
  },
];

export const faqWarmtepomp: FaqItem[] = [
  {
    q: 'Wat kost een warmtepomp?',
    a: 'Een hybride warmtepomp is er vanaf circa € 3.900 inclusief installatie en na aftrek van subsidie. Een all-electric warmtepomp begint rond € 8.000. Je ontvangt altijd eerst een vrijblijvende offerte op maat.',
  },
  {
    q: 'Krijg ik subsidie op een warmtepomp?',
    a: 'Ja — via de ISDE-regeling krijg je gemiddeld € 2.000 tot € 3.500 subsidie op een warmtepomp. Wij vertellen je precies waar je recht op hebt en helpen met de aanvraag.',
  },
  {
    q: 'Is mijn woning geschikt voor een warmtepomp?',
    a: 'Een hybride warmtepomp past in vrijwel elke woning met een cv-ketel, ook met beperkte isolatie. Voor all-electric is goede isolatie belangrijk. Onze adviseur beoordeelt dit kosteloos bij jou thuis.',
  },
  {
    q: 'Maakt een warmtepomp veel geluid?',
    a: 'Nee. Moderne buitenunits zitten rond de 38 decibel — vergelijkbaar met zacht achtergrondgeluid. Ze voldoen ruim aan de wettelijke geluidsnormen voor plaatsing bij woningen.',
  },
];

export const faqHome: FaqItem[] = [
  faqWarmtepomp[1],
  faqThuisbatterij[0],
  faqThuisbatterij[2],
  faqThuisbatterij[3],
];

export function faqSchema(items: FaqItem[], url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': url,
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
