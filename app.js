const express = require('express');
const app = express();
const path = require('path');

app.use(express.static ("public"));

app.listen(3000, () => {
    console.log("El servidor está corriendo en el puerto 3000")
})

app.get('/' , (rep, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register' , (rep, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login' , (rep, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})