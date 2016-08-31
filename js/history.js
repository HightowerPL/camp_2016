$(document).foundation();

function getAjax(){
  $.ajax({
    type:"GET",
    url: "https://efigence-camp.herokuapp.com/api/data/history",

    success: function(response){
      console.log(response);

      for (var i = 0; i < response.content.length ; i++){
        var html = '<li>' + response.content[i].currency +' <li>';

        $(".listaHis").append(html);
      }
    }
  });
}

getAjax();
/*
$(".livebal").html("<b>"+balans+"</b> PLN");
$(".livefun").html("<b>"+fundusze+"</b> PLN");
$(".livepay").html("<b>"+platnosc+"</b> PLN");
*/
