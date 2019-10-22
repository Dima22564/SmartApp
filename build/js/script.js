"use strict";

$(document).ready(function () {
  // ! Choose lang
  $('.js-current-lang').click(function (e) {
    if ($('.js-lang-choose').css('display') != 'none') {
      $('.js-lang-choose').slideUp('fast');
    } else {
      $('.js-lang-choose').slideDown('fast');
    }
  });
  $('.js-lang-choose').mouseleave(function () {
    $(this).slideUp('fast');
  });

  function menuDis(e) {
    if (e.target.className == 'btn current-lang js-current-lang' || e.target.tagName == 'IMG' || e.target.className == 'lang') {
      // $('.js-lang-choose').slideDown('fast');
      return 1;
    } else {
      $('.js-lang-choose').slideUp('fast');
    }
  }

  $('body').on('click', menuDis); // ! Mobile menu

  $('.js-menu-mobile').click(function (e) {
    $('.js-links-lang').addClass('active');
    $(this).hide();
    $('.js-menu-mobile-close').show();
    $('body').addClass('active');
    $('.top-menu').addClass('active');
    $('.js-open-acc').addClass('show');
  });
  $('.js-menu-mobile-close').click(function (e) {
    $('.js-links-lang').removeClass('active');
    $(this).hide();
    $('.js-menu-mobile').show();
    $('body').removeClass('active');
    $('.top-menu').removeClass('active');
    $('.js-open-acc').removeClass('show');
  });
  $.widget('app.selectmenu', $.ui.selectmenu, {
    _drawButton: function _drawButton() {
      this._super();

      var selected = this.element.find('[selected]').length,
          placeholder = this.options.placeholder;

      if (!selected && placeholder) {
        this.buttonItem.text(placeholder);
      }
    }
  });
  $("#country").selectmenu({
    placeholder: 'Выберите страну',
    classes: {
      "ui-selectmenu-button-closed": "select",
      "ui-selectmenu-button-open": "select"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true
  }).selectmenu("menuWidget");
  $('input').on('input', function (e) {
    // $(this).addClass('changing');
    // e.stopPropagation();
    $(this).css({
      border: '2px solid #1410291e'
    }); // e.stopPropagation();
  });
  $('input').blur(function (e) {
    // $(this).removeClass('changing');
    // e.stopPropagation();
    $(this).css({// border: '2px solid transparent'
    }); // e.stopPropagation();
  }); // ! cabinet exit

  $('.js-cabinet-exit').click(function (e) {
    e.preventDefault();
    $('.js-cabinet-exit-popup').fadeIn();
  });
  $('.js-cabinet-exit-popup .btn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var attr = $(this).attr('data-ans');

    if (attr == 'false') {
      $('.js-cabinet-exit-popup').fadeOut();
    }
  }); // ! Upgrade

  $('.js-my-brief-items .btn-upgrade').click(function (e) {
    e.preventDefault(); // if ($('.js-my-brief-items').children().length < 3) {
    //     $('.js-cabinet-main-popup-uprgade').fadeIn();
    // }

    if ($(this).hasClass('disabled')) {
      $('.js-cabinet-main-popup-uprgade').fadeIn();
    } else {
      window.location = './cabinet-upgrade.html';
    }

    $('.js-cabinet-main-popup-uprgade .btn').click(function (e) {
      e.preventDefault();
      $('.js-cabinet-main-popup-uprgade').fadeOut();
    });
  });
  var togglerClick = '';
  var res = [];
  $('.js-btn-main-upgrade').click(function (e) {
    e.preventDefault();
    var checkToggle = [];

    if ($('.js-btn-main-upgrade').hasClass('disabled')) {
      $('.js-cabinet-page-upgrade').fadeIn();
    }

    $('.cabinet-upgrade .my-brief .js-act-upgrade').map(function (ind, el) {
      var check = $(el).hasClass('active');
      checkToggle.push(check);
    });
    res = checkToggle.every(function (curVal) {
      return curVal == true;
    });

    if (res == true) {
      $('.cabinet-upgrade .my-brief .js-btn-active').removeClass('disabled');
    } else {
      $('.cabinet-upgrade .my-brief .js-btn-active').addClass('disabled');
    }
  });

  if (res == false) {
    $('.js-btn-main-upgrade').addClass('disabled');
  } else {
    $('.js-btn-main-upgrade').removeClass('disabled');
  }

  $('.cabinet-upgrade .js-act-upgrade').click(function (e) {
    e.preventDefault();
    togglerClick = $(this).parents('.my-brief');
    var checkToggle = [];

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      togglerClick.find('.js-toggler').removeClass('active');
    }

    $('.cabinet-upgrade .my-brief .js-act-upgrade').map(function (ind, el) {
      var check = $(el).hasClass('active');
      checkToggle.push(check);
    });
    res = checkToggle.every(function (curVal) {
      return curVal == true;
    });

    if (res != true) {
      $('.cabinet-upgrade .my-brief .js-btn-active').addClass('disabled');
      $('.js-btn-main-upgrade').addClass('disabled');
    }

    if (res == true) {
      $('.js-btn-main-upgrade').removeClass('disabled');
    }
  });
  $('.js-cabinet-page-upgrade .btn').click(function (e) {
    e.preventDefault();
    $('.js-cabinet-page-upgrade').fadeOut();
    var checkToggle = [];
    $('.cabinet-upgrade .my-brief .js-act-upgrade').map(function (ind, el) {
      var check = $(el).hasClass('active');
      checkToggle.push(check);
    });
    res = checkToggle.every(function (curVal) {
      return curVal == true;
    });

    if (res == true) {
      $('.cabinet-upgrade .my-brief .js-btn-active').removeClass('disabled');
    } else {
      $('.cabinet-upgrade .my-brief .js-btn-active').addClass('disabled');
    }
  }); // ! toggler

  var upgradeBtn = '';
  $('.cabinet-main .js-toggler').click(function (e) {
    e.stopPropagation();

    if ($(this).hasClass('active')) {
      $('.js-cabinet-main-popup-insurance-off').fadeIn();
    } else {
      $('.js-cabinet-main-popup-insurance').fadeIn();
      upgradeBtn = $(this).parents('.my-brief');
    }
  });
  $('.js-cabinet-main-popup-insurance .btn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var ans = $(this).attr('data-ans');

    if (ans == 'true') {
      $(upgradeBtn).find('.js-toggler').addClass('active');
      $('.js-cabinet-main-popup-insurance').fadeOut();
    } else {
      $('.js-cabinet-main-popup-insurance').fadeOut();
    }
  });
  $('.js-cabinet-main-popup-insurance-off .btn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var ans = $(this).attr('data-ans');

    if (ans == 'true') {
      $(upgradeBtn).find('.js-toggler').removeClass('active');
      $('.js-cabinet-main-popup-insurance-off').fadeOut();
    } else {
      $('.js-cabinet-main-popup-insurance-off').fadeOut();
    }
  });
  $('.js-main-item').click(function () {
    if (screen.width < 768) {
      $(this).find('.arrow').toggleClass('active');
      $('.js-drop-menu').slideToggle();
    }
  });
  $('.js-main-item').find('a').click(function (e) {
    e.preventDefault();
  });
  move();
  myMove();
  moveStatistics();
  moveNews();
  $(window).on('resize', move);
  $(window).on('resize', myMove);
  $(window).on('resize', moveStatistics);
  $(window).on('resize', moveNews);
  var swipeLeft = 0;
  var swipeRight = 0;

  function move() {
    if (screen.width <= 768) {
      $('.js-brief-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') {
            swipeLeft++;
            swipeRight--;
            $('.js-brief-items .brief').css({
              transform: "translateX(-".concat(swipeLeft * 106, "%)")
            });
          } else if (direction == 'right') {
            swipeLeft--;
            swipeRight++;
            $('.js-brief-items .brief').css({
              transform: "translateX(".concat(swipeRight * 106, "%)")
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.js-brief-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          return 0;
        }
      });
      $('.js-brief-items .brief').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  }

  var mySwipeLeft = 0;
  var mySwipeRight = 0;

  function myMove() {
    if (screen.width <= 768) {
      $('.js-my-brief-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') {
            mySwipeLeft++;
            mySwipeRight--;
            $('.js-my-brief-items .brief').css({
              transform: "translateX(-".concat(mySwipeLeft * 105, "%)")
            });
          } else if (direction == 'right') {
            mySwipeLeft--;
            mySwipeRight++;
            $('.js-my-brief-items .brief').css({
              transform: "translateX(".concat(mySwipeRight * 105, "%)")
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.js-my-brief-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          return 0;
        }
      });
      $('.js-my-brief-items .brief').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  }

  var mySwipeLeft_2 = 0;
  var mySwipeRight_2 = 0;

  function moveStatistics() {
    if (screen.width <= 768) {
      $('.js-statistics-items .js-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') {
            mySwipeLeft_2++;
            mySwipeRight_2--;
            $('.js-statistics-items .brief').css({
              transform: "translateX(-".concat(mySwipeLeft_2 * 105, "%)")
            });
          } else if (direction == 'right') {
            mySwipeLeft_2--;
            mySwipeRight_2++;
            $('.js-statistics-items .brief').css({
              transform: "translateX(".concat(mySwipeRight_2 * 105, "%)")
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.js-statistics-items .js-items').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          return 0;
        }
      });
      $('.js-statistics-items .brief').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  }

  var mySwipeLeftNews = 0;
  var mySwipeRightNews = 0;

  function moveNews() {
    if (screen.width <= 768) {
      $('.cabinet-news .js-news').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') {
            mySwipeLeftNews++;
            mySwipeRightNews--;
            $('.cabinet-news .js-news .js-item').css({
              transform: "translateX(-".concat(mySwipeLeftNews * 107, "%)")
            });
          } else if (direction == 'right') {
            mySwipeLeftNews--;
            mySwipeRightNews++;
            $('.cabinet-news .js-news .js-item').css({
              transform: "translateX(".concat(mySwipeRightNews * 107, "%)")
            });
          }
        }
      });
    } else if (screen.width > 768) {
      $('.cabinet-news .js-news').swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
          return 0;
        }
      });
      $('.cabinet-news .js-news .js-item').css({
        transform: "translateX(0)"
      });
      return 0;
    }
  } // ! Pagination


  $('.js-pagination .pagination-item').click(function (e) {
    $('.js-pagination .pagination-item').removeClass('current-page');
    $(this).addClass('current-page');
  });
  $('.js-payments .js-pay .circle').click(function (e) {
    $('.js-payments .js-pay .circle').removeClass('checked');
    $(this).toggleClass('checked');
  }); // ! pay items

  $('.pay-systems .js-item-pay').click(function (e) {
    $('.js-custom-popup').fadeIn();
  });
  $('.js-copy').click(function (e) {
    e.preventDefault();
    var refLink = $(this).parent().find('#ref-link');
    refLink.select();
    document.execCommand('copy');
    window.getSelection().empty();
  });
  $('.js-prev-step').click(function (e) {
    e.preventDefault();
    $('.js-sign-up-step-2').fadeOut(function (e) {
      $('.js-sign-up-step-1').fadeIn();
    });
  });
  $('.js-sign-in-link').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().fadeOut(function (e) {
      $('.js-sign-in').fadeIn();
    });
  });
  $('.js-sign-up-link').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().fadeOut(function (e) {
      $('.js-sign-up-step-1').fadeIn();
    });
  });
  $('.js-forget-pass').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().fadeOut(function (e) {
      $('.js-repair-pass').fadeIn();
    });
  });
  $('.js-no-acc').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().fadeOut(function (e) {
      $('.js-sign-up-step-1').fadeIn();
    });
  }); // ! close

  $('.js-close').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().parent().parent().parent().fadeOut();
  });
  $('.js-change-photo').click(function (e) {
    e.preventDefault();
    $('.js-change-photo-popup').fadeIn();
  }); // ! Slider

  $('.js-index-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1
      }
    }]
  });
  $('.index-earn .js-btn-more').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-more');
    $('.index-earn').find('.' + attr).fadeIn();
  });
  $('.index-earn .js-more').click(function (e) {
    e.preventDefault();

    if (e.target.className == 'wrapper') {
      $('.js-more').fadeOut();
    }
  });
  $('.index-logos .js-bank').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-bank');
    $('.index-logos').find('.' + attr).fadeIn();
  });
  $('.index-logos .js-bank-info').click(function (e) {
    e.preventDefault();

    if (e.target.className == 'wrapper') {
      $('.js-bank-info').fadeOut();
    }
  }); // ! buy main-cabninet

  $('.cabinet-main .btn-buy').click(function (e) {
    e.preventDefault();
    $('.js-cabinet-main-popup-buy').fadeIn();
  });
  $('.js-cabinet-main-popup-buy .btn').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-ans');

    if (attr == 'false') {
      $('.js-cabinet-main-popup-buy ').fadeOut();
    }
  });
  $('.index-cases .js-tab').click(function (e) {
    e.preventDefault();
    $('.index-cases .js-tab').removeClass('active');
    $(this).addClass('active');
    var attr = $(this).attr('data-tab');
    $('.index-cases .js-tab-content').addClass('off');
    $('.index-cases .js-tab-content').removeClass('on');
    $('.index-cases').find('.' + attr).removeClass('off');
    $('.index-cases').find('.' + attr).addClass('on');
  });
  $('.js-tab-content .js-tab-items').slick({
    slidesToShow: 4,
    dots: false,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true
  });
  $.getJSON('./js/code.json', function (data) {
    var select = $('#country');

    for (var key in data) {
      var str = $("<option value=".concat(data[key], ">").concat(key, "</option>"));
      str.appendTo(select);
    }
  });
  $('.js-sign-up-step-2 #country-code').val('');
  $('.js-sign-up-step-2 #tel-number').attr('readonly', true); // ! Choose country num

  $('#country').selectmenu({
    change: function change(e, data) {
      var code = data.item.value;
      $('.js-sign-up-step-2 #country-code').val(code);

      if ($('.js-sign-up-step-2 #country-code').val() == '') {
        $('.js-sign-up-step-2 #tel-number').attr('readonly', true);
      } else {
        $('.js-sign-up-step-2 #tel-number').attr('readonly', false);
      }
    }
  });
  $('.js-withdraw-popup .btn').click(function (e) {
    e.preventDefault();
    $('.js-withdraw-popup').fadeOut();
  }); // ! Cabinet career parners accordion
  // $('.js-main-partner').click(function (e) {
  //     // $('.js-main-partner-form').submit();
  // })

  $('.js-main-partner-form').on('click', function (e) {
    e.preventDefault();
    $('.js-main-partner-form').removeClass('active');
    $(this).addClass('active');
    var that = $(this);
    var dropChildren = $(that).children();
    $('.js-main-partner-form').map(function (ind, el) {
      if (that.hasClass('active') == $(el).hasClass('active')) {
        return 1;
      } else {
        $(el).removeClass('active');
        $(el).find('.js-partners-line-wrapper').slideUp();
      }
    });
    var main_patrner_num = $(this).parent().children().index(this);
    $(that).find('.js-partners-line-wrapper .js-partners-line-wrapper').slideUp();
    $(that).find('.js-partner-patrners').slideDown();
    $('.js-partners-line-wrapper').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).children().slideDown(); // console.log($(this).children())
    });
    console.log(main_patrner_num);
    $.getJSON('./js/partners.json', function (data) {
      var part_drop = data["main-partner-".concat(main_patrner_num)];
      var arr_part = []; // for (var key in part_drop) {
      //   var item = part_drop[key];
      //   arr_part.push(item);
      // }

      var partnersHtml = [];
      var part = $(that).find('.js-partner-line'); // console.log(part)

      part.map(function (ind, el) {
        partnersHtml.push($(el));
      });
      console.log(part_drop);

      function createArr(obj) {
        var data = [];

        for (var key in obj["".concat(main - partner - num)]) {
          var item = obj[0][key];
          data.push(item);
        }

        return data;
      } // var newArr = createArr(part_drop)
      // console.log(newArr)
      // console.log(partnersHtml)


      that.find('.js-partner-partners').map(function (ind, el) {
        if (ind == arr_part.indexOf(arr_part[ind])) {
          $(el).find('.js-login').text(arr_part[ind]['name1']);
          $(el).find('.js-portf').text(arr_part[ind]['name2']);
          $(el).find('.js-part').text(arr_part[ind]['name3']);
          $(el).find('.js-struc').text(arr_part[ind]['name4']);
          $(el).find('.js-reg').text(arr_part[ind]['name5']);
        }
      }); // $(that).find('.js-partners-line-wrapper .js-partners-line-wrapper').slideUp();
      // $(that).find('.js-partners-line-wrapper .js-partner-patrners').slideDown();
      // $(that).find('.js-partners-line-wrapper').slideDown();
      // $('.js-partner-line').click(function (e) {
      //     e.preventDefault(); // e.stopPropagation();
      //     var el = $(this).parent();
      //     var cl = el.next();
      //     cl.slideDown();
      // });
    });
  });
});