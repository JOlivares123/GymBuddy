const mongoose = require("mongoose");
require('dotenv').config()

const mongoString = process.env.DB_URL
const dbName = process.env.DB_NAME

async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
    .connect(mongoString, {dbName:dbName})
    .then(()=>{
        console.log("Successfully connected to MongoDB Atlas!")
    })
    .catch((error)=>{
        console.log("Unable to connect to MongoDB Atlas :(");
        console.error(error)
    })
}
module.exports = dbConnect;