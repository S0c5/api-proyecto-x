const SENSOR_PIN = 'A0';

class Sensor {
  constructor(five, board){
    let self = this;
    this.five  = five;
    this.board =  board;
    this.board.on('ready', () => {
      this.sensor = new five.Sensor(SENSOR_PIN);
      this.sensor.on('change',  function() {
          self.value = this.fscaleTo(0, 180);
      })
    });

    this.value = 0;


  }
}

module.exports = Sensor
