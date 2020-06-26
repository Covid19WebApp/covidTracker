const unirest = require('unirest');
const Summary = require('../Models/summary-model')
const moment = require('moment')

var now = new Date()
const UpdateSummary = function(){
    var who_req = unirest("GET", "https://api.covid19api.com/summary"); 
    who_req.end(function (who_res) {
        if (who_res.error) throw new Error(who_res.error);
        summarydata = who_res.body.Global
        summarydata["Date"] = moment().format();   

        Summary.deleteMany({},function(res){
            console.log("Previous Summary Deleted")
        });

        Summary.create(summarydata).then(function(res){
            console.log("New Summary Inserted")
    
         });


        // Summary.findByIdAndUpdate(
        //     {"_id": "5edfcbedb802c74e68f02727"},
        //     {"NewConfirmed":who_res.body.Global.NewConfirmed,
        //     "TotalConfirmed":who_res.body.Global.TotalConfirmed,
        //     "NewDeaths": who_res.body.Global.NewDeaths,
        //     "TotalDeaths": who_res.body.Global.TotalDeaths,
        //     "NewRecovered": who_res.body.Global.NewRecovered,
        //     "TotalRecovered": who_res.body.Global.TotalRecovered,  
        //     "Date": now  },{new:true},function(err,res)
        //     {
        //         if (err) throw new Error
        //         else
        //        console.log(res)
        //        console.log(now)

        //     })

    
        })
    }
        
    

        
               
                     
exports.UpdateSummary = UpdateSummary