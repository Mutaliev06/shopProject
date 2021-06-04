const { Schema, model } = require('mongoose');
const schema = new Schema({
    name: String,
    createdAt: Date,
    updateAt: Date
})

module.exports = model('Brand', schema)