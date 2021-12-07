$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length ==0) {
        $(this).fadeOut()
    }
})
$('.modal-close').on('click', function(){
        $(this).parents('.modal-overlay').fadeOut()
})
$('#start-btn').on('click', function(){
    $('.modal-overlay').fadeIn()
})