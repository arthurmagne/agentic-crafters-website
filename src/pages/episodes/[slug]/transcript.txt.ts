import type { APIRoute } from 'astro';
import { episodes } from '../../../data/episodes';
import { getTranscript } from '../../../data/episodeContent';

export function getStaticPaths() {
  return episodes
    .filter((episode) => getTranscript(episode.slug))
    .map((episode) => ({ params: { slug: episode.slug } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(getTranscript(params.slug!) ?? '', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
