var express = require('express');
var router = express.Router();

var dbConnection = require('../db/db');
var db = dbConnection.getDb();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
    db.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
            res.send(result);
    });
});

// POST method route
router.post('/user', function (req, res) {
    var myobj = { name: "Felipe", address: "Tetse Oi Lou" };
    db.collection("users").insertOne(myobj, function(err, result) {
        if (err) throw err;
            res.send("1 document inserted");
    });
});

module.exports = router;
