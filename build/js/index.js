"use strict";

$(document).ready(function () {
  var base_path = $('meta[name="base_asset_path"]').attr('content');
  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".currency-1").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-currency-1",
      "ui-selectmenu-button-open": "drop-menu-currency-1",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget");
  $('.js-select-city').select2({
    placeholder: "Выберите город"
  }); // ! offices select

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".offices-select").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-offices",
      "ui-selectmenu-button-open": "drop-menu-offices",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget"); // ! offices select
  // ! vacancy select

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".vacancy-select").selectmenu({
    placeholder: 'Сфера деятельности',
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-offices",
      "ui-selectmenu-button-open": "drop-menu-offices",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget"); // ! vacancy select
  // ! filter select

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".select-filter").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-select-filter",
      "ui-selectmenu-button-open": "drop-menu-select-filter",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget"); // ! filter select
  // ! small filter select

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".select-small").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-select-small-filter",
      "ui-selectmenu-button-open": "drop-menu-select-small-filter",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget"); // ! small filter select
  // ! statistics select

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });

      this._setText(buttonItem, item.label); // buttonItem.css( "background-color", item.value )


      return buttonItem;
    }
  });
  $(".statistisc-select-menu").selectmenu({
    // placeholder: 'Выберите страну',
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-statistics",
      "ui-selectmenu-button-open": "drop-menu-statistics",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget"); // ! statistics select
  // ! flag

  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super(); // var selected = this.element
      //   .find('[selected]')
      //   .length,
      //   // placeholder = this.options.placeholder;
      // if (!selected && placeholder) {
      //   this.buttonItem.text(placeholder);
      // }

    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
      $(ul).find("li").addClass("item");
      $(ul).find("li div").addClass("hover");
      $(ul).addClass("drop-menu");
    },
    _renderButtonItem: function _renderButtonItem(item) {
      var buttonItem = $("<span>", {
        "class": "selectmenu-text"
      });
      var text = item.label.toLowerCase();
      $('.drop-menu-currency-flag').find('img').remove();
      $(this.button).prepend('<img class="flag-icon" src=' + base_path + 'img/flag-' + text + '.svg' + '/>');

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  });
  $(".currency-flag").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-currency-flag",
      "ui-selectmenu-button-open": "drop-menu-currency-flag",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    },
    create: function create(event, ui) {
      var text = item.label.toLowerCase();
      $('.drop-menu-currency-flag').find('img').remove();
      $(this.button).prepend('<img class="flag-icon" src=' + base_path + 'img/flag-' + text + '.svg' + '/>');

      this._setText(buttonItem, item.label);

      return buttonItem;
    }
  }).selectmenu("menuWidget"); // ! flag

  $('.js-btn-notice').click(function (e) {
    e.preventDefault();
    $('.js-drop-menu').slideUp();
    $('.js-drop-links').removeClass('active');
    $('.js-notice-drop').slideDown();
    $('.js-main-wrapper').show();
    $(this).addClass('active');
  });
  $('.js-close').click(function (e) {
    e.preventDefault();
    $(this).parents('.js-drop-menu').slideUp();
    $(this).parents('.js-drop-menu').removeClass('active');
    $('.js-btn-notice').removeClass('active');
    $('.js-main-wrapper').hide();
  });
  $('.js-notice-close').click(function (e) {
    e.preventDefault();
    $(this).parents('.notice').hide();
  });
  $('.js-main-wrapper').click(function (e) {
    $('.js-drop-menu').slideUp();
    $('.js-btn-notice').removeClass('active');
    $('.js-drop-links').removeClass('active');
    $('.js-lk-drop-menu-links').slideUp();
    $('.js-lk-drop-menu').removeClass('active');
    $(this).hide();
  });
  $('.js-drop-links .title').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.js-drop-menu').slideUp();
      $('.js-btn-notice').removeClass('active');
      $('.js-drop-menu-links').slideUp();
      $(this).parent().removeClass('active'); // $('.js-main-wrapper').show();
    } else {
      $(this).addClass('active');
      $('.js-drop-menu').slideUp();
      $('.js-btn-notice').removeClass('active');
      $('.js-drop-menu-links').slideDown();
      $(this).parent().addClass('active');
      $('.js-main-wrapper').show();
    }
  });
  $('.js-cart-icon').click(function (e) {
    e.preventDefault();
    $('.js-cart-menu').slideDown();
    $('.js-main-wrapper').show();
  });
  $('.js-close-cart').click(function (e) {
    e.preventDefault();
    $(this).parents('.js-cart-menu').slideUp();
    $('.js-main-wrapper').hide();
  });
  $('.js-index-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    speed: 1500
  });
  $('.js-slider-item-mobile').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    speed: 1500
  });
  move();
  $(window).on('resize', move);
  var swipeLeft = 0;
  var swipeRight = 0;

  function move() {
    if (screen.width <= 768) {
      $('.js-items-swipe-row').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') {
            swipeLeft++;
            swipeRight--;
            $('.js-items-swipe-row .js-item-swipe').css({
              transform: "translateX(-".concat(swipeLeft * 100, "%)")
            });
          } else if (direction == 'right') {
            swipeLeft--;
            swipeRight++;
            $('.js-items-swipe-row .js-item-swipe').css({
              transform: "translateX(".concat(swipeRight * 100, "%)")
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.js-items-swipe-row').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          return 0;
        }
      });
      $('.js-items-swipe-row .js-item-swipe').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  }

  moveNote();
  $(window).on('resize', moveNote);
  var noteSwipeLeft = 0;
  var noteSwipeRight = 0;

  function moveNote() {
    $('.js-acc-note-swipe-row').swipe({
      swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') {
          noteSwipeLeft++;
          noteSwipeRight--;
          $('.js-acc-note-swipe-row .js-note-swipe-item').css({
            transform: "translateX(-".concat(noteSwipeLeft * 100, "%)")
          });
        } else if (direction == 'right') {
          noteSwipeLeft--;
          noteSwipeRight++;
          $('.js-acc-note-swipe-row .js-note-swipe-item').css({
            transform: "translateX(".concat(noteSwipeRight * 100, "%)")
          });
        }
      }
    });
  }

  moveTable();
  $(window).on('resize', moveTable);

  function moveTable() {
    if (screen.width < 768) {
      $('.js-table-swipe').swipe({
        swipeStatus: function swipeStatus(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
          if (direction == 'left') {
            $('.js-table-swipe').css({
              transform: "translateX(-" + distance + "px)"
            });
          } else if (direction == 'right') {
            $('.js-table-swipe').css({
              transform: "translateX(" + distance + "px)"
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.js-table-swipe').swipe({
        swipeStatus: function swipeStatus(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
          return 0;
        }
      });
      $('.js-table-swipe').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  }

  $('.js-swipe-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-account-nav-items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-games-nav-filter').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-stores-filter .js-stores-filter-nav-item').click(function (e) {
    var attr = $(this).attr('data-filter');
    $('.js-stores-filter .js-stores-filter-nav-item').removeClass('active');
    $(this).addClass('active');
    swipeLeft = 0;
    swipeRight = 0;
    $('.js-items-swipe-row .js-item-swipe').css({
      transform: "translateX(0)"
    });
    $('.js-stores-filter-items .js-filter-stores-item').hide();
    $('.js-stores-filter-items').find('.' + attr).show();
  });
  $('.js-edit').hover(function () {
    $(this).find('.js-pen-icon').show();
  }, function () {
    $(this).find('.js-pen-icon').hide();
    $(this).find('input').css({
      textAlign: 'right'
    });
    $(this).find('input').attr('readonly', true);
  });
  $('.js-pen-icon').click(penEdit);

  function penEdit() {
    if (screen.width > 768) {
      $(this).parents('.js-edit').find('input').css({
        textAlign: 'left'
      });
      $(this).parents('.js-edit').find('input').attr('readonly', false);
      $('.js-pen-icon').find('input').attr('readonly', true);
      $(this).parents('.js-edit').find('input').focus();
    } else if (screen.width < 768) {
      return 0;
    }
  }

  penEditMobile();
  $(window).on('resize', penEditMobile);

  function penEditMobile() {
    if (screen.width < 768) {
      $('.js-pen-icon').off('click', penEdit);
      $('.js-edit').click(function pen() {
        $('.js-pen-icon').find('input').attr('readonly', true);
        $(this).find('input').attr('readonly', false);
        $(this).find('input').css({
          textAlign: 'left'
        });
      });
    } else if (screen.width > 768) {
      $('.js-edit').off('click');
      $('.js-pen-icon').on('click', penEdit);
      return 0;
    }
  }

  ;
  $('.js-toggler').click(function (e) {
    $(this).toggleClass('active');
  });
  $('.js-popup-note .js-close-popup').click(function (e) {
    $(this).parents('.js-popup-note').fadeOut();
  });
  $('.js-read-note').click(function (e) {
    e.preventDefault();
    $(this).parents('.js-popup-note').find('#popup-text').attr('readonly', true);
    $('.js-popup-note').fadeIn();
  });
  $('.js-popup-note .js-copy-note-popup').click(function (e) {
    e.preventDefault();
    var refLink = $(this).parents('.js-popup-note').find('#popup-text');
    refLink.select();
    document.execCommand('copy');
    window.getSelection().empty();
  });
  $('.js-edit-popup-text').click(function (e) {
    $(this).parents('.js-popup-note').find('#popup-text').attr('readonly', false);
    $(this).parents('.js-popup-note').find('#popup-text').focus();
  });
  $('.js-games-nav-filter-item').click(function (e) {
    var attr = $(this).attr('data-filter');
    $('.js-games-nav-filter-item').removeClass('active');
    $(this).addClass('active');
    $('.js-game-items .js-game-wrapper').hide();
    $('.js-game-items').find('.' + attr).show();
  });
  $('.js-faq-item').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parents('.js-faq-item-wrapper').find('.js-slide-down').slideUp();
    } else {
      $('.js-faq-item-wrapper .js-slide-down').slideUp();
      $('.js-faq-item').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.js-faq-item-wrapper').find('.js-slide-down').slideDown();
    }
  });
  $('.js-faq-nav-tab-item').click(function (e) {
    var attr = $(this).attr('data-tab');
    $('.js-faq-nav-tab-item').removeClass('active');
    $(this).addClass('active');
    $('.faq-content .questions').hide();
    $('.faq-content').find('.' + attr).show();
  });
  $('.js-link-mobile').click(function (e) {
    var data = $(this).attr('data-mark');
    $('.js-top-menu-mobile .js-top-menu-content').addClass('move');
    $('.js-top-menu-mobile').find('.' + data).addClass('move');
  });
  $('.js-back').click(function (e) {
    $(this).parents('.js-mobile-submenu').removeClass('move');
    $('.js-top-menu-mobile .js-top-menu-content').removeClass('move');
  });
  $('.js-burger-menu').click(function (e) {
    if ($(this).parents('.js-top-menu-mobile').hasClass('active')) {
      $(this).find('img').replaceWith('<img src="' + base_path + 'img/burger.svg" alt="" class="burger">');
      $(this).parents('.js-top-menu-mobile').removeClass('active');
      $('.js-mobile-contents').slideUp();
      $('.js-menu-wrapper').hide();
    } else {
      $(this).find('img').replaceWith('<img src="' + base_path + 'img/close.svg" alt="" class="burger">');
      $(this).parents('.js-top-menu-mobile').addClass('active');
      $('.js-mobile-contents').slideDown();
      $('.js-menu-wrapper').show();
    }
  });
  $('.js-menu-wrapper').click(function (e) {
    $('.js-mobile-contents').slideUp();
    $('.js-top-menu-mobile').removeClass('active');
    $('.js-top-menu-mobile .js-burger-menu').find('img').replaceWith('<img src="' + base_path + 'img/burger.svg" alt="" class="burger">');
    $(this).hide();
  });
  $('.js-favourite').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('fa-heart active');
      $(this).addClass('fa-heart-o');
    } else {
      $(this).addClass('fa-heart active');
      $(this).removeClass('fa-heart-o');
    }
  });
  $('.js-contacts .title').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parents('.js-contacts').find('.js-people').slideUp();
    } else {
      $(this).addClass('active');
      $(this).parents('.js-contacts').find('.js-people').slideDown();
    }
  });
  $('.js-chat-person').click(function (e) {
    if (screen.width <= 768) {
      $('.js-messages-left-side').hide(700, function () {
        $('.js-messages-right-side').show();
      });
    } else if (screen.width > 768) {
      return 1;
    }
  });
  $(window).on('resize', function (e) {
    if (screen.width <= 768) {
      $('.js-messages-right-side').css({
        display: 'none'
      });
    } else if (screen.width > 768) {
      $('.js-messages-left-side').css({
        display: 'block'
      });
      $('.js-messages-right-side').css({
        display: 'block'
      });
    }
  });
  $('.js-chat-back').click(function (e) {
    $('.js-messages-right-side').hide(700, function () {
      $('.js-messages-left-side').show();
    });
  });
  $('.js-close-popup').click(function (e) {
    $(this).parents('.js-popup-wrapper').fadeOut();
  });
  $('.js-fixed-btns').hover(function (e) {
    $('.js-fixed-btn-item').show();
  }, function (e) {
    $('.js-fixed-btn-item').hide();
  });
  $('.js-fixed-btns .item i').click(function (e) {
    $('.js-fixed-btn-item').show();
  });
  $(window).on('scroll', function (e) {
    $('.js-fixed-btn-item').hide();
  });
  $('.js-item-pay').click(function (e) {
    $('.js-item-pay').each(function (ind, el) {
      var atr = $(el).attr('data-pay');
      $(el).find('img').replaceWith("<img src=\"./img/".concat(atr, "-black.png\", alt=\"\">"));
    });

    if ($(this).hasClass('active')) {
      var attr = $(this).attr('data-pay');
      $(this).removeClass('active');
      $(this).find('img').replaceWith("<img src=\"./img/".concat(attr, "-black.png\", alt=\"\">"));
    } else {
      $('.js-item-pay').removeClass('active');
      $(this).addClass('active');
      var attr = $(this).attr('data-pay');
      $(this).find('img').replaceWith("<img src=\"./img/".concat(attr, "-blue.png\", alt=\"\">"));
    }
  });
  $('.cart-section .js-minus').click(function (e) {
    var val = +$(this).parent().find('.js-input-quantity').val();
    val -= 1;

    if (val < 0) {
      $(this).parent().find('.js-input-quantity').val(0);
    } else {
      $(this).parent().find('.js-input-quantity').val(val);
    }
  });
  $('.cart-section .js-plus').click(function (e) {
    var val = +$(this).parent().find('.js-input-quantity').val();
    val += 1;

    if (val < 0) {
      $(this).parent().find('.js-input-quantity').val(0);
    } else {
      $(this).parent().find('.js-input-quantity').val(val);
    }
  });
  $('.js-open-2').click(function (e) {
    $('.popup-open-2-wrapper').fadeIn();
  });
  $('.js-popup-wrapper').click(function (e) {
    if (e.target.className == 'popup-body') {
      $(this).fadeOut();
    }
  });
  $('.js-open-1').click(function (e) {
    $('.popup-open-1-wrapper').fadeIn();
  });
  $('.js-popup-wrapper').click(function (e) {
    if (e.target.className == 'popup-body') {
      $(this).fadeOut();
    }
  });
  $('.js-lk-drop-menu').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.js-lk-drop-menu-links').slideUp();
      $('.js-main-wrapper').hide();
    } else {
      $(this).addClass('active');
      $('.js-lk-drop-menu-links').slideDown();
      $('.js-main-wrapper').show();
    }
  });
});