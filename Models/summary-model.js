const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SummarySchema = new Schema({
    "NewConfirmed": Number,
    "TotalConfirmed": Number,
    "NewDeaths": Number,
    "TotalDeaths": Number,
    "NewRecovered": Number,
    "TotalRecovered": Number,  
    "Date": Date

});

const Summary = mongoose.model('Summary',SummarySchema);
module.exports = Summary