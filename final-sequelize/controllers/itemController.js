const Item = require('../models').Item;
class itemController {
	static renderItems(req, res) {
		Item.findAll()
			.then((doc) => {
				let arr = [];
				for (var i = 0; i < doc.length; i++) {
					var obj_item = {
						name: doc[i].dataValues.name,
						brand: doc[i].dataValues.kota,
						codeitem: doc[i].dataValues.codeitem,
						editLink: '/items/edit/:' + doc[i].dataValues.id,
						deleteLink: '/items/delete/:' + doc[i].dataValues.id
					};
					arr.push(obj_item);
				}
				res.render('items', { arr });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	//renders the add Suppliers webpage
	static renderAdd(req, res) {
		res.render('additems.ejs');
	}

	//adds an item into the DB
	static addItems(req, res) {
		Item.create({
			name: req.body.name,
			brand: req.body.brand,
			codeitem: req.body.codeitem
		})
			.then((newItem) => {
				res.redirect('/items');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static renderEdit(req, res) {
		// res.send('got into edit at ' + req.params.id);
		let id = req.params.id;
		// console.log(id);
		let link = '/items/edit/' + id;
		console.log(link);
		res.render('edititem', { link });
	}

	//edit Item based on a given id and name and kota parameters
	static editItem(req, res) {
		let idNum = parseInt(req.params.id.split('')[1]);
		console.log('idNum is ' + idNum);
		let obj = {
			name: req.body.name,
			brand: req.body.brand,
			codeitem: req.body.codeitem
		};
		Item.update(obj, {
			where: {
				id: idNum
			}
		})
			.then((data) => {
				console.log('succesfully updated Item');
				res.redirect('/items');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static deleteItem(req, res) {
		let idNum = parseInt(req.params.id.split('')[1]);
		Item.destroy({
			where: {
				id: idNum
			}
			// truncate: true /* this will ignore where and truncate the table instead */
		})
			.then((data) => {
				console.log('succesfully deleted Item');
				res.redirect('/items');
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

module.exports = itemController;
