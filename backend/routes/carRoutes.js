const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, carController.createCar);
router.get('/list', carController.getAllCars);

module.exports = router;
