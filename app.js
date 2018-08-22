require("dotenv").load();
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var port = process.env.port || 6000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

var app = express();

app.listen(port, ()=>{
    console.log("Server now running on port " +port);
});