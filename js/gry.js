$(document).foundation();

$('#example-menu, .finance_life, .discover, .take').hide();

$(document).ready(function(){
  if ($(window).width() >= 640) {
    $('#example-menu, .finance_life, .discover, .take').fadeIn(1500);
  }
  else {
    $('.title-bar, .finance_life, .chartBig, .productsHistory').fadeIn(1500);
  }

  $('.sqrTake, .sqrDiscover').click(function() {
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
