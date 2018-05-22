const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const morgan = require("morgan");


const app = express();
const PORT = process.env.PORT || 3001;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/"));
} else {
  app.use(express.static("./client/public/"));
}


// start the server
app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:3001 or http://127.0.0.1:3001"
  );
});