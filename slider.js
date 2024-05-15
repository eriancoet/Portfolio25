
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 3000
});

$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 800, // define breakpoint for screens smaller than 800px
            settings: {
                slidesToShow: 3, // show 3 slides at a time
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600, // define breakpoint for screens smaller than 600px
            settings: {
                slidesToShow: 2, // show 2 slides at a time
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // define breakpoint for screens smaller than 480px (usually phones)
            settings: {
                slidesToShow: 1, // show 1 slide at a time
                slidesToScroll: 1
            }
        }
    ]
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});

