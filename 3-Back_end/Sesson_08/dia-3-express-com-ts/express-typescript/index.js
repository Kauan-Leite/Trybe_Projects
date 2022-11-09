"use strict";
// ./index.ts
exports.__esModule = true;
var express_1 = require("express");
var statusCodes_1 = require("./statusCodes");
require("express-async-errors");
var books_routes_1 = require("./routes/books.routes");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var PORT = 8000;
app.get('/', function (req, res) {
    res.status(statusCodes_1["default"].OK).send('Express + TypeScript');
});
app.use(books_routes_1["default"]); // coloque essa linha antes do middleware de erro!
app.use(function (err, req, res, next) {
    var _a = err, name = _a.name, message = _a.message, details = _a.details;
    console.log("name: ".concat(name));
    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message: message });
            break;
        case 'ConflictError':
            res.status(409).json({ message: message });
            break;
        default:
            console.error(err);
            res.sendStatus(500);
    }
    next();
});
app.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
