const express = require('express');
const router = express.Router();
const studentRoute = require('./studentRoute');
const teacherRoute = require('./teacherRoute');

router.get('/', function render(req, res) {
	res.render('index');
});

router.use('/students', studentRoute);

router.use('/teachers', teacherRoute);

module.exports = router;
