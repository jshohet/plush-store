"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../../assets/store/store");
var ItemForm = function () {
    var _a = store_1.useGlobalCart(), cart = _a.cart, setCart = _a.setCart;
    return (react_1["default"].createElement("div", null, "ItemForm"));
};
exports["default"] = ItemForm;
