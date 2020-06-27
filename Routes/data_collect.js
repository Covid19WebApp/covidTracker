const express  = require('express');
const router = express.Router();
const Details = require("../Models/details-model")


router.post('/userdetails', function(req,res,next){
    
    // LOGIC IMPELMENTATION

    Details.create(req.body).then(function(res){
		console.log("New Details Added")
        

     }).catch(function(err,req,res)
     {
         // exception handling
         console.log("Error")
        res.status(400).json({status : "error"})
     })
     
    res.status(200).json({status : "done"})
});
        

module.exports = router;
