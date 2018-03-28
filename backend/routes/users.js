var express = require('express');
var router = express.Router();

var dbConnection = require('../db/db');
var db = dbConnection.getDb();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
