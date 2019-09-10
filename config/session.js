const dbConnection = require('../database/database');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = {
    secret: process.env.SECRET, // Secret: the String used to make the hash that is generated secure.
    store: new MongoStore ({ mongooseConnection: dbConnection }),
    resave: true, // required for set up.
    saveUninitialized: true // required for set up.
}