// Dependencies
// =============================================================
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const express = require('express');
const morgan = require('morgan');
const passport = require('./passport');
const flash = require('connect-flash');

// Dotenv: Set up
// =============================================================
require("dotenv").config();

// Express: App set up
// =============================================================
const app = express();

// Passport: Config
// =============================================================
require('./config/passport')(passport);

// Express body parser
// =============================================================
app.use(express.urlencoded({ extended: true }));

// Morgan: Middleware
// =============================================================
app.use(morgan('dev'));

// Session: Config
// =============================================================
const sessionConfig = require('./config/session');

// Session: App use
// =============================================================
app.use(
   session({sessionConfig})
);

// App: Static Assets
// =============================================================
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
};

// Passport: Middleware
// =============================================================
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
// =============================================================
app.use(flash());

// Global variables
// =============================================================
app.use(function (req, res, next) {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   next();
});

// Mongoose: Config
// =============================================================
const mongodb = require('./config/config').MONGODB_URI;

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
   .connect(mongodb, { useNewUrlParser: true, useFindAndModify: false })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

// Server: Requires Routes
// =============================================================
const routes = require("./routes");
app.use(routes);

// Server: Define Port
// =============================================================
const port = process.env.PORT || 3001;

// Server: Starts our Express Server
// =============================================================
app.listen(port, () => console.log(`Server started on port ${port}`)); 