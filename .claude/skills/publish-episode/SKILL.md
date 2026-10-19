---
name: publish-episode
description: Publier un nouvel épisode d'Agentic Crafters sur agenticcrafters.fr à partir de l'export Zencastr. À utiliser quand Arthur ou Yannick demandent de « publier », « mettre en ligne » ou « ajouter » un épisode sur le site.
---

# Publier un épisode d'Agentic Crafters

Workflow établi lors de la publication de l'épisode 1 (Arnaud Héritier, 19/10/2026).
Le site est un Astro statique, sans JavaScript livré ; tout passe par ce dépôt.

## 0. Prérequis côté hôtes (hors Claude)

1. Dans Zencastr, l'épisode est monté et publié : l'audio part dans le flux RSS
   (Spotify et Apple Podcasts le récupèrent seuls), la vidéo est sur YouTube.
2. Le transcript est exporté en **CSV depuis la Recording Room** de Zencastr
   (colonnes `Timestamp`, `Speaker`, `Transcript`, séparateur tabulation).
   Attention : il couvre tout l'enregistrement, y compris le début coupé au montage.
3. L'hôte indique **la première phrase de la vidéo publiée** (ex. « Bonjour à tous »)
   ou la durée coupée au début. S'il y a eu des coupes au milieu, il faut leur liste,
   sinon utiliser plutôt les sous-titres automatiques YouTube (Studio > Sous-titres).

## 1. Rassembler les informations

Demander uniquement ce qui manque :

| Info | Où la trouver |
|---|---|
| Transcript CSV | Fourni par l'hôte, à ranger dans `Agentic Crafters/episodes/<AAAA-MM-JJ>-<slug>/transcript-zencastr.csv` (dossier iCloud) |
| Phrase de départ | Fournie par l'hôte |
| Titre, durée, description | Flux RSS Zencastr : `https://feeds.zencastr.com/f/hpVKCbwr.rss` |
| Lien Apple Podcasts | API iTunes : `https://itunes.apple.com/lookup?id=6818168795&entity=podcastEpisode`, champ `trackViewUrl` (retirer `&uo=4`) |
| Lien Spotify | Page `https://open.spotify.com/show/6LGQL0yZdqFWanXHtjCYsa` dans un navigateur (liens `/episode/`). Spotify peut mettre quelques heures à référencer l'épisode : publier sans et l'ajouter ensuite |
| Id YouTube | Chaîne `https://www.youtube.com/@AgenticCrafters`, ou demander à l'hôte |
| Invité | Nom, poste, entreprise, LinkedIn : demander confirmation à l'hôte |

**Date de publication** : toujours la date du jour où l'hôte demande la publication
(pas la date de mise en ligne YouTube ni RSS).

## 2. Préparer le transcript

```bash
python3 scripts/prepare-transcript.py <export.csv> --start "Bonjour à tous" \
  --glossary src/content/episodes/<slug>/glossary.json \
  > src/content/episodes/<slug>/transcript.txt
```

Le script coupe avant la phrase de départ, recale les horodatages, retire les
hallucinations de la transcription (« Sous-titrage FR 2021 », « Merci. » isolés…),
applique les corrections et fusionne les répliques d'un même intervenant.

- `scripts/transcript-glossary.json` : corrections communes à tous les épisodes
  (Agentic Crafters, Claude Code, skills, LLM…). L'enrichir quand une erreur revient.
- `src/content/episodes/<slug>/glossary.json` : corrections propres à l'épisode
  (nom de l'invité, entreprises, personnes citées). Le constituer en lisant le CSV
  en entier : les noms propres sont presque toujours mal transcrits.

## 3. Rédiger l'article

Deux fichiers Markdown, sans titre de niveau 1 (le gabarit l'affiche) :

- `src/content/episodes/<slug>/article.fr.md`
- `src/content/episodes/<slug>/article.en.md` (adaptation, la page précise que la conversation est en français)

Règles éditoriales :

- Lecture en moins de 5 minutes : 900 à 1 050 mots.
- Un paragraphe d'introduction (invité, poste, pourquoi lui), puis 5 à 8 sections `###`
  qui suivent le fil de la conversation, puis « Ce qu'on retient » / « Key takeaways ».
- Une lecture structurée de la conversation, pas une retranscription. Attribuer les idées
  (Arnaud, Yannick, Arthur) sans inventer de propos.
- Une ou deux citations en `>` maximum, fidèles au transcript (légère remise en forme orale autorisée).
- Pas de double tiret « -- » dans le texte. Style direct, sans superlatifs.

## 4. Référencer l'épisode

Dans `src/data/episodes.ts`, ajouter (ou compléter) l'entrée :

```ts
{
  slug: '<prenom-nom-entreprise>',
  youtubeId: '...',
  title: "Titre : sous-titre, avec Prénom Nom (Entreprise)", // espace insécable avant « : »
  publishedAt: 'AAAA-MM-JJTHH:MM:SS+02:00', // date du jour de la demande
  durationSeconds: 0000,
  summary: { fr: '…', en: '…' },            // une phrase, sert de meta description
  guest: { name: '…', role: { fr: '… chez …', en: '… at …' }, linkedin: 'https://…' },
  spotifyUrl: 'https://open.spotify.com/episode/…',   // optionnel
  applePodcastsUrl: 'https://podcasts.apple.com/…?i=…', // optionnel
}
```

Retirer `hidden: true` s'il était présent. Les boutons de plateforme, l'article et
le transcript n'apparaissent que si la donnée existe.

## 5. Vérifier

Le `node_modules` du dépôt est compilé pour macOS. Depuis une VM Linux, construire
dans une copie :

```bash
rsync -a --delete --exclude node_modules --exclude dist --exclude .astro --exclude .git ./ ~/build/site/
cd ~/build/site && npm ci && npm run check && npm run build
grep -c "<script" dist/episodes/<slug>/index.html   # doit afficher 0
```

Puis contrôler visuellement (captures desktop 1440 px et mobile 390 px) :
la page FR, la page EN, la liste des épisodes, `/episodes/<slug>/transcript.txt`.

## 6. Publier

Montrer le résultat à l'hôte et attendre son accord explicite. Puis :

```bash
git add -A && git commit -m "Publier l'épisode <n> avec <invité>" && git push origin main
```

Messages de commit en français.

Depuis Cowork : demander l'autorisation de suppression sur le dossier du dépôt
(git doit effacer ses fichiers `.lock`), puis commiter. Le remote passe par SSH
(`github.com-perso`), inaccessible depuis la VM : c'est l'hôte qui lance `git push`
depuis son terminal. GitHub Actions déploie sur GitHub Pages en quelques minutes ;
vérifier ensuite `https://agenticcrafters.fr/fr/episodes/<slug>/`.

## 7. Après coup

- Si le lien Spotify ou Apple manquait, l'ajouter dans `episodes.ts` dès qu'il existe, puis commit et push.
- Noter toute nouvelle correction récurrente dans `scripts/transcript-glossary.json`.
