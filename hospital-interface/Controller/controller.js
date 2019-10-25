const View = require('../View/view');
const Model = require('../Model/model');

class Controller {
	static getList() {
		Model.getList(function(err, instanceEmployees) {
			if (err) throw err;
			else {
				View.show(instanceEmployees);
			}
		});
	}
	static register(objRegister) {
		Model.getList((err, instanceEmployees) => {
			if (err) throw err;
			else {
				Model.add(objRegister, (newEmployee) => {
					instanceEmployees.push(newEmployee);
					Model.save(instanceEmployees, (err) => {
						if (err) throw err;
						else View.log('Register success !');
					});
				});
			}
		});
	}

	static delete(username) {
		Model.getList((err, instanceEmployees) => {
			if (err) throw err;
			else {
				Model.delete(username);
				console.log('Berhasil delete');
			}
		});
	}
}

module.exports = Controller;
