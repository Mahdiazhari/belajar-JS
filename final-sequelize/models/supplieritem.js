'use strict';
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;
	class SupplierItem extends Model {}
	SupplierItem.init(
		{
			SupplierId: DataTypes.INTEGER,
			ItemId: DataTypes.INTEGER,
			price: DataTypes.INTEGER
		},
		{ sequelize }
	);
	SupplierItem.associate = function(models) {
		// associations can be defined here
		SupplierItem.belongsToMany(models.Supplier, { foreignKey: 'SupplierId' });
		SupplierItem.belongsToMany(models.Item, { foreignKey: 'ItemId' });
	};

	return SupplierItem;
};
