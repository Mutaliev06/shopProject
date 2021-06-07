const mongoose = require("mongoose")

const Product = mongoose.Schema({
  title: String,
  category: { type: mongoose.Types.ObjectId, ref: "Category"},
  brand: { type: mongoose.Types.ObjectId, ref: "Brand"},
  price: Number,
  pathToView: String,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Product", Product)