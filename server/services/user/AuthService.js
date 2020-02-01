const jwt   = require("jsonwebtoken")
const User  = require('../../models/user')
const config    = require('../../config')

const AuthService = {
    login(email,password) {
        // User.findOne({email}, (err,user) => {
        //     if (err) {
        //         console.log(err);
        //         return {
        //             status: 500,
        //             error: 'Internal error please try again'
        //         }
        //     } else if (!user) {
        //         return {
        //             status: 401,
        //             error: 'Incorrect username or password'
        //         }
        //     } else {
        //         user.isPasswordCorrect(password, (err,same) => {
        //             if(err) {
        //                 return {
        //                     status: 500,
        //                     error: 'Internal error please try again'
        //                 }
        //             } else if (!same) {
        //                 return {
        //                     status: 401,
        //                     error: 'Incorrect username or password'
        //                 }
        //             } else {
        //                 const payload = {email}
        //                 const token = jwt.sign(payload, config.jwtSecret, {
        //                     expiresIn: '1h'
        //                 })
        //                 return {
        //                     status: 200,
        //                     token: token,
        //                 }
        //             }
        //         })
        //     }
        // })

    }
}


module.exports = AuthService;
