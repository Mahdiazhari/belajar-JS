const db = require('../db/db');
const Student = require('../models/student');

class studentController {
	//static method -> langsung masuk ke memory (global)
	//class method -> harus dibuat dulu instance nya

	static getAllStudents(cb) {
		db.all('SELECT * FROM students', function(err, studentsList) {
			if (err) {
				throw err;
			} else {
				console.log(studentsList);
				console.log('got students');
				cb(studentsList);
			}
		});
	}

	static renderStudents(req, res) {
		studentController.getAllStudents(function(list) {
			res.render('students.ejs', { list });
		});
	}

	static postStudent(req, res) {
		// res.send('Berhasil ke request post Students!');
		//add to database here?

		//Handling errors -> Nama harus diisi!
		//Habis di post/success kita res redirect

		db.run(
			`INSERT INTO students (name, age) VALUES ('${req.body.name}' ,'${req.body.age}')`,
			function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('Berhasil masukin data ke database');
					// studentController.getAllStudents(function(list) {
					// 	res.render('students.ejs', { list });
					// });

					//Redirect back to /students after succesfully posting/inserting a student
					res.redirect('/students');
				}
			}
		);
	}

	static editStudent(req, res) {
		//post request
		// res.send('Berhasil ke request edit Students!');
		console.log(req.body.editName);
		console.log(req.body.editAge);
		console.log(req.body.id);

		const query = `UPDATE students 
						SET (name,age) = ('${req.body.editName}', '${req.body.editAge}')
						WHERE id = 	${req.body.id}`;
		db.run(query, function(err) {
			if (err) {
				throw err;
			} else {
				console.log('Successfully updated student at id: ' + req.body.id);
				studentController.getAllStudents(function(studentsList) {
					res.render('students.ejs', { studentsList });
				});
			}
		});
	}
	//implement delete Student here
}

module.exports = studentController;
