// @ts-check
import { defineConfig } from 'astro/config';

// Le site est servi à la racine de agenticcrafters.fr. Les deux variables
// ci-dessous sont posées par le workflow de déploiement et ne servent qu'à
// pouvoir republier ailleurs, par exemple sous /<dépôt>/ sur github.io, sans
// toucher au code.
const site = process.env.SITE_URL ?? 'https://agenticcrafters.fr';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
