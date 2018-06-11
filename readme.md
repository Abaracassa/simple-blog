## Déploiement du projet

Il faut tout d'abord avoir MongoDb et Node d'installés.

Récupérer en premier lieu le projet sur github

Se placer dans le dossier simple-blog-master

Lancer Mongo avec la commande systemctl start mongod

Puis lancer le serveur via la commande node server.js

Enfin accédez à la page d'acceuil du site via l'URL localhost:8080

## Réponses aux questions

MES REPONSES SONT EN `ROUGE`

## Modélisation des données

Définir le schéma de la base en quelques phrases, avec un exemple d'entrée au format JSON. 
Écrire un script permettant de remplir la base avec des données générées aléatoirement.


`Script présent dans data, le remplissage n'est pas aléatoire mais défini par un json.`
`Le schéma est assez simpliste, un ID unique défini aléatoirement selon des formules mathématiques, le titre, ``l'auteur, un résumé éventuel mais pas obligatoire, et  le contenu texte de l'article.`


## Afficher la liste des articles

Faire une page web permettant d'afficher la liste des articles. Bonus si la pagination est gérée.
La page devra s'afficher à la route `*/*`

Quel verbe HTTP utiliser ?

`GET, afin de récupérer les data de la DB`

## Afficher un article

Faire en sorte qu'un article avec l'identifiant unique ID s'affiche à la route `*/post/<ID>*`

## Entrer un article

Créer un formulaire pour taper un article sur la route `*/post/create*`
Le formulaire devra enclencher une action sur la même route, quel verbe HTTP utiliser?

`POST afin de retourner les informations au serveur`


## Supprimer un article

Ajouter une route `*/post?<ID>>*` pour supprimer un article, quel verbe HTTP utiliser.`

`Le verbe GET`

## Permettre la suppression d'un article

Ajouter un lien cliquable en bas de l'article permettant de supprimer l'article.
