# Agentic Crafters, site du podcast

Site du podcast *Agentic Crafters*, animé par Arthur Magne (Packmind) et
Yannick Grenzinger (PayFit), sur ce que l'IA change concrètement au
développement logiciel.

**En ligne : https://agenticcrafters.fr**

## Commandes

```bash
npm run dev      # serveur local sur :4321
npm run build    # génère dist/
npm run check    # astro check, types et diagnostics
```

Ne jamais lancer de serveur de dev via Bash : passer par la configuration
`agentic-crafters` de `.claude/launch.json`.

## Stack

Astro 5 en TypeScript, sans framework front, sans Tailwind, sans bibliothèque
d'icônes. Une seule dépendance de production : `astro`.

La sortie est du HTML statique : **zéro fichier JavaScript et zéro balise
`<script>`** dans les pages livrées. C'est un invariant à préserver, toute
interactivité doit d'abord être justifiée.

## Structure

```
src/
  pages/index.astro        landing anglaise, servie à la racine
  pages/fr/index.astro     landing française, servie sous /fr/
  components/Landing.astro balisage unique de la landing, alimenté par la langue
  components/Header.astro  en-tête, sélecteur de langue
  components/Footer.astro
  layouts/Base.astro       head, métadonnées, canonical et hreflang
  i18n/ui.ts               TOUS les textes des deux langues
  styles/global.css        la totalité du style
public/                    favicon, .nojekyll
docs/superpowers/specs/    la spec de conception validée
```

## Langues

Anglais par défaut à la racine, français sous `/fr/`. Aucune chaîne de texte ne
doit être écrite en dur dans un composant : tout passe par `src/i18n/ui.ts`, et
les deux langues sont renseignées ensemble.

Les chemins internes passent par `localePath()` et `asset()`, jamais par une
URL absolue en dur, parce que le site doit pouvoir être servi sous un
sous-chemin comme sur `github.io`.

Le sélecteur de langue affiche toujours `EN / FR` dans cet ordre fixe, la langue
courante étant signalée par `aria-current` et non par sa position.

## Identité visuelle

Le design vient d'une maquette HTML et CSS validée par Arthur, portée fidèlement
dans `global.css`. Space Grotesk en display, DM Sans en texte, accent vert acide
`#cefb55`, bandeau sombre inversé pour la section « approach », bandeau acide
pour la section finale.

Thème clair uniquement pour l'instant. **Un thème sombre est prévu** : toute la
couleur doit donc continuer de passer par les jetons CSS de `:root`, jamais par
une couleur écrite en dur dans une règle.

## Déploiement

GitHub Actions publie sur GitHub Pages à chaque push sur `main`, via
`.github/workflows/deploy.yml`. Les pull requests déclenchent `astro check` et
le build sans déployer.

`SITE_URL` et `SITE_BASE` sont posées dans le workflow. Le domaine personnalisé
est configuré dans les réglages Pages du dépôt, et **il n'y a pas de fichier
`public/CNAME`** : le domaine n'est donc pas reproductible depuis le dépôt seul.

## État actuel

La landing existe dans les deux langues. **Il n'y a aucune page épisode**, alors
que c'est l'objet principal du projet : chaque épisode doit avoir sa page avec
lecteur YouTube, lecteur audio Spotify, article de synthèse et transcript
complet sur une page séparée. Voir la section 4 de la spec pour le modèle de
contenu prévu.

Seul l'épisode zéro est enregistré : Arthur et Yannick y présentent le
podcast, sans invité. Les textes de la landing en reprennent les messages
principaux. Aucun épisode n'est publié, la landing affiche donc toujours un état
« podcast en préparation ».

## Points en suspens

- Lien LinkedIn d'Arthur. Son poste, « CPO & cofondateur · Packmind », vient
  de l'épisode zéro.
- Portraits des deux hôtes, et visuels d'épisode. Le site n'a aucune image.
- Ancres de sections encore en français (`#approche`, `#sujets`, `#hotes`,
  `#contenu`) sur un site désormais anglophone.
- Polices chargées depuis Google Fonts ; les auto-héberger supprimerait une
  requête vers un tiers.

## Conventions

Messages de commit en français. Ne pas committer ni pousser sans demande
explicite.
