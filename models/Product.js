const mongoose = require("mongoose")

const Product = mongoose.Schema({
  title: String,
  category: { type: mongoose.Schema.ObjectId, ref: "Category"},
  brand: { type: mongoose.Schema.ObjectId, ref: "Brand"},
  price: Number,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Product", Product)