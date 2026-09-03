/**
 * Interne links die ook werken als de site onder een subpad draait
 * (zoals de GitHub Pages-proefversie). Op ddenergie.nl is BASE_URL '/'
 * en verandert er niets.
 */
const raw = import.meta.env.BASE_URL;
const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export const url = (path: string) => `${base}${path}`;
