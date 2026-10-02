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
    themeToggle: 'Changer de thème',
    langLabel: 'Langue',
    otherLangName: 'English',

    heroEyebrow: 'LE PODCAST · IA & DÉVELOPPEMENT LOGICIEL',
    taglineLines: ['L’IA transforme', 'comment nous créons'],
    taglineMark: 'du logiciel.',
    heroQuestion:
      'Des conversations sincères avec celles et ceux qui vivent ces changements. Découvrez ce qui fonctionne, ce qui échoue et ce que cela change pour les équipes, les pratiques et l’avenir du métier de développeur.',
    heroCta: 'Regarder l’épisode zéro',
    heroMetaHosts: 'AVEC ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'RETOURS DE TERRAIN. ASTUCES. POST-MORTEMS.',

    videoLabel: 'Conversation complète de l’épisode zéro',
    videoTitle:
      'Agentic Crafters, épisode zéro : Arthur Magne et Yannick Grenzinger expliquent l’intention du podcast',
    videoCaption:
      'La conversation complète entre les deux hôtes sur l’intention du podcast, son format et les questions qu’ils veulent explorer.',

    approachEyebrow: '01 / LE PODCAST',
    signalCaption: 'Un instantané du terrain, épisode après épisode.',
    approachTitleLine1: 'Une veille collective,',
    approachTitleLine2: 'sans la ',
    approachTitleEm: 'hype.',
    approachP1:
      'Chaque épisode est une conversation ouverte avec une personne d’une autre entreprise ou communauté. Elle raconte ce qu’elle a essayé, ce qui a fonctionné, ce qui a échoué et ce qu’elle en a appris.',
    approachP2:
      'Nous faisons vivre les valeurs du software craftsmanship — le soin, l’exigence et le partage des connaissances — dans un monde transformé par l’IA. Nous explorons comment les équipes maintiennent la qualité, organisent le travail et les revues de code, et prennent en compte la charge cognitive.',
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
        body: 'Nouvelles compétences, métiers émergents et place des juniors : comment le métier évolue-t-il, et comment repérer les signaux utiles dans le flot d’outils et d’informations ?',
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

    closingEyebrow: 'LA CONVERSATION COMPLÈTE',
    closingTitleLines: ['L’épisode zéro :', 'l’intention du podcast'],
    closingBody:
      'Arthur Magne et Yannick Grenzinger expliquent pourquoi ils ont lancé Agentic Crafters et les sujets qu’ils veulent explorer.',
    closingCta: 'Regarder la conversation complète',

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
    themeToggle: 'Switch theme',
    langLabel: 'Language',
    otherLangName: 'Français',

    heroEyebrow: 'THE PODCAST · AI & SOFTWARE DEVELOPMENT',
    taglineLines: ['AI is reshaping', 'how we create'],
    taglineMark: 'software.',
    heroQuestion:
      'Honest conversations with the people living it. Hear what’s working, what isn’t, and what it means for teams, craft, and the future of being a developer.',
    heroCta: 'Watch episode zero',
    heroMetaHosts: 'WITH ARTHUR MAGNE & YANNICK GRENZINGER',
    heroMetaClaim: 'FIELD REPORTS. TIPS. POST-MORTEMS.',

    videoLabel: 'Full episode zero discussion',
    videoTitle:
      'Agentic Crafters, episode zero: Arthur Magne and Yannick Grenzinger explain the podcast’s intent',
    videoCaption:
      'The full discussion between the two hosts about the podcast’s intent, format, and the questions they want to explore.',

    approachEyebrow: '01 / THE PODCAST',
    signalCaption: 'A snapshot of the field, one episode at a time.',
    approachTitleLine1: 'Keeping up together,',
    approachTitleLine2: 'minus the ',
    approachTitleEm: 'hype.',
    approachP1:
      'Each episode is an open conversation with someone from a different company or community. They share what they tried, what worked, what failed, and what they learned.',
    approachP2:
      'We bring the values of software craftsmanship—care, excellence, and shared knowledge—to a fast-changing, AI-enabled world. We explore how teams maintain quality, organise work and code review, and manage cognitive load.',
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
        body: 'Emerging skills and roles, and where juniors fit: how is the job changing, and how do we find useful signals amid the flood of new tools and information?',
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

    closingEyebrow: 'THE FULL CONVERSATION',
    closingTitleLines: ['Episode zero:', 'why this podcast'],
    closingBody:
      'Arthur Magne and Yannick Grenzinger explain why they started Agentic Crafters and what they want to explore.',
    closingCta: 'Watch the full conversation',

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
