//Connect to Mongo database
// =============================================================
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Dependencies
// =============================================================
// Dotenv: Set up
// =============================================================
require("dotenv").config();

// Mongoose: Config
// =============================================================
const mongodb = require('./config/config').MONGODB_URI;

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
   .connect(mongodb, { useNewUrlParser: true, useFindAndModify: false })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));


module.exports = mongoose.connection;