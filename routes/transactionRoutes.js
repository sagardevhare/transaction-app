const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/transactions', transactionController.getTransactions);
router.get('/statistics', transactionController.getStatistics);
router.get('/barchart', transactionController.getBarChart);
router.get('/piechart', transactionController.getPieChart);
router.get('/alldata', transactionController.getAllData);

module.exports = router;
