const { Schema, model } = require('mongoose');
const schema = new Schema({
    name: String,
    login: String,
    password: String,
    createdAt: Date,
    updateAt: Date
})

module.exports = model('User', schema)