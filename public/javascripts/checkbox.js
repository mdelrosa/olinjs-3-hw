// checkbox.js
$(function () {
  $('#submit_button').click(function () {

    var ingr_list = []
    var ingr_count = 0;

    $('input:checkbox:checked').each(function () {
    	ingr_list.push({name: $(this).attr('name'), cost: $(this).attr('cost')});
    	ingr_count+=1
    })

    var actual_ingr = [];
    for (i=0;i<ingr_count;i++){
    	actual_ingr.push(ingr_list[i]);
    }

    var cust_name = $('input:text').val();

    $.post('/orders/new', {
    	customer: cust_name,
    	ingredients: actual_ingr
    });

    $('input:checkbox:checked').each(function () {
      $(this).removeAttr('checked');
    });

    // $.post("/orders", $('#newform').serialize());

    return false;
  });

  $('.confirm_order').click(function() {
  	var orderID = $(this).attr('ID');

	  $.post('/order/complete', {ID: orderID} );

    $(this).parent().remove()

  })
});