const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');




mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.json());

const temperatureController = require('./controllers/temperature');

app.post(
    '/logs/temperatures',
    temperatureController.create
);
app.get(
    '/logs/temperatures',
    temperatureController.list
);


const activityController = require('./controllers/activity');

app.post(
    '/logs/activities',
    activityController.create
)

app.get(
    '/logs/activities',
    activityController.list
)

const hardwareController  = require('./controllers/hardware');

app.put('/hardware/led', hardwareController.ledController);
app.get('/hardware/sensor', hardwareController.sensorController);


if(require.main == module){
    app.listen(process.env.PORT || 3000, (err) => {
        console.log('[+] app listening at port 3000');
    });
}else {
    module.exports = app;
}
