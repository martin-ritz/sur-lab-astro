// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lab.madebysur.com',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
  // The sitemap lists every page for search engines, except the 404 page
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })]
});