const express   = require('express');
const route = express.Router();

const UserService = require('../../services/user/UserService');

const User = require('../../models/user')

module.exports = (app) => {
    app.use('/user', route);

    route.get('/', (req,res,next) => {

        // this needs to call service
        User.find({})
            .exec((err,result) => {
                if(!err) {
                    res.json(result);
                }
            })
    })

    route.post('/add', (req,res,next) => {
        var user = req.body;
        const result = UserService.addUser(user);
        res.json(result)
    })
}