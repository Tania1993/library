/*var express = require('express');

var AbonentsAndOrdersModel = require('../models/mongooseSchema');

var router = express.Router();
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var allorders = "";
*/
/*console.log("AbonentsAndOrdersModel in getOrders");
console.log(AbonentsAndOrdersModel);*/

//function orders(){
/* router.get('/', function(req, res, next) {
                    AbonentsAndOrdersModel.find(function (err, orders) {
                        if (!err) {
                            //res.send("Ordererr");
                            //console.log(JSON.stringify(orders));
                            allorders = orders;
                            return res.send(allorders);
                            //module.exports = res.send(orders);
                            //module.exports = {return res.send(orders);};
                            //return orders;
                            
                        } else {
                            res.statusCode = 500;
                            //log.error('Internal error(%d): %s',res.statusCode,err.message);
                            return res.send({ error: 'Server error' });
                        }
                        //module.exports = orders;
                    });
  
                });*/
           // }

/*AbonentsAndOrdersModel.find(function (err, orders) {
        console.log(JSON.stringify(orders));
    });*/
/*module.exports = allorders;
module.exports = router;*/

var express = require('express');
var router = express.Router();
var app = express();
var AbonentsAndOrdersModel = require('../models/mongooseSchema');
var allorders;

module.exports = function(){
        router.get('/', function(req, res) {
            AbonentsAndOrdersModel.find(function (err, orders) {
                if (!err) {
                    //allorders = orders;
                    //res.render('orders', {orders: orders});
                    //return orders;
                    return res.send(orders);
                } else {
                    res.statusCode = 500;
                    return res.send({ error: 'Server error' });
                }
        });
    });
}
//module.exports = allorders;
module.exports = router;
