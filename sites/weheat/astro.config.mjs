// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { resolveSite } from './sites.mjs';

const site = resolveSite();
const themeCss = fileURLToPath(new URL(`./src/styles/themes/${site.theme}.css`, import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Voor de GitHub Pages-proefversie worden site en base via env-vars gezet;
  // zonder die vars bouwt dit voor productie op het eigen domein.
  site: process.env.PUBLIC_SITE_URL ?? `https://${site.domain}`,
  base: process.env.PUBLIC_BASE_PATH ?? '/',
  outDir: `./dist/${site.domain}`,
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Poort: PORT-omgevingsvariabele (o.a. voor de preview-tool) of de vaste poort per site.
  server: { port: Number(process.env.PORT) || site.port },
  vite: {
    // Eigen Vite-cache per site, zodat meerdere dev-servers tegelijk kunnen draaien.
    cacheDir: `node_modules/.vite/${site.key}`,
    plugins: [tailwindcss()],
    resolve: {
      // '@theme' wijst naar het kleuren/lettertype-bestand van de actieve site.
      alias: { '@theme': themeCss },
    },
    define: {
      'import.meta.env.SITE_KEY': JSON.stringify(site.key),
    },
  },
});
