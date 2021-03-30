(function() {
    window.SupportsCSS = function (property, value) {
        // Create an element.
        var element = document.createElement('span');
        // Checking if the browser supports this property.
        if (element.style[property] !== undefined) {
            element.style.cssText = property + ':' + value; // Adding a new property to the style of the element.
        } 
        else {
            return false; // If the browser does not support the property, then we return.
        }
        // If the browser supports the given value for the specified property, then the values will be equal.
        return element.style[property] === value;
    };
})();