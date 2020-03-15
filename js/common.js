document.body.onload = function () {
   setTimeout(function () {
      let preloader = document.getElementById('preloader');
      if (!preloader.classList.contains('preloader-done')) {
         preloader.classList.add('preloader-done');
         for (var i = $('.modal-wrapper').length - 1; i >= 0; i--) {
           $('.modal-wrapper')[i].style.opacity = '1';
         }
      }
   }, 1000);
};
$(document).ready(function () {
  let modal_dark = $('.dark-window')
  let modal_select = $('.m-d-s');
  let modal_c = $('.m-d-c');
  let modal_r = $('.m-d-r');
  $(modal_select).hide()
  $(modal_c).hide()
  $(modal_dark).hide()
  $(modal_r).hide()
  $('.modal-exit').on('click', function() {
    let modal = $(this).parent().parent();
    let modal_dark = $('.dark-window')
    $(modal).fadeOut()
    $(modal_dark).fadeOut()
  })
  $('.scroll').click(function () {
     var scroll_el = $(this).attr('href'); 
     if ($(scroll_el).length != 0) { 
        $('html, body').animate({
           scrollTop: $(scroll_el).offset().top -0
        }, 800); 
     }
     return false; 
  });
  $('.modal-form').on('submit', function() {
    $(modal_dark).fadeOut();
    $(modal_r).fadeOut();
  })
  $('.modal-open').on('click', function() {
    let modal_select = $('.m-d-s');
    let modal_dark = $('.dark-window')
    $(modal_select).fadeIn();
    $(modal_dark).fadeIn();
    return false;
  })
  $('.modal-btn__fast').on('click', function() {
    let modal_select = $('.m-d-s');
    let modal_dark = $('.dark-window');
    $(modal_select).fadeOut();
    $(modal_r).fadeIn();
    return false;
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
  $('.input-phone').mask('+7 (000) 00-00-000');
  if ($(window).width() < 1200) {
    $(".services-row").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      dots: true,
      swipe: true,
      prevArrow: $('.team-arrows__item_l_t'),
      nextArrow: $('.team-arrows__item_r_t'),
    });
  }
  else{
    $('.services-row').slick('unslick');
  }

  $(window).on('resize', function() {
      if ($(window).width() < 1200) {
        $(".services-row").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: true,
          swipe: true,
          prevArrow: $('.team-arrows__item_l_t'),
          nextArrow: $('.team-arrows__item_r_t'),
        });
      }
      else{
        $(".services-row").slick('unslick');
      }
    });
  if ($(window).width() < 1200) {
    $('.team-slider').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.team-arrows__item_l'),
        nextArrow: $('.team-arrows__item_r'),
    })
  }
  else{
    $('.team-slider').slick('unslick');
  }
  $(window).on('resize', function() {
      if ($(window).width() < 1200) {
        $('.team-slider').slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.team-arrows__item_l'),
            nextArrow: $('.team-arrows__item_r'),
        })
      }
      else{
        $('.team-slider').slick('unslick');
      }
  });
  
  

  


});