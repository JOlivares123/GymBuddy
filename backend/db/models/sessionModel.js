const mongoose = require('mongoose');

const Schema = mongoose.Schema

// For Program Documents
// to avoid huge documents, I will only hold one
// program per document
const sessionSchema = new Schema({
    // index userId to easily fetch them
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
   programId: {
    type: Schema.Types.ObjectId,
    required: true,
    index:true,
   }, 
   musclesWorked: [String],
   workoutsPerformed: [
    {
        workoutName: String,
        setsPerformed: [
            {
                reps: {type: Number, required:true},
                weight: {type: Number, required: true},
                addedWeight: {type: Number},
            }
        ]
    }
   ]
}, { timestamps: true })

module.exports = mongoose.model('Session', sessionSchema)