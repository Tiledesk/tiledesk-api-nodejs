var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var winston = require('../config/winston');


var LabelEntrySchema = new Schema({
  lang: { 
    type: String,
    required: true,
    index:true
  },
  data: {
    type: Object,
    required: true
  },
  category: {
    type: String,
    required: false,
    index: true
  },
});

var Label2Schema = new Schema({
  
  data: { 
    //type: Array,
    type: [LabelEntrySchema],
    required: true,
    //index: true
  }, 
  attributes: {
    type: Object,
  },
  id_project: {
    type: String,
    required: true,
    index: true
  },  
  createdBy: {
    type: String,
    required: true
  }
},{
  timestamps: true
}
);

 var label = mongoose.model('label2', Label2Schema);


module.exports = label;