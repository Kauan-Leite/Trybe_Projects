"use strict";
// ./routes/books.routes.ts
exports.__esModule = true;
var express_1 = require("express");
var books_controller_1 = require("../controllers/books.controller");
var books_middleware_1 = require("../middlewares/books.middleware");
var router = (0, express_1.Router)();
var booksController = new books_controller_1["default"]();
var booksSlashId = '/books/:id';
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middleware_1["default"], booksController.create);
router.put(booksSlashId, books_middleware_1["default"], booksController.update);
router["delete"](booksSlashId, booksController.remove);
exports["default"] = router;
