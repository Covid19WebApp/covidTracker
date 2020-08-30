const express  = require('express');
const router = express.Router();
const User = require("../Models/user-model");
const { privateEncrypt } = require('crypto');
const bcrypt = require('bcrypt') 


router.post('/signup', async function(req,res){
  try{

    User.findOne({email : req.body.email},async function(err,docs){
      if (docs){
          console.log("user already exists")
          res.status(500).send("user already exists with same email")
      }
      else{

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        console.log(salt)
        console.log(hashedPassword)

        const newuser = {username:req.body.username, email: req.body.email ,password: hashedPassword}
        User.create(newuser,async function(err, collection){ 
              // if (err){
              //   res.status(400).send(err)
              // }
            try{

              console.log("User added Successfully"); 
              res.status(200).send("added new user")  
              
            }
        
            catch{
              res.status(500).send("error adding new user")
            }
            
        }); 
        
      }

})  

      
  }

  catch{}




})

 
module.exports = router;



