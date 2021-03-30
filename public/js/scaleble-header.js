(function() {
    var isSupportSticky = window.SupportsCSS('position', 'sticky');

    if(isSupportSticky) {
        var scalebleHeader = document.querySelector('.header');
        scalebleHeader.classList.add('scaleble-header');
        var logo = scalebleHeader.querySelector('.header__logo');
        var headerHeight = scalebleHeader.offsetHeight;

        window.scalebeHeader = function(scrollLimit) {
            var windowWidth = window.sizes().width;
            var logoWidth;
            var logoHeight;
    
            if(windowWidth > 959) {
                logoWidth = 315;
                logoHeight = 76;
            } else {
                logoWidth = 190;
                logoHeight = 52;
            }

            var scrollY = window.scrollY;
            
            if(scrollY < scrollLimit) {
                logo.style.width = logoWidth - (logoWidth*0.33)*(scrollY/scrollLimit) + 'px';
                logo.style.height = logoHeight - (logoHeight*0.33)*(scrollY/scrollLimit) + 'px';
                scalebleHeader.classList.add('scaleble-header--shadow');
                if(scrollY === 0) {
                    scalebleHeader.classList.remove('scaleble-header--shadow');
                } else {
                    scalebleHeader.classList.add('scaleble-header--scrolled');
                }
            }
        
            if(scrollY >= scrollLimit && !scalebleHeader.classList.contains('scaleble-header--scrolled')) {
                logo.style.width = logoWidth - (logoWidth*0.33) + 'px';
                logo.style.height = logoHeight - (logoHeight*0.33) + 'px';
                scalebleHeader.classList.add('scaleble-header--shadow');
                scalebleHeader.classList.add('scaleble-header--scrolled');
            }
        }
        window.scalebeHeader(headerHeight);
    }
})();

