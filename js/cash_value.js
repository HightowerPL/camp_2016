$(document).foundation();

function getAjax(){
  $.ajax({
    type:"GET",
    url: "https://efigence-camp.herokuapp.com/api/data/summary",

    success: function(response){
      var fund = response.content[0].funds;
      var bal = response.content[0].balance;
      var pay = response.content[0].payments;
      var funCcy = fund.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
      var balCcy = bal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
      var payCcy = pay.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
      
      $(".livebal").html("<b>"+balCcy+"</b> PLN");
      $(".livefun").html("<b>"+funCcy+"</b> PLN");
      $(".livepay").html("<b>"+payCcy+"</b> PLN");
    }
  });
}

getAjax();
