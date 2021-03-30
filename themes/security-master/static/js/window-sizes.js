(function() {
    window.sizes = function() {
        var win = window;
        var doc = document;
        var docElem = doc.documentElement;
        var body = doc.getElementsByTagName('body')[0];
        var widnowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth;
        var widnowHeight = docElem.clientHeight;
        var params = {
            width: widnowWidth,
            height: widnowHeight
        }
        return params;
    }
})();


