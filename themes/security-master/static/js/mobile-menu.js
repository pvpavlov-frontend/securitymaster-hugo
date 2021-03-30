// In this code, I use my functions instead of the default ones ("getElementsByClassName", "hasClass", "addClass", "removeClass", "addEvent"), because older versions of browsers do not support them.
// But, perhaps, this does not make sense, because media queries start working from the IE 9, and I could use default "getElementsByClassName" and "addEvent".
(function() {
  var mainMenuContainer = document.getElementsByClassName('header__dropdown-container')[0];
  var burgerButtonContainer = document.getElementsByClassName('header__dropdown-burger')[0];
    
  // Create a menu button, add classes, attributes, inner invisible text and add it to the page.
  burgerButtonContainer.innerHTML = '<button class="burger__button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="26" height="2" fill="#FFC600"/><rect y="7" width="26" height="2" fill="#FFC600"/><rect y="14" width="26" height="2" fill="#FFC600"/></svg></button>';
  
  function onBurgerClick() {
    if(burgerButton.getAttribute('aria-expanded') === 'true') { // If menu is already opened (check 'aria-expanded' attribute).
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.setAttribute('aria-label', 'Open menu');
      window.customFunction.removeClass(mainMenuContainer, 'header__dropdown-container--opened');
    } else {
      burgerButton.setAttribute('aria-expanded', 'true');
      burgerButton.setAttribute('aria-label', 'Close menu');
      window.customFunction.addClass(mainMenuContainer, 'header__dropdown-container--opened');
    }
  };
  var burgerButton = document.getElementsByClassName('burger__button')[0];
  window.customFunction.addEvent('click', burgerButton, onBurgerClick);
})();


