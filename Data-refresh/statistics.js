const unirest = require('unirest');
const Statistics = require('../Models/statistics-model')



var UpdateStatics = function(){
var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");
req.headers({
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "eb8fd0ce1fmsh70db046aceafc12p10db39jsnd8fe85306db1",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);
	statsdata = res.body.response
	Statistics.deleteMany({},function(res){
		console.log("Previous Stats Deleted")
	});
	Statistics.create(statsdata).then(function(res){
		console.log("New Stats Inserted")

	 });

});

}
exports.UpdateStatics = UpdateStatics
