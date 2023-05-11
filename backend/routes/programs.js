const express = require('express');
const requireAuth = require('./../middleware/requireAuth')
const router = express.Router();

// add in auth middleware I created to protect these routes
router.use(requireAuth)

// GET all programs for user
router.get('/workout', async (req, res) => {

})

// POST create new program for user
router.post('/workout/create-program', async (req, res) => {
    
})

// POST add session to history collection

// PATCH update program for user

module.exports = router;