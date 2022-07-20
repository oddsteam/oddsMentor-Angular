$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        // $('#navBar').addClass('navbar-color').css('background-color', 'white');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        // $('#navBar').removeClass('navbar-color').css('background-color', 'transparent');
    }
});