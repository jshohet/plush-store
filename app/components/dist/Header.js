"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Cart_1 = require("./Cart");
var Header = function () {
    return (react_1["default"].createElement("div", { className: "flex items-center" },
        react_1["default"].createElement("h1", { className: "font-bold text-3xl mx-auto" }, "Chew Plush \u2122"),
        react_1["default"].createElement(Cart_1["default"], null)));
};
exports["default"] = Header;
