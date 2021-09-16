// Hamburger Menu: https://codepen.io/PaulVanO/pen/XJYGNQ/

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


// Bx Slider: https://bxslider.com/

$(document).ready(function(){
    $('.bxslider').bxSlider();
    touchEnabled: true;
    auto: true;
    stopAutoOnClick: true;
    pause: 3000;
  });
 