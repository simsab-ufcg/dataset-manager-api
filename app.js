require("dotenv").load();
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var router = require('./routes/api.route');
var port = process.env.port || 3000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

var app = express();

app.use(morgan('dev'));
app.use('/api', router);

app.listen(port, ()=>{
    console.log("Server now running on port " +port);
});

app.get('/', (req, res) => {
    res.send("Application works");
});