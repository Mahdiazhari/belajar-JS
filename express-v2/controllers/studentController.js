class studentController {
	//static method -> langsung masuk ke memory (global)
	//class method -> harus dibuat dulu instance nya
	static renderStudents(req, res) {
		res.render('students');
		// res.send('Berhasil ke Students Render!');
	}

	static postStudent(req, res) {
		res.send('Berhasil ke request post Students!');
	}

	static editStudent(req, res) {
		//post request
		res.send('Berhasil ke request edit Students!');
	}
}

module.exports = studentController;
