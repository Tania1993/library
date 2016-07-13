var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models/dbConnection');
//var app = express();
var Schema = mongoose.Schema;

var AbonentsAndOrdersSchema = new Schema({
    books: { type: Array, required: true },
    userName: { type: String, required: true },
    datePipicker: { type: String, required: true }
});



//module.exports.AbonentsAndOrdersModel = AbonentsAndOrdersModel;
/*module.exports = {router, AbonentsAndOrdersModel};*/
//exports.AbonentsAndOrdersModel = mongoose.model('AbonentsAndOrdersModel', AbonentsAndOrdersSchema);

//module.exports = mongoose.model('AbonentsAndOrdersModel', AbonentsAndOrdersSchema);
module.exports = router;

module.exports = mongoose.model('AbonentsAndOrdersModel', AbonentsAndOrdersSchema);
