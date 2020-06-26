const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({

    "continent": String,
    "country": String,
    "population": Number,
    "cases": {
      "new": String,
      "active": Number,
      "critical": Number,
      "recovered": Number,
      "1M_pop": Number,
      "total": Number
    },
    "deaths": { 
            "new": Number,
            "1M_pop": Number,
             "total": Number 
            },
    "tests": { 
        "1M_pop": Number,
         "total": Number
         },
    "day": Date,
    "time": Date
  });

const Statistics = mongoose.model('Statistics',StatsSchema);
module.exports = Statistics