// const { Board, Led } = require("johnny-five");
// const board = new Board();
// board.on("ready", () => {
//   const led = new Led(13);
//   led.blink();
// });
// board.on("error", (err) => {
//   console.log(err);
// });

const SerialPort = require("serialport");

async function detectBoardType() {
  console.log(SerialPort);
  // const ports = await SerialPort.list();

  // for (const port of ports) {
  //   const serialPort = new SerialPort(port.path, { baudRate: 9600 }); // Adjust baud rate as needed

  //   serialPort.write("identify-command", (err) => {
  //     if (err) {
  //       console.error(`Error writing to ${port.path}: ${err}`);
  //     }
  //   });

  //   serialPort.on("data", (data) => {
  //     if (data.toString().includes("Arduino Uno")) {
  //       console.log(`Arduino Uno detected on port ${port.path}`);
  //     } else if (data.toString().includes("Arduino Leonardo")) {
  //       console.log(`Arduino Leonardo detected on port ${port.path}`);
  //     }

  //     serialPort.close();
  //   });
  // }
}

detectBoardType();
