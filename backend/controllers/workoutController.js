const Program = require('./../db/models/programModel');
const User = require('./../db/models/userModel');

// GET all programs for user
// OPTION 2: search Program collection and extract those who have 
// the matching userId (create index for userId) 

// POST create new program for user
// user_id property is obtained via middleware where it is placed on the
// req if the jwt is correct
const createWorkout = async (req, res) => {
    // extract data from req.body
    const {program} = req.body;
    const userId = req.user._id;

    try {
        // create new program
        await Program.create({...program, userId})
    
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// POST add session to session collection

// PATCH update program for user from id