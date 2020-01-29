const Router    = require('express');

const userApi   = require('./routes/user')
const authApi   = require('./routes/auth')

module.exports = () => {
    const app = Router();

    app.get('/', (req,res,next) => {
        res.send('this is an api')
    }) 
 
    userApi(app);
    authApi(app);

    return app;
}
