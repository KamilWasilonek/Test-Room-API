var express = require("express");
var app = express();
var cors = require('cors')

var room_1 = require('./Room_1')
var room_2 = require('./Room_2')
var rooms = [room_1, room_2]

app.use(cors());
app.options("*", cors());

//GET ALL ROOMS
app.get("/rooms", (req, res, next) => {
  res.status(200).json({rooms});
});

var port = 3001
app.listen(port, () => {
 console.log("Server running on port " + port);
});