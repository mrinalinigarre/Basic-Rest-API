const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/names');

//get the names from the db
router.get('/names', function(req, res, next){
  EmployeeModel.aggregate().near(
    {
      near: {
        type: 'Point',
        coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
    maxDistance: 100000,
    spherical: true,
    distanceField: "dist.calculated"
  }).then(function(employees){
    res.send(employees);
  });
});

//add a new name to the db
router.post('/names', function(req, res, next){
  //sending data to the mongodb model
  EmployeeModel.create(req.body).then(function(employee){
    res.send(employee);
  }).catch(next);
});

//update the name in the db
router.put('/names/:id', function(req, res, next){
  EmployeeModel.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    EmployeeModel.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  });
});

//Delete the names from the db
router.delete('/names/:id', function(req, res, next){
  EmployeeModel.findByIdAndRemove({_id: req.params.id}).then(function(employee){
    res.send(employee);
  });
  res.send({type:'DEELTE'});
});


module.exports = router;
