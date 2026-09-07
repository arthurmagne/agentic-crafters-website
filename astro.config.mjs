// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agenticcrafters.dev',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
});
