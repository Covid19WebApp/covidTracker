const express  = require('express');
const router = express.Router();
const User = require("../Models/user-model");
const { privateEncrypt } = require('crypto');


router.post('/signup', function(req,res){

  User.findOne({email : req.body.email},function(err,docs){
        if (docs){
            console.log("already one")
            res.send("user already exists with same email")
        }
        else{
            User.create(req.body,function(err, collection){ 
                if (err){
                  res.status(400).send(err)
                }
          
              console.log("User added Successfully"); 
              res.status(200).send("added new user")  
          }); 
          
        }

  })  
 


})
        
module.exports = router;
