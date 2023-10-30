"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var plush_1 = require("../assets/store/plush");
var image_1 = require("next/image");
var store_1 = require("../assets/store/store");
var link_1 = require("next/link");
var DisplayBody = function () {
    var _a = react_1.useState(plush_1.Plushies), plushies = _a[0], setPlushies = _a[1];
    var _b = store_1.useGlobalCart(), cart = _b.cart, setCart = _b.setCart;
    // type Checkbox = {
    //   value: string;
    //   checkd: boolean;
    // };
    var _c = react_1.useState({
        sm: false,
        md: false,
        lg: false,
        "10.99": false,
        "15.99": false,
        "20.99": false
    }), checkbox = _c[0], setCheckbox = _c[1];
    var plushDisplay = plushies.map(function (plush) {
        return (react_1["default"].createElement(link_1["default"], { key: plush.id, href: "../item?key=" + plush.id },
            react_1["default"].createElement("div", { className: "flex", key: plush.id },
                react_1["default"].createElement(image_1["default"], { src: plush.image, width: 180, height: 180, alt: plush.imageAlt, className: "rounded-xl mb-4 mr-2 aspect-square" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "font-bold flex-wrap" }, plush.name),
                    react_1["default"].createElement("h3", null,
                        "From ",
                        plush.sales.prices[0],
                        "*")))));
    });
    function filterHandler(e) {
        e.preventDefault();
        if (Object.values(checkbox).every(function (x) { return x === false; })) {
            setPlushies(plush_1.Plushies);
            return;
        }
        else {
            var filtered = plush_1.Plushies.filter(function (plush) {
                for (var index = 0; index < Object.keys(checkbox).length; index++) {
                    if (Object.values(checkbox)[index] === true) {
                        return (plush.sales.prices.includes(Object.keys(checkbox)[index])
                            ||
                                plush.sales.sizes.includes(Object.keys(checkbox)[index]));
                    }
                }
            });
            setPlushies(filtered);
        }
    }
    ;
    var handleChecked = function (e) {
        var _a = e.target, checked = _a.checked, name = _a.name;
        setCheckbox(function (prevCheckbox) {
            var _a;
            return __assign(__assign({}, prevCheckbox), (_a = {}, _a[name] = checked, _a));
        });
    };
    return (react_1["default"].createElement("div", { className: "flex" },
        react_1["default"].createElement("section", { className: "flex flex-col p-5 shadow-xl bg-zinc-300 rounded-xl h-fit ml-4" },
            react_1["default"].createElement("h2", { className: "text-xl font-bold mr-10 whitespace-nowrap mb-4" },
                "Filter by:",
                " "),
            react_1["default"].createElement("section", null,
                react_1["default"].createElement("div", { className: "mb-1" },
                    react_1["default"].createElement("h3", { className: "italic mb-2" }, "Size: "),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "sizes", className: "mr-1" }, "Small"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "sizes", value: "sm", name: "sm", onChange: function (e) { return handleChecked(e); } })),
                    react_1["default"].createElement("div", { className: "mb-1" },
                        react_1["default"].createElement("label", { htmlFor: "sizes", className: "mr-1" }, "Medium"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "sizes", value: "md", name: "md", onChange: function (e) { return handleChecked(e); } })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "sizes", className: "mr-1" }, "Large"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "sizes", value: "lg", name: "lg", onChange: function (e) { return handleChecked(e); } }))),
                react_1["default"].createElement("div", { className: "mt-10" },
                    react_1["default"].createElement("h3", { className: "mb-2 italic" }, "Price: "),
                    react_1["default"].createElement("div", { className: "mb-1" },
                        react_1["default"].createElement("label", { htmlFor: "smallPrice", className: "mr-1" }, "$10.99"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "smallPrice", value: "$10.99", name: "10.99", onChange: function (e) { return handleChecked(e); } })),
                    react_1["default"].createElement("div", { className: "mb-1" },
                        react_1["default"].createElement("label", { htmlFor: "mdPrice", className: "mr-1" }, "$15.99"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "mdPrice", value: "$15.99", name: "15.99", onChange: function (e) { return handleChecked(e); } })),
                    react_1["default"].createElement("div", { className: "mb-1" },
                        react_1["default"].createElement("label", { htmlFor: "lgPrice", className: "mr-1" }, "$20.99"),
                        react_1["default"].createElement("input", { type: "checkbox", id: "lgPrice", value: "$20.99", name: "20.99", onChange: function (e) { return handleChecked(e); } }))),
                react_1["default"].createElement("button", { onClick: filterHandler, type: "submit", className: "border-solid border-slate-400 p-2 rounded-xl border-2 mt-4 justify-center" }, "Apply filters"))),
        react_1["default"].createElement("section", { className: "grid grid-cols-4 ml-10  w-3/4" }, plushDisplay)));
};
exports["default"] = DisplayBody;
