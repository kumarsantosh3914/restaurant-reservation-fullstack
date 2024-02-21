const express = require("express");
const bodyParser = require("body-parser");

const connect = require("./config/database");
const reservationRouter = require("./routes/reservation-route");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.listen(3004, async () => {
  console.log("Server started");
  await connect();
  console.log("mongo DB connected");
});
