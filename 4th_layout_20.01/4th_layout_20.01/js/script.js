$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(function() {
   
   $('.rev_slider').slick({
       arrows: false,
       dots: true
   })
})