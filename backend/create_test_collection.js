
// import mongodb 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
 
//client connect 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("naiveskill", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});