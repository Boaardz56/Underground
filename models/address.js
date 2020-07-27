/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('address', {
		address_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		address: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		address2: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		district: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		city_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'city',
				},
				key: 'city_id'
			}
		},
		postal_code: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		location: {
			type: DataTypes.GEOMETRY,
			allowNull: false
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'address'
	});
};
