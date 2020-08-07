const unirest = require('unirest');
const Statistics = require('../Models/statistics-model')
const moment = require('moment')



var UpdateStatics = function(){
var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");
req.headers({
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "eb8fd0ce1fmsh70db046aceafc12p10db39jsnd8fe85306db1",
	"useQueryString": true
});


	req.end(function (res) {
	
		stats_data = res.body.response

		//console.log("new data available for day : "+statsdata[0].day)
		//console.log("new data available for time : "+ stats_data[0].day)
		var last_api_data = stats_data[0].day
		console.log('last api data '+ last_api_data)

	// if current day data is not present -- insert new records
	// 		if current day data is present check time if time is also same  -- ok
	// 				 if current day data is there but time is change   -- update records
	// 																      -- del reocords with same date
	// 															   	     -- add new reocords with new dates
		


	 Statistics.findOne({}, {}, { sort: { 'time' : -1 } }, function(err, res) {
		
		if (res!=null){

			console.log("last db data "+moment(res.day).format("YYYY-MM-DD"))
			last_db_date = moment(res.day).format("YYYY-MM-DD")
	
	
			if(last_api_data == last_db_date)
			  {
					console.log ("updated data present")
						
			  }
	
	
			  if(last_api_data >  last_db_date)
			  {
	
				Statistics.create(stats_data).then(function(res){
				
					console.log("New Stats Inserted again")
															
					});
	
	
				
			  }
		}
		else
		{

			Statistics.create(stats_data).then(function(res){
				
				console.log("New Stats Inserted again")
														
				});



		}
		
		
	  });


	  //console.log(last_db_date)


	//   if(last_api_data != last_db_date)
	//   {
	// 	    console.log ()
	// 		console.log(last_api_data)

	//   }



		// Statistics.find({day:moment().format('YYYY-MM-DD')},function(err,docs){
		// 	if(err) console.log(err)
		// 	if (docs)
		// 	{
		// 		console.log(moment().format('YYYY-MM-DD'))
		// 		console.log(docs[0].day)
		// 		console.log(docs[0].time)
		// 		// console.log(docs)
		// 		// Statistics.find({time : statsdata[0].time },function(err,docs){
		// 		// 	if(err) console.log(err)
		// 		// 		if(docs){
		// 		// 			console.log("Updated data already present timestamp "+ statsdata[0].time)
							
		// 		// 		}
		// 		// 		else{
							
		// 		// 			Statistics.deleteMany({day:moment().format('YYYY-MM-DD')},function(res){
		// 		// 				console.log("Previous Stats Deleted")

		// 		// 			Statistics.create(statsdata).then(function(res){
		// 		// 				console.log("New Stats Inserted")
							
		// 		// 				  });

		// 		// 				 });
														
		// 		// 		}

		// 		// })

		// 	}

		// 	else
		// 	{

		// 	console.log()
		// 	// Statistics.create(statsdata).then(function(res){
		// 	// 	console.log("New Stats Inserted again")
														
		// 	// 	});
								
		// 	 }
		// })


	// Statistics.deleteMany({},function(res){
	// 	console.log("Previous Stats Deleted")
	// });
	// Statistics.create(statsdata).then(function(res){
	// 	console.log("New Stats Inserted")

	//  });

});

}
exports.UpdateStatics = UpdateStatics