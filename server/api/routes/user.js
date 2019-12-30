const express   = require('express');
const route = express.Router();

module.exports = (app) => {
    app.use('/user', route);

    route.get('/', (req,res,next) => {
        res.json({"test":"i'ts working"}).status(200);
    })
}