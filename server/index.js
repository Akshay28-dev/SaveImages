const epxress = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

require('./db/mongo_connect');

const userapiroutes = require('./routes/apiroutes/userapi');
const usernormalrouters = require('./routes/normalroutes/usernormal');

const folderapiroutes = require('./routes/apiroutes/folderapi');
const foldernormalroutes = require('./routes/normalroutes/foldernormal');

const uploadimagesapiroutes = require('./routes/apiroutes/uploadimagesapi');

const app = epxress();

app.use(cors());
app.use(bodyparser.json());

app.use(userapiroutes);
app.use(folderapiroutes);

app.use(usernormalrouters);
app.use(foldernormalroutes);

app.use(uploadimagesapiroutes);

app.listen(3000, ()=>{
  console.log('Server Running')
})