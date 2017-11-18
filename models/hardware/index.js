const five = require("johnny-five");
const board = new five.Board();
const led = require('./led');
const sensor = require('./sensor');
module.exports = {
  led: new led(five, board),
  sensor: new sensor(five, board)
}
