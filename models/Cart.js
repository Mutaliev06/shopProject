const mongoose = require("mongoose")

const Cart = mongoose.Schema({
  products: [
    {
      item: mongoose.Schema.ObjectId, ref: "Product"
    },
    {
      amount: Number
    }
  ],
  user: { type: mongoose.Schema.ObjectId, ref: "User"},
  amount: Number,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Cart", Cart)