/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category', {
		category_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'category'
	});
};
