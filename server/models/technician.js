const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const TechnicianSchema = new Schema({
    email: {
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    realname: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String
    },
    feedback: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feedback'
        }
    ],
})

module.exports = mongoose.model('Technician', TechnicianSchema)