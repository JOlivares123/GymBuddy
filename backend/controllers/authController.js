const User = require('./../db/models/userModel');
const jwt = require('jsonwebtoken')


// creating tokens for JWT
// maxAge for cookie + jwt expiration (7 days)
const maxAge= 7 * 24 * 60 * 60 

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: maxAge})
}

// handle errors for signup and login
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = {email: '', password: ''};

    // incorrect email - login 
    if(err.message === 'Incorrect Email'){
        errors.email = "That email is not registered"
    }
    // incorrect password - login
    if(err.message === 'Incorrect Password'){
        errors.password = "That password is incorrect"
    }

    // for case of duplicate emails
    if(err.code === 11000){
        errors.email = "That email is already registered"
        return errors;
    }

    // validation errors for users (email and password)
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        } )
    }
    return errors
}

module.exports.signup_post = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try{
        const newUser = await User.create({
            firstName: firstName, 
            lastName: lastName,
            email: email,
            password: password,
        })

        // create JWT for user._id
        const token = createToken(newUser._id);

        // res.cookie('jwt', token, {maxAge: maxAge*1000, origin:'http://localhost:3000'})
        res.status(200).json({ token })
    }
    catch(error){
        const errors = handleErrors(error)
        res.status(400).send(errors)
    }
}

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password);

        // create JWT for user._id
        const token = createToken(user._id);
        // res.cookie('jwt', token, {maxAge: maxAge*1000, origin:'http://localhost:3000'})
        res.status(200).json({ token })
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}