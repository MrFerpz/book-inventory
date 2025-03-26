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

module.exports = {
    showBooks, 
    addBook
}
