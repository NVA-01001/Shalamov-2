$(document).ready(function () {
  $('.btn, .packages-btn').on('click', function () {
    $('.popup').toggleClass('popup__active');
    $('body').toggleClass('scrol__none');
    $('.popup__container').animate({
      opacity: '1',
    }, 400);
  });

  $('.popup').on('click', function (event) {
    if (event.target == this) {
      $(this).toggleClass('popup__active');
      $('body').toggleClass('scrol__none');
      $('.popup__content').fadeIn();
      $('.thanks-popup').fadeOut();
    }

  });

  $('.popup__close').on('click', function () {
    $('.popup').toggleClass('popup__active');
    $('body').toggleClass('scrol__none');
    $('.popup__content').fadeIn();
    $('.thanks-popup').fadeOut();
  });
});

$(function () {
  $(document).click((e) => {
    const {
      target
    } = e;
    if (target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function (selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено!');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      $('.popup__content').fadeOut(0);
      $('.thanks-popup').fadeIn(400);
      form.reset();
    }
  });
}

validateForms('.popup__form', {
  email: {
    required: true,
    email: true,
  },
  tel: {
    required: true
  },
}, '.thanks-popup', 'send goal');

validateForms('.checkbox', {
  email: {
    required: true,
    email: true,
  },
  tel: {
    required: true
  },
}, '.thanks-popup', 'send goal');

validateForms('.form', {
  name: {
    required: true,
    email: true,
  },
  tel: {
    required: true
  },
}, '.thanks-popup', 'send goal');

new JustValidate('.popup__form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30
    },

    tel: {
      required: true,
    },
  },

  messages: {
    name: {
      required: 'Укажите ваше имя',
      minLength: 'Поле должно содержать минимум 2 символа'
    },
    tel: {
      required: 'Укажите ваш телефон'
    }
  }

});

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30
    },
    tel: {
      required: true
    },
    checkbox: {
      required: true
    },
    
  },

  messages: {
    name: {
      required: 'Укажите ваше имя',
      minLength: 'Поле должно содержать минимум 2 символа'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
    checkbox: {
      required: 'Согласитесь с условиями договора оферты и политики конфиденциальности'
    },
  }
});

// .addField('.checkbox', [
//   {
//     rule: 'required',
//     errorMessage: 'Согласитесь с условиями договора оферты и политики конфиденциальности'
//   }
// ])
// ;