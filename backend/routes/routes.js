const express = require('express');

const router = express.Router();

// POST signup new user

// GET(?) login user

router.get('/', (req, res)=>{
    res.json({msg: 'TESTING API'})
})

// GET all programs for user
router.get('/workout', async (req, res) => {

})

// POST create new program for user
router.post('/workout/create-program', async (req, res) => {
    
})

// POST add session to history collection

// PATCH update program for user

module.exports = router;