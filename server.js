const express = require("express");
const bodyParser = require("body-parser");
const oktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors')
const mongoose = require("mongoose");
const morgan = require("morgan");
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-845805.oktapreview.com/oauth2/default',
  assertClaims: {
    aud: 'api://default',
  }
});


function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if(!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then(jwt => {
      req.jwt = jwt;
      next();
    })
    .catch(err => {
      res.status(401).send(err.message);
    });
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/secure', authenticationRequired, (req,res) => {
  res.json(req.jwt);
});

app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

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