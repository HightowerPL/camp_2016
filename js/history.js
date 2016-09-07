$(document).foundation();

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


    var html = '<li class="row"><div class="medium-2 columns"><span class="dateTrn">'
    + response.content[i].date +'</span></div><div class="medium-6 columns"><span class="descTrn">'
    +  response.content[i].description +'</span></div><div class="medium-4 columns"><span class="valueTrn"><strong>'
    + response.content[i].amount  + '</strong> PLN</span></div></li>';
    $('.listHis').append(html);

  }
});
ajaxPost();
