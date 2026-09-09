import type { SiteConfig, SiteKey } from './types';
import weheatofferte from './weheatofferte';
import weheatkopen from './weheatkopen';
import warmtepompWeheat from './warmtepomp-weheat';

const all: Record<SiteKey, SiteConfig> = {
  weheatofferte,
  weheatkopen,
  'warmtepomp-weheat': warmtepompWeheat,
};

/** De configuratie van de site die nu gebouwd wordt (zie astro.config.mjs). */
export const site: SiteConfig = all[import.meta.env.SITE_KEY] ?? weheatofferte;

export const allSites = all;
export type { SiteConfig } from './types';
