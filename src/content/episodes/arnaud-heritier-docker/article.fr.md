Pour ce premier épisode, Yannick et Arthur reçoivent Arnaud Héritier, Engineering Manager chez Docker, passé auparavant par Doctolib, et voix bien connue des Cast Codeurs. Vingt-cinq ans dans l'IT, un pied dans le management, l'autre toujours dans le code : le bon profil pour prendre une photo de ce que l'IA change vraiment dans les équipes, à l'automne 2026.

### Un manager qui recode

Premier changement, très concret : le reporting. Là où il fallait des jours de scripts, de SQL et d'appels d'API pour obtenir une information, un petit agent produit aujourd'hui un rapport en quelques minutes. Beaucoup de ces rapports sont jetables, ils servent à trancher une question ponctuelle, et c'est justement ce qui les rend précieux : on décide plus vite.

Deuxième changement, plus personnel. Comme beaucoup d'engineering managers, Arnaud était noyé dans les réunions et n'arrivait plus à coder, faute de pouvoir se concentrer longtemps. L'IA garde le focus à sa place. Il délègue de petits outils, des prototypes, et retrouve une capacité à faire qu'il pensait perdue. Côté équipes, même effet : on teste une mini-application fonctionnelle en quelques heures au lieu de faire valider une maquette par trente-six personnes. La boucle de feedback se compte en jours.

### Produire plus, consommer moins

Yannick pointe le revers : quand produire ne coûte plus rien, on produit trop. Des rapports générés par les uns, résumés par l'IA des autres, et des textes parfaits mais pénibles à lire. Arnaud confirme et élargit : le problème touche tout ce que l'IA génère, documentation, code, tests. Chaque test a un coût de maintenance et de CI, même quand c'est l'IA qui l'écrit.

> Si tu demandes à l'IA, elle va tout te faire. Elle va même t'en faire plus.

La réponse reste humaine : savoir quels indicateurs comptent vraiment, cadrer l'IA pour qu'elle livre trois points utiles plutôt qu'un rapport interminable. C'est là, rappelle Arthur, que le pragmatisme du software craftsmanship garde tout son sens.

### Adopter l'IA prend des trimestres

Chez Doctolib, environ 500 développeurs, une équipe de trois personnes a défriché le sujet : choix des premiers outils (Claude Code à l'époque), puis construction de tout l'écosystème autour, skills, plugins, marketplaces. Car adopter un outil, c'est adopter son écosystème.

La conduite du changement, elle, prend du temps. Il faut former, expliquer, rassurer ceux qui craignent pour leur poste, entendre les réticences écologiques sans les balayer. Les premiers outils produisaient un code médiocre, ce qui n'aidait pas. Mais le constat, chez Doctolib comme chez Docker, est le même : après quelques trimestres, presque tout le monde s'y met, à son rythme. Aujourd'hui chez Docker, tout le monde code avec l'IA, et l'utilise aussi pour les revues de PR, le reporting et le reste du travail d'ingénieur.

Pour suivre un marché où sort un nouveau modèle presque chaque semaine, Docker partage ses trouvailles dans des canaux internes et investit beaucoup dans l'évaluation : des modèles, des skills, et de Gordon, l'agent intégré aux produits Docker sur lequel travaille Arnaud.

### Le contexte, ce que l'IA n'a pas

Le mot revient souvent dans la bouche d'Arnaud. Un LLM ne connaît ni les contraintes de ton entreprise, ni ce que ton équipe sait faire. Il estime encore une fonctionnalité en jours-hommes, comme dans les données sur lesquelles il a été entraîné. Pour Yannick, la vraie différence tient aussi aux émotions : nos choix d'architecture viennent d'un vécu, d'une conférence qui nous a marqués, d'une intuition que « simple » ne se résume pas à une règle.

Arnaud ajoute un point clé : même avec un million de tokens de contexte, quelqu'un doit choisir quoi y mettre. Notre cerveau sait aller chercher spontanément le coût d'infrastructure, le planning, les contraintes humaines. Skills et MCP n'y répondent qu'en partie. Fournir la bonne information au bon moment, c'est désormais une grande partie de la valeur de celui qui pilote l'IA.

### Le goulot s'est déplacé

Écrire du code est devenu rapide. Le reste de la chaîne n'a pas suivi. La CI est un goulot d'étranglement dans toutes les entreprises qu'Arnaud croise, Docker compris. Des tests qui durent une heure, des environnements longs à monter, des tests de bout en bout encore lents et coûteux : tout l'outillage pensé pour un humain qui produisait lentement est à revoir.

### La revue de code, une question de confiance

Face à des pull requests gigantesques, la relecture ligne à ligne ne tient plus. Arnaud le vit avec tristesse, lui qui aimait comprendre chaque détail. Mais l'objectif d'une revue, rappelle-t-il, c'est la confiance dans ce qu'on livre. Elle peut venir d'autre chose : des PR plus petites et empilées, un bot de revue maison nourri du contexte du projet, et les contrôles classiques qui gardent toute leur valeur, tests, linters, scanners de sécurité, SonarQube.

Ce qui se perd, en revanche, c'est le partage de connaissances que la revue permettait. Yannick pousse plus loin son inquiétude : si un jour plus personne ne comprend un million de lignes générées, qui rouvrira le capot ? Arnaud n'a pas de réponse définitive. Il défend l'idée de rester sur des technologies que l'on maîtrise assez pour diagnostiquer, et cite des équipes qui s'imposent quelques jours sans IA pour continuer à apprendre. Arthur, lui, doute que la majorité tienne cette discipline quand la concurrence accélère.

### Le métier en 2030

Pour Arnaud, ce qui reste critique, c'est l'architecture et la culture informatique au sens large. Comprendre comment les systèmes cohabitent, où sont les risques de sécurité et d'exploitation, et prendre les décisions : multizone ou pas, cloud ou pas, quel langage pour une boucle de feedback rapide. Il fait aujourd'hui beaucoup de Go chez Docker, et y prend plaisir.

> L'ingénieur a toujours été là pour faire le lien entre l'utilisateur final, l'humain et les technologies.

Les langages compteront peut-être moins, les spécifications et les tests davantage. Mais transformer un besoin en solution reste un vrai travail d'ingénieur.

### Ce qu'on retient

Beaucoup de pragmatisme, un rôle humain qui reste central, et une chaîne de livraison encore à réinventer au-delà du code. Et une phrase qui a marqué Yannick : on travaille encore pour des humains. Dans un monde où des IA résument des rapports écrits par d'autres IA, c'est peut-être la question à garder en tête.
