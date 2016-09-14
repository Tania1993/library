var express = require('express');
var AbonentsAndOrdersModel = require('../models/mongooseSchema');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Schema = mongoose.Schema;

router.post('/', function(req, res) {
    
    console.log(req.body);
    var orders = new AbonentsAndOrdersModel({
        books: req.body.books,
        userName: req.body.userName,
        datePipicker: JSON.parse(req.body.datePipicker),
        dateReturn: ""
    });
    
    var booksByOneAbonent = req.body.books;
    var dataByOneAbonent = new Array(booksByOneAbonent.length);//object array 
  
    for(var i = 0; i < booksByOneAbonent.length; i++){
        dataByOneAbonent[i] = {
            books: req.body.books[i],
            userName: req.body.userName,
            datePipicker: JSON.parse(req.body.datePipicker),
            dateReturn: ""
        };
    }
    //console.log(dataByOneAbonent.length);
    console.log("this is orders ");
    console.log(JSON.stringify(orders));
    
    //var order = new AbonentsAndOrdersModel(orders);
    for(var i = 0; i < dataByOneAbonent.length; i++){
        var order = new AbonentsAndOrdersModel(dataByOneAbonent[i]);
        order.save(function (err) {
            if (!err) {
                /*console.log("this is order");
                console.log(JSON.stringify(order));*/
                return res.send({ status: 'OK', order:order });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                console.log('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    }
    AbonentsAndOrdersModel.find(function (err, orders) {
        console.log(JSON.stringify(orders));
    });
});

module.exports = router;
