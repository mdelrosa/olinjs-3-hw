var models = require('models.js');

// checkbox.js
$(function () {
  $('#newform').on('submit', function () {
    $.post("/orders", $('#newform').serialize());

    var inputs = $('#newform: input');

    var ingrList = []

    inputs.each(function() {
    	if this.script(src='/javascripts/.js')
    	  ingrList.push(this)
    });

    var newOrder = new Order {
    	ingredients: ingrList
    }

    console.log(newOrder)
    console.log("here")

    newOrder.save(function (err) {
    	if (err) console.log('error saving order')
    })

    var li = $('<li>' + $('#newinput').val() + '</li>')
    $('#todolist').append(li);

    var form = $('<form method="post" action="/delete/' + $('#todolist li').length + '"><button>Delete</button></form>')
    $(li).append(form);

    form.on('submit', function () {
      // ...
    })

    return false;
  })