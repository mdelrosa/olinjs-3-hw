
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//get
app.get('/', routes.index);
app.get('/ingredient/new', user.new_form);
app.get('/orders/new', user.new_form);
app.get('/ingredient/clear', user.clear);
app.get('/order', user.orders)

//post
app.post('/orders/new', user.order_post)    
app.post('/ingredient/new', user.create)
app.post('/order/complete', user.order_submit)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

