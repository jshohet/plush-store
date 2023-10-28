"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Cart_1 = require("./Cart");
var link_1 = require("next/link");
var Header = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(link_1["default"], { href: "./item" }, "item page"),
        react_1["default"].createElement(Cart_1["default"], null)));
};
exports["default"] = Header;
