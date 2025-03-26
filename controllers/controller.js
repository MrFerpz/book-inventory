const db = require('../db/queries');

function homepageGet(req, res) {
    res.render("index")
};

function addBookPageGet(req, res) {
    res.render("addBook");
}

async function booksPageGet(req, res) {
    const data = await db.showBooks();
    res.render("books", { books: data })
}

module.exports = {
    homepageGet,
    booksPageGet,
    addBookPageGet
}