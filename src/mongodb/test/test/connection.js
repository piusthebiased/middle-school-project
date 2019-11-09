var url = "mongodb://localhost:27017"; 

var MongoClient = require('mongodb').MongoClient; 

MongoClient.connect(url, function(err, db) { 
    if (err) throw err; 
    console.log("Connected to MongoDB!"); 
    db.close(); 
  }); 