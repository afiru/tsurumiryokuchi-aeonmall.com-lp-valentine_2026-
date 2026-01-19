(window.onload = function () {
    $('.liSpF').addClass('opacity_0_fade_in');
    $('.liSpF').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

})();