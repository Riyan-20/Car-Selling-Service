const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    phoneNumber: { type: String, required: true, length: 11 },
    maxPictures: { type: Number, required: true, min: 1, max: 10 },
    pictures: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
});

module.exports = mongoose.model('cars', carSchema);
