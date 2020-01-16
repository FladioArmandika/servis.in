const express   = require('express');
const route = express.Router();

const UserService = require('../../services/user/UserService');

module.exports = (app) => {
    app.use('/user', route);

    route.get('/', (req,res,next) => {
        var user = UserService.getAll();

        res.json({"test":user}).status(200);
    })
}