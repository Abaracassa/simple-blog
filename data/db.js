module.exports = {
        generate: function (client) {
            //On Défini en JSON des données de "base" chargées au démarrage du serveur.
            var json =  [
                {
                    "id": parseInt(Math.floor(Math.random() * 98967444444416441489744 )+25 /Math.floor(Math.random() * 98967444444416441489744 )),
                    "titre": "Article 1",
                    "date": "10/06/2018",
                    "auteur": "Alex",
                    "resume": "Jeu de données de base",
                    "contenu": "Bonjour, ceci fait partie du jeu de données de base du projet NoSQL, n'hésitez pas à modifier cet article ou à en créer un nouveau !"
                },
                {
                    "id": parseInt(Math.floor(Math.random() * 98967444444416441489744 )+ 35 /Math.floor(Math.random() * 98967444444416441489744 )),
                    "titre": "Article 2",
                    "date": "10/06/2018",
                    "auteur": "Alex",
                    "resume": "Jeu de données de base",
                    "contenu": "Bonjour, ceci fait partie du jeu de données de base du projet NoSQL, n'hésitez pas à modifier cet article ou à en créer un nouveau !"
                },
                {
                    "id": parseInt(Math.floor(Math.random() * 98967444444416441489744 ) +45 / Math.floor(Math.random() * 98967444444416441489744 )),
                    "titre": "Article 3",
                    "date": "10/06/2018",
                    "auteur": "Alex",
                    "resume": "Jeu de données de base",
                    "contenu": "Bonjour, ceci fait partie du jeu de données de base du projet NoSQL, n'hésitez pas à modifier cet article ou à en créer un nouveau !"
                }
            ];
    
            var db = client.db("site_database");
            var collection = db.collection("article_blog");
            //Je génère les articles "d'essai" dans la base.
            collection.insert(json);     
        }
    } 