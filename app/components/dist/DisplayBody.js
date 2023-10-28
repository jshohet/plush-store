"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var plush_1 = require("../assets/store/plush");
var image_1 = require("next/image");
var store_1 = require("../assets/store/store");
var DisplayBody = function () {
    var _a = react_1.useState(plush_1.Plushies), plushies = _a[0], setPlushies = _a[1];
    var _b = store_1.useGlobalCart(), cart = _b.cart, setCart = _b.setCart;
    // const handleImageClick = () =>{
    //   setCart(prevCart => [...prevCart, {
    //     name: plush
    //   }])
    var plushDisplay = plushies.map(function (plush) {
        return (react_1["default"].createElement("div", { key: plush.id },
            react_1["default"].createElement(image_1["default"], { src: plush.image, width: 200, height: 200, alt: plush.imageAlt, onClick: function () { return setCart(__spreadArrays(cart, [plush])); } })));
    });
    return react_1["default"].createElement("div", { className: "grid grid-cols-4 ml-10" }, plushDisplay);
};
exports["default"] = DisplayBody;
