const express = require('express');
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const userRoutes = require('./routes/user')
const programRoutes = require('./routes/programs')
const dbConnect = require('./db/dbConnect')

 // create express server
const app = express();

const dir = path.join(__dirname, '..')
fs.readdir(dir, function(err, files){
    if(err){
        return console.log('Unable to scan dir: '+ err)
    }
    files.forEach(function(file){
        console.log(file)
    })
})
// for deployment
if(process.env.NODE_ENV === 'prod'){
    app.use(express.static( '../frontend/build'));
    console.log(path.resolve(__dirname, '..'))
    console.log(path.resolve(__dirname, '..', 'frontend'))
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, '..','frontend', 'build', 'index.html'))
    })
}

app.use(express.json());
app.use(cors({credentials: true}))
app.use(cookieParser())
// all routes will have to have the '/api' prefix
app.use('/api', userRoutes);
app.use('/api', programRoutes)
// connect to DB
dbConnect().then(()=>{
    app.listen(process.env.PORT || 3001, ()=>{
        console.log(`Server started at ${process.env.PORT}`)
    })
})
