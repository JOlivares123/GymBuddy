const jwt = require('jsonwebtoken')
const User = require('./../db/models/userModel')

const requireAuth = async (req, res, next) => {
    // JWT is first created when signing up or loggin in. It is saved on the 
    // frontend  (localStorage/cookies) and sent back on every request (create
    //  workout, update workout, and create session).
    // I can verify the legitmacy of it here with the jwt.veirfy method

    // verify user authentication
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    // split token to get jwt
    const token = authorization.split(' ')[1]

    // verify token
    try{
        // extract user._id from jwt
        const {id} = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findOne({id}).select('_id')
        next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth