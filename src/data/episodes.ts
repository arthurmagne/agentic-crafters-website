export interface Episode {
  slug: string;
  youtubeId: string;
  title: string;
  publishedAt: string;
  durationSeconds: number;
}

const episodeRecords: Episode[] = [
  {
    slug: 'arnaud-heritier-docker',
    youtubeId: '512GuxnBwqU',
    title: "L'IA au quotidien des équipes : vitesse, contexte et maîtrise - Arnaud Héritier (Docker)",
    publishedAt: '2026-09-30T07:08:16-07:00',
    durationSeconds: 3369,
  },
  {
    slug: 'episode-zero',
    youtubeId: '-1VyWctfkXU',
    title: "Agentic Crafters | Le podcast qui explore le dev à l'ère des agents",
    publishedAt: '2026-09-29T02:49:29-07:00',
    durationSeconds: 1222,
  },
];

export const episodes = [...episodeRecords].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
);

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}
