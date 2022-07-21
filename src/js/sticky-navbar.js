$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.sticky-top').addClass('navbar-sticky').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('navbar-sticky').css('top', '-100px');
    }
});