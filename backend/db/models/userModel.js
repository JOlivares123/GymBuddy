const mongoose = require('mongoose');

const Schema = mongoose.Schema

// For User Documents
const userSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    programDocIds: [{type: Schema.Types.ObjectId, ref: "Program"}]
    
}, { timestamps: true })
// timestamps: true - adds createdAt and updated attributes to document

module.exports = mongoose.model('User', userSchema)