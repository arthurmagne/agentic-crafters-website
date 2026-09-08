export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    metaTitle: 'Agentic Crafters, l’IA et la réalité du développement logiciel',
    metaDescription:
      'Arthur Magne et Yannick Grenzinger explorent avec leurs invités comment l’IA transforme les pratiques et l’organisation des équipes qui construisent des produits logiciels.',
    ogDescription:
      'Quand l’IA rencontre la réalité du développement logiciel. Un podcast de retours d’expérience entre pairs, avec Arthur Magne et Yannick Grenzinger.',
    skip: 'Aller au contenu',
    homeLabel: 'Agentic Crafters, accueil',
    navPodcast: 'Le podcast',
    navTopics: 'Les sujets',
    navHosts: 'Les hôtes',
    navLabel: 'Navigation principale',
    status: 'En préparation',
    themeToggle: 'Changer de thème',
    langLabel: 'Langue',
    otherLangName: 'English',

    heroEyebrow: 'LE PODCAST · IA & DÉVELOPPEMENT LOGICIEL',
    taglineLines: ['Quand l’IA rencontre', 'la réalité du'],
    taglineMark: 'développement logiciel.',
    heroQuestion:
      'L’IA transforme nos façons de construire des produits logiciels. Comment les équipes s’adaptent-elles concrètement ?',
    heroCta: 'Découvrir le podcast',
    heroMetaHosts: 'AVEC ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'DES EXPÉRIENCES. DES PRATIQUES. DES QUESTIONS.',

    approachEyebrow: '01 / LE PODCAST',
    signalCaption: 'À l’écoute du terrain.',
    approachTitleLine1: 'Apprendre de celles',
    approachTitleLine2: 'et ceux qui ',
    approachTitleEm: 'font.',
    approachP1:
      'Arthur Magne et Yannick Grenzinger reçoivent celles et ceux qui expérimentent cette transformation au quotidien. Ensemble, ils explorent les pratiques, les choix d’organisation, les réussites et les difficultés rencontrées.',
    approachP2:
      'L’expérience de l’invité au centre, enrichie par nos observations et nos points de vue. Pour comprendre les choix, creuser les exemples et laisser une place aux questions encore ouvertes.',
    approachTakeaway:
      'Une veille collective entre pairs pour découvrir des pratiques à essayer et éclairer les choix de son équipe.',

    topicsEyebrow: '02 / LES SUJETS',
    topicsTitleLines: ['Ce qui change.', 'Ce qu’on en fait.'],
    topics: [
      {
        titleLines: ['Les pratiques', 'de développement'],
        body: 'Comment utiliser les agents, choisir les modèles et faire évoluer les pull requests, la revue de code et la qualité ?',
      },
      {
        titleLines: ['L’organisation', 'des équipes'],
        body: 'Autonomie ou équipe transverse ? Comment partager les apprentissages, accompagner les juniors et faire évoluer les responsabilités ?',
      },
      {
        titleLines: ['Du produit', 'à la production'],
        body: 'Comment l’IA change-t-elle la collaboration entre produit et tech, la chaîne de production du logiciel et la valeur livrée ?',
      },
    ],

    hostsEyebrow: '03 / LES HÔTES',
    hostsTitleLines: ['Deux regards.', 'Une même curiosité.'],
    arthurRole: 'Co-hôte · Agentic Crafters',
    yannickRole: 'Co-hôte · PayFit',
    yannickLinkedIn: 'Retrouver Yannick sur LinkedIn',
    audience:
      'Pour les développeurs, tech leads, staff engineers, architectes et engineering managers qui veulent apprendre de leurs pairs et faire évoluer les pratiques de leur équipe.',

    launchEyebrow: 'LA SUITE S’ÉCRIT AU MICRO',
    launchTitleLines: ['On se retrouve', 'bientôt à l’écoute.'],
    launchBodyLines: [
      'Le podcast est en préparation.',
      'Les premiers épisodes et les liens d’écoute seront disponibles ici.',
    ],

    footerTagline: 'Quand l’IA rencontre la réalité du développement logiciel.',
    footerTop: 'Retour en haut',
  },

  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    metaTitle: 'Agentic Crafters, AI and the reality of software development',
    metaDescription:
      'Arthur Magne and Yannick Grenzinger talk with their guests about how AI is changing the practices and the organisation of the teams that build software products.',
    ogDescription:
      'Where AI meets the reality of software development. A podcast of first-hand accounts between peers, with Arthur Magne and Yannick Grenzinger.',
    skip: 'Skip to content',
    homeLabel: 'Agentic Crafters, home',
    navPodcast: 'The podcast',
    navTopics: 'The topics',
    navHosts: 'The hosts',
    navLabel: 'Main navigation',
    status: 'In preparation',
    themeToggle: 'Switch theme',
    langLabel: 'Language',
    otherLangName: 'Français',

    heroEyebrow: 'THE PODCAST · AI & SOFTWARE DEVELOPMENT',
    taglineLines: ['Where AI meets', 'the reality of'],
    taglineMark: 'software development.',
    heroQuestion:
      'AI is reshaping how we build software products. How are teams actually adapting?',
    heroCta: 'Discover the podcast',
    heroMetaHosts: 'WITH ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'REAL EXPERIENCE. REAL PRACTICES. OPEN QUESTIONS.',

    approachEyebrow: '01 / THE PODCAST',
    signalCaption: 'Listening to the field.',
    approachTitleLine1: 'Learning from the',
    approachTitleLine2: 'people who ',
    approachTitleEm: 'build.',
    approachP1:
      'Arthur Magne and Yannick Grenzinger talk with the people living this transformation day to day. Together they explore the practices, the organisational choices, the wins and the struggles.',
    approachP2:
      'The guest’s own experience comes first, enriched by our observations and points of view. To understand the choices, dig into the examples, and leave room for the questions still open.',
    approachTakeaway:
      'A shared watch between peers, to find practices worth trying and to inform your team’s decisions.',

    topicsEyebrow: '02 / THE TOPICS',
    topicsTitleLines: ['What is changing.', 'What we do with it.'],
    topics: [
      {
        titleLines: ['Development', 'practices'],
        body: 'How do you use agents, choose models, and rework pull requests, code review and quality?',
      },
      {
        titleLines: ['How teams', 'organise'],
        body: 'Autonomous teams or one central team? How do you share what you learn, support juniors, and shift responsibilities?',
      },
      {
        titleLines: ['From product', 'to production'],
        body: 'How does AI change collaboration between product and engineering, the delivery pipeline, and the value actually shipped?',
      },
    ],

    hostsEyebrow: '03 / THE HOSTS',
    hostsTitleLines: ['Two perspectives.', 'One shared curiosity.'],
    arthurRole: 'Co-host · Agentic Crafters',
    yannickRole: 'Co-host · PayFit',
    yannickLinkedIn: 'Find Yannick on LinkedIn',
    audience:
      'For developers, tech leads, staff engineers, architects and engineering managers who want to learn from their peers and move their team’s practices forward.',

    launchEyebrow: 'THE REST IS ON ITS WAY',
    launchTitleLines: ['Coming soon', 'to your ears.'],
    launchBodyLines: [
      'The podcast is in preparation.',
      'The first episodes and the listening links will appear here.',
    ],

    footerTagline: 'Where AI meets the reality of software development.',
    footerTop: 'Back to top',
  },
} as const;

export const otherLocale: Record<Locale, Locale> = { fr: 'en', en: 'fr' };

/** Base publique, toujours terminée par une barre oblique. */
export function baseUrl(): string {
  const raw = import.meta.env.BASE_URL || '/';
  return raw.endsWith('/') ? raw : `${raw}/`;
}

/** Chemin de la landing pour une langue, préfixé par la base de déploiement. */
export function localePath(locale: Locale): string {
  const base = baseUrl();
  return locale === 'en' ? base : `${base}fr/`;
}

/** Chemin d'un fichier de `public/`, préfixé par la base de déploiement. */
export function asset(file: string): string {
  return `${baseUrl()}${file.replace(/^\//, '')}`;
}
