const user = require('../models/user');
const passport = require('../passport');

module.exports = function(app) {

    app.post('/user', (req, res) => {
    
        const { username, password } = req.body
        // ADD VALIDATION
        user.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('user.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
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
        })
    })
    
    app.post(
        '/user/login',
        function (req, res, next) {
            next()
        },
        passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        }
    )
    
    app.get('/user', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.sendStatus(400).send(new Error('user aint logged in sucka'))
            // res.json({ user: null })
        }
    })
    
    app.post('/user/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })

}
