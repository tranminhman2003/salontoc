$(document).ready(function () {
    $('#order-hair').hide();
    $('#img-2').show();
   $('.bt-od').click(function () {
       $('#order-hair').slideToggle(200);
       $('#img-2').slideToggle();
   });
});