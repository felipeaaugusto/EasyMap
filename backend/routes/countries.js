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
router.get('/countries', function(req, res, next) {
    db.collection("countries").find({}).toArray(function(err, result) {
        if (err) throw err;
            res.send(result[0]);
    });
});

module.exports = router;


// import geojson => https://stackoverflow.com/questions/15171622/mongoimport-of-json-file