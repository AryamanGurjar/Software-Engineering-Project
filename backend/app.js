const express = require('express');
const path = require("path");

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname + '/../register.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/appointment', function (req, res) {
    res.sendFile(path.join(__dirname + '/../appointment.html'));
    //__dirname : It will resolve to your project folder.
});


app.listen(8000,() =>
{
    console.log("Server Running at 8000");
    console.log(path.join(__dirname + '/../index.html'))
}) 