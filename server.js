const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require('./config')

const app = express();
const PORT = process.env.PORT || 3001;
require("./models").connect(process.env.MONGODB_URI || config.dbUri);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication and passport utilization

app.use(passport.initialize());

const localSignupStrategy = require("./authentication/passport/local-signup");
const localLoginStrategy = require("./authentication/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

const authCheckMiddleware = require("./authentication/middleware/auth-check");
app.use("/api", authCheckMiddleware);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/"));
} else {
  app.use(express.static("./client/public/"));
}

const user = require('./routes/user.js')
app.use(user)

mongoose.set('debug', true);


// start the server
app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:3001 or http://127.0.0.1:3001"
  );
});