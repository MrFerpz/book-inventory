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

async function addBookPost(req, res) {
    const title = req.body.title;
    const author = req.body.author;
    const release_date = req.body.release_date;
    const genre = req.body.genre;
    await db.addBook(title, author, release_date, genre);
    console.log("Book added successfully.");
    res.redirect("/books");
}

async function deleteBookPost(req, res) {
    const id = req.params.id;
    await db.deleteBookById(id);
    console.log("Book deleted successfully.");
    res.redirect("back");
}

async function updateBookPageGet(req, res) {
    const bookID = req.params.id;
    const book = await db.findBookById(bookID);
    res.render("updateBook", {book: book[0]})
}

async function updateBookPost(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    const release_date = req.body.release_date;
    const genre = req.body.genre;
    console.log([id, title, author, release_date, genre]);
    await db.updateBook(id, title, author, release_date, genre);
    res.redirect("/books");
}

function categoryPageGet(req, res) {
    res.render("categories")
}

module.exports = {
    homepageGet,
    booksPageGet,
    addBookPageGet,
    addBookPost,
    deleteBookPost,
    updateBookPageGet,
    updateBookPost,
    categoryPageGet
}