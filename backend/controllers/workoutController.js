const Program = require('./../db/models/programModel');
const User = require('./../db/models/userModel');

// GET all programs for user

// POST create new program for user
const createWorkout = async (req, res) => {
    // extract data from req.body
    const {program, userId} = req.body;
    // or extrac userId from req.params

    try {
        // first check if user has any programs already in user schema 
        const programDocIds = await User.findById(userId).programDocIds
        
        // if they dont, create a program document
        if(programDocIds.length === 0){
            // then append to programDocIds
            const newProgram = await Program.create({program})

            // extract document id from newProgram
            const newProgramDocId = newProgram._id
            
            // then update user document with id of newly created
            // program document
            // update syntax
            await User.findByIdAndUpdate(userId, {programDocIds: [newProgramDocId]})
        }
        else{
            // user already has an existing program document
            // update syntax: want to add new doc id to beginning of array
            const programDoc = await Program.findByIdAndUpdate(programDocIds[0], )
            // fetch document 
            // append new program to beginning 
        }

    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// POST add session to session collection

// PATCH update program for user from id