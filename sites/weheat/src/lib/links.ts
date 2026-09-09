/**
 * Interne links die ook werken als een site onder een subpad draait, zoals de
 * GitHub Pages-proefversie (/dd-energie-website/weheatofferte/). Op het echte
 * domein is BASE_URL '/' en verandert er niets.
 */
const raw = import.meta.env.BASE_URL;
const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export const url = (path: string) => `${base}${path}`;

/** True als de site onder een subpad draait (proefversie), dan geen indexering. */
export const isPreview = base !== '';
