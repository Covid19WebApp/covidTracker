const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({

    Lat: {
      type: String,
      required: [true, "Lat is required"]
    },
    //"Lat": String,
    "Lng": String,
    "Date": Date,
    "Staus": Number
  });

const Details = mongoose.model('Details',DetailsSchema);
module.exports = Details