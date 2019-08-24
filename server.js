// Dependencies
// =============================================================
const express = require('express');
const mongoose = require("mongoose");
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('./passport');

// Sets up the Express App
// =============================================================
const app = express();

// Middleware
// =============================================================
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express App - Static Assets
// =============================================================
 if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/build"));
 }

// DB: Config
// =============================================================
require("dotenv").config();
const mongodb = require('./config/config').MONGODB_URI;

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
.connect(mongodb,{ useNewUrlParser: true, useFindAndModify: false })
.then(()=> console.log('MongoDB connected...'))
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
app.listen(port, ()=> console.log(`Server started on port ${port}`)); 