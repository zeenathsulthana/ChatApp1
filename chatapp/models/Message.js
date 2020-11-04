const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  messages: {
    type: String,
    required: true,
  },
  send_Id: {
    type: String,
    required: true,
  },
  receiver_Id: {
    type: String,
    required: true,
  },
});
module.exports = Message = mongoose.model("Message", MessageSchema);
