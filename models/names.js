const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});
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
  },
  //add geo location
  geometry: GeoSchema
});

const Emp = mongoose.model('employee', EmpSchema);

module.exports = Emp;
