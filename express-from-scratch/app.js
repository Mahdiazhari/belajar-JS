'use strict';

const express = require('express');
let ejs = require('ejs');
let app = express();

//Set the View Engine
app.set('view engine', 'ejs');
//Set the Middleware
app.use(express.urlencoded({ extended: false })); //what for?
app.use(express.static('public')); //Serves resources from a public folder

let students = [];
let teachers = [
	{
		name: 'Mark',
		subject: 'Math'
	},
	{
		name: 'Ani',
		subject: 'Social'
	},
	{
		name: 'Pak Agus',
		subject: 'Sciences'
	}
];

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/students', function(req, res) {
	res.render('students.ejs', { students });
});

app.post('/students/input', function(req, res) {
	students.push({
		name: req.body.name,
		age: req.body.age
	});
	res.redirect('/students');
});

app.get('/teachers', function(req, res) {
	res.render('teachers.ejs', { teachers });
});

app.listen(3500);
