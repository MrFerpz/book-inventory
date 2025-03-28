const { Router } = require('express');
const controller = require('../controllers/controller')
const indexRouter = Router();

indexRouter.get("/", controller.homepageGet);
indexRouter.get("/books", controller.booksPageGet);
indexRouter.get("/books/add", controller.addBookPageGet);
indexRouter.post("/books/add", controller.addBookPost);
indexRouter.post("/books/delete/:id", controller.deleteBookPost);
indexRouter.get("/books/update/:id", controller.updateBookPageGet);
indexRouter.post("/books/update/:id", controller.updateBookPost);
indexRouter.get("/genres", controller.genrePageGet);
indexRouter.get("/genres/:genre", controller.individualGenrePageGet);
indexRouter.get("/search/*", controller.bookSearchGet);

module.exports = indexRouter