// models.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

// set Schema
Schema = mongoose.Schema;

//  schema for ingredients
var IngrSchema = new Schema({
  name: String,
  cost: Number
});

// schema for orders
var OrdSchema = new Schema({
  ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
});

var Ingredient = mongoose.model('Ingredient', IngrSchema)
var Order = mongoose.model('Order', OrdSchema)

// exports
exports.Ingredient = Ingredient;
exports.Order = Order