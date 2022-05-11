const express = require('express');
const router  = express.Router();
const registerUserController = require('../controller/users/register');


// router.use('/user', require('../controller/users/register') )
console.log('entered')
router.post('/register', registerUserController.registerUser)





module.exports = router