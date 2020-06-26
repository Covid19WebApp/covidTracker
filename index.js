const express = require('express')
const app  = express()
const mongoose = require('mongoose'); 
const cron = require("node-cron");
const who_data = require('./Data-refresh/who-summary')
const stats = require('./Data-refresh/statistics')
const who_routes = require('./Routes/getwho')
const stats_routs = require('./Routes/getstats')

mongoose.connect('mongodb://localhost/covid19app',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
});
mongoose.Promise = global.Promise

app.use(who_routes);
app.use(stats_routs);


// stats.UpdateStatics()
// who_data.UpdateSummary()

// cron.schedule("* * * * *", () => {
//     console.log(`one minute passed, data downloaded`);
//     who_data.UpdateSummary();
//   });


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`Listening @ ${port}....`))