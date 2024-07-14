// backend/routes/seedRoutes.js
const express = require('express');
const { seedDatabase } = require('../controllers/seedController');
const router = require('./transactionRoutes');
const routes = express.Router();

router.get('/seed', seedDatabase);

module.exports = router;


