$(document).ready(function() {
  var optionList = $('ul li > a');
  var dropdownMenu = $('.dropdownContent');
  var active = $('.dropdownContent.active')

  // console.log(dropdownMenu);
  // console.log(optionList);



  optionList.click(function (){

    $('.dropdownContent').removeClass('active');
    $(this).next('.dropdownContent').addClass('active');
  });

});
