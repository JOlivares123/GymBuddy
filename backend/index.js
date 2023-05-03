const express = require('express');
require('dotenv').config()
const routes = require('./routes/routes')
const dbConnect = require('./db/dbConnect')

 // create express server
const app = express();

app.use(express.json());
// all routes will have to have the '/api' prefix
app.use('/api', routes);
// connect to DB
dbConnect().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started at ${process.env.PORT}`)
    })
})
