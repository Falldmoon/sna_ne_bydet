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
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            asNavFor: '.works-slider-mobile',
          }
        }
      ]
  })
  $('.works-slider-main').slick({
  	slidesToShow: 1,
    swipe: false,
  	slidesToScroll: 1,
  	asNavFor: '.works-navslider',
  })
  $(".services-row").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    swipe: false,
    prevArrow: $('.team-arrows__item_l_t'),
    nextArrow: $('.team-arrows__item_r_t'),
  });
  $('.team-slider').slick({
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.team-arrows__item_l'),
      nextArrow: $('.team-arrows__item_r'),
  })
  $('.works-slider-mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      asNavFor: '.works-navslider',
  })
  $('.slider-type').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
  })
  $(".accordeon dd").hide().prev().click(function() {
      $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
  });
  $('.input-phone').mask('+7 (000) 00-00-000');
});