import type { ImageMetadata } from 'astro';

export type SiteKey = 'weheatofferte' | 'weheatkopen' | 'warmtepomp-weheat';
export type Theme = 'ember' | 'mint' | 'sky';

export interface ChoiceOption {
  value: string;
  label: string;
  hint?: string;
}

export interface QuestionStep {
  /** Veldnaam in de lead-JSON (bijv. "woningtype") */
  name: string;
  title: string;
  hint?: string;
  options: ChoiceOption[];
}

export interface FunnelConfig {
  /** Kop boven het formulier */
  title: string;
  intro?: string;
  /** Vraagstappen; daarna volgt altijd de contactstap */
  questions: QuestionStep[];
  contactTitle: string;
  contactHint?: string;
  submitLabel: string;
  /** Tekst onder de verzendknop */
  footnote: string;
  /**
   * Endpoint voor de lead (n8n-webhook, Formspree, eigen API).
   * Leeg = mailto-fallback naar fallbackEmail.
   */
  endpoint: string;
  fallbackEmail: string;
}

export type IconName =
  | 'clock'
  | 'shield'
  | 'euro'
  | 'check'
  | 'phone'
  | 'leaf'
  | 'sound'
  | 'tools'
  | 'home'
  | 'star'
  | 'search';

export interface Usp {
  title: string;
  text: string;
  icon: IconName;
}

export interface Step {
  title: string;
  text: string;
}

export interface Model {
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  points: string[];
  image: ImageMetadata;
  badge?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CompareRow {
  label: string;
  self: string;
  viaUs: string;
}

export interface SuitabilityCard {
  title: string;
  fit: 'Hybride' | 'All-electric' | 'Beide';
  text: string;
}

export interface Hero {
  eyebrow: string;
  /** Titel; het deel tussen [[ ]] wordt gekleurd */
  title: string;
  lead: string;
  bullets: string[];
  /** Sociale bewijskracht onder de bullets, bijv. een beoordeling */
  proof?: string;
  /** Weergavevariant van de hero */
  variant: 'split-form' | 'product' | 'check';
}

export type SectionKey =
  | 'usps'
  | 'compare'
  | 'prices'
  | 'suitability'
  | 'steps'
  | 'models'
  | 'about'
  | 'faq'
  | 'cta';

export interface Topbar {
  /** Korte USP's; de derde verdwijnt op kleine schermen */
  items: string[];
  style: 'dark' | 'primary';
}

export interface SiteConfig {
  key: SiteKey;
  domain: string;
  theme: Theme;
  /** Smalle balk boven de header met drie USP's */
  topbar?: Topbar;
  /** Naam in header/footer, bijv. "Weheat Offerte" */
  name: string;
  /** Woordmerk: [prefix, accent, suffix] wordt weheat + offerte + .nl */
  wordmark: [string, string, string];
  seo: { title: string; description: string };
  phone: { display: string; href: string };
  hero: Hero;
  usps: Usp[];
  funnel: FunnelConfig;
  /** Volgorde van secties op de homepage (na de hero) */
  sections: SectionKey[];
  compare?: { title: string; intro: string; rows: CompareRow[] };
  prices?: { title: string; intro: string; included: string[] };
  suitability?: { title: string; intro: string; cards: SuitabilityCard[] };
  steps: { title: string; intro: string; items: Step[] };
  models: { title: string; intro: string; items: Model[] };
  about: { title: string; text: string; points: string[] };
  faq: FaqItem[];
  cta: { title: string; text: string; button: string };
  thanks: { title: string; text: string; next: string[] };
  /** Google Tag Manager container-id (GTM-XXXXXXX). Leeg = geen tracking. */
  gtmId: string;
}
