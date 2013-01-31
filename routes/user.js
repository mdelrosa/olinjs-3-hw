
/*
 * GET users listing.
 */

 var models = require('../models'),
     Ingredient = models.Ingredient,
     Order = models.Order;

exports.index = function(req, res){
	res.render('index', {
		title: 'Burger App',
	})
}

exports.new_form = function(req, res){
  if (req.path === '/ingredient/new')
    res.render('add_ingredient', {title: "Add an Ingredient"})
 //  else (req.path === '/orders/new')
 //  	Ingredient.find({}).exec(function(err, db_ingr) {
 //  		if(err)
 //  			console.log("could not find ingredients")
 //  	  	res.render('orders_new', {
 //  		title: "Orders",
 //  		ingredients: db_ingr
 //  	    });
	// });
};

exports.create = function(req, res){
	if (req.path==='/ingredient/new')
	  //create ingredient	
	  var ingredient = new Ingredient({
	  	name: req.body.name,
	  	cost: req.body.cost
	  });
	  ingredient.save(function(err) {
	  	if (err)
	  		console.log("error saving ingredient")
	  });
	  res.redirect('/order');
};

exports.orders = function(req, res){
	Ingredient.find({}).exec(function(err, db_ingr) {
	  if(err) 
	  	console.log('could not find ingredients')
	  else
	  	Order.find({}).exec(function(err, db_ord) {
	  		if(err) 
	  	      console.log('could not find orders')
  			else {
       	      res.render('orders',{
	            title: "Burger App",
	            ingredients: db_ingr,
	            orders: db_ord
	          });
            }
        });
    });
}

exports.clear = function(req, res){
	Ingredient.remove({}, function(err) {
		console.log('ingredients removed')
		res.redirect('/order')
	});
}

exports.order_post = function(req, res) {
  console.log(req.body)
  var order = new Order({
  	customer: req.body.customer,
  	ingredients: req.body.ingredients
  });
  order.save(function(err) {
  	if(err) {
  		console.log(err)
	}
  });
};

exports.order_submit = function(req, res) {
	console.log(req.body)
	Order.remove({_id: req.body.ID}, function(err) {
		if(err){
			console.log(err)
		}
		return console.log('removed')
	});
}
