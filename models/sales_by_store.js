/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sales_by_store', {
		store: {
			type: DataTypes.STRING(101),
			allowNull: false,
			defaultValue: ""
		},
		manager: {
			type: DataTypes.STRING(91),
			allowNull: false,
			defaultValue: ""
		},
		total_sales: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'sales_by_store'
	});
};
