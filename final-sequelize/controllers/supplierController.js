const Supplier = require('../models').Supplier;
class supplierController {
	static renderSuppliers(req, res) {
		Supplier.findAll()
			.then((doc) => {
				let arr = [];
				for (var i = 0; i < doc.length; i++) {
					var obj_supplier = {
						name: doc[i].dataValues.name,
						kota: doc[i].dataValues.kota,
						editLink: '/suppliers/edit/:' + doc[i].dataValues.id,
						deleteLink: '/suppliers/delete/:' + doc[i].dataValues.id
					};
					arr.push(obj_supplier);
				}
				res.render('suppliers', { arr });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	//renders the add Suppliers webpage
	static renderAdd(req, res) {
		res.render('addsuppliers.ejs');
	}

	//adds a supplier into the DB
	static addSuppliers(req, res) {
		Supplier.create({
			name: req.body.name,
			kota: req.body.kota
		})
			.then((newSupplier) => {
				res.redirect('/suppliers');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static renderEdit(req, res) {
		// res.send('got into edit at ' + req.params.id);
		let id = req.params.id;
		// console.log(id);
		let link = '/suppliers/edit/' + id;
		console.log(link);
		res.render('editsupplier', { link });
	}

	//edit supplier based on a given id and name and kota parameters
	static editSupplier(req, res) {
		let idNum = parseInt(req.params.id.split('')[1]);
		console.log('idNum is ' + idNum);
		let obj = {
			name: req.body.name,
			kota: req.body.kota
		};
		Supplier.update(obj, {
			where: {
				id: idNum
			}
		})
			.then((data) => {
				console.log('succesfully updated Supplier');
				res.redirect('/suppliers');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static deleteSupplier(req, res) {
		let idNum = parseInt(req.params.id.split('')[1]);

		Supplier.destroy({
			where: {
				id: idNum
			}
			// truncate: true /* this will ignore where and truncate the table instead */
		})
			.then((data) => {
				console.log('succesfully deleted Supplier');
				res.redirect('/suppliers');
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

module.exports = supplierController;
