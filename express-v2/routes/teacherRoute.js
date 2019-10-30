const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.renderTeacher);

router.post('/input', teacherController.postTeacher);

router.post('/edit', teacherController.editTeacher);

module.exports = router;
