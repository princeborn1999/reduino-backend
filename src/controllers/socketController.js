const { Server } = require("socket.io");

let boardOn = false;
let boardname = 'uno' //from arduinoController.js

function setupSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("selectBoard",(data) => {
      console.log(`Select boardname from browser : ${data.boardname}`)
      if(data.boardname === boardname){
        socket.emit("connect_success",{boardname: boardname})
      }else{
        socket.emit("connect_fail",{boardname: boardname})
      }
    })
    socket.on("connect_board", (data) => {
      boardOn = true;
    });
    socket.on("disconnect_board", (data) => {
      boardOn = false;
    });

    socket.on("send_led", (data) => {
      //TODO: johnny-five 
      // check setupArduino is true 
      // call function from arduinoController.js
    });
    socket.on("stop_led", (data) => {
      //TODO: johnny-five 
      // check setupArduino is true 
      // call function from arduinoController.js
    });

    socket.on("send_servo", (data) => {
      //TODO: johnny-five 
      // check setupArduino is true 
      // call function from arduinoController.js
    });
    socket.on("stop_servo", (data) => {
      //TODO: johnny-five 
      // check setupArduino is true 
      // call function from arduinoController.js
    });
  });
}

module.exports = setupSocketIO;
