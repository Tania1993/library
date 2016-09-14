var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var routes = require('./routes/index');
var setOrders = require('./controllers/setOrders');
var getOrders = require('./controllers/getOrders');
var putDate = require('./controllers/putDate');
var deleteOrder = require('./controllers/deleteOrder');
var dbConnection = require('./models/dbConnection');
var mongooseSchema = require('./models/mongooseSchema');

// view engine setup
app.set('view engine', 'jade');
//app.set('view engine', 'ejs');

//app.use('/', routes);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controllers')));

app.use('/setOrders', setOrders);
app.use('/getOrders', getOrders);
app.use('/putDate', putDate);
app.use('/deleteOrder', deleteOrder);
app.use('/dbConnection', dbConnection);
app.use('/mongooseSchema', mongooseSchema);

app.get('/', function (req, res) {
    //res.send('API is running');
    res.render('index.html');
});


var AbonentsAndOrdersModel = require('./models/mongooseSchema');

app.get('/orders', function(req, res) {
    return AbonentsAndOrdersModel.find(function (err, orders) {
        if (!err) {
            //console.log(JSON.stringify(orders));
            res.render('orders', {orders: orders});
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
    });
});

//// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    next();
});

app.listen(8080, function(){
    console.log('Express server listening on port 8080');
});

module.exports = app;

