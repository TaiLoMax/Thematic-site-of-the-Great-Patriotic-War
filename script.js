$(function () {
    let nav = $('.nav');
    let navHeight = nav.height() + 30;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            nav.addClass('nav_fixed');
            $('body').css({
                'paddingTop': navHeight + 'px'
            });
        } else {
            nav.removeClass('nav_fixed');
            $('body').css({
                'paddingTop': 0 
            })
        }
    });
});


//jquery
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

