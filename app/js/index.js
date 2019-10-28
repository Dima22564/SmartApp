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

  $('.js-aside-hide').click(function(e){
    $('.js-aside').css({
      width: 0
    })
  })

  $(".js-select-menu")
    .selectmenu({
      classes: {
        "ui-selectmenu-button-closed": "select-drop-menu",
        "ui-selectmenu-button-open": "select-drop-menu",
        "ui-menu-item-wrapper": "select-drop-menu-wrapper",
      },
      icons: { button: "custom-icon" },
      transferClasses: true,
      focus: function (event, ui) {
        $(ui).addClass('custom');
      },
    })

    .selectmenu("menuWidget")

    $('.js-add-func').click(function(e){
      $('.js-wrapper-function').show(300, function(){
        $('.js-function-body').css({
          transform: 'translateX(0)'
        })
        $('body').css({
          overflow: 'hidden'
        })
        $('main').css({
          paddingTop: '72px'
        })
        $('.js-top-menu').addClass('func-active')
      })
    })

    $('.close-func').click(function(e){
      $('.js-function-body').css({
        transform: 'translateX(300%)'
      })
      $('body').css({
        overflow: 'visible'
      })
      $('main').css({
        paddingTop: '0'
      })
      $('.js-top-menu').removeClass('func-active')
      setTimeout(function(){
        $('.js-wrapper-function').hide()

      }, 300)
    })

    $('.close-func-import').click(function(e){
      $('.js-wrapper-function-import').fadeOut()
    })

    $('.js-import-btn').click(function(e){
      $('.js-wrapper-function-import').fadeIn()
    })

});