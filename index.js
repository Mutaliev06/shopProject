const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload")
const app = express();
const { url, port } = require('./config/index')
const router = require("./routes/index")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload())
app.use(router)

async function start () {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => {
            console.log('Сервер запущен...')
        })
    } catch (e) {
        console.log(e.message)
    }
}

start();