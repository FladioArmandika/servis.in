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

    route.get('/:userid', (req,res,next) => {
        User.findOne({_id: req.params.userid})
            .exec((err, result) => {
                if(!err) {
                    res.json(result)
                }
            })
    })

    route.post('/add', (req,res,next) => {
        var params = req.body;
        // const result = UserService.addUser(user);

        let user = new User({
            email: params.email,
            password: params.password,
            username: params.username,
        })

        user.save((err,data) => {
            if(err) {
                console.log(err);
                
                res.status(401).json({
                    err
                })
            } else {
                res.status(200).json({
                    msg: 'User added successfully'
                })
            }
            
        })
    })
}