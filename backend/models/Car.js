const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  carModel: { type: String, required: true },
  price: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  images: [String], // Array of image URLs
  maxPictures: { type: Number, required: true },
});

module.exports = mongoose.model("Car", carSchema);
