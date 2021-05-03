const express = require('express')
const router = express.Router()

// login page
router.get('/login', (req,res)=> {
    res.send('Login here')
})

// register page
router.get('/register', (req,res)=> {
    res.send('Register here')
})

module.exports = router