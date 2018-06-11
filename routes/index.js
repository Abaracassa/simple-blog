var posts = require("./posts");
 
module.exports = function(app) {

  //Ici on affiche tous les articles qui existent dans la collection article_blog
 app.get("/", function(req, res) {
    app.db.collection('article_blog').find({}).toArray(function(err, document) {
      if(err) {
		console.log("Error: ", err);
	      }
      res.render("index", {'allDoc': document});
    });
  });

  posts(app);
}