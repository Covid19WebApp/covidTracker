const express = require('express')
const app  = express()
const mongoose = require('mongoose'); 
const cron = require("node-cron");
const bodyParser = require('body-parser');


const who_data = require('./Data-refresh/who-summary')
const stats = require('./Data-refresh/statistics')
const who_routes = require('./Routes/getwho')
const stats_routes = require('./Routes/getstats')
const datacollect_routes = require('./Routes/form-fill')
const signup_routes = require('./User-functionality/sign-up')
const login_routes = require('./User-functionality/login')

mongoose.connect('mongodb://localhost/covid19app',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
});

mongoose.Promise = global.Promise



app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use(who_routes);
app.use(stats_routes);
app.use(datacollect_routes);
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});
app.use(signup_routes)
app.use(login_routes)


stats.UpdateStatics()
//who_data.UpdateSummary()

// cron.schedule("* * * * *", () => {
//     console.log(`one minute passed, data downloaded`);
//     who_data.UpdateSummary();
//   });


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`Listening @ ${port}....`))