const express = require("express");
const Message = require("../models/Message");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

//Send messages
router.post("/sendMessages/:uId", (req, res) => {
  var newMessages = new Message();
  newMessages.userId = req.body.name;
  newMessages.messages = req.body.message;
  newMessages.send_Id = req.body.sendId;
  newMessages.receiver_Id = req.body.receiverId;
  newMessages.date = Date.now();

  newMessages
    .save()
    .then((d) => {
      res.sendStatus(200);
      console.log(d);
    })
    .catch((err) => console.log(err));
});

//receive messages
router.get("/receiveMessages/:send_Id", (req, res) => {
  Message.find({ send_Id: req.params.send_Id })
    .then((d) => {
      console.log(d);
      res.send(d);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
