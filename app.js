// const express = require("express");
// const app = express();
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");
// app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);
//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.emit("receive_message", data);
//   });
// });
// server.listen(3001, () => {
//   console.log("server is running");
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });
// io.on("connection", (socket) => {
//   console.log("server connection!");
// });

// socket.io
// const io = require("socket.io");
// const sio = io.listen(app.listen(4000));

// socket.on("user", function (data) {
//   console.log("user:" + data.text);
//   // socket on 是接收資料
//   // socket emit 是送資料
//   socket.emit("eventName", {
//     msg: "backend get" + data.count + "times",
//   });
// });

// Johnny-five
const { Board, Led } = require("johnny-five");
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
// const led = new Led(13);
// led.blink();
board.on("id", (id) => {
  console.log(id);
});
board.on("error", (err) => {
  console.log(err);
});
