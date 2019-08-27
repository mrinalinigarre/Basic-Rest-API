const express = require('express');
const bodyParser = require('body-parser');
//const routes = require('./routes/api');
const mongoose = require('mongoose');

//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/empname');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

//listen for requests here
//process.env.port for deploying on heroku
app.listen(process.env.port || 4000, function(){
  console.log('Listening to requests');
});
