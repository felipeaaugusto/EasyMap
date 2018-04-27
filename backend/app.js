var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var createSchema = require('./db/createSchema');
// var createCollection = require('./db/createCollectionUsers');
// var insertCollection = require('./db/insertUser');

var app = express();
var dbConnection = require('./db/db');

dbConnection.connectToServer(function(err){
    app.use(cors());

    // start the rest of your app here
    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');
    var countriesRouter = require('./routes/countries');
    
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use('/', indexRouter);
    app.use('/', usersRouter);
    app.use('/', countriesRouter);
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
    
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
});

module.exports = app;

// enable CORS => https://medium.com/trisfera/using-cors-in-express-cac7e29b005b