// Dependencies
// =============================================================
const express = require('express');
const user = require('../models/user');
const passport = require('../passport');

module.exports = function (app) {

    // User: 'Post' / Create User
    app.post('/user', (req, res) => {
        console.log(`Test: User/Post Route here is the request \n ${req.body}`);
        const { username, password } = req.body
        // User: Validate / isUnique?
        user.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log(`Err: User/Post Validation \n ${err}`);
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            // User: isUnique = true; Create User
            else {
                const newUser = new user({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        });
    });

    // User: 'Post' / Login User
    app.post(
        '/user/login',
        function (req, res, next) {
            next()
        },
        passport.authenticate('local'),
        (req, res) => {
            console.log(`logged in as, \n ${req.user}`);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        }
    );

    // User: 'Post' / Logout User
    app.post('/user/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' });
        } else {
            res.send({ msg: 'no user to log out' });
        }
    });

    // User: 'Get' / Get User
    app.get('/user', (req, res, next) => {
        console.log(`test: user/get \n ${req.user}`);
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.sendStatus(400).send(new Error('user aint logged in sucka'))
        }
    });
};