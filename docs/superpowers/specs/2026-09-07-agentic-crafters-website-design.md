# Agentic Crafters — site du podcast

Design validé le 2026-09-07.

## 1. Objectif

Site public du podcast *Agentic Crafters*, animé par Arthur Magne et Yannick
Grenzinger. Il remplit deux rôles : présenter le podcast et son format à un
visiteur qui le découvre, et héberger chaque épisode publié avec sa vidéo, son
audio, un article de synthèse et son transcript intégral.

Le site remplace l'option « Notion Site » envisagée dans les notes de cadrage.

## 2. Décisions actées

| Sujet | Décision |
|---|---|
| Stack | Astro 5, TypeScript, CSS écrit à la main sur variables de design |
| Hébergement | GitHub Pages, déploiement par GitHub Actions |
| Dépôt | Compte personnel d'Arthur Magne, dépôt public créé manuellement |
| Domaine | `agenticcrafters.dev` — `agenticcrafters.com` est capté pour revente (Afternic) |
| Vidéo | YouTube, lecteur embarqué |
| Audio | Spotify for Creators, lecteur embarqué |
| Habillage | Bilingue français et anglais, français par défaut |
| Contenu des épisodes | Langue d'enregistrement, français ou anglais |
| Thème | Clair et sombre, préférence système plus bascule manuelle |
| Identité visuelle | Space Grotesk et DM Sans, accent vert acide `#cefb55` |
| Durée annoncée | ~1 h |
| Fréquence | Non annoncée tant qu'elle n'est pas tenue |
| Invités pressentis | Non publiés |
| Identité visuelle | À créer, explorée dans Claude Design avant l'implémentation |

## 3. Stratégie linguistique

L'habillage du site, c'est-à-dire la navigation, la landing, les libellés et le
pied de page, existe en français et en anglais. Le français est servi à la
racine, l'anglais sous `/en/`, et un sélecteur dans l'en-tête passe de l'un à
l'autre. C'est un coût unique d'environ 500 mots par langue.

Le contenu de chaque épisode reste dans sa langue d'enregistrement, article de
synthèse et transcript compris. Traduire ces contenus représenterait environ
11 000 mots par épisode, indéfiniment ; c'est le mode d'échec classique des
sites de podcasts bilingues, dont la version secondaire se vide au bout de
quelques épisodes.

Chaque page épisode porte en plus un résumé court de 3 à 5 phrases dans l'autre
langue, pour qu'un visiteur puisse juger de la pertinence d'un épisode qu'il ne
peut pas lire. Environ 100 mots au lieu de 10 000. Les sous-titres traduits
automatiquement de YouTube couvrent le besoin sur la vidéo.

Les deux versions de la landing existant réellement, elles déclarent des
`hreflang` réciproques plus un `x-default` vers le français. L'attribut `lang`
est positionné page par page, et le bloc de résumé dans l'autre langue porte son
propre `lang` pour que les lecteurs d'écran changent de voix.

### Pitch anglais (à valider par Arthur)

> **Agentic Crafters**
> Where AI meets the reality of software development.
>
> AI is reshaping how we build software products. How are teams actually
> adapting?
>
> Arthur Magne and Yannick Grenzinger talk with the people living this
> transformation day to day. Together they explore practices, organisational
> choices, wins and struggles: code quality, collaboration between product and
> engineering, the place of junior developers, how agents are really used.
>
> A podcast for developers and engineering leaders who want to learn from their
> peers, discover practices worth trying, and inform their team's decisions.

Le texte français d'origine est conservé dans les notes de cadrage.

## 4. Modèle de contenu

Un épisode est un dossier, ce qui garde son article, son transcript et la photo
de l'invité au même endroit :

```
src/content/episodes/01-yannick-grenzinger/
├── index.md        front-matter + article de synthèse
├── transcript.md   transcript intégral (optionnel)
└── guest.jpg
```

### Schéma du front-matter

Validé par Zod dans `src/content.config.ts`. Un champ manquant ou mal typé fait
échouer le build, plutôt que de publier une page épisode au lecteur vide.

| Champ | Type | Requis | Rôle |
|---|---|---|---|
| `number` | entier | oui | Numéro d'épisode, sert au tri et à l'affichage |
| `title` | texte | oui | Titre de l'épisode |
| `publishedAt` | date | oui | Date de publication |
| `language` | `fr` \| `en` | oui | Langue d'enregistrement, pilote l'attribut `lang` |
| `abstract` | texte | oui | Résumé dans la langue de l'épisode, utilisé sur les cartes et en meta description |
| `abstractAlt` | texte | oui | Résumé dans l'autre langue |
| `duration` | texte | oui | Durée affichée, ex. `58 min` |
| `topics` | liste de textes | oui | Thèmes abordés, affichés en étiquettes |
| `youtubeId` | texte | oui | Identifiant de la vidéo YouTube |
| `spotifyEpisodeId` | texte | non | Identifiant de l'épisode Spotify |
| `guest.name` | texte | oui | Nom de l'invité |
| `guest.role` | texte | oui | Intitulé de poste |
| `guest.company` | texte | oui | Entreprise |
| `guest.photo` | image | non | Photo, optimisée par Astro |
| `guest.linkedin` | URL | non | Profil LinkedIn |

Le corps du fichier `index.md` contient l'article de synthèse : une lecture
structurée et resserrée de la conversation, pas une retranscription.

`transcript.md` est un fichier séparé. Un transcript d'une heure fait 8 000 à
12 000 mots ; l'inclure dans la page épisode alourdirait le chargement et
diluerait le référencement de l'article de synthèse.

