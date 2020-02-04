const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const FeedbackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    review: {
        type: String
    },
    rating: {
        type: Schema.Types.Number
    },
    technician: {
        type: Schema.Types.ObjectId,
        ref: 'Technician'
    }
})


module.exports = mongoose.model('Feedback', FeedbackSchema)