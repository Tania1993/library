var express = require('express');
var router = express.Router();
var app = express();
var AbonentsAndOrdersModel = require('../models/mongooseSchema');

module.exports = function(){
        router.get('/', function(req, res) {
            AbonentsAndOrdersModel.find(function (err, orders) {
                if (!err) {
                    return res.send(orders);
                } else {
                    res.statusCode = 500;
                    return res.send({ error: 'Server error' });
                }
        });
    });
}

module.exports = router;
