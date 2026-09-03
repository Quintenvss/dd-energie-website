// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Voor de GitHub Pages-proefversie worden site en base via env-vars gezet;
  // zonder die vars bouwt dit voor productie op ddenergie.nl.
  site: process.env.PUBLIC_SITE_URL ?? 'https://ddenergie.nl',
  base: process.env.PUBLIC_BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/thuisbatterij/': '/thuisbatterij-plaatsen/',
    '/warmtepomp/': '/warmtepomp-plaatsen/',
    '/offerte/': '/offerte-aanvragen/',
  },
});
