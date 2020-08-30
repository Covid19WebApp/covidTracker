const express  = require('express');
const router = express.Router();
const User = require("../Models/user-model");
const { privateEncrypt } = require('crypto');
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')
router.use(express.json())
require('dotenv').config()


router.post('/login', async function(req,res){
  try{

    User.findOne({email : req.body.email},async function(err,user){
      if (user == null){
        return res.status(400).send("Cannot find user")

      }
      try{
          if (await bcrypt.compare(req.body.password,user.password))
          {
              //res.send("Success")//authorization
              console.log("Success")
              const accessToken = jwt.sign({user},process.env.ACCESS_TOKEN_SECRET)
              //console.log(accessToken)
              res.send({accessToken : accessToken})
              
        }
          else{
              res.send("Not allowed Either your Password or Email is not correct")

          } 

      }
      catch{
        res.status(500).send()
      }

})  
  }
 catch{
  res.status(500).send("error hereee")
  console.log("eefefefefe")
 }


})

 
module.exports = router;



