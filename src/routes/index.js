const express = require("express");
const router = express.Router();
const socketController = require("../controllers/socketController");

router.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = router;
