const express = require("express");
const sendReservation = require("../controllers/reservation-controller");

const router = express.Router();

router.post("/send", sendReservation);

module.exports = router;
