var mongoose = require("mongoose");
var schema = mongoose.Schema;

var produit = new schema({
title: String,
price:Number,
quantity :Number,
description :String,



});

module.exports=mongoose.model('produits',produit);

