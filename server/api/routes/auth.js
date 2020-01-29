
const express   = require('express')
const route     = express.Router()
const AuthService   = require('../../services/user/AuthService')


module.exports = (app) => {
    app.use('/auth', route)

    route.post('/login', (req,res,next) => {
        var username = req.body.username;
        var password = req.body.password;
        result = AuthService.login(username, password);


        res.json(result)
    })
}
