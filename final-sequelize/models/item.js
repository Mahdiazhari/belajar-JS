'use strict';
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;
	class Item extends Model {}
	Item.init(
		{
			name: DataTypes.STRING,
			brand: DataTypes.STRING,
			codeitem: {
				type: DataTypes.STRING,
				validate: {
					is: /(HP|SW|LP)\d{4}/,
					msg:
						'Code Item harus diawali dengan HP | SW | LP dan diikuti’ dengan 4 digit angka'
				}
			}
		},
		{ sequelize }
	);
	Item.associate = function(models) {
		// associations can be defined here
	};
	return Item;
};
