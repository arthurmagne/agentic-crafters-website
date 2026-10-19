export type Platform = 'youtube' | 'spotify' | 'apple';

export const platformNames: Record<Platform, string> = {
  youtube: 'YouTube',
  spotify: 'Spotify',
  apple: 'Apple Podcasts',
};

/** Pages de la chaîne sur chaque plateforme. */
export const channelUrls: Record<Platform, string> = {
  youtube: 'https://www.youtube.com/@AgenticCrafters',
  spotify: 'https://open.spotify.com/show/6LGQL0yZdqFWanXHtjCYsa',
  apple: 'https://podcasts.apple.com/us/podcast/agentic-crafters/id6818168795',
};
