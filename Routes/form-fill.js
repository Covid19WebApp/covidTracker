const express  = require('express');
const router = express.Router();
const Details = require("../Models/details-model")


router.post('/userdetails', function(req,res){
    
    // LOGIC for answers is implemented @ front-end

    var Postcode  = req.body.Postcode
    var Date = req.body.Date
    var Rank = req.body.Rank

    var data = { 
      "Postcode": Postcode, 
      "Date":Date, 
      "Rank":Rank, 
    
  } 

  Details.create(data,function(err, collection){ 
    if (err) {
      res.status(400).send(err)
    } 
    console.log("Record inserted Successfully"); 
    res.status(200).send({status :"true"})      
}); 
      

});
        
module.exports = router;
