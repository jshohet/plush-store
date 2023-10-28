"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var ItemForm_1 = require("./components/ItemForm");
var page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(ItemForm_1["default"], null)));
};
exports["default"] = page;
