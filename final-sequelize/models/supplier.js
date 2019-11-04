'use strict';
module.exports = (sequelize, DataTypes) => {
	// const Supplier = sequelize.define('Supplier', {
	//   name: DataTypes.STRING,
	//   kota: DataTypes.STRING
	// }, {});
	// Supplier.associate = function(models) {
	//   // associations can be defined here
	// };
	// return Supplier;

	const Model = sequelize.Sequelize.Model;

	class Supplier extends Model {}

	Supplier.init(
		{
			name: DataTypes.STRING,
			kota: DataTypes.STRING
		},
		{ sequelize }
	);

	Supplier.associate = function(models) {
		// associations can be defined here
	};
	return Supplier;
};
