const { Router } = require('express');
const controller = require('../controllers/controller')
const indexRouter = Router();

indexRouter.get("/", controller.homepageGet);
indexRouter.get("/books", controller.booksPageGet);
indexRouter.get("/books/add", controller.addBookPageGet);

module.exports = indexRouter