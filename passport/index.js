// Dependencies
// =============================================================
const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const user = require('../models/user')

// Passport: Serialize User on login
// =============================================================
// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log(`serialized User called, \n user: \n ${user}`);
	done(null, { _id: user._id });
})

// user object attaches to the request as req.user
// =============================================================
passport.deserializeUser((id, done) => {
	user.findOne(
		{ _id: id },
		'username',
		(err, user) => {
            console.log(`deserialized User called, \n user: \n ${user}`);
			done(null, user)
		}
	)
})

// Passport: Use Local-Strategy
// =============================================================
passport.use(LocalStrategy);

module.exports = passport;