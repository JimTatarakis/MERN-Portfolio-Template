// Dependencies
// =============================================================
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const dbConnection = require('./database/database');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const passport = require('./passport');

// Express: App set up
// =============================================================
const app = express();

// Dotenv: Set up
// =============================================================
require("dotenv").config();

// Express body parser
// =============================================================
app.use(express.urlencoded({ extended: true }));

// Morgan: Middleware
// =============================================================
app.use(morgan('dev'));

// Passport: Config
// =============================================================
require('./config/passport')(passport);

// Session: Config
// =============================================================
const sessionConfig = require('./config/session');

// Session: App use
// =============================================================
app.use(
   session({sessionConfig})
);

// Passport: Middleware
// =============================================================
app.use(passport.initialize());
app.use(passport.session());

// Server: Requires Routes
// =============================================================
const routes = require("./routes");
app.use(routes);

// App: Static Assets for Production
// =============================================================
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
};

// Server: Define Port
// =============================================================
const port = process.env.PORT || 3001;

// Server: Starts our Express Server
// =============================================================
app.listen(port, () => console.log(`Server started on port ${port}`)); 