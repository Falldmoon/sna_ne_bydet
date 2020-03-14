$(document).ready(function () {
  $('.works-navslider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: true,
  	centerMode: true,
  	variableWidth: true,
  	swipe: false,
  	prevArrow: $('.works_slider_arow_l'),
  	nextArrow: $('.works_slider_arow_r'),
  	asNavFor: '.works-slider-main',
  })
  $('.works-slider-main').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	asNavFor: '.works-navslider',
  })

});