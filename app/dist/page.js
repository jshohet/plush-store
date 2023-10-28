"use strict";
exports.__esModule = true;
var DisplayBody_1 = require("./components/DisplayBody");
var Header_1 = require("./components/Header");
var react_1 = require("react");
function Home() {
    return (react_1["default"].createElement("main", { className: "" },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(DisplayBody_1["default"], null)));
}
exports["default"] = Home;
