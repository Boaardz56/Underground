/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sales_by_film_category', {
		category: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		total_sales: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'sales_by_film_category'
	});
};
