var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser')
var cons = require('consolidate')
//Il s'agit ici du script qui valorise la DB avec le jeu de données de base
var script = require('./data/db.js') 
var app = express();
//27017 car c'est le port de base de Mongo
var url = process.env.URL || "mongodb://localhost:27017";
//Ici on valorise avec les infos de la DB créee dans db.js
var dbName = process.env.DBNAME || "site_database";
var port = process.env.PORT || 8080; 
app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views') 
var routes = require("./routes"); 
app.use(bodyParser());
 MongoClient.connect(url, function(err, client) {
  if(err) throw err;
  routes(app);
  script.generate(client);   
  app.client = client;
  app.db = client.db(dbName); 
  app.listen(port, function() {
     console.log("now listening on http://localhost:" + port)
   });
 });
 
module.exports = app;