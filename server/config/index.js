const dotenv    = require('dotenv');

process.env.DOTE_ENV = process.env.DOTE_ENV || 'development';

const envFound  = dotenv.config();
if(!envFound) {
    throw new Error(" Couldn't find .env file");
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
    databaseURL: "",
}