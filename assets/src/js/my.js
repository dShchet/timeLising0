// <--HEADER
function toggle(btn,toShow){
    $(btn).on( "click", function() {
        if(!$(btn).hasClass('active')){
            $('.header_pop').hide();
            $('.header_shadow').show();
            $(toShow).show();
            $('.header_rBtn').removeClass('active');
            $(btn).addClass('active');
        }else{
            $('.header_shadow').hide();
            $(toShow).hide();
            $(btn).removeClass('active');
        }
    });
}
$('.header_shadow').click(function(){
    $('.header_rBtn').removeClass('active');
    $('.header_pop').hide();
    $('.header_shadow').hide();
});
toggle('.callB', '.callW');
toggle('.notifB','.notifW');
toggle('.profB', '.profW');

// <--СВЯЖИСЬ С НАМИ
$('#header_callBt-call').on( "click", function() {
    $('.header_callForm_2').hide();
    $('.header_callForm_1').show();
    $('#header_callBt-msg').removeClass('active');
    $('#header_callBt-call').addClass('active');
});
$('#header_callBt-msg').on( "click", function() {
    $('.header_callForm_1').hide();
    $('.header_callForm_2').show();
    $('#header_callBt-call').removeClass('active');
    $('#header_callBt-msg').addClass('active');
});
// Show Заказать звонок
$('.header_callForm_2').hide();
$('.header_callForm_1').show();
$('#header_callBt-call').addClass('active');
// Show Заказать звонок-->
// СВЯЖИСЬ С НАМИ
// HEADER-->


// <--TEMP для отладки форм
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
// TEMP для отладки форм-->