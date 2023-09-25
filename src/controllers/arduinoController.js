const { Board, Led } = require("johnny-five");

function setupArduino() {
  const board = new Board();

  board.on("ready", () => {
    const totalDigitalPins = board.io.pins.length;
    console.log(board.io.pins.length);
    if (totalDigitalPins === 20) {
      console.log("Connected to an Arduino Uno");
    } else if (totalDigitalPins === 54) {
      console.log("Connected to an Arduino Mega");
    } else if (totalDigitalPins === 30) {
      console.log("Connected to an Arduino Leonardo");
    } else if (totalDigitalPins === 22) {
      console.log("Connected to an Arduino Nano");
    } else {
      console.log("Connected to an unknown board");
    }
  });
}

module.exports = setupArduino;
