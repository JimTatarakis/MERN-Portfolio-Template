const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose/MongoDB: Generates new Schema for Articles
const userSchema = new Schema({
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = users = mongoose.model('user', userSchema);