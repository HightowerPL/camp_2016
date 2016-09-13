$(document).foundation();
$(document).ready(function(){
    $('.square').click(function() {
      $(this).children('.percent').fadeToggle(200);
      $(this).children('.fi-check').fadeToggle(200);
    });

    $('.uncomButton').click(function() {
      $("[data-progress-type='completed']").fadeOut(500);
      return false;
    });
    $('.allButton').click(function() {
      $("[data-progress-type='completed']").fadeIn(500);
      return false;
    });
});
