const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create name schema and model
const EmpSchema = new Schema({
  name:{
    type: String,
    required:[true, 'Name field is required']
  },
  rank:{
    type: String
  },
  available:{
    type: Boolean,
    default: false
  }
  //add geo location


});

const Emp = mongoose.model('employee', EmpSchema);

module.exports = Emp;
