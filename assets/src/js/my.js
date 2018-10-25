
function toggle(btn,toShow){
    $(btn).on( "click", function() {
            console.log(1)
        if(!$(btn).hasClass('active')){
            $('.header_pop').hide();
            $(toShow).show();
            $('.header_rBtn').removeClass('active');
            $(btn).addClass('active');
            console.log(2)
        }else{
            $(toShow).hide();
            $(btn).removeClass('active');
            console.log(3)
        }
    });
}

toggle('.callB', '.callW');
toggle('.notifB','.notifW');
toggle('.profB', '.profW');
// $('.header_pop').hide();
// $('.profW').show();
// $('.header_pop').removeClass('active');
// $(btn).addClass('active');







// СВЯЖИСЬ С НАМИ
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
// Show Заказать звонок
// СВЯЖИСЬ С НАМИ
