"use strict";

$(document).ready(function () {
  $('.js-drop-link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).find('.js-drop-menu').slideToggle();
  });
  $('.js-slider').slick({
    prevArrow: $('.main-review-slider .js-prev-btn'),
    nextArrow: $('.main-review-slider .js-next-btn'),
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.main-review-slider .controls')
  });
  $('.js-video .play').click(function (e) {
    e.preventDefault();
    $('.js-video .bg').hide();
    $('.js-video video')[0].play();
  });
  $('.js-video-edit .play-2').click(function (e) {
    e.preventDefault();
    $('.js-video-edit .bg').hide();
    $('.js-video-edit video')[0].play();
  });
  $('.js-aside-hide').click(function (e) {
    $(this).addClass('open');
    $('.js-aside').addClass('hide');
    setTimeout(function () {
      $('.js-aside-show').addClass('active');
    }, 300);
  });
  $('.js-aside-show').click(function (e) {
    $('.js-aside-show').removeClass('active');
    setTimeout(function () {
      $('.js-aside-hide').removeClass('open');
      $('.js-aside').removeClass('hide');
    }, 300);
  });
  $(".js-select-menu").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "select-drop-menu",
      "ui-selectmenu-button-open": "select-drop-menu",
      "ui-menu-item-wrapper": "select-drop-menu-wrapper"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget");
  editFunc('.js-add-func', '.js-wrapper-function');
  editFunc('.js-edit-text-func', '.js-wrapper-text-function');
  editFunc('.js-edit-image-func', '.js-wrapper-image-function');
  editFunc('.js-edit-video-func', '.js-wrapper-video-function');
  editFunc('.js-edit-pixel-func', '.js-wrapper-pixel-function');
  editFunc('.js-edit-menu-func', '.js-wrapper-menu-function');
  editFunc('.js-edit-pay-func', '.js-wrapper-pay-function');
  editFunc('.js-edit-avatar-func', '.js-wrapper-avatar-function');
  editFunc('.js-edit-mess-func', '.js-wrapper-mess-function');
  editFunc('.js-edit-link-func', '.js-wrapper-link-function');
  editFunc('.js-edit-goods-func', '.js-wrapper-goods-function');
  editFunc('.js-add-user', '.js-wrapper-add-user');

  function editFunc(btn, el) {
    $(btn).click(function (e) {
      $(el).fadeIn(100, function () {
        $('.js-function-add-body').css({
          transform: 'translateX(0)'
        });
        $('body').css({
          overflow: 'hidden'
        });
        $('main').css({
          paddingTop: '72px'
        });
        $('.js-top-menu').addClass('func-active');
      });
    });
  }

  $('.close-func').click(function (e) {
    $('.js-function-add-body').css({
      transform: 'translateX(300%)'
    });
    $('body').css({
      overflow: 'visible'
    });
    $('main').css({
      paddingTop: '0'
    });
    $('.js-top-menu').removeClass('func-active');
    setTimeout(function () {
      $('.close-func').parents('.wrapper-function').hide();
    }, 300);
  });
  $('.close-func-import').click(function (e) {
    $('.js-wrapper-function-import').fadeOut();
  });
  $('.js-import-btn').click(function (e) {
    $('.js-wrapper-function-import').fadeIn();
  });
  $('.js-copy').click(function (e) {
    e.preventDefault();
    var refLink = $(this).parent().find('.js-copy-text');
    refLink.select();
    document.execCommand('copy');
    window.getSelection().empty();
  });
  $('.js-add-settings').click(function (e) {
    $('.js-function-link').addClass('active');
    setTimeout(function () {
      $('.js-invisible-part-wrapper').show();
    }, 200);
    $(this).hide();
  });
  $('.js-hide-settings').click(function (e) {
    $('.js-invisible-part-wrapper').hide(200, function () {
      $('.js-function-link').removeClass('active');
      $('.js-add-settings').show();
    });
  });
  $('.js-close-func-multilink').click(function (e) {
    $('.js-wrapper-function-link').hide();
  });
  $('.js-close-func-multilink').click(function (e) {
    $('.js-wrapper-function-link-2').hide();
  });
  $('.js-text-align').click(function (e) {
    e.preventDefault();
    $('.js-text-align').removeClass('active');
    $(this).addClass('active');
    var attr = $(this).attr('data-text');
    $(this).parents('.textarea').find('.customize-text').css({
      textAlign: attr
    });
  });
  $('.js-text-style').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-style');
    $(this).toggleClass('active');
    $(this).parents('.textarea').find('.customize-text').toggleClass(attr);
  });
  $.widget('app.selectmenu', $.ui.selectmenu, {
    _renderItem: function _renderItem(ul, item) {
      var li = $("<li>"),
          wrapper = $("<div>", {
        text: item.label
      });
      wrapper.append("<img src=\"./img/".concat(item.value, ".svg\" alt=\"\">"));
      console.log();
      return li.append(wrapper).appendTo(ul);
    }
  });
  $(".js-select-mess").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "select-drop-menu select-drop-mess",
      "ui-selectmenu-button-open": "select-drop-menu select-drop-mess",
      "ui-menu-item-wrapper": "select-drop-menu-wrapper select-drop-mess"
    },
    icons: {
      button: "custom-icon"
    },
    change: function change(event, ui) {
      $('.select-drop-mess .ui-selectmenu-text').append("<img src=\"./img/".concat(ui.item.value, ".svg\" alt=\"\">"));
    }
  }).selectmenu("menuWidget");
  $('.js-close-reg').click(function (e) {
    $('.js-popup-wrapper-reg').fadeOut();
  });
  $('.js-popup-wrapper-reg').click(function (e) {
    if ($(e.target).hasClass('js-popup-body')) {
      $(this).fadeOut();
    }
  });
  $('.js-idea').click(function (e) {
    console.log($(e.target).hasClass('js-idea'));

    if ($(e.target).hasClass('js-idea')) {
      $('.js-idea-card').find('.js-actions').hide();
      $(this).parents('.line').find('.js-actions').show();
    } else if ($(e.target).hasClass('js-idea') == false) {
      $('.js-idea-card').find('.js-actions').hide();
    }
  });
  $('.js-actions').hover(function (e) {
    $(this).show();
  }, function (e) {
    $(this).hide();
  });
  $('.js-date').on('input', function (e) {
    $(this).parent().find('.js-label').text($(this).val());
  });
  $('.js-notices').click(function (e) {
    $('.js-notices-drop').slideToggle();
    $('.wrapper-notices').toggleClass('active');
  });
  $('.js-close-notice').click(function () {
    $('.js-notices-drop').slideUp();
    $('.wrapper-notices').removeClass('active');
  });
  $('.wrapper-notices').click(function () {
    $('.js-notices-drop').slideUp();
    $(this).removeClass('active');
  });
  $('.js-btn-multilink-set').click(function (e) {
    $('.js-mutlilink-sett').show();
  });
  $('.js-btn-multilink-set-2').click(function (e) {
    $('.js-mutlilink-sett-2').show();
  });
});