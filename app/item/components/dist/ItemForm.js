"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../../assets/store/store");
var navigation_1 = require("next/navigation");
var plush_1 = require("@/app/assets/store/plush");
var ItemForm = function () {
    var _a = store_1.useGlobalCart(), cart = _a.cart, setCart = _a.setCart;
    var searchParams = navigation_1.useSearchParams();
    react_1.useEffect(function () {
        var fetchKey = function () {
            return searchParams.get("key");
        };
        var currentKey = fetchKey();
    }, [searchParams]);
    var currentItem = plush_1.Plushies["return"](react_1["default"].createElement("div", null, "ItemForm"));
};
exports["default"] = ItemForm;
