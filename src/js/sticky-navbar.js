$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.sticky-top').addClass('navbar-sticky').css('top', '0px');
        // $('#navBar').addClass('navbar-color').css('background-color', 'white');
    } else {
        $('.sticky-top').removeClass('navbar-sticky').css('top', '-100px');
        // $('#navBar').removeClass('navbar-color').css('background-color', 'transparent');
    }
});