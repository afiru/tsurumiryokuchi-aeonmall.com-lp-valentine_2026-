(window.onload = function () {
    $('.fv').addClass('opacity_0_fade_in');
    $('.fv').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

})();