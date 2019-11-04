const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes'); //requires index.js in routes

//Set views
app.set('view engine', 'ejs');

//Set Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', routes);

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));
