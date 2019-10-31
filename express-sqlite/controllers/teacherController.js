class teacherController {
	static renderTeacher(req, res) {
		res.render('teachers');
	}

	static postTeacher(req, res) {
		res.send('Berhasil ke request post Teachers!');
	}

	static editTeacher(req, res) {
		//post request
		res.send('Berhasil ke request edit Teachers!');
	}

	//implement delete Teacher here
}

module.exports = teacherController;
