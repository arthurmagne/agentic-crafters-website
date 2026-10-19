import type { Locale } from '../i18n/ui';

export interface Guest {
  name: string;
  /** Poste et entreprise, dans chaque langue du site. */
  role: Record<Locale, string>;
  linkedin?: string;
}

export interface Episode {
  slug: string;
  youtubeId: string;
  title: string;
  publishedAt: string;
  durationSeconds: number;
  /** Résumé en une ou deux phrases, utilisé en meta description. */
  summary?: Record<Locale, string>;
  guest?: Guest;
  /** URL de l'épisode sur Spotify (open.spotify.com/episode/...). */
  spotifyUrl?: string;
  /** URL de l'épisode sur Apple Podcasts (avec le paramètre ?i=). */
  applePodcastsUrl?: string;
  /** Épisode retiré du site : ni carte dans la liste, ni page générée. */
  hidden?: boolean;
}

const episodeRecords: Episode[] = [
  {
    slug: 'arnaud-heritier-docker',
    youtubeId: '512GuxnBwqU',
    title: "L'IA au quotidien des équipes d'ingénierie : vitesse, contexte et maîtrise, avec Arnaud Héritier (Docker)",
    publishedAt: '2026-10-19T15:15:32+02:00',
    durationSeconds: 3369,
    summary: {
      fr: "Arnaud Héritier, Engineering Manager chez Docker, raconte comment l'IA a changé son quotidien et celui de ses équipes : adoption, contexte, revue de code, CI et avenir du métier.",
      en: 'Arnaud Héritier, Engineering Manager at Docker, shares how AI changed his daily work and his teams: adoption, context, code review, CI and the future of the engineering job.',
    },
    guest: {
      name: 'Arnaud Héritier',
      role: { fr: 'Engineering Manager chez Docker', en: 'Engineering Manager at Docker' },
      linkedin: 'https://www.linkedin.com/in/aheritier/',
    },
    spotifyUrl: 'https://open.spotify.com/episode/6TIi3uGhIwpDo8w5G3kj5u',
    applePodcastsUrl:
      'https://podcasts.apple.com/us/podcast/lia-au-quotidien-des-%C3%A9quipes-ding%C3%A9nierie-vitesse-contexte/id6818168795?i=1000797079168',
  },
  {
    slug: 'episode-zero',
    youtubeId: '-1VyWctfkXU',
    title: "Agentic Crafters | Le podcast qui explore le dev à l'ère des agents",
    publishedAt: '2026-09-29T02:49:29-07:00',
    durationSeconds: 1222,
  },
];

export const episodes = episodeRecords
  .filter((episode) => !episode.hidden)
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}
