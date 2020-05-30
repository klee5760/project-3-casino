const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

var db

var configDB = require('./config/database.js');
var model = require('./model/model.js');

mongoose.connect(configDB.url, {useNewUrlParser: true , useUnifiedTopology: true},  (err, database) => {
    if (err) return console.log(err)
    db = database
    


    app.listen(PORT);
    console.log('The magic happens on port ' + PORT)
});