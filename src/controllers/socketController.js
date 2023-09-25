const { Server } = require("socket.io");

function setupSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("send_message", (data) => {
      console.log(data);
      socket.emit("receive_message", data);
    });
  });
}

module.exports = setupSocketIO;
