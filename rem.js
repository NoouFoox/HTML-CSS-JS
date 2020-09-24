'use strict';
(function(doc, win) {
    var docEl = doc.documentElement,
        resiseEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function recalc() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resiseEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);