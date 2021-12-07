$(window).scroll(function(){
    if($(this).scrollTop() > 700) {
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500);
})

let navHeight = - $('.header-sticky').outerHeight(true);
$('#about-link').on('click', function(e){
    e.preventDefault();
    $('.bar-checkbox').prop('checked', false);
    $('html, body').animate({scrollTop: navHeight + $('#network').offset().top}, 200);
})

$('#features-link').on('click', function(e){
    e.preventDefault();
    $('.bar-checkbox').prop('checked', false);
    $('html, body').animate({scrollTop: navHeight + $('#features').offset().top}, 200);
})

$('#pricing-link').on('click', function(e){
    e.preventDefault();
    $('.bar-checkbox').prop('checked', false);
    $('html, body').animate({scrollTop: navHeight + $('#plan').offset().top}, 200);
})

$('#testimonials').on('click', function(e){
    e.preventDefault();
    $('.bar-checkbox').prop('checked', false);
    $('html, body').animate({scrollTop: navHeight + $('#customers').offset().top}, 200);
})
