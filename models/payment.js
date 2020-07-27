/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment', {
		payment_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
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
		rental_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: {
					tableName: 'rental',
				},
				key: 'rental_id'
			}
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		payment_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'payment',
		hasTrigger: true
	});
};
