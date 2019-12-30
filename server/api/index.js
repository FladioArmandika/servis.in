const Router    = require('express');

const userApi   = require('./routes/user')

module.exports = () => {
    const app = Router();

    app.get('/', (req,res,next) => {
        res.send('this is an api')
    }) 
 
    userApi(app);

    return app;
}
