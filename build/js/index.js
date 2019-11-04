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
    $('.js-aside').css({
      width: 0,
      overflow: 'hidden'
    });
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

  function editFunc(btn, el) {
    $(btn).click(function (e) {
      $(el).show(300, function () {
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
    $('#text-block').css({
      textAlign: attr
    });
  });
  $('.js-text-style').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-style');
    $(this).toggleClass('active');
    $('#text-block').toggleClass(attr);
  });
  $('.js-text-align').click(function (e) {
    e.preventDefault();
    $('.js-text-align').removeClass('active');
    $(this).addClass('active');
    var attr = $(this).attr('data-text');
    $('#text-block-2').css({
      textAlign: attr
    });
  });
  $('.js-text-style').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-style');
    $(this).toggleClass('active');
    $('#text-block-2').toggleClass(attr);
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
});