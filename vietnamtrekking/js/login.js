$(document).ready(function() {
    $('#login-trigger').click(function() {
        $('#login-content').slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('span').html('&#x25b2;');
        } else {
            $(this).find('span').html('▼');
        }
        $('#signup-content').slideUp();
    })

    $('#signup-trigger').click(function() {
        $('#login-content').slideUp();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('span').html('&#x25b2;');
        } else {
            $(this).find('span').html('▼');
        }

        $('#signup-content').slideToggle();
    });
});