$(document).ready(function () {
  $('.works-navslider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: true,
  	centerMode: true,
  	variableWidth: true,
  	swipe: false,
  	focusOnSelect: true,
  	prevArrow: $('.works_slider_arow_l'),
  	nextArrow: $('.works_slider_arow_r'),
  	asNavFor: '.works-slider-main',
  })
  $('.works-slider-main').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	asNavFor: '.works-navslider',
  })
  $(".accordeon dd").hide().prev().click(function() {
      $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
  });
  $('.input-phone').mask('+7 (000) 00-00-000');
  $(window).on('resize', function() {
      if ($(window).width() < 1200) {
        $(".services-row").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          centerMode: true,
          variableWidth: true,
          dots: true
        });
      }
      else{
        
      }
  });
    if ($(window).width() < 1200) {
      $(".services-row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        dots: true
      });
    }
    else{
      
    }
});