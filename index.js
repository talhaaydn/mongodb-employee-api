const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Routes
var employee = require('./routes/employee');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', employee);

mongoose.connect('mongodb://localhost/employee', { useNewUrlParser: true })
  .then(() => console.log('Everythings OK :) MongoDB is working ...'))
  .catch(() => console.log('Error: MongoDB is not working !!!'));


app.listen(8080, () => {
    console.log(`Server listening on http://localhost:8080`);
});