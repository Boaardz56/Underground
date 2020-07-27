/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('city', {
		city_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		country_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'country',
				},
				key: 'country_id'
			}
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'city'
	});
};
