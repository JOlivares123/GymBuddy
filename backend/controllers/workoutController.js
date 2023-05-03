const Program = require('./../db/models/programModel');
const User = require('./../db/models/userModel');

// GET all programs for user

// POST create new program for user
const createWorkout = async (req, res) => {
    // extract data from req.body
    const {program, userId} = req.body;
    // or extrac userId from req.params

    try {
        // fetch user doc to append new program
        const userDoc = await User.findById(userId)
        
        // create new program
        const newProgram = await Program.create({program})

        // extract document id from newProgram
        const newProgramDocId = newProgram._id
            
        // then update user document with id of newly created
        // program document
        userDoc.programDocIds.unshift(newProgramDocId)
    
        // save updated docs: Program + User
        await userDoc.save();
        await newProgram.save();
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// POST add session to session collection

// PATCH update program for user from id