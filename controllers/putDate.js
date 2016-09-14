var express = require('express');
var router = express.Router();
var app = express();
var AbonentsAndOrdersModel = require('../models/mongooseSchema');

router.put('/', function (req, res){
    //console.log(req.param.valueID);
    //console.log(req.body);
    return AbonentsAndOrdersModel.findById(req.body.valueID, function (err, order) {
        if(!order) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        order.dateReturn = req.body.dateReturn;
        order.id = req.body.valueID;
        return order.save(function (err) {
            if (!err) {
                console.log("order updated");
                return res.send({ status: 'OK', order: order});
            } else {
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    });
});

module.exports = router;
