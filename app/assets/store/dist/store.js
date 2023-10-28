"use client";
"use strict";
exports.__esModule = true;
exports.useGlobalCart = exports.GlobalContextProvider = void 0;
var react_1 = require("react");
var GlobalCartContext = react_1.createContext({
    cart: [],
    setCart: function () { return []; }
});
exports.GlobalContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), cart = _b[0], setCart = _b[1];
    return (React.createElement(GlobalCartContext.Provider, { value: { cart: cart, setCart: setCart } }, children));
};
exports.useGlobalCart = function () { return react_1.useContext(GlobalCartContext); };
