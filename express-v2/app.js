'use strict';

const express = require('express');
// var studentController = require('./controllers/studentController');
// const teacherController = require('./controllers/teacherController');
let ejs = require('ejs');
let app = express();
const routes = require('./routes');

//set port
const PORT = 3500;

//Set the View Engine
app.set('view engine', 'ejs');

//Set the Middleware
app.use(express.urlencoded({ extended: false })); //Middleware, encodes urls?
app.use(express.static('public')); //Serves resources from a public folder
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
