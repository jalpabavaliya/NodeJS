const express = require('express');
require('dotenv').config()
const app = express();

app.get('/' , (req , res) => {
    res.send("Welcome 123");
});

app.get('/login' , (req , res) => {
    res.send("Login");
});


app.listen(process.env.PORT);