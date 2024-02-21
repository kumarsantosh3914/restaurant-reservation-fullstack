const mongoose = require("mongoose");

const connet = async () => {
  await mongoose.connect("mongodb://localhost/resturant_reservation");
};

module.exports = connet;
