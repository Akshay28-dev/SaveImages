const express = require('express');

const router = express.Router();

router.get('/',  (req, res)=>{
  console.log(req.header('Authorization'))
});

module.exports = router