
const express   = require('express')
const route     = express.Router()
const AuthService   = require('../../services/user/AuthService')
const config    = require('../../config')
const User      = require('../../models/user')

const jwt       = require('jsonwebtoken')

module.exports = (app) => {
    app.use('/auth', route)

    route.post('/login', (req,res,next) => {
        var email = req.body.email;
        var password = req.body.password;

        console.log(email);
        
        // result = AuthService.login(username, password);
        User.findOne({email: email}, (err,user) => {
            if (err) {
                console.log(err);
                res.json({
                    status: 500,
                    error: 'Internal error please try again1'
                })
            } else if (!user) {
                res.json({
                    status: 401,
                    error: 'Incorrect email'
                })
            } else {
                
                user.isPasswordCorrect(password, (err,same) => {
                    if(err) {
                        res.json({
                            status: 500,
                            error: 'Internal error please try again'
                        })
                    } else if (!same) {
                        res.json({
                            status: 401,
                            error: 'Incorrect password'
                        })
                    } else {
                        const payload = {email}
                        const token = jwt.sign(payload, config.jwtSecret, {
                            expiresIn: '1h'
                        })
                        res.json({
                            status: 200,
                            token: token,
                            user: user
                        })
                    }
                })
            }
        })

        // res.json(result)
    })
}
