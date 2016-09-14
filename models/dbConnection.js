var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var Schema = mongoose.Schema;
/*var config = require('/var/www/html/library/config');

mongoose.connect(config.get('mongoose:uri'));*/

mongoose.connect('mongodb://localhost/library234');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});
/*
var AbonentsAndOrdersSchema = new Schema({
    books: { type: Array, required: true },
    userName: { type: String, required: true },
    datePipicker: { type: String, required: true }
});

var AbonentsAndOrdersModel = mongoose.model('AbonentsAndOrdersModel', AbonentsAndOrdersSchema);

module.exports.AbonentsAndOrdersModel = AbonentsAndOrdersModel;*/

module.exports = db;
module.exports = router;
