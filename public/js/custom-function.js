(function(){
    window.customFunction = {};
    document.getElementsByClassName = function(cl) {
        var retnode = [];
        var elem = this.getElementsByTagName('*');
        for (var i = 0; i < elem.length; i++) {
            if((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
        }
        return retnode;
    }; 
    
    window.customFunction.hasClass = function(elem, elemClass) {
        return !!elem.className.match(new RegExp('(\\s|^)'+ elemClass +'(\\s|$)'));
    };
    
    window.customFunction.addClass = function(elem, elemClass) {
        if (!window.customFunction.hasClass(elem,elemClass)) elem.className += " " + elemClass;
    };
    
    window.customFunction.removeClass = function(elem, elemClass) {
        if (window.customFunction.hasClass(elem, elemClass)) {
            var reg = new RegExp('(\\s|^)' + elemClass + '(\\s|$)');
            elem.className = elem.className.replace(reg,' ');
        }
    };

    window.customFunction.addEvent = function(evt, elem, func) {
        if (elem.addEventListener)  // W3C DOM
            elem.addEventListener(evt, func, false);
        else if (elem.attachEvent) { // IE DOM
            elem.attachEvent("on" + evt, func);
        }
        else { // No much to do
            elem["on" + evt] = func;
        }
    };
})();