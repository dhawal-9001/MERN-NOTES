const mongoose = require('mongoose');
require("dotenv").config()
const mongoURI = "mongodb+srv://inotes-mern:inotesmernadmin@inotes.mky7vin.mongodb.net/urNoteBook"
// const mongoURI = "mongodb://localhost:27017/urNotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI = process.env.MONGO_URI

const connectToMongo = () => {
    mongoose.connect(mongoURI, {useNewUrlParser: true}, () => {
        console.log('Connected to Mongo Successfully')
    })
}

module.exports = connectToMongo;



