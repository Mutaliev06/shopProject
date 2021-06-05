const mongoose = require("mongoose")

const Cart = mongoose.Schema({
  products: [{
      item: {
       type: mongoose.Types.ObjectId, ref: "Product"
      },
      amount: {
        type: Number, default: 1
      }
  }
  ],
  user: { type: mongoose.Types.ObjectId, ref: "User"},
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Cart", Cart)