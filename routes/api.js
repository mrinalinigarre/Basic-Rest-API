const express = require('express');
const router = express.Router();
const Employee = require('../models/names');

//get the names from the db
router.get('/names', function(req, res){
  res.send({type:'GET'});
});

//add a new name to the db
router.post('/names', function(req, res, next){
  //sending data to the mongodb model
  Employee.create(req.body).then(function(employee){
    res.send(employee);
  }).catch(next);
});

//update the name in the db
router.put('/names/:id', function(req, res){
  res.send({type:'PUT'});
});

//Delete the names from the db
router.delete('/names/:id', function(req, res){
  res.send({type:'DEELTE'});
});


module.exports = router;
