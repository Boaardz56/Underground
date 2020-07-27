/* jshint indent: 1 */
/***
 * Create a table called web
 */
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Webstore', {
		store_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		manager_staff_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			unique: true
		},
		address_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		store_name: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: "VidsRUs"
		}
	}, {
		sequelize,
		tableName: 'Webstore'
	});
};
