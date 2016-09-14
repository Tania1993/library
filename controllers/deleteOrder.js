var express = require('express');
var router = express.Router();
var app = express();
var AbonentsAndOrdersModel = require('../models/mongooseSchema');

router.delete('/', function (req, res){
    console.log(req.body);
  return AbonentsAndOrdersModel.findById(req.body.valueID, function (err, order) {
        if(!order) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return order.remove(function (err) {
            if (!err) {
                //conole.log("order removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

module.exports = router;
