const express = require('express');
const router = express.Router();
const Employee_Model = require('../models/names');

//get the names from the db
router.get('/names', function(req, res, next){
  res.send({type:'GET'});
});

//add a new name to the db
router.post('/names', function(req, res, next){
  //sending data to the mongodb model
  Employee_Model.create(req.body).then(function(employee){
    res.send(employee);
  }).catch(next);
});

//update the name in the db
router.put('/names/:id', function(req, res, next){
  Employee_Model.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    Employee_Model.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  });
});

//Delete the names from the db
router.delete('/names/:id', function(req, res, next){
  Employee_Model.findByIdAndRemove({_id: req.params.id}).then(function(employee){
    res.send(employee);
  });
  res.send({type:'DEELTE'});
});


module.exports = router;
