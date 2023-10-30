"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../assets/store/store");
var image_1 = require("next/image");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var link_1 = require("next/link");
var Cart = function () {
    var _a = store_1.useGlobalCart(), cart = _a.cart, setCart = _a.setCart;
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var onCartClick = function (e) {
        setShow(function (prevShow) { return !prevShow; });
    };
    var deleteCartItem = function (id) {
        setCart(function (prevItemData) {
            return prevItemData.filter(function (item) {
                return item.id !== id;
            });
        });
    };
    var cartDisplay = cart.map(function (plush) {
        return (react_1["default"].createElement("div", { key: plush.id, className: "flex flex-row" },
            react_1["default"].createElement(image_1["default"], { src: plush.image, width: 50, height: 50, alt: plush.imageAlt, className: "rounded-3xl p-1" }),
            react_1["default"].createElement("div", { className: "flex flex-row items-center rounded-lg" },
                react_1["default"].createElement("p", { className: "font-semibold ml-2" }, plush.name),
                react_1["default"].createElement("p", { className: "ml-6" }, (plush.qty = 0)),
                react_1["default"].createElement("button", { className: "mx-10", onClick: function () {
                        if (deleteCartItem) {
                            deleteCartItem(plush.id);
                        }
                    } },
                    react_1["default"].createElement(fa_1.FaRegTrashAlt, { size: 20 })))));
    });
    return (react_1["default"].createElement("div", { className: "flex flex-col h-36 z-50 " },
        react_1["default"].createElement(bs_1.BsCart4, { size: 30, onClick: onCartClick, className: "cursor-pointer my-auto mr-2" }),
        show && (react_1["default"].createElement("div", { className: "absolute top-24 right-2 bg-lime-100 rounded-2xl max-h-52 overflow-y-auto" },
            react_1["default"].createElement("div", null, cartDisplay),
            react_1["default"].createElement(link_1["default"], { href: "../checkout", className: "flex border-2 border-solid border-black p-2 rounded-xl my-2 mx-auto w-44 justify-center hover:bg-green-200" }, "Go to Checkout")))));
};
exports["default"] = Cart;
