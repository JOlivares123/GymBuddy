const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const Schema = mongoose.Schema

// For User Documents
const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName:{
        type: String, 
        required: true
    },
    email: {
        type: String,
        unique: true, 
        required: [true, "Please enter an email"],
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"],
        minlength: [6, "Minimum password length is 6 characters"],
    },
    
}, { timestamps: true })
// timestamps: true - adds createdAt and updated attributes to document

// fire function after(post) User doc is saved to db
// fire function before User doc is saved to db
userSchema.pre('save', async function(next){
    // take password from this.password 
    // add salts to it
    const salt = await bcrypt.genSalt(10);
    // hash it
    // then save to this.password field
    this.password = await bcrypt.hash(this.password, salt)

    // always call next() when using hooks like these
    next();
})

// static method to login user
userSchema.statics.login = async function(email, password ){
    const user = await this.findOne({email: email})

    // check if we have an user then compare passwords
    if(user){
        // bcrypt hashes password for us under the hood so no need to hash it 
        const auth = await bcrypt.compare(password, user.password)

        // passwords match
        if(auth){
            return user
        }
        // passwords dont match
        else{
            throw Error('Incorrect Password')
        }
    }
    throw Error('Incorrect Email')
}
module.exports = mongoose.model('User', userSchema)