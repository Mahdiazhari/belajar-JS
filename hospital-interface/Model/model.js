const fs = require('fs');
const Employee = require('./employee');
const Patient = require('./patient');

class Model {
	static getList(callback) {
		fs.readFile('./Model/employees.json', 'UTF-8', (err, data) => {
			if (err) {
				callback(err, null);
			} else {
				callback(
					null,
					JSON.parse(data).map((employee) => {
						return new Employee(
							employee.id,
							employee.username,
							employee.password,
							employee.role,
							employee.login
						);
					})
				);
			}
		});
	}

	static add(object, callback) {
		Model.getList((err, instanceEmployees) => {
			if (err) throw err;
			else {
				let newEmployee = null;
				if (instanceEmployees.length == 0) {
					newEmployee = new Employee(
						1,
						object.username,
						object.password,
						object.role,
						false
					);
					callback(newEmployee);
				} else {
					let id = instanceEmployees.length + 1;
					newEmployee = new Employee(
						id,
						object.username,
						object.password,
						object.role,
						false
					);
					callback(newEmployee);
				}
			}
		});
	}

	static save(instance, callback) {
		fs.writeFile(
			'./Model/employees.json',
			JSON.stringify(instance, null, 4),
			(err) => {
				if (err) throw err;
				else callback(null);
			}
		);
	}
}

module.exports = Model;
