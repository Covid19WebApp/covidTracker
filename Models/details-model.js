const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    
    "Postcode": {
      type:Number,
      required: true
    },
    "Date": Date,
    "Rank": Number   //status
  });

const Details = mongoose.model('Details',DetailsSchema);
module.exports = Details