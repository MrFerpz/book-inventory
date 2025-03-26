require('dotenv').config();
const pool = require('./pool');

// books: id, title, author, release_date, genre

// Table generation functions
// async function generateTable() {
//     await pool.query("CREATE TABLE IF NOT EXISTS books (id int NOT NULL PRIMARY KEY, title VARCHAR (255), author VARCHAR (255), release_date INT, genre VARCHAR (255));");
// }

// async function populateTableTest() {
//     await pool.query("INSERT INTO books VALUES (1, 'The Girl With The Dragon Tattoo', 'Stieg Larsson', 2005, 'Thriller')");
//     console.log("book added successfully");
// }

async function showBooks() {
    const response = await pool.query("SELECT * FROM books;");
    console.log(response.rows);
    return response.rows;
}

// async function cleanTable() {
//     await pool.query("DELETE FROM books WHERE id > 1");
//     console.log("done");
// }

// async function updateID() {
//     await pool.query("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books), true);")
// }

async function addBook(title, author, release_date, genre) {
    await pool.query("INSERT INTO books VALUES ($1, $2, $3, $4)", [title, author, release_date, genre])
}

async function deleteBookById(bookid) {
    await pool.query("DELETE FROM books WHERE id = $1", [bookid]);
}

async function findBookById(bookID) {
    const response = await pool.query("SELECT * FROM books WHERE id = $1", [bookID]);
    return response.rows;
}

async function updateBook(id, title, author, release_date, genre) {
    await pool.query("UPDATE books SET title = $2, author = $3, release_date = $4, genre = $5 WHERE id = $1", [id, title, author, release_date, genre]);
}

async function genreFilter(genre) {
    const response = await pool.query("SELECT * FROM books WHERE LOWER(genre) = LOWER($1)", [genre]);
    console.log(response.rows);
    if (response.rows[1] === undefined) {
        return null
    }
    return response.rows;
}

module.exports = {
    showBooks, 
    addBook,
    deleteBookById,
    findBookById,
    updateBook,
    genreFilter
}

showBooks();