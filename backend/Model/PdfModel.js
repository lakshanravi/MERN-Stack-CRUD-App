const mongoose = require('mongoose');

//add krgttu mongoose ek sheme ekkt asign krgnnw
const Schema  = mongoose.Schema;


//me function eke tm api input krn detailes tika daanne
const pdfSchema = new Schema({

  pdf: {
    type:String,
    required:true
  },
 
  title:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model(
  "PdfModel", //file name.
  pdfSchema // function name ek. uda haduwa
)

