$(document).ready(function() {
  var optionList = $('ul li > a');
  var dropdownMenu = $('.dropdownContent');
  var active = $('.dropdownContent.active');
  var menuEl = $('.dropdownContent > .menu');

  // console.log(dropdownMenu);
  // console.log(optionList);

  $('.dropdownContent').removeClass('active');
  dropdownMenu.removeClass('active');

  optionList.mouseenter(function (){
    $(this).next('.dropdownContent').addClass('active');
    $(this).next('optionList').addClass('active');
  });

  optionList.mouseleave(function (){
    $('.dropdownContent').removeClass('active');
  });

  // menuEl.mouseenter(function () {
  //   $(this).children('.dropdownContent').addClass('active');
  // });
  //
  // menuEl.mouseleave(function () {
  //   $(this).children('.dropdownContent').removeClass('active');
  // });

});
