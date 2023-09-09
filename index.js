// express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

// socket.io

// Johnny-five

const { Board, Led } = require("johnny-five");
const board = new Board();
board.on("ready", () => {
  const led = new Led(13);
  led.blink();
});
board.on("error", (err) => {
  console.log(err);
});
