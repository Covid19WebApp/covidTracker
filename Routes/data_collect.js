const express  = require('express');
const router = express.Router();
const Details = require("../Models/details-model");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');


router.post('/userdetails', function(req,res,next){

    coronaScore = (req.body.question1 * 3 + req.body.question2 * 3 + req.body.question3 * 3 + req.body.question4 * 1
        + req.body.question5 * 1 + req.body.question6 * 1 + req.body.question7 * 1 + req.body.question8 * 1
        + req.body.question9 * 1+ req.body.question10 * 1 + req.body.question11 * 4 + req.body.question12 * 4
        + req.body.question13 * 4);

    if (req.body.question0 == 1)
        req.body.Status = 2;
    else if (coronaScore > 12)
        req.body.Status = 1;
    else
        req.body.Status = 0;

    console.log(req.body.Status);

    Details.create(req.body).then(function(){
        console.log("New Details Added");
        res.status(200).send({status : "OK"});
    }).catch(next);
});

router.get('/userdetails/:Zip',function(req,res,next){
    Details.find({'Zip' : req.params.Zip}).then(function(details){
        res.send({numberOfCases : details.length})
    }).catch(next);;    
});

module.exports = router;
