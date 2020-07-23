const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please enter a text"],
  },

  amount: {
    type: Number,
    required: [true, "Please enter an amount"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
