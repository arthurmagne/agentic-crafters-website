// @ts-check
import { defineConfig } from 'astro/config';

// Sur GitHub Pages le site vit sous /<dépôt>/ tant que le domaine personnalisé
// n'est pas branché ; une fois agenticcrafters.dev en place il vivra à la
// racine. Les deux variables ci-dessous sont posées par le workflow de
// déploiement et sont à retirer le jour où le domaine est actif.
const site = process.env.SITE_URL ?? 'https://agenticcrafters.dev';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
});
