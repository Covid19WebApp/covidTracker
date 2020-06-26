const express  = require('express');
const router = express.Router();
const Statistics = require('../Models/statistics-model')


//fetches all data
router.get('/api/stats',function(req,res,next){
    Statistics.find({}).then(function(stats){
        console.log(stats)
        res.send(stats)
    });    
});

//filter by continent
router.get('/api/continent',function(req,res,next){
    console.log(req.query.continent)
    Statistics.find({'continent' : req.query.continent}).then(function(stats){

        if(stats.length>0)
        {
            res.send(stats)
        }
        else
       
        res.send("{Message: Resouce not Found}")
    });    
});

//filter by country
router.get('/api/country',function(req,res,next){
    Statistics.find({country : req.query.country}).then(function(stats){
        if(stats.length>0)
        {
            res.send(stats)
        }
        else
       
        res.send("{Message: Resouce not Found}")
    });    
});


module.exports = router;