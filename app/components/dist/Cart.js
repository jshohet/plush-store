"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../assets/store/store");
var image_1 = require("next/image");
var Cart = function () {
    var _a = store_1.useGlobalCart(), cart = _a.cart, setCart = _a.setCart;
    var cartDisplay = cart.map(function (plush) {
        return (react_1["default"].createElement(image_1["default"], { key: plush.id, src: plush.image, width: 200, height: 200, alt: plush.imageAlt }));
    });
    return (react_1["default"].createElement("div", { className: "flex flex-row" },
        cartDisplay,
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null)));
};
exports["default"] = Cart;
