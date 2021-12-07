$('#modal-button').on('click', function(e){
    e.preventDefault();
    
    let name = $('#modal-name').val().trim(),
        email = $('#modal-email').val().trim(),
        number = $('#modal-number').val().trim();
       
        if (name == "") {
            return $('#error-name').text('Enter your name').addClass('modal-error')
        } else if (email == "") {
            return $('#error-email').text('Enter your email').addClass('modal-error')
        } else if (number == "") {
            return $('#error-number').text('Enter your number').addClass('modal-error')
        }

        $.ajax({
            url: '../ajax/telegram.php',
            type: 'POST',
            cache: false,
            data: {'name': name, 'email': email},
            success: function() {
                $('#modal-name').val('');
                $('#modal-email').val('');
                $('#modal-number').val('');
                $('.additional-modal').addClass('active')

            },
            timeout: 3000
        })
    
})