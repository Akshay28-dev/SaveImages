const express = require('express');
const { foldercreate } = require('../../controller/apicontroller/folderapicontroller');

const router = express.Router();

router.post('/folder/create', foldercreate);

module.exports = router;