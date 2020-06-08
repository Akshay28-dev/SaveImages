const express = require('express');
const { getFolderName } = require('../../controller/normalconteroller/foldernormalcontroller');

const router = express.Router();

router.get('/get/folder', getFolderName);

module.exports = router;