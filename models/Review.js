const { Schema, model } = require('mongoose');
const schema = new Schema({
    text: String,
    product: { type: Schema.Types.ObjectId, ref:"Product" },
    user: { type: Schema.Types.ObjectId, ref:"User" },
    createdAt: Date,
    updateAt: Date
})

module.exports = model('Review', schema)