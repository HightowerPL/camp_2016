$(document).foundation();

$('#example-menu, .finance_life, .chartBig, .productsHistory').hide();

$(document).ready(function(){
  if ($(window).width() >= 640) {
    $('#example-menu, .finance_life, .chartBig, .productsHistory').fadeIn(1500);
  }
  else {
    $('.title-bar, .finance_life, .chartBig, .productsHistory').fadeIn(1500);
  }
});

//History code - Start
function ajaxPost( data, endpoint, method, success ) {

  $.ajax({
    method: method,
    url: "http://efigence-camp.herokuapp.com/api/"+endpoint,
    data: data
  })
    .done(function( msg ) {
      success(msg);
    })
}

ajaxPost({}, "/data/history", "GET", function(response) {
  $('.dateTrn').html(response.content[0].date);
  $('.descTrn').html(response.content[0].description);
  $('.valueTrn').html(response.content[0].amount + ' PLN');

  for(var i=0; i < response.content.length; i++) {
    console.log(response.content[i]);


    var html = '<li><div class="historyDate"><span class="dateTrn">'
    + response.content[i].date.slice(-5) +'</span></div><div class="historyDesc"><span class="descTrn">'
    +  response.content[i].description +'</span><select name="type" class="historyType"><option value="Gas">Gas</option><option value="Food">Food</option><option value="Salary">Salary</option><option value="Fun">Fun</option></select></div><div class="historyAmount"><span class="valueTrn"><strong>'
    + response.content[i].amount  + '</strong> PLN</span></div></li>';
    $('.listHis').append(html);

  }
});
//History code - End
