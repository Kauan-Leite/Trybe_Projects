"use strict";
// ./middlewares/books.middleware.ts
exports.__esModule = true;
var statusCodes_1 = require("./statusCodes");
var properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (var i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(book) {
    var entries = Object.entries(book);
    for (var i = 0; i < entries.length; i += 1) {
        var _a = entries[i], property = _a[0], value = _a[1];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationBook(req, res, next) {
    var _a;
    var book = req.body;
    var _b = validateProperties(book), valid = _b[0], property = _b[1];
    if (!valid) {
        return res.status(statusCodes_1["default"].BAD_REQUEST).send("O campo ".concat(property, " \u00E9 obrigat\u00F3rio."));
    }
    _a = validateValues(book), valid = _a[0], property = _a[1];
    if (!valid) {
        return res.status(statusCodes_1["default"].BAD_REQUEST).send("O campo ".concat(property, " n\u00E3o pode ser nulo ou vazio."));
    }
    next();
}
exports["default"] = validationBook;
