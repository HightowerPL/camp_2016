$(document).foundation();
$(document).ready(function(){
    $('.logBtn').on('click', function(event) {
      let password = $('.inputPass').val();
      sendAjax(password);
      return false;
    });

    $('.fi-x').on('click', function(event) {
      $('.passWrong').fadeOut();
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
        $('.passWrong').fadeIn();
      },
      success: function(response) {
        alert("Haslo jest poprawne");
      }
    });
  }
