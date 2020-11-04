const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
var http = require("http").Server(app);
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(morgan("dev"));

//socket
var io = require("socket.io")(http);

//DB stuff
const mongoose = require("mongoose");

//Where is setup folder and myurl file
const db = require("./setup/myurl").Mongourl;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected!"));

const server = http.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

//demo route
app.get("/", (req, res) => {
  // res.sendStatus(200);s
  res.send("hey zee");
});

// // //Routes for users and messages
app.use("/users", require("./routes/users"));
app.use("/messages", require("./routes/messages"));
