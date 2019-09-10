// Dependencies
// =============================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Mongoose/MongoDB: Generates new Schema for Users
// =============================================================
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: false },
});

// Authentication: Methods for authenticating.
// =============================================================
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

// Authentication: Hooks for Password Storage
// =============================================================
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('No Password Given.')
		next()
	} else {
		console.log('pass in pre-Save');
		
		this.password = this.hashPassword(this.password)
		next()
	};
});

module.exports = user = mongoose.model('user', userSchema);