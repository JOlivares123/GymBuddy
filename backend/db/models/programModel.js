const mongoose = require('mongoose');

const Schema = mongoose.Schema

// For Program Documents
const programSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    programs: [{
        id: Schema.Types.ObjectId,
        name: {
            type: String
        },
        days: [{
            id: Number,
            restDuration: {
                type: Number
            },
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
                id: Number,
                workoutName: {
                    type: String,
                    required: true
                },
                goal: {
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
                },
                musclesWorked: [String],
                notes: String
            }]
        }],
    }]
}, { timestamps: true })

module.exports = mongoose.model('Program', programSchema)