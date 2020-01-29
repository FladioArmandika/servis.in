const mongoose  = require('mongoose')
const bcrypt    = require('bcryptjs')
const Schema    = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

UserSchema.methods.isPasswordCorrect = (password,callback) => {
    bcrypt.compare(password,this.password, (err,same) => {
        if(err) {
            callback(err)
        } else {
            callback(err,same)
        }
    })
}

module.exports = mongoose.model('User', UserSchema);