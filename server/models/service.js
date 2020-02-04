const mongoose  = require('mongoose')
const Schema    = mongoose.Schema;

const ServiceSchema = new Schema({
    name: {
        type: String
    },
    technician: {
        type: Schema.Types.ObjectId,
        ref: 'Technician'
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
})

ServiceSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')) {
        const document = this;
        
    }
})

module.exports = mongoose.model('Service', ServiceSchema)