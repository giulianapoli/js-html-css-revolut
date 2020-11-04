$(document).ready(function() {
  var optionList = $('ul li > a');
  var dropdownMenu = $('.dropdownContent');
  var active = $('.active')

  // console.log(dropdownMenu);
  // console.log(optionList);



  optionList.click(function (){
    $(this).next('.dropdownContent').toggleClass('active');

  });

});
