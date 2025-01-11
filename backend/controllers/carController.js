const Car = require('../models/Car');

// Create Car Submission
exports.createCar = async (req, res) => {
    const { model, price, phoneNumber, maxPictures, pictures } = req.body;
    const userId = req.userId;  // Assuming user is authenticated and userId is available

    try {
        const car = new Car({
            model,
            price,
            phoneNumber,
            maxPictures,
            pictures,
            userId
        });

        await car.save();
        res.status(201).json({ message: 'Car submitted successfully', car });
    } catch (err) {
        res.status(500).json({ message: 'Error creating car submission' });
    }
};

// Get All Car Submissions
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().populate('userId', 'email');
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching car submissions' });
    }
};
