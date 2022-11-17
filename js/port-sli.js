$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
});
$('.port').slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: false,
});
$('.center').slick({
   
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    arrows:false,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});