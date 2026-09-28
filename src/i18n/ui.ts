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
      'L’IA ne règle pas tout par magie. Comment les équipes s’adaptent-elles vraiment, et à quel prix ?',
    heroCta: 'Découvrir le podcast',
    heroMetaHosts: 'AVEC ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'RETOURS DE TERRAIN. ASTUCES. POST-MORTEMS.',

    approachEyebrow: '01 / LE PODCAST',
    signalCaption: 'Un instantané du terrain, épisode après épisode.',
    approachTitleLine1: 'Une veille collective,',
    approachTitleLine2: 'sans ',
    approachTitleEm: 'bullshit.',
    approachP1:
      'Tout va trop vite pour faire sa veille seul. À chaque épisode, un invité, en entreprise, en association ou indépendant, raconte ce qui marche, ce qui coince et ce qu’il en a appris. Des astuces et des post-mortems, loin des discours marketing.',
    approachP2:
      'Agentic, parce que travailler avec des agents IA est le sujet du moment. Crafters, parce que les valeurs du software craftsmanship, l’exigence et le partage des connaissances, comptent plus que jamais : faire un logiciel dont les utilisateurs sont fiers.',
    approachTakeaway:
      'Ce qui est vrai aujourd’hui sera sans doute faux dans six mois. Alors on aimerait réinviter nos invités pour voir ce qui a changé.',

    topicsEyebrow: '02 / LES SUJETS',
    topicsTitleLines: ['Ce qui change.', 'Ce qu’on en fait.'],
    topics: [
      {
        titleLines: ['Les pratiques', 'de développement'],
        body: 'Agents, workflows, outils : que devient la revue de code face à 10 000 lignes par jour, et comment construire la confiance ?',
      },
      {
        titleLines: ['L’humain', 'et l’organisation'],
        body: 'Charge cognitive, bruit permanent, tensions : livre-t-on vraiment plus de qualité, sans épuiser les équipes ?',
      },
      {
        titleLines: ['L’avenir', 'du métier'],
        body: 'Juniors, nouveaux rôles, open source, produits codés en un week-end : quel sens garde le métier de développeur, en 2026 comme en 2040 ?',
      },
    ],

    hostsEyebrow: '03 / LES HÔTES',
    hostsTitleLines: ['Deux regards.', 'Une même curiosité.'],
    arthurRole: 'CPO & cofondateur · Packmind',
    arthurBio:
      'Dix ans à outiller le partage de connaissances dans les équipes de développement, désormais aussi avec leurs agents IA : le context engineering.',
    yannickRole: 'Engineering manager · PayFit',
    yannickBio:
      '21 ans de logiciel : développeur, tech lead, coach agile, CTO. Passionné de tests et de craft, convaincu que le vrai sujet, c’est l’organisation.',
    yannickLinkedIn: 'Retrouver Yannick sur LinkedIn',
    audience:
      'Pour les développeurs, tech leads, architectes et engineering managers qui veulent apprendre de leurs pairs, et pour les juniors et étudiants qui s’interrogent sur l’avenir du métier.',

    launchEyebrow: 'LA SUITE S’ÉCRIT AU MICRO',
    launchTitleLines: ['On se retrouve', 'bientôt à l’écoute.'],
    launchBodyLines: [
      'Un épisode zéro pour poser le cadre, puis des invités francophones et anglophones.',
      'Les épisodes et les liens d’écoute arriveront ici.',
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
      'AI is no magic fix. How are teams really adapting, and at what cost?',
    heroCta: 'Discover the podcast',
    heroMetaHosts: 'WITH ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'FIELD REPORTS. TIPS. POST-MORTEMS.',

    approachEyebrow: '01 / THE PODCAST',
    signalCaption: 'A snapshot of the field, one episode at a time.',
    approachTitleLine1: 'Keeping up together,',
    approachTitleLine2: 'minus the ',
    approachTitleEm: 'hype.',
    approachP1:
      'Things move too fast to keep up alone. In each episode, a guest, from a company, a non-profit or working independently, shares what works, what doesn’t, and what they learned. Tips and post-mortems, not marketing talk.',
    approachP2:
      'Agentic, because working with AI agents is the question of the moment. Crafters, because the values of software craftsmanship, high standards and shared knowledge, matter more than ever: building software its users are proud of.',
    approachTakeaway:
      'What holds true today will probably be wrong in six months. So we’d like to invite our guests back and see what changed.',

    topicsEyebrow: '02 / THE TOPICS',
    topicsTitleLines: ['What is changing.', 'What we do with it.'],
    topics: [
      {
        titleLines: ['Development', 'practices'],
        body: 'Agents, workflows, tools: what becomes of code review facing 10,000 lines a day, and how do you build trust?',
      },
      {
        titleLines: ['People and', 'organisation'],
        body: 'Cognitive load, constant noise, tension: are we really shipping more quality, without burning teams out?',
      },
      {
        titleLines: ['The future', 'of the craft'],
        body: 'Juniors, new roles, open source, products built in a weekend: what does being a developer mean, in 2026 and in 2040?',
      },
    ],

    hostsEyebrow: '03 / THE HOSTS',
    hostsTitleLines: ['Two perspectives.', 'One shared curiosity.'],
    arthurRole: 'CPO & co-founder · Packmind',
    arthurBio:
      'Ten years building tools for knowledge sharing in dev teams, now with their AI agents too: context engineering.',
    yannickRole: 'Engineering manager · PayFit',
    yannickBio:
      '21 years in software: developer, tech lead, agile coach, CTO. Into testing and craft, and convinced the real issue is the organisation.',
    yannickLinkedIn: 'Find Yannick on LinkedIn',
    audience:
      'For developers, tech leads, architects and engineering managers who want to learn from their peers, and for juniors and students wondering where the job is heading.',

    launchEyebrow: 'THE REST IS ON ITS WAY',
    launchTitleLines: ['Coming soon', 'to your ears.'],
    launchBodyLines: [
      'An episode zero to set the scene, then guests in French and in English.',
      'Episodes and listening links will land here.',
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
