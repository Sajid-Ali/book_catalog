import express from "express";
import * as bookController from "../../../controller/book.controller";

const bookRoute = express.Router();

// @route GET api/books
// @description Get all books
// @access Public
bookRoute.get("/", bookController.list)
// @route GET api/books/:id
// @description Get single book by id
// @access Public
bookRoute.get("/:id", bookController.getById);
// @route GET api/books
// @description add/save book
// @access Public
bookRoute.post("/", bookController.create);
// @route GET api/books/:id
// @description Update book
// @access Public
bookRoute.put("/:id", bookController.updateById);
// @route GET api/books/:id
// @description Delete book by id
// @access Public
bookRoute.delete("/:id", bookController.deleteById);

export { bookRoute };
