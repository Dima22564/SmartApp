"use strict";

$(document).ready(function () {
  $('#sign-up-step-1').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      password: {
        required: true,
        minlength: 6
      },
      re_password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      login: {
        required: "Error message",
        minlength: "Error message"
      },
      email: {
        required: "Error message",
        email: "Error message"
      },
      password: {
        required: "Error message",
        email: "Error message"
      },
      re_password: {
        required: "Error message",
        email: "Error message"
      }
    },
    submitHandler: function submitHandler(form) {
      $('.js-sign-up-step-1').fadeOut(function (e) {
        $('.js-sign-up-step-2').fadeIn();
      });
    }
  });
  $('#js-sign-in').validate({
    rules: {
      log_email: {
        required: true,
        minlength: 2
      },
      pass: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      log_email: {
        required: "Error message",
        minlength: "Error message"
      },
      pass: {
        required: "Error message",
        minlength: "Error message"
      }
    }
  });
  $('#js-repair-pass').validate({
    rules: {
      log_email: {
        required: true
      }
    },
    messages: {
      log_email: {
        required: "Error message"
      }
    }
  });
  $('#withdraw-form').validate({
    rules: {
      log_email: {
        required: true
      }
    },
    messages: {
      log_email: {
        required: "Error message"
      }
    },
    submitHandler: function submitHandler(form) {
      if ($('.cabinet-withdraw .js-pay .circle').hasClass('checked')) {
        $('#withdraw-form .btn-withdraw').submit();
      } else {
        $('.js-withdraw-popup').fadeIn();
      }
    }
  });
  $('#sign-up-step-2').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "Error message",
        minlength: "Error message"
      },
      lastName: {
        required: "Error message",
        email: "Error message"
      },
      tel_number: {
        required: "Error message",
        email: "Error message"
      }
    }
  });
  $('#personal-data').validate({
    rules: {
      email: {
        required: true,
        minlength: 2
      },
      name: {
        required: true,
        minlength: 2
      },
      login: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      number: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Error message",
        minlength: "Error message"
      },
      name: {
        required: "Error message",
        email: "Error message"
      },
      login: {
        required: "Error message",
        email: "Error message"
      },
      lastName: {
        required: "Error message",
        email: "Error message"
      },
      number: {
        required: "Error message"
      }
    }
  });
  $('#change-password').validate({
    rules: {
      old_pass: {
        required: true
      },
      new_pass: {
        required: true,
        minlength: 6
      },
      re_new_pass: {
        required: true
      }
    },
    messages: {
      old_pass: {
        required: "Error message"
      },
      new_pass: {
        required: "Error message",
        email: "Error message"
      },
      re_new_pass: {
        required: "Error message",
        email: "Error message"
      }
    }
  });
  jQuery(function ($) {
    $.mask.definitions['m'] = '[A-Za-zА-Яа-я0-9]';
    $.mask.definitions['s'] = '[.-_]';
    $.mask.definitions['v'] = '[A-Za-zА-Яа-я0-9@._-]';
    $.mask.definitions['l'] = '[A-Za-zА]';
    $.mask.definitions['n'] = '[0-9+]';
    $('#tel-number').mask('9999999999999999999', {
      placeholder: "",
      autoclear: false
    });
    $('#login').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#email').mask('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', {
      placeholder: "",
      autoclear: false
    });
    $('#log-email').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#re-pass').mask('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', {
      placeholder: "",
      autoclear: false
    });
    $('#name').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#partner-name').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#name-1').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#lastName').mask('llllllllllllllllllllllllllllllllllllllll', {
      placeholder: "",
      autoclear: false
    });
    $('#number').mask('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', {
      placeholder: "",
      autoclear: false
    });
    $('#summ').mask('99999999999999999999999999999999999', {
      placeholder: "",
      autoclear: false
    });
  });
});