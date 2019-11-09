var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String,
    host: String,
    description:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
  });

mongoose.connect('mongodb://localhost/revents', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});

function deleteCollection(deleteCollection){
    this.deleteCollection = deleteCollection;
}

deleteCollection.prototype.setId = function(eventid){
    this.eventid = eventid;
}

deleteCollection.prototype.delete = function(){
    //db.once.
    return this.eventid
}