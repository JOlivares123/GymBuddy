const mongoose = require('mongoose');

const Schema = mongoose.Schema

// For Program Documents
// to avoid huge documents, I will only hold one
// program per document
const programSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // index userId to easily fetch them
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    restDuration: {
        type: Number,
        required: true
    },
    days: [{
        cardio: {
            name: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true
            },
            notes: {
                type: String
            }
        },
        workoutsNeeded: [{
            workoutName: {
                type: String,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            minReps: {
                type: Number,
                required: true
            },
            maxReps: {
                type: Number,
                required: true
            },
            musclesWorked: [String],
            notes: String
        }]
    }],
}, { timestamps: true })

module.exports = mongoose.model('Program', programSchema)