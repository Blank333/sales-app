const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Sales = mongoose.model("Sales", salesSchema);
modules.exports = Sales;
