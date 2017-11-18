const {hardware} = require('../models/temperature')
const {led, sensor} = hardware;



exports.ledController = (req, res) => {
  
    switch (req.body.action) {
      case 'ON':
        led.on();
        res.status(200).json({action: 'ON'})
        break;
      case 'OFF':
          led.off();
          res.status(200).json({action: 'OFF'})
          break;
      default:
        res.status(400).json({message: 'action not found'});
        break;
    }
}

exports.sensorController = (req, res) => {
  res.status(200).json({
    intensity: sensor.value
  })
}
