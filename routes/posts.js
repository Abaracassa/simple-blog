module.exports = function(app) {

  /*---------------------------------
    GET
  ---------------------------------*/
  //Route amenant vers la page de création
  app.get("/post/create", function(req, res) {
    res.render("nouvel_article");
  });

  //Route amenant à l'article via son ID unique
   app.get("/post/:id", function(req, res) {
    app.db.collection('article_blog').find({"id" : parseInt(req.params.id)}).toArray(function(err, document) {
      if(err) {
        console.log("Error: ", err);
      }
      res.render("affichage_article",{"allDoc": document});
    });
  });

 ///Route utilisée pour supprimer un article
  app.get("/post/delete/:id", function(req, res) {
    app.db.collection('article_blog').deleteOne({id: parseInt(req.params.id)});
    res.redirect("http://localhost:8080/");
   });
  
  /*---------------------------------
    POST
  ---------------------------------*/

    //Ici on crée l'article lors de la pression sur le bouton
    app.post("/new_article", function(req, res) {
      var article = req.body;
  
      app.db.collection('article_blog').find({}).toArray(function(err, res) {
       if(err) {
          console.log("Error: ", err);
        }
        //On génère une ID par une combinaison de 3 nombres random
        var id_generee = Math.floor(Math.random() * 98967444444416441489744 ) + Math.floor(Math.random() * 98967444444416441489744 ) / Math.floor(Math.random() * 98967444444416441489744 );
  
        app.db.collection('article_blog').insertOne({
          id: parseInt(id_generee), 
          titre: article.nom, 
          auteur: article.auteur, 
          date: new Date(), 
          resume: article.resume, 
          contenu: article.contenu
        });
      });
  
      res.redirect("http://localhost:8080/");
     });
 }
