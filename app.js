const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const socketController = require("./src/controllers/socketController");
const routes = require("./src/routes");
const setupArduino = require("./src/controllers/arduinoController");

app.use(cors());

const server = http.createServer(app);

// Setup Socket.io
socketController(server);
// setupArduino();

// Setup routes
app.use("/", routes);

server.listen(3001, () => {
  console.log("server is running");
});
