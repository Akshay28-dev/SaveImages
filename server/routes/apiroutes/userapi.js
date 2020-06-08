const express = require('express');
const { signup, login, logout } = require('../../controller/apicontroller/userapicontroller');

const router = express.Router();

router.post('/register', signup);

router.post('/login', login)

router.post('/logout', logout)

module.exports = router;