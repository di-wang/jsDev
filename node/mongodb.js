var mongodb = require('mongodb');
var url = "mongodb+srv://amdin:<admin>@cluster0-cnh9q.mongodb.net/test?retryWrites=true";

mongodb.connect(url, function(err, db){
    if(err) throw err;
    console.log("Database created!");
    db.close();
}

)