const { Schema, model } = require('mongoose');
const schema = new Schema({
    text: String,
    product: { type: mongoose.Schema.Types.ObjectId, ref:"Product" },
    user: { type: mongoose.Schema.Types.ObjectId, ref:"User" },
    createdAt: Date,
    updateAt: Date
})

module.exports = model('Review', schema)