const express = require('express');
const authController = require('./../controllers/authController')
const router = express.Router();

// set cookies on api call with res.setHeader('Set-Cookie', 'cookieName=value')
// with cookie-parser pkg, you can set cookies with res.cookie('cookieName', value
// {maxAge: time in ms}) (can specify cookie expiration with options) (use secure: true in options when deploying)

// can READ  cookies by using req.cookies (can use dot notation to access diff cookies)

// use JWT when user first sends a request to login with credentials. The server checks credentials in database and if valid creates
// a JWT and sends it to the client in a cookie. This JWT is sent alongside requests to ensure the user is valid and if not, send error code
// to redirect them to the login/signup pages
// a JWT has 3 parts: Headers(meta data), Payload(used to identify user (user_id)), and Signature(makes token secure)


// POST signup new user
router.post('/signup', authController.signup_post)

// POST login user
router.post('/login', authController.login_post)

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