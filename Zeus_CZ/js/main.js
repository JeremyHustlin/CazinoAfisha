"use strict";
function $$(t, e, o) {
    var n = (e = "function" != typeof e ? e || document : ((o = e), document)).querySelectorAll(t),
        n = Array.prototype.slice.call(e.querySelectorAll(t));
    return (
        "function" == typeof o &&
            n.forEach(function (t, e, n) {
                o(t, e, n);
            }),
        n
    );
}
function h_el(t) {
    return !!(Array.isArray(t) && 0 < t.length);
}
function debugging() {
    [].forEach.call($$("*"), function (t) {
        t.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
}
Element.prototype.closest ||
    (Element.prototype.closest = function (t) {
        for (var e = this; e; ) {
            if (e.matches(t)) return e;
            e = e.parentElement;
        }
        return null;
    }),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
    Object.assign ||
        Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t) {
                if (null == t) throw new TypeError("Cannot convert first argument to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    if (null != o)
                        for (var r = Object.keys(Object(o)), a = 0, i = r.length; a < i; a++) {
                            var c = r[a],
                                l = Object.getOwnPropertyDescriptor(o, c);
                            void 0 !== l && l.enumerable && (e[c] = o[c]);
                        }
                }
                return e;
            },
        }),
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
var parallax = $$(".parallax");
if (!("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints)) for (var index = 0; index < parallax.length; index++) new Parallax(parallax[index], { limitY: 0 });