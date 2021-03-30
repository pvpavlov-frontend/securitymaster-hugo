(function() {
    var headerHeight = document.querySelector('.header').offsetHeight;

    window.addEventListener('scroll', function() {
        window.scalebeHeader(headerHeight);
        window.setMenuHeight();
    });
    
    window.addEventListener('resize', function() {
        window.scalebeHeader(headerHeight);
        window.setMenuHeight();
    });
})();

