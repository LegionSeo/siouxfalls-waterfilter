import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { SITE } from './src/config/site';

export default defineConfig({
  site: SITE.origin,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
        return !['/404', '/robots.txt', '/llms.txt'].includes(path);
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
