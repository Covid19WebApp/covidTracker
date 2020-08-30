const express  = require('express');
const router = express.Router();
const Details = require("../Models/details-model")
const jwt = require('jsonwebtoken')
router.use(express.json())
require('dotenv').config()




router.post('/userdetails', /*authenticateToken*/ function(req,res){
    
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

function authenticateToken(req,res,next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user)=>{

    if(err) {
      console.log("xxx")
      return res.sendStatus(403)
    } 
    req.user = user
    console.log(user+"hereeeeee")
    next()


  })

}
        
module.exports = router;
