const { Server } = require("socket.io");

let boardOn = false;

function setupSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    // socket.on("send_message", (data) => {
    //   console.log(data);
    //   socket.emit("receive_message", data);
    // });

    socket.on("connect_board", (data) => {
      boardOn = true;
    });
    socket.on("disconnect_board", (data) => {
      boardOn = false;
    });

    socket.on("trigger_led", (data) => {});
    socket.on("stop_led", (data) => {});

    socket.on("trigger_servo", (data) => {});
    socket.on("stop_servo", (data) => {});
  });
}

module.exports = setupSocketIO;
