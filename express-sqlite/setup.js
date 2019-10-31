const db = require('./db/db');

let createStudents = `CREATE TABLE IF NOT EXISTS students
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
)`;

let createTeachers = `CREATE TABLE IF NOT EXISTS teachers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    subject TEXT
)`;

db.run(createStudents, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Table students created!');
	}
});

db.run(createTeachers, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Table teachers created!');
	}
});
