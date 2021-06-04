const mongoose = require("mongoose")

const Cart = mongoose.Schema({
  products: { type: mongoose.Schema.ObjectId, ref: "Product"},
  user: { type: mongoose.Schema.ObjectId, ref: "User"},
  amount: Number,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Cart", Cart)