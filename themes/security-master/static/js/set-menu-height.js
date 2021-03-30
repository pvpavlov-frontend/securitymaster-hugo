/* Fix for dropdown menu: if devices screen is too small, and we have a sticky header, there will be no way to scroll through the menu. Therefore, it need to calc max-height for menu and set overflow-y (the last thing we do with css). */
(function() {
    var isSupportSticky = window.SupportsCSS('position', 'sticky');
    if(isSupportSticky) {
        window.setMenuHeight = function() {
            var stickyHeader = document.querySelector('.header');
            stickyHeader.classList.add('sticky-header');
            var dropdownContainer = document.querySelector('.header__dropdown-container');
            dropdownContainer.style.maxHeight = window.sizes().height - stickyHeader.offsetHeight + 'px';
        }
        window.setMenuHeight();
    }
})();