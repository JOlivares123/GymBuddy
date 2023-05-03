const mongoose = require("mongoose");
require('dotenv').config()

const mongoString = process.env.DB_URL

async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
    .connect(mongoString)
    .then(()=>{
        console.log("Successfully connected to MongoDB Atlas!")
    })
    .catch((error)=>{
        console.log("Unable to connect to MongoDB Atlas :(");
        console.error(error)
    })

    const database = mongoose.connection


    database.on('error', (error)=>{
        console.log(error)
    });

    database.once('connected', ()=>{
        console.log('Database Connected!')
        // console.log(database)
    })
}
module.exports = dbConnect;