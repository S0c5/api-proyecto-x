const LED_NUMBER = 13;

class Led {
  constructor(five, board){

    this.five  = five;
    this.board =  board;
    this.board.on('ready', () => {
        this.led   = new five.Led(LED_NUMBER);
    });
  }
  on() {
    console.log('called on');
    this.led.on();
  }
  off() {
    console.log('off ? ');
    this.led.off();
  }
}

module.exports = Led;
