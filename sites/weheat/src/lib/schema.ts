import type { FaqItem } from '../sites/types';

export function faqSchema(items: FaqItem[], url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
