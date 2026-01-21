const express = require('express');
const router = express.Router();

// normal export use pannruntha import panrathu {} ulla pannanum or module.export paniruntha normal without {} use pannanum

const { register ,login} = require('../controller/authController');

// enddpoint for user registration

router.post('/register', register);
router.post('/login', login);


module.exports = router;