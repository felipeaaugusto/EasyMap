var MongoClient = require('mongodb').MongoClient;
var _db;

var dbConnection = function () {

    function connectToServer(callback) {
        MongoClient.connect("mongodb://localhost:27017/", function(err, db){
            _db = db.db("test");
            return callback(err);
        });
    }

    function getDb() {
        return _db;
    }

    return {
        connectToServer: connectToServer,
        getDb: getDb
    }
}

module.exports = dbConnection();

// https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module