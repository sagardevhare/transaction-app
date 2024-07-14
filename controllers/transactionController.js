const Transaction = require('../models/Transaction');

const parseMonth = (month) => {
  const parsedMonth = parseInt(month, 10);
  if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) {
    throw new Error('Invalid month provided.');
  }
  return parsedMonth;
};

exports.getTransactions = async (req, res) => {
  try {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const parsedMonth = parseMonth(month);

    const regex = new RegExp(search, 'i');
    const dateStart = new Date(2023, parsedMonth - 1, 1);
    const dateEnd = new Date(2023, parsedMonth, 0);

    const query = {
      dateOfSale: { $gte: dateStart, $lte: dateEnd },
      $or: [{ title: regex }, { description: regex }]
    };

    // Only add price to query if it's a number
    if (!isNaN(parseFloat(search)) && isFinite(search)) {
      query.$or.push({ price: parseFloat(search) });
    }

    console.log('Query:', query);
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));

    console.log('Transactions:', transactions);
    res.json(transactions);
  } catch (error) {
    console.error('Error in getTransactions:', error.message);
    res.status(400).json({ error: error.message });
  }
};

// Define controller functions
exports.getTransactions = async (req, res) => {
  try {
    // Implementation for getTransactions
  } catch (error) {
    console.error('Error in getTransactions:', error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getStatistics = async (req, res) => {
  try {
    // Implementation for getStatistics
  } catch (error) {
    console.error('Error in getStatistics:', error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getBarChart = async (req, res) => {
  try {
    // Implementation for getBarChart
  } catch (error) {
    console.error('Error in getBarChart:', error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getPieChart = async (req, res) => {
  try {
    // Implementation for getPieChart
  } catch (error) {
    console.error('Error in getPieChart:', error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    // Implementation for getAllData
  } catch (error) {
    console.error('Error in getAllData:', error.message);
    res.status(400).json({ error: error.message });
  }
};

