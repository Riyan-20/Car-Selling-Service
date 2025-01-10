const Car = require("../models/Car");

exports.submitCar = async (req, res) => {
  const { carModel, price, phoneNumber, maxPictures, images } = req.body;
  const userEmail = req.user.email;

  try {
    const car = new Car({ carModel, price, phoneNumber, maxPictures, images, userEmail });
    await car.save();
    res.status(201).json({ success: true, message: "Car submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.viewSubmissions = async (req, res) => {
  try {
    const submissions = await Car.find({ userEmail: req.user.email });
    res.status(200).json({ success: true, submissions });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
