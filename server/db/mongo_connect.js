var mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/saveimages', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function(){
    console.log("Mongo DB Connected")
  })
  .catch( function(err){
    console.log(err.message)
  })