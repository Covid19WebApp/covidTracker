const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    Age: {
      type: Number
    },
    Zip: {
      type: Number,
      required: [true, "Zip is required"]
    },
    question0: {
      type: Number
    },
    question1: {
      type: Number
    },
    question2: {
      type: Number
    },
    question3: {
      type: Number
    },
    question4: {
      type: Number
    },
    question5: {
      type: Number
    },
    question6: {
      type: Number
    },
    question7: {
      type: Number
    },
    question8: {
      type: Number
    },
    question9: {
      type: Number
    },
    question10: {
      type: Number
    },
    question11: {
      type: Number
    },
    question12: {
      type: Number
    },
    question13: {
      type: Number
    },
    "Date": Date,
    "Status": Number
  });

const Details = mongoose.model('Details',DetailsSchema);
module.exports = Details