La landing annonce un transcript pour chaque épisode, ce qui en fait un
engagement éditorial et non une option : Zencastr produit la transcription, le
coût marginal est faible. Le gabarit tolère néanmoins l'absence du fichier, le
lien n'apparaissant simplement pas, pour qu'un oubli dégrade la page au lieu de
casser le build.

## 5. Pages

| Route | Contenu |
|---|---|
| `/` | Hero, « what we explore », format, hôtes, derniers épisodes, liens d'abonnement |
| `/episodes` | Liste antéchronologique de tous les épisodes |
| `/episodes/<slug>` | Lecteurs vidéo et audio, article de synthèse, encadré invité, lien transcript, navigation précédent/suivant |
| `/episodes/<slug>/transcript` | Transcript intégral, retour vers l'épisode |
| `/rss.xml` | Flux du site |
| `/404` | Page d'erreur sur mesure |

L'entrée « About » de la navigation est une ancre vers la section « Your hosts »
de la landing, et non une route distincte.

La section « what we explore » de la landing reprend les questions directrices
des notes de cadrage : comment les équipes utilisent l'IA, l'impact sur
l'organisation, sur la qualité, sur la livraison de valeur en production, et les
mesures associées. Ce sont déjà les axes des interviews.

Le flux `/rss.xml` décrit les publications du site. Il ne remplace pas le flux
podcast, qui reste produit par Spotify for Creators et alimente Apple Podcasts
et les autres annuaires.

## 6. Composants

- `EpisodeCard` — numéro, date, invité, résumé, durée, étiquettes de thèmes.
- `YouTubeFacade` — miniature et bouton lecture ; l'`iframe` n'est injectée qu'au clic.
- `SpotifyFacade` — même principe.
- `SubscribeLinks` — YouTube, Spotify, Apple Podcasts, RSS. Chaque lien n'est
  rendu que si son URL est renseignée dans la configuration du site, pour éviter
  de publier un lien mort avant l'ouverture des plateformes.
- `HostBio` — photo, nom, rôle, entreprise, LinkedIn.
- `TranscriptLink` — rendu conditionnel à l'existence du transcript.

### Pourquoi des façades pour les lecteurs

Une `iframe` YouTube charge environ 1,5 Mo de JavaScript tiers, un embed Spotify
plusieurs centaines de kilooctets. Les deux sur chaque page épisode
annuleraient l'intérêt d'un site statique. La façade affiche une miniature
légère et ne charge le lecteur réel qu'au clic, ce qui supprime aussi le dépôt
de cookies tiers tant que le visiteur ne lance pas la lecture.

## 7. Déploiement

`astro.config.mjs` déclare `site: 'https://agenticcrafters.dev'`. Le dépôt étant
un dépôt de projet et non `<user>.github.io`, aucune option `base` n'est
définie : le site est servi à la racine du domaine personnalisé.

Un workflow GitHub Actions construit et publie sur Pages à chaque push sur
`main`, via `withastro/action` puis `actions/deploy-pages`. Les pull requests
déclenchent `astro check` et le build sans déployer.

`public/CNAME` contient `agenticcrafters.dev`.

### DNS

Chez le registrar, sur l'apex :

- A : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- AAAA : `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- CNAME `www` vers `<compte-github>.github.io`

### Précaution propre au `.dev`

Le TLD `.dev` figure sur la liste HSTS preload : les navigateurs y imposent
HTTPS sans repli en clair. Entre la configuration DNS et l'émission du
certificat Let's Encrypt par GitHub Pages, le site est donc inaccessible
pendant quelques dizaines de minutes. C'est attendu et non une panne. La
case « Enforce HTTPS » doit être cochée dans les réglages Pages dès que le
certificat est délivré.

## 8. Qualité

- Le schéma Zod garantit qu'un épisode incomplet casse le build.
- `astro check` valide les types sur chaque pull request.
- Page 404 sur mesure.
- Balises Open Graph et Twitter Card sur la landing et sur chaque page épisode,
  pour un partage correct sur les réseaux.

Le site étant statique et sans logique métier, une suite de tests unitaires
n'aurait rien à vérifier. Le build et la validation de schéma constituent le
filet de sécurité utile.

## 9. Hors périmètre

Écartés délibérément : recherche plein texte, commentaires, newsletter,
analytics, back-office d'administration, génération du flux podcast (assurée par
Spotify), pagination de la liste d'épisodes (inutile avant plusieurs dizaines
d'épisodes), et affichage des invités pressentis, qui n'ont pas donné leur
accord.

## 10. Points ouverts

1. **Bios des hôtes** — intitulés exacts chez Packmind et Payfit, photos, URL
   LinkedIn. Des emplacements sont prévus dans la configuration du site en
   attendant.
2. **Validation du pitch anglais** de la section 3.
3. **URL du dépôt GitHub**, à créer par Arthur, pour brancher le remote.
4. **Direction visuelle**, à explorer dans Claude Design avant l'implémentation.
5. **Liens d'abonnement** — les URL Spotify, Apple Podcasts et de la chaîne
   YouTube n'existeront qu'à la publication du premier épisode.

## 11. Contenu de démarrage

Aucun épisode n'est enregistré à ce jour. Le site est construit avec deux
épisodes de démonstration explicitement identifiés comme factices, l'un en
français et l'autre en anglais, afin d'exercer les deux cas de figure : langue
différente, transcript présent sur l'un et absent sur l'autre. Ils sont
supprimés à la publication du premier épisode réel.

La landing et la page `/episodes` gèrent le cas d'une collection vide en
affichant un état « first episode coming soon ». Cet état est celui du site à la
mise en ligne, une fois les épisodes de démonstration retirés ; il doit donc être
implémenté et vérifié, et non traité comme un cas limite improbable.
