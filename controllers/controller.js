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

module.exports = {
    homepageGet,
    booksPageGet,
    addBookPageGet,
    addBookPost
}