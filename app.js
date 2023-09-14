// express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

// socket.io
const io = require("socket.io");
const sio = io.listen(app.listen(4000));
sio.on("connection", function (socket) {
  console.log("A client connected");
  socket.on("user", function (data) {
    console.log("user:" + data.text);
    // socket on 是接收資料
    // socket emit 是送資料
    socket.emit("eventName", {
      msg: "backend get" + data.count + "times",
    });
  });
});

// Johnny-five
// const { Board, Led } = require("johnny-five");
// const board = new Board();
// board.on("ready", () => {
//   const led = new Led(13);
//   led.blink();
// });
// board.on("error", (err) => {
//   console.log(err);
// });
