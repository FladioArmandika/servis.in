const User  = require('../../models/user')

const bcrypt    = require('bcryptjs')

const UserService = {
    async getAll() {
        User.find({})
            .exec()
            .then(result => {
                console.log(result);
                
                return result
            })
            .catch(err => {
                console.log(err)
            })
    },
    addUser(params) {


        let user = new User({
            email: params.email,
            password: params.password,
            username: params.username,
        })

        user.save()
            .then(err => {
                return err;
            })
            .catch(err => console.log(err))
    }
}


module.exports = UserService; 