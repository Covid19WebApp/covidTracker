const express  = require('express');
const router = express.Router();
const Summary = require('../Models/summary-model')


router.get('/api/whoSummary',function(req,res,next){
    Summary.find({}).then(function(summary){
        if(summary.length>0)
        {
            console.log("summary sent")
            res.send(summary)
            
        }
        else
       
            res.send("{Message: Data Not Avaiable}")
    });    
});
        

module.exports = router;
