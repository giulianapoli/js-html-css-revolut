$(document).ready(function() {
  var liEl = $('.has-dropdown');
  var active = $('.dropdownContent.active');


  liEl.click(function(){
    var dropdownMenu = $('.dropdownContent');

    if ($(this).children('.dropdownContent').hasClass('active')) {
      $(this).children('.dropdownContent').removeClass('active');
    } else {
      dropdownMenu.removeClass('active');
      $(this).children('.dropdownContent').addClass('active');
    }
  })
});
