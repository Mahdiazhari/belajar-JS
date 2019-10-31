const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.renderStudents);

router.post('/input', studentController.postStudent);

router.post('/edit', studentController.editStudent);

module.exports = router;

/**
 * get /students
 *
 * app / -> index -> /students -> /
 * use / < app students < index / < student route
 */
