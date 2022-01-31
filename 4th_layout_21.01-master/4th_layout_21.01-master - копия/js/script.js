$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,


            }
        }
    ]

    });
});