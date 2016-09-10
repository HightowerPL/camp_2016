$(document).foundation();

$(document).ready(function(){
    $('.logBtn').on('click', function(event) {
      let password = $('.inputPass').val();
      alert(password);
      sendAjax(password);
    });

    $('.fi-x').on('click', function(event) {
      $('.passWrong').fadeOut('slow');
    });
});

  function sendAjax(para){
    $.ajax({
      type: "POST",
      data: {
        login: "efi",
        password: para
      },
      url: "https://efigence-camp.herokuapp.com/api/login/",
      error: function(response) {
        $('.passWrong').fadeIn('slow');
        console.log(response.responseText);
      },
      success: function(response) {
        alert("Haslo jest poprawne");
        console.log(response);
      }
    });
  }
