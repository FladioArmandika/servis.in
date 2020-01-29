const dotenv    = require('dotenv');

process.env.DOTE_ENV = process.env.DOTE_ENV || 'development';

const envFound  = dotenv.config();
if(!envFound) {
    throw new Error(" Couldn't find .env file");
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    databaseURL: `mongodb+srv://fladioarmandika:${process.env.DB_PASSWORD}@servisin-6nhil.mongodb.net/servisin?retryWrites=true&w=majority`,
}