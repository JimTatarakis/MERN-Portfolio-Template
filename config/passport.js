const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load models
const db = require('../models');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'userName' }, (userName, password, done) => {
      // Match user
      db.user.findOne({
        userName: userName
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That userName is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.user.findById(id, function(err, user) {
      done(err, user);
    });
  });
};