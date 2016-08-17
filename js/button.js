
$(document).ready(function(){
    $('.button').on('click', function(event) {
      let password =$('#password').val();
      sendAjax(password);
  });

  function sendAjax(pass){
    $.ajax({
      type: "post",
      data: {
        login: "efi",
        password: "camp"
      },
      url: "https://efigence-camp.herokuapp.com/api/login",
      error: function(response) {
        console.log(response.responseText);
      },
      success: function(response) {
        console.log(response);
      }
    });
  };
  /*
  var button = document.getElementsById("button");
  var input = document.getElementsById("input_pass");

  $(button).on('click', function (event){
    event.preventDefault();
    alert($(input).val());
  });*/
});
