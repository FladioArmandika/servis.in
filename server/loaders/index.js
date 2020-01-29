
const expressLoader     = require('./express')
const mongooseLoader    = require('./mongoose')

module.exports =  async (app) => {
    // uncomment line below for enable mongodb database
    const mongoConnection = await mongooseLoader();
 
    await expressLoader(app);
}