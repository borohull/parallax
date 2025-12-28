$('.parallax-container').on('scroll', function () {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $('.parallax-container').scrollTop();

    $('.hero-text').css({
        'top': (40 + (scrolled * 0.1)) + '%',
        'opacity': 1 - (scrolled / 400)
    });

    $('.layer-3').css('transform', 'translateY(' + (-scrolled * 0.05) + 'px)');
    $('.layer-2').css('transform', 'translateY(' + (-scrolled * 0.25) + 'px)');
    $('.layer-1').css('transform', 'translateY(' + (-scrolled * 0.6) + 'px)');

    $('.swatch-1').css('top', (800 - scrolled * 0.9) + 'px');
    $('.swatch-2').css('top', (1400 - scrolled * 0.7) + 'px');
    $('.swatch-3').css('top', (1800 - scrolled * 1.3) + 'px');
    $('.swatch-4').css('top', (2400 - scrolled * 1.0) + 'px');
}
