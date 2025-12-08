const transaction = require("../models/transaction");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = new transaction(req.body);
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};