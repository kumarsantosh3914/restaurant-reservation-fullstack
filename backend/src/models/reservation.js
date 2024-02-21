const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be of at least 3 Characters."],
      maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "First name must be of at least 3 Characters."],
      maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [3, "First name must be of at least 3 Characters."],
      maxLength: [30, "First name cannot exceed 30 Characters."],
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
