/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('store', {
		store_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		manager_staff_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'staff',
				},
				key: 'staff_id'
			},
			unique: true
		},
		address_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'address',
				},
				key: 'address_id'
			}
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
		tableName: 'store'
	});
};
