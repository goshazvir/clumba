head.ready(function() {

  $('.js-payment-type li').on('click', function() {
    if (!$(this).hasClass('is-active')) {
      $('.popup-payment-item').removeClass('is-active');
      $(this).addClass('is-active');
    }

    if ($('.js-payment-sms').hasClass('is-active')) {
      $('.popup-summ').hide();
      $('.popup-sms-sum').show();
      $('.js-popup-commission-sms').show();
      $('.js-popup-commission-pay').hide();
      $('.popup-pay-descr').hide();
      $('.js-pay').addClass('is-sms');
      $('.js-sms-title').show();
      $('.js-pay-title').hide();
      $('.js-popup-pay-sms').show();
      $('.js-popup-pay').hide();
    } else {
        $('.popup-summ').show();
        $('.popup-sms-sum').hide();
        $('.js-popup-commission-pay').show();
        $('.js-popup-commission-sms').hide();
        $('.popup-pay-descr').show();
        $('.js-pay').removeClass('is-sms');
        $('.js-sms-title').hide();
        $('.js-pay-title').show();
        $('.js-popup-pay-sms').hide();
        $('.js-popup-pay').show();
      }
  });

  $('.js-pay').on('click', function() {
    if ($(this).hasClass('is-sms')) {
      $('.js-sms-title').show();
      $('.popup-payment-sms').show();
    } else {
      $('.js-popup-in').hide();
      $('.js-popup-succes').fadeIn();
      $('.popup-payment-sms').hide();
    }
  });

  $('.js-sms-step2').on('click', function() {
    $('.popup-payment').hide();
    $('.popup-payment-sms').show();
    $('.js-popup-back-step').show();

    if ($(this).hasClass('is-sms-step2')) {
      $('.js-popup-in').hide();
      $('.js-popup-succes').fadeIn();
    } else {
      $(this).addClass('is-sms-step2');
      $(this).text('Готово');
    }
  });

  $('.js-popup-back-step').on('click', function() {
    $('.popup-payment').show();
    $('.popup-payment-sms').hide();
    $('.js-popup-back-step').hide();
    $('.js-sms-step2').removeClass('is-sms-step2');
    $('.js-sms-step2').text('Оплатить');
  });

  // popup close
  $('.js-popup-close').on('click', function() {
    $('.popup').fadeOut();
    $('.overlay').fadeOut();
  });

  // select
  function select() {
    var el = $('.js-select');
    var el_title = el.children("span");
    var item = el.find('li');
    var input = el.find(".js-select-input");
    var el_text = el.find(".js-select-text");
    var checkbox = el.find(".checkbox");
    var list = el.find('.js-select-drop');
    el_title.click(function(event){
      if ($(this).parent().hasClass('is-open')) {
        $(this).parent().removeClass('is-open');
      }
      else {
        el.removeClass('is-open');
        $(this).parent().addClass('is-open');
      };
      event.stopPropagation();
    });
    checkbox.click(function(event){
      event.stopPropagation();
    });
    item.bind("click",function(){
      $(this).addClass('is-selected').siblings().removeClass('is-selected');
      var text = $(this).text();
      var id = $(this).attr("data-id");
      $(this).parents(".js-select").find(".js-select-text").text(text);
      $(this).parents(".js-select").find(".js-select-input").val(id);
    });
  };
  select();

  $(document).click(function() {
    $('.js-select').removeClass('is-open');
  });

});
