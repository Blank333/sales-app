const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;

const salesSchema = new mongoose.Schema(
  {
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
    user: {
      type: ObjectID,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;
