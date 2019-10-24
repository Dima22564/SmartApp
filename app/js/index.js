$(document).ready(function () {
  $('.js-drop-link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).find('.js-drop-menu').slideToggle();
  })

  $('.js-slider').slick({
    prevArrow: $('.main-review-slider .js-prev-btn'),
    nextArrow: $('.main-review-slider .js-next-btn'),
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.main-review-slider .controls')
  })

  $('.js-video .play').click(function (e) {
    e.preventDefault();
    $('.js-video .bg').hide();
    $('.js-video video')[0].play();
  })
});