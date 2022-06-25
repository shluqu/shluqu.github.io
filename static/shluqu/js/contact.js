(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(document).on('submit', '#contact_form_submit', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var lastname = $('#lastname').val();
            var message = $('#message').val();
            var phone = $('#phone').val();

            if (name && email && message && lastname) {
                $.ajax({
                    type: "POST",
                    url: 'contact.php',
                    data: {
                        'name': name,
                        'email': email,
                        'lastname': lastname,
                        'message': message,
                        'phone': phone,
                    },
                    success: function (data) {
                        $('#contact_form_submit').children('.email-success').remove();
                        $('#contact_form_submit').prepend('<span class="alert alert-success email-success">' + data + '</span>');
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                        $('#lastname').val('');
                        $('#phone').val('');
                        // $('#map').height('576px');
                        $('.email-success').fadeOut(3000);
                    },
                    error: function (res) {

                    }
                });
            } else {
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">All Fields are Required.</span>');
                // $('#map').height('576px');
                $('.email-success').fadeOut(3000);
            }

        });
    })

}(jQuery));