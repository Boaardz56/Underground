/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rental', {
		rental_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		rental_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		inventory_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'inventory',
				},
				key: 'inventory_id'
			}
		},
		customer_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'customer',
				},
				key: 'customer_id'
			}
		},
		return_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		staff_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'staff',
				},
				key: 'staff_id'
			}
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'rental',
		hasTrigger: true
	});
};
