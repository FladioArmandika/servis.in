const mongoose  = require('mongoose')
const config    = require('../config')

module.exports = async() => {
    const conn = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
    return connection.connection.db;
}

