const mongoose = require('mongoose');

//add krgttu mongoose ek sheme ekkt asign krgnnw
const Schema  = mongoose.Schema;


//me function eke tm api input krn detailes tika daanne
const userSchema = new Schema({

  name: {
    type:String,
    required:true
  },
  age: {
    type:Number,
    required:true
  },
  gmail:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  }

});

module.exports = mongoose.model(
  "UserModel", //file name.
  userSchema // function name ek. uda haduwa
)

//mongoose.model(name, schema)
/*This function creates a model in Mongoose.
A model is an interface to interact with a MongoDB collection.
The first argument ("UserModel") is the name of the model.
The second argument (userSchema) is the schema that defines the structure of documents in that collection.*/