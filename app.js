require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter')

// Set EJS as the view engine and show it the directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set public folder for static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// For parsing post submits
app.use(express.urlencoded({ extended: true }));

console.log("Listening on port 3000!")

// Upon loading direct to router
app.use("/", indexRouter);

app.listen(3000);




// require('dotenv').config();

// const express = require('express');
// const app = express();
// const path = require('path');
// const indexRouter = require('./routes/indexRouter')

// // for parsing the post submits
// app.use(express.urlencoded({ extended: true }));

// console.log("Listening on port 3000");

// // set views path
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// // set assets path (css)
// const assetsPath = path.join(__dirname, "assets");
// app.use(express.static(assetsPath));

// // Routes
// app.use("/", indexRouter);