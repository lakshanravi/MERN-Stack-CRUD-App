const mongoose = require('mongoose');

//add krgttu mongoose ek sheme ekkt asign krgnnw
const Schema  = mongoose.Schema;


//me function eke tm api input krn detailes tika daanne
const regiSchema = new Schema({

  name: {
    type:String,
    required:true
  },
 
  gmail:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }

});

module.exports = mongoose.model(
  "Register", //file name.
  regiSchema // function name ek. uda haduwa
)

