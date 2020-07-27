/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer_list', {
		ID: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			defaultValue: 0
		},
		name: {
			type: DataTypes.STRING(91),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		'zip code': {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		country: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		notes: {
			type: DataTypes.STRING(6),
			allowNull: false,
			defaultValue: ""
		},
		SID: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'customer_list'
	});
};
