const express = require('express');
const cloudinary = require('cloudinary').v2;

const router = express.Router();

cloudinary.config({
  cloud_name: 'dln5rllhj',
  api_key: '677588813395632',
  api_secret:'JUF_8oMLsTFdfajIvQI8-FYCtQc'
})
router.post('/upload/images', (req, res)=>{

  // console.log(req.body.foldername);
  console.log(req.body.images)
})

module.exports = router;
