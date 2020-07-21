const express = require('express');

const numbersController = require('../controllers/numbers');

const router = express.Router();

router.post('/', numbersController.checkAndGetNumber);

module.exports = router;