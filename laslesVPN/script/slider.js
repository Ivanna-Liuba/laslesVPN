$('.slider').slick({
    dots: true,
    appendDots: $('.slider-dots'),
    appendArrows: $('.slider-arrows'),
    slidesToShow: 2,
    slidesToSwipe: 1,
    infinite: false,
    speed: 700,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToSwipe: 1, 
            }
        }
    ],
})