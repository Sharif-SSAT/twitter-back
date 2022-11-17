const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(require('./routes/index.js'));
mongoose.connect("mongodb+srv://Sharip:mongo-space-16@cluster0.e26yroz.mongodb.net/Twitter_back")
.then(() => {
    console.log('Успешно соеденить с сервером MongoDB')
})
.catch(() => {
    console.log('Ошибка при соединении с сервером VongoDB')
})
app.listen(5000, () => {
    console.log('Сервер успешно запущен')
});