$(document).foundation();

function getAjax(){
  $.ajax({
    type:"GET",
    url: "https://efigence-camp.herokuapp.com/api/data/summary",

    success: function(response){
      var fundusze = response.content[0].funds;
      var balans = response.content[0].balance;
      var platnosc = response.content[0].payments;
      $(".livebal").html("<b>"+balans+"</b> PLN");
      $(".livefun").html("<b>"+fundusze+"</b> PLN");
      $(".livepay").html("<b>"+platnosc+"</b> PLN");
    }
  });
}

getAjax();
