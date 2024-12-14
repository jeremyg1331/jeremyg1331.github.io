$(document).ready(function() {
    $('#clickMeButton').click(function() {
        $('#message').text('Button was clicked!');
    });

    // Show the button when the user scrolls down 100px from the top of the document
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTopButton').fadeIn();
        } else {
            $('#scrollToTopButton').fadeOut();
        }
    });

    // Scroll to the top and shift focus to the main heading when the button is clicked
    $('#scrollToTopButton').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, function() {
            $('#main-heading').focus();
        });
    });
});